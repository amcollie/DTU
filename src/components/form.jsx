import { Fragment, useState } from 'react'
import { Formik, Form, FieldArray } from 'formik'
import { FaMinus, FaPlusCircle } from 'react-icons/fa'
import Swal from 'sweetalert2'
import setPath from 'set-value'

import * as Fields from './fields'
import fallback from '@lib/utils/fallback'
import getSchema from '@lib/transforms/create-schema'
import normalizeField from '@lib/transforms/normalize-field'

function ValidatedForm ({ fields, onSubmit, ...props }) {
  const [message, setMessage] = useState('')
  const [id] = useState('__validated-form__')
  const nf = fields.map(normalizeField)

  let classes = 'validated-form '

  if (props.stacked !== false) {
    classes += ' stacked '
  }

  if (props.className) {
    classes += props.className
  }

  const form = f => {
    const footer = typeof props.children == 'function'
      ? props.children(f)
      : props.children ?? (
        <footer className='flex justify-end mt-4'>
          <button
            type='submit'
            className='primary w-2/5 max-w-[200px]'
          >Submit</button>
        </footer>
      )

    return (
      <Form id={id} onSubmit={f.handleSubmit} className={classes}>
        {getFields(nf, f.values)}
        {footer}
      </Form>
    )
  }

  const handleSubmission = async (values, formik) => {
    if (formik.isSubmitting) return

    if (props.handleConfirmation !== false) {
      const { isConfirmed } = await Swal.fire({
        icon: 'info',
        title: 'Confirm Submission',
        text: 'Are you sure you want to submit this form with the entered values?',
        showCancelButton: true,
        confirmButtonText: 'Submit',
      })

      if (!isConfirmed) return
    }

    if (props.handleFormData !== false && nf.some(f => /^file/.test(f.as) && !f.hide?.(values, formik))) {
      const form = new FormData()

      for (let [k, v] of Object.entries(values)) {
        form.append(k, v)
      }

      const res = await onSubmit(form, formik, values)
      if (props.handleMessages !== false) {
        if (typeof res == 'string') setMessage(res)
        else setMessage('')
      }

      return
    }

    const res = await onSubmit(values, formik, values)
    if (props.handleMessages !== false) {
      if (typeof res == 'string') setMessage(res)
      else setMessage('')
    }
  }

  return (
    <Fragment>
      <div
        className='error-message-container'
        data-hide={!message}
        children={message}
      />
      <Formik
        onSubmit={handleSubmission}
        validationSchema={getSchema(nf)}
        initialValues={getInitialValues(nf, props.defaults)}
      >
        {formik => (
          <Fragment>
            {props.header?.(formik, id)}
            {form(formik)}
          </Fragment>
        )}
      </Formik>
    </Fragment>
  )
}

function getInitialValues (fields = [], defaults) {
  return fields.reduce((defs, f) => {
    if (Array.isArray(f)) return getInitialValues(f, defs)
    if (f.name in defs || f.heading) return defs

    if (f.type == 'array' && f.min) {
      const initial = getInitialValues(f.fields)
      setPath(defs, f.name, Array(f.min).fill(initial))
      return defs
    }

    setPath(defs, f.name, fallback(f.default, '', false))
    return defs
  }, defaults ?? {})
}

function getFields (fields = [], values = {}, parent, index) {
  return fields.map((field, i) => {
    if (field.hide?.(values, index) || field.hide === true) return null

    if (Array.isArray(field)) {
      const list = getFields(field, values, parent, index)
      return <div className='input--multi' key={i + 1}>{list}</div>
    }

    const f = { ...field }

    if (f.type == 'array') {
      return (
        <FieldArray
          key={f.name}
          name={f.name}
          render={getArrayFields(f, values)}
        />
      )
    }

    if (typeof index == 'number') f.name = `${parent}.${index}.${f.name}`

    if (f.heading)
      return <Fields.Heading {...f} key={f.heading} />
    if (f.info)
      return <Fields.Info {...f} key={f.info} />
    if (f.warning)
      return <Fields.Warning {...f} key={f.warning} />
    if (f.spacer)
      return <Fields.Spacer key={i} />
    if (f.options || f.as == 'select')
      return <Fields.Select {...f} key={f.name} />

    switch (f.as) {
      case 'tel:intl':
        return <Fields.IntlPhone {...f} key={f.name} />
      case 'textarea':
        return <Fields.Textarea {...f} key={f.name} />
      case 'password':
        return <Fields.Password {...f} key={f.name} />
      case 'switch':
        return <Fields.Switch {...f} key={f.name} />
      case 'checkbox':
        return <Fields.Checkbox {...f} key={f.name} />
      case 'select:boolean':
        return <Fields.YesOrNo {...f} key={f.name} />
      case 'file':
      case 'file:pdf':
      case 'file:image':
        return <Fields.File {...f} key={f.name} />
      default:
        return <Fields.Input {...f} key={f.name} />
    }
  }).filter(f => f)
}

function getArrayFields (field, values) {
  const nf = field.fields.map(normalizeField)
  const initial = getInitialValues(nf)

  return ({ push, insert, remove }) => {
    let rows = null
    const numRows = values[field.name]?.length ?? 0

    if (numRows) {
      rows = values[field.name]
        .map((v, i) => getFields(nf, values, field.name, i))
        .map((f, i) => (
          <Fragment key={f.key ?? i}>
            <div className='input subheading'>
              <span>{field.countLabel} #{i + 1}</span>
              <span
                className='btn px-1 py-0'
                onClick={() => remove(i)}
                data-hide={numRows <= field.min}
              >
                <FaMinus size={24} />
              </span>
            </div>
            {f}
          </Fragment>
        ))
    }

    return (
      <div className='input list' key={field.name}>
        <div className='input heading'>{field.label}</div>
        {rows}
        <span
          className='btn'
          onClick={() => push(initial)}
          data-hide={numRows >= field.max}
        >
          <FaPlusCircle size={24} />
          <span>Add</span>
        </span>
      </div>
    )
  }
}

export default ValidatedForm

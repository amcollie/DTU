import { useState, createElement, Fragment, useCallback, isValidElement, cloneElement } from 'react'
import { useField, useFormikContext } from 'formik'
import { FaCheck, FaFilePdf, FaEye, FaEyeSlash } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { VscWarning, VscInfo } from 'react-icons/vsc'
import { useDropzone } from 'react-dropzone'

const icons = {
  info: VscInfo,
  warning: VscWarning,
}

const withError = (cls, err) => `${cls} ${err ? 'has-error' : ''}`
const withAsterisk = (label, keep = true) => (
  <Fragment>
    {label}
    {keep ? <span className='text-red-600'>&nbsp;*</span> : null}
  </Fragment>
)

const markup = (props, meta, label, input) => {
  const displayError = meta.touched && meta.error

  const error = displayError ? (
    <div className='error'>{meta.error}</div>
  ) : null

  const hint = isValidElement(props.hint)
    ? <div className='hint'>{props.hint}</div>
    : props.hint ? (
      <span
        className='hint'
        dangerouslySetInnerHTML={{ __html: props.hint }}
      />
    ) : null

  return (
    <div className={withError('input', displayError)} key={props.name}>
      <label htmlFor={props.id || props.name} data-hide={!label}>
        {withAsterisk(label, props.required)}
      </label>
      {input}
      {hint}
      {error}
    </div>
  )
}

const Note = ({ type, message }) => (
  <aside key={message} className={`note ${type}`}>
    {createElement(icons[type], { size: 18 })}
    <span>{message}</span>
  </aside>
)

export const Spacer = () => <Note type='info' message='' />
export const Info = ({ info }) => <Note type='info' message={info} />
export const Warning = ({ warning }) => <Note type='warning' message={warning} />

export function Heading ({ heading, level, ...props }) {
  return createElement(level ?? 'h3', {
    className: 'heading ' + (props.className ?? '')
  }, heading)
}

export function Input ({ label, attributes, ...props }) {
  const [field, meta] = useField(props)

  const attrs = {
    type: props.as ?? 'text'
  }

  // Automatically set known/comon input modes depending on `as`
  if (props.as == 'tel') attrs.inputMode = 'tel'
  if (props.as == 'email') attrs.inputMode = 'email'

  if (props.type == 'number') {
    attrs.type = 'number'
    attrs.inputMode = 'decimal'
  }

  if (typeof attributes == 'object') Object.assign(attrs, attributes)

  return markup(props, meta, label, (
    <input {...field} {...attrs} />
  ))
}

export function File ({ label, attributes, accept, ...props }) {
  const [field, meta, helpers] = useField(props)
  const [file, setFile] = useState('')
  const [type, setType] = useState('')
  const attrs = {}

  if (typeof attributes == 'object') {
    Object.assign(attrs, attributes)
  }

  if (props.as == 'file:pdf') {
    attrs.accept = 'application/pdf'
    props.hint = props.hint ?? 'Accepts: PDF'
    props.dropzoneText = props.dropzoneText ?? 'Select or Drag PDF Here'
  } else if (props.as == 'file:image') {
    attrs.accept = attrs.accept ?? 'image/*'
    props.hint = props.hint ?? 'Accepts: JPG/PNG/GIF'
    props.dropzoneText = props.dropzoneText ?? 'Select or Drag Image Here'
  }

  const onDrop = useCallback(files => {
    if (!files?.length) return
    const [file] = files
    const reader = new FileReader()

    reader.onload = () => {
      setFile(reader.result)
      setType(/^image\//.test(file.type) ? 'image' : 'file')
      helpers.setValue(file)
    }

    reader.readAsDataURL(file)
  })
  
  const clear = () => {
    helpers.setValue('')
    setFile('')
    setType(null)
  }

  const drop = useDropzone({
    onDrop,
    accept,
    maxFiles: props.multiple ? (props.max ?? 10) : 1,
    noClick: true,
    noKeyboard: true,
  })

  let content = null

  if (type == 'image') {
    content = (
      <Fragment>
        <img src={file} alt='upload preview' />
        <div className='filename'>
          <span>{field.value.name}</span>
        </div>
        <span className='clear' onClick={clear}>
          <AiFillCloseCircle size={24} />
        </span>
      </Fragment>
    )
  } else if (type == 'file') {
    content = (
      <Fragment>
        <FaFilePdf size={32} />
        <span>{field.value.name}</span>
        <AiFillCloseCircle size={24} onClick={clear} />
      </Fragment>
    )
  } else {
    content = (
      <Fragment>
        {
          drop.isDragActive
            ? <p>Drop</p>
            : <p>{props.dropzoneText ?? 'Select or Drag File Here'}</p>
        }
        <span className='btn primary mt-4' onClick={drop.open}>
          Select A File
        </span>
      </Fragment>
    )
  }

  return markup(props, meta, label, (
    <div
      className='form-file'
      {...drop.getRootProps()}
      data-type={type || undefined}
    >
      <input
        type='file'
        value={file?.name ?? ''}
        multiple={props.multiple ?? undefined}
        {...drop.getInputProps()}
        {...attrs}
      />
      {content}
    </div>
  ))
}

export function Password ({ label, attributes, ...props }) {
  const [field, meta] = useField(props)
  const [show, setShow] = useState(false)

  return markup(props, meta, label, (
    <Fragment>
      <input
        type={show ? 'text' : 'password'}
        {...field}
        {...attributes}
      />
      {
        createElement(show ? FaEyeSlash : FaEye, {
          size: 20,
          className: 'absolute right-3 top-10',
          onClick: () => setShow(!show),
        })
      }
    </Fragment>
  ))
}

export function Select ({ label, attributes, options, ...props }) {
  const [field, meta] = useField(props)
  const { values } = useFormikContext()
  const opts = getOptions(options, values)

  if (typeof opts == 'string') {
    return markup(props, meta, label, (
      <select {...field} {...attributes} disabled>
        <option value=''>{opts}</option>
      </select>
    ))
  }

  return markup(props, meta, label, (
    <select {...field} {...attributes}>
      <option value=''>(Please select an option)</option>
      {opts}
    </select>
  ))
}

export function YesOrNo (props) {
  const options = {
    'Yes': true,
    'No': false
  }

  return Select({ ...props, options })
}

export function Textarea ({ label, attributes, ...props }) {
  const [field, meta] = useField(props)

  return markup(props, meta, label, (
    <textarea {...field} {...attributes}></textarea>
  ))
}

export const Switch = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const displayError = meta.touched && meta.error
  const classes = withError('input mt-2', displayError)
  const error = displayError ? (
    <div className='error'>{meta.error}</div>
  ) : null

  const toggle = () => {
    helpers.setValue(!field.value)
  }

  return (
    <div className={classes} key={props.name}>
      <label className='form-switch' htmlFor={field.name} onClick={toggle}>
        <input type='checkbox' {...field} />
        <span className='form-switch__slider'/>
        <span className='form-switch__label'>{label}</span>
      </label>
      {error}
    </div>
  )
}

export const Checkbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const displayError = meta.touched && meta.error
  const classes = withError('input mt-2', displayError)
  const error = displayError ? (
    <div className='error'>{meta.error}</div>
  ) : null

  const toggle = () => {
    helpers.setValue(!field.value)
  }

  return (
    <div className={classes} key={props.name}>
      <label className='form-checkbox' htmlFor={field.name} onClick={toggle}>
        <input type='checkbox' {...field} />
        <span className='form-checkbox__check'>
          <FaCheck size={16} fill='#FFF' />
        </span>
        <span className='form-checkbox__label'>{label}</span>
      </label>
      {error}
    </div>
  )
}

function getOptions (options, values) {
  const opts = typeof options == 'function' ? options(values) : options
  if (!opts) return null
  if (typeof opts == 'string') return opts

  if (Array.isArray(opts)) {
    return opts.map(opt => {
      const value = opt.value ?? opt
      const label = opt.label ?? opt?.initialCaps()

      return <option key={value} value={value}>{label}</option>
    })
  }

  return Object.entries(opts).map(([label, value]) => (
    <option key={value} value={value}>{label}</option>
  ))
}
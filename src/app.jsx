import { Fragment, useEffect } from 'react'
import Sweetalert from 'sweetalert2'
import JsBarcode from 'jsbarcode'
import withReact from 'sweetalert2-react-content'

import ValidatedForm from '@components/form'

import fields from '@/app.fields'
import { FaEnvelope, FaPrint } from 'react-icons/fa'
import { GrSend } from 'react-icons/gr'

const Swal = withReact(Sweetalert)

const ImmigrationForm = () => {
  useEffect(() => {
    const help = document.getElementById('open-help')

    const openHelpPopup = async () => {
      await Swal.fire({
        icon: 'question',
        title: 'Need Help?',
        confirmButtonColor: '#17BDD1',
      })
    }

    help?.addEventListener('click', openHelpPopup)
    return () => help?.removeEventListener('click', openHelpPopup)
  })

  const emailRecord = (email, id, printAfter = false) => async () => {
    const body = new FormData()
    body.append('email', email)
    body.append('record_id', id)

    const res = await fetch('/send_email.php', {
      method: 'POST',
      body
    })
    
    if (!res.ok) {
      Swal.showValidationMessage('Failed to send email')
      return
    }
    
    await Swal.fire(
      'Success',
      'Email successfully sent. Please make sure to also check your spanm and junk folders',
      'success'
    )

    if (printAfter) window.print()
  }

  const submit = async values => {
    const body = Object.entries({
      ...values,
      input_passenger_reg_amount: 1 + (values.travellers?.length ?? 0),
      input_local_city: `${values.input_local_island} - ${values.input_local_city}`
    }).reduce((form, [k, v]) => {
      if (Array.isArray(v)) return form
      form.append(k, typeof v == 'string' ? v?.toUpperCase() : v)
      return form
    }, new FormData())

    if (values.additional_members) {
      const { length } = values.travel_members
      for (let i = 0; i < length; i++) {
        body.append(`input${i + 2}_passport_id`, values.travel_members[i].passport_id?.toUpperCase())
        body.append(`input${i + 2}_number_of_visits`, values.travel_members[i].number_of_visits)
        body.append(`input${i + 2}_mobile`, values.travel_members[i].mobile)
        body.append(`input${i + 2}_email_address`, values.travel_members[i].email_address?.toUpperCase())
        body.append(`input${i + 2}_first_name`, values.travel_members[i].first_name?.toUpperCase())
        body.append(`input${i + 2}_middle_name`, values.travel_members[i].middle_name?.toUpperCase())
        body.append(`input${i + 2}_last_name`, values.travel_members[i].last_name?.toUpperCase())
        body.append(`input${i + 2}_gender`, values.travel_members[i].gender?.toUpperCase())
        body.append(`input${i + 2}_country_of_birth`, values.travel_members[i].country_of_birth?.toUpperCase())
        body.append(`input${i + 2}_nationality`, values.travel_members[i].nationality?.toUpperCase())
        body.append(`input${i + 2}_date_of_birth`, values.travel_members[i].date_of_birth?.toUpperCase())
        body.append(`input${i + 2}_document_type`, values.travel_members[i].document_type?.toUpperCase())
        body.append(`input${i + 2}_immigration_status`, values.travel_members[i].immigration_status?.toUpperCase())
        body.append(`input${i + 2}_expiration_date`, values.travel_members[i].expiration_date?.toUpperCase())
        body.append(`input${i + 2}_passport_upload`, values.travel_members[i].passport_upload)
      }
    }

    for (let [k, v] of body.entries()) {
      console.log(k, v)
    }

    const res = await fetch('/add_record.php', {
      body,
      method: 'POST',
    })

    if (res.ok) {
      const html = await res.text()
      if (/call fail/i.test(html)) {
        await Swal.fire(
          'Error',
          'We were unable to submit your application',
          'error'
        )

        return
      }

      const [, rid] = html.match(/<h3 style=['"]color:\s?black;['"]>(.+)<\/h3>/)

      await Swal.fire({
        icon: 'success',
        width: 800,
        title: 'Thank You',
        confirmButtonText: 'Close',
        confirmButtonColor: '#17BDD1',
        customClass: {
          popup: 'thank-you-popup',
          confirmButton: 'print:hidden',
          icon: 'print:hidden',
        },
        html: (
          <Fragment>
            <div className='flex flex-col items-center mb-4 print:hidden'>
              <p className='mb-4'>
                Your information has been successfully submitted.
                <br />
                Please see below your Application ID, which you will have to present
                to an Immigration Officer upon arrival in The Bahamas.
              </p>
              <div className='flex justify-center space-x-6'>
                <button className='btn primary space-x-2' onClick={window.print}>
                  <FaPrint />
                  <span>Save/Print</span>
                </button>
                <button
                  className='btn primary space-x-2'
                  onClick={emailRecord(values.input_email_address, rid)}
                >
                  <FaEnvelope />
                  <span>Email</span>
                </button>
                <button
                  className='btn primary space-x-2'
                  onClick={emailRecord(values.input_email_address, rid, true)}
                >
                  <GrSend fill='#FFF' />
                  <span>Save & Send</span>
                </button>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Fragment>
        ),
      })
    }
  }

  return (
    <ValidatedForm
      fields={fields}
      onSubmit={submit}
      handleFormData={false}
      handleConfirmation={false}
    >
      <footer>
        <button name='submit' type='submit'>Submit</button>
      </footer>
    </ValidatedForm>
  )
}

export default ImmigrationForm

import { Fragment } from 'react'

import ValidatedForm from '@components/form'

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
]

const ImmigrationForm = () => {
  const fields = [
    '::Flight Details',
    [
      {
        name: 'input_airline_name',
        label: 'Airline',
        options: [
          'Bahamasair',
          'Jet Blue',
          'American Airlines',
          'Silver Airways',
          'British Airways',
        ],
      },
      'input_flight_number:Flight Number',
      {
        name: 'input_country_of_embarcation',
        label: 'Port of Embarkation',
        options: [
          'JFK - New York Airport',
          'MIA - Miami Airport',
          'FLL - Hollywood Airport',
        ]
      },
      {
        name: 'input_port_of_embarcation',
        label: 'Country of Embarkation',
        options: countries
      },
      {
        name: 'input_date_of_arrival',
        label: 'Intended Date of Arrival',
        as: 'date',
      },
      {
        name: 'input_date_of_departure',
        label: 'Intended Date of Departure',
        as: 'date',
      },
    ],
    '::Personal Details',
    'i::Please make sure that your name matches what is in your passport',
    [
      'input_first_name:First Name',
      'input_middle_name:Middle Name:optional',
      'input_last_name:Last Name',
    ],
    [
      {
        name: 'input_date_of_birth',
        label: 'Date of Birth',
        as: 'date',
      },
      {
        name: 'input_gender',
        label: 'Gender',
        options: ['Male', 'Female']
      },
      {
        name: 'input_country_of_birth',
        label: 'Country of Birth',
        options: countries,
      },
      {
        name: 'input_nationality',
        label: 'Nationality',
        options: countries,
      }
    ],
    '::Passport Details',
    [
      'input_passport_id:Passport Number',
      {
        name: 'input_expiration_date',
        label: 'Expiration Date',
        as: 'date'
      },
    ],
    {
      name: 'input_passport_upload',
      label: 'Upload',
      dropzoneText: 'Please upload the data page of your passport',
      as: 'file:image'
    },
    {
      name: 'additional_members',
      as: 'switch',
      label: 'I am travelling with family members',
      // default: true,
    },
    {
      name: 'travellers',
      type: 'array',
      label: 'Family Members',
      countLabel: 'Member',
      hide: f => !f.additional_members,
      min: 1,
      max: 3,
      fields: [
        [
          'first_name',
          'middle_name:Middle Name:optional',
          'last_name',
        ],
        {
          name: 'vaccinated',
          label: 'Is this person fully vaccinated?',
          as: 'select:boolean',
        },
      ]
    }
  ]

  const submit = async (form, values) => {
    const familySize = 1 + values.travellers.length


  }

  return (
    <ValidatedForm fields={fields} onSubmit={submit}>
      <footer>
        <button type='submit'>Submit</button>
      </footer>
    </ValidatedForm>
  )
}

export default ImmigrationForm

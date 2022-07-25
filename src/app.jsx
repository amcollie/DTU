import { Fragment } from 'react'

import ValidatedForm from '@components/form'
import ARRIVAL_PORTS from '@data/ports-of-arrival'
import COUNTRIES from '@data/countries'

const notTravellingForWork = f => f.input_trip_purpose != 'Employment'

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
        options: COUNTRIES
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

    '::Address Details',
    {
      name: 'input_address',
      label: 'Address Line 1',
    },
    {
      name: 'input_address_cont',
      label: 'Address Line #2 (Optional)',
      required: false,
    },
    [
      {
        name: 'input_city_town',
        label: 'City',
      },
      {
        name: 'input_state_province',
        label: 'State/Province',
      },
      {
        name: 'input_zip_postal_code',
        label: 'Zip Code',
        hint: 'If you do not have one, use 00000',
      }
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
        options: COUNTRIES,
      },
      {
        name: 'input_nationality',
        label: 'Nationality',
        options: COUNTRIES,
      }
    ],
    {
      name: 'input_number_of_visits',
      label: 'How many times have you visited The Bahamas in the last 6 months?',
      type: 'number',
      attributes: {
        min: 0,
      }
    },

    '::Contact Details',
    {
      name: 'input_email_address',
      label: 'Email Address',
      as: 'email'
    },
    [
      {
        name: 'input_mobile',
        label: 'Mobile Phone #',
        as: 'tel',
      },
      {
        name: 'input_home',
        label: 'Home Phone #',
        as: 'tel',
      },
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
      label: 'Passport Page',
      dropzoneText: 'Please upload the data page of your passport',
      as: 'file:image',
      hint: <strong>Accepts .jpg images only</strong>,
      accept: {
        'image/*': ['.jpg', 'jpeg'],
      },
      attributes: {
        accept: 'image/jpeg'
      }
    },

    '::Where Will You Stay?',
    [
      {
        name: 'input_trip_purpose',
        label: 'Reason For Visiting',
        options: [
          'Boating',
          'Business',
          'Casino',
          'Conference',
          'Diving',
          'Fishing',
          'Employment',
          'Honeymoon',
          'Private Flying',
          'Vacation',
          'Visiting Friends And Relatives',
          'Wedding',
          'Other',
        ]
      },
      {
        name: 'input_type_of_accomodation',
        label: 'Type of Accomodation',
        options: [
          {
            label: 'Resort/Hotel',
            value: 'Hotel'
          },
          'Rented Aptartment/Villa',
          'Own Property',
          'Time Share',
          'Friends/Relatives',
          'Private Boat',
        ]
      },
    ],
    {
      name: 'input_hotel_name',
      label: 'Hotel Name',
      hide: values => values.input_type_of_accomodation != 'Hotel'
    },
    [
      {
        name: 'input_local_island',
        label: 'Island',
        options: Object.keys(ARRIVAL_PORTS)
          .reduce((o, k) => ({ ...o, [k]: k }), {}),
      },
      {
        name: 'input_local_city',
        label: 'City / Settlement',
        options: values => ARRIVAL_PORTS[values.input_local_island]
          ?? 'Please select an island island first',
      }
    ],
    {
      name: 'input_local_address',
      label: 'Street Address',
      hide: values => values.input_type_of_accomodation == 'Hotel'
    },

    {
      heading: 'Sponsor Details',
      hide: notTravellingForWork
    },
    [
      {
        name: 'input_sponsor_name',
        label: 'First Name',
        hide: notTravellingForWork
      },
      {
        name: 'input_sponsor_last_name',
        label: 'Last Name',
        hide: notTravellingForWork
      },
      {
        name: 'input_sponsor_phone_number',
        label: 'Phone Number',
        as: 'tel',
        hide: notTravellingForWork
      },
    ],

    '::Emergency Contact',
    'i::This information will only be in case of an extenuating eemrgency',
    [
      'input_emergency_contact_firstname:First Name',
      'input_emergency_contact_lastname:Last Name',
      {
        name: 'input_emergency_contact_relationship',
        label: 'Relationship',
        options: [
          'Spouse / Significant Other',
          'Parent',
          'Grandparent',
          'Child',
          'Friend',
          'Other',
        ]
      },
      {
        name: 'input_emergency_contact_phone',
        label: 'Contact Phone #',
        as: 'tel',
      }
    ],

    {
      name: 'additional_members',
      as: 'switch',
      label: 'I am travelling with family members',
    },
    {
      name: 'member_details',
      type: 'array',
      label: 'Family Members',
      countLabel: 'Member',
      hide: values => !values.additional_members,
      min: 1,
      max: 3,
      fields: [
        [
          'first_name',
          'middle_name:Middle Name:optional',
          'last_name',
        ],
        {
          name: 'email',
          label: 'Email Address',
          as: 'email'
        },
        [
          {
            name: 'dob',
            label: 'Date of Birth',
            as: 'date',
          },
          {
            name: 'sex',
            label: 'Gender',
            options: ['Male', 'Female']
          },
          {
            name: 'country_of_birth',
            label: 'Country of Birth',
            options: COUNTRIES,
          },
          {
            name: 'nationality',
            label: 'Nationality',
            options: COUNTRIES,
          }
        ],
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
          label: 'Passport Page',
          dropzoneText: 'Please upload the data page of your passport',
          as: 'file:image'
        },
        // {
        //   name: 'vaccinated',
        //   label: 'Is this person fully vaccinated?',
        //   as: 'select:boolean',
        // },
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

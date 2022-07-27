import { Fragment } from 'react'

import ValidatedForm from '@components/form'
import ARRIVAL_PORTS from '@data/ports-of-arrival'
import COUNTRIES from '@data/countries'

const countries = COUNTRIES.map(c => c.name)

const notTravellingForWork = f => f.input_trip_purpose != 'Employment'

const ImmigrationForm = () => {
  const fields = [
    '::Personal Details',
    'i::Please make sure that your name matches what is in your passport',
    [
      'input_first_name:First Name',
      'input_middle_name:Middle Name(s):optional',
      'input_last_name:Surname',
    ],
    [
      {
        name: 'input_date_of_birth',
        label: 'Date of Birth',
        as: 'date',
      },
      {
        name: 'input_gender',
        label: 'Sex',
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

    '::Contact Details',
    {
      name: 'input_email_address',
      label: 'Email Address',
      as: 'email'
    },
    [
      {
        name: 'input_mobile',
        label: 'Primary Contact Number',
        as: 'tel',
      },
      {
        name: 'input_home',
        label: 'Alternate Contact Number',
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

    '::Home Addres',
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
        name: 'input_country',
        label: 'Country',
        options: countries,
      },
      {
        name: 'input_zip_postal_code',
        label: 'Zip Code',
        hint: 'If you do not have one, use 00000',
      }
    ],

    '::Travel Information',
    {
      name: 'input_number_of_visits',
      label: 'How many times have you visited The Bahamas in the last 6 months?',
      type: 'number',
      attributes: {
        min: 0,
      }
    },
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
    [
      {
        name: 'input_arrival_port',
        label: 'Port of Arrival',
        options: [
          `NAS - Lynden Pindling Int'l Airport`,
          `FPO - Freeport Int'l Airport`,
        ],
      },
      {
        name: 'input_mode_of_travel',
        label: 'Mode of Travel',
        options: ['Air', 'Sea'],
        default: 'Air',
      },
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
        hide: f => f.mode_of_travel == 'Sea'
      },
      {
        name: 'input_flight_number',
        label: 'Flight Number',
        hide: f => f.mode_of_travel == 'Sea'
      },
      {
        name: 'input_vessel_name',
        label: 'Vessel Name',
        hide: f => f.mode_of_travel == 'Air'
      },
      {
        name: 'input_vessel_number',
        label: 'Vessel Number',
        hide: f => f.mode_of_travel == 'Air'
      },
      's::',
      {
        name: 'input_country_of_embarcation',
        label: 'Country of Embarkation',
        options: countries,
      },
      {
        name: 'input_port_of_embarcation',
        label: 'Port of Embarkation',
        options: [
          'JFK - New York Airport',
          'MIA - Miami Airport',
          'FLL - Hollywood Airport',
        ]
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

    '::Accomodations',
    [
      {
        name: 'input_type_of_accomodation',
        label: 'Type of Accomodation',
        options: [
          {
            label: 'Resort/Hotel',
            value: 'Hotel'
          },
          'Rented Apartment/Villa',
          'Own Property',
          'Time Share',
          'Friends/Relatives',
          'Private Boat',
        ]
      },
    ],
    [
      {
        name: 'input_hotel_name',
        label: 'Hotel Name',
        hide: values => values.input_type_of_accomodation != 'Hotel'
      },
      {
        name: 'input_hotel_city',
        label: 'Hotel City',
        hide: values => values.input_type_of_accomodation != 'Hotel'
      },
    ],
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
    'i::This information will only be in case of an extenuating emergency, and is entirely optional',
    {
      name: 'has_emergency_contact',
      as: 'switch',
      label: 'I have an emergency contact',
    },
    [
      {
        name: 'input_emergency_contact_firstname',
        hide: values => !values.has_emergency_contact,
        label: 'First Name',
        required: false,
      },
      {
        name: 'input_emergency_contact_lastname',
        hide: values => !values.has_emergency_contact,
        label: 'Last Name',
        required: false,
      },
      {
        name: 'input_emergency_contact_relationship',
        hide: values => !values.has_emergency_contact,
        label: 'Relationship',
        required: false,
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
        hide: values => !values.has_emergency_contact,
        label: 'Contact Phone #',
        required: false,
        as: 'tel',
      }
    ],
    '::Travel Members',
    `
      i::If you are travelling with family members that live in the same
      household as you, you may enter up to 3 additional persons below.
    `,
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
            label: 'Sex',
            options: ['Male', 'Female']
          },
          {
            name: 'country_of_birth',
            label: 'Country of Birth',
            options: countries,
          },
          {
            name: 'nationality',
            label: 'Nationality',
            options: countries,
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

  const submit = async values => {
    const payload = Object.entries({
      ...values,
      input_passenger_reg_amount: 1 + (values.travellers?.length ?? 0),
      input_local_city: `${values.input_local_island} - ${values.input_local_city}`
    }).reduce((form, [k, v]) => {
      if (Array.isArray(v)) return form
      form.append(k, typeof v == 'string' ? v.toUpperCase() : v)
      return form
    }, new FormData())

    const { length } = values.travel_members
    for (let i = 0; i < length; i++) {
      payload.append(`input${i + 2}_passport_id`, values.travel_members[i].passport_id.toUpperCase())
      payload.append(`input${i + 2}_number_of_visits`, values.travel_members[i].number_of_visits)
      payload.append(`input${i + 2}_mobile`, values.travel_members[i].mobile)
      payload.append(`input${i + 2}_email_address`, values.travel_members[i].email_address.toUpperCase())
      payload.append(`input${i + 2}_first_name`, values.travel_members[i].first_name.toUpperCase()) 
      payload.append(`input${i + 2}_middle_name`, values.travel_members[i].middle_name.toUpperCase())
      payload.append(`input${i + 2}_last_name`, values.travel_members[i].last_name.toUpperCase())
      payload.append(`input${i + 2}_gender`, values.travel_members[i].gender.toUpperCase())
      payload.append(`input${i + 2}_country_of_birth`, values.travel_members[i].country_of_birth.toUpperCase())
      payload.append(`input${i + 2}_nationality`, values.travel_members[i].nationality.toUpperCase())
      payload.append(`input${i + 2}_date_of_birth`, values.travel_members[i].date_of_birth.toUpperCase())
      payload.append(`input${i + 2}_document_type`, values.travel_members[i].document_type.toUpperCase())
      payload.append(`input${i + 2}_immigration_status`, values.travel_members[i].immigration_status.toUpperCase())
      payload.append(`input${i + 2}_expiration_date`, values.travel_members[i].expiration_date.toUpperCase())
      payload.append(`input${i + 2}_passport_upload`, values.travel_members[i].passport_upload)
    }

    delete payload.travel_members
  }

  return (
    <ValidatedForm fields={fields} onSubmit={submit}>
      <footer>
        <button name='submit' type='submit'>Submit</button>
      </footer>
    </ValidatedForm>
  )
}

export default ImmigrationForm

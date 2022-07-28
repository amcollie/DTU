import ARRIVAL_PORTS from '@data/ports.arrivals'
import { FOREIGN_AIRPORTS, FOREIGN_SEAPORTS } from '@data/ports.departures'
import COUNTRIES from '@data/countries'


const countries = COUNTRIES.map(c => c.name)

const PERSONAL = [
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
]

const CONTACT = [
  '::Contact Details',
  {
    name: 'input_email_address',
    label: 'Email Address',
    as: 'email'
  },
  [
    {
      name: 'input_mobile',
      label: 'Mobile Phone Number',
      as: 'tel:intl',
      required: false,
    },
    {
      name: 'input_home',
      label: 'Home Phone Number',
      as: 'tel:intl',
      required: false,
    },
    {
      name: 'input_work',
      label: 'Work Phone Number',
      as: 'tel:intl',
      required: false,
    },
  ],
]

const PASSPORT = [
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
    required: false,
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
]

const HOME_ADDRESS = [
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
]

const TRAVEL_INFO = [
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
      disableNull: true,
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
      show: f => f.input_mode_of_travel == 'Air',
      validators: ['when:input_mode_of_travel:is:Air']
    },
    {
      name: 'input_flight_number',
      label: 'Flight Number',
      show: f => f.input_mode_of_travel == 'Air',
      validators: ['when:input_mode_of_travel:is:Air']
    },
    {
      name: 'input_vessel_name',
      label: 'Vessel Name',
      show: f => f.input_mode_of_travel == 'Sea',
      validators: ['when:input_mode_of_travel:is:Sea']
    },
    {
      name: 'input_vessel_number',
      label: 'Vessel Number',
      show: f => f.input_mode_of_travel == 'Sea',
      validators: ['when:input_mode_of_travel:is:Sea']
    },
    's::',
    {
      name: 'input_country_of_embarcation',
      label: 'Country of Embarcation',
      options: countries,
    },
    {
      name: 'input_port_of_embarcation',
      label: 'Port of Embarcation',
      options: v => v.input_mode_of_travel == 'Air'
        ? FOREIGN_AIRPORTS
        : FOREIGN_SEAPORTS
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
]

const ACCOMODATIONS = [
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
      show: values => values.input_type_of_accomodation == 'Hotel',
      validators: ['when:input_type_of_accomodation:is:Hotel']
    },
    {
      name: 'input_hotel_city',
      label: 'Hotel City',
      show: values => values.input_type_of_accomodation == 'Hotel',
      validators: ['when:input_type_of_accomodation:is:Hotel'],
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
    hide: values => values.input_type_of_accomodation == 'Hotel',
    validators: ['when:input_type_of_accomodation:is-not:Hotel'],
  },
]

const SPONSOR = [
  {
    heading: 'Sponsor Details',
    show: f => f.input_trip_purpose == 'Employment',
    validators: ['when:input_trip_purpose:is:Employment']
  },
  [
    {
      name: 'input_sponsor_name',
      label: 'First Name',
      show: f => f.input_trip_purpose == 'Employment',
      validators: ['when:input_trip_purpose:is:Employment']
    },
    {
      name: 'input_sponsor_last_name',
      label: 'Last Name',
      show: f => f.input_trip_purpose == 'Employment',
      validators: ['when:input_trip_purpose:is:Employment']
    },
    {
      name: 'input_sponsor_phone_number',
      label: 'Phone Number',
      as: 'tel:intl',
      show: f => f.input_trip_purpose == 'Employment',
      validators: ['when:input_trip_purpose:is:Employment']
    },
  ],
]

const EMERGENCY_CONTACT = [
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
      label: 'First Name',
      show: values => !!values.has_emergency_contact,
      validators: ['when:has_emergency_contact:is-true']
    },
    {
      name: 'input_emergency_contact_lastname',
      label: 'Last Name',
      show: values => !!values.has_emergency_contact,
      validators: ['when:has_emergency_contact:is-true']
    },
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
      ],
      show: values => !!values.has_emergency_contact,
      validators: ['when:has_emergency_contact:is-true']
    },
    {
      name: 'input_emergency_contact_phone',
      label: 'Contact Phone #',
      as: 'tel:intl',
      show: values => !!values.has_emergency_contact,
      validators: ['when:has_emergency_contact:is-true']
    }
  ],
]

const TRAVEL_MEMBERS = [
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
    name: 'travel_members',
    type: 'array',
    label: 'Family Members',
    countLabel: 'Member',
    required: false,
    show: values => !!values.additional_members,
    validators: ['when:additional_members:is-true'],
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
        required: false,
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
      // {
      //   name: 'vaccinated',
      //   label: 'Is this person fully vaccinated?',
      //   as: 'select:boolean',
      // },
    ]
  }
]

const fields = [
  ...PERSONAL,
  ...CONTACT,
  ...PASSPORT,
  ...HOME_ADDRESS,
  ...TRAVEL_INFO,
  ...ACCOMODATIONS,
  ...SPONSOR,
  ...EMERGENCY_CONTACT,
  ...TRAVEL_MEMBERS
]

export default fields

import React from 'react'
import ReactDOM from 'react-dom/client'

import ImmigrationForm from '@/app'
import LanguagePicker from '@components/language-select'

import '@styles/globals.css'
import '@utils/string-extensions'
import 'react-intl-tel-input/dist/main.css'

ReactDOM.createRoot(document.getElementById('reactroot')).render(
  <React.StrictMode>
    <ImmigrationForm />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('language-select-container'))
  .render(<LanguagePicker />)

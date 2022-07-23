import React from 'react'
import ReactDOM from 'react-dom/client'

import ImmigrationForm from '@/app'
import '@styles/globals.css'
import '@utils/string-extensions'

ReactDOM.createRoot(document.getElementById('reactroot')).render(
  <React.StrictMode>
    <ImmigrationForm />
  </React.StrictMode>
)

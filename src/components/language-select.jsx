import { useEffect, useState } from 'react'

const LanguageSelect = () => {
  const [lang, setLang] = useState('en')

  const flags = {
    
  }

  return (
    <aside className='language-picker'>
      <span>Please select a language:</span>
      <select onChange={ev => setLang(ev.target.value)}>
        <option value='en'>English</option>
      </select>
      <span className='fi fi-bs'/>
    </aside>
  )
}

export default LanguageSelect

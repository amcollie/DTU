import { useEffect, useState } from 'react'

const LanguageSelect = () => {
  const [lang, setLang] = useState('en')

  useEffect(() => {

  }, [lang])

  return (
    <aside className='language-picker'>
      <span>Please select a language:</span>
      <select onChange={ev => setLang(ev.target.value)}>
        <option value='en'>English</option>
      </select>
    </aside>
  )
}

export default LanguageSelect

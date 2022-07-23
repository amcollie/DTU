import { CONTACT_EMAIL, CONTACT_PHONE } from '@lib/constants'
import { MdOutlinePhone, MdOutlineEmail } from 'react-icons/md'

export const ContactPhone = () => {
  const link = `tel:${CONTACT_PHONE.replace(/[^\d]/g, '')}`

  return (
    <a href={link} className='contact-links__link'>
      <MdOutlinePhone size={16} />
      <span>{CONTACT_PHONE}</span>
    </a>
  )
}

export const ContactEmail = () => {
  const link = `mailto:${CONTACT_EMAIL}`

  return (
    <a href={link} className='contact-links__link'>
      <MdOutlineEmail size={16} />
      <span>{CONTACT_EMAIL}</span>
    </a>
  )
}

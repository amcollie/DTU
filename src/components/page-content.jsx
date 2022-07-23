import { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { FaEdit, FaPlus } from 'react-icons/fa'

const icons = {
  add: <FaPlus />,
  edit: <FaEdit />,
}

const PageContent = ({ title, action, children }) => {
  // const [scrolled, setScrolled] = useState(undefined)

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     console.log(entry)
  //     setScrolled(!entry.isIntersecting || undefined)
  //   }, {
  //     root: document.body,
  //     rootMargin: '0px',
  //     threshold: 1.0,
  //   })

  //   const container = document.querySelector('main.page-content > header')
  //   observer.observe(container)

  //   return () => observer.disconnect()
  // }, [])

  let actionButton = null

  if (action?.href) {
    actionButton = (
      <Link href={action.href}>
        <a className='btn space-x-2'>
          {icons[action.icon] ?? null}
          <span>{action.label}</span>
        </a>
      </Link>
    )
  } else if (action?.fn) {
    actionButton = (
      <button className='btn' onClick={(action.fn)}>
        {icons[action.icon] ?? null}
        {action.label}
      </button>
    )
  }

  return (
    <Fragment>
      <header>
        <section>
          <h2>{title}</h2>
          {actionButton}
        </section>
      </header>
      <section>
        {children}
      </section>
    </Fragment>
  )
}

export default PageContent

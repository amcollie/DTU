import Head from 'next/head'

const PageTitle = ({ children }) => (
  <Head>
    <title>{children} - Baha Traveller</title>
  </Head>
)

export default PageTitle

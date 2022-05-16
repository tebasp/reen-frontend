import Hero from '@/components/Hero'
import Head from 'next/head'

import DefaultLayout from '../layouts/DefaultLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>REEN</title>
        <meta name="REEN" content="REEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  )
}

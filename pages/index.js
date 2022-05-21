import Head from 'next/head'
import CallToAction from '@/components/CallToAction'
import Features from '@/components/Features'
import Hero from '@/components/Hero'

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
      <Features />
      <CallToAction />
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

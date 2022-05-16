import Head from 'next/head'

import DefaultLayout from '../layouts/DefaultLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>REEN</title>
        <meta name="REEN" content="REEN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-neutral-900 text-3xl text-center">
          REEN home page
        </h1>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  )
}

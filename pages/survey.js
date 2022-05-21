import DefaultLayout from 'layouts/DefaultLayout'

export default function Survey() {
  return <h1>The suvey page</h1>
}

Survey.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  )
}

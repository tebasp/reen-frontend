import DefaultLayout from 'layouts/DefaultLayout'

export default function Results() {
  return <h1>The Results page</h1>
}

Results.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  )
}

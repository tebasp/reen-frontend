import { useState } from 'react'
import DefaultLayout from 'layouts/DefaultLayout'
import Surveys from '@/components/Surveys'

const questionInitialState = [{ id: 1, value: 0 }]

export default function Survey() {
  const [surveyResults, setSurveyResults] = useState(questionInitialState)

  return (
    <div className="px-1 sm:px-4">
      <h1 className="font-bold text-gray-600 text-2xl text-center mt-8">
        Encuesta sobre la{' '}
        <span className="text-secondary-500">Responsabilidad Social</span>
      </h1>
      <Surveys results={surveyResults} setResults={setSurveyResults} />
    </div>
  )
}

Survey.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      <div>{page}</div>
    </DefaultLayout>
  )
}

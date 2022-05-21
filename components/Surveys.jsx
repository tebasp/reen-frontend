import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const initialState = [
  {
    id: 1,
    title: 'Pregunta 1',
    disable: false,
  },
  {
    id: 2,
    title: 'Pregunta 2',
    disable: true,
  },
  {
    id: 3,
    title: 'Pregunta 3',
    disable: true,
  },
  {
    id: 4,
    title: 'Pregunta 4',
    disable: true,
  },
  {
    id: 5,
    title: 'Pregunta 5',
    disable: true,
  },
  {
    id: 6,
    title: 'Pregunta 6',
    disable: true,
  },
  {
    id: 7,
    title: 'Pregunta 7',
    disable: true,
  },
]

export default function Surveys({ results, setResults }) {
  const [categories, setCategories] = useState(initialState)
  const [selectedIndex, setSelectedIndex] = useState(0)

  function responseQuestion(id) {
    const category = categories.map((category) => {
      if (category.id === id + 1) {
        category.disable = false
      }
      return category
    })

    setCategories(category)
    setSelectedIndex(id)
    setQuestionValue(id, 5)
  }

  function setQuestionValue(id, value) {
    const questionResult = results.find((result) => {
      if (result.id === id) {
        result.value = value
        return result
      }
    })

    if (!questionResult) {
      setResults([...results, { id, value }])
      return
    } else {
      const questionResultIndex = results.findIndex(
        (findResult) => findResult == questionResult
      )
      const newResults = results.slice(0)
      newResults[questionResultIndex] = questionResult
      console.log('questionResultIndex', questionResultIndex)
      setResults(newResults)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-16 sm:px-0">
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex flex-wrap sm:flex-nowrap space-x-1 rounded-xl bg-primary-700 p-1">
          {categories.map((category) => (
            <Tab
              key={category.id}
              disabled={category.disable}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            the panel
            <button
              className="block py-2 px-3 rounded bg-primary-400 text-white"
              onClick={() => responseQuestion(1)}
            >
              Next
            </button>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white p-3',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            )}
          >
            the panel 2
            <button
              className="block py-2 px-3 rounded bg-primary-400 text-white"
              onClick={() => responseQuestion(2)}
            >
              Next
            </button>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

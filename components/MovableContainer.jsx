import { useState, useEffect } from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import MovableItem from '@/components/MovableItem'
import MovableColumn from '@/components/MovableColumn'

export default function MovableContainer({ tasks }) {
  const [items, setItems] = useState(tasks)
  const [windowWidth, setWindowWidth] = useState(null)
  const isMobile = windowWidth < 600

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex]

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState]

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem)

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0])

        return coppiedStateArray
      })
    }
  }

  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ))
  }

  useEffect(() => {
    const setMobile = window.innerWidth < 600
    setWindowWidth(setMobile)
  }, [])

  return (
    <div className="container">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <MovableColumn title={'Do it'} className="column do-it-column">
          {returnItemsForColumn('Do it')}
        </MovableColumn>
      </DndProvider>
    </div>
  )
}

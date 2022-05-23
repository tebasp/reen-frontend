import { useDrop } from 'react-dnd'

export default function MovableColumn({ children, className, title }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'Do it',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // Override monitor.canDrop() function
    // canDrop: (item) => {
    //   const { currentColumnName } = item
    //   return (
    //     currentColumnName === title
    //     currentColumnName === title ||
    //     (currentColumnName === DO_IT && title === IN_PROGRESS) ||
    //     (currentColumnName === IN_PROGRESS &&
    //       (title === DO_IT || title === AWAITING_REVIEW)) ||
    //     (currentColumnName === AWAITING_REVIEW &&
    //       (title === IN_PROGRESS || title === DONE)) ||
    //     (currentColumnName === DONE && title === AWAITING_REVIEW)
    //   )
    // },
  })

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return 'rgb(188,251,255)'
      } else if (!canDrop) {
        return 'rgb(255,188,188)'
      }
    } else {
      return ''
    }
  }

  return (
    <div
      ref={drop}
      className={className}
      // style={{ backgroundColor: getBackgroundColor() }}
    >
      <p>{title}</p>
      {children}
    </div>
  )
}

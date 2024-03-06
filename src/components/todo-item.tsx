import styles from './todoItem.module.css'
import { useDispatch } from 'react-redux'
import { todoActions } from '../store/index'

const TodoItem: React.FC<{ text: string, id: string, isCompleted: boolean }> =
({ text, id, isCompleted }) => {
  const dispatch = useDispatch()

  const changeStatus: () => void = () => {
    dispatch(todoActions.switchTodoStatus(id))
  }

  return (
    <li className={`${styles.item} ${isCompleted ? styles.completed : ''}`}>
      <span onClick={changeStatus}>{text}</span>
    </li>
  )
}

export default TodoItem

import styles from './todosFilter.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'

interface TodosFilterProp {
  handleFilter: (event: React.MouseEvent<HTMLSpanElement>) => void
  filter: string
}

const TodosFilter: React.FC<TodosFilterProp> =
({ handleFilter, filter }) => {
  const todos = useSelector((state: RootState) => state.todos)
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.filter}>
      <button
        onClick={handleFilter}
        className={filter === 'all' ? styles.selected : undefined}
      >
        All
      </button>
      <button
        onClick={handleFilter}
        className={filter.includes('completed') ? styles.selected : undefined}
      >
        Completed ({completedTodosCount})
      </button>
      <button
        onClick={handleFilter}
        className={filter.includes('current') ? styles.selected : undefined}
      >
        Current ({todos.length - completedTodosCount})
      </button>
    </div>
  )
}

export default TodosFilter

import styles from './todosFilter.module.css'

interface TodosFilterProp {
  handleFilter: (event: React.MouseEvent<HTMLSpanElement>) => void
}

const TodosFilter: React.FC<TodosFilterProp> = ({ handleFilter }) => {
  return (
    <div className={styles.filter}>
      <button onClick = {handleFilter}>All</button>
      <button onClick = {handleFilter}>Completed</button>
      <button onClick = {handleFilter}>Current</button>
    </div>
  )
}

export default TodosFilter

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'

import styles from './todos.module.css'
import TodoItem from './todo-item'
import TodosFilter from './todos-filter'

import Todo from '../models/todo'

const Todos: React.FC = () => {
  const [filter, setFilter] = useState<string>('all')
  const todos = useSelector((state: RootState) => state.todos)

  const handleFilter: (event: React.MouseEvent<HTMLSpanElement>) => void =
  (event) => {
    const text = event.currentTarget?.textContent?.toLowerCase()
    setFilter(text || 'All')
    console.log(text)
  }

  let filteredTodos

  if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.isCompleted)
  } else if (filter === 'current') {
    filteredTodos = todos.filter((todo) => !todo.isCompleted)
  } else {
    filteredTodos = todos
  }

  return <>
    {todos.length > 0 && <TodosFilter handleFilter={handleFilter} />}
    <ul className={styles.todos}>
      {filteredTodos.map((todo: Todo) => <TodoItem
        key={todo.id}
        text={todo.text}
        isCompleted={todo.isCompleted}
        id={todo.id}
      />)}
    </ul>
  </>
}

export default Todos

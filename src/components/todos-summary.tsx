import React from 'react'
import styles from './todosSummary.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'

const TodosSummary: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos)
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.summary}>
      {todos.length > 0 &&
        <>
          <p>
            Completed: <span>{completedTodosCount}</span>
          </p>
          <p>
            Uncompleted: <span>{todos.length - completedTodosCount}</span>
          </p>
        </>
      }
    </div>
  )
}

export default TodosSummary

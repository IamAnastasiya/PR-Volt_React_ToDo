import { useState } from 'react'
import { useDispatch } from 'react-redux'

import styles from './newTodo.module.css'
import { generateUniqueId } from '../helpers/helpers'
import { todoActions } from '../store/index'

const NewTodo: React.FC = () => {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void =
  (event) => {
    setError('')
    setText(event.target.value)

    if (text.length > 40) {
      setError('long')
    }
  }

  const submitHandler: (event: React.FormEvent) => void =
  (event: React.FormEvent) => {
    event.preventDefault()
    if (error) {
      return
    }

    if (text.trim().length === 0) {
      setError('short')
      return
    }

    const newTodo = {
      'id': generateUniqueId(),
      text,
      'isCompleted': false,
    }

    dispatch(todoActions.addTodo(newTodo))
    setText('')
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        type='text'
        id='text'
        placeholder='Add new todo here'
        value={text}
        onChange={handleTextChange}
      />
      <button>Add Todo</button>
      {error && <p className={styles.error}>Your todo text is too {error}</p>}
    </form>
  )
}

export default NewTodo

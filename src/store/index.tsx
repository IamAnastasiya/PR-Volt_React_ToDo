import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import Todo from '../models/todo'

const initialState: Todo[] = []

const todoSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    addTodo(state, action: PayloadAction<Todo>) {
      state.push(action.payload)
    },
    switchTodoStatus(state, action: PayloadAction<string>) {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, 'isCompleted': !todo.isCompleted }
        }
        return todo
      })
    },
  },
})

const store = configureStore({
  'reducer': { 'todos': todoSlice.reducer },
})

export type RootState = ReturnType<typeof store.getState>
export const todoActions = todoSlice.actions
export default store

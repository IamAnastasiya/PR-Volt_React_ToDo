import './app.css'
import Todos from './components/todos'
import NewTodo from './components/new-todo'

const App: React.FC = () => {
  return (
    <div className="todos-wrapper">
      <NewTodo />
      <Todos />
    </div>
  )
}

export default App

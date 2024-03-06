import './app.css'
import Todos from './components/todos'
import NewTodo from './components/new-todo'
import TodosSummary from './components/todos-summary'

const App: React.FC = () => {
  return <>
    <div className="todos-wrapper">
      <NewTodo />
      <Todos />
    </div>
    <TodosSummary />
  </>
}

export default App

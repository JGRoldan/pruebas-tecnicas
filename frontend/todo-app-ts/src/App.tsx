import { useState } from "react"
import { Todos } from "./componentes/Todos"

const mockTodos = [
  { 
    id: 1,
    title: 'todo1',
    done: true,
  },
  {
    id: 2,
    title: 'todo2',
    done: false,
  },
  {
    id: 3,
    title: 'todo3',
    done: false,
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
  )
}

export default App

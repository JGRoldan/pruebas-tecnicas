import { useState } from "react"
import { Todos } from "./componentes/Todos"

const mockTodos = [
  { 
    id: '1',
    title: 'todo1',
    done: true,
  },
  {
    id: '2',
    title: 'todo2',
    done: false,
  },
  {
    id: '3',
    title: 'todo3',
    done: false,
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App

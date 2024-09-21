import { useState } from "react"
import { Todos } from "./componentes/Todos"
import { type TodoCompleted, type TodoId } from "./types"

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

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleDone = ({ id, done}: TodoCompleted): void =>{
    const newTodos = todos.map(todo =>{
      if(todo.id === id){
        return{
          ...todo,
          done
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
        onToggleDone={handleDone}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}

export default App

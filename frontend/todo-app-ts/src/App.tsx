import { useState } from "react"
import { Todos } from "./componentes/Todos"
import { FilterValue, TodoTitle, type TodoCompleted, type TodoId } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./componentes/Footer"
import { Header } from "./componentes/Header"

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompleted = (): void =>{
    const newTodos = todos.filter(todo => !todo.done)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.done).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if(filterSelected === TODO_FILTERS.ACTIVE)return !todo.done
    if(filterSelected === TODO_FILTERS.COMPLETED)return todo.done
    return true
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      done: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos 
        onToggleDone={handleDone}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveCompleted}
      />
    </div>
  )
}

export default App

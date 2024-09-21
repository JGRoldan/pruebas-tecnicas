import { type TodoId, type ListOfTodos, type TodoCompleted } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({id}: TodoId) => void
    onToggleDone: ({id, done}: TodoCompleted) => void
}

//React.FC funcional component, recibe un tipo de props y devuelve un JSX.Element
//React.FC<Props> es un tipo generico que recibe un tipo de props.
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleDone }) => {
    return ( 
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={`${todo.done ? 'completed': ''}`}>
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        done={todo.done}
                        onRemoveTodo={onRemoveTodo}
                        onToggleDone={onToggleDone}
                    />
                </li>
            ))}
        </ul>
    )
}

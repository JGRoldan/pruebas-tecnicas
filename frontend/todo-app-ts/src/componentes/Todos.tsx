import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
    onRemoveTodo: (id: string) => void
}

//React.FC funcional component, recibe un tipo de props y devuelve un JSX.Element
//React.FC<Props> es un tipo generico que recibe un tipo de props.
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
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
                    />
                </li>
            ))}
        </ul>
    )
}

import { type ListOfTodos } from "../types"

interface Props {
    todos: ListOfTodos
}

//React.FC funcional component, recibe un tipo de props y devuelve un JSX.Element
//React.FC<Props> es un tipo generico que recibe un tipo de props.
export const Todos: React.FC<Props> = ({ todos }) => {
    return ( 
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className={`${todo.done ? 'completed': ''}`}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}

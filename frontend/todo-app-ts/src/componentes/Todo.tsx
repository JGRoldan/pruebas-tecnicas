import { type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<Props> = ({ id, title, done, onRemoveTodo }) =>{
    return(
        <div className="view">
            <input 
                type="checkbox"
                className="toggle"
                checked={done}
                onChange={()=>{}}                
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>onRemoveTodo(id)}    
            />
        </div>
    )
}
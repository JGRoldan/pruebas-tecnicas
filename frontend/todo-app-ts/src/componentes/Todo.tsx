import { type TodoCompleted, type TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
    onToggleDone: ({id, done}: TodoCompleted) => void
    onRemoveTodo: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, done, onRemoveTodo, onToggleDone }) =>{
    
    const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>):void => {
        e.preventDefault();
        onToggleDone({
            id,
            done:e.target.checked
        })
    }

    return(
        <div className="view">
            <input 
                type="checkbox"
                className="toggle"
                checked={done}
                onChange={handleChangeCheckBox}                
            />
            <label>{title}</label>
            <button 
                className="destroy"
                onClick={()=>onRemoveTodo({id})}    
            />
        </div>
    )
}
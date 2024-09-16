import { type Todo as TodoType } from "../types"

//Como tiene los mismos tipos de datos => reutilizo 
type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, done }) =>{
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
                onClick={()=>{}}    
            />
        </div>
    )
}
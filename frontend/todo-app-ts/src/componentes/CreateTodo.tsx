import { useState } from "react"
import { TodoTitle } from "../types"

interface Props {
    saveTodo: ({title}: TodoTitle) => void
}

export const CreateTodo: React.FC<Props> = ({saveTodo}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputValue.trim()) return
        saveTodo({title: inputValue})
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="new-todo"
                placeholder="¿Qué necesitas hacer?"
                value={inputValue}
                onChange={handleChange}
                autoFocus
            />
        </form>
    )
}
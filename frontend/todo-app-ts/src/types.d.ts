export interface Todo {
    id: string
    title: string
    done: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoDone = Pick<Todo, 'done'>
export type TodoCompleted = Pick<Todo, 'id' | 'done'>

//type ListOfTodos = Array<Todo>
export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

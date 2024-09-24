import { useState } from "react";
import { type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: TodoType[];
  setCompleted: (id: string, completed: boolean) => void;
  setTitle: (params: Omit<TodoType, "done">) => void;
  removeTodo: (id: string) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  setCompleted,
  setTitle,
  removeTodo,
}) => {
  const [isEditing, setIsEditing] = useState("");

  return (
    <ul className="todo-list">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id);
          }}
          className={`
            ${todo.done ? "completed" : ""}
            ${isEditing === todo.id ? "editing" : ""}
          `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.done}
            setCompleted={setCompleted}
            setTitle={setTitle}
            removeTodo={removeTodo}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </li>
      ))}
    </ul>
  );
};

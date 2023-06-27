import React from 'react'
type TodoItemProps = {
    id: string,
    title: string,
    complete: ConstrainBoolean
}


function TodoItem({ id, title, complete}: TodoItemProps) {

  function handleDelete(id: string) {
    console.log(id)
  }

    return (
        <li className="flex gap-1 items-center">
          <input
            id={id}
            type="checkbox"
            className="cursor-pointer peer"
            // defaultChecked={complete}
            // onChange={e => toggleTodo(id, e.target.checked)}
            onClick={() => handleDelete(id)}
          />
          <label
            htmlFor={id}
            className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
          >
            {title}
          </label>
        </li>
      )
}

export default TodoItem
import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle}) => {
  return (
	  <li
		  key={todo.id}
		  className="list-group-item">
		  <div>
			  <span className='me-3'>{index + 1}.</span>
			  <span
				  onClick={() => handleToggle(todo.id)}
				  className={`${todo.done && 'complete'} item-desc`}
			  >{todo.desc}</span>
		  </div>
		  <button
			  className='btn btn-danger mx-4'
			  onClick={() => { handleDelete(todo.id) }}
		  >Borrar</button>
	  </li>
  )
}

import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos = [], handleDelete, handleToggle}) => {
  return (
	  <ul className='list-group list-group-flush'>
		  {
			  todos.map((todo, i) => {
				  return (<TodoListItem
					  key={todo.id}
					  todo={todo}
					  index={i}
					  handleDelete={handleDelete}
					  handleToggle={handleToggle}
				  />)
				//   --Este lo cambiamos por TodoListItem y le pasamos todo, index, handleDelete y handleToggle--
				// 	  <li
				//   	key = { todo.id }
				//   	className = "list-group-item" >
				// 			<div>
				// 				<span className='me-3'>{i + 1}.</span>
				// 				<span
				// 					onClick={() => handleToggle(todo.id)}
				// 					className={`${todo.done && 'complete'} item-desc`}
				// 				>{todo.desc}</span>
				// 			</div>
				// 			<button
				// 				className='btn btn-danger mx-4'
				// 				onClick={() => { handleDelete(todo.id)}}
				// 			>Borrar</button>
				// 		</li>
			  })
		  }
	  </ul>
  )
}

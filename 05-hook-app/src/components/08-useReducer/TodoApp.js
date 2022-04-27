import React, { useEffect, useReducer } from 'react'
import './examples.css'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { FormAddTodo } from './FormAddTodo'

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init)//1. llamar reducer con hook useReducer

	// const [{desc}, handleInputChange, reset] = useForm({ --- Movimos el stado del formulario al componente formulario
	// 	desc: ''
	// })

	useEffect(() => { //Creamos un useEffect para que cuanto cambien los todos se cargue algo al localStorage
	  localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])
	

	// const handleSubmit = (e) => { ---- Lo movimos al componente FormAddTodo
	// 	e.preventDefault();
	// 	if (desc.trim().length <= 1) {
	// 		return;
	// 	}
	// 	const newTodo = { //2. crear objeto a agregar en este caso
	// 		id: todos.length + 1,
	// 		desc: desc,
	// 		done: false
	// 	}

	// 	// const addTodoItem = { //3. crear acción con type y payload
	// 	// 	type: 'add',
	// 	// 	payload: newTodo
	// 	// }

	// 	dispatch(addTodoItem) //4. enviar acción a todoReducer
	// 	reset()
	// }

	const handleDelete = (id) => {
		const deleteTodoItem = {
			type: 'delete',
			payload: id
		}

		dispatch(deleteTodoItem)
	}

	const handleAdd = (newTodo) => {
		const addTodoItem = { //3. crear acción con type y payload
			type: 'add',
			payload: newTodo
		}

		dispatch(addTodoItem)
	}
	
	const handleToggle = (id) => {
		const toggleTodoItem = {
			type: 'toggle',
			payload: id
		}
		dispatch(toggleTodoItem)
	}

  return (
	  <div>
		  <h1>TodoApp({todos.length})</h1>
		  <hr />
		  <div className="row">
			  <div className="col-7">
				  <h3>Todo List</h3>
				  <hr />
				  <TodoList
					  todos={todos}
					  handleDelete={handleDelete}
					  handleToggle={handleToggle}
				  />
				  {/* Cambiamos por componente TodoList y le debemos pasar todos, handleDelete y handleToggle*/}
				  {/* <ul className='list-group list-group-flush'>
					  {
						  todos.map((todo, i) => (
						  --Revisar componente TodoList para ver que hacemos con el <li>...</li>--
						  ))
					  }
				  </ul> */}
			  </div>
			  <div className="col">
					<h3>Agregar Item</h3>
				  <hr />
				  <FormAddTodo
					  todos={todos}
					  handleAdd={handleAdd}
				  />
				  {/* <form action="" onSubmit={handleSubmit}>
					  <input
						  type="text"
						  name='desc'
						  className='form-control'
						  placeholder='Nuevo item'
						  autoComplete='off'
					  	  value={desc}
						  onChange={handleInputChange}
					  />
					  <button
						  type='submit'
						  className='btn btn-outline-primary mt-2 col-12'

					  >
						  Agregar
					  </button>
				  </form> */}
			  </div>
		  </div>
	</div>
  )
}

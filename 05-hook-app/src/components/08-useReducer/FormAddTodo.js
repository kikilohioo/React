import React from 'react'
import { useForm } from '../../hooks/useForm/useForm'

export const FormAddTodo = ({ handleAdd, todos }) => {
	const [{ desc }, handleInputChange, reset] = useForm({
		desc: ''
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		if (desc.trim().length <= 1) {
			return;
		}
		const newTodo = { //2. crear objeto a agregar en este caso
			id: todos.length + 1,
			desc: desc,
			done: false
		}

		// const addTodoItem = { //3. crear acción con type y payload
		// 	type: 'add',
		// 	payload: newTodo
		// }

		handleAdd(newTodo) //4. enviar acción a todoReducer
		reset()
	}

  return (
	  <form action="" onSubmit={handleSubmit}>
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
	  </form>
  )
}

const initialState = [{
	id: 1,
	todo: 'Comprar pan',
	done: false
}];

const todoReducer = (state = initialState, action) => {
	switch (action?.type) {
		case 'add':
			return [...state, action?.payload];
			break;
		default:
			return state;
	}
}

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Comprar carne',
	done: false
}

const addTodoItem = {
	type: 'add',
	payload: newTodo
}

todos = todoReducer(todos, addTodoItem)

console.log(todos)
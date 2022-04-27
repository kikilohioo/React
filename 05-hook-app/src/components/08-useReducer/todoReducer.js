export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload];
		case 'toggle':
			return state.map(todo => (todo.id === action.payload) ? {...todo, done: !todo.done} : todo)
		case 'delete':
			return state.filter(item => item.id !== action.payload);
		default:
			return state;
	}
}
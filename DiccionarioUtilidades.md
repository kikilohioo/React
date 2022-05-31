# React

## Components
...

##  Hooks
- No se deben agregar hooks de forma condicional, por lo que deberemos agregarlos lo más arriba posible en el componente

#### useEffect
- Se recomienda usar un 'useEffect' por cada cosa que quieramos saber si cambia o no

#### useState
- Siempre revisar si es necesario desestrucutar un state para acceder de forma más sencilla a los atributos
- Cuando vamos a setear los valores de los hooks(useState) tambien hay que desestructurar si es necesario

#### useCallback
- Se usa para enviar funciones a componentes en los que utilizamos memo
- Tambien se usa si en un useEffect() tenemos como dependencia una funcion, dicha función deberiamos de manejarla con un useCallback()
- En lugar de usar setState(state+1) usaremos setState(s => s + 1) para utilizar un duplicado

#### useReducer
Comando Instalacion ```npm install --save reducer```
- Se usa de forma similar al useState pero es conveniente para casos más complejos
- Separa la logica en acciones enviadas a traves del dispatch, resuelve todo dentro de la funcion y siempre retorna solo un estado

#### useContext
- Se usa para reunir varios componentes y proveerles una forma directa de acceso a la información de un padre
- Todos los componentes en los que se quiera usar el useContext deben estar dentro del componente del context

#### useMemo
- Se usa para memorizar algo y desencadenar una función si una dependencia cambia

## Navigation
#### useNavigate
- Hook para navegacion
```
const navigate = useNavigate();
navigate('url',{
	configs...
})
```
## Redux
Comando instalacion ```npm i react-redux redux```
- Es una forma de trabajar, un patron de trabajo, el patron Redux
- Es una forma de controlar donde se encuentra la información de nuestra aplicación en todo momento
- Es aplicable a otras tecnologias como Angular, Vue, Flutter, es una forma de mantener el estado
- Ruta de la información: State > View > Actions > Dispatcher(puede o no entrar a algun Middleware) > Reducers > Updated State
- Para peticiones Asincronas dentro del Dispatcher tenemos los Middlewares 

## Iniciar Redux
###### Crear store.js
Recordar importar ```Redux Thunk```
```
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer
})

export const store = createStore(
	reducers,
	composeEnhancers(
		applyMiddleware(thunk)
	)
);
```
###### Importar 
```
import { Provider } from 'react-redux'
import { store } from './store/store'
```
###### Componente inicial 
```
<Provider store={store}>
	<AppRouter />
</Provider>
```

- ### useSelector
	Es para traer cosas del store
	```
	const state = useSelector(state => state);
	```
- ### useDispatch
	Enviar acciones a redux para que se envien al reducer correspondiente
	```
	const dispatch = useDispatch();
	```
### Redux Thunk
Comando instalacion ```npm i --save redux-thunk```
- Sirve para gestionar el middleware de Redux
## Custom Snippet
1. CTRL + P
2. Buscamos ```>Preferences: Configure User Snippets```
3. Seleccionar lenguaje o tecnologia
4. Editamos el archivo JSON con código de la siguiente manera 
```
"Tecnologia-ejemplo elementoEjemplo":{
	"prefix": "elementoEjemplo",
	"body": ["cuerpo de lo que se carga al usar el snippet"],
	"description": "Descripcion del snippet"
}
```
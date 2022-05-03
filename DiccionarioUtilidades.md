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
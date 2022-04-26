import React, { useState } from 'react'
import './examples.css'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';
export const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	
  return (
	  	<div>
		  <h1>Counter: <Small value={ counter }/></h1>
		  <hr />
		  <button className='btn btn-primary me-4' onClick={increment}>+1</button>
		  <button className='btn btn-secondary' onClick={() => { setShow(!show) }}>Show/Hide {JSON.stringify(show) }</button>
		</div>
  )
}

import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const Layout = () => {
	const { counter, increment } = useCounter(1, 1);//un custom hook
	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);//otro custom hook
	const { author, quote } = !!data && data[0];

	const pTag = useRef()

	useLayoutEffect(() => {
		console.log(pTag.current.getBoundingClientRect())
	
	  return () => {
		
	  };
	}, [quote])

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />
				<blockquote className='blockquote text-end'>
				<p className='mb-3' ref={pTag}>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			<button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>
		</div>
	)
}

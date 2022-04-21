import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
	const {counter, increment} = useCounter(1,1);//un custom hook
	const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);//otro custom hook
	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h1>Frases de Breaking Bad</h1>
			<hr />
			{
				loading ?
					(
						<div className='alert alert-info text-center'>
							Loading...
						</div>
					)
					:
					(
						<blockquote className='blockquote text-end'>
							<p className='mb-3'>{quote}</p>
							<footer className='blockquote-footer'>{author}</footer>
						</blockquote>
					)
			}
			<button className='btn btn-primary' onClick={increment}>Siguiente Frase</button>
		</div>
	)
}

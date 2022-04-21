import React, { useRef } from 'react'
import './useref.css'

export const FocusScreen = () => {
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.select();
	}
  return (
	  <div>
		  <h1>Focus Screen</h1>
		  <hr />
		  <input
			  ref={inputRef}
			  type="text"
			  className='form-control'
			  placeholder='Su nombre'
		  />
		  <br/>
		  <button
			  className='btn btn-primary'
			  onClick={handleClick}
		  >
			  Focus
		</button>
	</div>
  )
}

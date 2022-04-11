import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';//importando custom hook
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
	const {data:images, loading} = useFetchGifs(category);//usando un custom hook

	return (
		<>
			<h3 className='animate__animated animate__fadeIn'>{category}</h3>
			{loading && <p className='animate__animated animate__fadeIn'>Loading</p>}{/* es como: loading ? <p>Loading</p>: ...el resto del return*/}
			<div className='card-grid'>
				{images.map(gif =>
					<GifGridItem
						key={gif.id}
						{...gif}
					/>
				)}
			</div>
		</>
	)
}

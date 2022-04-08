import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Cat1']);

	return (
		<>
			<h2>Gif Expert App</h2>
			<AddCategory
				setCategories={setCategories}
			/>
			<hr />
			
			<ol>
				{
					categories.map(cat => 
						<GifGrid
							key={cat}
							category={cat} />
					)
				}
			</ol>
		</>
	)
}

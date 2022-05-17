import React from 'react'

export const JournalEntry = () => {
	return (
		<div className='journal__entry'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage: 'url(https://images.all-free-download.com/images/graphicwebp/vertical_view_of_the_falls_at_gooseberry_falls_state_park_minnesota_590983.webp)'
				}}
			></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>
					Un nuevo dia
				</p>
				<p className='journal__entry-content'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quidem sint voluptate, ad quisquam
					eveniet rem quasi ipsum dolorum cum autem quas laboriosam velit officia. Accusantium impedit assumenda ut exercitationem.
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	)
}

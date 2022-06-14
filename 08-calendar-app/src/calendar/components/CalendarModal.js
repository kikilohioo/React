import React from 'react'
import Modal from 'react-modal';

import './eventmodal.css'

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

	const onCloseModal = () => {
		
	}

	return (
		<Modal
			isOpen={true}
			onRequestClose={onCloseModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<h1>hola mundo</h1>
		</Modal>
	)
}

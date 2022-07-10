import React from 'react'
import cl from './SeModal.module.css';

const SeModal = ({children, visible, setVisible}) => {

	const rootClasses = [cl.seModal];

	if (visible === true) {
		rootClasses.push(cl.active);
	}

	return (
		<div
			onClick={() => setVisible(false)}
			className={ rootClasses.join(' ') }>
			<div
				onClick={e => e.stopPropagation()}
				className={cl.seModalContent}>
				{children}
			</div>
		</div>
	)
}

export default SeModal

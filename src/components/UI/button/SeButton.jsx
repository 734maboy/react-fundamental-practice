import React from 'react'

import classes from './SeButton.module.css';

const SeButton = ({ children, ...props }) => {
	return (
		<button {...props} className={classes.form_sampleButton}>
			{children}
		</button>
	)
}

export default SeButton

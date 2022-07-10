import React from 'react'
import classes from './SeInput.module.css';

const SeInput = (props) => {
	return (
		<input
			className={classes.form_sampleInput}
			{...props}
		/>
	)
}

export default SeInput

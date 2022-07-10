import React, { forwardRef } from 'react'
import classes from './SeInput.module.css';

const SeInput = forwardRef((props, ref) => {
	return (
		<input
			ref={ref}
			className={classes.form_sampleInput}
			{...props}
		/>
	)
});

export default SeInput

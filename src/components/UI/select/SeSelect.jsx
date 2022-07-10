import React from 'react'

const SeSelect = ({options, defaultValue, value, onChange}) => {
	return (
		<select
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			<option value="" disabled={true}>{ defaultValue }</option>
			{options.map(opt =>
				<option
					key={opt.value}
					value={opt.value}
				>
					{opt.name}
				</option>
			)}
		</select>
	)
}

export default SeSelect

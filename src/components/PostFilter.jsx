import React from 'react'
import SeInput from './UI/input/SeInput'
import SeSelect from './UI/select/SeSelect'

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<SeInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder="Поиск..."
			/>
			<SeSelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue={"Сортировка По"}
				options={[
					{value: "title", name: "По названию"},
					{value: "body", name: "По описанию"},
				]}
			/>
		</div>
	)
}

export default PostFilter

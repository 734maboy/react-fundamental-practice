import React from 'react'
import { getPagesArray } from '../../../utils/Pagination'

const Pagination = ({totalPages, currentPage, changePageCallback}) => {

	let pagesArray = getPagesArray(totalPages);

	return (
		<div
			className="page__wrapper"
		>
			{
				pagesArray.map( (p, index) =>
					<span
						key={`pagination-key_${index}`}
						className={currentPage === p ? 'page page__current' : 'page'}
						onClick={() => changePageCallback(p)}
					>{p}</span>
				)
			}
		</div>
	)
}

export default Pagination

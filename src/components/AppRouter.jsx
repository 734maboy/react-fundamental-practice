import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'
import { publicRoutes, privateRoutes } from '../router/routes'

const AppRouter = () => {
	let isAuth = true;
	return (
		<Routes>
			{
				isAuth
					? privateRoutes.map( (r, index) =>
						<Route
							key={`key_route-${index}`}
							path={r.path}
							element={r.component}
							exact={r.exact}
						/>)
					: publicRoutes.map( (r, index) =>
						<Route
							key={`key_route-${index}`}
							path={r.path}
							element={r.component}
							exact={r.exact}
						/>)
			}
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default AppRouter

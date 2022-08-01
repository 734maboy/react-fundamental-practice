import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routes'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader'

const AppRouter = () => {

	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading) {
		return <Loader/>
	}

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
			<Route path="*" element={<Navigate to={isAuth ? "/posts" : "/login"} replace />}/>
		</Routes>
	)
}

export default AppRouter

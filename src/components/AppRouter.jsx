import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostItemDetails from '../pages/PostItemDetails'
import NotFound from '../pages/NotFound'
import { routes } from '../router/routes'

const AppRouter = () => {
	return (
		<Routes>
			{
				routes.map( (r, index) =>
					<Route
						key={`key_route-${index}`}
						path={r.path}
						element={r.component}
						exact={r.exact}
				/>)
			}
			{/*<Route path="/about" element={<About/>}/>*/}
			{/*<Route path="/posts" element={<Posts/>}/>*/}
			{/*<Route path="/posts/:id" element={<PostItemDetails/>}/>*/}
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default AppRouter

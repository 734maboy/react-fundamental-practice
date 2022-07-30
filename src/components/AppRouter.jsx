import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostItemDetails from '../pages/PostItemDetails'
import NotFound from '../pages/NotFound'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/about" element={<About/>}/>
			<Route path="/posts" element={<Posts/>}/>
			<Route path="/posts/:id" element={<PostItemDetails/>}/>
			<Route path="*" element={<NotFound/>}/>
		</Routes>
	)
}

export default AppRouter

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostItemDetails from '../pages/PostItemDetails'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/about" element={<About/>}/>
			<Route path="/posts" element={<Posts/>}/>
			<Route path="/posts/:id" element={<PostItemDetails/>}/>
		</Routes>
	)
}

export default AppRouter

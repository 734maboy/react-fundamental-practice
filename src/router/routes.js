import About from '../pages/About'
import PostItemDetails from '../pages/PostItemDetails'
import Posts from '../pages/Posts'
import Login from '../pages/Login'

export const privateRoutes = [
	{ path: "/about",  component: <About/>, exact: true },
	{ path: "/posts",  component: <Posts/>, exact: true },
	{ path: "/posts/:id",  component: <PostItemDetails/>, exact: true },

];

export const publicRoutes = [
	{ path: "/login",  component: <Login/>, exact: true },
]

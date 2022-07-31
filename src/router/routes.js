import About from '../pages/About'
import PostItemDetails from '../pages/PostItemDetails'
import Posts from '../pages/Posts'

export const routes = [
	{ path: "/about",  component: <About/>, exact: true },
	{ path: "/posts",  component: <Posts/>, exact: true },
	{ path: "/posts/:id",  component: <PostItemDetails/>, exact: true },
];

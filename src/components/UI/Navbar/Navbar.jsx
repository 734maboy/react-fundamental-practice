import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className={"navbar"}>
			<div className="navbar__links">
				<Link className={"navbar-item"} to="/about">About</Link>
				<Link className={"navbar-item"} to="/posts">Posts</Link>
				<Link className={"navbar-item"} to="/login">Login</Link>
			</div>
		</div>
	)
}

export default Navbar

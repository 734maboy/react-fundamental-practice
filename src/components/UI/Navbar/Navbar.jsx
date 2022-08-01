import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SeButton from '../button/SeButton'
import { AuthContext } from '../../../context'

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext);

	const logout = (e) => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

	return (
		<div className={"navbar"}>
			{
				isAuth ?
				<SeButton onClick={logout}>
					Выйти
				</SeButton> : ''
			}

				{
					isAuth
					? <div className="navbar__links">
							<Link className={"navbar-item"} to="/about">About</Link>
							<Link className={"navbar-item"} to="/posts">Posts</Link>
						</div>
					:
						<Link className={"navbar-item"} to="/login">Login</Link>
				}
		</div>
	)
}

export default Navbar

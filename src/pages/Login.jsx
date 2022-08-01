import React, { useContext } from 'react'
import SeInput from '../components/UI/input/SeInput'
import { AuthContext } from '../context'
import SeButton from '../components/UI/button/SeButton'

const Login = () => {

	const { setIsAuth } = useContext(AuthContext);

	const login = event => {
		event.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', JSON.stringify(true));
	}


	return (
		<div>
			<h1 style={{ textAlign: 'center' }} > Авторизация  </h1>
			<form onSubmit={login}>
				<SeInput type="text" placeholder="Введите логин"/>
				<SeInput type="password" placeholder="Введите пароль"/>
				<SeButton> Войти </SeButton>
			</form>
		</div>
	)
}

export default Login

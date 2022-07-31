import React from 'react'
import SeInput from '../components/UI/input/SeInput'

const Login = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }} > Авторизация  </h1>
			<form>
				<SeInput type="text" placeholder="Введите логин"/>
				<SeInput type="password" placeholder="Введите пароль"/>
			</form>
		</div>
	)
}

export default Login

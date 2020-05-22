/**
 * Auth component
 *
 * @author name <name@vertics.co>
 *
 * @copyright Vertics Co 2019
 */
import React from 'react'
import {Auth} from 'aws-amplify'

const AuthForm = () => {
	const [user, setUser] = React.useState({email: '', password: ''})
	const [error, setError] = React.useState(null)

	const handleSignup = e => {
		e.preventDefault()
		Auth.signUp({username: user.email, attributes: {email: user.email}, password: user.password})
			.then(user => {
				console.log('Signup success', user)
			})
			.catch(error => {
				console.log('Error in signing up', error)
				setError(error)
			})
	}

	const handleChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}

	return (
		<form onSubmit={handleSignup}>
			<h2>Please signup to continue</h2>
			<input
				placeholder='Enter email'
				name='email'
				onChange={handleChange}
			/>
			<input
				placeholder='Enter password'
				name='password'
				type='password'
				onChange={handleChange}
			/>
			{error && <span>{error.message}</span>}
			<button type='submit' onClick={handleSignup}>
				Sign up
			</button>
		</form>
	)
}

export default AuthForm

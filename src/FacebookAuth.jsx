import React from 'react'
import {Auth, Hub} from 'aws-amplify'

const FacebookAuth = () => {
	React.useEffect(() => {
		Hub.listen('auth', data => {
			console.log('Got data', data)
		})
	}, [])

	const onFacebookLogin = () => {
		Auth.federatedSignIn({provider: 'Facebook'})
	}

	return (
		<div>
			<button onClick={onFacebookLogin}>Facebook</button>
		</div>
	)
}

export default FacebookAuth

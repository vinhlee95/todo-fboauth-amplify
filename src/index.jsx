import React from "react"
import ReactDOM from "react-dom"
import {Auth} from 'aws-amplify'

import AuthForm from "./Auth"

import {initAmplify} from './services/amplify/setup'
initAmplify()

const App = () => {
  React.useEffect(() => {
    checkUser()
  }, [])

  const checkUser = () => {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log('Current user', user)
      })
      .catch(error => {
        console.log('Error in checking auth user', error)
      })
  }

  return <AuthForm />
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))

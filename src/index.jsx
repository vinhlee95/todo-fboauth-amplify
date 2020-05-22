import React from "react"
import ReactDOM from "react-dom"

import Login from "./Login"

import {initAmplify} from './services/amplify/setup'
initAmplify()

class App extends React.Component {
  render() {
    return <Login />
  }
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))

import React from "react"
import ReactDOM from "react-dom"

import Auth from "./Auth"

import {initAmplify} from './services/amplify/setup'
initAmplify()

class App extends React.Component {
  render() {
    return <Auth />
  }
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))

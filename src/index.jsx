import React from "react"
import ReactDOM from "react-dom"

import {initAmplify} from './services/amplify/setup'

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<App name="Vinh" />, document.getElementById("app"))

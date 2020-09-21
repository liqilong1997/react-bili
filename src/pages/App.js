import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import LoginPage from './LoginPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginPage></LoginPage>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'))
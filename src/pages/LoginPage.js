import React, { Component } from 'react'

import LoginPageScss from "../assets/styles/loginPage.scss"

export default class LoginPage extends Component {
  render() {
    return (
      <div className={LoginPageScss['login-page']}>
        登陆页面
      </div>
    )
  }
}

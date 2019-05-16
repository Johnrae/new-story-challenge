import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.usernameInput = React.createRef()
    this.passwordInput = React.createRef()
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUsername = (e) => {
    let username = e.target.value
    this.setState({username})
  }

  updatePassword = (e) => {
    let password = e.target.value
    this.setState({password})
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          placeholder='Username'
          value={this.state.username}
          onChange={this.updateUsername}
        />
        <br/>
        <Input
          placeholder='Password'
          value={this.state.password}
          onChange={this.updatePassword}
          type='password'
        />
      	<br/>
      	<Button type="submit">
      		Log in
      	</Button>
      </form>
    )
  }
}

export default LoginForm
export const undecorated = LoginForm

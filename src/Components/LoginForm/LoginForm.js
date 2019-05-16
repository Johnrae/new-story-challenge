import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import {Mutation} from 'react-apollo'
import {SIGN_IN} from '../../helpers/queries'
import {setAuth} from '../../helpers/auth'

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

  handleSubmit = (e, signInUser) => {
    console.log(this.state)
    e.preventDefault()
    signInUser({
      variables: {
        email: this.state.username,
        password: this.state.password
      }
    })
  }

  completeAuth = (res) => {
    // set the auth token
    setAuth(res)
    // redirect to home
    this.props.history.push('/')
  }

  render() {
    return (
      // TODO: Set up error handling, check for invalid email and password.
      <Mutation mutation={SIGN_IN} onCompleted={this.completeAuth}>
      {(signInUser, {loading, error}) => (
          <form onSubmit={(e) => this.handleSubmit(e, signInUser)}>
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
            {error && <p>Something went wrong!</p>}
            <Button type="submit">
              Log in
            </Button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default LoginForm
export const undecorated = LoginForm

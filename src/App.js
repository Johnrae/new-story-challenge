import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm'
import { 
  BrowserRouter as Router,
  Link,
  Route,
  withAuth,
  Redirect,
  Switch
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { AUTH_TOKEN } from './constants'
import {isAuthenticated} from './helpers/auth'
import PrivateRoute from './Components/Routes/PrivateRoute'


const client = new ApolloClient({
  uri: 'https://api-dev.newstory.io/graphql'
});


let Home = () => {
  return (<h2>home</h2>)
}

console.log(isAuthenticated())

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>NewStory Demo App</h1>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <PrivateRoute exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

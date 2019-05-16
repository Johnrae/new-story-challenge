import React from 'react';
import './App.css';
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
import { AUTH_TOKEN, API_KEY } from './constants'
import {isAuthenticated} from './helpers/auth'
import PrivateRoute from './Components/Routes/PrivateRoute'
//Custom Components
import LoginForm from './Components/LoginForm/LoginForm'
import RecipientList from './Components/RecipientList/RecipientList'
import SubmissionList from './Components/SubmissionList/SubmissionList'



const client = new ApolloClient({
  uri: 'https://api-dev.newstory.io/graphql',
  headers: {
    'ACCEPT': 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': API_KEY,
    'Authorization': isAuthenticated(),
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <h1>NewStory Demo App</h1>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <PrivateRoute exact path='/' component={RecipientList} />
            <PrivateRoute exact path='/submissions' component={SubmissionList} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

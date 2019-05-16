import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { API_KEY } from './constants'
import {isAuthenticated} from './helpers/auth'
import PrivateRoute from './Components/Routes/PrivateRoute'
//Custom Components
import LoginForm from './Components/LoginForm/LoginForm'
import RecipientList from './Components/RecipientList/RecipientList'
import SubmissionList from './Components/SubmissionList/SubmissionList'
import SubmissionDetail from  './Components/SubmissionDetail/SubmissionDetail'



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
            <PrivateRoute exact path='/submissions/:id' component={SubmissionDetail} />
            <PrivateRoute exact path='/whoops' component={() => (<p>I would love for you to have questions statics, sweet baby route. Unfortunately you aren't ready.</p>)} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

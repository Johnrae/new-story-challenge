import gql from 'graphql-tag'

export const SIGN_IN = gql`
	mutation signInUser(
		$email: String!, 
    $password: String!
	){
	  signInUser(
	  	email: $email,
	  	password: $password
	  ){
	    token
	  }
	}
`
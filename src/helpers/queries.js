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

export const GET_RECIPIENTS = gql`
	query {
		recipients {
			uuid
			name
			submissionUuids
		}
	}
`
export const GET_SUBMISSIONS = gql`
	query ($id: String!) {
		submissions(recipientUuid: $id) {
			uuid
			questionResponses {
				sourceValue
			}
		}
	}
`
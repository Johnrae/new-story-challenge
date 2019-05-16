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
export const GET_SUBMISSIONS =  gql`
 	query {
		submissions {
			uuid
			recipientUuid
			questionResponses {
				sourceValue
			}
		}
 	}
`
// What I would like to be doing, for some reason
// I get an error when I try to pass the recipientUuid as an arg. :(
// gql`
// 	query ($id: String!) {
// 		submissions(recipientUuid: $id) {
// 			uuid
// 			recipientUuid
// 			questionResponses {
// 				sourceValue
// 			}
// 		}
// 	}
// `
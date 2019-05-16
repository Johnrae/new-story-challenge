import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {GET_SUBMISSIONS} from '../../helpers/queries'

class SubmissionList extends Component {

	handleSubmissionClick = (submission) => {
		return this.props.history.push(`/submissions/${submission.uuid}`, {...submission})
	}

  render() {
  	let {name, uuid: recipientId} = this.props.location.state

    return (
    	<React.Fragment>
		   <h1>Submissions for {name}</h1>
	     <Query query={GET_SUBMISSIONS}>
	     	{({loading, error, data}) => {
		      if (loading) return "Loading..."
		      if (error) return "Something went wrong. Oops."
		    	return (
		      	<div>
			      	{
			      		data.submissions.map((submission, i) => {
			      			let { uuid, recipientUuid } = submission
			      			if (recipientUuid === recipientId) {
			      				return (
			      				 	<p 
			      				 		onClick={() => this.handleSubmissionClick(submission)} 
			      				 		key={uuid}>
			      				 			Submission, view answers ->
			      				 	</p>
			      				)
			      			}
			      			return null
			      		})
			      	}
			      </div>
	     		)}
	     	}
	      </Query>
	     </React.Fragment>
    )
  }
}

export default SubmissionList
export const undecorated = SubmissionList

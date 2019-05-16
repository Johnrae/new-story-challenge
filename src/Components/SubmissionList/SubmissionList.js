import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import {GET_SUBMISSIONS} from '../../helpers/queries'

class SubmissionList extends Component {

	handleSubmissionClick = (recipient) => {
		console.log(recipient)
		this.props.history.push('/submissions', {...recipient})
	}

  render() {
  	let {name, uuid} = this.props.location.state
  	console.log(this.props.location.state)
    return (
    	<React.Fragment>
		   <h1>Submissions for {name}</h1>
	     <Query query={GET_SUBMISSIONS} variables={{id: uuid}}>
	     	{({loading, error, data}) => {
		      if (loading) return "Loading..."
		      if (error) return "Something went wrong. Oops."
		    	return (
		      	<div>
			      	{
			      		data.submissions.map((submission) => {
			      			let {uuid} = submission
			      			return <p>Submission!</p>
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

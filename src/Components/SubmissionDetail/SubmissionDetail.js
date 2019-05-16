import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {GET_SINGLE_SUBMISSION} from '../../helpers/queries'

class SubmissionDetail extends Component {

	handleClick = () => {
		this.props.history.push('/whoops')
	}

  render() {
 		let {questionResponses: responses} = this.props.location.state

    return (
    	<React.Fragment>
		   <h1>Questions and Answers</h1>
	     <Query query={GET_SINGLE_SUBMISSION}>
	     	{({loading, error, data}) => {
		      if (loading) return "Loading..."
		      if (error) return "Something went wrong. Oops."
		    	return (
		      	<div>
			      	{ // sorry about this loop, yikes
			      		data.questionVersions.map((version) => {
			      			return responses.map((response) => {
			      				if (response.questionVersionUuid === version.uuid) {
			      					return (
			      						<div 
			      							key={version.questionContexts[2].uuid}
			      							onClick={() => this.handleClick()}
			      						>
			      							<p>{version.questionContexts[2].label}</p>
			      							<p>{response.sourceValue}</p>
			      						</div>
			      				)}
			      				return null
		      				})
			      	})}
			      </div>
	     		)}
	     	}
	      </Query>
	     </React.Fragment>
    )
  }
}

export default SubmissionDetail
export const undecorated = SubmissionDetail

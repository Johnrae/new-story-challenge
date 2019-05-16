import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import {GET_RECIPIENTS} from '../../helpers/queries'

class RecipientList extends Component {

	handleRecipientClick = (recipient) => {
		this.props.history.push('/submissions', {...recipient})
	}

  render() {
    return (
    	<React.Fragment>
		   <h1>Recipients</h1>
	     <Query query={GET_RECIPIENTS}>
	     	{({loading, error, data}) => {
		      if (loading) return "Loading..."
		      if (error) return "Something went wrong. Oops."
		    	return (
		      	<div>
			      	{
			      		data.recipients.map((recipient) => {
			      			let {uuid, submissionUuids, name} = recipient
			      			if ( submissionUuids.length ) {
			      				return (
											<div
												key={uuid}
												onClick={() => this.handleRecipientClick(recipient)}
											>
												<p>{name}</p>
											</div>
			      				)
			      			}
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

export default RecipientList
export const undecorated = RecipientList

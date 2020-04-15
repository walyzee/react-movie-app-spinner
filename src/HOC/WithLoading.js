import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './WithLoading.css';

function WithLoading(Component) {
  	return function Movies({ isLoading, ...props }) {
    	if (!isLoading) return (<Component {...props} />);
		return (
			<div className='spinner-container'>
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div> 
		);
	}	
}
export default WithLoading;
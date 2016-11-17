import React from 'react'
import Header from './header'

const FavesView = React.createClass({
	render: function() {
		return (
			<div className="home-view">
				<Header />
				<FavesList />
			</div>
			)
	}
})


const FavesList = React.createClass({
	 render: function() {
	 	return (
	 		<div className='list-view' >
	 			list of faves goes here
	 		</div>
	 	)
 	}
})

export default FavesView
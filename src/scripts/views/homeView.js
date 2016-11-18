import React from 'react'
import Header from './header'
import STORE from '../store'
import ACTIONS from '../actions'



// how will we give these view components access to the cutie models?
	// they will get their intial state from the store

// where/when will we actually fetch cutie data?
const HomeView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchCuties()
		STORE.on('storeChanged', ()=>{
			this.setState(
				STORE._getData()
			)
		})
	},

	componentWillUnmount: function() {
		
	},

	getInitialState: function() {
		// returns the object that becomes the initial state
		// somewhere in the react src is a line like "this.state = this.getInitialState()"
		return STORE._getData()
	},

	render: function() {
		return (
			<div className="home-view">
				<Header />
				<List collection={this.state.cutieCollection} />
			</div>
			)
	}
})


const List = React.createClass({
	 render: function() {
	 	console.log(this.props.collection)
	 	var col = this.props.collection
	 	return (
	 		<ul className='list-view' >
	 			{col.map(cutieModel=> <Cutie model={cutieModel} />)}
	 		</ul>
	 	)
 	}
})

const Cutie = React.createClass({
	_addFave: function() {
		ACTIONS.addFave(this.props.model)
	},

	render: function() {
		var model = this.props.model,
			fullName = model.get('first_name') + " " + model.get('last_name')
		return (
			<li>
				<h3>{fullName}</h3>
				<div className="profile">
					<img src={`https://robohash.org/${fullName}?set=set2`} />
					<div className="bio-deets">
						<p>title: {model.get('title')} </p>
						<p>state: {model.get('state_name')} </p>
						<p>party: {model.get('party')} </p>
					</div>
					<button onClick={this._addFave} >fave!</button>
				</div>
			</li>
		)
	}
})


export default HomeView
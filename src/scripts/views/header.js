import React from 'react'

const Header = React.createClass({
	render: function() {
		return (
			<header>
				<h1>PILvF</h1>
				<nav>
					<a href="#home">home</a>
					<a href="#faves">faves</a>
				{/*<a href={location.hash === "#home" ? "#faves" : "#home"}>{location.hash === "#home" ? 'faves' : 'home'}</a>*/}
				</nav>
			</header>
			)
	}
})

export default Header
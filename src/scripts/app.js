import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'
import HomeView from './views/homeView'
import FavesView from './views/favesView'
import {CutieCollection} from './models/dataModels'



const app = function() {
	const FavesRouter = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"faves": "handleFaves",
			"testing": "doTest",
			"*default": "redirect"
		},

		doTest: function() {
			console.log('doing api test')
			// this route was just used for a teaching example in class. not part of the app.
			// the following two patterns are functionally the same
			var c = new CutieCollection()
			c.fetch().then(function(){console.log(c)})

			var promise = c.fetch()
			promise.then(function(){console.log(c)})
		},

		handleHome: function() {
			console.log('handling home')
			ReactDOM.render( <HomeView />, document.querySelector('.container'))				
		},

		handleFaves: function() {
			console.log('handling faves')
			ReactDOM.render( <FavesView />, document.querySelector('.container'))
		},

		redirect: function() {
			location.hash = "home"
		},

		initialize: function() {
			Backbone.history.start()
		}
	})

	new FavesRouter()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
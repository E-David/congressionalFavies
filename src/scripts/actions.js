import STORE from './store'
import {CutieCollection,FaveCollection,FaveModel} from "./models/dataModels"
import User from './models/userModel'

window.User = User

const ACTIONS = {

	addFave: function(cutieMod) {
		// cutieMod is a model that came from the sunlight api. 

		// we want to make faveMod, which will talk to our own api.
		// to do that, we will copy all of the attributes off of the cutie model
		// and use them to create a new fave model. 
		var faveMod = new FaveModel(cutieMod.attributes)
		// add current user's id to the faveMod
		// user_id
		faveMod.set({
			user_id: User.getCurrentUser()._id
		})
		faveMod.save()
			.done(()=>alert(cutieMod.get('first_name') + ' successfully saved!'))
			.fail(()=>alert(cutieMod.get('first_name') + ' failed to save :('))
	},

	deleteFave: function(model) {
		model.destroy()
			.done(()=>alert(model.get('first_name') + 'successfully deleted!'))
			.fail(()=>alert(model.get('first_name') + 'failed to delete :('))
		STORE._emitChange()
	},

	fetchCuties: function() {

		//first I want to get the model "cutieCollection"
		var c = new CutieCollection()
		//now I need to fetch data from the sunlight API
		c.fetch({
			//tell backbone/jquery what to put in the query string for the URL
			data: {
				apikey: c._key
			}
			//once we have a response, _set is invoked, telling STORE to update the collection
		}).then(function(){
			STORE._set({
				cutieCollection: c
			})
		})
	},

	fetchFaves: function() {

		var f = new FaveCollection()
		// we need to tell this collection to fetch data
		f.fetch({
			data: {
				user_id: User.getCurrentUser()._id
			}
		}).then(
			function(){
				STORE._set({
					faveCollection: f
				})
			},
			function(err) {
				alert('problem retrieving fave data')
				console.log(err)
			}
		)
		// once the data is loaded, we will set a new faveCollection property on our store,
		// which will trigger a full reflow of the view
	},

	login: function(userDataObj) {
		User.login(userDataObj.email,userDataObj.password)
			.then(
				function(resp) {
					alert('user successfully logged in!')
					console.log(resp)
					location.hash = "home"
				},
				function(err) {
					alert('problem logging in :(')
					console.log(err)
				})
	},

	logout: function() {
		var email = User.getCurrentUser().email
		User.logout()
			.then(
				function() {
					alert( email + ' logged out!' )
					location.hash = "login"
				})
	},

	register: function(userDataObj) {
		User.register(userDataObj)
			.then(
				function(resp) {
					alert('user successfully created!')
					console.log(resp)
				},
				function(err) {
					alert('problem creating user')
					console.log(err)
				})
	}
}

export default ACTIONS
import STORE from './store'
import {CutieCollection,FaveModel} from "./models/dataModels"

const ACTIONS = {

	addFave: function(cutieMod) {
		// cutieMod is a model that came from the sunlight api. 

		// we want to make faveMod, which will talk to our own api.
		// to do that, we will copy all of the attributes off of the cutie model
		// and use them to create a new fave model. 
		var faveMod = new FaveModel(cutieMod.attributes)
		faveMod.save()
			.done(()=>alert(cutieMod.get('first_name') + ' successfully saved!'))
			.fail(()=>alert(cutieMod.get('first_name') + ' failed to save :('))
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
		
	}
}

export default ACTIONS
import STORE from './store'
import {CutieCollection} from "./models/dataModels"

const ACTIONS = {

	fetchCuties: function() {

		//first I want to get the model "cutieCollection"
		var c = new CutieCollection
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
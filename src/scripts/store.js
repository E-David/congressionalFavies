import Backbone from 'backbone'
import _ from 'underscore'
import {CutieCollection} from './models/dataModels'

const STORE = _.extend(Backbone.Events, {

	_data: {
		cutieCollection: new CutieCollection(),
	},


	_emitChange: function() {
		this.trigger('storeChanged')
	},

	_getData: function() {
		return this._data
	},

	_get: function(prop) {
		return this._data[prop]
	},

	_set: function(changeObj) {
		// usage: STORE._set({
		// 	key: val
		// })
		this._data = _.extend(this._data,changeObj)
		this._emitChange()
	}
})

export default STORE

const mongoose = require('mongoose');

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})


// this is the schema for a favorite
const faveSchema = new mongoose.Schema({
	user_id: {type: String, required: true},
	birthday: String,
	chamber: String,
	contact_form: String,
	first_name: String,
	last_name: String,
	gender: String,
	in_office: Boolean,
	nickname: String,
	oc_email: String,
	party: String,
	phone: String,
	state: String,
	state_name: String,
	term_end: String,
	term_start: String,
	title: String,
	website: String,
	created_at: {type: Date, default: Date.now}
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Fave: mongoose.model('Fave', faveSchema)
}

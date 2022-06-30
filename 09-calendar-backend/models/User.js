const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});
// For set collection name add this
// , {
// 	collection: 'users'
// });

module.exports = model('User', UserSchema);
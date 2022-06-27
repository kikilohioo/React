const { Schema, model } = require('mongoose');

const UserSchema = Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true,
		unique: true
	},
	password: {
		type: String,
		require: true
	}
});
// For set collection name add this
// , {
// 	collection: 'users'
// });

module.exports = model('User', UserSchema);
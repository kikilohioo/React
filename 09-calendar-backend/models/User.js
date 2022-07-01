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

UserSchema.method('toJSON', function () {
	const { _id, ...object } = this.toObject();
	object.uid = _id;
	return object;
})

module.exports = model('User', UserSchema);
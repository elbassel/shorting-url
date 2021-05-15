const mongoose = require('mongoose');
const { Schema, ObjectId } = mongoose;

const schema = new Schema({
	originUrl: String,
	key: String ,
});
schema.index({ originUrl: 'hashed' });
schema.index({ key: 'hashed' });

module.exports = mongoose.model('Url', schema);


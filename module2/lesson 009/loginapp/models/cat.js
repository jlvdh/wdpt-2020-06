const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema ({
    name: String,
    furColor: String,
    owner: {type: Schema.Types.ObjectId}
})

const Cat = mongoose.model('Cat', catSchema)
module.exports = Cat
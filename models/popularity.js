const mongoose = require('mongoose')
const Schema = mongoose.Schema
let popularitySchema = new Schema ({
  _from: {type: Schema.Types.ObjectId, ref: 'Komsel'},
  _to: {type: Schema.Types.ObjectId, ref: 'Komsel'},
  score: {
    sportif : Number
  },
  _room : {type: Schema.Types.ObjectId, ref: 'Room'}
})

let Popularity = mongoose.model('Popularity', popularitySchema)
module.exports = Popularity
const mongoose = require('mongoose')
const Schema = mongoose.Schema
let komselSchema = new Schema ({
  nama: {type: String, required: [true, `{PATH} must be filled`]},
  popularity: {
    poin: {type: Number, default: 0},
    history: [{type:Schema.Types.ObjectId, ref: 'Popularity'}]
  },
  location: {
    lng: String,
    lat: String
  },
  createdDate: {type: Date, default: new Date()},
  _leader: {type: Schema.Types.ObjectId, ref: 'User'},
  _church: {type: Schema.Types.ObjectId, ref: 'Church'}
})

let Komsel = mongoose.model('Komsel', komselSchema)
module.exports = Komsel
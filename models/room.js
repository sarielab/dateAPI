const mongoose = require('mongoose')
const Schema = mongoose.Schema
let roomSchema = new Schema ({
  _game: {type: Schema.Types.ObjectId, ref: 'Game'},
  _winner: {type: Schema.Types.ObjectId, ref: 'User'},
  creator: {
    _komsel: {type: Schema.Types.ObjectId, ref: 'Komsel'},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    createdDate: {type: Date, default: new Date()}
  },
  rules: {
    maxUser: Number,
    minUser: Number,
    isOnline: {type: Boolean, required: [true, `{PATH} must be filled`]},
    offline: {
      location: {
        lat: String,
        lng: String,
        name: String
      },
      time: Date,
      referee: {type: Schema.Types.ObjectId, ref: 'Staff'},
      description: String,
      contact: [{
        _komsel: {type: Schema.Types.ObjectId, ref: 'Komsel'},
        _user: {type: Schema.Types.ObjectId, ref: 'User'}
      }]
    },
  },
  players: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

let Room = mongoose.model('Room', roomSchema)
module.exports = Room
const mongoose = require('mongoose')
const Schema = mongoose.Schema
let requestSchema = new Schema ({
  _komsel: {type: Schema.Types.ObjectId, ref: 'Komsel'},
  _requestor: {type: Schema.Types.ObjectId, ref: 'User'},
  createdDate: {type: Date, default: new Date()}
})

let Request = mongoose.model('Request', requestSchema)
module.exports = Request
const mongoose = require('mongoose')
const Schema = mongoose.Schema
let rewardHistoryKomselSchema = new Schema ({
  _reward: {type: Schema.Types.ObjectId, ref: 'Reward'},
  _komsel: {type: Schema.Types.ObjectId, ref: 'Komsel'},
  poin: Number,
  createdDate: {type: Date, default: New Date()}
})

let RewardHistoryKomsel = mongoose.model('RewardHistoryKomsel', rewardHistoryKomselSchema)
module.exports = RewardHistoryKomsel
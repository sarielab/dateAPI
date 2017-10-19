const mongoose = require('mongoose')
const Schema = mongoose.Schema
let rewardHistoryMemberSchema = new Schema ({
  _reward: {type: Schema.Types.ObjectId, ref: 'Reward'},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  poin: Number,
  createdDate: {type: Date, default: New Date()}
})

let rewardHistoryMember = mongoose.model('RewardHistoryMember', rewardHistoryMemberSchema)
module.exports = RewardHistoryMember
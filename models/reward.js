const mongoose = require('mongoose')
const Schema = mongoose.Schema
let rewardSchema = new Schema ({
  poin: {type: Number, default: 250},
  descr: {
    note: String,
    image: String
  },
  rules: {
    startDate: {type: Date, default: New Date()},
    endDate: Date,
    quota: Number,
    duration: Number,
    category: {
      type: String,
      enum: {
        values: ['komsel','individual'],
        message: `{PATH} should be [komsel | individual]`
      }
    }
  }
})

let Reward = mongoose.model('Reward', rewardSchema)
module.exports = Reward
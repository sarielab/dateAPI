const mongoose = require('mongoose')
const Schema = mongoose.Schema
let staffSchema = new Schema ({
  email: {
    type: String,
    required: [true, '{PATH} must be filled'],
    validate: {
      validator: function(val) {return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(val)},
      message: 'invalid {PATH} format'
    },
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, '{PATH} must be filled'],
    validate: {
      validator: function(val){ return /.{8,20}/.test(val)},
      message: `{PATH}'s length must be between 8 and 20 char`
    }
  },
  gender: {
    type: String,
    enum: {
      values: ['m', 'f'],
      message: `{PATH} should be [m | f]`
    }
  },
  phone: {
    type: String,
    validate: {
      validator: function(val){ return /^\+[0-9]{10,32}/gi.test(val) },
      message: `{PATH} must be between 10 and 32 char length and starts with +`
    }
  },
  birthday: Date,
  joinDate: {type: Date, default: new Date()},
  activeStatus: {type: Boolean, default: true},
  role: String
})

staffSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this._doc.password = helper.hashPassword(this._doc.password)
  next()
})

let Staff = mongoose.model('Staff', staffSchema)
module.exports = Staff
require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const port = process.env.PORT || 3000
let index = require('./routes/index')
// let user = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

app.use('/', index)
// app.use('/api/user', user)


let env = app.settings.env || 'DEV'
let db_config = {
  DEV: 'mongodb://localhost/c4tk',
}

mongoose.connect(db_config[env],(err,res)=>{
  console.log(db_config[env])
  console.log(err?err:'Berhasil connect ke db '+db_config[envi])
})

app.set('port', port)

app.listen(app.get('port'), () => {
  console.log('magic happen at port:',app.get('port'))
})

module.exports = app

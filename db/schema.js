const mongoose = require('mongoose')

const ideaSchema = mongoose.Schema({
  title: {
    type: String,
    default: 'New Title'
  },
  description: {type: String, default: 'New Idea Description'},
  createdAt: {type: Date, default: Date.now}
})

const userSchema = mongoose.Schema({
  userName: String,
  password: String, // For mock log-in. Do not enter actual passwords
  ideas: [ideaSchema]
})

const Idea = mongoose.model('Idea', ideaSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Idea, User
}

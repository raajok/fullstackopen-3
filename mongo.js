const mongoose = require('mongoose')

if (process.argv.length === 0) {
  console.log('give password as the first argument')
  process.exit(1)
}

const password = process.argv[0]

const url =
  `mongodb+srv://fullstackopen:${password}@cluster0.h8eem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

/*
switch (process.argv.length) {
  case 3:
    
    break;
  case 1:
    break;
  default:
    break;
}

person.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/
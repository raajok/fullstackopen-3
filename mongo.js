const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as the first argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstackopen:${password}@cluster0.h8eem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

switch (process.argv.length) {
  case 5:
    const name = process.argv[3]
    const number = process.argv[4]
    const person = new Person({
      name: name,
      number: number
    })

    person.save().then(result => {
      console.log('Person saved')
      mongoose.connection.close()
    })
    break;
  case 3:
    Person.find({}).then(result => {
      console.log('phonebook:')
      result.forEach(person => {
        console.log(person)
      })
      mongoose.connection.close()
    })
    break;
  default:
    console.log('Wrong number of arguments')
    break;
}
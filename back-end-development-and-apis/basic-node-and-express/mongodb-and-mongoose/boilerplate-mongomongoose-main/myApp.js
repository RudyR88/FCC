require('dotenv').config();

// Challenge #1.a
const mongoose = require('mongoose');

// Challenge #9, 10
mongoose.set('useFindAndModify', false);

// Challenge #2.a
const Schema = mongoose.Schema;

// Challenge #1.b
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Challenge #2.b
const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

// Challenge #3
const createAndSavePerson = (done) => {
  let somePerson = new Person({name: "Some Person", age: 45, favoriteFoods: ["pizza", "tacos", "ice cream"]});
  somePerson.save((err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

// Challenge #4
const arrayOfPeople = [
  {
    name: "Patty La-bu",
    age: 54,
    favoriteFoods: ["fried fish"]
  },
  {
    name: "Spencer Sean",
    age: 55,
    favoriteFoods: ["chicken wings", "tacos"]
  },
  {
    name: "Charlie Brown",
    age: 120,
    favoriteFoods: ["peanuts"]
  }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

// Challenge #5
const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

// Challenge #6
const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: [food]}, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

// Challenge #7
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

// Challenge #8
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    err ? console.log(err) : person.favoriteFoods.push(foodToAdd);
    person.save((err, data) => {
      err ? console.log(err) : done(null, data);
    });
  });
};

// Challenge #9
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  mongoose.set('useFindAndModify', false);
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, data) => {
    err ? console.log(err) : done(null, data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

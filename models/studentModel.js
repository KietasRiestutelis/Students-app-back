const mongoose = require("mongoose");

// DB schema
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  birthdate: {
    type: Date,
  },
  program: {
    type: String,
  },
  town: {
    type: String,
  },
  group: {
    type: String,
  },
});

// Modelis DB lentelės pavadinimas
const Students = new mongoose.model("Students", studentsSchema);

// Duomenų siuntimas į DB
// const testStudents = new Students({
//   name: "Joana",
//   surname: "Baldyte",
//   birthdate: "1999-01-01",
//   program: "JavaScript",
//   town: "Kaunas",
//   group: "J-1",
// });

// testStudents.save();

module.exports = Students;

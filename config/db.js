// getting-started.js
const mongoose = require('mongoose');

const connectDb = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/praktikumkk4c');
  console.log("success connect mongo")
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

module.exports = connectDb
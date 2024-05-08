const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "student";
const client = new MongoClient(url);

const dbConnect = async () => {
  const result = await client.connect();
  const db = await result.db(database);
  console.log("DATABASE CONNECTED SUCCESSFULLY...");
  return db.collection("profile");
};

module.exports = dbConnect;

// database:- student
// collection:- profile

// add data in the format:-

//             {
//                 "_id": {
//                 "$oid": "6621341182fcef8dec3f9d5a"
//                 },
//                 "name": "",
//                 "email": "",
//                 "location": ""
//             }

// npm init
// npm install express
// npm install mongodb
// node index.js
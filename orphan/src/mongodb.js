const mongoose = require('mongoose');

async function connectDB() {
  try {
    const uri = "mongodb+srv://dikshantnegi:Dikshu1980@cluster0.oleqnpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    // Connect to MongoDB
    const result = await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    return result;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

module.exports = connectDB;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dikshantnegi:<password>@cluster0.oleqnpd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
// module.exports = run;

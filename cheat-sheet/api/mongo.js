import { MongoClient } from "mongodb"

let db

if (!db) {
  const client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  if (!client.isConnected()) client.connect()
  db = client.db("fabplace")
}

export default db
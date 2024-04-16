// Query 1: Simply finds the documents with an existing location

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$match': {
      'location': {
        '$exists': true
      }
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('User');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
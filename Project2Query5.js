// Query #5: Updates location to "Hollow Ridge" where the query parameter (username) is "elortz0".

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$match': {
      'username': 'elortz0'
    }
  }, {
    '$set': {
      'location': 'Hollow Ridge'
    }
  }, {
    '$out': 'User'
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('User');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
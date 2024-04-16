// Query #4: Counts documents for specifc user "elortz0".

import { MongoClient } from 'mongodb';
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const agg = [
  {
    '$match': {
      'user.username': 'elortz0'
    }
  }, {
    '$count': 'count'
  }
];
const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('User');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
// Query #3:  Aggregates documents from the Feedback collection where either the satisfaction_rating field is 5 or the user.location field is 'City A'.

import { MongoClient } from 'mongodb';

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$match': {
      '$or': [
        {
          'satisfaction_rating': 5
        }, {
          'user.location': 'City A'
        }
      ]
    }
  }
];

const client = await MongoClient.connect(
  'mongodb://localhost:27017/'
);
const coll = client.db('Project2').collection('Feedback');
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
await client.close();
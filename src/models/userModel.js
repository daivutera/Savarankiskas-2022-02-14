const dbClient = require('../db');

async function getUserOrder() {
  try {
    const connection = await dbClient.connect();
    const data = await connection
      .db('savarankiskas')
      .collection('users')
      .find()
      .toArray();
    await dbClient.close();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function getAggregatedArrayFromDb() {
  try {
    const connection = await dbClient.connect();
    const pipeline = [
      {
        $match: {},
      },
      {
        $lookup: {
          from: 'services',
          localField: 'membership_id', //kuriant per posta useriu susikuria membership_id object id to membershipo
          foreignField: '_id',
          as: 'membership',
        },
      },
      {
        $sort: {
          name: 1,
          surname: 1,
        },
      },
      {
        $project: {
          membership_id: 0,
        },
      },
    ];
    const data = await connection
      .db('savarankiskas')
      .collection('users')
      .aggregate(pipeline)
      .toArray();
    await dbClient.close();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function getUserPost(userInfo) {
  try {
    const connection = await dbClient.connect();
    const data = await connection
      .db('savarankiskas')
      .collection('users')
      .insertOne(userInfo);
    await dbClient.close();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { getUserOrder, getUserPost, getAggregatedArrayFromDb };

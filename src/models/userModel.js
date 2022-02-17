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

module.exports = { getUserOrder, getUserPost };

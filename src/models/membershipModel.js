const { ObjectId } = require('mongodb');
const dbClient = require('../db');

async function membershipAll() {
  try {
    const connection = await dbClient.connect();
    const data = await connection
      .db('savarankiskas')
      .collection('services')
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
async function membershipPostDb(newMembershipData) {
  try {
    const connection = await dbClient.connect();
    const data = await connection
      .db('savarankiskas')
      .collection('services')
      .insertOne(newMembershipData);
    await dbClient.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
async function membershipDeleteDb(MembershipId) {
  try {
    const connection = await dbClient.connect();
    const data = await connection
      .db('savarankiskas')
      .collection('services')
      .deleteOne({ _id: ObjectId(MembershipId) });

    await dbClient.close();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
module.exports = {
  membershipPostDb,
  membershipAll,
  membershipDeleteDb,
};

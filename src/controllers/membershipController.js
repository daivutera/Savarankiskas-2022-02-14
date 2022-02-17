const { failResponce, successResponce } = require('../helpers/helpers');
const {
  membershipAll,
  membershipPostDb,
  membershipDeleteDb,
} = require('../models/membershipModel');

async function membership(req, res) {
  const result = await membershipAll();
  if (result === false) {
    return failResponce(res);
  }
  successResponce(res, result);
}
async function membershipPost(req, res) {
  const data = req.body;
  console.log(req.body);
  const result = await membershipPostDb(data);
  if (result === false) {
    return failResponce(res);
  }
  successResponce(res, data);
}
async function membershipDelete(req, res) {
  const id = req.params.id;
  const result = await membershipDeleteDb(id);
  if (result === false) {
    return failResponce(res, 500);
  }
  successResponce(res, result);
}
module.exports = {
  membershipPost,
  membership,
  membershipDelete,
};

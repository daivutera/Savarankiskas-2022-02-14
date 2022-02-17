const { successResponce, failResponce } = require('../helpers/helpers');
const { getUserOrder, getUserPost } = require('../models/userModel');

async function userOrder(req, res) {
  const assendingWay = req.params;
  const data = await getUserOrder(assendingWay);
  if (data === false) {
    failResponce(res);
  }
  successResponce(res, data);
}

async function userPost(req, res) {
  const data = req.body;
  const PostData = await getUserPost(data);
  if (PostData === false) {
    failResponce(res);
  }
  successResponce(res, PostData);
}
module.exports = {
  userOrder,
  userPost,
};

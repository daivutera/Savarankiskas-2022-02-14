const { successResponce, failResponce } = require('../helpers/helpers');
const {
  getUserOrder,
  getUserPost,
  getAggregatedArrayFromDb,
} = require('../models/userModel');

async function userOrder(req, res) {
  const assendingWay = req.params;
  const data = await getAggregatedArrayFromDb(assendingWay); //destytojo funkcija idejau vietoj mano pirmos parasytos
  if (data === false) {
    failResponce(res);
  }
  const allUsersWithMembershipName = data.data.map((userObj) => {
    return {
      ...userObj,
      membership: userObj.membership[0].name,
    };
  });
  successResponce(res, allUsersWithMembershipName);
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

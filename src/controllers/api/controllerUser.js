import userModel from "../../models/modelUsers.js";

async function getAllUsers(req, res) {
    const users = await userModel.findAll();
    res.json(users);
}

async function getUserExist(req, res) {
    const users = await userModel.findOne();
    res.json(users);
}

export const functions = {
 getAllUsers
}

export default functions;
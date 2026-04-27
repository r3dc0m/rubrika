import userModel from "../models/modelUsers.js";

async function getAllUsers() {
    const users = await userModel.findAll();
    return users;
}

async function getUserByEmail(email){
    const user = await userModel.findOne({where:{email}});
    return user;
}

async function getUserById(user_id){
    const user = await userModel.findByPk(user_id);
    return user;
}

async function createUser(data){
    const newUser = await userModel.create(data);
    return newUser;
}

export const functions = {
    getAllUsers,
    getUserByEmail,
    getUserById,
    createUser,
}

export default functions;
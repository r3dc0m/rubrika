import userModel from "../../models/modelUsers.js";


function getParsedId(id) {
    const idNum = parseInt(id);
    if (!idNum || isNaN(idNum)) {
        throw new IDNotNumberError();
    }
    return idNum;
}


async function getAllUsers(req, res) {
    const users = await userModel.findAll();
    res.json(users);
}

export const functions = {
 getAllUsers
}

export default functions;
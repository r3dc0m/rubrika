import appModel from "../../models/appModel.js";
//error

function getParsedId(id) {
    const idNum = parseInt(id);
    if (!idNum || isNaN(idNum)) {
        throw new IDNotNumberError();
    }
    return idNum;
}

async function getTableDefinition(req, res) {
    const users = await appModel.findAll();
    res.json(users);
}

export const functions = {
 getTableDefinition
}

export default functions;
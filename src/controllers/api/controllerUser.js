import userModel from "../../models/modelUsers.js";
<<<<<<< HEAD
//import { IDNotNumberError } from "../../utils/errors/genericErrors.js";
=======
>>>>>>> origin/dev


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
<<<<<<< HEAD
/*
async function getRideById(req, res) {
    const id = getParsedId(req.params.id);
    const ride = await rideModel.findByPk(id);
    res.json(ride);
}

async function createRide(req, res) {
    const newRide = await rideModel.create(req.ride);
    console.log("newRide",newRide)
    res.json(newRide);
}

async function updateRide(req, res) {
    const id = getParsedId(req.params.id)

    const updatedRide = await rideModel.update(req.body,{where:{id:id}});
    const ride = await rideModel.findByPk(id);

    res.json(ride)
}

async function deleteRide(req, res) {
    const id = getParsedId(req.params.id)
    const deletedRide = await rideModel.destroy({where:{id:id}});
    res.json(deletedRide);
}

async function setStatus(req, res) {
    const status = req.body.status;
    const id = getParsedId(req.params.id);
    const updatedRide = await rideModel.update( { status },{where:{id:id}});
    const ride = await rideModel.findByPk(id);

    res.json(ride)
}

export const functions = {
    getAllRides,
    getRideById,
    createRide,
    updateRide,
    setStatus,
    deleteRide
}

export default functions;*/
=======
>>>>>>> origin/dev

export const functions = {
 getAllUsers
}

export default functions;
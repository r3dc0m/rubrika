import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const userProjectsModel = sequelize.define("user_projects", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
},
    {
        tableName: 'user_projects',
        timestamps: false
    })

userProjectsModel.removeAttribute('id');

export default userProjectsModel;
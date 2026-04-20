import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const userProjectsModel = sequelize.define("user_projects", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
},
    {
        tableName: 'user_projects', // nombre real de la tabla en la base de datos
        timestamps: false
    })

export default userProjectsModel;
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const taskCriteriaModel = sequelize.define("task_criteria", {
    criteria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
    },
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
 
},
    {
        tableName: 'task_criteria', // nombre real de la tabla en la base de datos
        timestamps: false
    })

export default taskCriteriaModel;
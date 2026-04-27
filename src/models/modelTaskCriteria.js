import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const taskCriteriaModel = sequelize.define("task_criteria", {
    criteria_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull:false,
    }
 
},
    {
        tableName: 'task_criteria',
        timestamps: false
    })

taskCriteriaModel.removeAttribute('id');

export default taskCriteriaModel;
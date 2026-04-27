import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const tasksModel = sequelize.define("tasks", {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    when_created: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    due_date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    ponderation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    eval_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
},
    {
        tableName: 'tasks',
        timestamps: false
    })

export default tasksModel;
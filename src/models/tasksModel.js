import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const tasksModel = sequelize.define("tasks", {
    task_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name: {
        type: DataTypes.STRING,
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
        allowNull: false
    }
},
    {
        tableName: 'tasks', // nombre real de la tabla en la base de datos
        timestamps: false
    })

export default tasksModel;
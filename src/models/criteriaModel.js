import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const criteriaModel = sequelize.define("criteria", {
    criteria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    options: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    max_score: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    tableName: 'criteria', 
    timestamps: false      
});

export default criteriaModel;
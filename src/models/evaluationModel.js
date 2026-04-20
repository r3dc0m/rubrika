import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluationModel = sequelize.define("evaluations", {
    evaluation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id_REVIEWING: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    group_id_REVIEWED: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    marks: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    general_comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    when_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'evaluations',
    timestamps: false
});

export default evaluationModel;
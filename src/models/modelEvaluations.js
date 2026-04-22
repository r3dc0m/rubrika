import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluationModel = sequelize.define("evaluations", {
    evaluation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
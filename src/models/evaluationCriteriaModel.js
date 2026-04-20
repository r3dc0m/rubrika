import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluationCriteriaModel = sequelize.define("evaluations_criteria", {
    evaluations_evaluation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    criteria_criteria_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    mark: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'evaluations_criteria',
    timestamps: false
});

export default evaluationCriteriaModel;
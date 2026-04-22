import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluationCriteriaModel = sequelize.define("evaluations_criteria", {
<<<<<<< HEAD:src/models/modelEvaluationsCriteria.js
    evaluation_id: {
=======
    evaluations_id: {
>>>>>>> e77f025 (Cambios en los modelos: projects y evaluations_criteria):src/models/evaluationCriteriaModel.js
        type: DataTypes.INTEGER,
        allowNull: false
    },
    criteria_id: {
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

evaluationCriteriaModel.removeAttribute('id');

export default evaluationCriteriaModel;
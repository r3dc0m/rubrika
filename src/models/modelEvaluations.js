import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const evaluationModel = sequelize.define("evaluations", {
    
    user_id: {
        type: DataTypes.INTEGER,
<<<<<<< HEAD:src/models/evaluationModel.js
        allowNull: true
=======
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
>>>>>>> 1627ab8 (0420.1646):src/models/modelEvaluations.js
    },
    general_comment: {
        type: DataTypes.STRING(89),
        allowNull: true
    },
    when_created: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    evaluation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
}, {
    tableName: 'evaluations',
    timestamps: false
});

export default evaluationModel;
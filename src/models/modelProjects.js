import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const projectModel = sequelize.define("projects", {
    project_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    project_name: {
<<<<<<< HEAD
<<<<<<< HEAD:src/models/projectModel.js
        type: DataTypes.CHAR(34),
        allowNull: false
    },
    repo_link: {
        type: DataTypes.CHAR(55),
=======
        type: DataTypes.STRING(34),
        allowNull: false
    },
    repo_link: {
        type: DataTypes.STRING(55),
>>>>>>> 1627ab8 (0420.1646):src/models/modelProjects.js
=======
        type: DataTypes.VARCHAR(34),
        allowNull: false
    },
    repo_link: {
        type: DataTypes.VARCHAR(55),
>>>>>>> 19bb8be (Cambios en los modelos: projects y evaluations_criteria)
        allowNull: true
    }
}, {
    tableName: 'projects',
    timestamps: false
});

export default projectModel;
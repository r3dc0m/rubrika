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
        type: DataTypes.CHAR(34),
        allowNull: false
    },
    repo_link: {
        type: DataTypes.CHAR(55),
        allowNull: true
    }
}, {
    tableName: 'projects',
    timestamps: false
});

export default projectModel;
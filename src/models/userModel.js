import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const userModel = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users', // nombre real de la tabla en la base de datos
    timestamps: false
})

export default userModel;

import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

const userModel = sequelize.define("users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(55),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(13),
        allowNull: false
    }
}, {
    tableName: 'users',
    timestamps: false
})

export default userModel;

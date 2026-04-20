import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const criteriaModel = sequelize.define("criteria", {
    criteria_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    criteria_name: {
        type: DataTypes.STRING(144),
        allowNull: false,
        defaultValue: 'Criterio vacío'
    }
}, {
    tableName: 'criteria',
    timestamps: false
});

export default criteriaModel;
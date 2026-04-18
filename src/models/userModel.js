import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.js";

<<<<<<< Updated upstream

//const query = "SELECT  c.table_name,  c.column_name,  c.data_type,  c.udt_name,  c.is_nullable,  c.column_default,  c.character_maximum_length,  c.numeric_precision,  c.numeric_scale,  CASE WHEN pk.column_name IS NOT NULL THEN 1 ELSE 0 END AS is_primary_keyFROM information_schema.columns cLEFT JOIN (  SELECT kcu.table_schema, kcu.table_name, kcu.column_name  FROM information_schema.table_constraints tc  JOIN information_schema.key_column_usage kcu    ON tc.constraint_name = kcu.constraint_name   AND tc.table_schema = kcu.table_schema   AND tc.table_name = kcu.table_name  WHERE tc.constraint_type = 'PRIMARY KEY') pk  ON c.table_schema = pk.table_schema AND c.table_name = pk.table_name AND c.column_name = pk.column_nameWHERE c.table_schema = 'public'  AND c.table_name = 'users'ORDER BY c.ordinal_position;"

=======
>>>>>>> Stashed changes
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

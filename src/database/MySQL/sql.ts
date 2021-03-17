import { Sequelize } from "sequelize";
import { dbPassword, host, dbUsername, dbName} from "../../config";

module.exports = new Sequelize(dbName, dbUsername, dbPassword, {
    dialect: 'mysql',
    host: host
});



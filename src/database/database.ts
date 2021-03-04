import { ConnectionManager } from 'typeorm';
import  { Warns } from "./Models/Warns";
import { Giveaways } from "./Models/Giveaways";
import { Bans } from "./Models/Bans";
import { dbName, dbPassword, dbUsername, host} from "../config";

const connectionManager: ConnectionManager = new ConnectionManager()
connectionManager.create({
    name: dbName,
    type: 'sqlite',
    database: "./db.sqlite",
    entities: [
        Warns,
        Giveaways,
        Bans
    ]
});

export default  connectionManager;
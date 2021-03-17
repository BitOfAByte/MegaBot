import { ConnectionManager } from 'typeorm';
import { Giveaways } from "./Models/Giveaways";
import { dbName } from "../../config";


const connectionManager: ConnectionManager = new ConnectionManager()
connectionManager.create({
    name: dbName,
    type: 'sqlite',
    database: "./db.sqlite",
    entities: [
        Giveaways
    ]
});

console.log("Connected to the sqlite database...");
export default  connectionManager;
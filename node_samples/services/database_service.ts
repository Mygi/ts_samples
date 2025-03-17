import sqlite3 from 'sqlite3';
import { DataSource } from "typeorm"
import { User } from "../models/user_entity"


const data_source = "./data/sample.db"
export const myDataSource = new DataSource( {
    type: "sqlite",
    database: data_source
});
export async function execute(db:sqlite3.Database, sql: string)
 {
    return new Promise<void>((resolve, reject) => {
      db.exec(sql, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  };

  export async function create_user_table() {
    const db = new sqlite3.Database("./data/sample.db", sqlite3.OPEN_READWRITE);
    try {
        await execute(
          db,
          `CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            user_name TEXT NOT NULL UNIQUE,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            password TEXT NOT NULL
        )`
        );
      } catch (error) {
        console.log(error);
      } finally {
        db.close();
      }
  }

  export async function insert_default_user(): Promise<User> {
    var user = new User();
    user.firstName = "Administrator";
    user.lastName = "AXX";
    user.username = "admin";
    user.id  = 1;
    user.password = "cas1201nasda&";
   
    const resolve_user = await myDataSource.manager.save(user);
    return resolve_user;
  }
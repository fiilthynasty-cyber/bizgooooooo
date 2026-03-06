import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

var _db = null;
var _conn = null;

async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _conn = await mysql.createConnection(process.env.DATABASE_URL);
      _db = drizzle(_conn);
      console.log("[Database] Connected");
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

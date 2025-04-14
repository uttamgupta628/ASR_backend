import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // ✅ important for Render
  },
});

// Test connection
pool
  .connect()
  .then((client) => {
    console.log("✅ PostgreSQL connected successfully!");
    client.release();
  })
  .catch((err) => {
    console.error("❌ PostgreSQL connection error:", err);
  });

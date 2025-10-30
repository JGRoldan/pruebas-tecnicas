import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:xxx@xxx/neondb?sslmode=require&channel_binding=require",
  ssl: { rejectUnauthorized: false },
});

export default pool;

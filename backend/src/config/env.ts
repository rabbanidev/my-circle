import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const envConfig = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt: {
    access_secret: process.env.JWT_ACCESS_SECRET,
    access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    refress_secret: process.env.JWT_REFRESS_SECRET,
    refress_expires_in: process.env.JWT_REFRESS_EXPIRES_IN,
  },
  bcrypt_sald_rounds: process.env.BCRYPT_SALT_ROUNDS,
};

export default envConfig;

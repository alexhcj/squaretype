import dotenv from 'dotenv'

dotenv.config({
  path: `./config/.env.${process.env.NODE_ENV}`
})

export default {
  node_env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 9090,
  api: {
    url: process.env.API_URL,
    prefix: process.env.API_PREFIX,
    version: process.env.API_VERSION
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN
  },
  mongodb: {
    database: {
      connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/?retryWrites=true&w=majority&appName=Cluster0`,
      databaseName: process.env.DB_NAME
    }
  }
}

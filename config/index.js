import dotenv from 'dotenv'

dotenv.config({
  path: `./config/.env.${process.env.NODE_ENV}`
})

// Helper function to build MongoDB connection string
const getMongoDBConnectionString = () => {
  const isLocal = process.env.NODE_ENV === 'local'

  if (isLocal) {
    // Local MongoDB (Docker default - no auth)
    if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
      return `mongodb://${process.env.DB_SERVER}/${process.env.DB_NAME}`
    }
    // Local MongoDB with authentication
    return `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB_NAME}`
  }

  // Cloud MongoDB Atlas
  return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/?retryWrites=true&w=majority&appName=Cluster0`
}

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
      connectionString: getMongoDBConnectionString(),
      databaseName: process.env.DB_NAME
    }
  }
}
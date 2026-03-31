import { setServers } from 'node:dns/promises';

// Node.js v24+ DNS regression workaround on Windows:
// Forces DNS resolution through public resolvers to fix querySrv ETIMEOUT
// errors with MongoDB Atlas SRV connection strings.
// See: https://github.com/nodejs/node/pull/61453
setServers(['1.1.1.1', '8.8.8.8']);

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import config from './config/index.js'
import routes from './routes/index.js'
import errorHandler from "./middlewares/error-handler.js";
// import authRoute from './routes/auth.routes'

// config envs
const port = config.port
const node_env = config.node_env
const apiUrl = config.api.url
const apiPrefix = config.api.prefix
const apiVersion = config.api.version
const connectionString = config.mongodb.database.connectionString
const databaseName = config.mongodb.database.databaseName

// setup
const app = express()

// middlewares
app.use(cors({ credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use(`/${apiPrefix}/${apiVersion}`, routes)
app.use('/static', express.static('public'))
// app.use('/api/auth', authRoute)

app.use(errorHandler)

async function start() {
  try {
    await mongoose.connect(connectionString, {
      dbName: databaseName
    })
    app.listen(port || 9090, () => {
      console.log(
        `Port: ${port}`,
        '\n',
        `API version: ${apiVersion}`,
        '\n',
        `Env: ${node_env}`,
        '\n',
        `Base url: ${apiUrl}${port}/${apiPrefix}/${apiVersion}`
      )
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}

start()

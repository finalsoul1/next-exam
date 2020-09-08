import express from 'express'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookiePaser from 'cookie-parser'
import errorHandler from 'errorhandler'
// import { env } from '../../config'

export default (routes) => {
  const app = express()

  app.use(cors())
  app.use(compression())
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))
  app.use(bodyParser.json())
  app.use(cookiePaser())
  app.use(routes)
  app.use(errorHandler())

  return app
}

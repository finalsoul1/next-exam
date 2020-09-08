import next from 'next'
import express from './server/express'
import { Router } from 'express'
import { extractTokens, proxy } from './server/api'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const router = new Router()
router.post('/api/:type', extractTokens, proxy)
router.get('*', (req, res) => handle(req, res))

app.prepare().then(() => {
  const server = express(router)

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

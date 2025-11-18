import { Hono } from 'hono'
import { serve } from '@hono/node-server'

// Controllers
import membersController from '@/api/members'
import courtsController from '@/api/courts'

const app = new Hono()

app.route('/api/members', membersController)
app.route('/api/courts', courtsController)

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`)
  }
)

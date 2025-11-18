import { Hono, type Context } from 'hono'

import db from '@/db'
import courts from '@/db/schema/courts'

const app = new Hono()

app.get('/', async (c: Context) => {
  const courtsList = await db.select().from(courts)
  return c.json(courtsList)
})

app.post('/', async (c: Context) => {
  const body = await c.req.json()
  const court = await db.insert(courts).values(body)

  return c.json(court)
})

export default app
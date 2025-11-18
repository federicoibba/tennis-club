import { Hono, type Context } from 'hono'

import db from '@/db'
import courts from '@/db/schema/courts'
import { eq } from 'drizzle-orm'

const app = new Hono()

app.get('/', async (c: Context) => {
  const courtsList = await db.select().from(courts)
  return c.json(courtsList)
})

app.post('/', async (c: Context) => {
  const body = await c.req.json()
  const [court] = await db.insert(courts).values(body).returning()

  return c.json(court)
})

app.get('/:id', async (c: Context) => {
  const id = c.req.param('id')
  const [court] = await db.select().from(courts).where(eq(courts.id, Number(id)))

  if (!court) {
    return c.json({ error: 'Court not found' }, 404)
  }

  return c.json(court)
})

app.delete('/:id', async (c: Context) => {
  const id = c.req.param('id')
  const court = await db.delete(courts).where(eq(courts.id, Number(id))).returning()

  if (!court) {
    return c.json({ error: 'Court not found' }, 404)
  }

  return c.json(court[0])
})

export default app
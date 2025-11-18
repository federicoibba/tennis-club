import { Hono, type Context } from 'hono'
import { eq } from 'drizzle-orm'

import db from '@/db'
import members from '@/db/schema/members'

const app = new Hono()

app.get('/', async (c: Context) => {
  const list = await db.select().from(members)

  return c.json({ members: list })
})

app.get('/:id', async (c: Context) => {
  const id = c.req.param('id')
  const [member] = await db.select().from(members).where(eq(members.id, Number(id)))

  if (!member) {
    return c.json({ error: 'Member not found' }, 404)
  }

  return c.json(member)
})

app.post('/', async (c: Context) => {
  const body = await c.req.json()
  const [newMember] = await db.insert(members).values(body).returning()

  return c.json(newMember)
})

export default app
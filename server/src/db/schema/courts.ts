import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

const courtes = sqliteTable("courts", {
  id: integer().primaryKey(),
  name: text().notNull(),
  description: text().notNull(),
  price: real().notNull(),
  image: text().notNull(),
  createdAt: integer({ mode: 'timestamp' }),
  updatedAt: integer({ mode: 'timestamp' }),
});

export default courtes;
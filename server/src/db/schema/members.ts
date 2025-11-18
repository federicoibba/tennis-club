import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

type MemberType = "admin" | "member" | "coach";

const members = sqliteTable("members", {
  id: integer().primaryKey(),
  name: text().notNull(),
  type: text().$type<MemberType>().notNull(),
  description: text().notNull(),
  image: text().notNull(),
  createdAt: integer({ mode: 'timestamp' }).default(new Date()),
  updatedAt: integer({ mode: 'timestamp' }).default(new Date()),
});

export default members;

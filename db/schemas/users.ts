import { pgTable, serial, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
  active: integer('active').default(1),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;


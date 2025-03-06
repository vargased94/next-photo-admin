import { pgTable, serial, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const routes = pgTable('routes', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  route: varchar('route'),
  group: varchar('group'),
  active: integer('active').default(1),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type Route = InferSelectModel<typeof routes>;
export type NewRoute = InferInsertModel<typeof routes>;

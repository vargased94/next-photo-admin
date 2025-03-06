import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const contact = pgTable('contact', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  phone: text('phone'),
  message: text('message'),
  read: integer('read').default(0),
  active: integer('active').default(1),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type Contact = InferSelectModel<typeof contact>;
export type NewContact = InferInsertModel<typeof contact>;


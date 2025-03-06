import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";

export const albums = pgTable('albums', {
  id: serial('id').primaryKey(),
  name: text('name'),
  active: integer('active').default(1), 
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type Album = InferSelectModel<typeof albums>;
export type NewAlbum = InferInsertModel<typeof albums>;

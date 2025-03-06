import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { albums } from "./albums";

export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  name: text('name'),
  url: text('url'),
  active: integer('active').default(1),
  album_id: integer('album_id').references(() => albums.id),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type Photo = InferSelectModel<typeof photos>;
export type NewPhoto = InferInsertModel<typeof photos>;

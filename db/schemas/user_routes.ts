import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { users } from "./users";
import { routes } from "./routes";

export const user_routes = pgTable('user_routes', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').references(() => users.id),
  route_id: integer('route_id').references(() => routes.id),
  active: integer('active').default(1),
  created_at: timestamp('created_at', { mode: 'string' }).defaultNow(),
});

export type UserRoute = InferSelectModel<typeof user_routes>;
export type NewUserRoute = InferInsertModel<typeof user_routes>;
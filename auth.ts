import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./db/schemas";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      users: schema.users,
    }
  }), 
  emailAndPassword: {
    enabled: true,
    signUp: {
      enabled: true,
    }
  }
});
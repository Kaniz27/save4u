import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function main() {
  await connectDB();
  app.listen(env.port, () => {
    console.log(`[server] listening on http://localhost:${env.port}`);
  });
}

main().catch((err) => {
  console.error("[server] failed to start", err);
  process.exit(1);
});

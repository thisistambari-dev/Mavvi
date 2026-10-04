// Local filesystem storage for MVP. Swap to S3/Supabase in V2.
// Uploads live under public/uploads/ (gitignored).
import path from "path";

export const uploadsDir = path.join(process.cwd(), "public", "uploads");

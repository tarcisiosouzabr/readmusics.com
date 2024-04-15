import database from "infra/database.js";

export default async function status(request, response) {
  database.connect();
  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

import connection from "../database.js";

async function getAllTools() {
  return await connection.query("SELECT * FROM tools");
}

async function postTool({ title, link, description }) {
  return await connection.query(
    "INSERT INTO tools (title,link,description) VALUES ($1,$2,$3) RETURNING id",
    [title, link, description]
  );
}

async function deleteTool(id) {
  await connection.query("DELETE FROM tags WHERE tool_id=$1", [id]);
  await connection.query("DELETE FROM tools WHERE id=$1", [id]);
}

async function getOneTool(id){
  return await connection.query("SELECT * FROM tools WHERE id=$1", [id])
}

export { getAllTools, postTool, deleteTool, getOneTool };

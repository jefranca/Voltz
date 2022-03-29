import connection from "../database.js";

async function getAllTools() {
  return await connection.query("SELECT * FROM tools");
}

async function getTagsFromTool(toolId) {
  const allTags = await connection.query(
    "SELECT name FROM tags WHERE tool_id=$1",
    [toolId]
  );
  return allTags.rows;
}

async function postTool({ title, link, description }) {
  return await connection.query(
    "INSERT INTO tools (title,link,description) VALUES ($1,$2,$3) RETURNING id",
    [title, link, description]
  );
}

async function postTags(tag, id) {
  await connection.query(
    "INSERT INTO tags (name,tool_id) VALUES ($1,$2)",[tag,id]
  );
}

async function deleteTool(id){
    await connection.query("DELETE FROM tags WHERE tool_id=$1", [id]);
    await connection.query("DELETE FROM tools WHERE id=$1" ,[id])
}

export { getAllTools, getTagsFromTool, postTool, postTags, deleteTool };

import connection from "../database.js";

async function getTagsFromTool(toolId) {
  const allTags = await connection.query(
    "SELECT name FROM tags WHERE tool_id=$1",
    [toolId]
  );
  return allTags.rows;
}

async function postTags(tag, id) {
  await connection.query("INSERT INTO tags (name,tool_id) VALUES ($1,$2)", [
    tag,
    id,
  ]);
}

export { getTagsFromTool, postTags };

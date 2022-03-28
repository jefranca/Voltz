import connection from "../database.js";

async function getAllTools(){
    return await connection.query("SELECT * FROM tools")
}
async function getTagsFromTool(toolId){
    const allTags =  await connection.query("SELECT name FROM tags WHERE tool_id=$1",[toolId])
    return allTags.rows;
}

export{ getAllTools,getTagsFromTool };
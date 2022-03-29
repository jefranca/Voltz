import * as toolsRepository from "../repositories/toolsRepository.js";

async function getAllTools() {
  const allTools = await toolsRepository.getAllTools();
  let result = allTools.rows;

  for (let i = 0; i < result.length; i++) {
    const allTags = await toolsRepository.getTagsFromTool(i + 1);
    result[i].tags = [];
    allTags.map((tag) => {
      result[i].tags.push(tag.name);
    });
  }

  return await result;
}

async function postTool(tool) {
  const { tags } = tool;
  const toolId = await toolsRepository.postTool(tool);
  const { id } = toolId.rows[0];
  await tags.forEach((tag) => {
    toolsRepository.postTags(tag, id);
  });
}

async function deleteTool(id) {
  await toolsRepository.deleteTool(id);
}

export { getAllTools, postTool, deleteTool };

import * as toolsRepository from "../repositories/toolsRepository.js";
import * as tagsRepository from "../repositories/tagsRepository.js";

async function getAllTools() {
  const allTools = await toolsRepository.getAllTools();
  let result = allTools.rows;
  for (let i = 0; i < result.length; i++) {
    const allTags = await tagsRepository.getTagsFromTool(result[i].id);
    result[i].tags = [];

    await allTags.map((tag) => {
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
    tagsRepository.postTags(tag, id);
  });
}

async function deleteTool(id) {
  await toolsRepository.deleteTool(id);
}

async function getOneTool(id){
  return await toolsRepository.getOneTool(id);
}

export { getAllTools, postTool, deleteTool, getOneTool };

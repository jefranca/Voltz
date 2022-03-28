import * as toolsRepository from "../repositories/toolsRepository.js";

async function getAllTools() {
  const allTools = await toolsRepository.getAllTools();
  let result = allTools.rows;

  for (let i = 0; i < result.length; i++) {
    const allTags = await toolsRepository.getTagsFromTool(i+1);
    result[i].tags = [];
    allTags.map((tag) => {
      result[i].tags.push(tag.name);
    });
  }

  return await result;
}

export { getAllTools };

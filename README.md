# Voltz

## Languages & frameworks

<div align="center"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt=""/><span>&nbsp;</span>
 <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt=""/>  <span>&nbsp;</span>
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt=""/></div>
 
 ## Routes

### GET /tools
This route will list all tools included.
Example:

```
[
  {
    "id": 1,
    "title": "Notion",
    "link": "https://notion.so",
    "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
    "tags": [
      "organization",
      "planning",
      "collaboration",
      "writing",
      "calendar"
    ]
  },
  {
    "id": 2,
    "title": "json.server",
    "link": "https://github.com/typicode/json-server",
    "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding cha tags:",
    "tags": [
      "api",
      "json",
      "schema",
      "node",
      "github",
      "rest"
    ]
  },
  {
    "id": 3,
    "title": "fastify",
    "link": "https://www.fastify.io/",
    "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
    "tags": [
      "web",
      "framework",
      "node",
      "http2",
      "https",
      "localhost"
    ]
  }
]

```

### POST /tools
This route will post a new tool.
You need to send the new tool
Example:
```
{
  "title": "hotel",
  "link": "https://github.com/typicode/hotel",
  "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box
  "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}
```

### DELETE /tools
This route will delete a tool
You need to send the tool id you wants to delete on the website
Example: If I want to delete the id:1, I'll send:
```
  localhost:3000/tools/1
```

## 🚀 Instalando o Desafio

Siga os passos,

Clone esse repositorio
```
git clone https://github.com/jefranca/voltz.git
```

Rode o comenado para instalar as dependências
```
npm i
```

Inicie usando
```
npm start
```

Use para desenvolvimento
```
npm run start:dev
```

## Made By

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/87549949?s=400&u=6d0fc77e66618e9da7b5dec5ce3f0b1b236aa10a&v=4" width="100px;" alt="Foto do jefranca no GitHub"/><br>
        <sub>
          <b>Jean França</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

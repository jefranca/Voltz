import faker from "faker-br";
import supertest from "supertest";

import app from "../../src/app.js";
import connection from "../../src/database.js";
import "../../src/setup.js";

const request = supertest(app);

beforeAll(async () => {
  await connection.query("TRUNCATE TABLE tags; TRUNCATE TABLE tools");
});

describe("POST /tools", () => {
  it("returns 201 for valid params", async () => {
    const body = {
      title: faker.name.title(),
      link: faker.internet.url(),
      description: faker.lorem.text(),
      tags: [faker.name.title(), faker.name.title()],
    };

    const result = await request.post("/tools").send(body);
    expect(result.status).toEqual(201);
  });

  test("returns 400 for invalid params", async () => {
    const body = {
      title: faker.name.title(),
      link: faker.internet.url(),
      description: faker.lorem.text(),
      tgs: [faker.name.title(), faker.name.title()],
    };

    const result = await request.post("/tools").send(body);
    expect(result.status).toEqual(400);
  });

  it("returns 409 for conflict", async () => {
    const link = faker.internet.url();
    const body = {
      title: faker.name.title(),
      link: link,
      description: faker.lorem.text(),
      tags: [faker.name.title(), faker.name.title()],
    };

    const body2 = {
      title: faker.name.title(),
      link: link,
      description: faker.lorem.text(),
      tags: [faker.name.title(), faker.name.title()],
    };

    await request.post("/tools").send(body);
    const result = await request.post("/tools").send(body2);
    expect(result.status).toEqual(409);
  });
});

describe("GET /tools", () => {
  it("returns 200", async () => {
    const result = await request.get("/tools");

    expect(result.status).toEqual(200);
  });
});

describe("DELETE /tools/:id", () => {
  it("returns 200 when deleted a tool", async () => {
    const id = await connection.query(
      "INSERT INTO tools (title,link,description) VALUES ('Notion','https://notion.so','All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ') RETURNING id"
    );

    const result = await request.delete(`/tools/${id.rows[0].id}`);

    expect(result.status).toEqual(200);
  });

  it("returns 404 when deleted a tool", async () => {
    const result = await request.delete("/tools/");

    expect(result.status).toEqual(404);
  });

  it("returns 400 when the tool does not exist", async () => {
    const result = await request.delete("/tools/0");

    expect(result.status).toEqual(400);
  });
});

import faker from "faker-br";
import supertest from "supertest";

import app from "../../src/app.js";
import "../../src/setup.js";

const request = supertest(app);

describe("POST /tools", () => {
  it("returns 201 for valid params", async () => {
    const body = {
      title: faker.name.title(),
      link: faker.internet.url(),
      description: faker.lorem.text(),
      tags: [faker.name.title(),faker.name.title()]
    };

    const result = await request.post("/tools").send(body);
    expect(result.status).toEqual(201);
  });

  test("returns 400 for invalid params", async () => {
    const body = {
      title: faker.name.title(),
      link: faker.internet.url(),
      description: faker.lorem.text(),
      tgs: [faker.name.title(),faker.name.title()]
    };

    const result = await request.post("/tools").send(body);
    expect(result.status).toEqual(400);
  });

  it("returns 409 for conflict", async () => {
    const link=faker.internet.url();
    const body = {
      title: faker.name.title(),
      link: link,
      description: faker.lorem.text(),
      tags: [faker.name.title(),faker.name.title()]
    };

    const body2 = {
      title: faker.name.title(),
      link: link,
      description: faker.lorem.text(),
      tags: [faker.name.title(),faker.name.title()]
    };
  
    await request.post("/tools").send(body);
    const result = await request.post("/tools").send(body2);
    expect(result.status).toEqual(409);
  });
});

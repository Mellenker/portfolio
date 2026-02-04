/* DOESN'T WORK YET WITH NETLIFY BACKEND */

import { describe, it, expect } from "vitest";
const request = require("supertest");

const app = require("../server");

describe("Server API", () => {
  it("responds with projects array", async () => {
    const res = await request(app).get(
      "http://localhost:8888/.netlify/functions/get-projects",
    );
    console.log(res);
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
    for (const project of res.body) {
      expect(Array.isArray(project.tech_stack)).toBe(true);
    }
  });
});

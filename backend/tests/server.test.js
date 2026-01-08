import { describe, it, expect } from "vitest";
const request = require("supertest");

const app = require("../server");

describe("Server API", () => {
  it("responds with projects array", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(res.body).toHaveProperty("projects");
    expect(Array.isArray(res.body.projects)).toBe(true);
    for (const project of res.body.projects) {
      expect(Array.isArray(project.tech_stack)).toBe(true);
    }
  });
});

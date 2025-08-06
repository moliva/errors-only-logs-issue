import { describe, it } from "node:test";
import assert from "node:assert";

describe("test suite 1", () => {
  it("example 1", () => {
    assert.strictEqual(true, true);
  });

  it("example 2", () => {
    assert.strictEqual(true, false);
  });
});

describe("test suite 2", () => {
  it("example 1", () => {
    assert.strictEqual(true, true);
  });

  it("example 2", () => {
    assert.strictEqual(true, true);
  });
});

import { describe, expect, it } from "vitest";
import { buildPptx } from "../src";

describe("scaffold", () => {
  it("exports buildPPTX", () => {
    expect(typeof buildPptx).toBe("function");
  });
});

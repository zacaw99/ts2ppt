import { describe, it, expect } from "vitest";
import { PptBuilder, SlideBuilder } from "../src";

describe("public API scaffold", () => {
  it("exposes PptBuilder and SlideBuilder", () => {
    const ppt = new PptBuilder();
    expect(ppt).toBeInstanceOf(PptBuilder);
    expect(typeof ppt.canvas).toBe("function");
    expect(typeof ppt.metadata).toBe("function");
    expect(typeof ppt.addSlide).toBe("function");
    expect(typeof ppt.loop).toBe("function");
    expect(typeof ppt.emit).toBe("function");

    const slide = new SlideBuilder();
    expect(slide).toBeInstanceOf(SlideBuilder);
    expect(typeof slide.text).toBe("function");
    expect(typeof slide.image).toBe("function");
  });

  it("emit returns a Promise (will reject until implemented)", async () => {
    const ppt = new PptBuilder().canvas({
      widthPx: 1280,
      heightPx: 720,
      dpi: 96,
    });
    await expect(ppt.emit()).rejects.toThrow(/Not implemented/i);
  });
});

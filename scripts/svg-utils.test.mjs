import { describe, expect, it } from "vitest";
import { escapeXml } from "./svg-utils.mjs";

describe("escapeXml", () => {
  it("escapes XML-sensitive characters in staff details", () => {
    expect(escapeXml(`Founder & CEO <"Joseph's role">`)).toBe(
      "Founder &amp; CEO &lt;&quot;Joseph&apos;s role&quot;&gt;",
    );
  });

  it("leaves ordinary staff details unchanged", () => {
    expect(escapeXml("Joseph Mburu")).toBe("Joseph Mburu");
  });
});

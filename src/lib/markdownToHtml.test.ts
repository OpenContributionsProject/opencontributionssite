import { describe, expect, it } from "vitest";

import markdownToHtml from "./markdownToHtml";

describe("markdownToHtml", () => {
	it("returns a blank string when markdown is blank", async () => {
		const markdown = "";

		const actual = await markdownToHtml(markdown);

		expect(actual).toBe("");
	});

	it("returns content when markdown contains content", async () => {
		const markdown = "# Hello, world!";

		const actual = await markdownToHtml(markdown);

		expect(actual).toBe("<h1>Hello, world!</h1>\n");
	});
});

import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";

const remarkPlugins = [remarkGfm];

export default async function markdownToHtml(markdown: string) {
	return (await compile(markdown, { remarkPlugins })).toString();
}

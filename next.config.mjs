import nextMdx from "@next/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const withMDX = nextMdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeAutolinkHeadings, rehypeSlug],
	},
});

export default withMDX({
	...(process.env.CUSTOM_BASE_PATH && {
		basePath: process.env.CUSTOM_BASE_PATH,
	}),
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	reactStrictMode: true,
});

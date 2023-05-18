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

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		mdxRs: true,
	},
};

export default withMDX(nextConfig);

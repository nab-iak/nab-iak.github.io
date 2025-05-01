import { toString } from 'mdast-util-to-string';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>

/* Use the post's first paragraph as the excerpt */
function remarkExcerpt() {
	return (tree, { data }) => {
		let excerpt = "";
		for (const node of tree.children) {
			if (node.type !== "paragraph") {
				continue;
			}
			excerpt = toString(node);
			break;
		}
		data.astro.frontmatter.excerpt = excerpt;
	};
}

export { remarkExcerpt };

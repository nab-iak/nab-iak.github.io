import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_UGlnaItR.mjs';

const html = () => "<blockquote>\n<ul>\n<li>Cover Pic by <a href=\"https://www.pixiv.net/artworks/129415764\">@超凶の狄璐卡</a></li>\n</ul>\n</blockquote>\n<center><h1>-站位站位-</h1></center>";

				const frontmatter = {"title":"通路分析","published":"2025-05-01T00:00:00.000Z","image":"./p5_cover.png","description":"GO,KEGG,GSEA,GSVA的通路分析与作图","category":"Bioinformatics","tags":["RNA-seq","R","ZH-CN","Pathway","Visualization"],"draft":false,"lang":"en","minutes":1,"words":16,"excerpt":""};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p5/p5.md";
				const url = undefined;
				function rawContent() {
					return "   \n             \n                     \n                       \n                                        \n                          \n                                             \n             \n          \n   \n> - Cover Pic by [@超凶の狄璐卡](https://www.pixiv.net/artworks/129415764)\n\n<center><h1>-站位站位-</h1></center>\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

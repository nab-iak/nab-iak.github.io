import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_UGlnaItR.mjs';

const html = () => "<blockquote>\n<p>Cover Pic by <a href=\"https://www.pixiv.net/artworks/121353048\">@晕欧欧</a></p>\n</blockquote>\n<section><h2 id=\"开启我的blog\">开启我的blog<a class=\"anchor\" href=\"#开启我的blog\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>随便写写各种<br>\n以摸鱼为主<br>\n有什么想到的再追加</p></section>";

				const frontmatter = {"title":"Blog创建完成","published":"2025-04-17T00:00:00.000Z","image":"./p1_cover.jpg","description":"随便写点什么吧","category":"MISC","tags":["MISC"],"draft":false,"lang":"en","minutes":1,"words":32,"excerpt":"随便写写各种以摸鱼为主有什么想到的再追加"};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p1/p1.md";
				const url = undefined;
				function rawContent() {
					return "   \n                 \n                     \n                       \n                      \n                \n            \n             \n          \n   \n> Cover Pic by [@晕欧欧](https://www.pixiv.net/artworks/121353048)\n\n## 开启我的blog\n\n随便写写各种  \n以摸鱼为主  \n有什么想到的再追加  \n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"开启我的blog","text":"开启我的blog#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

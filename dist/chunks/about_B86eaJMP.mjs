import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro/server_UGlnaItR.mjs';
import { g as getImage } from './_astro_assets_BP6Q5xOR.mjs';
import Astro__ZkowWH from './about_cover_DFXysvYb.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./about_cover\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./about_cover.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZkowWH, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences(html) {
			const imageSources = await images(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html = async () => await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./about_cover.jpg&#x22;,&#x22;alt&#x22;:&#x22;about_cover&#x22;,&#x22;index&#x22;:0}\"></p>\n<blockquote>\n<ul>\n<li>Cover Pic by <a href=\"https://www.pixiv.net/artworks/127621011\">@若若秋</a></li>\n</ul>\n</blockquote>\n<section><h2 id=\"about\">About<a class=\"anchor\" href=\"#about\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><p>Jiawei Wan</p><ul>\n<li>PhD in Sports Medicine at University of Tsukuba, Japan.</li>\n<li>Now is working at Lab of Sports Medicine, University of Tsukuba, Japan.</li>\n</ul></section>\n<section><h2 id=\"research-field\">Research Field<a class=\"anchor\" href=\"#research-field\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>Epidemiology</li>\n<li>Preventive Medicine</li>\n<li>Public Health</li>\n<li>Bioinformatics</li>\n</ul></section>\n<section><h2 id=\"contact\">Contact<a class=\"anchor\" href=\"#contact\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><ul>\n<li>Email: bankaicn ※ gmail.com\n(please replace ※ with @)</li>\n<li>Twitter: <a href=\"https://x.com/wujiaoshuiduole\">@wujiaoshuiduole</a></li>\n<li>Discord: nab_iak with the <a href=\"https://discord.gg/kXCRZH9Zrg\">Server</a></li>\n<li>Github: <a href=\"https://github.com/nab-iak\">@nab-iak</a></li>\n<li>Researchmap: <a href=\"https://researchmap.jp/bankaicn\">Jiawei Wan</a></li>\n<li>Research Gate: <a href=\"https://www.researchgate.net/profile/Jiawei_Wan4?ev=hdr_xprf\">Jiawei Wan</a></li>\n</ul></section>\n<section><h2 id=\"sources-of-pictures\">Sources of pictures<a class=\"anchor\" href=\"#sources-of-pictures\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><blockquote>\n<ul>\n<li>Avatar Pic by <a href=\"https://www.pixiv.net/artworks/119820867\">@堇</a></li>\n<li>Banner Pic by <a href=\"https://www.pixiv.net/artworks/127621011\">@若若秋</a></li>\n</ul>\n</blockquote></section>");
	

				const frontmatter = {"minutes":1,"words":63,"excerpt":"about_cover"};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/about.md";
				const url = undefined;
				function rawContent() {
					return "![about_cover](./about_cover.jpg)\n>\n> - Cover Pic by [@若若秋](https://www.pixiv.net/artworks/127621011)\n\n## About\n\nJiawei Wan\n\n- PhD in Sports Medicine at University of Tsukuba, Japan.\n- Now is working at Lab of Sports Medicine, University of Tsukuba, Japan.\n\n## Research Field\n\n- Epidemiology\n- Preventive Medicine\n- Public Health\n- Bioinformatics\n\n## Contact\n\n- Email: bankaicn ※ gmail\\.com\n(please replace ※ with @)\n- Twitter: [@wujiaoshuiduole](https://x.com/wujiaoshuiduole)\n- Discord: nab_iak with the [Server](https://discord.gg/kXCRZH9Zrg)\n- Github: [@nab-iak](https://github.com/nab-iak)\n- Researchmap: [Jiawei Wan](https://researchmap.jp/bankaicn)\n- Research Gate: [Jiawei Wan](https://www.researchgate.net/profile/Jiawei_Wan4?ev=hdr_xprf)\n\n## Sources of pictures\n>\n> - Avatar Pic by [@堇](https://www.pixiv.net/artworks/119820867)\n> - Banner Pic by [@若若秋](https://www.pixiv.net/artworks/127621011)\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"about","text":"About#"},{"depth":2,"slug":"research-field","text":"Research Field#"},{"depth":2,"slug":"contact","text":"Contact#"},{"depth":2,"slug":"sources-of-pictures","text":"Sources of pictures#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

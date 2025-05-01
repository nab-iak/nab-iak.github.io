import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro/server_UGlnaItR.mjs';
import { g as getImage } from './_astro_assets_BP6Q5xOR.mjs';
import Astro__14LzsW from './work_cover_D-4_jz0b.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./work_cover\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./work_cover.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__14LzsW, ...props});
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

		const html = async () => await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./work_cover.jpg&#x22;,&#x22;alt&#x22;:&#x22;cover&#x22;,&#x22;index&#x22;:0}\"></p>\n<blockquote>\n<ul>\n<li>Cover Pic by <a href=\"https://www.pixiv.net/artworks/121031925\">@超凶の狄璐卡</a></li>\n</ul>\n</blockquote>\n<section><h2 id=\"works\">Works<a class=\"anchor\" href=\"#works\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"2025\">2025<a class=\"anchor\" href=\"#2025\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><p>(Bioinformatics)</p><ul>\n<li>Using RNA-seq to explore the mechanism that how acupuncture effects on muscle.</li>\n</ul></section><section><h3 id=\"2024\">2024<a class=\"anchor\" href=\"#2024\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><p>(Epidemiology)</p><ul>\n<li>The important factors effecting on physical activity among young and middle-aged adults.\n<ul>\n<li>Using meta-analysis to find out the effective intervention components.</li>\n<li>Using machine learning to find out the factors relating to acquirement of exercise habits.</li>\n</ul>\n</li>\n</ul></section></section>");
	

				const frontmatter = {"minutes":1,"words":54,"excerpt":"cover"};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/work.md";
				const url = undefined;
				function rawContent() {
					return "![cover](./work_cover.jpg)\n>\n> - Cover Pic by [@超凶の狄璐卡](https://www.pixiv.net/artworks/121031925)\n\n## Works\n\n### 2025\n\n(Bioinformatics)\n\n- Using RNA-seq to explore the mechanism that how acupuncture effects on muscle.\n\n### 2024\n\n(Epidemiology)\n\n- The important factors effecting on physical activity among young and middle-aged adults.\n  - Using meta-analysis to find out the effective intervention components.\n  - Using machine learning to find out the factors relating to acquirement of exercise habits.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"works","text":"Works#"},{"depth":3,"slug":"2025","text":"2025#"},{"depth":3,"slug":"2024","text":"2024#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

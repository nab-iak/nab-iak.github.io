import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro/server_UGlnaItR.mjs';
import { g as getImage } from './_astro_assets_BP6Q5xOR.mjs';
import Astro__b6I6E from './activity_cover_9Sl8MPwn.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./activity_cover\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./activity_cover.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__b6I6E, ...props});
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

		const html = async () => await updateImageReferences("<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./activity_cover.jpg&#x22;,&#x22;alt&#x22;:&#x22;activity_cover&#x22;,&#x22;index&#x22;:0}\"></p>\n<blockquote>\n<ul>\n<li>Cover Pic by <a href=\"https://www.pixiv.net/artworks/120879904\">@ﾍﾅﾁｮｺ</a></li>\n</ul>\n</blockquote>\n<section><h2 id=\"research-activity\">Research Activity<a class=\"anchor\" href=\"#research-activity\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"papers\">Papers<a class=\"anchor\" href=\"#papers\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><ins><b>Wan J</b></ins>, Kim J, Tsujimoto T, et al. Effectiveness and Components of Health Behavior Interventions on Increasing Physical Activity Among Healthy Young and Middle-Aged Adults: A Systematic Review with Meta-Analyses. Behav Sci (Basel). 2024;14(12):1224. Published 2024 Dec 19. doi:10.3390/bs14121224</li>\n<li><ins><b>Wan J</b></ins>, Wakaba K, Onoue T, Tsushita K, Nakata Y. Factors associated with acquiring exercise habits through health guidance for metabolic syndrome among middle-aged Japanese workers: A machine learning approach. Prev Med Rep. 2024;48:102915. Published 2024 Oct 19. doi:10.1016/j.pmedr.2024.102915</li>\n</ul></section><section><h3 id=\"presentations\">Presentations<a class=\"anchor\" href=\"#presentations\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><ins><b>Wan J</b></ins>, Kim J, Tsujimoto T, Mizushima R, Shi Y, Kiyohara K, Nakata Y. Effectiveness and Components of Health Behavior Interventions on Increasing Physical Activity among Healthy Young and Middle-aged Adults: A Systematic Review with Meta-Analyses. ARIHHP Human High Performance International Forum 2025. 2025年3月1日.</li>\n<li>水島諒子, Shi Yutong, <ins><b>Wan Jiawei</b></ins>, 清水和弘, 元永恵子, 亀井明子, 小井土 正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 中田由夫. 大学サッカー選手を対象とした栄養講習の課題: 質的研究. 中田由夫 第71回日本栄養改善学会学術総会. 2024年9月7日.</li>\n<li>水島諒子, Shi Yutong, <ins><b>Wan Jiawei</b></ins>, 清水和弘, 元永恵子, 亀井明子, 小井土 正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 中田由夫. アスリートを対象とした栄養介入試験による食事バランスガイド遵守スコアの変化. 第78回日本体力医学会大会. 2024年9月4日.</li>\n<li>Shi Yutong, 于欣陽, 三ツ橋利彩, <ins><b>Wan Jiawei</b></ins>, 水島諒子, 中田由夫. コロナ禍における犬の飼育者の散歩行動の変化と自己効力感の関連. 第78回日本体力医学会大会. 2024年9月2日.</li>\n<li><ins><b>Wan Jiawei</b></ins>, 若葉京良, 津下一代, 中田由夫. 特定保健指導を受けた中年勤労者の運動習慣獲得要因の探索～機械学習を用いて～. 第26回日本運動疫学会学術総会. 2024年6月29日.</li>\n<li>Shi Yutong, 于欣陽, 三ツ橋利彩, <ins><b>Wan Jiawei</b></ins>, 水島諒子, 中田由夫. コロナ禍前後における犬の飼育と運動自己効力感が労働者の身体活動量に及ぼす影響. 第26回日本運動疫学会学術総会. 2024年6月29日.</li>\n<li>水島諒子, 中田由夫, 石雨彤, <ins><b>万佳偉</b></ins>, 元永恵子, 亀井明子, 藤原昌, 中村有紀, 小井土正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 清水和弘. アスリートを対象とした栄養講習の有効性検証: ランダム化比較試験. 第70回日本栄養改善学会学術総会. 2023年9月.</li>\n<li><ins><b>Wan Jiawei</b></ins>, 若葉 京良, 津下 一代, 中田 由夫. 壮年期就労者を対象とした生活習慣病予防のための動機付け支援の技術開発に関する研究. 第23回日本健康支援学会年次学術大会・第9回日本介護予防・健康づくり学会大会・ 京都滋賀体育学会第151回大会. 2022年3月5日.</li>\n</ul></section><section><h3 id=\"awards\">Awards<a class=\"anchor\" href=\"#awards\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li><ins><b>Wan Jiawei</b></ins>. 優秀論文賞. 筑波大学人間総合科学研究群スポーツ医学学位プログラム. 2025年3月.</li>\n<li>水島諒子, 中田由夫, 石雨彤, <ins><b>万佳偉</b></ins>, 元永恵子, 亀井明子, 藤原昌, 中村有紀, 小井土正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 清水和弘. アスリートを対象とした栄養講習の有効性検証: ランダム化比較試験. 若手学会優秀発表賞（第70回日本栄養改善学会学術総会）.日本栄養改善学会. 2023年9月.</li>\n</ul></section></section>");
	

				const frontmatter = {"minutes":4,"words":878,"excerpt":"activity_cover"};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/activity.md";
				const url = undefined;
				function rawContent() {
					return "![activity_cover](./activity_cover.jpg)\n\n> - Cover Pic by [@ﾍﾅﾁｮｺ](https://www.pixiv.net/artworks/120879904)\n\n## Research Activity\n\n### Papers\n\n- <ins><b>Wan J</b></ins>, Kim J, Tsujimoto T, et al. Effectiveness and Components of Health Behavior Interventions on Increasing Physical Activity Among Healthy Young and Middle-Aged Adults: A Systematic Review with Meta-Analyses. Behav Sci (Basel). 2024;14(12):1224. Published 2024 Dec 19. doi:10.3390/bs14121224\n- <ins><b>Wan J</b></ins>, Wakaba K, Onoue T, Tsushita K, Nakata Y. Factors associated with acquiring exercise habits through health guidance for metabolic syndrome among middle-aged Japanese workers: A machine learning approach. Prev Med Rep. 2024;48:102915. Published 2024 Oct 19. doi:10.1016/j.pmedr.2024.102915\n\n### Presentations\n\n- <ins><b>Wan J</b></ins>, Kim J, Tsujimoto T, Mizushima R, Shi Y, Kiyohara K, Nakata Y. Effectiveness and Components of Health Behavior Interventions on Increasing Physical Activity among Healthy Young and Middle-aged Adults: A Systematic Review with Meta-Analyses. ARIHHP Human High Performance International Forum 2025. 2025年3月1日.\n- 水島諒子, Shi Yutong, <ins><b>Wan Jiawei</b></ins>, 清水和弘, 元永恵子, 亀井明子, 小井土 正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 中田由夫. 大学サッカー選手を対象とした栄養講習の課題: 質的研究. 中田由夫 第71回日本栄養改善学会学術総会. 2024年9月7日.\n- 水島諒子, Shi Yutong, <ins><b>Wan Jiawei</b></ins>, 清水和弘, 元永恵子, 亀井明子, 小井土 正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 中田由夫. アスリートを対象とした栄養介入試験による食事バランスガイド遵守スコアの変化. 第78回日本体力医学会大会. 2024年9月4日.\n- Shi Yutong, 于欣陽, 三ツ橋利彩, <ins><b>Wan Jiawei</b></ins>, 水島諒子, 中田由夫. コロナ禍における犬の飼育者の散歩行動の変化と自己効力感の関連. 第78回日本体力医学会大会. 2024年9月2日.\n- <ins><b>Wan Jiawei</b></ins>, 若葉京良, 津下一代, 中田由夫. 特定保健指導を受けた中年勤労者の運動習慣獲得要因の探索～機械学習を用いて～. 第26回日本運動疫学会学術総会. 2024年6月29日.\n- Shi Yutong, 于欣陽, 三ツ橋利彩, <ins><b>Wan Jiawei</b></ins>, 水島諒子, 中田由夫. コロナ禍前後における犬の飼育と運動自己効力感が労働者の身体活動量に及ぼす影響. 第26回日本運動疫学会学術総会. 2024年6月29日.\n- 水島諒子, 中田由夫, 石雨彤, <ins><b>万佳偉</b></ins>, 元永恵子, 亀井明子, 藤原昌, 中村有紀, 小井土正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 清水和弘. アスリートを対象とした栄養講習の有効性検証: ランダム化比較試験. 第70回日本栄養改善学会学術総会. 2023年9月.\n- <ins><b>Wan Jiawei</b></ins>, 若葉 京良, 津下 一代, 中田 由夫. 壮年期就労者を対象とした生活習慣病予防のための動機付け支援の技術開発に関する研究. 第23回日本健康支援学会年次学術大会・第9回日本介護予防・健康づくり学会大会・ 京都滋賀体育学会第151回大会. 2022年3月5日.\n\n### Awards\n\n- <ins><b>Wan Jiawei</b></ins>. 優秀論文賞. 筑波大学人間総合科学研究群スポーツ医学学位プログラム. 2025年3月.\n- 水島諒子, 中田由夫, 石雨彤, <ins><b>万佳偉</b></ins>, 元永恵子, 亀井明子, 藤原昌, 中村有紀, 小井土正亮, 玉井伸典, 三ツ橋利彩, 佐久間彩, 早川竜太, 清水和弘. アスリートを対象とした栄養講習の有効性検証: ランダム化比較試験. 若手学会優秀発表賞（第70回日本栄養改善学会学術総会）.日本栄養改善学会. 2023年9月.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"research-activity","text":"Research Activity#"},{"depth":3,"slug":"papers","text":"Papers#"},{"depth":3,"slug":"presentations","text":"Presentations#"},{"depth":3,"slug":"awards","text":"Awards#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

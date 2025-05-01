import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, s as spreadAttributes } from './astro/server_UGlnaItR.mjs';
import { g as getImage } from './_astro_assets_BP6Q5xOR.mjs';
import Astro__ZN5p11 from './image_1_DjFt6fme.mjs';
import Astro__ZN1kOk from './image_2_LBht876l.mjs';
import Astro__ZMWgCD from './image_3_BU7VwyW0.mjs';
import Astro__ZMScqW from './image_4_D3Qu8frr.mjs';
import Astro__ZMO8fg from './image_5_DTLK2nTP.mjs';
import Astro__ZMK43z from './image_6_CbW8rOFz.mjs';

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_1\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_1.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZN5p11, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_2\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_2.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZN1kOk, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_3\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_3.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZMWgCD, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_4\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_4.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZMScqW, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_5\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_5.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZMO8fg, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./image_6\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./image_6.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZMK43z, ...props});
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

		const html = async () => await updateImageReferences("<blockquote>\n<ul>\n<li>Cover Pic by <a href=\"https://www.pixiv.net/artworks/129206493\">@Rvoid_0</a></li>\n</ul>\n</blockquote>\n<blockquote>\n<p>内容来自<a href=\"https://www.youtube.com/watch?v=X6p3E-QTcUc\">DnA lab short read sequencing workshop-Multifactor Designs in DESeq2</a>以及个人的额外补充</p>\n</blockquote>\n<section><h2 id=\"交互作用\">交互作用<a class=\"anchor\" href=\"#交互作用\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"2x2设计\">2X2设计<a class=\"anchor\" href=\"#2x2设计\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><section><h4 id=\"设计矩阵\">设计矩阵<a class=\"anchor\" href=\"#设计矩阵\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><ul>\n<li>这里的实验设计， <code>~ Genotype + Treatment + Genotype:Treatment</code></li>\n<li>其中\n<ul>\n<li>Genotype：1，2</li>\n<li>Treatment：Control，Treatment</li>\n<li>原视频中首字母都是小写，为了看的更清晰我改成了首字母大写</li>\n<li>在读取meta data之后，要factor一下，并且按照对比的顺序设定levels</li>\n</ul>\n</li>\n<li>查看研究设计矩阵的代码</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#79B8FF\">model.matrix</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#F97583\">~</span><span style=\"color:#E1E4E8\"> Genotype </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Treatment </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Genotype</span><span style=\"color:#F97583\">:</span><span style=\"color:#E1E4E8\">Treatment, </span><span style=\"color:#FFAB70\">data</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> meta_dt)</span></span></code></pre><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_1.png&#x22;,&#x22;alt&#x22;:&#x22;image_1&#x22;,&#x22;index&#x22;:0}\"></p><ul>\n<li>图形直观查看设计矩阵\n<ul>\n<li>输出的是图片，内容大致如下</li>\n</ul>\n</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">vd </span><span style=\"color:#F97583\">&#x3C;-</span><span style=\"color:#B392F0\"> ExploreModelMatrix</span><span style=\"color:#F97583\">::</span><span style=\"color:#FFAB70\">VisualizeDesign</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#FFAB70\">sampleData</span><span style=\"color:#F97583\"> =</span><span style=\"color:#FFAB70\"> colData</span><span style=\"color:#E1E4E8\">(dds), </span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\">                      designFormula</span><span style=\"color:#F97583\"> =</span><span style=\"color:#F97583\"> ~</span><span style=\"color:#E1E4E8\"> Genotype </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Treatment </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Genotype</span><span style=\"color:#F97583\">:</span><span style=\"color:#E1E4E8\">Treatment)</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">vd</span><span style=\"color:#F97583\">$</span><span style=\"color:#E1E4E8\">plot</span></span></code></pre><table class=\"dataframe\">\n<caption>A tibble: 2 x 3</caption>\n<thead>\n <tr><th scope=\"col\">Genotype</th><th scope=\"col\">Con</th><th scope=\"col\">Treatment</th></tr>\n <tr><th scope=\"col\">&#x3C;dbl></th><th scope=\"col\">&#x3C;chr></th><th scope=\"col\">&#x3C;chr></th></tr>\n</thead>\n<tbody>\n <tr><td>1</td><td>(Intercept) +\n Time8h</td><td>(Intercept) +\n TreatmentTreatment +\n Genotype2.TreatmentTreatment</td></tr>\n <tr><td>2</td><td>(Intercept)           </td><td>(Intercept) +\n TreatmentTreatment                                  </td></tr>\n</tbody>\n</table><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_2.png&#x22;,&#x22;alt&#x22;:&#x22;image_2&#x22;,&#x22;index&#x22;:0}\"></p><ul>\n<li>解释\n<ul>\n<li>Genotype 1 Control：对照</li>\n<li>Genotype 2 Treatment：Genotype 1接受处理；\n<ul>\n<li>与Genotype 1 Control的差值，为蓝色箭头\n<ul>\n<li>表示在经过处理后，与Genotype 1 Control的差值</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Genotype 2 Control：Genotype 2型的对照；\n<ul>\n<li>与Genotype 1 Control的差值，为红色箭头\n<ul>\n<li>表示在未经过任何处理，单纯由于genotype影响的情况</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Genotype 2 Treatment：Genotype 2型接受处理；\n<ul>\n<li>与Genotype 2 Control的差值，为深蓝色箭头\n<ul>\n<li>表示在经过处理后，与Genotype 2 Control的差值</li>\n</ul>\n</li>\n<li>如果不存在交互作用，那么它和Genotype 2 Control的差值理应相同，\n即差值为蓝色箭头</li>\n<li>交互作用，即<strong>实际的差值和理论的差值的差</strong>\n<ul>\n<li>检验交互作用，就是<strong>实际的差值和理论的差值的差是否为0</strong></li>\n<li>即，<strong>深蓝色箭头（实际）-蓝色箭头（理论）是否为0</strong></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul></section><section><h4 id=\"contrast参数中的项名\">contrast参数中的项名<a class=\"anchor\" href=\"#contrast参数中的项名\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><ul>\n<li><code>contrast</code>中的项名不是自定义的，而是根据矩阵生成的</li>\n<li>通过<code>resultsNames()</code>查看所有的项名</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#FFAB70\">resultsNames</span><span style=\"color:#E1E4E8\">(dds)</span></span></code></pre></section><section><h4 id=\"对交互作用的检验\">对交互作用的检验<a class=\"anchor\" href=\"#对交互作用的检验\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><ul>\n<li>直接对交互项检验即可\n<ul>\n<li>这里是和<code>~1</code>比的</li>\n<li><code>~1</code>就是截距项，<br>\n就是和Genotype 1 Control进行差值对比，<br>\n检验上述交互项代表的实际与理论差值是否为0</li>\n</ul>\n</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#FFAB70\">results</span><span style=\"color:#E1E4E8\">(dds, </span><span style=\"color:#FFAB70\">contrast</span><span style=\"color:#F97583\"> =</span><span style=\"color:#79B8FF\"> c</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"Genotype2.TreatmentTreatment\"</span><span style=\"color:#E1E4E8\">))</span></span></code></pre></section><section><h4 id=\"对genotype-2实际效果的验证\">对Genotype 2实际效果的验证<a class=\"anchor\" href=\"#对genotype-2实际效果的验证\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><ul>\n<li>交互项 = 实际 - 理论，<br>\n那么简单的等式移项就可以得到，实际 = 交互 + 理论</li>\n<li>对Genotype 2实际效果，即为深蓝色箭头</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#FFAB70\">results</span><span style=\"color:#E1E4E8\">(dds, </span><span style=\"color:#FFAB70\">contrast</span><span style=\"color:#F97583\"> =</span><span style=\"color:#F97583\"> list</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">c</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"Treatment_Treatment_vs_Control\"</span><span style=\"color:#E1E4E8\">,</span><span style=\"color:#9ECBFF\">\"Genotype2.TreatmentTreatment\"</span><span style=\"color:#E1E4E8\">)))</span></span></code></pre><ul>\n<li>这里最终可以看到\n<ul>\n<li>第一行中的公式中出现了加号</li>\n<li>即最终的取值是list中的向量包含的两个项的和</li>\n<li>list中最多包含两个向量\n<ul>\n<li>第一个向量是比较项</li>\n<li>第二个向量是被比较项</li>\n<li>当没有输入第二个向量的时候，即为与<code>~1</code>截距项比较</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_3.png&#x22;,&#x22;alt&#x22;:&#x22;image_3&#x22;,&#x22;index&#x22;:0}\"></p></section></section><section><h3 id=\"conabab设计\">Con，A，B，A+B设计<a class=\"anchor\" href=\"#conabab设计\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><section><h4 id=\"设计矩阵-1\">设计矩阵<a class=\"anchor\" href=\"#设计矩阵-1\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><ul>\n<li>meta data格式</li>\n</ul><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_4.png&#x22;,&#x22;alt&#x22;:&#x22;image_4&#x22;,&#x22;index&#x22;:0}\"></p><ul>\n<li>实验设计， <code>~ Treatment1 + Treatment2 + Treatment1:Treatment2</code></li>\n</ul></section></section></section>\n<section><h2 id=\"更复杂的实验设计\">更复杂的实验设计<a class=\"anchor\" href=\"#更复杂的实验设计\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><section><h3 id=\"2组x多时间节点\">2组X多时间节点<a class=\"anchor\" href=\"#2组x多时间节点\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li>2种细胞（Control，Mutant） 在4个时间点（0，6，12，24h）的基因表达</li>\n</ul><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_5.png&#x22;,&#x22;alt&#x22;:&#x22;image_5&#x22;,&#x22;index&#x22;:0}\"></p><ul>\n<li>分析思路\n<ul>\n<li>时间点两两比较\n<ul>\n<li>6h vs 0h</li>\n<li>12h vs 0h</li>\n<li>24h vs 0h</li>\n<li>12h vs 6h</li>\n<li>24h vs 12h</li>\n<li>24h vs 12h</li>\n<li>问题\n<ul>\n<li>没有充分利用时间序列的信息，得到的结果不全面</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>充分利用时间序列的本质，跨越全部时间段进行多组比较\n<ul>\n<li>在本例中，2种<strong>对比设计</strong>（用以区别实验设计）\n<ul>\n<li>简化版模型：不考虑细胞种类的影响</li>\n<li>全面版模型：考虑细胞种类的影响</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul></section><section><h3 id=\"对比设计\">对比设计<a class=\"anchor\" href=\"#对比设计\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h3><ul>\n<li>首先得判断是否有必要使用全面版模型，因此需要做一个简单对比</li>\n<li>在<code>DESeqDataSetFromMatrix()</code>中还是要填写完整的实验设计\n<ul>\n<li><code>~ Batch + Genotype + Time + Genotype:Time</code></li>\n</ul>\n</li>\n</ul><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">dds </span><span style=\"color:#F97583\">&#x3C;-</span><span style=\"color:#FFAB70\"> DESeqDataSetFromMatrix</span><span style=\"color:#E1E4E8\">(</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\"> countData</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> countMatrix,</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\"> colData</span><span style=\"color:#F97583\"> =</span><span style=\"color:#E1E4E8\"> metaData,</span></span>\n<span class=\"line\"><span style=\"color:#FFAB70\"> design</span><span style=\"color:#F97583\"> =</span><span style=\"color:#F97583\"> ~</span><span style=\"color:#E1E4E8\"> Batch </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Genotype </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Time </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Genotype</span><span style=\"color:#F97583\">:</span><span style=\"color:#E1E4E8\">Time)</span></span></code></pre><ul>\n<li>由于存在多levels的比较，<br>\n正如t检验用于双样本，ANOVA适用于多样本一样，<br>\nWald检验用于双样本，而LRT用于多样本\n<ul>\n<li><code>test = \"wald</code>是默认的，改用LRT需要声明一下</li>\n<li>要注意：<code>reduced</code>中填写<strong>简化后</strong>保留的变量，而并非要剔除的变量s</li>\n</ul>\n</li>\n</ul><section><h4 id=\"简化版模型\">简化版模型<a class=\"anchor\" href=\"#简化版模型\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h4><pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"r\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">dds_full </span><span style=\"color:#F97583\">&#x3C;-</span><span style=\"color:#FFAB70\"> DESeq</span><span style=\"color:#E1E4E8\">(dds, </span><span style=\"color:#FFAB70\">test</span><span style=\"color:#F97583\"> =</span><span style=\"color:#9ECBFF\"> \"LRT\"</span><span style=\"color:#E1E4E8\">, </span><span style=\"color:#FFAB70\">reduced</span><span style=\"color:#F97583\"> =</span><span style=\"color:#F97583\"> ~</span><span style=\"color:#E1E4E8\"> Batch </span><span style=\"color:#F97583\">+</span><span style=\"color:#E1E4E8\"> Time)</span></span></code></pre><p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./image_6.png&#x22;,&#x22;alt&#x22;:&#x22;image_6&#x22;,&#x22;index&#x22;:0}\"></p><ul>\n<li>结果中的<code>baseMean</code>，<code>log2FoldChange</code>等结果均无实际意义</li>\n<li>这里主要关注的是统计量<code>stat</code>以及p值<code>pval</code></li>\n</ul></section></section></section>\n<section><h2 id=\"原视频\">原视频<a class=\"anchor\" href=\"#原视频\"><span class=\"anchor-icon\" data-pagefind-ignore=\"\">#</span></a></h2><iframe width=\"100%\" height=\"468\" src=\"https://www.youtube.com/embed/X6p3E-QTcUc\" title=\"Multifactor Designs in DESeq2\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe></section>");
	

				const frontmatter = {"title":"DESeq2中多因子设计","published":"2025-04-19T00:00:00.000Z","image":"./p3_cover.jpg","description":"复杂实验设计时DESeq2中的实验设计写法及含义","category":"Bioinformatics","tags":["DESeq2","R","ZH-CN"],"draft":false,"lang":"en","minutes":5,"words":1048,"excerpt":"image_1"};
				const file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/p3.md";
				const url = undefined;
				function rawContent() {
					return "   \n                     \n                     \n                       \n                                       \n                          \n                      \n             \n          \n   \n> - Cover Pic by [@Rvoid_0](https://www.pixiv.net/artworks/129206493)\n\n> 内容来自[DnA lab short read sequencing workshop-Multifactor Designs in DESeq2](https://www.youtube.com/watch?v=X6p3E-QTcUc)以及个人的额外补充\n\n## 交互作用\n\n### 2X2设计\n\n#### 设计矩阵\n\n- 这里的实验设计， `~ Genotype + Treatment + Genotype:Treatment`\n- 其中\n  - Genotype：1，2\n  - Treatment：Control，Treatment\n  - 原视频中首字母都是小写，为了看的更清晰我改成了首字母大写\n  - 在读取meta data之后，要factor一下，并且按照对比的顺序设定levels\n- 查看研究设计矩阵的代码\n\n```r\nmodel.matrix(~ Genotype + Treatment + Genotype:Treatment, data = meta_dt)\n```\n\n![image_1](./image_1.png)\n\n- 图形直观查看设计矩阵\n  - 输出的是图片，内容大致如下\n\n```r\nvd <- ExploreModelMatrix::VisualizeDesign(sampleData = colData(dds), \n                      designFormula = ~ Genotype + Treatment + Genotype:Treatment)\nvd$plot\n```\n\n<table class=\"dataframe\">\n<caption>A tibble: 2 x 3</caption>\n<thead>\n <tr><th scope=col>Genotype</th><th scope=col>Con</th><th scope=col>Treatment</th></tr>\n <tr><th scope=col>&lt;dbl&gt;</th><th scope=col>&lt;chr&gt;</th><th scope=col>&lt;chr&gt;</th></tr>\n</thead>\n<tbody>\n <tr><td>1</td><td>(Intercept) +\n Time8h</td><td>(Intercept) +\n TreatmentTreatment +\n Genotype2.TreatmentTreatment</td></tr>\n <tr><td>2</td><td>(Intercept)           </td><td>(Intercept) +\n TreatmentTreatment                                  </td></tr>\n</tbody>\n</table>\n\n![image_2](./image_2.png)\n\n- 解释\n  - Genotype 1 Control：对照\n  - Genotype 2 Treatment：Genotype 1接受处理；\n    - 与Genotype 1 Control的差值，为蓝色箭头\n      - 表示在经过处理后，与Genotype 1 Control的差值\n  - Genotype 2 Control：Genotype 2型的对照；\n    - 与Genotype 1 Control的差值，为红色箭头\n      - 表示在未经过任何处理，单纯由于genotype影响的情况\n  - Genotype 2 Treatment：Genotype 2型接受处理；\n    - 与Genotype 2 Control的差值，为深蓝色箭头\n      - 表示在经过处理后，与Genotype 2 Control的差值\n    - 如果不存在交互作用，那么它和Genotype 2 Control的差值理应相同，\n    即差值为蓝色箭头\n    - 交互作用，即**实际的差值和理论的差值的差**\n      - 检验交互作用，就是**实际的差值和理论的差值的差是否为0**\n      - 即，**深蓝色箭头（实际）-蓝色箭头（理论）是否为0**\n\n#### contrast参数中的项名\n\n- `contrast`中的项名不是自定义的，而是根据矩阵生成的\n- 通过`resultsNames()`查看所有的项名\n\n```r\nresultsNames(dds)\n```\n\n#### 对交互作用的检验\n\n- 直接对交互项检验即可\n  - 这里是和`~1`比的\n  - `~1`就是截距项，  \n   就是和Genotype 1 Control进行差值对比，  \n   检验上述交互项代表的实际与理论差值是否为0\n\n```r\nresults(dds, contrast = c(\"Genotype2.TreatmentTreatment\"))\n```\n\n#### 对Genotype 2实际效果的验证\n\n- 交互项 = 实际 - 理论，  \n  那么简单的等式移项就可以得到，实际 = 交互 + 理论\n- 对Genotype 2实际效果，即为深蓝色箭头\n\n```r\nresults(dds, contrast = list(c(\"Treatment_Treatment_vs_Control\",\"Genotype2.TreatmentTreatment\")))\n```\n\n- 这里最终可以看到\n  - 第一行中的公式中出现了加号\n  - 即最终的取值是list中的向量包含的两个项的和\n  - list中最多包含两个向量\n    - 第一个向量是比较项\n    - 第二个向量是被比较项\n    - 当没有输入第二个向量的时候，即为与`~1`截距项比较\n\n![image_3](./image_3.png)\n\n### Con，A，B，A+B设计\n\n#### 设计矩阵\n\n- meta data格式\n\n![image_4](./image_4.png)\n\n- 实验设计， `~ Treatment1 + Treatment2 + Treatment1:Treatment2`\n\n## 更复杂的实验设计\n\n### 2组X多时间节点\n\n- 2种细胞（Control，Mutant） 在4个时间点（0，6，12，24h）的基因表达\n\n![image_5](./image_5.png)\n\n- 分析思路\n  - 时间点两两比较\n    - 6h vs 0h\n    - 12h vs 0h\n    - 24h vs 0h\n    - 12h vs 6h\n    - 24h vs 12h\n    - 24h vs 12h\n    - 问题\n      - 没有充分利用时间序列的信息，得到的结果不全面\n  - 充分利用时间序列的本质，跨越全部时间段进行多组比较\n    - 在本例中，2种**对比设计**（用以区别实验设计）\n      - 简化版模型：不考虑细胞种类的影响\n      - 全面版模型：考虑细胞种类的影响\n\n### 对比设计\n\n- 首先得判断是否有必要使用全面版模型，因此需要做一个简单对比\n- 在`DESeqDataSetFromMatrix()`中还是要填写完整的实验设计\n  - `~ Batch + Genotype + Time + Genotype:Time`\n\n```r\ndds <- DESeqDataSetFromMatrix(\n countData = countMatrix,\n colData = metaData,\n design = ~ Batch + Genotype + Time + Genotype:Time)\n```\n\n- 由于存在多levels的比较，  \n  正如t检验用于双样本，ANOVA适用于多样本一样，  \n  Wald检验用于双样本，而LRT用于多样本\n  - `test = \"wald`是默认的，改用LRT需要声明一下\n  - 要注意：`reduced`中填写**简化后**保留的变量，而并非要剔除的变量s\n\n#### 简化版模型\n\n```r\ndds_full <- DESeq(dds, test = \"LRT\", reduced = ~ Batch + Time)\n```\n\n![image_6](./image_6.png)\n\n- 结果中的`baseMean`，`log2FoldChange`等结果均无实际意义\n- 这里主要关注的是统计量`stat`以及p值`pval`\n\n## 原视频\n\n<iframe width=\"100%\" height=\"468\" src=\"https://www.youtube.com/embed/X6p3E-QTcUc\" title=\"Multifactor Designs in DESeq2\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"交互作用","text":"交互作用#"},{"depth":3,"slug":"2x2设计","text":"2X2设计#"},{"depth":4,"slug":"设计矩阵","text":"设计矩阵#"},{"depth":4,"slug":"contrast参数中的项名","text":"contrast参数中的项名#"},{"depth":4,"slug":"对交互作用的检验","text":"对交互作用的检验#"},{"depth":4,"slug":"对genotype-2实际效果的验证","text":"对Genotype 2实际效果的验证#"},{"depth":3,"slug":"conabab设计","text":"Con，A，B，A+B设计#"},{"depth":4,"slug":"设计矩阵-1","text":"设计矩阵#"},{"depth":2,"slug":"更复杂的实验设计","text":"更复杂的实验设计#"},{"depth":3,"slug":"2组x多时间节点","text":"2组X多时间节点#"},{"depth":3,"slug":"对比设计","text":"对比设计#"},{"depth":4,"slug":"简化版模型","text":"简化版模型#"},{"depth":2,"slug":"原视频","text":"原视频#"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

import './_page_.fc700a69_CRz_761o.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_UGlnaItR.mjs';
import $$ArchivePanel from './ArchivePanel_BbW9GgWf.mjs';
import { a as getSortedPosts, i as i18n, I as I18nKey } from './content-utils_BjWPqt--.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DChePjpq.mjs';

const $$Astro = createAstro("https://nab-iak.github.io");
async function getStaticPaths() {
  const posts = await getSortedPosts();
  const allTags = posts.reduce((acc, post) => {
    post.data.tags.forEach((tag) => acc.add(tag));
    return acc;
  }, /* @__PURE__ */ new Set());
  const allTagsArray = Array.from(allTags);
  return allTagsArray.map((tag) => ({
    params: {
      tag
    }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const tag = Astro2.params.tag;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive), "description": i18n(I18nKey.archive) }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, { "tags": [tag] })} ` })}`;
}, "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/tag/[tag].astro", void 0);

const $$file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/tag/[tag].astro";
const $$url = "/archive/tag/[tag]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$tag,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

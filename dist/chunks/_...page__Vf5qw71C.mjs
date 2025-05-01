import './_page_.fc700a69_CRz_761o.mjs';
import { c as createComponent, b as createAstro, a as renderComponent, r as renderTemplate } from './astro/server_UGlnaItR.mjs';
import $$PostPage from './PostPage_uBm9zkZe.mjs';
import $$Pagination from './Pagination_DjChEzxk.mjs';
import { P as PAGE_SIZE, $ as $$MainGridLayout } from './MainGridLayout_DChePjpq.mjs';
import { a as getSortedPosts } from './content-utils_BjWPqt--.mjs';

const $$Astro = createAstro("https://nab-iak.github.io");
const getStaticPaths = async ({ paginate }) => {
  const allBlogPosts = await getSortedPosts();
  return paginate(allBlogPosts, { pageSize: PAGE_SIZE });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const len = page.data.length;
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "PostPage", $$PostPage, { "page": page })} ${renderComponent($$result2, "Pagination", $$Pagination, { "class": "mx-auto onload-animation", "page": page, "style": `animation-delay: calc(var(--content-delay) + ${len * 50}ms)` })} ` })}`;
}, "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/[...page].astro", void 0);

const $$file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/[...page].astro";
const $$url = "/[...page]/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

import './_page_.fc700a69_CRz_761o.mjs';
import { c as createComponent, a as renderComponent, r as renderTemplate } from './astro/server_UGlnaItR.mjs';
import $$ArchivePanel from './ArchivePanel_BbW9GgWf.mjs';
import { i as i18n, I as I18nKey } from './content-utils_BjWPqt--.mjs';
import { $ as $$MainGridLayout } from './MainGridLayout_DChePjpq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainGridLayout", $$MainGridLayout, { "title": i18n(I18nKey.archive) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ArchivePanel", $$ArchivePanel, {})} ` })}`;
}, "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/index.astro", void 0);

const $$file = "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/index.astro";
const $$url = "/archive/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };

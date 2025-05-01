import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_UGlnaItR.mjs';

var dist = {};

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	Object.defineProperty(dist, "__esModule", { value: true });
	dist.parse = parse;
	dist.serialize = serialize;
	/**
	 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
	 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
	 * which has been replaced by the token definition in RFC 7230 appendix B.
	 *
	 * cookie-name       = token
	 * token             = 1*tchar
	 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
	 *                     "*" / "+" / "-" / "." / "^" / "_" /
	 *                     "`" / "|" / "~" / DIGIT / ALPHA
	 *
	 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
	 * Allow same range as cookie value, except `=`, which delimits end of name.
	 */
	const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
	/**
	 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
	 *
	 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
	 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
	 *                     ; US-ASCII characters excluding CTLs,
	 *                     ; whitespace DQUOTE, comma, semicolon,
	 *                     ; and backslash
	 *
	 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
	 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
	 */
	const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
	/**
	 * RegExp to match domain-value in RFC 6265 sec 4.1.1
	 *
	 * domain-value      = <subdomain>
	 *                     ; defined in [RFC1034], Section 3.5, as
	 *                     ; enhanced by [RFC1123], Section 2.1
	 * <subdomain>       = <label> | <subdomain> "." <label>
	 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
	 *                     Labels must be 63 characters or less.
	 *                     'let-dig' not 'letter' in the first char, per RFC1123
	 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
	 * <let-dig-hyp>     = <let-dig> | "-"
	 * <let-dig>         = <letter> | <digit>
	 * <letter>          = any one of the 52 alphabetic characters A through Z in
	 *                     upper case and a through z in lower case
	 * <digit>           = any one of the ten digits 0 through 9
	 *
	 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
	 *
	 * > (Note that a leading %x2E ("."), if present, is ignored even though that
	 * character is not permitted, but a trailing %x2E ("."), if present, will
	 * cause the user agent to ignore the attribute.)
	 */
	const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
	/**
	 * RegExp to match path-value in RFC 6265 sec 4.1.1
	 *
	 * path-value        = <any CHAR except CTLs or ";">
	 * CHAR              = %x01-7F
	 *                     ; defined in RFC 5234 appendix B.1
	 */
	const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
	const __toString = Object.prototype.toString;
	const NullObject = /* @__PURE__ */ (() => {
	    const C = function () { };
	    C.prototype = Object.create(null);
	    return C;
	})();
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 */
	function parse(str, options) {
	    const obj = new NullObject();
	    const len = str.length;
	    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
	    if (len < 2)
	        return obj;
	    const dec = options?.decode || decode;
	    let index = 0;
	    do {
	        const eqIdx = str.indexOf("=", index);
	        if (eqIdx === -1)
	            break; // No more cookie pairs.
	        const colonIdx = str.indexOf(";", index);
	        const endIdx = colonIdx === -1 ? len : colonIdx;
	        if (eqIdx > endIdx) {
	            // backtrack on prior semicolon
	            index = str.lastIndexOf(";", eqIdx - 1) + 1;
	            continue;
	        }
	        const keyStartIdx = startIndex(str, index, eqIdx);
	        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
	        const key = str.slice(keyStartIdx, keyEndIdx);
	        // only assign once
	        if (obj[key] === undefined) {
	            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
	            let valEndIdx = endIndex(str, endIdx, valStartIdx);
	            const value = dec(str.slice(valStartIdx, valEndIdx));
	            obj[key] = value;
	        }
	        index = endIdx + 1;
	    } while (index < len);
	    return obj;
	}
	function startIndex(str, index, max) {
	    do {
	        const code = str.charCodeAt(index);
	        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
	            return index;
	    } while (++index < max);
	    return max;
	}
	function endIndex(str, index, min) {
	    while (index > min) {
	        const code = str.charCodeAt(--index);
	        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
	            return index + 1;
	    }
	    return min;
	}
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize a name value pair into a cookie string suitable for
	 * http headers. An optional options object specifies cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 */
	function serialize(name, val, options) {
	    const enc = options?.encode || encodeURIComponent;
	    if (!cookieNameRegExp.test(name)) {
	        throw new TypeError(`argument name is invalid: ${name}`);
	    }
	    const value = enc(val);
	    if (!cookieValueRegExp.test(value)) {
	        throw new TypeError(`argument val is invalid: ${val}`);
	    }
	    let str = name + "=" + value;
	    if (!options)
	        return str;
	    if (options.maxAge !== undefined) {
	        if (!Number.isInteger(options.maxAge)) {
	            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
	        }
	        str += "; Max-Age=" + options.maxAge;
	    }
	    if (options.domain) {
	        if (!domainValueRegExp.test(options.domain)) {
	            throw new TypeError(`option domain is invalid: ${options.domain}`);
	        }
	        str += "; Domain=" + options.domain;
	    }
	    if (options.path) {
	        if (!pathValueRegExp.test(options.path)) {
	            throw new TypeError(`option path is invalid: ${options.path}`);
	        }
	        str += "; Path=" + options.path;
	    }
	    if (options.expires) {
	        if (!isDate(options.expires) ||
	            !Number.isFinite(options.expires.valueOf())) {
	            throw new TypeError(`option expires is invalid: ${options.expires}`);
	        }
	        str += "; Expires=" + options.expires.toUTCString();
	    }
	    if (options.httpOnly) {
	        str += "; HttpOnly";
	    }
	    if (options.secure) {
	        str += "; Secure";
	    }
	    if (options.partitioned) {
	        str += "; Partitioned";
	    }
	    if (options.priority) {
	        const priority = typeof options.priority === "string"
	            ? options.priority.toLowerCase()
	            : undefined;
	        switch (priority) {
	            case "low":
	                str += "; Priority=Low";
	                break;
	            case "medium":
	                str += "; Priority=Medium";
	                break;
	            case "high":
	                str += "; Priority=High";
	                break;
	            default:
	                throw new TypeError(`option priority is invalid: ${options.priority}`);
	        }
	    }
	    if (options.sameSite) {
	        const sameSite = typeof options.sameSite === "string"
	            ? options.sameSite.toLowerCase()
	            : options.sameSite;
	        switch (sameSite) {
	            case true:
	            case "strict":
	                str += "; SameSite=Strict";
	                break;
	            case "lax":
	                str += "; SameSite=Lax";
	                break;
	            case "none":
	                str += "; SameSite=None";
	                break;
	            default:
	                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
	        }
	    }
	    return str;
	}
	/**
	 * URL-decode string value. Optimized to skip native call when no %.
	 */
	function decode(str) {
	    if (str.indexOf("%") === -1)
	        return str;
	    try {
	        return decodeURIComponent(str);
	    }
	    catch (e) {
	        return str;
	    }
	}
	/**
	 * Determine if value is a Date.
	 */
	function isDate(val) {
	    return __toString.call(val) === "[object Date]";
	}
	
	return dist;
}

requireDist();

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

/* es-module-lexer 1.7.0 */
var ImportType;!function(A){A[A.Static=1]="Static",A[A.Dynamic=2]="Dynamic",A[A.ImportMeta=3]="ImportMeta",A[A.StaticSourcePhase=4]="StaticSourcePhase",A[A.DynamicSourcePhase=5]="DynamicSourcePhase",A[A.StaticDeferPhase=6]="StaticDeferPhase",A[A.DynamicDeferPhase=7]="DynamicDeferPhase";}(ImportType||(ImportType={}));1===new Uint8Array(new Uint16Array([1]).buffer)[0];const E=()=>{return A="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GzYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQIMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhAiABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIAJBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiACECA0BBACACQQJqNgKwCgJAAkACQEEBECkiAkEiRg0AIAJBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQIMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSECDAELIAIQLCECCwJAIAJBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAkEiRg0AIAJBJ0YNAEEAIAE2ArAKDwsgAhAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAkEsRg0AIAJB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiECDAELC0EAKALwCSIBIAA2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=","undefined"!=typeof Buffer?Buffer.from(A,"base64"):Uint8Array.from(atob(A),(A=>A.charCodeAt(0)));var A;};WebAssembly.compile(E()).then(WebAssembly.instantiate).then((({exports:A})=>{}));

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/","cacheDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.astro/","outDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/","srcDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/","publicDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/public/","buildClientDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/client/","buildServerDir":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/server/","adapterName":"","routes":[{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/activity/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/activity","isIndex":false,"type":"page","pattern":"^\\/activity\\/$","segments":[[{"content":"activity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activity.astro","pathname":"/activity","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/archive/category/uncategorized/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive/category/uncategorized","isIndex":false,"type":"page","pattern":"^\\/archive\\/category\\/uncategorized\\/$","segments":[[{"content":"archive","dynamic":false,"spread":false}],[{"content":"category","dynamic":false,"spread":false}],[{"content":"uncategorized","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/category/uncategorized.astro","pathname":"/archive/category/uncategorized","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/archive/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/archive","isIndex":true,"type":"page","pattern":"^\\/archive\\/$","segments":[[{"content":"archive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/index.astro","pathname":"/archive","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}},{"file":"file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"always"}}}],"site":"https://nab-iak.github.io","base":"/","trailingSlash":"always","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/config.ts",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/misc/ImageWrapper.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/PostCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/PostPage.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/Profile.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/SideBar.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/layouts/MainGridLayout.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/activity.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/activity@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/category/[category].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archive/category/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/category/uncategorized.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archive/category/uncategorized@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archive/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/archive/tag/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/archive/tag/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/work.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/utils/content-utils.ts",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/ArchivePanel.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/Categories.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/Tags.astro",{"propagation":"in-tree","containsHead":false}],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/activity@_@astro":"pages/activity.astro.mjs","\u0000@astro-page:src/pages/archive/category/uncategorized@_@astro":"pages/archive/category/uncategorized.astro.mjs","\u0000@astro-page:src/pages/archive/category/[category]@_@astro":"pages/archive/category/_category_.astro.mjs","\u0000@astro-page:src/pages/archive/tag/[tag]@_@astro":"pages/archive/tag/_tag_.astro.mjs","\u0000@astro-page:src/pages/archive/index@_@astro":"pages/archive.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/[...page]@_@astro":"pages/_---page_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/.astro/content-assets.mjs":"chunks/content-assets_yYc-Vnvo.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/avatar.jpg":"chunks/avatar_CQ0du02J.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/banner.png":"chunks/banner_C40byVvY.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/GlobalStyles.astro":"chunks/GlobalStyles_xA4zYpMb.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/LightDarkSwitch.svelte":"_astro/LightDarkSwitch.CBxFqLyj.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/Search.svelte":"_astro/Search.DSDjMFLe.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/misc/Markdown.astro":"chunks/Markdown_DxkcN8aY.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/ArchivePanel.astro":"chunks/ArchivePanel_BbW9GgWf.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/misc/License.astro":"chunks/License_BHngoR_t.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/PostMeta.astro":"chunks/PostMeta_DCpEbP2j.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/comment/Giscus.astro":"chunks/Giscus_oI3-CSHS.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/utils/date-utils.ts":"chunks/date-utils_OyTxlY41.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/PostPage.astro":"chunks/PostPage_uBm9zkZe.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/control/Pagination.astro":"chunks/Pagination_DjChEzxk.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/PostCard.astro":"chunks/PostCard_DC2dwEvO.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/about_cover.jpg":"chunks/about_cover_DFXysvYb.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/activity_cover.jpg":"chunks/activity_cover_9Sl8MPwn.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/work_cover.jpg":"chunks/work_cover_D-4_jz0b.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_1.png":"chunks/image_1_DjFt6fme.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_2.png":"chunks/image_2_LBht876l.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_3.png":"chunks/image_3_BU7VwyW0.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_4.png":"chunks/image_4_D3Qu8frr.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_5.png":"chunks/image_5_DTLK2nTP.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/image_6.png":"chunks/image_6_CbW8rOFz.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/DisplaySettings.svelte":"_astro/DisplaySettings.CzdhobgP.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/utils/setting-utils.ts":"chunks/setting-utils_Cwk5xASW.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p1/p1.md":"chunks/p1_Bj18zin5.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p1/p1_cover.jpg":"chunks/p1_cover_BlNRbalm.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p2/p2.md":"chunks/p2_VxqxtZCL.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p2/p2_cover.jpg":"chunks/p2_cover_B-9CZs2H.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/p3.md":"chunks/p3_BrX5wJJh.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/p3_cover.jpg":"chunks/p3_cover_BjmjanC2.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p4/p4.md":"chunks/p4_DUsSFXDn.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p4/p4_cover.png":"chunks/p4_cover_CkLgegf9.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p5/p5.md":"chunks/p5_v2cgL6Cb.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p5/p5_cover.jpg":"chunks/p5_cover_BS-767nv.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/about.md":"chunks/about_B86eaJMP.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/activity.md":"chunks/activity_DOsX6EPU.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/spec/work.md":"chunks/work_Cx5yb7KX.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/plugins/rehype-component-admonition.mjs":"chunks/rehype-component-admonition_B7SzZgJr.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/plugins/rehype-component-github-card.mjs":"chunks/rehype-component-github-card_D1YGiKZN.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/plugins/remark-directive-rehype.js":"chunks/remark-directive-rehype_Ctk_1H80.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/plugins/remark-excerpt.js":"chunks/remark-excerpt_CCQ5EUL9.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/plugins/remark-reading-time.mjs":"chunks/remark-reading-time_DXFoFOBO.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Bt63Gi4J.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/astro@5.7.10_@types+node@22.14.1_jiti@1.21.7_lightningcss@1.29.3_rollup@2.79.2_sass@1.80.4_st_beq3rqzvofrcm6vzbsejhzrcmu/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BHYs3QPk.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/config.ts":"chunks/config_CdZbOzw0.mjs","\u0000@astrojs-manifest":"manifest_B7fITMz4.mjs","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/misc/Markdown.astro?astro&type=script&index=0&lang.ts":"_astro/Markdown.astro_astro_type_script_index_0_lang.9DgUvz-M.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/TOC.astro?astro&type=script&index=0&lang.ts":"_astro/TOC.astro_astro_type_script_index_0_lang.DDOZ1KDD.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.Crn57otv.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/WidgetLayout.astro?astro&type=script&index=0&lang.ts":"_astro/WidgetLayout.astro_astro_type_script_index_0_lang.CJHtMuY3.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/photoswipe@5.4.4/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.BxGa2pwP.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/@swup+astro@1.6.0_@types+babel__core@7.20.5/node_modules/@swup/astro/dist/client/SwupPreloadPlugin.js":"_astro/SwupPreloadPlugin.CiOSXfDa.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/@swup+astro@1.6.0_@types+babel__core@7.20.5/node_modules/@swup/astro/dist/client/SwupHeadPlugin.js":"_astro/SwupHeadPlugin.d6nb3Z__.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/@swup+astro@1.6.0_@types+babel__core@7.20.5/node_modules/@swup/astro/dist/client/SwupScriptsPlugin.js":"_astro/SwupScriptsPlugin.CRD5-C2F.js","@astrojs/svelte/client.js":"_astro/client.svelte.Co5vYsRd.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/@swup+astro@1.6.0_@types+babel__core@7.20.5/node_modules/@swup/astro/dist/client/SwupA11yPlugin.js":"_astro/SwupA11yPlugin.M_Jz3F07.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/node_modules/.pnpm/@swup+astro@1.6.0_@types+babel__core@7.20.5/node_modules/@swup/astro/dist/client/SwupScrollPlugin.js":"_astro/SwupScrollPlugin.BxAIvrH7.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.CfATFYeA.js","/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts":"_astro/Layout.astro_astro_type_script_index_1_lang.CTmMNfNu.js","astro:scripts/page.js":"_astro/page.D6-Kvdo4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/misc/Markdown.astro?astro&type=script&index=0&lang.ts","const s=new MutationObserver(l);s.observe(document.body,{childList:!0,subtree:!0});function l(){s.disconnect();let i=Array.from(document.querySelectorAll(\"pre\"));for(let e of i){if(e.parentElement?.nodeName===\"DIV\"&&e.parentElement?.classList.contains(\"code-block\"))continue;let o=document.createElement(\"div\");o.className=\"relative code-block\";let t=document.createElement(\"button\");t.className=\"copy-btn btn-regular-dark absolute active:scale-90 h-8 w-8 top-2 right-2 opacity-75 text-sm p-1.5 rounded-lg transition-all ease-in-out\",e.setAttribute(\"tabindex\",\"0\"),e.parentNode&&e.parentNode.insertBefore(o,e);let r='<svg class=\"copy-btn-icon copy-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\"><path d=\"M368.37-237.37q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-474.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h378.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v474.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H368.37Zm0-83h378.26v-474.26H368.37v474.26Zm-155 238q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-515.76q0-17.45 11.96-29.48 11.97-12.02 29.33-12.02t29.54 12.02q12.17 12.03 12.17 29.48v515.76h419.76q17.45 0 29.48 11.96 12.02 11.97 12.02 29.33t-12.02 29.54q-12.03 12.17-29.48 12.17H213.37Zm155-238v-474.26 474.26Z\"/></svg>',a='<svg class=\"copy-btn-icon success-icon\" xmlns=\"http://www.w3.org/2000/svg\" height=\"20px\" viewBox=\"0 -960 960 960\" width=\"20px\"><path d=\"m389-377.13 294.7-294.7q12.58-12.67 29.52-12.67 16.93 0 29.61 12.67 12.67 12.68 12.67 29.53 0 16.86-12.28 29.14L419.07-288.41q-12.59 12.67-29.52 12.67-16.94 0-29.62-12.67L217.41-430.93q-12.67-12.68-12.79-29.45-.12-16.77 12.55-29.45 12.68-12.67 29.62-12.67 16.93 0 29.28 12.67L389-377.13Z\"/></svg>';t.innerHTML=`<div>${r} ${a}</div>\n      `,o.appendChild(e),o.appendChild(t);let c;t.addEventListener(\"click\",async()=>{c&&clearTimeout(c);let n=e?.querySelector(\"code\")?.innerText;n!==void 0&&(await navigator.clipboard.writeText(n),t.classList.add(\"success\"),c=setTimeout(()=>{t.classList.remove(\"success\")},1e3))})}s.observe(document.body,{childList:!0,subtree:!0})}"],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/TOC.astro?astro&type=script&index=0&lang.ts","class l extends HTMLElement{tocEl=null;visibleClass=\"visible\";observer;anchorNavTarget=null;headingIdxMap=new Map;headings=[];sections=[];tocEntries=[];active=[];activeIndicator=null;constructor(){super(),this.observer=new IntersectionObserver(this.markVisibleSection,{threshold:0})}markVisibleSection=t=>{t.forEach(e=>{const i=e.target.children[0]?.getAttribute(\"id\"),s=i?this.headingIdxMap.get(i):void 0;s!=null&&(this.active[s]=e.isIntersecting),e.isIntersecting&&this.anchorNavTarget==e.target.firstChild&&(this.anchorNavTarget=null)}),this.active.includes(!0)||this.fallback(),this.update()};toggleActiveHeading=()=>{let t=this.active.length-1,e=this.active.length-1,i=0;for(;t>=0&&!this.active[t];)this.tocEntries[t].classList.remove(this.visibleClass),t--;for(;t>=0&&this.active[t];)this.tocEntries[t].classList.add(this.visibleClass),e=Math.min(e,t),i=Math.max(i,t),t--;for(;t>=0;)this.tocEntries[t].classList.remove(this.visibleClass),t--;let s=this.tocEl?.getBoundingClientRect().top||0,n=this.tocEl?.scrollTop||0,o=this.tocEntries[e].getBoundingClientRect().top-s+n,c=this.tocEntries[i].getBoundingClientRect().bottom-s+n;this.activeIndicator?.setAttribute(\"style\",`top: ${o}px; height: ${c-o}px`)};scrollToActiveHeading=()=>{if(this.anchorNavTarget||!this.tocEl)return;const t=document.querySelectorAll(`#toc .${this.visibleClass}`);if(!t.length)return;const e=t[0],i=t[t.length-1],s=this.tocEl.clientHeight;let n;i.getBoundingClientRect().bottom-e.getBoundingClientRect().top<.9*s?n=e.offsetTop-32:n=i.offsetTop-s*.8,this.tocEl.scrollTo({top:n,left:0,behavior:\"smooth\"})};update=()=>{requestAnimationFrame(()=>{this.toggleActiveHeading(),this.scrollToActiveHeading()})};fallback=()=>{if(this.sections.length)for(let t=0;t<this.sections.length;t++){let e=this.sections[t].getBoundingClientRect().top,i=this.sections[t].getBoundingClientRect().bottom;if(this.isInRange(e,0,window.innerHeight)||this.isInRange(i,0,window.innerHeight)||e<0&&i>window.innerHeight)this.markActiveHeading(t);else if(e>window.innerHeight)break}};markActiveHeading=t=>{this.active[t]=!0};handleAnchorClick=t=>{const e=t.composedPath().find(i=>i instanceof HTMLAnchorElement);if(e){const i=decodeURIComponent(e.hash?.substring(1)),s=this.headingIdxMap.get(i);s!==void 0?this.anchorNavTarget=this.headings[s]:this.anchorNavTarget=null}};isInRange(t,e,i){return e<t&&t<i}connectedCallback(){const t=document.querySelector(\".prose\");t?t.addEventListener(\"animationend\",()=>{this.init()},{once:!0}):console.debug(\"Animation element not found\")}init(){if(this.tocEl=document.getElementById(\"toc-inner-wrapper\"),!!this.tocEl&&(this.tocEl.addEventListener(\"click\",this.handleAnchorClick,{capture:!0}),this.activeIndicator=document.getElementById(\"active-indicator\"),this.tocEntries=Array.from(document.querySelectorAll(\"#toc a[href^='#']\")),this.tocEntries.length!==0)){this.sections=new Array(this.tocEntries.length),this.headings=new Array(this.tocEntries.length);for(let t=0;t<this.tocEntries.length;t++){const e=decodeURIComponent(this.tocEntries[t].hash?.substring(1)),i=document.getElementById(e),s=i?.parentElement;i instanceof HTMLElement&&s instanceof HTMLElement&&(this.headings[t]=i,this.sections[t]=s,this.headingIdxMap.set(e,t))}this.active=new Array(this.tocEntries.length).fill(!1),this.sections.forEach(t=>this.observer.observe(t)),this.fallback(),this.update()}}disconnectedCallback(){this.sections.forEach(t=>this.observer.unobserve(t)),this.observer.disconnect(),this.tocEl?.removeEventListener(\"click\",this.handleAnchorClick)}}customElements.get(\"table-of-contents\")||customElements.define(\"table-of-contents\",l);"],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","function c(){localStorage.theme===\"dark\"?(document.documentElement.classList.remove(\"dark\"),localStorage.theme=\"light\"):(document.documentElement.classList.add(\"dark\"),localStorage.theme=\"dark\")}function o(){let t=document.getElementById(\"scheme-switch\");t&&(t.onclick=function(){c()});let n=document.getElementById(\"display-settings-switch\");n&&(n.onclick=function(){let e=document.getElementById(\"display-setting\");e&&e.classList.toggle(\"float-panel-closed\")});let l=document.getElementById(\"nav-menu-switch\");l&&(l.onclick=function(){let e=document.getElementById(\"nav-menu-panel\");e&&e.classList.toggle(\"float-panel-closed\")})}o();"],["/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/components/widget/WidgetLayout.astro?astro&type=script&index=0&lang.ts","class d extends HTMLElement{constructor(){if(super(),this.dataset.isCollapsed!==\"true\")return;const e=this.dataset.id,t=this.querySelector(\".expand-btn\"),s=this.querySelector(`#${e}`);t.addEventListener(\"click\",()=>{s.classList.remove(\"collapsed\"),t.classList.add(\"hidden\")})}}customElements.get(\"widget-layout\")||customElements.define(\"widget-layout\",d);"]],"assets":["/_astro/page.D6-Kvdo4.js","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/about/index.html","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/activity/index.html","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/archive/category/uncategorized/index.html","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/archive/index.html","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/robots.txt","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/rss.xml","/file:///Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/dist/work/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"mdQNR5HXZOSKqk9CKKOjtJCGdF+8aGcJ/TcO3rwKJtc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

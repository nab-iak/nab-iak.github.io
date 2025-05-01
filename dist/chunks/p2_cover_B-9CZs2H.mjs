const p2_cover = new Proxy({"src":"/_astro/p2_cover.CYclqjsn.jpg","width":5760,"height":1360,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p2/p2_cover.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p2/p2_cover.jpg");
							return target[name];
						}
					});

export { p2_cover as default };

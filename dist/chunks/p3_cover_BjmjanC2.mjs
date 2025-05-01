const p3_cover = new Proxy({"src":"/_astro/p3_cover.DdQDIvUR.jpg","width":2535,"height":552,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/p3_cover.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p3/p3_cover.jpg");
							return target[name];
						}
					});

export { p3_cover as default };

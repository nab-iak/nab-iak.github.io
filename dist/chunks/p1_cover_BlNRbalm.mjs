const p1_cover = new Proxy({"src":"/_astro/p1_cover.C6WR3yUj.jpg","width":3752,"height":887,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p1/p1_cover.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p1/p1_cover.jpg");
							return target[name];
						}
					});

export { p1_cover as default };

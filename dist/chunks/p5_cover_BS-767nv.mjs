const p5_cover = new Proxy({"src":"/_astro/p5_cover.CgI6GmCp.jpg","width":5976,"height":1415,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p5/p5_cover.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p5/p5_cover.jpg");
							return target[name];
						}
					});

export { p5_cover as default };

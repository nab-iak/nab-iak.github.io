const p4_cover = new Proxy({"src":"/_astro/p4_cover.96Q-ZZLG.png","width":4117,"height":1083,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p4/p4_cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/content/posts/p4/p4_cover.png");
							return target[name];
						}
					});

export { p4_cover as default };

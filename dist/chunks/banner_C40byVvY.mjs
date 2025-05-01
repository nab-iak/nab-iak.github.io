const banner = new Proxy({"src":"/_astro/banner.DurQlggx.png","width":3700,"height":942,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/banner.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/banner.png");
							return target[name];
						}
					});

export { banner as default };

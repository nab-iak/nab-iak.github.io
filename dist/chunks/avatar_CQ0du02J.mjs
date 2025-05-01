const avatar = new Proxy({"src":"/_astro/avatar.CvxMxqxw.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/avatar.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/wanjiawei/Projects/Nab-iak/nab-iak.github.io/src/assets/images/avatar.jpg");
							return target[name];
						}
					});

export { avatar as default };

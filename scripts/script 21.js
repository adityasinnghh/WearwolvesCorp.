
	(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
		[3185], {
			26285: function(e, t, n) {
				Promise.resolve().then(n.t.bind(n, 58877, 23)), Promise.resolve().then(n.bind(n, 91496)), Promise.resolve().then(n.bind(n, 80354)), Promise.resolve().then(n.t.bind(n, 231, 23)), Promise.resolve().then(n.t.bind(n, 55070, 23))
			},
			29893: function(e, t, n) {
				"use strict";
				n.d(t, {
					z: function() {
						return s
					}
				});
				var r = n(57437),
					i = n(37440);
				n(2265);
				let s = e => {
					let {
						children: t,
						className: n,
						variant: s = "primary",
						as: a = "button",
						...l
					} = e;
					return (0, r.jsx)(a, {
						className: (0, i.cn)("bg-secondary relative z-10 hover:bg-secondary/90 group hover:-translate-y-0.5 active:scale-[0.98] text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center", "simple" === s ? "bg-secondary relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center" : "outline" === s ? "bg-white relative z-10 hover:bg-secondary/90 hover:shadow-xl  text-black border border-black hover:text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center" : "primary" === s ? "bg-secondary relative z-10 hover:bg-secondary/90  border border-secondary text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]" : "muted" === s ? "bg-neutral-800 relative z-10 hover:bg-neutral-900  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_1px_0px_0px_#FFFFFF20_inset]" : "", n),
						...l,
						children: null != t ? t : "Get Started"
					})
				}
			},
			18562: function(e, t, n) {
				"use strict";
				n.d(t, {
					T: function() {
						return s
					}
				});
				var r = n(57437),
					i = n(80354);
				n(2265);
				let s = () => (0, r.jsxs)(i.Link, {
					href: "/",
					className: "font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20",
					children: [(0, r.jsxs)("svg", {
						width: "35",
						height: "35",
						viewBox: "0 0 35 35",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: "h-6 w-6",
						children: [(0, r.jsx)("circle", {
							cx: "17.5",
							cy: "17.5",
							r: "17.5",
							fill: "white"
						}), (0, r.jsx)("path", {
							d: "M 5 8 L 13.5 26 L 18 13 L 22 26 L 31 8 L 25 12 L 18 26 L 11 12 L 11 12 Z",
							fill: "#111B21"
						})]
					}), (0, r.jsx)("span", {
						className: "text-white font-bold",
						children: "Wearwolves corp."
					})]
				})
			},
			91496: function(e, t, n) {
				"use strict";
				n.d(t, {
					NavBar: function() {
						return b
					}
				});
				var r = n(57437),
					i = n(18562),
					s = n(29893),
					a = n(37440),
					l = n(80354),
					c = n(16463);

				function o(e) {
					let {
						children: t,
						href: n,
						active: i,
						target: s,
						className: o
					} = e, u = (0, c.usePathname)();
					return (0, r.jsx)(l.Link, {
						href: n,
						className: (0, a.cn)("flex items-center justify-center  text-sm leading-[110%] px-4 py-2 rounded-md  hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200", (i || (null == u ? void 0 : u.includes(n))) && "bg-transparent text-white", o),
						target: s,
						children: t
					})
				}
				var u = n(59604),
					d = n(25399),
					x = n(62784),
					m = n(66141),
					f = n(2265);
				let h = e => {
					let {
						navItems: t
					} = e, {
						scrollY: n
					} = (0, u.v)(), [c, h] = (0, f.useState)(!1);
					return (0, d.W)(n, "change", e => {
						e > 100 ? h(!0) : h(!1)
					}), (0, r.jsxs)(x.E.div, {
						className: (0, a.cn)("w-full flex relative justify-between px-4 py-3 rounded-md  transition duration-200 bg-transparent mx-auto"),
						animate: {
							width: c ? "80%" : "100%",
							background: c ? "var(--neutral-900)" : "transparent"
						},
						transition: {
							duration: .4
						},
						children: [(0, r.jsx)(m.M, {
							children: c && (0, r.jsx)(x.E.div, {
								initial: {
									opacity: 0
								},
								animate: {
									opacity: 1
								},
								transition: {
									duration: 1
								},
								className: "absolute inset-0 h-full w-full bg-neutral-900 pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full"
							}, String(c))
						}), (0, r.jsxs)("div", {
							className: "flex flex-row gap-2 items-center",
							children: [(0, r.jsx)(i.T, {}), (0, r.jsx)("div", {
								className: "flex items-center gap-1.5",
								children: t.map(e => (0, r.jsx)(o, {
									href: e.link,
									target: e.target,
									children: e.title
								}, e.title))
							})]
						}), (0, r.jsxs)("div", {
							className: "flex space-x-2 items-center",
							children: [(0, r.jsx)(s.z, {
								variant: "simple",
								as: l.Link,
								href: "/register",
								children: "Register"
							}), (0, r.jsx)(s.z, {
								children: "Book a demo"
							})]
						})]
					})
				};
				var p = n(69824);
				let v = e => {
						let {
							navItems: t
						} = e, [n, c] = (0, f.useState)(!1), {
							scrollY: o
						} = (0, u.v)(), [x, m] = (0, f.useState)(!1);
						return (0, d.W)(o, "change", e => {
							e > 100 ? m(!0) : m(!1)
						}), (0, r.jsxs)("div", {
							className: (0, a.cn)("flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200", x && " bg-neutral-900  shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]"),
							children: [(0, r.jsx)(i.T, {}), (0, r.jsx)(p.M1X, {
								className: "text-white h-6 w-6",
								onClick: () => c(!n)
							}), n && (0, r.jsxs)("div", {
								className: "fixed inset-0 bg-black z-50 flex flex-col items-start justify-start space-y-10  pt-5  text-xl text-zinc-600  transition duration-200 hover:text-zinc-800",
								children: [(0, r.jsxs)("div", {
									className: "flex items-center justify-between w-full px-5",
									children: [(0, r.jsx)(i.T, {}), (0, r.jsx)("div", {
										className: "flex items-center space-x-2",
										children: (0, r.jsx)(p.j7p, {
											className: "h-8 w-8 text-white",
											onClick: () => c(!n)
										})
									})]
								}), (0, r.jsx)("div", {
									className: "flex flex-col items-start justify-start gap-[14px] px-8",
									children: t.map((e, t) => (0, r.jsx)(r.Fragment, {
										children: e.children && e.children.length > 0 ? (0, r.jsx)(r.Fragment, {
											children: e.children.map((e, t) => (0, r.jsx)(l.Link, {
												href: e.link,
												onClick: () => c(!1),
												className: "relative max-w-[15rem] text-left text-2xl",
												children: (0, r.jsx)("span", {
													className: "block text-white",
													children: e.title
												})
											}, "link=".concat(t)))
										}) : (0, r.jsx)(l.Link, {
											href: e.link,
											onClick: () => c(!1),
											className: "relative",
											children: (0, r.jsx)("span", {
												className: "block text-[26px] text-white",
												children: e.title
											})
										}, "link=".concat(t))
									}))
								}), (0, r.jsxs)("div", {
									className: "flex flex-row w-full items-start gap-2.5  px-8 py-4 ",
									children: [(0, r.jsx)(s.z, {
										children: "Book a demo"
									}), (0, r.jsx)(s.z, {
										variant: "simple",
										as: l.Link,
										href: "/register",
										onClick: () => {
											c(!1)
										},
										children: "Register"
									})]
								})]
							})]
						})
					},
					w = [{
						title: "Features",
						link: "/features"
					}, {
						title: "Pricing",
						link: "/pricing"
					}, {
						title: "Blog",
						link: "/blog"
					}, {
						title: "Contact",
						link: "/contact"
					}];

				function b() {
					return (0, r.jsxs)(x.E.nav, {
						initial: {
							y: -80
						},
						animate: {
							y: 0
						},
						transition: {
							ease: [.6, .05, .1, .9],
							duration: .8
						},
						className: "max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full",
						children: [(0, r.jsx)("div", {
							className: "hidden lg:block w-full",
							children: (0, r.jsx)(h, {
								navItems: w
							})
						}), (0, r.jsx)("div", {
							className: "flex h-full w-full items-center lg:hidden ",
							children: (0, r.jsx)(v, {
								navItems: w
							})
						})]
					})
				}
			},
			37440: function(e, t, n) {
				"use strict";
				n.d(t, {
					cn: function() {
						return s
					}
				});
				var r = n(44839),
					i = n(96164);

				function s() {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return (0, i.m6)((0, r.W)(t))
				}
			},
			16463: function(e, t, n) {
				"use strict";
				var r = n(71169);
				n.o(r, "usePathname") && n.d(t, {
					usePathname: function() {
						return r.usePathname
					}
				}), n.o(r, "useRouter") && n.d(t, {
					useRouter: function() {
						return r.useRouter
					}
				})
			},
			58877: function() {},
			55070: function(e) {
				e.exports = {
					style: {
						fontFamily: "'__Inter_ac1a46', '__Inter_Fallback_ac1a46'",
						fontStyle: "normal"
					},
					className: "__className_ac1a46"
				}
			},
			80354: function(e, t, n) {
				"use strict";
				n.r(t), n.d(t, {
					Link: function() {
						return u
					},
					ViewTransitions: function() {
						return c
					}
				});
				var r = n(57437),
					i = n(87138),
					s = n(16463),
					a = n(2265);
				let l = (0, a.createContext)(() => () => {});

				function c(e) {
					let {
						children: t
					} = e, [n, i] = (0, a.useState)(null);
					return (0, a.useEffect)(() => {
						n && (n(), i(null))
					}, [n]), ! function() {
						let e = (0, s.usePathname)(),
							t = (0, a.useRef)(e),
							[n, r] = (0, a.useState)(null);
						(0, a.useEffect)(() => {
							if (!("startViewTransition" in document)) return () => {};
							let e = () => {
								let e;
								let t = new Promise(t => {
									e = t
								});
								r([new Promise(e => {
									document.startViewTransition(() => (e(), t))
								}), e])
							};
							return window.addEventListener("popstate", e), () => {
								window.removeEventListener("popstate", e)
							}
						}, []), n && t.current !== e && (0, a.use)(n[0]);
						let i = (0, a.useRef)(n);
						(0, a.useEffect)(() => {
							i.current = n
						}, [n]), (0, a.useEffect)(() => {
							t.current = e, i.current && (i.current[1](), i.current = null)
						}, [e])
					}(), (0, r.jsx)(l.Provider, {
						value: i,
						children: t
					})
				}

				function o() {
					return (o = Object.assign || function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
						}
						return e
					}).apply(this, arguments)
				}

				function u(e) {
					let t = (0, s.useRouter)(),
						n = (0, a.use)(l),
						{
							href: c,
							as: u,
							replace: d,
							scroll: x
						} = e,
						m = (0, a.useCallback)(r => {
							e.onClick && e.onClick(r), "startViewTransition" in document && ! function(e) {
								let {
									nodeName: t
								} = e.currentTarget;
								return !!("A" === t.toUpperCase() && function(e) {
									let t = e.currentTarget.getAttribute("target");
									return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
								}(e))
							}(r) && (r.preventDefault(), document.startViewTransition(() => new Promise(e => {
								(0, a.startTransition)(() => {
									t[d ? "replace" : "push"](u || c, {
										scroll: null == x || x
									}), n(() => e)
								})
							})))
						}, [e.onClick, c, u, d, x]);
					return (0, r.jsx)(i.default, o({}, e, {
						onClick: m
					}))
				}
			}
		},
		function(e) {
			e.O(0, [3328, 2729, 5452, 7138, 4868, 2784, 9965, 1671, 2971, 7023, 1744], function() {
				return e(e.s = 26285)
			}), _N_E = e.O()
		}
	]); 
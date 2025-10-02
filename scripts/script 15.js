"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[9553], {
		65336: function(t, e, i) {
			let s, n, a, o, r;
			i.d(e, {
				u: function() {
					return X
				}
			});
			var l = i(2265),
				c = i.t(l, 2);

			function h() {
				let t = [],
					e = {
						addEventListener: (t, i, s, n) => (t.addEventListener(i, s, n), e.add(() => t.removeEventListener(i, s, n))),
						requestAnimationFrame() {
							for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
							let n = requestAnimationFrame(...i);
							return e.add(() => cancelAnimationFrame(n))
						},
						nextFrame() {
							for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
							return e.requestAnimationFrame(() => e.requestAnimationFrame(...i))
						},
						setTimeout() {
							for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
							let n = setTimeout(...i);
							return e.add(() => clearTimeout(n))
						},
						microTask() {
							for (var t, i = arguments.length, s = Array(i), n = 0; n < i; n++) s[n] = arguments[n];
							let a = {
								current: !0
							};
							return t = () => {
								a.current && s[0]()
							}, "function" == typeof queueMicrotask ? queueMicrotask(t) : Promise.resolve().then(t).catch(t => setTimeout(() => {
								throw t
							})), e.add(() => {
								a.current = !1
							})
						},
						style(t, e, i) {
							let s = t.style.getPropertyValue(e);
							return Object.assign(t.style, {
								[e]: i
							}), this.add(() => {
								Object.assign(t.style, {
									[e]: s
								})
							})
						},
						group(t) {
							let e = h();
							return t(e), this.add(() => e.dispose())
						},
						add: e => (t.includes(e) || t.push(e), () => {
							let i = t.indexOf(e);
							if (i >= 0)
								for (let e of t.splice(i, 1)) e()
						}),
						dispose() {
							for (let e of t.splice(0)) e()
						}
					};
				return e
			}

			function d() {
				let [t] = (0, l.useState)(h);
				return (0, l.useEffect)(() => () => t.dispose(), [t]), t
			}
			var u = Object.defineProperty,
				p = (t, e, i) => e in t ? u(t, e, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: i
				}) : t[e] = i,
				f = (t, e, i) => (p(t, "symbol" != typeof e ? e + "" : e, i), i);
			class v {
				set(t) {
					this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
				}
				reset() {
					this.set(this.detect())
				}
				nextId() {
					return ++this.currentId
				}
				get isServer() {
					return "server" === this.current
				}
				get isClient() {
					return "client" === this.current
				}
				detect() {
					return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
				}
				handoff() {
					"pending" === this.handoffState && (this.handoffState = "complete")
				}
				get isHandoffComplete() {
					return "complete" === this.handoffState
				}
				constructor() {
					f(this, "current", this.detect()), f(this, "handoffState", "pending"), f(this, "currentId", 0)
				}
			}
			let g = new v,
				m = (t, e) => {
					g.isServer ? (0, l.useEffect)(t, e) : (0, l.useLayoutEffect)(t, e)
				};

			function y(t) {
				let e = (0, l.useRef)(t);
				return m(() => {
					e.current = t
				}, [t]), e
			}
			let b = function(t) {
				let e = y(t);
				return l.useCallback(function() {
					for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
					return e.current(...i)
				}, [e])
			};

			function w() {
				let t;
				let e = (t = "undefined" == typeof document, (0, c.useSyncExternalStore)(() => () => {}, () => !1, () => !t)),
					[i, s] = l.useState(g.isHandoffComplete);
				return i && !1 === g.isHandoffComplete && s(!1), l.useEffect(() => {
					!0 !== i && s(!0)
				}, [i]), l.useEffect(() => g.handoff(), []), !e && i
			}
			let x = Symbol();

			function _() {
				for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				let s = (0, l.useRef)(e);
				(0, l.useEffect)(() => {
					s.current = e
				}, [e]);
				let n = b(t => {
					for (let e of s.current) null != e && ("function" == typeof e ? e(t) : e.current = t)
				});
				return e.every(t => null == t || (null == t ? void 0 : t[x])) ? void 0 : n
			}
			var k = ((s = k || {})[s.None = 0] = "None", s[s.Closed = 1] = "Closed", s[s.Enter = 2] = "Enter", s[s.Leave = 4] = "Leave", s);
			let C = (0, l.createContext)(null);
			C.displayName = "OpenClosedContext";
			var z = ((n = z || {})[n.Open = 1] = "Open", n[n.Closed = 2] = "Closed", n[n.Closing = 4] = "Closing", n[n.Opening = 8] = "Opening", n);

			function M() {
				return (0, l.useContext)(C)
			}

			function O(t) {
				let {
					value: e,
					children: i
				} = t;
				return l.createElement(C.Provider, {
					value: e
				}, i)
			}

			function S() {
				for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				return Array.from(new Set(e.flatMap(t => "string" == typeof t ? t.split(" ") : []))).filter(Boolean).join(" ")
			}

			function P(t, e) {
				for (var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), n = 2; n < i; n++) s[n - 2] = arguments[n];
				if (t in e) {
					let i = e[t];
					return "function" == typeof i ? i(...s) : i
				}
				let a = Error('Tried to handle "'.concat(t, '" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(e).map(t => '"'.concat(t, '"')).join(", "), "."));
				throw Error.captureStackTrace && Error.captureStackTrace(a, P), a
			}
			var T = ((a = T || {})[a.None = 0] = "None", a[a.RenderStrategy = 1] = "RenderStrategy", a[a.Static = 2] = "Static", a),
				R = ((o = R || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

			function D(t) {
				let {
					ourProps: e,
					theirProps: i,
					slot: s,
					defaultTag: n,
					features: a,
					visible: o = !0,
					name: r,
					mergeRefs: l
				} = t;
				l = null != l ? l : I;
				let c = L(i, e);
				if (o) return E(c, s, n, r, l);
				let h = null != a ? a : 0;
				if (2 & h) {
					let {
						static: t = !1,
						...e
					} = c;
					if (t) return E(e, s, n, r, l)
				}
				if (1 & h) {
					let {
						unmount: t = !0,
						...e
					} = c;
					return P(t ? 0 : 1, {
						0: () => null,
						1: () => E({
							...e,
							hidden: !0,
							style: {
								display: "none"
							}
						}, s, n, r, l)
					})
				}
				return E(c, s, n, r, l)
			}

			function E(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = arguments.length > 2 ? arguments[2] : void 0,
					s = arguments.length > 3 ? arguments[3] : void 0,
					n = arguments.length > 4 ? arguments[4] : void 0,
					{
						as: a = i,
						children: o,
						refName: r = "ref",
						...c
					} = B(t, ["unmount", "static"]),
					h = void 0 !== t.ref ? {
						[r]: t.ref
					} : {},
					d = "function" == typeof o ? o(e) : o;
				"className" in c && c.className && "function" == typeof c.className && (c.className = c.className(e)), c["aria-labelledby"] && c["aria-labelledby"] === c.id && (c["aria-labelledby"] = void 0);
				let u = {};
				if (e) {
					let t = !1,
						i = [];
					for (let [s, n] of Object.entries(e)) "boolean" == typeof n && (t = !0), !0 === n && i.push(s.replace(/([A-Z])/g, t => "-".concat(t.toLowerCase())));
					if (t)
						for (let t of (u["data-headlessui-state"] = i.join(" "), i)) u["data-".concat(t)] = ""
				}
				if (a === l.Fragment && (Object.keys(A(c)).length > 0 || Object.keys(A(u)).length > 0)) {
					if (!(0, l.isValidElement)(d) || Array.isArray(d) && d.length > 1) {
						if (Object.keys(A(c)).length > 0) throw Error(['Passing props on "Fragment"!', "", "The current component <".concat(s, ' /> is rendering a "Fragment".'), "However we need to passthrough the following props:", Object.keys(A(c)).concat(Object.keys(A(u))).map(t => "  - ".concat(t)).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(t => "  - ".concat(t)).join("\n")].join("\n"))
					} else {
						let t = d.props,
							e = null == t ? void 0 : t.className,
							i = "function" == typeof e ? function() {
								for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
								return S(e(...i), c.className)
							} : S(e, c.className),
							s = L(d.props, A(B(c, ["ref"])));
						for (let t in u) t in s && delete u[t];
						return (0, l.cloneElement)(d, Object.assign({}, s, u, h, {
							ref: n(d.ref, h.ref)
						}, i ? {
							className: i
						} : {}))
					}
				}
				return (0, l.createElement)(a, Object.assign({}, B(c, ["ref"]), a !== l.Fragment && h, a !== l.Fragment && u), d)
			}

			function I() {
				for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				return e.every(t => null == t) ? void 0 : t => {
					for (let i of e) null != i && ("function" == typeof i ? i(t) : i.current = t)
				}
			}

			function L() {
				for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				if (0 === e.length) return {};
				if (1 === e.length) return e[0];
				let s = {},
					n = {};
				for (let t of e)
					for (let e in t) e.startsWith("on") && "function" == typeof t[e] ? (null != n[e] || (n[e] = []), n[e].push(t[e])) : s[e] = t[e];
				if (s.disabled || s["aria-disabled"])
					for (let t in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(t) && (n[t] = [t => {
						var e;
						return null == (e = null == t ? void 0 : t.preventDefault) ? void 0 : e.call(t)
					}]);
				for (let t in n) Object.assign(s, {
					[t](e) {
						for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) s[a - 1] = arguments[a];
						for (let i of n[t]) {
							if ((e instanceof Event || (null == e ? void 0 : e.nativeEvent) instanceof Event) && e.defaultPrevented) return;
							i(e, ...s)
						}
					}
				});
				return s
			}

			function F(t) {
				var e;
				return Object.assign((0, l.forwardRef)(t), {
					displayName: null != (e = t.displayName) ? e : t.name
				})
			}

			function A(t) {
				let e = Object.assign({}, t);
				for (let t in e) void 0 === e[t] && delete e[t];
				return e
			}

			function B(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					i = Object.assign({}, t);
				for (let t of e) t in i && delete i[t];
				return i
			}

			function q(t) {
				var e;
				return !!(t.enter || t.enterFrom || t.enterTo || t.leave || t.leaveFrom || t.leaveTo) || (null != (e = t.as) ? e : G) !== l.Fragment || 1 === l.Children.count(t.children)
			}
			let W = (0, l.createContext)(null);
			W.displayName = "TransitionContext";
			var H = ((r = H || {}).Visible = "visible", r.Hidden = "hidden", r);
			let V = (0, l.createContext)(null);

			function U(t) {
				return "children" in t ? U(t.children) : t.current.filter(t => {
					let {
						el: e
					} = t;
					return null !== e.current
				}).filter(t => {
					let {
						state: e
					} = t;
					return "visible" === e
				}).length > 0
			}

			function j(t, e) {
				let i;
				let s = y(t),
					n = (0, l.useRef)([]),
					a = (i = (0, l.useRef)(!1), m(() => (i.current = !0, () => {
						i.current = !1
					}), []), i),
					o = d(),
					r = b(function(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R.Hidden,
							i = n.current.findIndex(e => {
								let {
									el: i
								} = e;
								return i === t
							}); - 1 !== i && (P(e, {
							[R.Unmount]() {
								n.current.splice(i, 1)
							},
							[R.Hidden]() {
								n.current[i].state = "hidden"
							}
						}), o.microTask(() => {
							var t;
							!U(n) && a.current && (null == (t = s.current) || t.call(s))
						}))
					}),
					c = b(t => {
						let e = n.current.find(e => {
							let {
								el: i
							} = e;
							return i === t
						});
						return e ? "visible" !== e.state && (e.state = "visible") : n.current.push({
							el: t,
							state: "visible"
						}), () => r(t, R.Unmount)
					}),
					h = (0, l.useRef)([]),
					u = (0, l.useRef)(Promise.resolve()),
					p = (0, l.useRef)({
						enter: [],
						leave: []
					}),
					f = b((t, i, s) => {
						h.current.splice(0), e && (e.chains.current[i] = e.chains.current[i].filter(e => {
							let [i] = e;
							return i !== t
						})), null == e || e.chains.current[i].push([t, new Promise(t => {
							h.current.push(t)
						})]), null == e || e.chains.current[i].push([t, new Promise(t => {
							Promise.all(p.current[i].map(t => {
								let [e, i] = t;
								return i
							})).then(() => t())
						})]), "enter" === i ? u.current = u.current.then(() => null == e ? void 0 : e.wait.current).then(() => s(i)) : s(i)
					}),
					v = b((t, e, i) => {
						Promise.all(p.current[e].splice(0).map(t => {
							let [e, i] = t;
							return i
						})).then(() => {
							var t;
							null == (t = h.current.shift()) || t()
						}).then(() => i(e))
					});
				return (0, l.useMemo)(() => ({
					children: n,
					register: c,
					unregister: r,
					onStart: f,
					onStop: v,
					wait: u,
					chains: p
				}), [c, r, n, f, v, p, u])
			}
			V.displayName = "NestingContext";
			let G = l.Fragment,
				$ = T.RenderStrategy,
				N = F(function(t, e) {
					var i, s;
					let n, {
							show: a,
							appear: o = !1,
							unmount: r = !0,
							...c
						} = t,
						d = (0, l.useRef)(null),
						u = _(...q(t) ? [d, e] : null === e ? [] : [e]);
					w();
					let p = M();
					if (void 0 === a && null !== p && (a = (p & z.Open) === z.Open), void 0 === a) throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
					let [f, v] = (0, l.useState)(a ? "visible" : "hidden"), g = j(() => {
						a || v("hidden")
					}), [x, k] = (0, l.useState)(!0), C = (0, l.useRef)([a]);
					m(() => {
						!1 !== x && C.current[C.current.length - 1] !== a && (C.current.push(a), k(!1))
					}, [C, a]);
					let O = (0, l.useMemo)(() => ({
						show: a,
						appear: o,
						initial: x
					}), [a, o, x]);
					i = a, s = () => v("hidden"), n = y(t => {
						let e = t.getBoundingClientRect();
						0 === e.x && 0 === e.y && 0 === e.width && 0 === e.height && s()
					}), (0, l.useEffect)(() => {
						if (!i) return;
						let t = null === d ? null : d instanceof HTMLElement ? d : d.current;
						if (!t) return;
						let e = h();
						if ("undefined" != typeof ResizeObserver) {
							let i = new ResizeObserver(() => n.current(t));
							i.observe(t), e.add(() => i.disconnect())
						}
						if ("undefined" != typeof IntersectionObserver) {
							let i = new IntersectionObserver(() => n.current(t));
							i.observe(t), e.add(() => i.disconnect())
						}
						return () => e.dispose()
					}, [d, n, i]), m(() => {
						a ? v("visible") : U(g) || null === d.current || v("hidden")
					}, [a, g]);
					let S = {
							unmount: r
						},
						P = b(() => {
							var e;
							x && k(!1), null == (e = t.beforeEnter) || e.call(t)
						}),
						T = b(() => {
							var e;
							x && k(!1), null == (e = t.beforeLeave) || e.call(t)
						});
					return l.createElement(V.Provider, {
						value: g
					}, l.createElement(W.Provider, {
						value: O
					}, D({
						ourProps: {
							...S,
							as: l.Fragment,
							children: l.createElement(Y, {
								ref: u,
								...S,
								...c,
								beforeEnter: P,
								beforeLeave: T
							})
						},
						theirProps: {},
						defaultTag: l.Fragment,
						features: $,
						visible: "visible" === f,
						name: "Transition"
					})))
				}),
				Y = F(function(t, e) {
					var i, s;
					let {
						transition: n = !0,
						beforeEnter: a,
						afterEnter: o,
						beforeLeave: r,
						afterLeave: c,
						enter: u,
						enterFrom: p,
						enterTo: f,
						entered: v,
						leave: g,
						leaveFrom: y,
						leaveTo: x,
						...k
					} = t, C = (0, l.useRef)(null), M = q(t), T = _(...M ? [C, e] : null === e ? [] : [e]), E = null == (i = k.unmount) || i ? R.Unmount : R.Hidden, {
						show: I,
						appear: L,
						initial: F
					} = function() {
						let t = (0, l.useContext)(W);
						if (null === t) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return t
					}(), [B, H] = (0, l.useState)(I ? "visible" : "hidden"), N = function() {
						let t = (0, l.useContext)(V);
						if (null === t) throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
						return t
					}(), {
						register: Y,
						unregister: Z
					} = N;
					m(() => Y(C), [Y, C]), m(() => {
						if (E === R.Hidden && C.current) {
							if (I && "visible" !== B) {
								H("visible");
								return
							}
							return P(B, {
								hidden: () => Z(C),
								visible: () => Y(C)
							})
						}
					}, [B, C, Y, Z, I, E]);
					let X = w();
					m(() => {
						if (M && X && "visible" === B && null === C.current) throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")
					}, [C, B, X, M]);
					let K = F && !L,
						Q = L && I && F,
						J = (0, l.useRef)(!1),
						tt = j(() => {
							J.current || (H("hidden"), Z(C))
						}, N),
						te = b(t => {
							J.current = !0, tt.onStart(C, t ? "enter" : "leave", t => {
								"enter" === t ? null == a || a() : "leave" === t && (null == r || r())
							})
						}),
						ti = b(t => {
							let e = t ? "enter" : "leave";
							J.current = !1, tt.onStop(C, e, t => {
								"enter" === t ? null == o || o() : "leave" === t && (null == c || c())
							}), "leave" !== e || U(tt) || (H("hidden"), Z(C))
						});
					(0, l.useEffect)(() => {
						M && n || (te(I), ti(I))
					}, [I, M, n]);
					let [, ts] = function(t, e, i, s) {
						let [n, a] = (0, l.useState)(i), {
							hasFlag: o,
							addFlag: r,
							removeFlag: c
						} = function() {
							let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								[e, i] = (0, l.useState)(t),
								s = (0, l.useCallback)(t => i(t), [e]),
								n = (0, l.useCallback)(t => i(e => e | t), [e]),
								a = (0, l.useCallback)(t => (e & t) === t, [e]);
							return {
								flags: e,
								setFlag: s,
								addFlag: n,
								hasFlag: a,
								removeFlag: (0, l.useCallback)(t => i(e => e & ~t), [i]),
								toggleFlag: (0, l.useCallback)(t => i(e => e ^ t), [i])
							}
						}(t && n ? 3 : 0), u = (0, l.useRef)(!1), p = (0, l.useRef)(!1), f = d();
						return m(function n() {
							var o;
							if (!t) return;
							i && a(!0);
							let l = e.current;
							return l ? (null == (o = null == s ? void 0 : s.start) || o.call(s, i), function(t, e) {
								let {
									prepare: i,
									run: s,
									done: n,
									inFlight: a
								} = e, o = h();
								return function(t, e) {
									let {
										inFlight: i,
										prepare: s
									} = e;
									if (null != i && i.current) {
										s();
										return
									}
									let n = t.style.transition;
									t.style.transition = "none", s(), t.offsetHeight, t.style.transition = n
								}(t, {
									prepare: i,
									inFlight: a
								}), o.nextFrame(() => {
									o.add(function(t, e) {
										let i;
										let s = (i = {
												called: !1
											}, function() {
												for (var t = arguments.length, s = Array(t), n = 0; n < t; n++) s[n] = arguments[n];
												if (!i.called) return i.called = !0, e(...s)
											}),
											n = h();
										if (!t) return n.dispose;
										let {
											transitionDuration: a,
											transitionDelay: o
										} = getComputedStyle(t), [r, l] = [a, o].map(t => {
											let [e = 0] = t.split(",").filter(Boolean).map(t => t.includes("ms") ? parseFloat(t) : 1e3 * parseFloat(t)).sort((t, e) => e - t);
											return e
										}), c = r + l;
										if (0 !== c) {
											let e = n.group(i => {
												let n = i.setTimeout(() => {
													s(), i.dispose()
												}, c);
												i.addEventListener(t, "transitionrun", a => {
													a.target === a.currentTarget && (n(), i.addEventListener(t, "transitioncancel", t => {
														t.target === t.currentTarget && (s(), e())
													}))
												})
											});
											n.addEventListener(t, "transitionend", t => {
												t.target === t.currentTarget && (s(), n.dispose())
											})
										} else s();
										return n.dispose
									}(t, n)), s()
								}), o.dispose
							}(l, {
								inFlight: u,
								prepare() {
									p.current ? p.current = !1 : p.current = u.current, u.current = !0, p.current || (i ? (r(3), c(4)) : (r(4), c(2)))
								},
								run() {
									p.current ? i ? (c(3), r(4)) : (c(4), r(3)) : i ? c(1) : r(1)
								},
								done() {
									var t;
									p.current && "function" == typeof l.getAnimations && l.getAnimations().length > 0 || (u.current = !1, c(7), i || a(!1), null == (t = null == s ? void 0 : s.end) || t.call(s, i))
								}
							})) : i ? (r(3), f.nextFrame(() => n())) : void 0
						}, [t, i, e, f]), t ? [n, {
							closed: o(1),
							enter: o(2),
							leave: o(4),
							transition: o(2) || o(4)
						}] : [i, {
							closed: void 0,
							enter: void 0,
							leave: void 0,
							transition: void 0
						}]
					}(!(!n || !M || !X || K), C, I, {
						start: te,
						end: ti
					}), tn = A({
						ref: T,
						className: (null == (s = S(k.className, Q && u, Q && p, ts.enter && u, ts.enter && ts.closed && p, ts.enter && !ts.closed && f, ts.leave && g, ts.leave && !ts.closed && y, ts.leave && ts.closed && x, !ts.transition && I && v)) ? void 0 : s.trim()) || void 0,
						... function(t) {
							let e = {};
							for (let i in t) !0 === t[i] && (e["data-".concat(i)] = "");
							return e
						}(ts)
					}), ta = 0;
					return "visible" === B && (ta |= z.Open), "hidden" === B && (ta |= z.Closed), ts.enter && (ta |= z.Opening), ts.leave && (ta |= z.Closing), l.createElement(V.Provider, {
						value: tt
					}, l.createElement(O, {
						value: ta
					}, D({
						ourProps: tn,
						theirProps: k,
						defaultTag: G,
						features: $,
						visible: "visible" === B,
						name: "Transition.Child"
					})))
				}),
				Z = F(function(t, e) {
					let i = null !== (0, l.useContext)(W),
						s = null !== M();
					return l.createElement(l.Fragment, null, !i && s ? l.createElement(N, {
						ref: e,
						...t
					}) : l.createElement(Y, {
						ref: e,
						...t
					}))
				}),
				X = Object.assign(N, {
					Child: Z,
					Root: N
				})
		},
		44813: function(t, e, i) {
			i.d(e, {
				Z: function() {
					return s
				}
			});
			/**
			 * @license @tabler/icons-react v3.6.0 - MIT
			 *
			 * This source code is licensed under the MIT license.
			 * See the LICENSE file in the root directory of this source tree.
			 */
			var s = (0, i(55487).Z)("outline", "mail-forward", "IconMailForward", [
				["path", {
					d: "M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5",
					key: "svg-0"
				}],
				["path", {
					d: "M3 6l9 6l9 -6",
					key: "svg-1"
				}],
				["path", {
					d: "M15 18h6",
					key: "svg-2"
				}],
				["path", {
					d: "M18 15l3 3l-3 3",
					key: "svg-3"
				}]
			])
		},
		55039: function(t, e, i) {
			i.d(e, {
				Z: function() {
					return s
				}
			});
			/**
			 * @license @tabler/icons-react v3.6.0 - MIT
			 *
			 * This source code is licensed under the MIT license.
			 * See the LICENSE file in the root directory of this source tree.
			 */
			var s = (0, i(55487).Z)("outline", "social", "IconSocial", [
				["path", {
					d: "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
					key: "svg-0"
				}],
				["path", {
					d: "M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
					key: "svg-1"
				}],
				["path", {
					d: "M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",
					key: "svg-2"
				}],
				["path", {
					d: "M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",
					key: "svg-3"
				}],
				["path", {
					d: "M12 7l0 4",
					key: "svg-4"
				}],
				["path", {
					d: "M6.7 17.8l2.8 -2",
					key: "svg-5"
				}],
				["path", {
					d: "M17.3 17.8l-2.8 -2",
					key: "svg-6"
				}]
			])
		},
		60209: function(t, e, i) {
			i.d(e, {
				Z: function() {
					return s
				}
			});
			/**
			 * @license @tabler/icons-react v3.6.0 - MIT
			 *
			 * This source code is licensed under the MIT license.
			 * See the LICENSE file in the root directory of this source tree.
			 */
			var s = (0, i(55487).Z)("outline", "terminal", "IconTerminal", [
				["path", {
					d: "M5 7l5 5l-5 5",
					key: "svg-0"
				}],
				["path", {
					d: "M12 19l7 0",
					key: "svg-1"
				}]
			])
		},
		13166: function(t, e, i) {
			i.d(e, {
				Z: function() {
					return s
				}
			});
			/**
			 * @license @tabler/icons-react v3.6.0 - MIT
			 *
			 * This source code is licensed under the MIT license.
			 * See the LICENSE file in the root directory of this source tree.
			 */
			var s = (0, i(55487).Z)("outline", "tool", "IconTool", [
				["path", {
					d: "M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5",
					key: "svg-0"
				}]
			])
		},
		87470: function(t, e, i) {
			var s, n, a, o, r, l, c, h, d, u, p, f, v, g, m, y, b, w, x, _, k, C, z, M, O, S, P, T, R, D, E, I, L, F, A, B, q, W, H, V, U, j, G, $, N, Y, Z, X, K, Q;
			i.d(e, {
				NV1: function() {
					return a
				},
				Cdc: function() {
					return im
				},
				Dpx: function() {
					return m
				},
				Hyf: function() {
					return o
				},
				gqJ: function() {
					return f
				},
				nxi: function() {
					return O
				},
				L8z: function() {
					return iA
				},
				OzF: function() {
					return eg
				},
				Voc: function() {
					return y
				},
				DYc: function() {
					return r
				},
				Igb: function() {
					return x
				},
				$Sh: function() {
					return iB
				},
				AeJ: function() {
					return iy
				},
				RnL: function() {
					return z
				},
				SWe: function() {
					return eW
				},
				OWs: function() {
					return tp
				},
				bx6: function() {
					return tm
				},
				M_G: function() {
					return tH
				},
				kRC: function() {
					return tN
				},
				gy4: function() {
					return t$
				},
				uZ5: function() {
					return tw
				},
				ocL: function() {
					return ee
				},
				Idc: function() {
					return tP
				},
				iCg: function() {
					return tG
				},
				XDe: function() {
					return tj
				},
				pSR: function() {
					return eh
				},
				gK4: function() {
					return ts
				},
				KH1: function() {
					return tZ
				},
				Spd: function() {
					return tS
				},
				oW6: function() {
					return tO
				},
				_Xd: function() {
					return ty
				},
				bS$: function() {
					return ea
				},
				BEi: function() {
					return ei
				},
				Dt5: function() {
					return es
				},
				jl5: function() {
					return tE
				},
				sZz: function() {
					return tb
				},
				KIV: function() {
					return tz
				},
				Gu7: function() {
					return tk
				},
				vzQ: function() {
					return et
				},
				izR: function() {
					return t9
				},
				V0: function() {
					return tQ
				},
				kJL: function() {
					return th
				},
				wm$: function() {
					return tU
				},
				dBL: function() {
					return tA
				},
				Kn2: function() {
					return tc
				},
				Ac: function() {
					return tW
				},
				KrJ: function() {
					return tL
				},
				c86: function() {
					return tq
				},
				wA_: function() {
					return tX
				},
				mxw: function() {
					return tB
				},
				X5o: function() {
					return ta
				},
				aMP: function() {
					return tt
				},
				WtO: function() {
					return te
				},
				tZy: function() {
					return tn
				},
				vdf: function() {
					return t_
				},
				lNs: function() {
					return t6
				},
				tXk: function() {
					return t3
				},
				dpV: function() {
					return tY
				},
				lCU: function() {
					return t4
				},
				Cst: function() {
					return tM
				},
				S6T: function() {
					return iq
				},
				CrJ: function() {
					return t0
				},
				PBz: function() {
					return el
				}
			});
			let J = "generated",
				tt = "pointerleave",
				te = "pointermove",
				ti = "touchend",
				ts = "tsParticles - Error",
				tn = 100,
				ta = 1e3;

			function to(t) {
				return "boolean" == typeof t
			}

			function tr(t) {
				return "string" == typeof t
			}

			function tl(t) {
				return "number" == typeof t
			}

			function tc(t) {
				return "object" == typeof t && null !== t
			}

			function th(t) {
				return Array.isArray(t)
			}(S = s || (s = {})).bottom = "bottom", S.bottomLeft = "bottom-left", S.bottomRight = "bottom-right", S.left = "left", S.none = "none", S.right = "right", S.top = "top", S.topLeft = "top-left", S.topRight = "top-right", S.outside = "outside", S.inside = "inside";
			let td = {
				x: 0,
				y: 0,
				z: 0
			};
			class tu {
				constructor(t, e, i) {
					if (this._updateFromAngle = (t, e) => {
							this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
						}, !tl(t) && t) this.x = t.x, this.y = t.y, this.z = t.z ? t.z : td.z;
					else if (void 0 !== t && void 0 !== e) this.x = t, this.y = e, this.z = i ?? td.z;
					else throw Error(`${ts} Vector3d not initialized correctly`)
				}
				static get origin() {
					return tu.create(td.x, td.y, td.z)
				}
				get angle() {
					return Math.atan2(this.y, this.x)
				}
				set angle(t) {
					this._updateFromAngle(t, this.length)
				}
				get length() {
					return Math.sqrt(this.getLengthSq())
				}
				set length(t) {
					this._updateFromAngle(this.angle, t)
				}
				static clone(t) {
					return tu.create(t.x, t.y, t.z)
				}
				static create(t, e, i) {
					return new tu(t, e, i)
				}
				add(t) {
					return tu.create(this.x + t.x, this.y + t.y, this.z + t.z)
				}
				addTo(t) {
					this.x += t.x, this.y += t.y, this.z += t.z
				}
				copy() {
					return tu.clone(this)
				}
				distanceTo(t) {
					return this.sub(t).length
				}
				distanceToSq(t) {
					return this.sub(t).getLengthSq()
				}
				div(t) {
					return tu.create(this.x / t, this.y / t, this.z / t)
				}
				divTo(t) {
					this.x /= t, this.y /= t, this.z /= t
				}
				getLengthSq() {
					return this.x ** 2 + this.y ** 2
				}
				mult(t) {
					return tu.create(this.x * t, this.y * t, this.z * t)
				}
				multTo(t) {
					this.x *= t, this.y *= t, this.z *= t
				}
				normalize() {
					let t = this.length;
					0 != t && this.multTo(1 / t)
				}
				rotate(t) {
					return tu.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), td.z)
				}
				setTo(t) {
					this.x = t.x, this.y = t.y, this.z = t.z ? t.z : td.z
				}
				sub(t) {
					return tu.create(this.x - t.x, this.y - t.y, this.z - t.z)
				}
				subFrom(t) {
					this.x -= t.x, this.y -= t.y, this.z -= t.z
				}
			}
			class tp extends tu {
				constructor(t, e) {
					super(t, e, td.z)
				}
				static get origin() {
					return tp.create(td.x, td.y)
				}
				static clone(t) {
					return tp.create(t.x, t.y)
				}
				static create(t, e) {
					return new tp(t, e)
				}
			}
			let tf = Math.random,
				tv = new Map,
				tg = 2 * Math.PI;

			function tm(t, e) {
				tv.get(t) || tv.set(t, e)
			}

			function ty(t) {
				return tv.get(t) ?? (t => t)
			}

			function tb() {
				return tw(tf(), 0, 1 - Number.EPSILON)
			}

			function tw(t, e, i) {
				return Math.min(Math.max(t, e), i)
			}

			function tx(t, e, i, s) {
				return Math.floor((t * i + e * s) / (i + s))
			}

			function t_(t) {
				let e = tz(t),
					i = tC(t);
				return e === i && (i = 0), tb() * (e - i) + i
			}

			function tk(t) {
				return tl(t) ? t : t_(t)
			}

			function tC(t) {
				return tl(t) ? t : t.min
			}

			function tz(t) {
				return tl(t) ? t : t.max
			}

			function tM(t, e) {
				if (t === e || void 0 === e && tl(t)) return t;
				let i = tC(t),
					s = tz(t);
				return void 0 !== e ? {
					min: Math.min(i, e),
					max: Math.max(s, e)
				} : tM(i, s)
			}

			function tO(t, e) {
				let i = t.x - e.x,
					s = t.y - e.y;
				return {
					dx: i,
					dy: s,
					distance: Math.sqrt(i ** 2 + s ** 2)
				}
			}

			function tS(t, e) {
				return tO(t, e).distance
			}

			function tP(t) {
				return t * Math.PI / 180
			}

			function tT(t, e, i, s) {
				return tp.create(t.x * (i - s) / (i + s) + 2 * e.x * s / (i + s), t.y)
			}

			function tR(t) {
				return t ? t.endsWith("%") ? parseFloat(t) / tn : parseFloat(t) : 1
			}(P = n || (n = {})).auto = "auto", P.increase = "increase", P.decrease = "decrease", P.random = "random", (T = a || (a = {})).increasing = "increasing", T.decreasing = "decreasing", (R = o || (o = {})).none = "none", R.max = "max", R.min = "min", (D = r || (r = {})).bottom = "bottom", D.left = "left", D.right = "right", D.top = "top", (E = l || (l = {})).precise = "precise", E.percent = "percent", (I = c || (c = {})).max = "max", I.min = "min", I.random = "random";
			let tD = {
				debug: console.debug,
				error: console.error,
				info: console.info,
				log: console.log,
				verbose: console.log,
				warning: console.warn
			};

			function tE() {
				return tD
			}

			function tI(t) {
				let e = {
						bounced: !1
					},
					{
						pSide: i,
						pOtherSide: s,
						rectSide: n,
						rectOtherSide: a,
						velocity: o,
						factor: r
					} = t;
				return s.min < a.min || s.min > a.max || s.max < a.min || s.max > a.max || (i.max >= n.min && i.max <= (n.max + n.min) * .5 && o > 0 || i.min <= n.max && i.min > (n.max + n.min) * .5 && o < 0) && (e.velocity = -(o * r), e.bounced = !0), e
			}

			function tL() {
				return "undefined" == typeof window || !window || void 0 === window.document || !window.document
			}

			function tF(t) {
				if (!tL() && "undefined" != typeof matchMedia) return matchMedia(t)
			}

			function tA(t, e) {
				return t === e || th(e) && e.indexOf(t) > -1
			}
			async function tB(t, e) {
				try {
					await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`)
				} catch {}
			}

			function tq(t, e, i = !0) {
				return t[void 0 !== e && i ? e % t.length : Math.floor(tb() * t.length)]
			}

			function tW(t, e, i, s, n) {
				var a;
				let o;
				return a = tH(t, s ?? 0), o = !0, n && n !== r.bottom || (o = a.top < e.height + i.x), o && (!n || n === r.left) && (o = a.right > i.x), o && (!n || n === r.right) && (o = a.left < e.width + i.y), o && (!n || n === r.top) && (o = a.bottom > i.y), o
			}

			function tH(t, e) {
				return {
					bottom: t.y + e,
					left: t.x - e,
					right: t.x + e,
					top: t.y - e
				}
			}

			function tV(t, ...e) {
				for (let i of e) {
					if (null == i) continue;
					if (!tc(i)) {
						t = i;
						continue
					}
					let e = Array.isArray(i);
					for (let s in e && (tc(t) || !t || !Array.isArray(t)) ? t = [] : !e && (tc(t) || !t || Array.isArray(t)) && (t = {}), i) {
						if ("__proto__" === s) continue;
						let e = i[s],
							n = t;
						n[s] = tc(e) && Array.isArray(e) ? e.map(t => tV(n[s], t)) : tV(n[s], e)
					}
				}
				return t
			}

			function tU(t, e) {
				return !!tK(e, e => e.enable && tA(t, e.mode))
			}

			function tj(t, e, i) {
				tZ(e, e => {
					let s = e.mode;
					e.enable && tA(t, s) && tZ(e.selectors, t => {
						i(t, e)
					})
				})
			}

			function tG(t, e) {
				if (e && t) return tK(t, t => (function(t, e) {
					let i = tZ(e, e => t.matches(e));
					return th(i) ? i.some(t => t) : i
				})(e, t.selectors))
			}

			function t$(t) {
				return {
					position: t.getPosition(),
					radius: t.getRadius(),
					mass: t.getMass(),
					velocity: t.velocity,
					factor: tp.create(tk(t.options.bounce.horizontal.value), tk(t.options.bounce.vertical.value))
				}
			}

			function tN(t, e) {
				let {
					x: i,
					y: s
				} = t.velocity.sub(e.velocity), [n, a] = [t.position, e.position], {
					dx: o,
					dy: r
				} = tO(a, n);
				if (i * o + s * r < 0) return;
				let l = -Math.atan2(r, o),
					c = t.mass,
					h = e.mass,
					d = t.velocity.rotate(l),
					u = e.velocity.rotate(l),
					p = tT(d, u, c, h),
					f = tT(u, d, c, h),
					v = p.rotate(-l),
					g = f.rotate(-l);
				t.velocity.x = v.x * t.factor.x, t.velocity.y = v.y * t.factor.y, e.velocity.x = g.x * e.factor.x, e.velocity.y = g.y * e.factor.y
			}

			function tY(t, e) {
				let i = tH(t.getPosition(), t.getRadius()),
					s = t.options.bounce,
					n = tI({
						pSide: {
							min: i.left,
							max: i.right
						},
						pOtherSide: {
							min: i.top,
							max: i.bottom
						},
						rectSide: {
							min: e.left,
							max: e.right
						},
						rectOtherSide: {
							min: e.top,
							max: e.bottom
						},
						velocity: t.velocity.x,
						factor: tk(s.horizontal.value)
					});
				n.bounced && (void 0 !== n.velocity && (t.velocity.x = n.velocity), void 0 !== n.position && (t.position.x = n.position));
				let a = tI({
					pSide: {
						min: i.top,
						max: i.bottom
					},
					pOtherSide: {
						min: i.left,
						max: i.right
					},
					rectSide: {
						min: e.top,
						max: e.bottom
					},
					rectOtherSide: {
						min: e.left,
						max: e.right
					},
					velocity: t.velocity.y,
					factor: tk(s.vertical.value)
				});
				a.bounced && (void 0 !== a.velocity && (t.velocity.y = a.velocity), void 0 !== a.position && (t.position.y = a.position))
			}

			function tZ(t, e) {
				return th(t) ? t.map((t, i) => e(t, i)) : e(t, 0)
			}

			function tX(t, e, i) {
				return th(t) ? tq(t, e, i) : t
			}

			function tK(t, e) {
				return th(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0
			}

			function tQ(t, e) {
				let i = t.value,
					s = t.animation,
					o = {
						delayTime: tk(s.delay) * ta,
						enable: s.enable,
						value: tk(t.value) * e,
						max: tz(i) * e,
						min: tC(i) * e,
						loops: 0,
						maxLoops: tk(s.count),
						time: 0
					};
				if (s.enable) {
					switch (o.decay = 1 - tk(s.decay), s.mode) {
						case n.increase:
							o.status = a.increasing;
							break;
						case n.decrease:
							o.status = a.decreasing;
							break;
						case n.random:
							o.status = tb() >= .5 ? a.increasing : a.decreasing
					}
					let t = s.mode === n.auto;
					switch (s.startValue) {
						case c.min:
							o.value = o.min, t && (o.status = a.increasing);
							break;
						case c.max:
							o.value = o.max, t && (o.status = a.decreasing);
							break;
						case c.random:
						default:
							o.value = t_(o), t && (o.status = tb() >= .5 ? a.increasing : a.decreasing)
					}
				}
				return o.initialValue = o.value, o
			}

			function tJ(t, e) {
				return function(t, e) {
					if (t.mode !== l.percent) {
						let {
							mode: e,
							...i
						} = t;
						return i
					}
					return "x" in t ? {
						x: t.x / tn * e.width,
						y: t.y / tn * e.height
					} : {
						width: t.width / tn * e.width,
						height: t.height / tn * e.height
					}
				}(t, e)
			}

			function t0(t, e, i, s, n) {
				if (t.destroyed || !e || !e.enable || (e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0)) return;
				let r = (e.velocity ?? 0) * n.factor,
					l = e.min,
					c = e.max,
					h = e.decay ?? 1;
				if (e.time || (e.time = 0), (e.delayTime ?? 0) > 0 && e.time < (e.delayTime ?? 0) && (e.time += n.value), !((e.delayTime ?? 0) > 0) || !(e.time < (e.delayTime ?? 0))) {
					switch (e.status) {
						case a.increasing:
							e.value >= c ? (i ? e.status = a.decreasing : e.value -= c, e.loops || (e.loops = 0), e.loops++) : e.value += r;
							break;
						case a.decreasing:
							e.value <= l ? (i ? e.status = a.increasing : e.value += c, e.loops || (e.loops = 0), e.loops++) : e.value -= r
					}
					e.velocity && 1 !== h && (e.velocity *= h),
						function(t, e, i, s, n) {
							switch (e) {
								case o.max:
									i >= n && t.destroy();
									break;
								case o.min:
									i <= s && t.destroy()
							}
						}(t, s, e.value, l, c), t.destroyed || (e.value = tw(e.value, l, c))
				}
			}(L = h || (h = {})).darken = "darken", L.enlighten = "enlighten", (F = d || (d = {}))[F.r = 1] = "r", F[F.g = 2] = "g", F[F.b = 3] = "b", F[F.a = 4] = "a";
			let t1 = "random",
				t2 = new Map;

			function t5(t) {
				t2.set(t.key, t)
			}

			function t3(t, e, i = !0) {
				if (!t) return;
				let s = tr(t) ? {
					value: t
				} : t;
				if (tr(s.value)) return function t(e, i, s = !0) {
					if (!e) return;
					let n = tr(e) ? {
						value: e
					} : e;
					if (tr(n.value)) return n.value === t1 ? t7() : function(t) {
						for (let [, e] of t2)
							if (t.startsWith(e.stringPrefix)) return e.parseString(t);
						let e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, i, s, n) => e + e + i + i + s + s + (void 0 !== n ? n + n : "")),
							i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
						return i ? {
							a: void 0 !== i[d.a] ? parseInt(i[d.a], 16) / 255 : 1,
							b: parseInt(i[d.b], 16),
							g: parseInt(i[d.g], 16),
							r: parseInt(i[d.r], 16)
						} : void 0
					}(n.value);
					if (th(n.value)) return t({
						value: tq(n.value, i, s)
					});
					for (let [, t] of t2) {
						let e = t.handleColor(n);
						if (e) return e
					}
				}(s.value, e, i);
				if (th(s.value)) return t3({
					value: tq(s.value, e, i)
				});
				for (let [, t] of t2) {
					let e = t.handleRangeColor(s);
					if (e) return e
				}
			}

			function t6(t, e, i = !0) {
				let s = t3(t, e, i);
				return s ? t4(s) : void 0
			}

			function t4(t) {
				let e = t.r / 255,
					i = t.g / 255,
					s = t.b / 255,
					n = Math.max(e, i, s),
					a = Math.min(e, i, s),
					o = {
						h: 0,
						l: (n + a) * .5,
						s: 0
					};
				return n !== a && (o.s = o.l < .5 ? (n - a) / (n + a) : (n - a) / (2 - n - a), o.h = e === n ? (i - s) / (n - a) : o.h = i === n ? 2 + (s - e) / (n - a) : 4 + (e - i) / (n - a)), o.l *= 100, o.s *= 100, o.h *= 60, o.h < 0 && (o.h += 360), o.h >= 360 && (o.h -= 360), o
			}

			function t8(t) {
				let e = (t.h % 360 + 360) % 360,
					i = Math.max(0, Math.min(100, t.s)),
					s = Math.max(0, Math.min(100, t.l)),
					n = e / 360,
					a = i / 100,
					o = s / 100;
				if (0 === i) {
					let t = Math.round(255 * o);
					return {
						r: t,
						g: t,
						b: t
					}
				}
				let r = (t, e, i) => (i < 0 && i++, i > 1 && i--, 6 * i < 1) ? t + (e - t) * 6 * i : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (.6666666666666666 - i) * 6 : t,
					l = o < .5 ? o * (1 + a) : o + a - o * a,
					c = 2 * o - l;
				return {
					r: Math.round(Math.min(255, 255 * r(c, l, n + .3333333333333333))),
					g: Math.round(Math.min(255, 255 * r(c, l, n))),
					b: Math.round(Math.min(255, 255 * r(c, l, n - .3333333333333333)))
				}
			}

			function t7(t) {
				let e = t ?? 0;
				return {
					b: Math.floor(t_(tM(e, 256))),
					g: Math.floor(t_(tM(e, 256))),
					r: Math.floor(t_(tM(e, 256)))
				}
			}

			function t9(t, e) {
				return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`
			}

			function et(t, e) {
				return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`
			}

			function ee(t, e, i, s) {
				let n = t,
					a = e;
				return void 0 === n.r && (n = t8(t)), void 0 === a.r && (a = t8(e)), {
					b: tx(n.b, a.b, i, s),
					g: tx(n.g, a.g, i, s),
					r: tx(n.r, a.r, i, s)
				}
			}

			function ei(t, e, i) {
				if (i === t1) return t7();
				if ("mid" !== i) return i;
				{
					let i = t.getFillColor() ?? t.getStrokeColor(),
						s = e?.getFillColor() ?? e?.getStrokeColor();
					if (i && s && e) return ee(i, s, t.getRadius(), e.getRadius());
					{
						let t = i ?? s;
						if (t) return t8(t)
					}
				}
			}

			function es(t, e, i) {
				let s = tr(t) ? t : t.value;
				return s === t1 ? i ? t3({
					value: s
				}) : e ? t1 : "mid" : "mid" === s ? "mid" : t3({
					value: s
				})
			}

			function en(t) {
				return void 0 !== t ? {
					h: t.h.value,
					s: t.s.value,
					l: t.l.value
				} : void 0
			}

			function ea(t, e, i) {
				let s = {
					h: {
						enable: !1,
						value: t.h
					},
					s: {
						enable: !1,
						value: t.s
					},
					l: {
						enable: !1,
						value: t.l
					}
				};
				return e && (eo(s.h, e.h, i), eo(s.s, e.s, i), eo(s.l, e.l, i)), s
			}

			function eo(t, e, i) {
				t.enable = e.enable, t.enable ? (t.velocity = tk(e.speed) / tn * i, t.decay = 1 - tk(e.decay), t.status = a.increasing, t.loops = 0, t.maxLoops = tk(e.count), t.time = 0, t.delayTime = tk(e.delay) * ta, e.sync || (t.velocity *= tb(), t.value *= tb()), t.initialValue = t.value, t.offset = tM(e.offset)) : t.velocity = 0
			}

			function er(t, e, i, s) {
				if (!t || !t.enable || (t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0) || (t.time || (t.time = 0), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0) && (t.time += s.value), (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))) return;
				let n = t.offset ? t_(t.offset) : 0,
					o = (t.velocity ?? 0) * s.factor + 3.6 * n,
					r = t.decay ?? 1,
					l = tz(e),
					c = tC(e);
				i && t.status !== a.increasing ? (t.value -= o, t.value < 0 && (t.loops || (t.loops = 0), t.loops++, t.status = a.increasing)) : (t.value += o, t.value > l && (t.loops || (t.loops = 0), t.loops++, i ? t.status = a.decreasing : t.value -= l)), t.velocity && 1 !== r && (t.velocity *= r), t.value = tw(t.value, c, l)
			}

			function el(t, e) {
				if (!t) return;
				let {
					h: i,
					s,
					l: n
				} = t, a = {
					h: {
						min: 0,
						max: 360
					},
					s: {
						min: 0,
						max: 100
					},
					l: {
						min: 0,
						max: 100
					}
				};
				i && er(i, a.h, !1, e), s && er(s, a.s, !0, e), n && er(n, a.l, !0, e)
			}
			let ec = {
				a: 1,
				b: 0,
				c: 0,
				d: 1
			};

			function eh(t, e, i) {
				t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath()
			}

			function ed(t, e) {
				t.clearRect(0, 0, e.width, e.height)
			}

			function eu(t, e, i = !1) {
				if (!e || !t) return;
				let s = t.style;
				if (s)
					for (let t in e) {
						let n = e[t];
						n && s.setProperty(t, n, i ? "important" : "")
					}
			}
			class ep {
				constructor(t) {
					this.container = t, this._applyPostDrawUpdaters = t => {
						for (let e of this._postDrawUpdaters) e.afterDraw?.(t)
					}, this._applyPreDrawUpdaters = (t, e, i, s, n, a) => {
						for (let o of this._preDrawUpdaters) {
							if (o.getColorStyles) {
								let {
									fill: a,
									stroke: r
								} = o.getColorStyles(e, t, i, s);
								a && (n.fill = a), r && (n.stroke = r)
							}
							if (o.getTransformValues) {
								let t = o.getTransformValues(e);
								for (let e in t) ! function(t, e, i) {
									let s = e[i];
									void 0 !== s && (t[i] = (t[i] ?? 1) * s)
								}(a, t, e)
							}
							o.beforeDraw?.(e)
						}
					}, this._applyResizePlugins = () => {
						for (let t of this._resizePlugins) t.resize?.()
					}, this._getPluginParticleColors = t => {
						let e, i;
						for (let s of this._colorPlugins)
							if (!e && s.particleFillColor && (e = t6(s.particleFillColor(t))), !i && s.particleStrokeColor && (i = t6(s.particleStrokeColor(t))), e && i) break;
						return [e, i]
					}, this._initCover = async () => {
						let t = this.container.actualOptions.backgroundMask.cover,
							e = t.color;
						if (e) {
							let i = t3(e);
							if (i) {
								let e = {
									...i,
									a: t.opacity
								};
								this._coverColorStyle = t9(e, e.a)
							}
						} else await new Promise((e, i) => {
							if (!t.image) return;
							let s = document.createElement("img");
							s.addEventListener("load", () => {
								this._coverImage = {
									image: s,
									opacity: t.opacity
								}, e()
							}), s.addEventListener("error", t => {
								i(t.error)
							}), s.src = t.image
						})
					}, this._initStyle = () => {
						let t = this.element,
							e = this.container.actualOptions;
						if (t)
							for (let i in this._fullScreen ? (this._originalStyle = tV({}, t.style), this._setFullScreenStyle()) : this._resetOriginalStyle(), e.style) {
								if (!i || !e.style) continue;
								let s = e.style[i];
								s && t.style.setProperty(i, s, "important")
							}
					}, this._initTrail = async () => {
						let t = this.container.actualOptions.particles.move.trail,
							e = t.fill;
						if (!t.enable) return;
						let i = 1 / t.length;
						if (e.color) {
							let t = t3(e.color);
							if (!t) return;
							this._trailFill = {
								color: {
									...t
								},
								opacity: i
							}
						} else await new Promise((t, s) => {
							if (!e.image) return;
							let n = document.createElement("img");
							n.addEventListener("load", () => {
								this._trailFill = {
									image: n,
									opacity: i
								}, t()
							}), n.addEventListener("error", t => {
								s(t.error)
							}), n.src = e.image
						})
					}, this._paintBase = t => {
						this.draw(e => {
							var i;
							return i = this.size, void(e.fillStyle = t ?? "rgba(0,0,0,0)", e.fillRect(0, 0, i.width, i.height))
						})
					}, this._paintImage = (t, e) => {
						this.draw(i => {
							var s;
							return s = this.size, void(t && (i.globalAlpha = e, i.drawImage(t, 0, 0, s.width, s.height), i.globalAlpha = 1))
						})
					}, this._repairStyle = () => {
						let t = this.element;
						t && (this._safeMutationObserver(t => t.disconnect()), this._initStyle(), this.initBackground(), this._safeMutationObserver(e => {
							t && t instanceof Node && e.observe(t, {
								attributes: !0
							})
						}))
					}, this._resetOriginalStyle = () => {
						let t = this.element,
							e = this._originalStyle;
						t && e && eu(t, e)
					}, this._safeMutationObserver = t => {
						this._mutationObserver && t(this._mutationObserver)
					}, this._setFullScreenStyle = () => {
						let t = this.element;
						t && eu(t, {
							position: "fixed",
							zIndex: this.container.actualOptions.fullScreen.zIndex.toString(10),
							top: "0",
							left: "0",
							width: "100%",
							height: "100%"
						}, !0)
					}, this.size = {
						height: 0,
						width: 0
					}, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
				}
				get _fullScreen() {
					return this.container.actualOptions.fullScreen.enable
				}
				clear() {
					let t = this.container.actualOptions,
						e = t.particles.move.trail,
						i = this._trailFill;
					t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && i ? i.color ? this._paintBase(t9(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : t.clear && this.draw(t => {
						ed(t, this.size)
					})
				}
				destroy() {
					if (this.stop(), this._generated) {
						let t = this.element;
						t?.remove()
					} else this._resetOriginalStyle();
					this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
				}
				draw(t) {
					let e = this._context;
					if (e) return t(e)
				}
				drawAsync(t) {
					let e = this._context;
					if (e) return t(e)
				}
				drawParticle(t, e) {
					if (t.spawning || t.destroyed) return;
					let i = t.getRadius();
					if (i <= 0) return;
					let s = t.getFillColor(),
						n = t.getStrokeColor() ?? s,
						[a, o] = this._getPluginParticleColors(t);
					a || (a = s), o || (o = n), (a || o) && this.draw(s => {
						let n = this.container,
							r = n.actualOptions,
							l = t.options.zIndex,
							c = 1 - t.zIndexFactor,
							h = c ** l.opacityRate,
							d = t.bubble.opacity ?? t.opacity?.value ?? 1,
							u = t.strokeOpacity ?? d,
							p = d * h,
							f = {},
							v = {
								fill: a ? et(a, p) : void 0
							};
						v.stroke = o ? et(o, u * h) : v.fill, this._applyPreDrawUpdaters(s, t, i, p, v, f),
							function(t) {
								let {
									container: e,
									context: i,
									particle: s,
									delta: n,
									colorStyles: a,
									backgroundMask: o,
									composite: r,
									radius: l,
									opacity: c,
									shadow: h,
									transform: d
								} = t, u = s.getPosition(), p = s.rotation + (s.pathRotation ? s.velocity.angle : 0), f = {
									sin: Math.sin(p),
									cos: Math.cos(p)
								}, v = !!p, g = {
									a: f.cos * (d.a ?? ec.a),
									b: v ? f.sin * (d.b ?? 1) : d.b ?? ec.b,
									c: v ? -f.sin * (d.c ?? 1) : d.c ?? ec.c,
									d: f.cos * (d.d ?? ec.d)
								};
								i.setTransform(g.a, g.b, g.c, g.d, u.x, u.y), o && (i.globalCompositeOperation = r);
								let m = s.shadowColor;
								h.enable && m && (i.shadowBlur = h.blur, i.shadowColor = t9(m), i.shadowOffsetX = h.offset.x, i.shadowOffsetY = h.offset.y), a.fill && (i.fillStyle = a.fill);
								let y = s.strokeWidth ?? 0;
								i.lineWidth = y, a.stroke && (i.strokeStyle = a.stroke);
								let b = {
									container: e,
									context: i,
									particle: s,
									radius: l,
									opacity: c,
									delta: n,
									transformData: g,
									strokeWidth: y
								};
								(function(t) {
									let {
										container: e,
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										strokeWidth: r,
										transformData: l
									} = t;
									if (!s.shape) return;
									let c = e.shapeDrawers.get(s.shape);
									c && (i.beginPath(), c.draw({
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										pixelRatio: e.retina.pixelRatio,
										transformData: {
											...l
										}
									}), s.shapeClose && i.closePath(), r > 0 && i.stroke(), s.shapeFill && i.fill())
								})(b),
								function(t) {
									let {
										container: e,
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										transformData: r
									} = t;
									if (!s.shape) return;
									let l = e.shapeDrawers.get(s.shape);
									l?.afterDraw && l.afterDraw({
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										pixelRatio: e.retina.pixelRatio,
										transformData: {
											...r
										}
									})
								}(b),
								function(t) {
									let {
										container: e,
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										transformData: r
									} = t;
									if (!s.effect) return;
									let l = e.effectDrawers.get(s.effect);
									l && l.draw({
										context: i,
										particle: s,
										radius: n,
										opacity: a,
										delta: o,
										pixelRatio: e.retina.pixelRatio,
										transformData: {
											...r
										}
									})
								}(b), i.globalCompositeOperation = "source-over", i.resetTransform()
							}({
								container: n,
								context: s,
								particle: t,
								delta: e,
								colorStyles: v,
								backgroundMask: r.backgroundMask.enable,
								composite: r.backgroundMask.composite,
								radius: i * c ** l.sizeRate,
								opacity: p,
								shadow: t.options.shadow,
								transform: f
							}), this._applyPostDrawUpdaters(t)
					})
				}
				drawParticlePlugin(t, e, i) {
					this.draw(s => {
						t.drawParticle && t.drawParticle(s, e, i)
					})
				}
				drawPlugin(t, e) {
					this.draw(i => {
						t.draw && t.draw(i, e)
					})
				}
				async init() {
					this._safeMutationObserver(t => t.disconnect()), this._mutationObserver = function(t) {
						if (!tL() && "undefined" != typeof MutationObserver) return new MutationObserver(t)
					}(t => {
						for (let e of t) "attributes" === e.type && "style" === e.attributeName && this._repairStyle()
					}), this.resize(), this._initStyle(), await this._initCover();
					try {
						await this._initTrail()
					} catch (t) {
						tD.error(t)
					}
					this.initBackground(), this._safeMutationObserver(t => {
						this.element && this.element instanceof Node && t.observe(this.element, {
							attributes: !0
						})
					}), this.initUpdaters(), this.initPlugins(), this.paint()
				}
				initBackground() {
					let t = this.container.actualOptions.background,
						e = this.element;
					if (!e) return;
					let i = e.style;
					if (i) {
						if (t.color) {
							let e = t3(t.color);
							i.backgroundColor = e ? t9(e, t.opacity) : ""
						} else i.backgroundColor = "";
						i.backgroundImage = t.image || "", i.backgroundPosition = t.position || "", i.backgroundRepeat = t.repeat || "", i.backgroundSize = t.size || ""
					}
				}
				initPlugins() {
					for (let [, t] of(this._resizePlugins = [], this.container.plugins)) t.resize && this._resizePlugins.push(t), (t.particleFillColor ?? t.particleStrokeColor) && this._colorPlugins.push(t)
				}
				initUpdaters() {
					for (let t of (this._preDrawUpdaters = [], this._postDrawUpdaters = [], this.container.particles.updaters)) t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles ?? t.getTransformValues ?? t.beforeDraw) && this._preDrawUpdaters.push(t)
				}
				loadCanvas(t) {
					this._generated && this.element && this.element.remove(), this._generated = t.dataset && J in t.dataset ? "true" === t.dataset[J] : this._generated, this.element = t, this.element.ariaHidden = "true", this._originalStyle = tV({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this._context = this.element.getContext("2d"), this._safeMutationObserver(t => {
						this.element && this.element instanceof Node && t.observe(this.element, {
							attributes: !0
						})
					}), this.container.retina.init(), this.initBackground()
				}
				paint() {
					let t = this.container.actualOptions;
					this.draw(e => {
						t.backgroundMask.enable && t.backgroundMask.cover ? (ed(e, this.size), this._coverImage ? this._paintImage(this._coverImage.image, this._coverImage.opacity) : this._coverColorStyle ? this._paintBase(this._coverColorStyle) : this._paintBase()) : this._paintBase()
					})
				}
				resize() {
					if (!this.element) return !1;
					let t = this.container,
						e = t.retina.pixelRatio,
						i = t.canvas.size,
						s = {
							width: this.element.offsetWidth * e,
							height: this.element.offsetHeight * e
						};
					if (s.height === i.height && s.width === i.width && s.height === this.element.height && s.width === this.element.width) return !1;
					let n = {
						...i
					};
					return this.element.width = i.width = this.element.offsetWidth * e, this.element.height = i.height = this.element.offsetHeight * e, this.container.started && t.particles.setResizeFactor({
						width: i.width / n.width,
						height: i.height / n.height
					}), !0
				}
				stop() {
					this._safeMutationObserver(t => t.disconnect()), this._mutationObserver = void 0, this.draw(t => ed(t, this.size))
				}
				async windowResize() {
					if (!this.element || !this.resize()) return;
					let t = this.container,
						e = t.updateActualOptions();
					t.particles.setDensity(), this._applyResizePlugins(), e && await t.refresh()
				}
			}

			function ef(t, e, i, s, n) {
				if (s) {
					let s = {
						passive: !0
					};
					to(n) ? s.capture = n : void 0 !== n && (s = n), t.addEventListener(e, i, s)
				} else t.removeEventListener(e, i, n)
			}(A = u || (u = {})).canvas = "canvas", A.parent = "parent", A.window = "window";
			class ev {
				constructor(t) {
					this.container = t, this._doMouseTouchClick = t => {
						let e = this.container,
							i = e.actualOptions;
						if (this._canPush) {
							let t = e.interactivity.mouse,
								s = t.position;
							if (!s) return;
							t.clickPosition = {
								...s
							}, t.clickTime = new Date().getTime(), tZ(i.interactivity.events.onClick.mode, t => this.container.handleClickMode(t))
						}
						"touchend" === t.type && setTimeout(() => this._mouseTouchFinish(), 500)
					}, this._handleThemeChange = t => {
						let e = this.container,
							i = e.options,
							s = i.defaultThemes,
							n = t.matches ? s.dark : s.light,
							a = i.themes.find(t => t.name === n);
						a?.default.auto && e.loadTheme(n)
					}, this._handleVisibilityChange = () => {
						let t = this.container,
							e = t.actualOptions;
						this._mouseTouchFinish(), e.pauseOnBlur && (document?.hidden ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.animationStatus ? t.play(!0) : t.draw(!0)))
					}, this._handleWindowResize = () => {
						this._resizeTimeout && (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
						let t = async () => {
							let t = this.container.canvas;
							await t?.windowResize()
						};
						this._resizeTimeout = setTimeout(() => void t(), this.container.actualOptions.interactivity.events.resize.delay * ta)
					}, this._manageInteractivityListeners = (t, e) => {
						let i = this._handlers,
							s = this.container,
							n = s.actualOptions,
							a = s.interactivity.element;
						if (!a) return;
						let o = s.canvas.element;
						o && (o.style.pointerEvents = a === o ? "initial" : "none"), (n.interactivity.events.onHover.enable || n.interactivity.events.onClick.enable) && (ef(a, te, i.mouseMove, e), ef(a, "touchstart", i.touchStart, e), ef(a, "touchmove", i.touchMove, e), n.interactivity.events.onClick.enable ? (ef(a, ti, i.touchEndClick, e), ef(a, "pointerup", i.mouseUp, e), ef(a, "pointerdown", i.mouseDown, e)) : ef(a, ti, i.touchEnd, e), ef(a, t, i.mouseLeave, e), ef(a, "touchcancel", i.touchCancel, e))
					}, this._manageListeners = t => {
						let e = this._handlers,
							i = this.container,
							s = i.actualOptions.interactivity.detectsOn,
							n = i.canvas.element,
							a = tt;
						s === u.window ? (i.interactivity.element = window, a = "pointerout") : s === u.parent && n ? i.interactivity.element = n.parentElement ?? n.parentNode : i.interactivity.element = n, this._manageMediaMatch(t), this._manageResize(t), this._manageInteractivityListeners(a, t), document && ef(document, "visibilitychange", e.visibilityChange, t, !1)
					}, this._manageMediaMatch = t => {
						let e = this._handlers,
							i = tF("(prefers-color-scheme: dark)");
						if (i) {
							if (void 0 !== i.addEventListener) {
								ef(i, "change", e.themeChange, t);
								return
							}
							void 0 !== i.addListener && (t ? i.addListener(e.oldThemeChange) : i.removeListener(e.oldThemeChange))
						}
					}, this._manageResize = t => {
						let e = this._handlers,
							i = this.container;
						if (!i.actualOptions.interactivity.events.resize) return;
						if ("undefined" == typeof ResizeObserver) {
							ef(window, "resize", e.resize, t);
							return
						}
						let s = i.canvas.element;
						this._resizeObserver && !t ? (s && this._resizeObserver.unobserve(s), this._resizeObserver.disconnect(), delete this._resizeObserver) : !this._resizeObserver && t && s && (this._resizeObserver = new ResizeObserver(t => {
							t.find(t => t.target === s) && this._handleWindowResize()
						}), this._resizeObserver.observe(s))
					}, this._mouseDown = () => {
						let {
							interactivity: t
						} = this.container;
						if (!t) return;
						let {
							mouse: e
						} = t;
						e.clicking = !0, e.downPosition = e.position
					}, this._mouseTouchClick = t => {
						let e = this.container,
							i = e.actualOptions,
							{
								mouse: s
							} = e.interactivity;
						s.inside = !0;
						let n = !1,
							a = s.position;
						if (a && i.interactivity.events.onClick.enable) {
							for (let [, t] of e.plugins)
								if (t.clickPositionValid && (n = t.clickPositionValid(a))) break;
							n || this._doMouseTouchClick(t), s.clicking = !1
						}
					}, this._mouseTouchFinish = () => {
						let t = this.container.interactivity;
						if (!t) return;
						let e = t.mouse;
						delete e.position, delete e.clickPosition, delete e.downPosition, t.status = tt, e.inside = !1, e.clicking = !1
					}, this._mouseTouchMove = t => {
						let e;
						let i = this.container,
							s = i.actualOptions,
							n = i.interactivity,
							a = i.canvas.element;
						if (!n?.element) return;
						if (n.mouse.inside = !0, t.type.startsWith("pointer")) {
							if (this._canPush = !0, n.element === window) {
								if (a) {
									let i = a.getBoundingClientRect();
									e = {
										x: t.clientX - i.left,
										y: t.clientY - i.top
									}
								}
							} else if (s.interactivity.detectsOn === u.parent) {
								let i = t.target,
									s = t.currentTarget;
								if (i && s && a) {
									let n = i.getBoundingClientRect(),
										o = s.getBoundingClientRect(),
										r = a.getBoundingClientRect();
									e = {
										x: t.offsetX + 2 * n.left - (o.left + r.left),
										y: t.offsetY + 2 * n.top - (o.top + r.top)
									}
								} else e = {
									x: t.offsetX ?? t.clientX,
									y: t.offsetY ?? t.clientY
								}
							} else t.target === a && (e = {
								x: t.offsetX ?? t.clientX,
								y: t.offsetY ?? t.clientY
							})
						} else if (this._canPush = "touchmove" !== t.type, a) {
							let i = t.touches[t.touches.length - 1],
								s = a.getBoundingClientRect();
							e = {
								x: i.clientX - (s.left ?? 0),
								y: i.clientY - (s.top ?? 0)
							}
						}
						let o = i.retina.pixelRatio;
						e && (e.x *= o, e.y *= o), n.mouse.position = e, n.status = te
					}, this._touchEnd = t => {
						for (let e of Array.from(t.changedTouches)) this._touches.delete(e.identifier);
						this._mouseTouchFinish()
					}, this._touchEndClick = t => {
						for (let e of Array.from(t.changedTouches)) this._touches.delete(e.identifier);
						this._mouseTouchClick(t)
					}, this._touchStart = t => {
						for (let e of Array.from(t.changedTouches)) this._touches.set(e.identifier, performance.now());
						this._mouseTouchMove(t)
					}, this._canPush = !0, this._touches = new Map, this._handlers = {
						mouseDown: () => this._mouseDown(),
						mouseLeave: () => this._mouseTouchFinish(),
						mouseMove: t => this._mouseTouchMove(t),
						mouseUp: t => this._mouseTouchClick(t),
						touchStart: t => this._touchStart(t),
						touchMove: t => this._mouseTouchMove(t),
						touchEnd: t => this._touchEnd(t),
						touchCancel: t => this._touchEnd(t),
						touchEndClick: t => this._touchEndClick(t),
						visibilityChange: () => this._handleVisibilityChange(),
						themeChange: t => this._handleThemeChange(t),
						oldThemeChange: t => this._handleThemeChange(t),
						resize: () => {
							this._handleWindowResize()
						}
					}
				}
				addListeners() {
					this._manageListeners(!0)
				}
				removeListeners() {
					this._manageListeners(!1)
				}
			}(B = p || (p = {})).configAdded = "configAdded", B.containerInit = "containerInit", B.particlesSetup = "particlesSetup", B.containerStarted = "containerStarted", B.containerStopped = "containerStopped", B.containerDestroyed = "containerDestroyed", B.containerPaused = "containerPaused", B.containerPlay = "containerPlay", B.containerBuilt = "containerBuilt", B.particleAdded = "particleAdded", B.particleDestroyed = "particleDestroyed", B.particleRemoved = "particleRemoved";
			class eg {
				constructor() {
					this.value = ""
				}
				static create(t, e) {
					let i = new eg;
					return i.load(t), void 0 !== e && (tr(e) || th(e) ? i.load({
						value: e
					}) : i.load(e)), i
				}
				load(t) {
					t?.value !== void 0 && (this.value = t.value)
				}
			}
			class em {
				constructor() {
					this.color = new eg, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
				}
				load(t) {
					t && (void 0 !== t.color && (this.color = eg.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
				}
			}
			class ey {
				constructor() {
					this.opacity = 1
				}
				load(t) {
					t && (void 0 !== t.color && (this.color = eg.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.opacity && (this.opacity = t.opacity))
				}
			}
			class eb {
				constructor() {
					this.composite = "destination-out", this.cover = new ey, this.enable = !1
				}
				load(t) {
					if (t) {
						if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
							let e = t.cover,
								i = tr(t.cover) ? {
									color: t.cover
								} : t.cover;
							this.cover.load(void 0 !== e.color || void 0 !== e.image ? e : {
								color: i
							})
						}
						void 0 !== t.enable && (this.enable = t.enable)
					}
				}
			}
			class ew {
				constructor() {
					this.enable = !0, this.zIndex = 0
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
				}
			}
			class ex {
				constructor() {
					this.enable = !1, this.mode = []
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
				}
			}(q = f || (f = {})).circle = "circle", q.rectangle = "rectangle";
			class e_ {
				constructor() {
					this.selectors = [], this.enable = !1, this.mode = [], this.type = f.circle
				}
				load(t) {
					t && (void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type))
				}
			}
			class ek {
				constructor() {
					this.enable = !1, this.force = 2, this.smooth = 10
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
				}
			}
			class eC {
				constructor() {
					this.enable = !1, this.mode = [], this.parallax = new ek
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
				}
			}
			class ez {
				constructor() {
					this.delay = .5, this.enable = !0
				}
				load(t) {
					void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable))
				}
			}
			class eM {
				constructor() {
					this.onClick = new ex, this.onDiv = new e_, this.onHover = new eC, this.resize = new ez
				}
				load(t) {
					if (!t) return;
					this.onClick.load(t.onClick);
					let e = t.onDiv;
					void 0 !== e && (this.onDiv = tZ(e, t => {
						let e = new e_;
						return e.load(t), e
					})), this.onHover.load(t.onHover), this.resize.load(t.resize)
				}
			}
			class eO {
				constructor(t, e) {
					this._engine = t, this._container = e
				}
				load(t) {
					if (!t || !this._container) return;
					let e = this._engine.interactors.get(this._container);
					if (e)
						for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t)
				}
			}
			class eS {
				constructor(t, e) {
					this.detectsOn = u.window, this.events = new eM, this.modes = new eO(t, e)
				}
				load(t) {
					if (!t) return;
					let e = t.detectsOn;
					void 0 !== e && (this.detectsOn = e), this.events.load(t.events), this.modes.load(t.modes)
				}
			}
			class eP {
				load(t) {
					t && (t.position && (this.position = {
						x: t.position.x ?? 50,
						y: t.position.y ?? 50,
						mode: t.position.mode ?? l.percent
					}), t.options && (this.options = tV({}, t.options)))
				}
			}(W = v || (v = {})).screen = "screen", W.canvas = "canvas";
			class eT {
				constructor() {
					this.maxWidth = 1 / 0, this.options = {}, this.mode = v.canvas
				}
				load(t) {
					t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && (t.mode === v.screen ? this.mode = v.screen : this.mode = v.canvas), void 0 !== t.options && (this.options = tV({}, t.options)))
				}
			}(H = g || (g = {})).any = "any", H.dark = "dark", H.light = "light";
			class eR {
				constructor() {
					this.auto = !1, this.mode = g.any, this.value = !1
				}
				load(t) {
					t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
				}
			}
			class eD {
				constructor() {
					this.name = "", this.default = new eR
				}
				load(t) {
					t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = tV({}, t.options)))
				}
			}
			class eE {
				constructor() {
					this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.delay = 0, this.sync = !1
				}
				load(t) {
					t && (void 0 !== t.count && (this.count = tM(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = tM(t.speed)), void 0 !== t.decay && (this.decay = tM(t.decay)), void 0 !== t.delay && (this.delay = tM(t.delay)), void 0 !== t.sync && (this.sync = t.sync))
				}
			}
			class eI extends eE {
				constructor() {
					super(), this.mode = n.auto, this.startValue = c.random
				}
				load(t) {
					super.load(t), t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.startValue && (this.startValue = t.startValue))
				}
			}
			class eL extends eE {
				constructor() {
					super(), this.offset = 0, this.sync = !0
				}
				load(t) {
					super.load(t), t && void 0 !== t.offset && (this.offset = tM(t.offset))
				}
			}
			class eF {
				constructor() {
					this.h = new eL, this.s = new eL, this.l = new eL
				}
				load(t) {
					t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
				}
			}
			class eA extends eg {
				constructor() {
					super(), this.animation = new eF
				}
				static create(t, e) {
					let i = new eA;
					return i.load(t), void 0 !== e && (tr(e) || th(e) ? i.load({
						value: e
					}) : i.load(e)), i
				}
				load(t) {
					if (super.load(t), !t) return;
					let e = t.animation;
					void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation))
				}
			}(V = m || (m = {})).absorb = "absorb", V.bounce = "bounce", V.destroy = "destroy";
			class eB {
				constructor() {
					this.speed = 2
				}
				load(t) {
					t && void 0 !== t.speed && (this.speed = t.speed)
				}
			}
			class eq {
				constructor() {
					this.enable = !0, this.retries = 0
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
				}
			}
			class eW {
				constructor() {
					this.value = 0
				}
				load(t) {
					t && void 0 !== t.value && (this.value = tM(t.value))
				}
			}
			class eH extends eW {
				constructor() {
					super(), this.animation = new eE
				}
				load(t) {
					if (super.load(t), !t) return;
					let e = t.animation;
					void 0 !== e && this.animation.load(e)
				}
			}
			class eV extends eH {
				constructor() {
					super(), this.animation = new eI
				}
				load(t) {
					super.load(t)
				}
			}
			class eU extends eW {
				constructor() {
					super(), this.value = 1
				}
			}
			class ej {
				constructor() {
					this.horizontal = new eU, this.vertical = new eU
				}
				load(t) {
					t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
				}
			}
			class eG {
				constructor() {
					this.absorb = new eB, this.bounce = new ej, this.enable = !1, this.maxSpeed = 50, this.mode = m.bounce, this.overlap = new eq
				}
				load(t) {
					t && (this.absorb.load(t.absorb), this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.maxSpeed && (this.maxSpeed = tM(t.maxSpeed)), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
				}
			}
			class e$ {
				constructor() {
					this.close = !0, this.fill = !0, this.options = {}, this.type = []
				}
				load(t) {
					if (!t) return;
					let e = t.options;
					if (void 0 !== e)
						for (let t in e) {
							let i = e[t];
							i && (this.options[t] = tV(this.options[t] ?? {}, i))
						}
					void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type)
				}
			}
			class eN {
				constructor() {
					this.offset = 0, this.value = 90
				}
				load(t) {
					t && (void 0 !== t.offset && (this.offset = tM(t.offset)), void 0 !== t.value && (this.value = tM(t.value)))
				}
			}
			class eY {
				constructor() {
					this.distance = 200, this.enable = !1, this.rotate = {
						x: 3e3,
						y: 3e3
					}
				}
				load(t) {
					if (t && (void 0 !== t.distance && (this.distance = tM(t.distance)), void 0 !== t.enable && (this.enable = t.enable), t.rotate)) {
						let e = t.rotate.x;
						void 0 !== e && (this.rotate.x = e);
						let i = t.rotate.y;
						void 0 !== i && (this.rotate.y = i)
					}
				}
			}
			class eZ {
				constructor() {
					this.x = 50, this.y = 50, this.mode = l.percent, this.radius = 0
				}
				load(t) {
					t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius))
				}
			}
			class eX {
				constructor() {
					this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
				}
				load(t) {
					t && (void 0 !== t.acceleration && (this.acceleration = tM(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = tM(t.maxSpeed)))
				}
			}
			class eK {
				constructor() {
					this.clamp = !0, this.delay = new eW, this.enable = !1, this.options = {}
				}
				load(t) {
					t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = tV(this.options, t.options)))
				}
			}
			class eQ {
				load(t) {
					t && (void 0 !== t.color && (this.color = eg.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image))
				}
			}
			class eJ {
				constructor() {
					this.enable = !1, this.length = 10, this.fill = new eQ
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.fill && this.fill.load(t.fill), void 0 !== t.length && (this.length = t.length))
				}
			}(U = y || (y = {})).bounce = "bounce", U.none = "none", U.out = "out", U.destroy = "destroy", U.split = "split";
			class e0 {
				constructor() {
					this.default = y.out
				}
				load(t) {
					t && (void 0 !== t.default && (this.default = t.default), this.bottom = t.bottom ?? t.default, this.left = t.left ?? t.default, this.right = t.right ?? t.default, this.top = t.top ?? t.default)
				}
			}
			class e1 {
				constructor() {
					this.acceleration = 0, this.enable = !1
				}
				load(t) {
					t && (void 0 !== t.acceleration && (this.acceleration = tM(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), t.position && (this.position = tV({}, t.position)))
				}
			}
			class e2 {
				constructor() {
					this.angle = new eN, this.attract = new eY, this.center = new eZ, this.decay = 0, this.distance = {}, this.direction = s.none, this.drift = 0, this.enable = !1, this.gravity = new eX, this.path = new eK, this.outModes = new e0, this.random = !1, this.size = !1, this.speed = 2, this.spin = new e1, this.straight = !1, this.trail = new eJ, this.vibrate = !1, this.warp = !1
				}
				load(t) {
					if (!t) return;
					this.angle.load(tl(t.angle) ? {
						value: t.angle
					} : t.angle), this.attract.load(t.attract), this.center.load(t.center), void 0 !== t.decay && (this.decay = tM(t.decay)), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = tl(t.distance) ? {
						horizontal: t.distance,
						vertical: t.distance
					} : {
						...t.distance
					}), void 0 !== t.drift && (this.drift = tM(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
					let e = t.outModes;
					void 0 !== e && (tc(e) ? this.outModes.load(e) : this.outModes.load({
						default: e
					})), this.path.load(t.path), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = tM(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
				}
			}
			class e5 extends eI {
				constructor() {
					super(), this.destroy = o.none, this.speed = 2
				}
				load(t) {
					super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy)
				}
			}
			class e3 extends eV {
				constructor() {
					super(), this.animation = new e5, this.value = 1
				}
				load(t) {
					if (!t) return;
					super.load(t);
					let e = t.animation;
					void 0 !== e && this.animation.load(e)
				}
			}
			class e6 {
				constructor() {
					this.enable = !1, this.width = 1920, this.height = 1080
				}
				load(t) {
					if (!t) return;
					void 0 !== t.enable && (this.enable = t.enable);
					let e = t.width;
					void 0 !== e && (this.width = e);
					let i = t.height;
					void 0 !== i && (this.height = i)
				}
			}(j = b || (b = {})).delete = "delete", j.wait = "wait";
			class e4 {
				constructor() {
					this.mode = b.delete, this.value = 0
				}
				load(t) {
					t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
				}
			}
			class e8 {
				constructor() {
					this.density = new e6, this.limit = new e4, this.value = 0
				}
				load(t) {
					t && (this.density.load(t.density), this.limit.load(t.limit), void 0 !== t.value && (this.value = t.value))
				}
			}
			class e7 {
				constructor() {
					this.blur = 0, this.color = new eg, this.enable = !1, this.offset = {
						x: 0,
						y: 0
					}, this.color.value = "#000"
				}
				load(t) {
					t && (void 0 !== t.blur && (this.blur = t.blur), this.color = eg.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
				}
			}
			class e9 {
				constructor() {
					this.close = !0, this.fill = !0, this.options = {}, this.type = "circle"
				}
				load(t) {
					if (!t) return;
					let e = t.options;
					if (void 0 !== e)
						for (let t in e) {
							let i = e[t];
							i && (this.options[t] = tV(this.options[t] ?? {}, i))
						}
					void 0 !== t.close && (this.close = t.close), void 0 !== t.fill && (this.fill = t.fill), void 0 !== t.type && (this.type = t.type)
				}
			}
			class it extends eI {
				constructor() {
					super(), this.destroy = o.none, this.speed = 5
				}
				load(t) {
					super.load(t), t && void 0 !== t.destroy && (this.destroy = t.destroy)
				}
			}
			class ie extends eV {
				constructor() {
					super(), this.animation = new it, this.value = 3
				}
				load(t) {
					if (super.load(t), !t) return;
					let e = t.animation;
					void 0 !== e && this.animation.load(e)
				}
			}
			class ii {
				constructor() {
					this.width = 0
				}
				load(t) {
					t && (void 0 !== t.color && (this.color = eA.create(this.color, t.color)), void 0 !== t.width && (this.width = tM(t.width)), void 0 !== t.opacity && (this.opacity = tM(t.opacity)))
				}
			}
			class is extends eW {
				constructor() {
					super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
				}
				load(t) {
					super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
				}
			}
			class ia {
				constructor(t, e) {
					this._engine = t, this._container = e, this.bounce = new ej, this.collisions = new eG, this.color = new eA, this.color.value = "#fff", this.effect = new e$, this.groups = {}, this.move = new e2, this.number = new e8, this.opacity = new e3, this.reduceDuplicates = !1, this.shadow = new e7, this.shape = new e9, this.size = new ie, this.stroke = new ii, this.zIndex = new is
				}
				load(t) {
					if (!t) return;
					if (void 0 !== t.groups)
						for (let e of Object.keys(t.groups)) {
							if (!Object.hasOwn(t.groups, e)) continue;
							let i = t.groups[e];
							void 0 !== i && (this.groups[e] = tV(this.groups[e] ?? {}, i))
						}
					void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.bounce.load(t.bounce), this.color.load(eA.create(this.color, t.color)), this.effect.load(t.effect), this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = tV({}, t.interactivity));
					let e = t.stroke;
					if (e && (this.stroke = tZ(e, t => {
							let e = new ii;
							return e.load(t), e
						})), this._container) {
						let e = this._engine.updaters.get(this._container);
						if (e)
							for (let i of e) i.loadOptions && i.loadOptions(this, t);
						let i = this._engine.interactors.get(this._container);
						if (i)
							for (let e of i) e.loadParticlesOptions && e.loadParticlesOptions(this, t)
					}
				}
			}

			function io(t, ...e) {
				for (let i of e) t.load(i)
			}

			function ir(t, e, ...i) {
				let s = new ia(t, e);
				return io(s, ...i), s
			}
			class il {
				constructor(t, e) {
					this._findDefaultTheme = t => this.themes.find(e => e.default.value && e.default.mode === t) ?? this.themes.find(t => t.default.value && t.default.mode === g.any), this._importPreset = t => {
						this.load(this._engine.getPreset(t))
					}, this._engine = t, this._container = e, this.autoPlay = !0, this.background = new em, this.backgroundMask = new eb, this.clear = !0, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new ew, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new eS(t, e), this.manualParticles = [], this.particles = ir(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
				}
				load(t) {
					if (!t) return;
					void 0 !== t.preset && tZ(t.preset, t => this._importPreset(t)), void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.clear && (this.clear = t.clear), void 0 !== t.key && (this.key = t.key), void 0 !== t.name && (this.name = t.name), void 0 !== t.delay && (this.delay = tM(t.delay));
					let e = t.detectRetina;
					void 0 !== e && (this.detectRetina = e), void 0 !== t.duration && (this.duration = tM(t.duration));
					let i = t.fpsLimit;
					void 0 !== i && (this.fpsLimit = i), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
					let s = t.fullScreen;
					to(s) ? this.fullScreen.enable = s : this.fullScreen.load(s), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), t.manualParticles && (this.manualParticles = t.manualParticles.map(t => {
						let e = new eP;
						return e.load(t), e
					})), this.particles.load(t.particles), this.style = tV(this.style, t.style), this._engine.loadOptions(this, t), void 0 !== t.smooth && (this.smooth = t.smooth);
					let n = this._engine.interactors.get(this._container);
					if (n)
						for (let e of n) e.loadOptions && e.loadOptions(this, t);
					if (void 0 !== t.responsive)
						for (let e of t.responsive) {
							let t = new eT;
							t.load(e), this.responsive.push(t)
						}
					if (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes)
						for (let e of t.themes) {
							let t = this.themes.find(t => t.name === e.name);
							if (t) t.load(e);
							else {
								let t = new eD;
								t.load(e), this.themes.push(t)
							}
						}
					this.defaultThemes.dark = this._findDefaultTheme(g.dark)?.name, this.defaultThemes.light = this._findDefaultTheme(g.light)?.name
				}
				setResponsive(t, e, i) {
					this.load(i);
					let s = this.responsive.find(i => i.mode === v.screen && screen ? i.maxWidth > screen.availWidth : i.maxWidth * e > t);
					return this.load(s?.options), s?.maxWidth
				}
				setTheme(t) {
					if (t) {
						let e = this.themes.find(e => e.name === t);
						e && this.load(e.options)
					} else {
						let t = tF("(prefers-color-scheme: dark)"),
							e = t?.matches,
							i = this._findDefaultTheme(e ? g.dark : g.light);
						i && this.load(i.options)
					}
				}
			}(G = w || (w = {})).external = "external", G.particles = "particles";
			class ic {
				constructor(t, e) {
					this.container = e, this._engine = t, this._interactors = [], this._externalInteractors = [], this._particleInteractors = []
				}
				externalInteract(t) {
					for (let e of this._externalInteractors) e.isEnabled() && e.interact(t)
				}
				handleClickMode(t) {
					for (let e of this._externalInteractors) e.handleClickMode?.(t)
				}
				async init() {
					for (let t of (this._interactors = await this._engine.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = [], this._interactors)) {
						switch (t.type) {
							case w.external:
								this._externalInteractors.push(t);
								break;
							case w.particles:
								this._particleInteractors.push(t)
						}
						t.init()
					}
				}
				particlesInteract(t, e) {
					for (let i of this._externalInteractors) i.clear(t, e);
					for (let i of this._particleInteractors) i.isEnabled(t) && i.interact(t, e)
				}
				reset(t) {
					for (let e of this._externalInteractors) e.isEnabled() && e.reset(t);
					for (let e of this._particleInteractors) e.isEnabled(t) && e.reset(t)
				}
			}($ = x || (x = {})).normal = "normal", $.inside = "inside", $.outside = "outside";
			let ih = 0,
				id = "random";

			function iu(t) {
				if (!tA(t.outMode, t.checkModes)) return;
				let e = 2 * t.radius;
				t.coord > t.maxCoord - e ? t.setCb(-t.radius) : t.coord < e && t.setCb(t.radius)
			}
			class ip {
				constructor(t, e) {
					this.container = e, this._calcPosition = (t, e, i, s = ih) => {
						var n;
						for (let [, s] of t.plugins) {
							let t = void 0 !== s.particlePosition ? s.particlePosition(e, this) : void 0;
							if (t) return tu.create(t.x, t.y, i)
						}
						let a = (n = {
								size: t.canvas.size,
								position: e
							}, {
								x: n.position?.x ?? tb() * n.size.width,
								y: n.position?.y ?? tb() * n.size.height
							}),
							o = tu.create(a.x, a.y, i),
							r = this.getRadius(),
							l = this.options.move.outModes,
							c = e => {
								iu({
									outMode: e,
									checkModes: [y.bounce],
									coord: o.x,
									maxCoord: t.canvas.size.width,
									setCb: t => o.x += t,
									radius: r
								})
							},
							h = e => {
								iu({
									outMode: e,
									checkModes: [y.bounce],
									coord: o.y,
									maxCoord: t.canvas.size.height,
									setCb: t => o.y += t,
									radius: r
								})
							};
						return (c(l.left ?? l.default), c(l.right ?? l.default), h(l.top ?? l.default), h(l.bottom ?? l.default), this._checkOverlap(o, s)) ? this._calcPosition(t, void 0, i, s + 1) : o
					}, this._calculateVelocity = () => {
						let t = (function(t) {
								let e = tp.origin;
								return e.length = 1, e.angle = t, e
							})(this.direction).copy(),
							e = this.options.move;
						if (e.direction === s.inside || e.direction === s.outside) return t;
						let i = tP(tk(e.angle.value)),
							n = tP(tk(e.angle.offset)),
							a = {
								left: n - .5 * i,
								right: n + .5 * i
							};
						return e.straight || (t.angle += t_(tM(a.left, a.right))), e.random && "number" == typeof e.speed && (t.length *= tb()), t
					}, this._checkOverlap = (t, e = ih) => {
						let i = this.options.collisions,
							s = this.getRadius();
						if (!i.enable) return !1;
						let n = i.overlap;
						if (n.enable) return !1;
						let a = n.retries;
						if (a >= 0 && e > a) throw Error(`${ts} particle is overlapping and can't be placed`);
						return !!this.container.particles.find(e => tS(t, e.position) < s + e.getRadius())
					}, this._getRollColor = t => {
						if (!t || !this.roll || !this.backColor && !this.roll.alter) return t;
						let e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
							i = this.roll.horizontal ? .5 * Math.PI : 0;
						if (!(Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % 2)) return t;
						if (this.backColor) return this.backColor;
						if (this.roll.alter) {
							var s, n;
							return s = this.roll.alter.type, n = this.roll.alter.value, {
								h: t.h,
								s: t.s,
								l: t.l + (s === h.darken ? -1 : 1) * n
							}
						}
						return t
					}, this._initPosition = t => {
						let e = this.container,
							i = tk(this.options.zIndex.value);
						this.position = this._calcPosition(e, t, tw(i, 0, e.zLayers)), this.initialPosition = this.position.copy();
						let n = e.canvas.size;
						switch (this.moveCenter = {
								...tJ(this.options.move.center, n),
								radius: this.options.move.center.radius ?? 0,
								mode: this.options.move.center.mode ?? l.percent
							}, this.direction = function(t, e, i) {
								if (tl(t)) return tP(t);
								switch (t) {
									case s.top:
										return -(.5 * Math.PI);
									case s.topRight:
										return -(.25 * Math.PI);
									case s.right:
										return 0;
									case s.bottomRight:
										return .25 * Math.PI;
									case s.bottom:
										return .5 * Math.PI;
									case s.bottomLeft:
										return .75 * Math.PI;
									case s.left:
										return Math.PI;
									case s.topLeft:
										return -(.75 * Math.PI);
									case s.inside:
										return Math.atan2(i.y - e.y, i.x - e.x);
									case s.outside:
										return Math.atan2(e.y - i.y, e.x - i.x);
									default:
										return tb() * tg
								}
							}(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
							case s.inside:
								this.outType = x.inside;
								break;
							case s.outside:
								this.outType = x.outside
						}
						this.offset = tp.origin
					}, this._engine = t
				}
				destroy(t) {
					if (this.unbreakable || this.destroyed) return;
					this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1;
					let e = this.container,
						i = this.pathGenerator,
						s = e.shapeDrawers.get(this.shape);
					for (let [, i] of(s?.particleDestroy?.(this), e.plugins)) i.particleDestroyed?.(this, t);
					for (let i of e.particles.updaters) i.particleDestroyed?.(this, t);
					i?.reset(this), this._engine.dispatchEvent(p.particleDestroyed, {
						container: this.container,
						data: {
							particle: this
						}
					})
				}
				draw(t) {
					let e = this.container,
						i = e.canvas;
					for (let [, s] of e.plugins) i.drawParticlePlugin(s, this, t);
					i.drawParticle(this, t)
				}
				getFillColor() {
					return this._getRollColor(this.bubble.color ?? en(this.color))
				}
				getMass() {
					return this.getRadius() ** 2 * Math.PI * .5
				}
				getPosition() {
					return {
						x: this.position.x + this.offset.x,
						y: this.position.y + this.offset.y,
						z: this.position.z
					}
				}
				getRadius() {
					return this.bubble.radius ?? this.size.value
				}
				getStrokeColor() {
					return this._getRollColor(this.bubble.color ?? en(this.strokeColor))
				}
				init(t, e, i, s) {
					let n = this.container,
						a = this._engine;
					this.id = t, this.group = s, this.effectClose = !0, this.effectFill = !0, this.shapeClose = !0, this.shapeFill = !0, this.pathRotation = !1, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.isRotating = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
						maxDistance: {}
					}, this.outType = x.normal, this.ignoresResizeRatio = !0;
					let o = n.retina.pixelRatio,
						r = n.actualOptions,
						l = ir(this._engine, n, r.particles),
						{
							reduceDuplicates: c
						} = l,
						h = l.effect.type,
						d = l.shape.type;
					this.effect = tX(h, this.id, c), this.shape = tX(d, this.id, c);
					let u = l.effect,
						p = l.shape;
					if (i) {
						if (i.effect?.type) {
							let t = tX(i.effect.type, this.id, c);
							t && (this.effect = t, u.load(i.effect))
						}
						if (i.shape?.type) {
							let t = tX(i.shape.type, this.id, c);
							t && (this.shape = t, p.load(i.shape))
						}
					}
					if (this.effect === id) {
						let t = [...this.container.effectDrawers.keys()];
						this.effect = t[Math.floor(Math.random() * t.length)]
					}
					if (this.shape === id) {
						let t = [...this.container.shapeDrawers.keys()];
						this.shape = t[Math.floor(Math.random() * t.length)]
					}
					this.effectData = function(t, e, i, s) {
						let n = e.options[t];
						if (n) return tV({
							close: e.close,
							fill: e.fill
						}, tX(n, i, s))
					}(this.effect, u, this.id, c), this.shapeData = function(t, e, i, s) {
						let n = e.options[t];
						if (n) return tV({
							close: e.close,
							fill: e.fill
						}, tX(n, i, s))
					}(this.shape, p, this.id, c), l.load(i);
					let f = this.effectData;
					f && l.load(f.particles);
					let v = this.shapeData;
					v && l.load(v.particles);
					let g = new eS(a, n);
					g.load(n.actualOptions.interactivity), g.load(l.interactivity), this.interactivity = g, this.effectFill = f?.fill ?? l.effect.fill, this.effectClose = f?.close ?? l.effect.close, this.shapeFill = v?.fill ?? l.shape.fill, this.shapeClose = v?.close ?? l.shape.close, this.options = l;
					let m = this.options.move.path;
					this.pathDelay = tk(m.delay.value) * ta, m.generator && (this.pathGenerator = this._engine.getPathGenerator(m.generator), this.pathGenerator && n.addPath(m.generator, this.pathGenerator) && this.pathGenerator.init(n)), n.retina.initParticle(this), this.size = tQ(this.options.size, o), this.bubble = {
						inRange: !1
					}, this.slow = {
						inRange: !1,
						factor: 1
					}, this._initPosition(e), this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - tk(this.options.move.decay);
					let y = n.particles;
					y.setLastZIndex(this.position.z), this.zIndexFactor = this.position.z / n.zLayers, this.sides = 24;
					let b = n.effectDrawers.get(this.effect);
					!b && (b = this._engine.getEffectDrawer(this.effect)) && n.effectDrawers.set(this.effect, b), b?.loadEffect && b.loadEffect(this);
					let w = n.shapeDrawers.get(this.shape);
					!w && (w = this._engine.getShapeDrawer(this.shape)) && n.shapeDrawers.set(this.shape, w), w?.loadShape && w.loadShape(this);
					let _ = w?.getSidesCount;
					for (let t of (_ && (this.sides = _(this)), this.spawning = !1, this.shadowColor = t3(this.options.shadow.color), y.updaters)) t.init(this);
					for (let t of y.movers) t.init?.(this);
					for (let [, t] of(b?.particleInit?.(n, this), w?.particleInit?.(n, this), n.plugins)) t.particleCreated?.(this)
				}
				isInsideCanvas() {
					let t = this.getRadius(),
						e = this.container.canvas.size,
						i = this.position;
					return i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
				}
				isVisible() {
					return !this.destroyed && !this.spawning && this.isInsideCanvas()
				}
				reset() {
					for (let t of this.container.particles.updaters) t.reset?.(this)
				}
			}
			class iv {
				constructor(t, e) {
					this.position = t, this.particle = e
				}
			}(N = _ || (_ = {})).circle = "circle", N.rectangle = "rectangle";
			class ig {
				constructor(t, e, i) {
					this.position = {
						x: t,
						y: e
					}, this.type = i
				}
			}
			class im extends ig {
				constructor(t, e, i) {
					super(t, e, _.circle), this.radius = i
				}
				contains(t) {
					return tS(t, this.position) <= this.radius
				}
				intersects(t) {
					let e = this.position,
						i = t.position,
						s = {
							x: Math.abs(i.x - e.x),
							y: Math.abs(i.y - e.y)
						},
						n = this.radius;
					if (t instanceof im || t.type === _.circle) return n + t.radius > Math.sqrt(s.x ** 2 + s.y ** 2);
					if (t instanceof iy || t.type === _.rectangle) {
						let {
							width: e,
							height: i
						} = t.size;
						return Math.pow(s.x - e, 2) + Math.pow(s.y - i, 2) <= n ** 2 || s.x <= n + e && s.y <= n + i || s.x <= e || s.y <= i
					}
					return !1
				}
			}
			class iy extends ig {
				constructor(t, e, i, s) {
					super(t, e, _.rectangle), this.size = {
						height: s,
						width: i
					}
				}
				contains(t) {
					let e = this.size.width,
						i = this.size.height,
						s = this.position;
					return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i
				}
				intersects(t) {
					if (t instanceof im) return t.intersects(this);
					let e = this.size.width,
						i = this.size.height,
						s = this.position,
						n = t.position,
						a = t instanceof iy ? t.size : {
							width: 0,
							height: 0
						},
						o = a.width,
						r = a.height;
					return n.x < s.x + e && n.x + o > s.x && n.y < s.y + i && n.y + r > s.y
				}
			}
			class ib {
				constructor(t, e) {
					this.rectangle = t, this.capacity = e, this._subdivide = () => {
						let {
							x: t,
							y: e
						} = this.rectangle.position, {
							width: i,
							height: s
						} = this.rectangle.size, {
							capacity: n
						} = this;
						for (let a = 0; a < 4; a++) {
							let o = a % 2;
							this._subs.push(new ib(new iy(t + .5 * i * o, e + .5 * s * (Math.round(.5 * a) - o), .5 * i, .5 * s), n))
						}
						this._divided = !0
					}, this._points = [], this._divided = !1, this._subs = []
				}
				insert(t) {
					return !!this.rectangle.contains(t.position) && (this._points.length < this.capacity ? (this._points.push(t), !0) : (this._divided || this._subdivide(), this._subs.some(e => e.insert(t))))
				}
				query(t, e) {
					let i = [];
					if (!t.intersects(this.rectangle)) return [];
					for (let s of this._points) !t.contains(s.position) && tS(t.position, s.position) > s.particle.getRadius() && (!e || e(s.particle)) || i.push(s.particle);
					if (this._divided)
						for (let s of this._subs) i.push(...s.query(t, e));
					return i
				}
				queryCircle(t, e, i) {
					return this.query(new im(t.x, t.y, e), i)
				}
				queryRectangle(t, e, i) {
					return this.query(new iy(t.x, t.y, e.width, e.height), i)
				}
			}
			let iw = t => {
				let {
					height: e,
					width: i
				} = t;
				return new iy(-.25 * i, -.25 * e, 1.5 * i, 1.5 * e)
			};
			class ix {
				constructor(t, e) {
					this._addToPool = (...t) => {
						this._pool.push(...t)
					}, this._applyDensity = (t, e, i) => {
						let s = t.number;
						if (!t.number.density?.enable) {
							void 0 === i ? this._limit = s.limit.value : s.limit && this._groupLimits.set(i, s.limit.value);
							return
						}
						let n = this._initDensityFactor(s.density),
							a = s.value,
							o = s.limit.value > 0 ? s.limit.value : a,
							r = Math.min(a, o) * n + e,
							l = Math.min(this.count, this.filter(t => t.group === i).length);
						void 0 === i ? this._limit = s.limit.value * n : this._groupLimits.set(i, s.limit.value * n), l < r ? this.push(Math.abs(r - l), void 0, t, i) : l > r && this.removeQuantity(l - r, i)
					}, this._initDensityFactor = t => {
						let e = this._container;
						if (!e.canvas.element || !t.enable) return 1;
						let i = e.canvas.element,
							s = e.retina.pixelRatio;
						return i.width * i.height / (t.height * t.width * s ** 2)
					}, this._pushParticle = (t, e, i, s) => {
						try {
							let n = this._pool.pop();
							n || (n = new ip(this._engine, this._container)), n.init(this._nextId, t, e, i);
							let a = !0;
							if (s && (a = s(n)), !a) return;
							return this._array.push(n), this._zArray.push(n), this._nextId++, this._engine.dispatchEvent(p.particleAdded, {
								container: this._container,
								data: {
									particle: n
								}
							}), n
						} catch (t) {
							tD.warning(`${ts} adding particle: ${t}`)
						}
					}, this._removeParticle = (t, e, i) => {
						let s = this._array[t];
						if (!s || s.group !== e) return !1;
						let n = this._zArray.indexOf(s);
						return this._array.splice(t, 1), this._zArray.splice(n, 1), s.destroy(i), this._engine.dispatchEvent(p.particleRemoved, {
							container: this._container,
							data: {
								particle: s
							}
						}), this._addToPool(s), !0
					}, this._engine = t, this._container = e, this._nextId = 0, this._array = [], this._zArray = [], this._pool = [], this._limit = 0, this._groupLimits = new Map, this._needsSort = !1, this._lastZIndex = 0, this._interactionManager = new ic(t, e), this._pluginsInitialized = !1;
					let i = e.canvas.size;
					this.quadTree = new ib(iw(i), 4), this.movers = [], this.updaters = []
				}
				get count() {
					return this._array.length
				}
				addManualParticles() {
					let t = this._container;
					t.actualOptions.manualParticles.forEach(e => this.addParticle(e.position ? tJ(e.position, t.canvas.size) : void 0, e.options))
				}
				addParticle(t, e, i, s) {
					let n = this._container.actualOptions.particles.number.limit.mode,
						a = void 0 === i ? this._limit : this._groupLimits.get(i) ?? this._limit,
						o = this.count;
					if (a > 0) switch (n) {
						case b.delete: {
							let t = o + 1 - a;
							t > 0 && this.removeQuantity(t);
							break
						}
						case b.wait:
							if (o >= a) return
					}
					return this._pushParticle(t, e, i, s)
				}
				clear() {
					this._array = [], this._zArray = [], this._pluginsInitialized = !1
				}
				destroy() {
					this._array = [], this._zArray = [], this.movers = [], this.updaters = []
				}
				draw(t) {
					let e = this._container,
						i = e.canvas;
					for (let [, s] of(i.clear(), this.update(t), e.plugins)) i.drawPlugin(s, t);
					for (let e of this._zArray) e.draw(t)
				}
				filter(t) {
					return this._array.filter(t)
				}
				find(t) {
					return this._array.find(t)
				}
				get(t) {
					return this._array[t]
				}
				handleClickMode(t) {
					this._interactionManager.handleClickMode(t)
				}
				async init() {
					let t = this._container,
						e = t.actualOptions;
					this._lastZIndex = 0, this._needsSort = !1, await this.initPlugins();
					let i = !1;
					for (let [, e] of t.plugins)
						if (i = e.particlesInitialization?.() ?? i) break;
					if (this.addManualParticles(), !i) {
						let t = e.particles,
							i = t.groups;
						for (let e in i) {
							let s = i[e];
							for (let i = this.count, n = 0; n < s.number?.value && i < t.number.value; i++, n++) this.addParticle(void 0, s, e)
						}
						for (let e = this.count; e < t.number.value; e++) this.addParticle()
					}
				}
				async initPlugins() {
					if (this._pluginsInitialized) return;
					let t = this._container;
					for (let [, e] of(this.movers = await this._engine.getMovers(t, !0), this.updaters = await this._engine.getUpdaters(t, !0), await this._interactionManager.init(), t.pathGenerators)) e.init(t)
				}
				push(t, e, i, s) {
					for (let n = 0; n < t; n++) this.addParticle(e?.position, i, s)
				}
				async redraw() {
					this.clear(), await this.init(), this.draw({
						value: 0,
						factor: 0
					})
				}
				remove(t, e, i) {
					this.removeAt(this._array.indexOf(t), void 0, e, i)
				}
				removeAt(t, e = 1, i, s) {
					if (t < 0 || t > this.count) return;
					let n = 0;
					for (let a = t; n < e && a < this.count; a++) this._removeParticle(a--, i, s) && n++
				}
				removeQuantity(t, e) {
					this.removeAt(0, t, e)
				}
				setDensity() {
					let t = this._container.actualOptions,
						e = t.particles.groups;
					for (let t in e) this._applyDensity(e[t], 0, t);
					this._applyDensity(t.particles, t.manualParticles.length)
				}
				setLastZIndex(t) {
					this._lastZIndex = t, this._needsSort = this._needsSort || this._lastZIndex < t
				}
				setResizeFactor(t) {
					this._resizeFactor = t
				}
				update(t) {
					let e = this._container,
						i = new Set;
					for (let [, t] of(this.quadTree = new ib(iw(e.canvas.size), 4), e.pathGenerators)) t.update();
					for (let [, i] of e.plugins) i.update?.(t);
					let s = this._resizeFactor;
					for (let e of this._array) {
						for (let [, i] of(s && !e.ignoresResizeRatio && (e.position.x *= s.width, e.position.y *= s.height, e.initialPosition.x *= s.width, e.initialPosition.y *= s.height), e.ignoresResizeRatio = !1, this._interactionManager.reset(e), this._container.plugins)) {
							if (e.destroyed) break;
							i.particleUpdate?.(e, t)
						}
						for (let i of this.movers) i.isEnabled(e) && i.move(e, t);
						if (e.destroyed) {
							i.add(e);
							continue
						}
						this.quadTree.insert(new iv(e.getPosition(), e))
					}
					if (i.size) {
						let t = t => !i.has(t);
						for (let e of (this._array = this.filter(t), this._zArray = this._zArray.filter(t), i)) this._engine.dispatchEvent(p.particleRemoved, {
							container: this._container,
							data: {
								particle: e
							}
						});
						this._addToPool(...i)
					}
					for (let e of (this._interactionManager.externalInteract(t), this._array)) {
						for (let i of this.updaters) i.update(e, t);
						e.destroyed || e.spawning || this._interactionManager.particlesInteract(e, t)
					}
					if (delete this._resizeFactor, this._needsSort) {
						let t = this._zArray;
						t.sort((t, e) => e.position.z - t.position.z || t.id - e.id), this._lastZIndex = t[t.length - 1].position.z, this._needsSort = !1
					}
				}
			}
			class i_ {
				constructor(t) {
					this.container = t, this.pixelRatio = 1, this.reduceFactor = 1
				}
				init() {
					let t = this.container,
						e = t.actualOptions;
					this.pixelRatio = !e.detectRetina || tL() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
					let i = this.pixelRatio,
						s = t.canvas;
					if (s.element) {
						let t = s.element;
						s.size.width = t.offsetWidth * i, s.size.height = t.offsetHeight * i
					}
					let n = e.particles,
						a = n.move;
					this.maxSpeed = tk(a.gravity.maxSpeed) * i, this.sizeAnimationSpeed = tk(n.size.animation.speed) * i
				}
				initParticle(t) {
					let e = t.options,
						i = this.pixelRatio,
						s = e.move,
						n = s.distance,
						a = t.retina;
					a.moveDrift = tk(s.drift) * i, a.moveSpeed = tk(s.speed) * i, a.sizeAnimationSpeed = tk(e.size.animation.speed) * i;
					let o = a.maxDistance;
					o.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0, o.vertical = void 0 !== n.vertical ? n.vertical * i : void 0, a.maxSpeed = tk(s.gravity.maxSpeed) * i
				}
			}

			function ik(t) {
				return t && !t.destroyed
			}

			function iC(t, e, ...i) {
				let s = new il(t, e);
				return io(s, ...i), s
			}
			class iz {
				constructor(t, e, i) {
					this._intersectionManager = t => {
						if (ik(this) && this.actualOptions.pauseOnOutsideViewport)
							for (let e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause())
					}, this._nextFrame = t => {
						try {
							if (!this._smooth && void 0 !== this._lastFrameTime && t < this._lastFrameTime + ta / this.fpsLimit) {
								this.draw(!1);
								return
							}
							this._lastFrameTime ??= t;
							let e = function(t, e = 60, i = !1) {
								return {
									value: t,
									factor: i ? 60 / e : 60 * t / ta
								}
							}(t - this._lastFrameTime, this.fpsLimit, this._smooth);
							if (this.addLifeTime(e.value), this._lastFrameTime = t, e.value > ta) {
								this.draw(!1);
								return
							}
							if (this.particles.draw(e), !this.alive()) {
								this.destroy();
								return
							}
							this.animationStatus && this.draw(!1)
						} catch (t) {
							tD.error(`${ts} in animation loop`, t)
						}
					}, this._engine = t, this.id = Symbol(e), this.fpsLimit = 120, this._smooth = !1, this._delay = 0, this._duration = 0, this._lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this._lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._clickHandlers = new Map, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new i_(this), this.canvas = new ep(this), this.particles = new ix(this._engine, this), this.pathGenerators = new Map, this.interactivity = {
						mouse: {
							clicking: !1,
							inside: !1
						}
					}, this.plugins = new Map, this.effectDrawers = new Map, this.shapeDrawers = new Map, this._options = iC(this._engine, this), this.actualOptions = iC(this._engine, this), this._eventListeners = new ev(this), this._intersectionObserver = function(t) {
						if (!tL() && "undefined" != typeof IntersectionObserver) return new IntersectionObserver(t)
					}(t => this._intersectionManager(t)), this._engine.dispatchEvent(p.containerBuilt, {
						container: this
					})
				}
				get animationStatus() {
					return !this._paused && !this.pageHidden && ik(this)
				}
				get options() {
					return this._options
				}
				get sourceOptions() {
					return this._sourceOptions
				}
				addClickHandler(t) {
					if (!ik(this)) return;
					let e = this.interactivity.element;
					if (!e) return;
					let i = (e, i, s) => {
							if (!ik(this)) return;
							let n = this.retina.pixelRatio,
								a = {
									x: i.x * n,
									y: i.y * n
								};
							t(e, this.particles.quadTree.queryCircle(a, s * n))
						},
						s = !1,
						n = !1;
					for (let [t, a] of(this._clickHandlers.set("click", t => {
							if (!ik(this)) return;
							let e = {
								x: t.offsetX || t.clientX,
								y: t.offsetY || t.clientY
							};
							i(t, e, 1)
						}), this._clickHandlers.set("touchstart", () => {
							ik(this) && (s = !0, n = !1)
						}), this._clickHandlers.set("touchmove", () => {
							ik(this) && (n = !0)
						}), this._clickHandlers.set("touchend", t => {
							if (ik(this)) {
								if (s && !n) {
									let e = t.touches[t.touches.length - 1];
									if (!e && !(e = t.changedTouches[t.changedTouches.length - 1])) return;
									let s = this.canvas.element,
										n = s ? s.getBoundingClientRect() : void 0;
									i(t, {
										x: e.clientX - (n ? n.left : 0),
										y: e.clientY - (n ? n.top : 0)
									}, Math.max(e.radiusX, e.radiusY))
								}
								s = !1, n = !1
							}
						}), this._clickHandlers.set("touchcancel", () => {
							ik(this) && (s = !1, n = !1)
						}), this._clickHandlers)) e.addEventListener(t, a)
				}
				addLifeTime(t) {
					this._lifeTime += t
				}
				addPath(t, e, i = !1) {
					return !(!ik(this) || !i && this.pathGenerators.has(t)) && (this.pathGenerators.set(t, e), !0)
				}
				alive() {
					return !this._duration || this._lifeTime <= this._duration
				}
				clearClickHandlers() {
					if (ik(this)) {
						for (let [t, e] of this._clickHandlers) this.interactivity.element?.removeEventListener(t, e);
						this._clickHandlers.clear()
					}
				}
				destroy(t = !0) {
					if (ik(this)) {
						for (let [, t] of(this.stop(), this.clearClickHandlers(), this.particles.destroy(), this.canvas.destroy(), this.effectDrawers)) t.destroy?.(this);
						for (let [, t] of this.shapeDrawers) t.destroy?.(this);
						for (let t of this.effectDrawers.keys()) this.effectDrawers.delete(t);
						for (let t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
						if (this._engine.clearPlugins(this), this.destroyed = !0, t) {
							let t = this._engine.items,
								e = t.findIndex(t => t === this);
							e >= 0 && t.splice(e, 1)
						}
						this._engine.dispatchEvent(p.containerDestroyed, {
							container: this
						})
					}
				}
				draw(t) {
					if (!ik(this)) return;
					let e = t,
						i = t => {
							e && (this._lastFrameTime = void 0, e = !1), this._nextFrame(t)
						};
					this._drawAnimationFrame = requestAnimationFrame(t => i(t))
				}
				async export (t, e = {}) {
					for (let [, i] of this.plugins) {
						if (!i.export) continue;
						let s = await i.export(t, e);
						if (s.supported) return s.blob
					}
					tD.error(`${ts} - Export plugin with type ${t} not found`)
				}
				handleClickMode(t) {
					if (ik(this))
						for (let [, e] of(this.particles.handleClickMode(t), this.plugins)) e.handleClickMode?.(t)
				}
				async init() {
					if (!ik(this)) return;
					for (let t of this._engine.getSupportedEffects()) {
						let e = this._engine.getEffectDrawer(t);
						e && this.effectDrawers.set(t, e)
					}
					for (let t of this._engine.getSupportedShapes()) {
						let e = this._engine.getShapeDrawer(t);
						e && this.shapeDrawers.set(t, e)
					}
					for (let [t, e] of(await this.particles.initPlugins(), this._options = iC(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = iC(this._engine, this, this._options), await this._engine.getAvailablePlugins(this))) this.plugins.set(t, e);
					this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize();
					let {
						zLayers: t,
						duration: e,
						delay: i,
						fpsLimit: s,
						smooth: n
					} = this.actualOptions;
					for (let [, a] of(this.zLayers = t, this._duration = tk(e) * ta, this._delay = tk(i) * ta, this._lifeTime = 0, this.fpsLimit = s > 0 ? s : 120, this._smooth = n, this.effectDrawers)) await a.init?.(this);
					for (let [, t] of this.shapeDrawers) await t.init?.(this);
					for (let [, t] of this.plugins) await t.init?.();
					for (let [, t] of(this._engine.dispatchEvent(p.containerInit, {
							container: this
						}), await this.particles.init(), this.particles.setDensity(), this.plugins)) t.particlesSetup?.();
					this._engine.dispatchEvent(p.particlesSetup, {
						container: this
					})
				}
				async loadTheme(t) {
					ik(this) && (this._currentTheme = t, await this.refresh())
				}
				pause() {
					if (ik(this) && (void 0 !== this._drawAnimationFrame && (cancelAnimationFrame(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
						for (let [, t] of this.plugins) t.pause?.();
						this.pageHidden || (this._paused = !0), this._engine.dispatchEvent(p.containerPaused, {
							container: this
						})
					}
				}
				play(t) {
					if (!ik(this)) return;
					let e = this._paused || t;
					if (this._firstStart && !this.actualOptions.autoPlay) {
						this._firstStart = !1;
						return
					}
					if (this._paused && (this._paused = !1), e)
						for (let [, t] of this.plugins) t.play && t.play();
					this._engine.dispatchEvent(p.containerPlay, {
						container: this
					}), this.draw(e ?? !1)
				}
				async refresh() {
					if (ik(this)) return this.stop(), this.start()
				}
				async reset(t) {
					if (ik(this)) return this._initialSourceOptions = t, this._sourceOptions = t, this._options = iC(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = iC(this._engine, this, this._options), this.refresh()
				}
				async start() {
					ik(this) && !this.started && (await this.init(), this.started = !0, await new Promise(t => {
						let e = async () => {
							for (let [, t] of(this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element), this.plugins)) await t.start?.();
							this._engine.dispatchEvent(p.containerStarted, {
								container: this
							}), this.play(), t()
						};
						this._delayTimeout = setTimeout(() => void e(), this._delay)
					}))
				}
				stop() {
					if (ik(this) && this.started) {
						for (let [, t] of(this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element), this.plugins)) t.stop?.();
						for (let t of this.plugins.keys()) this.plugins.delete(t);
						this._sourceOptions = this._options, this._engine.dispatchEvent(p.containerStopped, {
							container: this
						})
					}
				}
				updateActualOptions() {
					this.actualOptions.responsive = [];
					let t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
					return this.actualOptions.setTheme(this._currentTheme), this._responsiveMaxWidth !== t && (this._responsiveMaxWidth = t, !0)
				}
			}
			class iM {
				constructor() {
					this._listeners = new Map
				}
				addEventListener(t, e) {
					this.removeEventListener(t, e);
					let i = this._listeners.get(t);
					i || (i = [], this._listeners.set(t, i)), i.push(e)
				}
				dispatchEvent(t, e) {
					let i = this._listeners.get(t);
					i?.forEach(t => t(e))
				}
				hasEventListener(t) {
					return !!this._listeners.get(t)
				}
				removeAllEventListeners(t) {
					t ? this._listeners.delete(t) : this._listeners = new Map
				}
				removeEventListener(t, e) {
					let i = this._listeners.get(t);
					if (!i) return;
					let s = i.length,
						n = i.indexOf(e);
					n < 0 || (1 === s ? this._listeners.delete(t) : i.splice(n, 1))
				}
			}
			async function iO(t, e, i, s = !1) {
				let n = e.get(t);
				return (!n || s) && (n = await Promise.all([...i.values()].map(e => e(t))), e.set(t, n)), n
			}
			async function iS(t) {
				let e = tX(t.url, t.index);
				if (!e) return t.fallback;
				let i = await fetch(e);
				return i.ok ? await i.json() : (tD.error(`${ts} ${i.status} while retrieving config file`), t.fallback)
			}
			let iP = "true",
				iT = "false",
				iR = "canvas",
				iD = t => {
					let e;
					if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === iR)(e = t).dataset[J] || (e.dataset[J] = iT);
					else {
						let i = t.getElementsByTagName(iR);
						i.length ? (e = i[0]).dataset[J] = iT : ((e = document.createElement(iR)).dataset[J] = iP, t.appendChild(e))
					}
					let i = "100%";
					return e.style.width || (e.style.width = i), e.style.height || (e.style.height = i), e
				},
				iE = (t, e) => {
					let i = e ?? document.getElementById(t);
					return i || ((i = document.createElement("div")).id = t, i.dataset[J] = iP, document.body.append(i)), i
				};
			class iI {
				constructor() {
					this._configs = new Map, this._domArray = [], this._eventDispatcher = new iM, this._initialized = !1, this.plugins = [], this._initializers = {
						interactors: new Map,
						movers: new Map,
						updaters: new Map
					}, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.effectDrawers = new Map, this.shapeDrawers = new Map, this.pathGenerators = new Map
				}
				get configs() {
					let t = {};
					for (let [e, i] of this._configs) t[e] = i;
					return t
				}
				get items() {
					return this._domArray
				}
				get version() {
					return "3.4.0"
				}
				addConfig(t) {
					let e = t.key ?? t.name ?? "default";
					this._configs.set(e, t), this._eventDispatcher.dispatchEvent(p.configAdded, {
						data: {
							name: e,
							config: t
						}
					})
				}
				async addEffect(t, e, i = !0) {
					tZ(t, t => {
						this.getEffectDrawer(t) || this.effectDrawers.set(t, e)
					}), await this.refresh(i)
				}
				addEventListener(t, e) {
					this._eventDispatcher.addEventListener(t, e)
				}
				async addInteractor(t, e, i = !0) {
					this._initializers.interactors.set(t, e), await this.refresh(i)
				}
				async addMover(t, e, i = !0) {
					this._initializers.movers.set(t, e), await this.refresh(i)
				}
				async addParticleUpdater(t, e, i = !0) {
					this._initializers.updaters.set(t, e), await this.refresh(i)
				}
				async addPathGenerator(t, e, i = !0) {
					this.getPathGenerator(t) || this.pathGenerators.set(t, e), await this.refresh(i)
				}
				async addPlugin(t, e = !0) {
					this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e)
				}
				async addPreset(t, e, i = !1, s = !0) {
					(i || !this.getPreset(t)) && this.presets.set(t, e), await this.refresh(s)
				}
				async addShape(t, e = !0) {
					for (let e of t.validTypes) this.getShapeDrawer(e) || this.shapeDrawers.set(e, t);
					await this.refresh(e)
				}
				clearPlugins(t) {
					this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t)
				}
				dispatchEvent(t, e) {
					this._eventDispatcher.dispatchEvent(t, e)
				}
				dom() {
					return this.items
				}
				domItem(t) {
					return this.item(t)
				}
				async getAvailablePlugins(t) {
					let e = new Map;
					for (let i of this.plugins) i.needsPlugin(t.actualOptions) && e.set(i.id, await i.getPlugin(t));
					return e
				}
				getEffectDrawer(t) {
					return this.effectDrawers.get(t)
				}
				async getInteractors(t, e = !1) {
					return iO(t, this.interactors, this._initializers.interactors, e)
				}
				async getMovers(t, e = !1) {
					return iO(t, this.movers, this._initializers.movers, e)
				}
				getPathGenerator(t) {
					return this.pathGenerators.get(t)
				}
				getPlugin(t) {
					return this.plugins.find(e => e.id === t)
				}
				getPreset(t) {
					return this.presets.get(t)
				}
				getShapeDrawer(t) {
					return this.shapeDrawers.get(t)
				}
				getSupportedEffects() {
					return this.effectDrawers.keys()
				}
				getSupportedShapes() {
					return this.shapeDrawers.keys()
				}
				async getUpdaters(t, e = !1) {
					return iO(t, this.updaters, this._initializers.updaters, e)
				}
				init() {
					this._initialized || (this._initialized = !0)
				}
				item(t) {
					let {
						items: e
					} = this, i = e[t];
					if (!i || i.destroyed) {
						e.splice(t, 1);
						return
					}
					return i
				}
				async load(t) {
					let e = t.id ?? t.element?.id ?? `tsparticles${Math.floor(1e4 * tb())}`,
						{
							index: i,
							url: s
						} = t,
						n = tX(s ? await iS({
							fallback: t.options,
							url: s,
							index: i
						}) : t.options, i),
						{
							items: a
						} = this,
						o = a.findIndex(t => t.id.description === e),
						r = new iz(this, e, n);
					if (o >= 0) {
						let t = this.item(o);
						t && !t.destroyed && t.destroy(!1), a.splice(o, t ? 1 : 0, r)
					} else a.push(r);
					let l = iD(iE(e, t.element));
					return r.canvas.loadCanvas(l), await r.start(), r
				}
				loadOptions(t, e) {
					this.plugins.forEach(i => i.loadOptions?.(t, e))
				}
				loadParticlesOptions(t, e, ...i) {
					let s = this.updaters.get(t);
					s && s.forEach(t => t.loadOptions?.(e, ...i))
				}
				async refresh(t = !0) {
					t && await Promise.all(this.items.map(t => t.refresh()))
				}
				removeEventListener(t, e) {
					this._eventDispatcher.removeEventListener(t, e)
				}
				setOnClickHandler(t) {
					let {
						items: e
					} = this;
					if (!e.length) throw Error(`${ts} can only set click handlers after calling tsParticles.load()`);
					e.forEach(e => e.addClickHandler(t))
				}
			}(Y = k || (k = {}))[Y.h = 1] = "h", Y[Y.s = 2] = "s", Y[Y.l = 3] = "l", Y[Y.a = 5] = "a";
			class iL {
				constructor() {
					this.key = "hsl", this.stringPrefix = "hsl"
				}
				handleColor(t) {
					let e = t.value.hsl ?? t.value;
					if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return t8(e)
				}
				handleRangeColor(t) {
					let e = t.value.hsl ?? t.value;
					if (void 0 !== e.h && void 0 !== e.l) return t8({
						h: tk(e.h),
						l: tk(e.l),
						s: tk(e.s)
					})
				}
				parseString(t) {
					if (!t.startsWith("hsl")) return;
					let e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
					return e ? function(t) {
						let e = t8(t);
						return {
							a: t.a,
							b: e.b,
							g: e.g,
							r: e.r
						}
					}({
						a: e.length > 4 ? tR(e[k.a]) : 1,
						h: parseInt(e[k.h], 10),
						l: parseInt(e[k.l], 10),
						s: parseInt(e[k.s], 10)
					}) : void 0
				}
			}(Z = C || (C = {}))[Z.r = 1] = "r", Z[Z.g = 2] = "g", Z[Z.b = 3] = "b", Z[Z.a = 5] = "a";
			class iF {
				constructor() {
					this.key = "rgb", this.stringPrefix = "rgb"
				}
				handleColor(t) {
					let e = t.value.rgb ?? t.value;
					if (void 0 !== e.r) return e
				}
				handleRangeColor(t) {
					let e = t.value.rgb ?? t.value;
					if (void 0 !== e.r) return {
						r: tk(e.r),
						g: tk(e.g),
						b: tk(e.b)
					}
				}
				parseString(t) {
					if (!t.startsWith(this.stringPrefix)) return;
					let e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
					return e ? {
						a: e.length > 4 ? tR(e[C.a]) : 1,
						b: parseInt(e[C.b], 10),
						g: parseInt(e[C.g], 10),
						r: parseInt(e[C.r], 10)
					} : void 0
				}
			}
			class iA {
				constructor(t) {
					this.type = w.external, this.container = t
				}
			}
			class iB {
				constructor(t) {
					this.type = w.particles, this.container = t
				}
			}(X = z || (z = {})).clockwise = "clockwise", X.counterClockwise = "counter-clockwise", X.random = "random", (K = M || (M = {})).linear = "linear", K.radial = "radial", K.random = "random", (Q = O || (O = {})).easeInBack = "ease-in-back", Q.easeInCirc = "ease-in-circ", Q.easeInCubic = "ease-in-cubic", Q.easeInLinear = "ease-in-linear", Q.easeInQuad = "ease-in-quad", Q.easeInQuart = "ease-in-quart", Q.easeInQuint = "ease-in-quint", Q.easeInExpo = "ease-in-expo", Q.easeInSine = "ease-in-sine", Q.easeOutBack = "ease-out-back", Q.easeOutCirc = "ease-out-circ", Q.easeOutCubic = "ease-out-cubic", Q.easeOutLinear = "ease-out-linear", Q.easeOutQuad = "ease-out-quad", Q.easeOutQuart = "ease-out-quart", Q.easeOutQuint = "ease-out-quint", Q.easeOutExpo = "ease-out-expo", Q.easeOutSine = "ease-out-sine", Q.easeInOutBack = "ease-in-out-back", Q.easeInOutCirc = "ease-in-out-circ", Q.easeInOutCubic = "ease-in-out-cubic", Q.easeInOutLinear = "ease-in-out-linear", Q.easeInOutQuad = "ease-in-out-quad", Q.easeInOutQuart = "ease-in-out-quart", Q.easeInOutQuint = "ease-in-out-quint", Q.easeInOutExpo = "ease-in-out-expo", Q.easeInOutSine = "ease-in-out-sine";
			let iq = function() {
				let t = new iF,
					e = new iL;
				t5(t), t5(e);
				let i = new iI;
				return i.init(), i
			}();
			tL() || (window.tsParticles = iq)
		},
		67287: function(t, e, i) {
			i.d(e, {
				ZP: function() {
					return o
				},
				bP: function() {
					return r
				}
			});
			var s = i(87470),
				n = i(57437),
				a = i(2265);
			let o = t => {
				let e = t.id ?? "tsparticles";
				return (0, a.useEffect)(() => {
					let i;
					return s.S6T.load({
						id: e,
						url: t.url,
						options: t.options
					}).then(e => {
						var s;
						i = e, null == (s = t.particlesLoaded) || s.call(t, e)
					}), () => {
						null == i || i.destroy()
					}
				}, [e, t, t.url, t.options]), (0, n.jsx)("div", {
					id: e,
					className: t.className
				})
			};
			async function r(t) {
				await t(s.S6T)
			}
		},
		85116: function(t, e, i) {
			i.d(e, {
				S: function() {
					return e_
				}
			});
			var s, n, a, o, r, l, c = i(87470);
			class h {
				init(t) {
					let e = t.options.move.gravity;
					t.gravity = {
							enable: e.enable,
							acceleration: (0, c.Gu7)(e.acceleration),
							inverse: e.inverse
						},
						function(t) {
							let e = t.container,
								i = t.options.move.spin;
							if (!i.enable) return;
							let s = i.position ?? {
									x: 50,
									y: 50
								},
								n = {
									x: .01 * s.x * e.canvas.size.width,
									y: .01 * s.y * e.canvas.size.height
								},
								a = t.getPosition(),
								o = (0, c.Spd)(a, n),
								r = (0, c.Gu7)(i.acceleration);
							t.retina.spinAcceleration = r * e.retina.pixelRatio, t.spin = {
								center: n,
								direction: t.velocity.x >= 0 ? c.RnL.clockwise : c.RnL.counterClockwise,
								angle: t.velocity.angle,
								radius: o,
								acceleration: t.retina.spinAcceleration
							}
						}(t)
				}
				isEnabled(t) {
					return !t.destroyed && t.options.move.enable
				}
				move(t, e) {
					let i = t.options,
						s = i.move;
					if (!s.enable) return;
					let n = t.container,
						a = n.retina.pixelRatio;
					t.retina.moveSpeed ??= (0, c.Gu7)(s.speed) * a, t.retina.moveDrift ??= (0, c.Gu7)(t.options.move.drift) * a;
					let o = t.slow.inRange ? t.slow.factor : 1,
						r = t.retina.moveSpeed * n.retina.reduceFactor,
						l = t.retina.moveDrift,
						h = (0, c.KIV)(i.size.value) * a,
						d = r * (s.size ? t.getRadius() / h : 1) * o * (e.factor || 1) / 2,
						u = t.retina.maxSpeed ?? n.retina.maxSpeed;
					s.spin.enable ? function(t, e) {
							let i = t.container;
							if (!t.spin) return;
							let s = {
								x: t.spin.direction === c.RnL.clockwise ? Math.cos : Math.sin,
								y: t.spin.direction === c.RnL.clockwise ? Math.sin : Math.cos
							};
							t.position.x = t.spin.center.x + t.spin.radius * s.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * s.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
							let n = Math.max(i.canvas.size.width, i.canvas.size.height),
								a = .5 * n;
							t.spin.radius > a ? (t.spin.radius = a, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += .01 * e * (1 - t.spin.radius / n)
						}(t, d) : function(t, e, i, s, n, a) {
							(function(t, e) {
								let i = t.options.move.path;
								if (!i.enable) return;
								if (t.lastPathTime <= t.pathDelay) {
									t.lastPathTime += e.value;
									return
								}
								let s = t.pathGenerator?.generate(t, e);
								s && t.velocity.addTo(s), i.clamp && (t.velocity.x = (0, c.uZ5)(t.velocity.x, -1, 1), t.velocity.y = (0, c.uZ5)(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
							})(t, a);
							let o = t.gravity,
								r = o?.enable && o.inverse ? -1 : 1;
							n && i && (t.velocity.x += n * a.factor / (60 * i)), o?.enable && i && (t.velocity.y += o.acceleration * a.factor * r / (60 * i));
							let l = t.moveDecay;
							t.velocity.multTo(l);
							let h = t.velocity.mult(i);
							o?.enable && s > 0 && (!o.inverse && h.y >= 0 && h.y >= s || o.inverse && h.y <= 0 && h.y <= -s) && (h.y = r * s, i && (t.velocity.y = h.y / i));
							let d = t.options.zIndex,
								u = (1 - t.zIndexFactor) ** d.velocityRate;
							h.multTo(u);
							let {
								position: p
							} = t;
							p.addTo(h), e.vibrate && (p.x += Math.sin(p.x * Math.cos(p.y)), p.y += Math.cos(p.y * Math.sin(p.x)))
						}(t, s, d, u, l, e),
						function(t) {
							let e = t.initialPosition,
								{
									dx: i,
									dy: s
								} = (0, c.oW6)(e, t.position),
								n = Math.abs(i),
								a = Math.abs(s),
								{
									maxDistance: o
								} = t.retina,
								r = o.horizontal,
								l = o.vertical;
							if (r || l) {
								if ((r && n >= r || l && a >= l) && !t.misplaced) t.misplaced = !!r && n > r || !!l && a > l, r && (t.velocity.x = .5 * t.velocity.y - t.velocity.x), l && (t.velocity.y = .5 * t.velocity.x - t.velocity.y);
								else if ((!r || n < r) && (!l || a < l) && t.misplaced) t.misplaced = !1;
								else if (t.misplaced) {
									let i = t.position,
										s = t.velocity;
									r && (i.x < e.x && s.x < 0 || i.x > e.x && s.x > 0) && (s.x *= -(0, c.sZz)()), l && (i.y < e.y && s.y < 0 || i.y > e.y && s.y > 0) && (s.y *= -(0, c.sZz)())
								}
							}
						}(t)
				}
			}
			async function d(t, e = !0) {
				await t.addMover("base", () => Promise.resolve(new h), e)
			}
			let u = 2 * Math.PI;
			class p {
				constructor() {
					this.validTypes = ["circle"]
				}
				draw(t) {
					! function(t) {
						let {
							context: e,
							particle: i,
							radius: s
						} = t;
						i.circleRange || (i.circleRange = {
							min: 0,
							max: u
						});
						let n = i.circleRange;
						e.arc(0, 0, s, n.min, n.max, !1)
					}(t)
				}
				getSidesCount() {
					return 12
				}
				particleInit(t, e) {
					let i = e.shapeData,
						s = i?.angle ?? {
							max: 360,
							min: 0
						};
					e.circleRange = (0, c.Kn2)(s) ? {
						min: (0, c.Idc)(s.min),
						max: (0, c.Idc)(s.max)
					} : {
						min: 0,
						max: (0, c.Idc)(s)
					}
				}
			}
			async function f(t, e = !0) {
				await t.addShape(new p, e)
			}
			class v {
				constructor(t) {
					this.container = t
				}
				init(t) {
					let e = (0, c.lNs)(t.options.color, t.id, t.options.reduceDuplicates);
					e && (t.color = (0, c.bS$)(e, t.options.color.animation, this.container.retina.reduceFactor))
				}
				isEnabled(t) {
					let {
						h: e,
						s: i,
						l: s
					} = t.options.color.animation, {
						color: n
					} = t;
					return !t.destroyed && !t.spawning && (n?.h.value !== void 0 && e.enable || n?.s.value !== void 0 && i.enable || n?.l.value !== void 0 && s.enable)
				}
				update(t, e) {
					(0, c.PBz)(t.color, e)
				}
			}
			async function g(t, e = !0) {
				await t.addParticleUpdater("color", t => Promise.resolve(new v(t)), e)
			}
			class m {
				constructor(t) {
					this.container = t
				}
				init(t) {
					let e = t.options.opacity;
					t.opacity = (0, c.V0)(e, 1);
					let i = e.animation;
					i.enable && (t.opacity.velocity = (0, c.Gu7)(i.speed) / c.tZy * this.container.retina.reduceFactor, i.sync || (t.opacity.velocity *= (0, c.sZz)()))
				}
				isEnabled(t) {
					return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((t.opacity.maxLoops ?? 0) <= 0 || (t.opacity.maxLoops ?? 0) > 0 && (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0))
				}
				reset(t) {
					t.opacity && (t.opacity.time = 0, t.opacity.loops = 0)
				}
				update(t, e) {
					this.isEnabled(t) && t.opacity && (0, c.CrJ)(t, t.opacity, !0, t.options.opacity.animation.destroy, e)
				}
			}
			async function y(t, e = !0) {
				await t.addParticleUpdater("opacity", t => Promise.resolve(new m(t)), e)
			}
			class b {
				constructor(t) {
					this.container = t, this.modes = [c.Voc.bounce, c.Voc.split]
				}
				update(t, e, i, s) {
					if (!this.modes.includes(s)) return;
					let n = this.container,
						a = !1;
					for (let [, s] of n.plugins)
						if (void 0 !== s.particleBounce && (a = s.particleBounce(t, i, e)), a) break;
					if (a) return;
					let o = t.getPosition(),
						r = t.offset,
						l = t.getRadius(),
						h = (0, c.M_G)(o, l),
						d = n.canvas.size;
					! function(t) {
						if (t.outMode !== c.Voc.bounce && t.outMode !== c.Voc.split || t.direction !== c.DYc.left && t.direction !== c.DYc.right) return;
						t.bounds.right < 0 && t.direction === c.DYc.left ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && t.direction === c.DYc.right && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
						let e = t.particle.velocity.x,
							i = !1;
						if (t.direction === c.DYc.right && t.bounds.right >= t.canvasSize.width && e > 0 || t.direction === c.DYc.left && t.bounds.left <= 0 && e < 0) {
							let e = (0, c.Gu7)(t.particle.options.bounce.horizontal.value);
							t.particle.velocity.x *= -e, i = !0
						}
						if (!i) return;
						let s = t.offset.x + t.size;
						t.bounds.right >= t.canvasSize.width && t.direction === c.DYc.right ? t.particle.position.x = t.canvasSize.width - s : t.bounds.left <= 0 && t.direction === c.DYc.left && (t.particle.position.x = s), t.outMode === c.Voc.split && t.particle.destroy()
					}({
						particle: t,
						outMode: s,
						direction: e,
						bounds: h,
						canvasSize: d,
						offset: r,
						size: l
					}),
					function(t) {
						if (t.outMode !== c.Voc.bounce && t.outMode !== c.Voc.split || t.direction !== c.DYc.bottom && t.direction !== c.DYc.top) return;
						t.bounds.bottom < 0 && t.direction === c.DYc.top ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && t.direction === c.DYc.bottom && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
						let e = t.particle.velocity.y,
							i = !1;
						if (t.direction === c.DYc.bottom && t.bounds.bottom >= t.canvasSize.height && e > 0 || t.direction === c.DYc.top && t.bounds.top <= 0 && e < 0) {
							let e = (0, c.Gu7)(t.particle.options.bounce.vertical.value);
							t.particle.velocity.y *= -e, i = !0
						}
						if (!i) return;
						let s = t.offset.y + t.size;
						t.bounds.bottom >= t.canvasSize.height && t.direction === c.DYc.bottom ? t.particle.position.y = t.canvasSize.height - s : t.bounds.top <= 0 && t.direction === c.DYc.top && (t.particle.position.y = s), t.outMode === c.Voc.split && t.particle.destroy()
					}({
						particle: t,
						outMode: s,
						direction: e,
						bounds: h,
						canvasSize: d,
						offset: r,
						size: l
					})
				}
			}
			class w {
				constructor(t) {
					this.container = t, this.modes = [c.Voc.destroy]
				}
				update(t, e, i, s) {
					if (!this.modes.includes(s)) return;
					let n = this.container;
					switch (t.outType) {
						case c.Igb.normal:
						case c.Igb.outside:
							if ((0, c.Ac)(t.position, n.canvas.size, c.OWs.origin, t.getRadius(), e)) return;
							break;
						case c.Igb.inside: {
							let {
								dx: e,
								dy: i
							} = (0, c.oW6)(t.position, t.moveCenter), {
								x: s,
								y: n
							} = t.velocity;
							if (s < 0 && e > t.moveCenter.radius || n < 0 && i > t.moveCenter.radius || s >= 0 && e < -t.moveCenter.radius || n >= 0 && i < -t.moveCenter.radius) return
						}
					}
					n.particles.remove(t, void 0, !0)
				}
			}
			class x {
				constructor(t) {
					this.container = t, this.modes = [c.Voc.none]
				}
				update(t, e, i, s) {
					if (!this.modes.includes(s) || ((t.options.move.distance.horizontal && (e === c.DYc.left || e === c.DYc.right)) ?? (t.options.move.distance.vertical && (e === c.DYc.top || e === c.DYc.bottom)))) return;
					let n = t.options.move.gravity,
						a = this.container,
						o = a.canvas.size,
						r = t.getRadius();
					if (n.enable) {
						let i = t.position;
						(!n.inverse && i.y > o.height + r && e === c.DYc.bottom || n.inverse && i.y < -r && e === c.DYc.top) && a.particles.remove(t)
					} else {
						if (t.velocity.y > 0 && t.position.y <= o.height + r || t.velocity.y < 0 && t.position.y >= -r || t.velocity.x > 0 && t.position.x <= o.width + r || t.velocity.x < 0 && t.position.x >= -r) return;
						(0, c.Ac)(t.position, a.canvas.size, c.OWs.origin, r, e) || a.particles.remove(t)
					}
				}
			}
			class _ {
				constructor(t) {
					this.container = t, this.modes = [c.Voc.out]
				}
				update(t, e, i, s) {
					if (!this.modes.includes(s)) return;
					let n = this.container;
					if (t.outType === c.Igb.inside) {
						let {
							x: e,
							y: i
						} = t.velocity, s = c.OWs.origin;
						s.length = t.moveCenter.radius, s.angle = t.velocity.angle + Math.PI, s.addTo(c.OWs.create(t.moveCenter));
						let {
							dx: a,
							dy: o
						} = (0, c.oW6)(t.position, s);
						if (e <= 0 && a >= 0 || i <= 0 && o >= 0 || e >= 0 && a <= 0 || i >= 0 && o <= 0) return;
						t.position.x = Math.floor((0, c.vdf)({
							min: 0,
							max: n.canvas.size.width
						})), t.position.y = Math.floor((0, c.vdf)({
							min: 0,
							max: n.canvas.size.height
						}));
						let {
							dx: r,
							dy: l
						} = (0, c.oW6)(t.position, t.moveCenter);
						t.direction = Math.atan2(-l, -r), t.velocity.angle = t.direction
					} else {
						if ((0, c.Ac)(t.position, n.canvas.size, c.OWs.origin, t.getRadius(), e)) return;
						switch (t.outType) {
							case c.Igb.outside: {
								t.position.x = Math.floor((0, c.vdf)({
									min: -t.moveCenter.radius,
									max: t.moveCenter.radius
								})) + t.moveCenter.x, t.position.y = Math.floor((0, c.vdf)({
									min: -t.moveCenter.radius,
									max: t.moveCenter.radius
								})) + t.moveCenter.y;
								let {
									dx: e,
									dy: i
								} = (0, c.oW6)(t.position, t.moveCenter);
								t.moveCenter.radius && (t.direction = Math.atan2(i, e), t.velocity.angle = t.direction);
								break
							}
							case c.Igb.normal: {
								let i = t.options.move.warp,
									s = n.canvas.size,
									a = {
										bottom: s.height + t.getRadius() + t.offset.y,
										left: -t.getRadius() - t.offset.x,
										right: s.width + t.getRadius() + t.offset.x,
										top: -t.getRadius() - t.offset.y
									},
									o = t.getRadius(),
									r = (0, c.M_G)(t.position, o);
								e === c.DYc.right && r.left > s.width + t.offset.x ? (t.position.x = a.left, t.initialPosition.x = t.position.x, i || (t.position.y = (0, c.sZz)() * s.height, t.initialPosition.y = t.position.y)) : e === c.DYc.left && r.right < -t.offset.x && (t.position.x = a.right, t.initialPosition.x = t.position.x, i || (t.position.y = (0, c.sZz)() * s.height, t.initialPosition.y = t.position.y)), e === c.DYc.bottom && r.top > s.height + t.offset.y ? (i || (t.position.x = (0, c.sZz)() * s.width, t.initialPosition.x = t.position.x), t.position.y = a.top, t.initialPosition.y = t.position.y) : e === c.DYc.top && r.bottom < -t.offset.y && (i || (t.position.x = (0, c.sZz)() * s.width, t.initialPosition.x = t.position.x), t.position.y = a.bottom, t.initialPosition.y = t.position.y)
							}
						}
					}
				}
			}
			let k = (t, e) => t.default === e || t.bottom === e || t.left === e || t.right === e || t.top === e;
			class C {
				constructor(t) {
					this._updateOutMode = (t, e, i, s) => {
						for (let n of this.updaters) n.update(t, s, e, i)
					}, this.container = t, this.updaters = []
				}
				init(t) {
					this.updaters = [];
					let e = t.options.move.outModes;
					k(e, c.Voc.bounce) ? this.updaters.push(new b(this.container)) : k(e, c.Voc.out) ? this.updaters.push(new _(this.container)) : k(e, c.Voc.destroy) ? this.updaters.push(new w(this.container)) : k(e, c.Voc.none) && this.updaters.push(new x(this.container))
				}
				isEnabled(t) {
					return !t.destroyed && !t.spawning
				}
				update(t, e) {
					let i = t.options.move.outModes;
					this._updateOutMode(t, e, i.bottom ?? i.default, c.DYc.bottom), this._updateOutMode(t, e, i.left ?? i.default, c.DYc.left), this._updateOutMode(t, e, i.right ?? i.default, c.DYc.right), this._updateOutMode(t, e, i.top ?? i.default, c.DYc.top)
				}
			}
			async function z(t, e = !0) {
				await t.addParticleUpdater("outModes", t => Promise.resolve(new C(t)), e)
			}
			class M {
				init(t) {
					let e = t.container,
						i = t.options.size.animation;
					i.enable && (t.size.velocity = (t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) / c.tZy * e.retina.reduceFactor, i.sync || (t.size.velocity *= (0, c.sZz)()))
				}
				isEnabled(t) {
					return !t.destroyed && !t.spawning && t.size.enable && ((t.size.maxLoops ?? 0) <= 0 || (t.size.maxLoops ?? 0) > 0 && (t.size.loops ?? 0) < (t.size.maxLoops ?? 0))
				}
				reset(t) {
					t.size.loops = 0
				}
				update(t, e) {
					this.isEnabled(t) && (0, c.CrJ)(t, t.size, !0, t.options.size.animation.destroy, e)
				}
			}
			async function O(t, e = !0) {
				await t.addParticleUpdater("size", () => Promise.resolve(new M), e)
			}
			async function S(t, e = !0) {
				await d(t, !1), await f(t, !1), await g(t, !1), await y(t, !1), await z(t, !1), await O(t, !1), await t.refresh(e)
			}
			async function P() {
				(0, c.bx6)(c.nxi.easeInQuad, t => t ** 2), (0, c.bx6)(c.nxi.easeOutQuad, t => 1 - (1 - t) ** 2), (0, c.bx6)(c.nxi.easeInOutQuad, t => t < .5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2), await Promise.resolve()
			}
			let T = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
			class R {
				constructor() {
					this.validTypes = ["emoji"], this._emojiShapeDict = new Map
				}
				destroy() {
					for (let [t, e] of this._emojiShapeDict) e instanceof ImageBitmap && (e?.close(), this._emojiShapeDict.delete(t))
				}
				draw(t) {
					! function(t) {
						let {
							context: e,
							particle: i,
							radius: s,
							opacity: n
						} = t, a = i.emojiData, o = 2 * s, r = e.globalAlpha;
						a && (e.globalAlpha = n, e.drawImage(a, -s, -s, o, o), e.globalAlpha = r)
					}(t)
				}
				async init(t) {
					let e = t.actualOptions,
						{
							validTypes: i
						} = this;
					if (!i.find(t => (0, c.dBL)(t, e.particles.shape.type))) return;
					let s = [(0, c.mxw)(T)],
						n = i.map(t => e.particles.shape.options[t]).find(t => !!t);
					n && (0, c.KH1)(n, t => {
						t.font && s.push((0, c.mxw)(t.font))
					}), await Promise.all(s)
				}
				particleDestroy(t) {
					delete t.emojiData
				}
				particleInit(t, e) {
					let i;
					let s = e.shapeData;
					if (!s?.value) return;
					let n = (0, c.wA_)(s.value, e.randomIndexData),
						a = s.font ?? T;
					if (!n) return;
					let o = `${n}_${a}`,
						r = this._emojiShapeDict.get(o);
					if (r) {
						e.emojiData = r;
						return
					}
					let l = 2 * (0, c.KIV)(e.size.value),
						h = (0, c.KIV)(e.size.value);
					if ("undefined" != typeof OffscreenCanvas) {
						let t = new OffscreenCanvas(l, l),
							e = t.getContext("2d");
						if (!e) return;
						e.font = `400 ${2 * h}px ${a}`, e.textBaseline = "middle", e.textAlign = "center", e.fillText(n, h, h), i = t.transferToImageBitmap()
					} else {
						let t = document.createElement("canvas");
						t.width = l, t.height = l;
						let e = t.getContext("2d");
						if (!e) return;
						e.font = `400 ${2 * h}px ${a}`, e.textBaseline = "middle", e.textAlign = "center", e.fillText(n, h, h), i = t
					}
					this._emojiShapeDict.set(o, i), e.emojiData = i
				}
			}
			async function D(t, e = !0) {
				await t.addShape(new R, e)
			}

			function E(t, e, i, s, n) {
				let a = t.actualOptions.interactivity.modes.attract;
				if (a)
					for (let o of t.particles.quadTree.query(s, n)) {
						let {
							dx: t,
							dy: s,
							distance: n
						} = (0, c.oW6)(o.position, e), r = a.speed * a.factor, l = (0, c.uZ5)((0, c._Xd)(a.easing)(1 - n / i) * r, 1, a.maxSpeed), h = c.OWs.create(n ? t / n * l : r, n ? s / n * l : r);
						o.position.subFrom(h)
					}
			}
			class I {
				constructor() {
					this.distance = 200, this.duration = .4, this.easing = c.nxi.easeOutQuad, this.factor = 1, this.maxSpeed = 50, this.speed = 1
				}
				load(t) {
					t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed))
				}
			}
			let L = "attract";
			class F extends c.L8z {
				constructor(t, e) {
					super(e), this._engine = t, e.attract || (e.attract = {
						particles: []
					}), this.handleClickMode = t => {
						let i = this.container.actualOptions.interactivity.modes.attract;
						if (i && t === L) {
							for (let t of (e.attract || (e.attract = {
									particles: []
								}), e.attract.clicking = !0, e.attract.count = 0, e.attract.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
							e.attract.particles = [], e.attract.finish = !1, setTimeout(() => {
								e.destroyed || (e.attract || (e.attract = {
									particles: []
								}), e.attract.clicking = !1)
							}, i.duration * c.X5o)
						}
					}
				}
				clear() {}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.attract;
					e && (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio)
				}
				interact() {
					let t = this.container,
						e = t.actualOptions,
						i = t.interactivity.status === c.WtO,
						s = e.interactivity.events,
						{
							enable: n,
							mode: a
						} = s.onHover,
						{
							enable: o,
							mode: r
						} = s.onClick;
					i && n && (0, c.dBL)(L, a) ? function(t, e) {
						let i = t.interactivity.mouse.position,
							s = t.retina.attractModeDistance;
						s && !(s < 0) && i && E(t, i, s, new c.Cdc(i.x, i.y, s), t => e(t))
					}(this.container, t => this.isEnabled(t)) : o && (0, c.dBL)(L, r) && function(t, e) {
						t.attract || (t.attract = {
							particles: []
						});
						let {
							attract: i
						} = t;
						if (i.finish || (i.count || (i.count = 0), i.count++, i.count !== t.particles.count || (i.finish = !0)), i.clicking) {
							let i = t.interactivity.mouse.clickPosition,
								s = t.retina.attractModeDistance;
							if (!s || s < 0 || !i) return;
							E(t, i, s, new c.Cdc(i.x, i.y, s), t => e(t))
						} else !1 === i.clicking && (i.particles = [])
					}(this.container, t => this.isEnabled(t))
				}
				isEnabled(t) {
					let e = this.container,
						i = e.actualOptions,
						s = e.interactivity.mouse,
						n = (t?.interactivity ?? i.interactivity).events;
					if ((!s.position || !n.onHover.enable) && (!s.clickPosition || !n.onClick.enable)) return !1;
					let a = n.onHover.mode,
						o = n.onClick.mode;
					return (0, c.dBL)(L, a) || (0, c.dBL)(L, o)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.attract || (t.attract = new I), e)) t.attract.load(i?.attract)
				}
				reset() {}
			}
			async function A(t, e = !0) {
				await t.addInteractor("externalAttract", e => Promise.resolve(new F(t, e)), e)
			}
			let B = .5 * Math.PI;

			function q(t, e, i, s, n) {
				for (let a of t.particles.quadTree.query(s, n)) s instanceof c.Cdc ? (0, c.kRC)((0, c.gy4)(a), {
					position: e,
					radius: i,
					mass: i ** 2 * B,
					velocity: c.OWs.origin,
					factor: c.OWs.origin
				}) : s instanceof c.AeJ && (0, c.dpV)(a, (0, c.M_G)(e, i))
			}
			class W {
				constructor() {
					this.distance = 200
				}
				load(t) {
					t && void 0 !== t.distance && (this.distance = t.distance)
				}
			}
			let H = "bounce";
			class V extends c.L8z {
				constructor(t) {
					super(t)
				}
				clear() {}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.bounce;
					e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio)
				}
				interact() {
					let t = this.container,
						e = t.actualOptions.interactivity.events,
						i = t.interactivity.status === c.WtO,
						s = e.onHover.enable,
						n = e.onHover.mode,
						a = e.onDiv;
					if (i && s && (0, c.dBL)(H, n)) ! function(t, e) {
						let i = t.retina.pixelRatio,
							s = t.interactivity.mouse.position,
							n = t.retina.bounceModeDistance;
						n && !(n < 0) && s && q(t, s, n, new c.Cdc(s.x, s.y, n + 10 * i), e)
					}(this.container, t => this.isEnabled(t));
					else {
						var o, r;
						o = this.container, r = t => this.isEnabled(t), (0, c.XDe)(H, a, (t, e) => (function(t, e, i, s) {
							let n = document.querySelectorAll(e);
							n.length && n.forEach(e => {
								let n = t.retina.pixelRatio,
									a = {
										x: (e.offsetLeft + .5 * e.offsetWidth) * n,
										y: (e.offsetTop + .5 * e.offsetHeight) * n
									},
									o = .5 * e.offsetWidth * n,
									r = 10 * n,
									l = i.type === c.gqJ.circle ? new c.Cdc(a.x, a.y, o + r) : new c.AeJ(e.offsetLeft * n - r, e.offsetTop * n - r, e.offsetWidth * n + 2 * r, e.offsetHeight * n + 2 * r);
								s(a, o, l)
							})
						})(o, t, e, (t, e, i) => q(o, t, e, i, r)))
					}
				}
				isEnabled(t) {
					let e = this.container,
						i = e.actualOptions,
						s = e.interactivity.mouse,
						n = (t?.interactivity ?? i.interactivity).events,
						a = n.onDiv;
					return !!s.position && n.onHover.enable && (0, c.dBL)(H, n.onHover.mode) || (0, c.wm$)(H, a)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.bounce || (t.bounce = new W), e)) t.bounce.load(i?.bounce)
				}
				reset() {}
			}
			async function U(t, e = !0) {
				await t.addInteractor("externalBounce", t => Promise.resolve(new V(t)), e)
			}
			class j {
				constructor() {
					this.distance = 200, this.duration = .4, this.mix = !1
				}
				load(t) {
					if (t) {
						if (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.mix && (this.mix = t.mix), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color) {
							let e = (0, c.kJL)(this.color) ? void 0 : this.color;
							this.color = (0, c.KH1)(t.color, t => c.OzF.create(e, t))
						}
						void 0 !== t.size && (this.size = t.size)
					}
				}
			}
			class G extends j {
				constructor() {
					super(), this.selectors = []
				}
				load(t) {
					super.load(t), t && void 0 !== t.selectors && (this.selectors = t.selectors)
				}
			}
			class $ extends j {
				load(t) {
					super.load(t), t && (this.divs = (0, c.KH1)(t.divs, t => {
						let e = new G;
						return e.load(t), e
					}))
				}
			}

			function N(t, e, i, s) {
				return e >= i ? (0, c.uZ5)(t + (e - i) * s, t, e) : e < i ? (0, c.uZ5)(t - (i - e) * s, e, t) : void 0
			}(s = o || (o = {})).color = "color", s.opacity = "opacity", s.size = "size";
			let Y = "bubble";
			class Z extends c.L8z {
				constructor(t) {
					super(t), this._clickBubble = () => {
						let t = this.container,
							e = t.actualOptions,
							i = t.interactivity.mouse.clickPosition,
							s = e.interactivity.modes.bubble;
						if (!s || !i) return;
						t.bubble || (t.bubble = {});
						let n = t.retina.bubbleModeDistance;
						if (!n || n < 0) return;
						let a = t.particles.quadTree.queryCircle(i, n, t => this.isEnabled(t)),
							{
								bubble: r
							} = t;
						for (let e of a) {
							if (!r.clicking) continue;
							e.bubble.inRange = !r.durationEnd;
							let a = e.getPosition(),
								l = (0, c.Spd)(a, i),
								h = (new Date().getTime() - (t.interactivity.mouse.clickTime ?? 0)) / c.X5o;
							h > s.duration && (r.durationEnd = !0), h > 2 * s.duration && (r.clicking = !1, r.durationEnd = !1);
							let d = {
								bubbleObj: {
									optValue: t.retina.bubbleModeSize,
									value: e.bubble.radius
								},
								particlesObj: {
									optValue: (0, c.KIV)(e.options.size.value) * t.retina.pixelRatio,
									value: e.size.value
								},
								type: o.size
							};
							this._process(e, l, h, d);
							let u = {
								bubbleObj: {
									optValue: s.opacity,
									value: e.bubble.opacity
								},
								particlesObj: {
									optValue: (0, c.KIV)(e.options.opacity.value),
									value: e.opacity?.value ?? 1
								},
								type: o.opacity
							};
							this._process(e, l, h, u), !r.durationEnd && l <= n ? this._hoverBubbleColor(e, l) : delete e.bubble.color
						}
					}, this._hoverBubble = () => {
						let t = this.container,
							e = t.interactivity.mouse.position,
							i = t.retina.bubbleModeDistance;
						if (i && !(i < 0) && e)
							for (let s of t.particles.quadTree.queryCircle(e, i, t => this.isEnabled(t))) {
								s.bubble.inRange = !0;
								let n = s.getPosition(),
									a = (0, c.Spd)(n, e),
									o = 1 - a / i;
								a <= i ? o >= 0 && t.interactivity.status === c.WtO && (this._hoverBubbleSize(s, o), this._hoverBubbleOpacity(s, o), this._hoverBubbleColor(s, o)) : this.reset(s), t.interactivity.status === c.aMP && this.reset(s)
							}
					}, this._hoverBubbleColor = (t, e, i) => {
						let s = this.container.actualOptions,
							n = i ?? s.interactivity.modes.bubble;
						if (n) {
							if (!t.bubble.finalColor) {
								let e = n.color;
								if (!e) return;
								let i = (0, c.wA_)(e);
								t.bubble.finalColor = (0, c.lNs)(i)
							}
							if (t.bubble.finalColor) {
								if (n.mix) {
									t.bubble.color = void 0;
									let i = t.getFillColor();
									t.bubble.color = i ? (0, c.lCU)((0, c.ocL)(i, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor
								} else t.bubble.color = t.bubble.finalColor
							}
						}
					}, this._hoverBubbleOpacity = (t, e, i) => {
						let s = this.container.actualOptions,
							n = i?.opacity ?? s.interactivity.modes.bubble?.opacity;
						if (!n) return;
						let a = t.options.opacity.value,
							o = N(t.opacity?.value ?? 1, n, (0, c.KIV)(a), e);
						void 0 !== o && (t.bubble.opacity = o)
					}, this._hoverBubbleSize = (t, e, i) => {
						let s = this.container,
							n = i?.size ? i.size * s.retina.pixelRatio : s.retina.bubbleModeSize;
						if (void 0 === n) return;
						let a = (0, c.KIV)(t.options.size.value) * s.retina.pixelRatio,
							o = N(t.size.value, n, a, e);
						void 0 !== o && (t.bubble.radius = o)
					}, this._process = (t, e, i, s) => {
						let n = this.container,
							a = s.bubbleObj.optValue,
							r = n.actualOptions.interactivity.modes.bubble;
						if (!r || void 0 === a) return;
						let l = r.duration,
							c = n.retina.bubbleModeDistance,
							h = s.particlesObj.optValue,
							d = s.bubbleObj.value,
							u = s.particlesObj.value ?? 0,
							p = s.type;
						if (c && !(c < 0) && a !== h) {
							if (n.bubble || (n.bubble = {}), n.bubble.durationEnd) d && (p === o.size && delete t.bubble.radius, p === o.opacity && delete t.bubble.opacity);
							else if (e <= c) {
								if ((d ?? u) !== a) {
									let e = u - i * (u - a) / l;
									p === o.size && (t.bubble.radius = e), p === o.opacity && (t.bubble.opacity = e)
								}
							} else p === o.size && delete t.bubble.radius, p === o.opacity && delete t.bubble.opacity
						}
					}, this._singleSelectorHover = (t, e, i) => {
						let s = this.container,
							n = document.querySelectorAll(e),
							a = s.actualOptions.interactivity.modes.bubble;
						a && n.length && n.forEach(e => {
							let n = s.retina.pixelRatio,
								o = {
									x: (e.offsetLeft + .5 * e.offsetWidth) * n,
									y: (e.offsetTop + .5 * e.offsetHeight) * n
								},
								r = .5 * e.offsetWidth * n,
								l = i.type === c.gqJ.circle ? new c.Cdc(o.x, o.y, r) : new c.AeJ(e.offsetLeft * n, e.offsetTop * n, e.offsetWidth * n, e.offsetHeight * n);
							for (let i of s.particles.quadTree.query(l, t => this.isEnabled(t))) {
								if (!l.contains(i.getPosition())) continue;
								i.bubble.inRange = !0;
								let s = a.divs,
									n = (0, c.iCg)(s, e);
								i.bubble.div && i.bubble.div === e || (this.clear(i, t, !0), i.bubble.div = e), this._hoverBubbleSize(i, 1, n), this._hoverBubbleOpacity(i, 1, n), this._hoverBubbleColor(i, 1, n)
							}
						})
					}, t.bubble || (t.bubble = {}), this.handleClickMode = e => {
						e === Y && (t.bubble || (t.bubble = {}), t.bubble.clicking = !0)
					}
				}
				clear(t, e, i) {
					(!t.bubble.inRange || i) && (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
				}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.bubble;
					e && (t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio, void 0 !== e.size && (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio))
				}
				interact(t) {
					let e = this.container.actualOptions.interactivity.events,
						i = e.onHover,
						s = e.onClick,
						n = i.enable,
						a = i.mode,
						o = s.enable,
						r = s.mode,
						l = e.onDiv;
					n && (0, c.dBL)(Y, a) ? this._hoverBubble() : o && (0, c.dBL)(Y, r) ? this._clickBubble() : (0, c.XDe)(Y, l, (e, i) => this._singleSelectorHover(t, e, i))
				}
				isEnabled(t) {
					let e = this.container,
						i = e.actualOptions,
						s = e.interactivity.mouse,
						{
							onClick: n,
							onDiv: a,
							onHover: o
						} = (t?.interactivity ?? i.interactivity).events,
						r = (0, c.wm$)(Y, a);
					return (!!r || !!o.enable && !!s.position || !!n.enable && !!s.clickPosition) && ((0, c.dBL)(Y, o.mode) || (0, c.dBL)(Y, n.mode) || r)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.bubble || (t.bubble = new $), e)) t.bubble.load(i?.bubble)
				}
				reset(t) {
					t.bubble.inRange = !1
				}
			}
			async function X(t, e = !0) {
				await t.addInteractor("externalBubble", t => Promise.resolve(new Z(t)), e)
			}
			class K {
				constructor() {
					this.opacity = .5
				}
				load(t) {
					t && void 0 !== t.opacity && (this.opacity = t.opacity)
				}
			}
			class Q {
				constructor() {
					this.distance = 80, this.links = new K, this.radius = 60
				}
				load(t) {
					t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(t.links), void 0 !== t.radius && (this.radius = t.radius))
				}
			}
			class J extends c.L8z {
				constructor(t) {
					super(t)
				}
				clear() {}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.connect;
					e && (t.retina.connectModeDistance = e.distance * t.retina.pixelRatio, t.retina.connectModeRadius = e.radius * t.retina.pixelRatio)
				}
				interact() {
					let t = this.container;
					if (t.actualOptions.interactivity.events.onHover.enable && "pointermove" === t.interactivity.status) {
						let e = t.interactivity.mouse.position,
							{
								connectModeDistance: i,
								connectModeRadius: s
							} = t.retina;
						if (!i || i < 0 || !s || s < 0 || !e) return;
						let n = t.particles.quadTree.queryCircle(e, Math.abs(s), t => this.isEnabled(t));
						n.forEach((e, s) => {
							let a = e.getPosition();
							for (let o of n.slice(s + 1)) {
								let s = o.getPosition(),
									n = Math.abs(i),
									r = Math.abs(a.x - s.x),
									l = Math.abs(a.y - s.y);
								r < n && l < n && function(t, e, i) {
									t.canvas.draw(s => {
										var n;
										let a = function(t, e, i, s) {
											let n = t.actualOptions.interactivity.modes.connect;
											if (n) return function(t, e, i, s) {
												let n = Math.floor(i.getRadius() / e.getRadius()),
													a = e.getFillColor(),
													o = i.getFillColor();
												if (!a || !o) return;
												let r = e.getPosition(),
													l = i.getPosition(),
													h = (0, c.ocL)(a, o, e.getRadius(), i.getRadius()),
													d = t.createLinearGradient(r.x, r.y, l.x, l.y);
												return d.addColorStop(0, (0, c.vzQ)(a, s)), d.addColorStop((0, c.uZ5)(n, 0, 1), (0, c.izR)(h, s)), d.addColorStop(1, (0, c.vzQ)(o, s)), d
											}(e, i, s, n.links.opacity)
										}(t, s, e, i);
										if (!a) return;
										let o = e.getPosition(),
											r = i.getPosition();
										n = e.retina.linksWidth ?? 0, (0, c.pSR)(s, o, r), s.lineWidth = n, s.strokeStyle = a, s.stroke()
									})
								}(t, e, o)
							}
						})
					}
				}
				isEnabled(t) {
					let e = this.container,
						i = e.interactivity.mouse,
						s = (t?.interactivity ?? e.actualOptions.interactivity).events;
					return !!s.onHover.enable && !!i.position && (0, c.dBL)("connect", s.onHover.mode)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.connect || (t.connect = new Q), e)) t.connect.load(i?.connect)
				}
				reset() {}
			}
			async function tt(t, e = !0) {
				await t.addInteractor("externalConnect", t => Promise.resolve(new J(t)), e)
			}
			class te {
				constructor() {
					this.blink = !1, this.consent = !1, this.opacity = 1
				}
				load(t) {
					t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = c.OzF.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
				}
			}
			class ti {
				constructor() {
					this.distance = 100, this.links = new te
				}
				load(t) {
					t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(t.links))
				}
			}
			class ts extends c.L8z {
				constructor(t) {
					super(t)
				}
				clear() {}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.grab;
					e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio)
				}
				interact() {
					let t = this.container,
						e = t.actualOptions.interactivity;
					if (!e.modes.grab || !e.events.onHover.enable || t.interactivity.status !== c.WtO) return;
					let i = t.interactivity.mouse.position;
					if (!i) return;
					let s = t.retina.grabModeDistance;
					if (s && !(s < 0))
						for (let n of t.particles.quadTree.queryCircle(i, s, t => this.isEnabled(t))) {
							let a = n.getPosition(),
								o = (0, c.Spd)(a, i);
							if (o > s) continue;
							let r = e.modes.grab.links,
								l = r.opacity,
								h = l - o * l / s;
							if (h <= 0) continue;
							let d = r.color ?? n.options.links?.color;
							if (!t.particles.grabLineColor && d) {
								let i = e.modes.grab.links;
								t.particles.grabLineColor = (0, c.Dt5)(d, i.blink, i.consent)
							}
							let u = (0, c.BEi)(n, void 0, t.particles.grabLineColor);
							u && function(t, e, i, s, n) {
								t.canvas.draw(t => {
									var a;
									let o = e.getPosition();
									a = e.retina.linksWidth ?? 0, (0, c.pSR)(t, o, n), t.strokeStyle = (0, c.izR)(i, s), t.lineWidth = a, t.stroke()
								})
							}(t, n, u, h, i)
						}
				}
				isEnabled(t) {
					let e = this.container,
						i = e.interactivity.mouse,
						s = (t?.interactivity ?? e.actualOptions.interactivity).events;
					return s.onHover.enable && !!i.position && (0, c.dBL)("grab", s.onHover.mode)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.grab || (t.grab = new ti), e)) t.grab.load(i?.grab)
				}
				reset() {}
			}
			async function tn(t, e = !0) {
				await t.addInteractor("externalGrab", t => Promise.resolve(new ts(t)), e)
			}
			class ta extends c.L8z {
				constructor(t) {
					super(t), this.handleClickMode = t => {
						if ("pause" !== t) return;
						let e = this.container;
						e.animationStatus ? e.pause() : e.play()
					}
				}
				clear() {}
				init() {}
				interact() {}
				isEnabled() {
					return !0
				}
				reset() {}
			}
			async function to(t, e = !0) {
				await t.addInteractor("externalPause", t => Promise.resolve(new ta(t)), e)
			}
			class tr {
				constructor() {
					this.default = !0, this.groups = [], this.quantity = 4
				}
				load(t) {
					if (!t) return;
					void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map(t => t)), this.groups.length || (this.default = !0);
					let e = t.quantity;
					void 0 !== e && (this.quantity = (0, c.Cst)(e))
				}
			}
			class tl extends c.L8z {
				constructor(t) {
					super(t), this.handleClickMode = t => {
						if ("push" !== t) return;
						let e = this.container,
							i = e.actualOptions.interactivity.modes.push;
						if (!i) return;
						let s = (0, c.Gu7)(i.quantity);
						if (s <= 0) return;
						let n = (0, c.c86)([void 0, ...i.groups]),
							a = void 0 !== n ? e.actualOptions.particles.groups[n] : void 0;
						e.particles.push(s, e.interactivity.mouse, a, n)
					}
				}
				clear() {}
				init() {}
				interact() {}
				isEnabled() {
					return !0
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.push || (t.push = new tr), e)) t.push.load(i?.push)
				}
				reset() {}
			}
			async function tc(t, e = !0) {
				await t.addInteractor("externalPush", t => Promise.resolve(new tl(t)), e)
			}
			class th {
				constructor() {
					this.quantity = 2
				}
				load(t) {
					if (!t) return;
					let e = t.quantity;
					void 0 !== e && (this.quantity = (0, c.Cst)(e))
				}
			}
			class td extends c.L8z {
				constructor(t) {
					super(t), this.handleClickMode = t => {
						let e = this.container,
							i = e.actualOptions;
						if (!i.interactivity.modes.remove || "remove" !== t) return;
						let s = (0, c.Gu7)(i.interactivity.modes.remove.quantity);
						e.particles.removeQuantity(s)
					}
				}
				clear() {}
				init() {}
				interact() {}
				isEnabled() {
					return !0
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.remove || (t.remove = new th), e)) t.remove.load(i?.remove)
				}
				reset() {}
			}
			async function tu(t, e = !0) {
				await t.addInteractor("externalRemove", t => Promise.resolve(new td(t)), e)
			}
			class tp {
				constructor() {
					this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = c.nxi.easeOutQuad
				}
				load(t) {
					t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
				}
			}
			class tf extends tp {
				constructor() {
					super(), this.selectors = []
				}
				load(t) {
					super.load(t), t && void 0 !== t.selectors && (this.selectors = t.selectors)
				}
			}
			class tv extends tp {
				load(t) {
					super.load(t), t && (this.divs = (0, c.KH1)(t.divs, t => {
						let e = new tf;
						return e.load(t), e
					}))
				}
			}
			let tg = "repulse";
			class tm extends c.L8z {
				constructor(t, e) {
					super(e), this._clickRepulse = () => {
						let t = this.container,
							e = t.actualOptions.interactivity.modes.repulse;
						if (!e) return;
						let i = t.repulse ?? {
							particles: []
						};
						if (i.finish || (i.count || (i.count = 0), i.count++, i.count !== t.particles.count || (i.finish = !0)), i.clicking) {
							let s = t.retina.repulseModeDistance;
							if (!s || s < 0) return;
							let n = Math.pow(s / 6, 3),
								a = t.interactivity.mouse.clickPosition;
							if (void 0 === a) return;
							let o = new c.Cdc(a.x, a.y, n);
							for (let s of t.particles.quadTree.query(o, t => this.isEnabled(t))) {
								let {
									dx: t,
									dy: o,
									distance: r
								} = (0, c.oW6)(a, s.position), l = r ** 2, h = -n * e.speed / l;
								if (l <= n) {
									i.particles.push(s);
									let e = c.OWs.create(t, o);
									e.length = h, s.velocity.setTo(e)
								}
							}
						} else if (!1 === i.clicking) {
							for (let t of i.particles) t.velocity.setTo(t.initialVelocity);
							i.particles = []
						}
					}, this._hoverRepulse = () => {
						let t = this.container,
							e = t.interactivity.mouse.position,
							i = t.retina.repulseModeDistance;
						i && !(i < 0) && e && this._processRepulse(e, i, new c.Cdc(e.x, e.y, i))
					}, this._processRepulse = (t, e, i, s) => {
						let n = this.container,
							a = n.particles.quadTree.query(i, t => this.isEnabled(t)),
							o = n.actualOptions.interactivity.modes.repulse;
						if (!o) return;
						let {
							easing: r,
							speed: l,
							factor: h,
							maxSpeed: d
						} = o, u = (0, c._Xd)(r), p = (s?.speed ?? l) * h;
						for (let i of a) {
							let {
								dx: s,
								dy: n,
								distance: a
							} = (0, c.oW6)(i.position, t), o = (0, c.uZ5)(u(1 - a / e) * p, 0, d), r = c.OWs.create(a ? s / a * o : p, a ? n / a * o : p);
							i.position.addTo(r)
						}
					}, this._singleSelectorRepulse = (t, e) => {
						let i = this.container,
							s = i.actualOptions.interactivity.modes.repulse;
						if (!s) return;
						let n = document.querySelectorAll(t);
						n.length && n.forEach(t => {
							let n = i.retina.pixelRatio,
								a = {
									x: (t.offsetLeft + .5 * t.offsetWidth) * n,
									y: (t.offsetTop + .5 * t.offsetHeight) * n
								},
								o = .5 * t.offsetWidth * n,
								r = e.type === c.gqJ.circle ? new c.Cdc(a.x, a.y, o) : new c.AeJ(t.offsetLeft * n, t.offsetTop * n, t.offsetWidth * n, t.offsetHeight * n),
								l = s.divs,
								h = (0, c.iCg)(l, t);
							this._processRepulse(a, o, r, h)
						})
					}, this._engine = t, e.repulse || (e.repulse = {
						particles: []
					}), this.handleClickMode = t => {
						let i = this.container.actualOptions.interactivity.modes.repulse;
						if (!i || t !== tg) return;
						e.repulse || (e.repulse = {
							particles: []
						});
						let s = e.repulse;
						for (let t of (s.clicking = !0, s.count = 0, e.repulse.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
						s.particles = [], s.finish = !1, setTimeout(() => {
							e.destroyed || (s.clicking = !1)
						}, i.duration * c.X5o)
					}
				}
				clear() {}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.repulse;
					e && (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio)
				}
				interact() {
					let t = this.container,
						e = t.actualOptions,
						i = t.interactivity.status === c.WtO,
						s = e.interactivity.events,
						n = s.onHover,
						a = n.enable,
						o = n.mode,
						r = s.onClick,
						l = r.enable,
						h = r.mode,
						d = s.onDiv;
					i && a && (0, c.dBL)(tg, o) ? this._hoverRepulse() : l && (0, c.dBL)(tg, h) ? this._clickRepulse() : (0, c.XDe)(tg, d, (t, e) => this._singleSelectorRepulse(t, e))
				}
				isEnabled(t) {
					let e = this.container,
						i = e.actualOptions,
						s = e.interactivity.mouse,
						n = (t?.interactivity ?? i.interactivity).events,
						a = n.onDiv,
						o = n.onHover,
						r = n.onClick,
						l = (0, c.wm$)(tg, a);
					if (!(l || o.enable && s.position || r.enable && s.clickPosition)) return !1;
					let h = o.mode,
						d = r.mode;
					return (0, c.dBL)(tg, h) || (0, c.dBL)(tg, d) || l
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.repulse || (t.repulse = new tv), e)) t.repulse.load(i?.repulse)
				}
				reset() {}
			}
			async function ty(t, e = !0) {
				await t.addInteractor("externalRepulse", e => Promise.resolve(new tm(t, e)), e)
			}
			class tb {
				constructor() {
					this.factor = 3, this.radius = 200
				}
				load(t) {
					t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
				}
			}
			class tw extends c.L8z {
				constructor(t) {
					super(t)
				}
				clear(t, e, i) {
					(!t.slow.inRange || i) && (t.slow.factor = 1)
				}
				init() {
					let t = this.container,
						e = t.actualOptions.interactivity.modes.slow;
					e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio)
				}
				interact() {}
				isEnabled(t) {
					let e = this.container,
						i = e.interactivity.mouse,
						s = (t?.interactivity ?? e.actualOptions.interactivity).events;
					return s.onHover.enable && !!i.position && (0, c.dBL)("slow", s.onHover.mode)
				}
				loadModeOptions(t, ...e) {
					for (let i of (t.slow || (t.slow = new tb), e)) t.slow.load(i?.slow)
				}
				reset(t) {
					t.slow.inRange = !1;
					let e = this.container,
						i = e.actualOptions,
						s = e.interactivity.mouse.position,
						n = e.retina.slowModeRadius,
						a = i.interactivity.modes.slow;
					if (!a || !n || n < 0 || !s) return;
					let o = t.getPosition(),
						r = (0, c.Spd)(s, o),
						l = a.factor,
						{
							slow: h
						} = t;
					r > n || (h.inRange = !0, h.factor = r / n / l)
				}
			}
			async function tx(t, e = !0) {
				await t.addInteractor("externalSlow", t => Promise.resolve(new tw(t)), e)
			}
			let t_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
			async function tk(t) {
				return new Promise(e => {
					t.loading = !0;
					let i = new Image;
					t.element = i, i.addEventListener("load", () => {
						t.loading = !1, e()
					}), i.addEventListener("error", () => {
						t.element = void 0, t.error = !0, t.loading = !1, (0, c.jl5)().error(`${c.gK4} loading image: ${t.source}`), e()
					}), i.src = t.source
				})
			}
			async function tC(t) {
				if ("svg" !== t.type) {
					await tk(t);
					return
				}
				t.loading = !0;
				let e = await fetch(t.source);
				e.ok ? t.svgData = await e.text() : ((0, c.jl5)().error(`${c.gK4} Image not found`), t.error = !0), t.loading = !1
			}
			let tz = [0, 4, 2, 1],
				tM = [8, 8, 4, 2];
			class tO {
				constructor(t) {
					this.pos = 0, this.data = new Uint8ClampedArray(t)
				}
				getString(t) {
					let e = this.data.slice(this.pos, this.pos + t);
					return this.pos += e.length, e.reduce((t, e) => t + String.fromCharCode(e), "")
				}
				nextByte() {
					return this.data[this.pos++]
				}
				nextTwoBytes() {
					return this.pos += 2, this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
				}
				readSubBlocks() {
					let t = "",
						e = 0;
					do {
						e = this.data[this.pos++];
						for (let i = e; --i >= 0; t += String.fromCharCode(this.data[this.pos++]));
					} while (0 !== e);
					return t
				}
				readSubBlocksBin() {
					let t = this.data[this.pos],
						e = 0;
					for (let i = 0; 0 !== t; i += t + 1, t = this.data[this.pos + i]) e += t;
					let i = new Uint8Array(e);
					t = this.data[this.pos++];
					for (let e = 0; 0 !== t; t = this.data[this.pos++])
						for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
					return i
				}
				skipSubBlocks() {
					for (; 0 !== this.data[this.pos]; this.pos += this.data[this.pos] + 1);
					this.pos++
				}
			}(n = r || (r = {}))[n.Replace = 0] = "Replace", n[n.Combine = 1] = "Combine", n[n.RestoreBackground = 2] = "RestoreBackground", n[n.RestorePrevious = 3] = "RestorePrevious", n[n.UndefinedA = 4] = "UndefinedA", n[n.UndefinedB = 5] = "UndefinedB", n[n.UndefinedC = 6] = "UndefinedC", n[n.UndefinedD = 7] = "UndefinedD", (a = l || (l = {}))[a.Extension = 33] = "Extension", a[a.ApplicationExtension = 255] = "ApplicationExtension", a[a.GraphicsControlExtension = 249] = "GraphicsControlExtension", a[a.PlainTextExtension = 1] = "PlainTextExtension", a[a.CommentExtension = 254] = "CommentExtension", a[a.Image = 44] = "Image", a[a.EndOfFile = 59] = "EndOfFile";
			let tS = {
				x: 0,
				y: 0
			};

			function tP(t, e) {
				let i = [];
				for (let s = 0; s < e; s++) i.push({
					r: t.data[t.pos],
					g: t.data[t.pos + 1],
					b: t.data[t.pos + 2]
				}), t.pos += 3;
				return i
			}
			async function tT(t, e, i, s, n, a) {
				let o = e.frames[s(!0)];
				o.left = t.nextTwoBytes(), o.top = t.nextTwoBytes(), o.width = t.nextTwoBytes(), o.height = t.nextTwoBytes();
				let r = t.nextByte(),
					l = (128 & r) == 128;
				o.sortFlag = (32 & r) == 32, o.reserved = (24 & r) >>> 3, l && (o.localColorTable = tP(t, 1 << (7 & r) + 1));
				let c = t => {
						let {
							r: s,
							g: a,
							b: r
						} = (l ? o.localColorTable : e.globalColorTable)[t];
						return t !== n(null) ? {
							r: s,
							g: a,
							b: r,
							a: 255
						} : {
							r: s,
							g: a,
							b: r,
							a: i ? ~~((s + a + r) / 3) : 0
						}
					},
					h = (() => {
						try {
							return new ImageData(o.width, o.height, {
								colorSpace: "srgb"
							})
						} catch (t) {
							if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
							throw t
						}
					})();
				if (null == h) throw EvalError("GIF frame size is to large");
				let d = t.nextByte(),
					u = t.readSubBlocksBin(),
					p = 1 << d,
					f = (t, e) => {
						let i = t >>> 3,
							s = 7 & t;
						return (u[i] + (u[i + 1] << 8) + (u[i + 2] << 16) & (1 << e) - 1 << s) >>> s
					};
				if ((64 & r) == 64) {
					for (let i = 0, n = d + 1, r = 0, l = [
							[0]
						], u = 0; u < 4; u++) {
						if (tz[u] < o.height) {
							let t = 0,
								e = 0,
								s = !1;
							for (; !s;) {
								let a = i;
								if (i = f(r, n), r += n + 1, i === p) {
									n = d + 1, l.length = p + 2;
									for (let t = 0; t < l.length; t++) l[t] = t < p ? [t] : []
								} else {
									for (let s of (i >= l.length ? l.push(l[a].concat(l[a][0])) : a !== p && l.push(l[a].concat(l[i][0])), l[i])) {
										let {
											r: i,
											g: n,
											b: a,
											a: r
										} = c(s);
										h.data.set([i, n, a, r], tz[u] * o.width + tM[u] * e + t % (4 * o.width)), t += 4
									}
									l.length === 1 << n && n < 12 && n++
								}
								t === 4 * o.width * (e + 1) && (e++, tz[u] + tM[u] * e >= o.height && (s = !0))
							}
						}
						a?.(t.pos / (t.data.length - 1), s(!1) + 1, h, {
							x: o.left,
							y: o.top
						}, {
							width: e.width,
							height: e.height
						})
					}
					o.image = h, o.bitmap = await createImageBitmap(h)
				} else {
					let i = 0,
						n = d + 1,
						r = 0,
						l = -4,
						u = !1,
						v = [
							[0]
						];
					for (; !u;) {
						let t = i;
						if (i = f(r, n), r += n, i === p) {
							n = d + 1, v.length = p + 2;
							for (let t = 0; t < v.length; t++) v[t] = t < p ? [t] : []
						} else {
							if (i === p + 1) {
								u = !0;
								break
							}
							for (let e of (i >= v.length ? v.push(v[t].concat(v[t][0])) : t !== p && v.push(v[t].concat(v[i][0])), v[i])) {
								let {
									r: t,
									g: i,
									b: s,
									a: n
								} = c(e);
								h.data.set([t, i, s, n], l += 4)
							}
							v.length >= 1 << n && n < 12 && n++
						}
					}
					o.image = h, o.bitmap = await createImageBitmap(h), a?.((t.pos + 1) / t.data.length, s(!1) + 1, o.image, {
						x: o.left,
						y: o.top
					}, {
						width: e.width,
						height: e.height
					})
				}
			}
			async function tR(t, e, i, s, n, a) {
				switch (t.nextByte()) {
					case l.EndOfFile:
						return !0;
					case l.Image:
						await tT(t, e, i, s, n, a);
						break;
					case l.Extension:
						! function(t, e, i, s) {
							switch (t.nextByte()) {
								case l.GraphicsControlExtension: {
									let n = e.frames[i(!1)];
									t.pos++;
									let a = t.nextByte();
									n.GCreserved = (224 & a) >>> 5, n.disposalMethod = (28 & a) >>> 2, n.userInputDelayFlag = (2 & a) == 2, n.delayTime = 10 * t.nextTwoBytes();
									let o = t.nextByte();
									(1 & a) == 1 && s(o), t.pos++;
									break
								}
								case l.ApplicationExtension: {
									t.pos++;
									let i = {
										identifier: t.getString(8),
										authenticationCode: t.getString(3),
										data: t.readSubBlocksBin()
									};
									e.applicationExtensions.push(i);
									break
								}
								case l.CommentExtension:
									e.comments.push([i(!1), t.readSubBlocks()]);
									break;
								case l.PlainTextExtension:
									if (0 === e.globalColorTable.length) throw EvalError("plain text extension without global color table");
									t.pos++, e.frames[i(!1)].plainTextData = {
										left: t.nextTwoBytes(),
										top: t.nextTwoBytes(),
										width: t.nextTwoBytes(),
										height: t.nextTwoBytes(),
										charSize: {
											width: t.nextTwoBytes(),
											height: t.nextTwoBytes()
										},
										foregroundColor: t.nextByte(),
										backgroundColor: t.nextByte(),
										text: t.readSubBlocks()
									};
									break;
								default:
									t.skipSubBlocks()
							}
						}(t, e, s, n);
						break;
					default:
						throw EvalError("undefined block found")
				}
				return !1
			}
			async function tD(t, e, i) {
				i || (i = !1);
				let s = await fetch(t);
				if (!s.ok && 404 === s.status) throw EvalError("file not found");
				let n = await s.arrayBuffer(),
					a = {
						width: 0,
						height: 0,
						totalTime: 0,
						colorRes: 0,
						pixelAspectRatio: 0,
						frames: [],
						sortFlag: !1,
						globalColorTable: [],
						backgroundImage: new ImageData(1, 1, {
							colorSpace: "srgb"
						}),
						comments: [],
						applicationExtensions: []
					},
					o = new tO(new Uint8ClampedArray(n));
				if ("GIF89a" !== o.getString(6)) throw Error("not a supported GIF file");
				a.width = o.nextTwoBytes(), a.height = o.nextTwoBytes();
				let l = o.nextByte(),
					c = (128 & l) == 128;
				a.colorRes = (112 & l) >>> 4, a.sortFlag = (8 & l) == 8;
				let h = o.nextByte();
				a.pixelAspectRatio = o.nextByte(), 0 !== a.pixelAspectRatio && (a.pixelAspectRatio = (a.pixelAspectRatio + 15) / 64), c && (a.globalColorTable = tP(o, 1 << (7 & l) + 1));
				let d = (() => {
					try {
						return new ImageData(a.width, a.height, {
							colorSpace: "srgb"
						})
					} catch (t) {
						if (t instanceof DOMException && "IndexSizeError" === t.name) return null;
						throw t
					}
				})();
				if (null == d) throw Error("GIF frame size is to large");
				let {
					r: u,
					g: p,
					b: f
				} = a.globalColorTable[h];
				d.data.set(c ? [u, p, f, 255] : [0, 0, 0, 0]);
				for (let t = 4; t < d.data.length; t *= 2) d.data.copyWithin(t, 0, t);
				a.backgroundImage = d;
				let v = -1,
					g = !0,
					m = -1,
					y = t => (t && (g = !0), v),
					b = t => (null != t && (m = t), m);
				try {
					do g && (a.frames.push({
						left: 0,
						top: 0,
						width: 0,
						height: 0,
						disposalMethod: r.Replace,
						image: new ImageData(1, 1, {
							colorSpace: "srgb"
						}),
						plainTextData: null,
						userInputDelayFlag: !1,
						delayTime: 0,
						sortFlag: !1,
						localColorTable: [],
						reserved: 0,
						GCreserved: 0
					}), v++, m = -1, g = !1); while (!await tR(o, a, i, y, b, e));
					for (let t of (a.frames.length--, a.frames)) {
						if (t.userInputDelayFlag && 0 === t.delayTime) {
							a.totalTime = 1 / 0;
							break
						}
						a.totalTime += t.delayTime
					}
					return a
				} catch (t) {
					if (t instanceof EvalError) throw Error(`error while parsing frame ${v} "${t.message}"`);
					throw t
				}
			}
			async function tE(t) {
				if ("gif" !== t.type) {
					await tk(t);
					return
				}
				t.loading = !0;
				try {
					t.gifData = await tD(t.source), t.gifLoopCount = function(t) {
						for (let e of t.applicationExtensions)
							if (e.identifier + e.authenticationCode === "NETSCAPE2.0") return e.data[1] + (e.data[2] << 8);
						return NaN
					}(t.gifData) ?? 0, t.gifLoopCount || (t.gifLoopCount = 1 / 0)
				} catch {
					t.error = !0
				}
				t.loading = !1
			}
			class tI {
				constructor(t) {
					this.validTypes = ["image", "images"], this.loadImageShape = async t => {
						if (!this._engine.loadImage) throw Error(`${c.gK4} image shape not initialized`);
						await this._engine.loadImage({
							gif: t.gif,
							name: t.name,
							replaceColor: t.replaceColor ?? !1,
							src: t.src
						})
					}, this._engine = t
				}
				addImage(t) {
					this._engine.images || (this._engine.images = []), this._engine.images.push(t)
				}
				draw(t) {
					let {
						context: e,
						radius: i,
						particle: s,
						opacity: n
					} = t, a = s.image, o = a?.element;
					if (a) {
						if (e.globalAlpha = n, a.gif && a.gifData) ! function(t) {
							let {
								context: e,
								radius: i,
								particle: s,
								delta: n
							} = t, a = s.image;
							if (!a?.gifData || !a.gif) return;
							let o = new OffscreenCanvas(a.gifData.width, a.gifData.height),
								l = o.getContext("2d");
							if (!l) throw Error("could not create offscreen canvas context");
							l.imageSmoothingQuality = "low", l.imageSmoothingEnabled = !1, l.clearRect(tS.x, tS.y, o.width, o.height), void 0 === s.gifLoopCount && (s.gifLoopCount = a.gifLoopCount ?? 0);
							let c = s.gifFrame ?? 0,
								h = {
									x: -(.5 * a.gifData.width),
									y: -(.5 * a.gifData.height)
								},
								d = a.gifData.frames[c];
							if (void 0 === s.gifTime && (s.gifTime = 0), d.bitmap) {
								switch (e.scale(i / a.gifData.width, i / a.gifData.height), d.disposalMethod) {
									case r.UndefinedA:
									case r.UndefinedB:
									case r.UndefinedC:
									case r.UndefinedD:
									case r.Replace:
										l.drawImage(d.bitmap, d.left, d.top), e.drawImage(o, h.x, h.y), l.clearRect(tS.x, tS.y, o.width, o.height);
										break;
									case r.Combine:
										l.drawImage(d.bitmap, d.left, d.top), e.drawImage(o, h.x, h.y);
										break;
									case r.RestoreBackground:
										l.drawImage(d.bitmap, d.left, d.top), e.drawImage(o, h.x, h.y), l.clearRect(tS.x, tS.y, o.width, o.height), a.gifData.globalColorTable.length ? l.putImageData(a.gifData.backgroundImage, h.x, h.y) : l.putImageData(a.gifData.frames[0].image, h.x + d.left, h.y + d.top);
										break;
									case r.RestorePrevious: {
										let t = l.getImageData(tS.x, tS.y, o.width, o.height);
										l.drawImage(d.bitmap, d.left, d.top), e.drawImage(o, h.x, h.y), l.clearRect(tS.x, tS.y, o.width, o.height), l.putImageData(t, tS.x, tS.y)
									}
								}
								if (s.gifTime += n.value, s.gifTime > d.delayTime) {
									if (s.gifTime -= d.delayTime, ++c >= a.gifData.frames.length) {
										if (--s.gifLoopCount <= 0) return;
										c = 0, l.clearRect(tS.x, tS.y, o.width, o.height)
									}
									s.gifFrame = c
								}
								e.scale(a.gifData.width / i, a.gifData.height / i)
							}
						}(t);
						else if (o) {
							let t = a.ratio,
								s = {
									x: -i,
									y: -i
								},
								n = 2 * i;
							e.drawImage(o, s.x, s.y, n, n / t)
						}
						e.globalAlpha = 1
					}
				}
				getSidesCount() {
					return 12
				}
				async init(t) {
					let e = t.actualOptions;
					if (e.preload && this._engine.loadImage)
						for (let t of e.preload) await this._engine.loadImage(t)
				}
				loadShape(t) {
					if ("image" !== t.shape && "images" !== t.shape) return;
					this._engine.images || (this._engine.images = []);
					let e = t.shapeData;
					e && (this._engine.images.find(t => t.name === e.name || t.source === e.src) || this.loadImageShape(e).then(() => {
						this.loadShape(t)
					}))
				}
				particleInit(t, e) {
					if ("image" !== e.shape && "images" !== e.shape) return;
					this._engine.images || (this._engine.images = []);
					let i = this._engine.images,
						s = e.shapeData;
					if (!s) return;
					let n = e.getFillColor(),
						a = i.find(t => t.name === s.name || t.source === s.src);
					if (!a) return;
					let o = s.replaceColor ?? a.replaceColor;
					if (a.loading) {
						setTimeout(() => {
							this.particleInit(t, e)
						});
						return
					}(async () => {
						let t;
						(t = a.svgData && n ? await
							function(t, e, i, s) {
								let n = function(t, e, i) {
										let {
											svgData: s
										} = t;
										if (!s) return "";
										let n = (0, c.vzQ)(e, i);
										if (s.includes("fill")) return s.replace(t_, () => n);
										let a = s.indexOf(">");
										return `${s.substring(0, a)} fill="${n}"${s.substring(a)}`
									}(t, i, s.opacity?.value ?? 1),
									a = {
										color: i,
										gif: e.gif,
										data: {
											...t,
											svgData: n
										},
										loaded: !1,
										ratio: e.width / e.height,
										replaceColor: e.replaceColor,
										source: e.src
									};
								return new Promise(e => {
									let i = new Blob([n], {
											type: "image/svg+xml"
										}),
										s = URL || window.URL || window.webkitURL || window,
										o = s.createObjectURL(i),
										r = new Image;
									r.addEventListener("load", () => {
										a.loaded = !0, a.element = r, e(a), s.revokeObjectURL(o)
									});
									let l = async () => {
										s.revokeObjectURL(o);
										let i = {
											...t,
											error: !1,
											loading: !0
										};
										await tk(i), a.loaded = !0, a.element = i.element, e(a)
									};
									r.addEventListener("error", () => void l()), r.src = o
								})
							}(a, s, n, e) : {
								color: n,
								data: a,
								element: a.element,
								gif: a.gif,
								gifData: a.gifData,
								gifLoopCount: a.gifLoopCount,
								loaded: !0,
								ratio: s.width && s.height ? s.width / s.height : a.ratio ?? 1,
								replaceColor: o,
								source: s.src
							}).ratio || (t.ratio = 1);
						let i = s.fill ?? e.shapeFill,
							r = s.close ?? e.shapeClose;
						e.image = t, e.shapeFill = i, e.shapeClose = r
					})()
				}
			}
			class tL {
				constructor() {
					this.src = "", this.gif = !1
				}
				load(t) {
					t && (void 0 !== t.gif && (this.gif = t.gif), void 0 !== t.height && (this.height = t.height), void 0 !== t.name && (this.name = t.name), void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor), void 0 !== t.src && (this.src = t.src), void 0 !== t.width && (this.width = t.width))
				}
			}
			class tF {
				constructor(t) {
					this.id = "imagePreloader", this._engine = t
				}
				async getPlugin() {
					return await Promise.resolve(), {}
				}
				loadOptions(t, e) {
					if (!e?.preload) return;
					t.preload || (t.preload = []);
					let i = t.preload;
					for (let t of e.preload) {
						let e = i.find(e => e.name === t.name || e.src === t.src);
						if (e) e.load(t);
						else {
							let e = new tL;
							e.load(t), i.push(e)
						}
					}
				}
				needsPlugin() {
					return !0
				}
			}
			async function tA(t, e = !0) {
				t.loadImage || (t.loadImage = async e => {
					if (!e.name && !e.src) throw Error(`${c.gK4} no image source provided`);
					if (t.images || (t.images = []), !t.images.find(t => t.name === e.name || t.source === e.src)) try {
						let i;
						let s = {
							gif: e.gif ?? !1,
							name: e.name ?? e.src,
							source: e.src,
							type: e.src.substring(e.src.length - 3),
							error: !1,
							loading: !0,
							replaceColor: e.replaceColor,
							ratio: e.width && e.height ? e.width / e.height : void 0
						};
						t.images.push(s), i = e.gif ? tE : e.replaceColor ? tC : tk, await i(s)
					} catch {
						throw Error(`${c.gK4} ${e.name ?? e.src} not found`)
					}
				});
				let i = new tF(t);
				await t.addPlugin(i, e), await t.addShape(new tI(t), e)
			}
			class tB extends c.SWe {
				constructor() {
					super(), this.sync = !1
				}
				load(t) {
					t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
				}
			}
			class tq extends c.SWe {
				constructor() {
					super(), this.sync = !1
				}
				load(t) {
					t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
				}
			}
			class tW {
				constructor() {
					this.count = 0, this.delay = new tB, this.duration = new tq
				}
				load(t) {
					t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
				}
			}
			class tH {
				constructor(t) {
					this.container = t
				}
				init(t) {
					let e = this.container,
						i = t.options.life;
					i && (t.life = {
						delay: e.retina.reduceFactor ? (0, c.Gu7)(i.delay.value) * (i.delay.sync ? 1 : (0, c.sZz)()) / e.retina.reduceFactor * c.X5o : 0,
						delayTime: 0,
						duration: e.retina.reduceFactor ? (0, c.Gu7)(i.duration.value) * (i.duration.sync ? 1 : (0, c.sZz)()) / e.retina.reduceFactor * c.X5o : 0,
						time: 0,
						count: i.count
					}, t.life.duration <= 0 && (t.life.duration = -1), t.life.count <= 0 && (t.life.count = -1), t.life && (t.spawning = t.life.delay > 0))
				}
				isEnabled(t) {
					return !t.destroyed
				}
				loadOptions(t, ...e) {
					for (let i of (t.life || (t.life = new tW), e)) t.life.load(i?.life)
				}
				update(t, e) {
					this.isEnabled(t) && t.life && function(t, e, i) {
						if (!t.life) return;
						let s = t.life,
							n = !1;
						if (t.spawning) {
							if (s.delayTime += e.value, !(s.delayTime >= t.life.delay)) return;
							n = !0, t.spawning = !1, s.delayTime = 0, s.time = 0
						}
						if (-1 === s.duration || t.spawning || (n ? s.time = 0 : s.time += e.value, s.time < s.duration)) return;
						if (s.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) {
							t.destroy();
							return
						}
						let a = (0, c.Cst)(0, i.width),
							o = (0, c.Cst)(0, i.width);
						t.position.x = (0, c.vdf)(a), t.position.y = (0, c.vdf)(o), t.spawning = !0, s.delayTime = 0, s.time = 0, t.reset();
						let r = t.options.life;
						r && (s.delay = (0, c.Gu7)(r.delay.value) * c.X5o, s.duration = (0, c.Gu7)(r.duration.value) * c.X5o)
					}(t, e, this.container.canvas.size)
				}
			}
			async function tV(t, e = !0) {
				await t.addParticleUpdater("life", async t => Promise.resolve(new tH(t)), e)
			}
			class tU {
				constructor() {
					this.validTypes = ["line"]
				}
				draw(t) {
					! function(t) {
						let {
							context: e,
							particle: i,
							radius: s
						} = t, n = i.shapeData;
						e.moveTo(-s, 0), e.lineTo(s, 0), e.lineCap = n?.cap ?? "butt"
					}(t)
				}
				getSidesCount() {
					return 1
				}
			}
			async function tj(t, e = !0) {
				await t.addShape(new tU, e)
			}
			class tG {
				init() {}
				isEnabled(t) {
					return !(0, c.KrJ)() && !t.destroyed && t.container.actualOptions.interactivity.events.onHover.parallax.enable
				}
				move(t) {
					let e = t.container,
						i = e.actualOptions.interactivity.events.onHover.parallax;
					if ((0, c.KrJ)() || !i.enable) return;
					let s = i.force,
						n = e.interactivity.mouse.position;
					if (!n) return;
					let a = e.canvas.size,
						o = {
							x: .5 * a.width,
							y: .5 * a.height
						},
						r = i.smooth,
						l = t.getRadius() / s,
						h = {
							x: (n.x - o.x) * l,
							y: (n.y - o.y) * l
						},
						{
							offset: d
						} = t;
					d.x += (h.x - d.x) / r, d.y += (h.y - d.y) / r
				}
			}
			async function t$(t, e = !0) {
				await t.addMover("parallax", () => Promise.resolve(new tG), e)
			}
			class tN extends c.$Sh {
				constructor(t) {
					super(t)
				}
				clear() {}
				init() {}
				interact(t) {
					let e = this.container;
					void 0 === t.attractDistance && (t.attractDistance = (0, c.Gu7)(t.options.move.attract.distance) * e.retina.pixelRatio);
					let i = t.attractDistance,
						s = t.getPosition();
					for (let n of e.particles.quadTree.queryCircle(s, i)) {
						if (t === n || !n.options.move.attract.enable || n.destroyed || n.spawning) continue;
						let e = n.getPosition(),
							{
								dx: i,
								dy: a
							} = (0, c.oW6)(s, e),
							o = t.options.move.attract.rotate,
							r = i / (1e3 * o.x),
							l = a / (1e3 * o.y),
							h = n.size.value / t.size.value,
							d = 1 / h;
						t.velocity.x -= r * h, t.velocity.y -= l * h, n.velocity.x += r * d, n.velocity.y += l * d
					}
				}
				isEnabled(t) {
					return t.options.move.attract.enable
				}
				reset() {}
			}
			async function tY(t, e = !0) {
				await t.addInteractor("particlesAttract", t => Promise.resolve(new tN(t)), e)
			}

			function tZ(t, e, i, s, n, a) {
				let o = (0, c.uZ5)(t.options.collisions.absorb.speed * n.factor / 10, 0, s);
				t.size.value += .5 * o, i.size.value -= o, s <= a && (i.size.value = 0, i.destroy())
			}
			let tX = t => {
				void 0 === t.collisionMaxSpeed && (t.collisionMaxSpeed = (0, c.Gu7)(t.options.collisions.maxSpeed)), t.velocity.length > t.collisionMaxSpeed && (t.velocity.length = t.collisionMaxSpeed)
			};

			function tK(t, e) {
				(0, c.kRC)((0, c.gy4)(t), (0, c.gy4)(e)), tX(t), tX(e)
			}
			class tQ extends c.$Sh {
				constructor(t) {
					super(t)
				}
				clear() {}
				init() {}
				interact(t, e) {
					if (t.destroyed || t.spawning) return;
					let i = this.container,
						s = t.getPosition(),
						n = t.getRadius();
					for (let a of i.particles.quadTree.queryCircle(s, 2 * n)) {
						if (t === a || !a.options.collisions.enable || t.options.collisions.mode !== a.options.collisions.mode || a.destroyed || a.spawning) continue;
						let o = a.getPosition(),
							r = a.getRadius();
						!(Math.abs(Math.round(s.z) - Math.round(o.z)) > n + r) && ((0, c.Spd)(s, o) > n + r || function(t, e, i, s) {
							switch (t.options.collisions.mode) {
								case c.Dpx.absorb:
									! function(t, e, i, s) {
										let n = t.getRadius(),
											a = e.getRadius();
										void 0 === n && void 0 !== a ? t.destroy() : void 0 !== n && void 0 === a ? e.destroy() : void 0 !== n && void 0 !== a && (n >= a ? tZ(t, n, e, a, i, s) : tZ(e, a, t, n, i, s))
									}(t, e, i, s);
									break;
								case c.Dpx.bounce:
									tK(t, e);
									break;
								case c.Dpx.destroy:
									t.unbreakable || e.unbreakable || tK(t, e), void 0 === t.getRadius() && void 0 !== e.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === e.getRadius() ? e.destroy() : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? e : t).destroy()
							}
						}(t, a, e, i.retina.pixelRatio))
					}
				}
				isEnabled(t) {
					return t.options.collisions.enable
				}
				reset() {}
			}
			async function tJ(t, e = !0) {
				await t.addInteractor("particlesCollisions", t => Promise.resolve(new tQ(t)), e)
			}
			class t0 extends c.Cdc {
				constructor(t, e, i, s) {
					super(t, e, i), this.canvasSize = s, this.canvasSize = {
						...s
					}
				}
				contains(t) {
					let {
						width: e,
						height: i
					} = this.canvasSize, {
						x: s,
						y: n
					} = t;
					return super.contains(t) || super.contains({
						x: s - e,
						y: n
					}) || super.contains({
						x: s - e,
						y: n - i
					}) || super.contains({
						x: s,
						y: n - i
					})
				}
				intersects(t) {
					if (super.intersects(t)) return !0;
					let e = {
						x: t.position.x - this.canvasSize.width,
						y: t.position.y - this.canvasSize.height
					};
					if (void 0 !== t.radius) {
						let i = new c.Cdc(e.x, e.y, 2 * t.radius);
						return super.intersects(i)
					}
					if (void 0 !== t.size) {
						let i = new c.AeJ(e.x, e.y, 2 * t.size.width, 2 * t.size.height);
						return super.intersects(i)
					}
					return !1
				}
			}
			class t1 {
				constructor() {
					this.blur = 5, this.color = new c.OzF, this.color.value = "#000", this.enable = !1
				}
				load(t) {
					t && (void 0 !== t.blur && (this.blur = t.blur), this.color = c.OzF.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
				}
			}
			class t2 {
				constructor() {
					this.enable = !1, this.frequency = 1
				}
				load(t) {
					t && (void 0 !== t.color && (this.color = c.OzF.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
				}
			}
			class t5 {
				constructor() {
					this.blink = !1, this.color = new c.OzF, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new t1, this.triangles = new t2, this.width = 1, this.warp = !1
				}
				load(t) {
					t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = c.OzF.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
				}
			}
			let t3 = {
				x: 0,
				y: 0
			};
			class t6 extends c.$Sh {
				constructor(t) {
					super(t), this._setColor = t => {
						if (!t.options.links) return;
						let e = this.linkContainer,
							i = t.options.links,
							s = void 0 === i.id ? e.particles.linksColor : e.particles.linksColors.get(i.id);
						if (s) return;
						let n = i.color;
						s = (0, c.Dt5)(n, i.blink, i.consent), void 0 === i.id ? e.particles.linksColor = s : e.particles.linksColors.set(i.id, s)
					}, this.linkContainer = t
				}
				clear() {}
				init() {
					this.linkContainer.particles.linksColor = void 0, this.linkContainer.particles.linksColors = new Map
				}
				interact(t) {
					let e;
					if (!t.options.links) return;
					t.links = [];
					let i = t.getPosition(),
						s = this.container,
						n = s.canvas.size;
					if (i.x < t3.x || i.y < t3.y || i.x > n.width || i.y > n.height) return;
					let a = t.options.links,
						o = a.opacity,
						r = t.retina.linksDistance ?? 0,
						l = a.warp;
					for (let h of (e = l ? new t0(i.x, i.y, r, n) : new c.Cdc(i.x, i.y, r), s.particles.quadTree.query(e))) {
						let e = h.options.links;
						if (t === h || !e?.enable || a.id !== e.id || h.spawning || h.destroyed || !h.links || t.links.some(t => t.destination === h) || h.links.some(e => e.destination === t)) continue;
						let s = h.getPosition();
						if (s.x < t3.x || s.y < t3.y || s.x > n.width || s.y > n.height) continue;
						let d = function(t, e, i, s, n) {
							let {
								dx: a,
								dy: o,
								distance: r
							} = (0, c.oW6)(t, e);
							if (!n || r <= i) return r;
							let l = {
									x: Math.abs(a),
									y: Math.abs(o)
								},
								h = {
									x: Math.min(l.x, s.width - l.x),
									y: Math.min(l.y, s.height - l.y)
								};
							return Math.sqrt(h.x ** 2 + h.y ** 2)
						}(i, s, r, n, l && e.warp);
						if (d > r) continue;
						let u = (1 - d / r) * o;
						this._setColor(t), t.links.push({
							destination: h,
							opacity: u
						})
					}
				}
				isEnabled(t) {
					return !!t.options.links?.enable
				}
				loadParticlesOptions(t, ...e) {
					for (let i of (t.links || (t.links = new t5), e)) t.links.load(i?.links)
				}
				reset() {}
			}
			async function t4(t, e = !0) {
				await t.addInteractor("particlesLinks", async t => Promise.resolve(new t6(t)), e)
			}

			function t8(t, e) {
				var i;
				let s = ((i = t.map(t => t.id)).sort((t, e) => t - e), i.join("_")),
					n = e.get(s);
				return void 0 === n && (n = (0, c.sZz)(), e.set(s, n)), n
			}
			class t7 {
				constructor(t) {
					this.container = t, this._drawLinkLine = (t, e) => {
						let i = t.options.links;
						if (!i?.enable) return;
						let s = this.container,
							n = s.actualOptions,
							a = e.destination,
							o = t.getPosition(),
							r = a.getPosition(),
							l = e.opacity;
						s.canvas.draw(e => {
							let h;
							let d = t.options.twinkle?.lines;
							if (d?.enable) {
								let t = d.frequency,
									e = (0, c.tXk)(d.color);
								(0, c.sZz)() < t && e && (h = e, l = (0, c.Gu7)(d.opacity))
							}
							if (!h) {
								let e = void 0 !== i.id ? s.particles.linksColors.get(i.id) : s.particles.linksColor;
								h = (0, c.BEi)(t, a, e)
							}
							if (!h) return;
							let u = t.retina.linksWidth ?? 0,
								p = t.retina.linksDistance ?? 0,
								{
									backgroundMask: f
								} = n;
							! function(t) {
								let e = !1,
									{
										begin: i,
										end: s,
										maxDistance: n,
										context: a,
										canvasSize: o,
										width: r,
										backgroundMask: l,
										colorLine: h,
										opacity: d,
										links: u
									} = t;
								if ((0, c.Spd)(i, s) <= n)(0, c.pSR)(a, i, s), e = !0;
								else if (u.warp) {
									let t, r;
									let l = {
											x: s.x - o.width,
											y: s.y
										},
										h = (0, c.oW6)(i, l);
									if (h.distance <= n) {
										let e = i.y - h.dy / h.dx * i.x;
										t = {
											x: 0,
											y: e
										}, r = {
											x: o.width,
											y: e
										}
									} else {
										let e = {
												x: s.x,
												y: s.y - o.height
											},
											a = (0, c.oW6)(i, e);
										if (a.distance <= n) {
											let e = -(i.y - a.dy / a.dx * i.x) / (a.dy / a.dx);
											t = {
												x: e,
												y: 0
											}, r = {
												x: e,
												y: o.height
											}
										} else {
											let e = {
													x: s.x - o.width,
													y: s.y - o.height
												},
												a = (0, c.oW6)(i, e);
											if (a.distance <= n) {
												let e = i.y - a.dy / a.dx * i.x;
												r = {
													x: (t = {
														x: -e / (a.dy / a.dx),
														y: e
													}).x + o.width,
													y: t.y + o.height
												}
											}
										}
									}
									t && r && ((0, c.pSR)(a, i, t), (0, c.pSR)(a, s, r), e = !0)
								}
								if (!e) return;
								a.lineWidth = r, l.enable && (a.globalCompositeOperation = l.composite), a.strokeStyle = (0, c.izR)(h, d);
								let {
									shadow: p
								} = u;
								if (p.enable) {
									let t = (0, c.tXk)(p.color);
									t && (a.shadowBlur = p.blur, a.shadowColor = (0, c.izR)(t))
								}
								a.stroke()
							}({
								context: e,
								width: u,
								begin: o,
								end: r,
								maxDistance: p,
								canvasSize: s.canvas.size,
								links: i,
								backgroundMask: f,
								colorLine: h,
								opacity: l
							})
						})
					}, this._drawLinkTriangle = (t, e, i) => {
						let s = t.options.links;
						if (!s?.enable) return;
						let n = s.triangles;
						if (!n.enable) return;
						let a = this.container,
							o = a.actualOptions,
							r = e.destination,
							l = i.destination,
							h = n.opacity ?? (e.opacity + i.opacity) * .5;
						h <= 0 || a.canvas.draw(e => {
							let i = t.getPosition(),
								d = r.getPosition(),
								u = l.getPosition(),
								p = t.retina.linksDistance ?? 0;
							if ((0, c.Spd)(i, d) > p || (0, c.Spd)(u, d) > p || (0, c.Spd)(u, i) > p) return;
							let f = (0, c.tXk)(n.color);
							if (!f) {
								let e = void 0 !== s.id ? a.particles.linksColors.get(s.id) : a.particles.linksColor;
								f = (0, c.BEi)(t, r, e)
							}
							f && function(t) {
								let {
									context: e,
									pos1: i,
									pos2: s,
									pos3: n,
									backgroundMask: a,
									colorTriangle: o,
									opacityTriangle: r
								} = t;
								e.beginPath(), e.moveTo(i.x, i.y), e.lineTo(s.x, s.y), e.lineTo(n.x, n.y), e.closePath(), a.enable && (e.globalCompositeOperation = a.composite), e.fillStyle = (0, c.izR)(o, r), e.fill()
							}({
								context: e,
								pos1: i,
								pos2: d,
								pos3: u,
								backgroundMask: o.backgroundMask,
								colorTriangle: f,
								opacityTriangle: h
							})
						})
					}, this._drawTriangles = (t, e, i, s) => {
						let n = i.destination;
						if (!(t.links?.triangles.enable && n.options.links?.triangles.enable)) return;
						let a = n.links?.filter(t => {
							let e = this._getLinkFrequency(n, t.destination);
							return n.options.links && e <= n.options.links.frequency && s.findIndex(e => e.destination === t.destination) >= 0
						});
						if (a?.length)
							for (let s of a) {
								let a = s.destination;
								this._getTriangleFrequency(e, n, a) > t.links.triangles.frequency || this._drawLinkTriangle(e, i, s)
							}
					}, this._getLinkFrequency = (t, e) => t8([t, e], this._freqs.links), this._getTriangleFrequency = (t, e, i) => t8([t, e, i], this._freqs.triangles), this._freqs = {
						links: new Map,
						triangles: new Map
					}
				}
				drawParticle(t, e) {
					let {
						links: i,
						options: s
					} = e;
					if (!i?.length) return;
					let n = i.filter(t => s.links && (s.links.frequency >= 1 || this._getLinkFrequency(e, t.destination) <= s.links.frequency));
					for (let t of n) this._drawTriangles(s, e, t, n), t.opacity > 0 && (e.retina.linksWidth ?? 0) > 0 && this._drawLinkLine(e, t)
				}
				async init() {
					this._freqs.links = new Map, this._freqs.triangles = new Map, await Promise.resolve()
				}
				particleCreated(t) {
					if (t.links = [], !t.options.links) return;
					let e = this.container.retina.pixelRatio,
						{
							retina: i
						} = t,
						{
							distance: s,
							width: n
						} = t.options.links;
					i.linksDistance = s * e, i.linksWidth = n * e
				}
				particleDestroyed(t) {
					t.links = []
				}
			}
			class t9 {
				constructor() {
					this.id = "links"
				}
				getPlugin(t) {
					return Promise.resolve(new t7(t))
				}
				loadOptions() {}
				needsPlugin() {
					return !0
				}
			}
			async function et(t, e = !0) {
				let i = new t9;
				await t.addPlugin(i, e)
			}
			async function ee(t, e = !0) {
				await t4(t, e), await et(t, e)
			}
			let ei = {
				x: 0,
				y: 0
			};
			class es {
				draw(t) {
					let {
						particle: e,
						radius: i
					} = t;
					! function(t, e, i) {
						let {
							context: s
						} = t, n = i.count.numerator * i.count.denominator, a = i.count.numerator / i.count.denominator, o = Math.PI - (0, c.Idc)(180 * (a - 2) / a);
						if (s) {
							s.beginPath(), s.translate(e.x, e.y), s.moveTo(ei.x, ei.y);
							for (let t = 0; t < n; t++) s.lineTo(i.length, ei.y), s.translate(i.length, ei.y), s.rotate(o)
						}
					}(t, this.getCenter(e, i), this.getSidesData(e, i))
				}
				getSidesCount(t) {
					let e = t.shapeData;
					return Math.round((0, c.Gu7)(e?.sides ?? 5))
				}
			}
			class en extends es {
				constructor() {
					super(...arguments), this.validTypes = ["polygon"]
				}
				getCenter(t, e) {
					return {
						x: -e / (t.sides / 3.5),
						y: -e / .76
					}
				}
				getSidesData(t, e) {
					let i = t.sides;
					return {
						count: {
							denominator: 1,
							numerator: i
						},
						length: 2.66 * e / (i / 3)
					}
				}
			}
			class ea extends es {
				constructor() {
					super(...arguments), this.validTypes = ["triangle"]
				}
				getCenter(t, e) {
					return {
						x: -e,
						y: e / 1.66
					}
				}
				getSidesCount() {
					return 3
				}
				getSidesData(t, e) {
					return {
						count: {
							denominator: 2,
							numerator: 3
						},
						length: 2 * e
					}
				}
			}
			async function eo(t, e = !0) {
				await t.addShape(new en, e)
			}
			async function er(t, e = !0) {
				await t.addShape(new ea, e)
			}
			async function el(t, e = !0) {
				await eo(t, e), await er(t, e)
			}
			class ec {
				constructor() {
					this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
				}
				load(t) {
					t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, c.Cst)(t.speed)), void 0 !== t.decay && (this.decay = (0, c.Cst)(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
				}
			}
			class eh extends c.SWe {
				constructor() {
					super(), this.animation = new ec, this.direction = c.RnL.clockwise, this.path = !1, this.value = 0
				}
				load(t) {
					t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
				}
			}
			let ed = 2 * Math.PI;
			class eu {
				constructor(t) {
					this.container = t
				}
				init(t) {
					let e = t.options.rotate;
					if (!e) return;
					t.rotate = {
						enable: e.animation.enable,
						value: (0, c.Idc)((0, c.Gu7)(e.value)),
						min: 0,
						max: ed
					}, t.pathRotation = e.path;
					let i = e.direction;
					switch (i === c.RnL.random && (i = Math.floor(2 * (0, c.sZz)()) > 0 ? c.RnL.counterClockwise : c.RnL.clockwise), i) {
						case c.RnL.counterClockwise:
						case "counterClockwise":
							t.rotate.status = c.NV1.decreasing;
							break;
						case c.RnL.clockwise:
							t.rotate.status = c.NV1.increasing
					}
					let s = e.animation;
					s.enable && (t.rotate.decay = 1 - (0, c.Gu7)(s.decay), t.rotate.velocity = (0, c.Gu7)(s.speed) / 360 * this.container.retina.reduceFactor, s.sync || (t.rotate.velocity *= (0, c.sZz)())), t.rotation = t.rotate.value
				}
				isEnabled(t) {
					let e = t.options.rotate;
					return !!e && !t.destroyed && !t.spawning && (!!e.value || e.animation.enable || e.path)
				}
				loadOptions(t, ...e) {
					for (let i of (t.rotate || (t.rotate = new eh), e)) t.rotate.load(i?.rotate)
				}
				update(t, e) {
					this.isEnabled(t) && (t.isRotating = !!t.rotate, t.rotate && ((0, c.CrJ)(t, t.rotate, !1, c.Hyf.none, e), t.rotation = t.rotate.value))
				}
			}
			async function ep(t, e = !0) {
				await t.addParticleUpdater("rotate", t => Promise.resolve(new eu(t)), e)
			}
			let ef = Math.sqrt(2);
			class ev {
				constructor() {
					this.validTypes = ["edge", "square"]
				}
				draw(t) {
					! function(t) {
						let {
							context: e,
							radius: i
						} = t, s = i / ef, n = 2 * s;
						e.rect(-s, -s, n, n)
					}(t)
				}
				getSidesCount() {
					return 4
				}
			}
			async function eg(t, e = !0) {
				await t.addShape(new ev, e)
			}
			let em = {
				x: 0,
				y: 0
			};
			class ey {
				constructor() {
					this.validTypes = ["star"]
				}
				draw(t) {
					! function(t) {
						let {
							context: e,
							particle: i,
							radius: s
						} = t, n = i.sides, a = i.starInset ?? 2;
						e.moveTo(em.x, em.y - s);
						for (let t = 0; t < n; t++) e.rotate(Math.PI / n), e.lineTo(em.x, em.y - s * a), e.rotate(Math.PI / n), e.lineTo(em.x, em.y - s)
					}(t)
				}
				getSidesCount(t) {
					let e = t.shapeData;
					return Math.round((0, c.Gu7)(e?.sides ?? 5))
				}
				particleInit(t, e) {
					let i = e.shapeData;
					e.starInset = (0, c.Gu7)(i?.inset ?? 2)
				}
			}
			async function eb(t, e = !0) {
				await t.addShape(new ey, e)
			}
			class ew {
				constructor(t) {
					this.container = t
				}
				init(t) {
					let e = this.container,
						i = t.options,
						s = (0, c.wA_)(i.stroke, t.id, i.reduceDuplicates);
					t.strokeWidth = (0, c.Gu7)(s.width) * e.retina.pixelRatio, t.strokeOpacity = (0, c.Gu7)(s.opacity ?? 1), t.strokeAnimation = s.color?.animation;
					let n = (0, c.lNs)(s.color) ?? t.getFillColor();
					n && (t.strokeColor = (0, c.bS$)(n, t.strokeAnimation, e.retina.reduceFactor))
				}
				isEnabled(t) {
					let e = t.strokeAnimation,
						{
							strokeColor: i
						} = t;
					return !t.destroyed && !t.spawning && !!e && (i?.h.value !== void 0 && i.h.enable || i?.s.value !== void 0 && i.s.enable || i?.l.value !== void 0 && i.l.enable)
				}
				update(t, e) {
					this.isEnabled(t) && (0, c.PBz)(t.strokeColor, e)
				}
			}
			async function ex(t, e = !0) {
				await t.addParticleUpdater("strokeColor", t => Promise.resolve(new ew(t)), e)
			}
			async function e_(t, e = !0) {
				await t$(t, !1), await A(t, !1), await U(t, !1), await X(t, !1), await tt(t, !1), await tn(t, !1), await to(t, !1), await tc(t, !1), await tu(t, !1), await ty(t, !1), await tx(t, !1), await tY(t, !1), await tJ(t, !1), await ee(t, !1), await P(), await D(t, !1), await tA(t, !1), await tj(t, !1), await el(t, !1), await eg(t, !1), await eb(t, !1), await tV(t, !1), await ep(t, !1), await ex(t, !1), await S(t, e)
			}
		},
		95080: function(t, e, i) {
			i.d(e, {
				H: function() {
					return o
				}
			});
			var s = i(26364),
				n = i(2265),
				a = i(26971);

			function o() {
				var t;
				let e = (0, s.h)(() => ({
						current: null,
						animations: []
					})),
					i = (0, s.h)(() => (0, a.n)(e));
				return t = () => {
					e.animations.forEach(t => t.stop()), e.animations.length = 0
				}, (0, n.useEffect)(() => () => t(), []), [e, i]
			}
		},
		25214: function(t, e, i) {
			i.d(e, {
				_: function() {
					return h
				}
			});
			var s = i(26364),
				n = i(20421),
				a = i(82159),
				o = i(76283),
				r = i(84238);

			function l(t, e) {
				[...e].reverse().forEach(i => {
					let s = t.getVariant(i);
					s && (0, o.C)(t, s), t.variantChildren && t.variantChildren.forEach(t => {
						l(t, e)
					})
				})
			}

			function c() {
				let t = !1,
					e = new Set,
					i = {
						subscribe: t => (e.add(t), () => void e.delete(t)),
						start(i, s) {
							(0, a.k)(t, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
							let n = [];
							return e.forEach(t => {
								n.push((0, r.d)(t, i, {
									transitionOverride: s
								}))
							}), Promise.all(n)
						},
						set: i => ((0, a.k)(t, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach(t => {
							Array.isArray(i) ? l(t, i) : "string" == typeof i ? l(t, [i]) : (0, o.C)(t, i)
						})),
						stop() {
							e.forEach(t => {
								! function(t) {
									t.values.forEach(t => t.stop())
								}(t)
							})
						},
						mount: () => (t = !0, () => {
							t = !1, i.stop()
						})
					};
				return i
			}
			let h = function() {
				let t = (0, s.h)(c);
				return (0, n.L)(t.mount, []), t
			}
		}
	}
]);
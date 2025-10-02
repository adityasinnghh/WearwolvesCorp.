"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[1671], {
		25399: function(e, t, n) {
			n.d(t, {
				W: function() {
					return i
				}
			});
			var r = n(2265);

			function i(e, t, n) {
				(0, r.useInsertionEffect)(() => e.on(t, n), [e, t, n])
			}
		},
		59604: function(e, t, n) {
			let r, i;
			n.d(t, {
				v: function() {
					return D
				}
			});
			var o = n(58002),
				l = n(82159),
				s = n(2265),
				f = n(5085),
				c = n(54687);

			function u(e, t) {
				let n;
				let r = () => {
					let {
						currentTime: r
					} = t, i = (null === r ? 0 : r.value) / 100;
					n !== i && e(i), n = i
				};
				return c.Wi.preUpdate(r, !0), () => (0, c.Pn)(r)
			}
			var a = n(85459),
				g = n(83957),
				d = n(48036);
			let h = new WeakMap,
				p = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : (0, g.v)(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
				m = p("inline", "width", "offsetWidth"),
				v = p("block", "height", "offsetHeight");

			function w({
				target: e,
				borderBoxSize: t
			}) {
				h.get(e)?.forEach(n => {
					n(e, {
						get width() {
							return m(e, t)
						},
						get height() {
							return v(e, t)
						}
					})
				})
			}

			function y(e) {
				e.forEach(w)
			}
			let E = new Set;
			var W = n(83892),
				x = n(54615);
			let L = () => ({
					current: 0,
					offset: [],
					progress: 0,
					scrollLength: 0,
					targetOffset: 0,
					targetLength: 0,
					containerLength: 0,
					velocity: 0
				}),
				B = () => ({
					time: 0,
					x: L(),
					y: L()
				}),
				b = {
					x: {
						length: "Width",
						position: "Left"
					},
					y: {
						length: "Height",
						position: "Top"
					}
				};

			function k(e, t, n, r) {
				let i = n[t],
					{
						length: o,
						position: l
					} = b[t],
					s = i.current,
					f = n.time;
				i.current = e[`scroll${l}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, W.Y)(0, i.scrollLength, i.current);
				let c = r - f;
				i.velocity = c > 50 ? 0 : (0, x.R)(i.current - s, c)
			}
			var z = n(8152),
				H = n(9081),
				O = n(73509),
				N = n(59306);
			let P = {
				start: 0,
				center: .5,
				end: 1
			};

			function R(e, t, n = 0) {
				let r = 0;
				if (e in P && (e = P[e]), "string" == typeof e) {
					let t = parseFloat(e);
					e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
				}
				return "number" == typeof e && (r = t * e), n + r
			}
			let X = [0, 0],
				S = [
					[0, 0],
					[1, 1]
				],
				C = {
					x: 0,
					y: 0
				},
				M = new WeakMap,
				T = new WeakMap,
				Y = new WeakMap,
				_ = e => e === document.scrollingElement ? window : e;

			function $(e, {
				container: t = document.scrollingElement,
				...n
			} = {}) {
				if (!t) return f.Z;
				let o = Y.get(t);
				o || (o = new Set, Y.set(t, o));
				let l = function(e, t, n, r = {}) {
					return {
						measure: t => {
							! function(e, t = e, n) {
								if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
									let r = t;
									for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
								}
								n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
							}(e, r.target, n), k(e, "x", n, t), k(e, "y", n, t), n.time = t, (r.offset || r.target) && function(e, t, n) {
								let {
									offset: r = S
								} = n, {
									target: i = e,
									axis: o = "y"
								} = n, l = "y" === o ? "height" : "width", s = i !== e ? function(e, t) {
									let n = {
											x: 0,
											y: 0
										},
										r = e;
									for (; r && r !== t;)
										if ((0, N.R)(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
										else if ("svg" === r.tagName) {
										let e = r.getBoundingClientRect(),
											t = (r = r.parentElement).getBoundingClientRect();
										n.x += e.left - t.left, n.y += e.top - t.top
									} else if (r instanceof SVGGraphicsElement) {
										let {
											x: e,
											y: t
										} = r.getBBox();
										n.x += e, n.y += t;
										let i = null,
											o = r.parentNode;
										for (; !i;) "svg" === o.tagName && (i = o), o = r.parentNode;
										r = i
									} else break;
									return n
								}(i, e) : C, f = i === e ? {
									width: e.scrollWidth,
									height: e.scrollHeight
								} : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
									width: i.clientWidth,
									height: i.clientHeight
								}, c = {
									width: e.clientWidth,
									height: e.clientHeight
								};
								t[o].offset.length = 0;
								let u = !t[o].interpolate,
									a = r.length;
								for (let e = 0; e < a; e++) {
									let n = function(e, t, n, r) {
										let i = Array.isArray(e) ? e : X,
											o = 0;
										return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, P[e] ? e : "0"]), R(i[0], n, r) - R(i[1], t)
									}(r[e], c[l], f[l], s[o]);
									u || n === t[o].interpolatorOffsets[e] || (u = !0), t[o].offset[e] = n
								}
								u && (t[o].interpolate = (0, z.s)(t[o].offset, (0, H.Y)(r), {
									clamp: !1
								}), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, O.u)(0, 1, t[o].interpolate(t[o].current))
							}(e, n, r)
						},
						notify: () => t(n)
					}
				}(t, e, B(), n);
				if (o.add(l), !M.has(t)) {
					let e = () => {
							for (let e of o) e.measure(c.frameData.timestamp);
							c.Wi.preUpdate(n)
						},
						n = () => {
							for (let e of o) e.notify()
						},
						l = () => c.Wi.read(e);
					M.set(t, l);
					let s = _(t);
					window.addEventListener("resize", l, {
						passive: !0
					}), t !== document.documentElement && T.set(t, "function" == typeof t ? (E.add(t), i || (i = () => {
						let e = {
							get width() {
								return window.innerWidth
							},
							get height() {
								return window.innerHeight
							}
						};
						E.forEach(t => t(e))
					}, window.addEventListener("resize", i)), () => {
						E.delete(t), E.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
					}) : function(e, t) {
						r || "undefined" == typeof ResizeObserver || (r = new ResizeObserver(y));
						let n = (0, d.I)(e);
						return n.forEach(e => {
							let n = h.get(e);
							n || (n = new Set, h.set(e, n)), n.add(t), r?.observe(e)
						}), () => {
							n.forEach(e => {
								let n = h.get(e);
								n?.delete(t), n?.size || r?.unobserve(e)
							})
						}
					}(t, l)), s.addEventListener("scroll", l, {
						passive: !0
					}), l()
				}
				let s = M.get(t);
				return c.Wi.read(s, !1, !0), () => {
					(0, c.Pn)(s);
					let e = Y.get(t);
					if (!e || (e.delete(l), e.size)) return;
					let n = M.get(t);
					M.delete(t), n && (_(t).removeEventListener("scroll", n), T.get(t)?.(), window.removeEventListener("resize", n))
				}
			}
			let A = new Map;

			function G({
				source: e,
				container: t,
				...n
			}) {
				let {
					axis: r
				} = n;
				e && (t = e);
				let i = A.get(t) ?? new Map;
				A.set(t, i);
				let o = n.target ?? "self",
					l = i.get(o) ?? {},
					s = r + (n.offset ?? []).join(",");
				return l[s] || (l[s] = !n.target && (0, a.t)() ? new ScrollTimeline({
					source: t,
					axis: r
				}) : function(e) {
					let t = {
							value: 0
						},
						n = $(n => {
							t.value = 100 * n[e.axis].progress
						}, e);
					return {
						currentTime: t,
						cancel: n
					}
				}({
					container: t,
					...n
				})), l[s]
			}
			var I = n(26364),
				U = n(20421);
			let Z = () => ({
					scrollX: (0, o.BX)(0),
					scrollY: (0, o.BX)(0),
					scrollXProgress: (0, o.BX)(0),
					scrollYProgress: (0, o.BX)(0)
				}),
				j = e => !!e && !e.current;

			function D({
				container: e,
				target: t,
				...n
			} = {}) {
				let r = (0, I.h)(Z),
					i = (0, s.useRef)(null),
					o = (0, s.useRef)(!1),
					c = (0, s.useCallback)(() => (i.current = function(e, {
						axis: t = "y",
						container: n = document.scrollingElement,
						...r
					} = {}) {
						if (!n) return f.Z;
						let i = {
							axis: t,
							container: n,
							...r
						};
						return "function" == typeof e ? 2 === e.length ? $(t => {
							e(t[i.axis].progress, t)
						}, i) : u(e, G(i)) : function(e, t) {
							let n = G(t);
							return e.attachTimeline({
								timeline: t.target ? void 0 : n,
								observe: e => (e.pause(), u(t => {
									e.time = e.duration * t
								}, n))
							})
						}(e, i)
					}((e, {
						x: t,
						y: n
					}) => {
						r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(n.current), r.scrollYProgress.set(n.progress)
					}, {
						...n,
						container: e?.current || void 0,
						target: t?.current || void 0
					}), () => {
						i.current?.()
					}), [e, t, JSON.stringify(n.offset)]);
				return (0, U.L)(() => {
					if (o.current = !1, !(j(e) || j(t))) return c();
					o.current = !0
				}, [c]), (0, s.useEffect)(() => o.current ? ((0, l.k)(!j(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, l.k)(!j(t), "Target ref is defined but not hydrated", "use-scroll-ref"), c()) : void 0, [c]), r
			}
		}
	}
]);
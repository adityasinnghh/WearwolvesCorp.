
 	"use strict";
 (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
 	[7910], {
 		92730: function(e, s, a) {
 			a.d(s, {
 				A: function() {
 					return n
 				}
 			});
 			var t = a(57437);
 			a(2265);
 			let n = () => (0, t.jsxs)("div", {
 				className: "absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none",
 				children: [(0, t.jsx)("div", {
 					style: {
 						transform: "translateY(-350px) rotate(-45deg)",
 						width: "560px",
 						height: "1380px",
 						background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 85%, .08) 0, hsla(0, 0%, 55%, .02) 50%, hsla(0, 0%, 45%, 0) 80%)"
 					},
 					className: "absolute top-0 left-0"
 				}), (0, t.jsx)("div", {
 					style: {
 						transform: "rotate(-45deg) translate(5%, -50%)",
 						transformOrigin: "top left",
 						width: "240px",
 						height: "1380px",
 						background: "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .06) 0, hsla(0, 0%, 45%, .02) 80%, transparent 100%)"
 					},
 					className: "absolute top-0 left-0"
 				}), (0, t.jsx)("div", {
 					style: {
 						position: "absolute",
 						borderRadius: "20px",
 						transform: "rotate(-45deg) translate(-180%, -70%)",
 						transformOrigin: "top left",
 						top: 0,
 						left: 0,
 						width: "240px",
 						height: "1380px",
 						background: "radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 85%, .04) 0, hsla(0, 0%, 45%, .02) 80%, transparent 100%)"
 					},
 					className: "absolute top-0 left-0"
 				})]
 			})
 		},
 		66942: function(e, s, a) {
 			a.d(s, {
 				BlurImage: function() {
 					return r
 				}
 			});
 			var t = a(57437),
 				n = a(37440),
 				l = a(66648),
 				i = a(2265);
 			let r = e => {
 				let {
 					height: s,
 					width: a,
 					src: r,
 					className: c,
 					objectFit: o,
 					alt: d,
 					layout: x,
 					...m
 				} = e, [h, p] = (0, i.useState)(!0);
 				return (0, t.jsx)(l.default, {
 					className: (0, n.cn)("transition duration-300", h ? "blur-sm" : "blur-0", c),
 					onLoadingComplete: () => p(!1),
 					src: r,
 					width: a,
 					height: s,
 					loading: "lazy",
 					decoding: "async",
 					blurDataURL: r,
 					layout: x,
 					alt: d || "Avatar",
 					...m
 				})
 			}
 		},
 		29893: function(e, s, a) {
 			a.d(s, {
 				z: function() {
 					return l
 				}
 			});
 			var t = a(57437),
 				n = a(37440);
 			a(2265);
 			let l = e => {
 				let {
 					children: s,
 					className: a,
 					variant: l = "primary",
 					as: i = "button",
 					...r
 				} = e;
 				return (0, t.jsx)(i, {
 					className: (0, n.cn)("bg-secondary relative z-10 hover:bg-secondary/90 group hover:-translate-y-0.5 active:scale-[0.98] text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center", "simple" === l ? "bg-secondary relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center" : "outline" === l ? "bg-white relative z-10 hover:bg-secondary/90 hover:shadow-xl  text-black border border-black hover:text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center" : "primary" === l ? "bg-secondary relative z-10 hover:bg-secondary/90  border border-secondary text-black text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]" : "muted" === l ? "bg-neutral-800 relative z-10 hover:bg-neutral-900  border border-transparent text-white text-sm md:text-sm transition font-medium duration-200  rounded-md px-4 py-2  flex items-center justify-center shadow-[0px_1px_0px_0px_#FFFFFF20_inset]" : "", a),
 					...r,
 					children: null != s ? s : "Get Started"
 				})
 			}
 		},
 		85444: function(e, s, a) {
 			a.d(s, {
 				W: function() {
 					return l
 				}
 			});
 			var t = a(57437),
 				n = a(37440);
 			a(2265);
 			let l = e => {
 				let {
 					children: s,
 					className: a
 				} = e;
 				return (0, t.jsx)("div", {
 					className: (0, n.cn)("max-w-7xl mx-auto px-4 ", a),
 					children: s
 				})
 			}
 		},
 		69058: function(e, s, a) {
 			a.d(s, {
 				CTA: function() {
 					return W
 				}
 			});
 			var t = a(57437);
 			a(2265);
 			var n = a(62784),
 				l = a(37440),
 				i = a(60399),
 				r = a(11107),
 				c = a(86604),
 				o = a(5198),
 				d = a(91905),
 				x = a(93550),
 				m = a(52508),
 				h = a(38861),
 				p = a(52928),
 				u = a(94996),
 				j = a(44295),
 				f = a(28041),
 				b = a(61220),
 				g = a(7149),
 				v = a(60912),
 				N = a(24016),
 				w = a(99987),
 				y = a(1742),
 				k = a(89958),
 				I = a(66648);
 			let A = {
 					hover: {
 						rotateX: -35,
 						perspective: "200px"
 					}
 				},
 				F = {
 					hover: {
 						opacity: 1
 					}
 				},
 				D = e => {
 					let {
 						src: s,
 						showGradient: a,
 						badge: l
 					} = e;
 					return (0, t.jsxs)(n.E.div, {
 						whileHover: "hover",
 						whileTap: "hover",
 						className: "flex group flex-col items-center py-0 md:py-20 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.45] sm:scale-[0.7] -mt-20 sm:-mt-10 md:-mt-0 max-w-2xl mx-auto",
 						children: [(0, t.jsx)(M, {
 							src: s
 						}), (0, t.jsxs)("div", {
 							className: "h-[22rem] w-[32rem] bg-[#272729] rounded-2xl overflow-hidden relative -z-10",
 							children: [(0, t.jsx)("div", {
 								className: "h-10 w-full relative",
 								children: (0, t.jsx)("div", {
 									className: "absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]"
 								})
 							}), (0, t.jsxs)("div", {
 								className: "flex relative",
 								children: [(0, t.jsx)("div", {
 									className: "mx-auto w-[10%] overflow-hidden  h-full",
 									children: (0, t.jsx)(T, {})
 								}), (0, t.jsx)("div", {
 									className: "mx-auto w-[80%] h-full",
 									children: (0, t.jsx)(z, {})
 								}), (0, t.jsx)("div", {
 									className: "mx-auto w-[10%] overflow-hidden  h-full",
 									children: (0, t.jsx)(T, {})
 								})]
 							}), (0, t.jsx)(q, {}), (0, t.jsx)("div", {
 								className: "h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl"
 							}), a && (0, t.jsx)("div", {
 								className: "h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal  via-charcoal to-transparent z-50"
 							}), l && (0, t.jsx)("div", {
 								className: "absolute bottom-4 left-4",
 								children: l
 							})]
 						})]
 					})
 				},
 				M = e => {
 					let {
 						src: s
 					} = e;
 					return (0, t.jsx)(n.E.div, {
 						className: "relative [perspective:800px] z-50",
 						children: (0, t.jsx)(n.E.div, {
 							style: {
 								perspective: "1000px",
 								rotateX: -65,
 								translateZ: 0,
 								transformOrigin: "bottom",
 								transformStyle: "preserve-3d",
 								boxShadow: "0px 2px 0px 2px var(--neutral-800) inset"
 							},
 							variants: A,
 							transition: {
 								duration: .6,
 								ease: "easeInOut"
 							},
 							className: "h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative overflow-hidden",
 							children: (0, t.jsx)(n.E.div, {
 								style: {
 									boxShadow: "0px 2px 0px 2px var(--neutral-800) inset",
 									opacity: .2
 								},
 								variants: F,
 								transition: {
 									duration: .6,
 									ease: "easeInOut",
 									delay: .2
 								},
 								className: "absolute inset-0 bg-[#010101] overflow-hidden h-[95%] w-[98.5%] m-auto rounded-xl flex items-center justify-center",
 								children: (0, t.jsx)(I.default, {
 									src: s,
 									alt: "aceternity logo",
 									fill: !0,
 									className: "object-cover object-left-top rounded-lg inset-0 h-full w-full"
 								})
 							})
 						})
 					})
 				},
 				q = () => (0, t.jsx)("div", {
 					className: "w-[40%] mx-auto h-32  rounded-xl my-1",
 					style: {
 						boxShadow: "0px 0px 1px 1px #00000020 inset"
 					}
 				}),
 				z = () => (0, t.jsxs)("div", {
 					className: "h-full rounded-md bg-[#050505] mx-1 p-1",
 					children: [(0, t.jsxs)(S, {
 						children: [(0, t.jsx)(C, {
 							className: "w-10 items-end justify-start pl-[4px] pb-[2px]",
 							childrenClassName: "items-start",
 							children: "esc"
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(i.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F1"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(r.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F2"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(c.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F3"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(v.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F4"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(o.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F5"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(d.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F6"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(x.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F7"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(m.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F8"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(h.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F8"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(p.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F10"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(u.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F11"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)(j.Z, {
 								className: "h-[6px] w-[6px]"
 							}), (0, t.jsx)("span", {
 								className: "inline-block mt-1",
 								children: "F12"
 							})]
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("div", {
 								className: "h-4 w-4 rounded-full  bg-gradient-to-b from-20% from-neutral-900 via-black via-50% to-neutral-900 to-95% p-px",
 								children: (0, t.jsx)("div", {
 									className: "bg-black h-full w-full rounded-full"
 								})
 							})
 						})]
 					}), (0, t.jsxs)(S, {
 						children: [(0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "~"
 							}), (0, t.jsx)("span", {
 								className: "block mt-1",
 								children: "`"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block ",
 								children: "!"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "1"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "@"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "2"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "#"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "3"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "$"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "4"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "%"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "5"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "^"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "6"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "&"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "7"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "*"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "8"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "("
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "9"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: ")"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "0"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "—"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "_"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "+"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: " = "
 							})]
 						}), (0, t.jsx)(C, {
 							className: "w-10 items-end justify-end pr-[4px] pb-[2px]",
 							childrenClassName: "items-end",
 							children: "delete"
 						})]
 					}), (0, t.jsxs)(S, {
 						children: [(0, t.jsx)(C, {
 							className: "w-10 items-end justify-start pl-[4px] pb-[2px]",
 							childrenClassName: "items-start",
 							children: "tab"
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "Q"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "W"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "E"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "R"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "T"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "Y"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "U"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "I"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "O"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "P"
 							})
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "{"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "["
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "}"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "]"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "|"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "\\"
 							})]
 						})]
 					}), (0, t.jsxs)(S, {
 						children: [(0, t.jsx)(C, {
 							className: "w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]",
 							childrenClassName: "items-start",
 							children: "caps lock"
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "A"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "S"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "D"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "F"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "G"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "H"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "J"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "K"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "L"
 							})
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: ":"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: ";"
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: '"'
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "'"
 							})]
 						}), (0, t.jsx)(C, {
 							className: "w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]",
 							childrenClassName: "items-end",
 							children: "return"
 						})]
 					}), (0, t.jsxs)(S, {
 						children: [(0, t.jsx)(C, {
 							className: "w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]",
 							childrenClassName: "items-start",
 							children: "shift"
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "Z"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "X"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "C"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "V"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "B"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "N"
 							})
 						}), (0, t.jsx)(C, {
 							children: (0, t.jsx)("span", {
 								className: "block",
 								children: "M"
 							})
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "<"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: ","
 							})]
 						}), (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: ">"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "."
 							})]
 						}), " ", (0, t.jsxs)(C, {
 							children: [(0, t.jsx)("span", {
 								className: "block",
 								children: "?"
 							}), (0, t.jsx)("span", {
 								className: "block",
 								children: "/"
 							})]
 						}), (0, t.jsx)(C, {
 							className: "w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]",
 							childrenClassName: "items-end",
 							children: "shift"
 						})]
 					}), (0, t.jsxs)(S, {
 						children: [(0, t.jsxs)(C, {
 							className: "",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-end w-full pr-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "fn"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)(N.Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							})]
 						}), (0, t.jsxs)(C, {
 							className: "",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-end w-full pr-1",
 								children: (0, t.jsx)(f.Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "control"
 								})
 							})]
 						}), (0, t.jsxs)(C, {
 							className: "",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-end w-full pr-1",
 								children: (0, t.jsx)(Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "option"
 								})
 							})]
 						}), (0, t.jsxs)(C, {
 							className: "w-8",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-end w-full pr-1",
 								children: (0, t.jsx)(w.Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "command"
 								})
 							})]
 						}), (0, t.jsx)(C, {
 							className: "w-[8.2rem]"
 						}), (0, t.jsxs)(C, {
 							className: "w-8",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)(w.Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "command"
 								})
 							})]
 						}), (0, t.jsxs)(C, {
 							className: "",
 							childrenClassName: "h-full justify-between py-[4px]",
 							children: [(0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)(Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsx)("div", {
 								className: "flex justify-start w-full pl-1",
 								children: (0, t.jsx)("span", {
 									className: "block",
 									children: "option"
 								})
 							})]
 						}), (0, t.jsxs)("div", {
 							className: "w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center",
 							children: [(0, t.jsx)(C, {
 								className: "w-6 h-3",
 								children: (0, t.jsx)(b.Z, {
 									className: "h-[6px] w-[6px]"
 								})
 							}), (0, t.jsxs)("div", {
 								className: "flex",
 								children: [(0, t.jsx)(C, {
 									className: "w-6 h-3",
 									children: (0, t.jsx)(y.Z, {
 										className: "h-[6px] w-[6px]"
 									})
 								}), (0, t.jsx)(C, {
 									className: "w-6 h-3",
 									children: (0, t.jsx)(k.Z, {
 										className: "h-[6px] w-[6px]"
 									})
 								}), (0, t.jsx)(C, {
 									className: "w-6 h-3",
 									children: (0, t.jsx)(g.Z, {
 										className: "h-[6px] w-[6px]"
 									})
 								})]
 							})]
 						})]
 					})]
 				}),
 				C = e => {
 					let {
 						className: s,
 						children: a,
 						childrenClassName: n,
 						backlit: i = !0
 					} = e;
 					return (0, t.jsx)("div", {
 						className: (0, l.cn)("p-[0.5px] rounded-[4px]", i && "bg-white/[0.2] shadow-white shadow-xl"),
 						children: (0, t.jsx)("div", {
 							className: (0, l.cn)("h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center", s),
 							style: {
 								boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset"
 							},
 							children: (0, t.jsx)("div", {
 								className: (0, l.cn)("text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col", n, i && "text-white"),
 								children: a
 							})
 						})
 					})
 				},
 				S = e => {
 					let {
 						children: s
 					} = e;
 					return (0, t.jsx)("div", {
 						className: "flex gap-[2px] mb-[2px] w-full flex-shrink-0",
 						children: s
 					})
 				},
 				T = () => (0, t.jsx)("div", {
 					className: "flex px-[0.5px] gap-[2px] mt-2 h-40",
 					style: {
 						backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
 						backgroundSize: "3px 3px"
 					}
 				}),
 				Z = e => {
 					let {
 						className: s
 					} = e;
 					return (0, t.jsxs)("svg", {
 						fill: "none",
 						version: "1.1",
 						id: "icon",
 						xmlns: "http://www.w3.org/2000/svg",
 						viewBox: "0 0 32 32",
 						className: s,
 						children: [(0, t.jsx)("rect", {
 							stroke: "currentColor",
 							strokeWidth: 2,
 							x: "18",
 							y: "5",
 							width: "10",
 							height: "2"
 						}), (0, t.jsx)("polygon", {
 							stroke: "currentColor",
 							strokeWidth: 2,
 							points: "10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
 						}), (0, t.jsx)("rect", {
 							id: "_Transparent_Rectangle_",
 							className: "st0",
 							width: "32",
 							height: "32",
 							stroke: "none"
 						})]
 					})
 				};
 			var B = a(29893),
 				H = a(1109),
 				_ = a(92730),
 				E = a(85444),
 				G = a(13104);
 			let W = () => (0, t.jsxs)("div", {
 				className: "relative",
 				children: [(0, t.jsx)(_.A, {}), (0, t.jsxs)(E.W, {
 					className: "flex flex-col md:flex-row justify-between items-center w-full px-8",
 					children: [(0, t.jsxs)("div", {
 						className: "flex flex-col",
 						children: [(0, t.jsx)(n.E.h2, {
 							className: "text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ",
 							children: "Get started today with Wearwolves Corp to kickstart your marketing efforts"
 						}), (0, t.jsx)("p", {
 							className: "max-w-md mt-8 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-400",
 							children: "Wearwolves Corp houses the best in class software tools to kickstart your marketing journey. Join 127,000+ other users to get started."
 						}), (0, t.jsx)(G.i, {
 							textClassName: "lg:text-left text-center",
 							className: "lg:justify-start justify-start items-center",
 							containerClassName: "md:items-start",
 							showStars: !0
 						})]
 					}), (0, t.jsxs)(B.z, {
 						className: "flex space-x-2 items-center group !text-lg",
 						children: [(0, t.jsx)("span", {
 							children: "Book a demo"
 						}), (0, t.jsx)(H.WY3, {
 							className: "text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200"
 						})]
 					})]
 				}), (0, t.jsx)(D, {
 					src: "/dashboard.png",
 					showGradient: !0
 				})]
 			})
 		},
 		13104: function(e, s, a) {
 			a.d(s, {
 				i: function() {
 					return f
 				}
 			});
 			var t = a(57437),
 				n = a(66648),
 				l = a(2265),
 				i = a(33392),
 				r = a(71340),
 				c = a(37415),
 				o = a(26971),
 				d = a(57780),
 				x = a(66141),
 				m = a(62784);
 			let h = [{
 				name: "John Doe",
 				designation: "Software Engineer",
 				image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
 			}, {
 				name: "Robert Johnson",
 				designation: "Product Manager",
 				image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
 			}, {
 				name: "Jane Smith",
 				designation: "Data Scientist",
 				image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
 			}, {
 				name: "Emily Davis",
 				designation: "UX Designer",
 				image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
 			}, {
 				name: "Tyler Durden",
 				designation: "Soap Developer",
 				image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
 			}, {
 				name: "Dora",
 				designation: "The Explorer",
 				image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
 			}];
 			var p = a(96164),
 				u = a(43781),
 				j = a(37440);
 			let f = e => {
 				let {
 					textClassName: s,
 					className: a,
 					showStars: f = !1,
 					containerClassName: b
 				} = e, [g, v] = (0, l.useState)(null), N = (0, i.c)(0), w = (0, r.q)((0, c.H)(N, [-100, 100], [-50, 50]), {
 					stiffness: 100,
 					damping: 5
 				}), y = e => {
 					let s = e.target.offsetWidth / 2;
 					N.set(e.nativeEvent.offsetX - s)
 				};
 				return (0, l.useEffect)(() => {
 					(0, o.j)(".animation-container", {
 						scale: [1.1, 1, .9, 1],
 						opacity: [0, 1]
 					}, {
 						duration: .4,
 						delay: (0, d.E)(.1)
 					})
 				}, []), (0, t.jsxs)("div", {
 					className: (0, j.cn)("flex flex-col items-center mt-10 mb-10", b),
 					children: [(0, t.jsxs)("div", {
 						className: (0, p.m6)("flex flex-col sm:flex-row items-center justify-center mb-2", a),
 						children: [(0, t.jsx)("div", {
 							className: "flex flex-row items-center mb-4 sm:mb-0",
 							children: h.map((e, s) => (0, t.jsxs)("div", {
 								className: "-mr-4  relative group",
 								onMouseEnter: () => v(s),
 								onMouseLeave: () => v(null),
 								children: [(0, t.jsx)(x.M, {
 									children: g === s && (0, t.jsxs)(m.E.div, {
 										initial: {
 											opacity: 0,
 											y: 20,
 											scale: .6
 										},
 										animate: {
 											opacity: 1,
 											y: 0,
 											scale: 1,
 											transition: {
 												type: "spring",
 												stiffness: 160,
 												damping: 20
 											}
 										},
 										exit: {
 											opacity: 0,
 											y: 20,
 											scale: .6
 										},
 										style: {
 											translateX: w,
 											whiteSpace: "nowrap"
 										},
 										className: "absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-neutral-900 z-50 shadow-xl px-4 py-2",
 										children: [(0, t.jsx)("div", {
 											className: "absolute inset-x-0 z-30 w-[20%] mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px "
 										}), (0, t.jsx)("div", {
 											className: "absolute inset-x-0 w-[70%] mx-auto z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px "
 										}), (0, t.jsxs)("div", {
 											className: "flex items-center gap-2",
 											children: [(0, t.jsx)("div", {
 												className: "font-bold text-white relative z-30 text-sm",
 												children: e.name
 											}), (0, t.jsx)("div", {
 												className: "text-neutral-300 text-xs px-1 py-0.5 rounded-sm bg-neutral-950",
 												children: e.designation
 											})]
 										})]
 									})
 								}), (0, t.jsx)("div", {
 									className: "animation-container",
 									children: (0, t.jsx)(m.E.div, {
 										initial: {
 											opacity: 0
 										},
 										animate: {
 											rotate: "".concat(15 * Math.random() - 5, "deg"),
 											scale: 1,
 											opacity: 1
 										},
 										whileHover: {
 											scale: 1.05,
 											zIndex: 30
 										},
 										transition: {
 											duration: .2
 										},
 										className: "rounded-2xl overflow-hidden border-2  border-neutral-200  relative",
 										children: (0, t.jsx)(n.default, {
 											onMouseMove: y,
 											height: 100,
 											width: 100,
 											src: e.image,
 											alt: e.name,
 											className: "object-cover object-top  h-14 w-14 "
 										})
 									})
 								})]
 							}, e.name))
 						}), (0, t.jsx)("div", {
 							className: "flex justify-center ml-6",
 							children: [void 0, void 0, void 0, void 0, void 0].map((e, s) => (0, t.jsx)(u.kRm, {
 								className: f ? "h-4 w-4 text-yellow-400 mx-1" : "hidden"
 							}, s))
 						})]
 					}), (0, t.jsx)("p", {
 						className: (0, p.m6)("text-neutral-400 text-sm text-center ml-8 relative z-40", s),
 						children: "Trusted by 27,000+ creators"
 					})]
 				})
 			}
 		},
 		93263: function(e, s, a) {
 			a.d(s, {
 				L: function() {
 					return l
 				}
 			});
 			var t = a(57437),
 				n = a(37440);
 			a(2265);
 			let l = e => {
 				let {
 					children: s,
 					className: a
 				} = e;
 				return (0, t.jsx)("div", {
 					className: " [perspective:400px] [transform-style:preserve-3d]",
 					children: (0, t.jsxs)("div", {
 						className: (0, n.cn)("h-14 w-14 p-[4px] rounded-md bg-gradient-to-b from-neutral-800  to-neutral-950 mx-auto relative"),
 						style: {
 							transform: "rotateX(25deg)",
 							transformOrigin: "center"
 						},
 						children: [(0, t.jsx)("div", {
 							className: (0, n.cn)("bg-charcoal rounded-[5px] h-full w-full relative z-20", a),
 							children: s
 						}), (0, t.jsx)("div", {
 							className: "absolute bottom-0 inset-x-0 bg-neutral-600 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30"
 						}), (0, t.jsx)("div", {
 							className: "absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-[60%] mx-auto"
 						}), (0, t.jsx)("div", {
 							className: "absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-600 blur-sm to-transparent h-[8px] w-[60%] mx-auto"
 						})]
 					})
 				})
 			}
 		},
 		37902: function(e, s, a) {
 			a.d(s, {
 				X: function() {
 					return i
 				}
 			});
 			var t = a(57437),
 				n = a(37440);
 			a(2265);
 			var l = a(15088);
 			let i = e => {
 				let {
 					className: s,
 					as: a = "h2",
 					children: i,
 					size: r = "md",
 					...c
 				} = e;
 				return (0, t.jsx)(a, {
 					className: (0, n.cn)("text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight", "font-medium", "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white", {
 						sm: "text-xl md:text-2xl md:leading-snug",
 						md: "text-3xl md:text-5xl md:leading-tight",
 						xl: "text-4xl md:text-6xl md:leading-none",
 						"2xl": "text-5xl md:text-7xl md:leading-none"
 					} [r], s),
 					...c,
 					children: (0, t.jsx)(l.default, {
 						children: i
 					})
 				})
 			}
 		},
 		12883: function(e, s, a) {
 			a.d(s, {
 				p: function() {
 					return i
 				}
 			});
 			var t = a(57437),
 				n = a(37440);
 			a(2265);
 			var l = a(15088);
 			let i = e => {
 				let {
 					className: s,
 					as: a = "h2",
 					children: i,
 					...r
 				} = e;
 				return (0, t.jsx)(a, {
 					className: (0, n.cn)("text-sm md:text-base  max-w-4xl text-left my-4 mx-auto", "text-muted text-center font-normal", s),
 					children: (0, t.jsx)(l.default, {
 						children: i
 					})
 				})
 			}
 		},
 		6565: function(e, s, a) {
 			a.d(s, {
 				p: function() {
 					return t
 				}
 			});
 			let t = [{
 				name: "Manu Arora",
 				quote: "What a fantastic AI Wearwolves Corp AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
 				src: "https://i.pravatar.cc/150?img=1",
 				designation: "Tech Innovator & Entrepreneur"
 			}, {
 				name: "Tyler Durden",
 				quote: "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
 				src: "https://i.pravatar.cc/150?img=2",
 				designation: "Creative Director & Business Owner"
 			}, {
 				name: "Alice Johnson",
 				quote: "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
 				src: "https://i.pravatar.cc/150?img=3",
 				designation: "Senior Software Engineer"
 			}, {
 				name: "Bob Smith",
 				quote: "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
 				src: "https://i.pravatar.cc/150?img=4",
 				designation: "Industry Analyst"
 			}, {
 				name: "Cathy Lee",
 				quote: "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
 				src: "https://i.pravatar.cc/150?img=5",
 				designation: "Product Manager"
 			}, {
 				name: "David Wright",
 				quote: "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
 				src: "https://i.pravatar.cc/150?img=6",
 				designation: "Research Scientist"
 			}, {
 				name: "Eva Green",
 				quote: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
 				src: "https://i.pravatar.cc/150?img=7",
 				designation: "Operations Director"
 			}, {
 				name: "Frank Moore",
 				quote: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
 				src: "https://i.pravatar.cc/150?img=8",
 				designation: "Project Manager"
 			}, {
 				name: "Grace Hall",
 				quote: "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
 				src: "https://i.pravatar.cc/150?img=9",
 				designation: "Marketing Specialist"
 			}, {
 				name: "Henry Ford",
 				quote: "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
 				src: "https://i.pravatar.cc/150?img=10",
 				designation: "Operations Analyst"
 			}, {
 				name: "Ivy Wilson",
 				quote: "A must-have tool for any professional. It's revolutionized the way we approach problem-solving and decision-making.",
 				src: "https://i.pravatar.cc/150?img=11",
 				designation: "Business Consultant"
 			}, {
 				name: "Jack Brown",
 				quote: "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
 				src: "https://i.pravatar.cc/150?img=12",
 				designation: "Performance Manager"
 			}, {
 				name: "Kathy Adams",
 				quote: "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
 				src: "https://i.pravatar.cc/150?img=13",
 				designation: "Innovation Lead"
 			}, {
 				name: "Leo Carter",
 				quote: "Transformative technology with real impact. It has streamlined our operations and brought unprecedented efficiency to our processes.",
 				src: "https://i.pravatar.cc/150?img=14",
 				designation: "Technology Strategist"
 			}, {
 				name: "Mia Turner",
 				quote: "It's simply revolutionary! The way it integrates with our existing systems and enhances them is nothing short of miraculous.",
 				src: "https://i.pravatar.cc/150?img=15",
 				designation: "Systems Integrator"
 			}, {
 				name: "Nathan Hill",
 				quote: "The best investment we've made in years. It's not just a tool; it's a game-changer that has propelled our business forward.",
 				src: "https://i.pravatar.cc/150?img=16",
 				designation: "Investment Analyst"
 			}, {
 				name: "Olivia Scott",
 				quote: "It consistently exceeds our expectations. Its adaptability and precision make it indispensable for our daily operations.",
 				src: "https://i.pravatar.cc/150?img=17",
 				designation: "Quality Assurance Manager"
 			}, {
 				name: "Peter White",
 				quote: "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
 				src: "https://i.pravatar.cc/150?img=18",
 				designation: "Strategic Planner"
 			}, {
 				name: "Quinn Taylor",
 				quote: "It's a game-changer for our business. The insights it provides are invaluable and have driven substantial growth for us.",
 				src: "https://i.pravatar.cc/150?img=19",
 				designation: "Growth Manager"
 			}, {
 				name: "Rachel Black",
 				quote: "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
 				src: "https://i.pravatar.cc/150?img=20",
 				designation: "Client Support Coordinator"
 			}, {
 				name: "Samuel Lee",
 				quote: "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
 				src: "https://i.pravatar.cc/150?img=21",
 				designation: "Futurist"
 			}, {
 				name: "Tina Brooks",
 				quote: "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
 				src: "https://i.pravatar.cc/150?img=22",
 				designation: "Process Analyst"
 			}]
 		},
 		37440: function(e, s, a) {
 			a.d(s, {
 				cn: function() {
 					return l
 				}
 			});
 			var t = a(44839),
 				n = a(96164);

 			function l() {
 				for (var e = arguments.length, s = Array(e), a = 0; a < e; a++) s[a] = arguments[a];
 				return (0, n.m6)((0, t.W)(s))
 			}
 		}
 	}
 ]);
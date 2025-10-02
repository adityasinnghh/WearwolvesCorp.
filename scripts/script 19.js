
	(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
		[405], {
			82673: function(e, t, s) {
				Promise.resolve().then(s.bind(s, 69058)), Promise.resolve().then(s.bind(s, 60422)), Promise.resolve().then(s.bind(s, 52258)), Promise.resolve().then(s.bind(s, 14885)), Promise.resolve().then(s.bind(s, 66152)), Promise.resolve().then(s.bind(s, 2367)), Promise.resolve().then(s.bind(s, 64038)), Promise.resolve().then(s.bind(s, 76312)), Promise.resolve().then(s.bind(s, 34617)), Promise.resolve().then(s.bind(s, 25636)), Promise.resolve().then(s.bind(s, 52548)), Promise.resolve().then(s.bind(s, 9906)), Promise.resolve().then(s.bind(s, 15088))
			},
			5056: function(e, t, s) {
				"use strict";
				var a = s(57437),
					r = s(2265),
					i = s(36538),
					n = s.n(i),
					o = s(37440);
				t.Z = e => {
					let {
						showBeam: t = !0,
						className: s
					} = e, i = (0, r.useRef)(null);
					(0, r.useEffect)(() => {
						if (t) {
							let e = i.current;
							if (!e) return;
							e.addEventListener("animationend", () => {
								e.style.visibility = "hidden", e.style.setProperty("--meteor-delay", "".concat(Math.floor(2 * Math.random() + 0), "s")), e.style.setProperty("--meteor-duration", "".concat(Math.floor(4 * Math.random() + 0), "s")), e.style.setProperty("--meteor-width", "".concat(Math.floor(70 * Math.random() + 80), "px")), l()
							}), e.addEventListener("animationstart", () => {
								e.style.visibility = "visible"
							})
						}
						return () => {
							let e = i.current;
							e && (e.removeEventListener("animationend", () => {}), e.removeEventListener("animationstart", () => {}))
						}
					}, []);
					let l = () => {
						let e = i.current;
						e && (e.style.animation = "none", e.offsetWidth, e.style.animation = "")
					};
					return t && (0, a.jsx)("span", {
						ref: i,
						className: (0, o.cn)("absolute z-[40] -top-4  h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg]", n().meteor, s)
					})
				}
			},
			60422: function(e, t, s) {
				"use strict";
				s.d(t, {
					FAQs: function() {
						return d
					}
				});
				var a = s(57437),
					r = s(2265),
					i = s(62784),
					n = s(66141),
					o = e => {
						let {
							i: t,
							expanded: s,
							setExpanded: r,
							title: o,
							description: l
						} = e, c = t === s;
						return (0, a.jsx)("div", {
							className: "",
							children: (0, a.jsxs)(i.E.div, {
								initial: !1,
								onClick: () => r(!c && t),
								className: "flex flex-col p-4 cursor-pointer text-base font-bold bg-neutral-900 rounded-xl relative overflow-hidden",
								children: [o, (0, a.jsx)(n.M, {
									initial: !1,
									mode: "popLayout",
									children: c && (0, a.jsx)(i.E.p, {
										initial: "collapsed",
										animate: "open",
										exit: "collapsed",
										variants: {
											open: {
												opacity: 1,
												height: "auto"
											},
											collapsed: {
												opacity: 0,
												height: 0
											}
										},
										transition: {
											duration: .2,
											ease: "easeOut"
										},
										className: "mt-4 text-base font-normal text-neutral-400",
										children: l
									})
								})]
							})
						})
					},
					l = s(37902);
				let c = [{
						id: 1,
						title: "What is Proactic?",
						description: "Proactic is a social media marketing automation tool designed to help businesses streamline their social media efforts."
					}, {
						id: 2,
						title: "How does Proactic work?",
						description: "Proactic automates the process of scheduling, posting, and analyzing social media content across multiple platforms."
					}, {
						id: 3,
						title: "Which social media platforms does Proactic support?",
						description: "Proactic supports popular social media platforms such as Facebook, Twitter, Instagram, LinkedIn, and more."
					}, {
						id: 4,
						title: "Can I schedule posts in advance with Proactic?",
						description: "Yes, Proactic allows you to schedule posts in advance, ensuring your content is published at the optimal times."
					}, {
						id: 5,
						title: "Does Proactic provide analytics?",
						description: "Proactic offers detailed analytics to help you track the performance of your social media campaigns and make data-driven decisions."
					}, {
						id: 6,
						title: "Is Proactic suitable for small businesses?",
						description: "Yes, Proactic is designed to be user-friendly and scalable, making it suitable for businesses of all sizes."
					}, {
						id: 7,
						title: "Can I collaborate with my team on Proactic?",
						description: "Proactic includes collaboration features that allow team members to work together on social media campaigns."
					}, {
						id: 8,
						title: "Does Proactic offer customer support?",
						description: "Yes, Proactic provides customer support to assist you with any questions or issues you may encounter."
					}, {
						id: 9,
						title: "Is there a free trial available for Proactic?",
						description: "Proactic offers a free trial so you can explore its features and see how it can benefit your social media marketing efforts."
					}, {
						id: 10,
						title: "How can I get started with Proactic?",
						description: "To get started with Proactic, simply sign up on our website and follow the onboarding process to set up your account."
					}],
					d = () => {
						let [e, t] = (0, r.useState)(!1);
						return (0, a.jsxs)("div", {
							className: "max-w-3xl mx-auto py-20 px-8",
							children: [(0, a.jsx)(l.X, {
								className: "pt-4",
								children: "Frequently asked questions"
							}), (0, a.jsx)("div", {
								className: "grid  gap-10 pt-20",
								children: c.map((s, r) => (0, a.jsx)(o, {
									i: r,
									expanded: e,
									setExpanded: t,
									title: s.title,
									description: s.description
								}, r))
							})]
						})
					}
			},
			34617: function(e, t, s) {
				"use strict";
				s.d(t, {
					Hero: function() {
						return z
					}
				});
				var a = s(57437),
					r = s(2265),
					i = s(59604),
					n = s(37415),
					o = s(62784),
					l = s(16463),
					c = s(29893),
					d = s(1109),
					m = s(66648),
					u = s(85444),
					p = s(37902),
					x = s(12883),
					h = s(78229),
					f = s(87025),
					g = s(37440);
				let y = h.fC,
					b = h.xz,
					v = h.h_;
				h.x8;
				let j = r.forwardRef((e, t) => {
					let {
						className: s,
						...r
					} = e;
					return (0, a.jsx)(h.aV, {
						ref: t,
						className: (0, g.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", s),
						...r
					})
				});
				j.displayName = h.aV.displayName;
				let w = r.forwardRef((e, t) => {
					let {
						className: s,
						children: r,
						...i
					} = e;
					return (0, a.jsxs)(v, {
						children: [(0, a.jsx)(j, {}), (0, a.jsxs)(h.VY, {
							ref: t,
							className: (0, g.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", s),
							...i,
							children: [r, (0, a.jsxs)(h.x8, {
								className: "absolute right-4 top-4 rounded-sm opacity-70 text-white  transition-opacity hover:opacity-100 focus:outline-none   disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted",
								children: [(0, a.jsx)(f.Z, {
									className: "h-6 w-6 text-white"
								}), (0, a.jsx)("span", {
									className: "sr-only",
									children: "Close"
								})]
							})]
						})]
					})
				});
				w.displayName = h.VY.displayName, r.forwardRef((e, t) => {
					let {
						className: s,
						...r
					} = e;
					return (0, a.jsx)(h.Dx, {
						ref: t,
						className: (0, g.cn)("text-lg font-semibold leading-none tracking-tight", s),
						...r
					})
				}).displayName = h.Dx.displayName, r.forwardRef((e, t) => {
					let {
						className: s,
						...r
					} = e;
					return (0, a.jsx)(h.dk, {
						ref: t,
						className: (0, g.cn)("text-sm text-muted-foreground", s),
						...r
					})
				}).displayName = h.dk.displayName;
				var N = s(63872),
					k = s(88492),
					P = s.n(k);

				function _() {
					let [e, t] = (0, r.useState)(!1);
					return (0, r.useEffect)(() => {
						let e = () => {
							t(window.innerWidth <= 768)
						};
						return e(), window.addEventListener("resize", e), () => {
							window.removeEventListener("resize", e)
						}
					}, []), (0, a.jsxs)(y, {
						children: [(0, a.jsx)(b, {
							asChild: !0,
							children: (0, a.jsx)("div", {
								className: "md:h-32 md:w-32 h-16 w-16 bg-black/50  rounded-full backdrop-blur-sm flex items-center justify-center",
								children: (0, a.jsx)(N.gmG, {
									className: "md:h-10 md:w-10 h-6 w-6 text-white "
								})
							})
						}), (0, a.jsx)(w, {
							className: "h-[50vh] w-[90vw] md:h-[90vh] md:w-[90vw]  max-w-none border-none",
							children: (0, a.jsx)(P(), {
								url: "https://www.youtube.com/watch?v=dC1yHLp9bWA",
								width: "90%",
								height: "100%",
								style: {
									margin: "auto"
								},
								controls: !0
							})
						})]
					})
				}
				var E = s(13104),
					C = s(5056);
				let z = () => {
						(0, l.useRouter)();
						let e = (0, r.useRef)(null),
							{
								scrollYProgress: t
							} = (0, i.v)({
								target: e
							}),
							[s, o] = r.useState(!1);
						r.useEffect(() => {
							let e = () => {
								o(window.innerWidth <= 768)
							};
							return e(), window.addEventListener("resize", e), () => {
								window.removeEventListener("resize", e)
							}
						}, []);
						let h = (0, n.H)(t, [0, .5], [20, 0]),
							f = (0, n.H)(t, [0, 1], s ? [.7, .9] : [1.05, 1.2]),
							g = (0, n.H)(t, [0, 1], [0, 100]);
						return (0, a.jsxs)("div", {
							ref: e,
							className: "flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative overflow-hidden",
							children: [(0, a.jsxs)(u.W, {
								className: "flex  flex-col items-center justify-center",
								children: [(0, a.jsx)(p.X, {
									as: "h1",
									className: "text-4xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10  py-6",
									children: "Transform Your Marketing with Wearwolves Corp"
								}), (0, a.jsx)(x.p, {
									className: "text-center mt-2 md:mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10",
									children: "Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our All-in-One Marketing Solution"
								}), (0, a.jsx)(E.i, {
									textClassName: "lg:text-left text-center",
									className: "lg:justify-start justify-center items-center",
									showStars: !0
								}), (0, a.jsx)("div", {
									className: "flex items-center gap-4 justify-center my-10 relative z-10",
									children: (0, a.jsxs)(c.z, {
										className: "flex space-x-2 items-center group !text-lg",
										children: [(0, a.jsx)("span", {
											children: "Book a demo"
										}), " ", (0, a.jsx)(d.WY3, {
											className: "text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200"
										})]
									})
								})]
							}), (0, a.jsx)("div", {
								className: "flex  items-center justify-center relative p-2 md:p-20 cursor-pointer md:-mt-20",
								children: (0, a.jsx)("div", {
									className: "w-full relative",
									style: {
										perspective: "1000px"
									},
									children: (0, a.jsx)(A, {
										rotate: h,
										translate: g,
										scale: f,
										children: (0, a.jsx)(m.default, {
											src: "/dashboard.png",
											alt: "hero",
											height: 720,
											width: 1400,
											className: "mx-auto rounded-md grayscale group-hover:grayscale-0 transition duration-200 object-cover object-left-top h-full  md:object-left-top",
											draggable: !1
										})
									})
								})
							})]
						})
					},
					A = e => {
						let {
							rotate: t,
							scale: s,
							translate: r,
							children: i
						} = e;
						return (0, a.jsxs)(o.E.div, {
							style: {
								rotateX: t,
								translateY: r,
								boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003"
							},
							className: "max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[20rem] md:h-[50rem] w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative",
							children: [(0, a.jsx)(C.Z, {
								showBeam: !0,
								className: "-top-1 block"
							}), (0, a.jsx)("div", {
								className: "absolute h-40 w-full bottom-0 md:-bottom-10 inset-x-0 scale-[1.2] z-20 pointer-events-none bg-charcoal [mask-image:linear-gradient(to_top,white_30%,transparent)]"
							}), (0, a.jsx)("div", {
								className: "absolute inset-0 z-20  bg-transparent group-hover:bg-black/0 transition-all duration-200 flex items-center justify-center",
								children: (0, a.jsx)(_, {})
							}), (0, a.jsx)("div", {
								className: " h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ",
								children: i
							})]
						})
					}
			},
			25636: function(e, t, s) {
				"use strict";
				s.d(t, {
					PricingGrid: function() {
						return y
					}
				});
				var a = s(57437),
					r = s(2265),
					i = s(85444),
					n = s(29056),
					o = s(87138);
				let l = e => (0, a.jsx)(o.default, {
					className: "text-neutral-400 hover:text-white border-b-[1px] border-neutral-400 pb-0.5 hover:border-white  transition duration-200",
					...e,
					children: e.children
				});
				var c = s(29893),
					d = s(37440),
					m = s(15088),
					u = s(5056),
					p = s(62784);
				let x = e => {
					let {
						checked: t,
						setChecked: s
					} = e, i = (0, r.useId)();
					return (0, a.jsxs)("form", {
						className: "flex space-x-4  antialiased items-center",
						children: [(0, a.jsx)("p", {
							className: (0, d.cn)("text-sm text-neutral-400 transition duration-200", !t && "text-neutral-100"),
							children: "monthly"
						}), (0, a.jsxs)("label", {
							htmlFor: i,
							className: (0, d.cn)("h-5 px-1 w-[40px]  flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full  relative cursor-pointer transition duration-200", t ? "bg-neutral-700" : "bg-neutral-900 border-neutral-500"),
							children: [(0, a.jsx)(p.E.div, {
								initial: {
									height: "12px",
									width: "12px",
									x: t ? -2 : 20
								},
								animate: {
									height: ["12px", "10px", "12px"],
									width: ["12px", "18px", "12px", "12px"],
									x: t ? 20 : -2
								},
								transition: {
									duration: .3,
									delay: .1
								},
								className: (0, d.cn)("h-[20px] block rounded-full bg-white shadow-md z-10")
							}, String(t)), (0, a.jsx)("input", {
								type: "checkbox",
								checked: t,
								onChange: e => s(e.target.checked),
								className: "hidden",
								id: i
							})]
						}), (0, a.jsx)("p", {
							className: (0, d.cn)("text-sm text-neutral-400 transition duration-200", t && "text-neutral-100"),
							children: "yearly"
						})]
					})
				};
				var h = s(21932),
					f = s(66942);
				let g = () => {
						let [e, t] = (0, r.useState)([{
							title: "netflix",
							src: "/logos/netflix.png"
						}, {
							title: "google",
							src: "/logos/google.webp"
						}, {
							title: "meta",
							src: "/logos/meta.png"
						}, {
							title: "onlyfans",
							src: "/logos/onlyfans.png"
						}, {
							title: "netflix second",
							src: "/logos/netflix.png"
						}, {
							title: "google second",
							src: "/logos/google.webp"
						}, {
							title: "meta second",
							src: "/logos/meta.png"
						}, {
							title: "onlyfans second",
							src: "/logos/onlyfans.png"
						}]);
						return (0, a.jsxs)("div", {
							className: "pt-20 pb-40 h-40",
							children: [(0, a.jsx)("p", {
								className: "text-neutral-400 text-center mb-4",
								children: "Trusted by big industries"
							}), (0, a.jsxs)("div", {
								className: "flex justify-center gap-4 max-w-7xl mx-auto relative",
								children: [(0, a.jsx)("div", {
									className: "absolute inset-0 bg-charcoal grayscale z-40 pointer-events-none [mask-image:_radial-gradient(circle,_transparent_10%,_#000000_100%)]"
								}), (0, a.jsx)(h.Z, {
									children: e.map((e, t) => (0, a.jsx)(f.BlurImage, {
										src: e.src,
										alt: e.title,
										width: 100,
										height: 100,
										className: " mx-8 object-contain grayscale hover:grayscale-0 transition duration-200"
									}, e.title + t))
								})]
							})]
						})
					},
					y = () => {
						let e = [{
								title: "Hobby",
								description: "For individuals trying out the product",
								monthlyPrice: 0,
								yearlyPrice: 0,
								features: ["Access to all tools for 14 days", "No credit card required", "Community Support", (0, a.jsxs)("span", {
									children: ["Access to", " ", (0, a.jsx)(l, {
										href: "https://ui.aceternity.com",
										children: "Aceternity UI"
									})]
								}, "access")],
								onClick: () => {
									console.log("clicked")
								},
								ctaText: "Get Started"
							}, {
								title: "Starter",
								description: "For serious founders",
								monthlyPrice: 20,
								yearlyPrice: 100,
								features: ["Everything in Hobby +", "Access to Wearwolves Corp AI", "Priority tools access", (0, a.jsxs)("span", {
									children: ["Support for", " ", (0, a.jsx)(l, {
										href: "https://algochurn.com",
										children: "Slack"
									}), " and", " ", (0, a.jsx)(l, {
										href: "https://twitter.com/mannupaaji",
										children: "Twitter"
									})]
								}, "access"), "Priority support", "99.67% Uptime SLA", (0, a.jsxs)("span", {
									children: ["Access to", " ", (0, a.jsx)(l, {
										href: "https://ui.aceternity.com/templates",
										children: "Aceternity UI Templates"
									})]
								}, "access")],
								onClick: () => {
									console.log("clicked")
								},
								ctaText: "Get Started"
							}, {
								title: "Pro",
								description: "For small to large businesses",
								monthlyPrice: 30,
								yearlyPrice: 150,
								features: ["Everything in Starter + ", "Access to our dev team", "Coffee with the CEO", (0, a.jsxs)("span", {
									children: ["Access to", " ", (0, a.jsx)(l, {
										href: "https://ui.aceternity.com",
										children: "Aceternity UI"
									})]
								}, "access"), "Request tools", "Advanced analytics", "Customizable dashboards", "24/7 customer support", "Unlimited data storage", "Enhanced security features"],
								featured: !0,
								onClick: () => {
									console.log("clicked")
								},
								ctaText: "Get Started"
							}, {
								title: "Enterprise",
								description: "For large scale businesses",
								monthlyPrice: 0,
								yearlyPrice: 0,
								features: ["Everything in Pro + ", "HIPAA and SOC2 compliance", "Bulk email support", "Customizable dashboards", "24/7 customer support"],
								onClick: () => {
									console.log("clicked")
								},
								ctaText: "Book a demo"
							}],
							[t, s] = (0, r.useState)(!1);
						return (0, a.jsxs)("div", {
							children: [(0, a.jsx)("div", {
								className: "flex justify-center",
								children: (0, a.jsx)(x, {
									checked: t,
									setChecked: s
								})
							}), (0, a.jsx)(i.W, {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 py-20",
								children: e.map((e, s) => (0, a.jsxs)("div", {
									className: (0, d.cn)("flex flex-col justify-between items-start px-6 py-4 rounded-lg relative overflow-hidden", e.featured && "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950"),
									children: [e.featured && (0, a.jsx)(u.Z, {
										showBeam: !0,
										className: "top-0 block"
									}), (0, a.jsxs)("div", {
										children: [(0, a.jsx)("h3", {
											className: "text-base font-normal",
											children: e.title
										}), (0, a.jsx)("p", {
											className: "text-lg text-neutral-400 mt-4 font-medium",
											children: "Enterprise" === e.title ? "Custom" : "$".concat(t ? e.yearlyPrice : e.monthlyPrice, " / ").concat(t ? "year" : "month")
										}), (0, a.jsx)("p", {
											className: "text-sm text-neutral-4000 mt-4",
											children: e.description
										}), (0, a.jsx)("div", {
											className: "mt-4",
											children: e.features.map((e, t) => (0, a.jsx)(b, {
												children: e
											}, "feature-".concat(s, "-").concat(t)))
										})]
									}), (0, a.jsx)(c.z, {
										variant: e.featured ? "primary" : "muted",
										onClick: e.onClick,
										className: "mt-4",
										children: e.ctaText
									})]
								}, e.title + s))
							}), (0, a.jsx)(g, {})]
						})
					},
					b = e => {
						let {
							children: t
						} = e;
						return (0, a.jsxs)("div", {
							className: "flex gap-2 items-start my-4",
							children: [(0, a.jsx)(n.Z, {
								className: "h-4 w-4 text-neutral-300 mt-0.5"
							}), (0, a.jsx)("div", {
								className: "text-sm text-neutral-400",
								children: (0, a.jsx)(m.default, {
									children: t
								})
							})]
						})
					}
			},
			36538: function(e) {
				e.exports = {
					meteor: "styles_meteor__lktYZ"
				}
			}
		},
		function(e) {
			e.O(0, [7454, 6950, 1779, 2516, 6305, 7240, 7138, 8173, 4868, 2784, 9965, 68, 1671, 9553, 1459, 7910, 1769, 2971, 7023, 1744], function() {
				return e(e.s = 82673)
			}), _N_E = e.O()
		}
	]); 
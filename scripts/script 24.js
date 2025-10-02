 self.__wrap_n = self.__wrap_n || (self.CSS && CSS.supports("text-wrap", "balance") ? 1 : 2);
self.__wrap_b = (e, t, n) => {
	let r = null == (n = n || document.querySelector('[data-br="'.concat(e, '"]'))) ? void 0 : n.parentElement;
	if (!r) return;
	let l = e => n.style.maxWidth = e + "px";
	n.style.maxWidth = "";
	let a = r.clientWidth,
		i = r.clientHeight,
		o = a / 2 - .25,
		u = a + .5,
		s;
	if (a) {
		for (l(o), o = Math.max(n.scrollWidth, o); o + 1 < u;) l(s = Math.round((o + u) / 2)), r.clientHeight === i ? u = s : o = s;
		l(u * t + a * (1 - t))
	}
	n.__wrap_o || "undefined" != typeof ResizeObserver && (n.__wrap_o = new ResizeObserver(() => {
		self.__wrap_b(0, +n.dataset.brr, n)
	})).observe(r)
};
self.__wrap_n != 1 && self.__wrap_b(":R4l7puja:", 1) 
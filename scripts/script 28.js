 self.__wrap_n = self.__wrap_n || (self.CSS && CSS.supports("text-wrap", "balance") ? 1 : 2);
 self.__wrap_b = (e, t, l) => {
 	let r = null == (l = l || document.querySelector(`[data-br="${e}"]`)) ? void 0 : l.parentElement;
 	if (!r) return;
 	let a = e => l.style.maxWidth = e + "px";
 	l.style.maxWidth = "";
 	let n = r.clientWidth,
 		i = r.clientHeight,
 		s = n / 2 - .25,
 		o = n + .5,
 		u;
 	if (n) {
 		for (a(s), s = Math.max(l.scrollWidth, s); s + 1 < o;) a(u = Math.round((s + o) / 2)), r.clientHeight === i ? o = u : s = u;
 		a(o * t + n * (1 - t))
 	}
 	l.__wrap_o || "undefined" != typeof ResizeObserver && (l.__wrap_o = new ResizeObserver(() => {
 		self.__wrap_b(0, +l.dataset.brr, l)
 	})).observe(r)
 };
 self.__wrap_n != 1 && self.__wrap_b(":Rr97puja:", 1) 
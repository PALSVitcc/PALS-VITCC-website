! function (a) {
    a.fn.isInViewport = function b(c) {
        c && (c.tolerance = Math.round(parseFloat(c.tolerance)), isNaN(c.tolerance) && (c.tolerance = 0), "boolean" != typeof c.debug && (c.debug = !1));
        var d = this.get(0),
            e = d.getBoundingClientRect(),
            f = e.top,
            g = e.bottom,
            h = a(window).scrollTop() === a(document).height() - a(window).height() ? !0 : !1,
            i = "" + d.offsetLeft + d.offsetTop + e.height + e.width,
            j = a.extend({
                tolerance: 0,
                debug: !1
            }, c),
            k = !1;
        return b.elementsAfterCurrent = b.elementsAfterCurrent || {}, b.elementsAfterCurrent[i] = b.elementsAfterCurrent[i] || this.nextAll(), j.debug && (console.log("---------------------------------------"), console.log("index: " + i), console.log("div: " + this.text().trim()), console.log("top: " + f), console.log("bottom: " + g), console.log("tolerance: " + j.tolerance), console.log("end of page: " + h), console.log("scrollTop: " + a(window).scrollTop()), console.log("doc height:" + a(document).height()), console.log("windowHeight using $(window).height(): " + a(window).height())), k = j.tolerance ? f >= 0 ? f <= j.tolerance ? !0 : !1 : g > j.tolerance ? !0 : !1 : f >= 0 && f <= a(window).height() ? !0 : !1, h && (1 !== b.elementsAfterCurrent[i].length && b.elementsAfterCurrent[i].length || (k = 0 > f ? !1 : !0)), k
    }, a.extend(a.expr[":"], {
        "in-viewport": function (b, c, d) {
            return d[3] ? a(b).isInViewport({
                tolerance: d[3]
            }) : a(b).isInViewport()
        }
    })
}(jQuery);

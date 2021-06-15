var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/_components/_scroll_tabs" ], {
    1881: function(t, n, e) {
        e.r(n);
        var o = e("d0bc"), r = e.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = r.a;
    },
    "28c3": function(t, n, e) {
        var o = e("afb5");
        e.n(o).a;
    },
    "71c4": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    a391: function(t, n, e) {
        e.r(n);
        var o = e("71c4"), r = e("1881");
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(c);
        e("28c3");
        var a = e("f0c5"), i = Object(a.a)(r.default, o.b, o.c, !1, null, "aed3b6e8", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    afb5: function(t, n, e) {},
    d0bc: function(n, e, o) {
        function r(n) {
            return (r = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(n) {
                return void 0 === n ? "undefined" : t(n);
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : t(n);
            })(n);
        }
        function c() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap();
            return c = function() {
                return t;
            }, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== r(t) && "function" != typeof t) return {
                default: t
            };
            var n = c();
            if (n && n.has(t)) return n.get(t);
            var e = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
                var i = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                i && (i.get || i.set) ? Object.defineProperty(e, a, i) : e[a] = t[a];
            }
            return e.default = t, n && n.set(t, e), e;
        }(o("9554")), i = wx.getSystemInfoSync().windowWidth / 750, l = 40 * i, u = 750 * i, f = {
            data: function() {
                return {
                    marginLeft: 0,
                    slide_bar_width: 0
                };
            },
            watch: {
                scroll_tabs: {
                    handler: function() {
                        var t = this;
                        this.$nextTick(function() {
                            var n = t.$mp.component.createSelectorQuery();
                            n.select("#scroll").fields({
                                size: !0,
                                scrollOffset: !0
                            }), n.exec(function(n) {
                                n.length && (t.slide_bar_width = u / n[0].scrollWidth * l);
                            });
                        });
                    },
                    immediate: !0
                }
            },
            props: {
                scroll_tabs: Array,
                scroll_tabs_bg_width: String,
                scroll_tabs_bg: String,
                scroll_tabs_bg_height: String
            },
            methods: {
                scroll: function(t) {
                    var n = t.detail, e = n.scrollLeft / n.scrollWidth * l, o = l - this.slide_bar_width;
                    this.marginLeft = e < 0 ? 0 : e > o ? o : e;
                },
                goTab: function(t) {
                    var n = t.currentTarget.dataset, e = n.url, o = n.name;
                    this.$sendCtmEvtLog("首页金刚区-".concat(o)), (0, a.askAuthNavigator)(t, e);
                }
            }
        };
        e.default = f;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/_components/_scroll_tabs-create-component", {
    "pages/index/_components/_scroll_tabs-create-component": function(t, n, e) {
        e("543d").createComponent(e("a391"));
    }
}, [ [ "pages/index/_components/_scroll_tabs-create-component" ] ] ]);
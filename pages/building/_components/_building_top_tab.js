require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_building_top_tab" ], {
    "42dc": function(t, n, e) {
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
    "78ea": function(t, n, e) {
        function o(t, n) {
            return u(t) || c(t, n) || a(t, n) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t, n) {
            if (t) {
                if ("string" == typeof t) return i(t, n);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? i(t, n) : void 0;
            }
        }
        function i(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, o = new Array(n); e < n; e++) o[e] = t[e];
            return o;
        }
        function c(t, n) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var e = [], o = !0, r = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(o = (i = c.next()).done) && (e.push(i.value), 
                    !n || e.length !== n); o = !0) ;
                } catch (t) {
                    r = !0, a = t;
                } finally {
                    try {
                        o || null == c.return || c.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return e;
            }
        }
        function u(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var l = (0, e("f51f").getNavigationInfo)().navigation_height, f = {
            props: {
                tabs: {
                    type: Array,
                    default: []
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                position: {
                    type: String
                }
            },
            data: function() {
                return {
                    height: 0,
                    navigation_height: l
                };
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    var n = t.$mp.component.createSelectorQuery();
                    n.select("#top-module-tabs").boundingClientRect(), n.exec(function(n) {
                        var e = o(n, 1)[0];
                        e && e.height && t.$emit("changeHeight", e.height);
                    });
                });
            },
            methods: {
                backHome: function() {
                    wx.pageScrollTo({
                        scrollTop: 0
                    });
                },
                clickTab: function(t, n) {
                    this.$emit("changePosition", t, n);
                }
            }
        };
        n.default = f;
    },
    "7d1c": function(t, n, e) {
        var o = e("99bf");
        e.n(o).a;
    },
    "99bf": function(t, n, e) {},
    a8f2: function(t, n, e) {
        e.r(n);
        var o = e("78ea"), r = e.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = r.a;
    },
    bc2a: function(t, n, e) {
        e.r(n);
        var o = e("42dc"), r = e("a8f2");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        e("7d1c");
        var i = e("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "9ef3ad6c", null, !1, o.a, void 0);
        n.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_building_top_tab-create-component", {
    "pages/building/_components/_building_top_tab-create-component": function(t, n, e) {
        e("543d").createComponent(e("bc2a"));
    }
}, [ [ "pages/building/_components/_building_top_tab-create-component" ] ] ]);
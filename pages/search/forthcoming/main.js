(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/forthcoming/main" ], {
    "039c": function(n, e, t) {
        t.r(e);
        var o = t("15c1"), c = t("d3e0");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        var a = t("f0c5"), d = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = d.exports;
    },
    "15c1": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "6de3": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("039c")).default);
        }).call(this, t("543d").createPage);
    },
    d3e0: function(n, e, t) {
        t.r(e);
        var o = t("de432"), c = t.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = c.a;
    },
    de432: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            onLoad: function() {
                wx.showLoading();
            },
            onReady: function() {
                wx.hideLoading(), wx.redirectTo({
                    url: "/pages/index/search/main?type=即将取证"
                });
            }
        };
        e.default = o;
    }
}, [ [ "6de3", "common/runtime", "common/vendor" ] ] ]);
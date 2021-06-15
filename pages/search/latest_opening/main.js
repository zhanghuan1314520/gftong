(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/latest_opening/main" ], {
    "1fcc": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "31f3": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("5b83")).default);
        }).call(this, t("543d").createPage);
    },
    "41e3": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            onLoad: function() {
                wx.showLoading();
            },
            onReady: function() {
                wx.hideLoading(), wx.redirectTo({
                    url: "/pages/index/search/main?type=最新开盘"
                });
            }
        };
        e.default = o;
    },
    "5b83": function(n, e, t) {
        t.r(e);
        var o = t("1fcc"), a = t("7415");
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        var c = t("f0c5"), f = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = f.exports;
    },
    7415: function(n, e, t) {
        t.r(e);
        var o = t("41e3"), a = t.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    }
}, [ [ "31f3", "common/runtime", "common/vendor" ] ] ]);
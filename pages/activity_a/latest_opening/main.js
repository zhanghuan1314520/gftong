require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/latest_opening/main" ], {
    5323: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
    },
    a6f0: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onReady: function() {
                wx.redirectTo({
                    url: "/pages/history/main?type=最新开盘"
                });
            }
        };
        e.default = a;
    },
    ad79: function(n, e, t) {
        t.r(e);
        var a = t("5323"), u = t("f730");
        for (var o in u) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(o);
        var f = t("f0c5"), r = Object(f.a)(u.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    f517: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("ad79")).default);
        }).call(this, t("543d").createPage);
    },
    f730: function(n, e, t) {
        t.r(e);
        var a = t("a6f0"), u = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = u.a;
    }
}, [ [ "f517", "common/runtime", "common/vendor" ] ] ]);
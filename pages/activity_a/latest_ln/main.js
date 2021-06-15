require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/latest_ln/main" ], {
    "3c97": function(n, e, t) {
        t.r(e);
        var a = t("4a95"), c = t("a841");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        var o = t("f0c5"), r = Object(o.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "4a95": function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    8532: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("3c97")).default);
        }).call(this, t("543d").createPage);
    },
    "8bcc": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onReady: function() {
                wx.redirectTo({
                    url: "/pages/history/main?type=最新摇号"
                });
            }
        };
        e.default = a;
    },
    a841: function(n, e, t) {
        t.r(e);
        var a = t("8bcc"), c = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = c.a;
    }
}, [ [ "8532", "common/runtime", "common/vendor" ] ] ]);
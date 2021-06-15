require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/forthcoming_sale/main" ], {
    "676d": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
    },
    "7b4b": function(n, e, t) {
        t.r(e);
        var o = t("d5c6"), u = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = u.a;
    },
    d5c6: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            onReady: function() {
                wx.redirectTo({
                    url: "/pages/history/main?type=即将取证"
                });
            }
        };
        e.default = o;
    },
    dc5a: function(n, e, t) {
        t.r(e);
        var o = t("676d"), u = t("7b4b");
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        var c = t("f0c5"), r = Object(c.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    fe46: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("dc5a")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "fe46", "common/runtime", "common/vendor" ] ] ]);
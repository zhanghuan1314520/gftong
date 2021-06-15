require("common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/main" ], {
    2388: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onLoad: function() {
                wx.switchTab({
                    url: "/pages/messages/main"
                });
            }
        };
        e.default = a;
    },
    "523e": function(n, e, t) {
        t.r(e);
        var a = t("7acc"), c = t("6d51");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        var o = t("f0c5"), f = Object(o.a)(c.default, a.b, a.c, !1, null, "4f5db8c4", null, !1, a.a, void 0);
        e.default = f.exports;
    },
    "6d51": function(n, e, t) {
        t.r(e);
        var a = t("2388"), c = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = c.a;
    },
    "7acc": function(n, e, t) {
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
    f09e: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("523e")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "f09e", "common/runtime", "common/vendor" ] ] ]);
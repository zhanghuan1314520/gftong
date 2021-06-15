(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/reg_step/main" ], {
    "2a78": function(n, e, t) {
        var a = t("980c");
        t.n(a).a;
    },
    "3c54": function(n, e, t) {
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
    "40f8": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onShareAppMessage: function() {
                var n = {
                    title: "".concat("杭州购房通", "-新手购房网络登记指南"),
                    path: "/pages/reg_step/main"
                };
                return this.getShareInfo(n);
            },
            components: {}
        };
        e.default = a;
    },
    "904a": function(n, e, t) {
        t.r(e);
        var a = t("3c54"), c = t("a625");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        t("2a78");
        var o = t("f0c5"), f = Object(o.a)(c.default, a.b, a.c, !1, null, "aa385856", null, !1, a.a, void 0);
        e.default = f.exports;
    },
    9509: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("904a")).default);
        }).call(this, t("543d").createPage);
    },
    "980c": function(n, e, t) {},
    a625: function(n, e, t) {
        t.r(e);
        var a = t("40f8"), c = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = c.a;
    }
}, [ [ "9509", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/qa/main" ], {
    4852: function(n, e, t) {
        var a = t("d669");
        t.n(a).a;
    },
    9777: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onShareAppMessage: function() {
                var n = {
                    title: "".concat("杭州购房通", "-常见问题"),
                    path: "/pages/packageC/qa/main"
                };
                return this.getShareInfo(n);
            },
            components: {}
        };
        e.default = a;
    },
    ae42: function(n, e, t) {
        t.r(e);
        var a = t("9777"), o = t.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    b6db: function(n, e, t) {
        t.r(e);
        var a = t("e30b"), o = t("ae42");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("4852");
        var c = t("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, "5d491d25", null, !1, a.a, void 0);
        e.default = r.exports;
    },
    bb70: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("b6db")).default);
        }).call(this, t("543d").createPage);
    },
    d669: function(n, e, t) {},
    e30b: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    }
}, [ [ "bb70", "common/runtime", "common/vendor" ] ] ]);
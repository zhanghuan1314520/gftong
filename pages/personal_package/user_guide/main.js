require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/user_guide/main" ], {
    "028a": function(n, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "新手指引",
                    path: "/pages/personal_package/user_guide/main"
                });
            },
            components: {}
        };
        e.default = t;
    },
    "24f6": function(n, e, a) {
        var t = a("d193");
        a.n(t).a;
    },
    "2a44": function(n, e, a) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            a("6cdc"), e(a("66fd")), n(e(a("eb45")).default);
        }).call(this, a("543d").createPage);
    },
    "6ea7": function(n, e, a) {
        a.r(e);
        var t = a("028a"), u = a.n(t);
        for (var o in t) [ "default" ].indexOf(o) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(o);
        e.default = u.a;
    },
    "70c4": function(n, e, a) {
        a.d(e, "b", function() {
            return t;
        }), a.d(e, "c", function() {
            return u;
        }), a.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
    },
    d193: function(n, e, a) {},
    eb45: function(n, e, a) {
        a.r(e);
        var t = a("70c4"), u = a("6ea7");
        for (var o in u) [ "default" ].indexOf(o) < 0 && function(n) {
            a.d(e, n, function() {
                return u[n];
            });
        }(o);
        a("24f6");
        var c = a("f0c5"), r = Object(c.a)(u.default, t.b, t.c, !1, null, "1788c7c7", null, !1, t.a, void 0);
        e.default = r.exports;
    }
}, [ [ "2a44", "common/runtime", "common/vendor" ] ] ]);
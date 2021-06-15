require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/consultant_rule/_content" ], {
    "04ba": function(n, e, a) {
        a.r(e);
        var t = a("5aab"), o = a.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = o.a;
    },
    "2a38": function(n, e, a) {},
    "5aab": function(n, e, a) {
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = t(a("80d6")), c = {
            name: "RULE_DETAIL",
            mixins: [ (t(a("8e44")), t(a("61f1"))).default ],
            data: function() {
                return {
                    VUE_APP_NAME: "".concat("杭州购房通")
                };
            },
            methods: {
                copyShare: function() {
                    o.default.setClipboardData("推荐一个实用的微信小工具，购房咨询查询神器，点击即可使用，获得杭州全部楼盘最新信息！");
                }
            }
        };
        e.default = c;
    },
    bd8d: function(n, e, a) {
        a.r(e);
        var t = a("c56f"), o = a("04ba");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(c);
        a("fc31");
        var u = a("f0c5"), r = Object(u.a)(o.default, t.b, t.c, !1, null, "15725c28", null, !1, t.a, void 0);
        e.default = r.exports;
    },
    c56f: function(n, e, a) {
        a.d(e, "b", function() {
            return t;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    fc31: function(n, e, a) {
        var t = a("2a38");
        a.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/consultant_rule/_content-create-component", {
    "pages/personal_package/consultant_rule/_content-create-component": function(n, e, a) {
        a("543d").createComponent(a("bd8d"));
    }
}, [ [ "pages/personal_package/consultant_rule/_content-create-component" ] ] ]);
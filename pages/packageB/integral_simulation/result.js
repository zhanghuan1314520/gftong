require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/integral_simulation/result" ], {
    "0a49": function(e, n, t) {
        t.r(n);
        var a = t("0dbe"), i = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = i.a;
    },
    "0dbe": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            mixins: [],
            components: {},
            onShareAppMessage: function() {
                var e = {
                    title: "杭州市流动人口居住证积分一键模拟查询~",
                    path: "/pages/packageB/integral_simulation/main",
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageB/integral_simulation/share.png"
                };
                return this.getShareInfo(e);
            },
            data: function() {
                return {
                    name: "",
                    idcard: "",
                    base_score: 0,
                    plus_score: 0,
                    negative_score: 0
                };
            },
            computed: {
                total_score: function() {
                    return Math.max(this.base_score + this.plus_score + this.negative_score, 10);
                }
            },
            onLoad: function(e) {
                var n = e.name, t = e.idcard, a = e.base_score, i = e.plus_score, o = e.negative_score;
                this.name = n, this.idcard = t, this.base_score = 1 * a, this.plus_score = 1 * i, 
                this.negative_score = 1 * o;
            },
            methods: {}
        };
        n.default = a;
    },
    "34b6": function(e, n, t) {},
    a939d: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("b63f")).default);
        }).call(this, t("543d").createPage);
    },
    b63f: function(e, n, t) {
        t.r(n);
        var a = t("dbbf"), i = t("0a49");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        t("f4b1");
        var r = t("f0c5"), c = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    dbbf: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    f4b1: function(e, n, t) {
        var a = t("34b6");
        t.n(a).a;
    }
}, [ [ "a939d", "common/runtime", "common/vendor" ] ] ]);
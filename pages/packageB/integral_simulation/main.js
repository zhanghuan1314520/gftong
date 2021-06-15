require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/integral_simulation/main" ], {
    "1a8a": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("9554")), o = {
            mixins: [],
            components: {
                TopRightShare: function() {
                    t.e("components/views/top_right_share").then(function() {
                        return resolve(t("73b4"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            onShareAppMessage: function() {
                var n = {
                    title: "杭州市流动人口居住证积分一键模拟查询~",
                    path: "/pages/packageB/integral_simulation/main",
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageB/integral_simulation/share.png"
                };
                return this.getShareInfo(n);
            },
            data: function() {
                return {};
            },
            computed: {},
            onLoad: function(n) {},
            methods: {
                goQuery: function(n) {
                    (0, a.default)(n, function() {
                        wx.navigateTo({
                            url: "/pages/packageB/integral_simulation/steps"
                        });
                    }, "需要认证用户信息");
                }
            }
        };
        e.default = o;
    },
    "3a74": function(n, e, t) {
        t.r(e);
        var a = t("1a8a"), o = t.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        e.default = o.a;
    },
    "860b": function(n, e, t) {
        t.r(e);
        var a = t("e81b"), o = t("3a74");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        t("d747");
        var u = t("f0c5"), r = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "9fb0": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("860b")).default);
        }).call(this, t("543d").createPage);
    },
    a183: function(n, e, t) {},
    d747: function(n, e, t) {
        var a = t("a183");
        t.n(a).a;
    },
    e81b: function(n, e, t) {
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
}, [ [ "9fb0", "common/runtime", "common/vendor" ] ] ]);
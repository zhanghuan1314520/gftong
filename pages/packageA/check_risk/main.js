require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/check_risk/main" ], {
    "2bb1": function(n, e, t) {
        t.r(e);
        var a = t("44f5"), c = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = c.a;
    },
    "44f5": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            data: function() {
                return {
                    show_share: !1
                };
            },
            onShareAppMessage: function(n) {
                var e = {
                    title: "各地返乡防疫政策查询工具，点击立即查询~",
                    path: "/pages/index/main?sub_page=".concat(encodeURIComponent("/pages/packageA/check_risk/main")),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/share-img/check_risk.png"
                };
                return this.getShareInfo(e);
            },
            mounted: function() {
                var n = this;
                setTimeout(function() {
                    n.show_share = !0;
                }, 300);
            }
        };
        e.default = a;
    },
    "510a": function(n, e, t) {
        var a = t("e312");
        t.n(a).a;
    },
    "73b1": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("909b")).default);
        }).call(this, t("543d").createPage);
    },
    "909b": function(n, e, t) {
        t.r(e);
        var a = t("d0f1"), c = t("2bb1");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(o);
        t("510a");
        var i = t("f0c5"), r = Object(i.a)(c.default, a.b, a.c, !1, null, "5c38ef22", null, !1, a.a, void 0);
        e.default = r.exports;
    },
    d0f1: function(n, e, t) {
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
    e312: function(n, e, t) {}
}, [ [ "73b1", "common/runtime", "common/vendor" ] ] ]);
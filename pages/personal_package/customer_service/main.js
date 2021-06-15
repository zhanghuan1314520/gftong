require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/customer_service/main" ], {
    "0c4c": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            name: "OFFICIAL_WEIXIN",
            data: function() {
                return {
                    src: "https://cdn.vip-wifi.com/hzfangchan/customer-service.html"
                };
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "官方客服",
                    path: "pages/personal_package/customer_service/main"
                });
            }
        };
        n.default = c;
    },
    "212f": function(e, n, t) {
        t.d(n, "b", function() {
            return c;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "6c81": function(e, n, t) {
        t.r(n);
        var c = t("0c4c"), a = t.n(c);
        for (var r in c) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(r);
        n.default = a.a;
    },
    "91e9": function(e, n, t) {
        t.r(n);
        var c = t("212f"), a = t("6c81");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        var u = t("f0c5"), o = Object(u.a)(a.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = o.exports;
    },
    "983b": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("91e9")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "983b", "common/runtime", "common/vendor" ] ] ]);
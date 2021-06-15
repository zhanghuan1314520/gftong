require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/coin/_header" ], {
    "1bb7": function(e, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = wx.getSystemInfoSync().system.indexOf("iOS") > -1, c = {
            name: "Coin_Header",
            computed: {
                userHeadimgurl: function() {
                    return this.headimgurl ? "".concat(this.headimgurl).concat("?x-oss-process=image/resize,w_114,h_114") : "";
                }
            },
            methods: {
                goCharge: function() {
                    o ? wx.showModal({
                        title: "提示",
                        content: "由于相关规范，iOS功能暂不可用。",
                        showCancel: !1
                    }) : wx.navigateTo({
                        url: "/pages/personal_package/coin/charge/main"
                    });
                }
            },
            props: [ "gold_coins", "score", "show_score", "show_charge", "headimgurl" ]
        };
        n.default = c;
    },
    "32e5": function(e, n, a) {
        a.r(n);
        var o = a("1bb7"), c = a.n(o);
        for (var t in o) [ "default" ].indexOf(t) < 0 && function(e) {
            a.d(n, e, function() {
                return o[e];
            });
        }(t);
        n.default = c.a;
    },
    "522a": function(e, n, a) {},
    "547c": function(e, n, a) {
        a.d(n, "b", function() {
            return o;
        }), a.d(n, "c", function() {
            return c;
        }), a.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    },
    "6b3d": function(e, n, a) {
        var o = a("522a");
        a.n(o).a;
    },
    e290: function(e, n, a) {
        a.r(n);
        var o = a("547c"), c = a("32e5");
        for (var t in c) [ "default" ].indexOf(t) < 0 && function(e) {
            a.d(n, e, function() {
                return c[e];
            });
        }(t);
        a("6b3d");
        var r = a("f0c5"), i = Object(r.a)(c.default, o.b, o.c, !1, null, "3f905b48", null, !1, o.a, void 0);
        n.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/coin/_header-create-component", {
    "pages/personal_package/coin/_header-create-component": function(e, n, a) {
        a("543d").createComponent(a("e290"));
    }
}, [ [ "pages/personal_package/coin/_header-create-component" ] ] ]);
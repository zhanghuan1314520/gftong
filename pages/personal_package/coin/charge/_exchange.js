require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/coin/charge/_exchange" ], {
    "646f": function(e, n, a) {
        a.r(n);
        var c = a("c36d"), o = a.n(c);
        for (var t in c) [ "default" ].indexOf(t) < 0 && function(e) {
            a.d(n, e, function() {
                return c[e];
            });
        }(t);
        n.default = o.a;
    },
    6576: function(e, n, a) {
        a.r(n);
        var c = a("bdae"), o = a("646f");
        for (var t in o) [ "default" ].indexOf(t) < 0 && function(e) {
            a.d(n, e, function() {
                return o[e];
            });
        }(t);
        a("e4cc");
        var r = a("f0c5"), u = Object(r.a)(o.default, c.b, c.c, !1, null, "3ff78832", null, !1, c.a, void 0);
        n.default = u.exports;
    },
    9414: function(e, n, a) {},
    bdae: function(e, n, a) {
        a.d(n, "b", function() {
            return c;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {});
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    c36d: function(e, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(a("3892")), o = {
            name: "COIN_EXCHANGE_SECTION",
            data: function() {
                return {
                    error: "",
                    input_value: ""
                };
            },
            methods: {
                changeInput: function(e) {
                    this.input_value = e.target.value;
                },
                exchange: function(e) {
                    var n = this, a = e.target.value.gold_coins;
                    !/^\d+$/.test(a) || a <= 0 ? this.error = "请输入正确的数字" : c.default.exchangeCoins(a).then(function(e) {
                        422 === e.code ? n.error = e.error_message : (n.input_value = "", n.error = "", 
                        wx.showToast({
                            title: "兑换成功"
                        }), n.$emit("success"));
                    });
                }
            },
            components: {
                Rules: function() {
                    a.e("pages/personal_package/consultant_bidding/_show_rule").then(function() {
                        return resolve(a("1348"));
                    }.bind(null, a)).catch(a.oe);
                }
            },
            props: [ "rules", "show", "exchange_gold_coins_desc", "exchange_scale_desc" ]
        };
        n.default = o;
    },
    e4cc: function(e, n, a) {
        var c = a("9414");
        a.n(c).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/coin/charge/_exchange-create-component", {
    "pages/personal_package/coin/charge/_exchange-create-component": function(e, n, a) {
        a("543d").createComponent(a("6576"));
    }
}, [ [ "pages/personal_package/coin/charge/_exchange-create-component" ] ] ]);
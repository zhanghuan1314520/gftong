require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/coin/charge/_charge" ], {
    "1a10": function(e, n, t) {},
    "427f": function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    9351: function(e, n, t) {
        var r = t("1a10");
        t.n(r).a;
    },
    "9f4a": function(e, n, t) {
        function r(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function o(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? r(Object(t), !0).forEach(function(n) {
                    a(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function a(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("3892")), i = wx.getSystemInfoSync().system.indexOf("iOS") > -1, u = {
            name: "COIN_CHARGE_SECTION",
            data: function() {
                return {
                    options: [ 20, 50, 100 ],
                    money: 20,
                    input_show: !1,
                    error: "",
                    isIOS: i
                };
            },
            methods: {
                showInput: function() {
                    this.input_show = !0;
                },
                hideInput: function() {
                    this.input_show = !1;
                },
                change: function(e) {
                    var n = e.currentTarget.dataset.value;
                    this.money = Number(n);
                },
                charge: function() {
                    this.pay(this.money);
                },
                submitPay: function(e) {
                    var n = e.target.value.money;
                    !/^\d+$/.test(n) || n <= 0 ? this.error = "请输入正确的金额" : this.pay(n);
                },
                pay: function(e) {
                    var n = this;
                    wx.showLoading({
                        title: "充值中"
                    }), c.default.pay(e).then(function(e) {
                        422 === e.code ? n.error = e.error_message : n.wxPay(e.payment_params);
                    });
                },
                wxPay: function(e) {
                    var n = this;
                    wx.requestPayment(o(o({}, e), {}, {
                        success: function() {
                            n.error = "", wx.showToast({
                                title: "支付成功"
                            }), n.$emit("success"), n.hideInput();
                        },
                        fail: function() {
                            n.error = "支付失败";
                        }
                    }));
                }
            },
            components: {
                IosRules: function() {
                    t.e("pages/personal_package/coin/charge/_ios_rules").then(function() {
                        return resolve(t("e454"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: [ "show" ]
        };
        n.default = u;
    },
    c32a: function(e, n, t) {
        t.r(n);
        var r = t("9f4a"), o = t.n(r);
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = o.a;
    },
    dfb1: function(e, n, t) {
        t.r(n);
        var r = t("427f"), o = t("c32a");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("9351");
        var c = t("f0c5"), i = Object(c.a)(o.default, r.b, r.c, !1, null, "1016b8fa", null, !1, r.a, void 0);
        n.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/coin/charge/_charge-create-component", {
    "pages/personal_package/coin/charge/_charge-create-component": function(e, n, t) {
        t("543d").createComponent(t("dfb1"));
    }
}, [ [ "pages/personal_package/coin/charge/_charge-create-component" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/coin/main" ], {
    "0362": function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = o(t("3892")), c = o(t("8e44"));
        o(t("41f4"));
        var u = {
            name: "MY_COIN",
            data: function() {
                return {
                    gold_coins: "",
                    records: [],
                    headimgurl: ""
                };
            },
            onShow: function() {
                var n = this;
                this.getData(), c.default.getUserInfo().then(function(e) {
                    var t = e.headimgurl;
                    n.headimgurl = t;
                });
            },
            methods: {
                getData: function() {
                    var n = this;
                    a.default.getExchangeInfo().then(function(e) {
                        n.gold_coins = e.gold_coins;
                    }), a.default.getRecords().then(function(e) {
                        n.records = e.items;
                    });
                }
            },
            components: {
                CoinHeader: function() {
                    t.e("pages/personal_package/coin/_header").then(function() {
                        return resolve(t("e290"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = u;
    },
    "14f9": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("445b")).default);
        }).call(this, t("543d").createPage);
    },
    "3f49": function(n, e, t) {
        t.r(e);
        var o = t("0362"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "445b": function(n, e, t) {
        t.r(e);
        var o = t("cd95"), a = t("3f49");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("cd66");
        var u = t("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, "e8dd9044", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "6e38": function(n, e, t) {},
    cd66: function(n, e, t) {
        var o = t("6e38");
        t.n(o).a;
    },
    cd95: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    }
}, [ [ "14f9", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
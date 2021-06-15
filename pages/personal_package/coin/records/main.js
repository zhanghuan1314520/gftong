require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/coin/records/main" ], {
    "1f85": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(o("3892")), c = {
            data: function() {
                return {
                    gold_coins: "",
                    records: []
                };
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var n = this;
                    t.default.getRecords().then(function(e) {
                        n.gold_coins = e.gold_coins, n.records = e.items;
                    });
                }
            },
            components: {
                CoinHeader: function() {
                    o.e("pages/personal_package/coin/_header").then(function() {
                        return resolve(o("e290"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        e.default = c;
    },
    2232: function(n, e, o) {},
    "2e0b": function(n, e, o) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            o("6cdc"), e(o("66fd")), n(e(o("b1fd")).default);
        }).call(this, o("543d").createPage);
    },
    b1fd: function(n, e, o) {
        o.r(e);
        var t = o("c541"), c = o("d29c");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        o("ce44");
        var r = o("f0c5"), u = Object(r.a)(c.default, t.b, t.c, !1, null, "acd81548", null, !1, t.a, void 0);
        e.default = u.exports;
    },
    c541: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    ce44: function(n, e, o) {
        var t = o("2232");
        o.n(t).a;
    },
    d29c: function(n, e, o) {
        o.r(e);
        var t = o("1f85"), c = o.n(t);
        for (var a in t) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    }
}, [ [ "2e0b", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
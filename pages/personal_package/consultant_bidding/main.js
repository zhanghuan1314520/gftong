require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/consultant_bidding/main" ], {
    "0418": function(n, t, o) {
        function e(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = e(o("c147")), i = {
            name: "Consultant_Bid",
            mixins: [ e(o("44b3")).default ],
            data: function() {
                return {
                    gold_coins: 0,
                    positions: [],
                    rules: []
                };
            },
            onShow: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var n = this;
                    a.default.getPosition().then(function(t) {
                        [ "gold_coins", "positions", "rules" ].map(function(o) {
                            n[o] = t[o];
                        });
                    });
                },
                goBidding: function(n) {
                    this.pushFormSubmit(n);
                    var t = n.target.dataset, o = t.position, e = t.id;
                    wx.navigateTo({
                        url: "/pages/personal_package/consultant_bidding/bidding/main?position=".concat(o, "&building_id=").concat(e || "")
                    });
                },
                goCoin: function(n) {
                    this.pushFormSubmit(n, "/pages/personal_package/coin/charge/main");
                }
            },
            components: {
                ShowRule: function() {
                    o.e("pages/personal_package/consultant_bidding/_show_rule").then(function() {
                        return resolve(o("1348"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        t.default = i;
    },
    3703: function(n, t, o) {
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "428c": function(n, t, o) {
        o.r(t);
        var e = o("3703"), a = o("f70f");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(i);
        o("d638");
        var u = o("f0c5"), c = Object(u.a)(a.default, e.b, e.c, !1, null, "2965f8ea", null, !1, e.a, void 0);
        t.default = c.exports;
    },
    "4d08": function(n, t, o) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            o("6cdc"), t(o("66fd")), n(t(o("428c")).default);
        }).call(this, o("543d").createPage);
    },
    c6f2: function(n, t, o) {},
    d638: function(n, t, o) {
        var e = o("c6f2");
        o.n(e).a;
    },
    f70f: function(n, t, o) {
        o.r(t);
        var e = o("0418"), a = o.n(e);
        for (var i in e) [ "default" ].indexOf(i) < 0 && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(i);
        t.default = a.a;
    }
}, [ [ "4d08", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
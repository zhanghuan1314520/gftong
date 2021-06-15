require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/consultant_bidding/bidding/main" ], {
    "05f4": function(n, i, e) {
        var t = e("40e5");
        e.n(t).a;
    },
    1598: function(n, i, e) {
        (function(n) {
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), i(e("66fd")), n(i(e("40e6")).default);
        }).call(this, e("543d").createPage);
    },
    "344b": function(n, i, e) {
        e.d(i, "b", function() {
            return t;
        }), e.d(i, "c", function() {
            return o;
        }), e.d(i, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "40e5": function(n, i, e) {},
    "40e6": function(n, i, e) {
        e.r(i);
        var t = e("344b"), o = e("5a36");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            e.d(i, n, function() {
                return o[n];
            });
        }(r);
        e("05f4");
        var u = e("f0c5"), c = Object(u.a)(o.default, t.b, t.c, !1, null, "38b1d9a5", null, !1, t.a, void 0);
        i.default = c.exports;
    },
    "5a36": function(n, i, e) {
        e.r(i);
        var t = e("c8f3"), o = e.n(t);
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(n) {
            e.d(i, n, function() {
                return t[n];
            });
        }(r);
        i.default = o.a;
    },
    c8f3: function(n, i, e) {
        function t(n, i) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(n);
                i && (t = t.filter(function(i) {
                    return Object.getOwnPropertyDescriptor(n, i).enumerable;
                })), e.push.apply(e, t);
            }
            return e;
        }
        function o(n) {
            for (var i = 1; i < arguments.length; i++) {
                var e = null != arguments[i] ? arguments[i] : {};
                i % 2 ? t(Object(e), !0).forEach(function(i) {
                    r(n, i, e[i]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : t(Object(e)).forEach(function(i) {
                    Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
                });
            }
            return n;
        }
        function r(n, i, e) {
            return i in n ? Object.defineProperty(n, i, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[i] = e, n;
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var u, c = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e("c147")), d = {
            name: "",
            data: function() {
                return {
                    position: {},
                    buildings: [],
                    select_building_index: 0,
                    gold_coins: "",
                    rules: [],
                    error: "",
                    building_id: ""
                };
            },
            onLoad: function() {
                this.getData();
            },
            onUnload: function() {
                u && clearTimeout(u);
            },
            methods: {
                getData: function() {
                    var n = this, i = this.$root.$mp.query, e = i.position, t = i.building_id;
                    c.default.getPosition().then(function(i) {
                        if (i.positions.some(function(i) {
                            if (i.position === e && (!t || t == i.building_id)) return n.position = i, !0;
                        }), "homepage" === e) {
                            n.buildings = i.positions.reduce(function(n, i) {
                                return "building" === i.position && n.push(i), n;
                            }, []);
                            var o = n.position.building_id;
                            o ? n.buildings.some(function(i, e) {
                                if (i.building_id === o) return n.select_building_index = e, n.building_id = o, 
                                !0;
                            }) : (n.building_id = n.buildings[0].building_id, n.select_building_index = 0);
                        }
                        n.gold_coins = i.gold_coins, n.rules = i.rules;
                    });
                },
                changePosition: function(n) {
                    var i = n.target.value;
                    this.select_building_index = i;
                    var e = this.buildings[i].building_id;
                    this.position = o(o({}, this.position), {}, {
                        building_id: e
                    }), this.building_id = e;
                },
                cancel: function() {
                    this.bid(0);
                },
                submit: function(n) {
                    var i = Number(n.target.value.bid_amount);
                    if ("number" != typeof i || isNaN(i)) this.error = "请填写正确数字"; else {
                        var e = this.position.bid_min_amount;
                        i < e ? this.error = "该展示位最低出价".concat(e, "金币") : this.bid(i);
                    }
                },
                bid: function(n) {
                    var i = this, e = this.$root.$mp.query.position;
                    c.default.bidding({
                        building_id: this.position.building_id || this.building_id,
                        bid_amount: n,
                        position: e
                    }).then(function(e) {
                        422 === e.code ? i.error = e.error_message : (i.error = "", wx.showToast({
                            title: n ? "出价成功" : "撤销成功",
                            icon: "none",
                            duration: 1500
                        }), u = setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1800));
                    });
                }
            },
            components: {
                ShowRule: function() {
                    e.e("pages/personal_package/consultant_bidding/_show_rule").then(function() {
                        return resolve(e("1348"));
                    }.bind(null, e)).catch(e.oe);
                }
            }
        };
        i.default = d;
    }
}, [ [ "1598", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
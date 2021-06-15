require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/second_hand/main" ], {
    "075b": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    7002: function(e, n, t) {
        t.r(n);
        var i = t("caff"), r = t.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        n.default = r.a;
    },
    "90af": function(e, n, t) {
        t.r(n);
        var i = t("075b"), r = t("7002");
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        t("e02f");
        var u = t("f0c5"), c = Object(u.a)(r.default, i.b, i.c, !1, null, "4b02b5ea", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    caff: function(e, n, t) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, i);
            }
            return t;
        }
        function o(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? r(Object(t), !0).forEach(function(n) {
                    u(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function u(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        function c(e, n, t, i, r, o, u) {
            try {
                var c = e[o](u), a = c.value;
            } catch (e) {
                return void t(e);
            }
            c.done ? n(a) : Promise.resolve(a).then(i, r);
        }
        function a(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(i, r) {
                    function o(e) {
                        c(a, i, r, o, u, "next", e);
                    }
                    function u(e) {
                        c(a, i, r, o, u, "throw", e);
                    }
                    var a = e.apply(n, t);
                    o(void 0);
                });
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var s = i(t("a34a")), f = i(t("ba1b")), d = {
            components: {
                Item: function() {
                    t.e("pages/building/second_hand/_components/house_price").then(function() {
                        return resolve(t("52f0"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopRightShare: function() {
                    t.e("components/views/top_right_share").then(function() {
                        return resolve(t("73b4"));
                    }.bind(null, t)).catch(t.oe);
                },
                WeixinFooter: function() {
                    t.e("components/views/footer_weixin").then(function() {
                        return resolve(t("dc1f"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    items: [],
                    house: {},
                    loading: !0,
                    building_id: "",
                    house_id: "",
                    show_price: !1
                };
            },
            onLoad: function(e) {
                var n = e.building_id;
                this.building_id = n, this.getBuilding(), this.getData();
            },
            onPullDownRefresh: function() {
                this.loading || this.getData();
            },
            onShareAppMessage: function() {
                var e = this.$root.$mp.query.building_id, n = encodeURIComponent("/pages/building/second_hand/main?building_id=".concat(e));
                return this.getShareInfo({
                    title: "【".concat(this.house.building_name, "】与周边二手房差价是多少？点击立即查看~"),
                    path: "/pages/building/main?building_id=".concat(e, "&sub_page=").concat(n)
                });
            },
            methods: {
                getBuilding: function() {
                    var e = this;
                    return a(s.default.mark(function n() {
                        var t, i;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e.$root.$mp.query.building_id, n.next = 3, f.default.getBuilding(t);

                              case 3:
                                i = n.sent, e.show_price = i.current_houses.some(function(n) {
                                    var t = n.exist_values && n.exist_values.indexOf("house_prices") > -1;
                                    return t && (e.house_id = n.id), t;
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                getData: function() {
                    var e = this;
                    return a(s.default.mark(function n() {
                        var t, i, r;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return wx.showLoading(), n.prev = 1, e.loading = !0, t = e.$root.$mp.query.building_id, 
                                n.next = 6, f.default.getSecondHandCommunities(t);

                              case 6:
                                (i = n.sent).house.price_range = i.house.price_desc.substring(0, i.house.price_desc.indexOf("元/㎡")), 
                                i.house.price_diff_range = i.house.price_diff.substring(0, i.house.price_diff.indexOf("元/㎡")), 
                                e.house = i.house, i.items.sort(function(e, n) {
                                    return n.unit_price - e.unit_price;
                                }), i.items.unshift(o(o({}, e.house), {}, {
                                    type: "current"
                                })), r = Math.max.apply(Math, i.items.map(function(e) {
                                    return e.unit_price;
                                })), e.items = i.items.map(function(e) {
                                    return o(o({}, e), {}, {
                                        percent: e.unit_price / r * 100 + "%"
                                    });
                                }), n.next = 19;
                                break;

                              case 16:
                                n.prev = 16, n.t0 = n.catch(1), console.error(n.t0);

                              case 19:
                                wx.stopPullDownRefresh(), e.loading = !1, wx.hideLoading();

                              case 22:
                              case "end":
                                return n.stop();
                            }
                        }, n, null, [ [ 1, 16 ] ]);
                    }))();
                }
            }
        };
        n.default = d;
    },
    e02f: function(e, n, t) {
        var i = t("ff80");
        t.n(i).a;
    },
    f8df: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("90af")).default);
        }).call(this, t("543d").createPage);
    },
    ff80: function(e, n, t) {}
}, [ [ "f8df", "common/runtime", "common/vendor" ] ] ]);
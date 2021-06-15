require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/daily_report/main" ], {
    "3f2d": function(e, n, t) {
        t.r(n);
        var r = t("630f"), i = t.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        n.default = i.a;
    },
    5797: function(e, n, t) {
        var r = t("ca00");
        t.n(r).a;
    },
    "630f": function(e, n, t) {
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
        function i(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? r(Object(t), !0).forEach(function(n) {
                    o(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function o(e, n, t) {
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
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("37c5")), u = t("ed08"), c = t("fe86"), f = function(e) {
            return e.map(function(e) {
                return e.buildings.forEach(function(e) {
                    e.link = "/pages/building/main?building_id=".concat(e.id);
                }), e;
            });
        }, l = {
            data: function() {
                return {
                    ln_buildings: [],
                    register_buildings: [],
                    will_register_buildings: [],
                    paper_date: "",
                    show_paper: !0,
                    show_banner: !0,
                    image_url: null,
                    building_tags: [],
                    subjects: c.SUBJECTS
                };
            },
            computed: {
                week: function() {
                    if (this.paper_date) return (0, u.getWeekByDateStr)(this.paper_date);
                }
            },
            onLoad: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                var e = encodeURIComponent("/pages/packageA/daily_report/main");
                return this.getShareInfo({
                    title: "杭州房友专属早报，30秒快速查看10区登记、摇号楼盘~",
                    path: "/pages/index/main?sub_page=".concat(e)
                });
            },
            methods: {
                getData: function() {
                    var e = this;
                    a.default.morning_paper().then(function(n) {
                        var t = n.today_ln_buildings, r = n.paper_date, o = n.today_register_buildings, a = n.will_register_buildings, u = n.image_url, c = n.building_tags;
                        e.show_paper = Boolean(u), e.paper_date = r, e.ln_buildings = f(t), e.register_buildings = f(o), 
                        e.will_register_buildings = f(a), e.image_url = u, e.building_tags = c.map(function(e) {
                            return i(i({}, e), {}, {
                                tags: e.tags.split(",")
                            });
                        }), e.show_paper && wx.setNavigationBarColor({
                            backgroundColor: "#ffffff",
                            frontColor: "#000000"
                        });
                    });
                },
                goTab: function(e) {
                    var n = e.currentTarget.dataset, t = (n.name, n.url);
                    wx.navigateTo({
                        url: t
                    });
                }
            },
            components: {
                Subject: function() {
                    t.e("pages/find_building/_subject").then(function() {
                        return resolve(t("35cb"));
                    }.bind(null, t)).catch(t.oe);
                },
                FooterWeixin: function() {
                    t.e("components/views/footer_weixin").then(function() {
                        return resolve(t("dc1f"));
                    }.bind(null, t)).catch(t.oe);
                },
                BottomRightShare: function() {
                    t.e("components/views/bottom_right_share").then(function() {
                        return resolve(t("dd4e"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = l;
    },
    af5e: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("d01d")).default);
        }).call(this, t("543d").createPage);
    },
    ca00: function(e, n, t) {},
    d01d: function(e, n, t) {
        t.r(n);
        var r = t("fdae"), i = t("3f2d");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        t("5797");
        var a = t("f0c5"), u = Object(a.a)(i.default, r.b, r.c, !1, null, "77dac3f2", null, !1, r.a, void 0);
        n.default = u.exports;
    },
    fdae: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    }
}, [ [ "af5e", "common/runtime", "common/vendor", "pages/packageA/common/vendor" ] ] ]);
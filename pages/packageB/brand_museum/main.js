require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/brand_museum/main" ], {
    "178d": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(t) {
                t.stopPropagation();
            }, t.e1 = function(t) {
                t.stopPropagation();
            });
        }, a = [];
    },
    "822c": function(t, e, n) {
        var o = n("c964");
        n.n(o).a;
    },
    a8c8: function(t, e, n) {
        n.r(e);
        var o = n("fa34"), a = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    bacc: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ef77")).default);
        }).call(this, n("543d").createPage);
    },
    c964: function(t, e, n) {},
    ef77: function(t, e, n) {
        n.r(e);
        var o = n("178d"), a = n("a8c8");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("822c");
        var u = n("f0c5"), c = Object(u.a)(a.default, o.b, o.c, !1, null, "29474077", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    fa34: function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach(function(e) {
                        u(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var c = n("2f62"), r = o(n("d408")), s = (o(n("8e44")), o(n("12bf"))), l = o(n("327a")), f = o(n("9554")), d = o(n("d80f")), p = o(n("e12f")), g = n("d8e2"), h = n("63ae"), _ = n("371c"), m = wx.getSystemInfoSync().windowHeight, b = function(t) {
                return new Promise(function(e) {
                    if (wx.createSelectorQuery) {
                        var n = wx.createSelectorQuery();
                        n.select(t).boundingClientRect(), n.selectViewport().scrollOffset(), n.exec(function(t) {
                            e({
                                top: t[0] ? t[0].top : 0,
                                scrollTop: t[1].scrollTop,
                                height: t[0].height
                            });
                        });
                    }
                });
            }, v = {
                mixins: [ l.default, d.default, p.default, r.default ],
                data: function() {
                    return {
                        autoplay: !0,
                        interval: 2e3,
                        duration: 500,
                        circular: !0,
                        consultant_league_id: "",
                        photos_urls: [],
                        league_id: "",
                        filter_tabs: [ "区域", "价格", "面积", "装修" ],
                        status: "",
                        decoration: "",
                        zone_ids: "",
                        area: "",
                        total_price: "",
                        price: "",
                        layout: "",
                        metro: "",
                        hasTabBar: !1,
                        filterPs: 0,
                        top_h: 0,
                        pageClassNames: "page brand-museum"
                    };
                },
                computed: {
                    indicatorDots: function() {
                        return this.photos_urls > 0;
                    }
                },
                watch: {
                    filter_show: function(t, e) {
                        var n = this;
                        t && (b(".page").then(function(t) {
                            t.height <= m && (n.pageClassNames += " page-completion");
                        }), b(".client-rect").then(function(t) {
                            t.top > n.top_h && n.page2top();
                        }));
                    }
                },
                onLoad: function(t) {
                    this.consultant_league_id = t.consultant_league_id || "", this.getData(), this.viewLog();
                },
                onShow: function() {},
                onPullDownRefresh: function() {
                    this.loading || (this.page = 1, this.getData());
                },
                onShareAppMessage: function() {
                    var t = {}, e = encodeURIComponent("/pages/packageB/brand_museum/main?consultant_league_id=".concat(this.league_id)), n = "/pages/index/main?sub_page=".concat(e);
                    return this.getShareInfo(i(i({}, t), {}, {
                        path: n
                    }));
                },
                methods: i(i({}, (0, c.mapActions)([ "setCurrentConsultantUid" ])), {}, {
                    page2top: function() {
                        t.pageScrollTo({
                            scrollTop: this.filterPs - this.top_h
                        });
                    },
                    viewLog: function() {
                        var t = this.$root.$mp.query.consultant_league_id;
                        t && (0, _.sendUserLog)("fc_consultant_league", {
                            d_key: t,
                            d_paras: {
                                city: "hz"
                            },
                            d_event: 0
                        });
                    },
                    tapItem: function(t) {
                        var e = t.currentTarget.dataset.building;
                        this.tapLog(e), e.buildingConsultant && this.setCurrentConsultantUid(e.buildingConsultant.uid || "");
                    },
                    tapLog: function(t) {
                        (0, _.sendUserLog)("fc_consultant_league_building", {
                            d_key: t.building_id,
                            d_paras: {
                                building_name: t.name,
                                city: "hz"
                            },
                            d_event: 1
                        });
                    },
                    changeFilter: function(t) {
                        var e = this;
                        Object.keys(t).forEach(function(n) {
                            e[n] = t[n];
                        }), this.page = 1, this.getData(!1);
                    },
                    changeStatus: function(t) {
                        this.status = t, this.page = 1, this.getData(!1);
                    },
                    getData: function() {
                        var t = this, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.loading = !0;
                        var n = {
                            page: this.page
                        };
                        this.consultant_league_id && (n.consultant_league_id = this.consultant_league_id), 
                        [ "decoration", "zone_ids", "area", "total_price", "price", "layout", "metro", "status" ].forEach(function(e) {
                            t[e] && (n[e] = t[e]);
                        }), "最新取证" === this.status && (n.status = "最新开盘"), s.default.consultantLeagueMembers(n).then(function(n) {
                            1 === t.page && (t.league_id = n.league.id, t.photos_urls = n.league.photos_urls);
                            var o = n.items.map(function(t) {
                                return i(i({}, t.building), {}, {
                                    buildingConsultant: t.consultant
                                });
                            });
                            t.handleData({
                                items: o.map(h.mapHouseItem)
                            }), t.$nextTick(function() {
                                e ? b(".client-rect").then(function(e) {
                                    t.filterPs = e.top;
                                }) : t.page2top();
                            });
                        });
                    },
                    onCall: function(t) {
                        var e = this;
                        (0, f.default)(t, function() {
                            e.callConsultant(t);
                        }, "需要认证用户信息才可以咨询置业顾问");
                    },
                    onChat: function(t) {
                        (0, f.default)(t, function() {
                            var e = t.currentTarget.dataset.id;
                            (0, g.navigateToChat)(e);
                        }, "需要认证用户信息才可以咨询置业顾问");
                    }
                }),
                components: {
                    HouseItem: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/business/house_item") ]).then(function() {
                            return resolve(n("ae38"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ListLoading: function() {
                        n.e("components/views/loading").then(function() {
                            return resolve(n("7756"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BottomTip: function() {
                        n.e("components/views/bottom_tip").then(function() {
                            return resolve(n("7a99"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TopFilter: function() {
                        n.e("components/buildings_top_filter/index").then(function() {
                            return resolve(n("71eb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TagFilter: function() {
                        n.e("pages/packageB/brand_museum/_tag_filter").then(function() {
                            return resolve(n("afe0"));
                        }.bind(null, n)).catch(n.oe);
                    }
                }
            };
            e.default = v;
        }).call(this, n("543d").default);
    }
}, [ [ "bacc", "common/runtime", "common/vendor" ] ] ]);
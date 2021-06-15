require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/surplus_buildings/main" ], {
    "1dd0": function(e, t, n) {
        n.r(t);
        var o = n("8da6"), i = n.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        t.default = i.a;
    },
    "4e6a": function(e, t, n) {
        n.r(t);
        var o = n("6012"), i = n("1dd0");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(u);
        n("e4ee");
        var c = n("f0c5"), a = Object(c.a)(i.default, o.b, o.c, !1, null, "4514416a", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    6012: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    "781c": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("4e6a")).default);
        }).call(this, n("543d").createPage);
    },
    "8da6": function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = o(n("75b1")), u = o(n("295f")), c = o(n("b4fd")), a = o(n("d408")), s = o(n("327a")), r = o(n("64e7")), d = [ "区域", "价格", "面积", "装修" ], l = {
            mixins: [ a.default, s.default, (0, r.default)({
                page_name: "摇号剩余"
            }) ],
            data: function() {
                return {
                    filter_tabs: d,
                    decoration: "",
                    zone_ids: "",
                    zone_section_ids: "",
                    area: "",
                    total_price: "",
                    price: "",
                    layout: "",
                    metro: "",
                    recommendation: [],
                    show_tip: !1
                };
            },
            computed: {
                show_recommendation: function() {
                    var e = this;
                    return [ "decoration", "zone_ids", "zone_section_ids", "area", "total_price", "price", "layout", "metro" ].every(function(t) {
                        return !e[t];
                    });
                }
            },
            onLoad: function(e) {
                var t = e.sub_page;
                this.getData(), t && setTimeout(function() {
                    wx.navigateTo({
                        url: decodeURIComponent(t)
                    });
                }, 1e3);
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            onShareAppMessage: function() {
                var e = {
                    title: "这里有杭州在售的楼盘，快来捡漏呀~",
                    path: "/pages/packageA/surplus_buildings/main"
                };
                return this.getShareInfo(e);
            },
            methods: {
                changeFilter: function(e) {
                    var t = this;
                    Object.keys(e).forEach(function(n) {
                        t[n] = e[n];
                    }), this.page = 1, this.getList();
                },
                getData: function() {
                    var e = this;
                    u.default.getTips().then(function(t) {
                        var n;
                        t.forEach(function(t) {
                            switch (t.tip_type) {
                              case "surplus_apartment_count":
                                e.show_tip = !0, n = t.id;
                            }
                        }), n && u.default.viewTips(n), c.default.getRecommendation("surplus_list", {
                            zones: e.zone_ids
                        }).then(function(t) {
                            try {
                                t.forEach(function(e) {
                                    e.id = e.building_id, e.cover_photo_url = e.img_url, e.hide_status || e.tag_list.unshift("在售"), 
                                    e.view_count = e.view_count >= 1e4 ? "".concat((e.view_count / 1e4).toFixed(1), "w") : e.view_count;
                                });
                            } catch (e) {
                                console.error(e);
                            }
                            e.recommendation = t, e.getList();
                        });
                    });
                },
                getList: function() {
                    var e = this;
                    this.loading = !0;
                    var t = !1, n = {
                        page: this.page,
                        zone_ids: this.zone_ids,
                        zone_section_ids: this.zone_section_ids,
                        total_price: this.total_price,
                        price: this.price,
                        layout: this.layout,
                        decoration: this.decoration,
                        area: this.area,
                        metro: this.metro
                    };
                    this.show_recommendation && (n.exclude_ids = this.recommendation.map(function(e) {
                        return e.building_id;
                    }).join(",")), i.default.getSurplusBuildings(n).then(function(n) {
                        e.recommendation.length > 0 && (t = e.recommendation.some(function(t, n) {
                            return !(!t.surplus_count_desc || !e.show_tip || (t.show_surplus_count_desc_tip = !0, 
                            0));
                        })), n.items.forEach(function(e, t) {
                            e.hide_status || e.tag_list.unshift("在售"), e.view_count = e.view_count >= 1e4 ? "".concat((e.view_count / 1e4).toFixed(1), "w") : e.view_count;
                        }), e.handleData(n), t || e.items.some(function(t, n) {
                            return !(!t.surplus_count_desc || !e.show_tip || (t.show_surplus_count_desc_tip = !0, 
                            0));
                        });
                    });
                },
                searchClick: function(e) {
                    wx.navigateTo({
                        url: "/pages/index/search/main?type=摇号剩余"
                    });
                }
            },
            components: {
                Search: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/views/search") ]).then(function() {
                        return resolve(n("66df"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopFilter: function() {
                    n.e("components/buildings_top_filter/index").then(function() {
                        return resolve(n("71eb"));
                    }.bind(null, n)).catch(n.oe);
                },
                ListRecommendation: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/packageA/surplus_buildings/_list_recommendation") ]).then(function() {
                        return resolve(n("9bb4"));
                    }.bind(null, n)).catch(n.oe);
                },
                HouseItem: function() {
                    n.e("components/business/surplus_house_item").then(function() {
                        return resolve(n("815b"));
                    }.bind(null, n)).catch(n.oe);
                },
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = l;
    },
    d329: function(e, t, n) {},
    e4ee: function(e, t, n) {
        var o = n("d329");
        n.n(o).a;
    }
}, [ [ "781c", "common/runtime", "common/vendor" ] ] ]);
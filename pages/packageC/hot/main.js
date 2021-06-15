require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/hot/main" ], {
    "010a": function(n, e, t) {
        t.r(e);
        var o = t("f9c4"), i = t("7c2b");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(a);
        t("1eab");
        var c = t("f0c5"), r = Object(c.a)(i.default, o.b, o.c, !1, null, "24c2458f", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "1eab": function(n, e, t) {
        var o = t("4037");
        t.n(o).a;
    },
    4037: function(n, e, t) {},
    "71d1": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("010a")).default);
        }).call(this, t("543d").createPage);
    },
    "7c2b": function(n, e, t) {
        t.r(e);
        var o = t("b9cf"), i = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = i.a;
    },
    b9cf: function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = o(t("8e44")), a = o(t("b4fd")), c = o(t("d408")), r = o(t("327a")), u = [ {
            name: "最近热门",
            value: "",
            class_name: "hot"
        }, {
            name: "人气最高",
            value: "view_count",
            class_name: "popular"
        }, {
            name: "评论最多",
            value: "comment_count",
            class_name: "coments"
        } ], s = {
            mixins: [ c.default, r.default ],
            data: function() {
                return {
                    filter_tabs: [ "区域", "面积" ],
                    zone_ids: "",
                    zone_section_ids: "",
                    area: "",
                    layout: "",
                    metro: "",
                    hotpage_banner: [],
                    banner_loading: !0,
                    recommendation: [],
                    interesting_order: "",
                    tags: u
                };
            },
            computed: {
                show_recommendation: function() {
                    var n = this;
                    return [ "decoration", "zone_ids", "zone_section_ids", "area", "total_price", "price", "layout", "metro", "interesting_order" ].every(function(e) {
                        return !n[e];
                    });
                }
            },
            onLoad: function() {
                this.getRecommendation();
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "".concat("杭州购房通", "-热门楼盘"),
                    path: "/pages/packageC/hot/main"
                }, "HOT_BUILINGDS");
            },
            onPullDownRefresh: function() {
                this.loading || (this.banner_loading = !0, this.page = 1, this.getRecommendation());
            },
            methods: {
                getRecommendation: function() {
                    var n = this, e = {};
                    this.zone_ids && (e.zones = this.zone_ids), a.default.getRecommendation("hot_list", e).then(function(e) {
                        n.recommendation = e, n.getData();
                    }), a.default.getBanner("hotpage_banner").then(function(e) {
                        n.hotpage_banner = e, n.banner_loading = !1;
                    });
                },
                changeFilter: function(n) {
                    var e = this;
                    Object.keys(n).forEach(function(t) {
                        console.error(n), e[t] = n[t];
                    }), this.page = 1, this.getData();
                },
                changeTag: function(n) {
                    n !== this.interesting_order && (this.interesting_order = n, this.page = 1, this.getData());
                },
                getData: function() {
                    var n = this;
                    this.loading = !0;
                    var e = {
                        page: this.page,
                        status: "热门楼盘"
                    };
                    [ "zone_ids", "zone_section_ids", "metro", "area", "price", "total_price", "layout", "decoration", "interesting_order" ].forEach(function(t) {
                        n[t] && (e[t] = n[t]);
                    }), this.show_recommendation && (e.exclude_ids = this.recommendation.map(function(n) {
                        return n.building_id;
                    }).join(",")), i.default.getBuildings(e).then(this.handleData);
                },
                searchClick: function(n) {
                    wx.navigateTo({
                        url: "/pages/index/search/main?type=热门楼盘"
                    });
                }
            },
            components: {
                HouseItem: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/business/house_item") ]).then(function() {
                        return resolve(t("ae38"));
                    }.bind(null, t)).catch(t.oe);
                },
                Loading: function() {
                    t.e("components/views/loading").then(function() {
                        return resolve(t("7756"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopFilter: function() {
                    t.e("components/buildings_top_filter/index").then(function() {
                        return resolve(t("71eb"));
                    }.bind(null, t)).catch(t.oe);
                },
                TagFilter: function() {
                    t.e("pages/history/_tag_filter").then(function() {
                        return resolve(t("362c"));
                    }.bind(null, t)).catch(t.oe);
                },
                Search: function() {
                    t.e("pages/history/_search").then(function() {
                        return resolve(t("f3a6"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopSwiper: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/views/_swiper") ]).then(function() {
                        return resolve(t("ec88"));
                    }.bind(null, t)).catch(t.oe);
                },
                BottomTip: function() {
                    t.e("components/views/bottom_tip").then(function() {
                        return resolve(t("7a99"));
                    }.bind(null, t)).catch(t.oe);
                },
                ListRecommendation: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/business/list_recommendation") ]).then(function() {
                        return resolve(t("4343"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = s;
    },
    f9c4: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    }
}, [ [ "71d1", "common/runtime", "common/vendor" ] ] ]);
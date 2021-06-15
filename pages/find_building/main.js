(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/find_building/main" ], {
    "123b": function(t, e, n) {},
    "1b6b": function(t, e, n) {
        n.r(e);
        var o = n("873d"), i = n.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = i.a;
    },
    "697b": function(t, e, n) {
        n.r(e);
        var o = n("f641"), i = n("1b6b");
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        n("ccbd");
        var a = n("f0c5"), r = Object(a.a)(i.default, o.b, o.c, !1, null, "09543dba", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "7fe0": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("697b")).default);
        }).call(this, n("543d").createPage);
    },
    "873d": function(t, e, n) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = o(n("d408")), c = o(n("327a")), a = o(n("8e44")), r = o(n("bdff")), u = o(n("b4fd")), l = (n("d697"), 
            n("371c")), s = {
                "": "seek_list",
                "即将取证": "seek_forthcoming_sale_list",
                "热门楼盘": "seek_hot_list"
            }, f = function(t) {
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
            }, d = {
                checking_scroll: !1,
                filter_change: !1,
                building_scroll_top: "",
                filter_top_height: ""
            }, h = 252 * (wx.getSystemInfoSync().windowWidth / 750), g = {
                mixins: [ i.default, c.default ],
                data: function() {
                    return {
                        filter_fixed_top: !1,
                        filter_tabs: [ "区域", "价格", "面积", "装修", "更多" ],
                        status: "",
                        decoration: "",
                        zone_ids: "",
                        area: "",
                        total_price: "",
                        price: "",
                        layout: "",
                        metro: "",
                        feature: "",
                        recommendation: [],
                        recommend: !1,
                        subjects: [],
                        hasTabBar: !0,
                        filterPs: 0,
                        top_h: 0
                    };
                },
                components: {
                    Search: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/views/search") ]).then(function() {
                            return resolve(n("66df"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TopHeader: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/find_building/_header") ]).then(function() {
                            return resolve(n("e40d"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TopFilter: function() {
                        n.e("components/buildings_top_filter/index").then(function() {
                            return resolve(n("71eb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TagFilter: function() {
                        n.e("pages/find_building/_tag_filter").then(function() {
                            return resolve(n("abb4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ListLoading: function() {
                        n.e("components/views/loading").then(function() {
                            return resolve(n("7756"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BuildingItem: function() {
                        n.e("components/business/whole_building_item").then(function() {
                            return resolve(n("51f3"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    BottomTip: function() {
                        n.e("components/views/bottom_tip").then(function() {
                            return resolve(n("7a99"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    Recommendation: function() {
                        Promise.all([ n.e("common/vendor"), n.e("pages/find_building/_recommendation") ]).then(function() {
                            return resolve(n("fcc8"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                computed: {
                    list_container_style: function() {
                        return this.filter_fixed_top ? {
                            transform: "translateY(166rpx)"
                        } : {};
                    },
                    show_recommendation: function() {
                        return !1;
                    }
                },
                watch: {
                    filter_show: function(t, e) {
                        var n = this;
                        t && f(".client-rect").then(function(t) {
                            t.top > n.top_h && n.page2top();
                        });
                    }
                },
                onShow: function() {},
                onLoad: function() {
                    var t = this;
                    this.getData(), f(".home-header-wrap").then(function(e) {
                        t.top_h = e.height;
                    }), f(".client-rect").then(function(e) {
                        t.filterPs = e.top;
                    });
                },
                onPageScroll: function(t) {
                    var e = this;
                    if (!d.checking_scroll) {
                        d.checking_scroll = !0;
                        setTimeout(function() {
                            f("#building-container").then(function(t) {
                                if (t) {
                                    var n = t.top;
                                    t.scrollTop, e.filter_fixed_top = n <= h, d.checking_scroll = !1;
                                }
                            });
                        }, 300);
                    }
                },
                onReady: function() {
                    var t = this.$root.$mp.query.sub_page;
                    t && wx.navigateTo({
                        url: decodeURIComponent(t)
                    });
                },
                onShareAppMessage: function() {
                    return this.getShareInfo({
                        title: "想找好房不用愁，来杭州购房通选房、看房~",
                        path: "/pages/find_building/main",
                        share_by_prefix: "sp201904181_",
                        need_sub_page: !1
                    });
                },
                onPullDownRefresh: function() {
                    this.loading || (this.page = 1, d.filter_change = !1, this.getData());
                },
                methods: {
                    sendLog: function(t) {
                        var e = t.currentTarget.dataset.name;
                        (0, l.sendCtmEvtLog)(e);
                    },
                    page2top: function() {
                        t.pageScrollTo({
                            scrollTop: this.filterPs
                        });
                    },
                    checkTopFilterPosition: function() {
                        f("#building-container").then(function(t) {
                            if (t) {
                                var e = t.top;
                                e > t.scrollTop && (d.building_scroll_top = e - h, wx.pageScrollTo({
                                    scrollTop: d.building_scroll_top
                                }));
                            }
                        });
                    },
                    getSubjects: function() {
                        var t = this;
                        r.default.hot_subjects().then(function(e) {
                            t.subjects = e;
                        });
                    },
                    changeFilter: function(t) {
                        var e = this;
                        this.page2top(), Object.keys(t).forEach(function(n) {
                            e[n] = t[n];
                        }), this.page = 1, this.getData();
                    },
                    changeStatus: function(t) {
                        this.page2top(), this.status = t, this.page = 1, this.getData();
                    },
                    getRecommendation: function() {
                        var t = this, e = s[this.status];
                        e ? u.default.getRecommendation(e, {}).then(function(e) {
                            e && e.length && (t.recommendation = e), t.getData();
                        }) : this.getData();
                    },
                    getData: function() {
                        var t = this;
                        this.loading = !0;
                        var e = {
                            page: this.page
                        };
                        [ "decoration", "zone_ids", "area", "total_price", "price", "layout", "metro", "status", "feature" ].forEach(function(n) {
                            t[n] && (e[n] = t[n]);
                        }), "最新取证" === this.status && (e.status = "最新开盘"), this.show_recommendation && (e.exclude_ids = this.recommendation.map(function(t) {
                            return t.building_id;
                        }).join(",")), a.default.getBuildings(e).then(function(e) {
                            var n = e.items, o = e.recommend;
                            t.recommend = o, t.handleData({
                                items: n
                            });
                        }).then(function() {
                            d.filter_change && t.page, d.filter_change = !0;
                        });
                    }
                }
            };
            e.default = g;
        }).call(this, n("543d").default);
    },
    ccbd: function(t, e, n) {
        var o = n("123b");
        n.n(o).a;
    },
    f641: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__get_style([ t.list_container_style ]));
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, i = [];
    }
}, [ [ "7fe0", "common/runtime", "common/vendor" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/search/main" ], {
    "27ab": function(e, t, n) {
        n.r(t);
        var r = n("b2e1"), i = n("7a40");
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        n("fba7");
        var a = n("f0c5"), o = Object(a.a)(i.default, r.b, r.c, !1, null, "62d624eb", null, !1, r.a, void 0);
        t.default = o.exports;
    },
    "7a40": function(e, t, n) {
        n.r(t);
        var r = n("e760"), i = n.n(r);
        for (var s in r) [ "default" ].indexOf(s) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t.default = i.a;
    },
    "8a40": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("27ab")).default);
        }).call(this, n("543d").createPage);
    },
    b2e1: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.fold_history_list = !e.fold_history_list;
            });
        }, i = [];
    },
    d681: function(e, t, n) {},
    e760: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function o(e, t, n, r, i, s, a) {
            try {
                var o = e[s](a), c = o.value;
            } catch (e) {
                return void n(e);
            }
            o.done ? t(c) : Promise.resolve(c).then(r, i);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function s(e) {
                        o(c, r, i, s, a, "next", e);
                    }
                    function a(e) {
                        o(c, r, i, s, a, "throw", e);
                    }
                    var c = e.apply(t, n);
                    s(void 0);
                });
            };
        }
        function u(e, t) {
            return m(e) || d(e, t) || l(e, t) || h();
        }
        function h() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function d(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, i = !1, s = void 0;
                try {
                    for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, s = e;
                } finally {
                    try {
                        r || null == o.return || o.return();
                    } finally {
                        if (i) throw s;
                    }
                }
                return n;
            }
        }
        function m(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var g = r(n("a34a")), _ = r(n("8e44")), p = r(n("cbb0")), b = r(n("75b1")), y = r(n("95f1")), v = r(n("41f4")), w = n("371c"), x = r(n("bf8b")), S = r(n("327a")), O = n("63ae"), k = n("ed08"), D = {
            NONE: 1,
            DOING: 2,
            DONE: 3
        }, B = {
            mixins: [ S.default ],
            watch: {
                name: function() {
                    this.submit_state !== D.DOING && (this.submit_state = D.NONE, this.checkNameChange());
                },
                items: function(e) {
                    e && !e.length && this.name && this.getRecommend();
                },
                showHistory: function(e, t) {
                    var n = this;
                    e != t && wx.nextTick(function() {
                        n.checkShowFoldIcon();
                    });
                }
            },
            data: function() {
                return {
                    show_search_loading: !1,
                    search_items: [],
                    submit_state: D.NONE,
                    per: 10,
                    type: "",
                    feature: "",
                    name: "",
                    history: [],
                    hot_search_list: "",
                    hot_search_keyword: "",
                    hot_search_keyword_id: "",
                    start: !1,
                    banners: [],
                    recommend_list: [],
                    fold_history_list: !0,
                    show_fold_icon: !1
                };
            },
            computed: {
                placeholder: function() {
                    return this.hot_search_keyword ? "搜索：".concat(this.hot_search_keyword) : "按楼盘名字搜索";
                },
                showHistory: function() {
                    return 0 === this.search_items.length && 0 === this.items.length && 0 === this.recommend_list.length;
                },
                showSearchHistory: function() {
                    return this.showHistory && this.history && this.history.length > 0;
                },
                show_dynamic_search: function() {
                    return this.submit_state !== D.DONE && this.search_items.length > 0;
                },
                show_submited_bottom: function() {
                    return this.submit_state === D.DONE;
                },
                show_recommend_list: function() {
                    return !this.show_dynamic_search && this.items && !this.items.length > 0 && this.recommend_list && this.recommend_list.length > 0;
                }
            },
            onLoad: function(e) {
                this.no_reach_bottom = !0, this.name = e.name || "", this.type = "摇号剩余" === e.type ? "在售楼盘" : e.type, 
                this.feature = e.feature || "", this.getHistory(), this.getBanners(), this.name && this.getData(), 
                this.getHotSearch();
            },
            mounted: function() {
                this.checkShowFoldIcon();
            },
            onUnload: function() {},
            onPullDownRefresh: function() {
                this.getHistory(), this.getBanners(), this.submit_state === D.DONE && this.name && this.getData(), 
                this.getHotSearch();
            },
            onShareAppMessage: function() {
                var e = this.$root.$mp.query.type;
                return this.getShareInfo({
                    title: this.name || "".concat("杭州购房通", "-搜索楼盘"),
                    path: "/pages/index/search/main?name=".concat(this.name, "&type=").concat(e || "", "&feature=").concat(this.feature || "")
                });
            },
            methods: {
                checkShowFoldIcon: function() {
                    var e = this, t = 0, n = wx.createSelectorQuery();
                    n.selectAll(".list-item").fields({
                        size: !0
                    }), n.exec(function(n) {
                        n[0].some(function(n) {
                            if (t = n.width + t + 6, e.show_fold_icon = t > 340, t > 340) return !0;
                        });
                    });
                },
                checkNameChange: (0, k.debounce)(function() {
                    "" !== this.name ? (this.show_search_loading = !0, this.getSearchData()) : this.search_items = [];
                }, 200),
                getBanners: function() {
                    var e = this;
                    p.default.getBanners("search_page_banner", {
                        limit: 10
                    }).then(function(t) {
                        e.banners = t, e.name && wx.stopPullDownRefresh();
                    });
                },
                changeType: function(e) {
                    this.type = e, this.getData();
                },
                resetName: function() {
                    this.submit_state = D.NONE, this.name = "", this.items = [], this.search_items = [], 
                    this.recommend_list = [], this.no_reach_bottom = !0;
                },
                getHotSearch: function() {
                    var e = this;
                    Promise.all([ x.default.getList(), x.default.getKeyword() ]).then(function(t) {
                        var n = u(t, 2), r = n[0], i = n[1];
                        e.hot_search_list = r, i.length && (e.hot_search_keyword = i[0].content || i[0].target.name, 
                        e.hot_search_keyword_id = i[0].id), wx.stopPullDownRefresh();
                    });
                },
                selectHot: function(e) {
                    var t = e.currentTarget.dataset, n = t.href, r = t.id, i = t.position, s = t.index;
                    _.default.interestingEvent({
                        pos_name: i,
                        interesting_id: r,
                        event: "click",
                        pos: s
                    }), wx.navigateTo({
                        url: n
                    });
                },
                getHistory: function() {
                    var e = this.$root.$mp.query.type;
                    this.history = e ? v.default.filter_search.get(e) : v.default.search.get();
                },
                addHisotry: function(e) {
                    var t = this.$root.$mp.query.type;
                    this.history = t ? v.default.filter_search.add(t, e) : v.default.search.add(e);
                },
                removeHisotry: function() {
                    var e = this.$root.$mp.query.type;
                    e ? v.default.filter_search.remove(e) : v.default.search.remove(), this.history = [];
                },
                selectHistory: function(e) {
                    var t = e.currentTarget.dataset.name;
                    this.goSearch(t, !0);
                },
                getSearchData: function() {
                    var e = this;
                    return c(g.default.mark(function t() {
                        var n, r, i;
                        return g.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = e.type, e.no_reach_bottom = !0, "在售楼盘" !== n) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 5, e.getSuplusBuilding();

                              case 5:
                                r = t.sent, t.next = 19;
                                break;

                              case 8:
                                if ("热门公寓" !== n) {
                                    t.next = 14;
                                    break;
                                }
                                return t.next = 11, e.getBusinessBuilding(!1);

                              case 11:
                                r = t.sent, t.next = 19;
                                break;

                              case 14:
                                return i = {
                                    per: 10,
                                    page: 1,
                                    name: e.name,
                                    status: e.getStatus()
                                }, t.next = 17, _.default.getBuildings(i, !1);

                              case 17:
                                r = t.sent, e.handleItems(r);

                              case 19:
                                e.show_search_loading = !1;

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getStatus: function() {
                    var e = this.type;
                    return "最新取证" === e && (e = "最新开盘"), "全部" !== e && "全部楼盘" !== e && e ? e : "";
                },
                getData: function() {
                    var e = this;
                    if (this.start = !0, this.loading = !0, this.no_reach_bottom = !1, this.feature) this.getDataByFeature(); else {
                        var t = this.type;
                        if ("在售楼盘" === t) this.getSuplusBuilding(); else if ("热门公寓" === t) this.getBusinessBuilding(); else {
                            var n = {
                                per: this.per,
                                page: this.page,
                                name: this.name,
                                status: "全部" !== t && "全部楼盘" !== t && t ? t : ""
                            };
                            "在售楼盘" === t && (n.status = "摇号剩余"), _.default.getBuildings(n).then(function(t) {
                                try {
                                    var n = t.items.reduce(function(e, t) {
                                        return -1 === e.indexOf(t.building_id) && e.push(t.building_id), e;
                                    }, []);
                                    w.UserLog.searchHouse(e.name, n);
                                } catch (e) {
                                    console.error(e);
                                }
                                e.handleItems(t);
                            });
                        }
                    }
                },
                getRecommend: function() {
                    var e = this;
                    return c(g.default.mark(function t() {
                        var n, r, i, a, o;
                        return g.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = e.type, r = e.per, i = {
                                    per: r,
                                    page: 1
                                }, "在售楼盘" !== n) {
                                    t.next = 9;
                                    break;
                                }
                                return t.next = 5, b.default.getSurplusBuildings(i);

                              case 5:
                                (a = t.sent).items.forEach(O.handleSurplusItem), t.next = 19;
                                break;

                              case 9:
                                if ("热门公寓" !== n) {
                                    t.next = 15;
                                    break;
                                }
                                return t.next = 12, y.default.list(i, !1);

                              case 12:
                                a = t.sent, t.next = 19;
                                break;

                              case 15:
                                return o = s(s({}, i), {}, {
                                    status: e.getStatus()
                                }), t.next = 18, _.default.getBuildings(o);

                              case 18:
                                a = t.sent;

                              case 19:
                                e.recommend_list = a.items;

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getDataByFeature: function() {
                    var e = this;
                    _.default.getBuildings({
                        page: this.page,
                        name: this.name,
                        feature: this.feature
                    }).then(function(t) {
                        e.handleItems(t);
                    });
                },
                handleItems: function(e) {
                    return this.submit_state !== D.NONE ? (this.handleData(e), this.submit_state = D.DONE) : this.handleSearchItem(e), 
                    wx.stopPullDownRefresh(), e;
                },
                handleSearchItem: function(e) {
                    this.search_items = e.items.map(function(e) {
                        return {
                            searchArray: e.name.split(""),
                            searchHouseName: e.fulltext_house_name && e.fulltext_house_name.split(""),
                            fulltext_house_title: e.fulltext_house_title,
                            href: e.href,
                            zone: e.zone,
                            zone_section: e.zone_section,
                            status: e.status,
                            price_desc_arr: e.price_desc_arr,
                            customized_price: e.customized_price
                        };
                    });
                },
                getSuplusBuilding: function() {
                    return b.default.getSurplusBuildings({
                        per: this.per,
                        page: this.page,
                        name: this.name
                    }).then(function(e) {
                        return e.items.forEach(O.handleSurplusItem), e;
                    }).then(this.handleItems);
                },
                getBusinessBuilding: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return y.default.list({
                        per: this.per,
                        page: this.page,
                        name: this.name
                    }, e).then(this.handleItems);
                },
                goSearch: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.submit_state = D.DOING, this.per = 10, this.name = e || this.hot_search_keyword, 
                    t || this.addHisotry(this.name), this.name && this.name === this.hot_search_keyword && _.default.interestingEvent({
                        interesting_id: this.hot_search_keyword_id,
                        event: "click",
                        pos_name: "hot_search_keyword",
                        pos: 0
                    }), this.page = 1, this.getData();
                },
                search: function(e) {
                    var t = e.target;
                    this.goSearch(t.value);
                },
                submit: function(e) {
                    var t = e.target;
                    this.goSearch(t.value.name);
                },
                startSearch: function() {
                    this.no_reach_bottom = !0, this.start = !1, this.loading = !1;
                },
                onCancel: function() {
                    getCurrentPages().length > 1 ? wx.navigateBack({
                        delta: 1
                    }) : wx.switchTab({
                        url: "/pages/index/main"
                    });
                }
            },
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                HouseItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/house_item") ]).then(function() {
                        return resolve(n("ae38"));
                    }.bind(null, n)).catch(n.oe);
                },
                SurplusHouseItem: function() {
                    n.e("components/business/surplus_house_item").then(function() {
                        return resolve(n("815b"));
                    }.bind(null, n)).catch(n.oe);
                },
                BusinessHouseItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/business_building_item") ]).then(function() {
                        return resolve(n("b16e"));
                    }.bind(null, n)).catch(n.oe);
                },
                SearchSelect: function() {
                    n.e("pages/index/search/_search_select").then(function() {
                        return resolve(n("f1da"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                },
                SearchItem: function() {
                    n.e("pages/index/search/_search_item").then(function() {
                        return resolve(n("314e"));
                    }.bind(null, n)).catch(n.oe);
                },
                SearchLoading: function() {
                    n.e("pages/index/search/_search_loading").then(function() {
                        return resolve(n("9bec"));
                    }.bind(null, n)).catch(n.oe);
                },
                HotRanking: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/index/hot_ranking/ranking_item") ]).then(function() {
                        return resolve(n("f6ce"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = B;
    },
    fba7: function(e, t, n) {
        var r = n("d681");
        n.n(r).a;
    }
}, [ [ "8a40", "common/runtime", "common/vendor" ] ] ]);
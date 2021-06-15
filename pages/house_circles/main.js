(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/house_circles/main" ], {
    "0ae0": function(e, t, n) {
        var i = n("5f8b");
        n.n(i).a;
    },
    "5f8b": function(e, t, n) {},
    "70f3": function(e, t, n) {
        n.r(t);
        var i = n("fc2d"), o = n.n(i);
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        t.default = o.a;
    },
    "98fa": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("bd93f")).default);
        }).call(this, n("543d").createPage);
    },
    bd93f: function(e, t, n) {
        n.r(t);
        var i = n("ef40"), o = n("70f3");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("0ae0");
        var s = n("f0c5"), a = Object(s.a)(o.default, i.b, i.c, !1, null, "5425f16c", null, !1, i.a, void 0);
        t.default = a.exports;
    },
    ef40: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    fc2d: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, i, o, c, s) {
            try {
                var a = e[c](s), r = a.value;
            } catch (e) {
                return void n(e);
            }
            a.done ? t(r) : Promise.resolve(r).then(i, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, c) {
                    function s(e) {
                        o(r, i, c, s, a, "next", e);
                    }
                    function a(e) {
                        o(r, i, c, s, a, "throw", e);
                    }
                    var r = e.apply(t, n);
                    s(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = i(n("a34a")), a = n("371c"), r = i(n("8e44")), u = i(n("ba1b")), l = i(n("b4fd")), f = i(n("12bf")), h = (i(n("8e44")), 
        n("fa29")), d = i(n("327a")), g = (i(n("9554")), n("63ae")), m = n("66db"), p = i(n("64e7")), _ = wx.getSystemInfoSync().system.indexOf("iOS") > -1, b = !1, v = function(e) {
            return new Promise(function(t) {
                if (wx.createSelectorQuery) {
                    var n = wx.createSelectorQuery();
                    n.selectAll(e).boundingClientRect(), n.selectViewport().scrollOffset(), n.exec(function(e) {
                        t({
                            top: e[0][0] ? e[0][0].top : 1,
                            scrollTop: e[1].scrollTop
                        });
                    });
                }
            });
        }, w = {
            mixins: [ d.default, (0, p.default)({
                page_name: "房友圈"
            }) ],
            name: "HouseCircles02",
            data: function() {
                return {
                    tab_shadow: !1,
                    per: 10,
                    isIOS: _,
                    tabs: m.TABS,
                    selected_tab: m.TYPES.WX,
                    is_consultant: !1,
                    show_permit: !1,
                    keyword: "",
                    categories: "",
                    feedpage_mixing_banner: {},
                    ranking_list: [],
                    ranking_time: "",
                    search_status: !1
                };
            },
            computed: {
                show_empty_box: function() {
                    return this.items && 0 === this.items.length && !this.loading && this.selected_tab === m.TYPES.WX;
                },
                show_tag_filter: function() {
                    return this.selected_tab === m.TYPES.WX;
                },
                show_search: function() {
                    return this.selected_tab === m.TYPES.WX;
                },
                search_placeholder: function() {
                    return this.selected_tab === m.TYPES.WX ? "输入标题搜索" : "";
                },
                sourse: function() {
                    return "房友圈-".concat(m.TYPE_TX[this.selected_tab]);
                }
            },
            onLoad: function(e) {
                var t = this.$root.$mp.query.selected;
                t && (this.selected_tab = t), e.type && (this.selected_tab = e.type), this.getData();
            },
            onPageScroll: function(e) {
                var t = this;
                if (!b) {
                    b = !0;
                    setTimeout(function() {
                        v(".main-section").then(function(e) {
                            if (e) {
                                var n = e.scrollTop;
                                t.tab_shadow = n > 0, b = !1;
                            }
                        });
                    }, 300);
                }
            },
            onReady: function() {
                var e = this.$root.$mp.query, t = e.sub_page, n = e.scene;
                t ? wx.navigateTo({
                    url: decodeURIComponent(t)
                }) : n && [ {
                    prefix: "wxfeed",
                    getLink: function(e) {
                        return "/pages/packageA/web_article/main?id=".concat(e, "&type=feeds&share_by_consultant_uid=").concat(n);
                    }
                }, {
                    prefix: "ctsb_",
                    getLink: function(e) {
                        return "/pages/packageA/community_topics/detail/main?topic_id=".concat(e);
                    }
                }, {
                    prefix: "wxarticle",
                    getLink: function(e) {
                        return "/pages/packageA/web_article/main?id=".concat(e, "&type=weixin_articles");
                    }
                } ].some(function(e) {
                    var t = e.prefix, i = e.getLink;
                    if (0 === n.indexOf(t)) {
                        var o = n.split("_")[1];
                        return wx.navigateTo({
                            url: i(o)
                        }), !0;
                    }
                }), this.checkNew();
            },
            onShow: function() {
                this.getPermission();
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    need_sub_page: !1,
                    title: m.SHARE_INFO[this.selected_tab],
                    path: "/pages/house_circles/main?selected=".concat(this.selected_tab)
                });
            },
            onPullDownRefresh: function() {
                this.page = 1, this.getData();
            },
            methods: {
                createBlog: function() {
                    this.is_consultant ? wx.navigateTo({
                        url: "/pages/house_circles/edit/main"
                    }) : this.show_permit = !0;
                },
                changeCategory: function(e) {
                    this.categories = e, this.page = 1, this.getData();
                },
                changeTab: function(e) {
                    this.page = 1, this.items = [], this.ranking_list = [], this.selected_tab = e, this.keyword = "";
                    var t = m.TYPE_TX[e];
                    (0, a.sendCtmEvtLog)("房友圈2.0点击-".concat(t)), this.getData(), this.checkTopFilterPosition();
                },
                getData: function() {
                    switch (this.getPermission(), this.loading = !0, this.no_more = !1, this.no_reach_bottom = this.selected_tab === m.TYPES.RANKING, 
                    this.selected_tab) {
                      case m.TYPES.WX:
                      case m.TYPES.BLOG:
                        this.getFeeds();
                        break;

                      case m.TYPES.EVENTS:
                        this.getEvents(), l.default.readEventHints(), this.tabs[4].new = !1;
                        break;

                      case m.TYPES.RANKING:
                        this.getHostList();
                        break;

                      case m.TYPES.RECOMMENDED:
                        this.getHostList(), this.getFeeds();
                    }
                },
                getHostList: function() {
                    var e = this;
                    f.default.getHotSearchList().then(function(t) {
                        e.ranking_list = t.items, e.ranking_time = t.refreshed_at;
                    }), this.loading = !1, this.no_more = !0, wx.stopPullDownRefresh();
                },
                checkNew: function() {
                    var e = this;
                    u.default.getEvents({
                        page: 1,
                        per: 1
                    }).then(function(t) {
                        var n = t.unread_count;
                        e.tabs[4].new = n > 0;
                    });
                },
                getFeeds: function() {
                    var e = this;
                    return c(s.default.mark(function t() {
                        var n, i, o;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = {
                                    content_type: e.selected_tab,
                                    keyword: e.keyword.trim(),
                                    page: e.page,
                                    per: e.per
                                }, e.selected_tab === m.TYPES.WX && (n.categories = e.categories), e.selected_tab === m.TYPES.RECOMMENDED && (n.categories = m.TAGS[1].text, 
                                n.content_type = m.TYPES.WX), t.next = 5, r.default.getFeeds(n);

                              case 5:
                                if (i = t.sent, (o = (0, h.mapFeeds)(i.items)).forEach(function(e) {
                                    e.building = (0, g.mapHouseItem)(e.building);
                                }), !(e.selected_tab === m.TYPES.WX && 1 === e.page && o.length > 0)) {
                                    t.next = 12;
                                    break;
                                }
                                return t.next = 11, e.getFeedPageBanner(o);

                              case 11:
                                o = t.sent;

                              case 12:
                                e.handleData({
                                    items: o
                                });

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                handleItems: function(e, t) {
                    this.items.some(function(n, i) {
                        if (n.id === e) return t(i), !0;
                    });
                },
                onChangeFeed: function(e) {
                    var t = this;
                    this.handleItems(e.id, function(n) {
                        t.$set(t.items, n, e);
                    });
                },
                getEvents: function() {
                    u.default.getEvents({
                        page: this.page,
                        per: this.per
                    }).then(this.handleData);
                },
                onSearch: function(e) {
                    this.reSearch();
                },
                reSearch: function() {
                    this.page = 1, this.items = [], this.getData();
                },
                getPermission: function() {
                    var e = this;
                    r.default.getUserInfo().then(function(t) {
                        e.is_consultant = t.is_consultant;
                    });
                },
                hidePermit: function() {
                    this.show_permit = !1;
                },
                selectArticle: function() {
                    this.changeTab(m.TYPES.WX);
                },
                checkTopFilterPosition: function() {
                    v(".main-section").then(function(e) {
                        e && wx.pageScrollTo({
                            scrollTop: 0
                        });
                    });
                },
                getFeedPageBanner: function(e) {
                    return r.default.getRecommendation("feedpage_mixing_banner", 5).then(function(t) {
                        var n = 0;
                        return t.forEach(function(t) {
                            var i = {};
                            n = t.listpage_order - 1, i.content_type = "adv", i.list_data = [ t ], e.splice(n, 0, i);
                        }), e;
                    });
                }
            },
            components: {
                Banner: function() {
                    n.e("pages/house_circles/_banner").then(function() {
                        return resolve(n("f8c4"));
                    }.bind(null, n)).catch(n.oe);
                },
                PermitTip: function() {
                    n.e("pages/house_circles/_permit_tip").then(function() {
                        return resolve(n("b307"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommonTabs: function() {
                    n.e("components/views/common_tabs").then(function() {
                        return resolve(n("4017"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommonArticle: function() {
                    n.e("components/views/common_article").then(function() {
                        return resolve(n("337b"));
                    }.bind(null, n)).catch(n.oe);
                },
                EventItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/house_circles/_event_item") ]).then(function() {
                        return resolve(n("f3ce"));
                    }.bind(null, n)).catch(n.oe);
                },
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                TagFilter: function() {
                    n.e("pages/house_circles/_tag_filter").then(function() {
                        return resolve(n("c8b1"));
                    }.bind(null, n)).catch(n.oe);
                },
                BlogItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/blog") ]).then(function() {
                        return resolve(n("0352"));
                    }.bind(null, n)).catch(n.oe);
                },
                Search: function() {
                    n.e("pages/house_circles/_search").then(function() {
                        return resolve(n("6d2e"));
                    }.bind(null, n)).catch(n.oe);
                },
                Tabs: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/house_circles/tabs") ]).then(function() {
                        return resolve(n("6d9e"));
                    }.bind(null, n)).catch(n.oe);
                },
                hostList: function() {
                    n.e("pages/index/top_search/host_list").then(function() {
                        return resolve(n("305a"));
                    }.bind(null, n)).catch(n.oe);
                },
                EmptyBox: function() {
                    n.e("components/views/empty_box").then(function() {
                        return resolve(n("8c0b"));
                    }.bind(null, n)).catch(n.oe);
                },
                Recommended: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/house_circles/recommended") ]).then(function() {
                        return resolve(n("d3d0"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomShare: function() {
                    n.e("pages/house_circles/bottom_share").then(function() {
                        return resolve(n("86ae"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomWrite: function() {
                    n.e("pages/house_circles/bottom_write").then(function() {
                        return resolve(n("ff60"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopSwiper: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/swiper") ]).then(function() {
                        return resolve(n("c456"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = w;
    }
}, [ [ "98fa", "common/runtime", "common/vendor" ] ] ]);
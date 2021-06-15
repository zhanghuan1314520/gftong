(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/history/main" ], {
    "50d0": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.show_sticky && !t.subscribed_hz ? t.$canIdentifyQr() : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, o = [];
    },
    "55fd": function(t, e, n) {
        n.r(e);
        var i = n("fb52"), o = n.n(i);
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e.default = o.a;
    },
    "8e1e": function(t, e, n) {
        var i = n("9859");
        n.n(i).a;
    },
    9859: function(t, e, n) {},
    "9be2": function(t, e, n) {
        n.r(e);
        var i = n("50d0"), o = n("55fd");
        for (var s in o) [ "default" ].indexOf(s) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("8e1e");
        var r = n("f0c5"), a = Object(r.a)(o.default, i.b, i.c, !1, null, "0b163dd3", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    e7f7: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("9be2")).default);
        }).call(this, n("543d").createPage);
    },
    fb52: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, n, i, o, s, r) {
            try {
                var a = t[s](r), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(i, o);
        }
        function s(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(i, s) {
                    function r(t) {
                        o(c, i, s, r, a, "next", t);
                    }
                    function a(t) {
                        o(c, i, s, r, a, "throw", t);
                    }
                    var c = t.apply(e, n);
                    r(void 0);
                });
            };
        }
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    c(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function c(t, e, n) {
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
        var u = i(n("a34a")), l = n("2f62"), f = i(n("8e44")), h = i(n("b4fd")), d = i(n("d408")), _ = i(n("327a")), p = n("a177"), m = {
            new_arrival_tips_show: !1
        }, g = {
            "即将取证": {
                filter_tabs: [ "区域", "时间筛选", "更多", "order" ],
                position: {
                    list: "forthcoming_sale_list",
                    banner: "forthcoming_sale_top_banner"
                }
            },
            "最新取证": {
                filter_tabs: [ "区域", "价格", "面积", "装修", "更多" ],
                position: {
                    list: "latest_opening_top_list",
                    banner: "latest_opening_top_banner"
                }
            },
            "正在登记": {
                filter_tabs: [ "区域", "价格", "面积", "装修", "更多" ],
                position: {
                    list: "ln_registering_top_list",
                    banner: "ln_registering_top_banner"
                }
            },
            "最新摇号": {
                filter_tabs: [ "区域", "价格", "面积", "装修", "更多" ],
                tags: [ {
                    class_name: "waiting-lottery",
                    name: "等待摇号",
                    value: "等待摇号"
                }, {
                    class_name: "complete-lottery",
                    name: "摇号完成",
                    value: "摇号完成"
                } ],
                position: {
                    list: "latest_lot_number_top_list",
                    banner: "latest_lot_number_top_banner"
                }
            },
            "摇号剩余": {
                filter_tabs: [ "区域", "价格", "面积", "装修", "更多" ],
                position: {
                    list: "surplus_list",
                    banner: "surplus_top_banner"
                }
            }
        }, b = {
            "即将取证": "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-jjqz.png",
            "最新取证": "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-zxqz.png",
            "最新摇号": "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-zxyh.png",
            "摇号剩余": "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-zslp.png"
        }, v = {
            mixins: [ d.default, _.default ],
            data: function() {
                return {
                    tags: [],
                    select_tag: "",
                    zones: "",
                    select_zones: [],
                    position: null,
                    filter_tabs: [],
                    decoration: "",
                    zone_ids: "",
                    zone_section_ids: "",
                    area: "",
                    total_price: "",
                    price: "",
                    layout: "",
                    metro: "",
                    keyword: "",
                    estimated_presell_time: "",
                    type: "",
                    recommendation: [],
                    recommendation_tye: "",
                    banner_loading: !0,
                    banner: [],
                    no_more: !1,
                    status: "",
                    title: "",
                    show_sticky: !1,
                    subscribed_hz: !1,
                    pageTitle: "",
                    feature: "",
                    show_bottom_btn: !1,
                    interesting_order: "",
                    subscribed: !1
                };
            },
            computed: a(a({}, (0, l.mapState)([ "contactSendMessage", "wxArticle" ])), {}, {
                show_recommendation: function() {
                    var t = this;
                    return [ "decoration", "zone_ids", "zone_section_ids", "area", "total_price", "price", "layout", "estimated_presell_time", "metro", "status", "feature", "interesting_order" ].every(function(e) {
                        return !t[e];
                    });
                },
                show_tag_filter: function() {
                    return "最新摇号" === this.type;
                },
                top_filter_class: function() {
                    return "最新摇号" === this.type ? "has-tag-filter" : "";
                },
                current_offiaccount: function() {
                    var t = this.contactSendMessage.currentOffiAccount;
                    return this.contactSendMessage.offiaccount[t];
                }
            }),
            onShareAppMessage: function() {
                var t = this.$root.$mp.query.type, e = {
                    title: this.title,
                    path: "/pages/history/main?type=".concat(t)
                };
                return b[t] && (e.imageUrl = b[t]), this.getShareInfo(e, t);
            },
            onLoad: function() {
                var t = this, e = decodeURIComponent(this.$root.$mp.query.type || "");
                this.type = e, this.title = "摇号剩余" === e ? "这里有杭州所有在售楼盘，快来选房、看房呀~" : e, this.pageTitle = "摇号剩余" === e ? "在售楼盘" : e, 
                f.default.init().then(function() {
                    if ("全部楼盘" !== t.type) {
                        var n = g[e], i = n.position, o = n.filter_tabs, s = n.tags;
                        t.filter_tabs = o, t.position = i, t.tags = s || [];
                    }
                    t.position ? (t.recommendation_tye = t.position, t.getRecommendation(), h.default.getBanner(t.position.banner).then(function(e) {
                        t.banner = e, t.banner_loading = !1;
                    })) : t.getData();
                }), this.getUser(), this.checkNotice();
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData(), this.checkNotice());
            },
            methods: {
                getUser: function() {
                    var t = this;
                    p.App_User.fetchUser().then(function(e) {
                        var n = e.subscribed_weixins, i = e.activity_menus;
                        t.subscribed_hz = n.indexOf("杭州购房通") > -1, t.show_bottom_btn = "即将取证" === t.type && i && i.indexOf("activity_f-活动入口") > -1, 
                        console.log(t.show_bottom_btn);
                    });
                },
                getZones: function() {
                    var t = this;
                    "" === this.zones && f.default.getZones().then(function(e) {
                        t.select_zones = t.zones = e;
                    });
                },
                changeZone: function(t, e) {
                    this.select_zones = t, this.zones = e, this.page = 1, this.getRecommendation();
                },
                handleHouseItem: function(t) {
                    "即将取证" !== this.type || t.hide_status || (t.tags = [ "即将取证" ].concat(t.tag_list).map(function(t) {
                        return {
                            name: t,
                            tag_class: [ "摇号完成", "摇号结果", "正在登记" ].indexOf(t) > -1 ? "green" : ""
                        };
                    }));
                },
                getRecommendation: function() {
                    var t = this, e = this.recommendation_tye, n = {};
                    "forthcoming_sale_list" === e.list && this.zone_ids && (n.zones = this.zone_ids), 
                    h.default.getRecommendation(e.list, n).then(function(e) {
                        t.recommendation = e, t.getData();
                    });
                },
                changeFilter: function(t) {
                    var e = this;
                    Object.keys(t).forEach(function(n) {
                        e[n] = t[n];
                    }), this.page = 1, this.getData();
                },
                changeStatus: function(t) {
                    this.status = t, this.page = 1, this.getData();
                },
                changeTag: function(t) {
                    this.select_tag = t, this.page = 1, this.getData();
                },
                getData: function() {
                    var t = this;
                    this.loading = !0;
                    var e = {
                        page: this.page,
                        name: this.keyword
                    }, n = !1;
                    "全部楼盘" !== this.type ? (this.status ? e.status = this.status : e.status = "最新取证" === this.type ? "最新开盘" : this.type, 
                    this.select_tag && (e.status = "等待摇号" === this.select_tag ? e.status + "-" + this.select_tag : this.select_tag), 
                    [ "zone_ids", "zone_section_ids", "metro", "area", "price", "total_price", "layout", "decoration", "estimated_presell_time", "feature" ].forEach(function(i) {
                        t[i] && (e[i] = t[i], n = !0);
                    }), this.interesting_order && (e.interesting_order = this.interesting_order), this.show_recommendation && (e.exclude_ids = this.recommendation.map(function(t) {
                        return t.building_id;
                    }).join(","))) : this.select_zones && this.select_zones.length && (e.zone_ids = this.select_zones.map(function(t) {
                        return t.id;
                    }).join(",")), f.default.getBuildings(e).then(function(e) {
                        t.handleData(e), t.show_sticky = !0, 1 === t.page && n && e.total_count && wx.showToast({
                            title: "共找到".concat(e.total_count, "个楼盘"),
                            icon: "none"
                        }), !m.new_arrival_tips_show && e.new_arrival_tips && wx.showToast({
                            title: e.new_arrival_tips,
                            icon: "none",
                            success: function() {
                                m.new_arrival_tips_show = !0;
                            }
                        });
                    });
                },
                searchClick: function(t) {
                    wx.navigateTo({
                        url: "/pages/index/search/main?type=".concat(this.type)
                    });
                },
                checkNotice: function() {
                    var t = this;
                    return s(u.default.mark(function e() {
                        var n;
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ("即将取证" !== t.type) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 3, f.default.getNoticeStatus();

                              case 3:
                                n = e.sent, t.subscribed = n.items && n.items.some(function(t) {
                                    var e = t.msg_type, n = t.subscribed;
                                    return "new_arrival_forthcoming_sale_building" === e && n;
                                });

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                setNotice: function() {
                    var t = this;
                    return s(u.default.mark(function e() {
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, f.default.setNoticeStatus({
                                    notification_type: "wxtm",
                                    msg_type: "new_arrival_forthcoming_sale_building",
                                    subscribed: !t.subscribed
                                });

                              case 2:
                                e.sent, wx.showToast({
                                    title: t.subscribed ? "上新提醒关闭" : "上新提醒开启",
                                    icon: "none"
                                }), t.subscribed = !t.subscribed;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            },
            components: {
                ShareBtn: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/views/share_btn") ]).then(function() {
                        return resolve(n("34fc"));
                    }.bind(null, n)).catch(n.oe);
                },
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
                Search: function() {
                    n.e("pages/history/_search").then(function() {
                        return resolve(n("f3a6"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopFilter: function() {
                    n.e("components/buildings_top_filter/index").then(function() {
                        return resolve(n("71eb"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopSwiper: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/views/_swiper") ]).then(function() {
                        return resolve(n("ec88"));
                    }.bind(null, n)).catch(n.oe);
                },
                ListRecommendation: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/list_recommendation") ]).then(function() {
                        return resolve(n("4343"));
                    }.bind(null, n)).catch(n.oe);
                },
                ZoneSelect: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/index/_zone_select") ]).then(function() {
                        return resolve(n("d588"));
                    }.bind(null, n)).catch(n.oe);
                },
                TagFilter: function() {
                    n.e("pages/history/_tag_filter").then(function() {
                        return resolve(n("362c"));
                    }.bind(null, n)).catch(n.oe);
                },
                Notice: function() {
                    n.e("pages/history/_notice").then(function() {
                        return resolve(n("12f6"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = v;
    }
}, [ [ "e7f7", "common/runtime", "common/vendor" ] ] ]);
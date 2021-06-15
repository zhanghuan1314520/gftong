var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/main" ], {
    "01a1": function(t, e, n) {},
    "0a18": function(t, e, n) {
        n.r(e);
        var o = n("a14c"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    "2aed": function(t, e, n) {
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
    },
    "49b3": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("71e2")).default);
        }).call(this, n("543d").createPage);
    },
    "71e2": function(t, e, n) {
        n.r(e);
        var o = n("2aed"), i = n("0a18");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("8ae6");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, "51ee567b", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "8ae6": function(t, e, n) {
        var o = n("01a1");
        n.n(o).a;
    },
    a14c: function(e, n, o) {
        (function(e) {
            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                })(e);
            }
            function r() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap();
                return r = function() {
                    return t;
                }, t;
            }
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function c(t) {
                return d(t) || l(t) || s(t) || u();
            }
            function u() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function s(t, e) {
                if (t) {
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                }
            }
            function l(t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            }
            function d(t) {
                if (Array.isArray(t)) return f(t);
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
                return o;
            }
            function h(t, e, n, o, i, r, a) {
                try {
                    var c = t[r](a), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, i);
            }
            function g(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, i) {
                        function r(t) {
                            h(c, o, i, r, a, "next", t);
                        }
                        function a(t) {
                            h(c, o, i, r, a, "throw", t);
                        }
                        var c = t.apply(e, n);
                        r(void 0);
                    });
                };
            }
            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach(function(e) {
                        _(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function _(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var b = a(o("a34a")), v = o("2f62"), y = a(o("8e44")), w = a(o("b4fd")), x = a(o("cbb0")), T = (a(o("75b1")), 
            a(o("ba1b")), a(o("31e7")), a(o("f832"))), S = o("63ae"), O = o("ad02"), L = o("371c"), P = a(o("e86e")), k = a(o("4f0e")), B = o("327a"), C = function(t) {
                if (t && t.__esModule) return t;
                if (null === t || "object" !== i(t) && "function" != typeof t) return {
                    default: t
                };
                var e = r();
                if (e && e.has(t)) return e.get(t);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var c = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                    c && (c.get || c.set) ? Object.defineProperty(n, a, c) : n[a] = t[a];
                }
                return n.default = t, e && e.set(t, n), n;
            }(o("9554")), E = a(o("9b93")), j = o("ced1"), A = (a(o("ceca")), a(o("58bc"))), D = a(o("62fe")), R = o("eb6a"), I = o("d8e2"), H = o("0d75"), M = a(o("6553")), F = a(o("64e7")), U = {}, $ = function(t, e) {
                var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), o = t.substr(t.indexOf("?")).substr(1).match(n);
                return null != o ? decodeURIComponent(o[2]) : null;
            }, Y = function(t) {
                var e = decodeURIComponent(t);
                return $(e, "redirect_path");
            }, N = !1, q = wx.getSystemInfoSync().windowWidth / 750, z = 128 * q, W = 180 * q, Z = function(t) {
                return new Promise(function(e) {
                    if (wx.createSelectorQuery) {
                        var n = wx.createSelectorQuery();
                        n.selectAll(t).boundingClientRect(), n.selectViewport().scrollOffset(), n.exec(function(t) {
                            e({
                                bottom: t[0][0] ? t[0][0].bottom : 1,
                                top: t[0][0] ? t[0][0].top : 1,
                                scrollTop: t[1].scrollTop
                            });
                        });
                    }
                });
            }, G = {
                mixins: [ A.default, T.default, P.default, k.default, (0, B.getPaginationMixin)({
                    loading_name: "bottom_list_loading"
                }), D.default, M.default, (0, F.default)({
                    page_name: "首页"
                }) ],
                data: function() {
                    return m(m({}, j.DEFAULT_CONFIG), {}, {
                        loading: !0,
                        dashboard: {},
                        hot: {
                            col_1: [],
                            col_3: []
                        },
                        forthcoming_sale: [],
                        latest_opening: [],
                        latest_lot_number: [],
                        excellent_consultants: [],
                        homepage_banner: [],
                        homepage_middle_banner: [],
                        surplus: {
                            col_1: [],
                            col_3: []
                        },
                        show_app_tip: !1,
                        ln_registering: {
                            col_1: [],
                            col_3: []
                        },
                        is_consultant: !1,
                        weixin_phone_number: "",
                        articles: [],
                        tabs_bg_loaded: !1,
                        show_float: !0,
                        tab_fixed: !1,
                        selected_tab: j.TYPES.SALE,
                        tabs: j.TABS,
                        items: [],
                        per: 10,
                        recommendation: [],
                        homepage_suspended_button: {
                            id: "",
                            photo_url: "",
                            href: "",
                            position: "",
                            listpage_order: ""
                        },
                        recommendations: [],
                        empty_desc: "暂无关注，看看其他的楼盘吧",
                        authing: !0,
                        _t: new Date().getTime(),
                        user_authority: "guest",
                        scroll_tabs: [],
                        scroll_tabs_bg: "",
                        scroll_tabs_bg_width: "",
                        scroll_tabs_bg_height: ""
                    });
                },
                computed: m(m({}, (0, v.mapState)([ "consultantCard", "liveRooms" ])), {}, {
                    tool_tabs: function() {
                        var t = this;
                        return this.home_tabs.tabs.filter(function(e) {
                            return e.authority.indexOf(t.user_authority) > -1 && !e.hide;
                        });
                    },
                    tool_tabs_bg: function() {
                        return "https://cdn.vip-wifi.com/hzfangchan/".concat("", "config/pages/home/").concat(this.home_tabs.bg.path);
                    },
                    show_live: function() {
                        if (this.liveRooms && this.liveRooms.length) {
                            var t = new Date().getTime(), e = new Date(this.liveRooms[0].start).getTime();
                            return t <= new Date(this.liveRooms[0].end).getTime() && t >= e;
                        }
                        return !1;
                    },
                    show_empty_box: function() {
                        return this.items && 0 === this.items.length && !(this.bottom_list_loading || !this.no_more) && (this.selected_tab === j.TYPES.FOCUS || this.selected_tab === j.TYPES.LOCATION && this.latitude && this.longitude);
                    },
                    list_container_style: function() {
                        return this.tab_fixed ? {
                            paddingTop: "100rpx"
                        } : {};
                    }
                }),
                onLoad: function(t) {
                    var e = this;
                    (0, E.default)(this), this.getWxaMenus(), y.default.init().then(function() {
                        e.getList(), x.default.getRecommend("homepage_suspended_button", {
                            limit: 4
                        }).then(function(t) {
                            e.homepage_suspended_button = t[0];
                        }), e.getBottomUserBar();
                    });
                },
                onShow: function() {
                    var t = this;
                    y.default.getUserInfo().then(function(e) {
                        var n = e.weixin_phone_number, o = e.is_consultant;
                        console.error("is_consultant", o), t.weixin_phone_number = n, t.is_consultant = o, 
                        o && (t.user_authority = o ? "consultant" : "guest");
                    }), this.selected_tab === j.TYPES.LOCATION && this.checkAuthLocation();
                },
                onReady: function() {
                    var t = this.$root.$mp.query, e = t.sub_page, n = t.scene, o = t.q, i = t.share_by_consultant_uid;
                    if (console.log(this.$root.$mp.query), i && this.setShareByConsultantUid(i), e) wx.navigateTo({
                        url: decodeURIComponent(e)
                    }); else if (o) {
                        console.log("q", o);
                        var r = Y(o);
                        if (r) {
                            var a = (0, O.checkTabBar)(r);
                            console.log("isTabPath", a, r), a ? r.indexOf("?") > -1 ? wx.reLaunch({
                                url: r
                            }) : wx.switchTab({
                                url: r
                            }) : wx.navigateTo({
                                url: r
                            });
                        }
                    } else {
                        var c = function(t) {
                            var e = t.split("_")[1];
                            return "/pages/consultants/card/main?id=".concat(e);
                        }, u = {
                            ccb: {
                                url: c
                            },
                            ccb1: {
                                url: c
                            },
                            ccb2: {
                                url: c
                            },
                            ccb3: {
                                url: c
                            },
                            gqb2: {
                                url: function() {
                                    return "/pages/history/main?type=最新取证";
                                }
                            },
                            gqb3: {
                                url: function() {
                                    return "/pages/history/main?type=即将取证";
                                }
                            },
                            acta: {
                                url: function(t) {
                                    return "/pages/activity_a/track_light/main?scene=".concat(t);
                                }
                            },
                            bb: {
                                url: function(t) {
                                    var e = t.split("_")[1];
                                    return "/pages/building/main?house_id=&building_id=".concat(e || "", "&consultant_group_id=&from=");
                                }
                            }
                        };
                        if (n && Object.keys(u).some(function(t) {
                            return 0 === n.indexOf(t);
                        })) {
                            var s = u[n.split("_")[0]].url(n);
                            s && wx.navigateTo({
                                url: s
                            });
                        }
                    }
                },
                onShareAppMessage: function() {
                    return this.getShareInfo({
                        title: "看房选房查摇号，就上杭州购房通~",
                        path: "/pages/index/main",
                        need_sub_page: !1
                    });
                },
                onPullDownRefresh: function() {
                    this.getList();
                },
                onPageScroll: function(t) {
                    var e = this;
                    if (!N) {
                        N = !0;
                        setTimeout(function() {
                            Z(".main-section").then(function(t) {
                                if (t) {
                                    var n = t.top;
                                    e.tab_fixed = n <= W, N = !1;
                                }
                            });
                        }, 300);
                    }
                },
                methods: m(m({}, (0, v.mapActions)([ "setShareByConsultantUid" ])), {}, {
                    getWxaMenus: function() {
                        var t = this;
                        return g(b.default.mark(function e() {
                            var n;
                            return b.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, y.default.getWxaMenus();

                                  case 2:
                                    (n = e.sent).items.forEach(function(e) {
                                        var n = e.category, o = e.menus;
                                        "金刚区" === n && (t.scroll_tabs = o.items, t.scroll_tabs_bg = o.image.url, t.scroll_tabs_bg_width = o.image.width / 1.5, 
                                        t.scroll_tabs_bg_height = o.image.height / 1.5);
                                    });

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    onConsult: function(t) {
                        var e = t.currentTarget.dataset.id;
                        (0, C.default)(t, function() {
                            (0, I.navigateToChat)(e);
                        }, "需要认证用户信息才可以咨询置业顾问");
                    },
                    getList: function() {
                        var t = this;
                        arguments.length > 0 && void 0 !== arguments[0] || this.page, this.loading = !0, 
                        this.no_more = !1, this.loading = !0, wx.showLoading && wx.showLoading(), this.getBanners("homepage_banner").then(function() {
                            return t.getBanners("homepage_middle_banner");
                        }), x.default.getDashboard().then(function(e) {
                            t.dashboard = e, t.loading = !1, wx.hideLoading && wx.hideLoading(), wx.stopPullDownRefresh();
                        }).then(function() {
                            t.getBuildings("正在登记", "ln_registering", 4, !0), t.getBuildings("最新取证", "latest_opening", 3), 
                            t.getBuildings("即将取证", "forthcoming_sale", 3), t.getBuildings("最新摇号", "latest_lot_number", 3), 
                            t.getConsultants(), t.getData();
                        }).catch(function(e) {
                            console.error(e), t.loading = !1;
                        });
                    },
                    getData: function() {
                        var t = this;
                        return arguments.length > 0 && void 0 !== arguments[0] || this.page, this.recommendations = [], 
                        new Promise(function() {
                            var e = g(b.default.mark(function e(n) {
                                return b.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        e.t0 = t.selected_tab, e.next = e.t0 === j.TYPES.SALE ? 3 : e.t0 === j.TYPES.LOCATION ? 6 : e.t0 === j.TYPES.EXISTING ? 8 : e.t0 === j.TYPES.NEED ? 13 : e.t0 === j.TYPES.FOCUS ? 18 : 22;
                                        break;

                                      case 3:
                                        return e.next = 5, t.getSurplus();

                                      case 5:
                                        return e.abrupt("break", 22);

                                      case 6:
                                        return t.checkAuthLocation(), e.abrupt("break", 22);

                                      case 8:
                                        return e.next = 10, t.getHhematic("现房推荐");

                                      case 10:
                                        return t.bottom_list_loading = !1, t.no_more = !0, e.abrupt("break", 22);

                                      case 13:
                                        return e.next = 15, t.getHhematic("刚需推荐");

                                      case 15:
                                        return t.bottom_list_loading = !1, t.no_more = !0, e.abrupt("break", 22);

                                      case 18:
                                        return t.empty_desc = "暂无关注，看看其他的楼盘吧", e.next = 21, t.getFocusList();

                                      case 21:
                                        return e.abrupt("break", 22);

                                      case 22:
                                        n();

                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                            }));
                            return function(t) {
                                return e.apply(this, arguments);
                            };
                        }());
                    },
                    checkTopFilterPosition: function() {
                        return Z(".main-section").then(function(t) {
                            if (t) {
                                var n = t.top + t.scrollTop;
                                return e.pageScrollTo({
                                    scrollTop: n - z
                                });
                            }
                        });
                    },
                    changeTab: function(t) {
                        var e = this;
                        return g(b.default.mark(function n() {
                            var o;
                            return b.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return e.page = 1, e.items = [], e.ranking_list = [], e.bottom_list_loading = !0, 
                                    e.selected_tab = t, o = j.TYPE_TX[t], (0, L.sendCtmEvtLog)("首页信息流点击-".concat(o)), 
                                    e.cancelSurplusTask(), n.next = 10, e.getData();

                                  case 10:
                                    e.$nextTick(function() {
                                        e.tab_fixed && e.checkTopFilterPosition();
                                    });

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getBanners: function(t) {
                        var e = this;
                        return x.default.getBanners(t).then(function(n) {
                            e.updateSwiper(t, n);
                        });
                    },
                    getHotIds: function() {
                        var t = this;
                        return Object.keys(this.hot).reduce(function(e, n) {
                            return e.push.apply(e, c(t.hot[n].map(function(t) {
                                return t.building_id;
                            }))), e;
                        }, []).join(",");
                    },
                    getBuildings: function(t, e, n) {
                        var o = this, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        x.default.getBuildings(t, n).then(function(t) {
                            if (i) {
                                var n = t.slice(0, 4);
                                o[e] = o.handleCutting(n);
                            } else o[e] = t || [];
                        });
                    },
                    checkAuthLocation: function() {
                        var t = this, e = (0, R.getLocation)(n, o, i), n = e.latitude, o = e.longitude, i = e.current_address;
                        if (n && o && i) return this.latitude = n, this.longitude = o, this.current_address = i, 
                        void this.getLocationBuildings(n, o);
                        this.authing && wx.showLoading({
                            title: "正在获取位置",
                            mask: !0
                        }), this.authLocation().then(function(e) {
                            var n = e.latitude, o = e.longitude;
                            wx.hideLoading(), t.authing = !1, t.getLocationBuildings(n, o);
                        }).catch(function() {
                            wx.hideLoading(), t.authing = !1, t.getLocationBuildings();
                        });
                    },
                    getLocationBuildings: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        n || e ? y.default.getBuildings({
                            location: "".concat(n, ",").concat(e),
                            page: this.page
                        }).then(function(e) {
                            e.items.length || (t.empty_desc = "附近3km内暂无楼盘哦~", t.getLocationRecommends()), t.handleData(e);
                        }) : this.getLocationRecommends();
                    },
                    getLocationRecommends: function() {
                        var t = this;
                        y.default.getBuildings({
                            page: this.page,
                            per: 10,
                            feature: "未关注"
                        }).then(function(e) {
                            t.recommendations = e.items, t.bottom_list_loading = !1;
                        });
                    },
                    handleCutting: function(t) {
                        return 1 === t.length || 4 === t.length ? {
                            col_1: [ t[0] ],
                            col_3: (0, S.handleCol3)(t.slice(1))
                        } : 2 === t.length ? {
                            col_1: [ t[0], t[1] ],
                            col_3: []
                        } : 3 === t.length ? {
                            col_1: [],
                            col_3: (0, S.handleCol3)(t)
                        } : void 0;
                    },
                    getRecommendBuildings: function(t) {
                        var e = this, n = this.getHotIds();
                        x.default.getRecommendBuilding(t, {
                            limit: 4,
                            exclude_targetable_ids: n
                        }).then(function(n) {
                            e[t] = n || [];
                        });
                    },
                    getHotArticles: function() {
                        var t = this;
                        y.default.getFeeds({
                            page: 1,
                            per: 4,
                            content_type: "weixin_article",
                            weixin_account_id: 428
                        }).then(function(e) {
                            var n = e.items;
                            t.articles = n;
                        });
                    },
                    getConsultants: function() {
                        var t = this;
                        x.default.getConsultants().then(function(e) {
                            t.excellent_consultants = e;
                        });
                    },
                    getZones: function() {
                        var t = this;
                        this.zones === U && y.default.getZones().then(function(e) {
                            t.select_zones = t.zones = e;
                        });
                    },
                    changeZone: function(t, e) {
                        this.select_zones = t, this.zones = e, this.getData(1);
                    },
                    searchClick: function() {
                        (0, L.sendCtmEvtLog)("搜索"), wx.navigateTo({
                            url: "/pages/index/search/main"
                        });
                    },
                    goTopList: function(t) {
                        (0, C.askAuthNavigator)(t, "/pages/history/main?type=".concat(t.target.dataset.type));
                    },
                    tabLog: function(t) {
                        var e = t.currentTarget.dataset, n = e.name, o = e.logtype, i = void 0 === o ? "" : o;
                        (0, L.sendCtmEvtLog)(i ? "".concat(i, ":").concat(n) : n);
                    },
                    goReport: function(t) {
                        (0, C.default)(t, function() {
                            wx.navigateTo({
                                url: "/pages/packageA/daily_report/main"
                            });
                        }, "请先认证用户信息");
                    },
                    goFilterList: function(t) {
                        var e = t.currentTarget.dataset.href;
                        wx.navigateTo({
                            url: e
                        });
                    },
                    goLink: function(t) {
                        var e = t.currentTarget.dataset, n = e.log_data, o = e.index, i = e.href;
                        wx.navigateTo({
                            url: i
                        }), n && (0, H.clickHouseLog)(n.log_id, {
                            pos_name: n.position,
                            pos: o || 0
                        });
                    },
                    toggleTip: function(t) {
                        this.show_app_tip = t;
                    },
                    goConsultantHelp: function() {
                        wx.navigateTo({
                            url: "/pages/consultants/recommend_rules/main?theme=".concat(this.consultantCard.home.theme)
                        });
                    },
                    onImgLoad: function(t) {
                        this.tabs_bg_loaded = !0;
                    },
                    onCloseFloat: function() {
                        this.show_float = !1;
                    },
                    getSurplus: function() {
                        var t = this;
                        return g(b.default.mark(function e() {
                            var n, o;
                            return b.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return n = [], o = {
                                        page: t.page,
                                        per: t.per,
                                        status: "摇号剩余"
                                    }, e.next = 4, t.getRecommendation();

                                  case 4:
                                    n = e.sent, o.exclude_ids = n.map(function(t) {
                                        return t.building_id;
                                    }).join(","), y.default.getBuildings(o).then(function(e) {
                                        1 === t.page && (e.items = n.concat(e.items)), t.handleData(e), t.$nextTick(function() {
                                            t.surplusTask(n);
                                        });
                                    });

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getRecommendation: function() {
                        return w.default.getRecommendation("surplus_list").then(function(t) {
                            return t.forEach(function(t) {
                                t.id = t.building_id, t.hide_status || t.tag_list.unshift("在售"), t.tags = (0, S.getTags)(t);
                            }), t;
                        });
                    },
                    getFocusList: function() {
                        var t = this;
                        return g(b.default.mark(function e() {
                            return b.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, y.default.getMyFavourite({
                                        page: t.page,
                                        per: t.per,
                                        category: "全部"
                                    }).then(function(e) {
                                        t.handleData(e);
                                    });

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getHhematic: function(t) {
                        var e = this;
                        return g(b.default.mark(function n() {
                            return b.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, y.default.getBuildings({
                                        feature: t,
                                        page: e.page
                                    }).then(function(t) {
                                        e.handleData(t);
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    homepageSuspendedButtonLog: function() {
                        var t = this.homepage_suspended_button, e = t.id, n = t.position, o = t.listpage_order;
                        y.default.interestingEvent({
                            interesting_id: e,
                            event: "click",
                            pos_name: n,
                            pos: o
                        });
                    },
                    onSettingAddress: function() {
                        this.current_address && wx.navigateTo({
                            url: "/pages/packageA/choose_location/main?latitude=".concat(this.latitude, "&longitude=").concat(this.longitude, "&current_address=").concat(this.current_address)
                        });
                    }
                }),
                components: {
                    HouseItem: function() {
                        Promise.all([ o.e("common/vendor"), o.e("components/business/house_item") ]).then(function() {
                            return resolve(o("ae38"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    LittleHouseItem: function() {
                        o.e("components/business/little_house_item").then(function() {
                            return resolve(o("972a"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    Loading: function() {
                        o.e("components/views/loading").then(function() {
                            return resolve(o("7756"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    Search: function() {
                        Promise.all([ o.e("common/vendor"), o.e("pages/index/_components/_search") ]).then(function() {
                            return resolve(o("4db5"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    HomeEvent: function() {
                        o.e("pages/index/_event").then(function() {
                            return resolve(o("d86a"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    TopTip: function() {
                        Promise.all([ o.e("common/vendor"), o.e("components/home/home_top_tip") ]).then(function() {
                            return resolve(o("01a8"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    HomeSwiper: function() {
                        Promise.all([ o.e("common/vendor"), o.e("pages/index/_swiper") ]).then(function() {
                            return resolve(o("0a2f"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    BottomTip: function() {
                        o.e("components/views/bottom_tip").then(function() {
                            return resolve(o("7a99"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    HomeHeadline: function() {
                        o.e("pages/index/_headline").then(function() {
                            return resolve(o("002c"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    ExcellentConsultantItems: function() {
                        Promise.all([ o.e("common/vendor"), o.e("components/views/excellent_consultant_items") ]).then(function() {
                            return resolve(o("f767"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    ArticleItem: function() {
                        o.e("components/views/common_article").then(function() {
                            return resolve(o("337b"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    EmptyBox: function() {
                        o.e("components/views/empty_box").then(function() {
                            return resolve(o("8c0b"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    Tab: function() {
                        Promise.all([ o.e("common/vendor"), o.e("pages/index/_tab") ]).then(function() {
                            return resolve(o("2951"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    BottomUserBar: function() {
                        o.e("pages/index/_components/botttom_user_bar").then(function() {
                            return resolve(o("f781"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    ActivityBanner: function() {
                        o.e("pages/index/_activity").then(function() {
                            return resolve(o("9898"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    ScrollTabs: function() {
                        o.e("pages/index/_components/_scroll_tabs").then(function() {
                            return resolve(o("a391"));
                        }.bind(null, o)).catch(o.oe);
                    }
                }
            };
            n.default = G;
        }).call(this, o("543d").default);
    }
}, [ [ "49b3", "common/runtime", "common/vendor" ] ] ]);
require("common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/business" ], {
    "3b68": function(e, n, t) {
        t.r(n);
        var o = t("a9f6"), i = t.n(o);
        for (var s in o) [ "default" ].indexOf(s) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        n.default = i.a;
    },
    "3e35": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    "536c": function(e, n, t) {
        var o = t("f442");
        t.n(o).a;
    },
    a9f6: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, n, t, o, i, s, u) {
            try {
                var a = e[s](u), r = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(r) : Promise.resolve(r).then(o, i);
        }
        function s(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(o, s) {
                    function u(e) {
                        i(r, o, s, u, a, "next", e);
                    }
                    function a(e) {
                        i(r, o, s, u, a, "throw", e);
                    }
                    var r = e.apply(n, t);
                    u(void 0);
                });
            };
        }
        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function a(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach(function(n) {
                    r(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function r(e, n, t) {
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
        var c = o(t("a34a")), l = t("2f62"), h = o(t("80d6")), d = o(t("8e44")), _ = o(t("b4fd")), g = o(t("295f")), f = o(t("31e7")), p = (o(t("ceca")), 
        o(t("ba1b"))), m = o(t("95f1")), b = t("9554"), v = (t("d8e2"), o(t("d80f"))), y = o(t("e12f")), w = o(t("41f4")), P = t("371c"), x = o(t("ae93")), S = t("f51f"), k = o(t("75e7")), T = o(t("2de8")), C = o(t("f9d4")), O = o(t("b512")), L = o(t("6453")), B = o(t("b9bb")), A = o(t("03a3")), E = o(t("d02f")), I = o(t("d973")), j = t("83e9"), D = o(t("757e")), H = o(t("ea60")), U = o(t("8f42")), R = ((0, 
        S.getNavigationInfo)().navigation_height, function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return [ {
                name: "?????????",
                type: "layout",
                class: "apartment-img",
                show: e.layout_image_exists
            }, {
                name: "????????????",
                type: "events",
                class: "events",
                show: !1
            }, {
                name: "????????????",
                type: "detail",
                show: Boolean(e.details)
            }, {
                name: "????????????",
                type: "around",
                show: e.around_facility_exists
            }, {
                name: "????????????",
                type: "common",
                class: "house-img",
                show: e.common_image_exists
            } ];
        }), M = {
            mixins: [ T.default, C.default, O.default, v.default, y.default, I.default, L.default, D.default, B.default, A.default, H.default, E.default ],
            data: function() {
                return a(a({}, x.default), {}, {
                    show_billboard: !1,
                    show_share_option: !1,
                    house: {
                        view_count: 0,
                        current_houses: [],
                        favourite: !0
                    },
                    loading: !0,
                    tabs: R(),
                    current_house: {
                        attachment_urls: {}
                    },
                    current_house_index: 0,
                    current_houses_tabs: [],
                    excellent_consultants: [],
                    is_consultant: !1,
                    events: {
                        items: [],
                        customer_service_info: {},
                        is_consultant: !1,
                        building_event_author: !1,
                        total_count: 0,
                        loading: !0
                    },
                    surplus_apartment_count: 0,
                    surplus_houses: [],
                    not_lottery_houses: [],
                    show_mask: !1,
                    scene_from: "",
                    type: "",
                    is_default_consultants: !1,
                    weixin_phone_number: "",
                    history_lot_houses: [],
                    history_lot_houses_all: [],
                    show_more_history: !1,
                    lottery_loaded: !1,
                    you_like_buidings: {},
                    you_like_buidings_loaded: !1,
                    house_id: "",
                    show_bm: !1,
                    saving: !1,
                    show_inner_tips: !0,
                    consultant: {},
                    is_building_consultant: !1,
                    follow_building_tip: "",
                    baseinfos: [],
                    rankingType: {
                        views: "??????",
                        follows: "??????",
                        in_rate: "??????"
                    },
                    gfzzjQr: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/qr/gfzzj.jpeg",
                    icons: [],
                    layout_items: [],
                    show_article: !1,
                    getUserLoading: !0,
                    show_activity_f: !1,
                    predict_open: null,
                    activity_aaa_thematic_building: !1,
                    history_trend_data: [],
                    historyTrendOpts: {
                        global: {
                            appendPadding: [ 12, 0, 6, 0 ]
                        },
                        defs: {
                            x: {
                                tickCount: 8
                            },
                            y: {
                                min: 0,
                                ticks: [ 0, 20, 40, 60, 80, 100 ]
                            }
                        },
                        axis: [ "y", {
                            grid: {
                                stroke: "#eee"
                            }
                        } ],
                        axisX: [ "x", {} ],
                        legend: !1,
                        color: [ "#00B08D" ],
                        area: !0,
                        area_color: "l(90) 0:#00B08D 1:#f7f7f7",
                        tooltipOpts: {
                            crosshairsStyle: {
                                stroke: "#00B08D",
                                lineWidth: 1
                            },
                            background: {
                                radius: 2,
                                fill: "#00B08D"
                            },
                            showItemMarker: !1
                        }
                    },
                    special_banner: []
                });
            },
            computed: a(a({}, (0, l.mapState)([ "consultantCard", "showVideo", "share_by_consultant_uid", "buildingCardInfo", "current_consultant_uid", "showCommentRedPacketActivity", "commentRedPacketActivity", "wkBanner" ])), {}, {
                is_vip: function() {
                    return "?????????" === this.house.vip_type || "business" === this.type;
                },
                qr_img: function() {
                    return "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/qr/hangzhou/normal-qr.png?_=145367";
                },
                is_selling: function() {
                    return !this.getSceneParam().house_id && "??????" === this.house.status;
                },
                open_type: function() {
                    return this.is_consultant ? "" : "share";
                },
                is_opened: function() {
                    var e = this.house;
                    return e.current_houses && e.current_houses.length;
                },
                show_result: function() {
                    var e = this.is_opened, n = this.current_house;
                    return e && "????????????" !== n.status;
                },
                show_surplus_houses: function() {
                    return this.surplus_houses && this.surplus_houses.length > 0;
                },
                show_not_lottery_houses: function() {
                    return "not_lottery_houses" === this.scene_from && this.not_lottery_houses && this.not_lottery_houses.length;
                },
                price_desc: function() {
                    var e = this.current_house.price_desc;
                    return "????????????" === e ? "??????" : e;
                },
                show_house_count_table: function() {
                    var e = this.current_house, n = e.total_apartments, t = e.show_reg, o = e.show_prob, i = e.ross_apartments, s = e.rd_apartments, u = e.common_apartments;
                    return n && (t || o || i || s || u);
                },
                show_top_tip: function() {
                    return this.house.today_opening_house_count || "????????????" === this.house.status;
                }
            }),
            onLoad: function(e) {
                var n = this;
                this.history_lot_houses = [], this.lottery_loaded = !1, this.you_like_buidings = {}, 
                this.you_like_buidings_loaded = !1;
                var t = this.getSceneParam().type;
                this.type = t, g.default.getTips().then(function(e) {
                    var t;
                    e.forEach(function(e) {
                        switch (e.tip_type) {
                          case "follow_building":
                            n.follow_building_tip = e.content[0], t = e.id;
                        }
                    }), t && t && g.default.viewTips(t);
                });
            },
            onUnload: function() {
                var e = getCurrentPages().filter(function(e) {
                    return e && "pages/building/main" === e.route;
                }).length;
                e && 1 === e && this.setCurrentConsultantUid("");
            },
            onReady: function() {
                var e = this.getSceneParam(), n = e.building_id, t = e.prices_house_id, o = e.scene_params, i = e.share_by_consultant_uid;
                if ((o || i) && this.setShareByConsultantUid(o || i), t) wx.navigateTo({
                    url: "/pages/building/price/main?house_id=".concat(t, "&building_id=").concat(n || "")
                }); else {
                    var s = this.$root.$mp.query.ccb_sub_page;
                    s ? wx.navigateTo({
                        url: decodeURIComponent(s)
                    }) : this.checkSubPage();
                }
            },
            onShareAppMessage: function() {
                var e = this.getSceneParam(), n = e.building_id, t = e.house_id, o = e.consultant_group_id, i = e.from, s = e.type, u = encodeURIComponent("/pages/building/main?house_id=".concat(t || "", "&building_id=").concat(n || "", "&consultant_group_id=").concat(o || "", "&from=").concat(i, "&type=").concat(s));
                return this.getShareInfo({
                    title: (0, k.default)(this.house, this.current_house, this.is_opened),
                    path: "/pages/index/main?sub_page=".concat(u),
                    imageUrl: this.house.photos_urls && this.house.photos_urls.length ? this.house.photos_urls[0] : ""
                });
            },
            onPullDownRefresh: function() {
                this.loading || this.getData();
            },
            onShow: function() {
                var e = this, n = this.getSceneParam(), t = n.from, o = n.building_id, i = n.scene_params, s = n.house_id, u = n.share_by_consultant_uid;
                (i || u) && this.setShareByConsultantUid(i || u), P.UserLog.viewBuilding(o, i || ""), 
                this.scene_from = t, this.house_id = s, d.default.init().then(function() {
                    e.getData();
                });
            },
            methods: a(a({}, (0, l.mapActions)([ "setShareByConsultantUid", "setCurrentConsultantUid" ])), {}, {
                goBrands: function() {
                    (0, P.sendCtmEvtLog)("???????????????-?????????????????????"), wx.navigateTo({
                        url: "/pages/activity_a/brands/main"
                    });
                },
                getYouLike: function() {
                    var e = this;
                    if (this.is_vip) this.you_like_buidings_loaded = !0; else {
                        var n = this.getSceneParam().building_id;
                        p.default.getYouLike(n).then(function(n) {
                            e.you_like_buidings_loaded = !0, e.you_like_buidings = n;
                        });
                    }
                },
                onShowMoreHistory: function() {
                    this.show_more_history = !this.show_more_history, this.history_lot_houses = this.show_more_history ? this.history_lot_houses_all : this.history_lot_houses_all.slice(0, 1);
                },
                getLottery: function() {
                    var e = this, n = this.getSceneParam(), t = n.building_id, o = n.consultant_group_id;
                    n.house_id ? this.lottery_loaded = !0 : p.default.getHistoryLottery(t).then(function(n) {
                        var i = n.items;
                        i.forEach(function(e) {
                            e.common_probability = (0, S.getProbability)(e.common_probability), e.rd_probability = (0, 
                            S.getProbability)(e.rd_probability), e.href = "/pages/building/main?building_id=".concat(t, "&house_id=").concat(e.id, "&consultant_group_id=").concat(o || "");
                        }), e.lottery_loaded = !0, e.show_more_history || (e.history_lot_houses = i.slice(0, 1), 
                        e.history_lot_houses_all = i, e.history_trend_data = i.map(function(e) {
                            return {
                                type: "????????????",
                                x: "".concat(e.presell_date),
                                y: Number(e.total_probability) || 100
                            };
                        }));
                    });
                },
                historyTrendValueFormatter: function(e) {
                    return e + "%";
                },
                historyTrendAxisXLabelFormatter: function(e, n, t) {
                    var o = {
                        textAlign: "center",
                        textBaseline: "middle"
                    };
                    return t > 2 && (o.textAlign = "end", o.rotate = -Math.PI / 4), o;
                },
                showShareOption: function() {
                    this.is_consultant && (this.show_share_option = !0);
                },
                hideShareOption: function() {
                    this.show_share_option = !1;
                },
                toggleBillboard: function() {
                    this.show_billboard = !this.show_billboard;
                },
                getData: function() {
                    var e = this, n = this.getSceneParam(), t = n.house_id, o = n.building_id, i = n.consultant_group_id, s = n.from, u = (n.type, 
                    n.scene_params), r = (n.prices_house_id, n.share_by_consultant_uid), c = n.status;
                    this.scene_from = s;
                    var l = this.current_consultant_uid || this.share_by_consultant_uid || u || r;
                    m.default.get(o, t, i, c, l).then(function(n) {
                        e.activity_aaa_thematic_building = n.activities && n.activities.indexOf("activity_aaa_thematic_building") > -1, 
                        n.current_houses = n.current_houses || [], e.current_houses_tabs = n.current_houses.map(function(e) {
                            return e.name;
                        }), (0, S.handleHouseNum)(n), n.current_houses.forEach(function(e) {
                            e.has_house_price = e.exist_values && e.exist_values.indexOf("house_prices") > -1, 
                            "??????" === e.decoration_type && (e.decoration_type = "??????");
                        }), e.current_house = n.current_houses.length ? n.current_houses[0] : {}, e.current_house_index = 0, 
                        n.planar_graph_url = (0, j.getSmallPlanar)(n.planar_graph_url), n.favourite = n.follow_info && n.follow_info.id, 
                        n.showCommentRedPacketActivity = e.showCommentRedPacketActivity, e.tabs = R(n), 
                        e.icons = (0, S.initIconsData)(n);
                        var t = n.details, i = n.surplus_apartment_count, s = n.not_lottery_houses, u = n.surplus_houses, r = n.usage;
                        e.surplus_apartment_count = i, e.surplus_houses = u, e.not_lottery_houses = s;
                        var c = (0, S.getInfoItems)(r);
                        n.house_info = c.reduce(function(e, n) {
                            return t && t[n] && e.push({
                                key: n,
                                value: t[n]
                            }), e;
                        }, []), e.baseinfos = n.house_info.slice(0, 5);
                        var l = t["???????????????"];
                        l && (e.predict_open = Object.keys(l).reduce(function(e, n) {
                            var t = l[n];
                            return null != t && void 0 != t && "" != t && e.push({
                                key: n,
                                val: t
                            }), e;
                        }, [])), n.longitude = n.location ? n.location.split(",")[0] : "", n.latitude = n.location ? n.location.split(",")[1] : "", 
                        n.status = n.ln_status || n.status, n.ln_status && delete n.ln_status, n.view_count = n.view_count >= 1e4 ? "".concat((n.view_count / 1e4).toFixed(1), "w") : n.view_count, 
                        e.house = n, U.default.addBuilding(a(a({}, n), {}, {
                            cover_photo_url: n.photos_urls && n.photos_urls.length ? n.photos_urls[0] : ""
                        })), e.loading = !1, n.current_consultant && setTimeout(function() {
                            e.show_inner_tips = !1;
                        }, 5e3), e.getExcellentConsultant(o), e.getUser(), e.getSecondhandPrice(), e.getEvents(), 
                        e.getLayouts(), e.$refs.house_comments.getData(e.house.id), e.$refs.building_article.getData(e.house.id, e.house.weixin_account_id).then(function(n) {
                            e.show_article = n;
                        }), e.getLottery(), e.getYouLike(), wx.stopPullDownRefresh(), console.log({
                            house: e.house
                        });
                    }).catch(function(e) {
                        console.error(e), 404 === e && wx.switchTab({
                            url: "/pages/index/main"
                        });
                    }), f.default.getBuildingBanner().then(function(n) {
                        var t = n.special_banner;
                        e.special_banner = t.filter(function(e) {
                            return e.building_id == o;
                        });
                    });
                },
                onCollapse: function(e) {
                    this.baseinfos = e ? this.house.house_info.map(function(e) {
                        return e;
                    }) : this.house.house_info.slice(0, 5);
                },
                getExcellentConsultant: function(e) {
                    var n = this;
                    p.default.excellentConsultants(e).then(function(e) {
                        n.excellent_consultants = e.slice(0, 3);
                    });
                },
                getEvents: function() {
                    var e = this, n = this.getSceneParam().building_id;
                    p.default.getEvent(n, {
                        page: 1,
                        per: 1
                    }).then(function(n) {
                        e.events = {
                            items: n.items.slice(0, 1),
                            customer_service_info: n.customer_service_info,
                            is_consultant: n.is_consultant,
                            building_event_author: n.building_event_author,
                            total_count: n.total_count,
                            loading: !1
                        }, e.$set(e.tabs, 1, a(a({}, e.tabs[1]), {}, {
                            show: Boolean(n.total_count)
                        }));
                    });
                },
                getLayouts: function() {
                    var e = this;
                    return s(c.default.mark(function n() {
                        var t, o, i;
                        return c.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e.getSceneParam(), o = t.building_id, n.next = 3, p.default.getImgs(o, "layout", {});

                              case 3:
                                i = n.sent, e.layoutItemsSort(i.items);

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                layoutItemsSort: function(e) {
                    var n = this.house.current_houses.map(function(e) {
                        return e.id;
                    }), t = e.sort(function(e, t) {
                        return n.indexOf(e.house_id) > -1 && -1 === n.indexOf(t.house_id) ? -1 : 1;
                    });
                    this.layout_items = t;
                },
                getUser: function() {
                    var e = this, n = this.getSceneParam().building_id;
                    w.default.user.get().then(function(t) {
                        e.is_consultant = t.is_consultant, e.getUserLoading = !1, e.show_activity_f = t.activity_menus && t.activity_menus.indexOf("activity_f-????????????") > -1, 
                        t.is_consultant && d.default.getMyConsultant(!1).then(function(t) {
                            e.consultant = t, e.is_building_consultant = t.buildings.map(function(e) {
                                return e.id;
                            }).indexOf(Number(n)) > -1;
                        }), t.weixin_phone_number ? e.weixin_phone_number = t.weixin_phone_number : d.default.getUserInfo().then(function(n) {
                            var t = n.weixin_phone_number;
                            e.weixin_phone_number = t;
                        });
                    });
                },
                openMap: function() {
                    var e = this.house, n = e.latitude, t = e.longitude, o = e.name, i = e.address;
                    n && t && wx.openLocation({
                        latitude: Number(n),
                        longitude: Number(t),
                        name: o,
                        address: i
                    });
                },
                goAddComments: function() {
                    var e = this.house, n = e.name, t = e.building_id;
                    wx.navigateTo({
                        url: "/pages/building/comments/add/main?building_id=".concat(t || "", "&name=").concat(n)
                    });
                },
                goTab: function(e) {
                    var n = this, t = e.currentTarget.dataset, o = t.type, i = t.name, s = t.index;
                    this.tabs[s].show && (0, b.askAuth)(e, function() {
                        "common" === o || "layout" === o ? n.goPreview(o, i) : "events" === o ? n.goEvents() : "around" === o ? n.goAround("metro") : n.goHouseInfo(o);
                    });
                },
                goEvents: function() {
                    if (wx.createSelectorQuery) {
                        var e = wx.createSelectorQuery(), n = e.select("#events");
                        n && (n.boundingClientRect(), e.selectViewport().scrollOffset(), e.exec(function(e) {
                            e.length && e[0].top && wx.pageScrollTo && wx.pageScrollTo({
                                scrollTop: e[0].top,
                                duration: 0
                            });
                        }));
                    }
                },
                goLink: function(e) {
                    (0, b.askAuthNavigator)(e, e.currentTarget.dataset.href);
                },
                goHouseInfo: function(e) {
                    var n = this.getSceneParam(), t = n.id, o = n.building_id;
                    this.goSubPagePath("/pages/building/info/main?type=".concat(e, "&id=").concat(t, "&building_id=").concat(o || ""));
                },
                goHousePrice: function(e) {
                    var n = this.getSceneParam().building_id, t = this.current_house.id, o = this.house.name;
                    this.goSubPagePath("/pages/building/price/main?title=".concat(o, "&house_id=").concat(t, "&building_id=").concat(n || ""));
                },
                goSurplusApartments: function(e) {
                    var n = this.getSceneParam().building_id, t = e.currentTarget.dataset, o = t.name, i = t.id;
                    this.goSubPagePath("/pages/building/price/main?building_id=".concat(n, "&title=").concat(o, "&house_id=").concat(i, "&type=surplus_apartments"));
                },
                goPreview: function(e, n) {
                    var t = this.getSceneParam().building_id, o = "".concat(this.house.name, "-").concat(n), i = this.house.current_houses.map(function(e) {
                        return e.id;
                    }).join(",");
                    "price" === e && (i = this.current_house.id), this.goSubPagePath("/pages/building/img_preview/main?house_id=".concat(i || "", "&type=").concat(e, "&title=").concat(o, "&building_id=").concat(t || "")), 
                    "?????????" === n && (0, P.sendCtmEvtLog)("????????????-".concat(n, "-??????"));
                },
                goArticle: function() {
                    this.goSubPagePath("/pages/packageC/fangchan_release/main?id=".concat(this.house.weixin_account_id));
                },
                goAround: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.goSubPagePath("/pages/building/around_facilities/map/main?id=".concat(this.house.id, "&category=").concat(e));
                },
                goComments: function() {
                    this.goSubPagePath("/pages/building/comments/main?building_id=".concat(this.house.id || "", "&name=").concat(this.house.name));
                },
                goPredict: function() {
                    this.goSubPagePath("/pages/packageC/interest_forecast/main?building_id=".concat(this.house.id, "&house_id=").concat(this.current_house.id));
                },
                goMaterial: function() {
                    this.goSubPagePath("/pages/building/material/main?building_id=".concat(this.house.id, "&house_id=").concat(this.current_house.id));
                },
                changeCurrentHouse: function(e) {
                    this.current_house = this.house.current_houses[e], this.current_house_index = e;
                },
                goBuildingArticle: function() {
                    var e = this.getSceneParam().building_id;
                    this.goSubPagePath("/pages/building/article/main?building_id=".concat(e));
                },
                goEvent: function() {
                    var e = this.getSceneParam().building_id;
                    this.goSubPagePath("/pages/building/event/main?building_id=".concat(e));
                },
                openLayoutDetail: function(e) {
                    var n = this.getSceneParam().building_id;
                    (0, P.sendCtmEvtLog)("?????????????????????????????????"), this.goSubPagePath("/pages/building/layout_detail/main?building_id=".concat(n, "&layout_id=").concat(e));
                },
                goQulification: function() {
                    wx.navigateTo({
                        url: "/pages/check_condition/main?verify_type=????????????????????????"
                    });
                },
                getphonenumber: function(e) {
                    var n = this, t = (this.getSceneParam().building_id, e.target), o = t.iv, i = t.encryptedData, s = t.errMsg;
                    _.default.postWeixinPhone(o, i, s).then(function(e) {
                        422 === Number(e.code) ? wx.showToast({
                            title: e.error_message,
                            icon: "none"
                        }) : (n.weixin_phone_number = e.phone, d.default.getUserInfo(), n.toCcbLoanApprove());
                    });
                },
                toCcbLoanApprove: function() {
                    var e = this.getSceneParam().building_id;
                    wx.navigateTo({
                        url: "/pages/packageA/ccb_loan_approve/main?mobile=".concat(this.weixin_phone_number, "&building_id=").concat(e, "&building_name=").concat(this.house.name)
                    });
                },
                openBm: function(e) {
                    var n = this;
                    (0, b.askAuth)(e, function() {
                        n.show_bm = !0;
                    });
                },
                onCloseBm: function() {
                    this.show_bm = !1;
                },
                onSaveQr: function(e) {
                    var n = this;
                    wx.showLoading(), this.saving = !0, h.default.saveImgFromInternet({
                        url: this.current_house.registration_method_qrcode_url
                    }).then(function(e) {
                        n.finishSave(), wx.showToast({
                            title: "????????????"
                        }), n.show_bm = !1;
                    }).catch(function() {
                        n.finishSave(), wx.showToast({
                            title: "????????????",
                            icon: "none"
                        });
                    });
                },
                finishSave: function() {
                    this.saving = !1, setTimeout(wx.hideLoading, 1500);
                },
                onHideThis: function() {
                    this.show_inner_tips = !1;
                },
                sendEvtLog: function(e) {
                    var n = e.currentTarget.dataset.name;
                    console.error(n), (0, P.sendCtmEvtLog)(n);
                }
            }),
            components: {
                FullLoading: function() {
                    t.e("components/views/full_loading").then(function() {
                        return resolve(t("f65e"));
                    }.bind(null, t)).catch(t.oe);
                },
                ListLoading: function() {
                    t.e("components/views/loading").then(function() {
                        return resolve(t("7756"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopSwiper: function() {
                    Promise.all([ t.e("pages/building/common/vendor"), t.e("pages/building/_components/_swiper") ]).then(function() {
                        return resolve(t("833d"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopHeader: function() {
                    t.e("pages/building/_components/_top_header").then(function() {
                        return resolve(t("50fe"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseTab: function() {
                    t.e("pages/building/_components/_house_tab").then(function() {
                        return resolve(t("2cab"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopTabs: function() {
                    t.e("pages/building/_components/_top_tabs").then(function() {
                        return resolve(t("62e9"));
                    }.bind(null, t)).catch(t.oe);
                },
                BaseInfo: function() {
                    t.e("pages/building/_components/_base_info").then(function() {
                        return resolve(t("d0c8"));
                    }.bind(null, t)).catch(t.oe);
                },
                OpeningInfo: function() {
                    t.e("pages/building/_components/_opening_info").then(function() {
                        return resolve(t("b2e0"));
                    }.bind(null, t)).catch(t.oe);
                },
                SurplusHouses: function() {
                    t.e("pages/building/_components/_surplus_houses").then(function() {
                        return resolve(t("3294"));
                    }.bind(null, t)).catch(t.oe);
                },
                RegPredict: function() {
                    t.e("pages/building/_components/_predict").then(function() {
                        return resolve(t("a715"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseCount: function() {
                    t.e("components/views/_house_count").then(function() {
                        return resolve(t("5527"));
                    }.bind(null, t)).catch(t.oe);
                },
                VipTimeline: function() {
                    t.e("pages/building/_components/_vip_timeline_v2").then(function() {
                        return resolve(t("f247"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseContent: function() {
                    Promise.all([ t.e("pages/building/common/vendor"), t.e("pages/building/_components/_content") ]).then(function() {
                        return resolve(t("1cd3"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseAttachs: function() {
                    t.e("pages/building/_components/_house_attachs").then(function() {
                        return resolve(t("53fc"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseResult: function() {
                    t.e("pages/building/_components/_result").then(function() {
                        return resolve(t("bec4"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseComments: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/_components/_comments") ]).then(function() {
                        return resolve(t("88de"));
                    }.bind(null, t)).catch(t.oe);
                },
                ExcellentConsultants: function() {
                    t.e("pages/building/_components/_excellent_consultants").then(function() {
                        return resolve(t("d91a"));
                    }.bind(null, t)).catch(t.oe);
                },
                ShareOptions: function() {
                    t.e("components/business/share_options").then(function() {
                        return resolve(t("012a"));
                    }.bind(null, t)).catch(t.oe);
                },
                Billboard: function() {
                    t.e("pages/building/_components/_billboard").then(function() {
                        return resolve(t("e061"));
                    }.bind(null, t)).catch(t.oe);
                },
                YouLike: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/common/vendor"), t.e("pages/building/_components/_you_like") ]).then(function() {
                        return resolve(t("3b54"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingFooter: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/building/_footer") ]).then(function() {
                        return resolve(t("801a"));
                    }.bind(null, t)).catch(t.oe);
                },
                DiscussLink: function() {
                    t.e("pages/building/_components/_discuss").then(function() {
                        return resolve(t("dc1b"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingArticle: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/article/_articles") ]).then(function() {
                        return resolve(t("118e"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingEvent: function() {
                    Promise.all([ t.e("pages/building/common/vendor"), t.e("pages/building/_components/_event") ]).then(function() {
                        return resolve(t("c7cc"));
                    }.bind(null, t)).catch(t.oe);
                },
                BusinessHeader: function() {
                    t.e("pages/building/_components/_business_header").then(function() {
                        return resolve(t("129b"));
                    }.bind(null, t)).catch(t.oe);
                },
                LikeTip: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/_components/_like_tip") ]).then(function() {
                        return resolve(t("ca0b"));
                    }.bind(null, t)).catch(t.oe);
                },
                SecPrice: function() {
                    t.e("pages/building/_components/_sec_price").then(function() {
                        return resolve(t("e4aa"));
                    }.bind(null, t)).catch(t.oe);
                },
                OnlineSalesTips: function() {
                    t.e("components/views/online_sales_tips").then(function() {
                        return resolve(t("66d1"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopTip: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/_components/_top_tip") ]).then(function() {
                        return resolve(t("8dea"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingRank: function() {
                    t.e("pages/building/_components/_building_rank").then(function() {
                        return resolve(t("f0df"));
                    }.bind(null, t)).catch(t.oe);
                },
                AuthPhone: function() {
                    t.e("components/building/_auth_phone").then(function() {
                        return resolve(t("7038"));
                    }.bind(null, t)).catch(t.oe);
                },
                PlanarGraph: function() {
                    t.e("pages/building/_components/_planar_graph").then(function() {
                        return resolve(t("1314"));
                    }.bind(null, t)).catch(t.oe);
                },
                PredictOpen: function() {
                    t.e("pages/building/_components/_predict_open").then(function() {
                        return resolve(t("07cb"));
                    }.bind(null, t)).catch(t.oe);
                },
                Web720: function() {
                    t.e("pages/building/_components/_web_720").then(function() {
                        return resolve(t("d81a"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopTools: function() {
                    t.e("pages/building/_components/_top_tools").then(function() {
                        return resolve(t("2e8d"));
                    }.bind(null, t)).catch(t.oe);
                },
                Layout: function() {
                    t.e("pages/building/_components/_layout").then(function() {
                        return resolve(t("bf95"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingTopTab: function() {
                    t.e("pages/building/_components/_building_top_tab").then(function() {
                        return resolve(t("bc2a"));
                    }.bind(null, t)).catch(t.oe);
                },
                CommentRedPacketActivity: function() {
                    t.e("pages/building/comments/_red_packet_activity").then(function() {
                        return resolve(t("6ffc"));
                    }.bind(null, t)).catch(t.oe);
                },
                TimelineBillboard: function() {
                    t.e("pages/building/_components/_timeline_billboard").then(function() {
                        return resolve(t("4d37"));
                    }.bind(null, t)).catch(t.oe);
                },
                F2Charts: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/f2/index") ]).then(function() {
                        return resolve(t("5064"));
                    }.bind(null, t)).catch(t.oe);
                },
                SecondHand: function() {
                    t.e("pages/building/_components/_second_hand").then(function() {
                        return resolve(t("8820"));
                    }.bind(null, t)).catch(t.oe);
                },
                Disclaimer: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/views/disclaimer") ]).then(function() {
                        return resolve(t("db46"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = M;
    },
    b6d3: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("ea1d")).default);
        }).call(this, t("543d").createPage);
    },
    ea1d: function(e, n, t) {
        t.r(n);
        var o = t("3e35"), i = t("3b68");
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(s);
        t("536c");
        var u = t("f0c5"), a = Object(u.a)(i.default, o.b, o.c, !1, null, "46404dc4", null, !1, o.a, void 0);
        n.default = a.exports;
    },
    f442: function(e, n, t) {}
}, [ [ "b6d3", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
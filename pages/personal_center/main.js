(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_center/main" ], {
    "1bf4": function(n, e, t) {},
    "5ffb": function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function a(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function r(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(t), !0).forEach(function(e) {
                    i(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function i(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = o(t("8e44")), u = o(t("12bf")), l = o(t("9554")), s = t("ad02"), f = t("371c"), d = o(t("180a")), _ = o(t("f832")), g = o(t("61a8")), p = o(t("01b0")), b = o(t("d80f")), h = o(t("eee9")), m = o(t("2de1")), v = t("db49"), k = o(t("885b")), O = {
            name: "PersonalCenter",
            mixins: [ b.default, p.default, _.default, g.default, k.default ],
            components: {
                NormalHeader: function() {
                    t.e("pages/personal_center/_components/normal_header").then(function() {
                        return resolve(t("871e"));
                    }.bind(null, t)).catch(t.oe);
                },
                ConsultantHeader: function() {
                    t.e("pages/personal_center/_components/consultant_header").then(function() {
                        return resolve(t("71d18"));
                    }.bind(null, t)).catch(t.oe);
                },
                ConsultantTools: function() {
                    t.e("pages/personal_center/_components/consultant_tools").then(function() {
                        return resolve(t("6764"));
                    }.bind(null, t)).catch(t.oe);
                },
                NormalTools: function() {
                    t.e("pages/personal_center/_components/normal_tools").then(function() {
                        return resolve(t("69a9"));
                    }.bind(null, t)).catch(t.oe);
                },
                MoreTools: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/personal_center/_components/more_tools") ]).then(function() {
                        return resolve(t("b1cc"));
                    }.bind(null, t)).catch(t.oe);
                },
                BannerSwiper: function() {
                    t.e("pages/personal_center/_components/banner_swiper").then(function() {
                        return resolve(t("0dae"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return r(r({}, m.default), {}, {
                    loading: !0,
                    user: {},
                    consultant: {},
                    upgradable: !1,
                    consultant_rank: {
                        rankings: [],
                        current_ranking_in_building: "",
                        ranking_in_building_desc: ""
                    },
                    consultant_loading: !0
                });
            },
            onShow: function() {
                this.getData(), this.getChangeLog();
            },
            onPullDownRefresh: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                var n = {
                    title: "".concat("杭州购房通"),
                    path: "/pages/index/main",
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/share-img/home.png"
                };
                return this.user.is_consultant && (n.title = "置业顾问入驻", n.path = "/pages/personal_package/add_consultant/main?phone=".concat(this.consultant.phone), 
                n.imageUrl = v.APPLY_PIC), this.getShareInfo(n);
            },
            methods: {
                getData: function() {
                    var n = this;
                    c.default.getUserInfo().then(function(e) {
                        n.user = (0, h.default)(e), n.loading = !1, e.is_consultant && (n.getConsultant(), 
                        n.getConsultantRankings()), n.getCareMag(), wx.stopPullDownRefresh();
                    });
                },
                getConsultant: function() {
                    var n = this;
                    c.default.getMyConsultant(!1).then(function(e) {
                        n.consultant_loading = !1, n.consultant = {
                            id: e.id,
                            unread_calls_count: e.unread_calls_count,
                            bound_consultant_home_weixin: e.bound_consultant_home_weixin,
                            score: e.score,
                            phone: e.mobile,
                            level: e.level,
                            last_period_obtained_score: e.last_period_obtained_score,
                            score_link: "/pages/personal_package/consultant_score/main",
                            checkin_continuous_days: e.checkin_continuous_days,
                            checkin_today: e.checkin_today,
                            checkin_bonus_score: e.checkin_bonus_score,
                            building_id: e.buildings.map(function(n) {
                                return n.id;
                            })[0],
                            building_name: e.building_name,
                            building_ranking: e.building_ranking,
                            activities: e.activities
                        };
                    });
                },
                getConsultantRankings: function() {
                    var n = this;
                    u.default.consultantRankings({
                        page: 1,
                        per: 3
                    }).then(function(e) {
                        var t = e.items, o = e.consultant;
                        n.consultant_rank = {
                            rankings: t,
                            current_ranking_in_building: o.current_ranking_in_building,
                            ranking_in_building_desc: o.ranking_in_building_desc
                        };
                    });
                },
                getChangeLog: function() {
                    var n = this;
                    (0, d.default)({
                        tip: !1,
                        checkUpdate: function(e) {
                            n.upgradable = e;
                        }
                    });
                },
                sendLog: function(n) {
                    var e = n.currentTarget.dataset.name;
                    console.error(e), (0, f.sendCtmEvtLog)(e);
                },
                checkUserInfo: function(n) {
                    var e = n.currentTarget.dataset, t = e.url, o = e.tip;
                    (0, l.default)(n, function() {
                        var n = (0, s.checkTabBar)(t);
                        wx[n ? "switchTab" : "navigateTo"]({
                            url: t
                        });
                    }, o);
                }
            }
        };
        e.default = O;
    },
    6015: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("a2a3")).default);
        }).call(this, t("543d").createPage);
    },
    "73df": function(n, e, t) {
        t.r(e);
        var o = t("5ffb"), a = t.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    a2a3: function(n, e, t) {
        t.r(e);
        var o = t("bf56"), a = t("73df");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("d910");
        var i = t("f0c5"), c = Object(i.a)(a.default, o.b, o.c, !1, null, "5affbb5a", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    bf56: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    d910: function(n, e, t) {
        var o = t("1bf4");
        t.n(o).a;
    }
}, [ [ "6015", "common/runtime", "common/vendor" ] ] ]);
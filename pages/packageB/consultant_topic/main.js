require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/consultant_topic/main" ], {
    "05e5": function(n, e, t) {},
    "0d7a": function(n, e, t) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function i(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                e && (a = a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, a);
            }
            return t;
        }
        function o(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(Object(t), !0).forEach(function(e) {
                    r(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function r(n, e, t) {
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
        var c = t("2f62"), s = a(t("80d6")), u = a(t("327a")), l = (a(t("d80f")), t("db49")), f = t("371c"), d = a(t("8e44")), p = {
            mixins: [ u.default ],
            components: {
                Loading: function() {
                    t.e("components/views/loading").then(function() {
                        return resolve(t("7756"));
                    }.bind(null, t)).catch(t.oe);
                },
                Guest: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/packageB/consultant_topic/_guest") ]).then(function() {
                        return resolve(t("affe"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    winner: [],
                    yesterdayWinner: [],
                    my_ranking: {
                        my_ranking: "",
                        my_ranking_desc: ""
                    },
                    type: "",
                    rankingBooth: [ {
                        name: "首页",
                        link: "/pages/index/main"
                    }, {
                        name: "资格查询",
                        link: "/pages/check_condition/main?verify_type=杭州购房资格查询"
                    }, {
                        name: "落户查询",
                        link: "/pages/check_condition/main?verify_type=杭州落户查询"
                    }, {
                        name: "购房指南",
                        link: "/pages/personal_package/material/main"
                    }, {
                        name: "房贷计算",
                        link: "/pages/loan_computer/main"
                    }, {
                        name: "税费计算",
                        link: "/pages/personal_package/taxation/main"
                    } ],
                    is_consultant: !1
                };
            },
            computed: o(o({}, (0, c.mapState)([ "rankingTabs" ])), {}, {
                show_winner: function() {
                    return this.rankingTabs.every(function(n) {
                        return "yesterday" !== n.key;
                    });
                },
                link: function() {
                    return "/pages/packageB/image_page/main?img=".concat(encodeURIComponent("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/consultants/topic_info.png"));
                }
            }),
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "置业顾问活跃度排行",
                    path: "/pages/packageB/consultant_topic/main"
                });
            },
            onLoad: function() {
                var n = this;
                d.default.getUserInfo().then(function(e) {
                    var t = e.is_consultant;
                    n.is_consultant = t, n.type = t ? "today" : "all", n.getData();
                });
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.items = [], this.getData());
            },
            methods: {
                getData: function() {
                    var n = this;
                    this.loading = !0;
                    var e = {
                        today: "consultantTodayRankings",
                        yesterday: "consultantYesterdayRankings",
                        week: "consultantWeeklyRankings"
                    };
                    if ("all" === this.type) {
                        var t = this.page;
                        this.no_reach_bottom = !1, d.default.getConsultants({
                            page: t,
                            per: l.DEFAULT_PER
                        }).then(function(e) {
                            var a = e.items;
                            5 === t && (n.no_reach_bottom = !0), n.handleData({
                                items: a.map(function(n) {
                                    return o({
                                        consultant_headimgurl: n.weixin_headimgurl,
                                        consultant_name: n.name,
                                        consultant_level: n.level,
                                        consultant_id: n.id,
                                        consultant_weixin_name: n.weixin_name
                                    }, n);
                                })
                            });
                        });
                    } else this.no_reach_bottom = !0, "today" === this.type && this.show_winner && d.default[e.yesterday]().then(function(e) {
                        var t = e.items;
                        n.yesterdayWinner = t.slice(0, 6);
                    }), d.default[e[this.type]]().then(function(e) {
                        var t = e.my_ranking, a = e.items, i = e.winner, o = void 0 === i ? [] : i;
                        n.my_ranking = t, n.items = a, n.winner = o, n.loading = !1, wx.stopPullDownRefresh();
                    });
                },
                changeCategory: function(n) {
                    this.type = n, this.page = 1, this.items = [], this.getData();
                },
                setClipboardData: function(n) {
                    var e = n.currentTarget.dataset, t = e.weixin, a = e.id;
                    s.default.setClipboardData(t, function() {
                        wx.showModal({
                            title: "复制成功",
                            content: "添加置业顾问时，请说明来自杭州购房通",
                            showCancel: !1
                        });
                    }), f.UserLog.copyConsultant(a);
                },
                goCst: function(n) {
                    var e = n.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/consultants/card/main?id=".concat(e)
                    });
                }
            }
        };
        e.default = p;
    },
    1367: function(n, e, t) {
        var a = t("05e5");
        t.n(a).a;
    },
    7516: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("7dbf")).default);
        }).call(this, t("543d").createPage);
    },
    "7dbf": function(n, e, t) {
        t.r(e);
        var a = t("c31d"), i = t("9b86");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        t("1367");
        var r = t("f0c5"), c = Object(r.a)(i.default, a.b, a.c, !1, null, "511053da", null, !1, a.a, void 0);
        e.default = c.exports;
    },
    "9b86": function(n, e, t) {
        t.r(e);
        var a = t("0d7a"), i = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = i.a;
    },
    c31d: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(n) {
                n.stopPropagation();
            });
        }, i = [];
    }
}, [ [ "7516", "common/runtime", "common/vendor" ] ] ]);
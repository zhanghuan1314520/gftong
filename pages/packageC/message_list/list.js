require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/message_list/list" ], {
    "0ac2": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("d04a")).default);
        }).call(this, n("543d").createPage);
    },
    "0b34": function(e, t, n) {
        n.r(t);
        var a = n("8c98"), o = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = o.a;
    },
    "8c98": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, a, o, c, i) {
            try {
                var s = e[c](i), r = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(r) : Promise.resolve(r).then(a, o);
        }
        function c(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(a, c) {
                    function i(e) {
                        o(r, a, c, i, s, "next", e);
                    }
                    function s(e) {
                        o(r, a, c, i, s, "throw", e);
                    }
                    var r = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = a(n("a34a")), s = a(n("9998")), r = a(n("cbb0")), u = {
            "取证消息": "forensics",
            "意向登记结果": "result",
            "摇号结果": "lottery",
            "收到的回复": "reply",
            "收到的点赞": "give_like",
            "购房答疑": "questions",
            "反馈消息": "feedback",
            "楼盘动态": "buildings",
            "公众号动态": "public",
            "活动消息": "activity"
        }, l = {
            mixins: [ a(n("327a")).default ],
            onLoad: function() {
                var e = this.$root.$mp.query.category;
                this.category = e || "", this.getData(!0), "开盘消息" === e && this.getBanners();
            },
            data: function() {
                return {
                    per: 10,
                    items: [],
                    category: "",
                    tabs: [],
                    selected_tab: "",
                    loading: !0,
                    tab_name: "",
                    selected_index: "",
                    banners: []
                };
            },
            computed: {},
            components: {
                Item: function() {
                    n.e("pages/packageC/message_list/_components/_item").then(function() {
                        return resolve(n("a638"));
                    }.bind(null, n)).catch(n.oe);
                },
                EmptyBox: function() {
                    n.e("components/views/empty_box").then(function() {
                        return resolve(n("8c0b"));
                    }.bind(null, n)).catch(n.oe);
                },
                Tabs: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/packageC/message_list/_components/_tab") ]).then(function() {
                        return resolve(n("56f1"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommonArticle: function() {
                    n.e("components/views/common_article").then(function() {
                        return resolve(n("337b"));
                    }.bind(null, n)).catch(n.oe);
                },
                Comments: function() {
                    n.e("pages/packageC/message_list/_components/_comments").then(function() {
                        return resolve(n("1ae4"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            methods: {
                getBanners: function() {
                    var e = this;
                    r.default.getBanners("msgpage_top_banner", {
                        limit: 10
                    }).then(function(t) {
                        e.banners = t;
                    });
                },
                goJump: function(e) {
                    var t = e.jump_path, n = e.details, a = e.subject, o = e.message_type;
                    t ? wx.navigateTo({
                        url: t
                    }) : n.image_url ? wx.navigateTo({
                        url: "/pages/packageC/message_list/save_img?img=".concat(encodeURIComponent(n.image_url), "&subject=").concat(encodeURIComponent(a))
                    }) : "yesterday_score_journals" === o && (this.$sendCtmEvtLog("消息通知-置业顾问通知-点击查看积分明细"), 
                    wx.navigateTo({
                        url: "/pages/packageC/message_list/score_list?occur_date=".concat(n.occur_date)
                    }));
                },
                getData: function() {
                    var e = arguments, t = this;
                    return c(i.default.mark(function n() {
                        var a, o, c, r, l;
                        return i.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a = e.length > 0 && void 0 !== e[0] && e[0], t.loading = !0, o = {
                                    page: t.page,
                                    per: t.per,
                                    category: t.category
                                }, t.tab_name && (o.tab_name = t.tab_name), n.next = 6, s.default.getChatList(o);

                              case 6:
                                c = n.sent, r = "public" === t.selected_tab ? t.mapPublicItem(c.items) : c.items, 
                                l = c.tabs, a && l && (l.forEach(function(e) {
                                    e.key = u[e.name];
                                }), t.selected_index = 0, t.selected_tab = l[0].key, t.tab_name = l[0].name, t.tabs = l), 
                                t.handleData({
                                    items: r
                                }), t.read(), t.loading = !1;

                              case 13:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                mapPublicItem: function(e) {
                    return e.forEach(function(e) {
                        e.content_body = e.details || [], e.published_date = e.details ? e.details.published_date : "", 
                        e.content_body.image_url = e.details ? e.details.cover_image_url : "", e.author = e.details ? e.details.author : "";
                    }), e;
                },
                changeTab: function(e, t, n) {
                    this.selected_tab = e, this.tab_name = t, this.selected_index = n, this.page = 1, 
                    this.items = [], this.getData();
                },
                read: function() {
                    var e = this.tabs[this.selected_index];
                    if ((e ? e.unread_count : 0) > 0) {
                        var t = {
                            category: this.category,
                            tab_name: this.tab_name
                        };
                        s.default.readAllMsgs(t), e.unread_count = 0;
                    }
                }
            }
        };
        t.default = l;
    },
    "8e4c": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "9d6e": function(e, t, n) {
        var a = n("eb00");
        n.n(a).a;
    },
    d04a: function(e, t, n) {
        n.r(t);
        var a = n("8e4c"), o = n("0b34");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("9d6e");
        var i = n("f0c5"), s = Object(i.a)(o.default, a.b, a.c, !1, null, "23edec10", null, !1, a.a, void 0);
        t.default = s.exports;
    },
    eb00: function(e, t, n) {}
}, [ [ "0ac2", "common/runtime", "common/vendor" ] ] ]);
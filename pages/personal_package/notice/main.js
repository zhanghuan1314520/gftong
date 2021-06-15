require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/notice/main" ], {
    "159a": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    "15b5": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("2bfd")).default);
        }).call(this, n("543d").createPage);
    },
    "2bfd": function(e, t, n) {
        n.r(t);
        var a = n("159a"), r = n("2c9f");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("c323");
        var c = n("f0c5"), o = Object(c.a)(r.default, a.b, a.c, !1, null, "584d2dc2", null, !1, a.a, void 0);
        t.default = o.exports;
    },
    "2c9f": function(e, t, n) {
        n.r(t);
        var a = n("531c"), r = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = r.a;
    },
    "531c": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(n("327a")), u = n("db49"), s = a(n("cbb0")), f = a(n("8e44")), d = {
            daily: "日常通知",
            reply: "评论回复、问题被回答",
            building: "楼盘开盘/楼盘动态通知",
            activity: "新功能/活动通知",
            cdfx_register: "登记信息变化通知"
        }, l = {
            latest_opening: "取证消息",
            cdfx_register: "复核摇号",
            building: "楼盘动态",
            other: "其他消息"
        }, p = Object.keys(l).reduce(function(e, t) {
            return e[l[t]] = t, e;
        }, {}), g = [ "comment_like", "comment_reply" ], m = {
            data: function() {
                return {
                    tabs: [],
                    type: "latest_opening",
                    consultant_card_likes: [],
                    banners: []
                };
            },
            computed: {
                icon: function() {
                    return [ "interactive", "other" ].indexOf(this.type) > -1 ? "" : this.type;
                }
            },
            mixins: [ o.default ],
            name: "OFFICIAL_WEIXIN",
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "消息通知",
                    path: "pages/personal_package/notice/main"
                });
            },
            onLoad: function() {
                this.getBanners(), this.getData();
            },
            methods: {
                getBanners: function() {
                    var e = this;
                    s.default.getBanners("msgpage_top_banner", {
                        limit: 10
                    }).then(function(t) {
                        e.banners = t;
                    });
                },
                changeCategory: function(e) {
                    this.type = e, this.page = 1, this.getData();
                },
                getData: function() {
                    var e = this;
                    this.loading = !0, f.default.getMsg({
                        tab_name: l[this.type],
                        per: u.DEFAULT_PER,
                        page: this.page
                    }).then(function(t) {
                        var n = t.consultant_card_likes, a = t.items, r = t.tabs;
                        try {
                            e.consultant_card_likes = n.map(function(e) {
                                return i(i({}, e), {}, {
                                    liked_time: e.liked_time.substring(0, 10)
                                });
                            }), e.tabs = r.filter(function(e) {
                                return "互动消息" !== e.name;
                            }).map(function(e) {
                                return {
                                    name: e.name,
                                    key: p[e.name],
                                    new: e.unread_count,
                                    unread_count: e.unread_count
                                };
                            }), a.forEach(function(e) {
                                e.category_name = d[e.category];
                                var t = r.some(function(t) {
                                    return e.jump_path && e.jump_path.indexOf(t) > -1;
                                });
                                e.open_type = t ? "switchTab" : "navigate";
                            }), e.handleData({
                                items: a.map(function(t) {
                                    var n = "interactive" === e.type && t.extra_data.nickname.indexOf("置业顾问") > -1, a = i(i({}, t.extra_data), {}, {
                                        nickname: n ? t.extra_data.nickname.replace("置业顾问", "") : t.extra_data.nickname
                                    });
                                    return n && (a.consultant_tag = "置业顾问"), i(i({}, t), {}, {
                                        extra_data: a,
                                        is_interactive: g.indexOf(t.message_type) > -1
                                    });
                                })
                            });
                        } catch (e) {
                            console.error(e);
                        }
                    }).then(this.readAll);
                },
                readAll: function() {
                    f.default.readAllMsg({
                        tab_name: l[this.type]
                    });
                },
                goDetail: function(e) {
                    var t = e.currentTarget.dataset, n = t.href, a = t.index;
                    this.$set(this.items, a, i(i({}, this.items[a]), {}, {
                        is_read: !0
                    })), wx.navigateTo({
                        url: n
                    });
                },
                goCard: function(e) {
                    var t = e.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/personal_package/consultant_select/main?id=".concat(t)
                    });
                }
            },
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = m;
    },
    "714d": function(e, t, n) {},
    c323: function(e, t, n) {
        var a = n("714d");
        n.n(a).a;
    }
}, [ [ "15b5", "common/runtime", "common/vendor" ] ] ]);
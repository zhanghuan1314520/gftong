var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/messages/main" ], {
    "08c1": function(t, e, n) {
        var o = n("4d6b");
        n.n(o).a;
    },
    "0f5c": function(e, n, o) {
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
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t, e, n, o, i, r, c) {
            try {
                var a = t[r](c), s = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(s) : Promise.resolve(s).then(o, i);
        }
        function s(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, i) {
                    function r(t) {
                        a(s, o, i, r, c, "next", t);
                    }
                    function c(t) {
                        a(s, o, i, r, c, "throw", t);
                    }
                    var s = t.apply(e, n);
                    r(void 0);
                });
            };
        }
        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), !0).forEach(function(e) {
                    f(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function f(t, e, n) {
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
        var _, d = c(o("a34a")), h = o("2f62"), p = c(o("8e44")), g = c(o("12bf")), m = (c(o("41f4")), 
        c(o("9998"))), b = c(o("9554")), v = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== i(t) && "function" != typeof t) return {
                default: t
            };
            var e = r();
            if (e && e.has(t)) return e.get(t);
            var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var c in t) if (Object.prototype.hasOwnProperty.call(t, c)) {
                var a = o ? Object.getOwnPropertyDescriptor(t, c) : null;
                a && (a.get || a.set) ? Object.defineProperty(n, c, a) : n[c] = t[c];
            }
            return n.default = t, e && e.set(t, n), n;
        }(o("cbd7")), y = o("07d2"), w = o("a177"), O = "chat_list", S = {
            "开盘消息": "open",
            "互动消息": "interac",
            "置业顾问通知": "con",
            "最新动态": "dynamic"
        }, P = {
            mixins: [ c(o("f832")).default ],
            name: O,
            data: function() {
                return {
                    no_more: !1,
                    page: 1,
                    loading: !0,
                    list_loading: !0,
                    is_login: v.IM_STORE.login,
                    chats: [],
                    is_consultant_user: !1,
                    show_top_tip: !1,
                    top_tip_link: "",
                    notices: [],
                    swipeActionOptions: [ {
                        text: "删除",
                        style: {
                            backgroundColor: "#E64340"
                        }
                    } ],
                    hot_list: [],
                    hot_time: "",
                    categories: []
                };
            },
            computed: l({}, (0, h.mapState)([ "wxArticle" ])),
            onLoad: function() {
                var t = this;
                this.is_login || wx.showLoading({
                    title: "请稍等",
                    mask: !0
                }), p.default.init().then(function() {
                    w.App_User.get().then(function(e) {
                        var n = e.is_consultant, o = e.weixin_subscribed, i = e.consultant_weixin_subscribed;
                        t.is_consultant_user = n;
                        var r = n ? 6 : 3, c = t.wxArticle[r], a = c.url, s = c.title, u = c.share;
                        return t.show_top_tip = n ? !i : !o, t.top_tip_link = "/pages/web_page/main?link=".concat(encodeURIComponent(a), "&title=").concat(s, "&shareShow=").concat(u), 
                        n;
                    }), t.addListener();
                }), this.getHotList();
            },
            watch: {
                is_login: function(t) {
                    t && wx.hideLoading();
                }
            },
            onShow: function() {
                this.list_loading || (this.page = 1, this.getHotList(), this.getSessions()), this.getCategories();
            },
            onUnload: function() {
                v.IM_STORE.remove_login_watcher(O), v.IM_STORE.remove_chatList_watcher(O), v.IM_STORE.remove_noMore_watcher(O), 
                _ && clearTimeout(_);
            },
            onPullDownRefresh: function() {
                this.list_loading || (this.page = 1, this.getHotList(), this.getSessions()), _ = setTimeout(function() {
                    wx.stopPullDownRefresh();
                }, 1e3);
            },
            methods: {
                getCategories: function() {
                    var t = this;
                    return s(d.default.mark(function e() {
                        var n;
                        return d.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, m.default.getChatListCategories();

                              case 2:
                                (n = e.sent).items.forEach(function(t) {
                                    t.key = S[t.name];
                                }), t.categories = n.items;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getHotList: function() {
                    var t = this;
                    g.default.getHotSearchList().then(function(e) {
                        t.hot_list = e.items, t.hot_time = e.refreshed_at;
                    });
                },
                getSessions: function() {
                    this.list_loading = !0, console.error("_____________getSession_____________", this.page), 
                    v.default.getSessions({
                        page: this.page
                    });
                },
                addListener: function() {
                    var t = this;
                    v.IM_STORE.add_login_watcher(O, function(e) {
                        console.error("login status", e), e === y.LOGIN_STATUS.NONE && v.default.getSessions(), 
                        setTimeout(function() {
                            t.is_login = e === y.LOGIN_STATUS.DONE;
                        }, 1e3);
                    }), v.IM_STORE.add_chatList_watcher(O, function(e) {
                        console.error("咨询用户条数_____________________", e.length), t.chats = e.map(function(t) {
                            var e = "", n = t.last_messsage;
                            if (n) {
                                var o = n.msg_style;
                                e = n.msg_content, "img" === o && (e = "[图片]"), "audio" === o && (e = "[语音]"), "building_card" === o && (e = "[".concat(n.msg_content, "]"));
                            }
                            return l(l({}, t), {}, {
                                messsage_content: e
                            });
                        }), t.list_loading = !1;
                    }), v.IM_STORE.add_chatListLoaded_watcher(O, function(e) {
                        t.loading = !e;
                    }), v.IM_STORE.add_no_more_watcher(O, function(e) {
                        console.error("_____________________no_more", e), t.no_more = e;
                    });
                },
                goChat: function(t) {
                    (0, b.default)(t, function() {
                        var e = t.currentTarget.dataset.id;
                        v.default.resetChatMapByConversation(), wx.navigateTo({
                            url: "/pages/chat_list/chat/main?session_id=".concat(e)
                        });
                    }, "需要认证用户信息才进入聊天");
                },
                readAll: function() {
                    var t = this;
                    m.default.readAllMsgs().then(function() {
                        t.getCategories();
                    }), p.default.readAllTimMsg(), this.notice_count = 0, this.hideMessageRedDot(), 
                    v.default.getSessions(), v.default.readAll();
                },
                onSwipeActionClick: function(t, e) {
                    v.default.delChat(e);
                },
                onSwipeActionchange: function(t) {}
            },
            components: {
                Loading: function() {
                    o.e("components/views/loading").then(function() {
                        return resolve(o("7756"));
                    }.bind(null, o)).catch(o.oe);
                },
                uiSwipeAction: function() {
                    o.e("components/ui/swipeAction").then(function() {
                        return resolve(o("83f1"));
                    }.bind(null, o)).catch(o.oe);
                },
                uiSwipeActionItem: function() {
                    Promise.all([ o.e("common/vendor"), o.e("components/ui/swipeActionItem/swipeActionItem") ]).then(function() {
                        return resolve(o("78b7"));
                    }.bind(null, o)).catch(o.oe);
                },
                HotList: function() {
                    o.e("pages/index/top_search/host_list").then(function() {
                        return resolve(o("305a"));
                    }.bind(null, o)).catch(o.oe);
                },
                HotListHeader: function() {
                    o.e("pages/index/search/_hot_list_header").then(function() {
                        return resolve(o("27be"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        n.default = P;
    },
    "262d": function(t, e, n) {
        n.r(e);
        var o = n("4db1"), i = n("4501");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("08c1");
        var c = n("f0c5"), a = Object(c.a)(i.default, o.b, o.c, !1, null, "79ff8d16", null, !1, o.a, void 0);
        e.default = a.exports;
    },
    4501: function(t, e, n) {
        n.r(e);
        var o = n("0f5c"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    "4d6b": function(t, e, n) {},
    "4db1": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "5be6": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("262d")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "5be6", "common/runtime", "common/vendor" ] ] ]);
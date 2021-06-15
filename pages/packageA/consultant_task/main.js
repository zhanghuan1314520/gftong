require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/consultant_task/main" ], {
    "18b7": function(e, t, n) {
        n.r(t);
        var i = n("eb59"), o = n("29aa");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("43f9");
        var a = n("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, "794117f7", null, !1, i.a, void 0);
        t.default = c.exports;
    },
    "29aa": function(e, t, n) {
        n.r(t);
        var i = n("f4a4"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = o.a;
    },
    "43f9": function(e, t, n) {
        var i = n("ebd2");
        n.n(i).a;
    },
    ad5f: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("18b7")).default);
        }).call(this, n("543d").createPage);
    },
    eb59: function(e, t, n) {
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
    ebd2: function(e, t, n) {},
    f4a4: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var c = e[r](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function r(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, r) {
                    function a(e) {
                        o(s, i, r, a, c, "next", e);
                    }
                    function c(e) {
                        o(s, i, r, a, c, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    s(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function s(e, t, n) {
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
        var u = i(n("a34a")), f = n("2f62"), d = n("a177"), _ = i(n("12bf")), l = i(n("8e44")), p = i(n("80d6")), h = function(e) {
            return "/pages/packageA/web_article/main?id=".concat(e, "&type=feeds");
        }, b = function(e, t) {
            return e < t ? e / t * 100 + "%" : "100%";
        }, g = {
            components: {
                UiActionSheet: function() {
                    n.e("components/ui/actionSheet").then(function() {
                        return resolve(n("3c71"));
                    }.bind(null, n)).catch(n.oe);
                },
                ConsultantCheckin: function() {
                    n.e("pages/packageA/consultant_checkin/main").then(function() {
                        return resolve(n("89cb"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            mixins: [],
            data: function() {
                return {
                    today_score: 0,
                    checkin_today: {},
                    forward_article: {},
                    forward_image: {},
                    forward_weixin_moments: {},
                    share_new_users: {
                        target_score: 0,
                        current_score: 0
                    },
                    share_old_users: {
                        target_score: 0,
                        current_score: 0
                    },
                    subscribe_weixin: {},
                    provide_building_info: {},
                    show_double_points: !1,
                    showActionSheet: !1,
                    activities: [],
                    consultant: {
                        activities: []
                    },
                    keep_acitivity_desc: "",
                    last_period_obtained_score: "",
                    invite_checkin: {},
                    subscribe_checkin_notification: {}
                };
            },
            computed: c(c({}, (0, f.mapState)([ "consultantUploadBuildingInfo", "showVideo" ])), {}, {
                actions: function() {
                    var e = [ {
                        name: "户型图",
                        key: "layout"
                    }, {
                        name: "楼盘图",
                        key: "house"
                    }, {
                        name: "视频",
                        key: "video"
                    }, {
                        name: "修改楼盘信息",
                        key: "edit"
                    } ];
                    return this.showVideo ? e : e.filter(function(e) {
                        return "video" !== e.key;
                    });
                }
            }),
            onReady: function() {
                var e = this.$root.$mp.query.sub_page;
                d.App_User.get().then(function(t) {
                    t.is_consultant ? e && setTimeout(function() {
                        wx.navigateTo({
                            url: decodeURIComponent(e)
                        });
                    }, 800) : wx.switchTab({
                        url: "/pages/index/main"
                    });
                });
            },
            onShow: function() {
                this.getData();
            },
            onShareAppMessage: function(e) {
                e.target && e.target.dataset.share && "invite_checkin" === e.target.dataset.share && this.$sendCtmEvtLog("个人中心-任务页-置业顾问邀请签到点击");
                var t = {
                    title: "置业顾问点我签到+5分，今天你签到了吗？",
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/consultant_task/share.png",
                    path: "/pages/packageA/consultant_task/main"
                };
                return this.getShareInfo(t);
            },
            methods: {
                goSubscribe: function() {
                    var e = this;
                    return r(u.default.mark(function t() {
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!e.subscribe_weixin.done) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 3, l.default.setNoticeStatus({
                                    notification_type: "wxtm",
                                    msg_type: "not_checkin_today"
                                });

                              case 3:
                                t.sent, wx.showToast({
                                    title: "订阅提醒成功",
                                    icon: "none",
                                    duration: 1500
                                }), setTimeout(function() {
                                    e.getData();
                                }, 2e3), t.next = 9;
                                break;

                              case 8:
                                wx.showModal({
                                    title: "温馨提示",
                                    content: "您还没有关注置业顾问之家服务号，需要关注后才能订阅，首次关注绑定+50积分哦~",
                                    cancelText: "取消",
                                    confirmText: "去关注",
                                    success: function(e) {
                                        e.confirm && wx.navigateTo({
                                            url: "/pages/packageA/consultant_home/main?from=task"
                                        });
                                    }
                                });

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getData: function() {
                    var e = this;
                    return r(u.default.mark(function t() {
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                _.default.getTasks().then(function(t) {
                                    var n = t.share_new_users, i = t.share_old_users, o = t.today_score, r = t.keep_acitivity_desc, a = t.invite_checkin;
                                    e.keep_acitivity_desc = r, e.today_score = o, e.checkin_today = t.checkin_today, 
                                    e.forward_article = t.forward_article, e.forward_image = t.forward_image, e.forward_weixin_moments = t.forward_weixin_moments, 
                                    e.share_new_users = n, e.share_new_users.link = h(n.recommend_share_feed_id), e.share_new_users.progress_percent = b(n.current_score, n.target_score), 
                                    e.share_old_users = i, e.share_old_users.link = h(i.recommend_share_feed_id), e.share_old_users.progress_percent = b(i.current_score, i.target_score), 
                                    e.subscribe_weixin = t.subscribe_weixin, e.provide_building_info = t.provide_building_info, 
                                    e.invite_checkin = a, e.invite_checkin.progress_percent = b(a.current_score, a.target_score), 
                                    e.subscribe_checkin_notification = t.subscribe_checkin_notification, d.App_User.activity_menus().then(function(t) {
                                        e.show_double_points = t.indexOf("2020新春特惠banner") > -1;
                                    });
                                }), l.default.getMyConsultant().then(function(t) {
                                    e.consultant = t, e.activities = t.activities, e.last_period_obtained_score = t.last_period_obtained_score;
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                copyArticleWeixin: function() {
                    p.default.setClipboardData(this.forward_article.copy_text);
                },
                copyProvideBuildingWeixin: function() {
                    p.default.setClipboardData(this.provide_building_info.copy_text);
                },
                copyImgWeixin: function() {
                    p.default.setClipboardData(this.forward_image.copy_text);
                },
                onActionSheet: function() {
                    this.showActionSheet = !0;
                },
                onActionSheetSelect: function(e) {
                    wx.navigateTo({
                        url: "/pages/personal_package/consultant_upload/main?key=".concat(e)
                    });
                },
                onActionSheetHide: function() {
                    this.showActionSheet = !1;
                },
                onViewContent: function() {
                    wx.navigateTo({
                        url: "/pages/packageB/wx_moments/main"
                    });
                }
            }
        };
        t.default = g;
    }
}, [ [ "ad5f", "common/runtime", "common/vendor" ] ] ]);
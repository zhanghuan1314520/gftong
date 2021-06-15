require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/web_article/main" ], {
    1481: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("f274")).default);
        }).call(this, n("543d").createPage);
    },
    6565: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    8871: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach(function(e) {
                    c(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
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
        var o = n("2f62"), s = i(n("8e44")), u = i(n("ba1b")), h = i(n("bdff")), d = i(n("b4fd")), f = i(n("d973")), l = i(n("e12f")), g = n("d8e2"), p = n("4bb0"), _ = i(n("41f4")), m = i(n("80d6")), b = i(n("fd65")), w = n("a177"), v = n("b794"), x = {
            name: "WebPage",
            mixins: [ f.default, l.default, b.default, (0, p.getMixin)({
                fail_tip: "咨询置业顾问需要先认证用户信息",
                force_auth: !0
            }) ],
            data: function() {
                return {
                    src: "",
                    title: "",
                    show_current_consultant: !1,
                    show_btm_share: !1,
                    show_inner_tips: !1,
                    current_consultant: {},
                    is_consultant: !1,
                    show_mask: !1,
                    qrcode: "",
                    share_bg_img: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/house-circles/share-bg.png",
                    feeds_img: "",
                    show_rt_share: !1,
                    show_dot: !1,
                    path: "",
                    show_tel_btn: !1
                };
            },
            computed: r({}, (0, o.mapState)([ "share_by_consultant_uid" ])),
            onReady: function() {
                var t = this;
                w.App_User.get().then(function(e) {
                    t.show_dot = !!e.tag_list && e.tag_list.indexOf("查看小程序路径") > -1;
                });
            },
            onLoad: function(t) {
                var e = this, n = t.id, i = t.type, a = t.title, r = t.share_by_consultant_uid || this.share_by_consultant_uid;
                this.title = decodeURIComponent(a || "杭州购房通"), _.default.user.get().then(function(t) {
                    var n = t.is_consultant;
                    e.is_consultant = n;
                }), this.getData(n, i, r);
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query, e = t.title, n = t.id, i = t.type, a = {
                    title: this.title
                }, c = encodeURIComponent("/pages/packageA/web_article/main?title=".concat(e, "&id=").concat(n, "&type=").concat(i)), o = "/pages/index/main?sub_page=".concat(c);
                return this.getShareInfo(r(r({}, a), {}, {
                    path: o
                }));
            },
            methods: {
                checkStatus: function(t) {
                    return 404 === t && (wx.switchTab({
                        url: "/pages/index/main"
                    }), !0);
                },
                generateImg: function(t, e, n) {
                    var i = this;
                    this.getShareBg().then(function(a) {
                        i.getFeedsQr(t).then(function(t) {
                            i.getFeedsImg(e).then(function(e) {
                                n && n(a, e, t);
                            });
                        });
                    });
                },
                getFeedsQr: function(t) {
                    return m.default.getImgInfo(t).then(function(t) {
                        return t.path;
                    });
                },
                getShareBg: function() {
                    return m.default.getImgInfo(this.share_bg_img).then(function(t) {
                        return t.path;
                    });
                },
                getFeedsImg: function(t) {
                    return m.default.getImgInfo(t).then(function(t) {
                        return t;
                    });
                },
                getData: function(t, e, n) {
                    var i = this, a = {
                        feeds: {
                            api: s.default.getFeed,
                            handle: this.commonHandle.bind(this)
                        },
                        building_feeds: {
                            api: u.default.getFeedDetail,
                            handle: this.commonHandle.bind(this)
                        },
                        weixin_articles: {
                            api: u.default.getWeixinArticleDetail,
                            handle: this.commonHandle.bind(this)
                        },
                        hot_subjects_article: {
                            api: h.default.hot_subjects_article,
                            handle: this.subjectsArticleHandle.bind(this)
                        },
                        hot_subject: {
                            api: h.default.hot_subject,
                            handle: this.subjectHandle.bind(this)
                        }
                    }[e], r = a.api, c = a.handle;
                    r(t, n).then(function(t) {
                        i.checkStatus(t) || c(t);
                    }).catch(this.checkStatus);
                },
                subjectsArticleHandle: function(t) {
                    this.src = t.url, this.title = t.title;
                },
                subjectHandle: function(t) {
                    this.src = t.article_url, this.title = t.title;
                },
                goBuildingEvent: function(t) {
                    var e = t.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/building/main?building_id=".concat(e)
                    });
                },
                commonHandle: function(t) {
                    var e = this, n = this.$root.$mp.query.type, i = t.id, a = t.content_body, r = t.current_consultant, c = !!(this.is_consultant && a && (a.abstract || t.abstract) && a.image_url && a.title);
                    a && (this.src = a.article_url, this.title = a.title, this.feeds_img = a.image_url, 
                    this.path = "pages/packageA/web_article/main?title=".concat(a.title, "&id=").concat(i, "&type=").concat(n), 
                    c ? (setTimeout(function() {
                        e.show_rt_share = !0;
                    }, 1e3), this.onGetScene(i, function(n) {
                        e.qrcode = n, e.generateImg(n, a.image_url.replace("http://", "https://"), function(n, i, r) {
                            e.drawImg(n, a.title, i, r, a.abstract || t.abstract);
                        });
                    })) : this.show_rt_share = !1), r && (this.show_current_consultant = !0, this.show_inner_tips = !0, 
                    this.current_consultant = r, setTimeout(function() {
                        e.show_inner_tips = !1;
                    }, 5e3)), this.show_btm_share = !c && !r;
                },
                onGetScene: function(t, e) {
                    var n = {
                        feeds: {
                            prefix: "wxfeed",
                            jump_page: "pages/house_circles/main"
                        },
                        building_feeds: {
                            prefix: "wxbfeed",
                            jump_page: "pages/index/main"
                        },
                        weixin_articles: {
                            prefix: "wxarticle",
                            jump_page: "pages/house_circles/main"
                        }
                    }[this.$root.$mp.query.type] || {}, i = n.prefix, a = n.jump_page;
                    i && a && d.default.getSceneQr({
                        scene: "".concat(i, "_").concat(t),
                        jump_page: a
                    }).then(function(t) {
                        var n = t.qrcode;
                        e && e(n);
                    });
                },
                errorLoad: function(t) {
                    console.error(t);
                },
                hideTips: function() {
                    this.show_inner_tips = !1;
                },
                goCard: function(t) {
                    var e = t.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/consultants/card/main?id=".concat(e)
                    });
                },
                authUserSuccess: function() {
                    (0, g.navigateToChat)(this.current_consultant.id);
                },
                onShowShares: function() {
                    this.show_mask = !0;
                },
                hideShares: function() {
                    this.show_mask = !1;
                },
                onSaveImg: function() {
                    this.hideShares(), this.save();
                },
                drawImg: function(t, e, n, i, a) {
                    var r = "canvas", c = wx.createCanvasContext(r, this.$mp.component);
                    c.save(), c.drawImage(t, 0, 0, 750, 1334);
                    var o = n.path, s = n.width, u = n.height;
                    (0, v.clipImage)(c, {
                        image_url: o,
                        image_w: s,
                        image_h: u,
                        x: 32,
                        y: 130,
                        r: 16,
                        w: 686,
                        h: 320,
                        rt: !0
                    }), (0, v.drawTexts)({
                        ctx: c,
                        textStrs: e,
                        rowNum: 3
                    }, function(t, e) {
                        (0, v.drawTexts)({
                            ctx: c,
                            textStrs: a,
                            font: "32px PingFang SC",
                            rowNum: 7 - e,
                            rowTop: t + 80,
                            rowLh: 58
                        });
                    }), c.drawImage(i, 482, 1004, 204, 204), c.draw(!0), this.finishDraw({
                        canvasId: r,
                        CANVAS_WIDTH: 750,
                        CANVAS_HEIGHT: 1334
                    });
                },
                onCopyPath: function() {
                    m.default.setClipboardData(this.path);
                }
            },
            components: {}
        };
        e.default = x;
    },
    a3ec: function(t, e, n) {
        var i = n("f66a");
        n.n(i).a;
    },
    a862: function(t, e, n) {
        n.r(e);
        var i = n("8871"), a = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = a.a;
    },
    f274: function(t, e, n) {
        n.r(e);
        var i = n("6565"), a = n("a862");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("a3ec");
        var c = n("f0c5"), o = Object(c.a)(a.default, i.b, i.c, !1, null, "8f319738", null, !1, i.a, void 0);
        e.default = o.exports;
    },
    f66a: function(t, e, n) {}
}, [ [ "1481", "common/runtime", "common/vendor" ] ] ]);
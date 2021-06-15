require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/web_vr/main" ], {
    "5a22": function(t, e, n) {},
    "6f46": function(t, e, n) {
        var r = n("5a22");
        n.n(r).a;
    },
    "93ba": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a), u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function i(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(t) {
                        o(u, r, i, a, c, "next", t);
                    }
                    function c(t) {
                        o(u, r, i, a, c, "throw", t);
                    }
                    var u = t.apply(e, n);
                    a(void 0);
                });
            };
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach(function(e) {
                    u(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function u(t, e, n) {
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
        var l = r(n("a34a")), f = n("2f62"), s = n("371c"), d = r(n("ba1b")), m = r(n("4222")), b = r(n("fd76")), p = r(n("02f2")), g = n("d8e2"), _ = n("4bb0"), v = {
            name: "WebPage",
            mixins: [ m.default, b.default, p.default, (0, _.getMixin)({
                fail_tip: "咨询置业顾问需要先认证用户信息",
                force_auth: !0
            }) ],
            data: function() {
                return {
                    current_item: null,
                    page_scene: "vr",
                    chat_log_title: "VR页面——立即咨询点击(微聊)",
                    consultant_list_log_title: "VR页面——立即咨询点击(置业顾问列表)",
                    chat_from: "VR",
                    consultant_list_from: "VR"
                };
            },
            computed: c({}, (0, f.mapState)([ "share_by_consultant_uid", "buildingCardInfo" ])),
            onShareAppMessage: function() {
                var t = this.$root.$mp.query, e = t.building_id, n = t.category_id, r = "", o = "", i = "";
                this.current_item && (r = this.current_item.layout_no ? "".concat(this.current_item.layout_no, "户型") : "", 
                o = this.current_item.area || "", i = this.current_item.image_url || "");
                var a = {
                    title: "【".concat(decodeURIComponent(this.title), "】").concat(r).concat(o, "的VR在这，来看样板间吧~"),
                    imageUrl: i
                }, u = encodeURIComponent("/pages/building/web_vr/main?building_id=".concat(e, "&title=").concat(this.title, "&link=").concat(this.src, "&category_id=").concat(n)), l = this.$root.$mp.query.detailParam, f = "/pages/building/main?".concat(decodeURIComponent(l), "&sub_page=").concat(u);
                return this.getShareInfo(c(c({}, a), {}, {
                    path: f
                }));
            },
            onShow: function() {
                var t = this.$root.$mp.query;
                this.visitLog(t);
            },
            onLoad: function(t) {
                this.setWebViewSrc(t), this.getData(), this.getEvents(), this.getCurrent();
            },
            methods: {
                authUserSuccess: function() {
                    (0, g.navigateToChat)(this.consultant_id, {
                        from: this.chat_from
                    });
                },
                getCurrent: function() {
                    var t = this;
                    return i(l.default.mark(function e() {
                        var n, r, o, i, a;
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.$root.$mp.query, r = n.building_id, o = n.category_id, e.next = 3, 
                                d.default.getImgs(r, "layout", {
                                    subcategory: "VR视频"
                                });

                              case 3:
                                i = e.sent, a = i.items.filter(function(t) {
                                    return t.id === Number(o);
                                }), t.current_item = a && a.length ? a[0] : null, t.current_item && t.current_item.vr_url && (t.src = t.current_item.vr_url);

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                visitLog: function(t) {
                    var e = t.detailParam, n = t.link, r = t.title, o = decodeURIComponent(e).split("=");
                    if (o && o.length > 1) {
                        var i = o[1];
                        s.UserLog.viewBuildingVr(i, decodeURIComponent(r), n);
                    }
                }
            },
            components: {
                BillboardCanvas: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/_components/_billboard_canvas") ]).then(function() {
                        return resolve(n("bda1"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = v;
    },
    ad1a: function(t, e, n) {
        n.r(e);
        var r = n("93ba"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    de47: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("ee46")).default);
        }).call(this, n("543d").createPage);
    },
    ee46: function(t, e, n) {
        n.r(e);
        var r = n("fdfb"), o = n("ad1a");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("6f46");
        var a = n("f0c5"), c = Object(a.a)(o.default, r.b, r.c, !1, null, "8412dcda", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    fdfb: function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    }
}, [ [ "de47", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
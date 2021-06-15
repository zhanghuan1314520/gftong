require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/web_720/main" ], {
    2632: function(e, t, n) {},
    "6b2c": function(e, t, n) {
        var i = n("2632");
        n.n(i).a;
    },
    "71fb": function(e, t, n) {
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
    a36c: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
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
        var c = n("2f62"), u = n("371c"), l = i(n("4222")), f = i(n("fd76")), d = i(n("02f2")), s = n("d8e2"), b = n("4bb0"), _ = {
            mixins: [ l.default, f.default, d.default, (0, b.getMixin)({
                fail_tip: "咨询置业顾问需要先认证用户信息",
                force_auth: !0
            }) ],
            data: function() {
                return {
                    page_scene: "vr_panorama",
                    chat_log_title: "全景看房页面——立即咨询点击(微聊)",
                    consultant_list_log_title: "全景看房页面——立即咨询点击(微聊)",
                    chat_from: "航拍",
                    consultant_list_from: ""
                };
            },
            components: {
                BillboardCanvas: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/_components/_billboard_canvas") ]).then(function() {
                        return resolve(n("bda1"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            computed: r({}, (0, c.mapState)([ "share_by_consultant_uid", "buildingCardInfo", "current_consultant_uid" ])),
            onShareAppMessage: function() {
                var e = new Date().getTime(), t = this.$root.$mp.query, n = t.title, i = t.link, o = t.building_id, a = {
                    title: "【".concat(decodeURIComponent(n), "】的建设进度和周边航拍，比去现场还清晰~")
                }, c = encodeURIComponent("/pages/building/web_720/main?building_id=".concat(o, "&title=").concat(n, "&link=").concat(i)), u = this.$root.$mp.query.detailParam, l = "/pages/building/main?".concat(decodeURIComponent(u), "&sub_page=").concat(c), f = this.house.vr_panorama_resource, d = f.forward_image_url;
                return f.cover_image_url, this.getShareInfo(r(r({}, a), {}, {
                    path: l,
                    imageUrl: d || "https://cdn.vip-wifi.com/hzfangchan/share-img/720.png?v=".concat(e),
                    share_by_prefix: "hzpanorama_"
                }));
            },
            onShow: function() {
                var e = this.$root.$mp.query, t = e.title, n = e.link, i = e.building_id;
                (0, u.sendUserLog)("fc_building_720_view", {
                    d_key: i,
                    d_paras: {
                        city: "hz",
                        building_name: t,
                        link: n
                    },
                    d_event: 0
                });
            },
            onLoad: function(e) {
                var t = this;
                this.setWebViewSrc(e);
                var n = this.$root.$mp.query.building_id;
                this.building_id = n, this.getData(), this.getEvents(), setTimeout(function() {
                    t.show_cover_view = !0;
                }, 200);
            },
            methods: {
                authUserSuccess: function() {
                    (0, s.navigateToChat)(this.consultant_id, {
                        from: this.chat_from
                    });
                }
            }
        };
        t.default = _;
    },
    cc20: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("e0c8")).default);
        }).call(this, n("543d").createPage);
    },
    e0c8: function(e, t, n) {
        n.r(t);
        var i = n("71fb"), o = n("efa2");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("6b2c");
        var a = n("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, "79f9bdf5", null, !1, i.a, void 0);
        t.default = c.exports;
    },
    efa2: function(e, t, n) {
        n.r(t);
        var i = n("a36c"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        t.default = o.a;
    }
}, [ [ "cc20", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
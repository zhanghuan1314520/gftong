require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/official_weixin/main" ], {
    "3a58": function(e, t, n) {
        n.r(t);
        var r = n("7853"), c = n.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = c.a;
    },
    7853: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function o(e, t, n) {
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
        var i = n("2f62"), a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("80d6"));
        n("a177");
        var f = {
            name: "OFFICIAL_WEIXIN",
            components: {},
            data: function() {
                return {
                    wx_name: "cd-gft",
                    show: !1
                };
            },
            watch: {
                configLoading: {
                    handler: function(e, t) {
                        e || this.$checkIdentifyQr({
                            link: this.wxArticle[5].url,
                            title: this.wxArticle[5].name,
                            shareShow: this.wxArticle[5].share
                        }) || (this.show = !0);
                    },
                    immediate: !0
                }
            },
            onLoad: function() {},
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "官方公众号",
                    path: "/pages/personal_package/official_weixin/main"
                });
            },
            computed: c(c({}, (0, i.mapState)([ "contactSendMessage", "configLoading", "wxArticle" ])), {}, {
                current_offiaccount: function() {
                    var e = this.contactSendMessage.currentOffiAccount;
                    return this.contactSendMessage.offiaccount[e];
                }
            }),
            methods: {
                preview: function() {
                    var e = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/weixin-qr.png";
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                },
                copy: function() {
                    a.default.setClipboardData("hz-gft");
                }
            }
        };
        t.default = f;
    },
    "97af": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("bf6c")).default);
        }).call(this, n("543d").createPage);
    },
    b78d: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    },
    bf6c: function(e, t, n) {
        n.r(t);
        var r = n("b78d"), c = n("3a58");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        var i = n("f0c5"), a = Object(i.a)(c.default, r.b, r.c, !1, null, "120bbc63", null, !1, r.a, void 0);
        t.default = a.exports;
    }
}, [ [ "97af", "common/runtime", "common/vendor" ] ] ]);
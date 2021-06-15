require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/wx_moments/main" ], {
    "0cf7": function(e, t, n) {
        n.r(t);
        var r = n("f768"), a = n("eef8");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("a531");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, "4d046043", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    "2f0f": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
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
        var u = r(n("80d6")), f = r(n("12bf")), i = [ "零", "一", "二", "三", "四", "五", "六", "七", "八", "九" ], l = {
            components: {},
            data: function() {
                return {
                    items: []
                };
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var e = this;
                    f.default.weixinMomentsExamples().then(function(t) {
                        e.items = t.items.map(function(e, t) {
                            return o(o({}, e), {}, {
                                img: e.photos_urls[0],
                                title: "朋友圈".concat(i[t + 1])
                            });
                        });
                    });
                },
                copyContent: function(e) {
                    var t = e.currentTarget.dataset.content;
                    u.default.setClipboardData(t);
                },
                onSaveImg: function(e) {
                    var t = e.currentTarget.dataset.img;
                    u.default.saveImgFromInternet({
                        url: t
                    });
                },
                preview: function(e) {
                    var t = e.currentTarget.dataset.img;
                    wx.previewImage({
                        current: t,
                        urls: [ t ]
                    });
                }
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "朋友圈转发加分内容",
                    path: "/pages/packageB/wx_moments/main"
                });
            }
        };
        t.default = l;
    },
    a531: function(e, t, n) {
        var r = n("baf1");
        n.n(r).a;
    },
    b362: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("0cf7")).default);
        }).call(this, n("543d").createPage);
    },
    baf1: function(e, t, n) {},
    eef8: function(e, t, n) {
        n.r(t);
        var r = n("2f0f"), a = n.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    f768: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    }
}, [ [ "b362", "common/runtime", "common/vendor" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/business/swiper" ], {
    "087e": function(n, e, t) {
        var o = t("90d5");
        t.n(o).a;
    },
    "105a": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            mixins: [ function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("63ca")).default ],
            mounted: function() {
                this.initLinks(this.banners);
            },
            methods: {
                initLinks: function(n) {
                    this.logFirstSwiper(n);
                },
                goLink: function(n) {
                    this.clickSwiperLog(n), wx.navigateTo({
                        url: n.currentTarget.dataset.href
                    });
                }
            },
            props: {
                width: {
                    type: Number,
                    default: 750
                },
                height: {
                    type: Number,
                    default: 280
                },
                swiper_id: {
                    type: String
                },
                log_type: {
                    type: String
                },
                banners: {
                    type: Array
                }
            },
            components: {
                CommonImg: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/views/common_img") ]).then(function() {
                        return resolve(t("633c"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = o;
    },
    "90d5": function(n, e, t) {},
    "914e": function(n, e, t) {
        e.a = function(n) {
            n.options.wxsCallMethods || (n.options.wxsCallMethods = []);
        };
    },
    c456: function(n, e, t) {
        t.r(e);
        var o = t("cce6"), i = t("f30f");
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(c);
        t("087e");
        var r = t("f0c5"), u = t("914e"), a = Object(r.a)(i.default, o.b, o.c, !1, null, "1230a884", null, !1, o.a, void 0);
        "function" == typeof u.a && Object(u.a)(a), e.default = a.exports;
    },
    cce6: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    f30f: function(n, e, t) {
        t.r(e);
        var o = t("105a"), i = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/business/swiper-create-component", {
    "components/business/swiper-create-component": function(n, e, t) {
        t("543d").createComponent(t("c456"));
    }
}, [ [ "components/business/swiper-create-component" ] ] ]);
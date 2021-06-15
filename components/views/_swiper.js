(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/_swiper" ], {
    "0de3": function(n, e, t) {
        t.r(e);
        var o = t("96f7"), i = t.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = i.a;
    },
    7673: function(n, e, t) {},
    "96f7": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            mixins: [ function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("63ca")).default ],
            data: function() {
                return {
                    swiper_id: "hot_swiper",
                    log_type: "hot_banner"
                };
            },
            onReady: function() {
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
                banners: {
                    type: Array
                }
            },
            components: {}
        };
        e.default = o;
    },
    a82c: function(n, e, t) {
        var o = t("7673");
        t.n(o).a;
    },
    e7f1: function(n, e, t) {
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
    ec88: function(n, e, t) {
        t.r(e);
        var o = t("e7f1"), i = t("0de3");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(r);
        t("a82c");
        var a = t("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, "784b6552", null, !1, o.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/_swiper-create-component", {
    "components/views/_swiper-create-component": function(n, e, t) {
        t("543d").createComponent(t("ec88"));
    }
}, [ [ "components/views/_swiper-create-component" ] ] ]);
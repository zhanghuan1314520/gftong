(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/_swiper" ], {
    "0a2f": function(e, n, t) {
        t.r(n);
        var a = t("c8e2"), i = t("6bb1");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        t("e4bd");
        var r = t("f0c5"), c = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = c.exports;
    },
    "6bb1": function(e, n, t) {
        t.r(n);
        var a = t("c227"), i = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = i.a;
    },
    "89af": function(e, n, t) {},
    c227: function(e, n, t) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = a(t("63ca"));
        a(t("cbb0"));
        var o = {
            mixins: [ i.default ],
            data: function() {
                return {
                    log_type: this.page_type
                };
            },
            onReady: function() {
                this.initLinks();
            },
            methods: {
                initLinks: function() {
                    var e = this;
                    setTimeout(function() {
                        e.logFirstSwiper(e.banners);
                    }, 1e3);
                },
                goLink: function(e) {
                    var n = e.currentTarget.dataset, t = n.type, a = n.href;
                    this.clickSwiperLog(e), a && wx[t]({
                        url: a
                    });
                }
            },
            components: {},
            props: {
                page_type: {
                    type: String,
                    default: "homepage"
                },
                swiper_id: {
                    type: String
                },
                classname: {
                    type: String
                },
                banners: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                show_indicator: {
                    type: Boolean,
                    default: !0
                }
            }
        };
        n.default = o;
    },
    c8e2: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    e4bd: function(e, n, t) {
        var a = t("89af");
        t.n(a).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/_swiper-create-component", {
    "pages/index/_swiper-create-component": function(e, n, t) {
        t("543d").createComponent(t("0a2f"));
    }
}, [ [ "pages/index/_swiper-create-component" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/image_page/main" ], {
    "35d6": function(n, e, t) {
        t.r(e);
        var o = t("e3fe"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "851f": function(n, e, t) {},
    b400: function(n, e, t) {
        t.r(e);
        var o = t("dbd6"), a = t("35d6");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("c3e2");
        var r = t("f0c5"), i = Object(r.a)(a.default, o.b, o.c, !1, null, "3573455a", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    b705: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("b400")).default);
        }).call(this, t("543d").createPage);
    },
    c3e2: function(n, e, t) {
        var o = t("851f");
        t.n(o).a;
    },
    dbd6: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    e3fe: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            mixins: [],
            components: {},
            data: function() {
                return {
                    src: ""
                };
            },
            onLoad: function(n) {
                this.src = decodeURIComponent(n.img);
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "置业顾问活跃排行榜",
                    path: "/pages/packageB/image_page/main?img=".concat(encodeURIComponent(this.src))
                });
            },
            methods: {
                preview: function() {
                    wx.previewImage({
                        current: this.src,
                        urls: [ this.src ]
                    });
                }
            }
        };
        e.default = o;
    }
}, [ [ "b705", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/video/main" ], {
    "0963": function(n, e, o) {
        o.r(e);
        var t = o("30ae"), c = o.n(t);
        for (var a in t) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    },
    "30ae": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            name: "VideoPage",
            mixins: [],
            data: function() {
                return {
                    src: "",
                    video_cover_photo_url: ""
                };
            },
            onReady: function() {},
            onLoad: function(n) {
                var e = n.src, o = n.cover;
                this.src = e, this.video_cover_photo_url = o;
            },
            methods: {},
            components: {}
        };
        e.default = t;
    },
    "91c1": function(n, e, o) {},
    b522: function(n, e, o) {
        o.r(e);
        var t = o("bafe"), c = o("0963");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        o("b6ac");
        var u = o("f0c5"), r = Object(u.a)(c.default, t.b, t.c, !1, null, "09047c7b", null, !1, t.a, void 0);
        e.default = r.exports;
    },
    b6ac: function(n, e, o) {
        var t = o("91c1");
        o.n(t).a;
    },
    bafe: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    d31c: function(n, e, o) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            o("6cdc"), e(o("66fd")), n(e(o("b522")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "d31c", "common/runtime", "common/vendor" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/web_notice/main" ], {
    "60ac": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("81aa")).default);
        }).call(this, t("543d").createPage);
    },
    8129: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "81aa": function(n, e, t) {
        t.r(e);
        var a = t("8129"), c = t("82be");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(o);
        var u = t("f0c5"), i = Object(u.a)(c.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    "82be": function(n, e, t) {
        t.r(e);
        var a = t("ab17"), c = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = c.a;
    },
    ab17: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            name: "WebNotice",
            data: function() {
                return {
                    src: "https://cdn.vip-wifi.com/hzfangchan/notice.html"
                };
            },
            onLoad: function(n) {
                n.source && (this.src = n.source);
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "公告",
                    path: "/pages/web_notice/main?source=".concat(this.src)
                });
            }
        };
        e.default = a;
    }
}, [ [ "60ac", "common/runtime", "common/vendor" ] ] ]);
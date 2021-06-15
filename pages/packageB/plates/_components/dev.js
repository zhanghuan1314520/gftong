require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/plates/_components/dev" ], {
    "042ea": function(e, n, t) {
        var a = t("4474");
        t.n(a).a;
    },
    "0bb5": function(e, n, t) {
        t.r(n);
        var a = t("9cb7"), o = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "164f": function(e, n, t) {
        t.r(n);
        var a = t("523a"), o = t("0bb5");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("042ea");
        var r = t("f0c5"), u = Object(r.a)(o.default, a.b, a.c, !1, null, "2f7ef0c4", null, !1, a.a, void 0);
        n.default = u.exports;
    },
    4474: function(e, n, t) {},
    "523a": function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "9cb7": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            props: {
                plate: {
                    type: Object
                }
            },
            components: {
                Stars: function() {
                    t.e("pages/packageB/plates/_components/_stars").then(function() {
                        return resolve(t("c81e"));
                    }.bind(null, t)).catch(t.oe);
                },
                Line3: function() {
                    t.e("pages/packageB/plates/_components/_line_3").then(function() {
                        return resolve(t("3f2c"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {};
            },
            mounted: function() {},
            methods: {
                preview: function(e) {
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                }
            }
        };
        n.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageB/plates/_components/dev-create-component", {
    "pages/packageB/plates/_components/dev-create-component": function(e, n, t) {
        t("543d").createComponent(t("164f"));
    }
}, [ [ "pages/packageB/plates/_components/dev-create-component" ] ] ]);
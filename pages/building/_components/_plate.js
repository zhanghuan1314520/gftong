require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_plate" ], {
    5734: function(e, n, t) {},
    7649: function(e, n, t) {
        t.r(n);
        var a = t("d4fe"), o = t("d3e2");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("be6a");
        var i = t("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "0e1938e6", null, !1, a.a, void 0);
        n.default = u.exports;
    },
    be6a: function(e, n, t) {
        var a = t("5734");
        t.n(a).a;
    },
    bf64: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            props: {
                plate: {
                    type: Object
                }
            },
            methods: {
                openDetail: function() {
                    this.$sendCtmEvtLog("楼盘详情页板块入口点击"), wx.navigateTo({
                        url: "/pages/packageB/plates/main?id=".concat(this.plate.id)
                    });
                }
            }
        };
        n.default = a;
    },
    d3e2: function(e, n, t) {
        t.r(n);
        var a = t("bf64"), o = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    d4fe: function(e, n, t) {
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_plate-create-component", {
    "pages/building/_components/_plate-create-component": function(e, n, t) {
        t("543d").createComponent(t("7649"));
    }
}, [ [ "pages/building/_components/_plate-create-component" ] ] ]);
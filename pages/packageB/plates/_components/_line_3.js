require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/plates/_components/_line_3" ], {
    "3f2c": function(e, n, o) {
        o.r(n);
        var t = o("8262"), c = o("b680");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(e) {
            o.d(n, e, function() {
                return c[e];
            });
        }(a);
        o("4c63");
        var l = o("f0c5"), i = Object(l.a)(c.default, t.b, t.c, !1, null, "61a8c7b2", null, !1, t.a, void 0);
        n.default = i.exports;
    },
    "4c63": function(e, n, o) {
        var t = o("e8f3");
        o.n(t).a;
    },
    8262: function(e, n, o) {
        o.d(n, "b", function() {
            return t;
        }), o.d(n, "c", function() {
            return c;
        }), o.d(n, "a", function() {});
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    },
    9293: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = 96 * (wx.getSystemInfoSync().windowWidth / 750), c = {
            props: {
                content: String
            },
            data: function() {
                return {
                    show_all: !0,
                    show_fold: !1
                };
            },
            mounted: function() {
                this.checkHeight();
            },
            methods: {
                checkHeight: function() {
                    var e = this;
                    this.$mp.component.createSelectorQuery().select(".content").fields({
                        size: !0
                    }).exec(function(n) {
                        if (n && n[0] && n[0]) {
                            var o = n[0].height;
                            console.log("height", o, t), e.show_all = t >= o, e.show_fold = !e.show_all, console.log(e.show_all, e.show_fold);
                        }
                    });
                },
                fold: function() {
                    this.show_all = !this.show_all;
                }
            }
        };
        n.default = c;
    },
    b680: function(e, n, o) {
        o.r(n);
        var t = o("9293"), c = o.n(t);
        for (var a in t) [ "default" ].indexOf(a) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(a);
        n.default = c.a;
    },
    e8f3: function(e, n, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageB/plates/_components/_line_3-create-component", {
    "pages/packageB/plates/_components/_line_3-create-component": function(e, n, o) {
        o("543d").createComponent(o("3f2c"));
    }
}, [ [ "pages/packageB/plates/_components/_line_3-create-component" ] ] ]);
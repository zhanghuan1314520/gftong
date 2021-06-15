require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/message_list/_components/_tab" ], {
    "1f2a": function(e, n, a) {
        var t = a("2be5");
        a.n(t).a;
    },
    "2be5": function(e, n, a) {},
    "56f1": function(e, n, a) {
        a.r(n);
        var t = a("f000"), o = a("fa05");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            a.d(n, e, function() {
                return o[e];
            });
        }(c);
        a("1f2a");
        var s = a("f0c5"), f = Object(s.a)(o.default, t.b, t.c, !1, null, "edb6a846", null, !1, t.a, void 0);
        n.default = f.exports;
    },
    b0097: function(e, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            mixins: [ (0, a("b943").tabsScroll)({
                bottom_active: 100,
                scroll_padding_left: 32
            }) ],
            props: {
                tabs: Array,
                show_dot: Boolean
            }
        };
        n.default = t;
    },
    f000: function(e, n, a) {
        a.d(n, "b", function() {
            return t;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {});
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    fa05: function(e, n, a) {
        a.r(n);
        var t = a("b0097"), o = a.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(e) {
            a.d(n, e, function() {
                return t[e];
            });
        }(c);
        n.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageC/message_list/_components/_tab-create-component", {
    "pages/packageC/message_list/_components/_tab-create-component": function(e, n, a) {
        a("543d").createComponent(a("56f1"));
    }
}, [ [ "pages/packageC/message_list/_components/_tab-create-component" ] ] ]);
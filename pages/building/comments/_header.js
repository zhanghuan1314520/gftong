require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/_header" ], {
    "5fb7": function(n, e, t) {},
    8227: function(n, e, t) {
        var o = t("5fb7");
        t.n(o).a;
    },
    be3e: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                count: Number,
                comment_rules: String,
                tip_content: String
            },
            name: "CommentHeader",
            components: {}
        };
        e.default = o;
    },
    d254: function(n, e, t) {
        t.r(e);
        var o = t("be3e"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    d7c2: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return o;
        });
        var o = {
            fangchanToggleRules: function() {
                return t.e("node-modules/fangchan-base/components/views/fangchan-toggle-rules").then(t.bind(null, "4830"));
            }
        }, a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    fced: function(n, e, t) {
        t.r(e);
        var o = t("d7c2"), a = t("d254");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("8227");
        var r = t("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, "01a48c32", null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/comments/_header-create-component", {
    "pages/building/comments/_header-create-component": function(n, e, t) {
        t("543d").createComponent(t("fced"));
    }
}, [ [ "pages/building/comments/_header-create-component" ] ] ]);
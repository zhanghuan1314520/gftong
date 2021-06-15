(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/fangchan-base/components/views/fangchan-toggle-rules" ], {
    4830: function(n, e, t) {
        t.r(e);
        var o = t("961b"), a = t("5bbd");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("4ad0");
        var u = t("f0c5"), f = Object(u.a)(a.default, o.b, o.c, !1, null, "c7d917a0", null, !1, o.a, void 0);
        e.default = f.exports;
    },
    "4ad0": function(n, e, t) {
        var o = t("a896");
        t.n(o).a;
    },
    "5bbd": function(n, e, t) {
        t.r(e);
        var o = t("ff41"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    "961b": function(n, e, t) {
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
    a896: function(n, e, t) {},
    ff41: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            data: function() {
                return {
                    show_dlg: !1
                };
            },
            props: {
                title: {
                    type: String,
                    default: "评论规则及免责声明"
                },
                tip_content: String,
                comment_rules: String
            },
            methods: {
                toggleRule: function() {
                    this.show_dlg = !this.show_dlg;
                }
            }
        };
        e.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/fangchan-base/components/views/fangchan-toggle-rules-create-component", {
    "node-modules/fangchan-base/components/views/fangchan-toggle-rules-create-component": function(n, e, t) {
        t("543d").createComponent(t("4830"));
    }
}, [ [ "node-modules/fangchan-base/components/views/fangchan-toggle-rules-create-component" ] ] ]);
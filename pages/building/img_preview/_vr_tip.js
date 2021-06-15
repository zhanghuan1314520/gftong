require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/img_preview/_vr_tip" ], {
    "0c17": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            props: {
                agree: {
                    type: Boolean
                }
            },
            methods: {
                confirm: function() {
                    this.agree && (this.$emit("confirm"), this.hide());
                },
                toggleAgree: function() {
                    this.$emit("toggleAgree");
                },
                hide: function() {
                    this.$emit("hide");
                }
            }
        };
        n.default = i;
    },
    2368: function(e, n, t) {
        t.r(n);
        var i = t("0c17"), o = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        n.default = o.a;
    },
    36878: function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "481a": function(e, n, t) {
        var i = t("a9a6");
        t.n(i).a;
    },
    "6f5f": function(e, n, t) {
        t.r(n);
        var i = t("36878"), o = t("2368");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("481a");
        var r = t("f0c5"), c = Object(r.a)(o.default, i.b, i.c, !1, null, "6e83be79", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    a9a6: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/img_preview/_vr_tip-create-component", {
    "pages/building/img_preview/_vr_tip-create-component": function(e, n, t) {
        t("543d").createComponent(t("6f5f"));
    }
}, [ [ "pages/building/img_preview/_vr_tip-create-component" ] ] ]);
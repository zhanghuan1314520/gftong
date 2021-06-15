require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/brand_museum/_tag_filter" ], {
    1968: function(e, a, t) {},
    "473b": function(e, a, t) {
        var n = t("1968");
        t.n(n).a;
    },
    9366: function(e, a, t) {
        t.r(a);
        var n = t("edaa"), r = t.n(n);
        for (var u in n) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(u);
        a.default = r.a;
    },
    ac88: function(e, a, t) {
        t.d(a, "b", function() {
            return n;
        }), t.d(a, "c", function() {
            return r;
        }), t.d(a, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    afe0: function(e, a, t) {
        t.r(a);
        var n = t("ac88"), r = t("9366");
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(a, e, function() {
                return r[e];
            });
        }(u);
        t("473b");
        var c = t("f0c5"), o = Object(c.a)(r.default, n.b, n.c, !1, null, "144adad2", null, !1, n.a, void 0);
        a.default = o.exports;
    },
    edaa: function(e, a, t) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = {
            data: function() {
                return {
                    tags: [ "在售", "即将取证", "最新取证" ]
                };
            },
            methods: {
                onSelect: function(e) {
                    var a = e.currentTarget.dataset.tag;
                    this.$emit("change", this.status === a ? "" : a);
                }
            },
            props: {
                status: {
                    type: String
                }
            }
        };
        a.default = n;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageB/brand_museum/_tag_filter-create-component", {
    "pages/packageB/brand_museum/_tag_filter-create-component": function(e, a, t) {
        t("543d").createComponent(t("afe0"));
    }
}, [ [ "pages/packageB/brand_museum/_tag_filter-create-component" ] ] ]);
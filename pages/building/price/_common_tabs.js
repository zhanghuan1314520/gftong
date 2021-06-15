require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/price/_common_tabs" ], {
    2176: function(n, e, t) {
        t.r(e);
        var a = t("3b2a"), o = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = o.a;
    },
    "3b2a": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            methods: {
                onChange: function(n) {
                    this.$emit("change", n.currentTarget.dataset.key);
                }
            },
            props: {
                scroll: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    type: String
                },
                tabs: {
                    type: Array,
                    validator: function(n) {
                        return !n.length || n.every(function(n) {
                            var e = n.key, t = n.name;
                            return void 0 != e && void 0 != t;
                        });
                    }
                },
                selected: {
                    type: [ String, Number ]
                }
            },
            watch: {
                selected: function(n) {
                    var e = 0 === n ? 0 : n - 1;
                    this.tabId = "tab-".concat(e);
                }
            },
            data: function() {
                return {
                    tabId: ""
                };
            }
        };
        e.default = a;
    },
    "698d": function(n, e, t) {},
    bf98: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    c5b7: function(n, e, t) {
        var a = t("698d");
        t.n(a).a;
    },
    f5d9b: function(n, e, t) {
        t.r(e);
        var a = t("bf98"), o = t("2176");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("c5b7");
        var r = t("f0c5"), i = Object(r.a)(o.default, a.b, a.c, !1, null, "1ed2fa6f", null, !1, a.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/price/_common_tabs-create-component", {
    "pages/building/price/_common_tabs-create-component": function(n, e, t) {
        t("543d").createComponent(t("f5d9b"));
    }
}, [ [ "pages/building/price/_common_tabs-create-component" ] ] ]);
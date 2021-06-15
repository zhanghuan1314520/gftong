require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/brands/_components/_tabs" ], {
    3116: function(n, t, e) {
        e.r(t);
        var a = e("4bf2"), o = e.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    },
    "4bf2": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            data: function() {
                return {
                    tab_selected: ""
                };
            },
            props: {
                tabs: Array,
                selectTab: Number
            },
            methods: {
                changeTab: function(n) {
                    this.scroll = !0, this.$emit("changeTab", n);
                },
                moveScrollView: function(n) {
                    var t = "";
                    this.tabs.forEach(function(e, a) {
                        e.index === n && (t = a);
                    }), t = 0 === t ? 0 : t - 1;
                    var e = this.tabs[t].index;
                    this.tab_selected = "id_".concat(e);
                }
            },
            watch: {
                selectTab: {
                    handler: function(n) {
                        var t = this;
                        this.$nextTick(function() {
                            t.moveScrollView(n);
                        });
                    },
                    immediate: !0
                }
            }
        };
        t.default = a;
    },
    6942: function(n, t, e) {},
    "7a4b": function(n, t, e) {
        e.r(t);
        var a = e("ee26"), o = e("3116");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("9078");
        var i = e("f0c5"), r = Object(i.a)(o.default, a.b, a.c, !1, null, "01613baa", null, !1, a.a, void 0);
        t.default = r.exports;
    },
    9078: function(n, t, e) {
        var a = e("6942");
        e.n(a).a;
    },
    ee26: function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/activity_a/brands/_components/_tabs-create-component", {
    "pages/activity_a/brands/_components/_tabs-create-component": function(n, t, e) {
        e("543d").createComponent(e("7a4b"));
    }
}, [ [ "pages/activity_a/brands/_components/_tabs-create-component" ] ] ]);
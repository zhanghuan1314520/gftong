require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/whole_buildings_map/_map" ], {
    "6c6b": function(n, e, a) {},
    92319: function(n, e, a) {
        a.r(e);
        var t = a("f5bb"), o = a.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = o.a;
    },
    bdb9: function(n, e, a) {
        a.r(e);
        var t = a("f69a"), o = a("92319");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(c);
        a("fbfb");
        var u = a("f0c5"), i = Object(u.a)(o.default, t.b, t.c, !1, null, "6730a94e", null, !1, t.a, void 0);
        e.default = i.exports;
    },
    f5bb: function(n, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            props: {
                markers: Array,
                show_back: Boolean
            },
            watch: {
                markers: function(n) {
                    this.scaleMap(n);
                }
            },
            methods: {
                scaleMap: function(n) {
                    wx.createMapContext("house-map", this.$mp.component).includePoints({
                        points: n.map(function(n) {
                            return {
                                latitude: n.latitude,
                                longitude: n.longitude
                            };
                        }),
                        padding: [ 60, 60, 60, 60 ]
                    });
                }
            }
        };
        e.default = t;
    },
    f69a: function(n, e, a) {
        a.d(e, "b", function() {
            return t;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                return n.$emit("callouttap", e);
            }, n.e1 = function(e) {
                return n.$emit("tap", e);
            });
        }, o = [];
    },
    fbfb: function(n, e, a) {
        var t = a("6c6b");
        a.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageA/whole_buildings_map/_map-create-component", {
    "pages/packageA/whole_buildings_map/_map-create-component": function(n, e, a) {
        a("543d").createComponent(a("bdb9"));
    }
}, [ [ "pages/packageA/whole_buildings_map/_map-create-component" ] ] ]);
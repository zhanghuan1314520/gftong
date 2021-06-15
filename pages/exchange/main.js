(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/exchange/main" ], {
    "20e1": function(n, t, e) {
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var u = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "81c8": function(n, t, e) {
        e.r(t);
        var u = e("8d18"), o = e.n(u);
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        t.default = o.a;
    },
    "8d18": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e("8e44")), o = {
            data: function() {
                return {
                    loading: !0,
                    src: ""
                };
            },
            mounted: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var n = this;
                    u.default.getPointsStore().then(function(t) {
                        var e = t.url;
                        return n.src = e;
                    });
                }
            },
            components: {}
        };
        t.default = o;
    },
    "8f29": function(n, t, e) {
        e.r(t);
        var u = e("20e1"), o = e("81c8");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        var c = e("f0c5"), r = Object(c.a)(o.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        t.default = r.exports;
    },
    9324: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("8f29")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "9324", "common/runtime", "common/vendor" ] ] ]);
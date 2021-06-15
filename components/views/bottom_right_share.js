(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/bottom_right_share" ], {
    "35a1": function(t, e, n) {},
    6318: function(t, e, n) {
        n.r(e);
        var o = n("6cd5"), r = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    "6cd5": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {},
            props: {
                type: {
                    type: String,
                    default: "white"
                },
                bottom: {
                    type: [ String, Number ],
                    default: 286
                },
                right: {
                    type: [ String, Number ],
                    default: 24
                }
            },
            computed: {
                icon: function() {
                    return "48_share_".concat(this.type);
                },
                style: function() {
                    return {
                        bottom: this.bottom + "rpx",
                        right: this.right + "rpx"
                    };
                }
            }
        };
        e.default = o;
    },
    "702d": function(t, e, n) {
        var o = n("35a1");
        n.n(o).a;
    },
    b6a7: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__get_style([ t.style ]));
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, r = [];
    },
    dd4e: function(t, e, n) {
        n.r(e);
        var o = n("b6a7"), r = n("6318");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("702d");
        var c = n("f0c5"), i = Object(c.a)(r.default, o.b, o.c, !1, null, "ff2765fe", null, !1, o.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/bottom_right_share-create-component", {
    "components/views/bottom_right_share-create-component": function(t, e, n) {
        n("543d").createComponent(n("dd4e"));
    }
}, [ [ "components/views/bottom_right_share-create-component" ] ] ]);
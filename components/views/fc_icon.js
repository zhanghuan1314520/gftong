(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/fc_icon" ], {
    "1e41": function(n, e, t) {
        t.r(e);
        var c = t("bbec"), o = t.n(c);
        for (var i in c) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(i);
        e.default = o.a;
    },
    "1e9e": function(n, e, t) {
        t.d(e, "b", function() {
            return c;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var c = function() {
            var n = this, e = (n.$createElement, n._self._c, n.__get_style([ n.style ]));
            n.$mp.data = Object.assign({}, {
                $root: {
                    s0: e
                }
            });
        }, o = [];
    },
    "5a9c": function(n, e, t) {
        t.r(e);
        var c = t("1e9e"), o = t("1e41");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        var a = t("f0c5"), r = Object(a.a)(o.default, c.b, c.c, !1, null, "dc2074f4", null, !1, c.a, void 0);
        e.default = r.exports;
    },
    bbec: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = {
            props: {
                type: {
                    type: String
                }
            },
            computed: {
                src: function() {
                    return "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/icon/".concat(this.type, ".png");
                },
                style: function() {
                    var n = this.type.match(/^\d+/g);
                    if (n.length) {
                        var e = n[0] + "rpx";
                        return {
                            width: e,
                            height: e
                        };
                    }
                    return {};
                }
            }
        };
        e.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/fc_icon-create-component", {
    "components/views/fc_icon-create-component": function(n, e, t) {
        t("543d").createComponent(t("5a9c"));
    }
}, [ [ "components/views/fc_icon-create-component" ] ] ]);
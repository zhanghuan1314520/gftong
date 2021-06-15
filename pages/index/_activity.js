(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/_activity" ], {
    "01cf": function(t, n, e) {},
    "34fd": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, e("a177");
        var i = e("371c"), a = {
            props: {
                authority: String,
                activity: Object
            },
            computed: {
                show: function() {
                    var t = this.activity, n = t.img, e = t.url, i = t.size, a = t.authority;
                    return n && e && i && i.length && (a.indexOf(this.authority) > -1 || !a || !a.length);
                },
                style: function() {
                    var t = this.activity.size;
                    if (t && t.length) return {
                        width: t[0] + "rpx",
                        height: t[1] + "rpx"
                    };
                }
            },
            methods: {
                clickLog: function() {
                    var t = "金刚位Banner-".concat(this.activity.name, "点击");
                    console.error(t), (0, i.sendCtmEvtLog)(t);
                }
            }
        };
        n.default = a;
    },
    "57f0": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var i = function() {
            var t = this, n = (t.$createElement, t._self._c, t.show ? t.__get_style([ t.style ]) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, a = [];
    },
    "5dd4": function(t, n, e) {
        var i = e("01cf");
        e.n(i).a;
    },
    "72ac": function(t, n, e) {
        e.r(n);
        var i = e("34fd"), a = e.n(i);
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(c);
        n.default = a.a;
    },
    9898: function(t, n, e) {
        e.r(n);
        var i = e("57f0"), a = e("72ac");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("5dd4");
        var o = e("f0c5"), r = Object(o.a)(a.default, i.b, i.c, !1, null, "a6f633dc", null, !1, i.a, void 0);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/_activity-create-component", {
    "pages/index/_activity-create-component": function(t, n, e) {
        e("543d").createComponent(e("9898"));
    }
}, [ [ "pages/index/_activity-create-component" ] ] ]);
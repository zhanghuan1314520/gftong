(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/f2/index" ], {
    "0a1c": function(t, e, n) {
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    r(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function c(t) {
            if (t) return t.preventDefault || (t.preventDefault = function() {}), t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("e004")), s = {
            props: {
                canvasId: {
                    type: String,
                    default: "f2-canvas"
                },
                onInit: Function,
                opts: Object,
                source: Array,
                yLabel: Function,
                valueFormatter: Function,
                axisXLabelFormatter: Function
            },
            data: function() {
                return {
                    hasInit: !1
                };
            },
            computed: {
                id: function() {
                    return "".concat(this.canvasId, "-").concat(new Date().getTime());
                }
            },
            watch: {},
            created: function() {
                this.$watch(function() {
                    return {
                        source: this.source,
                        hasInit: this.hasInit
                    };
                }, function(t) {
                    t.source.length > 0 && t.hasInit && this.onChangeData(this.source);
                }, {
                    immediate: !0
                });
            },
            mounted: function() {
                var t = this;
                wx.createSelectorQuery().in(this).select("#".concat(this.id)).fields({
                    node: !0,
                    size: !0
                }).exec(function(e) {
                    var n = e[0], o = n.node, r = n.width, c = n.height, s = o.getContext("2d"), u = wx.getSystemInfoSync().pixelRatio;
                    o.width = r * u, o.height = c * u;
                    var l = {
                        context: s,
                        width: r,
                        height: c,
                        pixelRatio: u
                    };
                    i.default.Global.fontFamily = "sans-serif";
                    var f = new i.default.Chart(a(a({}, l), t.opts.global));
                    t.hasInit = !0, f && (t.chart = f, t.canvasEl = f.get("el"));
                });
            },
            methods: {
                onChangeData: function(t) {
                    var e = this, n = this.opts, o = n.defs, r = n.axis, c = n.axisX, i = n.legend, s = n.color, u = n.area, l = n.area_color, f = n.tooltipOpts, h = void 0 === f ? {} : f, d = {}, p = o.x, v = void 0 === p ? {} : p, b = o.y, m = void 0 === b ? {} : b;
                    this.$nextTick(function() {
                        e.chart.clear(), e.chart.source(t, {
                            x: a({}, v),
                            y: a(a({}, m), {}, {
                                formatter: e.valueFormatter || function(t) {
                                    return t;
                                }
                            })
                        }), e.chart.axis(r[0], r[1]), c && e.chart.axis(c[0], a(a({}, c[1]), {}, {
                            label: c[1].label || e.axisXLabelFormatter || {}
                        })), e.chart.legend(i), e.chart.line().position("x*y").color("type", s).shape("smooth"), 
                        u && l && (e.chart.area().position("x*y").color(l).shape("smooth"), e.chart.point().position("x*y").style({
                            fill: "#fff",
                            lineWidth: 2
                        }).color(s), d = a(a({}, h), {}, {
                            showCrosshairs: !0,
                            onShow: function(t) {
                                return t.items && t.items.length && t.items.splice(1);
                            }
                        })), e.yLabel && e.chart.axis("y", {
                            label: e.yLabel
                        }), e.chart.tooltip(a(a({}, d), {}, {
                            triggerOn: [ "touchstart", "touchmove" ]
                        })), e.chart.render();
                    });
                },
                touchStart: function(t) {
                    var e = this.canvasEl;
                    e && e.dispatchEvent("touchstart", c(t));
                },
                touchMove: function(t) {
                    var e = this.canvasEl;
                    e && e.dispatchEvent("touchmove", c(t));
                },
                touchEnd: function(t) {
                    var e = this.canvasEl;
                    e && e.dispatchEvent("touchend", c(t));
                }
            }
        };
        e.default = s;
    },
    "205d": function(t, e, n) {
        var o = n("2677");
        n.n(o).a;
    },
    2677: function(t, e, n) {},
    "4d0a": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    5064: function(t, e, n) {
        n.r(e);
        var o = n("4d0a"), a = n("8454");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        n("205d");
        var c = n("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, "09c0ae1a", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    8454: function(t, e, n) {
        n.r(e);
        var o = n("0a1c"), a = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/f2/index-create-component", {
    "components/f2/index-create-component": function(t, e, n) {
        n("543d").createComponent(n("5064"));
    }
}, [ [ "components/f2/index-create-component" ] ] ]);
require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/plates/_components/_facilities" ], {
    "0304": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    "0fa2": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e, n, o, r, a, i) {
            try {
                var c = t[a](i), s = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(s) : Promise.resolve(s).then(o, r);
        }
        function a(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, a) {
                    function i(t) {
                        r(s, o, a, i, c, "next", t);
                    }
                    function c(t) {
                        r(s, o, a, i, c, "throw", t);
                    }
                    var s = t.apply(e, n);
                    i(void 0);
                });
            };
        }
        function i(t) {
            return u(t) || s(t) || f(t) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function u(t) {
            if (Array.isArray(t)) return p(t);
        }
        function l(t, e) {
            return m(t) || h(t, e) || f(t, e) || d();
        }
        function d() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function f(t, e) {
            if (t) {
                if ("string" == typeof t) return p(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0;
            }
        }
        function p(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        function h(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], o = !0, r = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    r = !0, a = t;
                } finally {
                    try {
                        o || null == c.return || c.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return n;
            }
        }
        function m(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var g = o(n("a34a")), b = o(n("f2a1")), y = {
            "商场": "shop",
            "不利因素": "harm",
            "三甲": "hospital",
            "三乙": "hospital",
            "幼儿园": "school",
            "小学": "school",
            "中学": "school",
            "主干道": "road",
            "地铁": "metro",
            "公园": "park"
        }, v = "#00B08D", k = "#FF4D00", w = {
            props: {
                pid: [ Number, String ],
                region: Array
            },
            data: function() {
                return {
                    tabs: [ {
                        name: "交通"
                    }, {
                        name: "教育"
                    }, {
                        name: "医院"
                    }, {
                        name: "购物"
                    }, {
                        name: "环境"
                    } ],
                    type: "交通",
                    items: {},
                    polygons: [],
                    polylines: [],
                    markers: [],
                    selected: -1,
                    show_detail: !0
                };
            },
            mounted: function() {
                this.getData();
            },
            watch: {
                region: function(t) {
                    if (t && t.length) {
                        var e = [];
                        this.polygons = t.map(function(t) {
                            var n = t.map(function(t) {
                                var e = l(t, 2);
                                return {
                                    longitude: e[0],
                                    latitude: e[1]
                                };
                            });
                            return e.push.apply(e, i(n)), {
                                points: n,
                                strokeWidth: 0,
                                strokeColor: "transparent",
                                fillColor: "#e3c44988"
                            };
                        }), this.scaleMap(e);
                    }
                }
            },
            methods: {
                scaleMap: function(t) {
                    wx.createMapContext("map", this.$mp.component).includePoints({
                        points: t,
                        padding: [ 60, 60, 60, 60 ]
                    });
                },
                changeTab: function(t) {
                    this.type = t, this.getData(), this.markers = [], this.polylines = [], this.selected = -1;
                },
                getData: function() {
                    var t = this;
                    return a(g.default.mark(function e() {
                        var n, o;
                        return g.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.items = [], t.markers = [], e.next = 4, b.default.getFacilities(t.pid, t.type);

                              case 4:
                                n = e.sent, o = n.items, t.items = o.reduce(function(t, e) {
                                    return e.classname = y[e.subcategory], t[e.subcategory] || (t[e.subcategory] = {
                                        title: e.subcategory,
                                        children: []
                                    }), t[e.subcategory].children.push(e), t;
                                }, {}), t.show_detail = Object.keys(t.items).length > 0, t.markers = o.reduce(function(t, e, n) {
                                    if (e.coordinates && 1 === e.coordinates.length && e.coordinates[0] && 1 === e.coordinates[0].length) {
                                        var o = l(e.coordinates[0][0], 2), r = o[0], a = o[1], i = t.length + 1;
                                        e.markerId = t.length + 1, t.push({
                                            id: i,
                                            name: e.name,
                                            subcategory: e.subcategory,
                                            longitude: r,
                                            latitude: a,
                                            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/plates/".concat(y[e.subcategory], "-green.png"),
                                            width: 31.5,
                                            height: 36.5
                                        });
                                    }
                                    return t;
                                }, []), t.polylines = o.reduce(function(e, n) {
                                    if (n.coordinates && n.coordinates.length && n.coordinates[0].length > 1) {
                                        var o = n.coordinates[0].map(function(t) {
                                            var e = l(t, 2);
                                            return {
                                                longitude: e[0],
                                                latitude: e[1]
                                            };
                                        }), r = o[Math.round(o.length / 2)], a = r.longitude, i = r.latitude, c = t.markers.length + 1;
                                        e.push({
                                            markerId: c,
                                            name: n.name,
                                            points: o,
                                            width: 6,
                                            color: v
                                        }), t.markers.push({
                                            id: c,
                                            name: n.name,
                                            subcategory: n.subcategory,
                                            longitude: a,
                                            latitude: i,
                                            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/plates/".concat(y[n.subcategory], "-green.png"),
                                            width: 31.5,
                                            height: 36.5
                                        }), n.markerId = c;
                                    }
                                    return e;
                                }, []);

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                clickMarker: function(t) {
                    var e = t.detail.markerId;
                    this.selectChild(e);
                },
                moveLocation: function(t) {
                    wx.createMapContext("map", this.$mp.component).moveToLocation(t);
                },
                selectChild: function(t) {
                    var e;
                    this.selected = t, this.markers.forEach(function(n) {
                        t === n.id ? (n.iconPath = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/plates/".concat(y[n.subcategory], "-red.png"), 
                        n.callout = {
                            fontSize: 14,
                            color: "#ffffff",
                            borderRadius: 18,
                            padding: 8,
                            textAlign: "center",
                            display: "ALWAYS",
                            content: n.name,
                            bgColor: k
                        }, e = {
                            longitude: n.longitude,
                            latitude: n.latitude
                        }) : (n.iconPath = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/plates/".concat(y[n.subcategory], "-green.png"), 
                        n.callout = null);
                    }), this.polylines.forEach(function(n) {
                        var o = t === n.markerId;
                        n.color = o ? k : v, o && (e = n.points[Math.round(n.points.length / 2)]);
                    }), e && this.moveLocation(e);
                }
            }
        };
        e.default = w;
    },
    "5a21": function(t, e, n) {
        var o = n("adcc");
        n.n(o).a;
    },
    adcc: function(t, e, n) {},
    cbd2: function(t, e, n) {
        n.r(e);
        var o = n("0fa2"), r = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    d027: function(t, e, n) {
        n.r(e);
        var o = n("0304"), r = n("cbd2");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("5a21");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "3a11833e", null, !1, o.a, void 0);
        e.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageB/plates/_components/_facilities-create-component", {
    "pages/packageB/plates/_components/_facilities-create-component": function(t, e, n) {
        n("543d").createComponent(n("d027"));
    }
}, [ [ "pages/packageB/plates/_components/_facilities-create-component" ] ] ]);
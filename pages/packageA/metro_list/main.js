require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/metro_list/main" ], {
    "0135": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    "095e": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("d0e7")).default);
        }).call(this, n("543d").createPage);
    },
    "23d2": function(e, t, n) {
        var r = n("9c6e");
        n.n(r).a;
    },
    4409: function(e, t, n) {
        n.r(t);
        var r = n("dcae"), i = n.n(r);
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = i.a;
    },
    "9c6e": function(e, t, n) {},
    d0e7: function(e, t, n) {
        n.r(t);
        var r = n("0135"), i = n("4409");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("23d2");
        var o = n("f0c5"), c = Object(o.a)(i.default, r.b, r.c, !1, null, "943ea9a2", null, !1, r.a, void 0);
        t.default = c.exports;
    },
    dcae: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e) {
            return c(e) || o(e) || s(e) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function o(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function c(e) {
            if (Array.isArray(e)) return f(e);
        }
        function u(e, t) {
            return p(e) || d(e, t) || s(e, t) || l();
        }
        function l() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
            }
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        function d(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, i = !1, a = void 0;
                try {
                    for (var o, c = e[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, a = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw a;
                    }
                }
                return n;
            }
        }
        function p(e) {
            if (Array.isArray(e)) return e;
        }
        function h(e, t, n, r, i, a, o) {
            try {
                var c = e[a](o), u = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(u) : Promise.resolve(u).then(r, i);
        }
        function g(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, i) {
                    function a(e) {
                        h(c, r, i, a, o, "next", e);
                    }
                    function o(e) {
                        h(c, r, i, a, o, "throw", e);
                    }
                    var c = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach(function(t) {
                    v(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var y = r(n("a34a")), _ = r(n("bdff")), k = r(n("9e70")), w = r(n("8e44")), x = r(n("327a")), A = 252 * (wx.getSystemInfoSync().windowWidth / 750), M = !1, P = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/metro_map/metro-i.png",
            width: 22,
            height: 26
        }, S = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/metro_map/building-i.png",
            width: 5,
            height: 5
        }, O = {
            color: "#ffffff",
            display: "ALWAYS",
            borderRadius: 20,
            padding: 6,
            textAlign: "center"
        }, j = b(b({}, O), {}, {
            borderColor: "#00B08D",
            borderWidth: 1,
            fontSize: 14,
            bgColor: "#E6FFFA",
            color: "#333333"
        }), D = b(b({}, j), {}, {
            bgColor: "#00B08D",
            color: "#ffffff"
        }), C = b(b({}, O), {}, {
            borderColor: "#6699CC",
            borderWidth: 1,
            fontSize: 13,
            bgColor: "#6699CC",
            color: "#ffffff"
        }), T = {
            MAP: "map",
            LIST: "list"
        }, I = [], B = [], E = {}, L = function(e) {
            return e.split(",").map(function(e) {
                return Number(e);
            });
        }, W = !1, $ = {
            components: {
                ListSection: function() {
                    n.e("pages/packageA/metro_list/_list").then(function() {
                        return resolve(n("011d"));
                    }.bind(null, n)).catch(n.oe);
                },
                MapSection: function() {
                    n.e("pages/packageA/metro_list/_map").then(function() {
                        return resolve(n("0d57"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            mixins: [ x.default ],
            data: function() {
                return {
                    selected_line: 0,
                    lines: [],
                    fixed: !1,
                    page_type: T.MAP,
                    markers: [],
                    status: "",
                    circles: [],
                    polyline: [],
                    filters: []
                };
            },
            computed: {
                show_map: function() {
                    return this.page_type === T.MAP;
                }
            },
            onPageScroll: function(e) {
                if (this.page_type === T.LIST) {
                    if (M) return;
                    M = !0, this.fixed = e.scrollTop >= A, M = !1;
                }
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "这里找地铁盘好方便，快来试试呀~",
                    path: "/pages/packageA/metro_list/main"
                });
            },
            onLoad: function() {
                this.getTabs();
            },
            methods: {
                goDisclaimer: function() {
                    wx.navigateTo({
                        url: "/pages/packageC/disclaimer/main"
                    });
                },
                switchPageType: function() {
                    this.page_type = this.page_type === T.MAP ? T.LIST : T.MAP, this.resetMapData(), 
                    this.page_type === T.MAP ? this.getMapData() : (this.page = 1, this.getData());
                },
                getTabs: function() {
                    var e = this;
                    return g(y.default.mark(function t() {
                        var n;
                        return y.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, k.default.getMetroLines();

                              case 2:
                                n = t.sent, e.lines = n.map(function(e, t) {
                                    return {
                                        name: e,
                                        key: t
                                    };
                                }), e.getMapData();

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                resetMapData: function() {
                    this.selected_line = 0, I = [], B = [], this.filters = [], this.markers = [], this.polyline = [], 
                    this.circles = [];
                },
                changeTab: function(e) {
                    this.resetMapData(), this.selected_line = e, this.page_type === T.MAP ? this.getMapData() : (this.page = 1, 
                    this.getData());
                },
                getData: function() {
                    var e = this, t = this.lines[this.selected_line].name;
                    this.loading = !0;
                    var n = {
                        distance: 1e3,
                        page: this.page,
                        per: 10,
                        metro_in_map: "".concat(parseInt(t), "号线")
                    };
                    w.default.getBuildings(n).then(function(t) {
                        var n = t.items;
                        e.handleData({
                            items: n
                        });
                    }).then(function() {
                        e.fixed && 1 === e.page && e.$nextTick(function() {
                            wx.pageScrollTo({
                                scrollTop: A
                            });
                        });
                    });
                },
                getMapData: function() {
                    var e = this;
                    return g(y.default.mark(function t() {
                        var n, r, i, a;
                        return y.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.lines && e.lines.length ? e.lines[e.selected_line].name : "", t.next = 3, 
                                _.default.getMetroStations(n, e.status);

                              case 3:
                                r = t.sent, i = r.items, a = r.line_coordinates, I = i.filter(function(e) {
                                    return e.building_count;
                                }).map(function(e, t) {
                                    var n = e.location, r = e.poi_id, i = e.name, a = e.building_count, o = u(L(n), 2), c = o[0], l = o[1];
                                    return b(b({}, P), {}, {
                                        id: t,
                                        poi_id: r,
                                        type: "station",
                                        longitude: c,
                                        latitude: l,
                                        name: i,
                                        _callout: b(b({}, j), {}, {
                                            content: "".concat(i, "(").concat(a, ")")
                                        })
                                    });
                                }), W = !1, e.includeMarker(I, 0), e.markers = I, e.polyline = a.map(function(e) {
                                    return {
                                        points: e.map(function(e) {
                                            var t = u(e.split(","), 2);
                                            return {
                                                longitude: t[0],
                                                latitude: t[1]
                                            };
                                        }),
                                        color: "#00B08D",
                                        width: 4
                                    };
                                });

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                clickMarker: function(e) {
                    var t = e.detail.markerId, n = this.markers[t];
                    if ("station" === n.type) {
                        var r = n.poi_id;
                        this.getBuildingByPoi(r, t), W = !0, I.forEach(function(e) {
                            e.callout = e._callout;
                        }), this.markers = [].concat(i(I), i(B));
                    }
                },
                clickCallout: function(e) {
                    var t = e.detail.markerId, n = this.markers[t], r = n.poi_id;
                    "station" === n.type ? this.getBuildingByPoi(r, t) : "building" === n.type && wx.navigateTo({
                        url: "/pages/building/main?building_id=".concat(r)
                    });
                },
                showCircle: function(e) {
                    var t = I[e];
                    t && this.circles.push({
                        marker_index: e,
                        longitude: t.longitude,
                        latitude: t.latitude,
                        radius: 1e3,
                        strokeWidth: 2,
                        color: "#00B08D32",
                        fillColor: "#00B08D16"
                    }), console.log("show circle", this.circles);
                },
                hideCircle: function(e) {
                    var t = this;
                    I[e] && this.circles.some(function(n, r) {
                        if (n.marker_index === e) return t.circles.splice(r, 1), !0;
                    }), console.log("hide circle", this.circles);
                },
                getBuildingByPoi: function(e, t) {
                    var n = this;
                    return g(y.default.mark(function r() {
                        var a, o, c, l, s, f, d, p, h, g, m;
                        return y.default.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                if (a = I[t], o = n.filters.some(function(e, r) {
                                    if (e.markerId === Number(t)) return n.filters.splice(r, 1), !0;
                                }), console.log("filter_exist", o), o || !(n.filters.length >= 5)) {
                                    r.next = 6;
                                    break;
                                }
                                return wx.showToast({
                                    title: "最多选择5个站点",
                                    icon: "none"
                                }), r.abrupt("return");

                              case 6:
                                if (!o) {
                                    r.next = 11;
                                    break;
                                }
                                n.hideCircle(t), B = B.reduce(function(e, t, n) {
                                    return t.station_name != a.name && (t.id = I.length + e.length + 1, e.push(t)), 
                                    e;
                                }, []), r.next = 25;
                                break;

                              case 11:
                                if (n.showCircle(t), n.filters.push({
                                    poi_id: e,
                                    name: a.name,
                                    markerId: Number(t)
                                }), !E[e]) {
                                    r.next = 17;
                                    break;
                                }
                                c = E[e], r.next = 25;
                                break;

                              case 17:
                                return l = {
                                    poi_id: e
                                }, n.status && (l.status = n.status), r.next = 21, _.default.map_buildings(l);

                              case 21:
                                s = r.sent, f = s.items, c = f, E[e] = f;

                              case 25:
                                c && c.length && (p = c.map(function(e, t) {
                                    var n = e.id, r = e.name, i = e.location, o = u(L(i), 2), c = o[0], l = o[1];
                                    return b(b({}, S), {}, {
                                        id: I.length + B.length + t,
                                        poi_id: n,
                                        type: "building",
                                        longitude: c,
                                        latitude: l,
                                        station_name: a.name,
                                        callout: b(b({}, C), {}, {
                                            content: "".concat(r)
                                        })
                                    });
                                }), (d = B).push.apply(d, i(p))), h = b(b({}, a), {}, {
                                    callout: b(b({}, a.callout), j)
                                }), o || (h.callout = b(b({}, h.callout), D)), I[t] = h, g = n.markers[t], m = [ g ].concat(i(B)), 
                                o || n.includeMarker(m, 160), n.markers = I.concat(B);

                              case 33:
                              case "end":
                                return r.stop();
                            }
                        }, r);
                    }))();
                },
                includeMarker: function(e, t) {
                    var n = this;
                    this.$nextTick(function() {
                        n.$refs.map.includeMarker(e, t);
                    });
                },
                changeScale: function(e) {
                    var t = e.scale;
                    console.error("new scale", t), (W = t >= 12) && I.forEach(function(e) {
                        e.callout || (e.callout = e._callout);
                    }), this.markers = I.concat(B);
                }
            }
        };
        t.default = $;
    }
}, [ [ "095e", "common/runtime", "common/vendor" ] ] ]);
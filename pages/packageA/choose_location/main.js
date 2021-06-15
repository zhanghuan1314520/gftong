require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/choose_location/main" ], {
    "057f": function(e, t, n) {
        n.r(t);
        var r = n("6351"), a = n.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "269a": function(e, t, n) {},
    4241: function(e, t, n) {
        n.r(t);
        var r = n("4ff6"), a = n("057f");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("de25");
        var i = n("f0c5"), u = Object(i.a)(a.default, r.b, r.c, !1, null, "0f8328b0", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    "4ff6": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    6351: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t, n, r, a, o, i) {
            try {
                var u = e[o](i), c = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(c) : Promise.resolve(c).then(r, a);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, o) {
                    function i(e) {
                        a(c, r, o, i, u, "next", e);
                    }
                    function u(e) {
                        a(c, r, o, i, u, "throw", e);
                    }
                    var c = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i, u = r(n("a34a")), c = r(n("09cb")), s = n("80d6"), d = n("eb6a"), f = (0, 
        s.getSystemInfo)(), l = f.screenHeight, h = f.screenWidth / 750, g = {
            data: function() {
                return {
                    keyword: "",
                    latitude: "",
                    longitude: "",
                    current_address: "",
                    search_list: [],
                    focus: !0,
                    hide_search_list: !0,
                    poi_height: l - 144 * h
                };
            },
            onLoad: function(e) {
                var t = e.latitude, n = e.longitude, r = e.current_address;
                this.current_address = decodeURIComponent(r), this.latitude = t, this.longitude = n;
            },
            onReady: function() {
                i = wx.createMapContext("map");
            },
            onUnload: function() {
                i = null;
            },
            watch: {
                keyword: function(e) {
                    this.changeKeywords(e);
                }
            },
            methods: {
                changeKeywords: function(e) {
                    var t = this;
                    return o(u.default.mark(function n() {
                        var r;
                        return u.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, c.default.getSuggestion(e);

                              case 2:
                                r = n.sent, t.search_list = r, t.current_address = "", t.hide_search_list = 0 === t.search_list.length;

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                selectAddress: function(e) {
                    var t = this.search_list[e], n = t.title, r = t.location;
                    this.current_address = n, this.latitude = r.lat, this.longitude = r.lng, this.hide_search_list = !0;
                },
                onBlur: function() {
                    this.focus = !1;
                },
                onFocus: function() {
                    this.focus = !0;
                },
                onRegionChange: function(e) {
                    var t = e.causedBy;
                    "end" === e.type && "drag" === t && (console.error("onRegionChange"), i.getCenterLocation({
                        success: this.changeCenterPoi
                    }));
                },
                changeCenterPoi: function(e) {
                    var t = this;
                    return o(u.default.mark(function n() {
                        var r, a, o, i;
                        return u.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return r = e.longitude, a = e.latitude, n.next = 3, c.default.reverseAddress({
                                    longitude: r,
                                    latitude: a
                                });

                              case 3:
                                o = n.sent, i = o.address, t.current_address = i, t.longitude = r, t.latitude = a;

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                confirmAddress: function() {
                    (0, d.changeLocation)({
                        latitude: this.latitude,
                        longitude: this.longitude,
                        current_address: this.current_address
                    }), wx.navigateBack({
                        delta: 1
                    });
                }
            }
        };
        t.default = g;
    },
    "7c25": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("4241")).default);
        }).call(this, n("543d").createPage);
    },
    de25: function(e, t, n) {
        var r = n("269a");
        n.n(r).a;
    }
}, [ [ "7c25", "common/runtime", "common/vendor" ] ] ]);
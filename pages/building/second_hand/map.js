require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/second_hand/map" ], {
    "0933": function(n, e, t) {
        t.r(e);
        var r = t("dd2e"), i = t("0cfa");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        t("5d4b");
        var a = t("f0c5"), c = Object(a.a)(i.default, r.b, r.c, !1, null, "5a63925e", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    "0cfa": function(n, e, t) {
        t.r(e);
        var r = t("f987"), i = t.n(r);
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        e.default = i.a;
    },
    "3f3e": function(n, e, t) {},
    5442: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("0933")).default);
        }).call(this, t("543d").createPage);
    },
    "5d4b": function(n, e, t) {
        var r = t("3f3e");
        t.n(r).a;
    },
    dd2e: function(n, e, t) {
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    f987: function(n, e, t) {
        function r(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function i(n, e, t, r, i, o, a) {
            try {
                var c = n[o](a), u = c.value;
            } catch (n) {
                return void t(n);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, i);
        }
        function o(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(r, o) {
                    function a(n) {
                        i(u, r, o, a, c, "next", n);
                    }
                    function c(n) {
                        i(u, r, o, a, c, "throw", n);
                    }
                    var u = n.apply(e, t);
                    a(void 0);
                });
            };
        }
        function a(n, e) {
            return l(n) || f(n, e) || u(n, e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function u(n, e) {
            if (n) {
                if ("string" == typeof n) return d(n, e);
                var t = Object.prototype.toString.call(n).slice(8, -1);
                return "Object" === t && n.constructor && (t = n.constructor.name), "Map" === t || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(n, e) : void 0;
            }
        }
        function d(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
            return r;
        }
        function f(n, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) {
                var t = [], r = !0, i = !1, o = void 0;
                try {
                    for (var a, c = n[Symbol.iterator](); !(r = (a = c.next()).done) && (t.push(a.value), 
                    !e || t.length !== e); r = !0) ;
                } catch (n) {
                    i = !0, o = n;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return t;
            }
        }
        function l(n) {
            if (Array.isArray(n)) return n;
        }
        function s(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function p(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(t), !0).forEach(function(e) {
                    g(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function g(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var h = r(t("a34a")), b = r(t("ba1b")), m = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/second_hand/location-i.png",
            width: 22,
            height: 37
        }, v = {
            width: 5,
            height: 5,
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/map/transparent.png"
        }, y = {
            color: "#ffffff",
            fontSize: 13,
            bgColor: "#00B800",
            display: "ALWAYS",
            borderRadius: 27,
            padding: 10,
            textAlign: "center"
        }, _ = p(p({}, y), {}, {
            bgColor: "#6699CC"
        }), w = {
            data: function() {
                return {
                    building_id: "",
                    items: [],
                    house: {}
                };
            },
            watch: {
                markers: function(n) {
                    this.scaleMap(n);
                }
            },
            onLoad: function(n) {
                var e = n.building_id;
                this.building_id = e, this.getData();
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query.building_id, e = encodeURIComponent("/pages/building/second_hand/main?building_id=".concat(n));
                return this.getShareInfo({
                    title: "【".concat(this.house.building_name, "】与周边二手房差价是多少？点击立即查看~"),
                    path: "/pages/building/main?building_id=".concat(n, "&sub_page=").concat(e)
                });
            },
            computed: {
                markers: function() {
                    return this.items.filter(function(n) {
                        return n.location;
                    }).map(function(n, e) {
                        var t = "current" === n.type, r = t ? m : v, i = t ? y : _, o = t ? "".concat(n.building_name, "(本楼盘)") : n.community_name, c = a(n.location.split(","), 2), u = c[0], d = c[1];
                        return p(p({
                            id: Number(n.community_id || 0),
                            title: o,
                            is_current: t,
                            latitude: Number(d),
                            longitude: Number(u)
                        }, r), {}, {
                            callout: p({
                                content: "".concat(o, "\n").concat(n.price_desc)
                            }, i)
                        });
                    });
                }
            },
            methods: {
                getData: function() {
                    var n = this;
                    return o(h.default.mark(function e() {
                        var t, r;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return wx.showLoading(), e.prev = 1, n.loading = !0, t = n.$root.$mp.query.building_id, 
                                e.next = 6, b.default.getSecondHandCommunities(t);

                              case 6:
                                (r = e.sent).house.price_range = r.house.price_desc.substring(0, r.house.price_desc.indexOf("元/㎡")), 
                                r.house.price_diff_range = r.house.price_diff.substring(0, r.house.price_diff.indexOf("元/㎡")), 
                                n.house = r.house, r.items.unshift(p(p({}, r.house), {}, {
                                    type: "current"
                                })), n.items = r.items, e.next = 17;
                                break;

                              case 14:
                                e.prev = 14, e.t0 = e.catch(1), console.error(e.t0);

                              case 17:
                                n.loading = !1, wx.hideLoading();

                              case 19:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 1, 14 ] ]);
                    }))();
                },
                openDetail: function(n) {
                    var e = n.detail.markerId;
                    console.error(n), e && wx.navigateTo({
                        url: "/pages/building/second_hand/history?building_id=".concat(this.building_id, "&community_id=").concat(e)
                    });
                },
                scaleMap: function(n) {
                    wx.createMapContext("map").includePoints({
                        points: n.map(function(n) {
                            return {
                                latitude: n.latitude,
                                longitude: n.longitude
                            };
                        }),
                        padding: [ 160, 160, 160, 160 ]
                    });
                }
            }
        };
        e.default = w;
    }
}, [ [ "5442", "common/runtime", "common/vendor" ] ] ]);
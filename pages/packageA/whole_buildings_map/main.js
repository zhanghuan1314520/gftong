require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/whole_buildings_map/main" ], {
    "4d1b": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("9b6b")).default);
        }).call(this, n("543d").createPage);
    },
    "519c": function(t, e, n) {
        var i = n("d449");
        n.n(i).a;
    },
    "9b6b": function(t, e, n) {
        n.r(e);
        var i = n("f7d7"), a = n("d0a9");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("519c");
        var c = n("f0c5"), r = Object(c.a)(a.default, i.b, i.c, !1, null, "611cc7f0", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "9f60": function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t, e, n, i, a, o, c) {
            try {
                var r = t[o](c), s = r.value;
            } catch (t) {
                return void n(t);
            }
            r.done ? e(s) : Promise.resolve(s).then(i, a);
        }
        function o(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(i, o) {
                    function c(t) {
                        a(s, i, o, c, r, "next", t);
                    }
                    function r(t) {
                        a(s, i, o, c, r, "throw", t);
                    }
                    var s = t.apply(e, n);
                    c(void 0);
                });
            };
        }
        function c(t, e) {
            return h(t) || l(t, e) || s(t, e) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
            }
        }
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
        }
        function l(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], i = !0, a = !1, o = void 0;
                try {
                    for (var c, r = t[Symbol.iterator](); !(i = (c = r.next()).done) && (n.push(c.value), 
                    !e || n.length !== e); i = !0) ;
                } catch (t) {
                    a = !0, o = t;
                } finally {
                    try {
                        i || null == r.return || r.return();
                    } finally {
                        if (a) throw o;
                    }
                }
                return n;
            }
        }
        function h(t) {
            if (Array.isArray(t)) return t;
        }
        function d(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? d(Object(n), !0).forEach(function(e) {
                    p(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function p(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var g = i(n("a34a")), m = i(n("8e44")), _ = i(n("bdff")), b = (n("5118"), i(n("327a"))), v = i(n("02f2")), y = {
            ZONES: "zones",
            BUILDINGS: "buildings"
        }, S = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/map/zone-icon.png",
            width: 10,
            height: 10
        }, w = f(f({}, S), {}, {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/map/transparent.png"
        }), O = {
            color: "#ffffff",
            fontSize: 12,
            bgColor: "#6699CC",
            display: "ALWAYS",
            borderRadius: 50,
            padding: 10,
            textAlign: "center"
        }, k = f(f({}, O), {}, {
            padding: 14,
            bgColor: "#37A6B8"
        }), x = f(f({}, O), {}, {
            padding: 14,
            bgColor: "#00B08D"
        }), z = function(t) {
            return t.map(function(t) {
                var e = t.id, n = t.location, i = t.name, a = t.apartment_count, o = t.customized_price, r = t.price_desc, s = c(n.split(","), 2), u = s[0], l = s[1], h = a ? "(".concat(a, "套)") : "", d = r;
                o.length && (d = o.join("\n"));
                var p = "".concat(i).concat(h);
                return d && (p += "\n".concat(d)), f(f({
                    id: e,
                    title: i,
                    latitude: l,
                    longitude: u
                }, S), {}, {
                    callout: f({
                        content: p
                    }, O)
                });
            });
        }, A = function(t) {
            return t.map(function(t) {
                var e = t.id, n = t.name, i = t.building_count, a = c(t.location.split(","), 2), o = a[0], r = a[1], s = i ? "".concat(i, "个") : "";
                return f(f({
                    id: e,
                    title: n,
                    latitude: r,
                    longitude: o
                }, w), {}, {
                    callout: f({
                        content: "".concat(n, "\n(").concat(s, ")")
                    }, x)
                });
            });
        }, j = function(t) {
            return t.map(function(t) {
                var e = t.id, n = t.name, i = t.building_count, a = c(t.location.split(","), 2), o = a[0], r = a[1], s = i ? "".concat(i, "个") : "";
                return f(f({
                    id: e,
                    title: n,
                    latitude: r,
                    longitude: o
                }, w), {}, {
                    callout: f({
                        content: "".concat(n, "\n(").concat(s, ")")
                    }, k)
                });
            });
        }, P = [], D = [], Z = [], I = {
            scale: 9
        }, M = function(t) {
            var e = [ "total_price", "price", "layout", "decoration", "area", "metro", "status" ];
            return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (e = e.filter(function(t) {
                return "status" != t;
            })), e.some(function(e) {
                return t[e];
            });
        }, C = {
            mixins: [ b.default, v.default ],
            components: {
                TopFilter: function() {
                    n.e("pages/packageA/map/_top_filter").then(function() {
                        return resolve(n("0b74"));
                    }.bind(null, n)).catch(n.oe);
                },
                ZoneSelect: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/packageA/map/_zone_select") ]).then(function() {
                        return resolve(n("c383"));
                    }.bind(null, n)).catch(n.oe);
                },
                PriceSelect: function() {
                    n.e("pages/packageA/map/_price_select").then(function() {
                        return resolve(n("f870"));
                    }.bind(null, n)).catch(n.oe);
                },
                LayoutSelect: function() {
                    n.e("pages/packageA/map/_layout_select").then(function() {
                        return resolve(n("0c43"));
                    }.bind(null, n)).catch(n.oe);
                },
                AreaSelect: function() {
                    n.e("pages/packageA/map/_area_select").then(function() {
                        return resolve(n("f913"));
                    }.bind(null, n)).catch(n.oe);
                },
                DecorateSelect: function() {
                    n.e("pages/packageA/map/_decorate_select").then(function() {
                        return resolve(n("c6da"));
                    }.bind(null, n)).catch(n.oe);
                },
                MapSection: function() {
                    n.e("pages/packageA/whole_buildings_map/_map").then(function() {
                        return resolve(n("bdb9"));
                    }.bind(null, n)).catch(n.oe);
                },
                ListSection: function() {
                    n.e("pages/packageA/whole_buildings_map/_list").then(function() {
                        return resolve(n("1d77"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    type: y.ZONES,
                    decoration: "",
                    zone_ids: "",
                    area: "",
                    total_price: "",
                    price: "",
                    layout: "",
                    metro: "",
                    markers: [],
                    status: "",
                    selected: "",
                    is_surplus: !1,
                    text: {
                        "区域": "区域",
                        "城区": "",
                        "地铁": "",
                        "价格": "价格",
                        "面积": "面积",
                        "装修": "装修"
                    },
                    page_type: "map"
                };
            },
            created: function() {
                this.$watch(function() {
                    return this.text["城区"] + this.text["地铁"];
                }, function(t, e) {
                    t != e && (this.text["区域"] = t || "不限");
                });
            },
            onLoad: function(t) {
                this.is_surplus = "摇号剩余" === t.status, this.status = this.is_surplus ? "摇号剩余" : "", 
                I.scale = 9, this.getZones();
            },
            onUnload: function() {
                Z = [], D = [], P = [];
            },
            onShow: function() {},
            computed: {
                show_back: function() {
                    return this.type != y.ZONES;
                },
                open: function() {
                    return this.selected;
                }
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query.status, e = this.is_surplus ? "/pages/packageA/surplus_buildings/main" : "/pages/find_building/main", n = encodeURIComponent("/pages/packageA/whole_buildings_map/main?status=".concat(t || "")), i = {
                    title: this.is_surplus ? "这里有杭州的在售楼盘，地图直接查看更方便哦" : "地图找房方便又直观，快来找找你心仪的楼盘喔~",
                    path: "".concat(e, "?sub_page=").concat(n),
                    share_by_prefix: "sp201904183_",
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-dtzf.png"
                };
                return this.getShareInfo(i);
            },
            methods: {
                getZones: function() {
                    var t = this, e = [ "zone_ids", "zone_section_ids", "total_price", "price", "layout", "decoration", "area", "metro", "status" ].reduce(function(e, n) {
                        return t[n] && (e[n] = t[n]), e;
                    }, {});
                    _.default.map_zones(e).then(function(e) {
                        var n = e.items;
                        t.type = y.ZONES, n.length ? (Z = n, t.drawZones()) : wx.showModal({
                            title: "提示",
                            content: "没有符合条件的楼盘",
                            showCancel: !1
                        });
                    });
                },
                drawZones: function() {
                    this.markers = A(Z), this.scaleMap();
                },
                drawSection: function(t) {
                    this.markers = j(t), this.scaleMap();
                },
                drawHouses: function(t) {
                    this.markers = z(t), this.scaleMap();
                },
                changeStatus: function(t) {
                    if (this.status = this.status === t ? "" : t, "map" === this.page_type) switch (this.type) {
                      case y.ZONES:
                        this.getZones();
                        break;

                      case y.BUILDINGS:
                        this.getHouses();
                    } else this.page = 1, this.getData();
                },
                getSections: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.zone_ids;
                    this.zone_ids = e;
                    var n = [ "total_price", "zone_ids", "zone_section_ids", "price", "layout", "decoration", "area", "metro", "status" ].reduce(function(e, n) {
                        return t[n] && (e[n] = t[n]), e;
                    }, {});
                    _.default.map_zone_sections(n).then(function(e) {
                        D = e.items;
                        var i = M(n, t.is_surplus);
                        (e.items.length || i) && (t.type = y.SECTIONS, t.drawSection(D)), e.items.length || (i ? wx.showModal({
                            title: "提示",
                            content: "该区域内没有符合的楼盘",
                            showCancel: !1
                        }) : (t.type = y.BUILDINGS, t.getHouses("")));
                    });
                },
                getHouses: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.zone_ids;
                    this.zone_ids = e;
                    var n = [ "total_price", "zone_ids", "zone_section_ids", "price", "layout", "decoration", "area", "metro", "status" ].reduce(function(e, n) {
                        return t[n] && (e[n] = t[n]), e;
                    }, {});
                    _.default.map_buildings(n).then(function(e) {
                        P = e.items.filter(function(t) {
                            return t.location;
                        }), t.drawHouses(P), t.type = y.BUILDINGS, P.length || wx.showModal({
                            title: "提示",
                            content: "该区域内没有符合条件的楼盘",
                            showCancel: !1
                        });
                    });
                },
                clickCallout: function(t) {
                    var e = this;
                    if (this.selected) this.hideSelect(); else {
                        var n = t.detail.markerId;
                        if (this.type === y.ZONES) Z.some(function(t) {
                            var i = t.name, a = t.id;
                            if (n === a) return e.text["城区"] = i, !0;
                        }), this.type = y.BUILDINGS, this.getHouses(n); else {
                            var i = "摇号剩余" === this.status ? "surplus_buildings" : "";
                            wx.navigateTo({
                                url: "/pages/building/main?building_id=".concat(n, "&from=").concat(i)
                            });
                        }
                    }
                },
                clickMap: function(t) {
                    "map" === t.target.id && this.hideSelect();
                },
                changeFilter: function(t) {
                    var e = this;
                    Object.keys(t).forEach(function(n) {
                        e[n] = t[n];
                    }), "map" === this.page_type ? this.type === y.ZONES ? this.getZones() : this.getHouses() : (this.page = 1, 
                    this.getData());
                },
                changeSelect: function(t) {
                    this.selected = t;
                },
                hideSelect: function() {
                    this.changeSelect("");
                },
                changeZone: function(t, e) {
                    this.text["城区"] = "不限" === e ? "" : e, this.hideSelect(), "map" === this.page_type ? t && t != this.zone_ids ? this.getHouses(t) : t || (this.zone_ids = t, 
                    this.getZones()) : (this.zone_ids = t, this.page = 1, this.getData());
                },
                changeMetro: function(t) {
                    this.metro != t && (this.text["地铁"] = t, this.hideSelect(), this.changeFilter({
                        metro: t
                    }));
                },
                changePrice: function(t, e, n) {
                    this.text["价格"] = n, this.hideSelect();
                    var i = "water" === t ? e : "", a = "square" === t ? e : "";
                    this.changeFilter({
                        total_price: i,
                        price: a
                    });
                },
                changeLayout: function(t) {
                    this.text["户型"] = t, this.hideSelect(), this.changeFilter({
                        layout: t
                    });
                },
                changeArea: function(t, e) {
                    this.text["面积"] = e, this.hideSelect(), this.changeFilter({
                        area: t
                    });
                },
                changeDecorate: function(t) {
                    this.text["装修"] = t, this.hideSelect(), this.changeFilter({
                        decoration: t
                    });
                },
                back: function() {
                    this.text["区域"] = "", this.zone_ids = "", this.getZones();
                },
                scaleMap: function() {
                    wx.createMapContext("house-map").includePoints({
                        points: this.markers.map(function(t) {
                            return {
                                latitude: t.latitude,
                                longitude: t.longitude
                            };
                        }),
                        padding: [ 60, 60, 60, 60 ]
                    });
                },
                switchPageType: function() {
                    this.page_type = "map" === this.page_type ? "list" : "map", "map" === this.page_type ? "杭州周边" === this.text["区域"] ? this.getHouses() : this.getZones() : (this.page = 1, 
                    this.getData());
                },
                getData: function() {
                    var t = this;
                    return o(g.default.mark(function e() {
                        var n, i;
                        return g.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.loading = !0, n = [ "total_price", "zone_ids", "zone_section_ids", "price", "layout", "decoration", "area", "metro", "status" ].reduce(function(e, n) {
                                    return t[n] && (e[n] = t[n]), e;
                                }, {}), e.next = 4, m.default.getBuildings(f({
                                    page: t.page
                                }, n));

                              case 4:
                                i = e.sent, t.handleData(i), t.$nextTick(function() {
                                    1 === t.page && wx.pageScrollTo({
                                        scrollTop: 0
                                    });
                                });

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        e.default = C;
    },
    d0a9: function(t, e, n) {
        n.r(e);
        var i = n("9f60"), a = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    d449: function(t, e, n) {},
    f7d7: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    }
}, [ [ "4d1b", "common/runtime", "common/vendor", "pages/packageA/common/vendor" ] ] ]);
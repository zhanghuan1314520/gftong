require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/around_facilities/map/main" ], {
    "0394": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("1102")).default);
        }).call(this, n("543d").createPage);
    },
    1102: function(t, e, n) {
        n.r(e);
        var o = n("b13c"), i = n("fd89");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        n("57f9");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, "1ea0abfa", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "52d4": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            return s(t) || c(t) || a(t) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t, e) {
            if (t) {
                if ("string" == typeof t) return u(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
            }
        }
        function c(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function s(t) {
            if (Array.isArray(t)) return u(t);
        }
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach(function(e) {
                    f(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function f(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function h(t, e, n, o, i, r, a) {
            try {
                var c = t[r](a), s = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(s) : Promise.resolve(s).then(o, i);
        }
        function g(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, i) {
                    function r(t) {
                        h(c, o, i, r, a, "next", t);
                    }
                    function a(t) {
                        h(c, o, i, r, a, "throw", t);
                    }
                    var c = t.apply(e, n);
                    r(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var m = o(n("a34a")), p = o(n("ba1b")), b = n("371c"), y = o(n("c050")), v = (n("ed08"), 
        o(n("02f2"))), _ = n("2d1a"), x = {}, k = {
            ctx: null,
            HouseMarker: null,
            getCtx: function() {
                return this.ctx || (this.ctx = wx.createMapContext("map")), this.ctx;
            },
            reset: function() {
                this.ctx = null, this.HouseMarker = null;
            }
        }, S = {
            color: "#ffffff",
            fontSize: 14,
            bgColor: "#00B800",
            display: "ALWAYS",
            borderRadius: 22.5,
            padding: 8,
            textAlign: "center",
            zIndex: 10
        }, w = {
            color: "#ffffff",
            fontSize: 14,
            bgColor: "#00AD82",
            display: "ALWAYS",
            borderRadius: 22.5,
            padding: 8,
            textAlign: "center"
        }, O = Object.keys(_.TYPES).map(function(t) {
            return {
                key: t,
                name: _.TYPES[t]
            };
        }), P = wx.getSystemInfoSync(), T = (P.windowWidth, P.windowHeight, {
            mixins: [ (0, y.default)("周边配套"), v.default ],
            data: function() {
                return {
                    title: "",
                    house: {},
                    markers: [],
                    category: "metro",
                    tabs: O,
                    audio_url: "",
                    items: [],
                    selected_index: -1,
                    school_tabs: [ "全部", "中学", "小学", "幼儿园" ],
                    school_type: "全部",
                    footer_class: "min"
                };
            },
            onLoad: function(t) {
                var e = this;
                return g(m.default.mark(function n() {
                    var o, i, r;
                    return m.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return o = t.id, i = t.category, e.category = i || "", n.next = 4, p.default.getBuilding(o);

                          case 4:
                            e.house = n.sent, r = e.house.location ? e.house.location.split(",") : [], e.title = "".concat(e.house.name, "-周边配套"), 
                            r.length && (e.house.longitude = Number(r[0]), e.house.latitude = Number(r[1])), 
                            k.HouseMarker = d(d({}, e.house), {}, {
                                iconPath: _.HOUSE_ICON,
                                title: e.house.name,
                                zIndex: 1,
                                width: 22,
                                height: 37,
                                type: "house",
                                callout: d({
                                    content: e.house.name
                                }, S)
                            }), e.getData();

                          case 10:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            },
            onUnload: function() {
                k.reset(), x = {};
            },
            onShareAppMessage: function() {
                var t = this.house.id, e = encodeURIComponent("/pages/building/around_facilities/map/main?id=".concat(t, "&category=").concat(this.category));
                return this.getShareInfo({
                    title: "【".concat(this.title, "】周边配套全览，点击查看详情~"),
                    path: "/pages/building/main?building_id=".concat(t, "&sub_page=").concat(e),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-zbpt.png"
                });
            },
            methods: {
                goGuide: function() {
                    console.error("click guide");
                    var t = this.house, e = t.latitude, n = t.longitude, o = t.name, i = t.address;
                    (0, b.sendCtmEvtLog)("基本信息地图点击"), e && n && wx.openLocation({
                        latitude: Number(e),
                        longitude: Number(n),
                        name: o,
                        address: i
                    });
                },
                resetMarker: function() {
                    if (console.error(this.selected_index), this.selected_index > -1) {
                        var t = this.markers[this.selected_index];
                        this.$set(this.markers, this.selected_index, d(d({}, t), {}, {
                            iconPath: _.DETS_ICONS[_.TYPES[this.category]] || _.DEFAULT_DEST_ICON,
                            callout: d(d(d({}, t.callout), w), {}, {
                                content: t.title
                            })
                        }));
                    }
                },
                getData: function() {
                    var t = this;
                    return g(m.default.mark(function e() {
                        var n, o, i, r, a;
                        return m.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = t.$root.$mp.query.id, o = x[t.category], t.markers = [ k.HouseMarker ], 
                                !o || t.school_type) {
                                    e.next = 7;
                                    break;
                                }
                                t.getMarkers(o), e.next = 23;
                                break;

                              case 7:
                                if ("" !== t.category) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return");

                              case 9:
                                return i = {
                                    page: 1,
                                    category: t.category
                                }, "school" === t.category && (i.subcategory = t.school_type), e.next = 13, p.default.getAcround(n, i);

                              case 13:
                                if (r = e.sent, t.audio_url = r.audio_url, 0 !== (o = r.items).length) {
                                    e.next = 21;
                                    break;
                                }
                                return a = _.TYPES[t.category], wx.showToast({
                                    title: "3公里以内暂无".concat(a),
                                    icon: "none",
                                    duration: 3e3
                                }), t.items = [], e.abrupt("return");

                              case 21:
                                o.forEach(function(t) {
                                    t.distance >= 1e3 ? t.distance = (t.distance / 1e3).toFixed(1) + "km" : t.distance = t.distance + "m";
                                }), x[t.category] = o;

                              case 23:
                                t.getMarkers(o), t.category && t.showList(), t.loading = !1;

                              case 26:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getMarkers: function(t) {
                    var e = this;
                    this.items = t, setTimeout(function() {
                        e.markers = [ k.HouseMarker ].concat(i(t.map(function(t, n) {
                            var o = t.location.split(",").map(function(t) {
                                return Number(t);
                            });
                            return {
                                id: "".concat(t.name, "-").concat(n),
                                title: t.name,
                                longitude: o[0],
                                latitude: o[1],
                                iconPath: _.DETS_ICONS[_.TYPES[e.category]] || _.DEFAULT_DEST_ICON,
                                zIndex: 2,
                                width: 27,
                                height: 32,
                                _callout: d({
                                    content: t.name
                                }, w)
                            };
                        }))), e.getPoints();
                    }, 300);
                },
                goConsultant: function() {
                    var t = this.$root.$mp.query.id;
                    this.$clickLog("立即咨询点击"), wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(t)
                    });
                },
                changeType: function(t) {
                    var e = this, n = t.currentTarget.dataset, o = n.key, i = n.name;
                    this.category = o, this.selected_index = 1e4, setTimeout(function() {
                        e.selected_index = -1;
                    }), this.$clickLog(i), this.getData();
                },
                getPoints: function() {
                    k.getCtx().includePoints({
                        points: this.markers.map(function(t) {
                            return {
                                longitude: t.longitude,
                                latitude: t.latitude
                            };
                        }),
                        padding: [ 30, 30, 30, 30 ]
                    });
                },
                moveLocation: function(t, e) {
                    k.getCtx().moveToLocation({
                        longitude: t,
                        latitude: e
                    });
                },
                clickMarker: function(t) {
                    var e = this, n = t.markerId;
                    this.markers.forEach(function(t, o) {
                        "house" !== t.type && (t.callout ? e.cancelHighlight(t, o) : t.id === n && (e.highlightMarker(t, o), 
                        e.changeSelectIndex(t)));
                    }), this.showList();
                },
                changeSelectIndex: function(t) {
                    var e = this;
                    this.items.some(function(n, o) {
                        if (n.name === t.title) return e.selected_index = o, !0;
                    });
                },
                highlightMarker: function(t, e) {
                    var n = _.TYPES[this.category];
                    t = d(d({}, t), {}, {
                        iconPath: _.DETS_A_ICONS[n],
                        zIndex: 3,
                        callout: d(d({}, t._callout), {}, {
                            bgColor: "#FF5C35"
                        })
                    }), this.$set(this.markers, e, t), this.moveLocation(t.longitude, t.latitude);
                },
                cancelHighlight: function(t, e) {
                    var n = _.TYPES[this.category];
                    t = d(d({}, t), {}, {
                        callout: null,
                        iconPath: _.DETS_ICONS[n],
                        zIndex: 1
                    }), this.$set(this.markers, e, t);
                },
                onSelect: function(t) {
                    var e = this, n = this.items[t].name, o = this.markers;
                    _.TYPES[this.category], o.forEach(function(t, o) {
                        t.title === n ? e.highlightMarker(t, o) : "house" !== t.type && t.callout && e.cancelHighlight(t, o);
                    }), this.selected_index = t;
                },
                toggleMovable: function() {
                    "min" === this.footer_class ? this.showList() : this.hideList();
                },
                changeFooterClass: function(t) {
                    this.footer_class = t, setTimeout(this.getPoints, 600);
                },
                showList: function() {
                    this.changeFooterClass("max");
                },
                hideList: function() {
                    this.changeFooterClass("min");
                },
                selectSchoolType: function(t) {
                    this.school_type = t, this.getData();
                }
            },
            components: {
                AudioControl: function() {
                    n.e("pages/building/around_facilities/map/_audio_control").then(function() {
                        return resolve(n("198e"));
                    }.bind(null, n)).catch(n.oe);
                },
                PoiList: function() {
                    n.e("pages/building/around_facilities/map/_poi_list").then(function() {
                        return resolve(n("a336"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        });
        e.default = T;
    },
    "57f9": function(t, e, n) {
        var o = n("6170");
        n.n(o).a;
    },
    6170: function(t, e, n) {},
    b13c: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    fd89: function(t, e, n) {
        n.r(e);
        var o = n("52d4"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    }
}, [ [ "0394", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
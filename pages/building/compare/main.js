require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/compare/main" ], {
    2268: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    "2cb4": function(t, e, n) {
        n.r(e);
        var i = n("2268"), r = n("6cb6");
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("f3bc");
        var a = n("f0c5"), l = Object(a.a)(r.default, i.b, i.c, !1, null, "76b92a11", null, !1, i.a, void 0);
        e.default = l.exports;
    },
    "6cb6": function(t, e, n) {
        n.r(e);
        var i = n("753d"), r = n.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e.default = r.a;
    },
    "753d": function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e, n, i, r, u, a) {
            try {
                var l = t[u](a), o = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(o) : Promise.resolve(o).then(i, r);
        }
        function u(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(i, u) {
                    function a(t) {
                        r(o, i, u, a, l, "next", t);
                    }
                    function l(t) {
                        r(o, i, u, a, l, "throw", t);
                    }
                    var o = t.apply(e, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = i(n("a34a")), l = n("8f42"), o = n("63ae"), c = i(n("ba1b")), d = [ {
            title: "参考价格",
            handler: function(t) {
                if (t) return t.customized_price && t.customized_price.length ? t.customized_price.join(" ") : t.price_desc_arr && t.price_desc_arr.join(" ");
            },
            type: "strong"
        }, {
            title: "楼盘状态",
            handler: function(t) {
                return t.status;
            }
        }, {
            title: "装修情况",
            handler: function(t) {
                return t.decoration_type;
            }
        }, {
            title: "销售范围",
            handler: function(t) {
                return t.selling_buildings;
            }
        }, {
            title: "户型建面",
            handler: function(t) {
                return t.area_range;
            }
        }, {
            title: "验资金额",
            handler: function(t) {
                return t.capital_verification && "验资金额" === t.capital_verification.title ? t.capital_verification.value : "";
            }
        }, {
            title: "冻结金额",
            handler: function(t) {
                return t.capital_verification && "冻结金额" === t.capital_verification.title ? t.capital_verification.value : "";
            }
        } ], s = [ {
            title: "开发商",
            handler: function(t) {
                return t.details && t.details["开发商"];
            }
        }, {
            title: "楼盘区域",
            handler: function(t) {
                return t.zone;
            }
        }, {
            title: "容积率",
            handler: function(t) {
                return t.details && t.details["容积率"];
            }
        }, {
            title: "总户数",
            handler: function(t) {
                return t.details && t.details["总户数"];
            }
        }, {
            title: "楼栋总数",
            handler: function(t) {
                return t.details && t.details["楼栋总数"];
            }
        }, {
            title: "楼层状况",
            handler: function(t) {
                return t.details && t.details["楼层状况"];
            }
        }, {
            title: "停车位",
            handler: function(t) {
                return t.details && t.details["停车位"];
            }
        }, {
            title: "绿化率",
            handler: function(t) {
                return t.details && t.details["绿化率"];
            }
        }, {
            title: "物业公司",
            handler: function(t) {
                return t.details && t.details["物业公司"];
            }
        }, {
            title: "物业费",
            handler: function(t) {
                return t.details && t.details["物业费"];
            }
        }, {
            title: "占地面积",
            handler: function(t) {
                return t.details && t.details["占地面积"];
            }
        }, {
            title: "建筑面积",
            handler: function(t) {
                return t.details && t.details["建筑面积"];
            }
        }, {
            title: "产权年限",
            handler: function(t) {
                return t.details && t.details["产权年限"];
            }
        }, {
            title: "交房时间",
            handler: function(t) {
                return t.details && t.details["交房时间"];
            }
        } ], f = function(t, e) {
            return t.map(function(t) {
                return {
                    title: t.title,
                    type: t.type,
                    items: e.map(function(e) {
                        return e && t.handler(e) || "-";
                    })
                };
            });
        }, h = {
            components: {
                TopPreviw: function() {
                    n.e("pages/building/compare/_components/_top_preview").then(function() {
                        return resolve(n("5bbc"));
                    }.bind(null, n)).catch(n.oe);
                },
                BaseTable: function() {
                    n.e("pages/building/compare/_components/_base_table").then(function() {
                        return resolve(n("e01f"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomRightShare: function() {
                    n.e("components/views/bottom_right_share").then(function() {
                        return resolve(n("dd4e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    selected_buildings_id: [],
                    open_items: [],
                    base_items: [],
                    facility_items: [],
                    buildings: []
                };
            },
            onShareAppMessage: function() {
                return this.$root.$mp.query.id, this.getShareInfo({
                    title: "这两个楼盘对比结果在这里，点击查看~",
                    path: "/pages/building/compare/main?buildings=".concat(this.selected_buildings_id.join(","))
                });
            },
            computed: {
                is_opened: function() {
                    return this.buildings.some(function(t) {
                        var e = t.status, n = t.current_houses;
                        return "在售" != e && n && n.length;
                    });
                }
            },
            onLoad: function(t) {
                var e = t.buildings ? t.buildings.split(",") : [];
                this.selected_buildings_id = l.selected_buildings && l.selected_buildings.length ? l.selected_buildings.map(function(t) {
                    return t.building_id;
                }) : e, this.getData();
            },
            methods: {
                getData: function() {
                    var t = this;
                    return u(a.default.mark(function e() {
                        var n, i, r;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Promise.all(t.selected_buildings_id.map(function(t) {
                                    return c.default.getBuilding(t);
                                }));

                              case 2:
                                return (n = e.sent).forEach(function(t) {
                                    t.building_id = t.id, t.view_count = (0, o.handleViewCount)(t.view_count), t.cover_photo_url = t.photos_urls && t.photos_urls.length ? t.photos_urls[0] : "";
                                }), t.buildings = n, i = n.map(function(t) {
                                    var e = t.current_houses, n = t.status;
                                    return e && e.length ? (e[0].status = n, e[0]) : {};
                                }), t.open_items = f(d, i), t.base_items = f(s, n), e.next = 10, Promise.all(t.selected_buildings_id.map(function(t) {
                                    return c.default.getFacilityQuantity(t);
                                }));

                              case 10:
                                (r = e.sent) && r.length && (t.facility_items = Object.keys(r[0]).map(function(t) {
                                    return {
                                        title: t,
                                        items: r.map(function(e) {
                                            return e[t];
                                        }) || "-"
                                    };
                                }).concat([ {
                                    title: "更多",
                                    type: "detail",
                                    items: t.selected_buildings_id
                                } ]));

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        e.default = h;
    },
    a8f9: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("2cb4")).default);
        }).call(this, n("543d").createPage);
    },
    b694: function(t, e, n) {},
    f3bc: function(t, e, n) {
        var i = n("b694");
        n.n(i).a;
    }
}, [ [ "a8f9", "common/runtime", "common/vendor" ] ] ]);
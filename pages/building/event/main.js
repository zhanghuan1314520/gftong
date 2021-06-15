require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/event/main" ], {
    "0081": function(t, e, n) {
        n.r(e);
        var i = n("4ac0"), o = n("5db8");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("054a");
        var u = n("f0c5"), a = Object(u.a)(o.default, i.b, i.c, !1, null, "a0a3a38e", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    "054a": function(t, e, n) {
        var i = n("acf8");
        n.n(i).a;
    },
    "2dec": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("0081")).default);
        }).call(this, n("543d").createPage);
    },
    "4ac0": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "5db8": function(t, e, n) {
        n.r(e);
        var i = n("9461"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    9461: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, n, i, o, r, u) {
            try {
                var a = t[r](u), c = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(c) : Promise.resolve(c).then(i, o);
        }
        function r(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(i, r) {
                    function u(t) {
                        o(c, i, r, u, a, "next", t);
                    }
                    function a(t) {
                        o(c, i, r, u, a, "throw", t);
                    }
                    var c = t.apply(e, n);
                    u(void 0);
                });
            };
        }
        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function a(t, e, n) {
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
        var c = i(n("a34a")), s = n("2f62"), f = i(n("8e44")), l = i(n("ba1b")), d = i(n("31e7")), p = i(n("d1fa")), h = i(n("327a")), g = n("db49"), b = {
            mixins: [ h.default, p.default ],
            data: function() {
                return {
                    customer_service_info: {},
                    tabs: [],
                    is_consultant: !1,
                    building_event_author: !1,
                    title: "",
                    type: "全部",
                    house: {},
                    is_building_consultant: !1,
                    tip_content: ""
                };
            },
            computed: function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        a(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, (0, s.mapState)([ "showVideo" ])),
            onLoad: function() {
                this.getBuilding(), this.get_tip_config();
            },
            onShow: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query.building_id;
                return this.getShareInfo({
                    title: "【".concat(this.house.name, "】有了最新动态，分享给您不错过重要信息~"),
                    path: this.getSharePath("/pages/building/event/main?building_id=".concat(t))
                });
            },
            methods: {
                get_tip_config: function() {
                    var t = this;
                    return r(c.default.mark(function e() {
                        var n, i;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, d.default.getDisclaimerConfig();

                              case 2:
                                n = e.sent, i = n.event_tips, t.tip_content = i;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getBuilding: function() {
                    var t = this, e = this.$root.$mp.query.building_id;
                    f.default.getBuilding(e).then(function(e) {
                        t.title = e.name, t.house = e;
                    });
                },
                getData: function() {
                    var t = this, e = this.$root.$mp.query.building_id;
                    this.loading = !0, l.default.getEvent(e, {
                        category: this.type,
                        page: this.page,
                        per: g.DEFAULT_PER
                    }).then(function(n) {
                        t.customer_service_info = n.customer_service_info, t.handleData(n), t.is_consultant = n.is_consultant, 
                        t.building_event_author = n.building_event_author, n.is_consultant && f.default.getMyConsultant().then(function(n) {
                            t.is_building_consultant = n.buildings.map(function(t) {
                                return t.id;
                            }).indexOf(Number(e)) > -1;
                        }), t.tabs = Object.keys(n.dashboard).map(function(t) {
                            var e = n.dashboard[t];
                            return {
                                key: t,
                                name: e ? "".concat(t, "(").concat(e, ")") : t
                            };
                        }), wx.stopPullDownRefresh();
                    });
                },
                changeType: function(t) {
                    this.type = t, this.page = 1, this.getData();
                }
            },
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                },
                EventTip: function() {
                    n.e("pages/building/event/_tip").then(function() {
                        return resolve(n("67b9"));
                    }.bind(null, n)).catch(n.oe);
                },
                EventItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/event/_item") ]).then(function() {
                        return resolve(n("74c3"));
                    }.bind(null, n)).catch(n.oe);
                },
                EventFooter: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/common/vendor"), n.e("pages/building/event/_footer") ]).then(function() {
                        return resolve(n("f13d"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = b;
    },
    acf8: function(t, e, n) {}
}, [ [ "2dec", "common/runtime", "common/vendor" ] ] ]);
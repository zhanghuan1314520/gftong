require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/brands/main" ], {
    1116: function(e, t, n) {},
    "49ec": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("a9e7")).default);
        }).call(this, n("543d").createPage);
    },
    "5ac1": function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t, n, o, a, r, c) {
            try {
                var i = e[r](c), s = i.value;
            } catch (e) {
                return void n(e);
            }
            i.done ? t(s) : Promise.resolve(s).then(o, a);
        }
        function r(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    function c(e) {
                        a(s, o, r, c, i, "next", e);
                    }
                    function i(e) {
                        a(s, o, r, c, i, "throw", e);
                    }
                    var s = e.apply(t, n);
                    c(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = o(n("a34a")), i = n("e020"), s = o(n("6115")), u = o(n("31e7")), f = (o(n("80d6")), 
        n("63ae")), l = wx.getSystemInfoSync(), d = l.windowWidth / 750, p = 152 * d, b = -(l.windowHeight - p - 5 * d), v = {
            tabs_observer: "",
            observer_map: {}
        }, h = function(e) {
            return new Promise(function(t) {
                if (wx.createSelectorQuery) {
                    var n = wx.createSelectorQuery();
                    n.selectAll(e).boundingClientRect(), n.selectViewport().scrollOffset(), n.exec(function(e) {
                        t({
                            top: e[0][0] ? e[0][0].top : 1,
                            bottom: e[0][0] ? e[0][0].bottom : 1,
                            scrollTop: e[1].scrollTop
                        });
                    });
                }
            });
        }, m = {
            data: function() {
                return {
                    tabs: i.Tabs_TYPS,
                    show_pop_box: !1,
                    selectTab: 0,
                    tabs_fixed_top: !1,
                    tips: "",
                    rules: {},
                    scrolling: !1
                };
            },
            components: {
                Tabs: function() {
                    n.e("pages/activity_a/brands/_components/_tabs").then(function() {
                        return resolve(n("7a4b"));
                    }.bind(null, n)).catch(n.oe);
                },
                Item: function() {
                    n.e("pages/activity_a/brands/_components/_item").then(function() {
                        return resolve(n("07e3"));
                    }.bind(null, n)).catch(n.oe);
                },
                popBox: function() {
                    n.e("pages/activity_a/brands/_components/_pop_box").then(function() {
                        return resolve(n("e590"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            destory: function() {
                this.cancelTask();
            },
            onLoad: function() {
                this.getMsg(), this.getData();
            },
            onReady: function() {
                var e = this.$root.$mp.query.sub_page;
                e && wx.navigateTo({
                    url: decodeURIComponent(e)
                });
            },
            onShareAppMessage: function() {
                var e = encodeURIComponent("/pages/activity_a/brands/main");
                return this.getShareInfo({
                    title: "2020 杭州购房通房产年度热榜重磅来袭！点击立即查看~",
                    path: "/pages/index/main?sub_page=".concat(e),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/share-img/dev-activity.png"
                });
            },
            methods: {
                cancelTask: function() {
                    var e = v.tabs_observer, t = v.observer_map;
                    e.disconnect(), Object.keys(t).forEach(function(e) {
                        t[e] && t[e].disconnect();
                    });
                },
                tabsListener: function() {
                    var e = this;
                    v.tabs_observer = wx.createIntersectionObserver().relativeToViewport({
                        bottom: 0
                    }), v.tabs_observer.observe(".activity-time", function(t) {
                        e.tabs_fixed_top = 0 === t.intersectionRatio;
                    });
                },
                scrollListener: function() {
                    var e = this;
                    this.$nextTick(function() {
                        e.tabs.forEach(function(t) {
                            var n = t.index, o = t.type;
                            e.observeTopModuleTab(n, o);
                        });
                    });
                },
                observeTopModuleTab: function(e, t) {
                    var n = this, o = wx.createIntersectionObserver().relativeToViewport({
                        bottom: b
                    });
                    v.observer_map[t] = o, o.observe(".".concat(t), function(o) {
                        if (!n.scrolling) {
                            var a = o.boundingClientRect.top, r = o.intersectionRect.height;
                            (a > 0 || "forward" === t && r > 0) && (n.selectTab = e);
                        }
                    });
                },
                getMsg: function() {
                    var e = this;
                    return r(c.default.mark(function t() {
                        var n, o, a;
                        return c.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.next = 3, u.default.getBrands();

                              case 3:
                                n = t.sent, o = n.tips, a = n.rules, e.tips = o, e.rules = a, t.next = 13;
                                break;

                              case 10:
                                t.prev = 10, t.t0 = t.catch(0), console.error(t.t0);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 10 ] ]);
                    }))();
                },
                getData: function() {
                    var e = this;
                    return r(c.default.mark(function t() {
                        var n, o, a, r;
                        return c.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = 0;

                              case 1:
                                if (!(n < e.tabs.length)) {
                                    t.next = 11;
                                    break;
                                }
                                return o = e.tabs[n], a = {
                                    thematic: "".concat(o.first).concat(o.sec)
                                }, t.next = 6, s.default.getThematicBuildings(a);

                              case 6:
                                r = t.sent, o.list_items = r.items.map(f.mapHouseItem);

                              case 8:
                                n++, t.next = 1;
                                break;

                              case 11:
                                e.scrollListener(), e.tabsListener();

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                hide: function() {
                    this.show_pop_box = !1;
                },
                tapRules: function() {
                    this.show_pop_box = !0;
                },
                changeTab: function(e) {
                    var t = this;
                    if (!this.scrolling) {
                        this.selectTab = e;
                        var n = ".".concat(this.tabs[e].type);
                        h(n).then(function(e) {
                            if (e) {
                                t.scrolling = !0;
                                var n = e.top, o = e.scrollTop;
                                wx.pageScrollTo({
                                    scrollTop: n + o - p,
                                    duration: 300,
                                    success: function() {
                                        setTimeout(function() {
                                            t.scrolling = !1;
                                        }, 400);
                                    }
                                });
                            }
                        });
                    }
                }
            }
        };
        t.default = m;
    },
    "79d8": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    a9e7: function(e, t, n) {
        n.r(t);
        var o = n("79d8"), a = n("d287");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("b129");
        var c = n("f0c5"), i = Object(c.a)(a.default, o.b, o.c, !1, null, "56c0acba", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    b129: function(e, t, n) {
        var o = n("1116");
        n.n(o).a;
    },
    d287: function(e, t, n) {
        n.r(t);
        var o = n("5ac1"), a = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    }
}, [ [ "49ec", "common/runtime", "common/vendor", "pages/activity_a/common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/vr/main" ], {
    "3aa8": function(e, t, n) {
        n.r(t);
        var o = n("d4e0"), i = n("b5a0");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("aea4");
        var c = n("f0c5"), r = Object(c.a)(i.default, o.b, o.c, !1, null, "469e3c4b", null, !1, o.a, void 0);
        t.default = r.exports;
    },
    4312: function(e, t, n) {},
    "5b27": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("3aa8")).default);
        }).call(this, n("543d").createPage);
    },
    aea4: function(e, t, n) {
        var o = n("4312");
        n.n(o).a;
    },
    b5a0: function(e, t, n) {
        n.r(t);
        var o = n("bed9"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    bed9: function(e, t, n) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("ba1b")), a = o(n("327a")), c = n("63ae"), r = o(n("d408")), u = function(e) {
                return new Promise(function(t) {
                    if (wx.createSelectorQuery) {
                        var n = wx.createSelectorQuery();
                        n.select(e).boundingClientRect(), n.selectViewport().scrollOffset(), n.exec(function(e) {
                            t({
                                top: e[0] ? e[0].top : 0,
                                scrollTop: e[1].scrollTop,
                                height: e[0].height
                            });
                        });
                    }
                });
            }, l = (wx.getSystemInfoSync().windowHeight, {
                mixins: [ a.default, r.default ],
                components: {
                    TopRightShare: function() {
                        n.e("components/views/top_right_share").then(function() {
                            return resolve(n("73b4"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    HouseItem: function() {
                        Promise.all([ n.e("common/vendor"), n.e("components/business/house_item") ]).then(function() {
                            return resolve(n("ae38"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    TopFilter: function() {
                        n.e("components/buildings_top_filter/index").then(function() {
                            return resolve(n("71eb"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    EmptyBox: function() {
                        n.e("components/views/empty_box").then(function() {
                            return resolve(n("8c0b"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        filter_tabs: [ "区域", "价格", "面积", "装修" ],
                        decoration: "",
                        zone_ids: "",
                        area: "",
                        total_price: "",
                        price: "",
                        layout: "",
                        metro: "",
                        feature: "VR视频",
                        scroll_top: 0
                    };
                },
                watch: {
                    filter_show: function(e, t) {
                        var n = this;
                        e && u(".top").then(function(e) {
                            console.log(e), e.scrollTop < e.height && n.page2top();
                        });
                    }
                },
                onShareAppMessage: function() {
                    var e = {
                        title: "VR售楼部，宅家也能看新房，点击查看~",
                        path: "/pages/activity_a/vr/main",
                        imageUrl: "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-vr.png"
                    };
                    return this.getShareInfo(e);
                },
                onLoad: function() {
                    var e = this;
                    u(".top").then(function(t) {
                        e.scroll_top = t.height;
                    }), this.getData();
                },
                onPageScroll: function() {
                    if (this.filter_show) return !1;
                },
                methods: {
                    getData: function() {
                        var e = this, t = {
                            page: this.page
                        };
                        [ "decoration", "zone_ids", "area", "total_price", "price", "metro", "feature" ].forEach(function(n) {
                            e[n] && (t[n] = e[n]);
                        }), i.default.getBuildings(t).then(function(t) {
                            e.handleData(t, {
                                handleItem: c.mapHouseItem
                            }), e.$nextTick(function() {
                                e.page > 1 || u(".top").then(function(t) {
                                    console.log(t), t.scrollTop > t.height && e.page2top();
                                });
                            });
                        });
                    },
                    tapVr: function(e) {
                        var t = this.items[e], n = t.building_id, o = t.name;
                        console.error(this.items[e], n, o), wx.navigateTo({
                            url: "/pages/building/vr/main?title=".concat(o, "&building_id=").concat(n)
                        });
                    },
                    changeFilter: function(e) {
                        var t = this;
                        Object.keys(e).forEach(function(n) {
                            t[n] = e[n];
                        }), this.page = 1, this.getData();
                    },
                    page2top: function() {
                        e.pageScrollTo({
                            scrollTop: this.scroll_top
                        });
                    }
                }
            });
            t.default = l;
        }).call(this, n("543d").default);
    },
    d4e0: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    }
}, [ [ "5b27", "common/runtime", "common/vendor" ] ] ]);
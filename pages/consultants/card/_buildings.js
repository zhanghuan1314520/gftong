(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consultants/card/_buildings" ], {
    "0a5f": function(n, i, t) {
        var a = t("1210");
        t.n(a).a;
    },
    1210: function(n, i, t) {},
    "3ce4": function(n, i, t) {
        i.a = function(n) {
            n.options.wxsCallMethods || (n.options.wxsCallMethods = []);
        };
    },
    "422c": function(n, i, t) {
        t.r(i);
        var a = t("e5f03"), e = t("7c4f");
        for (var o in e) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(i, n, function() {
                return e[n];
            });
        }(o);
        t("0a5f");
        var c = t("f0c5"), u = t("3ce4"), l = t("555f"), r = Object(c.a)(e.default, a.b, a.c, !1, null, "94c67452", null, !1, a.a, void 0);
        "function" == typeof u.a && Object(u.a)(r), "function" == typeof l.a && Object(l.a)(r), 
        i.default = r.exports;
    },
    "555f": function(n, i, t) {
        i.a = function(n) {
            n.options.wxsCallMethods || (n.options.wxsCallMethods = []);
        };
    },
    7841: function(n, i, t) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var a = {
            props: {
                buildings: {
                    type: Array
                }
            },
            components: {
                HouseItem: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/business/house_item") ]).then(function() {
                        return resolve(t("ae38"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            computed: {
                paginations: function() {
                    return this.buildings.map(function(n, i) {
                        return i;
                    });
                },
                tabs: function() {
                    if (!this.buildings.length) return [];
                    var n = this.buildings[this.current], i = n.name, t = n.vr_panorama_resource, a = (n.vr_resource, 
                    n.building_id), e = n.activities, o = t ? t.vr_panorama_url : "", c = "/pages/building/web_720/main?building_id=".concat(a || "", "&title=").concat(i, "&link=").concat(o), u = "building_id=".concat(a);
                    return [ {
                        name: "航拍看房",
                        icon: "web-720",
                        show: e && e.indexOf("vr_panorama") > -1,
                        link: "".concat(c, "&detailParam=").concat(encodeURIComponent(u))
                    }, {
                        name: "VR看房",
                        icon: "vr",
                        show: e && e.indexOf("vr") > -1,
                        link: "/pages/building/vr/main?building_id=".concat(a, "&title=").concat(i)
                    }, {
                        name: "楼盘总平",
                        icon: "planar",
                        show: e && e.indexOf("planar_graph") > -1,
                        link: "/pages/building/planar_graph/main?building_id=".concat(a)
                    }, {
                        name: "日照模拟",
                        icon: "sunlight",
                        show: e && e.indexOf("sunlight") > -1,
                        link: "/pages/building/sunlight/main?building_id=".concat(a, "&title=").concat(i)
                    }, {
                        name: "户型图",
                        icon: "layout",
                        show: e && e.indexOf("layout_image") > -1,
                        link: "/pages/building/img_preview/main?type=layout&title=".concat(i, "&building_id=").concat(a)
                    }, {
                        name: "周边配套",
                        icon: "map",
                        show: e && e.indexOf("around_facility") > -1,
                        link: "/pages/building/around_facilities/map/main?id=".concat(a, "&location=").concat(n.location, "&name=").concat(i, "&category=")
                    }, {
                        name: "楼盘动态",
                        icon: "event",
                        show: !0,
                        link: "/pages/building/event/main?building_id=".concat(a)
                    }, {
                        name: "楼盘图片",
                        icon: "pic",
                        show: e && e.indexOf("common_image") > -1,
                        link: "/pages/building/img_preview/main?type=common&title=".concat(i, "&building_id=").concat(a)
                    }, {
                        name: "楼盘详情",
                        icon: "info",
                        show: !0,
                        link: "/pages/building/info/main?type=common&title=".concat(i, "&building_id=").concat(a)
                    } ].filter(function(n) {
                        return n.show;
                    }).slice(0, 5);
                }
            },
            data: function() {
                return {
                    current: 0
                };
            },
            methods: {
                changeBuilding: function(n) {
                    var i = n.detail.current;
                    this.current = i;
                },
                openBuilding: function(n) {
                    wx.navigateTo({
                        url: n
                    });
                }
            }
        };
        i.default = a;
    },
    "7c4f": function(n, i, t) {
        t.r(i);
        var a = t("7841"), e = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(i, n, function() {
                return a[n];
            });
        }(o);
        i.default = e.a;
    },
    e5f03: function(n, i, t) {
        t.d(i, "b", function() {
            return a;
        }), t.d(i, "c", function() {
            return e;
        }), t.d(i, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, e = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consultants/card/_buildings-create-component", {
    "pages/consultants/card/_buildings-create-component": function(n, i, t) {
        t("543d").createComponent(t("422c"));
    }
}, [ [ "pages/consultants/card/_buildings-create-component" ] ] ]);
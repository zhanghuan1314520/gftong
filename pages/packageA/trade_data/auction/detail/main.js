require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/trade_data/auction/detail/main" ], {
    "7c1f": function(e, t, n) {
        n.r(t);
        var a = n("c788"), i = n("a80c");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("a0b4");
        var o = n("f0c5"), c = Object(o.a)(i.default, a.b, a.c, !1, null, "1f1d0a40", null, !1, a.a, void 0);
        t.default = c.exports;
    },
    "7d1b": function(e, t, n) {},
    "82ff": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function o(e, t, n) {
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
        var c = a(n("8e44")), u = a(n("f8b6")), d = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/trade_data/pentagram.png",
            width: 38,
            height: 38
        }, s = {
            "出让公告": "",
            "终止": "c",
            "流拍": "b",
            "出让成功": "a"
        }, l = {
            land_address: "宗地位置",
            land_no: "宗地编号",
            sequence_no: "宗地序号",
            zone: "宗地所属区",
            land_usage: "用途",
            trade_time: "出让时间",
            trade_type: "出让方式",
            title: "公告标题",
            notice_date: "公告日期",
            area: "净用地面积",
            area_mu: "净用地面积",
            position_photos_urls: "位置示意图",
            register_end_date: "开始登记日期",
            far: "容积率",
            capacity_building_area: "计容建筑面积",
            hammer_price: "成交楼盘地价",
            starting_price: "起始楼面地价",
            status: "状态",
            buyer: "竞得人",
            business_ratio: "商业占比上限",
            custom_desc: "其他指标"
        }, f = [ "land_address", "land_no", "sequence_no", "zone", "land_usage", "trade_time", "trade_type", "position_photos_urls", "area", "area_mu", "far", "business_ratio", "capacity_building_area", "starting_price", "hammer_price", "max_decorate_price", "max_water_price", "max_avg_price", "buyer", "custom_desc" ], p = {
            components: {
                TopRightShare: function() {
                    n.e("components/views/top_right_share").then(function() {
                        return resolve(n("73b4"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            onShareAppMessage: function() {
                var e = encodeURIComponent("/pages/packageA/trade_data/auction/detail/main?id=".concat(this.id));
                return this.getShareInfo({
                    title: "这里有杭州土拍信息，点击立即查看~",
                    path: "/pages/index/main?sub_page=".concat(e)
                });
            },
            data: function() {
                return {
                    detail: {},
                    infos: f,
                    dts: l,
                    id: "",
                    markers: []
                };
            },
            computed: {
                status_img: function() {
                    var e = this.detail.status;
                    return s[e] ? "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/trade_data/".concat(s[e], "@3x.png") : "";
                }
            },
            onLoad: function(e) {
                this.id = e.id, c.default.init().then(this.getData);
            },
            onPullDownRefresh: function() {
                this.getData();
            },
            methods: {
                openBuilding: function(e) {
                    wx.navigateTo({
                        url: "/pages/building/main?building_id=".concat(e)
                    });
                },
                goLocation: function() {
                    var e = this.markers[0].longitude, t = this.markers[0].latitude;
                    t && e && wx.openLocation({
                        latitude: Number(t),
                        longitude: Number(e),
                        name: this.detail.land_address || this.detail.title
                    });
                },
                getData: function() {
                    var e = this;
                    u.default.getLandTradesDetail(this.id).then(function(t) {
                        if (e.detail = r({}, t), e.detail.location) {
                            var n = e.detail.location.split(",");
                            e.markers = [ r({
                                id: e.detail.id,
                                longitude: n[0],
                                latitude: n[1]
                            }, d) ];
                        }
                        wx.stopPullDownRefresh();
                    });
                },
                preview: function() {
                    wx.previewImage({
                        current: this.detail.position_photos_urls[0],
                        urls: this.detail.position_photos_urls
                    });
                }
            }
        };
        t.default = p;
    },
    "920c": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("7c1f")).default);
        }).call(this, n("543d").createPage);
    },
    a0b4: function(e, t, n) {
        var a = n("7d1b");
        n.n(a).a;
    },
    a80c: function(e, t, n) {
        n.r(t);
        var a = n("82ff"), i = n.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    },
    c788: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    }
}, [ [ "920c", "common/runtime", "common/vendor", "pages/packageA/common/vendor" ] ] ]);
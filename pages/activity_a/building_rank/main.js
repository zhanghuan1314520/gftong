require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/building_rank/main" ], {
    "0676": function(e, n, t) {},
    6560: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = o(t("ba1b")), i = t("63ae"), c = {
            mixins: [ (0, o(t("64e7")).default)({
                page_name: "楼盘排行"
            }) ],
            components: {
                TopRightShare: function() {
                    t.e("components/views/top_right_share").then(function() {
                        return resolve(t("73b4"));
                    }.bind(null, t)).catch(t.oe);
                },
                HouseItem: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/activity_a/building_rank/_house_item") ]).then(function() {
                        return resolve(t("df1e"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    zones: [],
                    items: [],
                    ranking_types: {},
                    types: [ {
                        value: "ln_rate",
                        text: "热门榜"
                    }, {
                        value: "views",
                        text: "人气榜"
                    }, {
                        value: "follows",
                        text: "关注榜"
                    } ],
                    type: "ln_rate",
                    zone: "",
                    select_show: !1
                };
            },
            onShareAppMessage: function() {
                var e = this.zone, n = this.type, t = encodeURIComponent("/pages/activity_a/building_rank/main?zone=".concat(e, "&type=").concat(n)), o = {
                    title: "杭州购房通楼盘排行榜，点击查看哦~",
                    path: "/pages/index/main?sub_page=".concat(t),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/config/share-img/share-ranking.png"
                };
                return this.getShareInfo(o);
            },
            onPageScroll: function() {
                if (this.select_show) return !1;
            },
            onLoad: function() {
                var e = this.$root.$mp.query, n = e.zone, t = e.type;
                this.zone = n || "全城", this.type = t, this.getData();
            },
            methods: {
                getData: function() {
                    var e = this, n = "全城" === this.zone ? "" : this.zone;
                    a.default.getBuildingRanks(this.type, n).then(function(n) {
                        var t = n.zones, o = n.items, a = n.ranking_types;
                        e.zones = [ "全城" ].concat(t), o.forEach(function(e, n) {
                            e.ranking_order = n + 1;
                        }), e.items = o.map(i.mapHouseItem), e.ranking_types = a;
                    });
                },
                changeZone: function(e) {
                    this.zone = e, this.getData();
                },
                changeType: function(e) {
                    this.type = e, this.getData();
                },
                toggleSelect: function() {
                    this.select_show = !this.select_show;
                }
            }
        };
        n.default = c;
    },
    7322: function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "7ec4": function(e, n, t) {
        t.r(n);
        var o = t("6560"), a = t.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        n.default = a.a;
    },
    "8edb": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("cdcb")).default);
        }).call(this, t("543d").createPage);
    },
    cdcb: function(e, n, t) {
        t.r(n);
        var o = t("7322"), a = t("7ec4");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(i);
        t("f3dd");
        var c = t("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, "13be682a", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    f3dd: function(e, n, t) {
        var o = t("0676");
        t.n(o).a;
    }
}, [ [ "8edb", "common/runtime", "common/vendor" ] ] ]);
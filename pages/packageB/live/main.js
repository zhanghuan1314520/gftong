require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/live/main" ], {
    "0aa7": function(e, t, n) {
        n.r(t);
        var a = n("a28b"), i = n("da07");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        n("38737");
        var c = n("f0c5"), u = n("d594"), r = Object(c.a)(i.default, a.b, a.c, !1, null, "23e44984", null, !1, a.a, void 0);
        "function" == typeof u.a && Object(u.a)(r), t.default = r.exports;
    },
    "1cc9": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = a(n("ba1b")), o = a(n("327a"));
        n("371c");
        var c = {
            mixins: [ o.default ],
            components: {
                BottomRightShare: function() {
                    n.e("components/views/bottom_right_share").then(function() {
                        return resolve(n("dd4e"));
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
                    activeTab: 0,
                    tabs: [ {
                        name: "全部",
                        value: "",
                        emptyDesc: "暂时没有直播楼盘"
                    }, {
                        name: "正在直播",
                        value: "直播中",
                        emptyDesc: "暂时没有直播中的楼盘"
                    }, {
                        name: "直播预告",
                        value: "即将直播",
                        emptyDesc: "暂时没有即将直播的楼盘"
                    }, {
                        name: "直播回放",
                        value: "回放",
                        emptyDesc: "暂时没有直播回放的楼盘"
                    } ],
                    desc: "暂时没有直播楼盘",
                    live_status: ""
                };
            },
            onShareAppMessage: function() {
                var e = new Date().getTime(), t = encodeURIComponent("/pages/packageB/live/main"), n = {
                    title: "官方踩盘，直播看好房，点击立即体验~",
                    path: "/pages/index/main?sub_page=".concat(t),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/share-img/live.png?v=".concat(e)
                };
                return this.getShareInfo(n);
            },
            onLoad: function(e) {
                this.getData();
            },
            methods: {
                onTabTap: function(e) {
                    var t = e.currentTarget.dataset, n = t.value, a = t.index;
                    this.activeTab = a, this.live_status = n, n && (this.desc = this.tabs[a].emptyDesc), 
                    this.getData();
                },
                getData: function() {
                    var e = this, t = (this.feature, this.live_status), n = {
                        page: this.page,
                        feature: "直播"
                    };
                    t && (n.live_status = t), i.default.getBuildings(n).then(function(t) {
                        e.handleData(t);
                    });
                },
                goLive: function(e) {
                    var t = e.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t, "&close_share_ticket=1")
                    });
                }
            }
        };
        t.default = c;
    },
    38737: function(e, t, n) {
        var a = n("9523");
        n.n(a).a;
    },
    9523: function(e, t, n) {},
    a28b: function(e, t, n) {
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
    },
    b0f4: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("0aa7")).default);
        }).call(this, n("543d").createPage);
    },
    d594: function(e, t, n) {
        t.a = function(e) {
            e.options.wxsCallMethods || (e.options.wxsCallMethods = []);
        };
    },
    da07: function(e, t, n) {
        n.r(t);
        var a = n("1cc9"), i = n.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t.default = i.a;
    }
}, [ [ "b0f4", "common/runtime", "common/vendor" ] ] ]);
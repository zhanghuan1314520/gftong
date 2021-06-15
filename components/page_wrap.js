(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/page_wrap" ], {
    "23bed": function(e, n, t) {
        t.r(n);
        var o = t("bd76"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = a.a;
    },
    "7ef7": function(e, n, t) {
        var o = t("fdf2");
        t.n(o).a;
    },
    8910: function(e, n, t) {
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
    aaec: function(e, n, t) {
        t.r(n);
        var o = t("8910"), a = t("23bed");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("7ef7");
        var i = t("f0c5"), u = Object(i.a)(a.default, o.b, o.c, !1, null, "395c5a64", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    bd76: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = o(t("44b3")), c = o(t("80d6")), i = t("db49"), u = t("371c"), r = function() {
            var e = getCurrentPages();
            return e[e.length - 1].route;
        }, l = {
            mixins: [ a.default ],
            data: function() {
                return {
                    show_home: !1
                };
            },
            mounted: function(e) {
                c.default.setTitle(this.title, this.show_app_name), this.checkShowHoue();
            },
            beforeDestroy: function() {},
            watch: {
                title: function(e) {
                    c.default.setTitle(e, this.show_app_name);
                }
            },
            methods: {
                checkShowHoue: function() {
                    var e = getCurrentPages(), n = r(), t = i.tabs.indexOf(n) > -1;
                    this.show_home = e.length >= 1 && !t;
                },
                goHome: function(e) {
                    "pages/building/main" === r() && (0, u.sendCtmEvtLog)("楼盘详情-点击返回首页"), (0, u.sendCtmEvtLog)("点击返回首页"), 
                    wx.switchTab({
                        url: "/pages/index/main"
                    });
                }
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                show_app_name: {
                    type: Boolean,
                    default: !0
                },
                className: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                hide_back_home: {
                    type: Boolean,
                    default: !0
                },
                has_own_timeline: Boolean
            },
            components: {
                NetworkTip: function() {
                    t.e("components/views/network_tip").then(function() {
                        return resolve(t("63b3"));
                    }.bind(null, t)).catch(t.oe);
                },
                PathCopy: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/utils/path_copy") ]).then(function() {
                        return resolve(t("1c68"));
                    }.bind(null, t)).catch(t.oe);
                },
                TimelineBillboard: function() {
                    t.e("components/views/timeline_billboard").then(function() {
                        return resolve(t("1774"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = l;
    },
    fdf2: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/page_wrap-create-component", {
    "components/page_wrap-create-component": function(e, n, t) {
        t("543d").createComponent(t("aaec"));
    }
}, [ [ "components/page_wrap-create-component" ] ] ]);
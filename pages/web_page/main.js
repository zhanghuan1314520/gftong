(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/web_page/main" ], {
    "4c4d": function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    c(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function c(e, t, n) {
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
        var a = n("371c"), u = n("a177"), s = o(n("41f4")), f = o(n("b4fd")), l = o(n("8e44")), d = [ "https://realsee.com", "https://mp1.realsee.com", "/building_visit_reservations" ], p = {
            name: "WebPage",
            data: function() {
                return {
                    src: "",
                    title: "",
                    shareShow: "on",
                    fromTimeline: !1
                };
            },
            onLoad: function(e) {
                var t = this;
                this.shareShow = e.shareShow || "on", s.default.token() ? this.setWebViewSrc(e) : l.default.init().then(function() {
                    t.setWebViewSrc(e);
                });
            },
            computed: {
                show_share: function() {
                    var e = this;
                    return !d.some(function(t) {
                        return e.src.indexOf(t) > -1;
                    }) && "on" === this.shareShow;
                }
            },
            onShow: function() {
                var e = this.$root.$mp.query, t = e.type, n = e.building_id, o = e.share_by, i = void 0 === o ? "" : o;
                "custom" === t && a.UserLog.viewCustomBuilding(n), i.indexOf("timeline_") > -1 && (this.fromTimeline = !0);
            },
            onShareAppMessage: function() {
                var e = this.$root.$mp.query, t = e.link, n = e.from, o = e.log_id, i = {
                    title: this.title
                }, c = encodeURIComponent("/pages/web_page/main?title=".concat(this.title, "&link=").concat(t)), a = "/pages/house_circles/main?sub_page=".concat(c);
                if ("headline" === n) a = "/pages/index/main?sub_page=".concat(c), i.share_by_value = "share_by=headline_".concat(o, "_").concat(u.App_User.userInfo.uid); else if ("verify_qualification" === n) a = "/pages/personal_package/verify_qualification/main?sub_page=".concat(c); else if ("building" === n) {
                    var s = this.$root.$mp.query.detailParam;
                    console.error(s), a = "/pages/building/main?".concat(decodeURIComponent(s), "&sub_page=").concat(c);
                }
                return this.getShareInfo(r(r({}, i), {}, {
                    path: a
                }));
            },
            methods: {
                check: function() {
                    f.default.checkUrl(this.src).then(function(e) {
                        e.is_black && wx.switchTab({
                            url: "/pages/index/main"
                        });
                    });
                },
                setWebViewSrc: function(e) {
                    var t = e.link, n = e.title, o = void 0 === n ? "杭州购房通" : n;
                    if (t) {
                        var i = decodeURIComponent(t), r = s.default.token(), c = i.indexOf("?") > -1 ? "".concat(i, "&token=").concat(r) : "".concat(i, "?token=").concat(r);
                        this.src = decodeURIComponent(c), console.log({
                            src: this.src
                        });
                    }
                    this.title = decodeURIComponent(o || ""), this.check();
                },
                errorLoad: function(e) {
                    console.error(e);
                }
            },
            components: {}
        };
        t.default = p;
    },
    "59cd": function(e, t, n) {},
    "7e28": function(e, t, n) {
        var o = n("59cd");
        n.n(o).a;
    },
    "827c": function(e, t, n) {
        n.r(t);
        var o = n("e326"), i = n("a939");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("7e28");
        var c = n("f0c5"), a = Object(c.a)(i.default, o.b, o.c, !1, null, "5b913f1c", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    a939: function(e, t, n) {
        n.r(t);
        var o = n("4c4d"), i = n.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = i.a;
    },
    d2dd: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("827c")).default);
        }).call(this, n("543d").createPage);
    },
    e326: function(e, t, n) {
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
}, [ [ "d2dd", "common/runtime", "common/vendor" ] ] ]);
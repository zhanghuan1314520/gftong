(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/home/popup" ], {
    "13c9": function(e, o, t) {},
    "6b37": function(e, o, t) {
        t.r(o);
        var n = t("8032"), p = t.n(n);
        for (var i in n) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(o, e, function() {
                return n[e];
            });
        }(i);
        o.default = p.a;
    },
    8032: function(e, o, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var p = n(t("41f4")), i = t("ad02"), u = t("63ae"), a = n(t("8e44"));
        t("db49");
        var c = 0, s = {
            props: {
                show: Boolean
            },
            data: function() {
                return {
                    webp: u.enable_webp,
                    loaded: !1,
                    popup: {},
                    popup_time: 3,
                    show_popup: !1
                };
            },
            created: function() {
                this.checkPopup(), this.$watch(function() {
                    return this.show && this.loaded && this.popup_time >= 0;
                }, function(e) {
                    e && (this.show_popup = !0);
                });
            },
            watch: {
                show_popup: function(e, o) {
                    e && !o && this.viewLog();
                }
            },
            beforeDestroy: function() {
                c && clearTimeout(c);
            },
            methods: {
                checkPopup: function() {
                    if (!p.default.popup.get()) {
                        var e, o;
                        if (wx.getEnterOptionsSync) {
                            var t = wx.getEnterOptionsSync();
                            e = t.scene, o = t.query;
                        } else if (getApp().$vm.globalData.appOptions) {
                            var n = getApp().$vm.globalData.appOptions;
                            e = n.scene, o = n.scene;
                        }
                        -1 === [ "1007", "1008", "1014", "1036" ].indexOf(e) && this.getPopup(o);
                    }
                },
                viewLog: function() {
                    var e = this.popup, o = e.id, t = e.position;
                    a.default.interestingEvent({
                        interesting_id: o,
                        event: "view",
                        pos_name: t,
                        pos: 0
                    });
                },
                getPopup: function(e) {
                    var o = this;
                    console.log({
                        query: e
                    });
                    var t = e.maid, n = {};
                    t && (n.maid = t), a.default.getPopup(n).then(function(e) {
                        if (p.default.popup.set(e), e.length) {
                            var t = e[0], n = (0, u.handleBannerHref)(t), i = t.photo_url + "?x-oss-process=image/resize,w_690,h_960/quality,Q_80";
                            u.enable_webp && (i += "/format,webp");
                            var a = {
                                href: n,
                                img: i,
                                id: t.id,
                                position: t.position
                            };
                            o.popup = a, o.popup_time = 3;
                        }
                    });
                },
                loadImg: function() {
                    this.loaded = !0, this.popupCountDown();
                },
                popupCountDown: function() {
                    var e = this;
                    this.popup_time < 0 ? (this.show_popup = !1, c && clearTimeout(c)) : c = setTimeout(function() {
                        e.popup_time--, e.popupCountDown();
                    }, 1500);
                },
                clickPop: function(e) {
                    var o = e.currentTarget.dataset, t = o.id, n = o.href, p = o.position;
                    a.default.interestingEvent({
                        interesting_id: t,
                        event: "click",
                        pos_name: p,
                        pos: 0
                    }), (0, i.checkTabBar)(n) ? wx.switchTab({
                        url: n
                    }) : wx.navigateTo({
                        url: n
                    }), this.closePopup();
                },
                closePopup: function() {
                    this.show_popup = !1;
                }
            }
        };
        o.default = s;
    },
    "9c67": function(e, o, t) {
        t.d(o, "b", function() {
            return n;
        }), t.d(o, "c", function() {
            return p;
        }), t.d(o, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, p = [];
    },
    a59c: function(e, o, t) {
        var n = t("13c9");
        t.n(n).a;
    },
    f24b: function(e, o, t) {
        t.r(o);
        var n = t("9c67"), p = t("6b37");
        for (var i in p) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(o, e, function() {
                return p[e];
            });
        }(i);
        t("a59c");
        var u = t("f0c5"), a = Object(u.a)(p.default, n.b, n.c, !1, null, "4fa3dd5e", null, !1, n.a, void 0);
        o.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/home/popup-create-component", {
    "components/home/popup-create-component": function(e, o, t) {
        t("543d").createComponent(t("f24b"));
    }
}, [ [ "components/home/popup-create-component" ] ] ]);
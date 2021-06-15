(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/home/home_top_tip" ], {
    "00db": function(e, o, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var i = n(t("80d6")), s = n(t("295f")), p = {
            data: function() {
                return {
                    loading: !0,
                    is_ios: !1,
                    wx_version: "",
                    check_version: "6.7.0",
                    tip_setTimeout: null,
                    app_tip: [],
                    app_show: !1,
                    add_tip_show: !0,
                    desktop_tip: [],
                    desktop_show: !1,
                    show_desktop_guide: !1,
                    show_popup: !1,
                    user_guide_show: !1,
                    next_app_show: !1,
                    new_msg_menu_guide: !1
                };
            },
            watch: {
                app_show: function(e) {
                    this.$emit("toggleTip", e);
                }
            },
            onReady: function() {
                var e = this;
                i.default.getSystemInfo().then(function(o) {
                    var t = o.system, n = o.version;
                    e.is_ios = t.indexOf("iOS") > -1, e.wx_version = n, e.getData();
                });
            },
            methods: {
                getData: function() {
                    var e = this;
                    s.default.getTips().then(function(o) {
                        var t, n, i, p;
                        o.forEach(function(o) {
                            switch (o.tip_type) {
                              case "add_to_desktop":
                                e.desktop_tip = o.content, t = o.id;
                                break;

                              case "add_to_myapp":
                                e.app_tip = o.content, n = o.id;
                                break;

                              case "add_to_desktop_guide":
                                e.show_desktop_guide = !0, p = o.id;
                                break;

                              case "homepage_guide":
                                e.user_guide_show = !0, i = o.id;
                                break;

                              case "new_msg_menu_guide":
                                e.new_msg_menu_guide = !0, p = o.id;
                            }
                        }), e.app_tip && e.app_tip.length && e.wx_version > e.check_version ? (e.app_show = !0, 
                        p = n) : !e.is_ios && e.desktop_tip && e.desktop_tip.length && (e.desktop_show = !0, 
                        p = t), e.user_guide_show ? (p = i, e.show_desktop_guide = !1) : e.app_show && e.onTimerAppShow(), 
                        e.loading = !1, e.show_popup = !e.user_guide_show && !e.show_desktop_guide && !e.new_msg_menu_guide, 
                        p && s.default.viewTips(p);
                    });
                },
                onTimerAppShow: function() {
                    var e = this;
                    this.tip_setTimeout = setTimeout(function() {
                        e.app_show = !1;
                    }, 5e3);
                },
                onCloseUserGuide: function() {
                    this.user_guide_show = !1, this.app_show && (this.next_app_show = !0, this.onTimerAppShow());
                },
                onCloseAppTip: function() {
                    this.app_show = !1;
                },
                onCloseDesktopTip: function() {
                    this.desktop_show = !1;
                },
                onCloseGuide: function() {
                    this.show_desktop_guide = !1;
                },
                onShowAddTip: function() {
                    this.add_tip_show = !1, clearTimeout(this.tip_setTimeout);
                },
                closeMessageTip: function() {
                    this.new_msg_menu_guide = !1;
                }
            },
            components: {
                Popup: function() {
                    t.e("components/home/popup").then(function() {
                        return resolve(t("f24b"));
                    }.bind(null, t)).catch(t.oe);
                },
                HomeUserGuide: function() {
                    t.e("components/home/home_user_guide").then(function() {
                        return resolve(t("2927"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        o.default = p;
    },
    "01a8": function(e, o, t) {
        t.r(o);
        var n = t("d3dd4"), i = t("da40");
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(e) {
            t.d(o, e, function() {
                return i[e];
            });
        }(s);
        t("c1f1");
        var p = t("f0c5"), u = Object(p.a)(i.default, n.b, n.c, !1, null, "62ec0454", null, !1, n.a, void 0);
        o.default = u.exports;
    },
    "06a1": function(e, o, t) {},
    c1f1: function(e, o, t) {
        var n = t("06a1");
        t.n(n).a;
    },
    d3dd4: function(e, o, t) {
        t.d(o, "b", function() {
            return n;
        }), t.d(o, "c", function() {
            return i;
        }), t.d(o, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    da40: function(e, o, t) {
        t.r(o);
        var n = t("00db"), i = t.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(e) {
            t.d(o, e, function() {
                return n[e];
            });
        }(s);
        o.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/home/home_top_tip-create-component", {
    "components/home/home_top_tip-create-component": function(e, o, t) {
        t("543d").createComponent(t("01a8"));
    }
}, [ [ "components/home/home_top_tip-create-component" ] ] ]);
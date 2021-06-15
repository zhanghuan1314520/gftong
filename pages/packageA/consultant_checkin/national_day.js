require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/consultant_checkin/national_day" ], {
    "0423": function(n, e, t) {
        var o = t("9f3d");
        t.n(o).a;
    },
    2560: function(n, e, t) {
        t.r(e);
        var o = t("9cf2"), c = t.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = c.a;
    },
    "2fc3": function(n, e, t) {
        t.r(e);
        var o = t("ebf9"), c = t("2560");
        for (var u in c) [ "default" ].indexOf(u) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        t("0423");
        var a = t("f0c5"), i = Object(a.a)(c.default, o.b, o.c, !1, null, "d1a9ec34", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "37dc": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("2fc3")).default);
        }).call(this, t("543d").createPage);
    },
    "9cf2": function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, o(t("80d6"));
        var c = o(t("12bf")), u = o(t("8e44")), a = {
            components: {},
            data: function() {
                return {
                    show_checkin: !1,
                    bonus_score: null,
                    dlgType: "checkin",
                    days: [],
                    loading: !0
                };
            },
            onLoad: function(n) {
                this.getUserInfo();
            },
            computed: {
                can_open_box: function() {
                    return !this.bonus_score;
                }
            },
            methods: {
                hideCheckin: function() {
                    this.show_checkin = !1;
                },
                getUserInfo: function() {
                    var n = this;
                    u.default.getUserInfo().then(function(e) {
                        if (e.is_consultant) return n.getConsultant();
                        throw wx.switchTab({
                            url: "/pages/index/main"
                        }), new Error("您不是职业顾问不能访问该页面");
                    }).then(function(e) {
                        e || n.checkin();
                    }).catch(console.error);
                },
                getConsultant: function() {
                    var n = this;
                    return this.loading = !0, c.default.getNationalDayCheckin().then(function(e) {
                        var t = e.days, o = e.bonus_score, c = e.checkin_today;
                        return n.days = t, n.bonus_score = o, n.loading = !1, c;
                    }).catch(console.error);
                },
                checkin: function() {
                    var n = this;
                    c.default.nationalday_checkin().then(function() {
                        n.getConsultant(), n.show_checkin = !0, n.dlgType = "checkin";
                    });
                },
                openBox: function() {
                    var n = this;
                    this.bonus_score || c.default.nationalday_score_bonuses().then(function(e) {
                        422 !== e.code ? (n.bonus_score = e.score, n.show_checkin = !0, n.dlgType = "openbox") : wx.showToast({
                            title: "连续签到7天可开启宝箱",
                            icon: "none"
                        });
                    });
                }
            }
        };
        e.default = a;
    },
    "9f3d": function(n, e, t) {},
    ebf9: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    }
}, [ [ "37dc", "common/runtime", "common/vendor" ] ] ]);
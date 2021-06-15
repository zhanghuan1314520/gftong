require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/consultant_checkin/main" ], {
    "1b56": function(n, e, t) {
        t.r(e);
        var c = t("a317"), o = t.n(c);
        for (var i in c) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(i);
        e.default = o.a;
    },
    "55f6": function(n, e, t) {
        var c = t("ac40");
        t.n(c).a;
    },
    "89cb": function(n, e, t) {
        t.r(e);
        var c = t("a1ad"), o = t("1b56");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        t("55f6");
        var a = t("f0c5"), s = t("ef33"), r = Object(a.a)(o.default, c.b, c.c, !1, null, "4d34caea", null, !1, c.a, void 0);
        "function" == typeof s.a && Object(s.a)(r), e.default = r.exports;
    },
    a1ad: function(n, e, t) {
        t.d(e, "b", function() {
            return c;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var c = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    a317: function(n, e, t) {
        function c(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function o(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(n);
                e && (c = c.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, c);
            }
            return t;
        }
        function i(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(t), !0).forEach(function(e) {
                    a(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function a(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, c(t("80d6"));
        var s = c(t("12bf")), r = c(t("8e44")), u = {
            components: {},
            data: function() {
                return {
                    last_period_obtained_score: "",
                    show_checkin: !1,
                    checkin_today: !1,
                    checkin_continuous_days: 0,
                    checkin_bonus_score: "",
                    days: [ 1, 2, 3, 4, 5, 6, 7 ],
                    dlgType: "checkin",
                    show_mid_autumn_activity: !1,
                    checkins: [],
                    today_checkin_score: ""
                };
            },
            mounted: function(n) {
                this.getUserInfo();
            },
            computed: {
                is7days: function() {
                    return 7 === this.checkin_continuous_days;
                },
                tip: function() {
                    return this.is7days ? "可开启宝箱啦~!" : "如果断签需要重新签到哦~";
                },
                house_img: function() {
                    return "checkin" === this.dlgType ? "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/personal_center/consultant_checkin/house-i.png" : "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/personal_center/consultant_checkin/gift.png";
                }
            },
            methods: {
                hideCheckin: function() {
                    this.show_checkin = !1;
                },
                getUserInfo: function() {
                    var n = this;
                    r.default.getUserInfo().then(function(e) {
                        n.show_mid_autumn_activity = e.activity_menus.indexOf("activity_b") > -1, e.is_consultant && n.getConsultant(), 
                        n.getConsultantCheckins();
                    });
                },
                getConsultant: function() {
                    var n = this;
                    r.default.getMyConsultant().then(function(e) {
                        var t = e.checkin_today, c = e.checkin_continuous_days, o = e.checkin_bonus_score, i = e.last_period_obtained_score;
                        n.last_period_obtained_score = i, n.checkin_today = t, n.checkin_continuous_days = c, 
                        n.checkin_bonus_score = o, t || n.checkin(t);
                    });
                },
                getConsultantCheckins: function() {
                    var n = this;
                    r.default.getConsultantCheckins().then(function(e) {
                        n.today_checkin_score = e.today_checkin_score, n.checkins = e.items.map(function(n) {
                            if (n.date) {
                                var e = new Date(n.date), t = e.getMonth() + 1, c = e.getDate();
                                return i(i({}, n), {}, {
                                    date: "".concat(t, ".").concat(c)
                                });
                            }
                            return n;
                        });
                    });
                },
                ischeckin: function(n) {
                    "今天" !== n || this.checkin_today || this.checkin();
                },
                checkin: function() {
                    var n = this, e = this.$root.$mp.query.share_by, t = void 0 === e ? "" : e;
                    s.default.checkin({
                        inviter_uid: t
                    }).then(function(e) {
                        var t = e.score;
                        n.today_checkin_score = t, n.getConsultant(), n.show_checkin = !0, n.dlgType = "checkin", 
                        n.getConsultantCheckins();
                    });
                },
                openBox: function() {
                    var n = this;
                    this.is7days && !this.checkin_bonus_score && s.default.score_bonuses().then(function(e) {
                        422 !== e.code ? (n.checkin_bonus_score = e.score, n.show_checkin = !0, n.dlgType = "openbox") : wx.showToast({
                            title: "连续签到7天可开启宝箱",
                            icon: "none"
                        });
                    });
                }
            }
        };
        e.default = u;
    },
    ac40: function(n, e, t) {},
    ef33: function(n, e, t) {
        e.a = function(n) {
            n.options.wxsCallMethods || (n.options.wxsCallMethods = []);
        };
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageA/consultant_checkin/main-create-component", {
    "pages/packageA/consultant_checkin/main-create-component": function(n, e, t) {
        t("543d").createComponent(t("89cb"));
    }
}, [ [ "pages/packageA/consultant_checkin/main-create-component" ] ] ]);
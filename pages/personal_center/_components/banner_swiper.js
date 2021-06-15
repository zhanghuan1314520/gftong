(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_center/_components/banner_swiper" ], {
    "0dae": function(n, e, t) {
        t.r(e);
        var i = t("4f82"), s = t("3b7d");
        for (var a in s) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return s[n];
            });
        }(a);
        t("b104");
        var o = t("f0c5"), r = Object(o.a)(s.default, i.b, i.c, !1, null, "1ef358ce", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "3b7d": function(n, e, t) {
        t.r(e);
        var i = t("9398"), s = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(a);
        e.default = s.a;
    },
    "4f82": function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return s;
        }), t.d(e, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, s = [];
    },
    9398: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            mixins: [],
            props: {
                user: {
                    type: Object
                },
                consultant: {
                    type: Object
                }
            },
            computed: {
                swiper_count: function() {
                    return [ this.show_consultant_activity, !this.bound_official_weixin, !this.bound_consultant_home_weixin, this.show_lq_banner, this.show_activity_aaa_banner, this.show_consultant_get_new_user ].filter(function(n) {
                        return n;
                    }).length;
                },
                show_swiper: function() {
                    return Boolean(this.swiper_count);
                },
                show_swiper_dots: function() {
                    return this.swiper_count > 1;
                },
                show_lq_banner: function() {
                    return !this.user.is_consultant;
                },
                bound_consultant_home_weixin: function() {
                    return !!(this.user.subscribed_weixins && this.user.subscribed_weixins.indexOf("杭州置业顾问之家") > -1);
                },
                bound_official_weixin: function() {
                    return !!(this.user.subscribed_weixins && this.user.subscribed_weixins.indexOf("杭州购房通") > -1);
                },
                show_activity_aaa_banner: function() {
                    return this.user.activity_menus && this.user.activity_menus.indexOf("activity_aaa-个人中心banner") > -1;
                },
                activity_aaa_name: function() {
                    return this.user.is_consultant ? "个人中心banner-置业顾问年报" : "个人中心banner-普通用户年报";
                },
                show_consultant_activity: function() {
                    var n = this.user, e = n.is_consultant, t = n.activity_menus;
                    return e && t && t.indexOf("activity_aaa-置业顾问个人中心banner") > -1;
                },
                show_consultant_get_new_user: function() {
                    return this.user.is_consultant && !this.show_activity_aaa_banner;
                }
            },
            beforeDestroy: function() {},
            methods: {
                sendLog: function(n) {
                    this.$emit("sendLog", n);
                }
            }
        };
        e.default = i;
    },
    b104: function(n, e, t) {
        var i = t("cada");
        t.n(i).a;
    },
    cada: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_center/_components/banner_swiper-create-component", {
    "pages/personal_center/_components/banner_swiper-create-component": function(n, e, t) {
        t("543d").createComponent(t("0dae"));
    }
}, [ [ "pages/personal_center/_components/banner_swiper-create-component" ] ] ]);
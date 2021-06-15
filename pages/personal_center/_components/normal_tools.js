(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_center/_components/normal_tools" ], {
    "2b8e": function(n, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                PersonalSection: function() {
                    a.e("pages/personal_center/_components/personal_section").then(function() {
                        return resolve(a("03a1"));
                    }.bind(null, a)).catch(a.oe);
                }
            },
            props: {
                user: {
                    type: Object
                },
                consultant: {
                    type: Object
                }
            },
            computed: {
                tabs: function() {
                    this.consultant;
                    var n = this.user, e = {
                        icon: "like",
                        name: "关注楼盘",
                        url: "/pages/personal_package/favourite/main"
                    }, a = {
                        icon: "material",
                        name: "购房指南",
                        url: "/pages/personal_package/material/main",
                        label: "买房必看"
                    }, o = {
                        icon: "service",
                        name: n.is_consultant ? "我的专属客服" : "购房群",
                        url: "/pages/discuess_group/main"
                    }, t = {
                        icon: "household",
                        name: "落户查询",
                        url: "/pages/check_condition/main?verify_type=杭州落户查询"
                    }, r = {
                        icon: "consultant_apply",
                        button: !0,
                        name: "置业顾问入驻",
                        open_type: "getUserInfo",
                        tip: "需要认证用户信息才可以入驻置业顾问",
                        url: "/pages/personal_package/add_consultant/main"
                    }, i = {
                        icon: "prepayment",
                        name: "提前还款计算",
                        url: "/pages/packageB/prepayment_calc/main"
                    }, c = {
                        icon: "taxes",
                        name: "税费计算",
                        url: "/pages/personal_package/taxation/main"
                    }, l = {
                        icon: "provident_fund",
                        name: "算公积金额度",
                        url: "/pages/packageB/provident_fund/main"
                    }, p = {
                        icon: "nohouse",
                        name: "无房资格查询",
                        url: "/pages/check_condition/main?verify_type=杭州无房资格查询"
                    }, s = {
                        icon: "integral_simulation",
                        name: "居住证积分",
                        url: "/pages/packageB/integral_simulation/main"
                    }, u = {
                        icon: "inherit",
                        name: "房屋继承查询",
                        url: "/pages/personal_package/inherit/main"
                    }, m = {
                        icon: "footprint_icon",
                        name: "楼盘足迹",
                        url: "/pages/packageA/footprint/main"
                    }, f = {
                        icon: "find_building",
                        name: "我的找房卡",
                        url: "/pages/packageA/whole_buildings_result/main?from=personal_center"
                    }, _ = {
                        icon: "dora",
                        name: "房屋权属查询",
                        url: "/pages/personal_package/dora/main"
                    };
                    return n.is_consultant ? [ a, e, m, t, p, s, c, i, l, u, _, f ].filter(function(n) {
                        return !n.hide;
                    }) : [ e, a, o, m, t, p, s, u, _, c, i, l, f, r ].filter(function(n) {
                        return !n.hide;
                    });
                }
            }
        };
        e.default = o;
    },
    "69a9": function(n, e, a) {
        a.r(e);
        var o = a("be31"), t = a("f6d0");
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(r);
        var i = a("f0c5"), c = Object(i.a)(t.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    be31: function(n, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return t;
        }), a.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, t = [];
    },
    f6d0: function(n, e, a) {
        a.r(e);
        var o = a("2b8e"), t = a.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = t.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_center/_components/normal_tools-create-component", {
    "pages/personal_center/_components/normal_tools-create-component": function(n, e, a) {
        a("543d").createComponent(a("69a9"));
    }
}, [ [ "pages/personal_center/_components/normal_tools-create-component" ] ] ]);
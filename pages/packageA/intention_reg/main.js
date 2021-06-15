require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/intention_reg/main" ], {
    "11c5": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("6eda")).default);
        }).call(this, t("543d").createPage);
    },
    "2a2f": function(n, e, t) {
        t.r(e);
        var a = t("e0e9"), c = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        e.default = c.a;
    },
    "6eda": function(n, e, t) {
        t.r(e);
        var a = t("c763"), c = t("2a2f");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(o);
        t("983c");
        var i = t("f0c5"), u = Object(i.a)(c.default, a.b, a.c, !1, null, "1060d08e", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "983c": function(n, e, t) {
        var a = t("df4a"), c = t.n(a);
        c.a;
    },
    c763: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    df4a: function(n, e, t) {},
    e0e9: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = "/pages/personal_package/pi/main?img=", c = {
            onShareAppMessage: function() {
                var n = encodeURIComponent("/pages/packageA/intention_reg/main"), e = {
                    title: "公积金政策",
                    path: "/pages/index/main?sub_page=".concat(n)
                };
                return this.getShareInfo(e);
            },
            components: {},
            data: function() {
                return {
                    list: [ {
                        title: "公积金贷款流程",
                        url: "".concat(a, "gjj_a&title=公积金贷款流程")
                    }, {
                        title: "公积金贷款额度计算",
                        url: "".concat(a, "gjj_b&title=公积金贷款额度计算")
                    }, {
                        title: "公积金贷款材料",
                        url: "".concat(a, "gjj_c&title=公积金贷款材料")
                    } ]
                };
            },
            methods: {}
        };
        e.default = c;
    }
}, [ [ "11c5", "common/runtime", "common/vendor" ] ] ]);
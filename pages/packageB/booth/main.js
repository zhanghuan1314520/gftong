require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/booth/main" ], {
    "0515": function(e, n, t) {
        t.r(n);
        var i = t("1522"), a = t.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        n.default = a.a;
    },
    1522: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            mixins: [],
            components: {},
            data: function() {
                return {
                    type: 0,
                    tabs: [ {
                        name: "首页展位",
                        key: 0
                    }, {
                        name: "资格查询展位",
                        key: 1
                    }, {
                        name: "落户查询展位",
                        key: 2
                    }, {
                        name: "购房指南展位",
                        key: 3
                    }, {
                        name: "房贷计算展位",
                        key: 4
                    }, {
                        name: "税费计算展位",
                        key: 5
                    } ],
                    image: {
                        name: "index",
                        size: {
                            width: "686rpx",
                            height: "1223rpx"
                        },
                        index: "一"
                    },
                    images: [ {
                        name: "index",
                        size: {
                            width: "686rpx",
                            height: "1223rpx"
                        },
                        index: "一"
                    }, {
                        name: "zg",
                        size: {
                            width: "686rpx",
                            height: "1085rpx"
                        },
                        index: "二"
                    }, {
                        name: "lh",
                        size: {
                            width: "686rpx",
                            height: "1064rpx"
                        },
                        index: "三"
                    }, {
                        name: "zn",
                        size: {
                            width: "686rpx",
                            height: "1342rpx"
                        },
                        index: "四"
                    }, {
                        name: "fd",
                        size: {
                            width: "686rpx",
                            height: "1134rpx"
                        },
                        index: "五"
                    }, {
                        name: "fs",
                        size: {
                            width: "686rpx",
                            height: "1142rpx"
                        },
                        index: "六"
                    } ],
                    showBtn: !1
                };
            },
            onLoad: function(e) {
                e.show_btn && (this.showBtn = !0), e.type && (this.type = Number(e.type), this.image = this.images[e.type]);
            },
            methods: {
                changeCategory: function(e) {
                    this.type = e, this.image = this.images[e];
                }
            }
        };
        n.default = i;
    },
    "50ac": function(e, n, t) {},
    7612: function(e, n, t) {
        t.r(n);
        var i = t("9abf"), a = t("0515");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        t("c4d5");
        var r = t("f0c5"), d = Object(r.a)(a.default, i.b, i.c, !1, null, "cadc24fa", null, !1, i.a, void 0);
        n.default = d.exports;
    },
    7915: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("7612")).default);
        }).call(this, t("543d").createPage);
    },
    "9abf": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this, n = (e.$createElement, e._self._c, e.__get_style([ e.image.size ]));
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: n
                }
            });
        }, a = [];
    },
    c4d5: function(e, n, t) {
        var i = t("50ac");
        t.n(i).a;
    }
}, [ [ "7915", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/plates/main" ], {
    "1f11": function(n, e, t) {},
    2541: function(n, e, t) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function c(n, e, t, a, c, r, o) {
            try {
                var u = n[r](o), i = u.value;
            } catch (n) {
                return void t(n);
            }
            u.done ? e(i) : Promise.resolve(i).then(a, c);
        }
        function r(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(a, r) {
                    function o(n) {
                        c(i, a, r, o, u, "next", n);
                    }
                    function u(n) {
                        c(i, a, r, o, u, "throw", n);
                    }
                    var i = n.apply(e, t);
                    o(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = a(t("a34a")), u = a(t("327a")), i = a(t("f2a1")), f = {
            mixins: [ u.default ],
            components: {
                Stars: function() {
                    t.e("pages/packageC/plates/_stars").then(function() {
                        return resolve(t("519c1"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    per: 15
                };
            },
            onShareAppMessage: function() {
                var n = encodeURIComponent("/pages/packageC/plates/main"), e = {
                    title: "买房先选板块，360度深入剖析热门板块价值~",
                    path: "/pages/index/main?sub_page=".concat(n),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/list/plates/share.png"
                };
                return this.getShareInfo(e);
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                openDetail: function(n) {
                    wx.navigateTo({
                        url: "/pages/packageB/plates/main?id=".concat(n)
                    });
                },
                getData: function() {
                    var n = this;
                    return r(o.default.mark(function e() {
                        var t;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, i.default.getPlates({
                                    page: n.page,
                                    per: 15
                                });

                              case 2:
                                (t = e.sent).items.forEach(function(n) {
                                    n.rate = n.ratings && n.ratings["综合评星"] || 0;
                                }), n.handleData(t);

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        e.default = f;
    },
    "83de": function(n, e, t) {
        var a = t("1f11");
        t.n(a).a;
    },
    c27c: function(n, e, t) {
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
    c457: function(n, e, t) {
        t.r(e);
        var a = t("2541"), c = t.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        e.default = c.a;
    },
    c6d6: function(n, e, t) {
        t.r(e);
        var a = t("c27c"), c = t("c457");
        for (var r in c) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(r);
        t("83de");
        var o = t("f0c5"), u = Object(o.a)(c.default, a.b, a.c, !1, null, "b8c1b552", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    ca8f: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("c6d6")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "ca8f", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/disclaimer/main" ], {
    "2b9d": function(n, e, t) {
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {
            return a;
        });
        var a = {
            fangchanDisclaimerList: function() {
                return t.e("node-modules/fangchan-base/components/views/fangchan-disclaimer-list").then(t.bind(null, "19d8"));
            }
        }, r = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "48a2": function(n, e, t) {
        t.r(e);
        var a = t("2b9d"), r = t("ce89");
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        var i = t("f0c5"), u = Object(i.a)(r.default, a.b, a.c, !1, null, "2e2caa98", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    c85f: function(n, e, t) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function r(n, e, t, a, r, c, i) {
            try {
                var u = n[c](i), o = u.value;
            } catch (n) {
                return void t(n);
            }
            u.done ? e(o) : Promise.resolve(o).then(a, r);
        }
        function c(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(a, c) {
                    function i(n) {
                        r(o, a, c, i, u, "next", n);
                    }
                    function u(n) {
                        r(o, a, c, i, u, "throw", n);
                    }
                    var o = n.apply(e, t);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = a(t("a34a")), u = a(t("31e7")), o = {
            data: function() {
                return {
                    desc: "",
                    lists: []
                };
            },
            onLoad: function() {
                this.initData();
            },
            methods: {
                initData: function() {
                    var n = this;
                    return c(i.default.mark(function e() {
                        var t, a;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, u.default.getDisclaimerConfig();

                              case 2:
                                t = e.sent, a = t.page_config, n.desc = a.desc, n.lists = a.lists;

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        e.default = o;
    },
    ce89: function(n, e, t) {
        t.r(e);
        var a = t("c85f"), r = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = r.a;
    },
    e516: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("48a2")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "e516", "common/runtime", "common/vendor" ] ] ]);
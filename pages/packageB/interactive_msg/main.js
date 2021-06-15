require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/interactive_msg/main", "components/views/loading" ], {
    "084a": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("6b1c")).default);
        }).call(this, n("543d").createPage);
    },
    "12e0": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    1838: function(e, t, n) {},
    "3dea": function(e, t, n) {
        var a = n("1838");
        n.n(a).a;
    },
    "5d11": function(e, t, n) {
        var a = n("a0c4");
        n.n(a).a;
    },
    "6b1c": function(e, t, n) {
        n.r(t);
        var a = n("7196"), r = n("e56d");
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("3dea");
        var i = n("f0c5"), o = Object(i.a)(r.default, a.b, a.c, !1, null, "58cc8038", null, !1, a.a, void 0);
        t.default = o.exports;
    },
    7196: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    7756: function(e, t, n) {
        n.r(t);
        var a = n("12e0"), r = n("b683");
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("5d11");
        var i = n("f0c5"), o = Object(i.a)(r.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = o.exports;
    },
    "8c30": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(n("8e44")), u = (a(n("7756")), a(n("327a"))), f = n("db49"), d = {
            comment_like: "收到的点赞",
            comment_reply: "收到的回复"
        }, l = {
            mixins: [ u.default ],
            components: {},
            data: function() {
                return {
                    message_type: "",
                    title: ""
                };
            },
            onLoad: function(e) {
                this.message_type = e.message_type, this.title = d[e.message_type], this.getData();
            },
            methods: {
                getData: function() {
                    var e = this;
                    this.loading = !0, o.default.getMsg({
                        message_type: this.message_type,
                        per: f.DEFAULT_PER,
                        page: this.page
                    }).then(function(t) {
                        var n = t.items;
                        e.handleData({
                            items: n.map(function(e) {
                                var t = e.extra_data.nickname && e.extra_data.nickname.indexOf("置业顾问") > -1, n = c(c({}, e.extra_data), {}, {
                                    nickname: t ? e.extra_data.nickname.replace("置业顾问", "") : e.extra_data.nickname || ""
                                });
                                return t && (n.consultant_tag = "置业顾问"), c(c({}, e), {}, {
                                    extra_data: n
                                });
                            })
                        });
                    });
                }
            }
        };
        t.default = l;
    },
    a0c4: function(e, t, n) {},
    b683: function(e, t, n) {
        n.r(t);
        var a = n("d4d1"), r = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = r.a;
    },
    d4d1: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {};
        t.default = a;
    },
    e56d: function(e, t, n) {
        n.r(t);
        var a = n("8c30"), r = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = r.a;
    }
}, [ [ "084a", "common/runtime", "common/vendor" ] ] ]);
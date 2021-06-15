require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/history/main" ], {
    "039a": function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "04a9": function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
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
        var c = n("07d2"), u = r(n("acbe")), f = {
            mixins: [ r(n("327a")).default ],
            data: function() {
                return {
                    loading: !0,
                    items: []
                };
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var e = this;
                    this.loading = !0, u.default.getHistory(this.page).then(function(t) {
                        e.handleData({
                            items: t.items.map(function(e) {
                                return a(a({}, e), {}, {
                                    peer_headimgurl: e.peer_headimgurl || c.DEFAULT_HEADIMG
                                });
                            })
                        });
                    });
                },
                goChat: function(e) {
                    var t = e.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/chat_list/history_detail/main?id=".concat(t)
                    });
                }
            },
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = f;
    },
    4659: function(e, t, n) {
        n.r(t);
        var r = n("04a9"), o = n.n(r);
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "4c5e": function(e, t, n) {
        n.r(t);
        var r = n("039a"), o = n("4659");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("fe3d");
        var i = n("f0c5"), c = Object(i.a)(o.default, r.b, r.c, !1, null, "47d37cb2", null, !1, r.a, void 0);
        t.default = c.exports;
    },
    "5d83": function(e, t, n) {},
    b794b: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("4c5e")).default);
        }).call(this, n("543d").createPage);
    },
    fe3d: function(e, t, n) {
        var r = n("5d83");
        n.n(r).a;
    }
}, [ [ "b794b", "common/runtime", "common/vendor" ] ] ]);
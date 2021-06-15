require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/group_assistant/main" ], {
    "031b": function(e, t, n) {
        var r = n("19dd");
        n.n(r).a;
    },
    "19dd": function(e, t, n) {},
    "20ef": function(e, t, n) {
        n.r(t);
        var r = n("e34e"), o = n.n(r);
        for (var c in r) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    "56af": function(e, t, n) {
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
    d879: function(e, t, n) {
        n.r(t);
        var r = n("56af"), o = n("20ef");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("031b");
        var i = n("f0c5"), a = Object(i.a)(o.default, r.b, r.c, !1, null, "3f8d8f70", null, !1, r.a, void 0);
        t.default = a.exports;
    },
    dbf3: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("d879")).default);
        }).call(this, n("543d").createPage);
    },
    e34e: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function o(e, t, n) {
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
        var c = n("2f62"), i = {
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("dfea")).default ],
            data: function() {
                return {
                    show: !1
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        o(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, c.mapState)([ "configLoading", "wxArticle" ])),
            watch: {
                configLoading: {
                    handler: function(e, t) {
                        e || this.$checkIdentifyQr({
                            link: this.wxArticle[1].url,
                            title: this.wxArticle[1].name,
                            shareShow: this.wxArticle[1].share
                        }) || (this.show = !0);
                    },
                    immediate: !0
                }
            },
            onLoad: function() {}
        };
        t.default = i;
    }
}, [ [ "dbf3", "common/runtime", "common/vendor" ] ] ]);
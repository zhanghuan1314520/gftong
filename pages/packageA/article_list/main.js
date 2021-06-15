require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/article_list/main" ], {
    "0875": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("aa37")).default);
        }).call(this, n("543d").createPage);
    },
    "0e81": function(e, t, n) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(n("8e44")), i = a(n("327a"));
        n("371c");
        var c = {
            mixins: [ i.default ],
            data: function() {
                return {
                    items: []
                };
            },
            computed: {},
            onLoad: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "".concat("杭州购房通", "-热门文章"),
                    path: "/pages/packageA/article_list/main"
                });
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            methods: {
                getData: function() {
                    o.default.getFeeds({
                        page: this.page,
                        per: 10,
                        content_type: "weixin_article",
                        weixin_account_id: 428
                    }).then(this.handleData);
                }
            },
            components: {
                ArticleItem: function() {
                    n.e("components/views/common_article").then(function() {
                        return resolve(n("337b"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        t.default = c;
    },
    "1ea3": function(e, t, n) {
        n.r(t);
        var a = n("0e81"), o = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    "5e82": function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    aa37: function(e, t, n) {
        n.r(t);
        var a = n("5e82"), o = n("1ea3");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        var c = n("f0c5"), u = Object(c.a)(o.default, a.b, a.c, !1, null, "c51039d6", null, !1, a.a, void 0);
        t.default = u.exports;
    }
}, [ [ "0875", "common/runtime", "common/vendor" ] ] ]);
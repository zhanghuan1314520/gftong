(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/house_circles/_banner" ], {
    "2b3e": function(e, n, t) {
        var a = t("762f");
        t.n(a).a;
    },
    "49dd": function(e, n, t) {
        t.r(n);
        var a = t("e08b"), o = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        n.default = o.a;
    },
    "762f": function(e, n, t) {},
    bb29: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    e08b: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("8e44")), o = {
            props: {
                festival: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    topics: [],
                    loading: !0
                };
            },
            onReady: function(e) {
                this.getData();
            },
            onPullDownRefresh: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var e = this;
                    this.loading = !0, a.default.getCommunityTopics({
                        page: 1,
                        per: 3
                    }).then(function(n) {
                        var t = n.items;
                        e.topics = t, e.loading = !1;
                    });
                },
                goDetail: function(e) {
                    var n = encodeURIComponent("/pages/packageA/community_topics/detail/main?topic_id=".concat(e, "&from=house_circle"));
                    wx.navigateTo({
                        url: "/pages/packageA/community_topics/main?sub_page=".concat(n)
                    });
                }
            }
        };
        n.default = o;
    },
    f8c4: function(e, n, t) {
        t.r(n);
        var a = t("bb29"), o = t("49dd");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        t("2b3e");
        var i = t("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "1b37d3cd", null, !1, a.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/house_circles/_banner-create-component", {
    "pages/house_circles/_banner-create-component": function(e, n, t) {
        t("543d").createComponent(t("f8c4"));
    }
}, [ [ "pages/house_circles/_banner-create-component" ] ] ]);
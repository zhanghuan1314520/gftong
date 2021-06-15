(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/house_circles/recommended" ], {
    "051c": function(e, n, t) {
        t.r(n);
        var c = t("ee69"), a = t.n(c);
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(o);
        n.default = a.a;
    },
    "1db9": function(e, n, t) {
        t.d(n, "b", function() {
            return c;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var c = function() {
            var e = this, n = (e.$createElement, e._self._c, e.__map(e.ranking, function(n, t) {
                return {
                    $orig: e.__get_orig(n),
                    m0: e.rankIcon(t + 1)
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, a = [];
    },
    4685: function(e, n, t) {
        var c = t("de22");
        t.n(c).a;
    },
    d3d0: function(e, n, t) {
        t.r(n);
        var c = t("1db9"), a = t("051c");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        t("4685");
        var i = t("f0c5"), r = Object(i.a)(a.default, c.b, c.c, !1, null, "69e46b7c", null, !1, c.a, void 0);
        n.default = r.exports;
    },
    de22: function(e, n, t) {},
    ee69: function(e, n, t) {
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, t("fa29");
        var a = c(t("327a")), o = (t("63ae"), c(t("8e44")), c(t("12bf"))), i = t("fe86"), r = {
            mixins: [ a.default ],
            data: function() {
                return {
                    subjects: i.SUBJECTS,
                    ranking: [],
                    topics: [],
                    topics_hot: []
                };
            },
            components: {
                CommonArticle: function() {
                    t.e("components/views/common_article").then(function() {
                        return resolve(t("337b"));
                    }.bind(null, t)).catch(t.oe);
                },
                Subject: function() {
                    t.e("pages/find_building/_subject").then(function() {
                        return resolve(t("35cb"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            onReady: function(e) {
                this.getHostList();
            },
            methods: {
                goRankingDetail: function(e, n) {
                    var t = "";
                    t = e.jump_path ? e.jump_path : t = "Fc::Building" === e.viewable_type ? "/pages/building/main?building_id=".concat(e.viewable_id) : "/pages/packageA/web_article/main?id=".concat(e.viewable_id, "&title=").concat(encodeURIComponent(e.title), "&type=weixin_articles"), 
                    wx.navigateTo({
                        url: t
                    });
                },
                rankIcon: function(e) {
                    return "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/house-circles/rank/rank-".concat(e, ".png");
                },
                getHostList: function() {
                    var e = this;
                    o.default.getHotSearchList().then(function(n) {
                        e.ranking = n.items.slice(0, 6);
                    });
                },
                goTab: function(e) {
                    var n = e.currentTarget.dataset, t = (n.name, n.url);
                    wx.navigateTo({
                        url: t
                    });
                },
                goDetail: function(e) {
                    var n = encodeURIComponent("/pages/packageA/community_topics/detail/main?topic_id=".concat(e, "&from=house_circle"));
                    wx.navigateTo({
                        url: "/pages/packageA/community_topics/main?sub_page=".concat(n)
                    });
                },
                selectArticle: function() {
                    this.$emit("selectArticle");
                }
            },
            props: {
                article_data: {
                    type: Array,
                    default: []
                }
            }
        };
        n.default = r;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/house_circles/recommended-create-component", {
    "pages/house_circles/recommended-create-component": function(e, n, t) {
        t("543d").createComponent(t("d3d0"));
    }
}, [ [ "pages/house_circles/recommended-create-component" ] ] ]);
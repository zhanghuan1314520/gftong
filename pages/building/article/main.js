require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/article/main" ], {
    "0d7c": function(n, e, t) {
        t.r(e);
        var i = t("14b5"), u = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(a);
        e.default = u.a;
    },
    "14b5": function(n, e, t) {
        function i(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = i(t("8e44")), a = {
            mixins: [ i(t("d1fa")).default ],
            data: function() {
                return {
                    house: {},
                    loading: !0
                };
            },
            onLoad: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query, e = (n.house_id, n.building_id);
                return n.name, this.getShareInfo({
                    title: "【".concat(this.house.name, "】文章"),
                    path: this.getSharePath("/pages/building/article/main?building_id=".concat(e))
                });
            },
            methods: {
                getData: function() {
                    var n = this, e = this.$root.$mp.query.building_id;
                    u.default.getBuilding(e).then(function(e) {
                        n.house = e, n.loading = !1, n.$refs.building_article.getData(e.id, e.weixin_account_id);
                    });
                }
            },
            components: {
                BuildingItem: function() {
                    t.e("components/business/whole_building_item").then(function() {
                        return resolve(t("51f3"));
                    }.bind(null, t)).catch(t.oe);
                },
                BuildingArticles: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/article/_articles") ]).then(function() {
                        return resolve(t("118e"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = a;
    },
    "49aa": function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("f164")).default);
        }).call(this, t("543d").createPage);
    },
    "61af": function(n, e, t) {
        var i = t("68b2");
        t.n(i).a;
    },
    "655f": function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
    },
    "68b2": function(n, e, t) {},
    f164: function(n, e, t) {
        t.r(e);
        var i = t("655f"), u = t("0d7c");
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        t("61af");
        var o = t("f0c5"), c = Object(o.a)(u.default, i.b, i.c, !1, null, "e48efd66", null, !1, i.a, void 0);
        e.default = c.exports;
    }
}, [ [ "49aa", "common/runtime", "common/vendor" ] ] ]);
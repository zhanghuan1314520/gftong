require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/footprint/main" ], {
    "30ed": function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n("8e44")), a = i(n("327a")), u = n("63ae"), c = {
            data: function() {
                return {
                    items: [ {} ],
                    history_items: {},
                    per: 10,
                    recommendations: []
                };
            },
            mixins: [ a.default ],
            onLoad: function() {
                this.getData();
            },
            computed: {
                is_show_history: function() {
                    return this.items.length > 0;
                }
            },
            components: {
                HouseItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/house_item") ]).then(function() {
                        return resolve(n("ae38"));
                    }.bind(null, n)).catch(n.oe);
                },
                ListLoading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            methods: {
                getData: function() {
                    var e = this;
                    this.loading = !0;
                    var t = {
                        page: this.page,
                        per: this.per,
                        viewable_type: "Fc::Building"
                    };
                    o.default.getFootPrint(t).then(function(t) {
                        t.items.length > 0 ? (e.handleData(t), e.initData(t.items)) : (e.items = [], e.loading = !1, 
                        e.no_reach_bottom = !0, e.getRecommend());
                    });
                },
                initData: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        e.viewable = (0, u.mapHouseItem)(e.viewable), t.history_items[e.view_date] || (t.history_items[e.view_date] = []), 
                        t.history_items[e.view_date].push(e.viewable);
                    });
                },
                getRecommend: function() {
                    var e = this;
                    o.default.getBuildings({
                        page: 1,
                        per: 15,
                        feature: "未关注"
                    }).then(function(t) {
                        e.recommendations = t.items;
                    });
                }
            }
        };
        t.default = c;
    },
    "3e46": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("ce1a")).default);
        }).call(this, n("543d").createPage);
    },
    5687: function(e, t, n) {
        n.r(t);
        var i = n("30ed"), o = n.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = o.a;
    },
    "82e4": function(e, t, n) {
        var i = n("c400");
        n.n(i).a;
    },
    9581: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    c400: function(e, t, n) {},
    ce1a: function(e, t, n) {
        n.r(t);
        var i = n("9581"), o = n("5687");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("82e4");
        var u = n("f0c5"), c = Object(u.a)(o.default, i.b, i.c, !1, null, "0bbe0660", null, !1, i.a, void 0);
        t.default = c.exports;
    }
}, [ [ "3e46", "common/runtime", "common/vendor" ] ] ]);
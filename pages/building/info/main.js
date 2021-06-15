require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/info/main" ], {
    "9c90": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    ab4f: function(e, n, t) {},
    dff4: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("fc0d")).default);
        }).call(this, t("543d").createPage);
    },
    f0dd: function(e, n, t) {
        var o = t("ab4f");
        t.n(o).a;
    },
    f76f: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i, u = o(t("8e44")), r = o(t("d1fa")), a = o(t("a027")), c = o(t("f9d4")), d = t("f51f"), f = function(e) {
            return e.reduce(function(e, n) {
                var t = "<br/>", o = n.replace(/(\r\n|\n)/g, t).split(t);
                return e.concat(o);
            }, []);
        }, l = {
            mixins: [ o(t("b159")).default, r.default, a.default, c.default ],
            name: "HOUSE_INFO",
            data: function() {
                return {
                    name: "",
                    address: "",
                    loading: !1,
                    detail: {
                        base_info: [],
                        other_info: [],
                        intro: []
                    },
                    house: {}
                };
            },
            onLoad: function() {
                this.getUser(), this.getData();
            },
            updated: function() {
                "introduction" === this.$root.$mp.query.type && (i = setTimeout(this.goIntroduction, 500));
            },
            onUnload: function() {
                i && clearTimeout(i);
            },
            onShareAppMessage: function() {
                var e = this.$root.$mp.query, n = e.building_id, t = e.id;
                return this.getShareInfo({
                    title: "【".concat(this.name, "】详情信息，点击了解~"),
                    path: this.getSharePath("/pages/building/info/main?id=".concat(t, "&building_id=").concat(n || ""))
                });
            },
            methods: {
                getData: function() {
                    var e = this, n = this.$root.$mp.query, t = n.house_id, o = n.building_id, i = n.type, r = this.share_by_consultant_uid;
                    u.default.getBuilding(o, t, "", "", r).then(function(n) {
                        e.house = n, e.name = n.name, e.address = "".concat(n.zone ? "".concat(n.zone, "-") : "").concat(n.address || "");
                        var t = n.details, o = (0, d.getInfoItems)(i, n.usage), u = t["周边设施"] || {}, r = Object.keys(u), a = function(e) {
                            return function(n, t) {
                                return e[t] && n.push({
                                    name: "".concat(t, ":"),
                                    value: e[t]
                                }), n;
                            };
                        };
                        e.detail = {
                            base_info: o.reduce(a(t), []),
                            other_info: r.reduce(a(u), []),
                            intro: f(t["项目简介"])
                        }, e.house = n, e.current_house = n.current_houses.length ? n.current_houses[0] : {};
                    });
                },
                goIntroduction: function() {
                    if (wx.createSelectorQuery) {
                        var e = wx.createSelectorQuery().select("#top");
                        e && e.fields({
                            size: !0
                        }, function(e) {
                            e && e.height && wx.pageScrollTo && wx.pageScrollTo({
                                scrollTop: e.height,
                                duration: 0
                            });
                        }).exec();
                    }
                }
            },
            components: {
                BuildingFooter: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/building/_footer") ]).then(function() {
                        return resolve(t("801a"));
                    }.bind(null, t)).catch(t.oe);
                },
                UiShare: function() {
                    t.e("components/ui/share").then(function() {
                        return resolve(t("d437"));
                    }.bind(null, t)).catch(t.oe);
                },
                Disclaimer: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/views/disclaimer") ]).then(function() {
                        return resolve(t("db46"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = l;
    },
    f7de: function(e, n, t) {
        t.r(n);
        var o = t("f76f"), i = t.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = i.a;
    },
    fc0d: function(e, n, t) {
        t.r(n);
        var o = t("9c90"), i = t("f7de");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(u);
        t("f0dd");
        var r = t("f0c5"), a = Object(r.a)(i.default, o.b, o.c, !1, null, "77f77e20", null, !1, o.a, void 0);
        n.default = a.exports;
    }
}, [ [ "dff4", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
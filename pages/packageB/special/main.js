require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/special/main" ], {
    3486: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("d8d5")).default);
        }).call(this, n("543d").createPage);
    },
    "3e0a": function(t, e, n) {},
    "51e1": function(t, e, n) {
        n.r(e);
        var o = n("ee9a"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    "98eb": function(t, e, n) {
        var o = n("3e0a");
        n.n(o).a;
    },
    d8d5: function(t, e, n) {
        n.r(e);
        var o = n("e5f0"), i = n("51e1");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("98eb");
        var c = n("f0c5"), u = Object(c.a)(i.default, o.b, o.c, !1, null, "085382f6", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    e5f0: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    ee9a: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = o(n("327a")), a = n("63ae"), c = o(n("8e44")), u = o(n("b4fd")), r = o(n("cbb0")), l = o(n("80d6")), s = {
            mixins: [ i.default ],
            components: {
                BottomTip: function() {
                    n.e("components/views/bottom_tip").then(function() {
                        return resolve(n("7a99"));
                    }.bind(null, n)).catch(n.oe);
                },
                HouseItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/house_item") ]).then(function() {
                        return resolve(n("ae38"));
                    }.bind(null, n)).catch(n.oe);
                },
                ListLoading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopSwiper: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/business/swiper") ]).then(function() {
                        return resolve(n("c456"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    title: "",
                    thematic: "",
                    banners: [],
                    show_phone: !1,
                    bottom_items: []
                };
            },
            onLoad: function() {
                c.default.init().then(this.getData);
                var t = this.$root.$mp.query, e = t.title, n = t.thematic;
                this.title = e || "杭州购房通", this.thematic = n;
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: this.title,
                    path: "/pages/packageB/special/main?title=".concat(this.title, "&thematic=").concat(this.thematic)
                });
            },
            onReady: function() {
                var t = this.$root.$mp.query.sub_page;
                t && wx.navigateTo({
                    url: decodeURIComponent(t)
                });
            },
            methods: {
                getData: function() {
                    var t = this;
                    this.loading = !0;
                    var e = {
                        page: this.page,
                        thematic: this.thematic
                    }, n = "thematic_".concat(this.thematic, "_top_banner");
                    n && r.default.getBanners(n, {
                        limit: 10
                    }).then(function(e) {
                        t.banners = e;
                    }), c.default.getBuildings(e).then(function(e) {
                        t.handleData(e), t.show_phone = e.has_thematic_telephone;
                    }), c.default.getRecommendation("thematic_".concat(this.thematic, "_buttom_padding_image"), 10).then(function(e) {
                        e.forEach(function(t) {
                            t.photo_url = (0, a.handleImgSize)(t.photo_url, 750, 750), t.view_id = t.id || t.target.id;
                        }), t.bottom_items = e;
                    });
                },
                getPhone: function() {
                    u.default.getPhonePosition({
                        sceneable_type: "thematic_" + this.thematic
                    }).then(function(t) {
                        var e = t.phone;
                        l.default.makePhoneCall(e);
                    });
                },
                call: function() {
                    var t = this;
                    this.$showCallModal(function() {
                        t.getPhone();
                    }, "开发商主题页面-电话拨打");
                }
            }
        };
        e.default = s;
    }
}, [ [ "3486", "common/runtime", "common/vendor" ] ] ]);
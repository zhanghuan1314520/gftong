require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/vr/main" ], {
    "0951": function(n, e, t) {
        function i(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function o(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, i);
            }
            return t;
        }
        function r(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(t), !0).forEach(function(e) {
                    u(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function u(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = t("2f62"), a = i(t("d1fa")), l = i(t("ba1b")), s = i(t("8e44")), d = (i(t("865e")), 
        i(t("eed6"))), f = i(t("55ed")), g = i(t("0ee1"));
        t("371c");
        var h = {
            mixins: [ a.default, f.default, d.default, g.default ],
            name: "HOUSE_VR_PREVIEW",
            data: function() {
                return {
                    loading: !0,
                    urls: [],
                    tabs: [],
                    type: "",
                    building_id: "",
                    title: "",
                    excellent_consultants: [],
                    building: {},
                    current_house: {}
                };
            },
            computed: r(r({}, (0, c.mapState)([ "consultantCard", "current_consultant_uid", "share_by_consultant_uid" ])), {}, {
                show_empty: function() {
                    return !this.loading && !this.urls.length;
                },
                show_disclaimer: function() {
                    return this.building.activities && this.building.activities.indexOf("vr_disclaimer") > -1;
                }
            }),
            onLoad: function(n) {
                var e = n.building_id, t = n.title, i = n.type;
                n.house_id, this.building_id = e, this.title = t, this.type = i, this.getData();
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query.building_id, e = this.title, t = this.building.name;
                return this.getShareInfo({
                    title: "【".concat(t, "】VR线上实景看房，沉浸式空间漫游~"),
                    path: this.getSharePath("/pages/building/vr/main?title=".concat(e, "&building_id=").concat(n || "")),
                    imageUrl: this.building.vr_resource ? this.building.vr_resource.vr_photo_url : ""
                });
            },
            methods: {
                getData: function() {
                    var n = this, e = this.$root.$mp.query, t = (e.id, e.building_id), i = e.house_id, o = e.open_first, r = this.current_consultant_uid || this.share_by_consultant_uid;
                    s.default.getBuilding(t, i, "", "", r).then(function(e) {
                        n.building = e, n.current_house = e.current_houses.length ? e.current_houses[0] : {};
                    }), this.getVr().then(function(e) {
                        o && wx.navigateTo({
                            url: e.items[0].vr_link
                        }), n.urls = e.items, n.loading = !1, n.getConsultants(e.building.id);
                    });
                },
                preview: function(n) {
                    wx.previewImage({
                        current: this.urls[n].orginal_url,
                        urls: this.urls.map(function(n) {
                            return n.orginal_url;
                        })
                    });
                },
                getConsultants: function(n) {
                    var e = this;
                    l.default.excellentConsultants(n).then(function(n) {
                        e.excellent_consultants = n.slice(0, 3);
                    });
                },
                goConsultants: function() {
                    var n = this.building, e = n.id, t = n.name;
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(e, "&name=").concat(t, "&from=VR")
                    });
                },
                goVideo: function(n) {
                    var e = this.building, t = e.id, i = e.name;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(t, "&title=").concat(i, "&src=").concat(n)
                    });
                }
            },
            components: {
                VrTip: function() {
                    t.e("pages/building/img_preview/_vr_tip").then(function() {
                        return resolve(t("6f5f"));
                    }.bind(null, t)).catch(t.oe);
                },
                TopRightShare: function() {
                    t.e("components/views/top_right_share").then(function() {
                        return resolve(t("73b4"));
                    }.bind(null, t)).catch(t.oe);
                },
                EmptyTip: function() {
                    t.e("components/views/empty_tip").then(function() {
                        return resolve(t("e430"));
                    }.bind(null, t)).catch(t.oe);
                },
                AudioAnalysis: function() {
                    t.e("pages/building/img_preview/_audio_analysis").then(function() {
                        return resolve(t("96b6"));
                    }.bind(null, t)).catch(t.oe);
                },
                CommonFooter: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(t("bf22"));
                    }.bind(null, t)).catch(t.oe);
                },
                Consultants: function() {
                    t.e("pages/building/_components/_excellent_consultants").then(function() {
                        return resolve(t("d91a"));
                    }.bind(null, t)).catch(t.oe);
                },
                LayoutItem: function() {
                    t.e("pages/building/img_preview/_layout_item").then(function() {
                        return resolve(t("9f91"));
                    }.bind(null, t)).catch(t.oe);
                },
                Disclaimer: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/views/disclaimer") ]).then(function() {
                        return resolve(t("db46"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = h;
    },
    "1e2b": function(n, e, t) {
        var i = t("46c1");
        t.n(i).a;
    },
    "25c5": function(n, e, t) {
        t.r(e);
        var i = t("31ab"), o = t("9a12");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        t("1e2b");
        var u = t("f0c5"), c = Object(u.a)(o.default, i.b, i.c, !1, null, "f5620ec2", null, !1, i.a, void 0);
        e.default = c.exports;
    },
    "31ab": function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "46c1": function(n, e, t) {},
    "9a12": function(n, e, t) {
        t.r(e);
        var i = t("0951"), o = t.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(r);
        e.default = o.a;
    },
    d485: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("25c5")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "d485", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
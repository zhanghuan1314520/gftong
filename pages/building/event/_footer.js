require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/event/_footer" ], {
    "4cb8": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    8934: function(e, n, t) {
        t.r(n);
        var i = t("d321"), o = t.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(u);
        n.default = o.a;
    },
    9561: function(e, n, t) {
        var i = t("f6d8");
        t.n(i).a;
    },
    d321: function(e, n, t) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = i(t("9554")), u = i(t("b4fd")), a = i(t("8e44")), c = i(t("ac8e")), l = t("371c"), s = {
            mixins: [ c.default ],
            data: function() {
                return {
                    subscribed: !1,
                    show_subscribe_tip: !1
                };
            },
            computed: {
                favourite: function() {
                    return this.follow_info && this.follow_info.id;
                }
            },
            mounted: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var e = this, n = this.$root.$mp.query.building_id;
                    u.default.getSubMsg("building_events", "Fc::Building", n).then(function(n) {
                        e.subscribed = n.subscribed;
                    });
                },
                goConsult: function(e) {
                    var n = this;
                    (0, o.default)(e, function() {
                        var e = n.$root.$mp.query.building_id;
                        wx.navigateTo({
                            url: "/pages/consultants/filter/main?id=".concat(e)
                        });
                    }, "需要认证用户信息才可以查看置业顾问");
                },
                toggleFavourite: function() {
                    var e = this.follow_info;
                    this.favourite ? a.default.delMyFavourite(e.id) : a.default.addMyFavourite({
                        followable_type: e.followable_type,
                        followable_id: e.followable_id
                    }), this.$emit("getData");
                },
                subscribe: function(e) {
                    var n = this;
                    (0, o.default)(e, function() {
                        var e = n.$root.$mp.query.building_id, t = "subMsg";
                        n.subscribed ? t = "delSubMsg" : (0, l.sendCtmEvtLog)("楼盘动态页——订阅"), n.subscribed = !n.subscribed, 
                        u.default[t]("building_events", "Fc::Building", e).then(function() {
                            n.subscribed && n.toggleSubscribe();
                        });
                    }, "请先认证用户信息");
                },
                toggleSubscribe: function() {
                    this.show_subscribe_tip = !this.show_subscribe_tip;
                },
                goAdd: function() {
                    wx.navigateTo({
                        url: "/pages/building/event/add/main?building_name=".concat(this.house.name, "&building_id=").concat(this.house.building_id)
                    });
                }
            },
            props: {
                is_consultant: {
                    type: Boolean
                },
                is_building_consultant: {
                    type: Boolean
                },
                house: {
                    type: Object
                },
                follow_info: {
                    type: Object
                },
                customer_service_info: {
                    type: Object
                },
                building_event_author: {
                    type: Boolean
                }
            },
            components: {
                LikeTip: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/_components/_like_tip") ]).then(function() {
                        return resolve(t("ca0b"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = s;
    },
    f13d: function(e, n, t) {
        t.r(n);
        var i = t("4cb8"), o = t("8934");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        t("9561");
        var a = t("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, "73f46755", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    f6d8: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/event/_footer-create-component", {
    "pages/building/event/_footer-create-component": function(e, n, t) {
        t("543d").createComponent(t("f13d"));
    }
}, [ [ "pages/building/event/_footer-create-component" ] ] ]);
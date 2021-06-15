require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/_footer" ], {
    "01f1": function(n, e, o) {},
    2513: function(n, e, o) {
        o.r(e);
        var t = o("5d54"), i = o.n(t);
        for (var u in t) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(u);
        e.default = i.a;
    },
    "5d54": function(n, e, o) {
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = t(o("8e44")), u = t(o("9554")), a = t(o("b4fd")), l = o("a177"), c = {
            data: function() {
                return {
                    show_subscribe_tip: !1
                };
            },
            methods: {
                goConsultant: function() {
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(this.building_id)
                    });
                },
                goConsultantByUser: function(n) {
                    var e = this;
                    (0, u.default)(n, function() {
                        e.goConsultant();
                    }, "需要认证用户信息才可以查看置业顾问");
                },
                goCall: function() {
                    this.$showCallModal(this.getPhoneCall, "楼盘评论页——电话拨打");
                },
                getPhoneCall: function() {
                    a.default.getPhonePosition({
                        building_id: this.building_id
                    }).then(function(n) {
                        var e = n.phone;
                        wx.makePhoneCall({
                            phoneNumber: e,
                            success: function() {}
                        });
                    });
                },
                showComment: function(n) {
                    var e = this;
                    (0, u.default)(n, function() {
                        e.$emit("openComment");
                    }, "需要授权用户信息才可以进行评论");
                },
                toggleFavourite: function() {
                    var n = this, e = this.follow_info, o = this.favourite;
                    o ? i.default.delMyFavourite(e.id) : i.default.addMyFavourite({
                        followable_type: e.followable_type,
                        followable_id: e.followable_id
                    }).then(function() {
                        return l.App_User.get();
                    }).then(function(e) {
                        e.weixin_subscribed || n.toggleSubscribe();
                    }), this.$emit("changeFavourite", !o);
                },
                toggleSubscribe: function() {
                    this.show_subscribe_tip = !this.show_subscribe_tip;
                }
            },
            props: {
                building_id: {
                    type: [ Number, String ]
                },
                favourite: {
                    type: Boolean
                },
                follow_info: {
                    follow_info: Object
                }
            },
            components: {
                LikeTip: function() {
                    Promise.all([ o.e("common/vendor"), o.e("pages/building/_components/_like_tip") ]).then(function() {
                        return resolve(o("ca0b"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        e.default = c;
    },
    bc3f: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    bdfb: function(n, e, o) {
        var t = o("01f1");
        o.n(t).a;
    },
    ebc8: function(n, e, o) {
        o.r(e);
        var t = o("bc3f"), i = o("2513");
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return i[n];
            });
        }(u);
        o("bdfb");
        var a = o("f0c5"), l = Object(a.a)(i.default, t.b, t.c, !1, null, "f4cd14d6", null, !1, t.a, void 0);
        e.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/comments/_footer-create-component", {
    "pages/building/comments/_footer-create-component": function(n, e, o) {
        o("543d").createComponent(o("ebc8"));
    }
}, [ [ "pages/building/comments/_footer-create-component" ] ] ]);
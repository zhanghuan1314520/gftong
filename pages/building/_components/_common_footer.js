require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_common_footer" ], {
    "252f": function(n, e, o) {},
    "7ae1": function(n, e, o) {
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {
            return t;
        });
        var t = {
            fangchanAuthUser: function() {
                return o.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(o.bind(null, "e86c"));
            }
        }, i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    b9c1: function(n, e, o) {
        var t = o("252f");
        o.n(t).a;
    },
    bf22: function(n, e, o) {
        o.r(e);
        var t = o("7ae1"), i = o("ffd4");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return i[n];
            });
        }(a);
        o("b9c1");
        var c = o("f0c5"), u = Object(c.a)(i.default, t.b, t.c, !1, null, "245e6014", null, !1, t.a, void 0);
        e.default = u.exports;
    },
    cbc4: function(n, e, o) {
        function t(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, t(o("9554"));
        var i = t(o("b4fd")), a = o("d8e2"), c = o("371c"), u = {
            props: {
                building_id: {
                    type: [ Number, String ]
                },
                recommend_consultant_id: {
                    type: [ Number, String ]
                },
                name: {
                    type: String
                },
                from: {
                    type: String
                }
            },
            methods: {
                goConsultantByUser: function(n) {
                    if (this.recommend_consultant_id) return (0, c.sendCtmEvtLog)("总平图页面——联系置业顾问(微聊)"), 
                    void (0, a.navigateToChat)(this.recommend_consultant_id, {
                        from: "总平图"
                    });
                    this.goConsultant();
                },
                goConsultant: function() {
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(this.building_id, "&from=").concat(this.from || "")
                    });
                },
                goCall: function() {
                    this.$showCallModal(this.getPhoneCall, "楼盘详情页——电话拨打");
                },
                getPhoneCall: function() {
                    i.default.getPhonePosition({
                        building_id: this.building_id
                    }).then(function(n) {
                        var e = n.phone;
                        wx.makePhoneCall({
                            phoneNumber: e,
                            success: function() {}
                        });
                    });
                }
            }
        };
        e.default = u;
    },
    ffd4: function(n, e, o) {
        o.r(e);
        var t = o("cbc4"), i = o.n(t);
        for (var a in t) [ "default" ].indexOf(a) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_common_footer-create-component", {
    "pages/building/_components/_common_footer-create-component": function(n, e, o) {
        o("543d").createComponent(o("bf22"));
    }
}, [ [ "pages/building/_components/_common_footer-create-component" ] ] ]);
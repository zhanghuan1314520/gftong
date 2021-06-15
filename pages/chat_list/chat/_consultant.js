require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/_consultant" ], {
    "2c51": function(t, n, a) {
        var c = a("a045");
        a.n(c).a;
    },
    a045: function(t, n, a) {},
    ae11: function(t, n, a) {
        a.d(n, "b", function() {
            return c;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {});
        var c = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    c383a: function(t, n, a) {
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = c(a("80d6")), e = (c(a("b4fd")), a("371c")), u = function(t) {
            (0, e.sendCtmEvtLog)("会话页面——点击".concat(t));
        }, i = {
            props: {
                building: {
                    type: Object
                },
                consultant: {
                    type: Object
                },
                consultant_count: {
                    type: Number
                }
            },
            computed: {
                show_switch: function() {
                    return this.consultant_count > 1;
                }
            },
            methods: {
                goConsultant: function() {
                    wx.navigateTo({
                        url: "/pages/consultants/card/main?id=".concat(this.consultant.id)
                    });
                },
                copyWx: function() {
                    u("复制微信"), o.default.setClipboardData(this.consultant.weixin_name, function() {
                        wx.showModal({
                            title: "复制成功",
                            content: "添加置业顾问时，请说明来自杭州购房通",
                            showCancel: !1
                        });
                    });
                },
                callConsultant: function(t) {
                    var n = this;
                    u("电话咨询"), this.$showCallModal(function() {
                        n.$emit("getPhoneCall");
                    }, "聊天页——置业顾问卡片电话拨打");
                },
                switchConsultant: function() {
                    var t = this.consultant.building_id;
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(t)
                    });
                }
            }
        };
        n.default = i;
    },
    cddc: function(t, n, a) {
        a.r(n);
        var c = a("c383a"), o = a.n(c);
        for (var e in c) [ "default" ].indexOf(e) < 0 && function(t) {
            a.d(n, t, function() {
                return c[t];
            });
        }(e);
        n.default = o.a;
    },
    f9c2: function(t, n, a) {
        a.r(n);
        var c = a("ae11"), o = a("cddc");
        for (var e in o) [ "default" ].indexOf(e) < 0 && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(e);
        a("2c51");
        var u = a("f0c5"), i = Object(u.a)(o.default, c.b, c.c, !1, null, "34c827ad", null, !1, c.a, void 0);
        n.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/chat_list/chat/_consultant-create-component", {
    "pages/chat_list/chat/_consultant-create-component": function(t, n, a) {
        a("543d").createComponent(a("f9c2"));
    }
}, [ [ "pages/chat_list/chat/_consultant-create-component" ] ] ]);
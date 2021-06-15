require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/_peer_user" ], {
    "12e1": function(e, n, t) {
        t.r(n);
        var a = t("d6cc"), c = t("7f5f");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(o);
        t("c2ca");
        var r = t("f0c5"), u = Object(r.a)(c.default, a.b, a.c, !1, null, "0383ad66", null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "7f5f": function(e, n, t) {
        t.r(n);
        var a = t("b429"), c = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = c.a;
    },
    aba0: function(e, n, t) {},
    b429: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a = {
            props: {
                building: {
                    type: Object
                },
                peer_headimgurl: {
                    type: String
                },
                peer_nickname: {
                    type: String
                },
                ask_phone_status: {
                    type: String
                }
            },
            computed: {
                ask_enable: function() {
                    return "none" === this.ask_phone_status;
                }
            },
            methods: {
                askPhone: function() {
                    var e = this;
                    this.ask_enable && wx.showModal({
                        title: "提示",
                        content: "向客户索要电话，将消耗20积分（客户拒绝或未响应，积分不退回），不影响活跃度，是否确认索要？",
                        success: function(n) {
                            n.confirm && e.$emit("ask");
                        }
                    });
                }
            }
        };
        n.default = a;
    },
    c2ca: function(e, n, t) {
        var a = t("aba0");
        t.n(a).a;
    },
    d6cc: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/chat_list/chat/_peer_user-create-component", {
    "pages/chat_list/chat/_peer_user-create-component": function(e, n, t) {
        t("543d").createComponent(t("12e1"));
    }
}, [ [ "pages/chat_list/chat/_peer_user-create-component" ] ] ]);
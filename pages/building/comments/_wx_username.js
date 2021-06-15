require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/_wx_username" ], {
    "2f02": function(n, e, t) {
        t.r(e);
        var a = t("f610"), o = t("a0740");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(i);
        t("dc7b");
        var u = t("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, "8392aa64", null, !1, a.a, void 0);
        e.default = c.exports;
    },
    "351c": function(n, e, t) {},
    a0740: function(n, e, t) {
        t.r(e);
        var a = t("a49a8"), o = t.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(i);
        e.default = o.a;
    },
    a49a8: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = t("371c"), o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("80d6")), i = {
            props: {
                name: {
                    type: String
                },
                building_id: {
                    type: String
                }
            },
            methods: {
                copWx: function(n) {
                    o.default.setClipboardData(this.name);
                },
                goDetail: function() {
                    this.$root.$mp.query.building_id, a.UserLog.click_discuss_group(this.building_id), 
                    (0, a.sendCtmEvtLog)("评论区加入群聊按钮"), wx.navigateTo({
                        url: "/pages/personal_package/group_assistant/main"
                    });
                }
            }
        };
        e.default = i;
    },
    dc7b: function(n, e, t) {
        var a = t("351c");
        t.n(a).a;
    },
    f610: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/comments/_wx_username-create-component", {
    "pages/building/comments/_wx_username-create-component": function(n, e, t) {
        t("543d").createComponent(t("2f02"));
    }
}, [ [ "pages/building/comments/_wx_username-create-component" ] ] ]);
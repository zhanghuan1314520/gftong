require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_discuss" ], {
    "30fc": function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "321f": function(n, e, o) {},
    "3cdb": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = o("371c"), a = {
            methods: {
                goDetail: function() {
                    t.UserLog.click_discuss_group(this.building_id), (0, t.sendCtmEvtLog)("楼盘详情页加群banner"), 
                    wx.navigateTo({
                        url: "/pages/personal_package/group_assistant/main"
                    });
                }
            },
            props: {
                building_id: {
                    type: String
                }
            }
        };
        e.default = a;
    },
    "4aba": function(n, e, o) {
        var t = o("321f");
        o.n(t).a;
    },
    afd0: function(n, e, o) {
        o.r(e);
        var t = o("3cdb"), a = o.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = a.a;
    },
    dc1b: function(n, e, o) {
        o.r(e);
        var t = o("30fc"), a = o("afd0");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        o("4aba");
        var i = o("f0c5"), u = Object(i.a)(a.default, t.b, t.c, !1, null, "7fde6e0e", null, !1, t.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_discuss-create-component", {
    "pages/building/_components/_discuss-create-component": function(n, e, o) {
        o("543d").createComponent(o("dc1b"));
    }
}, [ [ "pages/building/_components/_discuss-create-component" ] ] ]);
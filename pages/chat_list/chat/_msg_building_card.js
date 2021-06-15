require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/_msg_building_card" ], {
    "10e2": function(n, e, t) {
        t.r(e);
        var i = t("e98e"), a = t("c010");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("2d40");
        var o = t("f0c5"), r = Object(o.a)(a.default, i.b, i.c, !1, null, "1b639a41", null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "2d40": function(n, e, t) {
        var i = t("9ee9");
        t.n(i).a;
    },
    "4bb1": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            props: {
                card: {
                    type: Object
                },
                building: {
                    type: Object
                }
            },
            computed: {
                show_vr_link: function() {
                    var n = this.building.activities;
                    return !(!n || !n.length) && n.indexOf("vr") > -1;
                },
                link: function() {
                    if (this.card) return "/pages/building/main?building_id=".concat(this.card.id);
                }
            },
            methods: {
                openVr: function() {
                    wx.navigateTo({
                        url: "/pages/building/vr/main?building_id=".concat(this.card.id)
                    });
                }
            }
        };
        e.default = i;
    },
    "9ee9": function(n, e, t) {},
    c010: function(n, e, t) {
        t.r(e);
        var i = t("4bb1"), a = t.n(i);
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(c);
        e.default = a.a;
    },
    e98e: function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/chat_list/chat/_msg_building_card-create-component", {
    "pages/chat_list/chat/_msg_building_card-create-component": function(n, e, t) {
        t("543d").createComponent(t("10e2"));
    }
}, [ [ "pages/chat_list/chat/_msg_building_card-create-component" ] ] ]);
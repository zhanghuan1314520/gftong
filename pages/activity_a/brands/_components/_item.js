require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/activity_a/brands/_components/_item" ], {
    "07e3": function(n, e, t) {
        t.r(e);
        var o = t("72ef"), c = t("f414");
        for (var a in c) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        t("cfff");
        var i = t("f0c5"), r = Object(i.a)(c.default, o.b, o.c, !1, null, "5ddfb694", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "2fbb": function(n, e, t) {},
    "72ef": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    c674: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            computed: {
                img_src: function() {
                    return this.item.type ? "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/activity_a/brands/".concat(this.item.type, ".png") : "";
                }
            },
            props: {
                item: Object
            },
            components: {
                HouseItem: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/business/house_item") ]).then(function() {
                        return resolve(t("ae38"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = o;
    },
    cfff: function(n, e, t) {
        var o = t("2fbb");
        t.n(o).a;
    },
    f414: function(n, e, t) {
        t.r(e);
        var o = t("c674"), c = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/activity_a/brands/_components/_item-create-component", {
    "pages/activity_a/brands/_components/_item-create-component": function(n, e, t) {
        t("543d").createComponent(t("07e3"));
    }
}, [ [ "pages/activity_a/brands/_components/_item-create-component" ] ] ]);
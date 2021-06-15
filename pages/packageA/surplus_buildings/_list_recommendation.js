require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/surplus_buildings/_list_recommendation" ], {
    "1bdd": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(t("5b16")).default ],
            components: {
                HouseItem: function() {
                    t.e("components/business/surplus_house_item").then(function() {
                        return resolve(t("815b"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                list: {
                    type: Array
                },
                type: {
                    type: String
                }
            }
        };
        n.default = o;
    },
    "67e70": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
    },
    "9bb4": function(e, n, t) {
        t.r(n);
        var o = t("67e70"), u = t("aa3d");
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(a);
        var r = t("f0c5"), i = Object(r.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    },
    aa3d: function(e, n, t) {
        t.r(n);
        var o = t("1bdd"), u = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = u.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageA/surplus_buildings/_list_recommendation-create-component", {
    "pages/packageA/surplus_buildings/_list_recommendation-create-component": function(e, n, t) {
        t("543d").createComponent(t("9bb4"));
    }
}, [ [ "pages/packageA/surplus_buildings/_list_recommendation-create-component" ] ] ]);
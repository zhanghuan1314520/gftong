require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_surplus_houses" ], {
    "292f": function(n, e, t) {},
    3294: function(n, e, t) {
        t.r(e);
        var u = t("c501"), o = t("7a92");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        t("b9b4");
        var s = t("f0c5"), i = Object(s.a)(o.default, u.b, u.c, !1, null, "0de80e97", null, !1, u.a, void 0);
        e.default = i.exports;
    },
    "7a92": function(n, e, t) {
        t.r(e);
        var u = t("d50a"), o = t.n(u);
        for (var a in u) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        e.default = o.a;
    },
    b9b4: function(n, e, t) {
        var u = t("292f");
        t.n(u).a;
    },
    c501: function(n, e, t) {
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var u = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    d50a: function(n, e, t) {
        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = u(t("7d67")), a = u(t("f9d4")), s = {
            mixins: [ o.default, a.default ],
            props: {
                building_id: {
                    type: [ String, Number ]
                },
                show_surplus_houses: {
                    type: Boolean
                },
                surplus_apartment_count: {
                    type: Number
                },
                surplus_houses: {
                    type: Array
                }
            },
            methods: {
                goCall: function() {
                    this.$emit("goCall");
                },
                goSurplusApartments: function(n) {
                    var e = this.getSceneParam().building_id, t = n.currentTarget.dataset, u = t.name, o = t.id;
                    this.goSubPagePath("/pages/building/price/main?building_id=".concat(e, "&title=").concat(u, "&house_id=").concat(o, "&type=surplus_apartments"));
                }
            }
        };
        e.default = s;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_surplus_houses-create-component", {
    "pages/building/_components/_surplus_houses-create-component": function(n, e, t) {
        t("543d").createComponent(t("3294"));
    }
}, [ [ "pages/building/_components/_surplus_houses-create-component" ] ] ]);
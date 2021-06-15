require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/favourite/_empty_tip" ], {
    2011: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            components: {
                EmptyBox: function() {
                    t.e("components/views/empty_box").then(function() {
                        return resolve(t("8c0b"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = o;
    },
    5382: function(e, n, t) {},
    "66dd": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "677f": function(e, n, t) {
        t.r(n);
        var o = t("66dd"), a = t("80c2");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("8e4c8");
        var r = t("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, "74913584", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "80c2": function(e, n, t) {
        t.r(n);
        var o = t("2011"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = a.a;
    },
    "8e4c8": function(e, n, t) {
        var o = t("5382");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/favourite/_empty_tip-create-component", {
    "pages/personal_package/favourite/_empty_tip-create-component": function(e, n, t) {
        t("543d").createComponent(t("677f"));
    }
}, [ [ "pages/personal_package/favourite/_empty_tip-create-component" ] ] ]);
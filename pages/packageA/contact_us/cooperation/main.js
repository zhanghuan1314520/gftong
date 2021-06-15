require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/contact_us/cooperation/main" ], {
    "1f50": function(n, e, o) {
        o.r(e);
        var a = o("4e4b"), t = o("2893");
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        o("c1bb");
        var r = o("f0c5"), u = Object(r.a)(t.default, a.b, a.c, !1, null, "2ff946e8", null, !1, a.a, void 0);
        e.default = u.exports;
    },
    2893: function(n, e, o) {
        o.r(e);
        var a = o("6a1c"), t = o.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = t.a;
    },
    "4e4b": function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {
            return a;
        });
        var a = {
            fangchanCooperationForm: function() {
                return Promise.all([ o.e("common/vendor"), o.e("node-modules/fangchan-base/components/views/fangchan-cooperation-form") ]).then(o.bind(null, "1482"));
            }
        }, t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "6a1c": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            onShareAppMessage: function() {
                var n = encodeURIComponent("/pages/packageA/contact_us/cooperation/main");
                return this.getShareInfo({
                    title: "商务合作",
                    path: "/pages/index/main?sub_page=".concat(n)
                });
            }
        };
        e.default = a;
    },
    be83: function(n, e, o) {},
    c1bb: function(n, e, o) {
        var a = o("be83");
        o.n(a).a;
    },
    e0ec: function(n, e, o) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            o("6cdc"), e(o("66fd")), n(e(o("1f50")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "e0ec", "common/runtime", "common/vendor" ] ] ]);
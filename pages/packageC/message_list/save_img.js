require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/message_list/save_img" ], {
    "0045": function(n, e, a) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {};
        e.default = t;
    },
    "650b": function(n, e, a) {
        a.r(e);
        var t = a("0045"), o = a.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = o.a;
    },
    8040: function(n, e, a) {
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return c;
        }), a.d(e, "a", function() {
            return t;
        });
        var t = {
            fangchanMessageSaveImg: function() {
                return Promise.all([ a.e("common/vendor"), a.e("node-modules/fangchan-base/components/views/fangchan-message-save-img") ]).then(a.bind(null, "a3f4"));
            }
        }, o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "90fc": function(n, e, a) {
        a.r(e);
        var t = a("8040"), o = a("650b");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            a.d(e, n, function() {
                return o[n];
            });
        }(c);
        var u = a("f0c5"), f = Object(u.a)(o.default, t.b, t.c, !1, null, "71e574eb", null, !1, t.a, void 0);
        e.default = f.exports;
    },
    bd0c: function(n, e, a) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            a("6cdc"), e(a("66fd")), n(e(a("90fc")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "bd0c", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/inherit/done" ], {
    "16db": function(e, n, o) {},
    "1e5f": function(e, n, o) {
        o.r(n);
        var t = o("e985"), a = o.n(t);
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return t[e];
            });
        }(r);
        n.default = a.a;
    },
    3636: function(e, n, o) {
        o.r(n);
        var t = o("be05"), a = o("1e5f");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            o.d(n, e, function() {
                return a[e];
            });
        }(r);
        o("8fad");
        var c = o("f0c5"), u = Object(c.a)(a.default, t.b, t.c, !1, null, "0594ca0a", null, !1, t.a, void 0);
        n.default = u.exports;
    },
    "8fad": function(e, n, o) {
        var t = o("16db");
        o.n(t).a;
    },
    be05: function(e, n, o) {
        o.d(n, "b", function() {
            return t;
        }), o.d(n, "c", function() {
            return a;
        }), o.d(n, "a", function() {});
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    e985: function(e, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            components: {
                JoinGroup: function() {
                    o.e("components/views/join_group").then(function() {
                        return resolve(o("3fc3"));
                    }.bind(null, o)).catch(o.oe);
                },
                SelectedAnswers: function() {
                    o.e("pages/personal_package/_query_components/selected_answers").then(function() {
                        return resolve(o("d17c"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            props: {
                answered_questions: Array,
                result: String,
                desc: String
            }
        };
        n.default = t;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/personal_package/inherit/done-create-component", {
    "pages/personal_package/inherit/done-create-component": function(e, n, o) {
        o("543d").createComponent(o("3636"));
    }
}, [ [ "pages/personal_package/inherit/done-create-component" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_opening_info" ], {
    "01fd": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            props: {
                current_house: {
                    type: Object
                },
                macode_url: {
                    type: String
                }
            },
            data: function() {
                return {
                    howmany: 3
                };
            },
            computed: {
                presell_nos: function() {
                    var n = this.current_house.presell_no;
                    return n ? n.split(",") : [];
                },
                presell_nos_slice: function() {
                    return this.presell_nos.slice(0, this.howmany);
                },
                showCollapse: function() {
                    return this.presell_nos.length > 3;
                },
                showEllipsis: function() {
                    return this.showCollapse && 3 === this.howmany ? "..." : "";
                }
            },
            methods: {
                onShowAll: function(n) {
                    this.howmany = n ? this.presell_nos.length : 3;
                }
            },
            components: {
                CollapseBtn: function() {
                    o.e("pages/building/_components/_collapse_btn").then(function() {
                        return resolve(o("d190"));
                    }.bind(null, o)).catch(o.oe);
                },
                Disclaimer: function() {
                    Promise.all([ o.e("common/vendor"), o.e("components/views/disclaimer") ]).then(function() {
                        return resolve(o("db46"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        e.default = t;
    },
    2077: function(n, e, o) {
        o.r(e);
        var t = o("01fd"), i = o.n(t);
        for (var c in t) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = i.a;
    },
    "508b": function(n, e, o) {},
    "5df7": function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    b2e0: function(n, e, o) {
        o.r(e);
        var t = o("5df7"), i = o("2077");
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(n) {
            o.d(e, n, function() {
                return i[n];
            });
        }(c);
        o("ec2f");
        var l = o("f0c5"), r = Object(l.a)(i.default, t.b, t.c, !1, null, "1da0dccc", null, !1, t.a, void 0);
        e.default = r.exports;
    },
    ec2f: function(n, e, o) {
        var t = o("508b");
        o.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_opening_info-create-component", {
    "pages/building/_components/_opening_info-create-component": function(n, e, o) {
        o("543d").createComponent(o("b2e0"));
    }
}, [ [ "pages/building/_components/_opening_info-create-component" ] ] ]);
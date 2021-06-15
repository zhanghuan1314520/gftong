require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/_red_packet_activity" ], {
    "03f0": function(t, e, n) {},
    "09bc": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            props: {
                is_consultant: {
                    type: Boolean,
                    default: !1
                },
                config: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            data: function() {
                return {
                    show_detail: !1
                };
            },
            methods: {
                showDetail: function() {
                    this.show_detail = !0;
                },
                hideDetail: function() {
                    this.show_detail = !1;
                },
                openComment: function() {
                    this.show_detail && this.hideDetail(), this.$emit("open-comment");
                }
            }
        };
        e.default = o;
    },
    1960: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(t) {
                t.stopPropagation();
            });
        }, i = [];
    },
    "6ffc": function(t, e, n) {
        n.r(e);
        var o = n("1960"), i = n("fb5f");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("94de");
        var c = n("f0c5"), u = Object(c.a)(i.default, o.b, o.c, !1, null, "1537d031", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "94de": function(t, e, n) {
        var o = n("03f0");
        n.n(o).a;
    },
    fb5f: function(t, e, n) {
        n.r(e);
        var o = n("09bc"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/comments/_red_packet_activity-create-component", {
    "pages/building/comments/_red_packet_activity-create-component": function(t, e, n) {
        n("543d").createComponent(n("6ffc"));
    }
}, [ [ "pages/building/comments/_red_packet_activity-create-component" ] ] ]);
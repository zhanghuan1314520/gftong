(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/wx_identify_btn" ], {
    "08de6": function(e, t, n) {
        n.r(t);
        var o = n("437c"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    "437c": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                text: {
                    type: String,
                    default: ""
                },
                title: {
                    type: String,
                    default: ""
                },
                link: {
                    type: String,
                    default: ""
                },
                shareShow: {
                    type: String,
                    default: "on"
                }
            },
            methods: {
                goIdentifyWeb: function(e) {
                    var t = e.currentTarget.dataset, n = t.link, o = t.title, i = t.shareShow;
                    this.$checkIdentifyQr({
                        link: n,
                        title: o,
                        shareShow: i
                    });
                }
            }
        };
        t.default = o;
    },
    ab2b: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    edc9: function(e, t, n) {
        n.r(t);
        var o = n("ab2b"), i = n("08de6");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        var c = n("f0c5"), r = Object(c.a)(i.default, o.b, o.c, !1, null, "e6ee6d02", null, !1, o.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/wx_identify_btn-create-component", {
    "components/views/wx_identify_btn-create-component": function(e, t, n) {
        n("543d").createComponent(n("edc9"));
    }
}, [ [ "components/views/wx_identify_btn-create-component" ] ] ]);
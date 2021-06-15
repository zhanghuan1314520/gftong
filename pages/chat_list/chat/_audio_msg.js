require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/_audio_msg" ], {
    "609d": function(e, n, t) {
        var a = t("67ee");
        t.n(a).a;
    },
    6418: function(e, n, t) {
        t.r(n);
        var a = t("6528"), o = t("a6d2");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("609d");
        var c = t("f0c5"), d = Object(c.a)(o.default, a.b, a.c, !1, null, "302c7298", null, !1, a.a, void 0);
        n.default = d.exports;
    },
    6528: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "67ee": function(e, n, t) {},
    a6d2: function(e, n, t) {
        t.r(n);
        var a = t("c4d3"), o = t.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n.default = o.a;
    },
    c4d3: function(e, n, t) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = a(t("cbd7")), r = a(t("bee9")), c = {
            props: {
                msg: Object
            },
            data: function() {
                return {
                    reading: !1
                };
            },
            beforeDestroy: function() {
                r.default.destroy();
            },
            methods: {
                read: function() {
                    var e = this;
                    this.reading ? this.readEnd() : (r.default.start(this.msg.url, {
                        onEnd: function() {
                            console.error("on end"), e.reading = !1;
                        }
                    }), this.reading = !0, o.default.readAudioMsg(this.msg));
                },
                readEnd: function() {
                    this.reading = !1, r.default.stop();
                }
            }
        };
        n.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/chat_list/chat/_audio_msg-create-component", {
    "pages/chat_list/chat/_audio_msg-create-component": function(e, n, t) {
        t("543d").createComponent(t("6418"));
    }
}, [ [ "pages/chat_list/chat/_audio_msg-create-component" ] ] ]);
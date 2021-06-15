require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/audio/_item" ], {
    "0606": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            WAITING: "waiting",
            PLAYING: "playing"
        }, a = {
            components: {},
            props: {
                link: {
                    type: String
                },
                title: {
                    type: String
                },
                duration: {
                    type: String
                },
                playing: {
                    type: Boolean
                }
            },
            watch: {
                playing: function(t, n) {
                    t == n || t || this.stop();
                }
            },
            data: function() {
                return {
                    status: i.WAITING
                };
            },
            methods: {
                onPress: function() {
                    this.status === i.WAITING ? this.play() : this.status === i.PLAYING && this.stop();
                },
                play: function() {
                    this.status = i.PLAYING, this.$emit("play");
                },
                stop: function() {
                    this.status = i.WAITING, this.$emit("stop");
                }
            }
        };
        n.default = a;
    },
    1105: function(t, n, e) {
        e.r(n);
        var i = e("0606"), a = e.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(o);
        n.default = a.a;
    },
    7251: function(t, n, e) {
        e.r(n);
        var i = e("e392"), a = e("1105");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        e("afab");
        var u = e("f0c5"), c = Object(u.a)(a.default, i.b, i.c, !1, null, "252e6c56", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    afab: function(t, n, e) {
        var i = e("cda2");
        e.n(i).a;
    },
    cda2: function(t, n, e) {},
    e392: function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/audio/_item-create-component", {
    "pages/building/audio/_item-create-component": function(t, n, e) {
        e("543d").createComponent(e("7251"));
    }
}, [ [ "pages/building/audio/_item-create-component" ] ] ]);
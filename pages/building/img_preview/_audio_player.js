require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/img_preview/_audio_player" ], {
    "1e53": function(n, e, t) {
        var i = t("ed86");
        t.n(i).a;
    },
    4653: function(n, e, t) {
        t.d(e, "b", function() {
            return i;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "6b10": function(n, e, t) {
        t.r(e);
        var i = t("bce6"), o = t.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(r);
        e.default = o.a;
    },
    bce6: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = t("ed08"), o = {
            data: function() {
                return {
                    show: !1,
                    progress: 0
                };
            },
            props: {
                playing: Boolean,
                time: Number,
                running_time: Number
            },
            watch: {
                playing: function(n, e) {
                    n && n != e && (this.show = !0);
                },
                running_time: function(n) {
                    this.time && (this.progress = parseInt(n / this.time * 100));
                }
            },
            computed: {
                duration: function() {
                    return (0, i.handleSeconds)(this.time);
                },
                running_duration: function() {
                    return (0, i.handleSeconds)(this.running_time);
                }
            },
            methods: {
                onPress: function() {
                    this.playing ? this.stop() : this.play();
                },
                play: function() {
                    this.$emit("play");
                },
                stop: function() {
                    this.$emit("stop");
                },
                onClose: function() {
                    this.show = !1, this.stop();
                },
                changeProgress: function(n) {
                    console.log("change progress", n), this.progress = n.target.value, this.$emit("seek", this.progress / 100);
                }
            }
        };
        e.default = o;
    },
    d48a: function(n, e, t) {
        t.r(e);
        var i = t("4653"), o = t("6b10");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        t("1e53");
        var a = t("f0c5"), u = Object(a.a)(o.default, i.b, i.c, !1, null, "ded0c7f0", null, !1, i.a, void 0);
        e.default = u.exports;
    },
    ed86: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/img_preview/_audio_player-create-component", {
    "pages/building/img_preview/_audio_player-create-component": function(n, e, t) {
        t("543d").createComponent(t("d48a"));
    }
}, [ [ "pages/building/img_preview/_audio_player-create-component" ] ] ]);
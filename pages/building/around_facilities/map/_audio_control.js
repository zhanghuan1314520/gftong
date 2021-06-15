require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/around_facilities/map/_audio_control" ], {
    "198e": function(t, n, a) {
        a.r(n);
        var i = a("4e26"), o = a("c1ab");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(u);
        a("86fc");
        var e = a("f0c5"), s = Object(e.a)(o.default, i.b, i.c, !1, null, "6b847813", null, !1, i.a, void 0);
        n.default = s.exports;
    },
    "4e26": function(t, n, a) {
        a.d(n, "b", function() {
            return i;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "86fc": function(t, n, a) {
        var i = a("b7dd");
        a.n(i).a;
    },
    b7dd: function(t, n, a) {},
    c1ab: function(t, n, a) {
        a.r(n);
        var i = a("dbc0"), o = a.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            a.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = o.a;
    },
    dbc0: function(t, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = function(t) {
            return t > 9 ? t : "0".concat(t);
        }, o = function(t) {
            t = parseInt(t);
            var n = i(t % 60);
            return i(Math.floor(t / 60)) + ":" + n;
        }, u = {
            props: {
                title: {
                    type: String
                },
                audio_url: {
                    type: String
                }
            },
            data: function() {
                return {
                    status: "waiting",
                    bg_audio: "",
                    task_duration: 0,
                    task: 0
                };
            },
            beforeDestroy: function() {
                this.resetTask();
            },
            computed: {
                progress: function() {
                    if (this.bg_audio) {
                        var t = this.bg_audio.duration;
                        return 100 * (t - this.task_duration) / t + "%";
                    }
                    return "0%";
                },
                duration: function() {
                    return o(this.task_duration);
                }
            },
            methods: {
                changeStatus: function(t) {
                    this.status = t;
                },
                startTask: function() {
                    var t = this;
                    this.resetTask(), this.task = setInterval(function() {
                        t.task_duration--;
                    }, 1e3);
                },
                pauseTask: function() {
                    this.resetTask();
                },
                resetTask: function() {
                    this.task && clearInterval(this.task);
                },
                initAudio: function() {
                    var t = this;
                    this.bg_audio || (this.bg_audio = wx.getBackgroundAudioManager(), this.bg_audio.title = this.title, 
                    this.bg_audio.src = this.audio_url), this.bg_audio.onCanplay(function() {
                        t.changeStatus("doing"), setTimeout(function() {
                            t.task_duration = t.bg_audio.duration;
                        }, 500);
                    }), this.bg_audio.onPlay(function() {
                        console.error("playing"), t.startTask(), t.changeStatus("doing");
                    }), this.bg_audio.onPause(function() {
                        console.error("pause"), t.changeStatus("pause"), t.pauseTask();
                    }), this.bg_audio.onEnded(function() {
                        console.error("ended"), t.resetTask(), t.bg_audio = null, t.changeStatus("waiting");
                    });
                },
                start: function() {
                    this.bg_audio || this.initAudio(), console.error(this.bg_audio, this.title, this.audio_url), 
                    this.bg_audio.play();
                },
                pause: function() {
                    this.changeStatus("pause"), this.bg_audio.pause();
                }
            }
        };
        n.default = u;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/around_facilities/map/_audio_control-create-component", {
    "pages/building/around_facilities/map/_audio_control-create-component": function(t, n, a) {
        a("543d").createComponent(a("198e"));
    }
}, [ [ "pages/building/around_facilities/map/_audio_control-create-component" ] ] ]);
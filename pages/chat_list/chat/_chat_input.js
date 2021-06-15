require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/_chat_input" ], {
    "8cde": function(t, e, n) {
        n.r(e);
        var o = n("e22c"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    c0c5: function(t, e, n) {
        var o = n("de84");
        n.n(o).a;
    },
    c6a1: function(t, e, n) {
        n.r(e);
        var o = n("f19e"), r = n("8cde");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("c0c5");
        var a = n("f0c5"), c = Object(a.a)(r.default, o.b, o.c, !1, null, "20b6efba", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    de84: function(t, e, n) {},
    e22c: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e) {
            return s(t) || u(t, e) || a(t, e) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t, e) {
            if (t) {
                if ("string" == typeof t) return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
            }
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        function u(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], o = !0, r = !1, i = void 0;
                try {
                    for (var a, c = t[Symbol.iterator](); !(o = (a = c.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    r = !0, i = t;
                } finally {
                    try {
                        o || null == c.return || c.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return n;
            }
        }
        function s(t) {
            if (Array.isArray(t)) return t;
        }
        function d(t, e, n, o, r, i, a) {
            try {
                var c = t[i](a), u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(o, r);
        }
        function h(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, r) {
                    function i(t) {
                        d(c, o, r, i, a, "next", t);
                    }
                    function a(t) {
                        d(c, o, r, i, a, "throw", t);
                    }
                    var c = t.apply(e, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var l = o(n("a34a")), f = o(n("80d6")), p = o(n("bee9")), _ = wx.getSystemInfoSync(), m = _.windowWidth, g = _.windowHeight, v = _.screenHeight, b = _.safeArea, w = m / 750, x = g;
        b && b.height && (x = g - (v - b.bottom));
        var y, k, S, A = x - 160 * w, $ = {
            components: {
                ExpressionToggle: function() {
                    n.e("pages/chat_list/chat/_expression_toggle").then(function() {
                        return resolve(n("6eb2"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                msg: String,
                show_tools: Boolean,
                can_send: Boolean,
                is_peer_blocked: Boolean,
                show_expression: Boolean
            },
            data: function() {
                return {
                    focus: !1,
                    open_audio: !1,
                    recording: !1,
                    touching_record: !1,
                    show_cancel: !1,
                    audio_temp_path: "",
                    audio_duration: 0,
                    temp_duration: 60
                };
            },
            watch: {
                can_send: function(t) {
                    t || (this.focus = !1);
                }
            },
            computed: {
                hide_add_btn: function() {
                    return this.msg || !this.can_send;
                },
                hide_send_btn: function() {
                    return !this.msg || !this.can_send;
                },
                show_audio_rundown: function() {
                    return this.temp_duration <= 10;
                }
            },
            methods: {
                recordStart: function() {
                    var t = this;
                    this.$emit("checkBlocked"), this.is_peer_blocked || (this.$emit("hideBottom"), p.default.stop(), 
                    this.touching_record = !0, S = setTimeout(h(l.default.mark(function e() {
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (e.prev = 0, !t.touching_record) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 4, f.default.authRecord();

                              case 4:
                                wx.vibrateShort(), t.startRecord(), e.next = 9;
                                break;

                              case 8:
                                clearTimeout(S);

                              case 9:
                                e.next = 15;
                                break;

                              case 11:
                                e.prev = 11, e.t0 = e.catch(0), t.resetRecord(), console.error(e.t0);

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 11 ] ]);
                    })), 200));
                },
                recordEnd: function() {
                    y && y.stop(), this.resetRecord();
                },
                resetRecord: function() {
                    this.touching_record = !1, this.recording = !1, this.temp_duration = 60, k && clearTimeout(k), 
                    S && clearTimeout(S);
                },
                startRecord: function() {
                    var t = this;
                    (y = wx.getRecorderManager()).onStart(function() {
                        wx.vibrateShort(), t.recording = !0, t.checkAudioDuration();
                    }), y.onStop(function(e) {
                        var n = e.tempFilePath, o = e.duration;
                        !t.show_cancel && o < 1e3 ? wx.showToast({
                            title: "说话时间太短",
                            icon: "none"
                        }) : (t.show_cancel || (t.audio_temp_path = n, t.audio_duration = parseInt(o), t.uploadAudio()), 
                        t.show_cancel = !1);
                    }), y.start({
                        duration: 6e4,
                        format: "aac"
                    });
                },
                uploadAudio: function() {
                    var t = this;
                    return h(l.default.mark(function e() {
                        var n;
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, wx.showLoading(), e.next = 4, f.default.uploadAudio(t.audio_temp_path);

                              case 4:
                                n = e.sent, t.$emit("sendAudio", {
                                    url: n,
                                    duration: t.audio_duration
                                }), wx.hideLoading(), e.next = 13;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(0), console.error(e.t0), wx.hideLoading();

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 9 ] ]);
                    }))();
                },
                checkAudioDuration: function() {
                    var t = this;
                    k = setTimeout(function() {
                        t.temp_duration -= 1, t.temp_duration <= 0 ? t.recordEnd() : t.checkAudioDuration();
                    }, 1e3);
                },
                checkRecordCancel: function(t) {
                    var e = r(t.touches, 1)[0], n = e.clientY;
                    e.pageY, this.show_cancel = n < A;
                },
                toggleAudio: function() {
                    this.$emit("checkBlocked"), this.is_peer_blocked || (this.open_audio = !this.open_audio, 
                    this.$emit("hideBottom"));
                },
                changeMsg: function(t) {
                    this.$emit("changeMsg", t.target.value);
                },
                onFocus: function() {
                    this.focus = !0;
                },
                onBlur: function() {
                    this.focus = !1;
                },
                send: function(t) {
                    this.$emit("sendMsg", t.target.value);
                },
                tagSend: function() {
                    this.$emit("sendMsg", this.msg), setTimeout(this.onFocus);
                },
                submitSend: function(t) {
                    var e = t.target.value.msg;
                    this.$emit("sendMsg", e);
                }
            }
        };
        e.default = $;
    },
    f19e: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/chat_list/chat/_chat_input-create-component", {
    "pages/chat_list/chat/_chat_input-create-component": function(t, e, n) {
        n("543d").createComponent(n("c6a1"));
    }
}, [ [ "pages/chat_list/chat/_chat_input-create-component" ] ] ]);
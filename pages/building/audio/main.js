require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/audio/main" ], {
    2982: function(n, t, i) {},
    "326e": function(n, t, i) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            i("6cdc"), t(i("66fd")), n(t(i("ffef")).default);
        }).call(this, i("543d").createPage);
    },
    "499c": function(n, t, i) {
        var e = i("2982");
        i.n(e).a;
    },
    "75bb": function(n, t, i) {
        i.r(t);
        var e = i("853a"), o = i.n(e);
        for (var u in e) [ "default" ].indexOf(u) < 0 && function(n) {
            i.d(t, n, function() {
                return e[n];
            });
        }(u);
        t.default = o.a;
    },
    "853a": function(n, t, i) {
        function e(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function o(n, t) {
            var i = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var e = Object.getOwnPropertySymbols(n);
                t && (e = e.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })), i.push.apply(i, e);
            }
            return i;
        }
        function u(n) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(i), !0).forEach(function(t) {
                    a(n, t, i[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                });
            }
            return n;
        }
        function a(n, t, i) {
            return t in n ? Object.defineProperty(n, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = i, n;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = i("2f62"), s = e(i("8e44")), c = e(i("ba1b")), l = e(i("d1fa")), d = i("63ae"), f = e(i("865e")), _ = 0, g = {
            mixins: [ l.default ],
            components: {
                Consultants: function() {
                    i.e("pages/building/_components/_excellent_consultants").then(function() {
                        return resolve(i("d91a"));
                    }.bind(null, i)).catch(i.oe);
                },
                House: function() {
                    i.e("components/business/whole_building_item").then(function() {
                        return resolve(i("51f3"));
                    }.bind(null, i)).catch(i.oe);
                },
                Item: function() {
                    i.e("pages/building/audio/_item").then(function() {
                        return resolve(i("7251"));
                    }.bind(null, i)).catch(i.oe);
                },
                CommonFooter: function() {
                    Promise.all([ i.e("common/vendor"), i.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(i("bf22"));
                    }.bind(null, i)).catch(i.oe);
                }
            },
            data: function() {
                return {
                    title: "",
                    house: {},
                    excellent_consultants: [],
                    bg_audio: null,
                    around_time: 0,
                    around_running_time: 0,
                    detail_time: 0,
                    detail_running_time: 0,
                    zone_time: 0,
                    zone_running_time: 0,
                    audio_playing_type: ""
                };
            },
            computed: u(u({}, (0, r.mapState)([ "consultantCard", "share_by_consultant_uid", "current_consultant_uid" ])), {}, {
                around_audio: function() {
                    return this.getUrl("around_facilities");
                },
                detail_audio: function() {
                    return this.getUrl("detail_infos");
                },
                zone_audio: function() {
                    return this.getUrl("zone_sections");
                },
                show_layout_audio: function() {
                    return this.house.audios && this.house.audios.some(function(n) {
                        return "layout_image" === n.position;
                    });
                }
            }),
            onLoad: function(n) {
                var t = n.building_id;
                this.getData(t);
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query.building_id, t = encodeURIComponent("/pages/building/audio/main?building_id=".concat(n));
                return this.getShareInfo({
                    title: "【".concat(this.title, "】音频讲解更直观，快来听听吧~"),
                    path: "/pages/building/main?building_id=".concat(n, "&sub_page=").concat(t)
                });
            },
            methods: {
                getUrl: function(n) {
                    var t = "";
                    return this.house.audios && this.house.audios.some(function(i) {
                        var e = i.position, o = i.url;
                        if (e === n) return t = o, !0;
                    }), t;
                },
                getData: function(n) {
                    var t = this, i = this.current_consultant_uid || this.share_by_consultant_uid;
                    s.default.getBuilding(n, "", "", "", i).then(function(n) {
                        t.title = "".concat(n.name), n.favourite = n.follow_info && n.follow_info.id, n.cover_photo_url = n.photos_urls && n.photos_urls.length ? n.photos_urls[0] : "", 
                        n.price_desc = "", n.surplus_houses_price = "", t.house = (0, d.mapHouseItem)(n), 
                        t.house.href = "/pages/building/main?building_id=".concat(n.building_id);
                    }), this.getConsultants(n);
                },
                getConsultants: function(n) {
                    var t = this;
                    c.default.excellentConsultants(n).then(function(n) {
                        t.excellent_consultants = n.slice(0, 3);
                    });
                },
                goLayout: function() {
                    wx.navigateTo({
                        url: "/pages/building/img_preview/main?type=layout&title=".concat(this.title, "&building_id=").concat(this.house.building_id || "")
                    });
                },
                stopRunningTime: function() {
                    _ && clearInterval(_);
                },
                resetRunningTime: function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this[this.audio_playing_type + "_running_time"] = n, this.stopRunningTime();
                },
                runClock: function() {
                    var n = this;
                    this.stopRunningTime(), _ = setInterval(function() {
                        var t = n.audio_playing_type + "_running_time";
                        n[t] < n.bg_audio.duration ? n[t] += 1 : n.stopRunningTime();
                    }, 1e3);
                },
                initAudio: function() {
                    var n = this;
                    if (!this.bg_audio) {
                        var t = wx.getBackgroundAudioManager();
                        this.bg_audio = t;
                    }
                    this.bg_audio.onPlay(function() {
                        n["".concat(n.audio_playing_type, "_running_time")] > 0 ? n.runClock() : (console.error("playing"), 
                        n.resetRunningTime(0), setTimeout(n.runClock, 300), f.default.play(n.bg_audio.src, {
                            building_id: n.house.building_id,
                            building_name: n.title
                        }));
                    }), this.bg_audio.onEnded(function() {
                        n.resetRunningTime(0), f.default.stop(), n.audio_playing_type = "", console.error("ended");
                    }), this.bg_audio.onStop(function() {
                        n.stopRunningTime(), f.default.stop(), n.audio_playing_type = "", console.error("stop");
                    });
                },
                playAudio: function(n) {
                    var t = this;
                    this.bg_audio || this.initAudio(), this.audio_playing_type = "", this.bg_audio.stop(), 
                    setTimeout(function() {
                        t.bg_audio.src = t[n + "_audio"] + "?v=" + new Date().getTime(), t.bg_audio.startTime = t[n + "_running_time"], 
                        t.bg_audio.play(), t.bg_audio.title = t.title, t.bg_audio.onCanplay(function() {
                            t.audio_playing_type = n, setTimeout(function() {
                                t[n + "_time"] = t.bg_audio.duration;
                            }, 100);
                        });
                    });
                },
                stopAudio: function() {
                    this.audio_playing_type = "", this.bg_audio.stop();
                },
                onSeek: function(n) {
                    var t = this.bg_audio.duration * n;
                    this.bg_audio.seek(t), this.resetRunningTime(t);
                },
                goConsultants: function() {
                    var n = this.$root.$mp.query.building_id;
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(n)
                    });
                }
            }
        };
        t.default = g;
    },
    c40c: function(n, t, i) {
        i.d(t, "b", function() {
            return e;
        }), i.d(t, "c", function() {
            return o;
        }), i.d(t, "a", function() {});
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    ffef: function(n, t, i) {
        i.r(t);
        var e = i("c40c"), o = i("75bb");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            i.d(t, n, function() {
                return o[n];
            });
        }(u);
        i("499c");
        var a = i("f0c5"), r = Object(a.a)(o.default, e.b, e.c, !1, null, "20ad9bbe", null, !1, e.a, void 0);
        t.default = r.exports;
    }
}, [ [ "326e", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
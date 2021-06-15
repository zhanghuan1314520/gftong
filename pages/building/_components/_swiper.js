require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_swiper" ], {
    "01dd": function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, t, n, i, r, o, a) {
            try {
                var s = e[o](a), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(i, r);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, o) {
                    function a(e) {
                        r(l, i, o, a, s, "next", e);
                    }
                    function s(e) {
                        r(l, i, o, a, s, "throw", e);
                    }
                    var l = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function a(e) {
            return c(e) || u(e) || l(e) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0;
            }
        }
        function u(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function c(e) {
            if (Array.isArray(e)) return h(e);
        }
        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var p = i(n("a34a")), d = n("63ae"), v = i(n("a0d0")), _ = n("371c"), f = i(n("2de8")), g = i(n("8f42")), m = function(e, t) {
            e && e.length && e.some(function(e) {
                if (e.type === t) return e.mini_url = (0, d.handleBuidingMiniBanner)(e.url), !0;
            });
        }, w = requirePlugin("live-player-plugin"), b = {
            mixins: [ f.default, (0, v.default)("vip_share_btn") ],
            data: function() {
                return {
                    current_count: 0,
                    selected_tab: "pic",
                    selected_index: 0,
                    tabs: [],
                    swiper_list: [],
                    min_loaded: !1,
                    loaded: !1,
                    webp: d.enable_webp,
                    living: !1,
                    forcoming: !1,
                    replay: !1,
                    show_live: !1,
                    live_time: ""
                };
            },
            computed: {
                pic_order: function() {
                    var e = this.current_count + 1;
                    return this.show_vr && (e -= 1), this.show_video && (e -= 1), this.show_panorama && (e -= 1), 
                    this.show_live && (e -= 1), this.show_planar_graph && (e -= 1), e;
                },
                show_planar_graph: function() {
                    return Boolean(this.planar_graph_url) && [ this.show_panorama, this.show_video, this.show_vr, this.show_live ].filter(function(e) {
                        return e;
                    }).length < 4;
                }
            },
            mounted: function() {
                if (this.getSceneParam().building_id, this.$watch(function() {
                    return {
                        show_panorama: this.show_panorama,
                        show_video: this.show_video,
                        show_vr: this.show_vr,
                        show_live: this.show_live,
                        show_planar_graph: this.show_planar_graph,
                        banners: this.banners.slice(0)
                    };
                }, function(e) {
                    var t = e.show_panorama, n = e.show_video, i = e.show_vr, r = e.show_planar_graph, o = e.show_live, s = e.banners, l = [ {
                        type: "pic",
                        name: "图片"
                    } ], u = [];
                    if (n && (this.selected_tab = "video", l.unshift({
                        type: "video",
                        name: "视频"
                    }), s && s.length)) {
                        var c = this.video_url || s[0];
                        u.unshift({
                            url: c,
                            type: "video"
                        });
                    }
                    if (r && (this.selected_tab = "planar_graph", l.unshift({
                        type: "planar_graph",
                        name: "总平"
                    }), u.unshift({
                        url: this.planar_graph_url,
                        type: "planar_graph"
                    })), i && (this.selected_tab = "vr", l.unshift({
                        type: "vr",
                        name: "VR"
                    }), u.unshift({
                        url: this.vr_url,
                        type: "vr"
                    })), t && (this.selected_tab = "panorama", l.unshift({
                        type: "panorama",
                        name: "航拍"
                    }), u.unshift({
                        url: this.panorama_url,
                        type: "panorama"
                    })), o && (this.selected_tab = "live", l.unshift({
                        type: "live",
                        name: "直播"
                    }), s && s.length)) {
                        var h = this.live_streaming.cover_photo_url || s[0];
                        u.unshift({
                            url: h,
                            type: "live"
                        });
                    }
                    var p = s.map(function(e) {
                        return {
                            url: e,
                            type: "pic"
                        };
                    });
                    u.push.apply(u, a(p)), r ? m(u, "planar_graph") : i ? m(u, "vr") : n ? m(u, "video") : t ? m(u, "panorama") : o ? m(u, "live") : u.length && (u[0].mini_url = (0, 
                    d.handleBuidingMiniBanner)(u[0].url)), this.tabs = l, this.swiper_list = u;
                }, {
                    immediate: !0
                }), console.log(this.live_streaming), this.live_streaming) {
                    var e = this.live_streaming, t = e.status, n = (e.room_id, e.start_time);
                    if (t && "结束" !== t ? (this.living = "直播中" === t, this.forcoming = "即将直播" === t, 
                    this.replay = !this.living && !this.forcoming && "回放" === t, this.show_live = this.living || this.forcoming || this.replay) : this.show_live = !1, 
                    n) {
                        var i = new Date(n.replace(/-/g, "/")), r = i.getMonth() + 1, o = i.getDate() > 9 ? i.getDate() : "0".concat(i.getDate()), s = i.getHours() > 9 ? i.getHours() : "0".concat(i.getHours()), l = i.getMinutes() > 9 ? i.getMinutes() : "0".concat(i.getMinutes());
                        this.live_time = "".concat(r, "月").concat(o, "日 ").concat(s, ":").concat(l);
                    }
                }
            },
            watch: {
                selected_tab: function(e, t) {
                    var n = this;
                    e && t && this.swiper_list.some(function(t, i) {
                        if (t.type === e) return n.current_count = i, !0;
                    });
                }
            },
            methods: {
                loadMinImg: function() {
                    this.min_loaded = !0;
                },
                loadImg: function() {
                    this.loaded = !0;
                },
                changeSelectTab: function(e, t) {
                    this.selected_tab = e, this.selected_index = t;
                },
                tabShare: function() {
                    (0, _.sendCtmEvtLog)("楼盘详情页-顶部分享按钮点击"), this.$emit("showShareOption");
                },
                changeSwiper: function(e) {
                    var t = this;
                    this.current_count = e.target.current;
                    var n = this.swiper_list[this.current_count].type;
                    this.swiper_list.some(function(e, i) {
                        if (n === e.type) return t.selected_index = i, !0;
                    }), this.selected_tab = n;
                },
                tapSwiper: function(e) {
                    var t = this.swiper_list[e], n = t.type, i = t.url;
                    return "planar_graph" === n ? (this.$emit("goPlanarGraph"), void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--总平")) : "vr" === n ? (this.$emit("goVR"), 
                    void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--VR")) : "video" === n ? (this.$emit("goVideo"), 
                    void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--视频")) : "panorama" === n ? (this.$emit("goPanorama"), 
                    void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--航拍")) : "live" === n ? (wx.navigateTo({
                        url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(this.live_streaming.room_id, "&close_share_ticket=1")
                    }), void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--直播")) : (wx.previewImage({
                        current: i,
                        urls: this.banners
                    }), void (0, _.sendCtmEvtLog)("楼盘详情页-swiper--图片"));
                },
                checkLive: function(e, t) {
                    var n = this;
                    return o(p.default.mark(function i() {
                        var r, o;
                        return p.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.prev = 0, i.next = 3, w.getLiveStatus({
                                    room_id: e
                                });

                              case 3:
                                r = i.sent, console.error(r), r && r.liveStatus && (o = r.liveStatus, n.living = 101 === o, 
                                n.forcoming = 102 === o, n.replay = !n.living && !n.forcoming && "回放" === t, n.show_live = n.living || n.forcoming || n.replay, 
                                console.error(n.living, n.forcoming, n.replay)), i.next = 11;
                                break;

                              case 8:
                                i.prev = 8, i.t0 = i.catch(0), console.error("get live status", i.t0);

                              case 11:
                              case "end":
                                return i.stop();
                            }
                        }, i, null, [ [ 0, 8 ] ]);
                    }))();
                },
                openCompare: function() {
                    g.default.chooseBuilding(this.house.id), wx.navigateTo({
                        url: "/pages/building/choose/main"
                    });
                }
            },
            components: {
                BuildingImg: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/_components/common_img") ]).then(function() {
                        return resolve(n("dc534"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                house: Object,
                loading: {
                    type: Boolean
                },
                vr_url: {
                    type: String
                },
                show_vr: {
                    type: Boolean,
                    default: !1
                },
                banners: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                view_count: {
                    type: [ Number, String ],
                    defaut: ""
                },
                video_url: {
                    type: String
                },
                panorama_url: {
                    type: String
                },
                show_video: Boolean,
                show_panorama: Boolean,
                live_streaming: Object,
                planar_graph_url: {
                    type: String
                },
                open_type: {
                    type: String
                }
            }
        };
        t.default = b;
    },
    "22f0": function(e, t, n) {
        var i = n("bd4e");
        n.n(i).a;
    },
    6258: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    "833d": function(e, t, n) {
        n.r(t);
        var i = n("6258"), r = n("accf");
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("22f0");
        var a = n("f0c5"), s = Object(a.a)(r.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = s.exports;
    },
    accf: function(e, t, n) {
        n.r(t);
        var i = n("01dd"), r = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = r.a;
    },
    bd4e: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_swiper-create-component", {
    "pages/building/_components/_swiper-create-component": function(e, t, n) {
        n("543d").createComponent(n("833d"));
    }
}, [ [ "pages/building/_components/_swiper-create-component" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/video/main" ], {
    "441b": function(e, t, n) {
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("2f62"), c = n("371c"), u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("8e44")), a = {
            components: {},
            onShareAppMessage: function() {
                var e = this.$root.$mp.query, t = e.building_id, n = e.src, o = e.title, r = encodeURIComponent("/pages/building/video/main?building_id=".concat(t, "&src=").concat(n, "&title=").concat(o));
                return this.getShareInfo({
                    title: "【".concat(o, "】的视频介绍在这里，快来看看呀~"),
                    path: "/pages/building/main?building_id=".concat(t, "&sub_page=").concat(r),
                    imageUrl: this.video_url
                });
            },
            data: function() {
                return {
                    src: "",
                    video_url: ""
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, i.mapState)([ "showVideo" ])),
            onShow: function() {
                var e = this.$root.$mp.query, t = e.building_id, n = e.title, o = e.src;
                (0, c.sendUserLog)("fc_building_video_view", {
                    d_key: t,
                    d_paras: {
                        building_name: n,
                        link: decodeURIComponent(o),
                        city: "hz"
                    },
                    d_event: 0
                });
            },
            onLoad: function(e) {
                this.src = decodeURIComponent(e.src), this.title = e.title, this.getData();
            },
            methods: {
                getData: function() {
                    var e = this, t = this.$root.$mp.query.building_id;
                    u.default.getBuilding(t).then(function(t) {
                        var n = t.video_resource ? t.video_resource.photo_url : "", o = t.photos_urls && t.photos_urls.length ? t.photos_urls[0] : "";
                        e.video_url = n || o;
                    });
                }
            }
        };
        t.default = a;
    },
    "6a73": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("7342")).default);
        }).call(this, n("543d").createPage);
    },
    7342: function(e, t, n) {
        n.r(t);
        var o = n("848a"), r = n("ff76");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("c6de");
        var c = n("f0c5"), u = Object(c.a)(r.default, o.b, o.c, !1, null, "f6893464", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "848a": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    c516: function(e, t, n) {},
    c6de: function(e, t, n) {
        var o = n("c516");
        n.n(o).a;
    },
    ff76: function(e, t, n) {
        n.r(t);
        var o = n("441b"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = r.a;
    }
}, [ [ "6a73", "common/runtime", "common/vendor" ] ] ]);
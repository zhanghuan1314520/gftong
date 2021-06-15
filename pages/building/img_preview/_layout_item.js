require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/img_preview/_layout_item" ], {
    "5faa": function(e, n, i) {
        i.d(n, "b", function() {
            return t;
        }), i.d(n, "c", function() {
            return o;
        }), i.d(n, "a", function() {});
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "6e3a": function(e, n, i) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            components: {
                AudioPlayer: function() {
                    Promise.all([ i.e("common/vendor"), i.e("pages/building/img_preview/_audio_player") ]).then(function() {
                        return resolve(i("d48a"));
                    }.bind(null, i)).catch(i.oe);
                },
                ImgTools: function() {
                    i.e("pages/building/img_preview/_img_tools").then(function() {
                        return resolve(i("f0bc"));
                    }.bind(null, i)).catch(i.oe);
                }
            },
            props: {
                url: Object,
                playing: Boolean,
                duration: Number,
                running_time: Number
            },
            computed: {
                tag_list: function() {
                    return this.url.tag_list && this.url.tag_list.slice(0, 3);
                }
            },
            methods: {
                preview: function() {
                    this.$emit("preview");
                },
                play: function() {
                    this.$emit("play");
                },
                stop: function() {
                    this.$emit("stop");
                },
                goVideo: function(e) {
                    this.$emit("goVideo", this.url.video_url);
                },
                openVr: function() {
                    this.$emit("openVr", this.url.vr_link);
                },
                seek: function(e) {
                    this.$emit("seek", e);
                }
            }
        };
        n.default = t;
    },
    "892f": function(e, n, i) {
        i.r(n);
        var t = i("6e3a"), o = i.n(t);
        for (var u in t) [ "default" ].indexOf(u) < 0 && function(e) {
            i.d(n, e, function() {
                return t[e];
            });
        }(u);
        n.default = o.a;
    },
    "9f91": function(e, n, i) {
        i.r(n);
        var t = i("5faa"), o = i("892f");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            i.d(n, e, function() {
                return o[e];
            });
        }(u);
        i("ad94");
        var a = i("f0c5"), r = Object(a.a)(o.default, t.b, t.c, !1, null, "46f5b692", null, !1, t.a, void 0);
        n.default = r.exports;
    },
    ad2e: function(e, n, i) {},
    ad94: function(e, n, i) {
        var t = i("ad2e");
        i.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/img_preview/_layout_item-create-component", {
    "pages/building/img_preview/_layout_item-create-component": function(e, n, i) {
        i("543d").createComponent(i("9f91"));
    }
}, [ [ "pages/building/img_preview/_layout_item-create-component" ] ] ]);
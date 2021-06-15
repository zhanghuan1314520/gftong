require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/price_detail/_detail" ], {
    "32af": function(e, i, t) {},
    3517: function(e, i, t) {
        t.r(i);
        var n = t("78f1"), a = t.n(n);
        for (var o in n) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(i, e, function() {
                return n[e];
            });
        }(o);
        i.default = a.a;
    },
    "78f1": function(e, i, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var a = n(t("55ed")), o = n(t("eed6")), l = {
            data: function() {
                return {
                    vr_link: ""
                };
            },
            computed: {
                show_disclaimer: function() {
                    return this.detail.building.activities && this.detail.building.activities.indexOf("vr_disclaimer") > -1;
                }
            },
            mixins: [ a.default, o.default ],
            components: {
                ImgTools: function() {
                    t.e("pages/building/img_preview/_img_tools").then(function() {
                        return resolve(t("f0bc"));
                    }.bind(null, t)).catch(t.oe);
                },
                AudioPlayer: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/building/img_preview/_audio_player") ]).then(function() {
                        return resolve(t("d48a"));
                    }.bind(null, t)).catch(t.oe);
                },
                VrTip: function() {
                    t.e("pages/building/img_preview/_vr_tip").then(function() {
                        return resolve(t("6f5f"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                detail: {
                    type: Object
                }
            },
            methods: {
                getOpenVr: function() {
                    var e = this.detail.building, i = e.id, t = e.name, n = encodeURIComponent("building_id=".concat(i)), a = "/pages/building/web_vr/main?building_id=".concat(i, "&link=").concat(encodeURIComponent(this.detail.layout_image.vr_url), "&title=").concat(t, "&detailParam=").concat(n);
                    this.openVr(a);
                },
                goLoanComputer: function() {
                    wx.navigateTo({
                        url: "/pages/loan_computer/main?total_price=".concat(this.detail.total_price)
                    });
                },
                showDecoraterSelect: function() {
                    this.detail.show_decorate_select && this.$emit("showDecoraterSelect");
                },
                previewImg: function() {
                    var e = this.detail.layout_image.image_url;
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                },
                goLayout: function(e) {
                    var i = this.detail.building.id;
                    wx.navigateTo({
                        url: "/pages/building/layout_detail/main?building_id=".concat(i, "&layout_id=").concat(e)
                    });
                },
                goVideo: function() {
                    var e = this.detail.building, i = e.id, t = e.name, n = this.detail.layout_image.video_url;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(i, "&title=").concat(t, "&src=").concat(n)
                    });
                },
                play: function() {
                    this.playAudio(0, this.detail.layout_image.audio_url);
                },
                stop: function() {
                    this.stopAudio(0);
                },
                seek: function(e) {
                    this.seekAudio(e);
                }
            }
        };
        i.default = l;
    },
    8565: function(e, i, t) {
        t.r(i);
        var n = t("db957"), a = t("3517");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(i, e, function() {
                return a[e];
            });
        }(o);
        t("948f");
        var l = t("f0c5"), u = Object(l.a)(a.default, n.b, n.c, !1, null, "715e7c1d", null, !1, n.a, void 0);
        i.default = u.exports;
    },
    "948f": function(e, i, t) {
        var n = t("32af");
        t.n(n).a;
    },
    db957: function(e, i, t) {
        t.d(i, "b", function() {
            return n;
        }), t.d(i, "c", function() {
            return a;
        }), t.d(i, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/price_detail/_detail-create-component", {
    "pages/building/price_detail/_detail-create-component": function(e, i, t) {
        t("543d").createComponent(t("8565"));
    }
}, [ [ "pages/building/price_detail/_detail-create-component" ] ] ]);
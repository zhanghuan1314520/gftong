require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_top_header" ], {
    "50fe": function(t, e, o) {
        o.r(e);
        var n = o("7630"), i = o("be48");
        for (var s in i) [ "default" ].indexOf(s) < 0 && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(s);
        o("fd0f");
        var r = o("f0c5"), a = Object(r.a)(i.default, n.b, n.c, !1, null, "1d3f8cf0", null, !1, n.a, void 0);
        e.default = a.exports;
    },
    7630: function(t, e, o) {
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return i;
        }), o.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    be48: function(t, e, o) {
        o.r(e);
        var n = o("d286"), i = o.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = i.a;
    },
    cd09: function(t, e, o) {},
    d286: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = o("371c"), i = {
            components: {},
            mixins: [],
            computed: {
                address_desc: function() {
                    var t = this.house;
                    return [ t.address, t.zone ].filter(function(t) {
                        return t;
                    }).join("-");
                },
                favourite_icon: function() {
                    var t = this.house.favourite;
                    return this.is_vip ? t ? "56_bell_action_vip" : "56_bell_normal" : t ? "56_bell_action" : "56_bell_normal";
                },
                headimg: function() {
                    var t = this.house, e = this.show_vr, o = t.photos_urls && t.photos_urls.length ? t.photos_urls[0] : "";
                    return e && (o = t.vr_resource.vr_photo_url), o + "?x-oss-process=image/resize,w_240,h_176";
                },
                tag: function() {
                    var t = this.house, e = t.tag_list, o = t.status;
                    return this.house.hide_status ? e && e.length ? e[0] : "" : o;
                },
                favourite_text: function() {
                    var t = "", e = this.house.favourite;
                    switch (this.house.status) {
                      case "????????????":
                        t = e ? "????????????" : "????????????";
                        break;

                      case "????????????":
                      case "????????????":
                      case "????????????":
                      case "????????????":
                        t = e ? "????????????" : "????????????";
                        break;

                      default:
                        t = e ? "????????????" : "????????????";
                    }
                    return t;
                },
                hot: function() {
                    var t = this.house.activities;
                    return t && t.indexOf("??????") > -1;
                }
            },
            methods: {
                tabShare: function() {
                    (0, n.sendCtmEvtLog)("???????????????-????????????????????????"), this.$emit("showShareOption");
                },
                tapPhoto: function() {
                    this.show_vr ? this.$emit("goVR") : this.$emit("goBuildingImg");
                }
            },
            watch: {
                follow_building_tip: function(t) {
                    var e = this;
                    this.show_follow_tip = !!t, t && setTimeout(function() {
                        e.show_follow_tip = !1;
                    }, 5e3);
                }
            },
            props: {
                show_vr: {
                    type: Boolean
                },
                is_vip: {
                    type: Boolean
                },
                house: {
                    type: Object
                },
                zone_section: {
                    type: String
                },
                open_type: {
                    type: String
                },
                follow_building_tip: {
                    type: String
                }
            },
            data: function() {
                return {
                    show_follow_tip: !1
                };
            }
        };
        e.default = i;
    },
    fd0f: function(t, e, o) {
        var n = o("cd09");
        o.n(n).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_top_header-create-component", {
    "pages/building/_components/_top_header-create-component": function(t, e, o) {
        o("543d").createComponent(o("50fe"));
    }
}, [ [ "pages/building/_components/_top_header-create-component" ] ] ]);
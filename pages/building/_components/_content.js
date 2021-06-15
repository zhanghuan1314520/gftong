require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_content" ], {
    "0d66": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            mixins: [ function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(o("b159")).default ],
            components: {
                BuildingQr: function() {
                    o.e("pages/building/_components/_qr").then(function() {
                        return resolve(o("a642"));
                    }.bind(null, o)).catch(o.oe);
                },
                CollapseBtn: function() {
                    o.e("pages/building/_components/_collapse_btn").then(function() {
                        return resolve(o("d190"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            data: function() {
                return {
                    howmany: 3
                };
            },
            computed: {
                show_qr: function() {
                    var n = this, e = [ "surplus_houses_price", "surplus_houses_presell_no", "metros" ].filter(function(e) {
                        return n.is_selling && n.house[e];
                    }).length;
                    return this.house.house_info && (e += this.house.house_info.length > 2), e;
                },
                metros: function() {
                    return this.house.metros && this.house.metros.length ? this.house.metros.map(function(n) {
                        return {
                            name: n,
                            ongoing: n.indexOf("在建") > -1
                        };
                    }) : [];
                },
                show_audio: function() {
                    var n = this.house.audios;
                    return Boolean(n && n.length);
                },
                audio_url: function() {
                    return "/pages/building/audio/main?building_id=".concat(this.house.id);
                },
                showInfoCollapse: function() {
                    return this.house.house_info && this.house.house_info.length > 5;
                },
                presell_nos: function() {
                    var n = this.house.surplus_houses_presell_no;
                    return n ? n.split(",") : [];
                },
                presell_nos_slice: function() {
                    return this.presell_nos.slice(0, this.howmany);
                },
                showCollapse: function() {
                    return this.presell_nos.length > 3;
                },
                showEllipsis: function() {
                    return this.showCollapse && 3 === this.howmany ? "..." : "";
                }
            },
            methods: {
                goLocation: function() {
                    var n = this.house, e = n.latitude, o = n.longitude, t = n.name, s = n.address;
                    e && o && wx.openLocation({
                        latitude: Number(e),
                        longitude: Number(o),
                        name: t,
                        address: s
                    });
                },
                onShowAll: function(n) {
                    this.howmany = n ? this.presell_nos.length : 3;
                },
                onShowAllInfo: function(n) {
                    this.$emit("onCollapse", n);
                }
            },
            props: {
                house: {
                    type: Object,
                    default: {}
                },
                is_opened: {
                    type: Boolean,
                    default: !1
                },
                is_business: {
                    type: Boolean,
                    default: !1
                },
                is_selling: {
                    type: Boolean,
                    default: !1
                },
                show_surplus_houses: {
                    type: Boolean,
                    default: !1
                },
                baseinfos: {
                    type: Array,
                    default: []
                },
                macode_url: {
                    type: String
                }
            }
        };
        e.default = t;
    },
    "1cd3": function(n, e, o) {
        o.r(e);
        var t = o("f872"), s = o("85b4");
        for (var u in s) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return s[n];
            });
        }(u);
        o("8405");
        var i = o("f0c5"), l = Object(i.a)(s.default, t.b, t.c, !1, null, "429ebc72", null, !1, t.a, void 0);
        e.default = l.exports;
    },
    2708: function(n, e, o) {},
    8405: function(n, e, o) {
        var t = o("2708");
        o.n(t).a;
    },
    "85b4": function(n, e, o) {
        o.r(e);
        var t = o("0d66"), s = o.n(t);
        for (var u in t) [ "default" ].indexOf(u) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(u);
        e.default = s.a;
    },
    f872: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return s;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, s = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_content-create-component", {
    "pages/building/_components/_content-create-component": function(n, e, o) {
        o("543d").createComponent(o("1cd3"));
    }
}, [ [ "pages/building/_components/_content-create-component" ] ] ]);
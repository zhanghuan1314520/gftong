require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_timeline_billboard" ], {
    "1a63": function(e, o, t) {
        var n = t("e329");
        t.n(n).a;
    },
    "282e": function(e, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var n = {
            data: function() {
                return {
                    name: "",
                    status: "",
                    zone: "",
                    address: "",
                    photo_url: "",
                    cover_720: "",
                    price: [],
                    layout_type: "",
                    layout_description: "",
                    layout_area: "",
                    layout_img: ""
                };
            },
            mounted: function(e) {
                var o = this.$root.$mp.query, t = o.name, n = (o.building_id, o.type), i = void 0 === n ? "" : n, a = o.layout_description, r = o.layout_area, d = o.layout_img, u = (o.house_id, 
                o.status), c = o.zone, l = o.address, s = o.photo_url, p = void 0 === s ? "" : s, f = o.cover_720, m = void 0 === f ? "" : f, _ = o.price;
                console.error(this.$root.$mp.query, e), this.name = decodeURIComponent(t), this.status = decodeURIComponent(u), 
                this.zone = decodeURIComponent(c), this.address = decodeURIComponent(l), this.photo_url = decodeURIComponent(p).replace("/format,webp", "/format,jpg"), 
                this.cover_720 = decodeURIComponent(m).replace("/format,webp", "/format,jpg"), this.price = _ ? decodeURIComponent(_).split(",") : [], 
                this.layout_type = decodeURIComponent(i), this.layout_description = a ? decodeURIComponent(a) : "", 
                this.layout_area = r && "null" !== r ? decodeURIComponent(r) : "", this.layout_img = decodeURIComponent(d);
            },
            computed: {
                headimg: function() {
                    return this.cover_720 || this.photo_url || this.layout_img;
                },
                location_desc: function() {
                    return console.error([ this.zone, this.address ].filter(function(e) {
                        return e;
                    }).join(" - ")), [ this.zone, this.address ].filter(function(e) {
                        return e;
                    }).join(" - ");
                }
            }
        };
        o.default = n;
    },
    "4d37": function(e, o, t) {
        t.r(o);
        var n = t("5f4a"), i = t("6baa");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(o, e, function() {
                return i[e];
            });
        }(a);
        t("1a63");
        var r = t("f0c5"), d = Object(r.a)(i.default, n.b, n.c, !1, null, "c9abbd40", null, !1, n.a, void 0);
        o.default = d.exports;
    },
    "5f4a": function(e, o, t) {
        t.d(o, "b", function() {
            return n;
        }), t.d(o, "c", function() {
            return i;
        }), t.d(o, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    "6baa": function(e, o, t) {
        t.r(o);
        var n = t("282e"), i = t.n(n);
        for (var a in n) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(o, e, function() {
                return n[e];
            });
        }(a);
        o.default = i.a;
    },
    e329: function(e, o, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_timeline_billboard-create-component", {
    "pages/building/_components/_timeline_billboard-create-component": function(e, o, t) {
        t("543d").createComponent(t("4d37"));
    }
}, [ [ "pages/building/_components/_timeline_billboard-create-component" ] ] ]);
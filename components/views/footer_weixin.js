(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/footer_weixin" ], {
    "565d": function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "5e7e": function(e, n, t) {
        var o = t("ef55");
        t.n(o).a;
    },
    "8f92": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            daily_report: "daily_report.png",
            trade_data: "jysj.jpeg",
            zgcx: "zgcx.jpeg",
            latest_lotted: "zgcx.jpeg",
            question: "gfdy.jpeg",
            material: "gfzl.jpeg",
            prepayment: "prepayment.png"
        }, a = {
            props: {
                type: {
                    type: String,
                    default: ""
                },
                festival: {
                    type: Boolean,
                    default: !1
                },
                undertint: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                qr: function() {
                    return "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/qr/".concat(o[this.type] || "app-qr.png");
                }
            }
        };
        n.default = a;
    },
    dc1f: function(e, n, t) {
        t.r(n);
        var o = t("565d"), a = t("ecf55");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(c);
        t("5e7e");
        var r = t("f0c5"), f = Object(r.a)(a.default, o.b, o.c, !1, null, "1049b610", null, !1, o.a, void 0);
        n.default = f.exports;
    },
    ecf55: function(e, n, t) {
        t.r(n);
        var o = t("8f92"), a = t.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = a.a;
    },
    ef55: function(e, n, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/footer_weixin-create-component", {
    "components/views/footer_weixin-create-component": function(e, n, t) {
        t("543d").createComponent(t("dc1f"));
    }
}, [ [ "components/views/footer_weixin-create-component" ] ] ]);
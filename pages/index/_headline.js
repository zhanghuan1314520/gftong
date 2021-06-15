(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/_headline" ], {
    "002c": function(e, n, t) {
        t.r(n);
        var i = t("04b7"), o = t("d3dd");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("fe1d");
        var d = t("f0c5"), c = Object(d.a)(o.default, i.b, i.c, !1, null, "5e7194ea", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    "04b7": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "5b2d": function(e, n, t) {},
    "7e25": function(e, n, t) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, a, d = i(t("8e44")), c = i(t("b4fd")), u = i(t("0d75")), r = i(t("80d6")), l = {
            data: function() {
                return {
                    headlines: [],
                    show: !1,
                    current: 0
                };
            },
            mounted: function() {
                var e = this;
                setTimeout(function() {
                    c.default.getRecommendation("homepage_headline").then(function(n) {
                        n.length && (e.headlines = n, a = setTimeout(e.log, 1e3));
                    });
                }, 500);
            },
            destroyed: function() {
                o && o.disconnect(), a && clearTimeout(a);
            },
            methods: {
                log: function() {
                    var e = this;
                    o = r.default.observerRelativeViewPort("#headline", {
                        success: function(n) {
                            e.show = n.intersectionRatio > 0, e.show && e.viewLog(e.current);
                        }
                    });
                },
                animationSwiper: function(e) {
                    if (this.show) {
                        var n = e.mp.detail.current;
                        this.viewLog(n);
                    }
                },
                viewLog: function(e) {
                    var n = this.headlines[e];
                    u.default.log("homepage", {
                        id: n.log_id,
                        pos: e,
                        pos_name: n.position
                    });
                },
                clickLog: function(e) {
                    var n = e.currentTarget.dataset.index, t = this.headlines[n], i = t.href;
                    d.default.interestingEvent({
                        event: "click",
                        interesting_id: t.log_id,
                        pos: n,
                        pos_name: t.position
                    }), i.indexOf("?") > -1 ? i += "&" : i += "?", i += "from=headline&log_id=".concat(t.log_id), 
                    wx.navigateTo({
                        url: i
                    });
                }
            }
        };
        n.default = l;
    },
    d3dd: function(e, n, t) {
        t.r(n);
        var i = t("7e25"), o = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        n.default = o.a;
    },
    fe1d: function(e, n, t) {
        var i = t("5b2d");
        t.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/_headline-create-component", {
    "pages/index/_headline-create-component": function(e, n, t) {
        t("543d").createComponent(t("002c"));
    }
}, [ [ "pages/index/_headline-create-component" ] ] ]);
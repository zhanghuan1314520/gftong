require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/compare/_components/_top_preview" ], {
    "5bbc": function(e, n, t) {
        t.r(n);
        var o = t("6603"), r = t("d026");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(i);
        t("69c0");
        var c = t("f0c5"), a = Object(c.a)(r.default, o.b, o.c, !1, null, "bb0bd8ba", null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "61cd": function(e, n, t) {
        function o(e, n) {
            return u(e) || a(e, n) || i(e, n) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function i(e, n) {
            if (e) {
                if ("string" == typeof e) return c(e, n);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, n) : void 0;
            }
        }
        function c(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
            return o;
        }
        function a(e, n) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var t = [], o = !0, r = !1, i = void 0;
                try {
                    for (var c, a = e[Symbol.iterator](); !(o = (c = a.next()).done) && (t.push(c.value), 
                    !n || t.length !== n); o = !0) ;
                } catch (e) {
                    r = !0, i = e;
                } finally {
                    try {
                        o || null == a.return || a.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return t;
            }
        }
        function u(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, t("80d6");
        var l = {
            components: {
                ImgWrap: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/business/img_wrap") ]).then(function() {
                        return resolve(t("6f8d"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                buildings: Array
            },
            data: function() {
                return {
                    fixed: !1
                };
            },
            computed: {
                wrap_height: function() {
                    return this.fixed && this.height ? this.height + "px" : "auto";
                }
            },
            mounted: function() {
                this.getHeight(), this.checkPosition();
            },
            methods: {
                openBuilding: function(e) {
                    wx.navigateTo({
                        url: "/pages/building/main?building_id=".concat(e)
                    });
                },
                getHeight: function() {
                    var e = this, n = this.$mp.component.createSelectorQuery();
                    n.select("#header").boundingClientRect(), n.exec(function(n) {
                        var t = o(n, 1)[0];
                        t && t.height && (e.height = t.height, console.error(t.height));
                    });
                },
                checkPosition: function() {
                    var e = this;
                    this.$mp.component.createIntersectionObserver().relativeToViewport({
                        top: -this.height
                    }).observe("#header", function(n) {
                        e.fixed = 0 === n.intersectionRatio;
                    });
                }
            }
        };
        n.default = l;
    },
    6603: function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    "69c0": function(e, n, t) {
        var o = t("c363");
        t.n(o).a;
    },
    c363: function(e, n, t) {},
    d026: function(e, n, t) {
        t.r(n);
        var o = t("61cd"), r = t.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        n.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/compare/_components/_top_preview-create-component", {
    "pages/building/compare/_components/_top_preview-create-component": function(e, n, t) {
        t("543d").createComponent(t("5bbc"));
    }
}, [ [ "pages/building/compare/_components/_top_preview-create-component" ] ] ]);
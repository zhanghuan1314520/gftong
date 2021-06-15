require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/common_img" ], {
    6673: function(n, e, o) {},
    "68ac": function(n, e, o) {
        o.r(e);
        var t = o("fb41"), a = o.n(t);
        for (var r in t) [ "default" ].indexOf(r) < 0 && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(r);
        e.default = a.a;
    },
    8410: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    aa4b: function(n, e, o) {
        var t = o("6673");
        o.n(t).a;
    },
    dc534: function(n, e, o) {
        o.r(e);
        var t = o("8410"), a = o("68ac");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(r);
        o("aa4b");
        var c = o("f0c5"), i = Object(c.a)(a.default, t.b, t.c, !1, null, "3170b41e", null, !1, t.a, void 0);
        e.default = i.exports;
    },
    fb41: function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = o("371c"), a = function(n) {
            var e = /\?x-oss-process=image\/resize,w_(\d*),h_(\d*)/;
            return n.replace ? n.replace(e, function() {
                if (arguments.length > 2) return "?x-oss-process=image/resize,w_".concat(.8 * Number(arguments.length <= 1 ? void 0 : arguments[1]), ",h_").concat(.8 * Number(arguments.length <= 2 ? void 0 : arguments[2]));
            }) : n;
        }, r = {
            mixins: [ (0, function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(o("fbf2")).default)(".common-img") ],
            data: function() {
                return {
                    error_count: 0,
                    task: null,
                    loaded: !1
                };
            },
            beforeDestroy: function() {
                this.task && clearTimeout(this.task);
            },
            methods: {
                handleImgError: function(n) {
                    var e = this;
                    ++this.error_count < 2 ? this.task = setTimeout(function() {
                        e.src = a(e.src);
                    }, 200) : (0, t.imgErrorLog)(n.mp.detail.errMsg);
                },
                onLoaded: function(n) {
                    this.loaded = !0, this.$emit("load", n);
                }
            },
            props: {
                mode: {
                    type: String
                },
                shadow: {
                    type: Boolean,
                    default: !0
                },
                src: {
                    type: String
                },
                className: {
                    type: String
                },
                shadowClass: {
                    type: String
                },
                "lazy-load": {
                    type: Boolean,
                    default: !0
                }
            }
        };
        e.default = r;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/common_img-create-component", {
    "pages/building/_components/common_img-create-component": function(n, e, o) {
        o("543d").createComponent(o("dc534"));
    }
}, [ [ "pages/building/_components/common_img-create-component" ] ] ]);
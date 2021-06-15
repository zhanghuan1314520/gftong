(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/common_img" ], {
    "314e9": function(n, e, t) {},
    3334: function(n, e, t) {
        t.r(e);
        var o = t("5ea6"), a = t.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = a.a;
    },
    "5ea6": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = t("371c"), a = function(n) {
            var e = /\?x-oss-process=image\/resize,w_(\d*),h_(\d*)/;
            return n.replace ? n.replace(e, function() {
                if (arguments.length > 2) return "?x-oss-process=image/resize,w_".concat(.8 * Number(arguments.length <= 1 ? void 0 : arguments[1]), ",h_").concat(.8 * Number(arguments.length <= 2 ? void 0 : arguments[2]));
            }) : n;
        }, r = {
            mixins: [ (0, function(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }(t("fbf2")).default)(".common-img") ],
            data: function() {
                return {
                    error_count: 0,
                    task: null
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
                    }, 200) : (0, o.imgErrorLog)(n.mp.detail.errMsg);
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
    },
    "633c": function(n, e, t) {
        t.r(e);
        var o = t("a096"), a = t("3334");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(r);
        t("6832");
        var c = t("f0c5"), i = t("9774"), s = Object(c.a)(a.default, o.b, o.c, !1, null, "264f4da8", null, !1, o.a, void 0);
        "function" == typeof i.a && Object(i.a)(s), e.default = s.exports;
    },
    6832: function(n, e, t) {
        var o = t("314e9");
        t.n(o).a;
    },
    9774: function(n, e, t) {
        e.a = function(n) {
            n.options.wxsCallMethods || (n.options.wxsCallMethods = []);
        };
    },
    a096: function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/common_img-create-component", {
    "components/views/common_img-create-component": function(n, e, t) {
        t("543d").createComponent(t("633c"));
    }
}, [ [ "components/views/common_img-create-component" ] ] ]);
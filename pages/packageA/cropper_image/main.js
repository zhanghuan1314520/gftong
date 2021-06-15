require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/cropper_image/main" ], {
    "53fb": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("70f1")).default);
        }).call(this, e("543d").createPage);
    },
    "57d8": function(t, n, e) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, n) {
            return f(t) || c(t, n) || i(t, n) || a();
        }
        function a() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function i(t, n) {
            if (t) {
                if ("string" == typeof t) return u(t, n);
                var e = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(t, n) : void 0;
            }
        }
        function u(t, n) {
            (null == n || n > t.length) && (n = t.length);
            for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
            return r;
        }
        function c(t, n) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var e = [], r = !0, o = !1, a = void 0;
                try {
                    for (var i, u = t[Symbol.iterator](); !(r = (i = u.next()).done) && (e.push(i.value), 
                    !n || e.length !== n); r = !0) ;
                } catch (t) {
                    o = !0, a = t;
                } finally {
                    try {
                        r || null == u.return || u.return();
                    } finally {
                        if (o) throw a;
                    }
                }
                return e;
            }
        }
        function f(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var d = r(e("80d6")), p = r(e("8e44")), l = r(e("2f47")), s = wx.getSystemInfoSync(), h = s.windowWidth, g = s.windowHeight - 50, m = null, v = {
            data: function() {
                return {
                    cropperOpt: {
                        id: "cropper",
                        targetId: "targetCropper",
                        pixelRatio: s.pixelRatio,
                        width: h,
                        height: g,
                        scale: 2.5,
                        zoom: 8,
                        uploading: !1,
                        cut: {
                            x: (h - 300) / 2,
                            y: (g - 300) / 2,
                            width: 300,
                            height: 300
                        },
                        boundStyle: {
                            color: "#04b00f",
                            mask: "rgba(0,0,0,0.8)",
                            lineWidth: 1
                        }
                    }
                };
            },
            computed: {
                _canvasId: function() {
                    return this.cropperOpt.id;
                },
                _targetId: function() {
                    return this.cropperOpt.targetId;
                },
                _width: function() {
                    return this.cropperOpt.width;
                },
                _height: function() {
                    return this.cropperOpt.height;
                },
                _pixelRatio: function() {
                    return this.cropperOpt.pixelRatio;
                }
            },
            mounted: function() {
                var t = this;
                d.default.chooseImage({
                    count: 1,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    is_upload: !0
                }).then(function(n) {
                    var e = o(n, 1)[0];
                    console.error("choose success"), t.pushOrigin(e);
                }, function(n) {
                    t.back();
                });
            },
            methods: {
                back: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                getCropperImage: function() {
                    this.uploading = !0, wx.showLoading({
                        mask: !0
                    }), this._getCropperImage({
                        original: !1,
                        fileType: "jpg"
                    }).then(this.upload);
                },
                upload: function(t) {
                    var n = this;
                    d.default.uploadImg({
                        filePath: t
                    }).then(function(t) {
                        p.default.updateUserInfo({
                            headimgurl: t
                        }).then(function() {
                            n.uploading = !1, wx.hideLoading(), n.back();
                        });
                    });
                },
                touchstart: function(t) {
                    m.touchStart(t.mp);
                },
                touchmove: function(t) {
                    m.touchMove(t.mp);
                },
                touchend: function(t) {
                    m.touchEnd(t.mp);
                },
                pushOrigin: function(t) {
                    console.error("pushOrigin", t), m.pushOrign(t);
                },
                updateCanvas: function() {
                    m.updateCanvas();
                },
                getCropperBase64: function(t) {
                    return m.getCropperBase64(t);
                },
                _getCropperImage: function(t, n) {
                    return m.getCropperImage(t, n);
                },
                init: function() {
                    var t = this;
                    m = new l.default(Object.assign(this.cropperOpt, {
                        id: this._canvasId,
                        targetId: this._targetId,
                        pixelRatio: this._pixelRatio
                    })).on("ready", function() {
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        t.$emit.apply(t, [ "ready" ].concat(e));
                    }).on("beforeImageLoad", function() {
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        t.$emit.apply(t, [ "beforeImageLoad" ].concat(e));
                    }).on("imageLoad", function() {
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        t.$emit.apply(t, [ "imageLoad" ].concat(e));
                    }).on("beforeDraw", function() {
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        t.$emit.apply(t, [ "beforeDraw" ].concat(e));
                    });
                }
            },
            onReady: function() {
                this.init();
            }
        };
        n.default = v;
    },
    "6dbd": function(t, n, e) {
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "70f1": function(t, n, e) {
        e.r(n);
        var r = e("6dbd"), o = e("7425");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("fecf");
        var i = e("f0c5"), u = Object(i.a)(o.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = u.exports;
    },
    7425: function(t, n, e) {
        e.r(n);
        var r = e("57d8"), o = e.n(r);
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        n.default = o.a;
    },
    cad0: function(t, n, e) {},
    fecf: function(t, n, e) {
        var r = e("cad0");
        e.n(r).a;
    }
}, [ [ "53fb", "common/runtime", "common/vendor" ] ] ]);
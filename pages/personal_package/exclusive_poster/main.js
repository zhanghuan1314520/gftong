require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/exclusive_poster/main" ], {
    "1a04": function(t, e, n) {
        n.r(e);
        var o = n("868e"), r = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    "7f95": function(t, e, n) {
        n.r(e);
        var o = n("9667"), r = n("1a04");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("a079");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "43e162f4", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    8666: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7f95")).default);
        }).call(this, n("543d").createPage);
    },
    "868e": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    i(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function c(t, e) {
            return p(t) || s(t, e) || l(t, e) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(t, e) {
            if (t) {
                if ("string" == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
            }
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        function s(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], o = !0, r = !1, a = void 0;
                try {
                    for (var i, c = t[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    r = !0, a = t;
                } finally {
                    try {
                        o || null == c.return || c.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return n;
            }
        }
        function p(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var g = o(n("80d6")), d = o(n("8e44")), h = o(n("b4fd")), m = o(n("2f47")), v = o(n("04a9d")), y = n("b794"), b = wx.getSystemInfoSync(), w = null, x = {
            mixins: [ v.default ],
            data: function() {
                return {
                    cropperOpt: {
                        id: "cropper",
                        targetId: "targetCropper",
                        pixelRatio: b.pixelRatio,
                        scale: 2.5,
                        zoom: 1,
                        uploading: !1
                    },
                    width: 0,
                    height: 0,
                    showDialog: !1,
                    consultant: {},
                    tempPath: "",
                    show_success: !1,
                    tmp_img_path: "",
                    qrcode: ""
                };
            },
            computed: {
                _canvasId: function() {
                    return this.cropperOpt.id;
                },
                _targetId: function() {
                    return this.cropperOpt.targetId;
                },
                _pixelRatio: function() {
                    return this.cropperOpt.pixelRatio;
                }
            },
            onLoad: function() {
                var t = this, e = wx.createSelectorQuery();
                e.select(".cropper").boundingClientRect(), e.exec(function(e) {
                    var n = c(e, 1)[0], o = n.width, r = n.height;
                    t.width = o, t.height = r, wx.showLoading({
                        mask: !0
                    }), d.default.getMyConsultant(!1).then(function(e) {
                        t.consultant = e, t.init(a(a({}, t.cropperOpt), {}, {
                            width: o,
                            height: r
                        })), h.default.getSceneQr({
                            scene: "pccb_".concat(e.id),
                            jump_page: "pages/consultants/card/main"
                        }).then(function(e) {
                            var n = e.qrcode;
                            t.qrcode = n, wx.hideLoading();
                        });
                    });
                });
            },
            methods: {
                back: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                onChooseImage: function() {
                    var t = this;
                    g.default.chooseImage({
                        count: 1,
                        sizeType: [ "compressed" ],
                        sourceType: [ "album", "camera" ],
                        is_upload: !0
                    }).then(function(e) {
                        var n = c(e, 1)[0];
                        console.error("choose success"), t.tempPath = n, t.pushOrigin(n);
                    }, function(t) {});
                },
                getCropperImage: function() {
                    var t = this;
                    this.tempPath ? (wx.showLoading({
                        title: "生成图片中",
                        mask: !0
                    }), this._getCropperImage({
                        original: !1,
                        fileType: "jpg"
                    }).then(function(e) {
                        Promise.all([ t.getConsultantQr(), t.getConsultantImg() ]).then(function(n) {
                            var o = c(n, 2), r = o[0], a = o[1];
                            t.drawImg({
                                imgTemp: e,
                                qrTemp: r,
                                consultantImg: a
                            });
                        });
                    })) : wx.showToast({
                        title: "请先上传图片",
                        icon: "none",
                        duration: 2e3
                    });
                },
                getConsultantImg: function() {
                    return g.default.getImgInfo(this.consultant.weixin_headimgurl).then(function(t) {
                        return t.path;
                    });
                },
                getConsultantQr: function() {
                    return g.default.getImgInfo(this.qrcode).then(function(t) {
                        return t.path;
                    });
                },
                drawImg: function(t) {
                    var e = this, n = t.imgTemp, o = t.qrTemp, r = t.consultantImg, i = "canvas", c = wx.createCanvasContext(i, this.$mp.component), u = 816, l = {
                        font: "normal 20px PingFang SC",
                        color: "#666666",
                        x: 134,
                        LH: 20,
                        marginT: 16
                    };
                    c.save(), c.setFillStyle("#ffffff"), c.fillRect(0, 0, 560, 996), c.drawImage(n, 0, 0, 560, u), 
                    c.restore(), (0, y.drawConsultantCard)(c, {
                        headImage: {
                            path: r,
                            x: 30,
                            y: 866,
                            r: 40,
                            marginR: 24
                        },
                        headImageBg: {
                            r: 46,
                            fillStyle: "#E0E0E0"
                        },
                        name: {
                            text: this.consultant.name,
                            color: "#333333",
                            font: "normal bold 30px PingFangSC-Medium",
                            x: 134,
                            y: 857,
                            LH: 30
                        },
                        tagBg: {
                            color: "#DAF7F3",
                            y: 855,
                            h: 33,
                            marginL: 4
                        },
                        tag: {
                            text: "置业顾问",
                            color: "#00C2A7",
                            font: "normal 18px PingFang SC"
                        },
                        wx: a({
                            text: "微信：".concat(this.consultant.weixin_name)
                        }, l),
                        tel: a({
                            text: "手机：".concat(this.consultant.mobile)
                        }, l),
                        qr: {
                            path: o,
                            x: 407,
                            y: 831,
                            r: 60
                        },
                        qrBg: {
                            r: 63,
                            fillStyle: "#E0E0E0"
                        },
                        qrLabel: {
                            color: "#999999",
                            font: "normal 18px PingFang SC",
                            text: "长按查看更多"
                        }
                    }), c.draw(!0, function() {
                        setTimeout(function() {
                            wx.canvasToTempFilePath({
                                canvasId: i,
                                width: 560,
                                height: 996,
                                x: 0,
                                y: 0,
                                success: function(t) {
                                    e.tmp_img_path = t.tempFilePath, e.showDialog = !0, wx.hideLoading();
                                },
                                fail: function() {}
                            }, e.$mp.component);
                        }, 100);
                    });
                },
                saveImage: function() {
                    wx.showLoading({
                        title: "保存中",
                        mask: !0
                    }), this.saveAlbum(this.tmp_img_path);
                },
                saveImgSuccess: function() {
                    this.onHideDialog();
                },
                onHideDialog: function() {
                    this.showDialog = !1, this.tmp_img_path = "";
                },
                touchstart: function(t) {
                    w.touchStart(t.mp);
                },
                touchmove: function(t) {
                    w.touchMove(t.mp);
                },
                touchend: function(t) {
                    w.touchEnd(t.mp);
                },
                pushOrigin: function(t) {
                    console.error("pushOrigin", t), w.pushOrign(t);
                },
                updateCanvas: function() {
                    w.updateCanvas();
                },
                getCropperBase64: function(t) {
                    return w.getCropperBase64(t);
                },
                _getCropperImage: function(t, e) {
                    return w.getCropperImage(t, e);
                },
                init: function(t) {
                    var e = this;
                    w = new m.default(Object.assign(t, {
                        id: this._canvasId,
                        targetId: this._targetId,
                        pixelRatio: this._pixelRatio
                    })).on("ready", function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        e.$emit.apply(e, [ "ready" ].concat(n));
                    }).on("beforeImageLoad", function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        e.$emit.apply(e, [ "beforeImageLoad" ].concat(n));
                    }).on("imageLoad", function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        e.$emit.apply(e, [ "imageLoad" ].concat(n));
                    }).on("beforeDraw", function() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        e.$emit.apply(e, [ "beforeDraw" ].concat(n));
                    });
                }
            },
            onReady: function() {}
        };
        e.default = x;
    },
    9667: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    a079: function(t, e, n) {
        var o = n("ac49");
        n.n(o).a;
    },
    ac49: function(t, e, n) {}
}, [ [ "8666", "common/runtime", "common/vendor" ] ] ]);
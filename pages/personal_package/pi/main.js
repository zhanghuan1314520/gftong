require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/pi/main" ], {
    "1ade": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("fca7")).default);
        }).call(this, e("543d").createPage);
    },
    "22ca": function(t, n, e) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                n && (a = a.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })), e.push.apply(e, a);
            }
            return e;
        }
        function r(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? i(Object(e), !0).forEach(function(n) {
                    o(t, n, e[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : i(Object(e)).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                });
            }
            return t;
        }
        function o(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = a(e("fd65")), f = a(e("80d6")), u = a(e("41f4")), s = a(e("b4fd")), l = a(e("8e44")), g = e("b794"), h = e("371c"), d = {
            gold: "金牌置业顾问",
            silver: "银牌置业顾问",
            copper: "铜牌置业顾问"
        }, m = {
            yx: {
                scene: "hzgfzl1",
                top: 257
            },
            gjj_a: {
                scene: "hzgfzl2",
                top: 280
            },
            gjj_b: {
                scene: "hzgfzl3",
                top: 279
            },
            gjj_c: {
                scene: "hzgfzl4",
                top: 276
            },
            rc: {
                scene: "hzgfzl5",
                top: 255
            },
            xz72: {
                scene: "hzgfzl6",
                top: 255
            }
        }, p = {
            components: {},
            mixins: [ c.default ],
            data: function() {
                return {
                    d_img: "",
                    s_img: "",
                    classname: "",
                    title: "",
                    qrcode: "",
                    is_consultant: !1,
                    consultant: {
                        name: "",
                        weixin_name: "",
                        building_name: "",
                        weixin_headimgurl: "",
                        mobile: "",
                        id: "",
                        level: ""
                    },
                    show_bb: !1,
                    canvas_w: 0,
                    canvas_h: 0,
                    t_img: ""
                };
            },
            onLoad: function(t) {
                this.d_img = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/pi/".concat(t.img, ".png"), 
                this.s_img = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/pi/".concat(t.img, "_1.png"), 
                this.t_img = t.img, this.classname = t.img, this.title = t.title, this.getUser(t.img), 
                (0, h.sendCtmEvtLog)("".concat(t.title, "-页面展示"));
            },
            onShow: function() {},
            onUnload: function() {},
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: this.title,
                    path: "/pages/personal_package/pi/main?img=".concat(this.t_img, "&title=").concat(this.title)
                });
            },
            methods: {
                preview: function() {
                    wx.previewImage({
                        current: this.d_img,
                        urls: [ this.d_img ]
                    });
                },
                getUser: function(t) {
                    var n = this;
                    u.default.user.get().then(function(e) {
                        n.is_consultant = e.is_consultant, e.is_consultant && l.default.getMyConsultant().then(function(e) {
                            n.consultant = e, s.default.getSceneQr({
                                scene: "".concat(m[t].scene, "_").concat(e.id),
                                jump_page: "pages/consultants/card/main"
                            }).then(function(e) {
                                var a = e.qrcode;
                                n.qrcode = a, n.generateImg().then(function(e) {
                                    var a = e.shareBgTemp, i = e.headimgurlTemp, r = e.qr;
                                    n.drawImg(a, i, r, m[t].top), n.show_bb = !0;
                                });
                            });
                        });
                    });
                },
                onimgload: function(t) {
                    t.detail;
                },
                generateImg: function() {
                    var t = this;
                    return this.getShareBg().then(function(n) {
                        return t.getHeadimgurl().then(function(e) {
                            return t.getQrcode().then(function(t) {
                                return {
                                    shareBgTemp: n,
                                    headimgurlTemp: e,
                                    qr: t
                                };
                            });
                        });
                    });
                },
                getShareBg: function() {
                    var t = this;
                    return f.default.getImgInfo(this.s_img).then(function(n) {
                        return t.canvas_w = n.width, t.canvas_h = n.height, n.path;
                    });
                },
                getHeadimgurl: function() {
                    return f.default.getImgInfo(this.consultant.weixin_headimgurl).then(function(t) {
                        return t.path;
                    });
                },
                getQrcode: function() {
                    return f.default.getImgInfo(this.qrcode).then(function(t) {
                        return t.path;
                    });
                },
                onSaveImg: function() {
                    this.save();
                },
                drawImg: function(t, n, e, a) {
                    var i = "canvas", o = wx.createCanvasContext(i, this.$mp.component), c = this.canvas_w, f = this.canvas_h, u = {
                        font: "normal 24px PingFang SC",
                        color: "#ffffff",
                        x: 192,
                        LH: 24,
                        marginT: 16
                    };
                    o.save(), o.drawImage(t, 0, 0, c, f), o.restore(), (0, g.drawConsultantCard)(o, {
                        headImage: {
                            path: n,
                            x: 62,
                            y: a + 32,
                            r: 54,
                            marginR: 24
                        },
                        headImageBg: {
                            r: 60,
                            fillStyle: "rgba(224,224,224,0.36)"
                        },
                        name: {
                            text: this.consultant.name,
                            color: "#ffffff",
                            font: "normal bold 36px PingFang SC",
                            x: 192,
                            y: a + 32,
                            LH: 36
                        },
                        tagBg: {
                            color: "rgba(218,247,243,0.36)",
                            y: a + 31,
                            h: 36,
                            marginL: 8
                        },
                        tag: {
                            text: d[this.consultant.level],
                            color: "#ffffff",
                            font: "normal 20px PingFang SC"
                        },
                        wx: r({
                            text: "微信：".concat(this.consultant.weixin_name)
                        }, u),
                        tel: r({
                            text: "手机：".concat(this.consultant.mobile)
                        }, u),
                        qr: {
                            path: e,
                            x: 542,
                            y: a + 10,
                            r: 70
                        },
                        qrBg: {
                            r: 70,
                            fillStyle: "rgba(224,224,224,0)"
                        },
                        qrLabel: {
                            color: "#ffffff",
                            font: "normal 18px PingFang SC",
                            text: "长按查看更多"
                        }
                    }), o.draw(!0), this.finishDraw({
                        canvasId: i,
                        CANVAS_WIDTH: c,
                        CANVAS_HEIGHT: f
                    });
                }
            }
        };
        n.default = p;
    },
    5535: function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "62e0": function(t, n, e) {},
    accb: function(t, n, e) {
        e.r(n);
        var a = e("22ca"), i = e.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n.default = i.a;
    },
    b540: function(t, n, e) {
        var a = e("62e0");
        e.n(a).a;
    },
    fca7: function(t, n, e) {
        e.r(n);
        var a = e("5535"), i = e("accb");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        e("b540");
        var o = e("f0c5"), c = Object(o.a)(i.default, a.b, a.c, !1, null, "6e765714", null, !1, a.a, void 0);
        n.default = c.exports;
    }
}, [ [ "1ade", "common/runtime", "common/vendor" ] ] ]);
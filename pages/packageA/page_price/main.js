require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/page_price/main" ], {
    "11d9": function(t, n, e) {},
    2892: function(t, n, e) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, n, e, i, o) {
            t.save();
            var r = 2 * o, a = e + o, u = i + o;
            t.arc(a, u, o, 0, 2 * Math.PI), t.lineWidth = 3, t.strokeStyle = "#6abda1", t.stroke(), 
            t.clip(), t.drawImage(n, e, i, r, r), t.restore();
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = i(e("b4fd")), a = i(e("8e44")), u = (e("3645"), i(e("fd65"))), h = i(e("80d6")), c = i(e("41f4")), s = {
            components: {},
            mixins: [ u.default ],
            data: function() {
                return {
                    title: "",
                    width: "",
                    height: "",
                    real_width: "",
                    real_height: "",
                    photo_url: "",
                    house_id: "",
                    building_id: "",
                    qrcode: "",
                    is_consultant: !1,
                    consultant_headimgurl: "",
                    consultant_name: "",
                    weixin_phone_number: "",
                    version: "",
                    show_bb: !1
                };
            },
            onLoad: function(t) {
                var n = this, e = t.title, i = t.photo_url, o = t.building_id, a = t.house_id, u = t.version;
                this.title = decodeURIComponent(e) || "", this.photo_url = decodeURIComponent(i), 
                this.house_id = a, this.building_id = o, this.version = u, r.default.getSceneQr({
                    scene: "hpdb_".concat(a, "-").concat(o),
                    jump_page: "pages/building/main"
                }).then(function(t) {
                    var e = t.qrcode;
                    n.qrcode = e;
                }), this.getUser();
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: this.title,
                    path: "/pages/packageA/page_price/main?building_id=".concat(this.building_id, "&house_id=").concat(this.house_id, "&photo_url=").concat(this.photo_url, "&title=").concat(this.title, "&version=").concat(this.version)
                });
            },
            methods: {
                getUser: function() {
                    var t = this;
                    c.default.user.get().then(function(n) {
                        t.is_consultant = n.is_consultant, n.is_consultant && t.getMyConsultant();
                    });
                },
                getMyConsultant: function() {
                    var t = this;
                    a.default.getMyConsultant().then(function(n) {
                        t.consultant_headimgurl = n.weixin_headimgurl, t.consultant_name = n.name, t.weixin_phone_number = n.mobile;
                    });
                },
                onSaveImg: function() {
                    this.save();
                },
                onViewImg: function() {
                    wx.previewImage({
                        current: this.photo_url,
                        urls: [ this.photo_url ]
                    });
                },
                onimgload: function(t) {
                    var n = this, e = t.detail;
                    console.error(e);
                    var i = e.width, o = e.height;
                    this.real_width = i, this.real_height = o;
                    var r = wx.getSystemInfoSync();
                    i > r.windowWidth ? (this.width = r.windowWidth, this.height = r.windowWidth / i * o) : (this.width = i, 
                    this.height = o), this.generateImg().then(function(t) {
                        var e = t.shareBgTemp, i = t.jjrbg, o = t.headimgurlTemp, r = t.qr;
                        n.drawImg(e, i, o, r), n.show_bb = !0;
                    });
                },
                drawImg: function(t, n, e, i) {
                    var r = "canvas", a = wx.createCanvasContext(r, this.$mp.component), u = this.real_width, h = this.real_height, c = 376, s = u - c, d = 186;
                    a.drawImage(t, 0, 0, u, h), this.is_consultant && 3 === Number(this.version) && (a.drawImage(n, s, 0, c, 430), 
                    o(a, e, s + 188 - 45, 30, 47), a.setFillStyle("#333"), a.font = "normal bold 32px PingFang SC", 
                    a.textAlign = "center", a.fillText(this.consultant_name, s + 188, 174, c), this.weixin_phone_number && (a.setFillStyle("#333"), 
                    a.font = "normal Medium 24px PingFang SC", a.textAlign = "center", a.fillText("手机: ".concat(this.weixin_phone_number), s + 188, 212, c), 
                    d += 38), a.drawImage(i, s + 188 - 74, d, 160, 160)), a.draw(!0), this.finishDraw({
                        canvasId: r,
                        CANVAS_WIDTH: u,
                        CANVAS_HEIGHT: h
                    });
                },
                generateImg: function() {
                    var t = this;
                    return this.getShareBg().then(function(n) {
                        return t.getJjrBg().then(function(e) {
                            return t.getHeadimgurl().then(function(i) {
                                return t.getQrcode().then(function(t) {
                                    return {
                                        shareBgTemp: n,
                                        jjrbg: e,
                                        headimgurlTemp: i,
                                        qr: t
                                    };
                                });
                            });
                        });
                    });
                },
                getShareBg: function() {
                    return h.default.getImgInfo(this.photo_url).then(function(t) {
                        return t.path;
                    });
                },
                getJjrBg: function() {
                    return h.default.getImgInfo("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/price/jjrbg.png").then(function(t) {
                        return t.path;
                    });
                },
                getHeadimgurl: function() {
                    return h.default.getImgInfo(this.consultant_headimgurl).then(function(t) {
                        return t.path;
                    });
                },
                getQrcode: function() {
                    return h.default.getImgInfo(this.qrcode).then(function(t) {
                        return t.path;
                    });
                }
            }
        };
        n.default = s;
    },
    "3b32": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "3ceb": function(t, n, e) {
        var i = e("11d9");
        e.n(i).a;
    },
    "9bd8": function(t, n, e) {
        e.r(n);
        var i = e("2892"), o = e.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = o.a;
    },
    bffa: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("e00a")).default);
        }).call(this, e("543d").createPage);
    },
    e00a: function(t, n, e) {
        e.r(n);
        var i = e("3b32"), o = e("9bd8");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        e("3ceb");
        var a = e("f0c5"), u = Object(a.a)(o.default, i.b, i.c, !1, null, "1a0f347a", null, !1, i.a, void 0);
        n.default = u.exports;
    }
}, [ [ "bffa", "common/runtime", "common/vendor" ] ] ]);
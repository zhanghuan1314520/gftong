(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consultants/card/_billboard" ], {
    "35a19": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    "46be": function(t, e, n) {
        var a = n("dcfe");
        n.n(a).a;
    },
    "7af6": function(t, e, n) {
        n.r(e);
        var a = n("fd51"), r = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = r.a;
    },
    ae00: function(t, e, n) {
        n.r(e);
        var a = n("35a19"), r = n("7af6");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("46be");
        var o = n("f0c5"), l = Object(o.a)(r.default, a.b, a.c, !1, null, "79c50e4c", null, !1, a.a, void 0);
        e.default = l.exports;
    },
    dcfe: function(t, e, n) {},
    fd51: function(t, e, n) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach(function(e) {
                    o(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function o(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function l(t, e) {
            return g(t) || u(t, e) || s(t, e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
            }
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
            return a;
        }
        function u(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], a = !0, r = !1, i = void 0;
                try {
                    for (var o, l = t[Symbol.iterator](); !(a = (o = l.next()).done) && (n.push(o.value), 
                    !e || n.length !== e); a = !0) ;
                } catch (t) {
                    r = !0, i = t;
                } finally {
                    try {
                        a || null == l.return || l.return();
                    } finally {
                        if (r) throw i;
                    }
                }
                return n;
            }
        }
        function g(t) {
            if (Array.isArray(t)) return t;
        }
        function p(t, e, n, a, r, i, o) {
            try {
                var l = t[i](o), c = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(c) : Promise.resolve(c).then(a, r);
        }
        function d(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(a, r) {
                    function i(t) {
                        p(l, a, r, i, o, "next", t);
                    }
                    function o(t) {
                        p(l, a, r, i, o, "throw", t);
                    }
                    var l = t.apply(e, n);
                    i(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var h = a(n("a34a")), m = a(n("b4fd")), w = a(n("80d6")), b = n("b794"), v = 690, x = 1038, y = (wx.getSystemInfoSync().system.substring(0, 3).toLowerCase(), 
        {
            x: 0,
            y: 0,
            fileType: "png",
            quality: 1
        }), F = {
            props: {
                show: Boolean,
                consultant: Object,
                house: Object
            },
            data: function() {
                return {
                    qrcode: "",
                    show_tpl: 0,
                    qrcodes: [],
                    billboard_path: "",
                    finished: !1
                };
            },
            mounted: function() {
                var t = this;
                Promise.all([ 1, 2, 3 ].map(this.getQr)).then(function(e) {
                    t.qrcodes = e, t.generateImg();
                });
            },
            watch: {
                show: function(t) {
                    t && !this.finished && wx.showLoading();
                }
            },
            methods: {
                tapBillboard: function() {},
                hide: function() {
                    this.$emit("hide");
                },
                saveFail: function() {
                    wx.showToast({
                        title: "保存图片出错，请重试",
                        icon: "none"
                    });
                },
                save: function() {
                    var t = this;
                    return d(h.default.mark(function e() {
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, w.default.saveImageToPhotosAlbum(t.billboard_path);

                              case 3:
                                e.next = 8;
                                break;

                              case 5:
                                e.prev = 5, e.t0 = e.catch(0), t.saveFail();

                              case 8:
                                t.hide();

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 5 ] ]);
                    }))();
                },
                generateImg: function() {
                    var t = this;
                    return d(h.default.mark(function e() {
                        var n, a, r, i, o, c, s, f;
                        return h.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Promise.all([ t.getHeadimg(), t.getCrownBg(), t.getBgImg(), t.getFeatureImg(), t.getQrImg(), t.getTypeImg() ]);

                              case 2:
                                n = e.sent, a = l(n, 6), r = a[0], i = a[1], o = a[2], c = a[3], s = a[4], f = a[5], 
                                t.drawImg({
                                    crown: i,
                                    headimg: r,
                                    features: c,
                                    bgs: o,
                                    qrs: s,
                                    flgs: f
                                });

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getQr: function(t) {
                    var e = this.$root.$mp.query.id;
                    return m.default.getSceneQr({
                        scene: "ccb".concat(t, "_").concat(e),
                        jump_page: "pages/index/main"
                    }, !1).then(function(t) {
                        return t.qrcode;
                    });
                },
                getCrownBg: function() {
                    return w.default.getImgInfo("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/consultant-card/tpl/crown.png").then(function(t) {
                        return t.path;
                    });
                },
                getQrImg: function() {
                    var t = this.qrcodes;
                    return Promise.all(t.map(w.default.getImgInfo)).then(function(t) {
                        var e = l(t, 3), n = e[0], a = e[1], r = e[2];
                        return [ n.path, a.path, r.path ];
                    });
                },
                getHeadimg: function() {
                    if (this.consultant.weixin_headimgurl) {
                        var t = this.consultant.weixin_headimgurl.replace(/132$/, 0).replace(/\?x\-oss\-process=image\/resize,w_\w*,h_\w*(\/format,(webp|jpg))?/, "");
                        return w.default.getImgInfo(t).then(function(t) {
                            return t.path;
                        });
                    }
                },
                getFeatureImg: function() {
                    return d(h.default.mark(function t() {
                        var e, n, a, r, i, o, c, s, f, u, g, p, d, m;
                        return h.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                e = [ [ "web720", "vr", "building", "audio", "zone", "layout", "policy" ], [ "web720-2", "vr-2", "building-2", "audio-2", "zone-2", "layout-2", "policy-2" ], [ "web720-3", "vr-3", "building-3", "audio-3", "zone-3", "layout-3", "policy-3" ] ], 
                                n = function(t) {
                                    return t.map(function(t) {
                                        return w.default.getImgInfo("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/consultant-card/tpl/".concat(t, ".png")).then(function(t) {
                                            return t.path;
                                        });
                                    });
                                }, a = [], r = 0;

                              case 4:
                                if (!(r < e.length)) {
                                    t.next = 21;
                                    break;
                                }
                                return i = e[r], t.next = 8, Promise.all(n(i));

                              case 8:
                                o = t.sent, c = l(o, 7), s = c[0], f = c[1], u = c[2], g = c[3], p = c[4], d = c[5], 
                                m = c[6], a.push({
                                    web720: s,
                                    vr: f,
                                    building: u,
                                    audio: g,
                                    zone: p,
                                    layout: d,
                                    policy: m
                                });

                              case 18:
                                r++, t.next = 4;
                                break;

                              case 21:
                                return t.abrupt("return", a);

                              case 22:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getBgImg: function() {
                    var t = [ "", "tpl2-bg", "tpl3-bg" ];
                    return Promise.all(t.map(function(t) {
                        return t && w.default.getImgInfo("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/consultant-card/tpl/".concat(t, ".png?v=2"));
                    })).then(function(t) {
                        var e = l(t, 3), n = e[0], a = e[1], r = e[2];
                        return [ n.path, a.path, r.path ];
                    });
                },
                getTypeImg: function() {
                    var t = [ "green-flg", "type" ];
                    return Promise.all(t.map(function(t) {
                        return w.default.getImgInfo("https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/consultant-card/".concat(t, ".png"));
                    })).then(function(t) {
                        var e = l(t, 2), n = e[0], a = e[1];
                        return [ n.path, a.path, a.path ];
                    });
                },
                changeTpl: function() {
                    var t = this;
                    this.show_tpl = (this.show_tpl + 1) % 3, this.getImgPath({
                        canvasId: "canvas_".concat(this.show_tpl + 1),
                        width: v,
                        height: x
                    }).then(function(e) {
                        t.billboard_path = e;
                    });
                },
                drawImg: function(t) {
                    var e = this, n = t.headimg, a = t.crown, r = t.features, i = t.qrs, o = t.bgs, l = t.flgs, c = [ this.drawTpl1, this.drawTpl2, this.drawTpl3 ];
                    Promise.all(c.map(function(t, c) {
                        return t.call(e, {
                            crown: a,
                            bg: o[c],
                            flg: l[c],
                            qr: i[c],
                            feature: r[c],
                            headimg: n
                        });
                    })).then(function(t) {
                        return e.getImgPath({
                            canvasId: "canvas_".concat(e.show_tpl + 1),
                            width: v,
                            height: x
                        }).then(function(t) {
                            wx.hideLoading(), e.finished = !0, e.billboard_path = t;
                        });
                    }).catch(wx.hideLoading);
                },
                getImgPath: function(t) {
                    var e = this;
                    return new Promise(function(n, a) {
                        wx.canvasToTempFilePath(i(i(i({}, y), t), {}, {
                            success: function(t) {
                                n(t.tempFilePath);
                            },
                            fail: a
                        }), e.$mp.component);
                    });
                },
                getHouseFeatures: function() {
                    var t = this.house, e = (t.activities, t.vr_resource), n = t.audios, a = t.vr_panorama_resource, r = t.planar_graph_url;
                    return [ {
                        type: "web720",
                        text: "航拍看房",
                        size: [ 36, 36 ],
                        show: a && Boolean(a.vr_panorama_url)
                    }, {
                        type: "vr",
                        text: "VR看房",
                        size: [ 34, 23 ],
                        show: e.vr_photo_url
                    }, {
                        type: "building",
                        text: "楼盘总平",
                        size: [ 36, 36 ],
                        show: r
                    }, {
                        type: "audio",
                        text: "语音讲盘",
                        size: [ 30, 30 ],
                        show: Boolean(n && n.length)
                    }, {
                        type: "zone",
                        text: "区域分析",
                        size: [ 24, 26 ],
                        show: !0
                    }, {
                        type: "layout",
                        text: "户型解析",
                        size: [ 27, 27 ],
                        show: !0
                    }, {
                        type: "policy",
                        text: "政策解读",
                        size: [ 26, 26 ],
                        show: !0
                    } ].filter(function(t) {
                        return t.show;
                    });
                },
                drawTpl: function(t, e) {
                    var n = this, a = t.id;
                    return function() {
                        return new Promise(function(t, r) {
                            try {
                                var i = wx.createCanvasContext(a, n.$mp.component);
                                i.setFillStyle("#ffffff"), i.fillRect(0, 0, v, x), "function" == typeof e && e(i), 
                                i.draw(!0, function() {
                                    t();
                                });
                            } catch (t) {
                                r(t);
                            }
                        });
                    };
                },
                drawTpl1: function(t) {
                    var e = this, n = (t.bg, t.flg), a = t.feature, r = t.headimg, i = t.qr, o = this.consultant;
                    return this.drawTpl({
                        id: "canvas_1"
                    }, function(t) {
                        t.setTextBaseline("top"), t.drawImage(r, 0, 0, v, 689), t.font = "normal bold 46px PingFang SC", 
                        t.setFillStyle("#2E2E2E");
                        var l = t.measureText(o.name).width;
                        t.fillText("".concat(o.name), 40, 721, l);
                        var c = 40 + l + 18;
                        t.drawImage(n, c, 730, 121, 36), t.font = "normal 22px PingFang SC", t.setFillStyle("#00AD82"), 
                        t.fillText("".concat(o.type_name), c + 16, 734, 88), t.drawImage(i, 499, 739, 136, 136), 
                        t.font = "normal 24px PingFang SC", t.setFillStyle("#627E7A"), t.fillText("杭州购房通", 507, 882);
                        (0, b.drawCircleRadius)(t, {
                            style: "rgba(151,151,151,0.15)",
                            left: 483,
                            top: 727,
                            width: 167,
                            height: 201,
                            radius: 4,
                            line: 4
                        });
                        t.setFillStyle("#666666"), t.font = "normal 28px PingFang SC", t.fillText("楼盘：".concat(o.building_name), 40, 806, 460), 
                        t.fillText("微信：".concat(o.weixin_name), 40, 846, 460), t.fillText("手机：".concat(o.mobile), 40, 886, 460);
                        t.setFillStyle("#FFF5E5"), t.fillRect(40, 957, 610, 56), t.setTextBaseline("top"), 
                        e.getHouseFeatures().slice(0, 3).forEach(function(e, n) {
                            var r = e.type, i = e.text, o = e.size, l = o[0], c = o[1], s = 985 - c / 2, f = 0;
                            0 === n ? f = 72 : 1 === n ? f = 283 : 2 === n && (f = 494);
                            var u = f + l + 10;
                            t.drawImage(a[r], f, s, l, c), t.font = "normal 22px PingFang SC", t.setFillStyle("#D7AD64"), 
                            t.fillText(i, u, 971);
                        });
                    })();
                },
                drawTpl2: function(t) {
                    var e = this, n = t.bg, a = t.flg, r = t.crown, i = t.headimg, o = t.feature, l = t.qr, c = this.consultant;
                    return this.drawTpl({
                        id: "canvas_2"
                    }, function(t) {
                        t.drawImage(n, 0, 0, v, 827);
                        var s = 345;
                        t.save(), t.beginPath(), t.arc(s, 224, 110, 0, 2 * Math.PI), t.clip(), t.drawImage(i, 236, 114, 220, 220), 
                        t.restore(), t.drawImage(r, 229, 91, 232, 249), t.font = "normal bold 32px PingFang SC", 
                        t.setFillStyle("#ffffff"), t.setTextAlign("center");
                        var f = t.measureText(c.name).width;
                        t.fillText("".concat(c.name), s, 388);
                        var u = s + f / 2 + 18;
                        t.drawImage(a, u, 361, 116, 36), t.font = "normal 22px PingFang SC", t.setFillStyle("#B62F26"), 
                        t.setTextAlign("left"), t.fillText("".concat(c.type_name), u + 16, 386, 88), t.setTextAlign("center"), 
                        t.setFillStyle("#ffffff"), t.font = "normal bold 32px PingFang SC", t.fillText("微信：".concat(c.weixin_name), s, 476), 
                        t.fillText("手机：".concat(c.mobile), s, 516), t.save(), t.font = "normal bold 56px PingFang SC", 
                        t.setTextBaseline("top"), t.setFillStyle("#FFEFB7"), t.setShadow(0, 2, 4, "rgba(98, 56, 8, 0.5)"), 
                        t.fillText("".concat(c.building_name), s, 560), t.restore(), t.drawImage(l, 125, 858, 148, 148), 
                        t.setFillStyle("#ACACAC"), t.setTextAlign("left"), t.setTextBaseline("top"), t.font = "normal 24px PingFang SC", 
                        t.fillText("杭州购房通  买房更轻松", 323, 893), t.fillText("关注我们了解更多", 323, 939), e.drawTplFeature(t, o, {
                            bg: "rgba(255, 128, 56, 0.29)",
                            font: "normal 22px PingFang SC",
                            fillStyle: "#FFEFB7",
                            start_x: 45,
                            start_y: 683
                        });
                    })();
                },
                drawTpl3: function(t) {
                    var e = this, n = t.bg, a = (t.flg, t.headimg), r = t.crown, i = t.feature, o = t.qr, l = this.consultant;
                    return this.drawTpl({
                        id: "canvas_3"
                    }, function(t) {
                        var c = 345;
                        t.drawImage(n, 0, 0, v, 1038), t.save(), t.beginPath(), t.arc(c, 251, 110, 0, 2 * Math.PI), 
                        t.clip(), t.drawImage(a, 236, 141, 220, 220), t.restore(), t.drawImage(r, 229, 118, 232, 249), 
                        t.font = "normal 22px PingFang SC", t.setFillStyle("#15B280"), t.setTextAlign("center"), 
                        t.fillText(" ".concat(l.type_name), c, 74), t.font = "normal bold 32px PingFang SC", 
                        t.setFillStyle("#ffffff"), t.setTextAlign("center"), t.measureText(l.name).width, 
                        t.fillText("".concat(l.name), c, 410), t.save(), t.font = "normal bold 50px PingFang SC", 
                        t.setFillStyle("#FFEFB7"), t.setTextAlign("center"), t.setShadow(0, 2, 4, "rgba(98, 56, 8, 0.5)"), 
                        t.setTextBaseline("top"), t.fillText("".concat(l.building_name), c, 447), t.restore(), 
                        t.setTextBaseline("top"), t.font = "normal bold 32px PingFang SC", t.setFillStyle("#ffffff"), 
                        t.fillText("微信：".concat(l.weixin_name), c, 529), t.fillText("手机：".concat(l.mobile), c, 579), 
                        t.setFillStyle("#ffffff"), t.fillRect(16, 782, 658, 240), t.drawImage(o, 265, 800, 160, 160), 
                        t.setFillStyle("#333333"), t.setTextAlign("center"), t.setTextBaseline("top"), t.font = "normal bold 28px PingFang SC", 
                        t.fillText("杭州购房通", c, 970), e.drawTplFeature(t, i, {
                            bg: "rgba(0,140,117,0.63)",
                            font: "normal 22px PingFang SC",
                            fillStyle: "#88FFD9",
                            start_x: 45,
                            start_y: 653
                        });
                    })();
                },
                drawTplFeature: function(t, e, n) {
                    var a = n.start_x, r = n.start_y, i = n.bg, o = n.font, l = n.fillStyle, c = r + 55;
                    t.fillStyle = i, t.fillRect(a, r, 600, 100);
                    var s = this.getHouseFeatures().slice(0, 5), f = s.length, u = s.length > 3 ? 69 : 185, g = (v - 2 * u - 88 * f) / (f - 1);
                    t.setTextAlign("center"), t.setTextBaseline("top");
                    var p = u;
                    s.forEach(function(n, a) {
                        var i = n.type, s = n.text, f = n.size, u = f[0], d = f[1], h = p + 44 - u / 2, m = r + 27.5 - d / 2;
                        t.drawImage(e[i], h, m, u, d), t.font = o, t.setFillStyle(l), t.fillText(s, p + 44, c, 88), 
                        p += 88 + g;
                    });
                }
            }
        };
        e.default = F;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consultants/card/_billboard-create-component", {
    "pages/consultants/card/_billboard-create-component": function(t, e, n) {
        n("543d").createComponent(n("ae00"));
    }
}, [ [ "pages/consultants/card/_billboard-create-component" ] ] ]);
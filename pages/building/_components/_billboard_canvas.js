require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_billboard_canvas" ], {
    "0920": function(e, t, n) {
        n.r(t);
        var r = n("2318"), a = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = a.a;
    },
    2318: function(e, t, n) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, t) {
            return s(e) || o(e, t) || h(e, t) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function o(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], r = !0, a = !1, i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    a = !0, i = e;
                } finally {
                    try {
                        r || null == s.return || s.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return n;
            }
        }
        function s(e) {
            if (Array.isArray(e)) return e;
        }
        function l(e, t, n, r, a, i, o) {
            try {
                var s = e[i](o), l = s.value;
            } catch (e) {
                return void n(e);
            }
            s.done ? t(l) : Promise.resolve(l).then(r, a);
        }
        function u(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, a) {
                    function i(e) {
                        l(s, r, a, i, o, "next", e);
                    }
                    function o(e) {
                        l(s, r, a, i, o, "throw", e);
                    }
                    var s = e.apply(t, n);
                    i(void 0);
                });
            };
        }
        function c(e) {
            return g(e) || d(e) || h(e) || f();
        }
        function f() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function h(e, t) {
            if (e) {
                if ("string" == typeof e) return p(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0;
            }
        }
        function d(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function g(e) {
            if (Array.isArray(e)) return p(e);
        }
        function p(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var m = r(n("a34a")), v = (r(n("ba1b")), r(n("b4fd"))), b = r(n("80d6")), _ = r(n("04a9d")), w = n("d697"), x = n("b794"), y = n("63ae"), I = {
            mixins: [ _.default ],
            props: {
                consultant: Object,
                show: Boolean,
                house: Object,
                currrent_house: Object,
                show_720: Boolean,
                show_vr: Boolean,
                show_planar_graph: Boolean,
                is_building_consultant: Boolean,
                info: Array,
                events: Array
            },
            data: function() {
                return {
                    qr_code: ""
                };
            },
            computed: {
                buildingInfo: function() {
                    var e = this;
                    if (!this.house.house_info) return [];
                    var t = [], n = this.house, r = n.zone, a = n.address;
                    a && t.push({
                        key: "楼盘位置",
                        label: "楼盘位置",
                        value: r && a ? "".concat(r).concat(a) : a
                    }), this.events && this.events.length && this.events[0].content && t.push({
                        key: "最新动态",
                        label: "最新动态",
                        value: this.events[0].content.replace(/\n/g, "，")
                    });
                    var i = this.info.map(function(t) {
                        var n = "";
                        return e.house.house_info.some(function(e) {
                            var r = e.key, a = e.value;
                            if (r === t.key) return n = a, !0;
                        }), {
                            key: t.key,
                            label: t.label,
                            value: n
                        };
                    }).filter(function(e) {
                        return e.value;
                    });
                    return [].concat(c(i.slice(0, 3 - t.length)), t);
                }
            },
            watch: {
                show: function(e) {
                    var t = this, n = this.$root.$mp.query, r = n.building_id, a = n.category_id, i = {
                        "pages/building/main": {
                            prefix: "bb",
                            jump_page: "pages/index/main"
                        },
                        "pages/building/business": {
                            prefix: "bb",
                            jump_page: "pages/index/main"
                        },
                        "pages/building/web_720/main": {
                            prefix: "hzpanoramab",
                            jump_page: "pages/building/main"
                        },
                        "pages/building/web_vr/main": {
                            prefix: "hzvrb",
                            suffix: "-".concat(a),
                            jump_page: "pages/building/main"
                        },
                        "pages/building/planar_graph/main": {
                            prefix: "hzppgb",
                            jump_page: "pages/building/main"
                        }
                    }, o = "bb", s = "", l = "pages/index/main";
                    if (this.$root.__route__) {
                        var u = i[this.$root.__route__];
                        o = u.prefix, s = u.suffix || "", l = u.jump_page;
                    }
                    e && v.default.getSceneQr({
                        scene: "".concat(o, "_").concat(r).concat(s),
                        jump_page: l
                    }).then(function(e) {
                        var n = e.qrcode;
                        t.qr_code = "".concat(n, "?x-oss-process=image/resize,w_120,h_120"), t.generateImg(), 
                        t.save();
                    });
                },
                tmp_img_path: function(e) {
                    e && this.$emit("drawComplete", e);
                }
            },
            methods: {
                saveImgSuccess: function() {
                    this.$emit("success");
                },
                generateImg: function() {
                    var e = this;
                    return u(m.default.mark(function t() {
                        var n, r, i, o, s, l;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Promise.all([ e.getHouseImg(), e.getHouseQr(), e.getConsultantHeadimg(), e.getLogoImg() ]);

                              case 2:
                                n = t.sent, r = a(n, 4), i = r[0], o = r[1], s = r[2], l = r[3], e.drawImg(i, o, s, l);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getHouseImg: function() {
                    var e = this;
                    return u(m.default.mark(function t() {
                        var n, r, a, i, o, s, l, u, c, f, h;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.house, r = n.photos_urls, a = void 0 === r ? [] : r, i = n.vr_panorama_resource, 
                                o = n.vr_resource, s = n.planar_graph_url, l = a && a.length ? (0, y.handleImgSize)(a[0], 560, 373) : "https://cdn.vip-wifi.com/hzfangchan/img/house-detail/billboard-default-img.png?x-oss-process=image/resize,w_460,h_306", 
                                u = i && i.cover_image_url ? i.cover_image_url : "", c = o && o.vr_photo_url ? o.vr_photo_url : "", 
                                u && e.show_720 ? l = (0, y.handleImgSize)(u, 560, 373) : c && e.show_vr ? l = (0, 
                                y.handleImgSize)(c, 560, 373) : e.show_planar_graph && s && (l = (0, y.handleImgSize)(s, 560, 373)), 
                                t.next = 7, b.default.getImgInfo(l);

                              case 7:
                                return f = t.sent, h = f.path, t.abrupt("return", h);

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getHouseQr: function() {
                    var e = this;
                    return u(m.default.mark(function t() {
                        var n, r;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, b.default.getImgInfo(e.qr_code);

                              case 2:
                                return n = t.sent, r = n.path, t.abrupt("return", r);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getConsultantHeadimg: function() {
                    var e = this;
                    return u(m.default.mark(function t() {
                        var n, r;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, b.default.getImgInfo(e.consultant.weixin_headimgurl);

                              case 2:
                                return n = t.sent, r = n.path, t.abrupt("return", r);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getLogoImg: function() {
                    var e = this;
                    return u(m.default.mark(function t() {
                        var n, r, a;
                        return m.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = "", e.show_720 ? n = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/panorama.png" : e.show_vr ? n = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/vr.png" : e.show_planar_graph && (n = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/planar_graph.png"), 
                                n) {
                                    t.next = 4;
                                    break;
                                }
                                return t.abrupt("return", "");

                              case 4:
                                return t.next = 6, b.default.getImgInfo(n);

                              case 6:
                                return r = t.sent, a = r.path, t.abrupt("return", a);

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                drawItemLabel: function(e, t) {
                    var n = t.text, r = t.x, a = t.y;
                    e.setFillStyle("#999999"), e.font = "normal 24px PingFang SC", e.fillText(n + "：", r, a, 120);
                },
                drawText: function(e, t) {
                    var n = t.text, r = t.x, a = t.y, i = t.max_width, o = t.color, s = t.font, l = t.lineHeight;
                    if (e.font = s, e.setFillStyle(o), e.measureText(n).width <= i) return e.fillText(n, r, a, i), 
                    a + l;
                    for (var u = 0, c = 0; c < n.length; c++) {
                        var f = n.substring(u, c + 1);
                        (e.measureText(f).width > i || c === n.length - 1) && (e.fillText(n.substring(u, c), r, a, i), 
                        a += l, u = c);
                    }
                    return a;
                },
                getCardHeight: function(e) {
                    var t = 170, n = this.buildingInfo;
                    this.current_house;
                    return e.font = "normal 24px PingFang SC", n.forEach(function(n) {
                        var r = n.value;
                        e.measureText(r).width > 392 ? t += 66 : t += 33, t += 10;
                    }), t;
                },
                drawImg: function(e, t, n, r) {
                    var a = this;
                    console.error("draw start");
                    var i = "house-canvas", o = this.house, s = o.name, l = o.zone, u = o.status, c = (o.address, 
                    o.price_desc_arr, this.current_house, this.house.details && this.house.details["占地面积"], 
                    u), f = wx.createCanvasContext(i, this.$mp.component), h = 373;
                    f.textBaseline = "top", f.setFillStyle("#FFFFFF"), f.fillRect(0, 0, 560, 1200), 
                    f.drawImage(e, 0, 0, 560, h), console.error("logoImg", r), r && f.drawImage(r, 231, 138, 98, 98);
                    var d = 24;
                    if (f.setFillStyle("#333333"), f.setTextAlign("left"), f.font = "normal bold 36px PingFang SC", 
                    f.fillText(s, d, 389), l && u) {
                        f.font = "normal 20px PingFang SC";
                        var g = "".concat(l, " | ").concat(c), p = f.measureText(g).width + 20;
                        (0, x.strokeRectWidthRadius)(f, {
                            left: d,
                            top: 449,
                            width: p,
                            height: 32,
                            radius: 2,
                            fill_style: "#E9F3F8"
                        }), f.setFillStyle("#737C92"), f.setTextAlign("left"), f.fillText(g, 34, 453);
                    }
                    var m = 384, v = 505;
                    f.font = "normal 24px PingFang SC", this.buildingInfo.forEach(function(e) {
                        e.key;
                        var t = e.value, n = e.label;
                        if (t) if (a.drawItemLabel(f, {
                            text: n,
                            x: d,
                            y: v
                        }), f.setFillStyle("#333333"), f.measureText(t).width <= m) f.fillText(t, 144, v, m), 
                        v += 37; else for (var r = "", i = 0, o = 0; o < t.length; o++) {
                            r += t[o];
                            var s = f.measureText(r).width;
                            if ((o === t.length - 1 || m - s <= 24) && (console.log(s), 1 === i && o < t.length - 1 && (r += "..."), 
                            f.fillText(r, 144, v, m), r = "", i++, v += 37), 2 === i) break;
                        }
                    }), console.error("after draw address", v);
                    var b = v + 38;
                    if (f.setFillStyle("#F7F7F7"), f.fillRect(d, b, 512, 170), this.is_building_consultant) {
                        (0, x.drawCircleImg)(f, {
                            img: n,
                            left: 40,
                            top: b + 41,
                            size: 88
                        });
                        var _ = 140, y = b + 30;
                        f.setFillStyle("#333333"), f.setTextAlign("left"), f.font = "normal bold 32px PingFang SC", 
                        f.fillText(this.consultant.name, _, y);
                        var I = _ + f.measureText(this.consultant.name).width + 8;
                        f.setFillStyle("#DAF7F3"), f.fillRect(I, y + 4, 86, 32), f.setFillStyle("#00C2A7"), 
                        f.font = "normal 18px PingFang SC";
                        var S = "copper" === this.consultant.level ? "置业顾问" : "".concat(w.LEVEL_MAP[this.consultant.level], "顾问");
                        f.fillText(S, I + 6, y + 8), f.setFillStyle("#666666"), f.font = "normal 22px PingFang SC", 
                        f.fillText("微信：".concat(this.consultant.weixin_name || ""), 144, y + 50), f.fillText("手机：".concat(this.consultant.mobile), 144, y + 50 + 30);
                    }
                    var F = this.is_building_consultant ? 395 : 228, T = b + 20, k = 104;
                    (0, x.strokeRectWidthRadius)(f, {
                        left: F,
                        top: T,
                        width: k,
                        height: k,
                        radius: 4,
                        stroke_style: "#EDEDED",
                        line_width: 2,
                        clip: !0
                    }), f.drawImage(t, F, T, k, k), f.setFillStyle("#B2B2B2"), f.setFontSize(20);
                    var j = "长按查看楼盘详情";
                    this.show_720 ? j = "长按体验航拍看房" : this.show_vr ? j = "长按体验VR看房" : this.show_planar_graph && (j = "长按查看楼盘总平图");
                    var C = F + 52;
                    f.setTextAlign("center"), f.fillText(j, C, b + 136);
                    var A = b + 170 + 23;
                    this.$emit("changeHeight", A), console.error("draw end"), f.draw(!0, function() {
                        a.finishDraw({
                            canvasId: i,
                            width: 560,
                            height: A
                        });
                    });
                }
            }
        };
        t.default = I;
    },
    "73f8": function(e, t, n) {
        var r = n("7b38");
        n.n(r).a;
    },
    "7b38": function(e, t, n) {},
    aab4: function(e, t, n) {
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    bda1: function(e, t, n) {
        n.r(t);
        var r = n("aab4"), a = n("0920");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("73f8");
        var o = n("f0c5"), s = Object(o.a)(a.default, r.b, r.c, !1, null, "7a7bc688", null, !1, r.a, void 0);
        t.default = s.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_billboard_canvas-create-component", {
    "pages/building/_components/_billboard_canvas-create-component": function(e, t, n) {
        n("543d").createComponent(n("bda1"));
    }
}, [ [ "pages/building/_components/_billboard_canvas-create-component" ] ] ]);
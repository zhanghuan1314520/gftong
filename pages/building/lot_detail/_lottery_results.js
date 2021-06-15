require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/lot_detail/_lottery_results" ], {
    "33da": function(t, e, n) {
        n.r(e);
        var o = n("b25f"), r = n("4e3b");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("db71");
        var a = n("f0c5"), l = Object(a.a)(r.default, o.b, o.c, !1, null, "012c8db8", null, !1, o.a, void 0);
        e.default = l.exports;
    },
    "474b": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t, e, n, o, r, i, a) {
            try {
                var l = t[i](a), s = l.value;
            } catch (t) {
                return void n(t);
            }
            l.done ? e(s) : Promise.resolve(s).then(o, r);
        }
        function i(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, i) {
                    function a(t) {
                        r(s, o, i, a, l, "next", t);
                    }
                    function l(t) {
                        r(s, o, i, a, l, "throw", t);
                    }
                    var s = t.apply(e, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = o(n("a34a")), l = o(n("80d6")), s = {
            data: function() {
                return {};
            },
            props: {
                loading: Boolean,
                result: Object,
                show_result: Object,
                hide_comment_btn: Boolean,
                go_comment_lock: Boolean
            },
            components: {
                BottomRightShare: function() {
                    n.e("components/views/bottom_right_share").then(function() {
                        return resolve(n("dd4e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            computed: {
                show_img_result: function() {
                    return this.result.ln_result && this.result.ln_result.length;
                },
                ln_num: function() {
                    return this.show_img_result ? this.result.ln_number : "";
                },
                order: function() {
                    return this.show_img_result ? "选房顺序第".concat(this.result.ln_result[0].ln_order, "号") : ",";
                },
                content: function() {
                    var t = this.result.ln_result, e = "";
                    return t && t.length && (e = t[0].share_desc), e;
                }
            },
            methods: {
                toggleTip: function() {
                    this.show_result.show_qa && this.$emit("toggleTip");
                },
                drawImg: function() {
                    var t = this;
                    return i(a.default.mark(function e() {
                        var n, o, r, i, s, u, c, f, d, m;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!t.go_comment_lock) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return t.$sendCtmEvtLog("摇号结果页点击-分享到评论"), t.$emit("setLock"), n = "lottery-result-canvas", 
                                o = t.show_result.is_success ? "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/mine_detail/draw-img-good.png" : "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/mine_detail/draw-img-normal.png", 
                                r = wx.createCanvasContext(n, t.$mp.component), e.next = 9, l.default.getImgInfo(o);

                              case 9:
                                return i = e.sent, s = i.path, e.next = 13, l.default.getImgInfo(t.show_result.qr_img);

                              case 13:
                                u = e.sent, c = u.path, d = 345, m = (f = 343) / 2, r.drawImage(s, 0, 0, f, d), 
                                t.show_result.is_success ? t.drawContent(r, m, "#FFFFFF", "#CC3D0B") : t.drawContent(r, m, "#333333", "#333333"), 
                                r.drawImage(c, m - 34, 240, 68, 68), r.setTextAlign("center"), r.font = "normal 12px PingFang SC", 
                                r.setFillStyle("#FFFFFF"), r.fillText("扫码我也要查", m, 325), r.draw(!0, function() {
                                    setTimeout(function() {
                                        t.downImg(n, f, d);
                                    }, 100);
                                });

                              case 26:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                drawContent: function(t, e, n, o) {
                    t.setFillStyle(n), t.setTextAlign("center"), t.font = "normal 14px PingFang SC", 
                    t.fillText("公证摇号编码", e, 75), t.font = "normal bold 20px PingFang SC", t.fillText("".concat(this.ln_num), e, 100), 
                    t.setFillStyle(o), t.setTextAlign("center"), t.font = "normal bold 23px PingFang SC", 
                    t.fillText(this.order, e, 155), t.setFillStyle(o), t.setTextAlign("center"), t.font = "normal 14px PingFang SC", 
                    t.fillText(this.show_result.desc, e, 185);
                },
                downImg: function(t, e, n) {
                    var o = this;
                    wx.canvasToTempFilePath({
                        canvasId: t,
                        width: e,
                        height: n,
                        x: 0,
                        y: 0,
                        success: function() {
                            var t = i(a.default.mark(function t(e) {
                                var n;
                                return a.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        return t.next = 2, l.default.uploadImg({
                                            filePath: e.tempFilePath
                                        });

                                      case 2:
                                        n = t.sent, o.$emit("goComment", n, o.content);

                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            return function(e) {
                                return t.apply(this, arguments);
                            };
                        }(),
                        fail: function() {
                            o.unLock(), wx.showToast({
                                title: "上传出错啦~",
                                icon: "none"
                            });
                        }
                    }, this.$mp.component);
                }
            }
        };
        e.default = s;
    },
    "4e3b": function(t, e, n) {
        n.r(e);
        var o = n("474b"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    b25f: function(t, e, n) {
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
    db71: function(t, e, n) {
        var o = n("eeb2");
        n.n(o).a;
    },
    eeb2: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/lot_detail/_lottery_results-create-component", {
    "pages/building/lot_detail/_lottery_results-create-component": function(t, e, n) {
        n("543d").createComponent(n("33da"));
    }
}, [ [ "pages/building/lot_detail/_lottery_results-create-component" ] ] ]);
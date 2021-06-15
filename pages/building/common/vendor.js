(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/common/vendor" ], {
    "03a3": function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n("0ee1")), r = {
            mixins: [ i(n("55ed")).default, o.default ],
            computed: {
                show_720: function() {
                    var e = this.house.vr_panorama_resource;
                    return e && e.vr_panorama_url;
                },
                show_panorama: function() {
                    var e = this.house.vr_panorama_resource;
                    return Boolean(e && e.vr_panorama_url);
                },
                cover_720: function() {
                    var e = this.house.vr_panorama_resource;
                    return e && e.cover_image_url ? e.cover_image_url : "";
                },
                show_vr: function() {
                    var e = this.house.vr_resource;
                    return Boolean(e && e.vr_photo_url);
                },
                video_url: function() {
                    var e = this.house.video_resource;
                    return e && e.video_url ? e.video_url : "";
                },
                show_video: function() {
                    return this.showVideo && Boolean(this.video_url);
                }
            },
            methods: {
                goVR: function(e) {
                    if (this.show_vr) {
                        var t = this.house, n = t.id, i = t.name;
                        this.goSubPagePath("/pages/building/vr/main?building_id=".concat(n, "&title=").concat(i, " VR&open_first=").concat(e || ""));
                    }
                },
                goVideo: function() {
                    var e = this.house, t = e.id, n = e.name;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(t, "&title=").concat(n, "&src=").concat(this.video_url)
                    });
                },
                goPlanarGraph: function() {
                    var e = this.house.id;
                    wx.navigateTo({
                        url: "/pages/building/planar_graph/main?building_id=".concat(e)
                    });
                }
            }
        };
        t.default = r;
    },
    "042e": function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var u = e[r](a), s = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function r(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, r) {
                    function a(e) {
                        o(s, i, r, a, u, "next", e);
                    }
                    function u(e) {
                        o(s, i, r, a, u, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = i(n("a34a")), u = i(n("31e7")), s = {
            data: function() {
                return {
                    tip_content: "",
                    comment_rules: ""
                };
            },
            onLoad: function() {
                this.get_tip_config();
            },
            methods: {
                get_tip_config: function() {
                    var e = this;
                    return r(a.default.mark(function t() {
                        var n, i, o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, u.default.getDisclaimerConfig();

                              case 2:
                                n = t.sent, i = n.comment_tips, o = n.comment_rules, e.tip_content = i, e.comment_rules = o;

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        t.default = s;
    },
    "0ee1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("ba1b")), o = {
            methods: {
                getVr: function() {
                    var e = this.$root.$mp.query.building_id;
                    return i.default.getImgs(e, "layout", {
                        subcategory: "VR视频"
                    }).then(function(t) {
                        var n = encodeURIComponent("building_id=".concat(e)), i = t.building;
                        return t.items.forEach(function(t) {
                            t.vr_url && (t.vr_link = "/pages/building/web_vr/main?building_id=".concat(e, "&link=").concat(encodeURIComponent(t.vr_url), "&title=").concat(i.name, "&detailParam=").concat(n, "&category_id=").concat(t.id));
                        }), t;
                    });
                }
            }
        };
        t.default = o;
    },
    1690: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, r = i(n("8e44")), a = i(n("0d75")), u = i(n("80d6")), s = function(e) {
            a.default.log("you_like", e);
        }, c = function(e, t) {
            e.intersectionRect.bottom && t.forEach(function(e, t) {
                return s({
                    id: e.log_id,
                    pos: t,
                    pos_name: e.position
                });
            });
        }, d = [], l = {
            onLoad: function() {
                a.default.refresh("you_like");
            },
            onUnload: function() {
                o && clearTimeout(o), d.forEach(function(e) {
                    return e.disconnect();
                });
            },
            methods: {
                initLog_1_3: function(e, t) {
                    var n = this;
                    o = setTimeout(function() {
                        var i = u.default.observerRelativeViewPort("#".concat(e.dom_id), {
                            success: function(t) {
                                return c(t, e.ids);
                            }
                        }, n.$mp.component), o = u.default.observerRelativeViewPort("#".concat(t.dom_id), {
                            success: function(e) {
                                return c(e, t.ids);
                            }
                        }, n.$mp.component);
                        i && d.push(i), o && d.push(o);
                    }, 800);
                },
                clickHouse: function(e) {
                    var t = e.currentTarget.dataset, n = t.id, i = t.pos_name, o = t.index;
                    r.default.interestingEvent({
                        interesting_id: n,
                        event: "click",
                        pos_name: i,
                        pos: o
                    }), wx.navigateTo({
                        url: e.currentTarget.dataset.href
                    });
                }
            }
        };
        t.default = l;
    },
    "2d1a": function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var o, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DETS_A_ICONS = t.DETS_ICONS = t.DEFAULT_DEST_ICON = t.HOUSE_ICON = t.TYPES = void 0;
        var a = {
            metro: "地铁",
            school: "学校",
            food: "美食",
            hospital: "医院",
            shopping: "购物",
            bus: "公交",
            bank: "银行"
        };
        t.TYPES = a;
        t.HOUSE_ICON = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/house.png";
        t.DEFAULT_DEST_ICON = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/dest-icon.png";
        var u = (o = {}, i(o, a.metro, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/metro.png"), 
        i(o, a.school, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/school.png"), 
        i(o, a.food, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/food.png"), 
        i(o, a.hospital, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/hospital.png"), 
        i(o, a.shopping, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/shop.png"), 
        i(o, a.bus, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/bus.png"), 
        i(o, a.bank, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/bank.png"), 
        o);
        t.DETS_ICONS = u;
        var s = (r = {}, i(r, a.metro, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/metro-a.png"), 
        i(r, a.school, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/school-a.png"), 
        i(r, a.food, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/food-a.png"), 
        i(r, a.hospital, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/hospital-a.png"), 
        i(r, a.shopping, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/shop-a.png"), 
        i(r, a.bus, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/bus-a.png"), 
        i(r, a.bank, "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/building/around_facilities/map/bank-a.png"), 
        r);
        t.DETS_A_ICONS = s;
    },
    "2de8": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            mixins: [ function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }(n("7d67")).default ],
            onLoad: function(e) {
                e.scene && wx.redirectTo({
                    url: "/pages/building/main?" + this.getSceneRedirectParam()
                });
            },
            onUnload: function() {}
        };
        t.default = i;
    },
    3590: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            data: function() {
                return {
                    floating_share: !1
                };
            },
            methods: {
                changeFloatingShare: function(e) {
                    this.floating_share = e;
                }
            }
        };
        t.default = i;
    },
    4222: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n("03a3")), r = i(n("cc05")), a = {
            mixins: [ o.default, r.default ],
            data: function() {
                return {
                    tmp_img_path: "",
                    show_success: !1,
                    show_billboard: !1,
                    billboard_height: 0
                };
            },
            onLoad: function() {
                var e = this.$root.$mp.query.building_id;
                this.getUser(e);
            },
            methods: {
                changeBillboardHeight: function(e) {
                    this.billboard_height = e;
                },
                showBillboard: function() {
                    this.show_billboard = !0;
                },
                hideBillboard: function() {
                    this.show_billboard = !1, this.hideSaveImg();
                },
                drawComplete: function(e) {
                    this.tmp_img_path = e;
                },
                saveImgSuccess: function() {
                    this.show_success = !0;
                },
                tapBillboard: function() {},
                hideSaveImg: function() {
                    this.show_success = !1, this.show_billboard = !1;
                }
            }
        };
        t.default = a;
    },
    "54dd": function(e, t, n) {
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function a(e, t) {
            return l(e) || d(e, t) || s(e, t) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0;
            }
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function d(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value), 
                    !t || n.length !== t); i = !0) ;
                } catch (e) {
                    o = !0, r = e;
                } finally {
                    try {
                        i || null == u.return || u.return();
                    } finally {
                        if (o) throw r;
                    }
                }
                return n;
            }
        }
        function l(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.handleItem = void 0;
        var f = function(e, t) {
            return ((e - 1e4 * parseInt(e * (1 - t) / 1e4)) / 1e4).toFixed(2);
        };
        t.handleItem = function(e, t) {
            var n = t.downpayment_percentage, i = "精装" === e.decoration_type ? e.decorate_price : 0, r = e.area, u = e.water_price, s = e.square_price, c = (u / 1e4).toFixed(2), d = a(n, 2), l = d[0], _ = d[1], h = f(u, l), p = f(u, _), g = {
                .1: "一成",
                .2: "二成",
                .3: "三成",
                .4: "四成",
                .5: "五成",
                .6: "六成",
                .7: "七成",
                .8: "八成",
                .9: "九成"
            }, v = g[l], b = g[_];
            return o(o({}, e), {}, {
                area: r,
                decorate_price: i,
                square_price_show: s,
                total_price: c,
                rd_ratio_tx: v,
                normal_ratio_tx: b,
                down_payment_rd: h,
                down_payment_normal: p
            });
        };
    },
    "55ed": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            data: function() {
                return {
                    disclaimer_agree: !1,
                    show_vr_disclaimer: !1,
                    vr_link: ""
                };
            },
            methods: {
                openVr: function(e) {
                    this.vr_link = e, this.show_disclaimer ? this.toggleVrTip() : this.confirmDisclaimer();
                },
                toggleVrTip: function() {
                    this.show_vr_disclaimer = !this.show_vr_disclaimer, this.show_vr_disclaimer || this.resetDisclaimerTip();
                },
                resetDisclaimerTip: function() {
                    this.disclaimer_agree = !1;
                },
                toggleDisclaimerAgree: function() {
                    this.disclaimer_agree = !this.disclaimer_agree;
                },
                confirmDisclaimer: function() {
                    wx.navigateTo({
                        url: this.vr_link
                    });
                }
            }
        };
        t.default = i;
    },
    "5d43": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            var n = t.categories, r = t.series;
            t.title, s = 0, d = 690 / i;
            var p = wx.createCanvasContext(e), g = Object.keys(r).reduce(function(e, t) {
                var n = r[t];
                return n.length ? n[n.length - 1] : e;
            }, 0), v = Math.ceil(1.3 * g), b = n.length, m = b > 10 ? 10 : b, y = Math.round(b / m), w = _, O = h, P = d / m;
            p.setFillStyle("#FFFFFF"), p.fillRect(0, 0, a, u), p.draw(!0);
            var x = p.createLinearGradient(s, c, s, c + l);
            x.addColorStop(0, "#ffffff"), x.addColorStop(1, "#EDFAF7"), p.setFillStyle(x), p.fillRect(s, c, d, l), 
            p.draw(!0);
            var T = p.createLinearGradient(s, c, s, c + l);
            T.addColorStop(0, "#ffffff"), T.addColorStop(1, "#DCFAF2");
            for (var j = a / b, S = 0; S < b; S++) {
                var M = s + S * j * 2;
                p.setFillStyle(T), p.fillRect(M, c, j, l), p.draw(!0);
            }
            var C = (d - 12) / b, E = 6, R = c, k = [];
            p.beginPath(), p.setLineJoin("round"), p.setStrokeStyle(o), p.setLineWidth(O), p.setLineCap("round"), 
            n.forEach(function(e, t) {
                var n = r[e], i = 0 === t ? n.length : 10, o = C / i;
                n.length || (E += C);
                for (var a = 0; a < i; a++) {
                    var u = a === n.length - 1, s = n[a];
                    if (!s) return;
                    E += o, R = l * (1 - s / v);
                    var c = parseInt(E), d = parseInt(R);
                    p.lineTo(c - w, d), u && k.push({
                        x: c,
                        y: d,
                        text: s
                    });
                }
            }), p.stroke(), p.draw(!0), k.forEach(function(e) {
                var t = e.x, n = e.y, r = e.text;
                p.beginPath(), p.arc(t - w, n, w, 0, 2 * Math.PI), p.setFillStyle(o), p.fill(), 
                p.draw(!0);
                var a = 22 / i;
                p.setFillStyle(o), p.setTextAlign("left"), p.setFontSize(a);
                var u = String(r).length * a;
                p.fillText(r, t - 2 * a, n - 1 * a, u);
            });
            for (var I = 0; I < m; I++) {
                var D = n[I * y], A = s + I * P + P / 2, $ = u - f;
                p.setFontSize(f), p.setFillStyle("#9398A7"), p.setTextAlign("center"), p.fillText(D, A, $, P);
            }
            p.draw(!0);
        };
        var i = 2, o = "#FF9E17";
        try {
            var r = wx.getSystemInfoSync().windowWidth;
            i = 750 / r;
        } catch (e) {
            console.error("getSystemInfoSync failed!");
        }
        var a = 690 / i, u = 420 / i, s = 80 / i, c = 120 / i, d = 600 / i, l = 300 / i, f = 22 / i, _ = 6 / i, h = 2 / i;
    },
    6453: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            methods: {
                openWeb720: function() {
                    var e = this.house, t = e.id, n = e.name, i = e.vr_panorama_resource.vr_panorama_url;
                    this.goSubPagePath("/pages/building/web_720/main?building_id=".concat(t || "", "&title=").concat(n, "&link=").concat(i));
                }
            }
        };
        t.default = i;
    },
    "757e": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("371c"), o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("ba1b")), r = {
            methods: {
                goIconLocation: function(e) {
                    var t = this, n = e.currentTarget.dataset, r = n.type, a = n.url, u = n.name, s = {
                        comment: this.goComments,
                        consultant: this.goConsultant,
                        vr: function() {
                            t.goVR(), t.house.new_vr_hint && o.default.newReadHints(t.house.id, "new_vr");
                        },
                        web720: function() {
                            t.openWeb720(), t.house.new_vr_panorama_hint && o.default.newReadHints(t.house.id, "new_vr_panorama");
                        },
                        video: this.goVideo,
                        planar: function() {
                            return t.goSubPagePath("/pages/building/planar_graph/main?building_id=".concat(t.house.id));
                        },
                        audios: function() {
                            return t.goSubPagePath("/pages/building/audio/main?building_id=".concat(t.house.id));
                        },
                        history_lottery: function() {
                            return t.goAnchorPoint("history_lottery");
                        },
                        land_trade: function() {
                            return t.goSubPagePath("/pages/packageA/trade_data/auction/detail/main?id=".concat(t.house.land_trade_id));
                        }
                    };
                    (0, i.sendCtmEvtLog)("楼盘详情top点击-".concat(u)), "function" == typeof s[r] ? s[r]() : wx.navigateTo({
                        url: a
                    });
                }
            }
        };
        t.default = r;
    },
    "75e7": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = function(e, t, n) {
            if (e && t) {
                var i = "【".concat(e.name, "】");
                if ("即将取证" === e.status) return "".concat(i, "即将取证，点击了解详情~");
                if ("在售" === e.status) return "这里有".concat(i, "的详细信息，点击了解详情~");
                if ("已拿预售证" === e.status) return "".concat(i, "已取证，点击查看价格、面积等信息");
                if ("即将登记" === e.status) return "".concat(i, "已拿证，").concat(t.ln_register_start_date, "开始登记哦");
                if ("正在登记" === e.status) return "".concat(i, "正在网上登记中");
                if ("等待摇号" === e.status) return "".concat(i, "正在等待摇号");
                if ("摇号完成" === e.status) return "".concat(i, "已摇号，点击了解详情~");
            }
            return n ? e.name : "".concat(e.name, "-线上售楼部正式开启");
        };
    },
    "7d67": function(e, t, n) {
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    r(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function(e) {
            if (0 === e.indexOf("bvr")) return {
                building_id: e.split("_").splice(1)[0],
                type: "visit_reservation"
            };
            if (0 === e.indexOf("bb")) {
                var t = e.split("_").splice(1);
                return {
                    building_id: t[0],
                    user_id: t[1]
                };
            }
            if (0 === e.indexOf("qfb")) return {
                building_id: e.split("_").splice(1)[0],
                share_by: e
            };
            if (0 === e.indexOf("hpdb")) {
                var n = e.split("_").splice(1);
                return {
                    building_id: n[0].split("-")[1],
                    prices_house_id: n[0].split("-")[0],
                    share_by: e
                };
            }
            if (0 === e.indexOf("ar2019b")) return {
                building_id: e.split("_").splice(1)[0],
                share_by: e
            };
            if (0 === e.indexOf("hzpanoramab")) {
                var i = e.split("_").splice(1)[0];
                return {
                    building_id: i,
                    share_by: e,
                    sub_page: encodeURIComponent("/pages/building/web_720/main?building_id=".concat(i))
                };
            }
            if (0 === e.indexOf("hzvrb")) {
                var a = e.split("_")[1].split("-"), u = a[0], s = a[1];
                return {
                    building_id: u,
                    share_by: e,
                    sub_page: encodeURIComponent("/pages/building/web_vr/main?building_id=".concat(u, "&category_id=").concat(s))
                };
            }
            if (0 === e.indexOf("lfd")) {
                var c = e.split("_");
                if (c && c.length > 1) {
                    var d = c[1].split("-"), l = d[0], f = d[1] || 0;
                    return {
                        building_id: l,
                        share_by: e,
                        sub_page: encodeURIComponent("/pages/result/main?building_id=".concat(l, "&house_id=").concat(f, "&type=result"))
                    };
                }
            }
            if (0 === e.indexOf("lrd")) {
                var _ = e.split("_");
                if (_ && _.length > 1) {
                    var h = _[1].split("-"), p = h[0], g = h[1] || 0;
                    return {
                        building_id: p,
                        share_by: e,
                        sub_page: encodeURIComponent("/pages/result/main?building_id=".concat(p, "&house_id=").concat(g, "&type=reg"))
                    };
                }
            }
            if (0 === e.indexOf("hzppgb")) {
                var v = e.split("_").splice(1)[0];
                return {
                    building_id: v,
                    share_by: e,
                    sub_page: encodeURIComponent("/pages/building/planar_graph/main?building_id=".concat(v))
                };
            }
            return decodeURIComponent(e).split("&").reduce(function(e, t) {
                var n = t.split("=");
                return o(o({}, e), {}, r({}, n[0], n[1]));
            }, {});
        }, u = function(e) {
            e.buildingid && (e.building_id = e.buildingid), e.houseid && (e.house_id = e.houseid);
        }, s = {
            methods: {
                getSceneParam: function() {
                    var e = getCurrentPages(), t = e ? e.length - 1 : 0, n = this.$mp.query ? this.$mp.query : e && e[t].options ? e[t].options : {}, i = n.scene;
                    return i && (n = a(i)), u(n), n;
                },
                getSceneRedirectParam: function() {
                    var e = this.getSceneParam(), t = "", n = this.$root.$mp.query.scene;
                    return t += Object.keys(e).map(function(t) {
                        return "".concat(t, "=").concat(e[t]);
                    }).join("&"), n && (0 === n.indexOf("bb") && (t += "&share_by=".concat(n)), t += "&scene_params=".concat(n)), 
                    t;
                }
            }
        };
        t.default = s;
    },
    8006: function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var o, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ORDER_TYPE_TX = t.ORDER_TYPE = t.ORDER_TX = t.ORDER = void 0;
        var a = {
            ASC: "asc",
            DESC: "desc"
        };
        t.ORDER = a;
        var u = (o = {}, i(o, a.ASC, "升序"), i(o, a.DESC, "降序"), o);
        t.ORDER_TX = u;
        var s = {
            BLOCK_NO: "block_no",
            WATER_PRICE: "water_price",
            SQUARE_PRICE: "square_price",
            AREA: "area"
        };
        t.ORDER_TYPE = s;
        var c = (r = {}, i(r, s.BLOCK_NO, "楼栋数"), i(r, s.WATER_PRICE, "总价"), i(r, s.SQUARE_PRICE, "单价"), 
        i(r, s.AREA, "面积"), r);
        t.ORDER_TYPE_TX = c;
    },
    "808f": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            data: function() {
                return {
                    show_share_option: !1,
                    show_billboard: !1
                };
            },
            methods: {
                showShareOption: function() {
                    this.is_consultant && (this.show_share_option = !0);
                },
                hideShareOption: function() {
                    this.show_share_option = !1;
                },
                toggleBillboard: function() {
                    this.show_billboard = !this.show_billboard;
                }
            }
        };
        t.default = i;
    },
    "83e9": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLargePlanar = t.getSmallPlanar = void 0;
        t.getSmallPlanar = function(e) {
            return e ? e + "?x-oss-process=image/resize,w_750,h_600/quality,Q_30" : "";
        };
        t.getLargePlanar = function(e) {
            return e ? e + "?x-oss-process=image/format,jpg" : "";
        };
    },
    "865e": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("371c"), o = {
            building_id: "",
            building_name: "",
            play_url: "",
            play_seconds: 0,
            countdown_task: 0,
            log: function() {
                console.error(this.play_url, this.play_seconds), i.UserLog.buildingAudios(this.building_id, {
                    building_name: this.building_name,
                    audio_url: this.play_url,
                    play_seconds: this.play_seconds
                }), (0, i.sendCtmEvtLog)("楼盘户型讲解"), (0, i.sendUserLog)("fc_layout_audio", {
                    d_key: this.play_url,
                    d_paras: this.play_seconds,
                    d_event: 1
                });
            },
            play: function(e, t) {
                var n = t.building_id, i = t.building_name;
                this.play_url = e, this.play_seconds = 0, this.building_id = n, this.building_name = i, 
                this.countdown_task && clearTimeout(this.countdown_task), this._runCountdown();
            },
            _runCountdown: function() {
                var e = this;
                this.countdown_task = setTimeout(function() {
                    e.play_seconds++, e._runCountdown();
                }, 1e3);
            },
            stop: function() {
                this.log(), this.countdown_task && clearTimeout(this.countdown_task), this.play_seconds = 0;
            }
        };
        t.default = o;
    },
    a0d0: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("db18"));
        t.default = function(e) {
            return {
                mixins: [ (0, i.default)(e) ],
                methods: {
                    observedElementShow: function() {
                        this.$emit("changeFloatingShare", !1);
                    },
                    observedElementHide: function() {
                        this.$emit("changeFloatingShare", !0);
                    }
                }
            };
        };
    },
    a420: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TIP_CONTENT = void 0;
        t.TIP_CONTENT = "购房人通过房协网报名登记后产生的号码为“购房登记号\"【样式为14位数字号码：2019XXXXXXXXXX]。\n房屋行政管理部门复核后的名册中的“公证摇号编号”为第一位带有字母的号码【棚改货币化安置住户登记购房人的“公证摇号编号''：A+数字，刚需家庭登记购房人的“公证摇号编号” 为：B+数字；普通家庭登记购房人的“公证摇号编号”为：C+ 数字】，该“公证摇号编号”是导入公证机构摇号的原始号码，公证摇号即对该摇号编号进行排序，排序生成的顺序号即为 “选房顺序号”。\n查询“选房顺序号”需要提前知晓购房人“购房登记号''对应的“公证摇号编号”。";
    },
    a6ee: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("80d6")), o = "house_price", r = null, a = {
            setMode: function(e, t) {
                r || (r = {}), r[e] = t, i.default.setStorage(o, r);
            },
            getMode: function(e) {
                return r ? Promise.resolve(r[e]) : i.default.getStorage(o).then(function(t) {
                    var n = t.data;
                    return r = n, n[e];
                }).catch(function() {
                    return "";
                });
            }
        };
        t.default = a;
    },
    aad7: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getLikeCount = void 0;
        t.getLikeCount = function(e, t) {
            var n = e ? 1 : 0;
            return Math.max(n, t);
        };
    },
    ac8e: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("80d6")), o = {
            data: function() {
                return {
                    show_public_dlg: !1
                };
            },
            computed: {
                apply_content: function() {
                    if (!this.customer_service_info) return "";
                    var e = this.customer_service_info, t = e.wx_username, n = e.wx_nickname;
                    return "请将需要更新的楼盘最新动态提供给您专属客服【".concat(t, "（").concat(n, "）】，可以加积分哦");
                }
            },
            methods: {
                publish: function(e) {
                    if (this.building_event_author) {
                        var t = this.$root.$mp.query.building_id;
                        wx.navigateTo({
                            url: "/pages/building/event/add/main?building_id=".concat(t)
                        });
                    } else this.togglePublishDlg();
                },
                togglePublishDlg: function() {
                    this.show_public_dlg = !this.show_public_dlg;
                },
                copyWexin: function() {
                    i.default.setClipboardData(this.customer_service_info.wx_username);
                }
            }
        };
        t.default = o;
    },
    ae93: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.TIME_LINE = void 0;
        var i = "hangzhou", o = {
            hangzhou: {
                show_qr: !0,
                attachs: []
            }
        }, r = {
            hangzhou: {
                tx: {
                    ln_register: "登记时间",
                    ln_verify: "核验时间"
                }
            }
        }[i];
        t.TIME_LINE = r;
        var a = o[i];
        t.default = a;
    },
    b159: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            computed: {
                salesDepartment: function() {
                    return {
                        val: this.house.details ? this.house.details["售楼部地址"] : "",
                        coord: this.house.details ? this.house.details["售楼部坐标"] : ""
                    };
                }
            },
            methods: {
                goSalesAddress: function() {
                    var e = this.salesDepartment, t = e.coord, n = e.val;
                    if (t) {
                        var i = t.split(",");
                        i && i.length && wx.openLocation({
                            longitude: Number(i[0]),
                            latitude: Number(i[1]),
                            name: this.house.name,
                            address: n
                        });
                    }
                }
            }
        };
        t.default = i;
    },
    b512: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("8e44")), o = n("a177"), r = n("371c"), a = {
            data: function() {
                return {
                    show_like_tip: !1,
                    show_auth_phone: !1
                };
            },
            methods: {
                hideLikeTip: function() {
                    this.show_like_tip = !1;
                },
                hideAuthPhone: function() {
                    this.show_auth_phone = !1;
                },
                toggleFavourite: function(e) {
                    var t = this, n = this.house, a = n.follow_info, u = n.favourite;
                    a && (u ? i.default.delMyFavourite(a.id) : ((0, r.sendCtmEvtLog)(e), i.default.addMyFavourite({
                        followable_type: a.followable_type,
                        followable_id: a.followable_id
                    }).then(function() {
                        return o.App_User.get();
                    }).then(function(e) {
                        var n = e.weixin_subscribed, i = e.weixin_phone_number;
                        n ? i || (t.show_auth_phone = !0) : t.show_like_tip = !0, wx.showToast({
                            title: "订阅成功"
                        });
                    })), this.house.favourite = !u, this.getData());
                }
            }
        };
        t.default = a;
    },
    b9bb: function(e, t, n) {
        function i(e, t, n, i, o, r, a) {
            try {
                var u = e[r](a), s = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function o(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    function a(e) {
                        i(s, o, r, a, u, "next", e);
                    }
                    function u(e) {
                        i(s, o, r, a, u, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    u(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("a34a")), c = function(e) {
            return new Promise(function(t) {
                setTimeout(function() {
                    wx.createSelectorQuery().select("#".concat(e)).fields({
                        size: !0
                    }, function(e) {
                        t(e ? e.height : 0);
                    }).exec();
                });
            });
        }, d = function(e, t) {
            return e.some(function(e) {
                return e.id != t.id;
            });
        }, l = wx.getSystemInfoSync().windowHeight, f = {
            data: function() {
                return {
                    ObserverMap: {},
                    HideObserver: null,
                    show_top_module_tabs: !1,
                    top_module_tabs_position: "",
                    top_module_tabs_height: 0,
                    scrolling: !1
                };
            },
            computed: {
                top_module_tabs: function() {
                    var e = this.is_opened, t = this.excellent_consultants, n = this.events, i = this.show_article, o = this.history_lot_houses, r = this.predict_open;
                    return [ {
                        text: "开盘信息",
                        id: "opening_info",
                        show: e
                    }, {
                        text: "总平图",
                        id: "planar_graph",
                        show: this.house.planar_graph_url
                    }, {
                        text: "置业顾问",
                        id: "excellent_consultants",
                        show: t.length
                    }, {
                        text: "即将开盘信息",
                        id: "predict_open",
                        show: r && r.length && !e
                    }, {
                        text: "楼盘动态",
                        id: "events",
                        show: n.total_count
                    }, {
                        text: "评论",
                        id: "building_comments",
                        show: !0
                    }, {
                        text: "加群",
                        id: "discuss_group",
                        show: !0
                    }, {
                        text: "楼盘文章",
                        id: "building_article",
                        show: i
                    }, {
                        text: "历史摇号",
                        id: "history_lottery",
                        show: o.length
                    } ].filter(function(e) {
                        return e.show;
                    }).map(function(e) {
                        return a(a({}, e), {}, {
                            tab_id: e.id + "_tab"
                        });
                    });
                },
                top_height: function() {
                    return this.top_module_tabs_height;
                },
                top_module_observe_bottom: function() {
                    return this.top_height - l;
                }
            },
            watch: {
                top_module_tabs: function(e, t) {
                    (e.length != t.length || d(e, t)) && this.initTopModuleListener(e);
                },
                top_height: function(e, t) {
                    e != t && this.initTopModuleListener(this.top_module_tabs);
                }
            },
            onUnload: function() {
                this.disconnectWatcher();
            },
            methods: {
                initTopModuleListener: function(e) {
                    var t = this;
                    this.$nextTick(function() {
                        e.forEach(function(e) {
                            var n = e.id, i = e.tab_id;
                            t.observeTopModuleTab(n, i);
                        }), t.watchTopModuleHide(e[0]);
                    });
                },
                watchTopModuleHide: function(e) {
                    var t = this;
                    return o(s.default.mark(function n() {
                        var i, o, r;
                        return s.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, c(e.id);

                              case 2:
                                return i = n.sent, n.next = 5, c("top-module-tabs-hide-flg");

                              case 5:
                                o = n.sent, r = i + o + t.top_height, t.HideObserver && t.HideObserver.disconnect(), 
                                t.HideObserver = wx.createIntersectionObserver().relativeToViewport({
                                    top: -r
                                }), t.HideObserver.observe("#".concat(e.id), function(e) {
                                    console.error("hide", e), e.intersectionRatio && t.hideTopModuleTabs();
                                });

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                disconnectWatcher: function() {
                    var e = this;
                    this.HideObserver && this.HideObserver.disconnect(), Object.keys(this.ObserverMap).forEach(function(t) {
                        e.ObserverMap[t].disconnect();
                    });
                },
                hideTopModuleTabs: function() {
                    this.show_top_module_tabs = !1, this.top_module_tabs_position = "";
                },
                changeTopModuleTabsHeight: function(e) {
                    this.top_module_tabs_height = e;
                },
                observeTopModuleTab: function(e, t) {
                    var n = this;
                    this.ObserverMap[e] && this.ObserverMap[e].disconnect(), console.error("top_module_observe_bottom", this.top_module_observe_bottom);
                    var i = wx.createIntersectionObserver().relativeToViewport({
                        bottom: this.top_module_observe_bottom
                    });
                    this.ObserverMap[e] = i, i.observe("#".concat(e), function(i) {
                        n.scrolling || i.boundingClientRect.top > 0 && (n.show_top_module_tabs = !0, n.changeTopModulePosition(e, t, !1));
                    });
                },
                changeTopModulePosition: function(e, t) {
                    var n = arguments, i = this;
                    return o(s.default.mark(function o() {
                        var r, a;
                        return s.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                r = !(n.length > 2 && void 0 !== n[2]) || n[2], t != i.top_module_tabs_position && (r && ((a = wx.createSelectorQuery()).select("#".concat(e)).boundingClientRect(), 
                                a.selectViewport().scrollOffset(), a.exec(function(e) {
                                    if (e.length && e[0] && e[1]) {
                                        var t = e[0].top, n = e[1].scrollTop, o = t - i.top_module_tabs_height + n;
                                        i.scrolling = !0, wx.pageScrollTo({
                                            scrollTop: o,
                                            success: function() {
                                                setTimeout(function() {
                                                    i.scrolling = !1;
                                                }, 1e3);
                                            }
                                        });
                                    }
                                })), i.top_module_tabs_position = t);

                              case 2:
                              case "end":
                                return o.stop();
                            }
                        }, o);
                    }))();
                }
            }
        };
        t.default = f;
    },
    cc05: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var u = e[r](a), s = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function r(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, r) {
                    function a(e) {
                        o(s, i, r, a, u, "next", e);
                    }
                    function u(e) {
                        o(s, i, r, a, u, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = i(n("a34a")), u = n("a177"), s = i(n("8e44")), c = {
            data: function() {
                return {
                    is_consultant: !1,
                    share_msg: "分享朋友圈",
                    consultant: {},
                    is_building_consultant: !1
                };
            },
            methods: {
                getUser: function(e) {
                    var t = this;
                    return r(a.default.mark(function n() {
                        var i, o;
                        return a.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, u.App_User.get();

                              case 2:
                                if (i = n.sent, t.is_consultant = i.is_consultant, t.share_msg = i.is_consultant ? "分享朋友圈" : "保存图片", 
                                !i.is_consultant) {
                                    n.next = 10;
                                    break;
                                }
                                return n.next = 7, s.default.getMyConsultant();

                              case 7:
                                o = n.sent, t.consultant = o, t.is_building_consultant = o.buildings.map(function(e) {
                                    return e.id;
                                }).indexOf(Number(e)) > -1;

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            }
        };
        t.default = c;
    },
    d02f: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function r(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach(function(t) {
                    a(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t, n, i, o, r, a) {
            try {
                var u = e[r](a), s = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function s(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, o) {
                    function r(e) {
                        u(s, i, o, r, a, "next", e);
                    }
                    function a(e) {
                        u(s, i, o, r, a, "throw", e);
                    }
                    var s = e.apply(t, n);
                    r(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = i(n("a34a")), d = i(n("ba1b")), l = {
            data: function() {
                return {
                    secondhand_items: [],
                    secondhand_house: {},
                    show_secondhand: !1
                };
            },
            methods: {
                getSecondhandPrice: function() {
                    var e = this;
                    return s(c.default.mark(function t() {
                        var n, i, o;
                        return c.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, n = e.$root.$mp.query.building_id, t.next = 4, d.default.getSecondHandCommunities(n);

                              case 4:
                                if (i = t.sent, e.show_secondhand = Boolean(i.items.length), e.show_secondhand) {
                                    t.next = 8;
                                    break;
                                }
                                return t.abrupt("return");

                              case 8:
                                i.house.price_range = i.house.price_desc.substring(0, i.house.price_desc.indexOf("元/㎡")), 
                                i.house.price_diff_range = i.house.price_diff.substring(0, i.house.price_diff.indexOf("元/㎡")), 
                                e.secondhand_house = i.house, i.items = i.items.sort(function(e, t) {
                                    return t.unit_price - e.unit_price;
                                }).slice(0, 2), i.items.unshift(r(r({}, i.house), {}, {
                                    type: "current"
                                })), o = Math.max.apply(Math, i.items.map(function(e) {
                                    return e.unit_price;
                                })), e.secondhand_items = i.items.map(function(e) {
                                    return r(r({}, e), {}, {
                                        percent: e.unit_price / o * 100 + "%"
                                    });
                                }), t.next = 20;
                                break;

                              case 17:
                                t.prev = 17, t.t0 = t.catch(0), console.error(t.t0);

                              case 20:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 0, 17 ] ]);
                    }))();
                }
            }
        };
        t.default = l;
    },
    db18: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = function(e) {
            var t = null;
            return {
                mounted: function() {
                    var n = this;
                    this.$nextTick(function() {
                        (t = n.$mp.component.createIntersectionObserver().relativeToViewport({
                            top: 0
                        })).observe("#".concat(e), function(e) {
                            e.intersectionRatio ? n.observedElementShow && n.observedElementShow() : n.observedElementHide && n.observedElementHide();
                        });
                    });
                },
                beforeDestroy: function() {
                    t && t.disconnect();
                }
            };
        };
    },
    ea60: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("75e7")), o = n("ad02"), r = {
            data: function() {
                return {
                    show_timeline_billboard: (0, o.checkTimeline)()
                };
            },
            onShareTimeline: function() {
                var e = this.house, t = e.id, n = e.name, o = e.status, r = e.address, a = e.zone, u = e.photos_urls, s = e.price_desc_arr, c = this.current_house, d = c.customized_price, l = c.price_desc_arr, f = u && u.length ? u[0] : "", _ = this.cover_720, h = this.show_720 && _ ? _ : "", p = "";
                return d && d.length ? p = d.join() : l && l.length ? p = l.join() : s && s.length && (p = s.join()), 
                this.getShareInfo({
                    title: (0, i.default)(this.house, this.current_house, this.is_opened),
                    query: "name=".concat(encodeURIComponent(n), "&building_id=").concat(t, "&status=").concat(encodeURIComponent(o), "&zone=").concat(encodeURIComponent(a) || "", "&address=").concat(encodeURIComponent(r) || "", "&cover_720=").concat(encodeURIComponent(h), "&photo_url=").concat(encodeURIComponent(f) || "", "&price=").concat(encodeURIComponent(p)),
                    imageUrl: this.house.photos_urls && this.house.photos_urls.length ? this.house.photos_urls[0] : ""
                });
            }
        };
        t.default = r;
    },
    eed6: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("865e")), o = 0, r = {
            data: function() {
                return {
                    audio_playing_index: -1,
                    audio_playing: [],
                    durations: [],
                    running_times: [],
                    bg_audio: null
                };
            },
            onLoad: function() {
                this.initAudio();
            },
            onUnload: function() {
                this.bg_audio.stop();
            },
            methods: {
                initAudio: function() {
                    var e = this;
                    if (!this.bg_audio) {
                        var t = wx.getBackgroundAudioManager();
                        this.bg_audio = t;
                    }
                    this.bg_audio.onPlay(function() {
                        if (e.running_times[e.audio_playing_index] > 0) e.runClock(); else {
                            var t = e.$root.$mp.query, n = t.building_id, o = t.title, r = e.title || o || "";
                            console.error("playing"), e.resetRunningTime(0), e.runClock(), i.default.play(e.bg_audio.src, {
                                building_id: n,
                                building_name: r.replace("-户型图", "")
                            });
                        }
                    }), this.bg_audio.onEnded(function() {
                        e.resetRunningTime(0), i.default.stop(), console.error("ended"), e.$set(e.audio_playing, e.audio_playing_index, !1);
                    }), this.bg_audio.onStop(function() {
                        e.stopRunningTime(), i.default.stop(), console.error("stop"), e.$set(e.audio_playing, e.audio_playing_index, !1);
                    });
                },
                playAudio: function(e, t) {
                    var n = this;
                    this.bg_audio || this.initAudio(), this.$set(this.audio_playing, this.audio_playing_index, !1), 
                    this.bg_audio.stop(), console.error(this.bg_audio), setTimeout(function() {
                        n.bg_audio.src = t + "?v=" + e, n.bg_audio.startTime = n.running_times[e] || 0, 
                        n.bg_audio.play(), n.bg_audio.title = (n.title || "") + "户型图介绍", n.bg_audio.onCanplay(function() {
                            n.audio_playing_index = e, n.bg_audio.duration, setTimeout(function() {
                                n.$set(n.audio_playing, e, !0), n.$set(n.durations, e, n.bg_audio.duration), n.$set(n.running_times, e, n.running_times[e] || 0);
                            }, 100);
                        });
                    });
                },
                stopAudio: function(e) {
                    this.$set(this.audio_playing, e, !1), this.bg_audio.stop();
                },
                resetAudioPlaying: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    this.audio_playing = e.map(function() {
                        return !1;
                    });
                },
                seekAudio: function(e) {
                    var t = this.durations[this.audio_playing_index] * e;
                    this.resetRunningTime(t), this.bg_audio.seek(t);
                },
                resetRunningTime: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    console.error("resetRunningTime", this.audio_playing_index, e), this.stopRunningTime(), 
                    this.$set(this.running_times, this.audio_playing_index, e);
                },
                stopRunningTime: function() {
                    o && clearInterval(o);
                },
                runClock: function() {
                    var e = this;
                    this.stopRunningTime(), o = setInterval(function() {
                        var t = e.running_times[e.audio_playing_index];
                        t < e.bg_audio.duration ? e.$set(e.running_times, e.audio_playing_index, t + 1) : e.stopRunningTime();
                    }, 1e3);
                }
            }
        };
        t.default = r;
    },
    fd76: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function o(e, t, n, i, o, r, a) {
            try {
                var u = e[r](a), s = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(s) : Promise.resolve(s).then(i, o);
        }
        function r(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(i, r) {
                    function a(e) {
                        o(s, i, r, a, u, "next", e);
                    }
                    function u(e) {
                        o(s, i, r, a, u, "throw", e);
                    }
                    var s = e.apply(t, n);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = i(n("a34a")), u = n("371c"), s = i(n("9554")), c = i(n("ba1b")), d = i(n("b4fd")), l = n("d8e2"), f = n("f51f"), _ = {
            data: function() {
                return {
                    src: "",
                    title: "",
                    house: {},
                    show_cover_view: !1,
                    building_id: "",
                    consultants_count: 0,
                    consultant_id: "",
                    consultant_name: "",
                    consultant_headimgurl: "",
                    show_consultants: !1,
                    show_current_consultant: !1,
                    events: [],
                    current_house: {}
                };
            },
            methods: {
                getData: function() {
                    var e = this;
                    return r(a.default.mark(function t() {
                        var n, i, o, r, u, s, d, l, _, h, p;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.current_consultant_uid || e.share_by_consultant_uid, i = e.$root.$mp.query.building_id, 
                                t.next = 4, c.default.getBuilding(i, {
                                    share_by_consultant_uid: n
                                });

                              case 4:
                                o = t.sent, e.building_id = i, e.title = o.name, e.show_consultants = Boolean(o.consultants_count), 
                                r = o.details, u = o.usage, s = (0, f.getInfoItems)(u), o.house_info = s.reduce(function(e, t) {
                                    return r && r[t] && e.push({
                                        key: t,
                                        value: r[t]
                                    }), e;
                                }, []), e.house = o, (d = e.house.vr_panorama_resource) && d.vr_panorama_url && "vr_panorama" === e.page_scene && (e.src = d.vr_panorama_url), 
                                o.current_houses && o.current_houses.length && (e.current_house = o.current_houses[0]), 
                                e.consultants_count = o.consultants_count, o.current_consultant ? (l = o.current_consultant, 
                                _ = l.id, h = l.weixin_headimgurl, p = l.name, e.consultant_id = _, e.consultant_name = p, 
                                e.consultant_headimgurl = h, e.show_current_consultant = !0, e.show_consultants = !1) : e.getCurrentConsultant();

                              case 17:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getCurrentConsultant: function() {
                    var e = this;
                    return r(a.default.mark(function t() {
                        var n, i;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.$root.$mp.query.building_id, t.next = 3, d.default.getRecommendConsultant({
                                    scene: e.page_scene,
                                    building_id: n
                                });

                              case 3:
                                i = t.sent, e.consultant_id = i.id, e.show_consultants = Boolean(i.id);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getEvents: function() {
                    var e = this, t = this.$root.$mp.query.building_id;
                    c.default.getEvent(t, {
                        page: 1,
                        per: 1
                    }).then(function(t) {
                        e.events = t.items.slice(0, 1);
                    });
                },
                setWebViewSrc: function(e) {
                    var t = this, n = e.link, i = e.title;
                    n && (this.src = decodeURIComponent(n)), this.title = decodeURIComponent(i), setTimeout(function() {
                        t.show_cover_view = !0;
                    }, 1e3);
                },
                errorLoad: function(e) {
                    console.error(e);
                },
                goChat: function(e) {
                    var t = this;
                    (0, u.sendCtmEvtLog)(this.chat_log_title), (0, s.default)(e, function() {
                        var n = e.currentTarget.dataset.id;
                        (0, l.navigateToChat)(n, {
                            from: t.chat_from
                        });
                    }, "需要认证用户信息才可以咨询置业顾问");
                },
                goConsultantList: function(e) {
                    var t = e.currentTarget.dataset.id;
                    (0, u.sendCtmEvtLog)(this.consultant_list_log_title), wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(t, "&from=").concat(this.consultant_list_from)
                    });
                }
            }
        };
        t.default = _;
    }
} ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/lot_detail/main" ], {
    "212d": function(n, t, e) {
        e.r(t);
        var o = e("d0e5"), i = e("45e8");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(r);
        e("5ca2");
        var u = e("f0c5"), s = Object(u.a)(i.default, o.b, o.c, !1, null, "0f317dc6", null, !1, o.a, void 0);
        t.default = s.exports;
    },
    "2b10": function(n, t, e) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function i(n, t, e, o, i, r, u) {
            try {
                var s = n[r](u), c = s.value;
            } catch (n) {
                return void e(n);
            }
            s.done ? t(c) : Promise.resolve(c).then(o, i);
        }
        function r(n) {
            return function() {
                var t = this, e = arguments;
                return new Promise(function(o, r) {
                    function u(n) {
                        i(c, o, r, u, s, "next", n);
                    }
                    function s(n) {
                        i(c, o, r, u, s, "throw", n);
                    }
                    var c = n.apply(t, e);
                    u(void 0);
                });
            };
        }
        function u(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })), e.push.apply(e, o);
            }
            return e;
        }
        function s(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(e), !0).forEach(function(t) {
                    c(n, t, e[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach(function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t));
                });
            }
            return n;
        }
        function c(n, t, e) {
            return t in n ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = e, n;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = o(e("a34a")), l = o(e("8e44")), d = o(e("ba1b")), f = e("f51f"), _ = e("a420"), h = {
            data: function() {
                return {
                    result: {
                        ln_number: "",
                        ln_result: []
                    },
                    show_result: {
                        show_content: !1,
                        ln_num_tx: "公证摇号编码",
                        show_qa: !1,
                        coding: "",
                        qr_img: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/qr/gzh.jpg",
                        is_success: !1,
                        card_names: ""
                    },
                    house: {
                        name: ""
                    },
                    loading: !0,
                    building_id: "",
                    show_tip: !1,
                    tip_content: _.TIP_CONTENT,
                    _t: new Date().getTime(),
                    hide_comment_btn: !1,
                    go_comment_lock: !1,
                    excellent_consultants: []
                };
            },
            computed: s(s({}, (0, e("2f62").mapState)([ "consultantCard" ])), {}, {
                desc: function() {
                    var n = this.result.ln_result;
                    return n && n.length ? this.is_success ? "恭喜中签，祝您购房顺利哦~~" : n.map(function(n) {
                        n.ln_type;
                        var t = n.wish_discard_persons;
                        return "".concat(t, "人放弃");
                    }, "").join("，或") + "可选房哦~" : "";
                },
                is_success: function() {
                    var n = this.result.ln_result;
                    return !(!n || !n.length) && n.some(function(n) {
                        return n.wish_discard_persons <= 0;
                    });
                }
            }),
            onLoad: function(n) {
                var t = n.building_id, e = n.from;
                this.building_id = t, this.hide_comment_btn = e && "result" === e, l.default.init().then(this.getData);
            },
            onPullDownRefresh: function() {
                this.loading || this.getData();
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query, t = n.house_id, e = n.building_id, o = "building_id=".concat(e, "&house_id=").concat(t);
                return this.getShareInfo({
                    title: this.house.name,
                    path: "/pages/building/main?".concat(o)
                });
            },
            methods: {
                goConsultant: function() {
                    var n = this.$root.$mp.query.building_id;
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(n)
                    });
                },
                toggleTip: function() {},
                getExcellentConsultant: function() {
                    var n = this;
                    d.default.excellentConsultants(this.building_id).then(function(t) {
                        n.excellent_consultants = t.slice(0, 3);
                    });
                },
                getData: function() {
                    var n = this;
                    this.loading = !0;
                    var t = this.$root.$mp.query, e = t.regNum, o = t.lnNum, i = t.house_id;
                    l.default.getLnDetail(i, {
                        ln_number: o,
                        register_number: e
                    }).then(function(t) {
                        var e = t.ln_detail, o = e.ln_result, i = e.id_card_names;
                        (0, f.handleHouseNumData)(t.house), n.result = t.ln_detail, n.show_result.show_content = o && o.length, 
                        n.show_result.coding = t.ln_detail.ln_number, n.show_result.desc = n.desc, n.show_result.is_success = n.is_success, 
                        n.show_result.card_names = i ? i.join("、") : "", n.house = t.house, n.loading = !1, 
                        wx.stopPullDownRefresh();
                    }), this.getExcellentConsultant();
                },
                goComment: function(n, t) {
                    var e = this;
                    return r(a.default.mark(function o() {
                        var i, r;
                        return a.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                return i = {
                                    content: t,
                                    photos_urls: [ n ]
                                }, o.prev = 1, o.next = 4, l.default.postBuildingComment(e.building_id, i);

                              case 4:
                                if (r = o.sent) {
                                    o.next = 8;
                                    break;
                                }
                                return e.setLock(), o.abrupt("return");

                              case 8:
                                wx.showToast({
                                    title: "发布成功",
                                    icon: "none"
                                }), setTimeout(function() {
                                    wx.navigateTo({
                                        url: "/pages/building/comments/main?building_id=".concat(e.building_id)
                                    });
                                }, 200), o.next = 15;
                                break;

                              case 12:
                                o.prev = 12, o.t0 = o.catch(1), console.log("upload-img-error", o.t0);

                              case 15:
                                e.setLock();

                              case 16:
                              case "end":
                                return o.stop();
                            }
                        }, o, null, [ [ 1, 12 ] ]);
                    }))();
                },
                setLock: function() {
                    this.go_comment_lock = !this.go_comment_lock;
                }
            },
            components: {
                HouseCount: function() {
                    e.e("components/views/_house_count").then(function() {
                        return resolve(e("5527"));
                    }.bind(null, e)).catch(e.oe);
                },
                ExcellentConsultants: function() {
                    e.e("pages/building/_components/_excellent_consultants").then(function() {
                        return resolve(e("d91a"));
                    }.bind(null, e)).catch(e.oe);
                },
                LotteryResults: function() {
                    e.e("pages/building/lot_detail/_lottery_results").then(function() {
                        return resolve(e("33da"));
                    }.bind(null, e)).catch(e.oe);
                }
            }
        };
        t.default = h;
    },
    "45e8": function(n, t, e) {
        e.r(t);
        var o = e("2b10"), i = e.n(o);
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = i.a;
    },
    "5ca2": function(n, t, e) {
        var o = e("ef1f");
        e.n(o).a;
    },
    "80bd": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("212d")).default);
        }).call(this, e("543d").createPage);
    },
    d0e5: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    ef1f: function(n, t, e) {}
}, [ [ "80bd", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
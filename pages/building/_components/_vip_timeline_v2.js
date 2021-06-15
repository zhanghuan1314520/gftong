require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_vip_timeline_v2" ], {
    "106a": function(t, e, n) {
        var i = n("5541");
        n.n(i).a;
    },
    "45b5": function(t, e, n) {
        n.r(e);
        var i = n("c124"), r = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = r.a;
    },
    5541: function(t, e, n) {},
    c124: function(t, e, n) {
        function i(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(Object(n), !0).forEach(function(e) {
                    o(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
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
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = function(t) {
            return t ? t.replace(/\-/g, ".") : "";
        }, a = function(t) {
            return t ? new Date(t.replace(/\-/g, "/")).getTime() : 0;
        }, u = function(t) {
            if (t) {
                var e = t.replace(/\-/g, "/").slice(0, 10), n = "".concat(e, " 23:59:59");
                return new Date(n).getTime();
            }
            return 0;
        }, l = function() {
            return [ {
                class: "",
                time_points: [ "presell_date" ],
                getText: function(t) {
                    return t.presell_date;
                },
                tx: "",
                title: "预售公示",
                getTip: function() {
                    return null;
                }
            }, {
                class: "",
                time_points: [ "ln_register_start_time", "ln_register_end_time" ],
                getText: function(t) {
                    return t.ln_register;
                },
                tx: "",
                title: "登记",
                getTip: function(t) {
                    return null;
                }
            }, {
                class: "",
                time_points: [ "supplementary_information_date" ],
                getText: function(t) {
                    return t.supplementary_information_date;
                },
                tx: "",
                title: "补缴资料",
                getTip: function(t) {
                    return null;
                }
            }, {
                class: "",
                time_points: [ "ln_publicity_start_date" ],
                getText: function(t) {
                    return t.ln_publicity_start_date;
                },
                tx: "",
                title: "意向公示",
                getTip: function(t) {
                    return null;
                }
            }, {
                class: "",
                time_points: [ "ln_date" ],
                getText: function(t) {
                    return t.ln_date || t.ln_time_desc ? "".concat(t.ln_date, " ").concat(t.ln_time_desc || "") : "待定";
                },
                tx: "",
                title: "摇号",
                checkShow: function(t) {
                    return !t.not_lottery;
                },
                getTip: function() {
                    return null;
                }
            }, {
                class: "",
                time_points: [ "apartment_selection_start_date", "apartment_selection_end_date" ],
                getText: function(t) {
                    return t.apartment_selection;
                },
                tx: "",
                title: "选房",
                getTip: function(t, e) {
                    return e.ln_mode, null;
                },
                checkShow: function(t) {
                    return !t.not_lottery;
                }
            }, {
                class: "",
                time_points: [],
                getText: function(t) {
                    return null;
                },
                tx: "",
                title: "无需摇号",
                getTip: function(t, e) {
                    return e.ln_mode, null;
                },
                checkShow: function(t) {
                    return t.not_lottery;
                }
            } ];
        }, s = {
            name: "TIMELINE",
            data: function() {
                return {
                    timeline: [],
                    house_time: {},
                    tip: null
                };
            },
            mounted: function() {
                this.handleData(this.current_house);
            },
            computed: {
                selected_id: function() {
                    var t = "";
                    return this.timeline.some(function(e, n) {
                        e.selected && (t = "item-".concat(n));
                    }), t;
                }
            },
            watch: {
                current_house: function(t) {
                    this.handleData(t);
                }
            },
            methods: {
                handleData: function(t) {
                    var e = {}, n = [ "ln_register_start_date", "ln_register_end_date", "ln_publicity_start_date", "apartment_selection_start_date", "apartment_selection_end_date", "ln_verify_start_date", "ln_verify_end_date", "ln_date", "supplementary_information_date" ];
                    [ "presell_date" ].forEach(function(n) {
                        e[n] = c(t[n]);
                    }), n.forEach(function(n) {
                        e[n] = t[n] ? c(t[n].substring(5)) : "";
                    }), [ "ln_register", "ln_verify", "apartment_selection" ].forEach(function(t) {
                        var n = e["".concat(t, "_start_date")], i = e["".concat(t, "_end_date")];
                        e[t] = n || i ? n && i && n !== i ? "".concat(n, "-").concat(i) : "".concat(n || i) : "待定";
                    }), e.ln_time_desc = t.ln_time_desc, this.house_time = e, this.handleTimeline(t);
                },
                handleTimeline: function(t) {
                    var e = l();
                    t.stages && t.stages.length && (e = t.stages.map(function(t) {
                        var n;
                        return e.some(function(e) {
                            if (e.title === t) return n = e, n.checkShow = function() {
                                return !0;
                            }, !0;
                        }), n;
                    }));
                    for (var n = [], i = !1, r = a(t.current_time), o = e.length - 1; o >= 0; o--) {
                        var c = e[o];
                        c.tx = c.getText(this.house_time), c.tx ? n.push(c.tx) : n.tx || (c.tx = "待定"), 
                        t.not_lottery && "无需摇号" === c.title && (c.tx = ""), c.checkShow && "function" == typeof c.checkShow && (c.content_hide = !c.checkShow(t)), 
                        c.tip = c.getTip(this.house, t);
                        var s = i || c.time_points.some(function(e) {
                            return t[e] && r >= a(t[e]);
                        }), _ = !1;
                        if (1 === c.time_points.length && "摇号" !== c.title) {
                            var f = a(t[c.time_points[0]]), p = u(t[c.time_points[0]]);
                            _ = r >= f && r <= p;
                        } else if (2 === c.time_points.length) {
                            var d = a(t[c.time_points[0]]), m = a(t[c.time_points[1]]);
                            d !== m && m || (m = u(t[c.time_points[0]])), _ = r >= d && r <= m;
                        }
                        s && (c.class += " active", _ && (c.selected = !0, c.doing = !0, this.tip = c.tip, 
                        console.error(this.tip))), i = s;
                    }
                    this.timeline = e.filter(function(t) {
                        return !t.content_hide;
                    });
                },
                tapPoint: function(t) {
                    var e = this;
                    this.tip = this.timeline[t].tip, this.timeline.forEach(function(n, i) {
                        e.$set(e.timeline, i, r(r({}, n), {}, {
                            selected: i === t
                        }));
                    });
                },
                tapTip: function(t) {
                    var e = t.target.dataset, n = e.link, i = e.download;
                    n && wx.navigateTo({
                        url: n
                    }), i && this.download(i);
                },
                download: function(t) {
                    wx.showLoading && wx.showLoading(), wx.downloadFile({
                        url: t,
                        success: function(t) {
                            var e = t.tempFilePath;
                            wx.openDocument({
                                filePath: e,
                                complete: wx.hideLoading
                            });
                        },
                        fail: function(t) {
                            wx.hideLoading(), console.error(t);
                        }
                    });
                }
            },
            props: {
                house: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                current_house: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            }
        };
        e.default = s;
    },
    e41e: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    f247: function(t, e, n) {
        n.r(e);
        var i = n("e41e"), r = n("45b5");
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("106a");
        var c = n("f0c5"), a = Object(c.a)(r.default, i.b, i.c, !1, null, "62fbb77a", null, !1, i.a, void 0);
        e.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_vip_timeline_v2-create-component", {
    "pages/building/_components/_vip_timeline_v2-create-component": function(t, e, n) {
        n("543d").createComponent(n("f247"));
    }
}, [ [ "pages/building/_components/_vip_timeline_v2-create-component" ] ] ]);
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "18c4": function(t, n, o) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
                return void 0 === t ? "undefined" : e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
            })(t);
        }
        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return c = function() {
                return e;
            }, e;
        }
        function a(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default: e
            };
            var t = c();
            if (t && t.has(e)) return t.get(e);
            var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                var u = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a];
            }
            return n.default = e, t && t.set(e, n), n;
        }
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach(function(t) {
                    l(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function f(e, t, n, o, r, c, a) {
            try {
                var u = e[c](a), i = u.value;
            } catch (e) {
                return void n(e);
            }
            u.done ? t(i) : Promise.resolve(i).then(o, r);
        }
        function d(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, r) {
                    function c(e) {
                        f(u, o, r, c, a, "next", e);
                    }
                    function a(e) {
                        f(u, o, r, c, a, "throw", e);
                    }
                    var u = e.apply(t, n);
                    c(void 0);
                });
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var p = u(o("a34a")), h = o("2f62"), y = u(o("180a")), b = a(o("371c")), m = u(o("fc56")), g = u(o("41f4")), v = u(o("80d6")), w = o("64ed"), O = (u(o("8e44")), 
        o("d697")), _ = u(o("b849")), S = a(o("cbd7")), P = o("a177"), j = u(o("ed27")), x = function(e) {
            console.log("check sms", e), 1065 === e.scene && e.query && e.query.sms_id && (0, 
            b.sendCtmEvtLog)("sms_url_scheme", e.query);
        }, k = {
            onLaunch: function(e) {
                console.log("launch", e), (0, _.default)(), (0, y.default)({
                    tip: !0
                }), this.addGolbalListener(), this.initGlobalData(e), this.initStats();
            },
            created: function() {},
            onShow: function(e) {
                var t = this;
                return d(p.default.mark(function n() {
                    var o;
                    return p.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return console.log("show", e), j.default.showApp(), (o = e.query.scene) && t.setShareByConsultantUid(o), 
                            x(e), n.next = 7, t.checkShareBy(e.path, e.query, e.scene);

                          case 7:
                            t.checkShareConsultant(e), S.IM_STORE.app_show = !0, t.getGlobalConfig(), t.getConsultantTodayRankings();

                          case 11:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            },
            onHide: function() {
                j.default.hideApp(), g.default.shareBy.clear(), g.default.popup.clear(), S.IM_STORE.app_show = !1;
            },
            computed: s({}, (0, h.mapState)([ "share_by", "share_by_consultant_uid" ])),
            methods: s(s({}, (0, h.mapActions)([ "getGlobalConfig", "setShareBy", "setShareByConsultantUid", "getConsultantTodayRankings" ])), {}, {
                initStats: function() {
                    g.default.user.get().then(function(e) {
                        var t = getApp().wxastat;
                        t && t.setRealUid(e.uid), e.is_consultant && setTimeout(S.default.getSessions, 3e3), 
                        (0, b.default)("".concat("杭州购房通", "-获取版本"), m.default);
                    }).catch(function(e) {
                        (0, b.errorLog)(JSON.stringify(e));
                    }), this.initUser();
                },
                initGlobalData: function(e) {
                    this.globalData || (this.globalData = {}), this.globalData.appOptions = e;
                },
                initUser: function() {
                    return d(p.default.mark(function e() {
                        var t, n, o;
                        return p.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, v.default.getStorage("token");

                              case 3:
                                t = e.sent, (n = t.data) && wx.setBackgroundFetchToken && wx.setBackgroundFetchToken({
                                    token: n
                                }), wx.getBackgroundFetchData && (o = function(e) {
                                    if (e && e.fetchedData) {
                                        var t = JSON.parse(e.fetchedData), n = t.data, o = t.meta;
                                        console.error("prefretch", n, o), 200 === o.code && n && n.user && P.App_User.set(n.user);
                                    }
                                }, [ "pre", "periodic" ].forEach(function(e) {
                                    wx.getBackgroundFetchData({
                                        fetchType: e,
                                        success: o
                                    });
                                })), e.next = 12;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(0), console.log(e.t0);

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 0, 9 ] ]);
                    }))();
                },
                checkShareBy: function(e, t, n) {
                    return d(p.default.mark(function o() {
                        var r, c, a, u, i, l, f;
                        return p.default.wrap(function(o) {
                            for (;;) switch (o.prev = o.next) {
                              case 0:
                                if (o.prev = 0, r = t.share_by, c = t.scene, a = t.timestamp, !r && !c) {
                                    o.next = 17;
                                    break;
                                }
                                return o.next = 5, v.default.getSystemInfo();

                              case 5:
                                u = o.sent, i = r || c, l = {}, wx.getEnterOptionsSync && (n = wx.getEnterOptionsSync().scene), 
                                n && (l.wx_scene_id = n), O.SHARE_PARAM_KEYS.forEach(function(e) {
                                    t[e] && (l[e] = t[e]);
                                }), l.share_info = {
                                    path: e,
                                    timestamp: a
                                }, f = s({
                                    share_by: i,
                                    device_info: u
                                }, l), g.default.shareBy.set(i, l), (0, w.login)(f), o.next = 18;
                                break;

                              case 17:
                                g.default.shareBy.clear();

                              case 18:
                                return o.abrupt("return", Promise.resolve());

                              case 21:
                                return o.prev = 21, o.t0 = o.catch(0), (0, b.errorLog)("check_share_err: ".concat(o.t0)), 
                                o.abrupt("return", Promise.reject(o.t0));

                              case 25:
                              case "end":
                                return o.stop();
                            }
                        }, o, null, [ [ 0, 21 ] ]);
                    }))();
                },
                checkShareConsultant: function(e) {
                    e.query.share_by && this.share_by != e.query.share_by && (this.setShareBy(""), this.setShareByConsultantUid("")), 
                    e.query && e.query.share_by_consultant_uid && (this.setShareBy(e.query.share_by), 
                    this.setShareByConsultantUid(e.query.share_by_consultant_uid));
                },
                addGolbalListener: function() {
                    wx.onPageNotFound && "function" == typeof wx.onPageNotFound && wx.onPageNotFound(function(e) {
                        var t = "onPageNotFound, path: ".concat(e.path, ", isEntryPage: ").concat(e.isEntryPage);
                        (0, b.errorLog)(t), wx.switchTab({
                            url: "/pages/index/main"
                        });
                    }), wx.onMemoryWarning && "function" == typeof wx.onMemoryWarning && wx.onMemoryWarning(function(e) {
                        var t = getCurrentPages().map(function(e) {
                            return e.route;
                        }).join(",");
                        (0, b.errorLog)("onMemoryWarningReceive".concat(e ? " ".concat(e.level) : "", " ").concat(t));
                    }), wx.onUserCaptureScreen && "function" == typeof wx.onUserCaptureScreen && wx.onUserCaptureScreen(function(e) {
                        var t = getCurrentPages(), n = "";
                        t && t.length && t[t.length - 1] && (n = t[t.length - 1].route), (0, b.sendCtmEvtLog)("用户截屏", {
                            page: n
                        });
                    });
                }
            })
        };
        n.default = k;
    },
    "23be": function(e, t, n) {
        n.r(t);
        var o = n("18c4"), r = n.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "3dfd": function(e, t, n) {
        n.r(t);
        var o = n("23be");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        var c = n("f0c5"), a = Object(c.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = a.exports;
    },
    "56d7": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            n("6cdc");
            var c = t(n("66fd")), a = t(n("3dfd"));
            n("6d42"), n("005e");
            var u = t(n("ae71")), i = t(n("da12")), s = t(n("9ab2")), l = t(n("c6c5")), f = t(n("cbd7")), d = t(n("4360"));
            n("cc64");
            c.default.component("page-wrap", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/page_wrap") ]).then(function() {
                    return resolve(n("aaec"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("common-img", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/views/common_img") ]).then(function() {
                    return resolve(n("633c"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("fc-icon", function() {
                n.e("components/views/fc_icon").then(function() {
                    return resolve(n("5a9c"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("common-tabs", function() {
                n.e("components/views/common_tabs").then(function() {
                    return resolve(n("4017"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("tip-dlg", function() {
                n.e("components/views/tip_dlg").then(function() {
                    return resolve(n("13cc"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("identify-btn", function() {
                n.e("components/views/wx_identify_btn").then(function() {
                    return resolve(n("edc9"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("ui-cropper", function() {
                n.e("components/ui/cropper").then(function() {
                    return resolve(n("7148"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("ad-swiper", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/business/swiper") ]).then(function() {
                    return resolve(n("c456"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("current-consultant", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/building/_current_consultant") ]).then(function() {
                    return resolve(n("9acd"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.component("ui-consultant-booth", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/ui/consultantBooth") ]).then(function() {
                    return resolve(n("c520f"));
                }.bind(null, n)).catch(n.oe);
            }), c.default.use(u.default), c.default.use(i.default), c.default.use(s.default), 
            c.default.use(l.default), c.default.config.productionTip = !1, c.default.prototype.$store = d.default, 
            a.default.mpType = "app", e(new c.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach(function(t) {
                        r(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                store: d.default
            }, a.default))).$mount(), f.default.initIM();
        }).call(this, n("543d").createApp);
    }
}, [ [ "56d7", "common/runtime", "common/vendor" ] ] ]);
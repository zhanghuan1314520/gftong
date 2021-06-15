(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/common/vendor" ], {
    "1e6c": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function o(e, t, n) {
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
        var a = n("64ed"), c = n("b775"), u = {
            hangzhou: "330100"
        }.hangzhou, s = {
            getHouses: function(e) {
                return (0, a.get)("".concat(c.FUZZ_HOST, "fc/est2hand/getCommunities"), {
                    city_id: u,
                    query: e
                }, {
                    loading: !1
                });
            },
            evalute: function(e) {
                var t = i(i({}, e), {}, {
                    city_id: u
                });
                return Object.keys(t).forEach(function(e) {
                    t[e] = t[e].toString();
                }), (0, a.post)("".concat(c.FUZZ_HOST, "fc/est2hand/estPrice"), t, {
                    loading: !0
                });
            },
            getLastMonth: function() {
                return (0, a.getV1)("market_avgprice/last_month", {
                    loading: !1
                });
            },
            getZones: function() {
                return (0, a.getV1)("market_avgprice/zones", {
                    loading: !1
                });
            },
            getTrends: function(e) {
                return Object.keys(e).forEach(function(t) {
                    e[t] || delete e[t];
                }), (0, a.getV1)("market_avgprice/trends", i({}, e), {
                    loading: !1
                });
            }
        };
        t.default = s;
    },
    "34b66": function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function o(e, t, n) {
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
        var a = n("64ed"), c = n("db49"), u = function(e) {
            return [ "last_month_total_price", "max_total_price", "first_total_price", "sold_total_price", "yesterday_total_price", "today_total_price" ].forEach(function(t) {
                e[t] = (e[t] / 1e4).toFixed(2);
            }), e;
        }, s = function(e) {
            return e.map(u);
        }, l = {
            getList: function(e) {
                return (0, a.getV1)("secondhand_house_depreciate_rankings", i({
                    per: c.DEFAULT_PER
                }, e), {
                    loading: !0
                }).then(function(e) {
                    return e.items = s(e.items), e;
                });
            },
            getDetail: function(e) {
                return (0, a.getV1)("secondhand_house_depreciate_rankings/".concat(e), {
                    loading: !0
                }).then(u);
            }
        };
        t.default = l;
    },
    "37c5": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("64ed"), i = {
            morning_paper: function() {
                return (0, r.getV1)("morning_paper", {
                    loading: !0
                });
            }
        };
        t.default = i;
    },
    "3e62": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("a7f5"), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("34b66")), o = {
            data: function() {
                return {
                    type: r.DEFAULT_TYPE,
                    tabs: r.TABS
                };
            },
            methods: {
                initData: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    3 !== t && (this.type = r.TABS[t].key, i.default.getList({
                        page: 1,
                        ranking_type: this.type
                    }).then(function(n) {
                        n.items.length ? e.handleData(n) : e.initData(t + 1);
                    }));
                },
                getData: function() {
                    if (!this.loading) {
                        this.loading = !0;
                        var e = {
                            page: this.page,
                            ranking_type: this.type
                        };
                        1 === this.page && (this.items = []), i.default.getList(e).then(this.handleData);
                    }
                },
                changeType: function(e) {
                    this.type = e, this.page = 1, this.getData();
                }
            }
        };
        t.default = o;
    },
    4362: function(e, t, n) {
        t.nextTick = function(e) {
            var t = Array.prototype.slice.call(arguments);
            t.shift(), setTimeout(function() {
                e.apply(null, t);
            }, 0);
        }, t.platform = t.arch = t.execPath = t.title = "browser", t.pid = 1, t.browser = !0, 
        t.env = {}, t.argv = [], t.binding = function(e) {
            throw new Error("No such module. (Possibly not yet loaded)");
        }, function() {
            var e, r = "/";
            t.cwd = function() {
                return r;
            }, t.chdir = function(t) {
                e || (e = n("df7c")), r = e.resolve(t, r);
            };
        }(), t.exit = t.kill = t.umask = t.dlopen = t.uptime = t.memoryUsage = t.uvCounters = function() {}, 
        t.features = {};
    },
    5118: function(e, t, n) {
        (function(e) {
            function r(e, t) {
                this._id = e, this._clearFn = t;
            }
            var i = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;
            t.setTimeout = function() {
                return new r(o.call(setTimeout, i, arguments), clearTimeout);
            }, t.setInterval = function() {
                return new r(o.call(setInterval, i, arguments), clearInterval);
            }, t.clearTimeout = t.clearInterval = function(e) {
                e && e.close();
            }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                this._clearFn.call(i, this._id);
            }, t.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
            }, t.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
            }, t._unrefActive = t.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout();
                }, t));
            }, n("6017"), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, 
            t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate;
        }).call(this, n("c8ba"));
    },
    5872: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("a7f5"), i = {
            computed: {
                is_today: function() {
                    return this.type === r.TYPE.TODAY;
                },
                is_accumulated: function() {
                    return this.type === r.TYPE.ACCUMULATED;
                },
                is_sold: function() {
                    return this.type === r.TYPE.SOLD;
                },
                percent: function() {
                    var e = this.item;
                    return this.is_today ? e.today_depreciate_percent : this.is_accumulated ? e.monthly_depreciate_percent : this.is_sold ? e.sold_depreciate_percent : "";
                }
            }
        };
        t.default = i;
    },
    6017: function(e, t, n) {
        (function(e, t) {
            !function(e, n) {
                function r(e) {
                    delete u[e];
                }
                function i(e) {
                    var t = e.callback, r = e.args;
                    switch (r.length) {
                      case 0:
                        t();
                        break;

                      case 1:
                        t(r[0]);
                        break;

                      case 2:
                        t(r[0], r[1]);
                        break;

                      case 3:
                        t(r[0], r[1], r[2]);
                        break;

                      default:
                        t.apply(n, r);
                    }
                }
                function o(e) {
                    if (s) setTimeout(o, 0, e); else {
                        var t = u[e];
                        if (t) {
                            s = !0;
                            try {
                                i(t);
                            } finally {
                                r(e), s = !1;
                            }
                        }
                    }
                }
                if (!e.setImmediate) {
                    var a, c = 1, u = {}, s = !1, l = e.document, f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? a = function(e) {
                        t.nextTick(function() {
                            o(e);
                        });
                    } : function() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0, n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1;
                            }, e.postMessage("", "*"), e.onmessage = n, t;
                        }
                    }() ? function() {
                        var t = "setImmediate$" + Math.random() + "$", n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length));
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), 
                        a = function(n) {
                            e.postMessage(t + n, "*");
                        };
                    }() : e.MessageChannel ? function() {
                        var e = new MessageChannel();
                        e.port1.onmessage = function(e) {
                            o(e.data);
                        }, a = function(t) {
                            e.port2.postMessage(t);
                        };
                    }() : l && "onreadystatechange" in l.createElement("script") ? function() {
                        var e = l.documentElement;
                        a = function(t) {
                            var n = l.createElement("script");
                            n.onreadystatechange = function() {
                                o(t), n.onreadystatechange = null, e.removeChild(n), n = null;
                            }, e.appendChild(n);
                        };
                    }() : a = function(e) {
                        setTimeout(o, 0, e);
                    }, f.setImmediate = function(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var r = {
                            callback: e,
                            args: t
                        };
                        return u[c] = r, a(c), c++;
                    }, f.clearImmediate = r;
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self);
        }).call(this, n("c8ba"), n("4362"));
    },
    "81a5": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = 750 / wx.getSystemInfoSync().windowWidth, i = {
            data: function() {
                return {
                    moving: !1,
                    startY: 0,
                    changed: !1
                };
            },
            methods: {
                touchstart: function(e) {
                    var t = e.touches[0].pageY;
                    this.startY = t;
                },
                touchmove: function(e) {
                    if (!this.changed) {
                        var t = e.touches[0].pageY, n = this.startY - t;
                        this.changeSize(n * r), this.change = !0;
                    }
                },
                touchend: function(e) {
                    this.changed = !1;
                }
            }
        };
        t.default = i;
    },
    a7f5: function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var i;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DESC = t.TABS = t.DEFAULT_TYPE = t.TYPE = void 0;
        var o = {
            TODAY: "today",
            ACCUMULATED: "monthly",
            SOLD: "sold"
        };
        t.TYPE = o;
        var a = o.TODAY;
        t.DEFAULT_TYPE = a;
        var c = [ {
            key: o.TODAY,
            name: "今日降价"
        }, {
            key: o.ACCUMULATED,
            name: "月度降价"
        }, {
            key: o.SOLD,
            name: "已成交"
        } ];
        t.TABS = c;
        var u = (i = {}, r(i, o.TODAY, "今日降价榜将于每日中午12点更新"), r(i, o.ACCUMULATED, "月度降价榜根据最近一个月的二手房降价幅度进行展示"), 
        r(i, o.SOLD, "已成交榜根据最近一个月已成交的二手房降价幅度进行展示"), i);
        t.DESC = u;
    },
    df7c: function(e, t, n) {
        (function(e) {
            function n(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var i = e[r];
                    "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), 
                    n--);
                }
                if (t) for (;n--; n) e.unshift("..");
                return e;
            }
            function r(e) {
                "string" != typeof e && (e += "");
                var t, n = 0, r = -1, i = !0;
                for (t = e.length - 1; t >= 0; --t) if (47 === e.charCodeAt(t)) {
                    if (!i) {
                        n = t + 1;
                        break;
                    }
                } else -1 === r && (i = !1, r = t + 1);
                return -1 === r ? "" : e.slice(n, r);
            }
            function i(e, t) {
                if (e.filter) return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++) t(e[r], r, e) && n.push(e[r]);
                return n;
            }
            t.resolve = function() {
                for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
                    var a = o >= 0 ? arguments[o] : e.cwd();
                    if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                    a && (t = a + "/" + t, r = "/" === a.charAt(0));
                }
                return t = n(i(t.split("/"), function(e) {
                    return !!e;
                }), !r).join("/"), (r ? "/" : "") + t || ".";
            }, t.normalize = function(e) {
                var r = t.isAbsolute(e), a = "/" === o(e, -1);
                return (e = n(i(e.split("/"), function(e) {
                    return !!e;
                }), !r).join("/")) || r || (e = "."), e && a && (e += "/"), (r ? "/" : "") + e;
            }, t.isAbsolute = function(e) {
                return "/" === e.charAt(0);
            }, t.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return t.normalize(i(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e;
                }).join("/"));
            }, t.relative = function(e, n) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++) ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) ;
                    return t > n ? [] : e.slice(t, n - t + 1);
                }
                e = t.resolve(e).substr(1), n = t.resolve(n).substr(1);
                for (var i = r(e.split("/")), o = r(n.split("/")), a = Math.min(i.length, o.length), c = a, u = 0; u < a; u++) if (i[u] !== o[u]) {
                    c = u;
                    break;
                }
                var s = [];
                for (u = c; u < i.length; u++) s.push("..");
                return (s = s.concat(o.slice(c))).join("/");
            }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                for (var t = e.charCodeAt(0), n = 47 === t, r = -1, i = !0, o = e.length - 1; o >= 1; --o) if (47 === (t = e.charCodeAt(o))) {
                    if (!i) {
                        r = o;
                        break;
                    }
                } else i = !1;
                return -1 === r ? n ? "/" : "." : n && 1 === r ? "/" : e.slice(0, r);
            }, t.basename = function(e, t) {
                var n = r(e);
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), 
                n;
            }, t.extname = function(e) {
                "string" != typeof e && (e += "");
                for (var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                    var c = e.charCodeAt(a);
                    if (47 !== c) -1 === r && (i = !1, r = a + 1), 46 === c ? -1 === t ? t = a : 1 !== o && (o = 1) : -1 !== t && (o = -1); else if (!i) {
                        n = a + 1;
                        break;
                    }
                }
                return -1 === t || -1 === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
            };
            var o = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n);
            } : function(e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
            };
        }).call(this, n("4362"));
    },
    f8b6: function(e, t, n) {
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach(function(t) {
                    o(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function o(e, t, n) {
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
        var a = n("64ed"), c = n("db49"), u = {
            getRealTiemData: function(e) {
                return (0, a.getV1)("house_businesses", e, {
                    loading: !0
                });
            },
            getHistory: function(e) {
                return (0, a.getV1)("house_businesses/histories", {
                    last_days: e
                }, {
                    loading: !0
                });
            },
            beikeSecondhandMonthlyPrices: function(e) {
                return (0, a.getV1)("beike_secondhand_monthly_prices", e, {
                    loading: !0
                });
            },
            getTrends: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weekly";
                return (0, a.getV1)("house_businesses/trends", {
                    daterange_step: e
                }, {
                    loading: !0
                });
            },
            buildingWeeklyReports: function(e) {
                return (0, a.getV1)("building_weekly_reports", e, {
                    loading: !0
                });
            },
            getLandTrades: function(e) {
                return (0, a.getV1)("land_trades", i({
                    per: c.DEFAULT_PER
                }, e), {
                    loading: !0
                });
            },
            getLandTradesDetail: function(e) {
                return (0, a.getV1)("land_trades/".concat(e), {
                    loading: !0
                });
            }
        };
        t.default = u;
    }
} ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/nconv2019_zones/main" ], {
    1223: function(t, e, n) {},
    "1e79": function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e) {
            return a(t) || c(t, e) || l(t, e) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function c(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var c, a = t[Symbol.iterator](); !(i = (c = a.next()).done) && (n.push(c.value), 
                    !e || n.length !== e); i = !0) ;
                } catch (t) {
                    o = !0, r = t;
                } finally {
                    try {
                        i || null == a.return || a.return();
                    } finally {
                        if (o) throw r;
                    }
                }
                return n;
            }
        }
        function a(t) {
            if (Array.isArray(t)) return t;
        }
        function s(t) {
            return h(t) || f(t) || l(t) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(t, e) {
            if (t) {
                if ("string" == typeof t) return d(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0;
            }
        }
        function f(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function h(t) {
            if (Array.isArray(t)) return d(t);
        }
        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
        }
        function m(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach(function(e) {
                    _(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function _(t, e, n) {
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
        var g, b = i(n("bdff")), v = i(n("8e44")), w = n("a177"), y = i(n("31e7")), x = i(n("4bac")), k = {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/nconv2019_zones/house-icon.png",
            width: 10,
            height: 10
        }, O = p(p({}, k), {}, {
            iconPath: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/packageA/nconv2019_zones/house-new-icon.png"
        }), z = {
            display: "ALWAYS",
            color: "#EB1111",
            fontSize: 12,
            bgColor: "#ffffff",
            borderRadius: 28,
            borderWidth: 1,
            borderColor: "#EB1111",
            padding: 6,
            textAlign: "center"
        }, A = {
            display: "ALWAYS",
            color: "#ffffff",
            fontSize: 12,
            bgColor: "#EB1111",
            borderRadius: 28,
            padding: 6,
            textAlign: "center"
        }, S = p(p({}, z), {}, {
            color: "#FF7302",
            borderColor: "#FF7302"
        }), C = {
            scale: 9
        }, j = function(t) {
            return t.reduce(function(t, e) {
                var n = e.zone, i = e.communities;
                return i.forEach(function(t) {
                    t.zone = n;
                }), t.push.apply(t, s(i)), t;
            }, []);
        }, M = {
            components: {
                TopFilter: function() {
                    n.e("pages/packageA/nconv2019_zones/_top_filter").then(function() {
                        return resolve(n("3b1a"));
                    }.bind(null, n)).catch(n.oe);
                },
                ZoneSelect: function() {
                    n.e("pages/packageA/nconv2019_zones/_zone_select").then(function() {
                        return resolve(n("e182"));
                    }.bind(null, n)).catch(n.oe);
                },
                Search: function() {
                    n.e("pages/house_circles/_search").then(function() {
                        return resolve(n("6d2e"));
                    }.bind(null, n)).catch(n.oe);
                },
                List: function() {
                    Promise.all([ n.e("pages/packageA/common/vendor"), n.e("pages/packageA/nconv2019_zones/_list") ]).then(function() {
                        return resolve(n("adaf"));
                    }.bind(null, n)).catch(n.oe);
                },
                Detail: function() {
                    n.e("pages/packageA/nconv2019_zones/_detail").then(function() {
                        return resolve(n("7b44"));
                    }.bind(null, n)).catch(n.oe);
                },
                SubscribeDlg: function() {
                    n.e("pages/packageA/nconv2019_zones/_subscribe_dlg").then(function() {
                        return resolve(n("439e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    center: {
                        latitude: "",
                        longitude: ""
                    },
                    refresh_date: "",
                    keyword: "",
                    zones: [],
                    all_communities: [],
                    communities: [],
                    zone: "",
                    markers: [],
                    show_zone_select: !1,
                    show_subscribe_dlg: !1,
                    text: {
                        "区域": "区域"
                    },
                    show_list: !1,
                    position: {},
                    show_detail: !1,
                    detail: {},
                    is_follow: !1,
                    share_title: "",
                    notice_text: "",
                    tip_text: "",
                    tip_title: "",
                    page_title: "",
                    show_banner: !1,
                    weixin_subscribed: !1
                };
            },
            computed: {
                total_num: function() {
                    return this.all_communities.length;
                },
                today_num: function() {
                    return this.all_communities.filter(function(t) {
                        return t.is_today;
                    }).length;
                }
            },
            created: function() {
                this.$watch(function() {
                    return this.text["城区"];
                }, function(t, e) {
                    t != e && (this.text["区域"] = t || "不限");
                });
            },
            onLoad: function(t) {
                var e = this;
                C.scale = 9, this.getZones(), g = new x.default({
                    key: "OYOBZ-IFFWP-RUDDH-LM5JW-XYFA7-R5FI4"
                }), w.App_User.fetchUser().then(function(t) {
                    var n = t.weixin_subscribed;
                    e.weixin_subscribed = n;
                }), y.default.getNconv().then(function(t) {
                    var n = t.show_banner, i = t.tip_title, o = t.page_title;
                    e.page_title = o, e.tip_title = i, e.show_banner = n;
                });
            },
            onShareAppMessage: function() {
                this.$root.$mp.query.status;
                var t = encodeURIComponent("/pages/packageA/nconv2019_zones/main"), e = {
                    title: this.share_title || "杭州确诊患者停留小区地图，点击马上查询",
                    path: "".concat("/pages/index/main", "?sub_page=").concat(t)
                };
                return this.getShareInfo(e);
            },
            methods: {
                moveCenter: function(t) {
                    wx.createMapContext("house-map").moveToLocation(t);
                },
                getLocation: function() {
                    var t = this;
                    wx.getLocation({
                        success: function(e) {
                            var n = e.latitude, i = e.longitude;
                            t.position = {
                                latitude: n,
                                longitude: i
                            }, t.moveCenter(t.position), t.getDistance();
                        }
                    });
                },
                toggleZoneSelect: function() {
                    this.show_zone_select = !this.show_zone_select;
                },
                toggleSubcribeDlg: function() {
                    this.show_subscribe_dlg = !this.show_subscribe_dlg;
                },
                subscribe: function() {
                    var t = this;
                    this.show_subscribe_dlg = !this.weixin_subscribed && !this.is_follow;
                    var e = {
                        followable_type: "Fc::Ncov2019::Community"
                    };
                    this.is_follow ? v.default.delFollow(e).then(function() {
                        t.is_follow = !1;
                    }) : v.default.addFollow(e).then(function() {
                        t.is_follow = !0, wx.showToast({
                            title: "订阅成功"
                        });
                    });
                },
                getZones: function() {
                    var t = this;
                    b.default.getNcov2019().then(function(e) {
                        var n = e.share_title, i = e.is_follow, o = e.items, r = e.top_tip, c = e.bottom_tip;
                        t.share_title = n, t.notice_text = r, t.tip_text = c, t.is_follow = i, t.zones = o, 
                        t.all_communities = j(o), t.communities = t.all_communities, t.getLocation(), t.show_list = !0, 
                        t.drawCommunities(t.all_communities);
                    });
                },
                changeZone: function(t) {
                    console.error("change zone", t), this.zone = t, t ? (this.communities = this.all_communities.filter(function(e) {
                        return e.zone === t;
                    }), console.error("this.communities", this.communities), this.communities.length ? this.drawCommunities(this.communities) : wx.showModal({
                        title: "提示",
                        content: "【".concat(t, "】暂未发现确诊患者停留，请继续保持警惕，减少出门，注意防护"),
                        showCancel: !1
                    })) : (this.communities = this.all_communities, this.drawCommunities(this.all_communities)), 
                    this.toggleZoneSelect();
                },
                drawCommunities: function(t) {
                    var e = 1 === t.length;
                    this.markers = t.map(function(t) {
                        var n = t.name, i = t.location, r = t.is_today, c = o(i.split(","), 2), a = c[0], s = c[1], u = r ? O : k, l = e ? A : r ? S : z;
                        return p(p({
                            id: n,
                            title: n,
                            latitude: s,
                            longitude: a
                        }, u), {}, {
                            callout: p({
                                content: "".concat(n).concat(r ? "(今日新增)" : "")
                            }, l)
                        });
                    }), e ? this.showDetail(t[0]) : this.hideDetail(), this.scaleMap();
                },
                clickMap: function(t) {
                    "house-map" === t.target.id && (this.show_zone_select = !1, this.show_subscribe_dlg = !1);
                },
                clearMarker: function() {
                    this.markers.some(function(t) {
                        if (t.label) return t.zIndex = 1, t.callout = p(p({}, t.callout), z), !0;
                    });
                },
                selectCommunity: function(t) {
                    this.selectMarker(this.all_communities[t].name);
                },
                clickMarker: function(t) {
                    var e = t.markerId;
                    this.selectMarker(e);
                },
                showDetail: function(t) {
                    this.detail = t, this.show_detail = !0, this.show_list = !1;
                },
                hideDetail: function() {
                    this.show_detail = !1, this.show_list = !0;
                },
                selectMarker: function(t) {
                    var e = this;
                    this.drawCommunities(this.communities), this.markers.some(function(n) {
                        if (n.id === t) return n.zIndex = 10, n.callout = p(p({}, n.callout), A), e.moveCenter({
                            longitude: n.longitude,
                            latitude: n.latitude
                        }), !0;
                    }), this.all_communities.some(function(n) {
                        if (n.name === t) return e.showDetail(n), !0;
                    });
                },
                getDistance: function() {
                    var t = this;
                    g.calculateDistance({
                        from: this.position,
                        to: this.all_communities.map(function(t) {
                            var e = o(t.location.split(","), 2);
                            return {
                                longitude: e[0],
                                latitude: e[1]
                            };
                        }),
                        success: function(e) {
                            var n = e.result.elements, i = t.all_communities.map(function(t, e) {
                                var i = n[e].distance / 1e3;
                                return p(p({}, t), {}, {
                                    org_distance: i,
                                    distance: "距离我" + i.toFixed(1) + "公里"
                                });
                            });
                            t.all_communities = i.sort(function(t, e) {
                                return t.org_distance - e.org_distance;
                            }), t.communities = t.all_communities;
                        }
                    });
                },
                scaleMap: function() {
                    wx.createMapContext("house-map").includePoints({
                        points: this.markers.map(function(t) {
                            return {
                                latitude: t.latitude,
                                longitude: t.longitude
                            };
                        }),
                        padding: [ 60, 60, 60, 60 ]
                    });
                },
                onSearch: function() {
                    var t = this.keyword.trim();
                    t ? (this.communities = this.all_communities.filter(function(e) {
                        return e.name.indexOf(t) > -1;
                    }), this.communities.length ? this.drawCommunities(this.communities) : wx.showModal({
                        title: "提示",
                        content: "【".concat(t, "】暂未发现确诊患者停留，请继续保持警惕，减少出门，注意防护"),
                        showCancel: !1
                    })) : this.drawCommunities(this.all_communities);
                }
            }
        };
        e.default = M;
    },
    3627: function(t, e, n) {
        var i = n("1223");
        n.n(i).a;
    },
    "59aa": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "9c72": function(t, e, n) {
        n.r(e);
        var i = n("59aa"), o = n("ed3b");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("3627");
        var c = n("f0c5"), a = Object(c.a)(o.default, i.b, i.c, !1, null, "1df69e9e", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    a710: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("9c72")).default);
        }).call(this, n("543d").createPage);
    },
    ed3b: function(t, e, n) {
        n.r(e);
        var i = n("1e79"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    }
}, [ [ "a710", "common/runtime", "common/vendor" ] ] ]);
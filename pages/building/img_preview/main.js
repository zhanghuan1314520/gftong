require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/img_preview/main" ], {
    "022c": function(t, e, n) {},
    "0bf0": function(t, e, n) {
        n.r(e);
        var i = n("225f"), o = n("17b4");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("8b5d");
        var a = n("f0c5"), u = Object(a.a)(o.default, i.b, i.c, !1, null, "0b2e3267", null, !1, i.a, void 0);
        e.default = u.exports;
    },
    "17b4": function(t, e, n) {
        n.r(e);
        var i = n("eac6"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    "225f": function(t, e, n) {
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
    "8b5d": function(t, e, n) {
        var i = n("022c");
        n.n(i).a;
    },
    a1c4: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("0bf0")).default);
        }).call(this, n("543d").createPage);
    },
    eac6: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e) {
            return u(t) || a(t, e) || s(t, e) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], i = !0, o = !1, r = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); i = !0) ;
                } catch (t) {
                    o = !0, r = t;
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
        function u(t) {
            if (Array.isArray(t)) return t;
        }
        function c(t) {
            return h(t) || d(t) || s(t) || l();
        }
        function l() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
            }
        }
        function d(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function h(t) {
            if (Array.isArray(t)) return f(t);
        }
        function f(t, e) {
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
        function g(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach(function(e) {
                    b(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function b(t, e, n) {
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
        var p = n("2f62"), _ = i(n("d1fa")), v = i(n("a027")), y = i(n("f9d4")), w = i(n("55ed")), O = i(n("eed6")), x = i(n("ba1b")), T = i(n("8e44")), I = (n("371c"), 
        n("ad02")), S = wx.getSystemInfoSync().windowHeight, j = {
            log: "户型图列表页顶部加群banner",
            href: "/pages/personal_package/group_assistant/main",
            photo_url: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/banners/add-group.png"
        }, k = {
            log: "户型列表-户型攻略banner点击",
            href: "/pages/packageC/learn_layout/main",
            photo_url: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/learn_layout/banner.png"
        }, C = {
            mixins: [ _.default, v.default, y.default, w.default, O.default ],
            name: "HOUSE_IMG_PREVIEW",
            data: function() {
                return {
                    loading: !0,
                    all_urls: [],
                    urls: [],
                    preview_urls: [],
                    common_tabs: [],
                    select_tab: "",
                    type: "",
                    house_ids: "",
                    building_id: "",
                    title: "",
                    excellent_consultants: [],
                    building: {},
                    bedrooms: "",
                    common_urls: [],
                    scrolling: !1,
                    tab_height: 0,
                    ObserverMap: [],
                    show_timeline_billboard: (0, I.checkTimeline)()
                };
            },
            watch: {
                loading: {
                    handler: function(t) {
                        t ? wx.showLoading() : wx.hideLoading();
                    },
                    immediate: !0
                }
            },
            computed: g(g({}, (0, p.mapState)([ "consultantCard", "showVideo" ])), {}, {
                bedroom_tabs: function() {
                    if ("layout" === this.type) {
                        var t = {};
                        return this.urls.reduce(function(e, n) {
                            var i = n.bedrooms;
                            return i && (t[i] || (t[i] = 0), t[i]++, -1 === e.indexOf(i) && e.push(i)), e;
                        }, []).sort().map(function(e) {
                            return {
                                bedrooms: e,
                                count: t[e]
                            };
                        });
                    }
                },
                layout_urls: function() {
                    var t = this;
                    return this.bedrooms ? this.urls.filter(function(e) {
                        return e.bedrooms === t.bedrooms;
                    }) : this.urls;
                },
                show_empty: function() {
                    return "common" === this.type ? !this.loading && !this.common_urls.length : !this.loading && !this.urls.length;
                },
                show_vr_tip: function() {
                    return this.urls.some(function(t) {
                        var e = t.vr_url;
                        return Boolean(e);
                    });
                },
                vr_list_link: function() {
                    return "/pages/building/vr/main?building_id=".concat(this.building_id, "&title=").concat(this.building.name, " VR");
                },
                show_disclaimer: function() {
                    return this.building.activities && this.building.activities.indexOf("vr_disclaimer") > -1;
                },
                show_planar_graph: function() {
                    return this.type && "layout" === this.type && this.building.planar_graph_url;
                },
                banners: function() {
                    return this.type && "layout" === this.type ? [ k, j ] : [ j ];
                }
            }),
            onLoad: function(t) {
                var e = t.building_id, n = t.title, i = t.type, o = t.house_id;
                this.building_id = e, this.house_ids = o ? o.split(",").map(function(t) {
                    return Number(t);
                }) : "0", this.title = n, this.type = i, this.getData();
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query, e = t.house_id, n = t.type, i = t.building_id, o = this.title, r = "";
                switch (n) {
                  case "layout":
                    r = "【".concat(o, "】户型图已更新，这里就很全不用到处找啦~");
                    break;

                  case "common":
                    r = "【".concat(o, "】的图片资料全在这了，还有视频讲解哦~");
                    break;

                  default:
                    r = o;
                }
                return this.getShareInfo({
                    title: r,
                    path: this.getSharePath("/pages/building/img_preview/main?house_id=".concat(e || "", "&type=").concat(n, "&title=").concat(o, "&building_id=").concat(i || ""))
                });
            },
            onShareTimeline: function() {
                var t = this.building.status, e = this.$root.$mp.query, n = e.house_id, i = e.type, o = e.building_id, r = this.layout_urls[0], a = r.image_url, u = r.layout_description, c = void 0 === u ? "" : u, l = r.area, s = this.title;
                return this.getShareInfo({
                    title: "【".concat(s, "】的全部户型都在这，点击查看~"),
                    query: "house_id=".concat(n || "", "&type=").concat(i, "&name=").concat(s, "&building_id=").concat(o || "", "&status=").concat(t, "&layout_description=").concat(encodeURIComponent(c), "&layout_area=").concat(encodeURIComponent(l), "&layout_img=").concat(encodeURIComponent(a)),
                    imageUrl: a
                });
            },
            methods: {
                goLocation: function() {
                    wx.navigateTo({
                        url: "/pages/building/planar_graph/main?building_id=".concat(this.building_id)
                    });
                },
                initTabs: function() {
                    var t = this;
                    setTimeout(function() {
                        t.common_tabs.forEach(function(e) {
                            var n = e.key;
                            t.observeTopModuleTab(n);
                        });
                    });
                },
                observeTopModuleTab: function(t) {
                    var e = this;
                    this.ObserverMap[t] && this.ObserverMap[t].disconnect();
                    var n = S - this.tab_height, i = wx.createIntersectionObserver().relativeToViewport({
                        bottom: -n
                    });
                    this.ObserverMap[t] = i, i.observe("#".concat(t), function(n) {
                        if (!e.scrolling) {
                            var i = n.intersectionRatio, o = n.relativeRect, r = n.boundingClientRect;
                            (i || !o.top) && r.top > 0 && (e.select_tab = t);
                        }
                    });
                },
                previewCommonImg: function(t, e) {
                    var n = this.common_urls[t], i = n.urls[e];
                    if ("video" === n.type && this.showVideo) {
                        var o = this.$root.$mp.query, r = (o.type, o.building_id), a = o.title;
                        wx.navigateTo({
                            url: "/pages/building/video/main?building_id=".concat(r, "&title=").concat(a, "&src=").concat(i)
                        });
                    } else wx.previewImage({
                        current: i.orginal_url,
                        urls: n.urls.map(function(t) {
                            return t.orginal_url;
                        })
                    });
                },
                selectBedrooms: function(t) {
                    this.bedrooms = t;
                },
                previewPriceImg: function(t) {
                    wx.previewImage({
                        current: this.all_urls[t],
                        urls: this.all_urls
                    });
                },
                getData: function() {
                    var t = this, e = this.$root.$mp.query, n = (e.id, e.type), i = e.building_id, o = e.house_id;
                    if ("price" === n) return T.default.getBuilding(i, o).then(function(e) {
                        t.building = e, t.title = "".concat(e.name, "-房源表");
                        var n = e.current_houses[0].attachment_urls.price_imgs;
                        t.all_urls = n, t.urls = n.map(function(t) {
                            return {
                                orginal_url: "".concat(t),
                                image_url: "".concat(t, "?x-oss-process=image/resize,w_670,h_600")
                            };
                        }), t.preview_urls = n.map(function(t) {
                            return {
                                image_url: t
                            };
                        });
                    }), this.title = "房源表", this.tabs = [ this.title ], void (this.select_tab = this.title);
                    T.default.getBuilding(i, o).then(function(e) {
                        t.building = e;
                    }), x.default.getImgs(i, n).then(function(e) {
                        var o = encodeURIComponent("building_id=".concat(i)), r = e.building;
                        if (e.items.forEach(function(t) {
                            t.vr_url && (t.vr_link = "/pages/building/web_vr/main?building_id=".concat(i, "&link=").concat(encodeURIComponent(t.vr_url), "&title=").concat(r.name, "&detailParam=").concat(o, "&category_id=").concat(t.id));
                        }), t.all_urls = e.items, t.loading = !1, "layout" === n) t.handleLayoutImg(); else {
                            var a = [], u = e.building.video_urls;
                            u && u.length && t.showVideo && a.push({
                                id: "video",
                                title: "视频",
                                type: "video",
                                urls: u
                            });
                            var l = [ {
                                key: "common_tab_1",
                                name: "效果图"
                            }, {
                                key: "common_tab_2",
                                name: "样板间"
                            }, {
                                key: "common_tab_3",
                                name: "实景图"
                            }, {
                                key: "common_tab_4",
                                name: "周边图"
                            }, {
                                key: "common_tab_5",
                                name: "鸟瞰图"
                            } ].reduce(function(t, n, i) {
                                var o = e.items.filter(function(t) {
                                    return t.subcategory === n.name;
                                });
                                return o && o.length && t.push({
                                    id: n.key,
                                    title: n.name,
                                    type: "img",
                                    urls: o
                                }), t;
                            }, []);
                            a.push.apply(a, c(l)), t.common_urls = a, t.common_tabs = t.common_urls.map(function(t) {
                                return {
                                    key: t.id,
                                    name: "".concat(t.title, "(").concat(t.urls.length, ")")
                                };
                            }), t.select_tab = t.common_tabs[0].key, setTimeout(function() {
                                t.getTabHeight();
                            });
                        }
                        t.getConsultants(e.building.id), t.getBuildingData();
                    });
                },
                handleLayoutImg: function() {
                    var t = this.house_ids, e = this.all_urls.some(function(e) {
                        var n = e.house_id;
                        return t.indexOf(n) > -1;
                    }), n = [];
                    e ? (this.select_tab = "本次开盘户型", n = [ "本次开盘户型", "楼盘全部户型" ]) : (this.select_tab = "楼盘全部户型", 
                    n = [ "楼盘全部户型" ]), this.common_tabs = n.map(function(t) {
                        return {
                            key: t,
                            name: t
                        };
                    }), this.getLayoutUrls();
                },
                handlerUrls: function(t) {
                    this.urls = t, this.preview_urls = t;
                },
                getLayoutUrls: function() {
                    var t = this.house_ids, e = this.all_urls;
                    "本次开盘户型" === this.select_tab && (e = this.all_urls.filter(function(e) {
                        var n = e.house_id;
                        return t.indexOf(n) > -1;
                    })), this.resetAudioPlaying(this.all_urls), this.handlerUrls(e);
                },
                getTabHeight: function() {
                    var t = this, e = wx.createSelectorQuery();
                    e.select("#top-module-tabs").boundingClientRect(), e.exec(function(e) {
                        var n = o(e, 1)[0];
                        console.error(n), n && n.height && (t.tab_height = n.height, t.initTabs());
                    });
                },
                changeTab: function(t) {
                    var e = this;
                    if ("price" !== this.type) if (this.select_tab = t, "layout" === this.type) this.selectBedrooms(""), 
                    this.getLayoutUrls(); else {
                        var n = wx.createSelectorQuery();
                        n.select("#".concat(t)).boundingClientRect(), n.selectViewport().scrollOffset(), 
                        n.exec(function(t) {
                            if (console.error(t), t.length && t[0] && t[1]) {
                                var n = t[0].top, i = t[1].scrollTop, o = n - e.tab_height + i;
                                e.scrolling = !0, wx.pageScrollTo({
                                    scrollTop: o,
                                    success: function() {
                                        setTimeout(function() {
                                            e.scrolling = !1;
                                        }, 1e3);
                                    }
                                });
                            }
                        });
                    }
                },
                preview: function(t) {
                    wx.previewImage({
                        current: this.layout_urls[t].orginal_url,
                        urls: this.layout_urls.map(function(t) {
                            return t.orginal_url;
                        })
                    });
                },
                getConsultants: function(t) {
                    var e = this;
                    x.default.excellentConsultants(t).then(function(t) {
                        e.excellent_consultants = t.slice(0, 3);
                    });
                },
                goConsultants: function() {
                    var t = this.building, e = t.id, n = t.name;
                    wx.navigateTo({
                        url: "/pages/consultants/filter/main?id=".concat(e, "&name=").concat(n, "&from=").concat("layout" === this.type ? "户型图" : "楼盘图")
                    });
                },
                goVideo: function(t) {
                    var e = this.building, n = e.id, i = e.name;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(n, "&title=").concat(i, "&src=").concat(t)
                    });
                }
            },
            components: {
                VrTip: function() {
                    n.e("pages/building/img_preview/_vr_tip").then(function() {
                        return resolve(n("6f5f"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopRightShare: function() {
                    n.e("components/views/top_right_share").then(function() {
                        return resolve(n("73b4"));
                    }.bind(null, n)).catch(n.oe);
                },
                EmptyTip: function() {
                    n.e("components/views/empty_tip").then(function() {
                        return resolve(n("e430"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommonFooter: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(n("bf22"));
                    }.bind(null, n)).catch(n.oe);
                },
                Consultants: function() {
                    n.e("pages/building/_components/_excellent_consultants").then(function() {
                        return resolve(n("d91a"));
                    }.bind(null, n)).catch(n.oe);
                },
                LayoutItem: function() {
                    n.e("pages/building/img_preview/_layout_item").then(function() {
                        return resolve(n("9f91"));
                    }.bind(null, n)).catch(n.oe);
                },
                BottomRightShare: function() {
                    n.e("components/views/bottom_right_share").then(function() {
                        return resolve(n("dd4e"));
                    }.bind(null, n)).catch(n.oe);
                },
                TimelineBillboard: function() {
                    n.e("pages/building/_components/_timeline_billboard").then(function() {
                        return resolve(n("4d37"));
                    }.bind(null, n)).catch(n.oe);
                },
                TopGuide: function() {
                    n.e("pages/building/_components/_top_guide").then(function() {
                        return resolve(n("303a"));
                    }.bind(null, n)).catch(n.oe);
                },
                Disclaimer: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/views/disclaimer") ]).then(function() {
                        return resolve(n("db46"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = C;
    }
}, [ [ "a1c4", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
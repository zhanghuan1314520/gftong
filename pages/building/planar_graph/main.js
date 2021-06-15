require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/planar_graph/main" ], {
    1379: function(t, n, e) {
        var i = e("4b37");
        e.n(i).a;
    },
    "4b37": function(t, n, e) {},
    6050: function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            fangchanAuthUser: function() {
                return e.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(e.bind(null, "e86c"));
            }
        }, a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    bb6a: function(t, n, e) {
        e.r(n);
        var i = e("6050"), a = e("eeb0");
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e("1379");
        var o = e("f0c5"), u = Object(o.a)(a.default, i.b, i.c, !1, null, "6219012c", null, !1, i.a, void 0);
        n.default = u.exports;
    },
    e5a1: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("bb6a")).default);
        }).call(this, e("543d").createPage);
    },
    eeb0: function(t, n, e) {
        e.r(n);
        var i = e("fb5b"), a = e.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(r);
        n.default = a.a;
    },
    fb5b: function(t, n, e) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t, n, e, i, a, r, o) {
            try {
                var u = t[r](o), s = u.value;
            } catch (t) {
                return void e(t);
            }
            u.done ? n(s) : Promise.resolve(s).then(i, a);
        }
        function r(t) {
            return function() {
                var n = this, e = arguments;
                return new Promise(function(i, r) {
                    function o(t) {
                        a(s, i, r, o, u, "next", t);
                    }
                    function u(t) {
                        a(s, i, r, o, u, "throw", t);
                    }
                    var s = t.apply(n, e);
                    o(void 0);
                });
            };
        }
        function o(t, n) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                n && (i = i.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })), e.push.apply(e, i);
            }
            return e;
        }
        function u(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? o(Object(e), !0).forEach(function(n) {
                    s(t, n, e[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                });
            }
            return t;
        }
        function s(t, n, e) {
            return n in t ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = e, t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var l = i(e("a34a")), c = e("2f62"), d = i(e("8e44")), _ = i(e("ba1b")), f = i(e("b4fd")), g = i(e("eed6")), h = i(e("d1fa")), b = (e("ed08"), 
        e("371c")), m = i(e("64e7")), p = i(e("41f4")), v = i(e("808f")), w = e("f51f"), y = e("d8e2"), k = {
            mixins: [ g.default, h.default, (0, m.default)({
                page_name: "楼盘总平"
            }), v.default ],
            components: {
                Preview: function() {
                    Promise.all([ e.e("pages/building/common/vendor"), e.e("pages/building/planar_graph/_preview") ]).then(function() {
                        return resolve(e("f5d9"));
                    }.bind(null, e)).catch(e.oe);
                },
                LayoutItem: function() {
                    e.e("pages/building/img_preview/_layout_item").then(function() {
                        return resolve(e("9f91"));
                    }.bind(null, e)).catch(e.oe);
                },
                CommonFooter: function() {
                    Promise.all([ e.e("common/vendor"), e.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(e("bf22"));
                    }.bind(null, e)).catch(e.oe);
                },
                EmptyBox: function() {
                    e.e("components/views/empty_box").then(function() {
                        return resolve(e("8c0b"));
                    }.bind(null, e)).catch(e.oe);
                },
                Disclaimer: function() {
                    Promise.all([ e.e("common/vendor"), e.e("components/views/disclaimer") ]).then(function() {
                        return resolve(e("db46"));
                    }.bind(null, e)).catch(e.oe);
                },
                ShareOptions: function() {
                    e.e("components/business/share_options").then(function() {
                        return resolve(e("012a"));
                    }.bind(null, e)).catch(e.oe);
                },
                Billboard: function() {
                    e.e("pages/building/_components/_billboard").then(function() {
                        return resolve(e("e061"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    loading: !0,
                    building: {
                        name: ""
                    },
                    title: "",
                    items: [],
                    show_items: [],
                    selected_block: 0,
                    layout_urls: [],
                    layout_loading: !1,
                    show_vr_720: !1,
                    vr_panorama_url: "",
                    loadingCurrentConsultant: !0,
                    showCurrentConsultant: !1,
                    currentConsultant: {},
                    recommend_consultant_id: "",
                    tags: [],
                    all_tags: [],
                    currentSwiper: 0,
                    status_tabs: [ "即将发售", "在售", "待售", "售罄" ],
                    status_tabs_active: "即将发售",
                    house: {},
                    consultant: {},
                    current_house: {},
                    is_building_consultant: !1,
                    events: [],
                    is_consultant: !1,
                    building_id: "",
                    show_rmd: !1
                };
            },
            computed: u(u({}, (0, c.mapState)([ "share_by_consultant_uid", "buildingCardInfo" ])), {}, {
                selected_block_id: function() {
                    if (this.show_items && this.show_items.length) return this.show_items[this.selected_block].id;
                },
                block_center: function() {
                    return 1 === this.show_items.length;
                },
                block_title: function() {
                    return this.show_items.length ? this.show_items[this.selected_block].block : "全部";
                },
                hide_layout: function() {
                    return 0 === this.layout_urls.length;
                },
                open_type: function() {
                    return this.is_consultant ? "" : "share";
                }
            }),
            onShow: function() {
                var t = this.$root.$mp.query.building_id;
                (0, b.sendUserLog)("fc_planar_graph_view", {
                    d_key: t,
                    d_event: 0
                });
            },
            onLoad: function(t) {
                var n = this.$root.$mp.query.building_id, e = t.share_by_consultant_uid || this.share_by_consultant_uid;
                this.getData(), this.initAudio(this.building.name), this.getUser(), this.getEvents(), 
                this.getBuilding(), _.default.newReadHints(n, "new_planar_graph"), e ? this.getConsultant(e) : this.loadingCurrentConsultant = !1, 
                t.share_by_consultant_uid || this.getRecommendConsultant();
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query.building_id, n = this.building.name, e = encodeURIComponent("/pages/building/planar_graph/main?building_id=".concat(t || ""));
                return this.getShareInfo({
                    title: "【".concat(n, "】的总平图，楼栋分布一览无遗，立即查看吧~"),
                    path: "/pages/building/main?building_id=".concat(t || "", "&sub_page=").concat(e),
                    imageUrl: this.building.planar_graph_url ? this.building.planar_graph_url : "",
                    share_by_prefix: "hzzpt_"
                });
            },
            onShareTimeline: function() {
                var t = this.$root.$mp.query.building_id, n = this.building.name;
                return this.getShareInfo({
                    title: "【".concat(n, "】的总平图，楼栋分布一览无遗，立即查看吧~"),
                    query: "building_id=".concat(t || ""),
                    imageUrl: this.building.planar_graph_url ? this.building.planar_graph_url : "",
                    share_by_prefix: "hzzpt_"
                });
            },
            methods: {
                getUser: function() {
                    var t = this, n = this.$root.$mp.query.building_id;
                    p.default.user.get().then(function(e) {
                        t.is_consultant = e.is_consultant, e.is_consultant && d.default.getMyConsultant(!1).then(function(e) {
                            t.consultant = e, t.is_building_consultant = e.buildings.map(function(t) {
                                return t.id;
                            }).indexOf(Number(n)) > -1;
                        });
                    });
                },
                getEvents: function() {
                    var t = this, n = this.$root.$mp.query.building_id;
                    _.default.getEvent(n, {
                        page: 1,
                        per: 1
                    }).then(function(n) {
                        t.events = n.items.slice(0, 1);
                    });
                },
                clickVr720: function() {
                    (0, b.sendCtmEvtLog)("总平图-航拍点击");
                    var t = "/pages/building/web_720/main?building_id=".concat(this.building.id || "", "&title=").concat(this.building.name, "&link=").concat(this.vr_panorama_url), n = "building_id=".concat(this.building.id);
                    wx.navigateTo({
                        url: "".concat(t, "&detailParam=").concat(encodeURIComponent(n))
                    });
                },
                getBuilding: function() {
                    var t = this, n = this.$root.$mp.query.building_id;
                    d.default.getBuilding(n).then(function(n) {
                        var e = n.details, i = n.usage, a = n.current_houses, r = n.vr_panorama_resource, o = n.activities, u = (0, 
                        w.getInfoItems)(i);
                        t.show_rmd = o && o.indexOf("planar_graph_passively_rmd_consultant") > -1, n.house_info = u.reduce(function(t, n) {
                            return e && e[n] && t.push({
                                key: n,
                                value: e[n]
                            }), t;
                        }, []), t.vr_panorama_url = r ? r.vr_panorama_url : "", t.house = n, t.current_house = a.length ? a[0] : {};
                    });
                },
                getData: function() {
                    var t = this;
                    return r(l.default.mark(function n() {
                        var e, i, a;
                        return l.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t.loading = !0, wx.showLoading(), e = t.$root.$mp.query.building_id, n.next = 5, 
                                _.default.getBlocks(e);

                              case 5:
                                i = n.sent, t.building = i.building, t.show_vr_720 = i.building.activities && i.building.activities.indexOf("vr_panorama") > -1, 
                                t.title = i.building.name, t.loading = !1, wx.hideLoading(), a = {
                                    "售罄": "sold_out",
                                    "待售": "waiting",
                                    "即将发售": "forthcoming",
                                    "在售": "surplus"
                                }, t.all_tags = i.items.map(function(t, n) {
                                    var e = t.id, i = t.block, a = t.details, r = void 0 === a ? {} : a, o = t.x_coordinate, u = t.y_coordinate;
                                    return {
                                        id: e,
                                        block: i,
                                        status: r["销售状态"],
                                        left: o || 0,
                                        top: u || 0,
                                        actived: 0 === n
                                    };
                                }), t.status_tabs.some(function(n) {
                                    return !!(t.all_tags.filter(function(t) {
                                        return t.status === n;
                                    }).length > 0) && (t.status_tabs_active = n, !0);
                                }), t.tags = t.all_tags.filter(function(n) {
                                    return n.status === t.status_tabs_active;
                                }), t.items = i.items.map(function(t) {
                                    var n = t.id, e = t.block, i = t.details, r = void 0 === i ? {} : i, o = Object.keys(r);
                                    o.length < 4 && (o = [ "销售状态", "单元", "层数", "梯户比" ]);
                                    var u = r["销售状态"];
                                    return {
                                        id: n,
                                        block: e,
                                        details: r,
                                        status_class: a[u] || "",
                                        infos: o.map(function(t) {
                                            return "".concat(t, ": ").concat(r[t] || "-");
                                        })
                                    };
                                }), t.show_items = t.items.filter(function(n) {
                                    return n.details["销售状态"] === t.status_tabs_active;
                                }), t.show_items && t.show_items.length ? (t.selected_block = 0, t.getLayout()) : t.layout_loading = !1;

                              case 18:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                getLayout: function() {
                    var t = this;
                    return r(l.default.mark(function n() {
                        var e, i, a;
                        return l.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t.layout_loading = !0, e = t.$root.$mp.query.building_id, n.next = 4, _.default.getImgs(e, "layout", {
                                    building_block_id: t.selected_block_id
                                });

                              case 4:
                                i = n.sent, a = encodeURIComponent("building_id=".concat(e)), i.items.forEach(function(n) {
                                    n.vr_url && (n.vr_link = "/pages/building/web_vr/main?building_id=".concat(e, "&link=").concat(encodeURIComponent(n.vr_url), "&title=").concat(t.building.name, "&detailParam=").concat(a, "&category_id=").concat(n.id));
                                }), t.layout_urls = i.items, t.layout_loading = !1;

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                preview: function(t) {
                    wx.previewImage({
                        current: this.layout_urls[t].orginal_url,
                        urls: this.layout_urls.map(function(t) {
                            return t.orginal_url;
                        })
                    });
                },
                openVr: function(t) {
                    wx.navigateTo({
                        url: t
                    });
                },
                goVideo: function(t) {
                    var n = this.building, e = n.id, i = n.name;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(e, "&title=").concat(i, "&src=").concat(t)
                    });
                },
                refreshUrls: function() {
                    this.layout_urls = [], setTimeout(this.getLayout, 300);
                },
                changeBlock: function(t) {
                    this.currentSwiper = t, this.changLayout(t);
                },
                changeSwiperBlock: function(t) {
                    var n = t.detail, e = n.current;
                    "touch" === n.source && (this.currentSwiper = e, this.changLayout(e));
                },
                changLayout: function(t) {
                    this.selected_block = t, this.refreshUrls();
                },
                changeStatus: function(t) {
                    var n = this;
                    this.status_tabs_active = t, this.selected_block = 0, this.currentSwiper = 0, this.show_items = this.items.filter(function(t) {
                        return t.details["销售状态"] === n.status_tabs_active;
                    }), this.tags = this.all_tags.filter(function(t) {
                        return t.status === n.status_tabs_active;
                    }), this.show_items.length ? this.refreshUrls() : this.layout_urls = [];
                },
                getConsultant: function(t) {
                    var n = this;
                    return r(l.default.mark(function e() {
                        var i, a, r, o, u, s, c;
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return i = n.$root.$mp.query.building_id, e.next = 3, f.default.getRecommendConsultant({
                                    scene: "building",
                                    building_id: i,
                                    consultant_rids: t
                                });

                              case 3:
                                if (a = e.sent, n.loadingCurrentConsultant = !1, Object.keys(a).length) {
                                    e.next = 8;
                                    break;
                                }
                                return n.showCurrentConsultant = !1, e.abrupt("return");

                              case 8:
                                n.showCurrentConsultant = !0, r = a.id, o = a.name, u = a.weixin_headimgurl, s = a.building, 
                                c = s.name, n.currentConsultant = {
                                    consultant_id: r,
                                    consultant_name: o,
                                    consultant_headimgurl: u,
                                    building_name: c
                                }, n.loadingCurrentConsultant = !1;

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getRecommendConsultant: function() {
                    var t = this;
                    return r(l.default.mark(function n() {
                        var e, i;
                        return l.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return e = t.$root.$mp.query.building_id, n.next = 3, f.default.getRecommendConsultant({
                                    scene: "planar_graph",
                                    building_id: e
                                });

                              case 3:
                                i = n.sent, t.recommend_consultant_id = i.id;

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                goConsultantByUser: function(t) {
                    var n = this;
                    return r(l.default.mark(function t() {
                        var e, i;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e = n.$root.$mp.query.building_id, t.next = 3, f.default.getRecommendConsultant({
                                    scene: "planar_graph_passively",
                                    building_id: e
                                });

                              case 3:
                                i = t.sent, (0, b.sendCtmEvtLog)("总平图页面——向置业顾问提问按钮"), (0, y.navigateToChat)(i.id, {
                                    from: "总平图"
                                });

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        n.default = k;
    }
}, [ [ "e5a1", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
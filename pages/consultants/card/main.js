(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consultants/card/main" ], {
    "1a89": function(n, e, t) {
        var i = t("9327");
        t.n(i).a;
    },
    4132: function(n, e, t) {
        t.r(e);
        var i = t("4bb2"), o = t.n(i);
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(a);
        e.default = o.a;
    },
    "4bb2": function(n, e, t) {
        function i(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function o(n, e, t, i, o, a, r) {
            try {
                var s = n[a](r), u = s.value;
            } catch (n) {
                return void t(n);
            }
            s.done ? e(u) : Promise.resolve(u).then(i, o);
        }
        function a(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(i, a) {
                    function r(n) {
                        o(u, i, a, r, s, "next", n);
                    }
                    function s(n) {
                        o(u, i, a, r, s, "throw", n);
                    }
                    var u = n.apply(e, t);
                    r(void 0);
                });
            };
        }
        function r(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, i);
            }
            return t;
        }
        function s(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(t), !0).forEach(function(e) {
                    u(n, e, t[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                });
            }
            return n;
        }
        function u(n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = e.handleMedals = e.getObtain = void 0;
        var c = i(t("a34a")), l = t("2f62"), d = i(t("8e44")), f = t("63ae"), h = t("371c"), g = i(t("d8e2")), _ = t("ccf5"), m = t("a177"), p = t("327a"), b = t("fa29"), v = function(n, e) {
            return !!(n.medals && n.medals.length >= e + 1) && n.medals[e].obtained;
        };
        e.getObtain = v;
        var w = function(n) {
            n.medals && n.medals.length && (n.medals[0] && (n.medals[0].class_name = {
                "金牌置业顾问": "golden",
                "银牌置业顾问": "silver",
                "铜牌置业顾问": "bronze"
            }[n.medals[0].name]), n.medals[1] && (n.medals[1].class_name = "excellect"), n.medals[2] && (n.medals[2].class_name = "perfessional"));
        };
        e.handleMedals = w;
        var y = function(n) {
            return n && "铜牌" !== n ? "".concat(n, "顾问") : "置业顾问";
        }, O = {
            mixins: [ g.default, (0, p.getPaginationMixin)({
                loading_name: "feeds_loading"
            }) ],
            name: "CONSULTANT_CARD",
            data: function() {
                return {
                    liking: !1,
                    loading: !0,
                    show_share_option: !1,
                    show_billboard: !1,
                    consultant: {
                        name: "",
                        weixin_name: "",
                        building_name: "",
                        show_times: "",
                        last_period_obtained_score: "",
                        like_count: ""
                    },
                    is_consultant: !1,
                    show_medal_detail: !1,
                    current_building: {},
                    house: {},
                    buildings: [],
                    from: "名片"
                };
            },
            computed: s({}, (0, l.mapState)([ "showVideo" ])),
            onReady: function() {
                var n = this.$root.$mp.query.share_by_consultant_uid;
                n && this.setShareByConsultantUid(n);
            },
            onLoad: function() {
                var n = this;
                d.default.init().then(function() {
                    n.getPageData(), m.App_User.is_consultant().then(function(e) {
                        n.is_consultant = e;
                    });
                });
            },
            onShow: function() {
                var n = this.getId().id;
                n && h.UserLog.viewConsultant(n);
            },
            onPullDownRefresh: function() {
                this.loading || this.getPageData();
            },
            onShareAppMessage: function() {
                var n = this.getId().id, e = "我是【".concat(this.consultant.building_name || "", "】置业顾问【").concat(this.consultant.name || "", "】，欢迎咨询~");
                return this.getShareInfo({
                    title: e,
                    need_sub_page: !1,
                    path: "/pages/consultants/card/main?id=".concat(n)
                });
            },
            methods: s(s({}, (0, l.mapActions)([ "setShareByConsultantUid" ])), {}, {
                getId: function() {
                    var n = "", e = this.$root.$mp.query, t = e.id, i = e.from, o = e.scene;
                    return o && (n = o.split("_")[1]), {
                        id: t || n,
                        from: i
                    };
                },
                toggleMedalDetail: function() {
                    this.show_medal_detail = !this.show_medal_detail;
                },
                showShareOption: function() {
                    this.show_share_option = !0;
                },
                hideShareOption: function() {
                    this.show_share_option = !1;
                },
                toggleBillboard: function() {
                    this.show_billboard = !this.show_billboard;
                },
                hideShareTip: function() {
                    this.show_shared_tip = !1;
                },
                getPageData: function() {
                    var n = this, e = this.getId(), t = e.id, i = e.from, o = {};
                    i && (o.from = i), this.loading = !0, d.default.getConsultant(t, o).then(function(e) {
                        e.viewers_headimg = e.viewers_headimg.map(function(n) {
                            return n || _.DEFAULT_HEADIMG;
                        }), e.viewers_headimg.shift(), w(e);
                        var t = v(e, 1), i = v(e, 2), o = _.LEVEL_MAP[e.level], a = e.buildings.map(f.mapHouseItem);
                        console.log(a), a.length > 1 ? a.some(function(t, i) {
                            if (t.building_id === e.building_id) return n.current_building = t, a.splice(i, 1), 
                            a.unshift(t), !0;
                        }) : n.current_building = a[0], n.consultant = s(s({}, e), {}, {
                            weixin_headimgurl: e.weixin_headimgurl || _.DEFAULT_HEADIMG,
                            type: o,
                            excellect_obtain: t,
                            perfessional_obtain: i,
                            show_excellect: e.is_my_card || t,
                            show_perfessional: e.is_my_card || i,
                            type_name: y(o),
                            buildings: a
                        }), n.getBuilding(e.building_id, e.buildings), setTimeout(function() {
                            n.loading = !1, n.getData();
                        }, 500), n.changeTitle(e.name), wx.stopPullDownRefresh();
                    });
                },
                getBuilding: function(n, e) {
                    var t = this;
                    return a(c.default.mark(function i() {
                        var o, a;
                        return c.default.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, Promise.all(e.map(function(n) {
                                    var e = n.id;
                                    return d.default.getBuilding(e);
                                }));

                              case 2:
                                (o = i.sent).forEach(function(n) {
                                    [ "building_ranking", "common_probability", "rd_probability" ].forEach(function(e) {
                                        delete n[e];
                                    });
                                }), o.forEach(function(n) {
                                    n.id = "", n.current_houses && n.current_houses.length && (n.id = n.current_houses[0].id), 
                                    n.video_resource && n.video_resource.photo_url ? n.cover_photo_url = n.video_resource.photo_url : n.photos_urls && n.photos_urls.length && (n.cover_photo_url = n.photos_urls[0]);
                                }), (a = o.map(f.mapHouseItem)).length > 1 ? a.some(function(e, i) {
                                    if (e.building_id === n) return t.house = e, a.splice(i, 1), a.unshift(e), !0;
                                }) : t.house = a[0], t.buildings = a;

                              case 8:
                              case "end":
                                return i.stop();
                            }
                        }, i);
                    }))();
                },
                getData: function() {
                    var n = this, e = this.getId(), t = e.id;
                    e.from, d.default.getConsultantFeeds(t, this.page).then(function(e) {
                        var t = e.items;
                        n.handleData({
                            items: (0, b.mapFeeds)(t)
                        });
                    });
                },
                changeTitle: function(n) {
                    wx.setNavigationBarTitle({
                        title: "置业顾问-".concat(n)
                    });
                },
                goHouse: function() {
                    var n = "building_id=".concat(this.consultant.building_id);
                    wx.navigateTo({
                        url: "/pages/building/main?".concat(n)
                    });
                },
                onLikeConsult: function(n) {
                    var e = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var t = this.consultant;
                        d.default.likeConsultant(t.id, n).then(function() {
                            t.is_liked = n;
                            var i = n ? t.like_count + 1 : t.like_count - 1;
                            t.like_count = i < 0 ? 0 : i, e.consultant = t, e.liking = !1;
                        });
                    }
                },
                previewImg: function(n) {
                    var e = this.consultant.weixin_headimgurl, t = e ? e.replace(/132$/, 0).replace(/\?x\-oss\-process=image\/resize,w_\w*,h_\w*/, "") : "";
                    wx.previewImage({
                        current: t,
                        urls: [ t ]
                    });
                },
                handleItems: function(n, e) {
                    this.items.some(function(t, i) {
                        if (t.id === n) return e(i), !0;
                    });
                },
                onDeleteFeed: function(n) {
                    var e = this;
                    this.handleItems(n, function(n) {
                        e.$delete(e.items, n);
                    });
                },
                onSticky: function(n) {
                    this.getData();
                },
                onChangeFeed: function(n) {
                    var e = this;
                    this.handleItems(n.id, function(t) {
                        e.$set(e.items, t, n);
                    });
                },
                goCard: function() {
                    var n = this.consultant.id;
                    wx.navigateTo({
                        url: "/pages/personal_package/consultant_select/main?id=".concat(n, "&from=card")
                    });
                }
            }),
            components: {
                Loading: function() {
                    t.e("components/views/loading").then(function() {
                        return resolve(t("7756"));
                    }.bind(null, t)).catch(t.oe);
                },
                Feeds: function() {
                    t.e("pages/consultants/card/_feeds").then(function() {
                        return resolve(t("398c"));
                    }.bind(null, t)).catch(t.oe);
                },
                ShareOptions: function() {
                    t.e("components/business/share_options").then(function() {
                        return resolve(t("012a"));
                    }.bind(null, t)).catch(t.oe);
                },
                Billboard: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/consultants/card/_billboard") ]).then(function() {
                        return resolve(t("ae00"));
                    }.bind(null, t)).catch(t.oe);
                },
                LikeShare: function() {
                    Promise.all([ t.e("common/vendor"), t.e("pages/consultants/card/_like_share") ]).then(function() {
                        return resolve(t("f3c6"));
                    }.bind(null, t)).catch(t.oe);
                },
                Medals: function() {
                    t.e("pages/consultants/card/_medals").then(function() {
                        return resolve(t("b81a"));
                    }.bind(null, t)).catch(t.oe);
                },
                Buiildings: function() {
                    t.e("pages/consultants/card/_buildings").then(function() {
                        return resolve(t("422c"));
                    }.bind(null, t)).catch(t.oe);
                },
                Card: function() {
                    t.e("pages/consultants/card/_card").then(function() {
                        return resolve(t("3612"));
                    }.bind(null, t)).catch(t.oe);
                },
                Vr720: function() {
                    t.e("pages/consultants/card/_vr_720").then(function() {
                        return resolve(t("6cc0"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        e.default = O;
    },
    "60e5": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {
            return i;
        });
        var i = {
            fangchanAuthUser: function() {
                return t.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(t.bind(null, "e86c"));
            }
        }, o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    9327: function(n, e, t) {},
    c64c: function(n, e, t) {
        t.r(e);
        var i = t("60e5"), o = t("4132");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        t("1a89");
        var r = t("f0c5"), s = Object(r.a)(o.default, i.b, i.c, !1, null, "caa4c81e", null, !1, i.a, void 0);
        e.default = s.exports;
    },
    eb3c: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), e(t("66fd")), n(e(t("c64c")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "eb3c", "common/runtime", "common/vendor" ] ] ]);
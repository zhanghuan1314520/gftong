require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/layout_detail/main" ], {
    "66e8": function(i, t, e) {},
    "6fb9": function(i, t, e) {
        (function(i) {
            function t(i) {
                return i && i.__esModule ? i : {
                    default: i
                };
            }
            e("6cdc"), t(e("66fd")), i(t(e("9bd8e")).default);
        }).call(this, e("543d").createPage);
    },
    "9bd8e": function(i, t, e) {
        e.r(t);
        var n = e("f64a"), o = e("f98f");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(i) {
            e.d(t, i, function() {
                return o[i];
            });
        }(u);
        e("a323");
        var a = e("f0c5"), r = Object(a.a)(o.default, n.b, n.c, !1, null, "51995d1f", null, !1, n.a, void 0);
        t.default = r.exports;
    },
    a323: function(i, t, e) {
        var n = e("66e8");
        e.n(n).a;
    },
    c650: function(i, t, e) {
        function n(i) {
            return i && i.__esModule ? i : {
                default: i
            };
        }
        function o(i, t, e, n, o, u, a) {
            try {
                var r = i[u](a), c = r.value;
            } catch (i) {
                return void e(i);
            }
            r.done ? t(c) : Promise.resolve(c).then(n, o);
        }
        function u(i) {
            return function() {
                var t = this, e = arguments;
                return new Promise(function(n, u) {
                    function a(i) {
                        o(c, n, u, a, r, "next", i);
                    }
                    function r(i) {
                        o(c, n, u, a, r, "throw", i);
                    }
                    var c = i.apply(t, e);
                    a(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = n(e("a34a")), r = n(e("ba1b")), c = e("63ae"), l = n(e("eed6")), d = n(e("55ed")), s = n(e("b512")), f = n(e("d1fa")), g = {
            components: {
                AuthPhone: function() {
                    e.e("components/building/_auth_phone").then(function() {
                        return resolve(e("7038"));
                    }.bind(null, e)).catch(e.oe);
                },
                LikeTip: function() {
                    Promise.all([ e.e("common/vendor"), e.e("pages/building/_components/_like_tip") ]).then(function() {
                        return resolve(e("ca0b"));
                    }.bind(null, e)).catch(e.oe);
                },
                CommonFooter: function() {
                    Promise.all([ e.e("common/vendor"), e.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(e("bf22"));
                    }.bind(null, e)).catch(e.oe);
                },
                ImgTools: function() {
                    e.e("pages/building/img_preview/_img_tools").then(function() {
                        return resolve(e("f0bc"));
                    }.bind(null, e)).catch(e.oe);
                },
                AudioPlayer: function() {
                    Promise.all([ e.e("common/vendor"), e.e("pages/building/img_preview/_audio_player") ]).then(function() {
                        return resolve(e("d48a"));
                    }.bind(null, e)).catch(e.oe);
                },
                VrTip: function() {
                    e.e("pages/building/img_preview/_vr_tip").then(function() {
                        return resolve(e("6f5f"));
                    }.bind(null, e)).catch(e.oe);
                },
                Layout: function() {
                    e.e("pages/building/_components/_layout").then(function() {
                        return resolve(e("bf95"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            mixins: [ l.default, d.default, s.default, f.default ],
            data: function() {
                return {
                    building_id: "",
                    layout_id: "",
                    item: {},
                    house: {
                        name: "",
                        activities: []
                    },
                    layout_items: []
                };
            },
            computed: {
                preview_img: function() {
                    return this.item && this.item.image_url ? (0, c.handleImgSize)(this.item.image_url, 750, 600) : "";
                },
                show_disclaimer: function() {
                    return this.house.activities && this.house.activities.indexOf("vr_disclaimer") > -1;
                },
                tag_list: function() {
                    return this.item.tag_list && this.item.tag_list.slice(0, 3);
                }
            },
            onLoad: function(i) {
                var t = i.building_id, e = i.layout_id;
                this.building_id = t, this.layout_id = e, this.getData();
            },
            onShareAppMessage: function() {
                var i = this.$root.$mp.query, t = i.layout_id, e = i.building_id;
                return this.title, this.getShareInfo({
                    title: this.house.name + "-户型图",
                    path: this.getSharePath("/pages/building/layout_detail/main?building_id=".concat(e, "&layout_id=").concat(t))
                });
            },
            methods: {
                openLayoutDetail: function(i) {
                    wx.navigateTo({
                        url: "/pages/building/layout_detail/main?building_id=".concat(this.building_id, "&layout_id=").concat(i)
                    });
                },
                openLayoutList: function() {
                    var i = this.house, t = i.building_id, e = i.name;
                    wx.navigateTo({
                        url: "/pages/building/img_preview/main?house_id=&type=layout&title=".concat(e, "&building_id=").concat(t || "")
                    });
                },
                preview: function() {
                    var i = (0, c.handleImgSize)(this.item.image_url, 1125, 1800);
                    wx.previewImage({
                        current: i,
                        urls: [ i ]
                    });
                },
                getHouse: function() {
                    var i = this;
                    return u(a.default.mark(function t() {
                        var e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.default.getBuilding(i.building_id, {});

                              case 2:
                                (e = t.sent).favourite = e.follow_info && e.follow_info.id, i.house = e;

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getData: function() {
                    var i = this;
                    return u(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, i.getHouse();

                              case 2:
                                return e = encodeURIComponent("building_id=".concat(i.building_id)), t.next = 5, 
                                r.default.layoutDetail(i.building_id, i.layout_id);

                              case 5:
                                n = t.sent, i.item = n, n.vr_url && (i.vr_link = "/pages/building/web_vr/main?building_id=".concat(i.building_id, "&link=").concat(encodeURIComponent(n.vr_url), "&title=").concat(i.house.name, "&detailParam=").concat(e, "&category_id=").concat(n.id)), 
                                i.resetAudioPlaying([ n ]), i.getLayouts();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getLayouts: function() {
                    var i = this;
                    return u(a.default.mark(function t() {
                        var e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.default.getImgs(i.building_id, "layout", {});

                              case 2:
                                e = t.sent, i.layoutItemsSort(e.items);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                layoutItemsSort: function(i) {
                    var t = this, e = this.house.current_houses.map(function(i) {
                        return i.id;
                    }), n = i.sort(function(i, t) {
                        return e.indexOf(i.house_id) > -1 && -1 === e.indexOf(t.house_id) ? -1 : 1;
                    });
                    this.layout_items = n.filter(function(i) {
                        return i.id != t.layout_id;
                    });
                },
                goVideo: function(i) {
                    var t = this.house, e = t.id, n = t.name;
                    wx.navigateTo({
                        url: "/pages/building/video/main?building_id=".concat(e, "&title=").concat(n, "&src=").concat(this.item.video_url)
                    });
                },
                play: function() {
                    this.playAudio(0, this.item.audio_url);
                },
                stop: function() {
                    this.stopAudio(0);
                },
                seek: function(i) {
                    this.seekAudio(i);
                },
                changeFavourite: function() {
                    this.toggleFavourite("户型图详情页——关注"), this.getHouse();
                },
                goLayout: function() {
                    var i = this.house, t = i.building_id, e = i.name;
                    wx.navigateTo({
                        url: "/pages/building/img_preview/main?type=layout&title=".concat(e, "&building_id=").concat(t || "")
                    });
                },
                goPrice: function() {
                    var i = this.house, t = i.building_id, e = i.name, n = this.item, o = n.id, u = n.price_house_id;
                    wx.navigateTo({
                        url: "/pages/building/price/main?building_id=".concat(t, "&title=").concat(e, "&house_id=").concat(u, "&building_image_id=").concat(o)
                    });
                }
            }
        };
        t.default = g;
    },
    f64a: function(i, t, e) {
        e.d(t, "b", function() {
            return n;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var n = function() {
            var i = this;
            i.$createElement;
            i._self._c;
        }, o = [];
    },
    f98f: function(i, t, e) {
        e.r(t);
        var n = e("c650"), o = e.n(n);
        for (var u in n) [ "default" ].indexOf(u) < 0 && function(i) {
            e.d(t, i, function() {
                return n[i];
            });
        }(u);
        t.default = o.a;
    }
}, [ [ "6fb9", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
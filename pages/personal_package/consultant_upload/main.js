var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/consultant_upload/main" ], {
    "00fe": function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "0f45e": function(t, e, i) {
        var n = i("c868");
        i.n(n).a;
    },
    1671: function(e, i, n) {
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
            })(e);
        }
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap();
            return r = function() {
                return t;
            }, t;
        }
        function a(t) {
            return _(t) || c(t) || l(t) || u();
        }
        function u() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(t, e) {
            if (t) {
                if ("string" == typeof t) return d(t, e);
                var i = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? d(t, e) : void 0;
            }
        }
        function c(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function _(t) {
            if (Array.isArray(t)) return d(t);
        }
        function d(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n;
        }
        function g(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), i.push.apply(i, n);
            }
            return i;
        }
        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? g(Object(i), !0).forEach(function(e) {
                    m(t, e, i[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : g(Object(i)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                });
            }
            return t;
        }
        function m(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.default = void 0;
        var h = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== o(t) && "function" != typeof t) return {
                default: t
            };
            var e = r();
            if (e && e.has(t)) return e.get(t);
            var i = {}, n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in t) if (Object.prototype.hasOwnProperty.call(t, s)) {
                var a = n ? Object.getOwnPropertyDescriptor(t, s) : null;
                a && (a.get || a.set) ? Object.defineProperty(i, s, a) : i[s] = t[s];
            }
            return i.default = t, e && e.set(t, i), i;
        }(n("80d6")), p = s(n("8e44")), y = (s(n("b4fd")), s(n("12bf"))), b = {
            layout: "?????????",
            house: "?????????",
            video: "??????",
            edit: "??????????????????"
        }, v = {
            mixins: [],
            components: {},
            computed: {},
            watch: {},
            data: function() {
                return {
                    show_top_tabs: !1,
                    tips: "??????????????????????????????????????????????????????????????????????????????????????????",
                    tabs: [ {
                        name: "?????????",
                        key: "layout"
                    }, {
                        name: "?????????",
                        key: "house"
                    }, {
                        name: "??????",
                        key: "video"
                    }, {
                        name: "??????????????????",
                        key: "edit"
                    } ],
                    select_tab: "",
                    buildings: [],
                    buildings_index: 0,
                    building_id: "",
                    layout_info: [ {
                        room: "",
                        hall: "",
                        toilet: "",
                        layout_no: "",
                        area: "",
                        image_url: ""
                    } ],
                    successed: !1,
                    loading: !1,
                    imgs_types: [ "?????????", "?????????", "?????????", "?????????", "?????????" ],
                    imgs_types_index: 0,
                    imgs_types_subcategory: "?????????",
                    imgs_types_sketch: [],
                    imgs_types_real: [],
                    imgs_types_showhomes: [],
                    imgs_types_around: [],
                    imgs_types_aerialView: [],
                    building_imgs: [],
                    building_video_url: "",
                    building_thumb_url: "",
                    building_info: {
                        property_rights: "",
                        developer: "",
                        footprint_area: "",
                        construction_area: "",
                        volume_rate: "",
                        greening_rate: "",
                        total_houses: "",
                        parking_space: "",
                        building_numbers: "",
                        floor_situation: "",
                        delivery_time: "",
                        description: ""
                    },
                    canSubmit: !0
                };
            },
            onLoad: function(t) {
                t.key && (this.select_tab = t.key, wx.setNavigationBarTitle({
                    title: b[t.key]
                })), this.getMyConsultant();
            },
            methods: {
                onShowToast: function(t) {
                    wx.showToast({
                        title: t,
                        icon: "none",
                        duration: 2e3
                    });
                },
                changeTab: function(t) {
                    this.select_tab = t;
                },
                changeBuildings: function(t) {
                    var e = t.detail.value;
                    Number(this.buildings_index) !== Number(e) && (this.buildings_index = Number(e), 
                    this.building_id = this.buildings[Number(e)].id, this.getBuildingData(this.building_id));
                },
                changeImgsType: function(t) {
                    var e = t.detail.value;
                    switch (this.imgs_types_index = e, this.imgs_types_subcategory = this.imgs_types[Number(e)], 
                    this.imgs_types_subcategory) {
                      case "?????????":
                        this.building_imgs = this.imgs_types_sketch.map(function(t) {
                            return t;
                        });
                        break;

                      case "?????????":
                        this.building_imgs = this.imgs_types_real.map(function(t) {
                            return t;
                        });
                        break;

                      case "?????????":
                        this.building_imgs = this.imgs_types_showhomes.map(function(t) {
                            return t;
                        });
                        break;

                      case "?????????":
                        this.building_imgs = this.imgs_types_around.map(function(t) {
                            return t;
                        });
                        break;

                      case "?????????":
                        this.building_imgs = this.imgs_types_aerialView.map(function(t) {
                            return t;
                        });
                    }
                },
                getMyConsultant: function() {
                    var t = this;
                    p.default.getMyConsultant().then(function(e) {
                        console.log(e), t.buildings = e.buildings, t.building_id = e.buildings[0].id, t.getBuildingData(e.buildings[0].id);
                    });
                },
                handleUploadStatus: function(t, e) {
                    wx.showLoading({
                        title: "?????????"
                    }), t === e && wx.hideLoading();
                },
                delConfirm: function(t) {
                    var e = this;
                    wx.showModal({
                        title: "??????",
                        content: "????????????????",
                        success: function(i) {
                            i.confirm && e.delImg(t);
                        }
                    });
                },
                delImg: function(t) {
                    var e = t.currentTarget.dataset.i;
                    switch (this.select_tab) {
                      case "layout":
                        var i = this.layout_info[e];
                        this.$set(this.layout_info, e, f(f({}, i), {}, {
                            image_url: ""
                        }));
                        break;

                      case "house":
                        switch (this.imgs_types_subcategory) {
                          case "?????????":
                            this.imgs_types_sketch = this.imgs_types_sketch.filter(function(t, i) {
                                return e !== i;
                            }), this.building_imgs = this.imgs_types_sketch.map(function(t) {
                                return t;
                            });
                            break;

                          case "?????????":
                            this.imgs_types_real = this.imgs_types_real.filter(function(t, i) {
                                return e !== i;
                            }), this.building_imgs = this.imgs_types_real.map(function(t) {
                                return t;
                            });
                            break;

                          case "?????????":
                            this.imgs_types_showhomes = this.imgs_types_showhomes.filter(function(t, i) {
                                return e !== i;
                            }), this.building_imgs = this.imgs_types_showhomes.map(function(t) {
                                return t;
                            });
                            break;

                          case "?????????":
                            this.imgs_types_around = this.imgs_types_around.filter(function(t, i) {
                                return e !== i;
                            }), this.building_imgs = this.imgs_types_around.map(function(t) {
                                return t;
                            });
                            break;

                          case "?????????":
                            this.imgs_types_aerialView = this.imgs_types_aerialView.filter(function(t, i) {
                                return e !== i;
                            }), this.building_imgs = this.imgs_types_aerialView.map(function(t) {
                                return t;
                            });
                        }
                    }
                },
                onDelLayout: function(t) {
                    this.layout_info = this.layout_info.filter(function(e, i) {
                        return i !== t;
                    });
                },
                onAddLayout: function() {
                    this.layout_info = [].concat(a(this.layout_info), [ {
                        room: "",
                        hall: "",
                        toilet: "",
                        layout_no: "",
                        area: "",
                        image_url: ""
                    } ]);
                },
                onBlur: function(t) {
                    var e = t.currentTarget.dataset, i = e.name, n = e.i, o = this.layout_info[n];
                    this.$set(this.layout_info, n, f(f({}, o), {}, m({}, i, t.detail.value)));
                },
                uploadMedia: function(t) {
                    var e = this;
                    if (this.canSubmit) {
                        var i = t.currentTarget.dataset, n = i.count, o = i.name, s = i.mediatype, r = i.i, a = i.storedir;
                        wx.chooseMedia({
                            count: n,
                            mediaType: s,
                            sourceType: [ "album" ],
                            sizeType: [ "compressed" ],
                            success: function(t) {
                                var i = t.type, n = t.tempFiles, s = 0;
                                if ("video" === i) {
                                    var u = n[0].size / Math.pow(1e3, 2), l = n[0].tempFilePath.split("."), c = l[l.length - 1];
                                    if ("mp4,m3u8".indexOf(c) < 0) return void wx.showToast({
                                        title: "?????????mp4??????m3u8???????????????"
                                    });
                                    if (u > 10) wx.showToast({
                                        title: "?????????10M???????????????"
                                    }); else {
                                        var _ = n[0], d = _.tempFilePath, g = _.thumbTempFilePath;
                                        h.default.uploadVideo(d).then(function(t) {
                                            e.building_thumb_url = g, e.building_video_url = t, s += 1, e.handleUploadStatus(s, n.length);
                                        }).catch(function() {
                                            s += 1, e.handleUploadStatus(s, n.length);
                                        });
                                    }
                                } else n.forEach(function(t) {
                                    var i = t.tempFilePath;
                                    h.default.uploadImg({
                                        filePath: i,
                                        formData: {
                                            store_dir: a
                                        }
                                    }).then(function(t) {
                                        if ("layout_info" === o) {
                                            var i = e.layout_info[r];
                                            e.$set(e.layout_info, r, f(f({}, i), {}, {
                                                image_url: t
                                            }));
                                        }
                                        if ("building_imgs" === o) switch (e.building_imgs = [], e.imgs_types_subcategory) {
                                          case "?????????":
                                            e.imgs_types_sketch.push({
                                                subcategory: "?????????",
                                                image_url: t
                                            }), e.building_imgs = e.imgs_types_sketch.map(function(t) {
                                                return t;
                                            });
                                            break;

                                          case "?????????":
                                            e.imgs_types_real.push({
                                                subcategory: "?????????",
                                                image_url: t
                                            }), e.building_imgs = e.imgs_types_real.map(function(t) {
                                                return t;
                                            });
                                            break;

                                          case "?????????":
                                            e.imgs_types_showhomes.push({
                                                subcategory: "?????????",
                                                image_url: t
                                            }), e.building_imgs = e.imgs_types_showhomes.map(function(t) {
                                                return t;
                                            });
                                            break;

                                          case "?????????":
                                            e.imgs_types_around.push({
                                                subcategory: "?????????",
                                                image_url: t
                                            }), e.building_imgs = e.imgs_types_around.map(function(t) {
                                                return t;
                                            });
                                            break;

                                          case "?????????":
                                            e.imgs_types_aerialView.push({
                                                subcategory: "?????????",
                                                image_url: t
                                            }), e.building_imgs = e.imgs_types_aerialView.map(function(t) {
                                                return t;
                                            });
                                        }
                                        s += 1, e.handleUploadStatus(s, n.length);
                                    }).catch(function(t) {
                                        s += 1, e.handleUploadStatus(s, n.length);
                                    });
                                });
                            }
                        });
                    } else this.onShowToast("????????????????????????????????????");
                },
                onSubmit: function() {
                    var t = this, e = this.building_id;
                    switch (this.select_tab) {
                      case "layout":
                        if (!this.layout_info.every(function(e, i) {
                            return "" === e.room.trim() || "" === e.hall.trim() || "" === e.toilet.trim() ? (t.onShowToast("??????????????????(".concat(i + 1, ")???????????????")), 
                            !1) : "" === e.layout_no.trim() ? (t.onShowToast("??????????????????(".concat(i + 1, ")???????????????")), 
                            !1) : "" === e.area.trim() ? (t.onShowToast("??????????????????(".concat(i + 1, ")???????????????")), 
                            !1) : "" !== e.image_url.trim() || (t.onShowToast("??????????????????(".concat(i + 1, ")???????????????")), 
                            !1);
                        })) return;
                        var i = this.layout_info.map(function(t) {
                            var e = t.room, i = t.hall, n = t.toilet;
                            return {
                                layout_no: t.layout_no,
                                area: t.area,
                                layout_description: {
                                    "???": e,
                                    "???": i,
                                    "???": n
                                },
                                image_url: t.image_url
                            };
                        });
                        this.submitLayout({
                            building_id: e,
                            category: "?????????",
                            content: i
                        });
                        break;

                      case "house":
                        this.imgs_types_subcategory;
                        var n = this.imgs_types_sketch, o = this.imgs_types_real, s = this.imgs_types_showhomes, r = this.imgs_types_around, u = this.imgs_types_aerialView, l = (this.building_imgs, 
                        [].concat(a(n), a(o), a(s), a(r), a(u)));
                        if (!l.length) return void this.onShowToast("??????????????????");
                        this.submitHouse({
                            building_id: e,
                            category: "?????????",
                            content: l
                        });
                        break;

                      case "video":
                        if (!this.building_video_url) return void this.onShowToast("???????????????");
                        this.submitVideo({
                            building_id: e,
                            category: "??????",
                            content: [ {
                                video_url: this.building_video_url
                            } ]
                        });
                    }
                },
                submitLayout: function(t) {
                    this.onBuildingSupplements(t);
                },
                submitHouse: function(t) {
                    this.onBuildingSupplements(t);
                },
                submitVideo: function(t) {
                    this.onBuildingSupplements(t);
                },
                onUploadOther: function() {
                    this.successed = !1, wx.navigateBack({
                        delta: 1
                    });
                },
                onBuildingSupplements: function(t) {
                    var e = this;
                    this.loading = !0, y.default.buildingSupplements(t).then(function(t) {
                        e.loading = !1, t && 422 === t.code ? wx.showModal({
                            title: "??????",
                            content: t.error_message,
                            showCancel: !1
                        }) : e.successed = !0;
                    }).catch(function(t) {
                        console.error(t), e.loading = !1;
                    });
                },
                getBuildingData: function(t) {
                    var e = this;
                    p.default.getBuilding(t).then(function(t) {
                        console.log(t);
                        var i = t.details;
                        e.canSubmit = -1 === t.status.indexOf("??????"), e.building_info = {
                            property_rights: i["????????????"],
                            developer: i["?????????"],
                            footprint_area: i["????????????"],
                            construction_area: i["????????????"],
                            volume_rate: i["?????????"],
                            greening_rate: i["?????????"],
                            total_houses: i["?????????"],
                            parking_space: i["?????????"],
                            building_numbers: i["????????????"],
                            floor_situation: i["????????????"],
                            delivery_time: i["????????????"],
                            description: i["????????????"]
                        };
                    });
                },
                onSubmitBuildingInfo: function(t) {
                    var e = this, i = t.detail.value, n = i.property_rights, o = i.developer, s = i.footprint_area, r = i.construction_area, a = i.volume_rate, u = i.greening_rate, l = i.total_houses, c = i.parking_space, _ = i.building_numbers, d = i.floor_situation, g = i.delivery_time, f = i.description;
                    if ([ "property_rights", "developer", "footprint_area", "construction_area", "volume_rate", "greening_rate", "total_houses", "parking_space", "building_numbers", "floor_situation", "delivery_time", "description" ].some(function(i) {
                        return e.building_info[i] != t.detail.value[i];
                    })) {
                        var m = this.building_id;
                        this.onBuildingSupplements({
                            building_id: m,
                            category: "????????????",
                            content: {
                                "????????????": {
                                    "????????????": n,
                                    "?????????": o,
                                    "????????????": s,
                                    "????????????": r,
                                    "?????????": a,
                                    "?????????": u,
                                    "?????????": l,
                                    "?????????": c,
                                    "????????????": _,
                                    "????????????": d,
                                    "????????????": g
                                },
                                "????????????": f
                            }
                        });
                    } else wx.showModal({
                        title: "??????",
                        content: "??????????????????????????????????????????",
                        showCancel: !1
                    });
                }
            }
        };
        i.default = v;
    },
    "34bb": function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("57f8")).default);
        }).call(this, i("543d").createPage);
    },
    "57f8": function(t, e, i) {
        i.r(e);
        var n = i("00fe"), o = i("dc72");
        for (var s in o) [ "default" ].indexOf(s) < 0 && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("0f45e");
        var r = i("f0c5"), a = Object(r.a)(o.default, n.b, n.c, !1, null, "8ac5df92", null, !1, n.a, void 0);
        e.default = a.exports;
    },
    c868: function(t, e, i) {},
    dc72: function(t, e, i) {
        i.r(e);
        var n = i("1671"), o = i.n(n);
        for (var s in n) [ "default" ].indexOf(s) < 0 && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = o.a;
    }
}, [ [ "34bb", "common/runtime", "common/vendor" ] ] ]);
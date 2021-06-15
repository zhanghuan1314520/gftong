var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/house_circles/edit/main" ], {
    "0818": function(e, t, n) {
        n.r(t);
        var i = n("d053"), o = n("3793");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        n("8a20");
        var r = n("f0c5"), l = Object(r.a)(o.default, i.b, i.c, !1, null, "795fefc0", null, !1, i.a, void 0);
        t.default = l.exports;
    },
    3793: function(e, t, n) {
        n.r(t);
        var i = n("a4b3"), o = n.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(u);
        t.default = o.a;
    },
    "3bd8": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("0818")).default);
        }).call(this, n("543d").createPage);
    },
    "84d5": function(e, t, n) {},
    "8a20": function(e, t, n) {
        var i = n("84d5");
        n.n(i).a;
    },
    a4b3: function(t, n, i) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
                return void 0 === t ? "undefined" : e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
            })(t);
        }
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return r = function() {
                return e;
            }, e;
        }
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var s, c = i("2f62"), d = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== o(e) && "function" != typeof e) return {
                default: e
            };
            var t = r();
            if (t && t.has(e)) return t.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in e) if (Object.prototype.hasOwnProperty.call(e, u)) {
                var l = i ? Object.getOwnPropertyDescriptor(e, u) : null;
                l && (l.get || l.set) ? Object.defineProperty(n, u, l) : n[u] = e[u];
            }
            return n.default = e, t && t.set(e, n), n;
        }(i("80d6")), f = u(i("8e44")), p = {
            image: "图片",
            video: "视频"
        }, m = {
            mixins: [ (u(i("b4fd")), u(i("61f1"))).default ],
            data: function() {
                return {
                    urls: [],
                    temp_urls: [],
                    img_urls: [],
                    temp_img_urls: [],
                    video_urls: [],
                    temp_video_urls: [],
                    upload_tip: "",
                    buildings: [],
                    selected_building_index: 0,
                    media_type: "",
                    media_len: 9,
                    mediaTypes: p,
                    upload_end: !0
                };
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach(function(t) {
                        a(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, c.mapState)([ "showVideo" ])),
            onLoad: function() {
                this.upload_tip = (0, d.checkChooseImg)(), this.checkFeeds();
            },
            onUnload: function() {
                s && clearTimeout(s);
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "".concat("杭州购房通", "-房友圈"),
                    path: "/pages/house_circles/main"
                });
            },
            methods: {
                checkFeeds: function(e) {
                    var t = this;
                    f.default.initFeedEdit(e).then(function(e) {
                        if (e.not_allow_reason) {
                            var n = {
                                "daily quota limit": {
                                    content: "房友圈一天只能发一条，今天已经发过了，明天再来哦",
                                    confirm: "明天再来"
                                },
                                "is not consultant": {
                                    content: "您不是置业顾问",
                                    confirm: "好的"
                                }
                            }[e.not_allow_reason], i = n.content, o = n.confirm;
                            wx.showModal({
                                title: "提示",
                                content: i,
                                confirmText: o,
                                showCancel: !1,
                                success: function() {
                                    wx.navigateBack({
                                        delta: 1
                                    });
                                }
                            });
                        }
                        t.buildings = e.buildings;
                    });
                },
                changeBuilding: function(e) {
                    this.selected_building_index = e.target.value, this.checkFeeds(this.buildings[this.selected_building_index].id);
                },
                uploadImg: function() {
                    var e = this;
                    d.default.chooseImage({
                        count: 9,
                        is_upload: !0
                    }).then(function(t) {
                        e.temp_urls = e.temp_urls.concat(t), t.forEach(function(t) {
                            d.default.uploadImg({
                                filePath: t
                            }).then(function(t) {
                                e.urls.push(t);
                            });
                        });
                    });
                },
                handleUploadStatus: function(e, t) {
                    wx.showLoading({
                        title: "上传中"
                    }), e === t && (this.upload_end = !0, wx.hideLoading());
                },
                uploadMedia: function() {
                    var e = this, t = 9 - this.temp_urls.length, n = this.temp_img_urls.length > 0 || !this.showVideo ? [ "image" ] : [ "image", "video" ];
                    wx.chooseMedia({
                        count: t,
                        mediaType: n,
                        sourceType: [ "album" ],
                        sizeType: [ "compressed" ],
                        success: function(t) {
                            var n = t.type, i = t.tempFiles;
                            e.upload_end = !1;
                            var o = 0;
                            if (wx.showLoading({
                                title: "上传中"
                            }), e.media_type = n, "video" === n) {
                                if (e.temp_img_urls.length > 0) return void wx.showToast({
                                    title: "不能同时上传图片和视频"
                                });
                                var u = i[0].size / Math.pow(1e3, 2), r = i[0].tempFilePath.split("."), l = r[r.length - 1];
                                if ("mp4,m3u8".indexOf(l) < 0) return void wx.showToast({
                                    title: "请上传mp4或者m3u8格式的视频"
                                });
                                u > 10 ? wx.showToast({
                                    title: "请上传10M以内的视频"
                                }) : (e.media_len = 1, i.forEach(function(t) {
                                    var n = t.tempFilePath;
                                    d.default.uploadVideo(n).then(function(t) {
                                        e.temp_video_urls = [ i[0].thumbTempFilePath ], e.temp_urls = [ i[0].thumbTempFilePath ], 
                                        e.video_urls.push(t), e.urls.push(t), o += 1, e.handleUploadStatus(o, i.length);
                                    }).catch(function() {
                                        o += 1, e.handleUploadStatus(o, i.length);
                                    });
                                }));
                            } else e.media_len = 9, i.forEach(function(t) {
                                var n = t.tempFilePath;
                                d.default.uploadImg({
                                    filePath: n
                                }).then(function(t) {
                                    e.temp_img_urls.push(t), e.temp_urls.push(t), e.img_urls.push(t), e.urls.push(t), 
                                    o += 1, e.handleUploadStatus(o, i.length);
                                }).catch(function() {
                                    o += 1, e.handleUploadStatus(o, i.length);
                                });
                            });
                        }
                    });
                },
                onDel: function(e) {
                    var t = this, n = e.currentTarget.dataset.index;
                    wx.showModal({
                        title: "提示",
                        content: "是否删除?",
                        success: function(e) {
                            e.confirm ? ("image" === t.media_type ? (t.temp_img_urls = t.temp_img_urls.filter(function(e, t) {
                                return Number(n) !== t;
                            }), t.img_urls = t.img_urls.filter(function(e, t) {
                                return Number(n) !== t;
                            })) : (t.temp_video_urls = t.temp_video_urls.filter(function(e, t) {
                                return Number(n) !== t;
                            }), t.video_urls = t.video_urls.filter(function(e, t) {
                                return Number(n) !== t;
                            })), t.temp_urls = t.temp_urls.filter(function(e, t) {
                                return Number(n) !== t;
                            }), t.urls = t.urls.filter(function(e, t) {
                                return Number(n) !== t;
                            }), 0 === t.temp_urls.length && (t.media_type = "")) : e.cancel;
                        }
                    });
                },
                submit: function(e) {
                    var t = e.mp.detail.value.content.trim();
                    if (t) if (0 !== this.urls.length) {
                        var n = {
                            content: t,
                            photos_urls: this.img_urls,
                            video_url: this.video_urls[0] || "",
                            building_id: this.buildings[this.selected_building_index].id
                        };
                        f.default.createBlog(n).then(this.submitSuccess);
                    } else wx.showToast({
                        icon: "none",
                        title: "您还未上传图片或者视频"
                    }); else wx.showToast({
                        icon: "none",
                        title: "您还未填写内容"
                    });
                },
                submitSuccess: function(e) {
                    e && (e && e.error_message ? wx.showModal({
                        title: "提示",
                        content: e.error_message,
                        showCancel: !1
                    }) : (wx.showToast({
                        title: "审核通过后展示",
                        duration: 2e3
                    }), s = setTimeout(function() {
                        wx.navigateBack({
                            delta: 1
                        });
                    }, 2e3)));
                }
            }
        };
        n.default = m;
    },
    d053: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    }
}, [ [ "3bd8", "common/runtime", "common/vendor" ] ] ]);
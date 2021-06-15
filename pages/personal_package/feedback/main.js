require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/feedback/main" ], {
    "11c2": function(t, e, n) {
        n.r(e);
        var r = n("d866"), o = n.n(r);
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = o.a;
    },
    "15b1": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("d5a6")).default);
        }).call(this, n("543d").createPage);
    },
    "81ac": function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "96d2": function(t, e, n) {},
    d5a6: function(t, e, n) {
        n.r(e);
        var r = n("81ac"), o = n("11c2");
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("d69f");
        var i = n("f0c5"), u = Object(i.a)(o.default, r.b, r.c, !1, null, "2e2e7d1a", null, !1, r.a, void 0);
        e.default = u.exports;
    },
    d69f: function(t, e, n) {
        var r = n("96d2");
        n.n(r).a;
    },
    d866: function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function a(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach(function(e) {
                    i(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function i(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function u(t) {
            return l(t) || f(t) || s(t) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return p(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0;
            }
        }
        function f(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function l(t) {
            if (Array.isArray(t)) return p(t);
        }
        function p(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var d = r(n("80d6")), m = r(n("b4fa")), g = function(t) {
            var e = function(t) {
                return "string" == typeof t && Boolean(t.trim());
            }, n = {
                category: {
                    check: e,
                    text: "请选择反馈类型"
                },
                content: {
                    check: e,
                    text: "请填写问题描述"
                }
            };
            return Object.keys(n).every(function(e) {
                var r = n[e];
                return !!r.check(t[e], t) || (wx.showToast({
                    title: r.text,
                    duration: 2e3,
                    icon: "none"
                }), !1);
            });
        }, h = {
            UPLOADING: "uploading",
            FAIL: "fail",
            SUCCESS: "success"
        }, b = {
            data: function() {
                return {
                    params: {
                        category: "",
                        content: "",
                        contact: "",
                        photos_urls: []
                    },
                    img_count: 3,
                    temp_imgs: []
                };
            },
            components: {
                TagFilter: function() {
                    n.e("pages/personal_package/feedback/_tag_filter").then(function() {
                        return resolve(n("e950"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            onShareAppMessage: function() {
                var t = encodeURIComponent("/pages/personal_package/feedback/main"), e = {
                    title: "点这提交反馈哦，欢迎您对购房通提出建议和意见~",
                    path: "/pages/index/main?sub_page=".concat(t)
                };
                return this.getShareInfo(e);
            },
            methods: {
                changeStatus: function(t) {
                    this.params.category = t;
                },
                handleUploadStatus: function(t, e, n) {
                    this.temp_imgs[t].status = n ? h.SUCCESS : h.FAIL, this.temp_imgs[t].uploaded_url = e, 
                    this.temp_imgs.every(function(t) {
                        return t.status != h.UPLOADING;
                    }) && wx.hideLoading();
                },
                uploadImg: function(t) {
                    var e = this, n = (t.currentTarget.dataset.mediatype, this.temp_imgs.length), r = this.img_count - n;
                    d.default.chooseImage({
                        count: r,
                        sourceType: [ "album" ]
                    }).then(function(t) {
                        var n, r = t.map(function(t) {
                            return {
                                url: t,
                                status: h.UPLOADING,
                                uploaded_url: ""
                            };
                        }), o = e.temp_imgs.length;
                        (n = e.temp_imgs).push.apply(n, u(r)), wx.showLoading({
                            title: "上传中",
                            mask: !0
                        }), t.forEach(function(t, n) {
                            d.default.uploadImg({
                                filePath: t
                            }).then(function(t) {
                                e.handleUploadStatus(o + n, t, !0);
                            }).catch(function(t) {
                                e.handleUploadStatus(o + n, "", !1);
                            });
                        });
                    });
                },
                previewImg: function(t) {
                    wx.previewImage({
                        current: this.temp_imgs[t].url,
                        urls: this.temp_imgs.map(function(t) {
                            return t.url;
                        })
                    });
                },
                removeImg: function(t) {
                    this.temp_imgs.splice(t, 1);
                },
                submit: function() {
                    var t = a(a({}, this.params), {}, {
                        photos_urls: this.temp_imgs.filter(function(t) {
                            return t.status === h.SUCCESS;
                        }).map(function(t) {
                            return t.uploaded_url;
                        })
                    });
                    g(t) && m.default.setFeedbacks(t).then(function(t) {
                        422 !== t.code ? (wx.showToast({
                            title: "提交成功"
                        }), setTimeout(function() {
                            wx.switchTab({
                                url: "/pages/personal_center/main"
                            });
                        }, 1500)) : wx.showToast({
                            title: t.error_message,
                            icon: "none"
                        });
                    });
                }
            }
        };
        e.default = b;
    }
}, [ [ "15b1", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
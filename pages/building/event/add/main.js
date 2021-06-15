var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/event/add/main" ], {
    "35b5": function(t, e, n) {
        var o = n("521d");
        n.n(o).a;
    },
    "3bf4": function(t, e, n) {
        n.r(e);
        var o = n("94e1"), r = n("500f");
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("35b5");
        var a = n("f0c5"), u = Object(a.a)(r.default, o.b, o.c, !1, null, "616c48e8", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "500f": function(t, e, n) {
        n.r(e);
        var o = n("db43"), r = n.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    "521d": function(t, e, n) {},
    "94e1": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
    },
    c7fd: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("3bf4")).default);
        }).call(this, n("543d").createPage);
    },
    db43: function(e, n, o) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
            })(e);
        }
        function i() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap();
            return i = function() {
                return t;
            }, t;
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function u(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(n), !0).forEach(function(e) {
                    c(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function c(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function l(t) {
            return p(t) || d(t) || s(t) || f();
        }
        function f() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function s(t, e) {
            if (t) {
                if ("string" == typeof t) return b(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(t, e) : void 0;
            }
        }
        function d(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function p(t) {
            if (Array.isArray(t)) return b(t);
        }
        function b(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var m, h = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== r(t) && "function" != typeof t) return {
                default: t
            };
            var e = i();
            if (e && e.has(t)) return e.get(t);
            var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t) if (Object.prototype.hasOwnProperty.call(t, a)) {
                var u = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = t[a];
            }
            return n.default = t, e && e.set(t, n), n;
        }(o("80d6")), y = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(o("ba1b")), g = [ {
            key: "title",
            name: "动态标题"
        }, {
            key: "content",
            name: "动态内容"
        } ], v = {
            data: function() {
                return {
                    templates_index: 0,
                    submiting: !1,
                    templates: [],
                    loading: !0,
                    title: "",
                    content: "",
                    building_name: "",
                    building_id: "",
                    photos_urls: [],
                    img_count: 9,
                    fixed_title: !0
                };
            },
            onLoad: function(t) {
                this.building_name = t.building_name, this.building_id = t.building_id, this.templates = [ {
                    category: "即将取证"
                } ], this.getData();
            },
            onUnload: function() {
                m && clearTimeout(m);
            },
            watch: {},
            methods: {
                setTplData: function(t, e) {
                    this.title = t[e].title, this.content = t[e].content, this.fixed_title = t[e].fixed_title;
                },
                getData: function() {
                    var t = this;
                    this.loading = !1, y.default.getEventsTpls({
                        building_id: this.building_id
                    }).then(function(e) {
                        var n = e.templates;
                        t.templates = n, t.setTplData(n, t.templates_index);
                    });
                },
                changeType: function(t) {
                    var e = t.detail.value;
                    this.templates_index = Number(e), this.setTplData(this.templates, e);
                },
                checkForm: function(t) {
                    return g.every(function(e) {
                        var n = e.key, o = e.name, r = t[n].trim(), i = "";
                        return "" === r && (i = "您还未填写".concat(o)), (r.indexOf("（）") > -1 || r.indexOf("()") > -1) && (i = "请补全信息后再提交"), 
                        !i || (wx.showToast({
                            title: i,
                            icon: "none"
                        }), !1);
                    });
                },
                delConfirm: function(t) {
                    var e = this;
                    wx.showModal({
                        title: "提示",
                        content: "确定要删除?",
                        success: function(n) {
                            n.confirm && e.delImg(t);
                        }
                    });
                },
                delImg: function(t) {
                    var e = t.currentTarget.dataset.i;
                    this.photos_urls = this.photos_urls.filter(function(t, n) {
                        return e !== n;
                    });
                },
                handleUploadStatus: function(t, e) {
                    wx.showLoading({
                        title: "上传中"
                    }), t === e && wx.hideLoading();
                },
                uploadMedia: function(t) {
                    var e = this, n = t.currentTarget.dataset, o = n.mediatype, r = n.storedir, i = this.photos_urls.length, a = this.img_count - i;
                    wx.chooseMedia({
                        count: a,
                        mediaType: o,
                        sourceType: [ "album" ],
                        sizeType: [ "compressed" ],
                        success: function(t) {
                            var n = t.type, o = t.tempFiles, i = 0;
                            "video" === n || o.forEach(function(t) {
                                var n = t.tempFilePath;
                                h.default.uploadImg({
                                    filePath: n,
                                    formData: {
                                        store_dir: r
                                    }
                                }).then(function(t) {
                                    i += 1, e.handleUploadStatus(i, o.length), e.photos_urls = [].concat(l(e.photos_urls), [ t ]);
                                }).catch(function(t) {
                                    i += 1, e.handleUploadStatus(i, o.length);
                                });
                            });
                        }
                    });
                },
                onSubmit: function(t) {
                    var e = this;
                    this.submiting = !0;
                    var n = t.target.value;
                    this.checkForm(n) ? y.default.addEvent(u({
                        category: this.templates[this.templates_index].category,
                        building_id: this.building_id,
                        photos_urls: this.photos_urls
                    }, n)).then(function() {
                        wx.showToast({
                            title: "提交成功",
                            duration: 1500
                        }), m = setTimeout(function() {
                            e.submiting = !1, wx.navigateBack({
                                delta: 1
                            });
                        }, 1800);
                    }) : this.submiting = !1;
                }
            },
            components: {}
        };
        n.default = v;
    }
}, [ [ "c7fd", "common/runtime", "common/vendor" ] ] ]);
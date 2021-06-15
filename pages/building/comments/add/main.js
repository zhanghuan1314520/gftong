require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/add/main" ], {
    "217f": function(t, e, n) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            return u(t) || a(t) || l(t) || i();
        }
        function i() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function a(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function u(t) {
            if (Array.isArray(t)) return f(t);
        }
        function c(t, e) {
            return m(t) || d(t, e) || l(t, e) || s();
        }
        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(t, e) {
            if (t) {
                if ("string" == typeof t) return f(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
            }
        }
        function f(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function d(t, e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), 
                    !e || n.length !== e); r = !0) ;
                } catch (t) {
                    o = !0, i = t;
                } finally {
                    try {
                        r || null == u.return || u.return();
                    } finally {
                        if (o) throw i;
                    }
                }
                return n;
            }
        }
        function m(t) {
            if (Array.isArray(t)) return t;
        }
        function p(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function h(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? p(Object(n), !0).forEach(function(e) {
                    g(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function g(t, e, n) {
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
        var b = n("2f62"), v = r(n("80d6")), y = r(n("8e44"));
        r(n("ad02"));
        var _ = {
            SINGLE: 0,
            MULTIPLE: 1
        }, O = {
            "没有看过": "非实看用户",
            "实地看过": "实看用户"
        }, w = {
            data: function() {
                return {
                    name: "",
                    content: "",
                    sending: !1,
                    title: "",
                    questions: [ {
                        question: "您实地看过房吗？",
                        select_type: _.SINGLE,
                        selected: "",
                        tags: [ "没有看过", "实地看过" ]
                    }, {
                        question: "选择您的评论类型",
                        select_type: _.MULTIPLE,
                        selected: [],
                        tags: [ "楼盘咨询", "户型点评", "周边配套" ]
                    } ],
                    img_count: 1,
                    photos_urls: [],
                    img_uploading: !1
                };
            },
            computed: h({}, (0, b.mapState)([ "commontSuccess", "showCommentRedPacketActivity" ])),
            onLoad: function(t) {
                this.name = t.name, this.title = "".concat(t.name);
            },
            methods: h(h({}, (0, b.mapActions)([ "setCommontStatus" ])), {}, {
                changeContent: function(t) {
                    var e = t.target;
                    this.content = e.value;
                },
                selectTag: function(t, e) {
                    var n = this.questions[t];
                    if (n.select_type === _.SINGLE) n.selected = n.selected === e ? "" : e; else {
                        var r = n.selected.indexOf(e);
                        r > -1 ? n.selected.splice(r, 1) : n.selected.push(e);
                    }
                },
                getUserInfo: function() {
                    if (!this.sending) {
                        this.sending = !0;
                        var t = this.content.trim();
                        if ("" === t && !this.photos_urls.length) return this.sending = !1, void wx.showToast({
                            title: "您还未填写评论内容",
                            icon: "none"
                        });
                        this.submit(t);
                    }
                },
                onChooseImage: function() {
                    var t = this;
                    v.default.chooseImage({
                        count: 1,
                        sizeType: [ "compressed" ],
                        sourceType: [ "album", "camera" ],
                        is_upload: !0
                    }).then(function(e) {
                        var n = c(e, 1)[0];
                        t.img_uploading = !0, v.default.uploadImg({
                            filePath: n
                        }).then(function(e) {
                            t.photos_urls = [ e ], t.img_uploading = !1;
                        }).catch(function(e) {
                            t.img_uploading = !1;
                        });
                    }, function(t) {});
                },
                previewImg: function(t) {
                    var e = this.photos_urls[0];
                    wx.previewImage({
                        current: e,
                        urls: this.photos_urls
                    });
                },
                onRmImg: function() {
                    var t = this;
                    wx.showModal({
                        title: "提示",
                        content: "确定要删除?",
                        success: function(e) {
                            e.confirm && (t.photos_urls = []);
                        }
                    });
                },
                submit: function(t) {
                    var e = this, n = this.$root.$mp.query, r = n.building_id, i = n.name, a = this.questions.reduce(function(t, e) {
                        if (e.select_type === _.SINGLE) e.selected && t.push(O[e.selected] || e.selected); else {
                            var n = e.selected.map(function(t) {
                                return O[t] || t;
                            });
                            t.push.apply(t, o(n));
                        }
                        return t;
                    }, []), u = {
                        content: t
                    };
                    a.length && (u.tag_list = a), this.photos_urls.length && (u.photos_urls = this.photos_urls), 
                    y.default.postBuildingComment(r, u).then(function(t) {
                        if (e.sending = !1, t) {
                            var n = getCurrentPages();
                            "pages/building/comments/main" === n[n.length - 2].route ? wx.navigateBack({
                                delta: 1
                            }) : wx.redirectTo({
                                url: "/pages/building/comments/main?building_id=".concat(r, "&name=").concat(i)
                            }), e.showCommentRedPacketActivity && e.setCommontStatus(!0);
                        }
                    });
                }
            })
        };
        e.default = w;
    },
    "4b3d": function(t, e, n) {},
    "50df": function(t, e, n) {
        n.r(e);
        var r = n("beae"), o = n("9e33");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("553d");
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, "4cafee8a", null, !1, r.a, void 0);
        e.default = u.exports;
    },
    "553d": function(t, e, n) {
        var r = n("4b3d");
        n.n(r).a;
    },
    "8fd5": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("50df")).default);
        }).call(this, n("543d").createPage);
    },
    "9e33": function(t, e, n) {
        n.r(e);
        var r = n("217f"), o = n.n(r);
        for (var i in r) [ "default" ].indexOf(i) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    beae: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            fangchanAuthUser: function() {
                return n.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(n.bind(null, "e86c"));
            }
        }, o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.questions, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    l0: t.__map(e.tags, function(n, r) {
                        return {
                            $orig: t.__get_orig(n),
                            g0: e.selected.indexOf(n)
                        };
                    })
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l1: e
                }
            });
        }, i = [];
    }
}, [ [ "8fd5", "common/runtime", "common/vendor" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consultants/card/_like_share" ], {
    2028: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "4d62": function(n, t, e) {},
    "827e": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(e("9554")), a = e("a177");
        e("80d6");
        var i = "ios" === wx.getSystemInfoSync().system.substring(0, 3).toLowerCase(), s = {
            data: function() {
                return {
                    is_consultant: !1
                };
            },
            onReady: function() {
                var n = this;
                a.App_User.is_consultant().then(function(t) {
                    n.is_consultant = t;
                });
            },
            methods: {
                showBillboard: function() {
                    this.$emit("showBillboard");
                },
                onLikeConsult: function(n) {
                    var t = this;
                    (0, o.default)(n, function() {
                        var n = !t.consultant.is_liked;
                        t.$emit("likeConsultant", n);
                    }, "需要认证用户信息才可以点赞");
                },
                showShareOption: function() {
                    this.is_consultant && this.$emit("showShareOption");
                },
                saveQr: function() {
                    var n = this;
                    wx.showLoading(), wx.getImageInfo({
                        src: this.consultant.weixin_qrcode_url,
                        success: function(t) {
                            var e = t.path;
                            return n.saveFile(e);
                        },
                        fail: this.hideLoading
                    });
                },
                saveFile: function(n) {
                    wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            wx.saveImageToPhotosAlbum({
                                filePath: n,
                                success: function(n) {
                                    wx.hideLoading(), i ? wx.showToast({
                                        icon: "success",
                                        title: "图片已保存到相册"
                                    }) : wx.showModal({
                                        title: "图片保存成功",
                                        content: "文件路径：/Tencent/MicroMsg/WeiXin/",
                                        showCancel: !1,
                                        confirmText: "我知道了"
                                    });
                                },
                                fail: wx.hideLoading
                            });
                        },
                        fail: wx.hideLoading
                    });
                }
            },
            props: {
                consultant: {
                    type: Object
                }
            }
        };
        t.default = s;
    },
    a6e5: function(n, t, e) {
        e.r(t);
        var o = e("827e"), a = e.n(o);
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = a.a;
    },
    f3c6: function(n, t, e) {
        e.r(t);
        var o = e("2028"), a = e("a6e5");
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(i);
        e("f8327");
        var s = e("f0c5"), c = Object(s.a)(a.default, o.b, o.c, !1, null, "2ed6ad43", null, !1, o.a, void 0);
        t.default = c.exports;
    },
    f8327: function(n, t, e) {
        var o = e("4d62");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/consultants/card/_like_share-create-component", {
    "pages/consultants/card/_like_share-create-component": function(n, t, e) {
        e("543d").createComponent(e("f3c6"));
    }
}, [ [ "pages/consultants/card/_like_share-create-component" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/update/main" ], {
    2278: function(t, n, e) {
        var a = e("ef89");
        e.n(a).a;
    },
    "495c": function(t, n, e) {
        e.r(n);
        var a = e("c760"), u = e("8830");
        for (var c in u) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(c);
        e("2278");
        var o = e("f0c5"), i = Object(o.a)(u.default, a.b, a.c, !1, null, "34a12c66", null, !1, a.a, void 0);
        n.default = i.exports;
    },
    78539: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("495c")).default);
        }).call(this, e("543d").createPage);
    },
    8830: function(t, n, e) {
        e.r(n);
        var a = e("f7d9"), u = e.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = u.a;
    },
    c760: function(t, n, e) {
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
    },
    ef89: function(t, n, e) {},
    f7d9: function(t, n, e) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var u = a(e("180a")), c = a(e("fc56")), o = {
            WAITING: {
                type: "waiting",
                tip: "检测新版本中..."
            },
            SUCCESS: {
                type: "success",
                tip: "当前已是最新版本"
            },
            FAILED: {
                type: "warn",
                tip: "新版本下载失败"
            },
            DOWNLOAD: {
                type: "download",
                tip: "新版本下载中..."
            },
            DOWNLOAD_SUCCESS: {
                type: "download_success",
                tip: "点击升级到最新版本"
            }
        }, i = wx.getUpdateManager(), f = {
            data: function() {
                return {
                    status: o.WAITING
                };
            },
            onLoad: function() {
                var t = this;
                (0, u.default)({
                    tip: !1,
                    checkUpdate: function(n) {
                        t.status = n ? o.DOWNLOAD : o.SUCCESS;
                    },
                    updateReady: function() {
                        t.status = o.DOWNLOAD_SUCCESS;
                    },
                    updateFail: function() {
                        t.status = o.FAILED;
                    }
                });
            },
            onShareAppMessage: function() {
                return {
                    title: "小程序更新",
                    path: "/pages/update/main"
                };
            },
            methods: {
                toUpdate: function(t) {
                    "download_success" === t && i.applyUpdate();
                }
            },
            computed: {
                cur_version: function() {
                    return c.default;
                },
                show_back: function() {
                    var t = this.status.type;
                    return "warn" === t || "success" === t;
                }
            }
        };
        n.default = f;
    }
}, [ [ "78539", "common/runtime", "common/vendor" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/fangchan-base/components/views/fangchan-message-save-img" ], {
    "19c9": function(n, e, t) {
        var a = t("4a4a");
        t.n(a).a;
    },
    "3b61": function(n, e, t) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function o(n, e, t, a, o, c, u) {
            try {
                var r = n[c](u), i = r.value;
            } catch (n) {
                return void t(n);
            }
            r.done ? e(i) : Promise.resolve(i).then(a, o);
        }
        function c(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(a, c) {
                    function u(n) {
                        o(i, a, c, u, r, "next", n);
                    }
                    function r(n) {
                        o(i, a, c, u, r, "throw", n);
                    }
                    var i = n.apply(e, t);
                    u(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = a(t("a34a")), r = a(t("80d6")), i = {
            data: function() {
                return {
                    photo_url: "",
                    subject: "",
                    saving: !1
                };
            },
            mounted: function() {
                var n = this.$root.$mp.query, e = n.img, t = n.subject;
                this.photo_url = decodeURIComponent(e), this.subject = decodeURIComponent(t) || "图片";
            },
            methods: {
                saveImg: function() {
                    var n = this;
                    return c(u.default.mark(function e() {
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!n.saving) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                n.saving = !0, n.$sendCtmEvtLog("消息通知-点击下载-".concat(n.subject)), r.default.saveImgFromInternet({
                                    url: n.photo_url
                                }).then(function(e) {
                                    n.finishSave();
                                }).catch(function() {
                                    n.finishSave();
                                });

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                finishSave: function() {
                    this.saving = !1, setTimeout(wx.hideLoading, 1500);
                }
            }
        };
        e.default = i;
    },
    "4a4a": function(n, e, t) {},
    a3f4: function(n, e, t) {
        t.r(e);
        var a = t("fb7a"), o = t("f19a");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("19c9");
        var u = t("f0c5"), r = Object(u.a)(o.default, a.b, a.c, !1, null, "e0c08d24", null, !1, a.a, void 0);
        e.default = r.exports;
    },
    f19a: function(n, e, t) {
        t.r(e);
        var a = t("3b61"), o = t.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = o.a;
    },
    fb7a: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/fangchan-base/components/views/fangchan-message-save-img-create-component", {
    "node-modules/fangchan-base/components/views/fangchan-message-save-img-create-component": function(n, e, t) {
        t("543d").createComponent(t("a3f4"));
    }
}, [ [ "node-modules/fangchan-base/components/views/fangchan-message-save-img-create-component" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "node-modules/fangchan-base/components/views/fangchan-auth-user" ], {
    "583f": function(e, n, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, n, t, r, a, u, o) {
            try {
                var c = e[u](o), s = c.value;
            } catch (e) {
                return void t(e);
            }
            c.done ? n(s) : Promise.resolve(s).then(r, a);
        }
        function u(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, u) {
                    function o(e) {
                        a(s, r, u, o, c, "next", e);
                    }
                    function c(e) {
                        a(s, r, u, o, c, "throw", e);
                    }
                    var s = e.apply(n, t);
                    o(void 0);
                });
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = r(t("a34a")), c = r(t("8e44")), s = t("a177"), f = "function" == typeof wx.getUserProfile, i = function() {
            var e = u(o.default.mark(function e(n) {
                return o.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return console.log(n), wx.showLoading(), e.next = 4, c.default.updateWxUserInfo(n);

                      case 4:
                        wx.hideLoading();

                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }));
            return function(n) {
                return e.apply(this, arguments);
            };
        }(), l = {
            props: {
                classname: String,
                disabled: Boolean,
                "force-auth": Boolean,
                "fail-tip": String
            },
            data: function() {
                return {
                    canIUseGetUserProfile: f
                };
            },
            methods: {
                runSuccess: function() {
                    this.$emit("success");
                },
                getUserProfile: function() {
                    var e = this;
                    return u(o.default.mark(function n() {
                        var t;
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, s.App_User.isAuthed();

                              case 2:
                                if (!(t = n.sent)) {
                                    n.next = 6;
                                    break;
                                }
                                return e.runSuccess(), n.abrupt("return");

                              case 6:
                                wx.getUserProfile({
                                    desc: "用于完善用户资料",
                                    success: function() {
                                        var n = u(o.default.mark(function n(t) {
                                            return o.default.wrap(function(n) {
                                                for (;;) switch (n.prev = n.next) {
                                                  case 0:
                                                    return n.next = 2, i(t);

                                                  case 2:
                                                    e.runSuccess();

                                                  case 3:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments);
                                        };
                                    }(),
                                    fail: function(n) {
                                        console.error(n, e.forceAuth, e), e.forceAuth ? e.showFailTip() : e.runSuccess();
                                    }
                                });

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                showFailTip: function() {
                    wx.showModal({
                        title: "提示",
                        content: this.failTip,
                        showCancel: !1
                    });
                },
                getUserInfo: function(e) {
                    var n = this;
                    return u(o.default.mark(function t() {
                        var r, a;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, s.App_User.isAuthed();

                              case 2:
                                if (!(r = t.sent)) {
                                    t.next = 6;
                                    break;
                                }
                                return n.runSuccess(), t.abrupt("return");

                              case 6:
                                if (!(a = e.detail.userInfo)) {
                                    t.next = 12;
                                    break;
                                }
                                return t.next = 10, i(e.detail);

                              case 10:
                                return n.runSuccess(), t.abrupt("return");

                              case 12:
                                n.forceAuth ? n.showFailTip() : n.runSuccess();

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        n.default = l;
    },
    a551: function(e, n, t) {
        t.r(n);
        var r = t("583f"), a = t.n(r);
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n.default = a.a;
    },
    e86c: function(e, n, t) {
        t.r(n);
        var r = t("fe2e"), a = t("a551");
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        var o = t("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        n.default = c.exports;
    },
    fe2e: function(e, n, t) {
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "node-modules/fangchan-base/components/views/fangchan-auth-user-create-component", {
    "node-modules/fangchan-base/components/views/fangchan-auth-user-create-component": function(e, n, t) {
        t("543d").createComponent(t("e86c"));
    }
}, [ [ "node-modules/fangchan-base/components/views/fangchan-auth-user-create-component" ] ] ]);
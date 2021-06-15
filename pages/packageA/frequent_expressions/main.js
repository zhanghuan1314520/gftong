require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/frequent_expressions/main" ], {
    "12b1": function(e, t, n) {
        n.r(t);
        var a = n("4fa8"), o = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    "3ab2": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("a142")).default);
        }).call(this, n("543d").createPage);
    },
    "4fa8": function(e, t, n) {
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(n), !0).forEach(function(t) {
                    i(e, t, n[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
            }
            return e;
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("acbe")), c = function(e, t) {
            return e ? 0 === t ? "立即" : "".concat(t, "秒") : "";
        }, u = {
            components: {},
            data: function() {
                return {
                    items: [],
                    show_dlg: !1,
                    content: "",
                    delay_seconds: [],
                    delay_index: -1
                };
            },
            onLoad: function() {
                this.getData();
            },
            computed: {
                delay_seconds_options: function() {
                    return this.delay_seconds.map(function(e) {
                        return e ? "".concat(e, "秒") : "立即";
                    });
                }
            },
            methods: {
                toggleDelayChecked: function(e) {
                    this.delay_index > -1 && this.$set(this.items, this.delay_index, o(o({}, this.items[this.delay_index]), {}, {
                        autoreply_delay_checked: !1,
                        autoreply_delay_checked_index: -1,
                        autoreply_delay_text: ""
                    })), this.delay_index = e;
                    var t = this.items[e], n = !t.autoreply_delay_checked, a = this.delay_seconds[0];
                    this.$set(this.items, e, o(o({}, t), {}, {
                        autoreply_delay: a,
                        autoreply_delay_checked: n,
                        autoreply_delay_checked_index: 0,
                        autoreply_delay_text: c(n, a)
                    }));
                },
                changeDelay: function(e) {
                    var t = e.detail.value, n = e.target.dataset.index, a = this.items[n], i = this.delay_seconds[t], u = o(o({}, a), {}, {
                        autoreply_delay: i,
                        autoreply_delay_checked_index: t,
                        autoreply_delay_text: c(!0, i)
                    });
                    this.$set(this.items, n, u), r.default.updateExpression(a.id, u).then(function() {
                        wx.showToast({
                            title: "修改成功"
                        });
                    });
                },
                getData: function() {
                    var e = this;
                    r.default.getExpressions().then(function(t) {
                        e.delay_seconds = t.delay_seconds, e.items = t.items.map(function(t, n) {
                            var a = t.autoreply_delay, i = null != a;
                            return i && (e.delay_index = n), o(o({}, t), {}, {
                                autoreply_delay_checked: i,
                                autoreply_delay_checked_index: e.delay_seconds.indexOf(a),
                                autoreply_delay_text: c(i, a)
                            });
                        });
                    });
                },
                onDelete: function(e, t) {
                    r.default.deleteExpression(e), this.items.splice(t, 1);
                },
                toggleDlg: function() {
                    this.show_dlg = !this.show_dlg;
                },
                onCreate: function() {
                    var e = this;
                    this.items.some(function(t) {
                        return t.content === e.content;
                    }) ? wx.showToast({
                        title: "该条信息已存在，您无需新建",
                        icon: "none"
                    }) : r.default.createExpression(this.content).then(function() {
                        e.getData(), e.toggleDlg(), e.content = "";
                    });
                },
                changeContent: function(e) {
                    this.content = e.mp.detail.value.trim();
                }
            }
        };
        t.default = u;
    },
    "8e28": function(e, t, n) {
        var a = n("b67e");
        n.n(a).a;
    },
    a142: function(e, t, n) {
        n.r(t);
        var a = n("a2ce"), o = n("12b1");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("8e28");
        var r = n("f0c5"), c = Object(r.a)(o.default, a.b, a.c, !1, null, "5a645bb0", null, !1, a.a, void 0);
        t.default = c.exports;
    },
    a2ce: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    b67e: function(e, t, n) {}
}, [ [ "3ab2", "common/runtime", "common/vendor" ] ] ]);
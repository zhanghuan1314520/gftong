var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/building/_footer" ], {
    2026: function(t, e, n) {
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
    "42e9": function(e, n, o) {
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : t(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
            })(e);
        }
        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i() {
            if ("function" != typeof WeakMap) return null;
            var t = new WeakMap();
            return i = function() {
                return t;
            }, t;
        }
        function c(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(n), !0).forEach(function(e) {
                    a(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var l = o("2f62"), f = function(t) {
            if (t && t.__esModule) return t;
            if (null === t || "object" !== r(t) && "function" != typeof t) return {
                default: t
            };
            var e = i();
            if (e && e.has(t)) return e.get(t);
            var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in t) if (Object.prototype.hasOwnProperty.call(t, u)) {
                var c = o ? Object.getOwnPropertyDescriptor(t, u) : null;
                c && (c.get || c.set) ? Object.defineProperty(n, u, c) : n[u] = t[u];
            }
            return n.default = t, e && e.set(t, n), n;
        }(o("9554")), d = u(o("8735")), p = u(o("d973")), h = u(o("f9d4")), b = {
            mixins: [ p.default, h.default, d.default ],
            computed: s(s({}, (0, l.mapState)([ "wxArticle" ])), {}, {
                right_btn_count: function() {
                    var t = 1;
                    return (this.show_rs || this.show_reg) && t++, this.show_call && t++, t;
                },
                show_rs: function() {
                    return "lfd_completed" === this.current_house.lfd_status;
                },
                show_reg: function() {
                    return !this.show_rs && "lrd_completed" === this.current_house.lrd_status;
                },
                show_call: function() {
                    return this.house.has_telephone;
                },
                show_icon: function() {
                    var t = this;
                    return [ "show_call", "show_reg", "show_rs" ].filter(function(e) {
                        return t[e];
                    }).length + 1 < 3;
                },
                comment_count: function() {
                    return this.house.comment_count || 0;
                }
            }),
            methods: {
                clickGroup: function() {
                    this.$sendCtmEvtLog("楼盘详情页footer加群点击");
                },
                goAllComments: function(t) {
                    this.$emit("goComments");
                },
                addComment: function(t) {
                    var e = this;
                    (0, f.askAuth)(t, function() {
                        var t = e.$root.$mp.query.building_id;
                        e.goAddComment(t).then(function(t) {
                            t && e.$emit("goAdd");
                        });
                    });
                },
                goConsultantList: function(t) {
                    var e = t.currentTarget.dataset.count, n = this.wxArticle[2].url, o = this.wxArticle[2].title, r = this.wxArticle[2].share;
                    0 !== Number(e) ? this.goConsultant() : wx.navigateTo({
                        url: "/pages/web_page/main?link=".concat(encodeURIComponent(n), "&title=").concat(o, "&shareShow=").concat(r)
                    });
                },
                goConsultantByUser: function(t) {
                    var e = this;
                    (0, f.default)(t, function() {
                        e.goConsultantList(t);
                    }, "需要认证用户信息才可以查看置业顾问");
                },
                goReg: function() {
                    var t = this.current_house, e = t.lfd_status, n = t.lrd_status;
                    wx.navigateTo({
                        url: "/pages/result/main?house_id=".concat(this.current_house.id, "&building_id=").concat(this.house.id, "&name=").concat(this.house.name, "&type=reg&lfd_status=").concat(e, "&lrd_status=").concat(n)
                    });
                },
                goResult: function() {
                    var t = this.current_house, e = t.lfd_status, n = t.lrd_status;
                    wx.navigateTo({
                        url: "/pages/result/main?house_id=".concat(this.current_house.id, "&building_id=").concat(this.house.id, "&name=").concat(this.house.name, "&type=result&lfd_status=").concat(e, "&lrd_status=").concat(n)
                    });
                }
            },
            props: {
                house: {
                    type: Object
                },
                current_house: {
                    type: Object
                },
                is_selling: {
                    type: Boolean
                },
                is_building: {
                    type: Boolean
                },
                from: {
                    type: String,
                    default: ""
                }
            },
            components: {
                ButtonTip: function() {
                    o.e("components/building/_button_tip").then(function() {
                        return resolve(o("71ad"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        n.default = b;
    },
    "801a": function(t, e, n) {
        n.r(e);
        var o = n("2026"), r = n("bf42");
        for (var u in r) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("ddfe");
        var i = n("f0c5"), c = Object(i.a)(r.default, o.b, o.c, !1, null, "2ac8f0b8", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "87b9": function(t, e, n) {},
    bf42: function(t, e, n) {
        n.r(e);
        var o = n("42e9"), r = n.n(o);
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = r.a;
    },
    ddfe: function(t, e, n) {
        var o = n("87b9");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/building/_footer-create-component", {
    "components/building/_footer-create-component": function(t, e, n) {
        n("543d").createComponent(n("801a"));
    }
}, [ [ "components/building/_footer-create-component" ] ] ]);
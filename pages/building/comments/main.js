require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/main" ], {
    "32a5": function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            return s(t) || a(t) || u(t) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function u(t, e) {
            if (t) {
                if ("string" == typeof t) return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
            }
        }
        function a(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
        }
        function s(t) {
            if (Array.isArray(t)) return c(t);
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i;
        }
        function l(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, i);
            }
            return n;
        }
        function d(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(n), !0).forEach(function(e) {
                    m(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function m(t, e, n) {
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
        var f = n("2f62"), h = i(n("8e44")), p = i(n("d1fa")), g = (i(n("80d6")), n("63ae")), b = i(n("8735")), _ = i(n("327a")), v = i(n("41f4")), y = i(n("042e")), w = {
            mixins: [ b.default, p.default, _.default, y.default ],
            data: function() {
                return {
                    per: 20,
                    reply_item: {},
                    reply_user: {},
                    name: "",
                    show_input_dlg: !1,
                    house: {
                        photos_urls: []
                    },
                    house_loading: !0,
                    building_id: "",
                    is_consultant: !0,
                    show_detail: !1,
                    tag: "全部评论",
                    tags: [],
                    order_type: ""
                };
            },
            onLoad: function(t) {
                var e = this.$root.$mp.query, n = e.name, i = e.building_id;
                this.name = n || "", this.building_id = i, this.getData(), this.getHouseData(), 
                wx.setNavigationBarTitle({
                    title: "".concat("杭州购房通", "-").concat(n, "-全部评论")
                });
            },
            onUnload: function() {
                this.hideSuccess();
            },
            computed: d(d({}, (0, f.mapState)([ "commontSuccess", "showCommentRedPacketActivity", "commentRedPacketActivity" ])), {}, {
                show_empty: function() {
                    return 0 === this.items.length && !this.loading;
                }
            }),
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query.building_id, e = this.house.name;
                return this.getShareInfo({
                    title: "别人怎么评论【".concat(e, "】的，点击查看~"),
                    path: this.getSharePath("/pages/building/comments/main?building_id=".concat(t, "&name=").concat(e))
                });
            },
            methods: d(d({}, (0, f.mapActions)([ "setCommontStatus" ])), {}, {
                changeOrder: function(t) {
                    this.order_type = t, this.page = 1, this.getData();
                },
                hideSuccess: function() {
                    this.setCommontStatus(!1);
                },
                onChangeTag: function(t) {
                    this.tag = t, this.page = 1, this.getData();
                },
                getData: function() {
                    var t = this, e = this.page, n = this.tag, i = this.$root.$mp.query, r = i.building_id, u = i.from_message_id;
                    this.loading = !0;
                    var a = {
                        from_message_id: u || "",
                        page: e,
                        per: this.per,
                        tag: "全部评论" === n ? "" : n
                    };
                    this.order_type && (a.order_type = this.order_type), h.default.getBuildingComments(r, a).then(function(e) {
                        t.handleData(e), t.tags.length || (t.tags = [ {
                            name: "全部评论",
                            comment_count: e.comment_count
                        } ].concat(o(e.tags)));
                    }), this.getUser();
                },
                getHouseData: function() {
                    var t = this, e = this.$root.$mp.query, n = e.building_id, i = e.from_message_id;
                    h.default.getBuilding(n, i).then(function(e) {
                        e.favourite = e.follow_info && e.follow_info.id, e.cover_photo_url = e.photos_urls && e.photos_urls.length ? e.photos_urls[0] : "", 
                        e.price_desc = "", e.surplus_houses_price = "", t.house = (0, g.mapHouseItem)(e), 
                        t.name = t.house.name, t.house.href = "/pages/building/main?building_id=".concat(e.building_id), 
                        console.error(t.house), t.house_loading = !1;
                    });
                },
                getUser: function() {
                    var t = this;
                    this.$root.$mp.query.building_id, v.default.user.get().then(function(e) {
                        t.is_consultant = e.is_consultant;
                    });
                },
                openComment: function() {
                    var t = this, e = this.$root.$mp.query.building_id;
                    this.goAddComment(e).then(function(n) {
                        n && wx.navigateTo({
                            url: "/pages/building/comments/add/main?building_id=".concat(e, "&name=").concat(t.name)
                        });
                    });
                },
                showInputDlg: function(t, e) {
                    console.error(t, e), this.show_input_dlg = !0, this.reply_item = "number" == typeof t ? this.items[t] : {}, 
                    this.reply_user = "number" == typeof e ? this.reply_item.reply_comments.items[e] : {};
                },
                hideInputDlg: function() {
                    this.show_input_dlg = !1;
                },
                changeComment: function(t, e) {
                    var n = this, i = this.items[e];
                    t.id === i.id ? this.$set(this.items, e, t) : this.items.some(function(e, i) {
                        if (e.id === t.id) return n.$set(n.items, i, t), !0;
                    });
                },
                changeComments: function(t, e) {
                    var n = this.items;
                    this.hideInputDlg(), e ? (n.some(function(n, i) {
                        if (n.id === e) {
                            var o = n.reply_comments;
                            return o.total_count += 1, o.items.unshift(t), !0;
                        }
                    }), this.items = n) : (this.content = "", t.reply_comments = {
                        total_count: 0,
                        items: []
                    }, n.unshift(t), this.items = n, wx.pageScrollTo && wx.pageScrollTo({
                        scrollTop: 0,
                        duration: 1500
                    }));
                },
                changeFavourite: function(t) {
                    this.house.favourite = t, this.getHouseData();
                },
                addComment: function(t, e) {
                    var n = this, i = this.$root.$mp.query.building_id, o = this.items[t], r = o ? o.id : "";
                    "number" == typeof e && (r = o.reply_comments.items[e].id), this.goAddComment(i, r).then(function(i) {
                        i && n.showInputDlg(t, e);
                    });
                },
                goWeb: function() {
                    this.hideSuccess();
                    var t = "/pages/web_page/main?link=".concat(encodeURIComponent("http://mp.weixin.qq.com/s?__biz=MzI2MDk0NTA0Mw==&mid=100006588&idx=1&sn=5af87a50b83d6014b18af707e63cddee&chksm=6a60bf405d173656e344affdb8f9ca0b073104d04562f53b87b3161d2da32a58bbf4816909ac#rd"), "&title=").concat(encodeURIComponent("杭州购房通"), "&shareShow=off");
                    wx.navigateTo({
                        url: t
                    });
                }
            }),
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                },
                EmptyTip: function() {
                    n.e("components/views/empty_tip").then(function() {
                        return resolve(n("e430"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommentHeader: function() {
                    n.e("pages/building/comments/_header").then(function() {
                        return resolve(n("fced"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommentItem: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/common/vendor"), n.e("pages/building/comments/_item") ]).then(function() {
                        return resolve(n("c03b"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommentFooter: function() {
                    Promise.all([ n.e("common/vendor"), n.e("pages/building/comments/_footer") ]).then(function() {
                        return resolve(n("ebc8"));
                    }.bind(null, n)).catch(n.oe);
                },
                InputDlg: function() {
                    n.e("pages/building/comments/_input_dlg").then(function() {
                        return resolve(n("3873"));
                    }.bind(null, n)).catch(n.oe);
                },
                BuildingItem: function() {
                    n.e("components/business/whole_building_item").then(function() {
                        return resolve(n("51f3"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommentTip: function() {
                    n.e("components/business/comment_tip").then(function() {
                        return resolve(n("fe82"));
                    }.bind(null, n)).catch(n.oe);
                },
                CommentRedPacketActivity: function() {
                    n.e("pages/building/comments/_red_packet_activity").then(function() {
                        return resolve(n("6ffc"));
                    }.bind(null, n)).catch(n.oe);
                },
                DisclaimerTip: function() {
                    n.e("pages/building/event/_tip").then(function() {
                        return resolve(n("67b9"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = w;
    },
    "3b19": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("5cf1")).default);
        }).call(this, n("543d").createPage);
    },
    "513c": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "5cf1": function(t, e, n) {
        n.r(e);
        var i = n("513c"), o = n("c241");
        for (var r in o) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("6dd1");
        var u = n("f0c5"), a = Object(u.a)(o.default, i.b, i.c, !1, null, "0f1aff8a", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    "6dd1": function(t, e, n) {
        var i = n("ed82");
        n.n(i).a;
    },
    c241: function(t, e, n) {
        n.r(e);
        var i = n("32a5"), o = n.n(i);
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    ed82: function(t, e, n) {}
}, [ [ "3b19", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
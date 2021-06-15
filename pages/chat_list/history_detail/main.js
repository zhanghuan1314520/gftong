require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/history_detail/main" ], {
    "4f6d": function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "7b0c": function(t, e, n) {
        n.r(e);
        var a = n("4f6d"), i = n("abbb");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("9022");
        var c = n("f0c5"), r = Object(c.a)(i.default, a.b, a.c, !1, null, "0eeddab8", null, !1, a.a, void 0);
        e.default = r.exports;
    },
    "7d8c": function(t, e, n) {},
    9022: function(t, e, n) {
        var a = n("7d8c");
        n.n(a).a;
    },
    abbb: function(t, e, n) {
        n.r(e);
        var a = n("e038"), i = n.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = i.a;
    },
    bc90: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("7b0c")).default);
        }).call(this, n("543d").createPage);
    },
    e038: function(t, e, n) {
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = n("07d2"), o = a(n("acbe")), c = a(n("327a")), r = a(n("80d6")), u = {
            mixins: [ c.default ],
            onLoad: function() {
                this.no_reach_bottom = !0, this.getData();
            },
            methods: {
                copyContent: function(t) {
                    r.default.setClipboardData(t.currentTarget.dataset.content);
                },
                previewImg: function(t) {
                    var e = t.currentTarget.dataset.img.replace(/132$/, 0);
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                },
                getMore: function() {
                    this.loading || this.no_more || (this.page++, this.getData());
                },
                getData: function() {
                    var t = this, e = this.$root.$mp.query.id;
                    this.loading = !0, o.default.getHistoryChat(e, this.page).then(function(e) {
                        e.items.forEach(function(t) {
                            t.msg_ext && !t.msg_ext.headimg && (t.msg_ext.headimg = i.DEFAULT_HEADIMG), t.msg_ext && "sys_tips" === t.msg_ext.msgStyle && (t.msg_ext.headimg = "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/personal_center/notice/cdfx_register.png", 
                            t.msg_ext.nickName = "系统消息");
                        }), t.handleData(e), t.items = t.items.sort(function(t, e) {
                            return new Date(t.created_time).getTime() - new Date(e.created_time).getTime();
                        });
                    });
                }
            },
            components: {
                Loading: function() {
                    n.e("components/views/loading").then(function() {
                        return resolve(n("7756"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = u;
    }
}, [ [ "bc90", "common/runtime", "common/vendor" ] ] ]);
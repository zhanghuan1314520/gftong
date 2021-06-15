require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/_item" ], {
    b11f: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = i(n("8e44")), c = i(n("9554")), l = n("aad7"), s = n("371c"), a = n("cbd7"), r = wx.getSystemInfoSync().windowWidth / 750, u = 40 * r, m = 38 * r, d = {
            components: {
                WxUsername: function() {
                    n.e("pages/building/comments/_wx_username").then(function() {
                        return resolve(n("2f02"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    liking: !1,
                    show_all_reply: !1,
                    show_comment_fold: !1,
                    is_fold_comment: !1,
                    show_reply: []
                };
            },
            computed: {
                like_count: function() {
                    var e = this.comment, t = e.is_liked, n = e.like_count;
                    return (0, l.getLikeCount)(t, n);
                }
            },
            created: function() {
                var e = this;
                this.$watch(function() {
                    return {
                        items: e.comment && e.comment.reply_comments && e.comment.reply_comments.items ? e.comment.reply_comments.items : [],
                        show_all_reply: e.show_all_reply
                    };
                }, function(t) {
                    var n = t.items, i = [];
                    (i = t.show_all_reply ? n.slice(0) : n.slice(0, 3)).forEach(function(e) {
                        e.is_fold_reply = !1, e.show_reply_fold = !1;
                    }), e.show_reply = i;
                }, {
                    immediate: !0
                });
            },
            mounted: function() {
                this.getCommentHeight(), this.getReplyHeight();
            },
            methods: {
                getCommentHeight: function() {
                    var e = this;
                    this.getElementHeight(".content").then(function(t) {
                        if (t.list[0].height) {
                            var n = t.list[0].height;
                            e.is_fold_comment = n > 3 * u, e.show_comment_fold = e.is_fold_comment;
                        }
                    });
                },
                getReplyHeight: function(e) {
                    var t = this;
                    this.getElementHeight(".reply-content").then(function(e) {
                        e.list && e.list.length && e.list.forEach(function(e, n) {
                            e.height > 3 * m && (t.show_reply[n].is_fold_reply = !0, t.show_reply[n].show_reply_fold = !0);
                        });
                    });
                },
                toogleComment: function() {
                    this.is_fold_comment = !this.is_fold_comment;
                },
                toogleReply: function(e) {
                    this.show_reply[e].is_fold_reply = !this.show_reply[e].is_fold_reply;
                },
                getElementHeight: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        t.$mp.component.createSelectorQuery().selectAll(e).fields({
                            size: !0
                        }).exec(function(e) {
                            n({
                                list: e[0] ? e[0] : null
                            });
                        });
                    });
                },
                goDetail: function() {
                    var e = this.$root.$mp.query, t = e.name, n = e.building_id;
                    wx.navigateTo({
                        url: "/pages/building/comments/detail/main?building_id=".concat(n, "&id=").concat(this.comment.id, "&name=").concat(t || "")
                    });
                },
                openBigV: function(e) {
                    var t = e.currentTarget.dataset.waid;
                    t && wx.navigateTo({
                        url: "/pages/packageB/bigV/main?id=".concat(t)
                    });
                },
                onConsult: function(e) {
                    var t = this.$root.$mp.query.building_id;
                    (0, s.sendCtmEvtLog)("咨询点击-置业顾问评论", {
                        consultant_id: e
                    }), (0, a.openChat)(e, {
                        from: "评论区",
                        building_id: t
                    });
                },
                replyUser: function(e) {
                    var t = this, n = e.currentTarget.dataset.index;
                    if (this.is_building_page) return this.goDetail();
                    (0, c.default)(e, function() {
                        t.$emit("addComment", t.index, n);
                    }, "需要授权用户信息才可以进行回复");
                },
                onLike: function(e) {
                    var t = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var n = e.currentTarget.dataset.id, i = this.comment, c = "likeComment";
                        i.is_liked && (c = "delLikedComment"), o.default[c](n).then(function() {
                            t.changeLike(!i.is_liked);
                        });
                    }
                },
                changeLike: function(e) {
                    var t = this.comment;
                    t.is_liked = e, t.like_count = e ? t.like_count + 1 : t.like_count - 1, this.liking = !1, 
                    this.$emit("changeComment", t, this.index);
                },
                goReply: function(e) {
                    var t = this;
                    if (this.is_building_page) return this.goDetail();
                    (0, c.default)(e, function() {
                        t.$emit("addComment", t.index);
                    }, "需要授权用户信息才可以进行回复");
                },
                stopClick: function() {},
                previewImg: function(e) {
                    var t = this.comment.photos_urls, n = t[0];
                    wx.previewImage({
                        current: n,
                        urls: t
                    });
                }
            },
            props: {
                index: {
                    type: Number
                },
                comment: {
                    type: Object
                },
                is_building_page: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        t.default = d;
    },
    c03b: function(e, t, n) {
        n.r(t);
        var i = n("e79c"), o = n("ea99");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        var l = n("f0c5"), s = Object(l.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = s.exports;
    },
    e79c: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            fangchanAuthUser: function() {
                return n.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(n.bind(null, "e86c"));
            }
        }, o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    },
    ea99: function(e, t, n) {
        n.r(t);
        var i = n("b11f"), o = n.n(i);
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        t.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/comments/_item-create-component", {
    "pages/building/comments/_item-create-component": function(e, t, n) {
        n("543d").createComponent(n("c03b"));
    }
}, [ [ "pages/building/comments/_item-create-component" ] ] ]);
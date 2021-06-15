require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/comments/detail/main" ], {
    "0a61": function(t, n, e) {
        e.r(n);
        var i = e("4953"), o = e("c331");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        e("0eba");
        var a = e("f0c5"), c = Object(a.a)(o.default, i.b, i.c, !1, null, "1157a14e", null, !1, i.a, void 0);
        n.default = c.exports;
    },
    "0eba": function(t, n, e) {
        var i = e("dfbb");
        e.n(i).a;
    },
    4337: function(t, n, e) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = i(e("8e44")), u = i(e("d1fa")), a = i(e("9554")), c = i(e("8735")), r = i(e("327a")), l = e("aad7"), s = {
            mixins: [ r.default, c.default, u.default ],
            name: "CommentDetail",
            data: function() {
                return {
                    per: 20,
                    title: "",
                    comment: {
                        is_liked: !1,
                        like_count: 0
                    },
                    reply_total_count: 0,
                    reply_user: {},
                    show_reply: !1
                };
            },
            computed: {
                like_count: function() {
                    var t = this.comment, n = t.is_liked, e = t.like_count;
                    return (0, l.getLikeCount)(n, e);
                }
            },
            onLoad: function() {
                var t = this.$root.$mp.query, n = t.name;
                t.id, this.title = n, this.getComment();
            },
            onPullDownRefresh: function() {
                this.getComment();
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query, n = t.building_id, e = t.name;
                return t.id, this.getShareInfo({
                    title: "".concat(e, "-评论"),
                    path: this.getSharePath("/pages/building/comments/main?building_id=".concat(n, "&name=").concat(e))
                });
            },
            methods: {
                stopClick: function() {},
                getComment: function() {
                    var t = this, n = this.$root.$mp.query, e = n.building_id, i = n.id;
                    o.default.getBuildingCommentDetail(e, i).then(function(n) {
                        t.comment = n, t.getData(), wx.stopPullDownRefresh();
                    });
                },
                getData: function() {
                    var t = this;
                    this.loading = !0;
                    var n = this.$root.$mp.query.id;
                    o.default.getCommentsReply(n, {
                        page: this.page,
                        per: this.per
                    }).then(function(n) {
                        t.handleData(n), t.reply_total_count = n.total_count;
                    });
                },
                onLike: function(t) {
                    var n = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var e = t.currentTarget.dataset.id, i = this.comment, u = "likeComment";
                        i.is_liked && (u = "delLikedComment"), o.default[u](e).then(function() {
                            n.changeLike(!i.is_liked);
                        });
                    }
                },
                changeLike: function(t) {
                    var n = this.comment;
                    this.comment.is_liked = t, this.comment.like_count = t ? n.like_count + 1 : n.like_count - 1, 
                    this.liking = !1;
                },
                goReply: function(t) {
                    var n = this;
                    (0, a.default)(t, function() {
                        var e = t.currentTarget.dataset.index;
                        n.goComment(e);
                    }, "需要授权用户信息才可以进行回复");
                },
                goComment: function(t) {
                    var n = this, e = this.$root.$mp.query.building_id, i = this.comment.id;
                    "number" == typeof t && (i = this.items[t].id), this.goAddComment(e, i).then(function(e) {
                        e && n.showReply(t);
                    });
                },
                showReply: function(t) {
                    this.show_reply = !0, this.reply_user = "number" == typeof t ? this.items[t] : {};
                },
                hideReply: function() {
                    this.show_reply = !1;
                },
                onConsult: function(t) {
                    var n = t.currentTarget.dataset, e = n.id, i = n.waid;
                    i ? wx.navigateTo({
                        url: "/pages/packageB/bigV/main?id=".concat(i)
                    }) : e && wx.navigateTo({
                        url: "/pages/consultants/card/main?id=".concat(e)
                    });
                },
                changeComment: function(t) {
                    this.comment, this.items.unshift(t), this.reply_total_count += 1, this.hideReply();
                },
                previewImg: function(t) {
                    var n = this.comment.photos_urls, e = n[0];
                    wx.previewImage({
                        current: e,
                        urls: n
                    });
                }
            },
            components: {
                Loading: function() {
                    e.e("components/views/loading").then(function() {
                        return resolve(e("7756"));
                    }.bind(null, e)).catch(e.oe);
                },
                InputDlg: function() {
                    e.e("pages/building/comments/_input_dlg").then(function() {
                        return resolve(e("3873"));
                    }.bind(null, e)).catch(e.oe);
                },
                WxUsername: function() {
                    e.e("pages/building/comments/_wx_username").then(function() {
                        return resolve(e("2f02"));
                    }.bind(null, e)).catch(e.oe);
                },
                CommentFooter: function() {
                    e.e("pages/building/comments/detail/_footer").then(function() {
                        return resolve(e("430a"));
                    }.bind(null, e)).catch(e.oe);
                },
                CommentTip: function() {
                    e.e("components/business/comment_tip").then(function() {
                        return resolve(e("fe82"));
                    }.bind(null, e)).catch(e.oe);
                }
            }
        };
        n.default = s;
    },
    4953: function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    4973: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("6cdc"), n(e("66fd")), t(n(e("0a61")).default);
        }).call(this, e("543d").createPage);
    },
    c331: function(t, n, e) {
        e.r(n);
        var i = e("4337"), o = e.n(i);
        for (var u in i) [ "default" ].indexOf(u) < 0 && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(u);
        n.default = o.a;
    },
    dfbb: function(t, n, e) {}
}, [ [ "4973", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
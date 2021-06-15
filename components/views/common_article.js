(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/views/common_article" ], {
    "337b": function(e, t, n) {
        n.r(t);
        var i = n("8669"), c = n("b626");
        for (var o in c) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        n("5f78");
        var a = n("f0c5"), r = Object(a.a)(c.default, i.b, i.c, !1, null, "31423fc0", null, !1, i.a, void 0);
        t.default = r.exports;
    },
    "5f78": function(e, t, n) {
        var i = n("e4fa");
        n.n(i).a;
    },
    8669: function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
    },
    b626: function(e, t, n) {
        n.r(t);
        var i = n("ccbf"), c = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = c.a;
    },
    ccbf: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("371c"), c = {
            data: function() {
                return {
                    liking: !1
                };
            },
            computed: {
                auth_headimg: function() {
                    var e = this.item.author.headimgurl;
                    return e ? "".concat(e, "?x-oss-process=image/resize,w_48,h_48") : "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/house-detail/tabs/weixin-active.png";
                }
            },
            methods: {
                goDetail: function(e) {
                    var t = this.item, n = t.content_body, c = t.content_type, o = t.id, a = this.item.content_body, r = a.article_url, l = a.title;
                    i.UserLog.click_feeds_article(o), "weixin_article" === c ? i.UserLog.click_article(this.type, n.id) : "weixin_articles" === this.type && i.UserLog.click_article(this.type, o), 
                    this.type ? wx.navigateTo({
                        url: "/pages/packageA/web_article/main?id=".concat(o, "&title=").concat(encodeURIComponent(l), "&type=").concat(this.type)
                    }) : wx.navigateTo({
                        url: "/pages/web_page/main?link=".concat(encodeURIComponent(r), "&title=").concat(encodeURIComponent(l), "&from=weixin_article")
                    });
                },
                onLike: function() {
                    var e = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var t = !this.item.is_liked;
                        this.$emit("like", this.item.id, t, function() {
                            e.item.is_liked = t, t ? e.item.like_count++ : e.item.like_count--, e.liking = !1;
                        });
                    }
                }
            },
            components: {},
            props: {
                type: {
                    type: String,
                    default: ""
                },
                item: {
                    type: Object
                }
            }
        };
        t.default = c;
    },
    e4fa: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/views/common_article-create-component", {
    "components/views/common_article-create-component": function(e, t, n) {
        n("543d").createComponent(n("337b"));
    }
}, [ [ "components/views/common_article-create-component" ] ] ]);
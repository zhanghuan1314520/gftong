(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/top_search/host_list" ], {
    "305a": function(e, t, n) {
        n.r(t);
        var a = n("b1c5"), i = n("e60c");
        for (var c in i) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        n("6cd7");
        var o = n("f0c5"), l = Object(o.a)(i.default, a.b, a.c, !1, null, "0f5bf110", null, !1, a.a, void 0);
        t.default = l.exports;
    },
    "6cd7": function(e, t, n) {
        var a = n("c559");
        n.n(a).a;
    },
    "7af1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = n("371c"), i = {
            computed: {
                result: function() {
                    return this.items.slice(0, this.max_length);
                }
            },
            methods: {
                goDetail: function(e, t) {
                    var n = "";
                    (0, a.sendCtmEvtLog)("".concat(this.source, "-热搜榜top").concat(t + 1)), "Fc::Building" !== e.viewable_type && a.UserLog.click_article("weixin_articles", e.viewable_id), 
                    n = e.jump_path ? e.jump_path : n = "Fc::Building" === e.viewable_type ? "/pages/building/main?building_id=".concat(e.viewable_id) : "/pages/packageA/web_article/main?id=".concat(e.viewable_id, "&title=").concat(encodeURIComponent(e.title), "&type=weixin_articles"), 
                    wx.navigateTo({
                        url: n
                    });
                }
            },
            props: {
                items: {
                    type: Array,
                    default: []
                },
                max_length: {
                    type: Number,
                    default: 0
                },
                source: {
                    type: String,
                    default: "榜单页"
                }
            }
        };
        t.default = i;
    },
    b1c5: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    c559: function(e, t, n) {},
    e60c: function(e, t, n) {
        n.r(t);
        var a = n("7af1"), i = n.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        t.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/index/top_search/host_list-create-component", {
    "pages/index/top_search/host_list-create-component": function(e, t, n) {
        n("543d").createComponent(n("305a"));
    }
}, [ [ "pages/index/top_search/host_list-create-component" ] ] ]);
(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/consultants/main" ], {
    "16a6": function(n, t, e) {
        var a = e("4003");
        e.n(a).a;
    },
    "3b5f": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("f7af")).default);
        }).call(this, e("543d").createPage);
    },
    4003: function(n, t, e) {},
    "40fa": function(n, t, e) {
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    "6fd9": function(n, t, e) {
        e.r(t);
        var a = e("ceea"), o = e.n(a);
        for (var u in a) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        t.default = o.a;
    },
    ceea: function(n, t, e) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(e("44b3")), u = a(e("01b0")), i = a(e("d80f")), f = a(e("327a")), c = a(e("8e44")), r = e("db49"), l = a(e("d8e2")), d = e("ccf5"), s = {
            mixins: [ f.default, o.default, u.default, i.default, l.default ],
            name: "CONSULTANTS",
            data: function() {
                return {
                    score_top_3_consultants: []
                };
            },
            onShow: function() {
                c.default.init().then(this.getData);
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "置业顾问",
                    path: "/pages/consultants/main"
                }, "CONSULATANT_LIST");
            },
            methods: {
                getData: function() {
                    var n = this;
                    this.loading = !0;
                    var t = this.page;
                    c.default.getConsultants({
                        page: t,
                        per: r.DEFAULT_PER
                    }).then(function(t) {
                        var e = t.items, a = t.score_top_3_consultants;
                        n.score_top_3_consultants = a, e.forEach(function(n) {
                            n.type = d.LEVEL_MAP[n.level], n.weixin_headimgurl = n.weixin_headimgurl || d.DEFAULT_HEADIMG, 
                            n.viewers_headimg = n.viewers_headimg.map(function(n) {
                                return n || d.DEFAULT_HEADIMG;
                            });
                        }), n.handleData({
                            items: e
                        });
                    });
                }
            },
            components: {
                Loading: function() {
                    e.e("components/views/loading").then(function() {
                        return resolve(e("7756"));
                    }.bind(null, e)).catch(e.oe);
                }
            }
        };
        t.default = s;
    },
    f7af: function(n, t, e) {
        e.r(t);
        var a = e("40fa"), o = e("6fd9");
        for (var u in o) [ "default" ].indexOf(u) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        e("16a6");
        var i = e("f0c5"), f = Object(i.a)(o.default, a.b, a.c, !1, null, "1453daa4", null, !1, a.a, void 0);
        t.default = f.exports;
    }
}, [ [ "3b5f", "common/runtime", "common/vendor" ] ] ]);
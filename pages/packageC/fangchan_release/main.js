require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageC/fangchan_release/main" ], {
    "09fa": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("21fd")).default);
        }).call(this, t("543d").createPage);
    },
    "21fd": function(e, n, t) {
        t.r(n);
        var a = t("a320"), i = t("cda9");
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        var r = t("f0c5"), u = Object(r.a)(i.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    a320: function(e, n, t) {
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return i;
        }), t.d(n, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    },
    cda9: function(e, n, t) {
        t.r(n);
        var a = t("e299"), i = t.n(a);
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(o);
        n.default = i.a;
    },
    e299: function(e, n, t) {
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = a(t("44b3")), o = a(t("d1fa")), r = a(t("327a")), u = a(t("8e44")), c = {
            mixins: [ i.default, o.default, r.default ],
            name: "FANGCHAN_RELEASE",
            data: function() {
                return {
                    per: 15,
                    weixin: {},
                    name: ""
                };
            },
            onLoad: function(e) {
                this.getData();
            },
            onShareAppMessage: function() {
                var e = this.$root.$mp.query, n = e.name, t = e.id, a = n || this.name;
                return this.getShareInfo({
                    title: a,
                    path: this.getSharePath("/pages/packageC/fangchan_release/main?name=".concat(a, "&id=").concat(t || ""))
                });
            },
            onPullDownRefresh: function() {
                this.loading || (this.page = 1, this.getData());
            },
            methods: {
                getData: function() {
                    var e = this, n = this.$root.$mp.query.id, t = {
                        page: this.page,
                        per: this.per
                    };
                    n && (t.weixin_account_id = n), u.default.getWxArticles(t).then(function(n) {
                        e.handleData(n), e.name = n.name, e.weixin = {
                            introduce: n.introduce,
                            qrcode_url: n.qrcode_url
                        };
                    });
                },
                goDetail: function(e) {
                    this.pushFormSubmit(e);
                    var n = e.currentTarget.dataset, t = n.title, a = n.link;
                    wx.navigateTo({
                        url: "/pages/web_page/main?title=".concat(t, "&link=").concat(encodeURIComponent(a))
                    });
                },
                perviewQr: function() {
                    wx.navigateTo({
                        url: "/pages/web_qr/main?url=".concat(this.weixin.qrcode_url)
                    });
                }
            },
            components: {
                Loading: function() {
                    t.e("components/views/loading").then(function() {
                        return resolve(t("7756"));
                    }.bind(null, t)).catch(t.oe);
                }
            }
        };
        n.default = c;
    }
}, [ [ "09fa", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageA/consultant_home/_consultant" ], {
    "11ab": function(e, n, t) {},
    "4a22": function(e, n, t) {
        t.r(n);
        var o = t("c5e7"), r = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    "6b87": function(e, n, t) {
        t.r(n);
        var o = t("b7fb"), r = t("4a22");
        for (var a in r) [ "default" ].indexOf(a) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        t("a3e4");
        var c = t("f0c5"), i = Object(c.a)(r.default, o.b, o.c, !1, null, "adad5f5e", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    a3e4: function(e, n, t) {
        var o = t("11ab");
        t.n(o).a;
    },
    b7fb: function(e, n, t) {
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    c5e7: function(e, n, t) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function a(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? r(Object(t), !0).forEach(function(n) {
                    c(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : r(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function c(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = t("2f62"), u = o(t("80d6")), s = t("a177"), f = o(t("8e44")), l = null, p = {
            data: function() {
                return {
                    wx_name: "hzzygwzj",
                    wx_nick_name: "置业顾问之家",
                    zone: "",
                    img: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/qr/hangzhou/consultant-home.jpg",
                    guide_img: "https://cdn.vip-wifi.com/fangchan/img/personal_package/official_weixin/bind-user.png",
                    show_footer: !1,
                    show: !1,
                    from: ""
                };
            },
            computed: a(a({}, (0, i.mapState)([ "configLoading", "wxArticle" ])), {}, {
                toConsultantHome: function() {
                    return !this.configLoading && "task" === this.from;
                }
            }),
            watch: {
                toConsultantHome: function(e, n) {
                    e && this.onCheckIdentifyQr(this.wxArticle[6]);
                }
            },
            mounted: function() {
                var e = this, n = this.$root.$mp.query.from;
                "task" !== n ? l = setInterval(function() {
                    e.configLoading || (clearInterval(l), e.checkUser());
                }, 50) : this.from = n;
            },
            destroyed: function() {
                l && clearInterval(l);
            },
            methods: {
                checkUser: function() {
                    var e = this;
                    s.App_User.fetchUser().then(function(n) {
                        n.subscribed_weixins, e.getCustomer(), e.getConsultant();
                    });
                },
                getCustomer: function() {
                    var e = this;
                    s.App_User.customer_service_info().then(function(n) {
                        e.wx_name = n.wx_username, e.wx_nick_name = n.wx_nickname, e.img = n.wx_qrcode_url, 
                        e.onCheckIdentifyQr(a(a({}, e.wxArticle[n.wx_username]), {}, {
                            name: n.wx_nickname
                        }));
                    });
                },
                onCheckIdentifyQr: function(e) {
                    this.$checkIdentifyQr({
                        link: e.url,
                        title: e.name,
                        shareShow: e.share
                    }) || (this.show = !0);
                },
                getConsultant: function() {
                    var e = this;
                    f.default.getMyConsultant().then(function(n) {
                        e.zone = n.building_zone;
                    });
                },
                preview: function() {
                    wx.previewImage({
                        current: this.img,
                        urls: [ this.img ]
                    });
                },
                copy: function() {
                    u.default.setClipboardData(this.wx_name);
                }
            }
        };
        n.default = p;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageA/consultant_home/_consultant-create-component", {
    "pages/packageA/consultant_home/_consultant-create-component": function(e, n, t) {
        t("543d").createComponent(t("6b87"));
    }
}, [ [ "pages/packageA/consultant_home/_consultant-create-component" ] ] ]);
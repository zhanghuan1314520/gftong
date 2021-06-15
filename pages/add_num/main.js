(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/add_num/main" ], {
    "4e6f": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("6cdc"), t(e("66fd")), n(t(e("dda4")).default);
        }).call(this, e("543d").createPage);
    },
    "7d81": function(n, t, e) {
        e.d(t, "b", function() {
            return i;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var i = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "7f77": function(n, t, e) {
        e.r(t);
        var i = e("882d"), a = e.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(o);
        t.default = a.a;
    },
    "882d": function(n, t, e) {
        function i(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = i(e("8e44")), o = {
            mixins: [ i(e("44b3")).default ],
            data: function() {
                return {
                    name: "",
                    showBind: !1
                };
            },
            onLoad: function() {
                var n = this.$root.$mp.query.name;
                this.getData(), wx.setNavigationBarTitle({
                    title: "".concat(n, "-绑定编码")
                });
            },
            unLoad: function() {
                this.showBind = !1, this.name = "";
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query, t = n.name, e = n.house_id, i = n.building_id;
                return this.getShareInfo({
                    title: t,
                    path: "/pages/building/main?building_id=".concat(i, "&house_id=").concat(e)
                });
            },
            computed: {
                title: function() {
                    var n = this.$root.$mp.query.name;
                    return "绑定【".concat(n, "】的编码");
                }
            },
            methods: {
                getData: function() {
                    var n = this;
                    a.default.getUserInfo().then(function(t) {
                        n.showBind = !t.realname;
                    });
                },
                toggleBind: function() {
                    this.showBind = !this.showBind;
                },
                confirmBind: function() {
                    this.toggleBind(), wx.redirectTo({
                        url: "/pages/mine/bind/main"
                    });
                },
                submit: function(n) {
                    var t = this.$root.$mp.query.house_id, e = n.target;
                    this.pushFormSubmit(n);
                    var i = e.value, o = {
                        nickname: i.nickname,
                        register_number: i.ln_number,
                        ln_number: i.ln_number
                    };
                    for (var u in o) if ("" === o[u].trim()) return void wx.showToast({
                        title: "您尚未填写完全",
                        icon: "none"
                    });
                    a.default.addUserNum(t, o).then(function(n) {
                        wx.navigateBack({
                            delta: 1
                        });
                    });
                }
            },
            components: {}
        };
        t.default = o;
    },
    dda4: function(n, t, e) {
        e.r(t);
        var i = e("7d81"), a = e("7f77");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(o);
        var u = e("f0c5"), r = Object(u.a)(a.default, i.b, i.c, !1, null, "09076dac", null, !1, i.a, void 0);
        t.default = r.exports;
    }
}, [ [ "4e6f", "common/runtime", "common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/taxation/main" ], {
    "159f": function(e, t, n) {
        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, a);
            }
            return n;
        }
        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("2f62"), u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("ff53")), s = {
            firsthome: {
                in90: .01,
                out90: .015
            },
            secondhome: {
                in90: .01,
                out90: .02
            }
        }, r = {
            components: {
                TopRightShare: function() {
                    n.e("components/views/top_right_share").then(function() {
                        return resolve(n("73b4"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            mixins: [],
            data: function() {
                return {
                    title: "税费计算器",
                    house_types: [ {
                        key: "new",
                        name: "新房"
                    }, {
                        key: "second",
                        name: "二手房"
                    } ],
                    house_qualities: [ {
                        text: "首套",
                        value: "firsthome"
                    }, {
                        text: "二套",
                        value: "secondhome"
                    } ],
                    fixed_number_of_years: [ {
                        text: "2年以内",
                        value: "within2years"
                    }, {
                        text: "2-5年",
                        value: "2to5years"
                    }, {
                        text: "5年以上",
                        value: "over5years"
                    } ],
                    is_unique: [ {
                        text: "是",
                        value: "yes"
                    }, {
                        text: "否",
                        value: "no"
                    } ],
                    house_type: "new",
                    house_quality: "firsthome",
                    house_years: "within2years",
                    house_unique: "yes",
                    house_area: "",
                    house_unit_price: "",
                    house_total_price: "",
                    taxation_total: "",
                    deed_tax: "",
                    personal_income_tax: "",
                    value_added_tax: ""
                };
            },
            onLoad: function(e) {},
            onShow: function() {},
            onUnload: function() {},
            onShareAppMessage: function() {
                var e = this.shareFace.taxation, t = e.title, n = e.imageUrl, a = encodeURIComponent("/pages/personal_package/taxation/main");
                return this.getShareInfo({
                    title: t,
                    path: "/pages/index/main?sub_page=".concat(a),
                    imageUrl: n
                });
            },
            watch: {
                house_area: function(e) {
                    e && this.onPriceAreaChange();
                },
                house_unit_price: function(e) {
                    e && this.onPriceAreaChange();
                }
            },
            computed: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        o(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({}, (0, i.mapState)([ "shareFace", "footerCardType", "consultant_today_rankings" ])),
            methods: {
                reset: function() {
                    this.taxation_total = "", this.deed_tax = "", this.personal_income_tax = "", this.value_added_tax = "";
                },
                changeTab: function(e) {
                    this.house_type = e, this.onStatusChange();
                },
                radioQualityChange: function(e) {
                    this.house_quality = e.detail.value, this.onStatusChange();
                },
                radioYearsChange: function(e) {
                    this.house_years = e.detail.value, this.onStatusChange();
                },
                radioUniqueChange: function(e) {
                    this.house_unique = e.detail.value, this.onStatusChange();
                },
                onStatusChange: function() {
                    this.onPriceAreaChange(), this.house_total_price && this.taxation_total && this.onCalculate();
                },
                onTotalPrice: function() {
                    this.house_area && this.house_unit_price && (this.house_total_price = u.default.times(this.house_area, this.house_unit_price));
                },
                onPriceAreaChange: function() {
                    "new" === this.house_type && this.onTotalPrice();
                },
                onCalculate: function() {
                    var e = Number(this.house_total_price);
                    switch (this.house_type) {
                      case "new":
                        this.onDeedTax(e), this.personal_income_tax = "0", this.value_added_tax = "0";
                        break;

                      case "second":
                        this.onDeedTax(e), this.onPersonalIncomeTax(e), this.onValueAddedTax(e);
                    }
                    this.taxation_total = u.default.plus(this.deed_tax, Number(this.personal_income_tax), Number(this.value_added_tax));
                },
                onDeedTax: function(e) {
                    var t = s[this.house_quality], n = t.in90, a = t.out90;
                    this.house_area > 90 ? this.deed_tax = u.default.times(e, a) : this.deed_tax = u.default.times(e, n);
                },
                onPersonalIncomeTax: function(e) {
                    this.personal_income_tax = "over5years" === this.house_years && "yes" === this.house_unique ? "0" : u.default.times(e, .01);
                },
                onValueAddedTax: function(e) {
                    this.value_added_tax = "within2years" === this.house_years ? u.default.times(e, .05) : "0";
                }
            }
        };
        t.default = r;
    },
    "2dc9": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("84c6")).default);
        }).call(this, n("543d").createPage);
    },
    "595f": function(e, t, n) {},
    "801f": function(e, t, n) {
        n.r(t);
        var a = n("159f"), o = n.n(a);
        for (var i in a) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    "84c6": function(e, t, n) {
        n.r(t);
        var a = n("9231"), o = n("801f");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("87fa");
        var u = n("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, "cd640cfa", null, !1, a.a, void 0);
        t.default = s.exports;
    },
    "87fa": function(e, t, n) {
        var a = n("595f");
        n.n(a).a;
    },
    9231: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    }
}, [ [ "2dc9", "common/runtime", "common/vendor" ] ] ]);
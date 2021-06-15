require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/prepayment_calc/main" ], {
    "0458": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("5fef")), i = n("ed08"), r = n("fcf5"), o = {
            mixins: [ a.default ],
            components: {
                RatePicker: function() {
                    n.e("pages/packageB/prepayment_calc/_rate_picker").then(function() {
                        return resolve(n("fd1d"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    base_moneny: "",
                    prepayment_money: "",
                    loan_types: r.LOAN_TYPES,
                    loan_type_index: 0,
                    payment_types: r.PAYMENT_TYPES,
                    payment_type_index: 0,
                    prepayment_types: r.PREPAYMENT_TYPES,
                    prepayment_type_index: 0,
                    loan_years: r.LOAN_YEARS,
                    loan_year_index: r.LOAN_YEARS.length - 1,
                    start_date: r.current_date_str,
                    prepay_date: r.current_date_str,
                    show_rate_picker: !1,
                    rate_picker_title: "",
                    base_rates_opts: [],
                    discount_opts: [],
                    default_discount: -1,
                    default_rate: -1,
                    rate: 0
                };
            },
            computed: {
                rate_show: function() {
                    return this.rate ? this.rate.toFixed(2) : 0;
                },
                is_business: function() {
                    return 0 === Number(this.loan_type_index);
                },
                is_pay_partition: function() {
                    return 1 === Number(this.prepayment_type_index);
                }
            },
            onReady: function() {
                this.initRate();
            },
            methods: {
                changeLoanType: function(e) {
                    var t = e.detail.value;
                    this.loan_type_index = t, this.initRate();
                },
                changePaymentType: function(e) {
                    var t = e.detail.value;
                    this.payment_type_index = t;
                },
                changeLoanYear: function(e) {
                    var t = e.detail.value;
                    this.loan_year_index = t;
                },
                changeStartDate: function(e) {
                    var t = e.detail.value;
                    this.start_date = t;
                },
                changePrepayDate: function(e) {
                    var t = e.detail.value;
                    this.prepay_date = t;
                },
                changePrepaymentType: function(e) {
                    var t = e.detail.value;
                    this.prepayment_type_index = t;
                },
                checkSubmit: function(e) {
                    var t = {
                        base_moneny: {
                            required: !0,
                            text: "原贷款金额"
                        },
                        prepayment_time: {
                            check: function(e) {
                                if (new Date(e.prepayment_time).getTime() < new Date(e.start_time).getTime()) return "提前还款时间不能早于首次还款时间";
                            }
                        },
                        prepayment_money: {
                            check: function(e) {
                                if ("部分还款" === e.prepayment_type) {
                                    if (!e.prepayment_money) return "请填写提前还款金额";
                                    if (e.prepayment_money > e.base_moneny) return "提前还款金额不能大于原贷款金额";
                                    if (e.prepayment_money === e.base_moneny) return "全部还款请选择【一次性还清】";
                                    var t = (0, r.calcPayAll)(e).paid_base;
                                    if (e.base_moneny - t < e.prepayment_money) return "提前还款金额不能超过剩余本金";
                                }
                            }
                        }
                    };
                    return Object.keys(t).every(function(n) {
                        var a = t[n], i = a.required, r = a.check, o = a.text, _ = e[n];
                        if (i && !_) return wx.showToast({
                            title: "请填写".concat(o),
                            icon: "none"
                        }), !1;
                        var s = r && r(e);
                        return !s || (wx.showToast({
                            title: s,
                            icon: "none"
                        }), !1);
                    });
                },
                openResult: function() {
                    var e = {
                        payment_type: this.payment_types[this.payment_type_index],
                        base_moneny: this.base_moneny,
                        prepayment_money: this.prepayment_money,
                        year: this.loan_years[this.loan_year_index],
                        start_time: this.start_date,
                        prepayment_time: this.prepay_date,
                        rate: this.rate,
                        prepayment_type: this.prepayment_types[this.prepayment_type_index]
                    };
                    this.checkSubmit(e) && wx.navigateTo({
                        url: "/pages/packageB/prepayment_calc/result?params=".concat(JSON.stringify(e))
                    });
                },
                toggleRatePicker: function() {
                    this.show_rate_picker = !this.show_rate_picker;
                },
                initRate: function() {
                    this.is_business ? (this.rate_picker_title = "原商贷利率", this.base_rates_opts = r.BUSINESS_BASE_RATES, 
                    this.discount_opts = r.BUSINESS_DISCOUNT_OPTS, this.changeRateSelect(r.BUSINESS_BASE_RATES.length - 1, r.BUSINESS_DISCOUNT_DEFAULT)) : (this.rate_picker_title = "原公积金利率", 
                    this.base_rates_opts = r.PUBLIC_BASE_RATES, this.discount_opts = r.PUBLIC_DISCOUNT_OPTS, 
                    this.changeRateSelect(r.PUBLIC_BASE_RATES.length - 1, r.PUBLIC_DISCOUNT_DEFAULT));
                },
                changeRateSelect: function(e, t) {
                    this.default_rate = e, this.default_discount = t, this.changeRate((0, i.formatRate)(Number(this.base_rates_opts[this.default_rate].value) * Number(this.discount_opts[this.default_discount].value)));
                },
                changeRate: function(e) {
                    this.rate = Number(e);
                },
                checkPrepayment: function(e) {
                    this.prepayment_money = (0, i.formatNumberInput)(e);
                },
                checkBaseMoney: function(e) {
                    this.base_moneny = (0, i.formatNumberInput)(e);
                }
            }
        };
        t.default = o;
    },
    "0af4": function(e, t, n) {
        n.r(t);
        var a = n("86a6"), i = n("f2b1");
        for (var r in i) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("c326");
        var o = n("f0c5"), _ = Object(o.a)(i.default, a.b, a.c, !1, null, "74cf6bd6", null, !1, a.a, void 0);
        t.default = _.exports;
    },
    "2b4a": function(e, t, n) {},
    "86a6": function(e, t, n) {
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
    b89f: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("0af4")).default);
        }).call(this, n("543d").createPage);
    },
    c326: function(e, t, n) {
        var a = n("2b4a");
        n.n(a).a;
    },
    f2b1: function(e, t, n) {
        n.r(t);
        var a = n("0458"), i = n.n(a);
        for (var r in a) [ "default" ].indexOf(r) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = i.a;
    }
}, [ [ "b89f", "common/runtime", "common/vendor", "pages/packageB/common/vendor" ] ] ]);
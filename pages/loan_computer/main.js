require("common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/loan_computer/main" ], {
    "191e": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), e(n("66fd")), t(e(n("a95a")).default);
        }).call(this, n("543d").createPage);
    },
    4499: function(t, e, n) {},
    "91f1": function(t, e, n) {
        n.r(e);
        var s = n("b69a"), i = n.n(s);
        for (var a in s) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        e.default = i.a;
    },
    a95a: function(t, e, n) {
        n.r(e);
        var s = n("b01d"), i = n("91f1");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("db8e");
        var r = n("f0c5"), o = Object(r.a)(i.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = o.exports;
    },
    b01d: function(t, e, n) {
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var s = function() {
            var t = this, e = (t.$createElement, t._self._c, "contact" === t.footerCardType ? t.$canIdentifyQr() : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, i = [];
    },
    b69a: function(t, e, n) {
        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, s);
            }
            return n;
        }
        function i(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), !0).forEach(function(e) {
                    a(t, e, n[e]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
            }
            return t;
        }
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = n("2f62"), o = n("371c"), u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("b4fd")), l = n("590f"), c = function(t) {
            return /^\d+$/.test(t);
        }, _ = function() {
            var t = new Date(), e = t.getDate();
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (e >= 10 ? e : "0" + e);
        }, p = function(t, e) {
            return l.INTEREST_RATE_MAP[t](e);
        }, f = function(t, e) {
            return 1e4 * parseInt(t * (1 - e) / 1e4);
        }, h = function(t, e) {
            return ((t - f(t, e)) / 1e4).toFixed(2);
        }, b = function(t) {
            var e = t.toFixed(4).split("."), n = 0 === Number(e[1]) ? 0 : (e[1] / 1e4).toString().split(".")[1];
            return e[0] + "." + n;
        }, d = {
            data: function() {
                return {
                    lpr: 4.85,
                    lpr_remark: "",
                    business_base_point: 0,
                    total_price: "",
                    type: l.defaultType,
                    type_value: 0,
                    types: l.TYPES,
                    loan_type: l.defaultLoanType,
                    loan_type_value: 0,
                    year: l.defaultYear,
                    year_value: l.years.length - 1,
                    years: l.years,
                    business_interest_rate: {},
                    public_interest_rate: {},
                    currentDate: _(),
                    from_date: _(),
                    loan: "",
                    loan_types: [ l.LOAN_TYPES.BUSINESS, l.LOAN_TYPES.PUBLIC_FUND, l.LOAN_TYPES.COMPOSE ],
                    business_base_rate: "",
                    business_multiple: 1,
                    business_loan: "",
                    public_base_rate: "",
                    public_multiple: 1,
                    public_loan: "",
                    down_payment_select: [ {
                        text: "三成",
                        key: .3
                    }, {
                        text: "四成",
                        key: .4
                    }, {
                        text: "六成",
                        key: .6
                    }, {
                        text: "七成",
                        key: .7
                    } ],
                    selected_rate: .3,
                    show_lpr_tip: !1,
                    show_busniess_base_point_tip: !1
                };
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "房贷计算器",
                    path: "/pages/loan_computer/main",
                    imageUrl: l.SHARE_IMG
                }, "LOAN_COMPUTER");
            },
            onLoad: function(t) {
                var e = this;
                this.total_price = t.total_price, u.default.getHouseLoanCalc().then(function(t) {
                    var n = t.lpr;
                    e.lpr_remark = n.remark, e.lpr = n.five_year, e.total_price && e.changeDownPayment(.3), 
                    e.getRate();
                });
            },
            computed: i(i({}, (0, r.mapState)([ "contactSendMessage", "footerCardType", "consultant_today_rankings" ])), {}, {
                down_payment: function() {
                    return h(1e4 * this.total_price, this.selected_rate);
                },
                from_date_show: function() {
                    var t = this.from_date.split("-");
                    return t[0] + "年" + t[1] + "月" + t[2] + "日";
                },
                business_rate: function() {
                    return b(this.lpr + (this.business_base_point || 0) / 100);
                },
                public_rate: function() {
                    return b(this.public_base_rate * this.public_multiple);
                },
                isBusiness: function() {
                    return this.loan_type === l.LOAN_TYPES.BUSINESS;
                },
                isPublic: function() {
                    return this.loan_type === l.LOAN_TYPES.PUBLIC_FUND;
                },
                isCompose: function() {
                    return this.loan_type === l.LOAN_TYPES.COMPOSE;
                },
                current_personal_account: function() {
                    var t = this.contactSendMessage.currentPersonal;
                    return this.contactSendMessage.personal[t];
                }
            }),
            methods: {
                knowLoan: function(t) {
                    (0, o.sendCtmEvtLog)("房贷计算-".concat(t));
                },
                toggleLprTip: function() {
                    this.show_lpr_tip = !this.show_lpr_tip;
                },
                toggleBusinessBasePointTip: function() {
                    this.show_busniess_base_point_tip = !this.show_busniess_base_point_tip;
                },
                getRate: function() {
                    var t = p(l.LOAN_TYPES.BUSINESS, this.year);
                    this.business_base_rate = t.value, this.business_interest_rate = t;
                    var e = p(l.LOAN_TYPES.PUBLIC_FUND, this.year);
                    this.public_base_rate = e.value, this.public_interest_rate = e;
                },
                resetCondition: function() {
                    this.result = l.defaultResult, this.year = l.defaultYear, this.business_loan = "", 
                    this.public_loan = "";
                },
                changeType: function(t) {
                    this.type_value = t.target.value, this.type = l.TYPES[this.type_value];
                },
                changeLoanType: function(t) {
                    this.loan_type = t, this.resetCondition();
                },
                changeFirstDate: function(t) {
                    var e = t.target.value;
                    this.from_date = e;
                },
                changeYear: function(t) {
                    var e = t.target.value;
                    this.year_value = e, this.year = parseInt(this.years[e]), this.getRate();
                },
                selectDownPayment: function(t) {
                    var e = t.currentTarget.dataset.key;
                    this.changeDownPayment(e);
                },
                changeDownPayment: function(t) {
                    this.selected_rate = t;
                    var e = f(1e4 * this.total_price, this.selected_rate);
                    this.isBusiness ? this.business_loan = parseInt(e / 1e4) : this.total_price = 0;
                },
                computeResult: function() {
                    var t, e;
                    if (this.isBusiness && (t = this.business_loan, e = this.business_rate), this.isPublic && (t = this.public_loan, 
                    e = this.public_rate), this.isCompose && (t = this.business_loan + this.public_loan), 
                    t) if (c(t)) {
                        var n = this.business_base_rate, s = this.business_multiple, a = this.public_base_rate, r = this.public_multiple;
                        if (this.isCompose && n && s && a && r || this.isBusiness && n && s || this.isPublic && a && r) {
                            var o = {
                                loan_type: this.loan_type,
                                year: parseInt(this.year),
                                type: this.type,
                                from_date: this.from_date
                            };
                            o = this.isCompose ? i(i({}, o), {}, {
                                business_loan: this.business_loan,
                                business_loan_rate: this.business_rate,
                                public_loan: this.public_loan,
                                public_loan_rate: this.public_rate
                            }) : i(i({}, o), {}, {
                                loan: t,
                                loan_rate: e
                            }), wx.navigateTo({
                                url: "/pages/loan_computer/result/main?params=".concat(JSON.stringify(o))
                            });
                        } else wx.showToast({
                            title: "请填写贷款利率",
                            icon: "none"
                        });
                    } else wx.showToast({
                        title: "贷款金额只能整数",
                        icon: "none"
                    }); else wx.showToast({
                        title: "请填写贷款金额",
                        icon: "none"
                    });
                }
            },
            components: {
                tabs: function() {
                    n.e("pages/loan_computer/_tabs").then(function() {
                        return resolve(n("ec62"));
                    }.bind(null, n)).catch(n.oe);
                }
            }
        };
        e.default = d;
    },
    db8e: function(t, e, n) {
        var s = n("4499");
        n.n(s).a;
    }
}, [ [ "191e", "common/runtime", "common/vendor", "pages/loan_computer/common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/integral_simulation/steps" ], {
    "13ac": function(e, t, r) {},
    "77a3": function(e, t, r) {
        function n(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), r.push.apply(r, n);
            }
            return r;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(r), !0).forEach(function(t) {
                    i(e, t, r[t]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
            }
            return e;
        }
        function i(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = r("ab3f"), a = function(e) {
            return e.replace(/\s*/g, "");
        }, u = function(e) {
            return !!e && a(e).length > 0;
        }, s = function(e) {
            return !!e && /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a(e));
        }, d = function(e) {
            var t = (e + "").length, r = "";
            if (18 == t && (r = e.substr(6, 4) + "/" + e.substr(10, 2) + "/" + e.substr(12, 2)), 
            15 == t) {
                var n = "";
                n = e.charAt(6) + e.charAt(7), r = parseInt(n) < 10 ? "20" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2) : "19" + e.substr(6, 2) + "/" + e.substr(8, 2) + "/" + e.substr(10, 2);
            }
            var o = new Date(r), i = new Date(), c = i.getFullYear() - o.getFullYear();
            return (i.getMonth() < o.getMonth() || i.getMonth() == o.getMonth() && i.getDate() < o.getDate()) && c--, 
            c;
        }, l = function(e) {
            var t = 2 * (56 - e) + 5;
            return e <= 0 && (t = 0), e >= 56 && (t = 5), e > 60 && (t = 0), t > 30 && (t = 30), 
            t;
        }, h = function(e, t) {
            var r = e.starting, n = e.unit, o = e.max, i = e.startpoint, c = e.perunit, a = r, u = "";
            if (a && t < a) return "";
            if (a && t >= a) {
                var s = t - a;
                return (u = i + Math.floor(s / n) * c) > o && (u = o), u;
            }
            var d = n ? Math.floor(t / n) : t, l = d * c + (i || 0);
            return isNaN(l) ? void 0 : u = l > o ? o : l;
        }, g = {
            1: "base_info",
            2: "base_score",
            3: "plus_score",
            4: "negative_score"
        }, f = {}, p = {
            mixins: [],
            components: {},
            data: function() {
                return {
                    steps: c.steps,
                    currentStep: 1,
                    name: "",
                    idcard: "",
                    gender: {
                        current: "",
                        index: -1,
                        range: c.gender
                    },
                    job: {
                        current: "",
                        index: -1,
                        range: c.job
                    },
                    zone: {
                        current: "",
                        index: -1,
                        range: c.zone
                    },
                    plice: {
                        current: "",
                        index: -1,
                        range: []
                    },
                    age: "",
                    ageScore: 0,
                    education: {
                        current: "",
                        index: -1,
                        range: c.education
                    },
                    professionalTitle: {
                        current: "",
                        index: -1,
                        range: c.professionalTitle
                    },
                    educationScore: 0,
                    housingSituation: {
                        current: "",
                        index: -1,
                        range: c.housingSituation
                    },
                    houseYear: "",
                    houseYearScore: "",
                    housingScore: 0,
                    registerYear: "",
                    registerYearScore: 0,
                    socialSecurity: "",
                    socialSecurityScore: 0,
                    employment: {
                        current: "",
                        index: -1,
                        range: c.employment
                    },
                    stateLeveledHonour: "",
                    stateLeveledHonourScore: 0,
                    provincialLeveledHonour: "",
                    provincialLeveledHonourScore: 0,
                    municipalLeveledHonour: "",
                    municipalLeveledHonourScore: 0,
                    countyLeveledHonour: "",
                    countyLeveledHonourScore: 0,
                    boneMarrowDonation: {
                        current: "",
                        index: -1,
                        range: c.boneMarrowDonation
                    },
                    aaafdr: {
                        current: "",
                        index: -1,
                        range: c.aaafdr
                    },
                    technologyAward: {
                        current: "",
                        index: -1,
                        range: c.technologyAward
                    },
                    voluntaryBloodDonation: "",
                    voluntaryBloodDonationScore: 0,
                    volunteer: "",
                    volunteerScore: 0,
                    contribution: "",
                    contributionScore: 0,
                    businessTaxPayment: "",
                    businessTaxPaymentScore: 0,
                    individualIncomeTax: "",
                    individualIncomeTaxScore: 0,
                    independentInventionAndInnovation: "",
                    independentInventionAndInnovationScore: 0,
                    criminalRecord: "",
                    criminalRecordScore: 0,
                    drugRecord: "",
                    drugRecordScore: 0,
                    receptionEduRecord: "",
                    receptionEduRecordScore: 0,
                    detentionRecord: "",
                    detentionRecordScore: 0,
                    brokeRecord: "",
                    brokeRecordScore: 0,
                    familyPlanning: "",
                    familyPlanningScore: 0,
                    base_score: 0,
                    plus_score: 0,
                    negative_score: 0
                };
            },
            computed: {
                stepsProgress: function() {
                    return 100 / (this.steps.length - 1) * (this.currentStep - 1) + "%";
                },
                pliceDisabled: function() {
                    return 0 === this.plice.range.length;
                }
            },
            onLoad: function(e) {},
            methods: {
                onSubmit: function(e) {
                    var t = this.currentStep, r = e.detail.value, n = r.name, o = r.idcard, i = g[t];
                    if (!(t < 5) || c.checkValues[i].every(function(t) {
                        var r = t.key, n = t.msg, o = t.required, i = e.detail.value[r];
                        if (o) {
                            var c = !1;
                            return (c = "idcard" === t.key ? s(i) : u(i)) || wx.showToast({
                                title: n,
                                icon: "none",
                                duration: 2e3
                            }), c;
                        }
                        return !0;
                    })) {
                        if (this.age = d(o), this.currentStep += 1, this.currentStep > 4 && (this.currentStep = 5), 
                        2 === this.currentStep && (this.ageScore = l(this.age), this.idcard = o, this.name = n, 
                        f = {
                            ageScore: this.ageScore
                        }), this.currentStep > 2) {
                            var a = Object.keys(f);
                            this[i] = a.length ? a.map(function(e) {
                                return f[e];
                            }).reduce(function(e, t) {
                                return e + t;
                            }) : 0, f = {};
                        }
                        if (5 === this.currentStep) {
                            var h = this.name, p = this.idcard, v = this.base_score, S = this.plus_score, b = this.negative_score;
                            wx.redirectTo({
                                url: "/pages/packageB/integral_simulation/result?name=".concat(h, "&idcard=").concat(p, "&base_score=").concat(v || 0, "&plus_score=").concat(S || 0, "&negative_score=").concat(b || 0)
                            });
                        }
                    }
                },
                onPickerChange: function(e) {
                    var t = e.currentTarget.dataset.type, r = e.detail.value, n = this[t].range, a = n[r].score;
                    if (this[t] = {
                        current: n[r].text,
                        index: r,
                        range: n,
                        score: a || 0
                    }, "zone" === t) {
                        var u = c.plices[n[r].value];
                        this.plice = {
                            current: u[0].text,
                            index: 0,
                            range: u
                        };
                    }
                    return "education" === t || "professionalTitle" === t ? (this.educationScore = Math.max(this.education.score || 0, this.professionalTitle.score || 0), 
                    void (f = o(o({}, f), {}, {
                        educationScore: this.educationScore
                    }))) : "housingSituation" === t ? (this.housingScore = Math.max(this.housingSituation.score || 0, Number(this.houseYearScore) || 0), 
                    void (f = o(o({}, f), {}, {
                        housingScore: this.housingScore
                    }))) : void (f = o(o({}, f), {}, i({}, "".concat(t, "Score"), this[t].score)));
                },
                onBlur: function(e) {
                    var t = e.currentTarget.dataset, r = t.point, n = t.max, c = t.type, a = e.detail.value, u = /^\d+$/.test(a) ? a : "";
                    "houseYear" === c ? (this.houseYearScore = Math.min(r * u, n), this.housingScore = Math.max(this.houseYearScore, this.housingSituation.score || 0), 
                    f = o(o({}, f), {}, {
                        housingScore: this.housingScore
                    })) : (this["".concat(c, "Score")] = this.currentStep > 2 ? h(e.currentTarget.dataset, 1 * u) : Math.min(r * u, n), 
                    f = o(o({}, f), {}, i({}, "".concat(c, "Score"), this["".concat(c, "Score")])));
                }
            }
        };
        t.default = p;
    },
    9938: function(e, t, r) {
        r.r(t);
        var n = r("9f57"), o = r("ee39");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(i);
        r("c0c6");
        var c = r("f0c5"), a = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = a.exports;
    },
    "9f57": function(e, t, r) {
        r.d(t, "b", function() {
            return n;
        }), r.d(t, "c", function() {
            return o;
        }), r.d(t, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    bb42: function(e, t, r) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r("6cdc"), t(r("66fd")), e(t(r("9938")).default);
        }).call(this, r("543d").createPage);
    },
    c0c6: function(e, t, r) {
        var n = r("13ac");
        r.n(n).a;
    },
    ee39: function(e, t, r) {
        r.r(t);
        var n = r("77a3"), o = r.n(n);
        for (var i in n) [ "default" ].indexOf(i) < 0 && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(i);
        t.default = o.a;
    }
}, [ [ "bb42", "common/runtime", "common/vendor", "pages/packageB/common/vendor" ] ] ]);
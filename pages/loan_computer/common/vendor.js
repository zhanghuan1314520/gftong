(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/loan_computer/common/vendor" ], {
    "590f": function(t, e, n) {
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        function r(t, e) {
            var n, a, r, i;
            try {
                n = t.toString().split(".")[1].length;
            } catch (t) {
                n = 0;
            }
            try {
                a = e.toString().split(".")[1].length;
            } catch (t) {
                a = 0;
            }
            return r = Math.pow(10, Math.max(n, a)), i = n >= a ? n : a, ((t * r - e * r) / r).toFixed(i);
        }
        var i, o;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getDetail = e.getResult = e.formatNumber = e.INTEREST_RATE_MAP = e.defaultYear = e.years = e.defaultLoanType = e.LOAN_TYPES = e.defaultResult = e.defaultType = e.TYPES = e.TYPE = e.SHARE_IMG = void 0;
        e.SHARE_IMG = "https://cdn.vip-wifi.com/hzfangchan/share-img/loan-computer.png";
        var l = {
            INTERSET: "interest",
            PRINCIPAL: "principal"
        };
        e.TYPE = l;
        var u = [ {
            type: "interest",
            text: "等额本息"
        }, {
            type: "principal",
            text: "等额本金"
        } ];
        e.TYPES = u;
        var s = u[0];
        e.defaultType = s;
        var c = {
            monthly_payment: 0,
            monthly_decrease: 0,
            total_interest: 0,
            total_payment: 0
        };
        e.defaultResult = c;
        var y = {
            BUSINESS: "商业贷款",
            PUBLIC_FUND: "公积金贷款",
            COMPOSE: "组合贷款"
        };
        e.LOAN_TYPES = y;
        var _ = y.BUSINESS;
        e.defaultLoanType = _;
        var p = new Array(30).fill().map(function(t, e) {
            return "".concat(e + 1, "年");
        });
        e.years = p;
        var h = parseInt(p[p.length - 1]);
        e.defaultYear = h;
        var m = (i = {}, a(i, y.BUSINESS, function(t) {
            var e = "4.35";
            return t > 1 && t <= 5 ? e = "4.75" : t > 5 && (e = "4.90"), {
                tx: "基准利率",
                value: e
            };
        }), a(i, y.PUBLIC_FUND, function(t) {
            return {
                tx: "基准利率",
                value: t > 5 ? "3.25" : "2.75"
            };
        }), i);
        e.INTEREST_RATE_MAP = m;
        e.formatNumber = function(t) {
            var e = Number(t).toFixed(2).split(".");
            return Number(e[0]).toLocaleString() + "." + e[1];
        };
        var f = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, a = 1e4 * t, r = Math.pow(1 + n, e), i = a * n * r / (r - 1), o = i * e;
            return {
                monthly_payment: i,
                total_interest: o - a,
                total_payment: o
            };
        }, d = function(t, e, n, a, i) {
            var o = 1e4 * t, l = f(t, e, n).monthly_payment, u = o * n * (Math.pow(1 + n, e) - Math.pow(1 + n, a - 1)) / (Math.pow(1 + n, e) - 1), s = l - u, c = r(i, s);
            return {
                monthly_payment: l,
                base_payment: s,
                interest_payment: u,
                reset_payment: c > 1 ? c : 0
            };
        }, v = function(t, e, n, a, i) {
            var o = 1e4 * t, l = o / e, u = (o - (a - 1) * l) * n, s = l + u, c = r(i, l);
            return {
                monthly_payment: s,
                base_payment: l,
                interest_payment: u,
                reset_payment: c > 1 ? c : 0
            };
        }, S = function(t, e, n, a) {
            var r, i, o = t.type, u = t.business_loan, s = t.public_loan, c = t.business_loan_rate, y = t.public_loan_rate, _ = a.public_rest, p = a.business_rest;
            return o.type === l.INTERSET ? (r = d(Number(u), e, b(c), n, p), i = d(Number(s), e, b(y), n, _)) : o.type === l.PRINCIPAL && (r = v(Number(u), e, b(c), n, p), 
            i = v(Number(s), e, b(y), n, _)), {
                monthly_payment: r.monthly_payment + i.monthly_payment,
                base_payment: r.base_payment + i.base_payment,
                interest_payment: r.interest_payment + i.interest_payment,
                reset_payment: {
                    business_rest: r.reset_payment,
                    public_rest: i.reset_payment
                }
            };
        }, P = (o = {}, a(o, l.INTERSET, f), a(o, l.PRINCIPAL, function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, a = 1e4 * t, r = a / e, i = (r + a * n + r * (1 + n)) / 2 * e - a;
            return {
                monthly_payment: a / e + a * n,
                total_interest: i,
                total_payment: i + a,
                monthly_decrease: r * n
            };
        }), o), b = function(t) {
            return t / 12 / 100;
        };
        e.getResult = function(t) {
            var e = t.loan, n = t.type, a = 12 * t.year, r = P[n.type];
            if (t.loan_type === y.COMPOSE) {
                var i = r(t.business_loan, a, b(t.business_loan_rate)), o = r(t.public_loan, a, b(t.public_loan_rate));
                return {
                    monthly_payment: i.monthly_payment + o.monthly_payment,
                    total_interest: i.total_interest + o.total_interest,
                    total_payment: i.total_payment + o.total_payment,
                    monthly_decrease: i.monthly_decrease + o.monthly_decrease
                };
            }
            return r(e, a, b(t.loan_rate));
        };
        var x = function(t, e, n) {
            var a = t.type, r = t.loan_type, i = t.loan, o = t.loan_rate, u = 12 * t.year;
            return r === y.COMPOSE ? S(t, u, e, n) : a.type === l.INTERSET ? d(Number(i), u, b(o), e, n) : a.type === l.PRINCIPAL ? v(Number(i), u, b(o), e, n) : void 0;
        };
        e.getDetail = function(t) {
            for (var e = t.from_date, n = t.year, a = [], r = e.split("-"), i = Number(r[0]), o = Number(r[1]), l = 12 * Number(n), u = 0, s = o, c = i, _ = t.loan_type === y.COMPOSE ? {
                business_rest: 1e4 * t.business_loan,
                public_rest: 1e4 * t.public_loan
            } : 1e4 * t.loan; u < l; ) {
                for (var p = []; s <= 12 && u < l; s++) {
                    var h = x(t, u += 1, _), m = {
                        month: s,
                        data: h
                    };
                    _ = h.reset_payment, p.push(m);
                }
                var f = {
                    year: c,
                    month_data_arr: p
                };
                f.total_payment = p.reduce(function(t, e) {
                    var n = e.data, a = n.monthly_payment, r = n.interest_payment;
                    return t.total_pay += a, t.total_interest_pay += r, t;
                }, {
                    total_pay: 0,
                    total_interest_pay: 0
                }), a.push(f), s = 1, c++;
            }
            return a;
        };
    },
    "7f51": function(t, e, n) {
        function a(t) {
            return wx.getSystemInfoSync().windowWidth / 375 * t;
        }
        function r(t, e, n) {
            return {
                x: n.x + t,
                y: n.y - e
            };
        }
        function i(t, e) {
            var n = 0, a = 0;
            return t.forEach(function(t) {
                t.data = null === t.data ? 0 : Number(t.data), n += t.data;
            }), t.forEach(function(t) {
                t._proportion_ = t.data / n * e, t._start_ = a, a += 2 * t._proportion_ * Math.PI;
            }), t;
        }
        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, a = e.name || "", r = e.fontSize, i = e.color;
            n.setFontSize(r);
            var o = n.measureText(a).width, l = a ? r : 0, u = (t.width - o) / 2, s = (t.height + r) / 2;
            t.title && t.title.name === e.name && (s -= (l + p.margin) / 2), t.subtitle && t.subtitle.name === e.name && (s += (l + p.margin) / 2), 
            n.setFontSize(r), n.setFillStyle(i), n.fillText(a, u, s);
        }
        function l(t, e) {
            t.title && o(t, t.title, e), t.subtitle && o(t, t.subtitle, e);
        }
        function u(t, e, n, a, i) {
            var o = a + e.pieChartLinePadding, l = [];
            t.map(function(t) {
                var e = 2 * Math.PI - (t._start_ + 2 * Math.PI * t._proportion_ / 2), n = (100 * t._proportion_).toFixed(1) + "%", a = t.color;
                return {
                    arc: e,
                    text: n,
                    name: t.name,
                    color: a
                };
            }).forEach(function(t) {
                var r = Math.cos(t.arc) * o, i = Math.sin(t.arc) * o, u = Math.cos(t.arc) * a, s = Math.sin(t.arc) * a, c = r >= 0 ? r + e.pieChartTextPadding : r - e.pieChartTextPadding, y = i;
                n.setFontSize(e.fontSize);
                var _ = n.measureText(t.text).width, p = n.measureText(t.name).width, h = Math.abs(_ - p), m = y;
                c < 0 && (c -= Math.max(_, p));
                var f = {
                    lineStart: {
                        x: u,
                        y: s
                    },
                    lineEnd: {
                        x: r,
                        y: i
                    },
                    textStart: {
                        x: c,
                        y: m
                    },
                    width: Math.max(_, p),
                    widthOffset: h,
                    text: t.text,
                    name: t.name,
                    color: t.color
                };
                l.push(f);
            }), l.forEach(function(t) {
                var a = r(t.lineStart.x, t.lineStart.y, i), o = r(t.lineEnd.x, t.lineEnd.y, i), l = r(t.textStart.x, t.textStart.y, i);
                n.setLineWidth(e.curveWidth), n.setFontSize(e.fontSize), n.beginPath(), n.setStrokeStyle(t.color), 
                n.setFillStyle(t.color), n.moveTo(a.x, a.y);
                var u = t.textStart.x < 0 ? l.x + t.width : l.x, s = t.textStart.x < 0 ? l.x - e.textMargin : l.x + e.textMargin, c = s;
                s += t.widthOffset / 2, n.quadraticCurveTo(o.x, o.y, u, l.y), n.stroke(), n.closePath(), 
                n.beginPath(), n.moveTo(u, l.y), n.arc(u, l.y, e.lineCircleWidth, 0, 2 * Math.PI), 
                n.closePath(), n.fill(), n.setFillStyle("#333333"), n.fillText(t.text, s, l.y + e.fontSize), 
                n.setFillStyle("#999999"), n.fillText(t.name, c, l.y - e.margin);
            });
        }
        function s(t, e, n, a) {
            var r = t.extra.offsetAngle || 0, o = i(t.series, a), s = {
                x: t.width / 2,
                y: t.height / 2
            }, c = e.radius, y = r * Math.PI / 180;
            n.beginPath(), n.setLineWidth(e.lineCircleWidth), n.setStrokeStyle(e.lineCircleColor), 
            n.arc(s.x, s.y, c * e.lineCircleRadius, y, y + 2 * a * Math.PI), n.stroke(), o.forEach(function(t) {
                t._start_ += r * Math.PI / 180, n.beginPath(), n.setLineWidth(2), n.setFillStyle(t.color), 
                n.moveTo(s.x, s.y), n.arc(s.x, s.y, c, t._start_, t._start_ + 2 * t._proportion_ * Math.PI), 
                n.closePath(), n.fill();
            });
            var _ = c - t.extra.ringWidth;
            n.beginPath(), n.setFillStyle(t.background || "#ffffff"), n.moveTo(s.x, s.y), n.arc(s.x, s.y, _, 0, 2 * Math.PI), 
            n.closePath(), n.fill(), 1 === a && (l(t, n), u(o, e, n, c, s));
        }
        function c(t) {
            function e(i) {
                if (null === a && (a = i), i - a < t.duration) {
                    var o = (i - a) / t.duration;
                    o = _(o), t.onProcess && t.onProcess(o), n = y(e, r);
                } else t.onProcess && t.onProcess(1), n && clearTimeout(n);
            }
            var n, a = null, r = 16;
            n = y(e, r);
        }
        function y(t, e) {
            return setTimeout(function() {
                t(+new Date());
            }, e);
        }
        function _(t) {
            return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var p = {
            radius: a(45),
            fontSize: a(11),
            pieChartLinePadding: a(15),
            pieChartTextPadding: a(15),
            lineCircleColor: "#C3F3F3",
            lineCircleWidth: a(2),
            lineCircleRadius: 1.2,
            margin: a(4),
            curveWidth: 1,
            curveCirclrRadius: a(2),
            textMargin: a(6)
        };
        e.default = function(t) {
            var e = wx.createCanvasContext(t.canvasId);
            p.radius = a(t.height) / 2 * .5, t.height = a(t.height), t.extra.ringWidth = a(t.extra.ringWidth), 
            t.title.fontSize = a(t.title.fontSize), t.subtitle.fontSize = a(t.subtitle.fontSize), 
            c({
                duration: 1e3,
                onProcess: function(n) {
                    s(t, p, e, n), e.draw();
                }
            });
        };
    },
    e58b: function(t, e, n) {
        function a(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var r;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TABS = e.TYPE_TX = e.TYPES = void 0;
        var i = {
            INTEREST: "interest",
            PRINCIPAL: "principal"
        };
        e.TYPES = i;
        var o = (r = {}, a(r, i.INTEREST, "等额本息"), a(r, i.PRINCIPAL, "等额本金"), r);
        e.TYPE_TX = o;
        var l = [ {
            key: i.INTEREST,
            name: "等额本息"
        }, {
            key: i.PRINCIPAL,
            name: "等额本金"
        } ];
        e.TABS = l;
    }
} ]);
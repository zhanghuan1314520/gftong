require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_top_tip" ], {
    1981: function(e, t, n) {
        var o = n("87a5");
        n.n(o).a;
    },
    "6b5f": function(e, t, n) {
        n.r(t);
        var o = n("8c18"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    "87a5": function(e, t, n) {},
    "8c18": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n("ed08"), i = function(e) {
            var t = (0, o.formatTimeStr)(e);
            return t ? "距离登记结束还有：".concat(t) : "";
        }, a = {
            data: function() {
                return {
                    reg_tip: "该楼盘正在登记中，请注意登记截止时间哟~",
                    task: 0,
                    clock_end: !1
                };
            },
            components: {
                OnlineSalesTips: function() {
                    n.e("components/views/online_sales_tips").then(function() {
                        return resolve(n("66d1"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                visit_reservation_url: {
                    type: String
                },
                ln_status: {
                    type: String
                },
                house: {
                    type: Object
                },
                ln_register_end_time: {
                    type: String
                }
            },
            beforeDestroy: function() {
                this.resetTask();
            },
            watch: {
                ln_register_end_time: function(e) {
                    "正在登记" === this.house.status && "正在登记" === this.ln_status && this.house.zone_level < 3 && this.changeRegTip(e.replace(/-/g, "/"));
                }
            },
            methods: {
                resetTask: function() {
                    this.task && clearTimeout(this.task);
                },
                changeRegTip: function(e) {
                    var t = new Date(e).getTime() - new Date().getTime();
                    this.resetTask(), t > 0 ? (this.reg_tip = i(t), this.runClock(t)) : this.clock_end = !0;
                },
                runClock: function(e) {
                    var t = this;
                    this.task = setTimeout(function() {
                        e >= 2e3 ? (e -= 1e3, t.reg_tip = i(e), t.runClock(e)) : (t.clock_end = !0, t.resetTask());
                    }, 1e3);
                }
            }
        };
        t.default = a;
    },
    "8dea": function(e, t, n) {
        n.r(t);
        var o = n("bfab"), i = n("6b5f");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("1981");
        var c = n("f0c5"), s = Object(c.a)(i.default, o.b, o.c, !1, null, "6ec2d7e9", null, !1, o.a, void 0);
        t.default = s.exports;
    },
    bfab: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_top_tip-create-component", {
    "pages/building/_components/_top_tip-create-component": function(e, t, n) {
        n("543d").createComponent(n("8dea"));
    }
}, [ [ "pages/building/_components/_top_tip-create-component" ] ] ]);
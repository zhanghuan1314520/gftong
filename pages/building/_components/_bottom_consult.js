require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_bottom_consult" ], {
    "3eee": function(n, e, t) {
        t.r(e);
        var o = t("70ab"), i = t("bda3");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(a);
        t("4e98");
        var u = t("f0c5"), r = Object(u.a)(i.default, o.b, o.c, !1, null, "c402554e", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    4177: function(n, e, t) {},
    "4e98": function(n, e, t) {
        var o = t("4177");
        t.n(o).a;
    },
    "70ab": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return i;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                e.stopPropagation(), n.show = !1;
            });
        }, i = [];
    },
    bda3: function(n, e, t) {
        t.r(e);
        var o = t("e4f9"), i = t.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = i.a;
    },
    e4f9: function(n, e, t) {
        function o(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function i(n, e, t, o, i, a, u) {
            try {
                var r = n[a](u), c = r.value;
            } catch (n) {
                return void t(n);
            }
            r.done ? e(c) : Promise.resolve(c).then(o, i);
        }
        function a(n) {
            return function() {
                var e = this, t = arguments;
                return new Promise(function(o, a) {
                    function u(n) {
                        i(c, o, a, u, r, "next", n);
                    }
                    function r(n) {
                        i(c, o, a, u, r, "throw", n);
                    }
                    var c = n.apply(e, t);
                    u(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = o(t("a34a")), r = o(t("b4fd")), c = t("d8e2"), s = {
            props: {
                building_detail_passively: Object
            },
            data: function() {
                return {
                    show: !1
                };
            },
            watch: {
                building_detail_passively: {
                    handler: function(n) {
                        var e = this;
                        n.timeout && setTimeout(function() {
                            e.show = !0;
                        }, 1e3 * n.timeout);
                    },
                    immediate: !0
                }
            },
            methods: {
                goConsultantByUser: function(n) {
                    var e = this;
                    return a(u.default.mark(function n() {
                        var t, o;
                        return u.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e.$root.$mp.query.building_id, n.next = 3, r.default.getRecommendConsultant({
                                    scene: "building_detail_passively",
                                    building_id: t
                                });

                              case 3:
                                o = n.sent, e.$sendCtmEvtLog("楼盘详情页面——向置业顾问提问按钮"), (0, c.navigateToChat)(o.id, {
                                    from: "building_detail_passively"
                                }), e.show = !1;

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            }
        };
        e.default = s;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_bottom_consult-create-component", {
    "pages/building/_components/_bottom_consult-create-component": function(n, e, t) {
        t("543d").createComponent(t("3eee"));
    }
}, [ [ "pages/building/_components/_bottom_consult-create-component" ] ] ]);
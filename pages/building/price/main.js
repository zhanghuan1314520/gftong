require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/price/main" ], {
    "55e2": function(t, e, i) {},
    5918: function(t, e, i) {
        i.r(e);
        var n = i("edf4"), o = i("6e50");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(c);
        i("9848");
        var u = i("f0c5"), r = Object(u.a)(o.default, n.b, n.c, !1, null, "6a0ecffd", null, !1, n.a, void 0);
        e.default = r.exports;
    },
    "6e50": function(t, e, i) {
        i.r(e);
        var n = i("92f6"), o = i.n(n);
        for (var c in n) [ "default" ].indexOf(c) < 0 && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = o.a;
    },
    "91f19": function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("6cdc"), e(i("66fd")), t(e(i("5918")).default);
        }).call(this, i("543d").createPage);
    },
    "92f6": function(t, e, i) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c, u = n(i("b4fd")), r = n(i("295f")), s = (n(i("8e44")), n(i("d1fa"))), a = (i("9554"), 
        n(i("a6ee"))), d = n(i("a027")), l = n(i("f9d4")), h = {
            LIST: "list",
            BLOCK: "block"
        }, f = (c = {}, o(c, h.BLOCK, {
            img: "48_list_white",
            text: "列表"
        }), o(c, h.LIST, {
            img: "48_building_white",
            text: "楼栋"
        }), c), _ = {
            mixins: [ s.default, d.default, l.default ],
            data: function() {
                return {
                    title: "",
                    id: "",
                    mode: h.LIST,
                    show_tip: !1,
                    tip_step: 0,
                    show_switch_btn: !1,
                    building_id: "",
                    filter_show: !1
                };
            },
            computed: {
                show_list: function() {
                    return this.mode === h.LIST;
                },
                show_block: function() {
                    return this.mode === h.BLOCK;
                },
                switch_btn: function() {
                    return f[this.mode];
                },
                show_block_cell_tip: function() {
                    return this.show_tip && 1 === this.tip_step;
                },
                show_price_graph: function() {
                    return this.current_house && this.current_house.price_diagram && this.current_house.price_diagram.diagram_url;
                },
                version: function() {
                    return this.current_house && this.current_house.price_diagram ? this.current_house.price_diagram.version : "";
                }
            },
            onLoad: function(t) {
                var e = this.$root.$mp.query, i = e.house_id, n = e.building_id;
                this.title = t.title, this.building_id = n, this.id = i, this.checkTip(), this.getMode(), 
                this.show_switch_btn = !0, this.getBuildingData();
            },
            onUnload: function() {
                this.setMode();
            },
            onShareAppMessage: function() {
                var t = this.$root.$mp.query, e = t.house_id, i = t.building_id, n = t.type;
                return this.getShareInfo({
                    title: "【".concat(this.title, "】最新一房一价已出，网上选房请点击~"),
                    path: this.getSharePath("/pages/building/price/main?building_id=".concat(i, "&house_id=").concat(e, "&title=").concat(this.title, "&type=").concat(n))
                });
            },
            onReachBottom: function() {
                this.show_list && this.getList();
            },
            methods: {
                goPricePage: function(t) {
                    wx.navigateTo({
                        url: "/pages/building/price_graph/main?house_id=".concat(this.id, "&building_id=").concat(this.building_id)
                    });
                },
                setMode: function() {
                    a.default.setMode(this.id, this.mode);
                },
                getMode: function() {
                    var t = this;
                    a.default.getMode(this.id).then(function(e) {
                        t.mode = e || h.LIST;
                    });
                },
                checkTip: function() {
                    var t = this;
                    r.default.checkTip("block_mode_house_prices").then(function(e) {
                        e && (t.tip_id = e, t.show_tip = !0, r.default.viewTips(e));
                    });
                },
                call: function() {
                    this.$showCallModal(this.getPhoneCall);
                },
                getPhoneCall: function() {
                    var t = this.$root.$mp.query.building_id;
                    u.default.getPhonePosition({
                        building_id: t
                    }).then(function(t) {
                        var e = t.phone;
                        wx.makePhoneCall({
                            phoneNumber: e,
                            success: function() {}
                        });
                    });
                },
                changeMode: function() {
                    this.mode = this.mode === h.LIST ? h.BLOCK : h.LIST, this.changeTipStep(this.mode === h.BLOCK ? 1 : 0);
                },
                toggleShowTip: function(t) {
                    this.show_tip = !this.show_tip;
                },
                changeTipStep: function(t) {
                    this.tip_step = t;
                },
                getList: function() {
                    this.$refs.list_page.reachBottom();
                },
                goDetail: function(t) {
                    var e = this.$root.$mp.query, i = e.title, n = e.house_id, o = e.building_id, c = e.type;
                    wx.navigateTo({
                        url: "/pages/building/price_detail/main?price_id=".concat(t, "&title=").concat(i, "&building_id=").concat(o, "&house_id=").concat(n, "&type=").concat(c || "")
                    });
                },
                onFilterShow: function(t) {
                    this.filter_show = t;
                }
            },
            components: {
                ListPage: function() {
                    Promise.all([ i.e("common/vendor"), i.e("pages/building/common/vendor"), i.e("pages/building/price/_list_page") ]).then(function() {
                        return resolve(i("c652"));
                    }.bind(null, i)).catch(i.oe);
                },
                BottomRightShare: function() {
                    i.e("components/views/bottom_right_share").then(function() {
                        return resolve(i("dd4e"));
                    }.bind(null, i)).catch(i.oe);
                },
                BlockPage: function() {
                    Promise.all([ i.e("common/vendor"), i.e("pages/building/common/vendor"), i.e("pages/building/price/_block_page") ]).then(function() {
                        return resolve(i("54d5"));
                    }.bind(null, i)).catch(i.oe);
                },
                Tip: function() {
                    i.e("pages/building/price/_tip").then(function() {
                        return resolve(i("532b"));
                    }.bind(null, i)).catch(i.oe);
                },
                CommonFooter: function() {
                    Promise.all([ i.e("common/vendor"), i.e("pages/building/_components/_common_footer") ]).then(function() {
                        return resolve(i("bf22"));
                    }.bind(null, i)).catch(i.oe);
                }
            }
        };
        e.default = _;
    },
    9848: function(t, e, i) {
        var n = i("55e2");
        i.n(n).a;
    },
    edf4: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return o;
        }), i.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    }
}, [ [ "91f19", "common/runtime", "common/vendor", "pages/building/common/vendor" ] ] ]);
require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/material/main" ], {
    "18ad": function(n, o, t) {
        t.r(o);
        var e = t("9b52"), i = t.n(e);
        for (var a in e) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(a);
        o.default = i.a;
    },
    "25c1": function(n, o, t) {
        var e = t("d63c");
        t.n(e).a;
    },
    4054: function(n, o, t) {
        t.r(o);
        var e = t("ce01"), i = t("18ad");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(n) {
            t.d(o, n, function() {
                return i[n];
            });
        }(a);
        t("25c1");
        var c = t("f0c5"), d = Object(c.a)(i.default, e.b, e.c, !1, null, "577b786d", null, !1, e.a, void 0);
        o.default = d.exports;
    },
    "7ad3": function(n, o, t) {
        (function(n) {
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("6cdc"), o(t("66fd")), n(o(t("4054")).default);
        }).call(this, t("543d").createPage);
    },
    "9b52": function(n, o, t) {
        function e(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var i = e(t("8e44")), a = {
            mixins: [ e(t("d1fa")).default ],
            components: {},
            data: function() {
                return {
                    house: {},
                    current_house: {},
                    loading: !0
                };
            },
            onLoad: function() {
                this.getData();
            },
            onShareAppMessage: function() {
                var n = this.$root.$mp.query, o = n.building_id, t = n.house_id, e = this.house.name;
                return this.getShareInfo({
                    title: "".concat(e, "登记步骤、核验资料都在这里啦"),
                    path: this.getSharePath("/pages/building/material/main?house_id=".concat(t || "", "&building_id=").concat(o || "")),
                    imageUrl: "https://cdn.vip-wifi.com/hzfangchan/share-img/material.png"
                });
            },
            methods: {
                getData: function() {
                    var n = this, o = this.$root.$mp.query, t = o.building_id, e = o.house_id;
                    i.default.getBuilding(t, e).then(function(o) {
                        n.house = o;
                        var t = {};
                        o.current_houses.some(function(n) {
                            if (n.id == e) return t = n, !0;
                        }), n.current_house = t, n.loading = !1;
                    });
                },
                goMap: function(n) {
                    var o = n.currentTarget.dataset, t = o.location, e = o.address, i = t.split(",").map(function(n) {
                        return Number(n);
                    }), a = i[0], c = i[1];
                    c && a && wx.openLocation({
                        latitude: c,
                        longitude: a,
                        name: this.house.name,
                        address: e
                    });
                },
                goResult: function(n) {
                    var o = n.currentTarget.dataset.type, t = this.house, e = t.id, i = t.name, a = this.current_house.id;
                    wx.navigateTo({
                        url: "/pages/result/main?building_id=".concat(e, "&house_id=").concat(a, "&name=").concat(i, "&type=").concat(o)
                    });
                },
                openRegRule: function() {
                    this.downloadDoc(this.current_house.attachment_urls.rule);
                },
                downloadEmployTpl: function() {
                    this.downloadDoc("https://cdn.vip-wifi.com/fcdocs/%E7%A8%B3%E5%AE%9A%E5%B0%B1%E4%B8%9A%E8%AF%81%E6%98%8E.doc");
                },
                downloadIncomeTpl: function() {
                    this.downloadDoc("https://cdn.vip-wifi.com/fcdocs/%E6%94%B6%E5%85%A5%E8%AF%81%E6%98%8E%E6%A8%A1%E6%9D%BF.doc");
                },
                downloadBehalfTpl: function() {
                    this.downloadDoc("https://cdn.vip-wifi.com/fcdocs/%E5%A7%94%E6%89%98%E4%BB%A3%E7%BC%B4%E8%B5%84%E6%96%99%E6%A8%A1%E6%9D%BF.docx");
                },
                downloadSelectionTpl: function() {
                    this.downloadDoc("https://cdn.vip-wifi.com/fcdocs/%E5%A7%94%E6%89%98%E9%80%89%E6%88%BF%E6%A8%A1%E6%9D%BF.docx");
                },
                downloadDoc: function(n) {
                    wx.showLoading && wx.showLoading(), wx.downloadFile({
                        url: n,
                        success: function(n) {
                            var o = n.tempFilePath;
                            wx.openDocument({
                                filePath: o,
                                complete: function() {
                                    wx.hideLoading();
                                }
                            });
                        },
                        fail: function(n) {
                            wx.hideLoading(), console.error(n);
                        }
                    });
                }
            }
        };
        o.default = a;
    },
    ce01: function(n, o, t) {
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return i;
        }), t.d(o, "a", function() {});
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    d63c: function(n, o, t) {}
}, [ [ "7ad3", "common/runtime", "common/vendor" ] ] ]);
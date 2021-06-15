require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/building/_components/_house_attachs" ], {
    "4c42": function(e, t, n) {
        n.d(t, "b", function() {
            return i;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    "53fc": function(e, t, n) {
        n.r(t);
        var i = n("4c42"), a = n("ec63");
        for (var o in a) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("ab46");
        var r = n("f0c5"), c = Object(r.a)(a.default, i.b, i.c, !1, null, "255f7e8e", null, !1, i.a, void 0);
        t.default = c.exports;
    },
    "5d78": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = n("9554"), a = {
            methods: {
                openDoc: function(e) {
                    var t = this;
                    (0, i.askAuth)(e, function() {
                        "price" === e.target.dataset.type && t.attachs.price_imgs && t.attachs.price_imgs.length ? t.$emit("goPreview", "price") : e.target.dataset.url && (wx.showLoading && wx.showLoading(), 
                        wx.downloadFile({
                            url: e.target.dataset.url,
                            success: function(e) {
                                var t = e.tempFilePath;
                                wx.openDocument({
                                    filePath: t,
                                    complete: function() {
                                        wx.hideLoading();
                                    }
                                });
                            },
                            fail: function(e) {
                                wx.hideLoading(), console.error(e);
                            }
                        }));
                    });
                },
                goReview: function(e) {
                    if ("lrd_completed" === this.lrd_status) {
                        var t = this.$root.$mp.query.building_id;
                        (0, i.askAuthNavigator)(e, "/pages/result/main?building_id=".concat(t || "", "&house_id=").concat(this.house_id || "", "&name=").concat(this.name, "&type=reg"));
                    }
                },
                goResult: function(e) {
                    if ("lfd_completed" === this.lfd_status) {
                        var t = this.$root.$mp.query.building_id;
                        (0, i.askAuthNavigator)(e, "/pages/result/main?building_id=".concat(t || "", "&house_id=").concat(this.house_id || "", "&name=").concat(this.name, "&type=result"));
                    }
                },
                goWebView: function(e) {
                    if (e.target.dataset.url) {
                        var t = "".concat(encodeURIComponent(this.current_house_name || this.name), "公示方案");
                        (0, i.askAuthNavigator)(e, "/pages/web_page/main?link=".concat(encodeURIComponent(e.target.dataset.url), "&title=").concat(t));
                    }
                },
                goQulification: function(e) {
                    (0, i.askAuthNavigator)(e, "/pages/check_condition/main?verify_type=杭州购房资格查询");
                },
                goPricePage: function(e) {
                    var t = this.$root.$mp.query.building_id;
                    (0, i.askAuthNavigator)(e, "/pages/packageA/page_price/main?building_id=".concat(t || "", "&house_id=").concat(this.house_id, "&photo_url=").concat(encodeURIComponent(this.house_price_diagram_url), "&title=").concat(encodeURIComponent(this.current_house_name), "-一房一价图&version=").concat(this.version));
                },
                openImg: function() {
                    wx.previewImage({
                        current: this.house_price_diagram_url,
                        urls: [ this.house_price_diagram_url ]
                    });
                }
            },
            computed: {
                house_price_diagram_url: function() {
                    return this.price_diagram ? this.price_diagram.diagram_url : "";
                },
                version: function() {
                    return this.price_diagram ? this.price_diagram.version : "";
                }
            },
            props: {
                house: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                attachs: {
                    type: Object,
                    default: function() {
                        return {};
                    },
                    required: !0
                },
                lrd_status: {
                    type: String
                },
                lfd_status: {
                    type: String
                },
                building_id: {
                    type: [ String, Number ]
                },
                house_id: {
                    type: [ String, Number ]
                },
                name: {
                    type: String
                },
                current_house_name: {
                    type: String
                },
                price_imgs: {
                    type: Array
                },
                price_diagram: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                is_consultant: Boolean
            }
        };
        t.default = a;
    },
    ab46: function(e, t, n) {
        var i = n("c3ea");
        n.n(i).a;
    },
    c3ea: function(e, t, n) {},
    ec63: function(e, t, n) {
        n.r(t);
        var i = n("5d78"), a = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/building/_components/_house_attachs-create-component", {
    "pages/building/_components/_house_attachs-create-component": function(e, t, n) {
        n("543d").createComponent(n("53fc"));
    }
}, [ [ "pages/building/_components/_house_attachs-create-component" ] ] ]);
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/add_consultant/main" ], {
    "16b6": function(e, t, n) {
        n.r(t);
        var o = n("b42f"), i = n("d0f0");
        for (var a in i) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        n("d425");
        var r = n("f0c5"), u = Object(r.a)(i.default, o.b, o.c, !1, null, "58f95c74", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "9a01": function(t, n, o) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(t) {
                return void 0 === t ? "undefined" : e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
            })(t);
        }
        function a() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return a = function() {
                return e;
            }, e;
        }
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e) {
            return d(e) || s(e) || l(e) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
            }
        }
        function s(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
        }
        function d(e) {
            if (Array.isArray(e)) return f(e);
        }
        function f(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var h, p = r(o("8e44")), m = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== i(e) && "function" != typeof e) return {
                default: e
            };
            var t = a();
            if (t && t.has(e)) return t.get(e);
            var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r)) {
                var u = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                u && (u.get || u.set) ? Object.defineProperty(n, r, u) : n[r] = e[r];
            }
            return n.default = e, t && t.set(e, n), n;
        }(o("80d6")), _ = r(o("9554")), b = r(o("44b3")), g = r(o("2055")), v = r(o("61f1")), y = o("db49"), w = function(e, t) {
            var n = function(e) {
                return "string" == typeof e && Boolean(e.trim());
            }, o = {
                name: {
                    check: n,
                    text: "您还未填写姓名"
                },
                mobile: {
                    check: n,
                    text: "您还未填写手机号"
                },
                sms_captcha: {
                    check: function(e) {
                        return t || n(e);
                    },
                    text: "您还未填写验证码"
                },
                weixin_name: {
                    check: n,
                    text: "您还未填写微信号"
                },
                building_name: {
                    check: n,
                    text: "您还未填写或者选择楼盘"
                },
                inviter_mobile: {
                    check: function(e, t) {
                        return e !== t.mobile;
                    },
                    text: "邀请人手机号不能和置业顾问手机号相同"
                },
                weixin_qrcode_url: {
                    check: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return Boolean(e);
                    },
                    text: "您还未上传微信二维码"
                },
                photos_urls: {
                    check: function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).length > 0;
                    },
                    text: "您还未上传名牌或工牌"
                }
            };
            return Object.keys(o).every(function(t) {
                var n = o[t];
                return !!n.check(e[t], e) || (wx.showToast({
                    title: n.text,
                    duration: 2e3,
                    icon: "none"
                }), !1);
            });
        }, x = {
            name: "consultant",
            mixins: [ v.default, b.default ],
            data: function() {
                return {
                    upload_tip: "",
                    consultant: {
                        photos_urls: [],
                        weixin_qrcode_url: "",
                        sms_captcha: ""
                    },
                    house_options: [],
                    selected_house: -1,
                    selected_building_name: "请选择",
                    is_invited: !1,
                    show_select: !1,
                    can_update: !0,
                    VUE_APP_NAME: "".concat("杭州购房通"),
                    is_edit: !1,
                    mobile: "",
                    loading: !0,
                    example_card_img: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/personal_package/add_consultant/card.png",
                    example_qrcode_img: "https://cdn.vip-wifi.com/hzfangchan/version-img/1.14.25/personal_package/add_consultant/qrcode.png"
                };
            },
            computed: {
                show_photos_urls: function() {
                    return this.consultant.photos_urls && this.consultant.photos_urls.length > 0;
                }
            },
            onLoad: function(e) {
                this.is_edit = "edit" === e.type, this.upload_tip = (0, m.checkChooseImg)(), p.default.init().then(this.getData), 
                this.is_invited = Boolean(e.phone);
            },
            onShow: function() {
                this.mobile = g.default.verify_mobile || this.consultant.mobile;
            },
            onHide: function() {
                g.default.verify_mobile = this.mobile;
            },
            onUnload: function() {
                g.default.verify_mobile = "", h && clearTimeout(h);
            },
            onShareAppMessage: function() {
                var e = this.consultant.mobile || "";
                return this.getShareInfo({
                    title: "置业顾问入驻",
                    path: "/pages/personal_package/add_consultant/main?phone=".concat(e),
                    imageUrl: y.APPLY_PIC
                });
            },
            methods: {
                getData: function() {
                    var e = this, t = this.$root.$mp.query.type;
                    wx.showLoading && wx.showLoading(), p.default.editMyConsultant().then(function(n) {
                        e.can_update = "pending" !== n.approval, e.consultant = [ "building_id", "building_name", "name", "weixin_name", "is_fresher", "weixin_qrcode_url", "photos_urls", "inviter_mobile" ].reduce(function(e, t) {
                            return e[t] = n[t], e;
                        }, {}), e.mobile = g.default.verify_mobile || n.mobile, e.consultant.sms_captcha = "";
                        var o = e.$root.$mp.query, i = o.phone, a = o.house_id;
                        if ("edit" !== t && "approved" === n.approval && wx.redirectTo({
                            url: "/pages/personal_package/consultant/main"
                        }), !n.inviter_mobile && i && (e.consultant.inviter_mobile = i), !n.building_id && a) {
                            var r = Number(a);
                            n.building_id = r, e.consultant.building_id = r;
                        }
                        e.loading = !1, e.getHouses(n.building_id, n.building_name);
                    });
                },
                getHouses: function(e, t) {
                    var n = this;
                    p.default.getHouseNames().then(function(t) {
                        t.forEach(function(e) {
                            "商业" === e.usage && (e.name = "".concat(e.name, "（商办）"));
                        }), n.house_options = [ {
                            id: -1,
                            name: "未找到楼盘，输入楼盘名称"
                        } ].concat(u(t)), n.house_options.some(function(t, o) {
                            if (t.id === e) return n.selected_building_name = t.name, n.selected_house = e, 
                            n.consultant.building_name = t.name, n.consultant.building_id = t.id || "", !0;
                        }) || (n.selected_building_name = "未找到楼盘，输入楼盘名称", n.selected_house = -1), wx.hideLoading && wx.hideLoading();
                    });
                },
                submit: function() {
                    var e = this.consultant;
                    e.mobile = this.mobile, w(e, this.is_edit) && p.default.updateConsultant(e).then(function(e) {
                        422 !== e.code ? (wx.showToast({
                            title: "修改成功"
                        }), h = setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1500)) : wx.showToast({
                            title: e.error_message,
                            icon: "none"
                        });
                    });
                },
                previewImg: function(e) {
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                },
                removeImg: function(e) {
                    "weixin" === e ? this.consultant.weixin_qrcode_url = "" : this.consultant.photos_urls = [];
                },
                chooseImg: function(e) {
                    var t = this, n = e.currentTarget.dataset.type;
                    m.default.chooseImage({
                        count: 1,
                        sizeType: [ "compressed" ]
                    }).then(function(e) {
                        t.uploadImg(n, e);
                    });
                },
                uploadImg: function(e, t) {
                    var n = this, o = t[0];
                    m.default.uploadImg({
                        filePath: o
                    }).then(function(t) {
                        console.error(123, t);
                        var o = [ t ];
                        "weixin_qrcode_url" === e && (o = t), n.consultant[e] = o;
                    });
                },
                changeHouse: function(e) {
                    -1 === e.id ? (this.consultant.building_name = "", this.consultant.building_id = "") : (this.consultant.building_name = e.name, 
                    this.consultant.building_id = e.id), this.selected_building_name = e.name, this.selected_house = e.id;
                },
                invitedSubmit: function(e) {
                    (0, _.default)(e, this.submit, "需要认证用户信息才可以入驻置业顾问");
                },
                openBuildingSelect: function(e) {
                    this.showSearchSelect();
                },
                showSearchSelect: function() {
                    this.show_select = !0;
                },
                hideSearchSelect: function() {
                    this.show_select = !1;
                }
            },
            components: {
                SearchSelect: function() {
                    o.e("pages/personal_center/_search_select").then(function() {
                        return resolve(o("44b5"));
                    }.bind(null, o)).catch(o.oe);
                },
                LazyInput: function() {
                    o.e("components/form/lazy_input").then(function() {
                        return resolve(o("aeba"));
                    }.bind(null, o)).catch(o.oe);
                },
                CaptchaBtn: function() {
                    o.e("pages/personal_center/_captcha_btn").then(function() {
                        return resolve(o("5af0"));
                    }.bind(null, o)).catch(o.oe);
                }
            }
        };
        n.default = x;
    },
    abf3: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), t(n("66fd")), e(t(n("16b6")).default);
        }).call(this, n("543d").createPage);
    },
    b42f: function(e, t, n) {
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
    },
    d04b: function(e, t, n) {},
    d0f0: function(e, t, n) {
        n.r(t);
        var o = n("9a01"), i = n.n(o);
        for (var a in o) [ "default" ].indexOf(a) < 0 && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = i.a;
    },
    d425: function(e, t, n) {
        var o = n("d04b");
        n.n(o).a;
    }
}, [ [ "abf3", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/chat/main" ], {
    "0667": function(e, n, t) {
        t.r(n);
        var i = t("1722"), r = t.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(o);
        n.default = r.a;
    },
    1722: function(n, t, i) {
        function r(n) {
            return (r = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(n) {
                return void 0 === n ? "undefined" : e(n);
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : void 0 === n ? "undefined" : e(n);
            })(n);
        }
        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap();
            return o = function() {
                return e;
            }, e;
        }
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function a(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter(function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })), t.push.apply(t, i);
            }
            return t;
        }
        function u(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? a(Object(t), !0).forEach(function(n) {
                    c(e, n, t[n]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                });
            }
            return e;
        }
        function c(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e;
        }
        function l(e, n, t, i, r, o, s) {
            try {
                var a = e[o](s), u = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(u) : Promise.resolve(u).then(i, r);
        }
        function d(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(i, r) {
                    function o(e) {
                        l(a, i, r, o, s, "next", e);
                    }
                    function s(e) {
                        l(a, i, r, o, s, "throw", e);
                    }
                    var a = e.apply(n, t);
                    o(void 0);
                });
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var f, h = s(i("a34a")), _ = function(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== r(e) && "function" != typeof e) return {
                default: e
            };
            var n = o();
            if (n && n.has(e)) return n.get(e);
            var t = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var s in e) if (Object.prototype.hasOwnProperty.call(e, s)) {
                var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
                a && (a.get || a.set) ? Object.defineProperty(t, s, a) : t[s] = e[s];
            }
            return t.default = e, n && n.set(e, t), t;
        }(i("cbd7")), g = i("07d2"), p = s(i("8e44")), m = s(i("acbe")), b = s(i("b4fd")), v = s(i("80d6")), w = i("a177"), k = i("371c"), y = i("ccf5"), x = s(i("bee9")), M = "CHAT", P = [], O = {
            peer_identifier: "",
            peer_headimgurl: "",
            peer_nickname: "",
            nickname: "",
            headimgurl: ""
        }, C = {
            sending: !1
        }, S = {
            name: M,
            data: function() {
                return {
                    is_login: !1,
                    loading: !0,
                    no_more: !1,
                    show_msg: !1,
                    msgs: [],
                    msg: "",
                    chart_pos: "msg-btm",
                    is_consult: !1,
                    consultant: {},
                    is_consultant_user: !1,
                    show_tools: !1,
                    show: !1,
                    show_expression: !1,
                    frequent_expressions: [],
                    peer_user: {
                        peer_headimgurl: "",
                        peer_nickname: "",
                        peer_ask_phone_status: ""
                    },
                    im_user: {
                        nickname: "",
                        headimgurl: ""
                    },
                    building: {
                        consultant_count: 0
                    },
                    tim_session_id: "",
                    show_building_card: !1,
                    auth_phone_number: !1
                };
            },
            onLoad: function() {
                var e = this;
                _.IM_STORE.add_login_watcher(M, function(n) {
                    e.is_login = n === g.LOGIN_STATUS.DONE, e.is_login || (wx.showLoading({
                        title: "请稍等"
                    }), _.default.getSessions());
                }), setTimeout(function() {
                    w.App_User.is_consultant().then(function(n) {
                        e.is_consultant_user = n;
                    }), w.App_User.fetchUser().then(function(n) {
                        e.is_consultant_user = n.is_consultant, e.auth_phone_number = Boolean(n.weixin_phone_number);
                    });
                }, 500);
            },
            onShow: function() {
                setTimeout(this.getExpressions, 500);
            },
            onHide: function() {
                x.default.stop();
            },
            watch: {
                is_login: {
                    handler: function(e, n) {
                        console.error("is_login", e, n), e != n && e && (this.startSession(), wx.hideLoading());
                    },
                    immediate: !1
                },
                msgs: function(e, n) {
                    var t = n.length, i = e.length;
                    i && !t && (this.show_msg = !0), i && t && i > t && e[i - 1].id !== n[t - 1].id && this.goBottom(), 
                    console.error("msgs change");
                    var r = e.filter(function(e) {
                        return !e.isSend && !e.is_read;
                    });
                    _.default.readMsg(r);
                }
            },
            computed: {
                phone_ask_waiting: function() {
                    var e = this.peer_user.peer_ask_phone_status;
                    return "waiting" === e || "none" === e;
                },
                ask_cancel_text: function() {
                    return this.phone_ask_waiting ? "拒绝" : "accepted" === this.peer_user.peer_ask_phone_status ? "已接受" : "已拒绝";
                },
                can_send: function() {
                    if (!this.is_consultant_user) return !0;
                    var e = this.msgs.slice(0).reverse();
                    return e.length <= 6 || e.slice(0, 6).some(function(e) {
                        return !e.isSend;
                    });
                }
            },
            onUnload: function() {
                _.IM_STORE.remove_login_watcher(M), _.IM_STORE.remove_chatsMap_watcher(M), _.default.resetChatMapByConversation(), 
                P.forEach(function(e) {
                    e && clearTimeout(e);
                });
            },
            methods: {
                goReport: function() {
                    (0, k.sendCtmEvtLog)("点击-年报-打招呼"), wx.navigateTo({
                        url: "/pages/report/2020/main"
                    });
                },
                changeMsg: function(e) {
                    "string" == typeof e && (this.msg = e);
                },
                toggleTools: function() {
                    this.checkBlocked() || (this.show_tools = !this.show_tools);
                },
                hideBuildingCard: function() {
                    this.show_building_card = !1;
                },
                startSession: function() {
                    var e = this;
                    return d(h.default.mark(function n() {
                        var t, i, r, o, s, a, u, c, l;
                        return h.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t = e.$root.$mp.query, i = t.consultant_id, r = t.session_id, o = t.from, 
                                console.error(i, r), s = {
                                    sessionId: r,
                                    consultantId: i
                                }, o && (s.from = o), n.next = 6, p.default.startSession(s);

                              case 6:
                                if (!(a = n.sent).code || 422 !== a.code) {
                                    n.next = 10;
                                    break;
                                }
                                return wx.showToast({
                                    title: a.error_message,
                                    icon: "none",
                                    duration: 3e3,
                                    mask: !0,
                                    success: function() {
                                        setTimeout(function() {
                                            wx.navigateBack({
                                                delta: 1
                                            });
                                        }, 2e3);
                                    }
                                }), n.abrupt("return");

                              case 10:
                                e.tim_session_id = a.id, u = a.peer_identifier, f = "C2C".concat(u), c = i || a.peer_consultant_id, 
                                O.peer_headimgurl = a.peer_headimgurl, O.peer_nickname = a.peer_nickname, O.peer_identifier = u, 
                                O.nickname = a.nickname, O.headimgurl = a.headimgurl, e.building = a.building, e.show_building_card = i && !r && !a.sent_building_card, 
                                e.im_user = {
                                    headimgurl: a.headimgurl,
                                    nickname: a.nickname,
                                    identifier: a.identifier,
                                    ask_phone_status: a.ask_phone_status
                                }, e.peer_user = {
                                    peer_headimgurl: a.peer_headimgurl || g.DEFAULT_HEADIMG,
                                    peer_nickname: a.peer_nickname,
                                    peer_identifier: a.peer_identifier,
                                    peer_ask_phone_status: a.peer_ask_phone_status
                                }, _.default.getMessages(f), l = function() {
                                    _.IM_STORE.add_chatsMap_watcher(M, function(n) {
                                        if (console.error("chatsMap change", n), n[f]) {
                                            var t = n[f].msgs.reduce(function(e, n) {
                                                return e.every(function(e) {
                                                    return e.id !== n.id;
                                                }) && e.push(n), e;
                                            }, []);
                                            e.msgs = t, e.loading = !1, e.show = !0;
                                        }
                                    });
                                }, c ? e.getConsultant(c).then(l) : l();

                              case 26:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                getConsultant: function(e) {
                    var n = this;
                    return p.default.getConsultant(e).then(function(e) {
                        n.is_consult = !0, n.consultant = {
                            id: e.id,
                            name: e.name,
                            building_id: e.building_id,
                            building_name: e.building_name,
                            weixin_name: e.weixin_name,
                            headimg: e.weixin_headimgurl || g.DEFAULT_HEADIMG,
                            level: y.LEVEL_MAP[e.level]
                        };
                    });
                },
                resetInput: function() {
                    this.changeMsg("");
                },
                checkBlocked: function() {
                    if (this.is_peer_blocked) return this.showBlockToast(), !0;
                },
                sendAudio: function(e) {
                    return d(h.default.mark(function n() {
                        var t;
                        return h.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                t = _.default.createAudioMsg(O.peer_identifier, e, {
                                    headimg: O.headimgurl,
                                    peerNickName: O.nickname,
                                    nickName: O.peer_nickname,
                                    peerHeadimg: O.peer_headimgurl
                                }), _.default.sendMsg(t);

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                sendMsg: function(e) {
                    var n = this;
                    return d(h.default.mark(function t() {
                        var i;
                        return h.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!C.sending) {
                                    t.next = 2;
                                    break;
                                }
                                return t.abrupt("return");

                              case 2:
                                if (n.can_send) {
                                    t.next = 5;
                                    break;
                                }
                                return n.resetInput(), t.abrupt("return");

                              case 5:
                                if (e) {
                                    t.next = 7;
                                    break;
                                }
                                return t.abrupt("return");

                              case 7:
                                n.hideBuildingCard(), C.sending = !0, i = _.default.createTextMsg(O.peer_identifier, e, {
                                    headimg: O.headimgurl,
                                    peerNickName: O.nickname,
                                    nickName: O.peer_nickname,
                                    peerHeadimg: O.peer_headimgurl
                                }), n.$nextTick(function() {
                                    n.resetInput();
                                }), _.default.sendMsg(i).then(function() {
                                    C.sending = !1;
                                }).catch(function() {
                                    n.changeMsg(e), C.sending = !1;
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                selectExpression: function(e) {
                    this.toggleExpression(), this.sendMsg(e);
                },
                toggleExpression: function() {
                    this.show_expression = !this.show_expression;
                },
                hideOtherOption: function() {
                    this.show_expression = !1, this.show_tools = !1;
                },
                goBottom: function() {
                    var e = this;
                    this.chart_pos = "";
                    var n = setTimeout(function() {
                        e.chart_pos = "msg-btm";
                    }, 500);
                    P.push(n);
                },
                stopConsult: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                },
                readTimMsg: function(e) {
                    e.length && (e = e.filter(function(e) {
                        return !e.isSend;
                    }).map(function(e) {
                        return {
                            from_account: e.from_account,
                            msg_random: e.msg_random,
                            msg_seq: e.msg_seq,
                            msg_time: e.msg_time
                        };
                    }), p.default.readTimMsg(e));
                },
                getMore: function() {
                    var e = this;
                    if (!this.no_more && !this.loading) {
                        wx.showLoading(), this.loading = !0;
                        var n = this.msgs.length ? this.msgs[0].id : "";
                        _.default.getMessages(f).then(function(t) {
                            wx.hideLoading(), console.error(n), n && (e.chart_pos = n), e.no_more = !t.length, 
                            e.loading = !1;
                        });
                    }
                },
                copyContent: function(e) {
                    v.default.setClipboardData(e.currentTarget.dataset.content);
                },
                previewImg: function(e) {
                    var n = e.currentTarget.dataset.img.replace(/132$/, 0);
                    wx.previewImage({
                        current: n,
                        urls: [ n ]
                    });
                },
                previewMsgImg: function(e) {
                    var n = this.msgs.filter(function(e) {
                        return "img" === e.msgStyle;
                    }).map(function(e) {
                        return e.content;
                    });
                    wx.previewImage({
                        current: e,
                        urls: n
                    });
                },
                chooseImg: function(e) {
                    this.sendImg(e), this.show_tools = !1;
                },
                sendImg: function(e) {
                    var n = _.default.createImgMsg(O.peer_identifier, e, {
                        headimg: O.headimgurl,
                        peerNickName: O.nickname,
                        nickName: O.peer_nickname,
                        peerHeadimg: O.peer_headimgurl
                    });
                    _.default.sendMsg(n);
                },
                getExpressions: function() {
                    var e = this;
                    return d(h.default.mark(function n() {
                        var t, i;
                        return h.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, m.default.getExpressions();

                              case 2:
                                t = n.sent, i = t.items, e.frequent_expressions = i.map(function(e) {
                                    var n = e.autoreply_delay, t = null != n;
                                    return u(u({}, e), {}, {
                                        autoreply_delay_text: t ? 0 === n ? "立即" : "".concat(n, "秒自动回复") : ""
                                    });
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                askPhone: function() {
                    var e = this;
                    this.$set(this.im_user, "ask_phone_status", "waiting"), m.default.askPhone(this.tim_session_id).then(function(n) {
                        422 === n.code && e.$set(e.im_user, "ask_phone_status", "none");
                    });
                },
                handlePhoneAsk: function(e, n) {
                    this.phone_ask_waiting && (this.$set(this.peer_user, "peer_ask_phone_status", e), 
                    n());
                },
                rejectPhone: function() {
                    var e = this;
                    this.handlePhoneAsk("rejected", function() {
                        m.default.rejectPhoneAsk(e.tim_session_id);
                    });
                },
                acceptPhone: function() {
                    var e = this;
                    this.handlePhoneAsk("accepted", function() {
                        m.default.acceptPhoneAsk(e.tim_session_id);
                    });
                },
                getPhoneNumber: function(e) {
                    var n = this, t = e.target, i = t.iv, r = t.encryptedData, o = t.errMsg;
                    b.default.postWeixinPhone(i, r, o).then(function(e) {
                        422 === Number(e.code) ? wx.showToast({
                            title: e.error_message,
                            icon: "none"
                        }) : n.acceptPhone();
                    });
                },
                callPhone: function(e) {
                    var n = this;
                    this.$showCallModal(function() {
                        return n.getUserPhoneCall(e);
                    }, "置业顾问询问成功——电话拨打");
                },
                getUserPhoneCall: function(e) {
                    b.default.getPhonePosition({
                        sceneable_type: "Fc::TimSession",
                        sceneable_id: this.tim_session_id,
                        phone_number: e
                    }).then(function(e) {
                        var n = e.phone;
                        v.default.makePhoneCall(n);
                    });
                },
                callConsultant: function() {
                    this.$showCallModal(this.getConsultantPhoneCall, "聊天卡片——立即致电置业顾问");
                },
                getConsultantPhoneCall: function() {
                    var e = this.consultant.id;
                    b.default.getPhonePosition({
                        consultant_id: e
                    }).then(function(n) {
                        var t = n.phone;
                        v.default.makePhoneCall(t), k.UserLog.callConsultant(e);
                    });
                },
                copyPhone: function(e) {
                    v.default.setClipboardData(e);
                },
                sendBuildingCard: function() {
                    console.error(this.building);
                    var e = _.default.createBuildingCardMsg(O.peer_identifier, this.building, {
                        headimg: O.headimgurl,
                        peerNickName: O.nickname,
                        nickName: O.peer_nickname,
                        peerHeadimg: O.peer_headimgurl
                    });
                    _.default.sendMsg(e, !1);
                },
                hideBottom: function() {
                    this.show_expression = !1, this.show_tools = !1;
                }
            },
            components: {
                MsgCard: function() {
                    i.e("pages/chat_list/chat/_msg_card").then(function() {
                        return resolve(i("de09"));
                    }.bind(null, i)).catch(i.oe);
                },
                MsgSysTip: function() {
                    i.e("pages/chat_list/chat/_msg_sys_tip").then(function() {
                        return resolve(i("93ea"));
                    }.bind(null, i)).catch(i.oe);
                },
                MsgAsk: function() {
                    i.e("pages/chat_list/chat/_msg_ask").then(function() {
                        return resolve(i("cfa4"));
                    }.bind(null, i)).catch(i.oe);
                },
                MsgBuildingCard: function() {
                    i.e("pages/chat_list/chat/_msg_building_card").then(function() {
                        return resolve(i("10e2"));
                    }.bind(null, i)).catch(i.oe);
                },
                Loading: function() {
                    i.e("components/views/loading").then(function() {
                        return resolve(i("7756"));
                    }.bind(null, i)).catch(i.oe);
                },
                ConsultantCard: function() {
                    i.e("pages/chat_list/chat/_consultant").then(function() {
                        return resolve(i("f9c2"));
                    }.bind(null, i)).catch(i.oe);
                },
                PeerUser: function() {
                    i.e("pages/chat_list/chat/_peer_user").then(function() {
                        return resolve(i("12e1"));
                    }.bind(null, i)).catch(i.oe);
                },
                AudioMsg: function() {
                    i.e("pages/chat_list/chat/_audio_msg").then(function() {
                        return resolve(i("6418"));
                    }.bind(null, i)).catch(i.oe);
                },
                FloatBuildingCard: function() {
                    i.e("pages/chat_list/chat/_float_building_card").then(function() {
                        return resolve(i("8e90"));
                    }.bind(null, i)).catch(i.oe);
                },
                Tools: function() {
                    i.e("pages/chat_list/chat/_tools").then(function() {
                        return resolve(i("bff9"));
                    }.bind(null, i)).catch(i.oe);
                },
                Expression: function() {
                    i.e("pages/chat_list/chat/_expression").then(function() {
                        return resolve(i("7629"));
                    }.bind(null, i)).catch(i.oe);
                },
                ChatInput: function() {
                    i.e("pages/chat_list/chat/_chat_input").then(function() {
                        return resolve(i("c6a1"));
                    }.bind(null, i)).catch(i.oe);
                }
            }
        };
        t.default = S;
    },
    "382c": function(e, n, t) {},
    "3b33": function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
    },
    "4a7f": function(e, n, t) {
        t.r(n);
        var i = t("3b33"), r = t("0667");
        for (var o in r) [ "default" ].indexOf(o) < 0 && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(o);
        t("cce0");
        var s = t("f0c5"), a = Object(s.a)(r.default, i.b, i.c, !1, null, "33717b85", null, !1, i.a, void 0);
        n.default = a.exports;
    },
    "4e63": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("4a7f")).default);
        }).call(this, t("543d").createPage);
    },
    cce0: function(e, n, t) {
        var i = t("382c");
        t.n(i).a;
    }
}, [ [ "4e63", "common/runtime", "common/vendor", "pages/chat_list/common/vendor" ] ] ]);
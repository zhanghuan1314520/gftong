require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/personal_package/inherit/main" ], {
    "473c": function(e, n, t) {
        t.r(n);
        var s = t("bdd6"), o = t("6d6c");
        for (var i in o) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(i);
        var u = t("f0c5"), r = Object(u.a)(o.default, s.b, s.c, !1, null, "3ff5678c", null, !1, s.a, void 0);
        n.default = r.exports;
    },
    "6d6c": function(e, n, t) {
        t.r(n);
        var s = t("8631"), o = t.n(s);
        for (var i in s) [ "default" ].indexOf(i) < 0 && function(e) {
            t.d(n, e, function() {
                return s[e];
            });
        }(i);
        n.default = o.a;
    },
    8631: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var s = t("364e"), o = {
            components: {
                Doing: function() {
                    t.e("pages/personal_package/_query_components/doing").then(function() {
                        return resolve(t("73da"));
                    }.bind(null, t)).catch(t.oe);
                },
                Done: function() {
                    t.e("pages/personal_package/inherit/done").then(function() {
                        return resolve(t("3636"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    current_question: {},
                    answered_questions: [],
                    show_result: !1,
                    result: "",
                    desc: ""
                };
            },
            created: function() {
                this.current_question = (0, s.selectQuestion)();
            },
            onShareAppMessage: function() {
                return this.$root.$mp.query.id, this.getShareInfo({
                    title: "一键查询房屋继承份额~",
                    path: "/pages/index/main?sub_page=".concat(encodeURIComponent("/pages/personal_package/inherit/main"))
                });
            },
            methods: {
                reset: function() {
                    this.answered_questions = [], this.current_question = (0, s.selectQuestion)(), this.show_result = !1, 
                    this.result = "", this.desc = "";
                },
                selectQuestion: function(e) {
                    var n = this, t = this.current_question.answers[e];
                    this.answered_questions.push({
                        question: this.current_question.question,
                        answer: t.content,
                        origin_question: this.current_question
                    }), this.current_question = {}, this.$nextTick(function() {
                        n.current_question = (0, s.selectQuestion)(t.tree), n.current_question.end && (n.show_result = !0, 
                        n.result = n.current_question.question, n.desc = n.current_question.desc);
                    });
                },
                deleteQuestion: function(e) {
                    this.current_question = this.answered_questions[e].origin_question, this.answered_questions.splice(e);
                }
            }
        };
        n.default = o;
    },
    8799: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), n(t("66fd")), e(n(t("473c")).default);
        }).call(this, t("543d").createPage);
    },
    bdd6: function(e, n, t) {
        t.d(n, "b", function() {
            return s;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var s = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    }
}, [ [ "8799", "common/runtime", "common/vendor", "pages/personal_package/common/vendor" ] ] ]);
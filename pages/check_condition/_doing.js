require("common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/check_condition/_doing" ], {
    "0288": function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var s = i(n("44b3")), o = i(n("8e44")), u = {
            mixins: [ s.default ],
            data: function() {
                return {
                    finish: !1,
                    questions: [],
                    answer: {},
                    question: "",
                    items: [],
                    alphabets: [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J" ],
                    answers: [],
                    obj_answers: {},
                    result: "",
                    qids: []
                };
            },
            mounted: function() {
                this.verify();
            },
            props: {
                verify_type: {
                    type: String
                }
            },
            methods: {
                init: function() {
                    this.questions = [], this.finish = !1, this.answer = {}, this.question = "", this.items = [], 
                    this.result = "", this.answers = [], this.obj_answers = {}, this.qids = [];
                },
                handleQuestion: function(t, e) {
                    this.finish = t.finish;
                    var n = Object.keys(e);
                    if (n.length > this.questions.length) {
                        var i = n[n.length - 1];
                        this.questions.push({
                            question: this.question,
                            items: this.items,
                            answer: e[i].value
                        });
                    }
                    t.finish ? this.result = t.result : (this.question = t.question.question, this.items = Object.keys(t.question.answer).map(function(e) {
                        return {
                            value: t.question.answer[e].value,
                            qid: t.question.qid,
                            key: e
                        };
                    }));
                },
                verify: function() {
                    var t = this, e = this.verify_type, n = this.answers;
                    o.default.verifyQualication({
                        answers: n
                    }, e).then(function(e) {
                        t.handleQuestion(e, t.answer);
                    });
                },
                onSelect: function(t) {
                    this.pushFormSubmit(t);
                    var e = t.currentTarget.dataset.item, n = this.question;
                    this.answer[n] = e, this.answers.push("".concat(e.qid, ":").concat(e.key)), this.verify();
                },
                goNext: function(t, e) {
                    this.$emit("next", this.questions, this.result), this.init();
                },
                deleteItem: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.questions[e];
                    n.items[0].qid, this.question = n.question, this.items = n.items, this.questions = this.questions.splice(0, e), 
                    this.answer = this.questions.reduce(function(t, e) {
                        return t[e.question] = e.answer, t;
                    }, {}), this.answers.splice(e), this.finish = !1;
                }
            }
        };
        e.default = u;
    },
    "54b2": function(t, e, n) {
        var i = n("f6dc");
        n.n(i).a;
    },
    dc62: function(t, e, n) {
        n.r(e);
        var i = n("0288"), s = n.n(i);
        for (var o in i) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = s.a;
    },
    e1c1: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, s = [];
    },
    f439: function(t, e, n) {
        n.r(e);
        var i = n("e1c1"), s = n("dc62");
        for (var o in s) [ "default" ].indexOf(o) < 0 && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(o);
        n("54b2");
        var u = n("f0c5"), a = Object(u.a)(s.default, i.b, i.c, !1, null, "111a5be3", null, !1, i.a, void 0);
        e.default = a.exports;
    },
    f6dc: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/check_condition/_doing-create-component", {
    "pages/check_condition/_doing-create-component": function(t, e, n) {
        n("543d").createComponent(n("f439"));
    }
}, [ [ "pages/check_condition/_doing-create-component" ] ] ]);
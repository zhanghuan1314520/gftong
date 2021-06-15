require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/packageB/consultant_topic/_item" ], {
    "523b": function(n, t, e) {},
    "5dff": function(n, t, e) {
        e.r(t);
        var a = e("baf8"), o = e.n(a);
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        t.default = o.a;
    },
    "94be": function(n, t, e) {
        var a = e("523b");
        e.n(a).a;
    },
    a8c5: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {
            return a;
        });
        var a = {
            fangchanAuthUser: function() {
                return e.e("node-modules/fangchan-base/components/views/fangchan-auth-user").then(e.bind(null, "e86c"));
            }
        }, o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    baf8: function(n, t, e) {
        function a(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = a(e("e12f")), c = a(e("d80f")), u = a(e("9554")), f = e("cbd7"), i = {
            mixins: [ c.default, o.default ],
            props: {
                consultant: Object
            },
            methods: {
                onCall: function(n) {
                    var t = this;
                    this.$sendCtmEvtLog("置业顾问列表页-普通用户-点击拨打电话"), (0, u.default)(n, function() {
                        t.callConsultant(n);
                    }, "需要认证用户信息才可以咨询置业顾问");
                },
                onChat: function(n) {
                    this.$sendCtmEvtLog("置业顾问列表页-普通用户-发起微聊"), (0, f.openChat)(n, {
                        building_id: this.building_id,
                        from: ""
                    });
                }
            }
        };
        t.default = i;
    },
    f04a: function(n, t, e) {
        e.r(t);
        var a = e("a8c5"), o = e("5dff");
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        e("94be");
        var u = e("f0c5"), f = Object(u.a)(o.default, a.b, a.c, !1, null, "bd4a857a", null, !1, a.a, void 0);
        t.default = f.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/packageB/consultant_topic/_item-create-component", {
    "pages/packageB/consultant_topic/_item-create-component": function(n, t, e) {
        e("543d").createComponent(e("f04a"));
    }
}, [ [ "pages/packageB/consultant_topic/_item-create-component" ] ] ]);
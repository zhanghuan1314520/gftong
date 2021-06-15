(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/utils/path_copy" ], {
    1110: function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    "1c68": function(t, n, e) {
        e.r(n);
        var o = e("1110"), a = e("933d");
        for (var c in a) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("1ead");
        var u = e("f0c5"), s = Object(u.a)(a.default, o.b, o.c, !1, null, "5d59c8e6", null, !1, o.a, void 0);
        n.default = s.exports;
    },
    "1ead": function(t, n, e) {
        var o = e("d4c3");
        e.n(o).a;
    },
    "3b5d": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = e("a177"), a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(e("80d6")), c = e("3645"), u = {
            data: function() {
                return {
                    show_dot: !1,
                    show_console: !1,
                    show_sub_page_path: !1
                };
            },
            mounted: function() {
                this.show_sub_page_path = getCurrentPages().length > 1, setTimeout(this.check, 2e3);
            },
            methods: {
                check: function() {
                    var t = this;
                    o.App_User.getFromUserCache("tag_list").then(function(n) {
                        t.show_dot = n && n.indexOf("查看小程序路径") > -1;
                    });
                },
                toggleConsole: function() {
                    this.show_console = !this.show_console;
                },
                cpCurrentPath: function() {
                    var t = (0, c.getCurrentPath)();
                    a.default.setClipboardData(t);
                },
                cpSharePath: function() {
                    for (var t = this; t.$parent; ) t = t.$parent;
                    if (t.$options && t.$options.onShareAppMessage) {
                        var n = t.$options.onShareAppMessage[0].call(t).path, e = n.indexOf("share_by") - 1;
                        e > -1 && (n = n.substring(0, e)), a.default.setClipboardData(n);
                    } else wx.showToast({
                        title: "没有设置转发",
                        icon: "none"
                    });
                },
                cpSubPath: function() {
                    a.default.setClipboardData((0, c.getSubPagePath)());
                }
            }
        };
        n.default = u;
    },
    "933d": function(t, n, e) {
        e.r(n);
        var o = e("3b5d"), a = e.n(o);
        for (var c in o) [ "default" ].indexOf(c) < 0 && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = a.a;
    },
    d4c3: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/utils/path_copy-create-component", {
    "components/utils/path_copy-create-component": function(t, n, e) {
        e("543d").createComponent(e("1c68"));
    }
}, [ [ "components/utils/path_copy-create-component" ] ] ]);
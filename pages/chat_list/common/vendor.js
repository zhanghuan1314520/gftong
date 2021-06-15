(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/chat_list/common/vendor" ], {
    bee9: function(o, n, e) {
        var t, r;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var c = {
            getCtx: function() {
                return t;
            },
            start: function(o, n) {
                var e = n.onEnd;
                t ? r && r() : t = wx.createInnerAudioContext(), t.src = o, r = function() {
                    "function" == typeof e && e();
                }, wx.setInnerAudioOption({
                    obeyMuteSwitch: !1
                }), t.onStop(function() {
                    console.error("on stop"), r();
                }), t.onEnded(function() {
                    console.error("on end"), r();
                }), t.onError(function(o) {
                    console.error("error", o), r();
                }), t.play();
            },
            stop: function() {
                console.error("stop", t), t && t.stop(), r && r();
            },
            destroy: function() {
                t && t.destroy(), t = null;
            }
        };
        n.default = c;
    }
} ]);
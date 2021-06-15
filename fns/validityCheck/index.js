function r(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function n(u, i) {
                try {
                    var c = e[u](i), o = c.value;
                } catch (r) {
                    return void t(r);
                }
                if (!c.done) return Promise.resolve(o).then(function(r) {
                    n("next", r);
                }, function(r) {
                    n("throw", r);
                });
                r(o);
            }
            return n("next");
        });
    };
}

var e = require("wx-server-sdk");

e.init(), exports.main = function() {
    var t = r(regeneratorRuntime.mark(function r(t, n) {
        var u;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.prev = 0, r.next = 3, e.openapi.security.msgSecCheck({
                    content: t.content
                });

              case 3:
                return u = r.sent, r.abrupt("return", u);

              case 7:
                return r.prev = 7, r.t0 = r.catch(0), r.abrupt("return", r.t0);

              case 10:
              case "end":
                return r.stop();
            }
        }, r, void 0, [ [ 0, 7 ] ]);
    }));
    return function(r, e) {
        return t.apply(this, arguments);
    };
}();
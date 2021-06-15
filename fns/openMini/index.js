function r(r) {
    return function() {
        var e = r.apply(this, arguments);
        return new Promise(function(r, t) {
            function n(u, a) {
                try {
                    var i = e[u](a), o = i.value;
                } catch (r) {
                    return void t(r);
                }
                if (!i.done) return Promise.resolve(o).then(function(r) {
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

var e = function() {
    var e = r(regeneratorRuntime.mark(function r(e) {
        var u = e.path, a = e.query;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                return r.abrupt("return", t.openapi.urlscheme.generate({
                    jumpWxa: {
                        path: u,
                        query: a
                    },
                    isExpire: !0,
                    expireTime: parseInt(Date.now() / 1e3 + n)
                }));

              case 1:
              case "end":
                return r.stop();
            }
        }, r, this);
    }));
    return function(r) {
        return e.apply(this, arguments);
    };
}(), t = require("wx-server-sdk");

t.init(), exports.main = function() {
    var n = r(regeneratorRuntime.mark(function r(n, u) {
        var a;
        return regeneratorRuntime.wrap(function(r) {
            for (;;) switch (r.prev = r.next) {
              case 0:
                a = t.getWXContext(), r.t0 = n.action, r.next = "getUrlScheme" === r.t0 ? 4 : 5;
                break;

              case 4:
                return r.abrupt("return", e(n));

              case 5:
                return r.abrupt("return", "action not found");

              case 6:
              case "end":
                return r.stop();
            }
        }, r, void 0);
    }));
    return function(r, e) {
        return n.apply(this, arguments);
    };
}();

var n = 2678400;
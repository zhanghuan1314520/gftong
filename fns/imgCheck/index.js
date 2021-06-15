function e(e) {
    return function() {
        var r = e.apply(this, arguments);
        return new Promise(function(e, n) {
            function t(u, o) {
                try {
                    var i = r[u](o), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                if (!i.done) return Promise.resolve(c).then(function(e) {
                    t("next", e);
                }, function(e) {
                    t("throw", e);
                });
                e(c);
            }
            return t("next");
        });
    };
}

var r = require("request"), n = (require("fs"), require("wx-server-sdk"));

n.init(), exports.main = function() {
    var r = e(regeneratorRuntime.mark(function e(r, u) {
        var o, i, c, a, s;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, console.log(r.value), e.next = 4, t(r.value);

              case 4:
                if (o = e.sent, i = o.img, c = o.contentType, a = Buffer.byteLength(i), console.log(i, c, a), 
                !(a / 1024 / 1024 > 1)) {
                    e.next = 11;
                    break;
                }
                return e.abrupt("return", {
                    errCode: "413"
                });

              case 11:
                return e.next = 13, n.openapi.security.imgSecCheck({
                    media: {
                        contentType: "image/png",
                        value: i
                    }
                });

              case 13:
                return s = e.sent, e.abrupt("return", s);

              case 17:
                return e.prev = 17, e.t0 = e.catch(0), console.error(e.t0), e.abrupt("return", e.t0);

              case 21:
              case "end":
                return e.stop();
            }
        }, e, void 0, [ [ 0, 17 ] ]);
    }));
    return function(e, n) {
        return r.apply(this, arguments);
    };
}();

var t = function(e) {
    return new Promise(function(n, t) {
        r({
            uri: e,
            method: "GET",
            encoding: null
        }, function(e, r, u) {
            e ? t(e) : n({
                contentType: r.headers["content-type"],
                img: Buffer.from(u, "utf8")
            });
        });
    });
};
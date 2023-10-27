!(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
        ).ackeeTracker = e();
    }
})(function () {
    return (function e(t, r, n) {
        function o(a, l) {
            if (!r[a]) {
                if (!t[a]) {
                    var s = "function" == typeof require && require;
                    if (!l && s) return s(a, !0);
                    if (i) return i(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                var u = (r[a] = {exports: {}});
                t[a][0].call(
                    u.exports,
                    function (e) {
                        return o(t[a][1][e] || e);
                    },
                    u,
                    u.exports,
                    e,
                    t,
                    r,
                    n
                );
            }
            return r[a].exports;
        }
        for (
            var i = "function" == typeof require && require, a = 0;
            a < n.length;
            a++
        )
            o(n[a]);
        return o;
    })(
        {
            1: [
                function (e, t, r) {
                    (function (e) {
                        (function () {
                            (function () {
                                "use strict";
                                var n = {function: !0, object: !0},
                                    o = (n[typeof window] && window) || this,
                                    i = n[typeof r] && r,
                                    a = n[typeof t] && t && !t.nodeType && t,
                                    l = i && a && "object" == typeof e && e;
                                !l ||
                                    (l.global !== l &&
                                        l.window !== l &&
                                        l.self !== l) ||
                                    (o = l);
                                var s = Math.pow(2, 53) - 1,
                                    c = /\bOpera/,
                                    u = Object.prototype,
                                    p = u.hasOwnProperty,
                                    f = u.toString;
                                function d(e) {
                                    return (
                                        (e = String(e))
                                            .charAt(0)
                                            .toUpperCase() + e.slice(1)
                                    );
                                }
                                function b(e) {
                                    return (
                                        (e = m(e)),
                                        /^(?:webOS|i(?:OS|P))/.test(e)
                                            ? e
                                            : d(e)
                                    );
                                }
                                function h(e, t) {
                                    for (var r in e)
                                        p.call(e, r) && t(e[r], r, e);
                                }
                                function y(e) {
                                    return null == e
                                        ? d(e)
                                        : f.call(e).slice(8, -1);
                                }
                                function v(e) {
                                    return String(e).replace(
                                        /([ -])(?!$)/g,
                                        "$1?"
                                    );
                                }
                                function g(e, t) {
                                    var r = null;
                                    return (
                                        (function (e, t) {
                                            var r = -1,
                                                n = e ? e.length : 0;
                                            if (
                                                "number" == typeof n &&
                                                n > -1 &&
                                                n <= s
                                            )
                                                for (; ++r < n; ) t(e[r], r, e);
                                            else h(e, t);
                                        })(e, function (n, o) {
                                            r = t(r, n, o, e);
                                        }),
                                        r
                                    );
                                }
                                function m(e) {
                                    return String(e).replace(/^ +| +$/g, "");
                                }
                                var w = (function e(t) {
                                    var r = o,
                                        n =
                                            t &&
                                            "object" == typeof t &&
                                            "String" != y(t);
                                    n && ((r = t), (t = null));
                                    var i = r.navigator || {},
                                        a = i.userAgent || "";
                                    t || (t = a);
                                    var l,
                                        s,
                                        u,
                                        p,
                                        d,
                                        w = n
                                            ? !!i.likeChrome
                                            : /\bChrome\b/.test(t) &&
                                              !/internal|\n/i.test(
                                                  f.toString()
                                              ),
                                        x = "Object",
                                        S = n ? x : "ScriptBridgingProxyObject",
                                        O = n ? x : "Environment",
                                        E =
                                            n && r.java
                                                ? "JavaPackage"
                                                : y(r.java),
                                        P = n ? x : "RuntimeObject",
                                        M = /\bJava/.test(E) && r.java,
                                        k = M && y(r.environment) == O,
                                        I = M ? "a" : "α",
                                        A = M ? "b" : "β",
                                        C = r.document || {},
                                        R = r.operamini || r.opera,
                                        B = c.test(
                                            (B = n && R ? R["[[Class]]"] : y(R))
                                        )
                                            ? B
                                            : (R = null),
                                        L = t,
                                        W = [],
                                        j = null,
                                        T = t == a,
                                        $ =
                                            T &&
                                            R &&
                                            "function" == typeof R.version &&
                                            R.version(),
                                        F = g(
                                            [
                                                {
                                                    label: "EdgeHTML",
                                                    pattern: "Edge",
                                                },
                                                "Trident",
                                                {
                                                    label: "WebKit",
                                                    pattern: "AppleWebKit",
                                                },
                                                "iCab",
                                                "Presto",
                                                "NetFront",
                                                "Tasman",
                                                "KHTML",
                                                "Gecko",
                                            ],
                                            function (e, r) {
                                                return (
                                                    e ||
                                                    (RegExp(
                                                        "\\b" +
                                                            (r.pattern ||
                                                                v(r)) +
                                                            "\\b",
                                                        "i"
                                                    ).exec(t) &&
                                                        (r.label || r))
                                                );
                                            }
                                        ),
                                        G = (function (e) {
                                            return g(e, function (e, r) {
                                                return (
                                                    e ||
                                                    (RegExp(
                                                        "\\b" +
                                                            (r.pattern ||
                                                                v(r)) +
                                                            "\\b",
                                                        "i"
                                                    ).exec(t) &&
                                                        (r.label || r))
                                                );
                                            });
                                        })([
                                            "Adobe AIR",
                                            "Arora",
                                            "Avant Browser",
                                            "Breach",
                                            "Camino",
                                            "Electron",
                                            "Epiphany",
                                            "Fennec",
                                            "Flock",
                                            "Galeon",
                                            "GreenBrowser",
                                            "iCab",
                                            "Iceweasel",
                                            "K-Meleon",
                                            "Konqueror",
                                            "Lunascape",
                                            "Maxthon",
                                            {
                                                label: "Microsoft Edge",
                                                pattern:
                                                    "(?:Edge|Edg|EdgA|EdgiOS)",
                                            },
                                            "Midori",
                                            "Nook Browser",
                                            "PaleMoon",
                                            "PhantomJS",
                                            "Raven",
                                            "Rekonq",
                                            "RockMelt",
                                            {
                                                label: "Samsung Internet",
                                                pattern: "SamsungBrowser",
                                            },
                                            "SeaMonkey",
                                            {
                                                label: "Silk",
                                                pattern:
                                                    "(?:Cloud9|Silk-Accelerated)",
                                            },
                                            "Sleipnir",
                                            "SlimBrowser",
                                            {
                                                label: "SRWare Iron",
                                                pattern: "Iron",
                                            },
                                            "Sunrise",
                                            "Swiftfox",
                                            "Vivaldi",
                                            "Waterfox",
                                            "WebPositive",
                                            {
                                                label: "Yandex Browser",
                                                pattern: "YaBrowser",
                                            },
                                            {
                                                label: "UC Browser",
                                                pattern: "UCBrowser",
                                            },
                                            "Opera Mini",
                                            {
                                                label: "Opera Mini",
                                                pattern: "OPiOS",
                                            },
                                            "Opera",
                                            {label: "Opera", pattern: "OPR"},
                                            "Chromium",
                                            "Chrome",
                                            {
                                                label: "Chrome",
                                                pattern: "(?:HeadlessChrome)",
                                            },
                                            {
                                                label: "Chrome Mobile",
                                                pattern: "(?:CriOS|CrMo)",
                                            },
                                            {
                                                label: "Firefox",
                                                pattern:
                                                    "(?:Firefox|Minefield)",
                                            },
                                            {
                                                label: "Firefox for iOS",
                                                pattern: "FxiOS",
                                            },
                                            {label: "IE", pattern: "IEMobile"},
                                            {label: "IE", pattern: "MSIE"},
                                            "Safari",
                                        ]),
                                        N = D([
                                            {
                                                label: "BlackBerry",
                                                pattern: "BB10",
                                            },
                                            "BlackBerry",
                                            {
                                                label: "Galaxy S",
                                                pattern: "GT-I9000",
                                            },
                                            {
                                                label: "Galaxy S2",
                                                pattern: "GT-I9100",
                                            },
                                            {
                                                label: "Galaxy S3",
                                                pattern: "GT-I9300",
                                            },
                                            {
                                                label: "Galaxy S4",
                                                pattern: "GT-I9500",
                                            },
                                            {
                                                label: "Galaxy S5",
                                                pattern: "SM-G900",
                                            },
                                            {
                                                label: "Galaxy S6",
                                                pattern: "SM-G920",
                                            },
                                            {
                                                label: "Galaxy S6 Edge",
                                                pattern: "SM-G925",
                                            },
                                            {
                                                label: "Galaxy S7",
                                                pattern: "SM-G930",
                                            },
                                            {
                                                label: "Galaxy S7 Edge",
                                                pattern: "SM-G935",
                                            },
                                            "Google TV",
                                            "Lumia",
                                            "iPad",
                                            "iPod",
                                            "iPhone",
                                            "Kindle",
                                            {
                                                label: "Kindle Fire",
                                                pattern:
                                                    "(?:Cloud9|Silk-Accelerated)",
                                            },
                                            "Nexus",
                                            "Nook",
                                            "PlayBook",
                                            "PlayStation Vita",
                                            "PlayStation",
                                            "TouchPad",
                                            "Transformer",
                                            {label: "Wii U", pattern: "WiiU"},
                                            "Wii",
                                            "Xbox One",
                                            {
                                                label: "Xbox 360",
                                                pattern: "Xbox",
                                            },
                                            "Xoom",
                                        ]),
                                        _ = (function (e) {
                                            return g(e, function (e, r, n) {
                                                return (
                                                    e ||
                                                    ((r[N] ||
                                                        r[
                                                            /^[a-z]+(?: +[a-z]+\b)*/i.exec(
                                                                N
                                                            )
                                                        ] ||
                                                        RegExp(
                                                            "\\b" +
                                                                v(n) +
                                                                "(?:\\b|\\w*\\d)",
                                                            "i"
                                                        ).exec(t)) &&
                                                        n)
                                                );
                                            });
                                        })({
                                            Apple: {
                                                iPad: 1,
                                                iPhone: 1,
                                                iPod: 1,
                                            },
                                            Alcatel: {},
                                            Archos: {},
                                            Amazon: {
                                                Kindle: 1,
                                                "Kindle Fire": 1,
                                            },
                                            Asus: {Transformer: 1},
                                            "Barnes & Noble": {Nook: 1},
                                            BlackBerry: {PlayBook: 1},
                                            Google: {"Google TV": 1, Nexus: 1},
                                            HP: {TouchPad: 1},
                                            HTC: {},
                                            Huawei: {},
                                            Lenovo: {},
                                            LG: {},
                                            Microsoft: {Xbox: 1, "Xbox One": 1},
                                            Motorola: {Xoom: 1},
                                            Nintendo: {"Wii U": 1, Wii: 1},
                                            Nokia: {Lumia: 1},
                                            Oppo: {},
                                            Samsung: {
                                                "Galaxy S": 1,
                                                "Galaxy S2": 1,
                                                "Galaxy S3": 1,
                                                "Galaxy S4": 1,
                                            },
                                            Sony: {
                                                PlayStation: 1,
                                                "PlayStation Vita": 1,
                                            },
                                            Xiaomi: {Mi: 1, Redmi: 1},
                                        }),
                                        X = (function (e) {
                                            return g(e, function (e, r) {
                                                var n = r.pattern || v(r);
                                                return (
                                                    !e &&
                                                        (e = RegExp(
                                                            "\\b" +
                                                                n +
                                                                "(?:/[\\d.]+|[ \\w.]*)",
                                                            "i"
                                                        ).exec(t)) &&
                                                        (e = (function (
                                                            e,
                                                            t,
                                                            r
                                                        ) {
                                                            var n = {
                                                                "10.0": "10",
                                                                6.4: "10 Technical Preview",
                                                                6.3: "8.1",
                                                                6.2: "8",
                                                                6.1: "Server 2008 R2 / 7",
                                                                "6.0": "Server 2008 / Vista",
                                                                5.2: "Server 2003 / XP 64-bit",
                                                                5.1: "XP",
                                                                5.01: "2000 SP1",
                                                                "5.0": "2000",
                                                                "4.0": "NT",
                                                                "4.90": "ME",
                                                            };
                                                            return (
                                                                t &&
                                                                    r &&
                                                                    /^Win/i.test(
                                                                        e
                                                                    ) &&
                                                                    !/^Windows Phone /i.test(
                                                                        e
                                                                    ) &&
                                                                    (n =
                                                                        n[
                                                                            /[\d.]+$/.exec(
                                                                                e
                                                                            )
                                                                        ]) &&
                                                                    (e =
                                                                        "Windows " +
                                                                        n),
                                                                (e = String(e)),
                                                                t &&
                                                                    r &&
                                                                    (e =
                                                                        e.replace(
                                                                            RegExp(
                                                                                t,
                                                                                "i"
                                                                            ),
                                                                            r
                                                                        )),
                                                                b(
                                                                    e
                                                                        .replace(
                                                                            / ce$/i,
                                                                            " CE"
                                                                        )
                                                                        .replace(
                                                                            /\bhpw/i,
                                                                            "web"
                                                                        )
                                                                        .replace(
                                                                            /\bMacintosh\b/,
                                                                            "Mac OS"
                                                                        )
                                                                        .replace(
                                                                            /_PowerPC\b/i,
                                                                            " OS"
                                                                        )
                                                                        .replace(
                                                                            /\b(OS X) [^ \d]+/i,
                                                                            "$1"
                                                                        )
                                                                        .replace(
                                                                            /\bMac (OS X)\b/,
                                                                            "$1"
                                                                        )
                                                                        .replace(
                                                                            /\/(\d)/,
                                                                            " $1"
                                                                        )
                                                                        .replace(
                                                                            /_/g,
                                                                            "."
                                                                        )
                                                                        .replace(
                                                                            /(?: BePC|[ .]*fc[ \d.]+)$/i,
                                                                            ""
                                                                        )
                                                                        .replace(
                                                                            /\bx86\.64\b/gi,
                                                                            "x86_64"
                                                                        )
                                                                        .replace(
                                                                            /\b(Windows Phone) OS\b/,
                                                                            "$1"
                                                                        )
                                                                        .replace(
                                                                            /\b(Chrome OS \w+) [\d.]+\b/,
                                                                            "$1"
                                                                        )
                                                                        .split(
                                                                            " on "
                                                                        )[0]
                                                                )
                                                            );
                                                        })(e, n, r.label || r)),
                                                    e
                                                );
                                            });
                                        })([
                                            "Windows Phone",
                                            "KaiOS",
                                            "Android",
                                            "CentOS",
                                            {
                                                label: "Chrome OS",
                                                pattern: "CrOS",
                                            },
                                            "Debian",
                                            {
                                                label: "DragonFly BSD",
                                                pattern: "DragonFly",
                                            },
                                            "Fedora",
                                            "FreeBSD",
                                            "Gentoo",
                                            "Haiku",
                                            "Kubuntu",
                                            "Linux Mint",
                                            "OpenBSD",
                                            "Red Hat",
                                            "SuSE",
                                            "Ubuntu",
                                            "Xubuntu",
                                            "Cygwin",
                                            "Symbian OS",
                                            "hpwOS",
                                            "webOS ",
                                            "webOS",
                                            "Tablet OS",
                                            "Tizen",
                                            "Linux",
                                            "Mac OS X",
                                            "Macintosh",
                                            "Mac",
                                            "Windows 98;",
                                            "Windows ",
                                        ]);
                                    function D(e) {
                                        return g(e, function (e, r) {
                                            var n = r.pattern || v(r);
                                            return (
                                                !e &&
                                                    (e =
                                                        RegExp(
                                                            "\\b" +
                                                                n +
                                                                " *\\d+[.\\w_]*",
                                                            "i"
                                                        ).exec(t) ||
                                                        RegExp(
                                                            "\\b" +
                                                                n +
                                                                " *\\w+-[\\w]*",
                                                            "i"
                                                        ).exec(t) ||
                                                        RegExp(
                                                            "\\b" +
                                                                n +
                                                                "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                                                            "i"
                                                        ).exec(t)) &&
                                                    ((e = String(
                                                        r.label &&
                                                            !RegExp(
                                                                n,
                                                                "i"
                                                            ).test(r.label)
                                                            ? r.label
                                                            : e
                                                    ).split("/"))[1] &&
                                                        !/[\d.]+/.test(e[0]) &&
                                                        (e[0] += " " + e[1]),
                                                    (r = r.label || r),
                                                    (e = b(
                                                        e[0]
                                                            .replace(
                                                                RegExp(n, "i"),
                                                                r
                                                            )
                                                            .replace(
                                                                RegExp(
                                                                    "; *(?:" +
                                                                        r +
                                                                        "[_-])?",
                                                                    "i"
                                                                ),
                                                                " "
                                                            )
                                                            .replace(
                                                                RegExp(
                                                                    "(" +
                                                                        r +
                                                                        ")[-_.]?(\\w)",
                                                                    "i"
                                                                ),
                                                                "$1 $2"
                                                            )
                                                    ))),
                                                e
                                            );
                                        });
                                    }
                                    function K(e) {
                                        return g(e, function (e, r) {
                                            return (
                                                e ||
                                                (RegExp(
                                                    r +
                                                        "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
                                                    "i"
                                                ).exec(t) || 0)[1] ||
                                                null
                                            );
                                        });
                                    }
                                    if (
                                        (F && (F = [F]),
                                        /\bAndroid\b/.test(X) &&
                                            !N &&
                                            (l =
                                                /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(
                                                    t
                                                )) &&
                                            (N =
                                                m(l[1]).replace(
                                                    /^[a-z]{2}-[a-z]{2};\s*/i,
                                                    ""
                                                ) || null),
                                        _ && !N
                                            ? (N = D([_]))
                                            : _ &&
                                              N &&
                                              (N = N.replace(
                                                  RegExp(
                                                      "^(" + v(_) + ")[-_.\\s]",
                                                      "i"
                                                  ),
                                                  _ + " "
                                              ).replace(
                                                  RegExp(
                                                      "^(" +
                                                          v(_) +
                                                          ")[-_.]?(\\w)",
                                                      "i"
                                                  ),
                                                  _ + " $2"
                                              )),
                                        (l = /\bGoogle TV\b/.exec(N)) &&
                                            (N = l[0]),
                                        /\bSimulator\b/i.test(t) &&
                                            (N =
                                                (N ? N + " " : "") +
                                                "Simulator"),
                                        "Opera Mini" == G &&
                                            /\bOPiOS\b/.test(t) &&
                                            W.push(
                                                "running in Turbo/Uncompressed mode"
                                            ),
                                        "IE" == G &&
                                        /\blike iPhone OS\b/.test(t)
                                            ? ((_ = (l = e(
                                                  t.replace(
                                                      /like iPhone OS/,
                                                      ""
                                                  )
                                              )).manufacturer),
                                              (N = l.product))
                                            : /^iP/.test(N)
                                            ? (G || (G = "Safari"),
                                              (X =
                                                  "iOS" +
                                                  ((l = / OS ([\d_]+)/i.exec(t))
                                                      ? " " +
                                                        l[1].replace(/_/g, ".")
                                                      : "")))
                                            : "Konqueror" == G &&
                                              /^Linux\b/i.test(X)
                                            ? (X = "Kubuntu")
                                            : (_ &&
                                                  "Google" != _ &&
                                                  ((/Chrome/.test(G) &&
                                                      !/\bMobile Safari\b/i.test(
                                                          t
                                                      )) ||
                                                      /\bVita\b/.test(N))) ||
                                              (/\bAndroid\b/.test(X) &&
                                                  /^Chrome/.test(G) &&
                                                  /\bVersion\//i.test(t))
                                            ? ((G = "Android Browser"),
                                              (X = /\bAndroid\b/.test(X)
                                                  ? X
                                                  : "Android"))
                                            : "Silk" == G
                                            ? (/\bMobi/i.test(t) ||
                                                  ((X = "Android"),
                                                  W.unshift("desktop mode")),
                                              /Accelerated *= *true/i.test(t) &&
                                                  W.unshift("accelerated"))
                                            : "UC Browser" == G &&
                                              /\bUCWEB\b/.test(t)
                                            ? W.push("speed mode")
                                            : "PaleMoon" == G &&
                                              (l = /\bFirefox\/([\d.]+)\b/.exec(
                                                  t
                                              ))
                                            ? W.push(
                                                  "identifying as Firefox " +
                                                      l[1]
                                              )
                                            : "Firefox" == G &&
                                              (l =
                                                  /\b(Mobile|Tablet|TV)\b/i.exec(
                                                      t
                                                  ))
                                            ? (X || (X = "Firefox OS"),
                                              N || (N = l[1]))
                                            : !G ||
                                              (l =
                                                  !/\bMinefield\b/i.test(t) &&
                                                  /\b(?:Firefox|Safari)\b/.exec(
                                                      G
                                                  ))
                                            ? (G &&
                                                  !N &&
                                                  /[\/,]|^[^(]+?\)/.test(
                                                      t.slice(
                                                          t.indexOf(l + "/") + 8
                                                      )
                                                  ) &&
                                                  (G = null),
                                              (l = N || _ || X) &&
                                                  (N ||
                                                      _ ||
                                                      /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(
                                                          X
                                                      )) &&
                                                  (G =
                                                      /[a-z]+(?: Hat)?/i.exec(
                                                          /\bAndroid\b/.test(X)
                                                              ? X
                                                              : l
                                                      ) + " Browser"))
                                            : "Electron" == G &&
                                              (l = (/\bChrome\/([\d.]+)\b/.exec(
                                                  t
                                              ) || 0)[1]) &&
                                              W.push("Chromium " + l),
                                        $ ||
                                            ($ = K([
                                                "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
                                                "Version",
                                                v(G),
                                                "(?:Firefox|Minefield|NetFront)",
                                            ])),
                                        (l =
                                            ("iCab" == F && parseFloat($) > 3
                                                ? "WebKit"
                                                : /\bOpera\b/.test(G) &&
                                                  (/\bOPR\b/.test(t)
                                                      ? "Blink"
                                                      : "Presto")) ||
                                            (/\b(?:Midori|Nook|Safari)\b/i.test(
                                                t
                                            ) &&
                                                !/^(?:Trident|EdgeHTML)$/.test(
                                                    F
                                                ) &&
                                                "WebKit") ||
                                            (!F &&
                                                /\bMSIE\b/i.test(t) &&
                                                ("Mac OS" == X
                                                    ? "Tasman"
                                                    : "Trident")) ||
                                            ("WebKit" == F &&
                                                /\bPlayStation\b(?! Vita\b)/i.test(
                                                    G
                                                ) &&
                                                "NetFront")) && (F = [l]),
                                        "IE" == G &&
                                        (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(
                                            t
                                        ) || 0)[1])
                                            ? ((G += " Mobile"),
                                              (X =
                                                  "Windows Phone " +
                                                  (/\+$/.test(l)
                                                      ? l
                                                      : l + ".x")),
                                              W.unshift("desktop mode"))
                                            : /\bWPDesktop\b/i.test(t)
                                            ? ((G = "IE Mobile"),
                                              (X = "Windows Phone 8.x"),
                                              W.unshift("desktop mode"),
                                              $ ||
                                                  ($ = (/\brv:([\d.]+)/.exec(
                                                      t
                                                  ) || 0)[1]))
                                            : "IE" != G &&
                                              "Trident" == F &&
                                              (l = /\brv:([\d.]+)/.exec(t)) &&
                                              (G &&
                                                  W.push(
                                                      "identifying as " +
                                                          G +
                                                          ($ ? " " + $ : "")
                                                  ),
                                              (G = "IE"),
                                              ($ = l[1])),
                                        T)
                                    ) {
                                        if (
                                            ((p = "global"),
                                            (d =
                                                null != (u = r)
                                                    ? typeof u[p]
                                                    : "number"),
                                            /^(?:boolean|number|string|undefined)$/.test(
                                                d
                                            ) ||
                                                ("object" == d && !u[p]))
                                        )
                                            y((l = r.runtime)) == S
                                                ? ((G = "Adobe AIR"),
                                                  (X =
                                                      l.flash.system
                                                          .Capabilities.os))
                                                : y((l = r.phantom)) == P
                                                ? ((G = "PhantomJS"),
                                                  ($ =
                                                      (l = l.version || null) &&
                                                      l.major +
                                                          "." +
                                                          l.minor +
                                                          "." +
                                                          l.patch))
                                                : "number" ==
                                                      typeof C.documentMode &&
                                                  (l = /\bTrident\/(\d+)/i.exec(
                                                      t
                                                  ))
                                                ? (($ = [$, C.documentMode]),
                                                  (l = +l[1] + 4) != $[1] &&
                                                      (W.push(
                                                          "IE " + $[1] + " mode"
                                                      ),
                                                      F && (F[1] = ""),
                                                      ($[1] = l)),
                                                  ($ =
                                                      "IE" == G
                                                          ? String(
                                                                $[1].toFixed(1)
                                                            )
                                                          : $[0]))
                                                : "number" ==
                                                      typeof C.documentMode &&
                                                  /^(?:Chrome|Firefox)\b/.test(
                                                      G
                                                  ) &&
                                                  (W.push(
                                                      "masking as " +
                                                          G +
                                                          " " +
                                                          $
                                                  ),
                                                  (G = "IE"),
                                                  ($ = "11.0"),
                                                  (F = ["Trident"]),
                                                  (X = "Windows"));
                                        else if (
                                            (M &&
                                                ((L = (l =
                                                    M.lang.System).getProperty(
                                                    "os.arch"
                                                )),
                                                (X =
                                                    X ||
                                                    l.getProperty("os.name") +
                                                        " " +
                                                        l.getProperty(
                                                            "os.version"
                                                        ))),
                                            k)
                                        ) {
                                            try {
                                                ($ = r
                                                    .require("ringo/engine")
                                                    .version.join(".")),
                                                    (G = "RingoJS");
                                            } catch (e) {
                                                (l = r.system) &&
                                                    l.global.system ==
                                                        r.system &&
                                                    ((G = "Narwhal"),
                                                    X || (X = l[0].os || null));
                                            }
                                            G || (G = "Rhino");
                                        } else
                                            "object" == typeof r.process &&
                                                !r.process.browser &&
                                                (l = r.process) &&
                                                ("object" ==
                                                    typeof l.versions &&
                                                    ("string" ==
                                                    typeof l.versions.electron
                                                        ? (W.push(
                                                              "Node " +
                                                                  l.versions
                                                                      .node
                                                          ),
                                                          (G = "Electron"),
                                                          ($ =
                                                              l.versions
                                                                  .electron))
                                                        : "string" ==
                                                              typeof l.versions
                                                                  .nw &&
                                                          (W.push(
                                                              "Chromium " + $,
                                                              "Node " +
                                                                  l.versions
                                                                      .node
                                                          ),
                                                          (G = "NW.js"),
                                                          ($ = l.versions.nw))),
                                                G ||
                                                    ((G = "Node.js"),
                                                    (L = l.arch),
                                                    (X = l.platform),
                                                    ($ = ($ = /[\d.]+/.exec(
                                                        l.version
                                                    ))
                                                        ? $[0]
                                                        : null)));
                                        X = X && b(X);
                                    }
                                    if (
                                        ($ &&
                                            (l =
                                                /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(
                                                    $
                                                ) ||
                                                /(?:alpha|beta)(?: ?\d)?/i.exec(
                                                    t +
                                                        ";" +
                                                        (T && i.appMinorVersion)
                                                ) ||
                                                (/\bMinefield\b/i.test(t) &&
                                                    "a")) &&
                                            ((j = /b/i.test(l)
                                                ? "beta"
                                                : "alpha"),
                                            ($ =
                                                $.replace(
                                                    RegExp(l + "\\+?$"),
                                                    ""
                                                ) +
                                                ("beta" == j ? A : I) +
                                                (/\d+\+?/.exec(l) || ""))),
                                        "Fennec" == G ||
                                            ("Firefox" == G &&
                                                /\b(?:Android|Firefox OS|KaiOS)\b/.test(
                                                    X
                                                )))
                                    )
                                        G = "Firefox Mobile";
                                    else if ("Maxthon" == G && $)
                                        $ = $.replace(/\.[\d.]+/, ".x");
                                    else if (/\bXbox\b/i.test(N))
                                        "Xbox 360" == N && (X = null),
                                            "Xbox 360" == N &&
                                                /\bIEMobile\b/.test(t) &&
                                                W.unshift("mobile mode");
                                    else if (
                                        (!/^(?:Chrome|IE|Opera)$/.test(G) &&
                                            (!G ||
                                                N ||
                                                /Browser|Mobi/.test(G))) ||
                                        ("Windows CE" != X && !/Mobi/i.test(t))
                                    )
                                        if ("IE" == G && T)
                                            try {
                                                null === r.external &&
                                                    W.unshift(
                                                        "platform preview"
                                                    );
                                            } catch (e) {
                                                W.unshift("embedded");
                                            }
                                        else
                                            (/\bBlackBerry\b/.test(N) ||
                                                /\bBB10\b/.test(t)) &&
                                            (l =
                                                (RegExp(
                                                    N.replace(/ +/g, " *") +
                                                        "/([.\\d]+)",
                                                    "i"
                                                ).exec(t) || 0)[1] || $)
                                                ? ((X =
                                                      ((l = [
                                                          l,
                                                          /BB10/.test(t),
                                                      ])[1]
                                                          ? ((N = null),
                                                            (_ = "BlackBerry"))
                                                          : "Device Software") +
                                                      " " +
                                                      l[0]),
                                                  ($ = null))
                                                : this != h &&
                                                  "Wii" != N &&
                                                  ((T && R) ||
                                                      (/Opera/.test(G) &&
                                                          /\b(?:MSIE|Firefox)\b/i.test(
                                                              t
                                                          )) ||
                                                      ("Firefox" == G &&
                                                          /\bOS X (?:\d+\.){2,}/.test(
                                                              X
                                                          )) ||
                                                      ("IE" == G &&
                                                          ((X &&
                                                              !/^Win/.test(X) &&
                                                              $ > 5.5) ||
                                                              (/\bWindows XP\b/.test(
                                                                  X
                                                              ) &&
                                                                  $ > 8) ||
                                                              (8 == $ &&
                                                                  !/\bTrident\b/.test(
                                                                      t
                                                                  ))))) &&
                                                  !c.test(
                                                      (l = e.call(
                                                          h,
                                                          t.replace(c, "") + ";"
                                                      ))
                                                  ) &&
                                                  l.name &&
                                                  ((l =
                                                      "ing as " +
                                                      l.name +
                                                      ((l = l.version)
                                                          ? " " + l
                                                          : "")),
                                                  c.test(G)
                                                      ? (/\bIE\b/.test(l) &&
                                                            "Mac OS" == X &&
                                                            (X = null),
                                                        (l = "identify" + l))
                                                      : ((l = "mask" + l),
                                                        (G = B
                                                            ? b(
                                                                  B.replace(
                                                                      /([a-z])([A-Z])/g,
                                                                      "$1 $2"
                                                                  )
                                                              )
                                                            : "Opera"),
                                                        /\bIE\b/.test(l) &&
                                                            (X = null),
                                                        T || ($ = null)),
                                                  (F = ["Presto"]),
                                                  W.push(l));
                                    else G += " Mobile";
                                    (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(
                                        t
                                    ) || 0)[1]) &&
                                        ((l = [
                                            parseFloat(
                                                l.replace(/\.(\d)$/, ".0$1")
                                            ),
                                            l,
                                        ]),
                                        "Safari" == G && "+" == l[1].slice(-1)
                                            ? ((G = "WebKit Nightly"),
                                              (j = "alpha"),
                                              ($ = l[1].slice(0, -1)))
                                            : ($ != l[1] &&
                                                  $ !=
                                                      (l[2] =
                                                          (/\bSafari\/([\d.]+\+?)/i.exec(
                                                              t
                                                          ) || 0)[1])) ||
                                              ($ = null),
                                        (l[1] =
                                            (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(
                                                t
                                            ) || 0)[1]),
                                        537.36 == l[0] &&
                                            537.36 == l[2] &&
                                            parseFloat(l[1]) >= 28 &&
                                            "WebKit" == F &&
                                            (F = ["Blink"]),
                                        T && (w || l[1])
                                            ? (F && (F[1] = "like Chrome"),
                                              (l =
                                                  l[1] ||
                                                  ((l = l[0]) < 530
                                                      ? 1
                                                      : l < 532
                                                      ? 2
                                                      : l < 532.05
                                                      ? 3
                                                      : l < 533
                                                      ? 4
                                                      : l < 534.03
                                                      ? 5
                                                      : l < 534.07
                                                      ? 6
                                                      : l < 534.1
                                                      ? 7
                                                      : l < 534.13
                                                      ? 8
                                                      : l < 534.16
                                                      ? 9
                                                      : l < 534.24
                                                      ? 10
                                                      : l < 534.3
                                                      ? 11
                                                      : l < 535.01
                                                      ? 12
                                                      : l < 535.02
                                                      ? "13+"
                                                      : l < 535.07
                                                      ? 15
                                                      : l < 535.11
                                                      ? 16
                                                      : l < 535.19
                                                      ? 17
                                                      : l < 536.05
                                                      ? 18
                                                      : l < 536.1
                                                      ? 19
                                                      : l < 537.01
                                                      ? 20
                                                      : l < 537.11
                                                      ? "21+"
                                                      : l < 537.13
                                                      ? 23
                                                      : l < 537.18
                                                      ? 24
                                                      : l < 537.24
                                                      ? 25
                                                      : l < 537.36
                                                      ? 26
                                                      : "Blink" != F
                                                      ? "27"
                                                      : "28")))
                                            : (F && (F[1] = "like Safari"),
                                              (l =
                                                  (l = l[0]) < 400
                                                      ? 1
                                                      : l < 500
                                                      ? 2
                                                      : l < 526
                                                      ? 3
                                                      : l < 533
                                                      ? 4
                                                      : l < 534
                                                      ? "4+"
                                                      : l < 535
                                                      ? 5
                                                      : l < 537
                                                      ? 6
                                                      : l < 538
                                                      ? 7
                                                      : l < 601
                                                      ? 8
                                                      : l < 602
                                                      ? 9
                                                      : l < 604
                                                      ? 10
                                                      : l < 606
                                                      ? 11
                                                      : l < 608
                                                      ? 12
                                                      : "12")),
                                        F &&
                                            (F[1] +=
                                                " " +
                                                (l +=
                                                    "number" == typeof l
                                                        ? ".x"
                                                        : /[.+]/.test(l)
                                                        ? ""
                                                        : "+")),
                                        "Safari" == G &&
                                        (!$ || parseInt($) > 45)
                                            ? ($ = l)
                                            : "Chrome" == G &&
                                              /\bHeadlessChrome/i.test(t) &&
                                              W.unshift("headless")),
                                        "Opera" == G &&
                                        (l = /\bzbov|zvav$/.exec(X))
                                            ? ((G += " "),
                                              W.unshift("desktop mode"),
                                              "zvav" == l
                                                  ? ((G += "Mini"), ($ = null))
                                                  : (G += "Mobile"),
                                              (X = X.replace(
                                                  RegExp(" *" + l + "$"),
                                                  ""
                                              )))
                                            : "Safari" == G &&
                                              /\bChrome\b/.exec(F && F[1])
                                            ? (W.unshift("desktop mode"),
                                              (G = "Chrome Mobile"),
                                              ($ = null),
                                              /\bOS X\b/.test(X)
                                                  ? ((_ = "Apple"),
                                                    (X = "iOS 4.3+"))
                                                  : (X = null))
                                            : /\bSRWare Iron\b/.test(G) &&
                                              !$ &&
                                              ($ = K("Chrome")),
                                        $ &&
                                            0 ==
                                                $.indexOf(
                                                    (l = /[\d.]+$/.exec(X))
                                                ) &&
                                            t.indexOf("/" + l + "-") > -1 &&
                                            (X = m(X.replace(l, ""))),
                                        X &&
                                            -1 != X.indexOf(G) &&
                                            !RegExp(G + " OS").test(X) &&
                                            (X = X.replace(
                                                RegExp(" *" + v(G) + " *"),
                                                ""
                                            )),
                                        F &&
                                            !/\b(?:Avant|Nook)\b/.test(G) &&
                                            (/Browser|Lunascape|Maxthon/.test(
                                                G
                                            ) ||
                                                ("Safari" != G &&
                                                    /^iOS/.test(X) &&
                                                    /\bSafari\b/.test(F[1])) ||
                                                (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
                                                    G
                                                ) &&
                                                    F[1])) &&
                                            (l = F[F.length - 1]) &&
                                            W.push(l),
                                        W.length &&
                                            (W = ["(" + W.join("; ") + ")"]),
                                        _ &&
                                            N &&
                                            N.indexOf(_) < 0 &&
                                            W.push("on " + _),
                                        N &&
                                            W.push(
                                                (/^on /.test(W[W.length - 1])
                                                    ? ""
                                                    : "on ") + N
                                            ),
                                        X &&
                                            ((l = / ([\d.+]+)$/.exec(X)),
                                            (s =
                                                l &&
                                                "/" ==
                                                    X.charAt(
                                                        X.length -
                                                            l[0].length -
                                                            1
                                                    )),
                                            (X = {
                                                architecture: 32,
                                                family:
                                                    l && !s
                                                        ? X.replace(l[0], "")
                                                        : X,
                                                version: l ? l[1] : null,
                                                toString: function () {
                                                    var e = this.version;
                                                    return (
                                                        this.family +
                                                        (e && !s
                                                            ? " " + e
                                                            : "") +
                                                        (64 == this.architecture
                                                            ? " 64-bit"
                                                            : "")
                                                    );
                                                },
                                            })),
                                        (l =
                                            /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(
                                                L
                                            )) && !/\bi686\b/i.test(L)
                                            ? (X &&
                                                  ((X.architecture = 64),
                                                  (X.family = X.family.replace(
                                                      RegExp(" *" + l),
                                                      ""
                                                  ))),
                                              G &&
                                                  (/\bWOW64\b/i.test(t) ||
                                                      (T &&
                                                          /\w(?:86|32)$/.test(
                                                              i.cpuClass ||
                                                                  i.platform
                                                          ) &&
                                                          !/\bWin64; x64\b/i.test(
                                                              t
                                                          ))) &&
                                                  W.unshift("32-bit"))
                                            : X &&
                                              /^OS X/.test(X.family) &&
                                              "Chrome" == G &&
                                              parseFloat($) >= 39 &&
                                              (X.architecture = 64),
                                        t || (t = null);
                                    var V = {};
                                    return (
                                        (V.description = t),
                                        (V.layout = F && F[0]),
                                        (V.manufacturer = _),
                                        (V.name = G),
                                        (V.prerelease = j),
                                        (V.product = N),
                                        (V.ua = t),
                                        (V.version = G && $),
                                        (V.os = X || {
                                            architecture: null,
                                            family: null,
                                            version: null,
                                            toString: function () {
                                                return "null";
                                            },
                                        }),
                                        (V.parse = e),
                                        (V.toString = function () {
                                            return this.description || "";
                                        }),
                                        V.version && W.unshift($),
                                        V.name && W.unshift(G),
                                        X &&
                                            G &&
                                            (X != String(X).split(" ")[0] ||
                                                (X != G.split(" ")[0] && !N)) &&
                                            W.push(
                                                N ? "(" + X + ")" : "on " + X
                                            ),
                                        W.length &&
                                            (V.description = W.join(" ")),
                                        V
                                    );
                                })();
                                i && a
                                    ? h(w, function (e, t) {
                                          i[t] = e;
                                      })
                                    : (o.platform = w);
                            }.call(this));
                        }.call(this));
                    }.call(
                        this,
                        "undefined" != typeof global
                            ? global
                            : "undefined" != typeof self
                            ? self
                            : "undefined" != typeof window
                            ? window
                            : {}
                    ));
                },
                {},
            ],
            2: [
                function (e, t, r) {
                    "use strict";
                    function n(e) {
                        return (
                            (n =
                                "function" == typeof Symbol &&
                                "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" == typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
                                      }),
                            n(e)
                        );
                    }
                    Object.defineProperty(r, "__esModule", {value: !0}),
                        (r.detect = r.create = r.attributes = void 0);
                    var o,
                        i =
                            (o = e("platform")) && o.__esModule
                                ? o
                                : {default: o};
                    function a() {
                        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ a =
                            function () {
                                return e;
                            };
                        var e = {},
                            t = Object.prototype,
                            r = t.hasOwnProperty,
                            o = "function" == typeof Symbol ? Symbol : {},
                            i = o.iterator || "@@iterator",
                            l = o.asyncIterator || "@@asyncIterator",
                            s = o.toStringTag || "@@toStringTag";
                        function c(e, t, r) {
                            return (
                                Object.defineProperty(e, t, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                }),
                                e[t]
                            );
                        }
                        try {
                            c({}, "");
                        } catch (e) {
                            c = function (e, t, r) {
                                return (e[t] = r);
                            };
                        }
                        function u(e, t, r, n) {
                            var o = t && t.prototype instanceof d ? t : d,
                                i = Object.create(o.prototype),
                                a = new P(n || []);
                            return (
                                (i._invoke = (function (e, t, r) {
                                    var n = "suspendedStart";
                                    return function (o, i) {
                                        if ("executing" === n)
                                            throw new Error(
                                                "Generator is already running"
                                            );
                                        if ("completed" === n) {
                                            if ("throw" === o) throw i;
                                            return k();
                                        }
                                        for (r.method = o, r.arg = i; ; ) {
                                            var a = r.delegate;
                                            if (a) {
                                                var l = S(a, r);
                                                if (l) {
                                                    if (l === f) continue;
                                                    return l;
                                                }
                                            }
                                            if ("next" === r.method)
                                                r.sent = r._sent = r.arg;
                                            else if ("throw" === r.method) {
                                                if ("suspendedStart" === n)
                                                    throw (
                                                        ((n = "completed"),
                                                        r.arg)
                                                    );
                                                r.dispatchException(r.arg);
                                            } else
                                                "return" === r.method &&
                                                    r.abrupt("return", r.arg);
                                            n = "executing";
                                            var s = p(e, t, r);
                                            if ("normal" === s.type) {
                                                if (
                                                    ((n = r.done
                                                        ? "completed"
                                                        : "suspendedYield"),
                                                    s.arg === f)
                                                )
                                                    continue;
                                                return {
                                                    value: s.arg,
                                                    done: r.done,
                                                };
                                            }
                                            "throw" === s.type &&
                                                ((n = "completed"),
                                                (r.method = "throw"),
                                                (r.arg = s.arg));
                                        }
                                    };
                                })(e, r, a)),
                                i
                            );
                        }
                        function p(e, t, r) {
                            try {
                                return {type: "normal", arg: e.call(t, r)};
                            } catch (e) {
                                return {type: "throw", arg: e};
                            }
                        }
                        e.wrap = u;
                        var f = {};
                        function d() {}
                        function b() {}
                        function h() {}
                        var y = {};
                        c(y, i, function () {
                            return this;
                        });
                        var v = Object.getPrototypeOf,
                            g = v && v(v(M([])));
                        g && g !== t && r.call(g, i) && (y = g);
                        var m = (h.prototype = d.prototype = Object.create(y));
                        function w(e) {
                            ["next", "throw", "return"].forEach(function (t) {
                                c(e, t, function (e) {
                                    return this._invoke(t, e);
                                });
                            });
                        }
                        function x(e, t) {
                            function o(i, a, l, s) {
                                var c = p(e[i], e, a);
                                if ("throw" !== c.type) {
                                    var u = c.arg,
                                        f = u.value;
                                    return f &&
                                        "object" == n(f) &&
                                        r.call(f, "__await")
                                        ? t.resolve(f.__await).then(
                                              function (e) {
                                                  o("next", e, l, s);
                                              },
                                              function (e) {
                                                  o("throw", e, l, s);
                                              }
                                          )
                                        : t.resolve(f).then(
                                              function (e) {
                                                  (u.value = e), l(u);
                                              },
                                              function (e) {
                                                  return o("throw", e, l, s);
                                              }
                                          );
                                }
                                s(c.arg);
                            }
                            var i;
                            this._invoke = function (e, r) {
                                function n() {
                                    return new t(function (t, n) {
                                        o(e, r, t, n);
                                    });
                                }
                                return (i = i ? i.then(n, n) : n());
                            };
                        }
                        function S(e, t) {
                            var r = e.iterator[t.method];
                            if (void 0 === r) {
                                if (
                                    ((t.delegate = null), "throw" === t.method)
                                ) {
                                    if (
                                        e.iterator.return &&
                                        ((t.method = "return"),
                                        (t.arg = void 0),
                                        S(e, t),
                                        "throw" === t.method)
                                    )
                                        return f;
                                    (t.method = "throw"),
                                        (t.arg = new TypeError(
                                            "The iterator does not provide a 'throw' method"
                                        ));
                                }
                                return f;
                            }
                            var n = p(r, e.iterator, t.arg);
                            if ("throw" === n.type)
                                return (
                                    (t.method = "throw"),
                                    (t.arg = n.arg),
                                    (t.delegate = null),
                                    f
                                );
                            var o = n.arg;
                            return o
                                ? o.done
                                    ? ((t[e.resultName] = o.value),
                                      (t.next = e.nextLoc),
                                      "return" !== t.method &&
                                          ((t.method = "next"),
                                          (t.arg = void 0)),
                                      (t.delegate = null),
                                      f)
                                    : o
                                : ((t.method = "throw"),
                                  (t.arg = new TypeError(
                                      "iterator result is not an object"
                                  )),
                                  (t.delegate = null),
                                  f);
                        }
                        function O(e) {
                            var t = {tryLoc: e[0]};
                            1 in e && (t.catchLoc = e[1]),
                                2 in e &&
                                    ((t.finallyLoc = e[2]),
                                    (t.afterLoc = e[3])),
                                this.tryEntries.push(t);
                        }
                        function E(e) {
                            var t = e.completion || {};
                            (t.type = "normal"),
                                delete t.arg,
                                (e.completion = t);
                        }
                        function P(e) {
                            (this.tryEntries = [{tryLoc: "root"}]),
                                e.forEach(O, this),
                                this.reset(!0);
                        }
                        function M(e) {
                            if (e) {
                                var t = e[i];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var n = -1,
                                        o = function t() {
                                            for (; ++n < e.length; )
                                                if (r.call(e, n))
                                                    return (
                                                        (t.value = e[n]),
                                                        (t.done = !1),
                                                        t
                                                    );
                                            return (
                                                (t.value = void 0),
                                                (t.done = !0),
                                                t
                                            );
                                        };
                                    return (o.next = o);
                                }
                            }
                            return {next: k};
                        }
                        function k() {
                            return {value: void 0, done: !0};
                        }
                        return (
                            (b.prototype = h),
                            c(m, "constructor", h),
                            c(h, "constructor", b),
                            (b.displayName = c(h, s, "GeneratorFunction")),
                            (e.isGeneratorFunction = function (e) {
                                var t = "function" == typeof e && e.constructor;
                                return (
                                    !!t &&
                                    (t === b ||
                                        "GeneratorFunction" ===
                                            (t.displayName || t.name))
                                );
                            }),
                            (e.mark = function (e) {
                                return (
                                    Object.setPrototypeOf
                                        ? Object.setPrototypeOf(e, h)
                                        : ((e.__proto__ = h),
                                          c(e, s, "GeneratorFunction")),
                                    (e.prototype = Object.create(m)),
                                    e
                                );
                            }),
                            (e.awrap = function (e) {
                                return {__await: e};
                            }),
                            w(x.prototype),
                            c(x.prototype, l, function () {
                                return this;
                            }),
                            (e.AsyncIterator = x),
                            (e.async = function (t, r, n, o, i) {
                                void 0 === i && (i = Promise);
                                var a = new x(u(t, r, n, o), i);
                                return e.isGeneratorFunction(r)
                                    ? a
                                    : a.next().then(function (e) {
                                          return e.done ? e.value : a.next();
                                      });
                            }),
                            w(m),
                            c(m, s, "Generator"),
                            c(m, i, function () {
                                return this;
                            }),
                            c(m, "toString", function () {
                                return "[object Generator]";
                            }),
                            (e.keys = function (e) {
                                var t = [];
                                for (var r in e) t.push(r);
                                return (
                                    t.reverse(),
                                    function r() {
                                        for (; t.length; ) {
                                            var n = t.pop();
                                            if (n in e)
                                                return (
                                                    (r.value = n),
                                                    (r.done = !1),
                                                    r
                                                );
                                        }
                                        return (r.done = !0), r;
                                    }
                                );
                            }),
                            (e.values = M),
                            (P.prototype = {
                                constructor: P,
                                reset: function (e) {
                                    if (
                                        ((this.prev = 0),
                                        (this.next = 0),
                                        (this.sent = this._sent = void 0),
                                        (this.done = !1),
                                        (this.delegate = null),
                                        (this.method = "next"),
                                        (this.arg = void 0),
                                        this.tryEntries.forEach(E),
                                        !e)
                                    )
                                        for (var t in this)
                                            "t" === t.charAt(0) &&
                                                r.call(this, t) &&
                                                !isNaN(+t.slice(1)) &&
                                                (this[t] = void 0);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type) throw e.arg;
                                    return this.rval;
                                },
                                dispatchException: function (e) {
                                    if (this.done) throw e;
                                    var t = this;
                                    function n(r, n) {
                                        return (
                                            (a.type = "throw"),
                                            (a.arg = e),
                                            (t.next = r),
                                            n &&
                                                ((t.method = "next"),
                                                (t.arg = void 0)),
                                            !!n
                                        );
                                    }
                                    for (
                                        var o = this.tryEntries.length - 1;
                                        o >= 0;
                                        --o
                                    ) {
                                        var i = this.tryEntries[o],
                                            a = i.completion;
                                        if ("root" === i.tryLoc)
                                            return n("end");
                                        if (i.tryLoc <= this.prev) {
                                            var l = r.call(i, "catchLoc"),
                                                s = r.call(i, "finallyLoc");
                                            if (l && s) {
                                                if (this.prev < i.catchLoc)
                                                    return n(i.catchLoc, !0);
                                                if (this.prev < i.finallyLoc)
                                                    return n(i.finallyLoc);
                                            } else if (l) {
                                                if (this.prev < i.catchLoc)
                                                    return n(i.catchLoc, !0);
                                            } else {
                                                if (!s)
                                                    throw new Error(
                                                        "try statement without catch or finally"
                                                    );
                                                if (this.prev < i.finallyLoc)
                                                    return n(i.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (e, t) {
                                    for (
                                        var n = this.tryEntries.length - 1;
                                        n >= 0;
                                        --n
                                    ) {
                                        var o = this.tryEntries[n];
                                        if (
                                            o.tryLoc <= this.prev &&
                                            r.call(o, "finallyLoc") &&
                                            this.prev < o.finallyLoc
                                        ) {
                                            var i = o;
                                            break;
                                        }
                                    }
                                    i &&
                                        ("break" === e || "continue" === e) &&
                                        i.tryLoc <= t &&
                                        t <= i.finallyLoc &&
                                        (i = null);
                                    var a = i ? i.completion : {};
                                    return (
                                        (a.type = e),
                                        (a.arg = t),
                                        i
                                            ? ((this.method = "next"),
                                              (this.next = i.finallyLoc),
                                              f)
                                            : this.complete(a)
                                    );
                                },
                                complete: function (e, t) {
                                    if ("throw" === e.type) throw e.arg;
                                    return (
                                        "break" === e.type ||
                                        "continue" === e.type
                                            ? (this.next = e.arg)
                                            : "return" === e.type
                                            ? ((this.rval = this.arg = e.arg),
                                              (this.method = "return"),
                                              (this.next = "end"))
                                            : "normal" === e.type &&
                                              t &&
                                              (this.next = t),
                                        f
                                    );
                                },
                                finish: function (e) {
                                    for (
                                        var t = this.tryEntries.length - 1;
                                        t >= 0;
                                        --t
                                    ) {
                                        var r = this.tryEntries[t];
                                        if (r.finallyLoc === e)
                                            return (
                                                this.complete(
                                                    r.completion,
                                                    r.afterLoc
                                                ),
                                                E(r),
                                                f
                                            );
                                    }
                                },
                                catch: function (e) {
                                    for (
                                        var t = this.tryEntries.length - 1;
                                        t >= 0;
                                        --t
                                    ) {
                                        var r = this.tryEntries[t];
                                        if (r.tryLoc === e) {
                                            var n = r.completion;
                                            if ("throw" === n.type) {
                                                var o = n.arg;
                                                E(r);
                                            }
                                            return o;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (e, t, r) {
                                    return (
                                        (this.delegate = {
                                            iterator: M(e),
                                            resultName: t,
                                            nextLoc: r,
                                        }),
                                        "next" === this.method &&
                                            (this.arg = void 0),
                                        f
                                    );
                                },
                            }),
                            e
                        );
                    }
                    function l(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t &&
                                (n = n.filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(
                                        e,
                                        t
                                    ).enumerable;
                                })),
                                r.push.apply(r, n);
                        }
                        return r;
                    }
                    function s(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? l(Object(r), !0).forEach(function (t) {
                                      c(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(
                                      e,
                                      Object.getOwnPropertyDescriptors(r)
                                  )
                                : l(Object(r)).forEach(function (t) {
                                      Object.defineProperty(
                                          e,
                                          t,
                                          Object.getOwnPropertyDescriptor(r, t)
                                      );
                                  });
                        }
                        return e;
                    }
                    function c(e, t, r) {
                        return (
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r),
                            e
                        );
                    }
                    function u(e, t, r, n, o, i, a) {
                        try {
                            var l = e[i](a),
                                s = l.value;
                        } catch (e) {
                            return void r(e);
                        }
                        l.done ? t(s) : Promise.resolve(s).then(n, o);
                    }
                    function p(e) {
                        return function () {
                            var t = this,
                                r = arguments;
                            return new Promise(function (n, o) {
                                var i = e.apply(t, r);
                                function a(e) {
                                    u(i, n, o, a, l, "next", e);
                                }
                                function l(e) {
                                    u(i, n, o, a, l, "throw", e);
                                }
                                a(void 0);
                            });
                        };
                    }
                    var f = "undefined" != typeof window,
                        d = function (e) {
                            return "88888888-8888-8888-8888-888888888888" === e;
                        },
                        b = function () {
                            return "hidden" === document.visibilityState;
                        },
                        h = function () {
                            var e = (
                                location.search.split("source=")[1] || ""
                            ).split("&")[0];
                            return "" === e ? void 0 : e;
                        },
                        y = (function () {
                            var e = p(
                                a().mark(function e() {
                                    var t,
                                        r,
                                        n,
                                        o = arguments;
                                    return a().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (t =
                                                            o.length > 0 &&
                                                            void 0 !== o[0] &&
                                                            o[0]),
                                                        (r = {
                                                            siteLocation:
                                                                window.location
                                                                    .href,
                                                            siteReferrer:
                                                                document.referrer,
                                                            source: h(),
                                                        }),
                                                        (e.t0 = (
                                                            navigator.language ||
                                                            navigator.userLanguage
                                                        ).substr(0, 2)),
                                                        (e.t1 = screen.width),
                                                        (e.t2 = screen.height),
                                                        (e.t3 =
                                                            screen.colorDepth),
                                                        (e.t4 =
                                                            i.default.product),
                                                        (e.t5 =
                                                            i.default.manufacturer),
                                                        (e.t6 =
                                                            i.default.os.family),
                                                        (e.t7 =
                                                            i.default.os.version),
                                                        (e.t8 = i.default.name),
                                                        (e.t9 =
                                                            i.default.version),
                                                        (e.t10 =
                                                            window.outerWidth),
                                                        (e.t11 =
                                                            window.outerHeight),
                                                        (e.next = 16),
                                                        fetch(
                                                            "https://api.ipify.org?format=json"
                                                        )
                                                    );
                                                case 16:
                                                    return (
                                                        (e.next = 18),
                                                        e.sent.json()
                                                    );
                                                case 18:
                                                    return (
                                                        (e.t12 = e.sent.ip),
                                                        (n = {
                                                            siteLanguage: e.t0,
                                                            screenWidth: e.t1,
                                                            screenHeight: e.t2,
                                                            screenColorDepth:
                                                                e.t3,
                                                            deviceName: e.t4,
                                                            deviceManufacturer:
                                                                e.t5,
                                                            osName: e.t6,
                                                            osVersion: e.t7,
                                                            browserName: e.t8,
                                                            browserVersion:
                                                                e.t9,
                                                            browserWidth: e.t10,
                                                            browserHeight:
                                                                e.t11,
                                                            country: e.t12,
                                                        }),
                                                        e.abrupt(
                                                            "return",
                                                            s(
                                                                s({}, r),
                                                                !0 === t
                                                                    ? n
                                                                    : {}
                                                            )
                                                        )
                                                    );
                                                case 21:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function () {
                                return e.apply(this, arguments);
                            };
                        })();
                    r.attributes = y;
                    var v = function (e, t) {
                            return {
                                query: "\n\t\t\tmutation createRecord($domainId: ID!, $input: CreateRecordInput!) {\n\t\t\t\tcreateRecord(domainId: $domainId, input: $input) {\n\t\t\t\t\tpayload {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                variables: {domainId: e, input: t},
                            };
                        },
                        g = function (e) {
                            return {
                                query: "\n\t\t\tmutation updateRecord($recordId: ID!) {\n\t\t\t\tupdateRecord(id: $recordId) {\n\t\t\t\t\tsuccess\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                variables: {recordId: e},
                            };
                        },
                        m = function (e, t, r, n) {
                            var o = new XMLHttpRequest();
                            o.open("POST", e),
                                (o.onload = function () {
                                    if (200 !== o.status)
                                        throw new Error(
                                            "Server returned with an unhandled status"
                                        );
                                    var e = null;
                                    try {
                                        e = JSON.parse(o.responseText);
                                    } catch (e) {
                                        throw new Error(
                                            "Failed to parse response from server"
                                        );
                                    }
                                    if (null != e.errors)
                                        throw new Error(e.errors[0].message);
                                    if ("function" == typeof n) return n(e);
                                }),
                                o.setRequestHeader(
                                    "Content-Type",
                                    "application/json;charset=UTF-8"
                                ),
                                (o.withCredentials = r.ignoreOwnVisits),
                                o.send(JSON.stringify(t));
                        },
                        w = function () {
                            var e = document.querySelector(
                                "[data-ackee-domain-id]"
                            );
                            if (null != e) {
                                var t =
                                        e.getAttribute("data-ackee-server") ||
                                        "",
                                    r = e.getAttribute("data-ackee-domain-id"),
                                    n =
                                        e.getAttribute("data-ackee-opts") ||
                                        "{}";
                                x(t, JSON.parse(n)).record(r);
                            }
                        };
                    r.detect = w;
                    var x = function (e, t) {
                        t = (function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : {},
                                t = {};
                            return (
                                (t.detailed = !0 === e.detailed),
                                (t.ignoreLocalhost = !1 !== e.ignoreLocalhost),
                                (t.ignoreOwnVisits = !1 !== e.ignoreOwnVisits),
                                t
                            );
                        })(t);
                        var r,
                            n,
                            o = (function (e) {
                                var t = "/" === e.substr(-1);
                                return e + (!0 === t ? "" : "/") + "api";
                            })(e),
                            i = function () {},
                            l = {
                                record: function () {
                                    return {stop: i};
                                },
                                updateRecord: function () {
                                    return {stop: i};
                                },
                                action: i,
                                updateAction: i,
                            };
                        if (
                            !0 === t.ignoreLocalhost &&
                            !0 ==
                                ("" === (r = location.hostname) ||
                                    "localhost" === r ||
                                    "127.0.0.1" === r ||
                                    "::1" === r)
                        )
                            return (
                                console.warn(
                                    "Ackee ignores you because you are on localhost"
                                ),
                                l
                            );
                        if (
                            !0 ===
                            ((n = navigator.userAgent),
                            /bot|crawler|spider|crawling/i.test(n))
                        )
                            return (
                                console.warn(
                                    "Ackee ignores you because you are a bot"
                                ),
                                l
                            );
                        var s = (function () {
                            var e = p(
                                a().mark(function e(r) {
                                    var n,
                                        i,
                                        l,
                                        s,
                                        c = arguments;
                                    return a().wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        (n =
                                                            c.length > 1 &&
                                                            void 0 !== c[1]
                                                                ? c[1]
                                                                : y(
                                                                      t.detailed
                                                                  )),
                                                        (i =
                                                            c.length > 2
                                                                ? c[2]
                                                                : void 0),
                                                        (l = !1),
                                                        (s = function () {
                                                            l = !0;
                                                        }),
                                                        (e.next = 6),
                                                        y(t.detailed)
                                                    );
                                                case 6:
                                                    return (
                                                        (n = e.sent),
                                                        m(
                                                            o,
                                                            v(r, n),
                                                            t,
                                                            function (e) {
                                                                var r =
                                                                    e.data
                                                                        .createRecord
                                                                        .payload
                                                                        .id;
                                                                if (!0 === d(r))
                                                                    return console.warn(
                                                                        "Ackee ignores you because this is your own site"
                                                                    );
                                                                var n =
                                                                    setInterval(
                                                                        function () {
                                                                            !0 !==
                                                                            l
                                                                                ? !0 !==
                                                                                      b() &&
                                                                                  m(
                                                                                      o,
                                                                                      g(
                                                                                          r
                                                                                      ),
                                                                                      t
                                                                                  )
                                                                                : clearInterval(
                                                                                      n
                                                                                  );
                                                                        },
                                                                        15e3
                                                                    );
                                                                return "function" ==
                                                                    typeof i
                                                                    ? i(r)
                                                                    : void 0;
                                                            }
                                                        ),
                                                        e.abrupt("return", {
                                                            stop: s,
                                                        })
                                                    );
                                                case 9:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                        return {
                            record: s,
                            updateRecord: function (e) {
                                var r = !1,
                                    n = function () {
                                        r = !0;
                                    };
                                if (!0 === d(e))
                                    return (
                                        console.warn(
                                            "Ackee ignores you because this is your own site"
                                        ),
                                        {stop: n}
                                    );
                                var i = setInterval(function () {
                                    !0 !== r
                                        ? !0 !== b() && m(o, g(e), t)
                                        : clearInterval(i);
                                }, 15e3);
                                return {stop: n};
                            },
                            action: function (e, r, n) {
                                m(
                                    o,
                                    (function (e, t) {
                                        return {
                                            query: "\n\t\t\tmutation createAction($eventId: ID!, $input: CreateActionInput!) {\n\t\t\t\tcreateAction(eventId: $eventId, input: $input) {\n\t\t\t\t\tpayload {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                            variables: {eventId: e, input: t},
                                        };
                                    })(e, r),
                                    t,
                                    function (e) {
                                        var t = e.data.createAction.payload.id;
                                        return !0 === d(t)
                                            ? console.warn(
                                                  "Ackee ignores you because this is your own site"
                                              )
                                            : "function" == typeof n
                                            ? n(t)
                                            : void 0;
                                    }
                                );
                            },
                            updateAction: function (e, r) {
                                if (!0 === d(e))
                                    return console.warn(
                                        "Ackee ignores you because this is your own site"
                                    );
                                m(
                                    o,
                                    (function (e, t) {
                                        return {
                                            query: "\n\t\t\tmutation updateAction($actionId: ID!, $input: UpdateActionInput!) {\n\t\t\t\tupdateAction(id: $actionId, input: $input) {\n\t\t\t\t\tsuccess\n\t\t\t\t}\n\t\t\t}\n\t\t",
                                            variables: {actionId: e, input: t},
                                        };
                                    })(e, r),
                                    t
                                );
                            },
                        };
                    };
                    (r.create = x), !0 === f && w();
                },
                {platform: 1},
            ],
        },
        {},
        [2]
    )(2);
});

(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const n of i)
            if (n.type === "childList")
                for (const s of n.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity),
        i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const n = t(i);
        fetch(i.href, n)
    }
}
)();
class Hh {
    constructor() {
        this.blocks = document.querySelectorAll("[data-block]"),
        this.init()
    }
    init() {
        this.blocks.forEach(e => {
            const t = e.getAttribute("data-block");
            this.createBlock(t, e)
        }
        )
    }
    createBlock() {
        return console.error("No createBlock for this factory"),
        null
    }
}
function zr(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function Sc(o, e) {
    o.prototype = Object.create(e.prototype),
    o.prototype.constructor = o,
    o.__proto__ = e
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Jt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, En = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ml, Bt, lt, cr = 1e8, Fe = 1 / cr, ka = Math.PI * 2, Gh = ka / 4, Wh = 0, kc = Math.sqrt, jh = Math.cos, Uh = Math.sin, gt = function(e) {
    return typeof e == "string"
}, et = function(e) {
    return typeof e == "function"
}, Qr = function(e) {
    return typeof e == "number"
}, yl = function(e) {
    return typeof e > "u"
}, Ir = function(e) {
    return typeof e == "object"
}, zt = function(e) {
    return e !== !1
}, Pc = function() {
    return typeof window < "u"
}, No = function(e) {
    return et(e) || gt(e)
}, Mc = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, kt = Array.isArray, Pa = /(?:-?\.?\d|\.)+/gi, Ec = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, un = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Us = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Oc = /[+-]=-?[.\d]+/, Cc = /[^,'"\[\]\s]+/gi, Kh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ke, ar, Ma, vl, er = {}, xs = {}, Dc, Ac = function(e) {
    return (xs = Vi(e, er)) && tr
}, wl = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, Ts = function(e, t) {
    return !t && console.warn(e)
}, Lc = function(e, t) {
    return e && (er[e] = t) && xs && (xs[e] = t) || er
}, wo = function() {
    return 0
}, Qh = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, is = {
    suppressEvents: !0,
    kill: !1
}, Zh = {
    suppressEvents: !0
}, bl = {}, ci = [], Ea = {}, Rc, jt = {}, Ks = {}, Ql = 30, ns = [], xl = "", Tl = function(e) {
    var t = e[0], r, i;
    if (Ir(t) || et(t) || (e = [e]),
    !(r = (t._gsap || {}).harness)) {
        for (i = ns.length; i-- && !ns[i].targetTest(t); )
            ;
        r = ns[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new rf(e[i],r))) || e.splice(i, 1);
    return e
}, Ri = function(e) {
    return e._gsap || Tl(fr(e))[0]._gsap
}, Fc = function(e, t, r) {
    return (r = e[t]) && et(r) ? e[t]() : yl(r) && e.getAttribute && e.getAttribute(t) || r
}, Yt = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, ot = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, vt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, mn = function(e, t) {
    var r = t.charAt(0)
      , i = parseFloat(t.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, Jh = function(e, t) {
    for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
        ;
    return i < r
}, Ss = function() {
    var e = ci.length, t = ci.slice(0), r, i;
    for (Ea = {},
    ci.length = 0,
    r = 0; r < e; r++)
        i = t[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, Nc = function(e, t, r, i) {
    ci.length && Ss(),
    e.render(t, r, i || Bt && t < 0 && (e._initted || e._startAt)),
    ci.length && Ss()
}, Ic = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Cc).length < 2 ? t : gt(e) ? e.trim() : e
}, $c = function(e) {
    return e
}, gr = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, ed = function(e) {
    return function(t, r) {
        for (var i in r)
            i in t || i === "duration" && e || i === "ease" || (t[i] = r[i])
    }
}, Vi = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, Zl = function o(e, t) {
    for (var r in t)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Ir(t[r]) ? o(e[r] || (e[r] = {}), t[r]) : t[r]);
    return e
}, ks = function(e, t) {
    var r = {}, i;
    for (i in e)
        i in t || (r[i] = e[i]);
    return r
}, ro = function(e) {
    var t = e.parent || Ke
      , r = e.keyframes ? ed(kt(e.keyframes)) : gr;
    if (zt(e.inherit))
        for (; t; )
            r(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, td = function(e, t) {
    for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
        ;
    return r < 0
}, Bc = function(e, t, r, i, n) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var s = e[i], a;
    if (n)
        for (a = t[n]; s && s[n] > a; )
            s = s._prev;
    return s ? (t._next = s._next,
    s._next = t) : (t._next = e[r],
    e[r] = t),
    t._next ? t._next._prev = t : e[i] = t,
    t._prev = s,
    t.parent = t._dp = e,
    t
}, Vs = function(e, t, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var n = t._prev
      , s = t._next;
    n ? n._next = s : e[r] === t && (e[r] = s),
    s ? s._prev = n : e[i] === t && (e[i] = n),
    t._next = t._prev = t.parent = null
}, pi = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e),
    e._act = 0
}, Fi = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, rd = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Oa = function(e, t, r, i) {
    return e._startAt && (Bt ? e._startAt.revert(is) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
}, id = function o(e) {
    return !e || e._ts && o(e.parent)
}, Jl = function(e) {
    return e._repeat ? On(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, On = function(e, t) {
    var r = Math.floor(e /= t);
    return e && r === e ? r - 1 : r
}, Ps = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, qs = function(e) {
    return e._end = vt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Fe) || 0))
}, Hs = function(e, t) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = vt(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    qs(e),
    r._dirty || Fi(r, e)),
    e
}, zc = function(e, t) {
    var r;
    if ((t._time || t._initted && !t._dur) && (r = Ps(e.rawTime(), t),
    (!t._dur || Ro(0, t.totalDuration(), r) - t._tTime > Fe) && t.render(r, !0)),
    Fi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -Fe
    }
}, Dr = function(e, t, r, i) {
    return t.parent && pi(t),
    t._start = vt((Qr(r) ? r : r || e !== Ke ? sr(e, r, t) : e._time) + t._delay),
    t._end = vt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    Bc(e, t, "_first", "_last", e._sort ? "_start" : 0),
    Ca(t) || (e._recent = t),
    i || zc(e, t),
    e._ts < 0 && Hs(e, e._tTime),
    e
}, Yc = function(e, t) {
    return (er.ScrollTrigger || wl("scrollTrigger", t)) && er.ScrollTrigger.create(t, e)
}, Xc = function(e, t, r, i, n) {
    if (kl(e, t, n),
    !e._initted)
        return 1;
    if (!r && e._pt && !Bt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Rc !== Ut.frame)
        return ci.push(e),
        e._lazy = [n, i],
        1
}, nd = function o(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t))
}, Ca = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, od = function(e, t, r, i) {
    var n = e.ratio, s = t < 0 || !t && (!e._start && nd(e) && !(!e._initted && Ca(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ca(e)) ? 0 : 1, a = e._rDelay, l = 0, u, f, h;
    if (a && e._repeat && (l = Ro(0, e._tDur, t),
    f = On(l, a),
    e._yoyo && f & 1 && (s = 1 - s),
    f !== On(e._tTime, a) && (n = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== n || Bt || i || e._zTime === Fe || !t && e._zTime) {
        if (!e._initted && Xc(e, t, i, r, l))
            return;
        for (h = e._zTime,
        e._zTime = t || (r ? Fe : 0),
        r || (r = t && !h),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = l,
        u = e._pt; u; )
            u.r(s, u.d),
            u = u._next;
        t < 0 && Oa(e, t, r, !0),
        e._onUpdate && !r && hr(e, "onUpdate"),
        l && e._repeat && !r && e.parent && hr(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === s && (s && pi(e, 1),
        !r && !Bt && (hr(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, sd = function(e, t, r) {
    var i;
    if (r > t)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > t)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < t)
                return i;
            i = i._prev
        }
}, Cn = function(e, t, r, i) {
    var n = e._repeat
      , s = vt(t) || 0
      , a = e._tTime / e._tDur;
    return a && !i && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = n ? n < 0 ? 1e10 : vt(s * (n + 1) + e._rDelay * n) : s,
    a > 0 && !i && Hs(e, e._tTime = e._tDur * a),
    e.parent && qs(e),
    r || Fi(e.parent, e),
    e
}, eu = function(e) {
    return e instanceof It ? Fi(e) : Cn(e, e._dur)
}, ad = {
    _start: 0,
    endTime: wo,
    totalDuration: wo
}, sr = function o(e, t, r) {
    var i = e.labels, n = e._recent || ad, s = e.duration() >= cr ? n.endTime(!1) : e._dur, a, l, u;
    return gt(t) && (isNaN(t) || t in i) ? (l = t.charAt(0),
    u = t.substr(-1) === "%",
    a = t.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s),
    i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
    u && r && (l = l / 100 * (kt(r) ? r[0] : r).totalDuration()),
    a > 1 ? o(e, t.substr(0, a - 1), r) + l : s + l)) : t == null ? s : +t
}, io = function(e, t, r) {
    var i = Qr(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], a, l;
    if (i && (s.duration = t[1]),
    s.parent = r,
    e) {
        for (a = s,
        l = r; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = zt(l.vars.inherit) && l.parent;
        s.immediateRender = zt(a.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
    }
    return new ft(t[0],s,t[n + 1])
}, vi = function(e, t) {
    return e || e === 0 ? t(e) : t
}, Ro = function(e, t, r) {
    return r < e ? e : r > t ? t : r
}, Tt = function(e, t) {
    return !gt(e) || !(t = Kh.exec(e)) ? "" : t[1]
}, ld = function(e, t, r) {
    return vi(r, function(i) {
        return Ro(e, t, i)
    })
}, Da = [].slice, Vc = function(e, t) {
    return e && Ir(e) && "length"in e && (!t && !e.length || e.length - 1 in e && Ir(e[0])) && !e.nodeType && e !== ar
}, ud = function(e, t, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var n;
        return gt(i) && !t || Vc(i, 1) ? (n = r).push.apply(n, fr(i)) : r.push(i)
    }) || r
}, fr = function(e, t, r) {
    return lt && !t && lt.selector ? lt.selector(e) : gt(e) && !r && (Ma || !Dn()) ? Da.call((t || vl).querySelectorAll(e), 0) : kt(e) ? ud(e, r) : Vc(e) ? Da.call(e, 0) : e ? [e] : []
}, Aa = function(e) {
    return e = fr(e)[0] || Ts("Invalid scope") || {},
    function(t) {
        var r = e.current || e.nativeElement || e;
        return fr(t, r.querySelectorAll ? r : r === e ? Ts("Invalid scope") || vl.createElement("div") : e)
    }
}, qc = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Hc = function(e) {
    if (et(e))
        return e;
    var t = Ir(e) ? e : {
        each: e
    }
      , r = Ni(t.ease)
      , i = t.from || 0
      , n = parseFloat(t.base) || 0
      , s = {}
      , a = i > 0 && i < 1
      , l = isNaN(i) || a
      , u = t.axis
      , f = i
      , h = i;
    return gt(i) ? f = h = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !a && l && (f = i[0],
    h = i[1]),
    function(d, c, p) {
        var g = (p || t).length, _ = s[g], v, y, m, b, w, T, k, S, C;
        if (!_) {
            if (C = t.grid === "auto" ? 0 : (t.grid || [1, cr])[1],
            !C) {
                for (k = -cr; k < (k = p[C++].getBoundingClientRect().left) && C < g; )
                    ;
                C--
            }
            for (_ = s[g] = [],
            v = l ? Math.min(C, g) * f - .5 : i % C,
            y = C === cr ? 0 : l ? g * h / C - .5 : i / C | 0,
            k = 0,
            S = cr,
            T = 0; T < g; T++)
                m = T % C - v,
                b = y - (T / C | 0),
                _[T] = w = u ? Math.abs(u === "y" ? b : m) : kc(m * m + b * b),
                w > k && (k = w),
                w < S && (S = w);
            i === "random" && qc(_),
            _.max = k - S,
            _.min = S,
            _.v = g = (parseFloat(t.amount) || parseFloat(t.each) * (C > g ? g - 1 : u ? u === "y" ? g / C : C : Math.max(C, g / C)) || 0) * (i === "edges" ? -1 : 1),
            _.b = g < 0 ? n - g : n,
            _.u = Tt(t.amount || t.each) || 0,
            r = r && g < 0 ? Jc(r) : r
        }
        return g = (_[d] - _.min) / _.max || 0,
        vt(_.b + (r ? r(g) : g) * _.v) + _.u
    }
}, La = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = vt(Math.round(parseFloat(r) / e) * e * t);
        return (i - i % 1) / t + (Qr(r) ? 0 : Tt(r))
    }
}, Gc = function(e, t) {
    var r = kt(e), i, n;
    return !r && Ir(e) && (i = r = e.radius || cr,
    e.values ? (e = fr(e.values),
    (n = !Qr(e[0])) && (i *= i)) : e = La(e.increment)),
    vi(t, r ? et(e) ? function(s) {
        return n = e(s),
        Math.abs(n - s) <= i ? n : s
    }
    : function(s) {
        for (var a = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), u = cr, f = 0, h = e.length, d, c; h--; )
            n ? (d = e[h].x - a,
            c = e[h].y - l,
            d = d * d + c * c) : d = Math.abs(e[h] - a),
            d < u && (u = d,
            f = h);
        return f = !i || u <= i ? e[f] : s,
        n || f === s || Qr(s) ? f : f + Tt(s)
    }
    : La(e))
}, Wc = function(e, t, r, i) {
    return vi(kt(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
        return kt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * i) / i
    })
}, cd = function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
    return function(i) {
        return t.reduce(function(n, s) {
            return s(n)
        }, i)
    }
}, fd = function(e, t) {
    return function(r) {
        return e(parseFloat(r)) + (t || Tt(r))
    }
}, hd = function(e, t, r) {
    return Uc(e, t, 0, 1, r)
}, jc = function(e, t, r) {
    return vi(r, function(i) {
        return e[~~t(i)]
    })
}, dd = function o(e, t, r) {
    var i = t - e;
    return kt(e) ? jc(e, o(0, e.length), t) : vi(r, function(n) {
        return (i + (n - e) % i) % i + e
    })
}, pd = function o(e, t, r) {
    var i = t - e
      , n = i * 2;
    return kt(e) ? jc(e, o(0, e.length - 1), t) : vi(r, function(s) {
        return s = (n + (s - e) % n) % n || 0,
        e + (s > i ? n - s : s)
    })
}, bo = function(e) {
    for (var t = 0, r = "", i, n, s, a; ~(i = e.indexOf("random(", t)); )
        s = e.indexOf(")", i),
        a = e.charAt(i + 7) === "[",
        n = e.substr(i + 7, s - i - 7).match(a ? Cc : Pa),
        r += e.substr(t, i - t) + Wc(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
        t = s + 1;
    return r + e.substr(t, e.length - t)
}, Uc = function(e, t, r, i, n) {
    var s = t - e
      , a = i - r;
    return vi(n, function(l) {
        return r + ((l - e) / s * a || 0)
    })
}, gd = function o(e, t, r, i) {
    var n = isNaN(e + t) ? 0 : function(c) {
        return (1 - c) * e + c * t
    }
    ;
    if (!n) {
        var s = gt(e), a = {}, l, u, f, h, d;
        if (r === !0 && (i = 1) && (r = null),
        s)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (kt(e) && !kt(t)) {
            for (f = [],
            h = e.length,
            d = h - 2,
            u = 1; u < h; u++)
                f.push(o(e[u - 1], e[u]));
            h--,
            n = function(p) {
                p *= h;
                var g = Math.min(d, ~~p);
                return f[g](p - g)
            }
            ,
            r = t
        } else
            i || (e = Vi(kt(e) ? [] : {}, e));
        if (!f) {
            for (l in t)
                Sl.call(a, e, l, "get", t[l]);
            n = function(p) {
                return El(p, a) || (s ? e.p : e)
            }
        }
    }
    return vi(r, n)
}, tu = function(e, t, r) {
    var i = e.labels, n = cr, s, a, l;
    for (s in i)
        a = i[s] - t,
        a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = s,
        n = a);
    return l
}, hr = function(e, t, r) {
    var i = e.vars, n = i[t], s = lt, a = e._ctx, l, u, f;
    if (n)
        return l = i[t + "Params"],
        u = i.callbackScope || e,
        r && ci.length && Ss(),
        a && (lt = a),
        f = l ? n.apply(u, l) : n.call(u),
        lt = s,
        f
}, Hn = function(e) {
    return pi(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!Bt),
    e.progress() < 1 && hr(e, "onInterrupt"),
    e
}, cn, _d = function(e) {
    e = !e.name && e.default || e;
    var t = e.name
      , r = et(e)
      , i = t && !r && e.init ? function() {
        this._props = []
    }
    : e
      , n = {
        init: wo,
        render: El,
        add: Sl,
        kill: Ad,
        modifier: Dd,
        rawVars: 0
    }
      , s = {
        targetTest: 0,
        get: 0,
        getSetter: Ml,
        aliases: {},
        register: 0
    };
    if (Dn(),
    e !== i) {
        if (jt[t])
            return;
        gr(i, gr(ks(e, n), s)),
        Vi(i.prototype, Vi(n, ks(e, s))),
        jt[i.prop = t] = i,
        e.targetTest && (ns.push(i),
        bl[t] = 1),
        t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
    }
    Lc(t, i),
    e.register && e.register(tr, i, Xt)
}, Be = 255, Gn = {
    aqua: [0, Be, Be],
    lime: [0, Be, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Be],
    navy: [0, 0, 128],
    white: [Be, Be, Be],
    olive: [128, 128, 0],
    yellow: [Be, Be, 0],
    orange: [Be, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Be, 0, 0],
    pink: [Be, 192, 203],
    cyan: [0, Be, Be],
    transparent: [Be, Be, Be, 0]
}, Qs = function(e, t, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Be + .5 | 0
}, Kc = function(e, t, r) {
    var i = e ? Qr(e) ? [e >> 16, e >> 8 & Be, e & Be] : 0 : Gn.black, n, s, a, l, u, f, h, d, c, p;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Gn[e])
            i = Gn[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (n = e.charAt(1),
            s = e.charAt(2),
            a = e.charAt(3),
            e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & Be, i & Be, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & Be, e & Be]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = p = e.match(Pa),
            !t)
                l = +i[0] % 360 / 360,
                u = +i[1] / 100,
                f = +i[2] / 100,
                s = f <= .5 ? f * (u + 1) : f + u - f * u,
                n = f * 2 - s,
                i.length > 3 && (i[3] *= 1),
                i[0] = Qs(l + 1 / 3, n, s),
                i[1] = Qs(l, n, s),
                i[2] = Qs(l - 1 / 3, n, s);
            else if (~e.indexOf("="))
                return i = e.match(Ec),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(Pa) || Gn.transparent;
        i = i.map(Number)
    }
    return t && !p && (n = i[0] / Be,
    s = i[1] / Be,
    a = i[2] / Be,
    h = Math.max(n, s, a),
    d = Math.min(n, s, a),
    f = (h + d) / 2,
    h === d ? l = u = 0 : (c = h - d,
    u = f > .5 ? c / (2 - h - d) : c / (h + d),
    l = h === n ? (s - a) / c + (s < a ? 6 : 0) : h === s ? (a - n) / c + 2 : (n - s) / c + 4,
    l *= 60),
    i[0] = ~~(l + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(f * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, Qc = function(e) {
    var t = []
      , r = []
      , i = -1;
    return e.split(fi).forEach(function(n) {
        var s = n.match(un) || [];
        t.push.apply(t, s),
        r.push(i += s.length + 1)
    }),
    t.c = r,
    t
}, ru = function(e, t, r) {
    var i = "", n = (e + i).match(fi), s = t ? "hsla(" : "rgba(", a = 0, l, u, f, h;
    if (!n)
        return e;
    if (n = n.map(function(d) {
        return (d = Kc(d, t, 1)) && s + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
    }),
    r && (f = Qc(e),
    l = r.c,
    l.join(i) !== f.c.join(i)))
        for (u = e.replace(fi, "1").split(un),
        h = u.length - 1; a < h; a++)
            i += u[a] + (~l.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
    if (!u)
        for (u = e.split(fi),
        h = u.length - 1; a < h; a++)
            i += u[a] + n[a];
    return i + u[h]
}, fi = function() {
    var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Gn)
        o += "|" + e + "\\b";
    return new RegExp(o + ")","gi")
}(), md = /hsl[a]?\(/, Zc = function(e) {
    var t = e.join(" "), r;
    if (fi.lastIndex = 0,
    fi.test(t))
        return r = md.test(t),
        e[1] = ru(e[1], r),
        e[0] = ru(e[0], r, Qc(e[1])),
        !0
}, xo, Ut = function() {
    var o = Date.now, e = 500, t = 33, r = o(), i = r, n = 1e3 / 240, s = n, a = [], l, u, f, h, d, c, p = function g(_) {
        var v = o() - i, y = _ === !0, m, b, w, T;
        if (v > e && (r += v - t),
        i += v,
        w = i - r,
        m = w - s,
        (m > 0 || y) && (T = ++h.frame,
        d = w - h.time * 1e3,
        h.time = w = w / 1e3,
        s += m + (m >= n ? 4 : n - m),
        b = 1),
        y || (l = u(g)),
        b)
            for (c = 0; c < a.length; c++)
                a[c](w, d, T, _)
    };
    return h = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(_) {
            return d / (1e3 / (_ || 60))
        },
        wake: function() {
            Dc && (!Ma && Pc() && (ar = Ma = window,
            vl = ar.document || {},
            er.gsap = tr,
            (ar.gsapVersions || (ar.gsapVersions = [])).push(tr.version),
            Ac(xs || ar.GreenSockGlobals || !ar.gsap && ar || {}),
            f = ar.requestAnimationFrame),
            l && h.sleep(),
            u = f || function(_) {
                return setTimeout(_, s - h.time * 1e3 + 1 | 0)
            }
            ,
            xo = 1,
            p(2))
        },
        sleep: function() {
            (f ? ar.cancelAnimationFrame : clearTimeout)(l),
            xo = 0,
            u = wo
        },
        lagSmoothing: function(_, v) {
            e = _ || 1 / Fe,
            t = Math.min(v, e, 0)
        },
        fps: function(_) {
            n = 1e3 / (_ || 240),
            s = h.time * 1e3 + n
        },
        add: function(_, v, y) {
            var m = v ? function(b, w, T, k) {
                _(b, w, T, k),
                h.remove(m)
            }
            : _;
            return h.remove(_),
            a[y ? "unshift" : "push"](m),
            Dn(),
            m
        },
        remove: function(_, v) {
            ~(v = a.indexOf(_)) && a.splice(v, 1) && c >= v && c--
        },
        _listeners: a
    },
    h
}(), Dn = function() {
    return !xo && Ut.wake()
}, Se = {}, yd = /^[\d.\-M][\d.\-,\s]/, vd = /["']/g, wd = function(e) {
    for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, l, u; n < s; n++)
        l = r[n],
        a = n !== s - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        t[i] = isNaN(u) ? u.replace(vd, "").trim() : +u,
        i = l.substr(a + 1).trim();
    return t
}, bd = function(e) {
    var t = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", t);
    return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, xd = function(e) {
    var t = (e + "").split("(")
      , r = Se[t[0]];
    return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [wd(t[1])] : bd(e).split(",").map(Ic)) : Se._CE && yd.test(e) ? Se._CE("", e) : r
}, Jc = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, ef = function o(e, t) {
    for (var r = e._first, i; r; )
        r instanceof It ? o(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? o(r.timeline, t) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = t)),
        r = r._next
}, Ni = function(e, t) {
    return e && (et(e) ? e : Se[e] || xd(e)) || t
}, Qi = function(e, t, r, i) {
    r === void 0 && (r = function(l) {
        return 1 - t(1 - l)
    }
    ),
    i === void 0 && (i = function(l) {
        return l < .5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2
    }
    );
    var n = {
        easeIn: t,
        easeOut: r,
        easeInOut: i
    }, s;
    return Yt(e, function(a) {
        Se[a] = er[a] = n,
        Se[s = a.toLowerCase()] = r;
        for (var l in n)
            Se[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Se[a + "." + l] = n[l]
    }),
    n
}, tf = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, Zs = function o(e, t, r) {
    var i = t >= 1 ? t : 1
      , n = (r || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , s = n / ka * (Math.asin(1 / i) || 0)
      , a = function(f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Uh((f - s) * n) + 1
    }
      , l = e === "out" ? a : e === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : tf(a);
    return n = ka / n,
    l.config = function(u, f) {
        return o(e, u, f)
    }
    ,
    l
}, Js = function o(e, t) {
    t === void 0 && (t = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((t + 1) * s + t) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(n) {
        return 1 - r(1 - n)
    }
    : tf(r);
    return i.config = function(n) {
        return o(e, n)
    }
    ,
    i
};
Yt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
    var t = e < 5 ? e + 1 : e;
    Qi(o + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
Se.Linear.easeNone = Se.none = Se.Linear.easeIn;
Qi("Elastic", Zs("in"), Zs("out"), Zs());
(function(o, e) {
    var t = 1 / e
      , r = 2 * t
      , i = 2.5 * t
      , n = function(a) {
        return a < t ? o * a * a : a < r ? o * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? o * (a -= 2.25 / e) * a + .9375 : o * Math.pow(a - 2.625 / e, 2) + .984375
    };
    Qi("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
Qi("Expo", function(o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
Qi("Circ", function(o) {
    return -(kc(1 - o * o) - 1)
});
Qi("Sine", function(o) {
    return o === 1 ? 1 : -jh(o * Gh) + 1
});
Qi("Back", Js("in"), Js("out"), Js());
Se.SteppedEase = Se.steps = er.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (t ? 0 : 1)
          , n = t ? 1 : 0
          , s = 1 - Fe;
        return function(a) {
            return ((i * Ro(0, s, a) | 0) + n) * r
        }
    }
};
En.ease = Se["quad.out"];
Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return xl += o + "," + o + "Params,"
});
var rf = function(e, t) {
    this.id = Wh++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Fc,
    this.set = t ? t.getSetter : Ml
}
  , An = function() {
    function o(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        Cn(this, +t.duration, 1, 1),
        this.data = t.data,
        lt && (this._ctx = lt,
        lt.data.push(this)),
        xo || Ut.wake()
    }
    var e = o.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Cn(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (Dn(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (Hs(this, r),
            !n._dp || n.parent || zc(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Dr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === Fe || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        Nc(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Jl(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Jl(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    e.iteration = function(r, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? On(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(r) {
        if (!arguments.length)
            return this._rts === -Fe ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var i = this.parent && this._ts ? Ps(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -Fe ? 0 : this._rts,
        this.totalTime(Ro(-this._delay, this._tDur, i), !0),
        qs(this),
        rd(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Dn(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Fe && (this._tTime -= Fe)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Dr(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (zt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ps(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = Zh);
        var i = Bt;
        return Bt = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        Bt = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
            n = i._start + n / (i._ts || 1),
            i = i._dp;
        return !this.parent && this.vars.immediateRender ? -1 : n
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        eu(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            eu(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(sr(this, r), zt(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, zt(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -Fe : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -Fe,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, n;
        return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - Fe)
    }
    ,
    e.eventCallback = function(r, i, n) {
        var s = this.vars;
        return arguments.length > 1 ? (i ? (s[r] = i,
        n && (s[r + "Params"] = n),
        r === "onUpdate" && (this._onUpdate = i)) : delete s[r],
        this) : s[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(n) {
            var s = et(r) ? r : $c
              , a = function() {
                var u = i.then;
                i.then = null,
                et(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
        }
        )
    }
    ,
    e.kill = function() {
        Hn(this)
    }
    ,
    o
}();
gr(An.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Fe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var It = function(o) {
    Sc(e, o);
    function e(r, i) {
        var n;
        return r === void 0 && (r = {}),
        n = o.call(this, r) || this,
        n.labels = {},
        n.smoothChildTiming = !!r.smoothChildTiming,
        n.autoRemoveChildren = !!r.autoRemoveChildren,
        n._sort = zt(r.sortChildren),
        Ke && Dr(r.parent || Ke, zr(n), i),
        r.reversed && n.reverse(),
        r.paused && n.paused(!0),
        r.scrollTrigger && Yc(zr(n), r.scrollTrigger),
        n
    }
    var t = e.prototype;
    return t.to = function(i, n, s) {
        return io(0, arguments, this),
        this
    }
    ,
    t.from = function(i, n, s) {
        return io(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(i, n, s, a) {
        return io(2, arguments, this),
        this
    }
    ,
    t.set = function(i, n, s) {
        return n.duration = 0,
        n.parent = this,
        ro(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new ft(i,n,sr(this, s),1),
        this
    }
    ,
    t.call = function(i, n, s) {
        return Dr(this, ft.delayedCall(0, i, n), s)
    }
    ,
    t.staggerTo = function(i, n, s, a, l, u, f) {
        return s.duration = n,
        s.stagger = s.stagger || a,
        s.onComplete = u,
        s.onCompleteParams = f,
        s.parent = this,
        new ft(i,s,sr(this, l)),
        this
    }
    ,
    t.staggerFrom = function(i, n, s, a, l, u, f) {
        return s.runBackwards = 1,
        ro(s).immediateRender = zt(s.immediateRender),
        this.staggerTo(i, n, s, a, l, u, f)
    }
    ,
    t.staggerFromTo = function(i, n, s, a, l, u, f, h) {
        return a.startAt = s,
        ro(a).immediateRender = zt(a.immediateRender),
        this.staggerTo(i, n, a, l, u, f, h)
    }
    ,
    t.render = function(i, n, s) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = i <= 0 ? 0 : vt(i), h = this._zTime < 0 != i < 0 && (this._initted || !u), d, c, p, g, _, v, y, m, b, w, T, k;
        if (this !== Ke && f > l && i >= 0 && (f = l),
        f !== this._tTime || s || h) {
            if (a !== this._time && u && (f += this._time - a,
            i += this._time - a),
            d = f,
            b = this._start,
            m = this._ts,
            v = !m,
            h && (u || (a = this._zTime),
            (i || !n) && (this._zTime = i)),
            this._repeat) {
                if (T = this._yoyo,
                _ = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(_ * 100 + i, n, s);
                if (d = vt(f % _),
                f === l ? (g = this._repeat,
                d = u) : (g = ~~(f / _),
                g && g === f / _ && (d = u,
                g--),
                d > u && (d = u)),
                w = On(this._tTime, _),
                !a && this._tTime && w !== g && (w = g),
                T && g & 1 && (d = u - d,
                k = 1),
                g !== w && !this._lock) {
                    var S = T && w & 1
                      , C = S === (T && g & 1);
                    if (g < w && (S = !S),
                    a = S ? 0 : u,
                    this._lock = 1,
                    this.render(a || (k ? 0 : vt(g * _)), n, !u)._lock = 0,
                    this._tTime = f,
                    !n && this.parent && hr(this, "onRepeat"),
                    this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
                    a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    C && (this._lock = 2,
                    a = S ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !k && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !v)
                        return this;
                    ef(this, k)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = sd(this, vt(a), vt(d)),
            y && (f -= d - (d = y._start))),
            this._tTime = f,
            this._time = d,
            this._act = !m,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            a = 0),
            !a && d && !n && (hr(this, "onStart"),
            this._tTime !== f))
                return this;
            if (d >= a && i >= 0)
                for (c = this._first; c; ) {
                    if (p = c._next,
                    (c._act || d >= c._start) && c._ts && y !== c) {
                        if (c.parent !== this)
                            return this.render(i, n, s);
                        if (c.render(c._ts > 0 ? (d - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (d - c._start) * c._ts, n, s),
                        d !== this._time || !this._ts && !v) {
                            y = 0,
                            p && (f += this._zTime = -Fe);
                            break
                        }
                    }
                    c = p
                }
            else {
                c = this._last;
                for (var B = i < 0 ? i : d; c; ) {
                    if (p = c._prev,
                    (c._act || B <= c._end) && c._ts && y !== c) {
                        if (c.parent !== this)
                            return this.render(i, n, s);
                        if (c.render(c._ts > 0 ? (B - c._start) * c._ts : (c._dirty ? c.totalDuration() : c._tDur) + (B - c._start) * c._ts, n, s || Bt && (c._initted || c._startAt)),
                        d !== this._time || !this._ts && !v) {
                            y = 0,
                            p && (f += this._zTime = B ? -Fe : Fe);
                            break
                        }
                    }
                    c = p
                }
            }
            if (y && !n && (this.pause(),
            y.render(d >= a ? 0 : -Fe)._zTime = d >= a ? 1 : -1,
            this._ts))
                return this._start = b,
                qs(this),
                this.render(i, n, s);
            this._onUpdate && !n && hr(this, "onUpdate", !0),
            (f === l && this._tTime >= this.totalDuration() || !f && a) && (b === this._start || Math.abs(m) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && pi(this, 1),
            !n && !(i < 0 && !a) && (f || a || !l) && (hr(this, f === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(i, n) {
        var s = this;
        if (Qr(n) || (n = sr(this, n, i)),
        !(i instanceof An)) {
            if (kt(i))
                return i.forEach(function(a) {
                    return s.add(a, n)
                }),
                this;
            if (gt(i))
                return this.addLabel(i, n);
            if (et(i))
                i = ft.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? Dr(this, i, n) : this
    }
    ,
    t.getChildren = function(i, n, s, a) {
        i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -cr);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof ft ? n && l.push(u) : (s && l.push(u),
            i && l.push.apply(l, u.getChildren(!0, n, s)))),
            u = u._next;
        return l
    }
    ,
    t.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
            if (n[s].vars.id === i)
                return n[s]
    }
    ,
    t.remove = function(i) {
        return gt(i) ? this.removeLabel(i) : et(i) ? this.killTweensOf(i) : (Vs(this, i),
        i === this._recent && (this._recent = this._last),
        Fi(this))
    }
    ,
    t.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = vt(Ut.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        o.prototype.totalTime.call(this, i, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(i, n) {
        return this.labels[i] = sr(this, n),
        this
    }
    ,
    t.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    t.addPause = function(i, n, s) {
        var a = ft.delayedCall(0, n || wo, s);
        return a.data = "isPause",
        this._hasPause = 1,
        Dr(this, a, sr(this, i))
    }
    ,
    t.removePause = function(i) {
        var n = this._first;
        for (i = sr(this, i); n; )
            n._start === i && n.data === "isPause" && pi(n),
            n = n._next
    }
    ,
    t.killTweensOf = function(i, n, s) {
        for (var a = this.getTweensOf(i, s), l = a.length; l--; )
            ii !== a[l] && a[l].kill(i, n);
        return this
    }
    ,
    t.getTweensOf = function(i, n) {
        for (var s = [], a = fr(i), l = this._first, u = Qr(n), f; l; )
            l instanceof ft ? Jh(l._targets, a) && (u ? (!ii || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f),
            l = l._next;
        return s
    }
    ,
    t.tweenTo = function(i, n) {
        n = n || {};
        var s = this, a = sr(s, i), l = n, u = l.startAt, f = l.onStart, h = l.onStartParams, d = l.immediateRender, c, p = ft.to(s, gr({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: n.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || Fe,
            onStart: function() {
                if (s.pause(),
                !c) {
                    var _ = n.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    p._dur !== _ && Cn(p, _, 0, 1).render(p._time, !0, !0),
                    c = 1
                }
                f && f.apply(p, h || [])
            }
        }, n));
        return d ? p.render(0) : p
    }
    ,
    t.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, gr({
            startAt: {
                time: sr(this, i)
            }
        }, s))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        tu(this, sr(this, i))
    }
    ,
    t.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        tu(this, sr(this, i), 1)
    }
    ,
    t.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Fe)
    }
    ,
    t.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= s && (a._start += i,
            a._end += i),
            a = a._next;
        if (n)
            for (u in l)
                l[u] >= s && (l[u] += i);
        return Fi(this)
    }
    ,
    t.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(i),
            n = n._next;
        return o.prototype.invalidate.call(this, i)
    }
    ,
    t.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n; )
            s = n._next,
            this.remove(n),
            n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Fi(this)
    }
    ,
    t.totalDuration = function(i) {
        var n = 0, s = this, a = s._last, l = cr, u, f, h;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (h = s.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                f = a._start,
                f > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                Dr(s, a, f - a._delay, 1)._lock = 0) : l = f,
                f < 0 && a._ts && (n -= f,
                (!h && !s._dp || h && h.smoothChildTiming) && (s._start += f / s._ts,
                s._time -= f,
                s._tTime -= f),
                s.shiftChildren(-f, !1, -1 / 0),
                l = 0),
                a._end > n && a._ts && (n = a._end),
                a = u;
            Cn(s, s === Ke && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (Ke._ts && (Nc(Ke, Ps(i, Ke)),
        Rc = Ut.frame),
        Ut.frame >= Ql) {
            Ql += Jt.autoSleep || 120;
            var n = Ke._first;
            if ((!n || !n._ts) && Jt.autoSleep && Ut._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || Ut.sleep()
            }
        }
    }
    ,
    e
}(An);
gr(It.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Td = function(e, t, r, i, n, s, a) {
    var l = new Xt(this._pt,e,t,0,1,uf,null,n), u = 0, f = 0, h, d, c, p, g, _, v, y;
    for (l.b = r,
    l.e = i,
    r += "",
    i += "",
    (v = ~i.indexOf("random(")) && (i = bo(i)),
    s && (y = [r, i],
    s(y, e, t),
    r = y[0],
    i = y[1]),
    d = r.match(Us) || []; h = Us.exec(i); )
        p = h[0],
        g = i.substring(u, h.index),
        c ? c = (c + 1) % 5 : g.substr(-5) === "rgba(" && (c = 1),
        p !== d[f++] && (_ = parseFloat(d[f - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: g || f === 1 ? g : ",",
            s: _,
            c: p.charAt(1) === "=" ? mn(_, p) - _ : parseFloat(p) - _,
            m: c && c < 4 ? Math.round : 0
        },
        u = Us.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "",
    l.fp = a,
    (Oc.test(i) || v) && (l.e = 0),
    this._pt = l,
    l
}, Sl = function(e, t, r, i, n, s, a, l, u, f) {
    et(i) && (i = i(n || 0, e, s));
    var h = e[t], d = r !== "get" ? r : et(h) ? u ? e[t.indexOf("set") || !et(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : h, c = et(h) ? u ? Ed : af : Pl, p;
    if (gt(i) && (~i.indexOf("random(") && (i = bo(i)),
    i.charAt(1) === "=" && (p = mn(d, i) + (Tt(d) || 0),
    (p || p === 0) && (i = p))),
    !f || d !== i || Ra)
        return !isNaN(d * i) && i !== "" ? (p = new Xt(this._pt,e,t,+d || 0,i - (d || 0),typeof h == "boolean" ? Cd : lf,0,c),
        u && (p.fp = u),
        a && p.modifier(a, this, e),
        this._pt = p) : (!h && !(t in e) && wl(t, i),
        Td.call(this, e, t, d, i, c, l || Jt.stringFilter, u))
}, Sd = function(e, t, r, i, n) {
    if (et(e) && (e = no(e, n, t, r, i)),
    !Ir(e) || e.style && e.nodeType || kt(e) || Mc(e))
        return gt(e) ? no(e, n, t, r, i) : e;
    var s = {}, a;
    for (a in e)
        s[a] = no(e[a], n, t, r, i);
    return s
}, nf = function(e, t, r, i, n, s) {
    var a, l, u, f;
    if (jt[e] && (a = new jt[e]).init(n, a.rawVars ? t[e] : Sd(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = l = new Xt(r._pt,n,e,0,1,a.render,a,0,a.priority),
    r !== cn))
        for (u = r._ptLookup[r._targets.indexOf(n)],
        f = a._props.length; f--; )
            u[a._props[f]] = l;
    return a
}, ii, Ra, kl = function o(e, t, r) {
    var i = e.vars, n = i.ease, s = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, f = i.onUpdateParams, h = i.callbackScope, d = i.runBackwards, c = i.yoyoEase, p = i.keyframes, g = i.autoRevert, _ = e._dur, v = e._startAt, y = e._targets, m = e.parent, b = m && m.data === "nested" ? m.vars.targets : y, w = e._overwrite === "auto" && !ml, T = e.timeline, k, S, C, B, $, M, E, F, Y, R, V, H, ne;
    if (T && (!p || !n) && (n = "none"),
    e._ease = Ni(n, En.ease),
    e._yEase = c ? Jc(Ni(c === !0 ? n : c, En.ease)) : 0,
    c && e._yoyo && !e._repeat && (c = e._yEase,
    e._yEase = e._ease,
    e._ease = c),
    e._from = !T && !!i.runBackwards,
    !T || p && !i.stagger) {
        if (F = y[0] ? Ri(y[0]).harness : 0,
        H = F && i[F.prop],
        k = ks(i, bl),
        v && (v._zTime < 0 && v.progress(1),
        t < 0 && d && a && !g ? v.render(-1, !0) : v.revert(d && _ ? is : Qh),
        v._lazy = 0),
        s) {
            if (pi(e._startAt = ft.set(y, gr({
                data: "isStart",
                overwrite: !1,
                parent: m,
                immediateRender: !0,
                lazy: zt(l),
                startAt: null,
                delay: 0,
                onUpdate: u,
                onUpdateParams: f,
                callbackScope: h,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            t < 0 && (Bt || !a && !g) && e._startAt.revert(is),
            a && _ && t <= 0 && r <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (d && _ && !v) {
            if (t && (a = !1),
            C = gr({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && zt(l),
                immediateRender: a,
                stagger: 0,
                parent: m
            }, k),
            H && (C[F.prop] = H),
            pi(e._startAt = ft.set(y, C)),
            e._startAt._dp = 0,
            t < 0 && (Bt ? e._startAt.revert(is) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !a)
                o(e._startAt, Fe, Fe);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        l = _ && zt(l) || l && !_,
        S = 0; S < y.length; S++) {
            if ($ = y[S],
            E = $._gsap || Tl(y)[S]._gsap,
            e._ptLookup[S] = R = {},
            Ea[E.id] && ci.length && Ss(),
            V = b === y ? S : b.indexOf($),
            F && (Y = new F).init($, H || k, e, V, b) !== !1 && (e._pt = B = new Xt(e._pt,$,Y.name,0,1,Y.render,Y,0,Y.priority),
            Y._props.forEach(function(O) {
                R[O] = B
            }),
            Y.priority && (M = 1)),
            !F || H)
                for (C in k)
                    jt[C] && (Y = nf(C, k, e, V, $, b)) ? Y.priority && (M = 1) : R[C] = B = Sl.call(e, $, C, "get", k[C], V, b, 0, i.stringFilter);
            e._op && e._op[S] && e.kill($, e._op[S]),
            w && e._pt && (ii = e,
            Ke.killTweensOf($, R, e.globalTime(t)),
            ne = !e.parent,
            ii = 0),
            e._pt && l && (Ea[E.id] = 1)
        }
        M && cf(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !ne,
    p && t <= 0 && T.render(cr, !0, !0)
}, kd = function(e, t, r, i, n, s, a) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, f, h, d;
    if (!l)
        for (l = e._ptCache[t] = [],
        h = e._ptLookup,
        d = e._targets.length; d--; ) {
            if (u = h[d][t],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
                    u = u._next;
            if (!u)
                return Ra = 1,
                e.vars[t] = "+=0",
                kl(e, a),
                Ra = 0,
                1;
            l.push(u)
        }
    for (d = l.length; d--; )
        f = l[d],
        u = f._pt || f,
        u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c,
        u.c = r - u.s,
        f.e && (f.e = ot(r) + Tt(f.e)),
        f.b && (f.b = u.s + Tt(f.b))
}, Pd = function(e, t) {
    var r = e[0] ? Ri(e[0]).harness : 0, i = r && r.aliases, n, s, a, l;
    if (!i)
        return t;
    n = Vi({}, t);
    for (s in i)
        if (s in n)
            for (l = i[s].split(","),
            a = l.length; a--; )
                n[l[a]] = n[s];
    return n
}, Md = function(e, t, r, i) {
    var n = t.ease || i || "power1.inOut", s, a;
    if (kt(t))
        a = r[e] || (r[e] = []),
        t.forEach(function(l, u) {
            return a.push({
                t: u / (t.length - 1) * 100,
                v: l,
                e: n
            })
        });
    else
        for (s in t)
            a = r[s] || (r[s] = []),
            s === "ease" || a.push({
                t: parseFloat(e),
                v: t[s],
                e: n
            })
}, no = function(e, t, r, i, n) {
    return et(e) ? e.call(t, r, i, n) : gt(e) && ~e.indexOf("random(") ? bo(e) : e
}, of = xl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", sf = {};
Yt(of + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return sf[o] = 1
});
var ft = function(o) {
    Sc(e, o);
    function e(r, i, n, s) {
        var a;
        typeof i == "number" && (n.duration = i,
        i = n,
        n = null),
        a = o.call(this, s ? i : ro(i)) || this;
        var l = a.vars, u = l.duration, f = l.delay, h = l.immediateRender, d = l.stagger, c = l.overwrite, p = l.keyframes, g = l.defaults, _ = l.scrollTrigger, v = l.yoyoEase, y = i.parent || Ke, m = (kt(r) || Mc(r) ? Qr(r[0]) : "length"in i) ? [r] : fr(r), b, w, T, k, S, C, B, $;
        if (a._targets = m.length ? Tl(m) : Ts("GSAP target " + r + " not found. https://greensock.com", !Jt.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = c,
        p || d || No(u) || No(f)) {
            if (i = a.vars,
            b = a.timeline = new It({
                data: "nested",
                defaults: g || {},
                targets: y && y.data === "nested" ? y.vars.targets : m
            }),
            b.kill(),
            b.parent = b._dp = zr(a),
            b._start = 0,
            d || No(u) || No(f)) {
                if (k = m.length,
                B = d && Hc(d),
                Ir(d))
                    for (S in d)
                        ~of.indexOf(S) && ($ || ($ = {}),
                        $[S] = d[S]);
                for (w = 0; w < k; w++)
                    T = ks(i, sf),
                    T.stagger = 0,
                    v && (T.yoyoEase = v),
                    $ && Vi(T, $),
                    C = m[w],
                    T.duration = +no(u, zr(a), w, C, m),
                    T.delay = (+no(f, zr(a), w, C, m) || 0) - a._delay,
                    !d && k === 1 && T.delay && (a._delay = f = T.delay,
                    a._start += f,
                    T.delay = 0),
                    b.to(C, T, B ? B(w, C, m) : 0),
                    b._ease = Se.none;
                b.duration() ? u = f = 0 : a.timeline = 0
            } else if (p) {
                ro(gr(b.vars.defaults, {
                    ease: "none"
                })),
                b._ease = Ni(p.ease || i.ease || "none");
                var M = 0, E, F, Y;
                if (kt(p))
                    p.forEach(function(R) {
                        return b.to(m, R, ">")
                    }),
                    b.duration();
                else {
                    T = {};
                    for (S in p)
                        S === "ease" || S === "easeEach" || Md(S, p[S], T, p.easeEach);
                    for (S in T)
                        for (E = T[S].sort(function(R, V) {
                            return R.t - V.t
                        }),
                        M = 0,
                        w = 0; w < E.length; w++)
                            F = E[w],
                            Y = {
                                ease: F.e,
                                duration: (F.t - (w ? E[w - 1].t : 0)) / 100 * u
                            },
                            Y[S] = F.v,
                            b.to(m, Y, M),
                            M += Y.duration;
                    b.duration() < u && b.to({}, {
                        duration: u - b.duration()
                    })
                }
            }
            u || a.duration(u = b.duration())
        } else
            a.timeline = 0;
        return c === !0 && !ml && (ii = zr(a),
        Ke.killTweensOf(m),
        ii = 0),
        Dr(y, zr(a), n),
        i.reversed && a.reverse(),
        i.paused && a.paused(!0),
        (h || !u && !p && a._start === vt(y._time) && zt(h) && id(zr(a)) && y.data !== "nested") && (a._tTime = -Fe,
        a.render(Math.max(0, -f) || 0)),
        _ && Yc(zr(a), _),
        a
    }
    var t = e.prototype;
    return t.render = function(i, n, s) {
        var a = this._time, l = this._tDur, u = this._dur, f = i < 0, h = i > l - Fe && !f ? l : i < Fe ? 0 : i, d, c, p, g, _, v, y, m, b;
        if (!u)
            od(this, i, n, s);
        else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (d = h,
            m = this.timeline,
            this._repeat) {
                if (g = u + this._rDelay,
                this._repeat < -1 && f)
                    return this.totalTime(g * 100 + i, n, s);
                if (d = vt(h % g),
                h === l ? (p = this._repeat,
                d = u) : (p = ~~(h / g),
                p && p === h / g && (d = u,
                p--),
                d > u && (d = u)),
                v = this._yoyo && p & 1,
                v && (b = this._yEase,
                d = u - d),
                _ = On(this._tTime, g),
                d === a && !s && this._initted)
                    return this._tTime = h,
                    this;
                p !== _ && (m && this._yEase && ef(m, v),
                this.vars.repeatRefresh && !v && !this._lock && (this._lock = s = 1,
                this.render(vt(g * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Xc(this, f ? i : d, s, n, h))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(i, n, s)
            }
            if (this._tTime = h,
            this._time = d,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = y = (b || this._ease)(d / u),
            this._from && (this.ratio = y = 1 - y),
            d && !a && !n && (hr(this, "onStart"),
            this._tTime !== h))
                return this;
            for (c = this._pt; c; )
                c.r(y, c.d),
                c = c._next;
            m && m.render(i < 0 ? i : !d && v ? -Fe : m._dur * m._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i),
            this._onUpdate && !n && (f && Oa(this, i, n, s),
            hr(this, "onUpdate")),
            this._repeat && p !== _ && this.vars.onRepeat && !n && this.parent && hr(this, "onRepeat"),
            (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && Oa(this, i, !0, !0),
            (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && pi(this, 1),
            !n && !(f && !a) && (h || a || v) && (hr(this, h === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        o.prototype.invalidate.call(this, i)
    }
    ,
    t.resetTo = function(i, n, s, a) {
        xo || Ut.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || kl(this, l),
        u = this._ease(l / this._dur),
        kd(this, i, n, s, a, u, l) ? this.resetTo(i, n, s, a) : (Hs(this, 0),
        this.parent || Bc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(i, n) {
        if (n === void 0 && (n = "all"),
        !i && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Hn(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, ii && ii.vars.overwrite !== !0)._first || Hn(this),
            this.parent && s !== this.timeline.totalDuration() && Cn(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, l = i ? fr(i) : a, u = this._ptLookup, f = this._pt, h, d, c, p, g, _, v;
        if ((!n || n === "all") && td(a, l))
            return n === "all" && (this._pt = 0),
            Hn(this);
        for (h = this._op = this._op || [],
        n !== "all" && (gt(n) && (g = {},
        Yt(n, function(y) {
            return g[y] = 1
        }),
        n = g),
        n = Pd(a, n)),
        v = a.length; v--; )
            if (~l.indexOf(a[v])) {
                d = u[v],
                n === "all" ? (h[v] = n,
                p = d,
                c = {}) : (c = h[v] = h[v] || {},
                p = n);
                for (g in p)
                    _ = d && d[g],
                    _ && ((!("kill"in _.d) || _.d.kill(g) === !0) && Vs(this, _, "_pt"),
                    delete d[g]),
                    c !== "all" && (c[g] = 1)
            }
        return this._initted && !this._pt && f && Hn(this),
        this
    }
    ,
    e.to = function(i, n) {
        return new e(i,n,arguments[2])
    }
    ,
    e.from = function(i, n) {
        return io(1, arguments)
    }
    ,
    e.delayedCall = function(i, n, s, a) {
        return new e(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(i, n, s) {
        return io(2, arguments)
    }
    ,
    e.set = function(i, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new e(i,n)
    }
    ,
    e.killTweensOf = function(i, n, s) {
        return Ke.killTweensOf(i, n, s)
    }
    ,
    e
}(An);
gr(ft.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Yt("staggerTo,staggerFrom,staggerFromTo", function(o) {
    ft[o] = function() {
        var e = new It
          , t = Da.call(arguments, 0);
        return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
        e[o].apply(e, t)
    }
});
var Pl = function(e, t, r) {
    return e[t] = r
}
  , af = function(e, t, r) {
    return e[t](r)
}
  , Ed = function(e, t, r, i) {
    return e[t](i.fp, r)
}
  , Od = function(e, t, r) {
    return e.setAttribute(t, r)
}
  , Ml = function(e, t) {
    return et(e[t]) ? af : yl(e[t]) && e.setAttribute ? Od : Pl
}
  , lf = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , Cd = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , uf = function(e, t) {
    var r = t._pt
      , i = "";
    if (!e && t.b)
        i = t.b;
    else if (e === 1 && t.e)
        i = t.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += t.c
    }
    t.set(t.t, t.p, i, t)
}
  , El = function(e, t) {
    for (var r = t._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , Dd = function(e, t, r, i) {
    for (var n = this._pt, s; n; )
        s = n._next,
        n.p === i && n.modifier(e, t, r),
        n = s
}
  , Ad = function(e) {
    for (var t = this._pt, r, i; t; )
        i = t._next,
        t.p === e && !t.op || t.op === e ? Vs(this, t, "_pt") : t.dep || (r = 1),
        t = i;
    return !r
}
  , Ld = function(e, t, r, i) {
    i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
}
  , cf = function(e) {
    for (var t = e._pt, r, i, n, s; t; ) {
        for (r = t._next,
        i = n; i && i.pr > t.pr; )
            i = i._next;
        (t._prev = i ? i._prev : s) ? t._prev._next = t : n = t,
        (t._next = i) ? i._prev = t : s = t,
        t = r
    }
    e._pt = n
}
  , Xt = function() {
    function o(t, r, i, n, s, a, l, u, f) {
        this.t = r,
        this.s = n,
        this.c = s,
        this.p = i,
        this.r = a || lf,
        this.d = l || this,
        this.set = u || Pl,
        this.pr = f || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = o.prototype;
    return e.modifier = function(r, i, n) {
        this.mSet = this.mSet || this.set,
        this.set = Ld,
        this.m = r,
        this.mt = n,
        this.tween = i
    }
    ,
    o
}();
Yt(xl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return bl[o] = 1
});
er.TweenMax = er.TweenLite = ft;
er.TimelineLite = er.TimelineMax = It;
Ke = new It({
    sortChildren: !1,
    defaults: En,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Jt.stringFilter = Zc;
var Ln = []
  , os = {}
  , Rd = []
  , iu = 0
  , ea = function(e) {
    return (os[e] || Rd).map(function(t) {
        return t()
    })
}
  , Fa = function() {
    var e = Date.now()
      , t = [];
    e - iu > 2 && (ea("matchMediaInit"),
    Ln.forEach(function(r) {
        var i = r.queries, n = r.conditions, s, a, l, u;
        for (a in i)
            s = ar.matchMedia(i[a]).matches,
            s && (l = 1),
            s !== n[a] && (n[a] = s,
            u = 1);
        u && (r.revert(),
        l && t.push(r))
    }),
    ea("matchMediaRevert"),
    t.forEach(function(r) {
        return r.onMatch(r)
    }),
    iu = e,
    ea("matchMedia"))
}
  , ff = function() {
    function o(t, r) {
        this.selector = r && Aa(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        t && this.add(t)
    }
    var e = o.prototype;
    return e.add = function(r, i, n) {
        et(r) && (n = i,
        i = r,
        r = et);
        var s = this
          , a = function() {
            var u = lt, f = s.selector, h;
            return u && u !== s && u.data.push(s),
            n && (s.selector = Aa(n)),
            lt = s,
            h = i.apply(s, arguments),
            et(h) && s._r.push(h),
            lt = u,
            s.selector = f,
            s.isReverted = !1,
            h
        };
        return s.last = a,
        r === et ? a(s) : r ? s[r] = a : a
    }
    ,
    e.ignore = function(r) {
        var i = lt;
        lt = null,
        r(this),
        lt = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof o ? r.push.apply(r, i.getTweens()) : i instanceof ft && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var n = this;
        if (r) {
            var s = this.getTweens();
            this.data.forEach(function(l) {
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(u) {
                    return s.splice(s.indexOf(u), 1)
                }))
            }),
            s.map(function(l) {
                return {
                    g: l.globalTime(0),
                    t: l
                }
            }).sort(function(l, u) {
                return u.g - l.g || -1
            }).forEach(function(l) {
                return l.t.revert(r)
            }),
            this.data.forEach(function(l) {
                return !(l instanceof An) && l.revert && l.revert(r)
            }),
            this._r.forEach(function(l) {
                return l(r, n)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(l) {
                return l.kill && l.kill()
            });
        if (this.clear(),
        i) {
            var a = Ln.indexOf(this);
            ~a && Ln.splice(a, 1)
        }
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    o
}()
  , Fd = function() {
    function o(t) {
        this.contexts = [],
        this.scope = t
    }
    var e = o.prototype;
    return e.add = function(r, i, n) {
        Ir(r) || (r = {
            matches: r
        });
        var s = new ff(0,n || this.scope), a = s.conditions = {}, l, u, f;
        this.contexts.push(s),
        i = s.add("onMatch", i),
        s.queries = r;
        for (u in r)
            u === "all" ? f = 1 : (l = ar.matchMedia(r[u]),
            l && (Ln.indexOf(s) < 0 && Ln.push(s),
            (a[u] = l.matches) && (f = 1),
            l.addListener ? l.addListener(Fa) : l.addEventListener("change", Fa)));
        return f && i(s),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    o
}()
  , Ms = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
        t.forEach(function(i) {
            return _d(i)
        })
    },
    timeline: function(e) {
        return new It(e)
    },
    getTweensOf: function(e, t) {
        return Ke.getTweensOf(e, t)
    },
    getProperty: function(e, t, r, i) {
        gt(e) && (e = fr(e)[0]);
        var n = Ri(e || {}).get
          , s = r ? $c : Ic;
        return r === "native" && (r = ""),
        e && (t ? s((jt[t] && jt[t].get || n)(e, t, r, i)) : function(a, l, u) {
            return s((jt[a] && jt[a].get || n)(e, a, l, u))
        }
        )
    },
    quickSetter: function(e, t, r) {
        if (e = fr(e),
        e.length > 1) {
            var i = e.map(function(f) {
                return tr.quickSetter(f, t, r)
            })
              , n = i.length;
            return function(f) {
                for (var h = n; h--; )
                    i[h](f)
            }
        }
        e = e[0] || {};
        var s = jt[t]
          , a = Ri(e)
          , l = a.harness && (a.harness.aliases || {})[t] || t
          , u = s ? function(f) {
            var h = new s;
            cn._pt = 0,
            h.init(e, r ? f + r : f, cn, 0, [e]),
            h.render(1, h),
            cn._pt && El(1, cn)
        }
        : a.set(e, l);
        return s ? u : function(f) {
            return u(e, l, r ? f + r : f, a, 1)
        }
    },
    quickTo: function(e, t, r) {
        var i, n = tr.to(e, Vi((i = {},
        i[t] = "+=0.1",
        i.paused = !0,
        i), r || {})), s = function(l, u, f) {
            return n.resetTo(t, l, u, f)
        };
        return s.tween = n,
        s
    },
    isTweening: function(e) {
        return Ke.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = Ni(e.ease, En.ease)),
        Zl(En, e || {})
    },
    config: function(e) {
        return Zl(Jt, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , r = e.effect
          , i = e.plugins
          , n = e.defaults
          , s = e.extendTimeline;
        (i || "").split(",").forEach(function(a) {
            return a && !jt[a] && !er[a] && Ts(t + " effect requires " + a + " plugin.")
        }),
        Ks[t] = function(a, l, u) {
            return r(fr(a), gr(l || {}, n), u)
        }
        ,
        s && (It.prototype[t] = function(a, l, u) {
            return this.add(Ks[t](a, Ir(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(e, t) {
        Se[e] = Ni(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? Ni(e, t) : Se
    },
    getById: function(e) {
        return Ke.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var r = new It(e), i, n;
        for (r.smoothChildTiming = zt(e.smoothChildTiming),
        Ke.remove(r),
        r._dp = 0,
        r._time = r._tTime = Ke._time,
        i = Ke._first; i; )
            n = i._next,
            (t || !(!i._dur && i instanceof ft && i.vars.onComplete === i._targets[0])) && Dr(r, i, i._start - i._delay),
            i = n;
        return Dr(Ke, r, 0),
        r
    },
    context: function(e, t) {
        return e ? new ff(e,t) : lt
    },
    matchMedia: function(e) {
        return new Fd(e)
    },
    matchMediaRefresh: function() {
        return Ln.forEach(function(e) {
            var t = e.conditions, r, i;
            for (i in t)
                t[i] && (t[i] = !1,
                r = 1);
            r && e.revert()
        }) || Fa()
    },
    addEventListener: function(e, t) {
        var r = os[e] || (os[e] = []);
        ~r.indexOf(t) || r.push(t)
    },
    removeEventListener: function(e, t) {
        var r = os[e]
          , i = r && r.indexOf(t);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: dd,
        wrapYoyo: pd,
        distribute: Hc,
        random: Wc,
        snap: Gc,
        normalize: hd,
        getUnit: Tt,
        clamp: ld,
        splitColor: Kc,
        toArray: fr,
        selector: Aa,
        mapRange: Uc,
        pipe: cd,
        unitize: fd,
        interpolate: gd,
        shuffle: qc
    },
    install: Ac,
    effects: Ks,
    ticker: Ut,
    updateRoot: It.updateRoot,
    plugins: jt,
    globalTimeline: Ke,
    core: {
        PropTween: Xt,
        globals: Lc,
        Tween: ft,
        Timeline: It,
        Animation: An,
        getCache: Ri,
        _removeLinkedListItem: Vs,
        reverting: function() {
            return Bt
        },
        context: function(e) {
            return e && lt && (lt.data.push(e),
            e._ctx = lt),
            lt
        },
        suppressOverwrites: function(e) {
            return ml = e
        }
    }
};
Yt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return Ms[o] = ft[o]
});
Ut.add(It.updateRoot);
cn = Ms.to({}, {
    duration: 0
});
var Nd = function(e, t) {
    for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
        r = r._next;
    return r
}
  , Id = function(e, t) {
    var r = e._targets, i, n, s;
    for (i in t)
        for (n = r.length; n--; )
            s = e._ptLookup[n][i],
            s && (s = s.d) && (s._pt && (s = Nd(s, i)),
            s && s.modifier && s.modifier(t[i], e, r[n], i))
}
  , ta = function(e, t) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, n, s) {
            s._onInit = function(a) {
                var l, u;
                if (gt(n) && (l = {},
                Yt(n, function(f) {
                    return l[f] = 1
                }),
                n = l),
                t) {
                    l = {};
                    for (u in n)
                        l[u] = t(n[u]);
                    n = l
                }
                Id(a, n)
            }
        }
    }
}
  , tr = Ms.registerPlugin({
    name: "attr",
    init: function(e, t, r, i, n) {
        var s, a, l;
        this.tween = r;
        for (s in t)
            l = e.getAttribute(s) || "",
            a = this.add(e, "setAttribute", (l || 0) + "", t[s], i, n, 0, 0, s),
            a.op = s,
            a.b = l,
            this._props.push(s)
    },
    render: function(e, t) {
        for (var r = t._pt; r; )
            Bt ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, t) {
        for (var r = t.length; r--; )
            this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
    }
}, ta("roundProps", La), ta("modifiers"), ta("snap", Gc)) || Ms;
ft.version = It.version = tr.version = "3.11.3";
Dc = 1;
Pc() && Dn();
Se.Power0;
Se.Power1;
Se.Power2;
Se.Power3;
Se.Power4;
Se.Linear;
Se.Quad;
Se.Cubic;
Se.Quart;
Se.Quint;
Se.Strong;
Se.Elastic;
Se.Back;
Se.SteppedEase;
Se.Bounce;
Se.Sine;
Se.Expo;
Se.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var nu, ni, yn, Ol, Ai, ou, Cl, $d = function() {
    return typeof window < "u"
}, Zr = {}, Pi = 180 / Math.PI, vn = Math.PI / 180, Zi = Math.atan2, su = 1e8, Dl = /([A-Z])/g, Bd = /(left|right|width|margin|padding|x)/i, zd = /[\s,\(]\S/, Hr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Na = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Yd = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Xd = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Vd = function(e, t) {
    var r = t.s + t.c * e;
    t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
}, hf = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, df = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, qd = function(e, t, r) {
    return e.style[t] = r
}, Hd = function(e, t, r) {
    return e.style.setProperty(t, r)
}, Gd = function(e, t, r) {
    return e._gsap[t] = r
}, Wd = function(e, t, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, jd = function(e, t, r, i, n) {
    var s = e._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(n, s)
}, Ud = function(e, t, r, i, n) {
    var s = e._gsap;
    s[t] = r,
    s.renderTransform(n, s)
}, Qe = "transform", Sr = Qe + "Origin", Kd = function(e, t) {
    var r = this
      , i = this.target
      , n = i.style;
    if (e in Zr) {
        if (this.tfm = this.tfm || {},
        e !== "transform" && (e = Hr[e] || e,
        ~e.indexOf(",") ? e.split(",").forEach(function(s) {
            return r.tfm[s] = Yr(i, s)
        }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Yr(i, e)),
        this.props.indexOf(Qe) >= 0)
            return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Sr, t, "")),
        e = Qe
    }
    (n || t) && this.props.push(e, t, n[e])
}, pf = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Qd = function() {
    var e = this.props, t = this.target, r = t.style, i = t._gsap, n, s;
    for (n = 0; n < e.length; n += 3)
        e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].replace(Dl, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            i[s] = this.tfm[s];
        i.svg && (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        n = Cl(),
        n && !n.isStart && !r[Qe] && (pf(r),
        i.uncache = 1)
    }
}, gf = function(e, t) {
    var r = {
        target: e,
        props: [],
        revert: Qd,
        save: Kd
    };
    return t && t.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, _f, Ia = function(e, t) {
    var r = ni.createElementNS ? ni.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ni.createElement(e);
    return r.style ? r : ni.createElement(e)
}, Fr = function o(e, t, r) {
    var i = getComputedStyle(e);
    return i[t] || i.getPropertyValue(t.replace(Dl, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && o(e, Rn(t) || t, 1) || ""
}, au = "O,Moz,ms,Ms,Webkit".split(","), Rn = function(e, t, r) {
    var i = t || Ai
      , n = i.style
      , s = 5;
    if (e in n && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(au[s] + e in n); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? au[s] : "") + e
}, $a = function() {
    $d() && window.document && (nu = window,
    ni = nu.document,
    yn = ni.documentElement,
    Ai = Ia("div") || {
        style: {}
    },
    Ia("div"),
    Qe = Rn(Qe),
    Sr = Qe + "Origin",
    Ai.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    _f = !!Rn("perspective"),
    Cl = tr.core.reverting,
    Ol = 1)
}, ra = function o(e) {
    var t = Ia("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
    if (yn.appendChild(t),
    t.appendChild(this),
    this.style.display = "block",
    e)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = o
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    yn.removeChild(t),
    this.style.cssText = n,
    s
}, lu = function(e, t) {
    for (var r = t.length; r--; )
        if (e.hasAttribute(t[r]))
            return e.getAttribute(t[r])
}, mf = function(e) {
    var t;
    try {
        t = e.getBBox()
    } catch {
        t = ra.call(e, !0)
    }
    return t && (t.width || t.height) || e.getBBox === ra || (t = ra.call(e, !0)),
    t && !t.width && !t.x && !t.y ? {
        x: +lu(e, ["x", "cx", "x1"]) || 0,
        y: +lu(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, yf = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && mf(e))
}, To = function(e, t) {
    if (t) {
        var r = e.style;
        t in Zr && t !== Sr && (t = Qe),
        r.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        r.removeProperty(t.replace(Dl, "-$1").toLowerCase())) : r.removeAttribute(t)
    }
}, oi = function(e, t, r, i, n, s) {
    var a = new Xt(e._pt,t,r,0,1,s ? df : hf);
    return e._pt = a,
    a.b = i,
    a.e = n,
    e._props.push(r),
    a
}, uu = {
    deg: 1,
    rad: 1,
    turn: 1
}, Zd = {
    grid: 1,
    flex: 1
}, gi = function o(e, t, r, i) {
    var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Ai.style, l = Bd.test(t), u = e.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, d = i === "px", c = i === "%", p, g, _, v;
    return i === s || !n || uu[i] || uu[s] ? n : (s !== "px" && !d && (n = o(e, t, r, "px")),
    v = e.getCTM && yf(e),
    (c || s === "%") && (Zr[t] || ~t.indexOf("adius")) ? (p = v ? e.getBBox()[l ? "width" : "height"] : e[f],
    ot(c ? n / p * h : n / 100 * p)) : (a[l ? "width" : "height"] = h + (d ? s : i),
    g = ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
    v && (g = (e.ownerSVGElement || {}).parentNode),
    (!g || g === ni || !g.appendChild) && (g = ni.body),
    _ = g._gsap,
    _ && c && _.width && l && _.time === Ut.time && !_.uncache ? ot(n / _.width * h) : ((c || s === "%") && !Zd[Fr(g, "display")] && (a.position = Fr(e, "position")),
    g === e && (a.position = "static"),
    g.appendChild(Ai),
    p = Ai[f],
    g.removeChild(Ai),
    a.position = "absolute",
    l && c && (_ = Ri(g),
    _.time = Ut.time,
    _.width = g[f]),
    ot(d ? p * n / h : p && n ? h / p * n : 0))))
}, Yr = function(e, t, r, i) {
    var n;
    return Ol || $a(),
    t in Hr && t !== "transform" && (t = Hr[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    Zr[t] && t !== "transform" ? (n = ko(e, i),
    n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Os(Fr(e, Sr)) + " " + n.zOrigin + "px") : (n = e.style[t],
    (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Es[t] && Es[t](e, t, r) || Fr(e, t) || Fc(e, t) || (t === "opacity" ? 1 : 0))),
    r && !~(n + "").trim().indexOf(" ") ? gi(e, t, n, r) + r : n
}, Jd = function(e, t, r, i) {
    if (!r || r === "none") {
        var n = Rn(t, e, 1)
          , s = n && Fr(e, n, 1);
        s && s !== r ? (t = n,
        r = s) : t === "borderColor" && (r = Fr(e, "borderTopColor"))
    }
    var a = new Xt(this._pt,e.style,t,0,1,uf), l = 0, u = 0, f, h, d, c, p, g, _, v, y, m, b, w;
    if (a.b = r,
    a.e = i,
    r += "",
    i += "",
    i === "auto" && (e.style[t] = i,
    i = Fr(e, t) || i,
    e.style[t] = r),
    f = [r, i],
    Zc(f),
    r = f[0],
    i = f[1],
    d = r.match(un) || [],
    w = i.match(un) || [],
    w.length) {
        for (; h = un.exec(i); )
            _ = h[0],
            y = i.substring(l, h.index),
            p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
            _ !== (g = d[u++] || "") && (c = parseFloat(g) || 0,
            b = g.substr((c + "").length),
            _.charAt(1) === "=" && (_ = mn(c, _) + b),
            v = parseFloat(_),
            m = _.substr((v + "").length),
            l = un.lastIndex - m.length,
            m || (m = m || Jt.units[t] || b,
            l === i.length && (i += m,
            a.e += m)),
            b !== m && (c = gi(e, t, g, m) || 0),
            a._pt = {
                _next: a._pt,
                p: y || u === 1 ? y : ",",
                s: c,
                c: v - c,
                m: p && p < 4 || t === "zIndex" ? Math.round : 0
            });
        a.c = l < i.length ? i.substring(l, i.length) : ""
    } else
        a.r = t === "display" && i === "none" ? df : hf;
    return Oc.test(i) && (a.e = 0),
    this._pt = a,
    a
}, cu = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, ep = function(e) {
    var t = e.split(" ")
      , r = t[0]
      , i = t[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    t[0] = cu[r] || r,
    t[1] = cu[i] || i,
    t.join(" ")
}, tp = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t, i = r.style, n = t.u, s = r._gsap, a, l, u;
        if (n === "all" || n === !0)
            i.cssText = "",
            l = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                a = n[u],
                Zr[a] && (l = 1,
                a = a === "transformOrigin" ? Sr : Qe),
                To(r, a);
        l && (To(r, Qe),
        s && (s.svg && r.removeAttribute("transform"),
        ko(r, 1),
        s.uncache = 1,
        pf(i)))
    }
}, Es = {
    clearProps: function(e, t, r, i, n) {
        if (n.data !== "isFromStart") {
            var s = e._pt = new Xt(e._pt,t,r,0,0,tp);
            return s.u = i,
            s.pr = -10,
            s.tween = n,
            e._props.push(r),
            1
        }
    }
}, So = [1, 0, 0, 1, 0, 0], vf = {}, wf = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, fu = function(e) {
    var t = Fr(e, Qe);
    return wf(t) ? So : t.substr(7).match(Ec).map(ot)
}, Al = function(e, t) {
    var r = e._gsap || Ri(e), i = e.style, n = fu(e), s, a, l, u;
    return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
    n = [l.a, l.b, l.c, l.d, l.e, l.f],
    n.join(",") === "1,0,0,1,0,0" ? So : n) : (n === So && !e.offsetParent && e !== yn && !r.svg && (l = i.display,
    i.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent) && (u = 1,
    a = e.nextElementSibling,
    yn.appendChild(e)),
    n = fu(e),
    l ? i.display = l : To(e, "display"),
    u && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : yn.removeChild(e))),
    t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, Ba = function(e, t, r, i, n, s) {
    var a = e._gsap, l = n || Al(e, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, h = a.xOffset || 0, d = a.yOffset || 0, c = l[0], p = l[1], g = l[2], _ = l[3], v = l[4], y = l[5], m = t.split(" "), b = parseFloat(m[0]) || 0, w = parseFloat(m[1]) || 0, T, k, S, C;
    r ? l !== So && (k = c * _ - p * g) && (S = b * (_ / k) + w * (-g / k) + (g * y - _ * v) / k,
    C = b * (-p / k) + w * (c / k) - (c * y - p * v) / k,
    b = S,
    w = C) : (T = mf(e),
    b = T.x + (~m[0].indexOf("%") ? b / 100 * T.width : b),
    w = T.y + (~(m[1] || m[0]).indexOf("%") ? w / 100 * T.height : w)),
    i || i !== !1 && a.smooth ? (v = b - u,
    y = w - f,
    a.xOffset = h + (v * c + y * g) - v,
    a.yOffset = d + (v * p + y * _) - y) : a.xOffset = a.yOffset = 0,
    a.xOrigin = b,
    a.yOrigin = w,
    a.smooth = !!i,
    a.origin = t,
    a.originIsAbsolute = !!r,
    e.style[Sr] = "0px 0px",
    s && (oi(s, a, "xOrigin", u, b),
    oi(s, a, "yOrigin", f, w),
    oi(s, a, "xOffset", h, a.xOffset),
    oi(s, a, "yOffset", d, a.yOffset)),
    e.setAttribute("data-svg-origin", b + " " + w)
}, ko = function(e, t) {
    var r = e._gsap || new rf(e);
    if ("x"in r && !t && !r.uncache)
        return r;
    var i = e.style, n = r.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), u = Fr(e, Sr) || "0", f, h, d, c, p, g, _, v, y, m, b, w, T, k, S, C, B, $, M, E, F, Y, R, V, H, ne, O, G, ee, re, le, De;
    return f = h = d = g = _ = v = y = m = b = 0,
    c = p = 1,
    r.svg = !!(e.getCTM && yf(e)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Qe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Qe] !== "none" ? l[Qe] : "")),
    i.scale = i.rotate = i.translate = "none"),
    k = Al(e, r.svg),
    r.svg && (r.uncache ? (H = e.getBBox(),
    u = r.xOrigin - H.x + "px " + (r.yOrigin - H.y) + "px",
    V = "") : V = !t && e.getAttribute("data-svg-origin"),
    Ba(e, V || u, !!V || r.originIsAbsolute, r.smooth !== !1, k)),
    w = r.xOrigin || 0,
    T = r.yOrigin || 0,
    k !== So && ($ = k[0],
    M = k[1],
    E = k[2],
    F = k[3],
    f = Y = k[4],
    h = R = k[5],
    k.length === 6 ? (c = Math.sqrt($ * $ + M * M),
    p = Math.sqrt(F * F + E * E),
    g = $ || M ? Zi(M, $) * Pi : 0,
    y = E || F ? Zi(E, F) * Pi + g : 0,
    y && (p *= Math.abs(Math.cos(y * vn))),
    r.svg && (f -= w - (w * $ + T * E),
    h -= T - (w * M + T * F))) : (De = k[6],
    re = k[7],
    O = k[8],
    G = k[9],
    ee = k[10],
    le = k[11],
    f = k[12],
    h = k[13],
    d = k[14],
    S = Zi(De, ee),
    _ = S * Pi,
    S && (C = Math.cos(-S),
    B = Math.sin(-S),
    V = Y * C + O * B,
    H = R * C + G * B,
    ne = De * C + ee * B,
    O = Y * -B + O * C,
    G = R * -B + G * C,
    ee = De * -B + ee * C,
    le = re * -B + le * C,
    Y = V,
    R = H,
    De = ne),
    S = Zi(-E, ee),
    v = S * Pi,
    S && (C = Math.cos(-S),
    B = Math.sin(-S),
    V = $ * C - O * B,
    H = M * C - G * B,
    ne = E * C - ee * B,
    le = F * B + le * C,
    $ = V,
    M = H,
    E = ne),
    S = Zi(M, $),
    g = S * Pi,
    S && (C = Math.cos(S),
    B = Math.sin(S),
    V = $ * C + M * B,
    H = Y * C + R * B,
    M = M * C - $ * B,
    R = R * C - Y * B,
    $ = V,
    Y = H),
    _ && Math.abs(_) + Math.abs(g) > 359.9 && (_ = g = 0,
    v = 180 - v),
    c = ot(Math.sqrt($ * $ + M * M + E * E)),
    p = ot(Math.sqrt(R * R + De * De)),
    S = Zi(Y, R),
    y = Math.abs(S) > 2e-4 ? S * Pi : 0,
    b = le ? 1 / (le < 0 ? -le : le) : 0),
    r.svg && (V = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !wf(Fr(e, Qe)),
    V && e.setAttribute("transform", V))),
    Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (c *= -1,
    y += g <= 0 ? 180 : -180,
    g += g <= 0 ? 180 : -180) : (p *= -1,
    y += y <= 0 ? 180 : -180)),
    t = t || r.uncache,
    r.x = f - ((r.xPercent = f && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = h - ((r.yPercent = h && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = d + s,
    r.scaleX = ot(c),
    r.scaleY = ot(p),
    r.rotation = ot(g) + a,
    r.rotationX = ot(_) + a,
    r.rotationY = ot(v) + a,
    r.skewX = y + a,
    r.skewY = m + a,
    r.transformPerspective = b + s,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[Sr] = Os(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = Jt.force3D,
    r.renderTransform = r.svg ? ip : _f ? bf : rp,
    r.uncache = 0,
    r
}, Os = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, ia = function(e, t, r) {
    var i = Tt(t);
    return ot(parseFloat(t) + parseFloat(gi(e, "x", r + "px", i))) + i
}, rp = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    bf(e, t)
}, wi = "0deg", Bn = "0px", bi = ") ", bf = function(e, t) {
    var r = t || this
      , i = r.xPercent
      , n = r.yPercent
      , s = r.x
      , a = r.y
      , l = r.z
      , u = r.rotation
      , f = r.rotationY
      , h = r.rotationX
      , d = r.skewX
      , c = r.skewY
      , p = r.scaleX
      , g = r.scaleY
      , _ = r.transformPerspective
      , v = r.force3D
      , y = r.target
      , m = r.zOrigin
      , b = ""
      , w = v === "auto" && e && e !== 1 || v === !0;
    if (m && (h !== wi || f !== wi)) {
        var T = parseFloat(f) * vn, k = Math.sin(T), S = Math.cos(T), C;
        T = parseFloat(h) * vn,
        C = Math.cos(T),
        s = ia(y, s, k * C * -m),
        a = ia(y, a, -Math.sin(T) * -m),
        l = ia(y, l, S * C * -m + m)
    }
    _ !== Bn && (b += "perspective(" + _ + bi),
    (i || n) && (b += "translate(" + i + "%, " + n + "%) "),
    (w || s !== Bn || a !== Bn || l !== Bn) && (b += l !== Bn || w ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + bi),
    u !== wi && (b += "rotate(" + u + bi),
    f !== wi && (b += "rotateY(" + f + bi),
    h !== wi && (b += "rotateX(" + h + bi),
    (d !== wi || c !== wi) && (b += "skew(" + d + ", " + c + bi),
    (p !== 1 || g !== 1) && (b += "scale(" + p + ", " + g + bi),
    y.style[Qe] = b || "translate(0, 0)"
}, ip = function(e, t) {
    var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, l = r.rotation, u = r.skewX, f = r.skewY, h = r.scaleX, d = r.scaleY, c = r.target, p = r.xOrigin, g = r.yOrigin, _ = r.xOffset, v = r.yOffset, y = r.forceCSS, m = parseFloat(s), b = parseFloat(a), w, T, k, S, C;
    l = parseFloat(l),
    u = parseFloat(u),
    f = parseFloat(f),
    f && (f = parseFloat(f),
    u += f,
    l += f),
    l || u ? (l *= vn,
    u *= vn,
    w = Math.cos(l) * h,
    T = Math.sin(l) * h,
    k = Math.sin(l - u) * -d,
    S = Math.cos(l - u) * d,
    u && (f *= vn,
    C = Math.tan(u - f),
    C = Math.sqrt(1 + C * C),
    k *= C,
    S *= C,
    f && (C = Math.tan(f),
    C = Math.sqrt(1 + C * C),
    w *= C,
    T *= C)),
    w = ot(w),
    T = ot(T),
    k = ot(k),
    S = ot(S)) : (w = h,
    S = d,
    T = k = 0),
    (m && !~(s + "").indexOf("px") || b && !~(a + "").indexOf("px")) && (m = gi(c, "x", s, "px"),
    b = gi(c, "y", a, "px")),
    (p || g || _ || v) && (m = ot(m + p - (p * w + g * k) + _),
    b = ot(b + g - (p * T + g * S) + v)),
    (i || n) && (C = c.getBBox(),
    m = ot(m + i / 100 * C.width),
    b = ot(b + n / 100 * C.height)),
    C = "matrix(" + w + "," + T + "," + k + "," + S + "," + m + "," + b + ")",
    c.setAttribute("transform", C),
    y && (c.style[Qe] = C)
}, np = function(e, t, r, i, n) {
    var s = 360, a = gt(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Pi : 1), u = l - i, f = i + u + "deg", h, d;
    return a && (h = n.split("_")[1],
    h === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    h === "cw" && u < 0 ? u = (u + s * su) % s - ~~(u / s) * s : h === "ccw" && u > 0 && (u = (u - s * su) % s - ~~(u / s) * s)),
    e._pt = d = new Xt(e._pt,t,r,i,u,Yd),
    d.e = f,
    d.u = "deg",
    e._props.push(r),
    d
}, hu = function(e, t) {
    for (var r in t)
        e[r] = t[r];
    return e
}, op = function(e, t, r) {
    var i = hu({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, l, u, f, h, d, c, p;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[Qe] = t,
    a = ko(r, 1),
    To(r, Qe),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Qe],
    s[Qe] = t,
    a = ko(r, 1),
    s[Qe] = u);
    for (l in Zr)
        u = i[l],
        f = a[l],
        u !== f && n.indexOf(l) < 0 && (c = Tt(u),
        p = Tt(f),
        h = c !== p ? gi(r, l, u, p) : parseFloat(u),
        d = parseFloat(f),
        e._pt = new Xt(e._pt,a,l,h,d - h,Na),
        e._pt.u = p || 0,
        e._props.push(l));
    hu(a, i)
};
Yt("padding,margin,Width,Radius", function(o, e) {
    var t = "Top"
      , r = "Right"
      , i = "Bottom"
      , n = "Left"
      , s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(a) {
        return e < 2 ? o + a : "border" + a + o
    });
    Es[e > 1 ? "border" + o : o] = function(a, l, u, f, h) {
        var d, c;
        if (arguments.length < 4)
            return d = s.map(function(p) {
                return Yr(a, p, u)
            }),
            c = d.join(" "),
            c.split(d[0]).length === 5 ? d[0] : c;
        d = (f + "").split(" "),
        c = {},
        s.forEach(function(p, g) {
            return c[p] = d[g] = d[g] || d[(g - 1) / 2 | 0]
        }),
        a.init(l, c, h)
    }
});
var xf = {
    name: "css",
    register: $a,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, i, n) {
        var s = this._props, a = e.style, l = r.vars.startAt, u, f, h, d, c, p, g, _, v, y, m, b, w, T, k, S;
        Ol || $a(),
        this.styles = this.styles || gf(e),
        S = this.styles.props,
        this.tween = r;
        for (g in t)
            if (g !== "autoRound" && (f = t[g],
            !(jt[g] && nf(g, t, r, i, e, n)))) {
                if (c = typeof f,
                p = Es[g],
                c === "function" && (f = f.call(r, i, e, n),
                c = typeof f),
                c === "string" && ~f.indexOf("random(") && (f = bo(f)),
                p)
                    p(this, e, g, f, r) && (k = 1);
                else if (g.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(g) + "").trim(),
                    f += "",
                    fi.lastIndex = 0,
                    fi.test(u) || (_ = Tt(u),
                    v = Tt(f)),
                    v ? _ !== v && (u = gi(e, g, u, v) + v) : _ && (f += _),
                    this.add(a, "setProperty", u, f, i, n, 0, 0, g),
                    s.push(g),
                    S.push(g, 0, a[g]);
                else if (c !== "undefined") {
                    if (l && g in l ? (u = typeof l[g] == "function" ? l[g].call(r, i, e, n) : l[g],
                    gt(u) && ~u.indexOf("random(") && (u = bo(u)),
                    Tt(u + "") || (u += Jt.units[g] || Tt(Yr(e, g)) || ""),
                    (u + "").charAt(1) === "=" && (u = Yr(e, g))) : u = Yr(e, g),
                    d = parseFloat(u),
                    y = c === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                    y && (f = f.substr(2)),
                    h = parseFloat(f),
                    g in Hr && (g === "autoAlpha" && (d === 1 && Yr(e, "visibility") === "hidden" && h && (d = 0),
                    S.push("visibility", 0, a.visibility),
                    oi(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)),
                    g !== "scale" && g !== "transform" && (g = Hr[g],
                    ~g.indexOf(",") && (g = g.split(",")[0]))),
                    m = g in Zr,
                    m) {
                        if (this.styles.save(g),
                        b || (w = e._gsap,
                        w.renderTransform && !t.parseTransform || ko(e, t.parseTransform),
                        T = t.smoothOrigin !== !1 && w.smooth,
                        b = this._pt = new Xt(this._pt,a,Qe,0,1,w.renderTransform,w,0,-1),
                        b.dep = 1),
                        g === "scale")
                            this._pt = new Xt(this._pt,w,"scaleY",d,(y ? mn(d, y + h) : h) - d || 0,Na),
                            this._pt.u = 0,
                            s.push("scaleY", g),
                            g += "X";
                        else if (g === "transformOrigin") {
                            S.push(Sr, 0, a[Sr]),
                            f = ep(f),
                            w.svg ? Ba(e, f, 0, T, 0, this) : (v = parseFloat(f.split(" ")[2]) || 0,
                            v !== w.zOrigin && oi(this, w, "zOrigin", w.zOrigin, v),
                            oi(this, a, g, Os(u), Os(f)));
                            continue
                        } else if (g === "svgOrigin") {
                            Ba(e, f, 1, T, 0, this);
                            continue
                        } else if (g in vf) {
                            np(this, w, g, d, y ? mn(d, y + f) : f);
                            continue
                        } else if (g === "smoothOrigin") {
                            oi(this, w, "smooth", w.smooth, f);
                            continue
                        } else if (g === "force3D") {
                            w[g] = f;
                            continue
                        } else if (g === "transform") {
                            op(this, f, e);
                            continue
                        }
                    } else
                        g in a || (g = Rn(g) || g);
                    if (m || (h || h === 0) && (d || d === 0) && !zd.test(f) && g in a)
                        _ = (u + "").substr((d + "").length),
                        h || (h = 0),
                        v = Tt(f) || (g in Jt.units ? Jt.units[g] : _),
                        _ !== v && (d = gi(e, g, u, v)),
                        this._pt = new Xt(this._pt,m ? w : a,g,d,(y ? mn(d, y + h) : h) - d,!m && (v === "px" || g === "zIndex") && t.autoRound !== !1 ? Vd : Na),
                        this._pt.u = v || 0,
                        _ !== v && v !== "%" && (this._pt.b = u,
                        this._pt.r = Xd);
                    else if (g in a)
                        Jd.call(this, e, g, u, y ? y + f : f);
                    else if (g in e)
                        this.add(e, g, u || e[g], y ? y + f : f, i, n);
                    else {
                        wl(g, f);
                        continue
                    }
                    m || (g in a ? S.push(g, 0, a[g]) : S.push(g, 1, u || e[g])),
                    s.push(g)
                }
            }
        k && cf(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Cl())
            for (var r = t._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            t.styles.revert()
    },
    get: Yr,
    aliases: Hr,
    getSetter: function(e, t, r) {
        var i = Hr[t];
        return i && i.indexOf(",") < 0 && (t = i),
        t in Zr && t !== Sr && (e._gsap.x || Yr(e, "x")) ? r && ou === r ? t === "scale" ? Wd : Gd : (ou = r || {}) && (t === "scale" ? jd : Ud) : e.style && !yl(e.style[t]) ? qd : ~t.indexOf("-") ? Hd : Ml(e, t)
    },
    core: {
        _removeProperty: To,
        _getMatrix: Al
    }
};
tr.utils.checkPrefix = Rn;
tr.core.getStyleSaver = gf;
(function(o, e, t, r) {
    var i = Yt(o + "," + e + "," + t, function(n) {
        Zr[n] = 1
    });
    Yt(e, function(n) {
        Jt.units[n] = "deg",
        vf[n] = 1
    }),
    Hr[i[13]] = o + "," + e,
    Yt(r, function(n) {
        var s = n.split(":");
        Hr[s[1]] = i[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    Jt.units[o] = "px"
});
tr.registerPlugin(xf);
var J = tr.registerPlugin(xf) || tr;
J.core.Tween;
class Vt {
    constructor(e) {
        this.block = e,
        this.init(),
        this.initEvents()
    }
    init() {}
    initEvents() {}
}
const Ll = (o= () => {}
) => {
    J.matchMedia().add("(prefers-reduced-motion: no-preference)", o)
}
;
class sp extends Vt {
    init() {
        this.DOM = {
            columns: this.block.querySelectorAll(".brands__item")
        },
        this.column = {
            one: this.DOM.columns[0].innerHTML,
            two: this.DOM.columns[1].innerHTML,
            three: this.DOM.columns[2].innerHTML,
            four: this.DOM.columns[3].innerHTML,
            five: this.DOM.columns[4].innerHTML,
            six: this.DOM.columns[5].innerHTML
        },
        this.createTimeline()
    }
    createTimeline() {
        J.matchMedia().add({
            isMobile: "(max-width: 768px)",
            isDesktop: "(min-width: 769px ) and (max-width: 1240px)",
            isLargeDesktop: "(min-width: 1241px)"
        }, t => {
            let r;
            t.conditions.isMobile ? (r = 3,
            this.DOM.columns[0].innerHTML = [this.column.one + this.column.two],
            this.DOM.columns[1].innerHTML = [this.column.three + this.column.four],
            this.DOM.columns[2].innerHTML = [this.column.five + this.column.six]) : t.conditions.isDesktop ? (r = 5,
            this.DOM.columns[0].innerHTML = [this.column.one + this.column.two],
            this.DOM.columns[1].innerHTML = this.column.three,
            this.DOM.columns[2].innerHTML = this.column.four,
            this.DOM.columns[3].innerHTML = this.column.five,
            this.DOM.columns[4].innerHTML = this.column.six) : t.conditions.isLargeDesktop && (r = 6,
            this.DOM.columns[0].innerHTML = this.column.one,
            this.DOM.columns[1].innerHTML = this.column.two,
            this.DOM.columns[2].innerHTML = this.column.three,
            this.DOM.columns[3].innerHTML = this.column.four,
            this.DOM.columns[4].innerHTML = this.column.five,
            this.DOM.columns[5].innerHTML = this.column.six),
            Ll( () => {
                for (let i = 0; i < r; i++) {
                    const s = this.DOM.columns[i].querySelectorAll("svg")
                      , a = J.utils.random(["-200%", "200%"])
                      , l = i % 2 === 0
                      , u = J.timeline({
                        repeat: -1,
                        delay: -r + i * .2
                    });
                    s.forEach(f => {
                        u.to(f, {
                            keyframes: [{
                                y: l ? a : 0,
                                x: l ? 0 : a,
                                duration: .3
                            }, {
                                autoAlpha: 1,
                                x: 0,
                                y: 0,
                                duration: .5,
                                ease: "power2.out"
                            }, {
                                delay: 3,
                                y: l ? 0 : a,
                                x: l ? a : 0,
                                duration: .3,
                                ease: "power2.in"
                            }]
                        }).set(f, {
                            autoAlpha: 0
                        })
                    }
                    )
                }
            }
            )
        }
        )
    }
}
class ap extends Vt {
    init() {
        const e = J.utils.selector(this.block);
        this.DOM = {
            button: this.block,
            flair: e(".button__flair")
        },
        this.xSet = J.quickSetter(this.DOM.flair, "xPercent"),
        this.ySet = J.quickSetter(this.DOM.flair, "yPercent"),
        this.hasFill = this.DOM.button.classList.contains("button--fill")
    }
    getXY(e) {
        const {left: t, top: r, width: i, height: n} = this.DOM.button.getBoundingClientRect()
          , s = J.utils.pipe(J.utils.mapRange(0, i, 0, 100), J.utils.clamp(0, 100))
          , a = J.utils.pipe(J.utils.mapRange(0, n, 0, 100), J.utils.clamp(0, 100));
        return {
            x: s(e.clientX - t),
            y: a(e.clientY - r)
        }
    }
    initEvents() {
        this.DOM.button.addEventListener("mouseenter", e => {
            const {x: t, y: r} = this.getXY(e);
            this.xSet(t),
            this.ySet(r),
            this.hasFill ? J.to(this.DOM.flair, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }) : J.to(this.DOM.flair, {
                scale: 1,
                duration: .4,
                ease: "power2.out"
            })
        }
        ),
        this.DOM.button.addEventListener("mouseleave", e => {
            const {x: t, y: r} = this.getXY(e);
            J.killTweensOf(this.DOM.flair),
            this.hasFill ? J.to(this.DOM.flair, {
                xPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
                yPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }) : J.to(this.DOM.flair, {
                xPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
                yPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                scale: 0,
                duration: .3,
                ease: "power2.out"
            })
        }
        ),
        this.DOM.button.addEventListener("mousemove", e => {
            const {x: t, y: r} = this.getXY(e);
            J.to(this.DOM.flair, {
                xPercent: t,
                yPercent: r,
                duration: this.hasFill ? 1 : .4,
                ease: "power2"
            })
        }
        )
    }
}
/*!
 * paths 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var lp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, up = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, cp = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, fp = /(^[#\.][a-z]|[a-y][a-z])/i, hp = Math.PI / 180, dp = 180 / Math.PI, Io = Math.sin, $o = Math.cos, $t = Math.abs, Vr = Math.sqrt, pp = Math.atan2, Po = 1e8, du = function(e) {
    return typeof e == "string"
}, Tf = function(e) {
    return typeof e == "number"
}, gp = function(e) {
    return typeof e > "u"
}, _p = {}, mp = {}, Cs = 1e5, Sf = function(e) {
    return Math.round((e + Po) % 1 * Cs) / Cs || (e < 0 ? 0 : 1)
}, Oe = function(e) {
    return Math.round(e * Cs) / Cs || 0
}, pu = function(e) {
    return Math.round(e * 1e10) / 1e10 || 0
}, gu = function(e, t, r, i) {
    var n = e[t]
      , s = i === 1 ? 6 : za(n, r, i);
    if (s && s + r + 2 < n.length)
        return e.splice(t, 0, n.slice(0, r + s + 2)),
        n.splice(0, r + s),
        1
}, kf = function(e, t, r) {
    var i = e.length
      , n = ~~(r * i);
    if (e[n] > t) {
        for (; --n && e[n] > t; )
            ;
        n < 0 && (n = 0)
    } else
        for (; e[++n] < t && n < i; )
            ;
    return n < i ? n : i - 1
}, yp = function(e, t) {
    var r = e.length;
    for (t || e.reverse(); r--; )
        e[r].reversed || bp(e[r])
}, _u = function(e, t) {
    return t.totalLength = e.totalLength,
    e.samples ? (t.samples = e.samples.slice(0),
    t.lookup = e.lookup.slice(0),
    t.minLength = e.minLength,
    t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints),
    t
}, vp = function(e, t) {
    var r = e.length
      , i = e[r - 1] || []
      , n = i.length;
    r && t[0] === i[n - 2] && t[1] === i[n - 1] && (t = i.concat(t.slice(2)),
    r--),
    e[r] = t
}, oo;
function ss(o) {
    o = du(o) && fp.test(o) && document.querySelector(o) || o;
    var e = o.getAttribute ? o : 0, t;
    return e && (o = o.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}),
    t = e._gsPath[o],
    t && !t._dirty ? t : e._gsPath[o] = Mo(o)) : o ? du(o) ? Mo(o) : Tf(o[0]) ? [o] : o : console.warn("Expecting a <path> element or an SVG path data string")
}
function wp(o) {
    for (var e = [], t = 0; t < o.length; t++)
        e[t] = _u(o[t], o[t].slice(0));
    return _u(o, e)
}
function bp(o) {
    var e = 0, t;
    for (o.reverse(); e < o.length; e += 2)
        t = o[e],
        o[e] = o[e + 1],
        o[e + 1] = t;
    o.reversed = !o.reversed
}
var xp = function(e, t) {
    var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(e.attributes), n = i.length, s;
    for (t = "," + t + ","; --n > -1; )
        s = i[n].nodeName.toLowerCase(),
        t.indexOf("," + s + ",") < 0 && r.setAttributeNS(null, s, i[n].nodeValue);
    return r
}
  , Tp = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
}
  , Sp = function(e, t) {
    for (var r = t ? t.split(",") : [], i = {}, n = r.length; --n > -1; )
        i[r[n]] = +e.getAttribute(r[n]) || 0;
    return i
};
function kp(o, e) {
    var t = o.tagName.toLowerCase(), r = .552284749831, i, n, s, a, l, u, f, h, d, c, p, g, _, v, y, m, b, w, T, k, S, C;
    return t === "path" || !o.getBBox ? o : (u = xp(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
    C = Sp(o, Tp[t]),
    t === "rect" ? (a = C.rx,
    l = C.ry || a,
    n = C.x,
    s = C.y,
    c = C.width - a * 2,
    p = C.height - l * 2,
    a || l ? (g = n + a * (1 - r),
    _ = n + a,
    v = _ + c,
    y = v + a * r,
    m = v + a,
    b = s + l * (1 - r),
    w = s + l,
    T = w + p,
    k = T + l * r,
    S = T + l,
    i = "M" + m + "," + w + " V" + T + " C" + [m, k, y, S, v, S, v - (v - _) / 3, S, _ + (v - _) / 3, S, _, S, g, S, n, k, n, T, n, T - (T - w) / 3, n, w + (T - w) / 3, n, w, n, b, g, s, _, s, _ + (v - _) / 3, s, v - (v - _) / 3, s, v, s, y, s, m, b, m, w].join(",") + "z") : i = "M" + (n + c) + "," + s + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (a = l = C.r,
    h = a * r) : (a = C.rx,
    l = C.ry,
    h = l * r),
    n = C.cx,
    s = C.cy,
    f = a * r,
    i = "M" + (n + a) + "," + s + " C" + [n + a, s + h, n + f, s + l, n, s + l, n - f, s + l, n - a, s + h, n - a, s, n - a, s - h, n - f, s - l, n, s - l, n + f, s - l, n + a, s - h, n + a, s].join(",") + "z") : t === "line" ? i = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2 : (t === "polyline" || t === "polygon") && (d = (o.getAttribute("points") + "").match(up) || [],
    n = d.shift(),
    s = d.shift(),
    i = "M" + n + "," + s + " L" + d.join(","),
    t === "polygon" && (i += "," + n + "," + s + "z")),
    u.setAttribute("d", Rl(u._gsRawPath = Mo(i))),
    e && o.parentNode && (o.parentNode.insertBefore(u, o),
    o.parentNode.removeChild(o)),
    u)
}
function Pf(o, e, t) {
    var r = o[e], i = o[e + 2], n = o[e + 4], s;
    return r += (i - r) * t,
    i += (n - i) * t,
    r += (i - r) * t,
    s = i + (n + (o[e + 6] - n) * t - i) * t - r,
    r = o[e + 1],
    i = o[e + 3],
    n = o[e + 5],
    r += (i - r) * t,
    i += (n - i) * t,
    r += (i - r) * t,
    Oe(pp(i + (n + (o[e + 7] - n) * t - i) * t - r, s) * dp)
}
function Mf(o, e, t) {
    t = gp(t) ? 1 : pu(t) || 0,
    e = pu(e) || 0;
    var r = Math.max(0, ~~($t(t - e) - 1e-8))
      , i = wp(o);
    if (e > t && (e = 1 - e,
    t = 1 - t,
    yp(i),
    i.totalLength = 0),
    e < 0 || t < 0) {
        var n = Math.abs(~~Math.min(e, t)) + 1;
        e += n,
        t += n
    }
    i.totalLength || wn(i);
    var s = t > 1, a = mu(i, e, _p, !0), l = mu(i, t, mp), u = l.segment, f = a.segment, h = l.segIndex, d = a.segIndex, c = l.i, p = a.i, g = d === h, _ = c === p && g, v, y, m, b, w, T, k, S;
    if (s || r) {
        for (v = h < d || g && c < p || _ && l.t < a.t,
        gu(i, d, p, a.t) && (d++,
        v || (h++,
        _ ? (l.t = (l.t - a.t) / (1 - a.t),
        c = 0) : g && (c -= p))),
        Math.abs(1 - (t - e)) < 1e-5 ? h = d - 1 : !l.t && h ? h-- : gu(i, h, c, l.t) && v && d++,
        a.t === 1 && (d = (d + 1) % i.length),
        w = [],
        T = i.length,
        k = 1 + T * r,
        S = d,
        k += (T - d + h) % T,
        b = 0; b < k; b++)
            vp(w, i[S++ % T]);
        i = w
    } else if (m = l.t === 1 ? 6 : za(u, c, l.t),
    e !== t)
        for (y = za(f, p, _ ? a.t / l.t : a.t),
        g && (m += y),
        u.splice(c + m + 2),
        (y || p) && f.splice(0, p + y),
        b = i.length; b--; )
            (b < d || b > h) && i.splice(b, 1);
    else
        u.angle = Pf(u, c + m, 0),
        c += m,
        a = u[c],
        l = u[c + 1],
        u.length = u.totalLength = 0,
        u.totalPoints = i.totalPoints = 8,
        u.push(a, l, a, l, a, l, a, l);
    return i.totalLength = 0,
    i
}
function Pp(o, e, t) {
    e = e || 0,
    o.samples || (o.samples = [],
    o.lookup = []);
    var r = ~~o.resolution || 12, i = 1 / r, n = t ? e + t * 6 + 1 : o.length, s = o[e], a = o[e + 1], l = e ? e / 6 * r : 0, u = o.samples, f = o.lookup, h = (e ? o.minLength : Po) || Po, d = u[l + t * r - 1], c = e ? u[l - 1] : 0, p, g, _, v, y, m, b, w, T, k, S, C, B, $, M, E, F;
    for (u.length = f.length = 0,
    g = e + 2; g < n; g += 6) {
        if (_ = o[g + 4] - s,
        v = o[g + 2] - s,
        y = o[g] - s,
        w = o[g + 5] - a,
        T = o[g + 3] - a,
        k = o[g + 1] - a,
        m = b = S = C = 0,
        $t(_) < .01 && $t(w) < .01 && $t(y) + $t(k) < .01)
            o.length > 8 && (o.splice(g, 6),
            g -= 6,
            n -= 6);
        else
            for (p = 1; p <= r; p++)
                $ = i * p,
                B = 1 - $,
                m = b - (b = ($ * $ * _ + 3 * B * ($ * v + B * y)) * $),
                S = C - (C = ($ * $ * w + 3 * B * ($ * T + B * k)) * $),
                E = Vr(S * S + m * m),
                E < h && (h = E),
                c += E,
                u[l++] = c;
        s += _,
        a += w
    }
    if (d)
        for (d -= c; l < u.length; l++)
            u[l] += d;
    if (u.length && h) {
        if (o.totalLength = F = u[u.length - 1] || 0,
        o.minLength = h,
        F / h < 9999)
            for (E = M = 0,
            p = 0; p < F; p += h)
                f[E++] = u[M] < p ? ++M : M
    } else
        o.totalLength = u[0] = 0;
    return e ? c - u[e / 2 - 1] : c
}
function wn(o, e) {
    var t, r, i;
    for (i = t = r = 0; i < o.length; i++)
        o[i].resolution = ~~e || 12,
        r += o[i].length,
        t += Pp(o[i]);
    return o.totalPoints = r,
    o.totalLength = t,
    o
}
function za(o, e, t) {
    if (t <= 0 || t >= 1)
        return 0;
    var r = o[e]
      , i = o[e + 1]
      , n = o[e + 2]
      , s = o[e + 3]
      , a = o[e + 4]
      , l = o[e + 5]
      , u = o[e + 6]
      , f = o[e + 7]
      , h = r + (n - r) * t
      , d = n + (a - n) * t
      , c = i + (s - i) * t
      , p = s + (l - s) * t
      , g = h + (d - h) * t
      , _ = c + (p - c) * t
      , v = a + (u - a) * t
      , y = l + (f - l) * t;
    return d += (v - d) * t,
    p += (y - p) * t,
    o.splice(e + 2, 4, Oe(h), Oe(c), Oe(g), Oe(_), Oe(g + (d - g) * t), Oe(_ + (p - _) * t), Oe(d), Oe(p), Oe(v), Oe(y)),
    o.samples && o.samples.splice(e / 6 * o.resolution | 0, 0, 0, 0, 0, 0, 0, 0),
    6
}
function mu(o, e, t, r) {
    t = t || {},
    o.totalLength || wn(o),
    (e < 0 || e > 1) && (e = Sf(e));
    var i = 0, n = o[0], s, a, l, u, f, h, d;
    if (!e)
        d = h = i = 0,
        n = o[0];
    else if (e === 1)
        d = 1,
        i = o.length - 1,
        n = o[i],
        h = n.length - 8;
    else {
        if (o.length > 1) {
            for (l = o.totalLength * e,
            f = h = 0; (f += o[h++].totalLength) < l; )
                i = h;
            n = o[i],
            u = f - n.totalLength,
            e = (l - u) / (f - u) || 0
        }
        s = n.samples,
        a = n.resolution,
        l = n.totalLength * e,
        h = n.lookup.length ? n.lookup[~~(l / n.minLength)] || 0 : kf(s, l, e),
        u = h ? s[h - 1] : 0,
        f = s[h],
        f < l && (u = f,
        f = s[++h]),
        d = 1 / a * ((l - u) / (f - u) + h % a),
        h = ~~(h / a) * 6,
        r && d === 1 && (h + 6 < n.length ? (h += 6,
        d = 0) : i + 1 < o.length && (h = d = 0,
        n = o[++i]))
    }
    return t.t = d,
    t.i = h,
    t.path = o,
    t.segment = n,
    t.segIndex = i,
    t
}
function yu(o, e, t, r) {
    var i = o[0], n = r || {}, s, a, l, u, f, h, d, c, p;
    if ((e < 0 || e > 1) && (e = Sf(e)),
    o.length > 1) {
        for (l = o.totalLength * e,
        f = h = 0; (f += o[h++].totalLength) < l; )
            i = o[h];
        u = f - i.totalLength,
        e = (l - u) / (f - u) || 0
    }
    return s = i.samples,
    a = i.resolution,
    l = i.totalLength * e,
    h = i.lookup.length ? i.lookup[e < 1 ? ~~(l / i.minLength) : i.lookup.length - 1] || 0 : kf(s, l, e),
    u = h ? s[h - 1] : 0,
    f = s[h],
    f < l && (u = f,
    f = s[++h]),
    d = 1 / a * ((l - u) / (f - u) + h % a) || 0,
    p = 1 - d,
    h = ~~(h / a) * 6,
    c = i[h],
    n.x = Oe((d * d * (i[h + 6] - c) + 3 * p * (d * (i[h + 4] - c) + p * (i[h + 2] - c))) * d + c),
    n.y = Oe((d * d * (i[h + 7] - (c = i[h + 1])) + 3 * p * (d * (i[h + 5] - c) + p * (i[h + 3] - c))) * d + c),
    t && (n.angle = i.totalLength ? Pf(i, h, d >= 1 ? 1 - 1e-9 : d || 1e-9) : i.angle || 0),
    n
}
function fn(o, e, t, r, i, n, s) {
    for (var a = o.length, l, u, f, h, d; --a > -1; )
        for (l = o[a],
        u = l.length,
        f = 0; f < u; f += 2)
            h = l[f],
            d = l[f + 1],
            l[f] = h * e + d * r + n,
            l[f + 1] = h * t + d * i + s;
    return o._dirty = 1,
    o
}
function Mp(o, e, t, r, i, n, s, a, l) {
    if (!(o === a && e === l)) {
        t = $t(t),
        r = $t(r);
        var u = i % 360 * hp
          , f = $o(u)
          , h = Io(u)
          , d = Math.PI
          , c = d * 2
          , p = (o - a) / 2
          , g = (e - l) / 2
          , _ = f * p + h * g
          , v = -h * p + f * g
          , y = _ * _
          , m = v * v
          , b = y / (t * t) + m / (r * r);
        b > 1 && (t = Vr(b) * t,
        r = Vr(b) * r);
        var w = t * t
          , T = r * r
          , k = (w * T - w * m - T * y) / (w * m + T * y);
        k < 0 && (k = 0);
        var S = (n === s ? -1 : 1) * Vr(k)
          , C = S * (t * v / r)
          , B = S * -(r * _ / t)
          , $ = (o + a) / 2
          , M = (e + l) / 2
          , E = $ + (f * C - h * B)
          , F = M + (h * C + f * B)
          , Y = (_ - C) / t
          , R = (v - B) / r
          , V = (-_ - C) / t
          , H = (-v - B) / r
          , ne = Y * Y + R * R
          , O = (R < 0 ? -1 : 1) * Math.acos(Y / Vr(ne))
          , G = (Y * H - R * V < 0 ? -1 : 1) * Math.acos((Y * V + R * H) / Vr(ne * (V * V + H * H)));
        isNaN(G) && (G = d),
        !s && G > 0 ? G -= c : s && G < 0 && (G += c),
        O %= c,
        G %= c;
        var ee = Math.ceil($t(G) / (c / 4)), re = [], le = G / ee, De = 4 / 3 * Io(le / 2) / (1 + $o(le / 2)), fe = f * t, Ae = h * t, _e = h * -r, qt = f * r, de;
        for (de = 0; de < ee; de++)
            i = O + de * le,
            _ = $o(i),
            v = Io(i),
            Y = $o(i += le),
            R = Io(i),
            re.push(_ - De * v, v + De * _, Y + De * R, R - De * Y, Y, R);
        for (de = 0; de < re.length; de += 2)
            _ = re[de],
            v = re[de + 1],
            re[de] = _ * fe + v * _e + E,
            re[de + 1] = _ * Ae + v * qt + F;
        return re[de - 2] = a,
        re[de - 1] = l,
        re
    }
}
function Mo(o) {
    var e = (o + "").replace(cp, function(C) {
        var B = +C;
        return B < 1e-4 && B > -1e-4 ? 0 : B
    }).match(lp) || [], t = [], r = 0, i = 0, n = 2 / 3, s = e.length, a = 0, l = "ERROR: malformed path: " + o, u, f, h, d, c, p, g, _, v, y, m, b, w, T, k, S = function(B, $, M, E) {
        y = (M - B) / 3,
        m = (E - $) / 3,
        g.push(B + y, $ + m, M - y, E - m, M, E)
    };
    if (!o || !isNaN(e[0]) || isNaN(e[1]))
        return console.log(l),
        t;
    for (u = 0; u < s; u++)
        if (w = c,
        isNaN(e[u]) ? (c = e[u].toUpperCase(),
        p = c !== e[u]) : u--,
        h = +e[u + 1],
        d = +e[u + 2],
        p && (h += r,
        d += i),
        u || (_ = h,
        v = d),
        c === "M")
            g && (g.length < 8 ? t.length -= 1 : a += g.length),
            r = _ = h,
            i = v = d,
            g = [h, d],
            t.push(g),
            u += 2,
            c = "L";
        else if (c === "C")
            g || (g = [0, 0]),
            p || (r = i = 0),
            g.push(h, d, r + e[u + 3] * 1, i + e[u + 4] * 1, r += e[u + 5] * 1, i += e[u + 6] * 1),
            u += 6;
        else if (c === "S")
            y = r,
            m = i,
            (w === "C" || w === "S") && (y += r - g[g.length - 4],
            m += i - g[g.length - 3]),
            p || (r = i = 0),
            g.push(y, m, h, d, r += e[u + 3] * 1, i += e[u + 4] * 1),
            u += 4;
        else if (c === "Q")
            y = r + (h - r) * n,
            m = i + (d - i) * n,
            p || (r = i = 0),
            r += e[u + 3] * 1,
            i += e[u + 4] * 1,
            g.push(y, m, r + (h - r) * n, i + (d - i) * n, r, i),
            u += 4;
        else if (c === "T")
            y = r - g[g.length - 4],
            m = i - g[g.length - 3],
            g.push(r + y, i + m, h + (r + y * 1.5 - h) * n, d + (i + m * 1.5 - d) * n, r = h, i = d),
            u += 2;
        else if (c === "H")
            S(r, i, r = h, i),
            u += 1;
        else if (c === "V")
            S(r, i, r, i = h + (p ? i - r : 0)),
            u += 1;
        else if (c === "L" || c === "Z")
            c === "Z" && (h = _,
            d = v,
            g.closed = !0),
            (c === "L" || $t(r - h) > .5 || $t(i - d) > .5) && (S(r, i, h, d),
            c === "L" && (u += 2)),
            r = h,
            i = d;
        else if (c === "A") {
            if (T = e[u + 4],
            k = e[u + 5],
            y = e[u + 6],
            m = e[u + 7],
            f = 7,
            T.length > 1 && (T.length < 3 ? (m = y,
            y = k,
            f--) : (m = k,
            y = T.substr(2),
            f -= 2),
            k = T.charAt(1),
            T = T.charAt(0)),
            b = Mp(r, i, +e[u + 1], +e[u + 2], +e[u + 3], +T, +k, (p ? r : 0) + y * 1, (p ? i : 0) + m * 1),
            u += f,
            b)
                for (f = 0; f < b.length; f++)
                    g.push(b[f]);
            r = g[g.length - 2],
            i = g[g.length - 1]
        } else
            console.log(l);
    return u = g.length,
    u < 6 ? (t.pop(),
    u = 0) : g[0] === g[u - 2] && g[1] === g[u - 1] && (g.closed = !0),
    t.totalPoints = a + u,
    t
}
function vu(o, e, t, r, i, n, s, a, l, u, f) {
    var h = (o + t) / 2, d = (e + r) / 2, c = (t + i) / 2, p = (r + n) / 2, g = (i + s) / 2, _ = (n + a) / 2, v = (h + c) / 2, y = (d + p) / 2, m = (c + g) / 2, b = (p + _) / 2, w = (v + m) / 2, T = (y + b) / 2, k = s - o, S = a - e, C = $t((t - s) * S - (r - a) * k), B = $t((i - s) * S - (n - a) * k), $;
    return u || (u = [o, e, s, a],
    f = 2),
    u.splice(f || u.length - 2, 0, w, T),
    (C + B) * (C + B) > l * (k * k + S * S) && ($ = u.length,
    vu(o, e, h, d, v, y, w, T, l, u, f),
    vu(w, T, m, b, g, _, s, a, l, u, f + 2 + (u.length - $))),
    u
}
function Ep(o, e) {
    e === void 0 && (e = 1);
    for (var t = o[0], r = 0, i = [t, r], n = 2; n < o.length; n += 2)
        i.push(t, r, o[n], r = (o[n] - t) * e / 2, t = o[n], -r);
    return i
}
function Ya(o, e) {
    $t(o[0] - o[2]) < 1e-4 && $t(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
    var t = o.length - 2, r = +o[0], i = +o[1], n = +o[2], s = +o[3], a = [r, i, r, i], l = n - r, u = s - i, f = Math.abs(o[t] - r) < .001 && Math.abs(o[t + 1] - i) < .001, h, d, c, p, g, _, v, y, m, b, w, T, k, S, C;
    for (f && (o.push(n, s),
    n = r,
    s = i,
    r = o[t - 2],
    i = o[t - 1],
    o.unshift(r, i),
    t += 4),
    e = e || e === 0 ? +e : 1,
    c = 2; c < t; c += 2)
        h = r,
        d = i,
        r = n,
        i = s,
        n = +o[c + 2],
        s = +o[c + 3],
        !(r === n && i === s) && (p = l,
        g = u,
        l = n - r,
        u = s - i,
        _ = Vr(p * p + g * g),
        v = Vr(l * l + u * u),
        y = Vr(Math.pow(l / v + p / _, 2) + Math.pow(u / v + g / _, 2)),
        m = (_ + v) * e * .25 / y,
        b = r - (r - h) * (_ ? m / _ : 0),
        w = r + (n - r) * (v ? m / v : 0),
        T = r - (b + ((w - b) * (_ * 3 / (_ + v) + .5) / 4 || 0)),
        k = i - (i - d) * (_ ? m / _ : 0),
        S = i + (s - i) * (v ? m / v : 0),
        C = i - (k + ((S - k) * (_ * 3 / (_ + v) + .5) / 4 || 0)),
        (r !== h || i !== d) && a.push(Oe(b + T), Oe(k + C), Oe(r), Oe(i), Oe(w + T), Oe(S + C)));
    return r !== n || i !== s || a.length < 4 ? a.push(Oe(n), Oe(s), Oe(n), Oe(s)) : a.length -= 2,
    a.length === 2 ? a.push(r, i, r, i, r, i) : f && (a.splice(0, 6),
    a.length = a.length - 6),
    a
}
function Op(o, e, t, r, i, n) {
    var s = i - t, a = n - r, l;
    return (s || a) && (l = ((o - t) * s + (e - r) * a) / (s * s + a * a),
    l > 1 ? (t = i,
    r = n) : l > 0 && (t += s * l,
    r += a * l)),
    Math.pow(o - t, 2) + Math.pow(e - r, 2)
}
function Xa(o, e, t, r, i) {
    var n = r, s = o[e], a = o[e + 1], l = o[t], u = o[t + 1], f, h, d;
    for (h = e + 2; h < t; h += 2)
        d = Op(o[h], o[h + 1], s, a, l, u),
        d > n && (f = h,
        n = d);
    n > r && (f - e > 2 && Xa(o, e, f, r, i),
    i.push(o[f], o[f + 1]),
    t - f > 2 && Xa(o, f, t, r, i))
}
function P0(o, e) {
    var t = parseFloat(o[0]), r = parseFloat(o[1]), i = [t, r], n = o.length - 2, s, a, l, u, f, h, d;
    for (e = Math.pow(e || 1, 2),
    s = 2; s < n; s += 2)
        a = parseFloat(o[s]),
        l = parseFloat(o[s + 1]),
        u = t - a,
        f = r - l,
        u * u + f * f > e && (i.push(a, l),
        t = a,
        r = l);
    return i.push(parseFloat(o[n]), parseFloat(o[n + 1])),
    d = i.length - 2,
    h = [i[0], i[1]],
    Xa(i, 0, d, e, h),
    h.push(i[d], i[d + 1]),
    h
}
function Ef(o, e, t, r, i, n, s, a, l, u, f, h, d, c) {
    var p = (i - r) / n, g = 0, _ = r, v, y, m, b, w, T;
    for (oo = Po; _ <= i; )
        T = 1 - _,
        v = T * T * T * s + 3 * T * T * _ * l + 3 * T * _ * _ * f + _ * _ * _ * d,
        y = T * T * T * a + 3 * T * T * _ * u + 3 * T * _ * _ * h + _ * _ * _ * c,
        b = v - e,
        w = y - t,
        m = b * b + w * w,
        m < oo && (oo = m,
        g = _),
        _ += p;
    return o > 1 ? Ef(o - 1, e, t, Math.max(g - p, 0), Math.min(g + p, 1), n, s, a, l, u, f, h, d, c) : g
}
function M0(o, e, t, r) {
    var i = {
        j: 0,
        i: 0,
        t: 0
    }, n = Po, s, a, l, u;
    for (a = 0; a < o.length; a++)
        for (u = o[a],
        s = 0; s < u.length; s += 6)
            l = Ef(1, e, t, 0, 1, r || 20, u[s], u[s + 1], u[s + 2], u[s + 3], u[s + 4], u[s + 5], u[s + 6], u[s + 7]),
            n > oo && (n = oo,
            i.j = a,
            i.i = s,
            i.t = l);
    return i
}
function Rl(o) {
    Tf(o[0]) && (o = [o]);
    var e = "", t = o.length, r, i, n, s;
    for (i = 0; i < t; i++) {
        for (s = o[i],
        e += "M" + Oe(s[0]) + "," + Oe(s[1]) + " C",
        r = s.length,
        n = 2; n < r; n++)
            e += Oe(s[n++]) + "," + Oe(s[n++]) + " " + Oe(s[n++]) + "," + Oe(s[n++]) + " " + Oe(s[n++]) + "," + Oe(s[n]) + " ";
        s.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Nt, Of, Cf = function() {
    return Nt || typeof window < "u" && (Nt = window.gsap) && Nt.registerPlugin && Nt
}, wu = function() {
    Nt = Cf(),
    Nt ? (Nt.registerEase("_CE", _i.create),
    Of = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
}, Cp = 1e20, Bo = function(e) {
    return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
}, Dp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, Ap = /[cLlsSaAhHvVtTqQ]/g, Lp = function(e) {
    var t = e.length, r = Cp, i;
    for (i = 1; i < t; i += 6)
        +e[i] < r && (r = +e[i]);
    return r
}, Rp = function(e, t, r) {
    !r && r !== 0 && (r = Math.max(+e[e.length - 1], +e[1]));
    var i = +e[0] * -1, n = -r, s = e.length, a = 1 / (+e[s - 2] + i), l = -t || (Math.abs(+e[s - 1] - +e[1]) < .01 * (+e[s - 2] - +e[0]) ? Lp(e) + n : +e[s - 1] + n), u;
    for (l ? l = 1 / l : l = -a,
    u = 0; u < s; u += 2)
        e[u] = (+e[u] + i) * a,
        e[u + 1] = (+e[u + 1] + n) * l
}, Fp = function o(e, t, r, i, n, s, a, l, u, f, h) {
    var d = (e + r) / 2, c = (t + i) / 2, p = (r + n) / 2, g = (i + s) / 2, _ = (n + a) / 2, v = (s + l) / 2, y = (d + p) / 2, m = (c + g) / 2, b = (p + _) / 2, w = (g + v) / 2, T = (y + b) / 2, k = (m + w) / 2, S = a - e, C = l - t, B = Math.abs((r - a) * C - (i - l) * S), $ = Math.abs((n - a) * C - (s - l) * S), M;
    return f || (f = [{
        x: e,
        y: t
    }, {
        x: a,
        y: l
    }],
    h = 1),
    f.splice(h || f.length - 1, 0, {
        x: T,
        y: k
    }),
    (B + $) * (B + $) > u * (S * S + C * C) && (M = f.length,
    o(e, t, d, c, y, m, T, k, u, f, h),
    o(T, k, b, w, _, v, a, l, u, f, h + 1 + (f.length - M))),
    f
}, _i = function() {
    function o(t, r, i) {
        Of || wu(),
        this.id = t,
        this.setData(r, i)
    }
    var e = o.prototype;
    return e.setData = function(r, i) {
        i = i || {},
        r = r || "0,0,1,1";
        var n = r.match(Dp), s = 1, a = [], l = [], u = i.precision || 1, f = u <= 1, h, d, c, p, g, _, v, y, m;
        if (this.data = r,
        (Ap.test(r) || ~r.indexOf("M") && r.indexOf("C") < 0) && (n = Mo(r)[0]),
        h = n.length,
        h === 4)
            n.unshift(0, 0),
            n.push(1, 1),
            h = 8;
        else if ((h - 2) % 6)
            throw "Invalid CustomEase";
        for ((+n[0] != 0 || +n[h - 2] != 1) && Rp(n, i.height, i.originY),
        this.segment = n,
        p = 2; p < h; p += 6)
            d = {
                x: +n[p - 2],
                y: +n[p - 1]
            },
            c = {
                x: +n[p + 4],
                y: +n[p + 5]
            },
            a.push(d, c),
            Fp(d.x, d.y, +n[p], +n[p + 1], +n[p + 2], +n[p + 3], c.x, c.y, 1 / (u * 2e5), a, a.length - 1);
        for (h = a.length,
        p = 0; p < h; p++)
            v = a[p],
            y = a[p - 1] || v,
            (v.x > y.x || y.y !== v.y && y.x === v.x || v === y) && v.x <= 1 ? (y.cx = v.x - y.x,
            y.cy = v.y - y.y,
            y.n = v,
            y.nx = v.x,
            f && p > 1 && Math.abs(y.cy / y.cx - a[p - 2].cy / a[p - 2].cx) > 2 && (f = 0),
            y.cx < s && (y.cx ? s = y.cx : (y.cx = .001,
            p === h - 1 && (y.x -= .001,
            s = Math.min(s, .001),
            f = 0)))) : (a.splice(p--, 1),
            h--);
        if (h = 1 / s + 1 | 0,
        g = 1 / h,
        _ = 0,
        v = a[0],
        f) {
            for (p = 0; p < h; p++)
                m = p * g,
                v.nx < m && (v = a[++_]),
                d = v.y + (m - v.x) / v.cx * v.cy,
                l[p] = {
                    x: m,
                    cx: g,
                    y: d,
                    cy: 0,
                    nx: 9
                },
                p && (l[p - 1].cy = d - l[p - 1].y);
            l[h - 1].cy = a[a.length - 1].y - d
        } else {
            for (p = 0; p < h; p++)
                v.nx < p * g && (v = a[++_]),
                l[p] = v;
            _ < a.length - 1 && (l[p - 1] = a[a.length - 2])
        }
        return this.ease = function(b) {
            var w = l[b * h | 0] || l[h - 1];
            return w.nx < b && (w = w.n),
            w.y + (b - w.x) / w.cx * w.cy
        }
        ,
        this.ease.custom = this,
        this.id && Nt && Nt.registerEase(this.id, this.ease),
        this
    }
    ,
    e.getSVGData = function(r) {
        return o.getSVGData(this, r)
    }
    ,
    o.create = function(r, i, n) {
        return new o(r,i,n).ease
    }
    ,
    o.register = function(r) {
        Nt = r,
        wu()
    }
    ,
    o.get = function(r) {
        return Nt.parseEase(r)
    }
    ,
    o.getSVGData = function(r, i) {
        i = i || {};
        var n = i.width || 100, s = i.height || 100, a = i.x || 0, l = (i.y || 0) + s, u = Nt.utils.toArray(i.path)[0], f, h, d, c, p, g, _, v, y, m;
        if (i.invert && (s = -s,
        l = 0),
        typeof r == "string" && (r = Nt.parseEase(r)),
        r.custom && (r = r.custom),
        r instanceof o)
            f = Rl(fn([r.segment], n, 0, 0, -s, a, l));
        else {
            for (f = [a, l],
            _ = Math.max(5, (i.precision || 1) * 200),
            c = 1 / _,
            _ += 2,
            v = 5 / _,
            y = Bo(a + c * n),
            m = Bo(l + r(c) * -s),
            h = (m - l) / (y - a),
            d = 2; d < _; d++)
                p = Bo(a + d * c * n),
                g = Bo(l + r(d * c) * -s),
                (Math.abs((g - m) / (p - y) - h) > v || d === _ - 1) && (f.push(y, m),
                h = (g - m) / (p - y)),
                y = p,
                m = g;
            f = "M" + f.join(",")
        }
        return u && u.setAttribute("d", f),
        f
    }
    ,
    o
}();
Cf() && Nt.registerPlugin(_i);
_i.version = "3.11.3";
/*!
 * matrix 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Gr, Ii, Fl, bn, Wn, as, Ds, so, dr = "transform", Va = dr + "Origin", Df, Af = function(e) {
    var t = e.ownerDocument || e;
    for (!(dr in e.style) && ("msTransform"in e.style) && (dr = "msTransform",
    Va = dr + "Origin"); t.parentNode && (t = t.parentNode); )
        ;
    if (Ii = window,
    Ds = new qi,
    t) {
        Gr = t,
        Fl = t.documentElement,
        bn = t.body,
        so = Gr.createElementNS("http://www.w3.org/2000/svg", "g"),
        so.style.transform = "none";
        var r = t.createElement("div")
          , i = t.createElement("div");
        bn.appendChild(r),
        r.appendChild(i),
        r.style.position = "static",
        r.style[dr] = "translate3d(0,0,1px)",
        Df = i.offsetParent !== r,
        bn.removeChild(r)
    }
    return t
}, Np = function(e) {
    for (var t, r; e && e !== bn; )
        r = e._gsap,
        r && r.uncache && r.get(e, "x"),
        r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4,
        r.renderTransform(1, r),
        t ? t.push(r) : t = [r]),
        e = e.parentNode;
    return t
}, Lf = [], Rf = [], Ip = function() {
    return Ii.pageYOffset || Gr.scrollTop || Fl.scrollTop || bn.scrollTop || 0
}, $p = function() {
    return Ii.pageXOffset || Gr.scrollLeft || Fl.scrollLeft || bn.scrollLeft || 0
}, Nl = function(e) {
    return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
}, Bp = function o(e) {
    if (Ii.getComputedStyle(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return o(e)
}, na = function o(e, t) {
    if (e.parentNode && (Gr || Af(e))) {
        var r = Nl(e)
          , i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
          , n = r ? t ? "rect" : "g" : "div"
          , s = t !== 2 ? 0 : 100
          , a = t === 3 ? 100 : 0
          , l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
          , u = Gr.createElementNS ? Gr.createElementNS(i.replace(/^https/, "http"), n) : Gr.createElement(n);
        return t && (r ? (as || (as = o(e)),
        u.setAttribute("width", .01),
        u.setAttribute("height", .01),
        u.setAttribute("transform", "translate(" + s + "," + a + ")"),
        as.appendChild(u)) : (Wn || (Wn = o(e),
        Wn.style.cssText = l),
        u.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px",
        Wn.appendChild(u))),
        u
    }
    throw "Need document and parent."
}, zp = function(e) {
    for (var t = new qi, r = 0; r < e.numberOfItems; r++)
        t.multiply(e.getItem(r).matrix);
    return t
}, Yp = function(e) {
    var t = e.getCTM(), r;
    return t || (r = e.style[dr],
    e.style[dr] = "none",
    e.appendChild(so),
    t = so.getCTM(),
    e.removeChild(so),
    r ? e.style[dr] = r : e.style.removeProperty(dr.replace(/([A-Z])/g, "-$1").toLowerCase())),
    t || Ds.clone()
}, Xp = function(e, t) {
    var r = Nl(e), i = e === r, n = r ? Lf : Rf, s = e.parentNode, a, l, u, f, h, d;
    if (e === Ii)
        return e;
    if (n.length || n.push(na(e, 1), na(e, 2), na(e, 3)),
    a = r ? as : Wn,
    r)
        i ? (u = Yp(e),
        f = -u.e / u.a,
        h = -u.f / u.d,
        l = Ds) : e.getBBox ? (u = e.getBBox(),
        l = e.transform ? e.transform.baseVal : {},
        l = l.numberOfItems ? l.numberOfItems > 1 ? zp(l) : l.getItem(0).matrix : Ds,
        f = l.a * u.x + l.c * u.y,
        h = l.b * u.x + l.d * u.y) : (l = new qi,
        f = h = 0),
        t && e.tagName.toLowerCase() === "g" && (f = h = 0),
        (i ? r : s).appendChild(a),
        a.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + f) + "," + (l.f + h) + ")");
    else {
        if (f = h = 0,
        Df)
            for (l = e.offsetParent,
            u = e; u && (u = u.parentNode) && u !== l && u.parentNode; )
                (Ii.getComputedStyle(u)[dr] + "").length > 4 && (f = u.offsetLeft,
                h = u.offsetTop,
                u = 0);
        if (d = Ii.getComputedStyle(e),
        d.position !== "absolute" && d.position !== "fixed")
            for (l = e.offsetParent; s && s !== l; )
                f += s.scrollLeft || 0,
                h += s.scrollTop || 0,
                s = s.parentNode;
        u = a.style,
        u.top = e.offsetTop - h + "px",
        u.left = e.offsetLeft - f + "px",
        u[dr] = d[dr],
        u[Va] = d[Va],
        u.position = d.position === "fixed" ? "fixed" : "absolute",
        e.parentNode.appendChild(a)
    }
    return a
}, oa = function(e, t, r, i, n, s, a) {
    return e.a = t,
    e.b = r,
    e.c = i,
    e.d = n,
    e.e = s,
    e.f = a,
    e
}, qi = function() {
    function o(t, r, i, n, s, a) {
        t === void 0 && (t = 1),
        r === void 0 && (r = 0),
        i === void 0 && (i = 0),
        n === void 0 && (n = 1),
        s === void 0 && (s = 0),
        a === void 0 && (a = 0),
        oa(this, t, r, i, n, s, a)
    }
    var e = o.prototype;
    return e.inverse = function() {
        var r = this.a
          , i = this.b
          , n = this.c
          , s = this.d
          , a = this.e
          , l = this.f
          , u = r * s - i * n || 1e-10;
        return oa(this, s / u, -i / u, -n / u, r / u, (n * l - s * a) / u, -(r * l - i * a) / u)
    }
    ,
    e.multiply = function(r) {
        var i = this.a
          , n = this.b
          , s = this.c
          , a = this.d
          , l = this.e
          , u = this.f
          , f = r.a
          , h = r.c
          , d = r.b
          , c = r.d
          , p = r.e
          , g = r.f;
        return oa(this, f * i + d * s, f * n + d * a, h * i + c * s, h * n + c * a, l + p * i + g * s, u + p * n + g * a)
    }
    ,
    e.clone = function() {
        return new o(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    e.equals = function(r) {
        var i = this.a
          , n = this.b
          , s = this.c
          , a = this.d
          , l = this.e
          , u = this.f;
        return i === r.a && n === r.b && s === r.c && a === r.d && l === r.e && u === r.f
    }
    ,
    e.apply = function(r, i) {
        i === void 0 && (i = {});
        var n = r.x
          , s = r.y
          , a = this.a
          , l = this.b
          , u = this.c
          , f = this.d
          , h = this.e
          , d = this.f;
        return i.x = n * a + s * u + h || 0,
        i.y = n * l + s * f + d || 0,
        i
    }
    ,
    o
}();
function Kt(o, e, t, r) {
    if (!o || !o.parentNode || (Gr || Af(o)).documentElement === o)
        return new qi;
    var i = Np(o)
      , n = Nl(o)
      , s = n ? Lf : Rf
      , a = Xp(o, t)
      , l = s[0].getBoundingClientRect()
      , u = s[1].getBoundingClientRect()
      , f = s[2].getBoundingClientRect()
      , h = a.parentNode
      , d = !r && Bp(o)
      , c = new qi((u.left - l.left) / 100,(u.top - l.top) / 100,(f.left - l.left) / 100,(f.top - l.top) / 100,l.left + (d ? 0 : $p()),l.top + (d ? 0 : Ip()));
    if (h.removeChild(a),
    i)
        for (l = i.length; l--; )
            u = i[l],
            u.scaleX = u.scaleY = 0,
            u.renderTransform(1, u);
    return e ? c.inverse() : c
}
function Vp(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function qp(o, e) {
    o.prototype = Object.create(e.prototype),
    o.prototype.constructor = o,
    o.__proto__ = e
}
var ke, ze, Qt, kr, Wr, sa, Xr, qa, jn, si, Ff, Ha, Eo, Il, Un, vr, Kn, ls, As = 0, Nf = function() {
    return typeof window < "u"
}, If = function() {
    return ke || Nf() && (ke = window.gsap) && ke.registerPlugin && ke
}, ri = function(e) {
    return typeof e == "function"
}, ao = function(e) {
    return typeof e == "object"
}, Tr = function(e) {
    return typeof e > "u"
}, us = function() {
    return !1
}, lo = "transform", Ga = "transformOrigin", Jr = function(e) {
    return Math.round(e * 1e4) / 1e4
}, zn = Array.isArray, zo = function(e, t) {
    var r = Qt.createElementNS ? Qt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Qt.createElement(e);
    return r.style ? r : Qt.createElement(e)
}, bu = 180 / Math.PI, xi = 1e20, Hp = new qi, ei = Date.now || function() {
    return new Date().getTime()
}
, $i = [], xn = {}, Gp = 0, Wp = /^(?:a|input|textarea|button|select)$/i, xu = 0, Ji = {}, Br = {}, $f = function(e, t) {
    var r = {}, i;
    for (i in e)
        r[i] = t ? e[i] * t : e[i];
    return r
}, jp = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, Tu = function o(e, t) {
    for (var r = e.length, i; r--; )
        t ? e[r].style.touchAction = t : e[r].style.removeProperty("touch-action"),
        i = e[r].children,
        i && i.length && o(i, t)
}, Bf = function() {
    return $i.forEach(function(e) {
        return e()
    })
}, Up = function(e) {
    $i.push(e),
    $i.length === 1 && ke.ticker.add(Bf)
}, Su = function() {
    return !$i.length && ke.ticker.remove(Bf)
}, ku = function(e) {
    for (var t = $i.length; t--; )
        $i[t] === e && $i.splice(t, 1);
    ke.to(Su, {
        overwrite: !0,
        delay: 15,
        duration: 0,
        onComplete: Su,
        data: "_draggable"
    })
}, Kp = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, ut = function(e, t, r, i) {
    if (e.addEventListener) {
        var n = Eo[t];
        i = i || (Ff ? {
            passive: !1
        } : null),
        e.addEventListener(n || t, r, i),
        n && t !== n && e.addEventListener(t, r, i)
    }
}, at = function(e, t, r) {
    if (e.removeEventListener) {
        var i = Eo[t];
        e.removeEventListener(i || t, r),
        i && t !== i && e.removeEventListener(t, r)
    }
}, ir = function(e) {
    e.preventDefault && e.preventDefault(),
    e.preventManipulation && e.preventManipulation()
}, Qp = function(e, t) {
    for (var r = e.length; r--; )
        if (e[r].identifier === t)
            return !0
}, Zp = function o(e) {
    Il = e.touches && As < e.touches.length,
    at(e.target, "touchend", o)
}, Pu = function(e) {
    Il = e.touches && As < e.touches.length,
    ut(e.target, "touchend", Zp)
}, Tn = function(e) {
    return ze.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
}, Sn = function(e) {
    return ze.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
}, Mu = function o(e, t) {
    ut(e, "scroll", t),
    Fn(e.parentNode) || o(e.parentNode, t)
}, Eu = function o(e, t) {
    at(e, "scroll", t),
    Fn(e.parentNode) || o(e.parentNode, t)
}, Fn = function(e) {
    return !e || e === kr || e.nodeType === 9 || e === Qt.body || e === ze || !e.nodeType || !e.parentNode
}, Ou = function(e, t) {
    var r = t === "x" ? "Width" : "Height"
      , i = "scroll" + r
      , n = "client" + r;
    return Math.max(0, Fn(e) ? Math.max(kr[i], Wr[i]) - (ze["inner" + r] || kr[n] || Wr[n]) : e[i] - e[n])
}, aa = function o(e, t) {
    var r = Ou(e, "x")
      , i = Ou(e, "y");
    Fn(e) ? e = Br : o(e.parentNode, t),
    e._gsMaxScrollX = r,
    e._gsMaxScrollY = i,
    t || (e._gsScrollX = e.scrollLeft || 0,
    e._gsScrollY = e.scrollTop || 0)
}, la = function(e, t, r) {
    var i = e.style;
    i && (Tr(i[t]) && (t = jn(t, e) || t),
    r == null ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = r)
}, Oo = function(e) {
    return ze.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
}, Ti = {}, en = function(e) {
    if (e === ze)
        return Ti.left = Ti.top = 0,
        Ti.width = Ti.right = kr.clientWidth || e.innerWidth || Wr.clientWidth || 0,
        Ti.height = Ti.bottom = (e.innerHeight || 0) - 20 < kr.clientHeight ? kr.clientHeight : e.innerHeight || Wr.clientHeight || 0,
        Ti;
    var t = e.ownerDocument || Qt
      , r = Tr(e.pageX) ? !e.nodeType && !Tr(e.left) && !Tr(e.top) ? e : si(e)[0].getBoundingClientRect() : {
        left: e.pageX - Sn(t),
        top: e.pageY - Tn(t),
        right: e.pageX - Sn(t) + 1,
        bottom: e.pageY - Tn(t) + 1
    };
    return Tr(r.right) && !Tr(r.width) ? (r.right = r.left + r.width,
    r.bottom = r.top + r.height) : Tr(r.width) && (r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
    }),
    r
}, it = function(e, t, r) {
    var i = e.vars, n = i[r], s = e._listeners[t], a;
    return ri(n) && (a = n.apply(i.callbackScope || e, i[r + "Params"] || [e.pointerEvent])),
    s && e.dispatchEvent(t) === !1 && (a = !1),
    a
}, Cu = function(e, t) {
    var r = si(e)[0], i, n, s;
    return !r.nodeType && r !== ze ? Tr(e.left) ? (n = e.min || e.minX || e.minRotation || 0,
    i = e.min || e.minY || 0,
    {
        left: n,
        top: i,
        width: (e.max || e.maxX || e.maxRotation || 0) - n,
        height: (e.max || e.maxY || 0) - i
    }) : (s = {
        x: 0,
        y: 0
    },
    {
        left: e.left - s.x,
        top: e.top - s.y,
        width: e.width,
        height: e.height
    }) : Jp(r, t)
}, nr = {}, Jp = function(e, t) {
    t = si(t)[0];
    var r = e.getBBox && e.ownerSVGElement, i = e.ownerDocument || Qt, n, s, a, l, u, f, h, d, c, p, g, _, v;
    if (e === ze)
        a = Tn(i),
        n = Sn(i),
        s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0),
        l = a + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
    else {
        if (t === ze || Tr(t))
            return e.getBoundingClientRect();
        n = a = 0,
        r ? (p = e.getBBox(),
        g = p.width,
        _ = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (n = p.x || 0,
        a = p.y || 0,
        g = p.width,
        _ = p.height),
        g || (v = Oo(e),
        p = v.boxSizing === "border-box",
        g = (parseFloat(v.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(v.borderLeftWidth) + parseFloat(v.borderRightWidth)),
        _ = (parseFloat(v.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(v.borderTopWidth) + parseFloat(v.borderBottomWidth)))),
        s = g,
        l = _
    }
    return e === t ? {
        left: n,
        top: a,
        width: s - n,
        height: l - a
    } : (u = Kt(t, !0).multiply(Kt(e)),
    f = u.apply({
        x: n,
        y: a
    }),
    h = u.apply({
        x: s,
        y: a
    }),
    d = u.apply({
        x: s,
        y: l
    }),
    c = u.apply({
        x: n,
        y: l
    }),
    n = Math.min(f.x, h.x, d.x, c.x),
    a = Math.min(f.y, h.y, d.y, c.y),
    {
        left: n,
        top: a,
        width: Math.max(f.x, h.x, d.x, c.x) - n,
        height: Math.max(f.y, h.y, d.y, c.y) - a
    })
}, ua = function(e, t, r, i, n, s) {
    var a = {}, l, u, f;
    if (t)
        if (n !== 1 && t instanceof Array) {
            if (a.end = l = [],
            f = t.length,
            ao(t[0]))
                for (u = 0; u < f; u++)
                    l[u] = $f(t[u], n);
            else
                for (u = 0; u < f; u++)
                    l[u] = t[u] * n;
            r += 1.1,
            i -= 1.1
        } else
            ri(t) ? a.end = function(h) {
                var d = t.call(e, h), c, p;
                if (n !== 1)
                    if (ao(d)) {
                        c = {};
                        for (p in d)
                            c[p] = d[p] * n;
                        d = c
                    } else
                        d *= n;
                return d
            }
            : a.end = t;
    return (r || r === 0) && (a.max = r),
    (i || i === 0) && (a.min = i),
    s && (a.velocity = 0),
    a
}, eg = function o(e) {
    var t;
    return !e || !e.getAttribute || e === Wr ? !1 : (t = e.getAttribute("data-clickable")) === "true" || t !== "false" && (e.onclick || Wp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : o(e.parentNode)
}, Yo = function(e, t) {
    for (var r = e.length, i; r--; )
        i = e[r],
        i.ondragstart = i.onselectstart = t ? null : us,
        ke.set(i, {
            lazy: !0,
            userSelect: t ? "text" : "none"
        })
}, tg = function o(e) {
    if (Oo(e).position === "fixed")
        return !0;
    if (e = e.parentNode,
    e && e.nodeType === 1)
        return o(e)
}, zf, Wa, rg = function(e, t) {
    e = ke.utils.toArray(e)[0],
    t = t || {};
    var r = document.createElement("div"), i = r.style, n = e.firstChild, s = 0, a = 0, l = e.scrollTop, u = e.scrollLeft, f = e.scrollWidth, h = e.scrollHeight, d = 0, c = 0, p = 0, g, _, v, y, m, b;
    zf && t.force3D !== !1 ? (m = "translate3d(",
    b = "px,0px)") : lo && (m = "translate(",
    b = "px)"),
    this.scrollTop = function(w, T) {
        if (!arguments.length)
            return -this.top();
        this.top(-w, T)
    }
    ,
    this.scrollLeft = function(w, T) {
        if (!arguments.length)
            return -this.left();
        this.left(-w, T)
    }
    ,
    this.left = function(w, T) {
        if (!arguments.length)
            return -(e.scrollLeft + a);
        var k = e.scrollLeft - u
          , S = a;
        if ((k > 2 || k < -2) && !T) {
            u = e.scrollLeft,
            ke.killTweensOf(this, {
                left: 1,
                scrollLeft: 1
            }),
            this.left(-u),
            t.onKill && t.onKill();
            return
        }
        w = -w,
        w < 0 ? (a = w - .5 | 0,
        w = 0) : w > c ? (a = w - c | 0,
        w = c) : a = 0,
        (a || S) && (this._skip || (i[lo] = m + -a + "px," + -s + b),
        a + d >= 0 && (i.paddingRight = a + d + "px")),
        e.scrollLeft = w | 0,
        u = e.scrollLeft
    }
    ,
    this.top = function(w, T) {
        if (!arguments.length)
            return -(e.scrollTop + s);
        var k = e.scrollTop - l
          , S = s;
        if ((k > 2 || k < -2) && !T) {
            l = e.scrollTop,
            ke.killTweensOf(this, {
                top: 1,
                scrollTop: 1
            }),
            this.top(-l),
            t.onKill && t.onKill();
            return
        }
        w = -w,
        w < 0 ? (s = w - .5 | 0,
        w = 0) : w > p ? (s = w - p | 0,
        w = p) : s = 0,
        (s || S) && (this._skip || (i[lo] = m + -a + "px," + -s + b)),
        e.scrollTop = w | 0,
        l = e.scrollTop
    }
    ,
    this.maxScrollTop = function() {
        return p
    }
    ,
    this.maxScrollLeft = function() {
        return c
    }
    ,
    this.disable = function() {
        for (n = r.firstChild; n; )
            y = n.nextSibling,
            e.appendChild(n),
            n = y;
        e === r.parentNode && e.removeChild(r)
    }
    ,
    this.enable = function() {
        if (n = e.firstChild,
        n !== r) {
            for (; n; )
                y = n.nextSibling,
                r.appendChild(n),
                n = y;
            e.appendChild(r),
            this.calibrate()
        }
    }
    ,
    this.calibrate = function(w) {
        var T = e.clientWidth === g, k, S, C;
        l = e.scrollTop,
        u = e.scrollLeft,
        !(T && e.clientHeight === _ && r.offsetHeight === v && f === e.scrollWidth && h === e.scrollHeight && !w) && ((s || a) && (S = this.left(),
        C = this.top(),
        this.left(-e.scrollLeft),
        this.top(-e.scrollTop)),
        k = Oo(e),
        (!T || w) && (i.display = "block",
        i.width = "auto",
        i.paddingRight = "0px",
        d = Math.max(0, e.scrollWidth - e.clientWidth),
        d && (d += parseFloat(k.paddingLeft) + (Wa ? parseFloat(k.paddingRight) : 0))),
        i.display = "inline-block",
        i.position = "relative",
        i.overflow = "visible",
        i.verticalAlign = "top",
        i.boxSizing = "content-box",
        i.width = "100%",
        i.paddingRight = d + "px",
        Wa && (i.paddingBottom = k.paddingBottom),
        g = e.clientWidth,
        _ = e.clientHeight,
        f = e.scrollWidth,
        h = e.scrollHeight,
        c = e.scrollWidth - g,
        p = e.scrollHeight - _,
        v = r.offsetHeight,
        i.display = "block",
        (S || C) && (this.left(S),
        this.top(C)))
    }
    ,
    this.content = r,
    this.element = e,
    this._skip = !1,
    this.enable()
}, ca = function(e) {
    if (Nf() && document.body) {
        var t = window && window.navigator;
        ze = window,
        Qt = document,
        kr = Qt.documentElement,
        Wr = Qt.body,
        sa = zo("div"),
        ls = !!window.PointerEvent,
        Xr = zo("div"),
        Xr.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
        Kn = Xr.style.cursor === "grab" ? "grab" : "move",
        Un = t && t.userAgent.toLowerCase().indexOf("android") !== -1,
        Ha = "ontouchstart"in kr && "orientation"in ze || t && (t.MaxTouchPoints > 0 || t.msMaxTouchPoints > 0),
        Wa = function() {
            var r = zo("div"), i = zo("div"), n = i.style, s = Wr, a;
            return n.display = "inline-block",
            n.position = "relative",
            r.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            r.appendChild(i),
            s.appendChild(r),
            a = i.offsetHeight + 18 > r.scrollHeight,
            s.removeChild(r),
            a
        }(),
        Eo = function(r) {
            for (var i = r.split(","), n = ("onpointerdown"in sa ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in sa ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : r).split(","), s = {}, a = 4; --a > -1; )
                s[i[a]] = n[a],
                s[n[a]] = i[a];
            try {
                kr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        Ff = 1
                    }
                }))
            } catch {}
            return s
        }("touchstart,touchmove,touchend,touchcancel"),
        ut(Qt, "touchcancel", us),
        ut(ze, "touchmove", us),
        Wr && Wr.addEventListener("touchstart", us),
        ut(Qt, "contextmenu", function() {
            for (var r in xn)
                xn[r].isPressed && xn[r].endDrag()
        }),
        ke = qa = If()
    }
    ke ? (vr = ke.plugins.inertia,
    jn = ke.utils.checkPrefix,
    lo = jn(lo),
    Ga = jn(Ga),
    si = ke.utils.toArray,
    zf = !!jn("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
}, ig = function() {
    function o(t) {
        this._listeners = {},
        this.target = t || this
    }
    var e = o.prototype;
    return e.addEventListener = function(r, i) {
        var n = this._listeners[r] || (this._listeners[r] = []);
        ~n.indexOf(i) || n.push(i)
    }
    ,
    e.removeEventListener = function(r, i) {
        var n = this._listeners[r]
          , s = n && n.indexOf(i);
        s >= 0 && n.splice(s, 1)
    }
    ,
    e.dispatchEvent = function(r) {
        var i = this, n;
        return (this._listeners[r] || []).forEach(function(s) {
            return s.call(i, {
                type: r,
                target: i.target
            }) === !1 && (n = !1)
        }),
        n
    }
    ,
    o
}(), Hi = function(o) {
    qp(e, o);
    function e(t, r) {
        var i;
        i = o.call(this) || this,
        qa || ca(1),
        t = si(t)[0],
        vr || (vr = ke.plugins.inertia),
        i.vars = r = $f(r || {}),
        i.target = t,
        i.x = i.y = i.rotation = 0,
        i.dragResistance = parseFloat(r.dragResistance) || 0,
        i.edgeResistance = isNaN(r.edgeResistance) ? 1 : parseFloat(r.edgeResistance) || 0,
        i.lockAxis = r.lockAxis,
        i.autoScroll = r.autoScroll || 0,
        i.lockedAxis = null,
        i.allowEventDefault = !!r.allowEventDefault,
        ke.getProperty(t, "x");
        var n = (r.type || "x,y").toLowerCase(), s = ~n.indexOf("x") || ~n.indexOf("y"), a = n.indexOf("rotation") !== -1, l = a ? "rotation" : s ? "x" : "left", u = s ? "y" : "top", f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"), h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"), d = r.minimumMovement || 2, c = Vp(i), p = si(r.trigger || r.handle || t), g = {}, _ = 0, v = !1, y = r.autoScrollMarginTop || 40, m = r.autoScrollMarginRight || 40, b = r.autoScrollMarginBottom || 40, w = r.autoScrollMarginLeft || 40, T = r.clickableTest || eg, k = 0, S = t._gsap || ke.core.getCache(t), C = tg(t), B = function(P, I) {
            return parseFloat(S.get(t, P, I))
        }, $ = t.ownerDocument || Qt, M, E, F, Y, R, V, H, ne, O, G, ee, re, le, De, fe, Ae, _e, qt, de, Ge, ue, Ye, X, L, j, D, Q, ie, Ne, he, oe, Ce, Ie, st = function(P) {
            return ir(P),
            P.stopImmediatePropagation && P.stopImmediatePropagation(),
            !1
        }, ce = function W(P) {
            if (c.autoScroll && c.isDragging && (v || _e)) {
                var I = t, x = c.autoScroll * 15, A, N, z, U, q, se, K, pe;
                for (v = !1,
                Br.scrollTop = ze.pageYOffset != null ? ze.pageYOffset : $.documentElement.scrollTop != null ? $.documentElement.scrollTop : $.body.scrollTop,
                Br.scrollLeft = ze.pageXOffset != null ? ze.pageXOffset : $.documentElement.scrollLeft != null ? $.documentElement.scrollLeft : $.body.scrollLeft,
                U = c.pointerX - Br.scrollLeft,
                q = c.pointerY - Br.scrollTop; I && !N; )
                    N = Fn(I.parentNode),
                    A = N ? Br : I.parentNode,
                    z = N ? {
                        bottom: Math.max(kr.clientHeight, ze.innerHeight || 0),
                        right: Math.max(kr.clientWidth, ze.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : A.getBoundingClientRect(),
                    se = K = 0,
                    h && (pe = A._gsMaxScrollY - A.scrollTop,
                    pe < 0 ? K = pe : q > z.bottom - b && pe ? (v = !0,
                    K = Math.min(pe, x * (1 - Math.max(0, z.bottom - q) / b) | 0)) : q < z.top + y && A.scrollTop && (v = !0,
                    K = -Math.min(A.scrollTop, x * (1 - Math.max(0, q - z.top) / y) | 0)),
                    K && (A.scrollTop += K)),
                    f && (pe = A._gsMaxScrollX - A.scrollLeft,
                    pe < 0 ? se = pe : U > z.right - m && pe ? (v = !0,
                    se = Math.min(pe, x * (1 - Math.max(0, z.right - U) / m) | 0)) : U < z.left + w && A.scrollLeft && (v = !0,
                    se = -Math.min(A.scrollLeft, x * (1 - Math.max(0, U - z.left) / w) | 0)),
                    se && (A.scrollLeft += se)),
                    N && (se || K) && (ze.scrollTo(A.scrollLeft, A.scrollTop),
                    $e(c.pointerX + se, c.pointerY + K)),
                    I = A
            }
            if (_e) {
                var ae = c.x
                  , we = c.y;
                a ? (c.deltaX = ae - parseFloat(S.rotation),
                c.rotation = ae,
                S.rotation = ae + "deg",
                S.renderTransform(1, S)) : E ? (h && (c.deltaY = we - E.top(),
                E.top(we)),
                f && (c.deltaX = ae - E.left(),
                E.left(ae))) : s ? (h && (c.deltaY = we - parseFloat(S.y),
                S.y = we + "px"),
                f && (c.deltaX = ae - parseFloat(S.x),
                S.x = ae + "px"),
                S.renderTransform(1, S)) : (h && (c.deltaY = we - parseFloat(t.style.top || 0),
                t.style.top = we + "px"),
                f && (c.deltaX = ae - parseFloat(t.style.left || 0),
                t.style.left = ae + "px")),
                ne && !P && !ie && (ie = !0,
                it(c, "drag", "onDrag") === !1 && (f && (c.x -= c.deltaX),
                h && (c.y -= c.deltaY),
                W(!0)),
                ie = !1)
            }
            _e = !1
        }, Xe = function(P, I) {
            var x = c.x, A = c.y, N, z;
            t._gsap || (S = ke.core.getCache(t)),
            S.uncache && ke.getProperty(t, "x"),
            s ? (c.x = parseFloat(S.x),
            c.y = parseFloat(S.y)) : a ? c.x = c.rotation = parseFloat(S.rotation) : E ? (c.y = E.top(),
            c.x = E.left()) : (c.y = parseFloat(t.style.top || (z = Oo(t)) && z.top) || 0,
            c.x = parseFloat(t.style.left || (z || {}).left) || 0),
            (de || Ge || ue) && !I && (c.isDragging || c.isThrowing) && (ue && (Ji.x = c.x,
            Ji.y = c.y,
            N = ue(Ji),
            N.x !== c.x && (c.x = N.x,
            _e = !0),
            N.y !== c.y && (c.y = N.y,
            _e = !0)),
            de && (N = de(c.x),
            N !== c.x && (c.x = N,
            a && (c.rotation = N),
            _e = !0)),
            Ge && (N = Ge(c.y),
            N !== c.y && (c.y = N),
            _e = !0)),
            _e && ce(!0),
            P || (c.deltaX = c.x - x,
            c.deltaY = c.y - A,
            it(c, "throwupdate", "onThrowUpdate"))
        }, qe = function(P, I, x, A) {
            return I == null && (I = -xi),
            x == null && (x = xi),
            ri(P) ? function(N) {
                var z = c.isPressed ? 1 - c.edgeResistance : 1;
                return P.call(c, (N > x ? x + (N - x) * z : N < I ? I + (N - I) * z : N) * A) * A
            }
            : zn(P) ? function(N) {
                for (var z = P.length, U = 0, q = xi, se, K; --z > -1; )
                    se = P[z],
                    K = se - N,
                    K < 0 && (K = -K),
                    K < q && se >= I && se <= x && (U = z,
                    q = K);
                return P[U]
            }
            : isNaN(P) ? function(N) {
                return N
            }
            : function() {
                return P * A
            }
        }, Pr = function(P, I, x, A, N, z, U) {
            return z = z && z < xi ? z * z : xi,
            ri(P) ? function(q) {
                var se = c.isPressed ? 1 - c.edgeResistance : 1, K = q.x, pe = q.y, ae, we, rt;
                return q.x = K = K > x ? x + (K - x) * se : K < I ? I + (K - I) * se : K,
                q.y = pe = pe > N ? N + (pe - N) * se : pe < A ? A + (pe - A) * se : pe,
                ae = P.call(c, q),
                ae !== q && (q.x = ae.x,
                q.y = ae.y),
                U !== 1 && (q.x *= U,
                q.y *= U),
                z < xi && (we = q.x - K,
                rt = q.y - pe,
                we * we + rt * rt > z && (q.x = K,
                q.y = pe)),
                q
            }
            : zn(P) ? function(q) {
                for (var se = P.length, K = 0, pe = xi, ae, we, rt, be; --se > -1; )
                    rt = P[se],
                    ae = rt.x - q.x,
                    we = rt.y - q.y,
                    be = ae * ae + we * we,
                    be < pe && (K = se,
                    pe = be);
                return pe <= z ? P[K] : q
            }
            : function(q) {
                return q
            }
        }, We = function() {
            var P, I, x, A;
            H = !1,
            E ? (E.calibrate(),
            c.minX = ee = -E.maxScrollLeft(),
            c.minY = le = -E.maxScrollTop(),
            c.maxX = G = c.maxY = re = 0,
            H = !0) : r.bounds && (P = Cu(r.bounds, t.parentNode),
            a ? (c.minX = ee = P.left,
            c.maxX = G = P.left + P.width,
            c.minY = le = c.maxY = re = 0) : !Tr(r.bounds.maxX) || !Tr(r.bounds.maxY) ? (P = r.bounds,
            c.minX = ee = P.minX,
            c.minY = le = P.minY,
            c.maxX = G = P.maxX,
            c.maxY = re = P.maxY) : (I = Cu(t, t.parentNode),
            c.minX = ee = Math.round(B(l, "px") + P.left - I.left),
            c.minY = le = Math.round(B(u, "px") + P.top - I.top),
            c.maxX = G = Math.round(ee + (P.width - I.width)),
            c.maxY = re = Math.round(le + (P.height - I.height))),
            ee > G && (c.minX = G,
            c.maxX = G = ee,
            ee = c.minX),
            le > re && (c.minY = re,
            c.maxY = re = le,
            le = c.minY),
            a && (c.minRotation = ee,
            c.maxRotation = G),
            H = !0),
            r.liveSnap && (x = r.liveSnap === !0 ? r.snap || {} : r.liveSnap,
            A = zn(x) || ri(x),
            a ? (de = qe(A ? x : x.rotation, ee, G, 1),
            Ge = null) : x.points ? ue = Pr(A ? x : x.points, ee, G, le, re, x.radius, E ? -1 : 1) : (f && (de = qe(A ? x : x.x || x.left || x.scrollLeft, ee, G, E ? -1 : 1)),
            h && (Ge = qe(A ? x : x.y || x.top || x.scrollTop, le, re, E ? -1 : 1))))
        }, _t = function() {
            c.isThrowing = !1,
            it(c, "throwcomplete", "onThrowComplete")
        }, _r = function() {
            c.isThrowing = !1
        }, dt = function(P, I) {
            var x, A, N, z;
            P && vr ? (P === !0 && (x = r.snap || r.liveSnap || {},
            A = zn(x) || ri(x),
            P = {
                resistance: (r.throwResistance || r.resistance || 1e3) / (a ? 10 : 1)
            },
            a ? P.rotation = ua(c, A ? x : x.rotation, G, ee, 1, I) : (f && (P[l] = ua(c, A ? x : x.points || x.x || x.left, G, ee, E ? -1 : 1, I || c.lockedAxis === "x")),
            h && (P[u] = ua(c, A ? x : x.points || x.y || x.top, re, le, E ? -1 : 1, I || c.lockedAxis === "y")),
            (x.points || zn(x) && ao(x[0])) && (P.linkedProps = l + "," + u,
            P.radius = x.radius))),
            c.isThrowing = !0,
            z = isNaN(r.overshootTolerance) ? r.edgeResistance === 1 ? 0 : 1 - c.edgeResistance + .2 : r.overshootTolerance,
            P.duration || (P.duration = {
                max: Math.max(r.minDuration || 0, "maxDuration"in r ? r.maxDuration : 2),
                min: isNaN(r.minDuration) ? z === 0 || ao(P) && P.resistance > 1e3 ? 0 : .5 : r.minDuration,
                overshoot: z
            }),
            c.tween = N = ke.to(E || t, {
                inertia: P,
                data: "_draggable",
                onComplete: _t,
                onInterrupt: _r,
                onUpdate: r.fastMode ? it : Xe,
                onUpdateParams: r.fastMode ? [c, "onthrowupdate", "onThrowUpdate"] : x && x.radius ? [!1, !0] : []
            }),
            r.fastMode || (E && (E._skip = !0),
            N.render(1e9, !0, !0),
            Xe(!0, !0),
            c.endX = c.x,
            c.endY = c.y,
            a && (c.endRotation = c.x),
            N.play(0),
            Xe(!0, !0),
            E && (E._skip = !1))) : H && c.applyBounds()
        }, Ht = function(P) {
            var I = L, x;
            L = Kt(t.parentNode, !0),
            P && c.isPressed && !L.equals(I || new qi) && (x = I.inverse().apply({
                x: F,
                y: Y
            }),
            L.apply(x, x),
            F = x.x,
            Y = x.y),
            L.equals(Hp) && (L = null)
        }, wt = function() {
            var P = 1 - c.edgeResistance, I = C ? Sn($) : 0, x = C ? Tn($) : 0, A, N, z;
            s && (S.x = B(l, "px") + "px",
            S.y = B(u, "px") + "px",
            S.renderTransform()),
            Ht(!1),
            nr.x = c.pointerX - I,
            nr.y = c.pointerY - x,
            L && L.apply(nr, nr),
            F = nr.x,
            Y = nr.y,
            _e && ($e(c.pointerX, c.pointerY),
            ce(!0)),
            Ce = Kt(t),
            E ? (We(),
            V = E.top(),
            R = E.left()) : (te() ? (Xe(!0, !0),
            We()) : c.applyBounds(),
            a ? (A = t.ownerSVGElement ? [S.xOrigin - t.getBBox().x, S.yOrigin - t.getBBox().y] : (Oo(t)[Ga] || "0 0").split(" "),
            Ae = c.rotationOrigin = Kt(t).apply({
                x: parseFloat(A[0]) || 0,
                y: parseFloat(A[1]) || 0
            }),
            Xe(!0, !0),
            N = c.pointerX - Ae.x - I,
            z = Ae.y - c.pointerY + x,
            R = c.x,
            V = c.y = Math.atan2(z, N) * bu) : (V = B(u, "px"),
            R = B(l, "px"))),
            H && P && (R > G ? R = G + (R - G) / P : R < ee && (R = ee - (ee - R) / P),
            a || (V > re ? V = re + (V - re) / P : V < le && (V = le - (le - V) / P))),
            c.startX = R = Jr(R),
            c.startY = V = Jr(V)
        }, te = function() {
            return c.tween && c.tween.isActive()
        }, je = function() {
            Xr.parentNode && !te() && !c.isDragging && Xr.parentNode.removeChild(Xr)
        }, Ve = function(P, I) {
            var x;
            if (!M || c.isPressed || !P || (P.type === "mousedown" || P.type === "pointerdown") && !I && ei() - k < 30 && Eo[c.pointerEvent.type]) {
                oe && P && M && ir(P);
                return
            }
            if (j = te(),
            Ie = !1,
            c.pointerEvent = P,
            Eo[P.type] ? (X = ~P.type.indexOf("touch") ? P.currentTarget || P.target : $,
            ut(X, "touchend", Le),
            ut(X, "touchmove", He),
            ut(X, "touchcancel", Le),
            ut($, "touchstart", Pu)) : (X = null,
            ut($, "mousemove", He)),
            Q = null,
            (!ls || !X) && (ut($, "mouseup", Le),
            P && P.target && ut(P.target, "mouseup", Le)),
            Ye = T.call(c, P.target) && r.dragClickables === !1 && !I,
            Ye) {
                ut(P.target, "change", Le),
                it(c, "pressInit", "onPressInit"),
                it(c, "press", "onPress"),
                Yo(p, !0),
                oe = !1;
                return
            }
            if (D = !X || f === h || c.vars.allowNativeTouchScrolling === !1 || c.vars.allowContextMenu && P && (P.ctrlKey || P.which > 2) ? !1 : f ? "y" : "x",
            oe = !D && !c.allowEventDefault,
            oe && (ir(P),
            ut(ze, "touchforcechange", ir)),
            P.changedTouches ? (P = De = P.changedTouches[0],
            fe = P.identifier) : P.pointerId ? fe = P.pointerId : De = fe = null,
            As++,
            Up(ce),
            Y = c.pointerY = P.pageY,
            F = c.pointerX = P.pageX,
            it(c, "pressInit", "onPressInit"),
            (D || c.autoScroll) && aa(t.parentNode),
            t.parentNode && c.autoScroll && !E && !a && t.parentNode._gsMaxScrollX && !Xr.parentNode && !t.getBBox && (Xr.style.width = t.parentNode.scrollWidth + "px",
            t.parentNode.appendChild(Xr)),
            wt(),
            c.tween && c.tween.kill(),
            c.isThrowing = !1,
            ke.killTweensOf(E || t, g, !0),
            E && ke.killTweensOf(t, {
                scrollTo: 1
            }, !0),
            c.tween = c.lockedAxis = null,
            (r.zIndexBoost || !a && !E && r.zIndexBoost !== !1) && (t.style.zIndex = e.zIndex++),
            c.isPressed = !0,
            ne = !!(r.onDrag || c._listeners.drag),
            O = !!(r.onMove || c._listeners.move),
            r.cursor !== !1 || r.activeCursor)
                for (x = p.length; --x > -1; )
                    ke.set(p[x], {
                        cursor: r.activeCursor || r.cursor || (Kn === "grab" ? "grabbing" : Kn)
                    });
            it(c, "press", "onPress")
        }, He = function(P) {
            var I = P, x, A, N, z, U, q;
            if (!M || Il || !c.isPressed || !P) {
                oe && P && M && ir(P);
                return
            }
            if (c.pointerEvent = P,
            x = P.changedTouches,
            x) {
                if (P = x[0],
                P !== De && P.identifier !== fe) {
                    for (z = x.length; --z > -1 && (P = x[z]).identifier !== fe && P.target !== t; )
                        ;
                    if (z < 0)
                        return
                }
            } else if (P.pointerId && fe && P.pointerId !== fe)
                return;
            if (X && D && !Q && (nr.x = P.pageX - (C ? Sn($) : 0),
            nr.y = P.pageY - (C ? Tn($) : 0),
            L && L.apply(nr, nr),
            A = nr.x,
            N = nr.y,
            U = Math.abs(A - F),
            q = Math.abs(N - Y),
            (U !== q && (U > d || q > d) || Un && D === Q) && (Q = U > q && f ? "x" : "y",
            D && Q !== D && ut(ze, "touchforcechange", ir),
            c.vars.lockAxisOnTouchScroll !== !1 && f && h && (c.lockedAxis = Q === "x" ? "y" : "x",
            ri(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, I)),
            Un && D === Q))) {
                Le(I);
                return
            }
            !c.allowEventDefault && (!D || Q && D !== Q) && I.cancelable !== !1 ? (ir(I),
            oe = !0) : oe && (oe = !1),
            c.autoScroll && (v = !0),
            $e(P.pageX, P.pageY, O)
        }, $e = function(P, I, x) {
            var A = 1 - c.dragResistance, N = 1 - c.edgeResistance, z = c.pointerX, U = c.pointerY, q = V, se = c.x, K = c.y, pe = c.endX, ae = c.endY, we = c.endRotation, rt = _e, be, Pe, me, Re, yr, Me;
            c.pointerX = P,
            c.pointerY = I,
            C && (P -= Sn($),
            I -= Tn($)),
            a ? (Re = Math.atan2(Ae.y - I, P - Ae.x) * bu,
            yr = c.y - Re,
            yr > 180 ? (V -= 360,
            c.y = Re) : yr < -180 && (V += 360,
            c.y = Re),
            c.x !== R || Math.abs(V - Re) > d ? (c.y = Re,
            me = R + (V - Re) * A) : me = R) : (L && (Me = P * L.a + I * L.c + L.e,
            I = P * L.b + I * L.d + L.f,
            P = Me),
            Pe = I - Y,
            be = P - F,
            Pe < d && Pe > -d && (Pe = 0),
            be < d && be > -d && (be = 0),
            (c.lockAxis || c.lockedAxis) && (be || Pe) && (Me = c.lockedAxis,
            Me || (c.lockedAxis = Me = f && Math.abs(be) > Math.abs(Pe) ? "y" : h ? "x" : null,
            Me && ri(c.vars.onLockAxis) && c.vars.onLockAxis.call(c, c.pointerEvent)),
            Me === "y" ? Pe = 0 : Me === "x" && (be = 0)),
            me = Jr(R + be * A),
            Re = Jr(V + Pe * A)),
            (de || Ge || ue) && (c.x !== me || c.y !== Re && !a) && (ue && (Ji.x = me,
            Ji.y = Re,
            Me = ue(Ji),
            me = Jr(Me.x),
            Re = Jr(Me.y)),
            de && (me = Jr(de(me))),
            Ge && (Re = Jr(Ge(Re)))),
            H && (me > G ? me = G + Math.round((me - G) * N) : me < ee && (me = ee + Math.round((me - ee) * N)),
            a || (Re > re ? Re = Math.round(re + (Re - re) * N) : Re < le && (Re = Math.round(le + (Re - le) * N)))),
            (c.x !== me || c.y !== Re && !a) && (a ? (c.endRotation = c.x = c.endX = me,
            _e = !0) : (h && (c.y = c.endY = Re,
            _e = !0),
            f && (c.x = c.endX = me,
            _e = !0)),
            !x || it(c, "move", "onMove") !== !1 ? !c.isDragging && c.isPressed && (c.isDragging = Ie = !0,
            it(c, "dragstart", "onDragStart")) : (c.pointerX = z,
            c.pointerY = U,
            V = q,
            c.x = se,
            c.y = K,
            c.endX = pe,
            c.endY = ae,
            c.endRotation = we,
            _e = rt))
        }, Le = function W(P, I) {
            if (!M || !c.isPressed || P && fe != null && !I && (P.pointerId && P.pointerId !== fe && P.target !== t || P.changedTouches && !Qp(P.changedTouches, fe))) {
                oe && P && M && ir(P);
                return
            }
            c.isPressed = !1;
            var x = P, A = c.isDragging, N = c.vars.allowContextMenu && P && (P.ctrlKey || P.which > 2), z = ke.delayedCall(.001, je), U, q, se, K, pe;
            if (X ? (at(X, "touchend", W),
            at(X, "touchmove", He),
            at(X, "touchcancel", W),
            at($, "touchstart", Pu)) : at($, "mousemove", He),
            at(ze, "touchforcechange", ir),
            (!ls || !X) && (at($, "mouseup", W),
            P && P.target && at(P.target, "mouseup", W)),
            _e = !1,
            A && (_ = xu = ei(),
            c.isDragging = !1),
            ku(ce),
            Ye && !N) {
                P && (at(P.target, "change", W),
                c.pointerEvent = x),
                Yo(p, !1),
                it(c, "release", "onRelease"),
                it(c, "click", "onClick"),
                Ye = !1;
                return
            }
            for (q = p.length; --q > -1; )
                la(p[q], "cursor", r.cursor || (r.cursor !== !1 ? Kn : null));
            if (As--,
            P) {
                if (U = P.changedTouches,
                U && (P = U[0],
                P !== De && P.identifier !== fe)) {
                    for (q = U.length; --q > -1 && (P = U[q]).identifier !== fe && P.target !== t; )
                        ;
                    if (q < 0 && !I)
                        return
                }
                c.pointerEvent = x,
                c.pointerX = P.pageX,
                c.pointerY = P.pageY
            }
            return N && x ? (ir(x),
            oe = !0,
            it(c, "release", "onRelease")) : x && !A ? (oe = !1,
            j && (r.snap || r.bounds) && dt(r.inertia || r.throwProps),
            it(c, "release", "onRelease"),
            (!Un || x.type !== "touchmove") && x.type.indexOf("cancel") === -1 && (it(c, "click", "onClick"),
            ei() - k < 300 && it(c, "doubleclick", "onDoubleClick"),
            K = x.target || t,
            k = ei(),
            pe = function() {
                k !== Ne && c.enabled() && !c.isPressed && !x.defaultPrevented && (K.click ? K.click() : $.createEvent && (se = $.createEvent("MouseEvents"),
                se.initMouseEvent("click", !0, !0, ze, 1, c.pointerEvent.screenX, c.pointerEvent.screenY, c.pointerX, c.pointerY, !1, !1, !1, !1, 0, null),
                K.dispatchEvent(se)))
            }
            ,
            !Un && !x.defaultPrevented && ke.delayedCall(.05, pe))) : (dt(r.inertia || r.throwProps),
            !c.allowEventDefault && x && (r.dragClickables !== !1 || !T.call(c, x.target)) && A && (!D || Q && D === Q) && x.cancelable !== !1 ? (oe = !0,
            ir(x)) : oe = !1,
            it(c, "release", "onRelease")),
            te() && z.duration(c.tween.duration()),
            A && it(c, "dragend", "onDragEnd"),
            !0
        }, bt = function(P) {
            if (P && c.isDragging && !E) {
                var I = P.target || t.parentNode
                  , x = I.scrollLeft - I._gsScrollX
                  , A = I.scrollTop - I._gsScrollY;
                (x || A) && (L ? (F -= x * L.a + A * L.c,
                Y -= A * L.d + x * L.b) : (F -= x,
                Y -= A),
                I._gsScrollX += x,
                I._gsScrollY += A,
                $e(c.pointerX, c.pointerY))
            }
        }, mr = function(P) {
            var I = ei()
              , x = I - k < 100
              , A = I - _ < 50
              , N = x && Ne === k
              , z = c.pointerEvent && c.pointerEvent.defaultPrevented
              , U = x && he === k
              , q = P.isTrusted || P.isTrusted == null && x && N;
            if ((N || A && c.vars.suppressClickOnDrag !== !1) && P.stopImmediatePropagation && P.stopImmediatePropagation(),
            x && !(c.pointerEvent && c.pointerEvent.defaultPrevented) && (!N || q && !U)) {
                q && N && (he = k),
                Ne = k;
                return
            }
            (c.isPressed || A || x) && (!q || !P.detail || !x || z) && ir(P),
            !x && !A && !Ie && (P && P.target && (c.pointerEvent = P),
            it(c, "click", "onClick"))
        }, rr = function(P) {
            return L ? {
                x: P.x * L.a + P.y * L.c + L.e,
                y: P.x * L.b + P.y * L.d + L.f
            } : {
                x: P.x,
                y: P.y
            }
        };
        return qt = e.get(t),
        qt && qt.kill(),
        i.startDrag = function(W, P) {
            var I, x, A, N;
            Ve(W || c.pointerEvent, !0),
            P && !c.hitTest(W || c.pointerEvent) && (I = en(W || c.pointerEvent),
            x = en(t),
            A = rr({
                x: I.left + I.width / 2,
                y: I.top + I.height / 2
            }),
            N = rr({
                x: x.left + x.width / 2,
                y: x.top + x.height / 2
            }),
            F -= A.x - N.x,
            Y -= A.y - N.y),
            c.isDragging || (c.isDragging = Ie = !0,
            it(c, "dragstart", "onDragStart"))
        }
        ,
        i.drag = He,
        i.endDrag = function(W) {
            return Le(W || c.pointerEvent, !0)
        }
        ,
        i.timeSinceDrag = function() {
            return c.isDragging ? 0 : (ei() - _) / 1e3
        }
        ,
        i.timeSinceClick = function() {
            return (ei() - k) / 1e3
        }
        ,
        i.hitTest = function(W, P) {
            return e.hitTest(c.target, W, P)
        }
        ,
        i.getDirection = function(W, P) {
            var I = W === "velocity" && vr ? W : ao(W) && !a ? "element" : "start", x, A, N, z, U, q;
            return I === "element" && (U = en(c.target),
            q = en(W)),
            x = I === "start" ? c.x - R : I === "velocity" ? vr.getVelocity(t, l) : U.left + U.width / 2 - (q.left + q.width / 2),
            a ? x < 0 ? "counter-clockwise" : "clockwise" : (P = P || 2,
            A = I === "start" ? c.y - V : I === "velocity" ? vr.getVelocity(t, u) : U.top + U.height / 2 - (q.top + q.height / 2),
            N = Math.abs(x / A),
            z = N < 1 / P ? "" : x < 0 ? "left" : "right",
            N < P && (z !== "" && (z += "-"),
            z += A < 0 ? "up" : "down"),
            z)
        }
        ,
        i.applyBounds = function(W, P) {
            var I, x, A, N, z, U;
            if (W && r.bounds !== W)
                return r.bounds = W,
                c.update(!0, P);
            if (Xe(!0),
            We(),
            H && !te()) {
                if (I = c.x,
                x = c.y,
                I > G ? I = G : I < ee && (I = ee),
                x > re ? x = re : x < le && (x = le),
                (c.x !== I || c.y !== x) && (A = !0,
                c.x = c.endX = I,
                a ? c.endRotation = I : c.y = c.endY = x,
                _e = !0,
                ce(!0),
                c.autoScroll && !c.isDragging))
                    for (aa(t.parentNode),
                    N = t,
                    Br.scrollTop = ze.pageYOffset != null ? ze.pageYOffset : $.documentElement.scrollTop != null ? $.documentElement.scrollTop : $.body.scrollTop,
                    Br.scrollLeft = ze.pageXOffset != null ? ze.pageXOffset : $.documentElement.scrollLeft != null ? $.documentElement.scrollLeft : $.body.scrollLeft; N && !U; )
                        U = Fn(N.parentNode),
                        z = U ? Br : N.parentNode,
                        h && z.scrollTop > z._gsMaxScrollY && (z.scrollTop = z._gsMaxScrollY),
                        f && z.scrollLeft > z._gsMaxScrollX && (z.scrollLeft = z._gsMaxScrollX),
                        N = z;
                c.isThrowing && (A || c.endX > G || c.endX < ee || c.endY > re || c.endY < le) && dt(r.inertia || r.throwProps, A)
            }
            return c
        }
        ,
        i.update = function(W, P, I) {
            if (P && c.isPressed) {
                var x = Kt(t)
                  , A = Ce.apply({
                    x: c.x - R,
                    y: c.y - V
                })
                  , N = Kt(t.parentNode, !0);
                N.apply({
                    x: x.e - A.x,
                    y: x.f - A.y
                }, A),
                c.x -= A.x - N.e,
                c.y -= A.y - N.f,
                ce(!0),
                wt()
            }
            var z = c.x
              , U = c.y;
            return Ht(!P),
            W ? c.applyBounds() : (_e && I && ce(!0),
            Xe(!0)),
            P && ($e(c.pointerX, c.pointerY),
            _e && ce(!0)),
            c.isPressed && !P && (f && Math.abs(z - c.x) > .01 || h && Math.abs(U - c.y) > .01 && !a) && wt(),
            c.autoScroll && (aa(t.parentNode, c.isDragging),
            v = c.isDragging,
            ce(!0),
            Eu(t, bt),
            Mu(t, bt)),
            c
        }
        ,
        i.enable = function(W) {
            var P = {
                lazy: !0
            }, I, x, A;
            if (r.cursor !== !1 && (P.cursor = r.cursor || Kn),
            ke.utils.checkPrefix("touchCallout") && (P.touchCallout = "none"),
            W !== "soft") {
                for (Tu(p, f === h ? "none" : r.allowNativeTouchScrolling && t.scrollHeight === t.clientHeight == (t.scrollWidth === t.clientHeight) || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"),
                x = p.length; --x > -1; )
                    A = p[x],
                    ls || ut(A, "mousedown", Ve),
                    ut(A, "touchstart", Ve),
                    ut(A, "click", mr, !0),
                    ke.set(A, P),
                    A.getBBox && A.ownerSVGElement && f !== h && ke.set(A.ownerSVGElement, {
                        touchAction: r.allowNativeTouchScrolling || r.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
                    }),
                    r.allowContextMenu || ut(A, "contextmenu", st);
                Yo(p, !1)
            }
            return Mu(t, bt),
            M = !0,
            vr && W !== "soft" && vr.track(E || t, s ? "x,y" : a ? "rotation" : "top,left"),
            t._gsDragID = I = "d" + Gp++,
            xn[I] = c,
            E && (E.enable(),
            E.element._gsDragID = I),
            (r.bounds || a) && wt(),
            r.bounds && c.applyBounds(),
            c
        }
        ,
        i.disable = function(W) {
            for (var P = c.isDragging, I = p.length, x; --I > -1; )
                la(p[I], "cursor", null);
            if (W !== "soft") {
                for (Tu(p, null),
                I = p.length; --I > -1; )
                    x = p[I],
                    la(x, "touchCallout", null),
                    at(x, "mousedown", Ve),
                    at(x, "touchstart", Ve),
                    at(x, "click", mr),
                    at(x, "contextmenu", st);
                Yo(p, !0),
                X && (at(X, "touchcancel", Le),
                at(X, "touchend", Le),
                at(X, "touchmove", He)),
                at($, "mouseup", Le),
                at($, "mousemove", He)
            }
            return Eu(t, bt),
            M = !1,
            vr && W !== "soft" && vr.untrack(E || t, s ? "x,y" : a ? "rotation" : "top,left"),
            E && E.disable(),
            ku(ce),
            c.isDragging = c.isPressed = Ye = !1,
            P && it(c, "dragend", "onDragEnd"),
            c
        }
        ,
        i.enabled = function(W, P) {
            return arguments.length ? W ? c.enable(P) : c.disable(P) : M
        }
        ,
        i.kill = function() {
            return c.isThrowing = !1,
            c.tween && c.tween.kill(),
            c.disable(),
            ke.set(p, {
                clearProps: "userSelect"
            }),
            delete xn[t._gsDragID],
            c
        }
        ,
        ~n.indexOf("scroll") && (E = i.scrollProxy = new rg(t,jp({
            onKill: function() {
                c.isPressed && Le(null)
            }
        }, r)),
        t.style.overflowY = h && !Ha ? "auto" : "hidden",
        t.style.overflowX = f && !Ha ? "auto" : "hidden",
        t = E.content),
        a ? g.rotation = 1 : (f && (g[l] = 1),
        h && (g[u] = 1)),
        S.force3D = "force3D"in r ? r.force3D : !0,
        i.enable(),
        i
    }
    return e.register = function(r) {
        ke = r,
        ca()
    }
    ,
    e.create = function(r, i) {
        return qa || ca(!0),
        si(r).map(function(n) {
            return new e(n,i)
        })
    }
    ,
    e.get = function(r) {
        return xn[(si(r)[0] || {})._gsDragID]
    }
    ,
    e.timeSinceDrag = function() {
        return (ei() - xu) / 1e3
    }
    ,
    e.hitTest = function(r, i, n) {
        if (r === i)
            return !1;
        var s = en(r), a = en(i), l = s.top, u = s.left, f = s.right, h = s.bottom, d = s.width, c = s.height, p = a.left > f || a.right < u || a.top > h || a.bottom < l, g, _, v;
        return p || !n ? !p : (v = (n + "").indexOf("%") !== -1,
        n = parseFloat(n) || 0,
        g = {
            left: Math.max(u, a.left),
            top: Math.max(l, a.top)
        },
        g.width = Math.min(f, a.right) - g.left,
        g.height = Math.min(h, a.bottom) - g.top,
        g.width < 0 || g.height < 0 ? !1 : v ? (n *= .01,
        _ = g.width * g.height,
        _ >= d * c * n || _ >= a.width * a.height * n) : g.width > n && g.height > n)
    }
    ,
    e
}(ig);
Kp(Hi.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
Hi.zIndex = 1e3;
Hi.version = "3.11.3";
If() && ke.registerPlugin(Hi);
/*!
 * MotionPathPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ng = "x,translateX,left,marginLeft,xPercent".split(","), og = "y,translateY,top,marginTop,yPercent".split(","), sg = Math.PI / 180, lr, Yf, on, ja, fa, Du, ag = function() {
    return lr || typeof window < "u" && (lr = window.gsap) && lr.registerPlugin && lr
}, Yn = function(e, t, r, i) {
    for (var n = t.length, s = i === 2 ? 0 : i, a = 0; a < n; a++)
        e[s] = parseFloat(t[a][r]),
        i === 2 && (e[s + 1] = 0),
        s += 2;
    return e
}, hn = function(e, t, r) {
    return parseFloat(e._gsap.get(e, t, r || "px")) || 0
}, Xf = function(e) {
    var t = e[0], r = e[1], i;
    for (i = 2; i < e.length; i += 2)
        t = e[i] += t,
        r = e[i + 1] += r
}, Au = function(e, t, r, i, n, s, a, l, u) {
    if (a.type === "cubic")
        t = [t];
    else {
        a.fromCurrent !== !1 && t.unshift(hn(r, i, l), n ? hn(r, n, u) : 0),
        a.relative && Xf(t);
        var f = n ? Ya : Ep;
        t = [f(t, a.curviness)]
    }
    return t = s(Vf(t, r, a)),
    Ls(e, r, i, t, "x", l),
    n && Ls(e, r, n, t, "y", u),
    wn(t, a.resolution || (a.curviness === 0 ? 20 : 12))
}, lg = function(e) {
    return e
}, ug = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, Lu = function(e, t, r) {
    var i = Kt(e), n = 0, s = 0, a;
    return (e.tagName + "").toLowerCase() === "svg" ? (a = e.viewBox.baseVal,
    a.width || (a = {
        width: +e.getAttribute("width"),
        height: +e.getAttribute("height")
    })) : a = t && e.getBBox && e.getBBox(),
    t && t !== "auto" && (n = t.push ? t[0] * (a ? a.width : e.offsetWidth || 0) : t.x,
    s = t.push ? t[1] * (a ? a.height : e.offsetHeight || 0) : t.y),
    r.apply(n || s ? i.apply({
        x: n,
        y: s
    }) : {
        x: i.e,
        y: i.f
    })
}, Ua = function(e, t, r, i) {
    var n = Kt(e.parentNode, !0, !0), s = n.clone().multiply(Kt(t)), a = Lu(e, r, n), l = Lu(t, i, n), u = l.x, f = l.y, h;
    return s.e = s.f = 0,
    i === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (h = t.getAttribute("d").match(ug) || [],
    h = s.apply({
        x: +h[0],
        y: +h[1]
    }),
    u += h.x,
    f += h.y),
    h && (h = s.apply(t.getBBox()),
    u -= h.x,
    f -= h.y),
    s.e = u - a.x,
    s.f = f - a.y,
    s
}, Vf = function(e, t, r) {
    var i = r.align, n = r.matrix, s = r.offsetX, a = r.offsetY, l = r.alignOrigin, u = e[0][0], f = e[0][1], h = hn(t, "x"), d = hn(t, "y"), c, p, g;
    return !e || !e.length ? ss("M0,0L0,0") : (i && (i === "self" || (c = ja(i)[0] || t) === t ? fn(e, 1, 0, 0, 1, h - u, d - f) : (l && l[2] !== !1 ? lr.set(t, {
        transformOrigin: l[0] * 100 + "% " + l[1] * 100 + "%"
    }) : l = [hn(t, "xPercent") / -100, hn(t, "yPercent") / -100],
    p = Ua(t, c, l, "auto"),
    g = p.apply({
        x: u,
        y: f
    }),
    fn(e, p.a, p.b, p.c, p.d, h + p.e - (g.x - p.e), d + p.f - (g.y - p.f)))),
    n ? fn(e, n.a, n.b, n.c, n.d, n.e, n.f) : (s || a) && fn(e, 1, 0, 0, 1, s || 0, a || 0),
    e)
}, Ls = function(e, t, r, i, n, s) {
    var a = t._gsap
      , l = a.harness
      , u = l && l.aliases && l.aliases[r]
      , f = u && u.indexOf(",") < 0 ? u : r
      , h = e._pt = new Yf(e._pt,t,f,0,0,lg,0,a.set(t, f, e));
    h.u = on(a.get(t, f, s)) || 0,
    h.path = i,
    h.pp = n,
    e._props.push(f)
}, cg = function(e, t) {
    return function(r) {
        return e || t !== 1 ? Mf(r, e, t) : r
    }
}, Ka = {
    version: "3.11.3",
    name: "motionPath",
    register: function(e, t, r) {
        lr = e,
        on = lr.utils.getUnit,
        ja = lr.utils.toArray,
        fa = lr.core.getStyleSaver,
        Du = lr.core.reverting || function() {}
        ,
        Yf = r
    },
    init: function(e, t, r) {
        if (!lr)
            return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),
            !1;
        (!(typeof t == "object" && !t.style) || !t.path) && (t = {
            path: t
        });
        var i = [], n = t, s = n.path, a = n.autoRotate, l = n.unitX, u = n.unitY, f = n.x, h = n.y, d = s[0], c = cg(t.start, "end"in t ? t.end : 1), p, g;
        if (this.rawPaths = i,
        this.target = e,
        this.tween = r,
        this.styles = fa && fa(e, "transform"),
        (this.rotate = a || a === 0) && (this.rOffset = parseFloat(a) || 0,
        this.radians = !!t.useRadians,
        this.rProp = t.rotation || "rotation",
        this.rSet = e._gsap.set(e, this.rProp, this),
        this.ru = on(e._gsap.get(e, this.rProp)) || 0),
        Array.isArray(s) && !("closed"in s) && typeof d != "number") {
            for (g in d)
                !f && ~ng.indexOf(g) ? f = g : !h && ~og.indexOf(g) && (h = g);
            f && h ? i.push(Au(this, Yn(Yn([], s, f, 0), s, h, 1), e, f, h, c, t, l || on(s[0][f]), u || on(s[0][h]))) : f = h = 0;
            for (g in d)
                g !== f && g !== h && i.push(Au(this, Yn([], s, g, 2), e, g, 0, c, t, on(s[0][g])))
        } else
            p = c(Vf(ss(t.path), e, t)),
            wn(p, t.resolution),
            i.push(p),
            Ls(this, e, t.x || "x", p, "x", t.unitX || "px"),
            Ls(this, e, t.y || "y", p, "y", t.unitY || "px")
    },
    render: function(e, t) {
        var r = t.rawPaths
          , i = r.length
          , n = t._pt;
        if (t.tween._time || !Du()) {
            for (e > 1 ? e = 1 : e < 0 && (e = 0); i--; )
                yu(r[i], e, !i && t.rotate, r[i]);
            for (; n; )
                n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, e),
                n = n._next;
            t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? sg : 1) + t.rOffset + t.ru, t, e)
        } else
            t.styles.revert()
    },
    getLength: function(e) {
        return wn(ss(e)).totalLength
    },
    sliceRawPath: Mf,
    getRawPath: ss,
    pointsToSegment: Ya,
    stringToRawPath: Mo,
    rawPathToString: Rl,
    transformRawPath: fn,
    getGlobalMatrix: Kt,
    getPositionOnPath: yu,
    cacheRawPathMeasurements: wn,
    convertToPath: function(e, t) {
        return ja(e).map(function(r) {
            return kp(r, t !== !1)
        })
    },
    convertCoordinates: function(e, t, r) {
        var i = Kt(t, !0, !0).multiply(Kt(e));
        return r ? i.apply(r) : i
    },
    getAlignMatrix: Ua,
    getRelativePosition: function(e, t, r, i) {
        var n = Ua(e, t, r, i);
        return {
            x: n.e,
            y: n.f
        }
    },
    arrayToRawPath: function(e, t) {
        t = t || {};
        var r = Yn(Yn([], e, t.x || "x", 0), e, t.y || "y", 1);
        return t.relative && Xf(r),
        [t.type === "cubic" ? r : Ya(r, t.curviness)]
    }
};
ag() && lr.registerPlugin(Ka);
function Ru(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(o, r.key, r)
    }
}
function fg(o, e, t) {
    return e && Ru(o.prototype, e),
    t && Ru(o, t),
    o
}
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var St, Qa, Zt, ai, li, kn, qf, Mi, uo, Hf, jr, wr, Gf = function() {
    return St || typeof window < "u" && (St = window.gsap) && St.registerPlugin && St
}, Wf = 1, dn = [], Te = [], Nr = [], co = Date.now, Za = function(e, t) {
    return t
}, hg = function() {
    var e = uo.core
      , t = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, Te),
    i.push.apply(i, Nr),
    Te = r,
    Nr = i,
    Za = function(s, a) {
        return t[s](a)
    }
}, hi = function(e, t) {
    return ~Nr.indexOf(e) && Nr[Nr.indexOf(e) + 1][t]
}, fo = function(e) {
    return !!~Hf.indexOf(e)
}, At = function(e, t, r, i, n) {
    return e.addEventListener(t, r, {
        passive: !i,
        capture: !!n
    })
}, Pt = function(e, t, r, i) {
    return e.removeEventListener(t, r, !!i)
}, Xo = "scrollLeft", Vo = "scrollTop", Ja = function() {
    return jr && jr.isPressed || Te.cache++
}, Rs = function(e, t) {
    var r = function i(n) {
        if (n || n === 0) {
            Wf && (Zt.history.scrollRestoration = "manual");
            var s = jr && jr.isPressed;
            n = i.v = Math.round(n) || (jr && jr.iOS ? 1 : 0),
            e(n),
            i.cacheID = Te.cache,
            s && Za("ss", n)
        } else
            (t || Te.cache !== i.cacheID || Za("ref")) && (i.cacheID = Te.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, Ct = {
    s: Xo,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Rs(function(o) {
        return arguments.length ? Zt.scrollTo(o, ht.sc()) : Zt.pageXOffset || ai[Xo] || li[Xo] || kn[Xo] || 0
    })
}, ht = {
    s: Vo,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Ct,
    sc: Rs(function(o) {
        return arguments.length ? Zt.scrollTo(Ct.sc(), o) : Zt.pageYOffset || ai[Vo] || li[Vo] || kn[Vo] || 0
    })
}, Ft = function(e) {
    return St.utils.toArray(e)[0] || (typeof e == "string" && St.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, mi = function(e, t) {
    var r = t.s
      , i = t.sc;
    fo(e) && (e = ai.scrollingElement || li);
    var n = Te.indexOf(e)
      , s = i === ht.sc ? 1 : 2;
    !~n && (n = Te.push(e) - 1),
    Te[n + s] || e.addEventListener("scroll", Ja);
    var a = Te[n + s]
      , l = a || (Te[n + s] = Rs(hi(e, r), !0) || (fo(e) ? i : Rs(function(u) {
        return arguments.length ? e[r] = u : e[r]
    })));
    return l.target = e,
    a || (l.smooth = St.getProperty(e, "scrollBehavior") === "smooth"),
    l
}, el = function(e, t, r) {
    var i = e
      , n = e
      , s = co()
      , a = s
      , l = t || 50
      , u = Math.max(500, l * 3)
      , f = function(p, g) {
        var _ = co();
        g || _ - s > l ? (n = i,
        i = p,
        a = s,
        s = _) : r ? i += p : i = n + (p - n) / (_ - a) * (s - a)
    }
      , h = function() {
        n = i = r ? 0 : i,
        a = s = 0
    }
      , d = function(p) {
        var g = a
          , _ = n
          , v = co();
        return (p || p === 0) && p !== i && f(p),
        s === a || v - a > u ? 0 : (i + (r ? _ : -_)) / ((r ? v : s) - g) * 1e3
    };
    return {
        update: f,
        reset: h,
        getVelocity: d
    }
}, Xn = function(e, t) {
    return t && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Fu = function(e) {
    var t = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r
}, jf = function() {
    uo = St.core.globals().ScrollTrigger,
    uo && uo.core && hg()
}, Uf = function(e) {
    return St = e || Gf(),
    St && typeof document < "u" && document.body && (Zt = window,
    ai = document,
    li = ai.documentElement,
    kn = ai.body,
    Hf = [Zt, ai, li, kn],
    St.utils.clamp,
    Mi = "onpointerenter"in kn ? "pointer" : "mouse",
    qf = tt.isTouch = Zt.matchMedia && Zt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Zt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    wr = tt.eventTypes = ("ontouchstart"in li ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in li ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Wf = 0
    }, 500),
    jf(),
    Qa = 1),
    Qa
};
Ct.op = ht;
Te.cache = 0;
var tt = function() {
    function o(t) {
        this.init(t)
    }
    var e = o.prototype;
    return e.init = function(r) {
        Qa || Uf(St) || console.warn("Please gsap.registerPlugin(Observer)"),
        uo || jf();
        var i = r.tolerance
          , n = r.dragMinimum
          , s = r.type
          , a = r.target
          , l = r.lineHeight
          , u = r.debounce
          , f = r.preventDefault
          , h = r.onStop
          , d = r.onStopDelay
          , c = r.ignore
          , p = r.wheelSpeed
          , g = r.event
          , _ = r.onDragStart
          , v = r.onDragEnd
          , y = r.onDrag
          , m = r.onPress
          , b = r.onRelease
          , w = r.onRight
          , T = r.onLeft
          , k = r.onUp
          , S = r.onDown
          , C = r.onChangeX
          , B = r.onChangeY
          , $ = r.onChange
          , M = r.onToggleX
          , E = r.onToggleY
          , F = r.onHover
          , Y = r.onHoverEnd
          , R = r.onMove
          , V = r.ignoreCheck
          , H = r.isNormalizer
          , ne = r.onGestureStart
          , O = r.onGestureEnd
          , G = r.onWheel
          , ee = r.onEnable
          , re = r.onDisable
          , le = r.onClick
          , De = r.scrollSpeed
          , fe = r.capture
          , Ae = r.allowClicks
          , _e = r.lockAxis
          , qt = r.onLockAxis;
        this.target = a = Ft(a) || li,
        this.vars = r,
        c && (c = St.utils.toArray(c)),
        i = i || 1e-9,
        n = n || 0,
        p = p || 1,
        De = De || 1,
        s = s || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(Zt.getComputedStyle(kn).lineHeight) || 22);
        var de, Ge, ue, Ye, X, L, j, D = this, Q = 0, ie = 0, Ne = mi(a, Ct), he = mi(a, ht), oe = Ne(), Ce = he(), Ie = ~s.indexOf("touch") && !~s.indexOf("pointer") && wr[0] === "pointerdown", st = fo(a), ce = a.ownerDocument || ai, Xe = [0, 0, 0], qe = [0, 0, 0], Pr = 0, We = function() {
            return Pr = co()
        }, _t = function(x, A) {
            return (D.event = x) && c && ~c.indexOf(x.target) || A && Ie && x.pointerType !== "touch" || V && V(x, A)
        }, _r = function() {
            D._vx.reset(),
            D._vy.reset(),
            Ge.pause(),
            h && h(D)
        }, dt = function() {
            var x = D.deltaX = Fu(Xe)
              , A = D.deltaY = Fu(qe)
              , N = Math.abs(x) >= i
              , z = Math.abs(A) >= i;
            $ && (N || z) && $(D, x, A, Xe, qe),
            N && (w && D.deltaX > 0 && w(D),
            T && D.deltaX < 0 && T(D),
            C && C(D),
            M && D.deltaX < 0 != Q < 0 && M(D),
            Q = D.deltaX,
            Xe[0] = Xe[1] = Xe[2] = 0),
            z && (S && D.deltaY > 0 && S(D),
            k && D.deltaY < 0 && k(D),
            B && B(D),
            E && D.deltaY < 0 != ie < 0 && E(D),
            ie = D.deltaY,
            qe[0] = qe[1] = qe[2] = 0),
            (Ye || ue) && (R && R(D),
            ue && (y(D),
            ue = !1),
            Ye = !1),
            L && !(L = !1) && qt && qt(D),
            X && (G(D),
            X = !1),
            de = 0
        }, Ht = function(x, A, N) {
            Xe[N] += x,
            qe[N] += A,
            D._vx.update(x),
            D._vy.update(A),
            u ? de || (de = requestAnimationFrame(dt)) : dt()
        }, wt = function(x, A) {
            _e && !j && (D.axis = j = Math.abs(x) > Math.abs(A) ? "x" : "y",
            L = !0),
            j !== "y" && (Xe[2] += x,
            D._vx.update(x, !0)),
            j !== "x" && (qe[2] += A,
            D._vy.update(A, !0)),
            u ? de || (de = requestAnimationFrame(dt)) : dt()
        }, te = function(x) {
            if (!_t(x, 1)) {
                x = Xn(x, f);
                var A = x.clientX
                  , N = x.clientY
                  , z = A - D.x
                  , U = N - D.y
                  , q = D.isDragging;
                D.x = A,
                D.y = N,
                (q || Math.abs(D.startX - A) >= n || Math.abs(D.startY - N) >= n) && (y && (ue = !0),
                q || (D.isDragging = !0),
                wt(z, U),
                q || _ && _(D))
            }
        }, je = D.onPress = function(I) {
            _t(I, 1) || (D.axis = j = null,
            Ge.pause(),
            D.isPressed = !0,
            I = Xn(I),
            Q = ie = 0,
            D.startX = D.x = I.clientX,
            D.startY = D.y = I.clientY,
            D._vx.reset(),
            D._vy.reset(),
            At(H ? a : ce, wr[1], te, f, !0),
            D.deltaX = D.deltaY = 0,
            m && m(D))
        }
        , Ve = function(x) {
            if (!_t(x, 1)) {
                Pt(H ? a : ce, wr[1], te, !0);
                var A = D.isDragging && (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3)
                  , N = Xn(x);
                A || (D._vx.reset(),
                D._vy.reset(),
                f && Ae && St.delayedCall(.08, function() {
                    if (co() - Pr > 300 && !x.defaultPrevented) {
                        if (x.target.click)
                            x.target.click();
                        else if (ce.createEvent) {
                            var z = ce.createEvent("MouseEvents");
                            z.initMouseEvent("click", !0, !0, Zt, 1, N.screenX, N.screenY, N.clientX, N.clientY, !1, !1, !1, !1, 0, null),
                            x.target.dispatchEvent(z)
                        }
                    }
                })),
                D.isDragging = D.isGesturing = D.isPressed = !1,
                h && !H && Ge.restart(!0),
                v && A && v(D),
                b && b(D, A)
            }
        }, He = function(x) {
            return x.touches && x.touches.length > 1 && (D.isGesturing = !0) && ne(x, D.isDragging)
        }, $e = function() {
            return (D.isGesturing = !1) || O(D)
        }, Le = function(x) {
            if (!_t(x)) {
                var A = Ne()
                  , N = he();
                Ht((A - oe) * De, (N - Ce) * De, 1),
                oe = A,
                Ce = N,
                h && Ge.restart(!0)
            }
        }, bt = function(x) {
            if (!_t(x)) {
                x = Xn(x, f),
                G && (X = !0);
                var A = (x.deltaMode === 1 ? l : x.deltaMode === 2 ? Zt.innerHeight : 1) * p;
                Ht(x.deltaX * A, x.deltaY * A, 0),
                h && !H && Ge.restart(!0)
            }
        }, mr = function(x) {
            if (!_t(x)) {
                var A = x.clientX
                  , N = x.clientY
                  , z = A - D.x
                  , U = N - D.y;
                D.x = A,
                D.y = N,
                Ye = !0,
                (z || U) && wt(z, U)
            }
        }, rr = function(x) {
            D.event = x,
            F(D)
        }, W = function(x) {
            D.event = x,
            Y(D)
        }, P = function(x) {
            return _t(x) || Xn(x, f) && le(D)
        };
        Ge = D._dc = St.delayedCall(d || .25, _r).pause(),
        D.deltaX = D.deltaY = 0,
        D._vx = el(0, 50, !0),
        D._vy = el(0, 50, !0),
        D.scrollX = Ne,
        D.scrollY = he,
        D.isDragging = D.isGesturing = D.isPressed = !1,
        D.enable = function(I) {
            return D.isEnabled || (At(st ? ce : a, "scroll", Ja),
            s.indexOf("scroll") >= 0 && At(st ? ce : a, "scroll", Le, f, fe),
            s.indexOf("wheel") >= 0 && At(a, "wheel", bt, f, fe),
            (s.indexOf("touch") >= 0 && qf || s.indexOf("pointer") >= 0) && (At(a, wr[0], je, f, fe),
            At(ce, wr[2], Ve),
            At(ce, wr[3], Ve),
            Ae && At(a, "click", We, !1, !0),
            le && At(a, "click", P),
            ne && At(ce, "gesturestart", He),
            O && At(ce, "gestureend", $e),
            F && At(a, Mi + "enter", rr),
            Y && At(a, Mi + "leave", W),
            R && At(a, Mi + "move", mr)),
            D.isEnabled = !0,
            I && I.type && je(I),
            ee && ee(D)),
            D
        }
        ,
        D.disable = function() {
            D.isEnabled && (dn.filter(function(I) {
                return I !== D && fo(I.target)
            }).length || Pt(st ? ce : a, "scroll", Ja),
            D.isPressed && (D._vx.reset(),
            D._vy.reset(),
            Pt(H ? a : ce, wr[1], te, !0)),
            Pt(st ? ce : a, "scroll", Le, fe),
            Pt(a, "wheel", bt, fe),
            Pt(a, wr[0], je, fe),
            Pt(ce, wr[2], Ve),
            Pt(ce, wr[3], Ve),
            Pt(a, "click", We, !0),
            Pt(a, "click", P),
            Pt(ce, "gesturestart", He),
            Pt(ce, "gestureend", $e),
            Pt(a, Mi + "enter", rr),
            Pt(a, Mi + "leave", W),
            Pt(a, Mi + "move", mr),
            D.isEnabled = D.isPressed = D.isDragging = !1,
            re && re(D))
        }
        ,
        D.kill = function() {
            D.disable();
            var I = dn.indexOf(D);
            I >= 0 && dn.splice(I, 1),
            jr === D && (jr = 0)
        }
        ,
        dn.push(D),
        H && fo(a) && (jr = D),
        D.enable(g)
    }
    ,
    fg(o, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    o
}();
tt.version = "3.11.3";
tt.create = function(o) {
    return new tt(o)
}
;
tt.register = Uf;
tt.getAll = function() {
    return dn.slice()
}
;
tt.getById = function(o) {
    return dn.filter(function(e) {
        return e.vars.id === o
    })[0]
}
;
Gf() && St.registerPlugin(tt);
/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Z, sn, xe, Ue, Ar, Je, Kf, Fs, Ns, pn, cs, qo, xt, Gs, tl, Et, Nu, Iu, an, Qf, ha, Zf, Gt, Jf, eh, th, ti, rl, $l, da, Ho = 1, Ot = Date.now, pa = Ot(), pr = 0, Go = 0, $u = function() {
    return Gs = 1
}, Bu = function() {
    return Gs = 0
}, Er = function(e) {
    return e
}, Qn = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, rh = function() {
    return typeof window < "u"
}, ih = function() {
    return Z || rh() && (Z = window.gsap) && Z.registerPlugin && Z
}, Gi = function(e) {
    return !!~Kf.indexOf(e)
}, nh = function(e) {
    return hi(e, "getBoundingClientRect") || (Gi(e) ? function() {
        return _s.width = xe.innerWidth,
        _s.height = xe.innerHeight,
        _s
    }
    : function() {
        return qr(e)
    }
    )
}, dg = function(e, t, r) {
    var i = r.d
      , n = r.d2
      , s = r.a;
    return (s = hi(e, "getBoundingClientRect")) ? function() {
        return s()[i]
    }
    : function() {
        return (t ? xe["inner" + n] : e["client" + n]) || 0
    }
}, pg = function(e, t) {
    return !t || ~Nr.indexOf(e) ? nh(e) : function() {
        return _s
    }
}, ui = function(e, t) {
    var r = t.s
      , i = t.d2
      , n = t.d
      , s = t.a;
    return (r = "scroll" + i) && (s = hi(e, r)) ? s() - nh(e)()[n] : Gi(e) ? (Ar[r] || Je[r]) - (xe["inner" + i] || Ar["client" + i] || Je["client" + i]) : e[r] - e["offset" + i]
}, Wo = function(e, t) {
    for (var r = 0; r < an.length; r += 3)
        (!t || ~t.indexOf(an[r + 1])) && e(an[r], an[r + 1], an[r + 2])
}, br = function(e) {
    return typeof e == "string"
}, Dt = function(e) {
    return typeof e == "function"
}, Zn = function(e) {
    return typeof e == "number"
}, fs = function(e) {
    return typeof e == "object"
}, Vn = function(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause()
}, ga = function(e, t) {
    if (e.enabled) {
        var r = t(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, tn = Math.abs, oh = "left", sh = "top", Bl = "right", zl = "bottom", Bi = "width", zi = "height", ho = "Right", po = "Left", go = "Top", _o = "Bottom", nt = "padding", ur = "margin", Nn = "Width", Yl = "Height", mt = "px", Lr = function(e) {
    return xe.getComputedStyle(e)
}, gg = function(e) {
    var t = Lr(e).position;
    e.style.position = t === "absolute" || t === "fixed" ? t : "relative"
}, zu = function(e, t) {
    for (var r in t)
        r in e || (e[r] = t[r]);
    return e
}, qr = function(e, t) {
    var r = t && Lr(e)[tl] !== "matrix(1, 0, 0, 1, 0, 0)" && Z.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, il = function(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0
}, ah = function(e) {
    var t = [], r = e.labels, i = e.duration(), n;
    for (n in r)
        t.push(r[n] / i);
    return t
}, _g = function(e) {
    return function(t) {
        return Z.utils.snap(ah(e), t)
    }
}, Xl = function(e) {
    var t = Z.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, n) {
        return i - n
    });
    return r ? function(i, n, s) {
        s === void 0 && (s = .001);
        var a;
        if (!n)
            return t(i);
        if (n > 0) {
            for (i -= s,
            a = 0; a < r.length; a++)
                if (r[a] >= i)
                    return r[a];
            return r[a - 1]
        } else
            for (a = r.length,
            i += s; a--; )
                if (r[a] <= i)
                    return r[a];
        return r[0]
    }
    : function(i, n, s) {
        s === void 0 && (s = .001);
        var a = t(i);
        return !n || Math.abs(a - i) < s || a - i < 0 == n < 0 ? a : t(n < 0 ? i - e : i + e)
    }
}, mg = function(e) {
    return function(t, r) {
        return Xl(ah(e))(t, r.direction)
    }
}, jo = function(e, t, r, i) {
    return r.split(",").forEach(function(n) {
        return e(t, n, i)
    })
}, yt = function(e, t, r, i, n) {
    return e.addEventListener(t, r, {
        passive: !i,
        capture: !!n
    })
}, pt = function(e, t, r, i) {
    return e.removeEventListener(t, r, !!i)
}, Uo = function(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r)
}, Yu = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Ko = {
    toggleActions: "play",
    anticipatePin: 0
}, Is = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, hs = function(e, t) {
    if (br(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= t / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in Is ? Is[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
    }
    return e
}, Qo = function(e, t, r, i, n, s, a, l) {
    var u = n.startColor
      , f = n.endColor
      , h = n.fontSize
      , d = n.indent
      , c = n.fontWeight
      , p = Ue.createElement("div")
      , g = Gi(r) || hi(r, "pinType") === "fixed"
      , _ = e.indexOf("scroller") !== -1
      , v = g ? Je : r
      , y = e.indexOf("start") !== -1
      , m = y ? u : f
      , b = "border-color:" + m + ";font-size:" + h + ";color:" + m + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return b += "position:" + ((_ || l) && g ? "fixed;" : "absolute;"),
    (_ || l || !g) && (b += (i === ht ? Bl : zl) + ":" + (s + parseFloat(d)) + "px;"),
    a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
    p._isStart = y,
    p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
    p.style.cssText = b,
    p.innerText = t || t === 0 ? e + "-" + t : e,
    v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
    p._offset = p["offset" + i.op.d2],
    ds(p, 0, i, y),
    p
}, ds = function(e, t, r, i) {
    var n = {
        display: "block"
    }
      , s = r[i ? "os2" : "p2"]
      , a = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    n[r.a + "Percent"] = i ? -100 : 0,
    n[r.a] = i ? "1px" : 0,
    n["border" + s + Nn] = 1,
    n["border" + a + Nn] = 0,
    n[r.p] = t + "px",
    Z.set(e, n)
}, ye = [], nl = {}, Co, Xu = function() {
    return Ot() - pr > 34 && (Co || (Co = requestAnimationFrame(Ui)))
}, rn = function() {
    (!Gt || !Gt.isPressed || Gt.startX > Je.clientWidth) && (Te.cache++,
    Gt ? Co || (Co = requestAnimationFrame(Ui)) : Ui(),
    pr || ji("scrollStart"),
    pr = Ot())
}, _a = function() {
    th = xe.innerWidth,
    eh = xe.innerHeight
}, Jn = function() {
    Te.cache++,
    !xt && !Zf && !Ue.fullscreenElement && !Ue.webkitFullscreenElement && (!Jf || th !== xe.innerWidth || Math.abs(xe.innerHeight - eh) > xe.innerHeight * .25) && Fs.restart(!0)
}, Wi = {}, yg = [], lh = function o() {
    return pt(ge, "scrollEnd", o) || Li(!0)
}, ji = function(e) {
    return Wi[e] && Wi[e].map(function(t) {
        return t()
    }) || yg
}, Wt = [], uh = function(e) {
    for (var t = 0; t < Wt.length; t += 5)
        (!e || Wt[t + 4] && Wt[t + 4].query === e) && (Wt[t].style.cssText = Wt[t + 1],
        Wt[t].getBBox && Wt[t].setAttribute("transform", Wt[t + 2] || ""),
        Wt[t + 3].uncache = 1)
}, Vl = function(e, t) {
    var r;
    for (Et = 0; Et < ye.length; Et++)
        r = ye[Et],
        r && (!t || r._ctx === t) && (e ? r.kill(1) : r.revert(!0, !0));
    t && uh(t),
    t || ji("revert")
}, ch = function(e, t) {
    Te.cache++,
    (t || !xr) && Te.forEach(function(r) {
        return Dt(r) && r.cacheID++ && (r.rec = 0)
    }),
    br(e) && (xe.history.scrollRestoration = $l = e)
}, xr, Yi = 0, Vu, vg = function() {
    if (Vu !== Yi) {
        var e = Vu = Yi;
        requestAnimationFrame(function() {
            return e === Yi && Li(!0)
        })
    }
}, Li = function(e, t) {
    if (pr && !e) {
        yt(ge, "scrollEnd", lh);
        return
    }
    xr = ge.isRefreshing = !0,
    Te.forEach(function(i) {
        return Dt(i) && i.cacheID++ && (i.rec = i())
    });
    var r = ji("refreshInit");
    Qf && ge.sort(),
    t || Vl(),
    Te.forEach(function(i) {
        Dt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    ye.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    ye.forEach(function(i, n) {
        if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , a = i.pin[s];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[s] - a),
            i.revert(!1, 1)
        }
    }),
    ye.forEach(function(i) {
        return i.vars.end === "max" && i.setPositions(i.start, Math.max(i.start + 1, ui(i.scroller, i._dir)))
    }),
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    Te.forEach(function(i) {
        Dt(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    ch($l, 1),
    Fs.pause(),
    Yi++,
    Ui(2),
    ye.forEach(function(i) {
        return Dt(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    xr = ge.isRefreshing = !1,
    ji("refresh")
}, qu = 0, ps = 1, Ci, Ui = function(e) {
    if (!xr || e === 2) {
        ge.isUpdating = !0,
        Ci && Ci.update(0);
        var t = ye.length
          , r = Ot()
          , i = r - pa >= 50
          , n = t && ye[0].scroll();
        if (ps = qu > n ? -1 : 1,
        qu = n,
        i && (pr && !Gs && r - pr > 200 && (pr = 0,
        ji("scrollEnd")),
        cs = pa,
        pa = r),
        ps < 0) {
            for (Et = t; Et-- > 0; )
                ye[Et] && ye[Et].update(0, i);
            ps = 1
        } else
            for (Et = 0; Et < t; Et++)
                ye[Et] && ye[Et].update(0, i);
        ge.isUpdating = !1
    }
    Co = 0
}, ol = [oh, sh, zl, Bl, ur + _o, ur + ho, ur + go, ur + po, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], gs = ol.concat([Bi, zi, "boxSizing", "max" + Nn, "max" + Yl, "position", ur, nt, nt + go, nt + ho, nt + _o, nt + po]), wg = function(e, t, r) {
    Pn(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        Pn(i.spacerState);
    else if (e._gsap.swappedIn) {
        var n = t.parentNode;
        n && (n.insertBefore(e, t),
        n.removeChild(t))
    }
    e._gsap.swappedIn = !1
}, ma = function(e, t, r, i) {
    if (!e._gsap.swappedIn) {
        for (var n = ol.length, s = t.style, a = e.style, l; n--; )
            l = ol[n],
            s[l] = r[l];
        s.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (s.display = "inline-block"),
        a[zl] = a[Bl] = "auto",
        s.flexBasis = r.flexBasis || "auto",
        s.overflow = "visible",
        s.boxSizing = "border-box",
        s[Bi] = il(e, Ct) + mt,
        s[zi] = il(e, ht) + mt,
        s[nt] = a[ur] = a[sh] = a[oh] = "0",
        Pn(i),
        a[Bi] = a["max" + Nn] = r[Bi],
        a[zi] = a["max" + Yl] = r[zi],
        a[nt] = r[nt],
        e.parentNode !== t && (e.parentNode.insertBefore(t, e),
        t.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, bg = /([A-Z])/g, Pn = function(e) {
    if (e) {
        var t = e.t.style, r = e.length, i = 0, n, s;
        for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            s = e[i + 1],
            n = e[i],
            s ? t[n] = s : t[n] && t.removeProperty(n.replace(bg, "-$1").toLowerCase())
    }
}, Zo = function(e) {
    for (var t = gs.length, r = e.style, i = [], n = 0; n < t; n++)
        i.push(gs[n], r[gs[n]]);
    return i.t = e,
    i
}, xg = function(e, t, r) {
    for (var i = [], n = e.length, s = r ? 8 : 0, a; s < n; s += 2)
        a = e[s],
        i.push(a, a in t ? t[a] : e[s + 1]);
    return i.t = e.t,
    i
}, _s = {
    left: 0,
    top: 0
}, Hu = function(e, t, r, i, n, s, a, l, u, f, h, d, c) {
    Dt(e) && (e = e(l)),
    br(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? hs("0" + e.substr(3), r) : 0));
    var p = c ? c.time() : 0, g, _, v;
    if (c && c.seek(0),
    Zn(e))
        a && ds(a, r, i, !0);
    else {
        Dt(t) && (t = t(l));
        var y = (e || "0").split(" "), m, b, w, T;
        v = Ft(t) || Je,
        m = qr(v) || {},
        (!m || !m.left && !m.top) && Lr(v).display === "none" && (T = v.style.display,
        v.style.display = "block",
        m = qr(v),
        T ? v.style.display = T : v.style.removeProperty("display")),
        b = hs(y[0], m[i.d]),
        w = hs(y[1] || "0", r),
        e = m[i.p] - u[i.p] - f + b + n - w,
        a && ds(a, w, i, r - w < 20 || a._isStart && w > 20),
        r -= r - w
    }
    if (s) {
        var k = e + r
          , S = s._isStart;
        g = "scroll" + i.d2,
        ds(s, k, i, S && k > 20 || !S && (h ? Math.max(Je[g], Ar[g]) : s.parentNode[g]) <= k + 1),
        h && (u = qr(a),
        h && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + mt))
    }
    return c && v && (g = qr(v),
    c.seek(d),
    _ = qr(v),
    c._caScrollDist = g[i.p] - _[i.p],
    e = e / c._caScrollDist * d),
    c && c.seek(p),
    c ? e : Math.round(e)
}, Tg = /(webkit|moz|length|cssText|inset)/i, Gu = function(e, t, r, i) {
    if (e.parentNode !== t) {
        var n = e.style, s, a;
        if (t === Je) {
            e._stOrig = n.cssText,
            a = Lr(e);
            for (s in a)
                !+s && !Tg.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
            n.top = r,
            n.left = i
        } else
            n.cssText = e._stOrig;
        Z.core.getCache(e).uncache = 1,
        t.appendChild(e)
    }
}, Wu = function(e, t) {
    var r = mi(e, t), i = "_scroll" + t.p2, n, s, a = function l(u, f, h, d, c) {
        var p = l.tween
          , g = f.onComplete
          , _ = {};
        return h = h || r(),
        c = d && c || 0,
        d = d || u - h,
        p && p.kill(),
        n = Math.round(h),
        f[i] = u,
        f.modifiers = _,
        _[i] = function(v) {
            return v = Math.round(r()),
            v !== n && v !== s && Math.abs(v - n) > 3 && Math.abs(v - s) > 3 ? (p.kill(),
            l.tween = 0) : v = h + d * p.ratio + c * p.ratio * p.ratio,
            s = n,
            n = Math.round(v)
        }
        ,
        f.onComplete = function() {
            l.tween = 0,
            g && g.call(p)
        }
        ,
        p = l.tween = Z.to(e, f),
        p
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return a.tween && a.tween.kill() && (a.tween = 0)
    }
    ,
    yt(e, "wheel", r.wheelHandler),
    a
}, ge = function() {
    function o(t, r) {
        sn || o.register(Z) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(t, r)
    }
    var e = o.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Go) {
            this.update = this.refresh = this.kill = Er;
            return
        }
        r = zu(br(r) || Zn(r) || r.nodeType ? {
            trigger: r
        } : r, Ko);
        var n = r, s = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, h = n.scrub, d = n.trigger, c = n.pin, p = n.pinSpacing, g = n.invalidateOnRefresh, _ = n.anticipatePin, v = n.onScrubComplete, y = n.onSnapComplete, m = n.once, b = n.snap, w = n.pinReparent, T = n.pinSpacer, k = n.containerAnimation, S = n.fastScrollEnd, C = n.preventOverlaps, B = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Ct : ht, $ = !h && h !== 0, M = Ft(r.scroller || xe), E = Z.core.getCache(M), F = Gi(M), Y = ("pinType"in r ? r.pinType : hi(M, "pinType") || F && "fixed") === "fixed", R = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], V = $ && r.toggleActions.split(" "), H = "markers"in r ? r.markers : Ko.markers, ne = F ? 0 : parseFloat(Lr(M)["border" + B.p2 + Nn]) || 0, O = this, G = r.onRefreshInit && function() {
            return r.onRefreshInit(O)
        }
        , ee = dg(M, F, B), re = pg(M, F), le = 0, De = 0, fe = mi(M, B), Ae, _e, qt, de, Ge, ue, Ye, X, L, j, D, Q, ie, Ne, he, oe, Ce, Ie, st, ce, Xe, qe, Pr, We, _t, _r, dt, Ht, wt, te, je, Ve, He, $e, Le, bt, mr, rr;
        if (rl(O),
        O._dir = B,
        _ *= 45,
        O.scroller = M,
        O.scroll = k ? k.time.bind(k) : fe,
        de = fe(),
        O.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (Qf = 1,
        r.refreshPriority === -9999 && (Ci = O)),
        E.tweenScroll = E.tweenScroll || {
            top: Wu(M, ht),
            left: Wu(M, Ct)
        },
        O.tweenTo = Ae = E.tweenScroll[B.p],
        O.scrubDuration = function(x) {
            je = Zn(x) && x,
            je ? te ? te.duration(x) : te = Z.to(i, {
                ease: "expo",
                totalProgress: "+=0.001",
                duration: je,
                paused: !0,
                onComplete: function() {
                    return v && v(O)
                }
            }) : (te && te.progress(1).kill(),
            te = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        O.animation = i.pause(),
        i.scrollTrigger = O,
        O.scrubDuration(h),
        Ht = 0,
        l || (l = i.vars.id)),
        ye.push(O),
        b && ((!fs(b) || b.push) && (b = {
            snapTo: b
        }),
        "scrollBehavior"in Je.style && Z.set(F ? [Je, Ar] : M, {
            scrollBehavior: "auto"
        }),
        Te.forEach(function(x) {
            return Dt(x) && x.target === (F ? Ue.scrollingElement || Ar : M) && (x.smooth = !1)
        }),
        qt = Dt(b.snapTo) ? b.snapTo : b.snapTo === "labels" ? _g(i) : b.snapTo === "labelsDirectional" ? mg(i) : b.directional !== !1 ? function(x, A) {
            return Xl(b.snapTo)(x, Ot() - De < 500 ? 0 : A.direction)
        }
        : Z.utils.snap(b.snapTo),
        Ve = b.duration || {
            min: .1,
            max: 2
        },
        Ve = fs(Ve) ? pn(Ve.min, Ve.max) : pn(Ve, Ve),
        He = Z.delayedCall(b.delay || je / 2 || .1, function() {
            var x = fe()
              , A = Ot() - De < 500
              , N = Ae.tween;
            if ((A || Math.abs(O.getVelocity()) < 10) && !N && !Gs && le !== x) {
                var z = (x - ue) / ie
                  , U = i && !$ ? i.totalProgress() : z
                  , q = A ? 0 : (U - wt) / (Ot() - cs) * 1e3 || 0
                  , se = Z.utils.clamp(-z, 1 - z, tn(q / 2) * q / .185)
                  , K = z + (b.inertia === !1 ? 0 : se)
                  , pe = pn(0, 1, qt(K, O))
                  , ae = Math.round(ue + pe * ie)
                  , we = b
                  , rt = we.onStart
                  , be = we.onInterrupt
                  , Pe = we.onComplete;
                if (x <= Ye && x >= ue && ae !== x) {
                    if (N && !N._initted && N.data <= tn(ae - x))
                        return;
                    b.inertia === !1 && (se = pe - z),
                    Ae(ae, {
                        duration: Ve(tn(Math.max(tn(K - U), tn(pe - U)) * .185 / q / .05 || 0)),
                        ease: b.ease || "power3",
                        data: tn(ae - x),
                        onInterrupt: function() {
                            return He.restart(!0) && be && be(O)
                        },
                        onComplete: function() {
                            O.update(),
                            le = fe(),
                            Ht = wt = i && !$ ? i.totalProgress() : O.progress,
                            y && y(O),
                            Pe && Pe(O)
                        }
                    }, x, se * ie, ae - x - se * ie),
                    rt && rt(O, Ae.tween)
                }
            } else
                O.isActive && le !== x && He.restart(!0)
        }).pause()),
        l && (nl[l] = O),
        d = O.trigger = Ft(d || c),
        rr = d && d._gsap && d._gsap.stRevert,
        rr && (rr = rr(O)),
        c = c === !0 ? d : Ft(c),
        br(a) && (a = {
            targets: d,
            className: a
        }),
        c && (p === !1 || p === ur || (p = !p && c.parentNode && c.parentNode.style && Lr(c.parentNode).display === "flex" ? !1 : nt),
        O.pin = c,
        _e = Z.core.getCache(c),
        _e.spacer ? Ne = _e.pinState : (T && (T = Ft(T),
        T && !T.nodeType && (T = T.current || T.nativeElement),
        _e.spacerIsNative = !!T,
        T && (_e.spacerState = Zo(T))),
        _e.spacer = Ce = T || Ue.createElement("div"),
        Ce.classList.add("pin-spacer"),
        l && Ce.classList.add("pin-spacer-" + l),
        _e.pinState = Ne = Zo(c)),
        r.force3D !== !1 && Z.set(c, {
            force3D: !0
        }),
        O.spacer = Ce = _e.spacer,
        dt = Lr(c),
        Pr = dt[p + B.os2],
        st = Z.getProperty(c),
        ce = Z.quickSetter(c, B.a, mt),
        ma(c, Ce, dt),
        oe = Zo(c)),
        H) {
            Q = fs(H) ? zu(H, Yu) : Yu,
            j = Qo("scroller-start", l, M, B, Q, 0),
            D = Qo("scroller-end", l, M, B, Q, 0, j),
            Ie = j["offset" + B.op.d2];
            var W = Ft(hi(M, "content") || M);
            X = this.markerStart = Qo("start", l, W, B, Q, Ie, 0, k),
            L = this.markerEnd = Qo("end", l, W, B, Q, Ie, 0, k),
            k && (mr = Z.quickSetter([X, L], B.a, mt)),
            !Y && !(Nr.length && hi(M, "fixedMarkers") === !0) && (gg(F ? Je : M),
            Z.set([j, D], {
                force3D: !0
            }),
            _t = Z.quickSetter(j, B.a, mt),
            _r = Z.quickSetter(D, B.a, mt))
        }
        if (k) {
            var P = k.vars.onUpdate
              , I = k.vars.onUpdateParams;
            k.eventCallback("onUpdate", function() {
                O.update(0, 0, 1),
                P && P.apply(I || [])
            })
        }
        O.previous = function() {
            return ye[ye.indexOf(O) - 1]
        }
        ,
        O.next = function() {
            return ye[ye.indexOf(O) + 1]
        }
        ,
        O.revert = function(x, A) {
            if (!A)
                return O.kill(!0);
            var N = x !== !1 || !O.enabled
              , z = xt;
            N !== O.isReverted && (N && (Le = Math.max(fe(), O.scroll.rec || 0),
            $e = O.progress,
            bt = i && i.progress()),
            X && [X, L, j, D].forEach(function(U) {
                return U.style.display = N ? "none" : "block"
            }),
            N && (xt = 1,
            O.update(N)),
            c && (N ? wg(c, Ce, Ne) : (!w || !O.isActive) && ma(c, Ce, Lr(c), We)),
            N || O.update(N),
            xt = z,
            O.isReverted = N)
        }
        ,
        O.refresh = function(x, A) {
            if (!((xt || !O.enabled) && !A)) {
                if (c && x && pr) {
                    yt(o, "scrollEnd", lh);
                    return
                }
                !xr && G && G(O),
                xt = 1,
                De = Ot(),
                Ae.tween && (Ae.tween.kill(),
                Ae.tween = 0),
                te && te.pause(),
                g && i && i.revert({
                    kill: !1
                }).invalidate(),
                O.isReverted || O.revert(!0, !0),
                O._subPinOffset = !1;
                for (var N = ee(), z = re(), U = k ? k.duration() : ui(M, B), q = 0, se = 0, K = r.end, pe = r.endTrigger || d, ae = r.start || (r.start === 0 || !d ? 0 : c ? "0 0" : "0 100%"), we = O.pinnedContainer = r.pinnedContainer && Ft(r.pinnedContainer), rt = d && Math.max(0, ye.indexOf(O)) || 0, be = rt, Pe, me, Re, yr, Me, Ze, $r, js, Kl, In; be--; )
                    Ze = ye[be],
                    Ze.end || Ze.refresh(0, 1) || (xt = 1),
                    $r = Ze.pin,
                    $r && ($r === d || $r === c) && !Ze.isReverted && (In || (In = []),
                    In.unshift(Ze),
                    Ze.revert(!0, !0)),
                    Ze !== ye[be] && (rt--,
                    be--);
                for (Dt(ae) && (ae = ae(O)),
                ue = Hu(ae, d, N, B, fe(), X, j, O, z, ne, Y, U, k) || (c ? -.001 : 0),
                Dt(K) && (K = K(O)),
                br(K) && !K.indexOf("+=") && (~K.indexOf(" ") ? K = (br(ae) ? ae.split(" ")[0] : "") + K : (q = hs(K.substr(2), N),
                K = br(ae) ? ae : ue + q,
                pe = d)),
                Ye = Math.max(ue, Hu(K || (pe ? "100% 0" : U), pe, N, B, fe() + q, L, D, O, z, ne, Y, U, k)) || -.001,
                ie = Ye - ue || (ue -= .01) && .001,
                q = 0,
                be = rt; be--; )
                    Ze = ye[be],
                    $r = Ze.pin,
                    $r && Ze.start - Ze._pinPush <= ue && !k && Ze.end > 0 && (Pe = Ze.end - Ze.start,
                    ($r === d && Ze.start - Ze._pinPush < ue || $r === we) && !Zn(ae) && (q += Pe * (1 - Ze.progress)),
                    $r === c && (se += Pe));
                if (ue += q,
                Ye += q,
                O._pinPush = se,
                X && q && (Pe = {},
                Pe[B.a] = "+=" + q,
                we && (Pe[B.p] = "-=" + fe()),
                Z.set([X, L], Pe)),
                c)
                    Pe = Lr(c),
                    yr = B === ht,
                    Re = fe(),
                    Xe = parseFloat(st(B.a)) + se,
                    !U && Ye > 1 && ((F ? Je : M).style["overflow-" + B.a] = "scroll"),
                    ma(c, Ce, Pe),
                    oe = Zo(c),
                    me = qr(c, !0),
                    js = Y && mi(M, yr ? Ct : ht)(),
                    p && (We = [p + B.os2, ie + se + mt],
                    We.t = Ce,
                    be = p === nt ? il(c, B) + ie + se : 0,
                    be && We.push(B.d, be + mt),
                    Pn(We),
                    we && ye.forEach(function($n) {
                        $n.pin === we && $n.vars.pinSpacing !== !1 && ($n._subPinOffset = !0)
                    }),
                    Y && fe(Le)),
                    Y && (Me = {
                        top: me.top + (yr ? Re - ue : js) + mt,
                        left: me.left + (yr ? js : Re - ue) + mt,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    Me[Bi] = Me["max" + Nn] = Math.ceil(me.width) + mt,
                    Me[zi] = Me["max" + Yl] = Math.ceil(me.height) + mt,
                    Me[ur] = Me[ur + go] = Me[ur + ho] = Me[ur + _o] = Me[ur + po] = "0",
                    Me[nt] = Pe[nt],
                    Me[nt + go] = Pe[nt + go],
                    Me[nt + ho] = Pe[nt + ho],
                    Me[nt + _o] = Pe[nt + _o],
                    Me[nt + po] = Pe[nt + po],
                    he = xg(Ne, Me, w),
                    xr && fe(0)),
                    i ? (Kl = i._initted,
                    ha(1),
                    i.render(i.duration(), !0, !0),
                    qe = st(B.a) - Xe + ie + se,
                    ie !== qe && Y && he.splice(he.length - 2, 2),
                    i.render(0, !0, !0),
                    Kl || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    ha(0)) : qe = ie;
                else if (d && fe() && !k)
                    for (me = d.parentNode; me && me !== Je; )
                        me._pinOffset && (ue -= me._pinOffset,
                        Ye -= me._pinOffset),
                        me = me.parentNode;
                In && In.forEach(function($n) {
                    return $n.revert(!1, !0)
                }),
                O.start = ue,
                O.end = Ye,
                de = Ge = xr ? Le : fe(),
                !k && !xr && (de < Le && fe(Le),
                O.scroll.rec = 0),
                O.revert(!1, !0),
                He && (le = -1,
                O.isActive && fe(ue + ie * $e),
                He.restart(!0)),
                xt = 0,
                i && $ && (i._initted || bt) && i.progress() !== bt && i.progress(bt, !0).render(i.time(), !0, !0),
                ($e !== O.progress || k) && (i && !$ && i.totalProgress($e, !0),
                O.progress = (de - ue) / ie === $e ? 0 : $e),
                c && p && (Ce._pinOffset = Math.round(O.progress * qe)),
                f && !xr && f(O)
            }
        }
        ,
        O.getVelocity = function() {
            return (fe() - Ge) / (Ot() - cs) * 1e3 || 0
        }
        ,
        O.endAnimation = function() {
            Vn(O.callbackAnimation),
            i && (te ? te.progress(1) : i.paused() ? $ || Vn(i, O.direction < 0, 1) : Vn(i, i.reversed()))
        }
        ,
        O.labelToScroll = function(x) {
            return i && i.labels && (ue || O.refresh() || ue) + i.labels[x] / i.duration() * ie || 0
        }
        ,
        O.getTrailing = function(x) {
            var A = ye.indexOf(O)
              , N = O.direction > 0 ? ye.slice(0, A).reverse() : ye.slice(A + 1);
            return (br(x) ? N.filter(function(z) {
                return z.vars.preventOverlaps === x
            }) : N).filter(function(z) {
                return O.direction > 0 ? z.end <= ue : z.start >= Ye
            })
        }
        ,
        O.update = function(x, A, N) {
            if (!(k && !N && !x)) {
                var z = xr ? Le : O.scroll(), U = x ? 0 : (z - ue) / ie, q = U < 0 ? 0 : U > 1 ? 1 : U || 0, se = O.progress, K, pe, ae, we, rt, be, Pe, me;
                if (A && (Ge = de,
                de = k ? fe() : z,
                b && (wt = Ht,
                Ht = i && !$ ? i.totalProgress() : q)),
                _ && !q && c && !xt && !Ho && pr && ue < z + (z - Ge) / (Ot() - cs) * _ && (q = 1e-4),
                q !== se && O.enabled) {
                    if (K = O.isActive = !!q && q < 1,
                    pe = !!se && se < 1,
                    be = K !== pe,
                    rt = be || !!q != !!se,
                    O.direction = q > se ? 1 : -1,
                    O.progress = q,
                    rt && !xt && (ae = q && !se ? 0 : q === 1 ? 1 : se === 1 ? 2 : 3,
                    $ && (we = !be && V[ae + 1] !== "none" && V[ae + 1] || V[ae],
                    me = i && (we === "complete" || we === "reset" || we in i))),
                    C && (be || me) && (me || h || !i) && (Dt(C) ? C(O) : O.getTrailing(C).forEach(function(Ze) {
                        return Ze.endAnimation()
                    })),
                    $ || (te && !xt && !Ho ? ((k || Ci && Ci !== O) && te.render(te._dp._time - te._start),
                    te.resetTo ? te.resetTo("totalProgress", q, i._tTime / i._tDur) : (te.vars.totalProgress = q,
                    te.invalidate().restart())) : i && i.totalProgress(q, !!xt)),
                    c) {
                        if (x && p && (Ce.style[p + B.os2] = Pr),
                        !Y)
                            ce(Qn(Xe + qe * q));
                        else if (rt) {
                            if (Pe = !x && q > se && Ye + 1 > z && z + 1 >= ui(M, B),
                            w)
                                if (!x && (K || Pe)) {
                                    var Re = qr(c, !0)
                                      , yr = z - ue;
                                    Gu(c, Je, Re.top + (B === ht ? yr : 0) + mt, Re.left + (B === ht ? 0 : yr) + mt)
                                } else
                                    Gu(c, Ce);
                            Pn(K || Pe ? he : oe),
                            qe !== ie && q < 1 && K || ce(Xe + (q === 1 && !Pe ? qe : 0))
                        }
                    }
                    b && !Ae.tween && !xt && !Ho && He.restart(!0),
                    a && (be || m && q && (q < 1 || !da)) && Ns(a.targets).forEach(function(Ze) {
                        return Ze.classList[K || m ? "add" : "remove"](a.className)
                    }),
                    s && !$ && !x && s(O),
                    rt && !xt ? ($ && (me && (we === "complete" ? i.pause().totalProgress(1) : we === "reset" ? i.restart(!0).pause() : we === "restart" ? i.restart(!0) : i[we]()),
                    s && s(O)),
                    (be || !da) && (u && be && ga(O, u),
                    R[ae] && ga(O, R[ae]),
                    m && (q === 1 ? O.kill(!1, 1) : R[ae] = 0),
                    be || (ae = q === 1 ? 1 : 3,
                    R[ae] && ga(O, R[ae]))),
                    S && !K && Math.abs(O.getVelocity()) > (Zn(S) ? S : 2500) && (Vn(O.callbackAnimation),
                    te ? te.progress(1) : Vn(i, we === "reverse" ? 1 : !q, 1))) : $ && s && !xt && s(O)
                }
                if (_r) {
                    var Me = k ? z / k.duration() * (k._caScrollDist || 0) : z;
                    _t(Me + (j._isFlipped ? 1 : 0)),
                    _r(Me)
                }
                mr && mr(-z / k.duration() * (k._caScrollDist || 0))
            }
        }
        ,
        O.enable = function(x, A) {
            O.enabled || (O.enabled = !0,
            yt(M, "resize", Jn),
            yt(F ? Ue : M, "scroll", rn),
            G && yt(o, "refreshInit", G),
            x !== !1 && (O.progress = $e = 0,
            de = Ge = le = fe()),
            A !== !1 && O.refresh())
        }
        ,
        O.getTween = function(x) {
            return x && Ae ? Ae.tween : te
        }
        ,
        O.setPositions = function(x, A) {
            c && (Xe += x - ue,
            qe += A - x - ie,
            p === nt && O.adjustPinSpacing(A - x - ie)),
            O.start = ue = x,
            O.end = Ye = A,
            ie = A - x,
            O.update()
        }
        ,
        O.adjustPinSpacing = function(x) {
            if (We) {
                var A = We.indexOf(B.d) + 1;
                We[A] = parseFloat(We[A]) + x + mt,
                We[1] = parseFloat(We[1]) + x + mt,
                Pn(We)
            }
        }
        ,
        O.disable = function(x, A) {
            if (O.enabled && (x !== !1 && O.revert(!0, !0),
            O.enabled = O.isActive = !1,
            A || te && te.pause(),
            Le = 0,
            _e && (_e.uncache = 1),
            G && pt(o, "refreshInit", G),
            He && (He.pause(),
            Ae.tween && Ae.tween.kill() && (Ae.tween = 0)),
            !F)) {
                for (var N = ye.length; N--; )
                    if (ye[N].scroller === M && ye[N] !== O)
                        return;
                pt(M, "resize", Jn),
                pt(M, "scroll", rn)
            }
        }
        ,
        O.kill = function(x, A) {
            O.disable(x, A),
            te && !A && te.kill(),
            l && delete nl[l];
            var N = ye.indexOf(O);
            N >= 0 && ye.splice(N, 1),
            N === Et && ps > 0 && Et--,
            N = 0,
            ye.forEach(function(z) {
                return z.scroller === O.scroller && (N = 1)
            }),
            N || xr || (O.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            x && i.revert({
                kill: !1
            }),
            A || i.kill()),
            X && [X, L, j, D].forEach(function(z) {
                return z.parentNode && z.parentNode.removeChild(z)
            }),
            Ci === O && (Ci = 0),
            c && (_e && (_e.uncache = 1),
            N = 0,
            ye.forEach(function(z) {
                return z.pin === c && N++
            }),
            N || (_e.spacer = 0)),
            r.onKill && r.onKill(O)
        }
        ,
        O.enable(!1, !1),
        rr && rr(O),
        !i || !i.add || ie ? O.refresh() : Z.delayedCall(.01, function() {
            return ue || Ye || O.refresh()
        }) && (ie = .01) && (ue = Ye = 0),
        c && vg()
    }
    ,
    o.register = function(r) {
        return sn || (Z = r || ih(),
        rh() && window.document && o.enable(),
        sn = Go),
        sn
    }
    ,
    o.defaults = function(r) {
        if (r)
            for (var i in r)
                Ko[i] = r[i];
        return Ko
    }
    ,
    o.disable = function(r, i) {
        Go = 0,
        ye.forEach(function(s) {
            return s[i ? "kill" : "disable"](r)
        }),
        pt(xe, "wheel", rn),
        pt(Ue, "scroll", rn),
        clearInterval(qo),
        pt(Ue, "touchcancel", Er),
        pt(Je, "touchstart", Er),
        jo(pt, Ue, "pointerdown,touchstart,mousedown", $u),
        jo(pt, Ue, "pointerup,touchend,mouseup", Bu),
        Fs.kill(),
        Wo(pt);
        for (var n = 0; n < Te.length; n += 3)
            Uo(pt, Te[n], Te[n + 1]),
            Uo(pt, Te[n], Te[n + 2])
    }
    ,
    o.enable = function() {
        if (xe = window,
        Ue = document,
        Ar = Ue.documentElement,
        Je = Ue.body,
        Z && (Ns = Z.utils.toArray,
        pn = Z.utils.clamp,
        rl = Z.core.context || Er,
        ha = Z.core.suppressOverwrites || Er,
        $l = xe.history.scrollRestoration || "auto",
        Z.core.globals("ScrollTrigger", o),
        Je)) {
            Go = 1,
            tt.register(Z),
            o.isTouch = tt.isTouch,
            ti = tt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            yt(xe, "wheel", rn),
            Kf = [xe, Ue, Ar, Je],
            Z.matchMedia ? (o.matchMedia = function(l) {
                var u = Z.matchMedia(), f;
                for (f in l)
                    u.add(f, l[f]);
                return u
            }
            ,
            Z.addEventListener("matchMediaInit", function() {
                return Vl()
            }),
            Z.addEventListener("matchMediaRevert", function() {
                return uh()
            }),
            Z.addEventListener("matchMedia", function() {
                Li(0, 1),
                ji("matchMedia")
            }),
            Z.matchMedia("(orientation: portrait)", function() {
                return _a(),
                _a
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            _a(),
            yt(Ue, "scroll", rn);
            var r = Je.style, i = r.borderTopStyle, n = Z.core.Animation.prototype, s, a;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            s = qr(Je),
            ht.m = Math.round(s.top + ht.sc()) || 0,
            Ct.m = Math.round(s.left + Ct.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            qo = setInterval(Xu, 250),
            Z.delayedCall(.5, function() {
                return Ho = 0
            }),
            yt(Ue, "touchcancel", Er),
            yt(Je, "touchstart", Er),
            jo(yt, Ue, "pointerdown,touchstart,mousedown", $u),
            jo(yt, Ue, "pointerup,touchend,mouseup", Bu),
            tl = Z.utils.checkPrefix("transform"),
            gs.push(tl),
            sn = Ot(),
            Fs = Z.delayedCall(.2, Li).pause(),
            an = [Ue, "visibilitychange", function() {
                var l = xe.innerWidth
                  , u = xe.innerHeight;
                Ue.hidden ? (Nu = l,
                Iu = u) : (Nu !== l || Iu !== u) && Jn()
            }
            , Ue, "DOMContentLoaded", Li, xe, "load", Li, xe, "resize", Jn],
            Wo(yt),
            ye.forEach(function(l) {
                return l.enable(0, 1)
            }),
            a = 0; a < Te.length; a += 3)
                Uo(pt, Te[a], Te[a + 1]),
                Uo(pt, Te[a], Te[a + 2])
        }
    }
    ,
    o.config = function(r) {
        "limitCallbacks"in r && (da = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(qo) || (qo = i) && setInterval(Xu, i),
        "ignoreMobileResize"in r && (Jf = o.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (Wo(pt) || Wo(yt, r.autoRefreshEvents || "none"),
        Zf = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    o.scrollerProxy = function(r, i) {
        var n = Ft(r)
          , s = Te.indexOf(n)
          , a = Gi(n);
        ~s && Te.splice(s, a ? 6 : 2),
        i && (a ? Nr.unshift(xe, i, Je, i, Ar, i) : Nr.unshift(n, i))
    }
    ,
    o.clearMatchMedia = function(r) {
        ye.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    o.isInViewport = function(r, i, n) {
        var s = (br(r) ? Ft(r) : r).getBoundingClientRect()
          , a = s[n ? Bi : zi] * i || 0;
        return n ? s.right - a > 0 && s.left + a < xe.innerWidth : s.bottom - a > 0 && s.top + a < xe.innerHeight
    }
    ,
    o.positionInViewport = function(r, i, n) {
        br(r) && (r = Ft(r));
        var s = r.getBoundingClientRect()
          , a = s[n ? Bi : zi]
          , l = i == null ? a / 2 : i in Is ? Is[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
        return n ? (s.left + l) / xe.innerWidth : (s.top + l) / xe.innerHeight
    }
    ,
    o.killAll = function(r) {
        if (ye.forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        r !== !0) {
            var i = Wi.killAll || [];
            Wi = {},
            i.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    o
}();
ge.version = "3.11.3";
ge.saveStyles = function(o) {
    return o ? Ns(o).forEach(function(e) {
        if (e && e.style) {
            var t = Wt.indexOf(e);
            t >= 0 && Wt.splice(t, 5),
            Wt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Z.core.getCache(e), rl())
        }
    }) : Wt
}
;
ge.revert = function(o, e) {
    return Vl(!o, e)
}
;
ge.create = function(o, e) {
    return new ge(o,e)
}
;
ge.refresh = function(o) {
    return o ? Jn() : (sn || ge.register()) && Li(!0)
}
;
ge.update = Ui;
ge.clearScrollMemory = ch;
ge.maxScroll = function(o, e) {
    return ui(o, e ? Ct : ht)
}
;
ge.getScrollFunc = function(o, e) {
    return mi(Ft(o), e ? Ct : ht)
}
;
ge.getById = function(o) {
    return nl[o]
}
;
ge.getAll = function() {
    return ye.filter(function(o) {
        return o.vars.id !== "ScrollSmoother"
    })
}
;
ge.isScrolling = function() {
    return !!pr
}
;
ge.snapDirectional = Xl;
ge.addEventListener = function(o, e) {
    var t = Wi[o] || (Wi[o] = []);
    ~t.indexOf(e) || t.push(e)
}
;
ge.removeEventListener = function(o, e) {
    var t = Wi[o]
      , r = t && t.indexOf(e);
    r >= 0 && t.splice(r, 1)
}
;
ge.batch = function(o, e) {
    var t = [], r = {}, i = e.interval || .016, n = e.batchMax || 1e9, s = function(u, f) {
        var h = []
          , d = []
          , c = Z.delayedCall(i, function() {
            f(h, d),
            h = [],
            d = []
        }).pause();
        return function(p) {
            h.length || c.restart(!0),
            h.push(p.trigger),
            d.push(p),
            n <= h.length && c.progress(1)
        }
    }, a;
    for (a in e)
        r[a] = a.substr(0, 2) === "on" && Dt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return Dt(n) && (n = n(),
    yt(ge, "refresh", function() {
        return n = e.batchMax()
    })),
    Ns(o).forEach(function(l) {
        var u = {};
        for (a in r)
            u[a] = r[a];
        u.trigger = l,
        t.push(ge.create(u))
    }),
    t
}
;
var ju = function(e, t, r, i) {
    return t > i ? e(i) : t < 0 && e(0),
    r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1
}, ya = function o(e, t) {
    t === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = t === !0 ? "auto" : t ? "pan-" + t + (tt.isTouch ? " pinch-zoom" : "") : "none",
    e === Ar && o(Je, t)
}, Uu = {
    auto: 1,
    scroll: 1
}, Sg = function(e) {
    var t = e.event, r = e.target, i = e.axis, n = (t.changedTouches ? t.changedTouches[0] : t).target, s = n._gsap || Z.core.getCache(n), a = Ot(), l;
    if (!s._isScrollT || a - s._isScrollT > 2e3) {
        for (; n && n.scrollHeight <= n.clientHeight; )
            n = n.parentNode;
        s._isScroll = n && !Gi(n) && n !== r && (Uu[(l = Lr(n)).overflowY] || Uu[l.overflowX]),
        s._isScrollT = a
    }
    (s._isScroll || i === "x") && (t.stopPropagation(),
    t._gsapAllow = !0)
}, fh = function(e, t, r, i) {
    return tt.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: i = i && Sg,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && yt(Ue, tt.eventTypes[0], Qu, !1, !0)
        },
        onDisable: function() {
            return pt(Ue, tt.eventTypes[0], Qu, !0)
        }
    })
}, kg = /(input|label|select|textarea)/i, Ku, Qu = function(e) {
    var t = kg.test(e.target.tagName);
    (t || Ku) && (e._gsapAllow = !0,
    Ku = t)
}, Pg = function(e) {
    fs(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var t = e, r = t.normalizeScrollX, i = t.momentum, n = t.allowNestedScroll, s, a, l = Ft(e.target) || Ar, u = Z.core.globals().ScrollSmoother, f = u && u.get(), h = ti && (e.content && Ft(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), d = mi(l, ht), c = mi(l, Ct), p = 1, g = (tt.isTouch && xe.visualViewport ? xe.visualViewport.scale * xe.visualViewport.width : xe.outerWidth) / xe.innerWidth, _ = 0, v = Dt(i) ? function() {
        return i(s)
    }
    : function() {
        return i || 2.8
    }
    , y, m, b = fh(l, e.type, !0, n), w = function() {
        return m = !1
    }, T = Er, k = Er, S = function() {
        a = ui(l, ht),
        k = pn(ti ? 1 : 0, a),
        r && (T = pn(0, ui(l, Ct))),
        y = Yi
    }, C = function() {
        h._gsap.y = Qn(parseFloat(h._gsap.y) + d.offset) + "px",
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, B = function() {
        if (m) {
            requestAnimationFrame(w);
            var V = Qn(s.deltaY / 2)
              , H = k(d.v - V);
            if (h && H !== d.v + d.offset) {
                d.offset = H - d.v;
                var ne = Qn((parseFloat(h && h._gsap.y) || 0) - d.offset);
                h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + ne + ", 0, 1)",
                h._gsap.y = ne + "px",
                d.cacheID = Te.cache,
                Ui()
            }
            return !0
        }
        d.offset && C(),
        m = !0
    }, $, M, E, F, Y = function() {
        S(),
        $.isActive() && $.vars.scrollY > a && (d() > a ? $.progress(1) && d(a) : $.resetTo("scrollY", a))
    };
    return h && Z.set(h, {
        y: "+=0"
    }),
    e.ignoreCheck = function(R) {
        return ti && R.type === "touchmove" && B() || p > 1.05 && R.type !== "touchstart" || s.isGesturing || R.touches && R.touches.length > 1
    }
    ,
    e.onPress = function() {
        var R = p;
        p = Qn((xe.visualViewport && xe.visualViewport.scale || 1) / g),
        $.pause(),
        R !== p && ya(l, p > 1.01 ? !0 : r ? !1 : "x"),
        M = c(),
        E = d(),
        S(),
        y = Yi
    }
    ,
    e.onRelease = e.onGestureStart = function(R, V) {
        if (d.offset && C(),
        !V)
            F.restart(!0);
        else {
            Te.cache++;
            var H = v(), ne, O;
            r && (ne = c(),
            O = ne + H * .05 * -R.velocityX / .227,
            H *= ju(c, ne, O, ui(l, Ct)),
            $.vars.scrollX = T(O)),
            ne = d(),
            O = ne + H * .05 * -R.velocityY / .227,
            H *= ju(d, ne, O, ui(l, ht)),
            $.vars.scrollY = k(O),
            $.invalidate().duration(H).play(.01),
            (ti && $.vars.scrollY >= a || ne >= a - 1) && Z.to({}, {
                onUpdate: Y,
                duration: H
            })
        }
    }
    ,
    e.onWheel = function() {
        $._ts && $.pause(),
        Ot() - _ > 1e3 && (y = 0,
        _ = Ot())
    }
    ,
    e.onChange = function(R, V, H, ne, O) {
        if (Yi !== y && S(),
        V && r && c(T(ne[2] === V ? M + (R.startX - R.x) : c() + V - ne[1])),
        H) {
            d.offset && C();
            var G = O[2] === H
              , ee = G ? E + R.startY - R.y : d() + H - O[1]
              , re = k(ee);
            G && ee !== re && (E += re - ee),
            d(re)
        }
        (H || V) && Ui()
    }
    ,
    e.onEnable = function() {
        ya(l, r ? !1 : "x"),
        ge.addEventListener("refresh", Y),
        yt(xe, "resize", Y),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = c.smooth = !1),
        b.enable()
    }
    ,
    e.onDisable = function() {
        ya(l, !0),
        pt(xe, "resize", Y),
        ge.removeEventListener("refresh", Y),
        b.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    s = new tt(e),
    s.iOS = ti,
    ti && !d() && d(1),
    ti && Z.ticker.add(Er),
    F = s._dc,
    $ = Z.to(s, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: F.vars.onComplete
    }),
    s
};
ge.sort = function(o) {
    return ye.sort(o || function(e, t) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (t.start + (t.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
ge.observe = function(o) {
    return new tt(o)
}
;
ge.normalizeScroll = function(o) {
    if (typeof o > "u")
        return Gt;
    if (o === !0 && Gt)
        return Gt.enable();
    if (o === !1)
        return Gt && Gt.kill();
    var e = o instanceof tt ? o : Pg(o);
    return Gt && Gt.target === e.target && Gt.kill(),
    Gi(e.target) && (Gt = e),
    e
}
;
ge.core = {
    _getVelocityProp: el,
    _inputObserver: fh,
    _scrollers: Te,
    _proxies: Nr,
    bridge: {
        ss: function() {
            pr || ji("scrollStart"),
            pr = Ot()
        },
        ref: function() {
            return xt
        }
    }
};
ih() && Z.registerPlugin(ge);
/*!
 * DrawSVGPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Rr, ql, $s, hh, dh, Zu, sl, ph, gh = function() {
    return typeof window < "u"
}, _h = function() {
    return Rr || gh() && (Rr = window.gsap) && Rr.registerPlugin && Rr
}, Mg = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, va = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
}, Di = function(e) {
    return Math.round(e * 1e4) / 1e4
}, Ur = function(e) {
    return parseFloat(e) || 0
}, Ju = function(e, t) {
    var r = Ur(e);
    return ~e.indexOf("%") ? r / 100 * t : r
}, Jo = function(e, t) {
    return Ur(e.getAttribute(t))
}, ms = Math.sqrt, ec = function(e, t, r, i, n, s) {
    return ms(Math.pow((Ur(r) - Ur(e)) * n, 2) + Math.pow((Ur(i) - Ur(t)) * s, 2))
}, tc = function(e) {
    return console.warn(e)
}, mh = function(e) {
    return e.getAttribute("vector-effect") === "non-scaling-stroke"
}, Eg = 1, Og = function(e, t, r) {
    var i = e.indexOf(" "), n, s;
    return i < 0 ? (n = r !== void 0 ? r + "" : e,
    s = e) : (n = e.substr(0, i),
    s = e.substr(i + 1)),
    n = Ju(n, t),
    s = Ju(s, t),
    n > s ? [s, n] : [n, s]
}, ys = function(e) {
    if (e = ql(e)[0],
    !e)
        return 0;
    var t = e.tagName.toLowerCase(), r = e.style, i = 1, n = 1, s, a, l, u, f, h, d;
    mh(e) && (n = e.getScreenCTM(),
    i = ms(n.a * n.a + n.b * n.b),
    n = ms(n.d * n.d + n.c * n.c));
    try {
        a = e.getBBox()
    } catch {
        tc("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var c = a || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
      , p = c.x
      , g = c.y
      , _ = c.width
      , v = c.height;
    if ((!a || !_ && !v) && va[t] && (_ = Jo(e, va[t][0]),
    v = Jo(e, va[t][1]),
    t !== "rect" && t !== "line" && (_ *= 2,
    v *= 2),
    t === "line" && (p = Jo(e, "x1"),
    g = Jo(e, "y1"),
    _ = Math.abs(_ - p),
    v = Math.abs(v - g))),
    t === "path")
        u = r.strokeDasharray,
        r.strokeDasharray = "none",
        s = e.getTotalLength() || 0,
        Di(i) !== Di(n) && !Zu && (Zu = 1) && tc("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
        s *= (i + n) / 2,
        r.strokeDasharray = u;
    else if (t === "rect")
        s = _ * 2 * i + v * 2 * n;
    else if (t === "line")
        s = ec(p, g, p + _, g + v, i, n);
    else if (t === "polyline" || t === "polygon")
        for (l = e.getAttribute("points").match(Mg) || [],
        t === "polygon" && l.push(l[0], l[1]),
        s = 0,
        f = 2; f < l.length; f += 2)
            s += ec(l[f - 2], l[f - 1], l[f], l[f + 1], i, n) || 0;
    else
        (t === "circle" || t === "ellipse") && (h = _ / 2 * i,
        d = v / 2 * n,
        s = Math.PI * (3 * (h + d) - ms((3 * h + d) * (h + 3 * d))));
    return s || 0
}, rc = function(e, t) {
    if (e = ql(e)[0],
    !e)
        return [0, 0];
    t || (t = ys(e) + 1);
    var r = $s.getComputedStyle(e)
      , i = r.strokeDasharray || ""
      , n = Ur(r.strokeDashoffset)
      , s = i.indexOf(",");
    return s < 0 && (s = i.indexOf(" ")),
    i = s < 0 ? t : Ur(i.substr(0, s)),
    i > t && (i = t),
    [-n || 0, i - n || 0]
}, ic = function() {
    gh() && ($s = window,
    dh = Rr = _h(),
    ql = Rr.utils.toArray,
    sl = Rr.core.getStyleSaver,
    ph = Rr.core.reverting || function() {}
    ,
    hh = (($s.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
}, al = {
    version: "3.11.3",
    name: "drawSVG",
    register: function(e) {
        Rr = e,
        ic()
    },
    init: function(e, t, r, i, n) {
        if (!e.getBBox)
            return !1;
        dh || ic();
        var s = ys(e), a, l, u;
        return this.styles = sl && sl(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
        this.tween = r,
        this._style = e.style,
        this._target = e,
        t + "" == "true" ? t = "0 100%" : t ? (t + "").indexOf(" ") === -1 && (t = "0 " + t) : t = "0 0",
        a = rc(e, s),
        l = Og(t, s, a[0]),
        this._length = Di(s),
        this._dash = Di(a[1] - a[0]),
        this._offset = Di(-a[0]),
        this._dashPT = this.add(this, "_dash", this._dash, Di(l[1] - l[0]), 0, 0, 0, 0, 0, 1),
        this._offsetPT = this.add(this, "_offset", this._offset, Di(-l[0]), 0, 0, 0, 0, 0, 1),
        hh && (u = $s.getComputedStyle(e),
        u.strokeLinecap !== u.strokeLinejoin && (l = Ur(u.strokeMiterlimit),
        this.add(e.style, "strokeMiterlimit", l, l + .01))),
        this._live = mh(e) || ~(t + "").indexOf("live"),
        this._nowrap = ~(t + "").indexOf("nowrap"),
        this._props.push("drawSVG"),
        Eg
    },
    render: function(e, t) {
        if (t.tween._time || !ph()) {
            var r = t._pt, i = t._style, n, s, a, l;
            if (r) {
                for (t._live && (n = ys(t._target),
                n !== t._length && (s = n / t._length,
                t._length = n,
                t._offsetPT && (t._offsetPT.s *= s,
                t._offsetPT.c *= s),
                t._dashPT ? (t._dashPT.s *= s,
                t._dashPT.c *= s) : t._dash *= s)); r; )
                    r.r(e, r.d),
                    r = r._next;
                a = t._dash || e && e !== 1 && 1e-4 || 0,
                n = t._length - a + .1,
                l = t._offset,
                a && l && a + Math.abs(l % t._length) > t._length - .2 && (l += l < 0 ? .1 : -.1) && (n += .1),
                i.strokeDashoffset = a ? l : l + .001,
                i.strokeDasharray = n < .2 ? "none" : a ? a + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
            }
        } else
            t.styles.revert()
    },
    getLength: ys,
    getPosition: rc
};
_h() && Rr.registerPlugin(al);
/*!
 * VelocityTracker: 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Or, ll, mo, yh, ln, gn, ul, vh, wh = function() {
    return Or || typeof window < "u" && (Or = window.gsap)
}, cl = {}, Cg = function(e) {
    return Math.round(e * 1e4) / 1e4
}, fl = function(e) {
    return vh(e).id
}, eo = function(e) {
    return cl[fl(typeof e == "string" ? mo(e)[0] : e)]
}, nc = function(e) {
    var t = ln, r;
    if (e - ul >= .05)
        for (ul = e; t; )
            r = t.g(t.t, t.p),
            (r !== t.v1 || e - t.t1 > .2) && (t.v2 = t.v1,
            t.v1 = r,
            t.t2 = t.t1,
            t.t1 = e),
            t = t._next
}, Dg = {
    deg: 360,
    rad: Math.PI * 2
}, wa = function() {
    Or = wh(),
    Or && (mo = Or.utils.toArray,
    yh = Or.utils.getUnit,
    vh = Or.core.getCache,
    gn = Or.ticker,
    ll = 1)
}, Ag = function(e, t, r, i) {
    this.t = e,
    this.p = t,
    this.g = e._gsap.get,
    this.rCap = Dg[r || yh(this.g(e, t))],
    this.v1 = this.v2 = 0,
    this.t1 = this.t2 = gn.time,
    i && (this._next = i,
    i._prev = this)
}, Fo = function() {
    function o(t, r) {
        ll || wa(),
        this.target = mo(t)[0],
        cl[fl(this.target)] = this,
        this._props = {},
        r && this.add(r)
    }
    o.register = function(r) {
        Or = r,
        wa()
    }
    ;
    var e = o.prototype;
    return e.get = function(r, i) {
        var n = this._props[r] || console.warn("Not tracking " + r + " velocity."), s, a, l;
        return s = parseFloat(i ? n.v1 : n.g(n.t, n.p)),
        a = s - parseFloat(n.v2),
        l = n.rCap,
        l && (a = a % l,
        a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)),
        Cg(a / ((i ? n.t1 : gn.time) - n.t2))
    }
    ,
    e.getAll = function() {
        var r = {}, i = this._props, n;
        for (n in i)
            r[n] = this.get(n);
        return r
    }
    ,
    e.isTracking = function(r) {
        return r in this._props
    }
    ,
    e.add = function(r, i) {
        r in this._props || (ln || (gn.add(nc),
        ul = gn.time),
        ln = this._props[r] = new Ag(this.target,r,i,ln))
    }
    ,
    e.remove = function(r) {
        var i = this._props[r], n, s;
        i && (n = i._prev,
        s = i._next,
        n && (n._next = s),
        s ? s._prev = n : ln === i && (gn.remove(nc),
        ln = 0),
        delete this._props[r])
    }
    ,
    e.kill = function(r) {
        for (var i in this._props)
            this.remove(i);
        r || delete cl[fl(this.target)]
    }
    ,
    o.track = function(r, i, n) {
        ll || wa();
        for (var s = [], a = mo(r), l = i.split(","), u = (n || "").split(","), f = a.length, h, d; f--; ) {
            for (h = eo(a[f]) || new o(a[f]),
            d = l.length; d--; )
                h.add(l[d], u[d] || u[0]);
            s.push(h)
        }
        return s
    }
    ,
    o.untrack = function(r, i) {
        var n = (i || "").split(",");
        mo(r).forEach(function(s) {
            var a = eo(s);
            a && (n.length ? n.forEach(function(l) {
                return a.remove(l)
            }) : a.kill(1))
        })
    }
    ,
    o.isTracking = function(r, i) {
        var n = eo(r);
        return n && n.isTracking(i)
    }
    ,
    o.getVelocity = function(r, i) {
        var n = eo(r);
        return !n || !n.isTracking(i) ? console.warn("Not tracking velocity of " + i) : n.get(i)
    }
    ,
    o
}();
Fo.getByTarget = eo;
wh() && Or.registerPlugin(Fo);
/*!
 * InertiaPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ct, bh, oc, xh, hl, yo, Th, Sh, kh, Hl, Ph, vo, dl, Mh, Bs = Fo.getByTarget, Eh = function() {
    return ct || typeof window < "u" && (ct = window.gsap) && ct.registerPlugin && ct
}, Lg = function(e) {
    return typeof e == "string"
}, Do = function(e) {
    return typeof e == "number"
}, di = function(e) {
    return typeof e == "object"
}, pl = function(e) {
    return typeof e == "function"
}, Rg = 1, Oh = Array.isArray, Fg = function(e) {
    return e
}, Xi = 1e10, sc = 1 / Xi, Ch = .05, Ng = function(e) {
    return Math.round(e * 1e4) / 1e4
}, Ig = function(e, t, r) {
    for (var i in t)
        !(i in e) && i !== r && (e[i] = t[i]);
    return e
}, $g = function o(e) {
    var t = {}, r, i;
    for (r in e)
        t[r] = di(i = e[r]) && !Oh(i) ? o(i) : i;
    return t
}, ac = function(e, t, r, i, n) {
    var s = t.length, a = 0, l = Xi, u, f, h, d;
    if (di(e)) {
        for (; s--; ) {
            u = t[s],
            f = 0;
            for (h in e)
                d = u[h] - e[h],
                f += d * d;
            f < l && (a = s,
            l = f)
        }
        if ((n || Xi) < Xi && n < Math.sqrt(l))
            return e
    } else
        for (; s--; )
            u = t[s],
            f = u - e,
            f < 0 && (f = -f),
            f < l && u >= i && u <= r && (a = s,
            l = f);
    return t[a]
}, Dh = function(e, t, r, i, n, s, a) {
    if (e.end === "auto")
        return e;
    var l = e.end, u, f;
    if (r = isNaN(r) ? Xi : r,
    i = isNaN(i) ? -Xi : i,
    di(t)) {
        if (u = t.calculated ? t : (pl(l) ? l(t, a) : ac(t, l, r, i, s)) || t,
        !t.calculated) {
            for (f in u)
                t[f] = u[f];
            t.calculated = !0
        }
        u = u[n]
    } else
        u = pl(l) ? l(t, a) : Oh(l) ? ac(t, l, r, i, s) : parseFloat(l);
    return u > r ? u = r : u < i && (u = i),
    {
        max: u,
        min: u,
        unitFactor: e.unitFactor
    }
}, zs = function(e, t, r) {
    return isNaN(e[t]) ? r : +e[t]
}, Gl = function(e, t) {
    return t * Ch * e / Hl
}, lc = function(e, t, r) {
    return Math.abs((t - e) * Hl / r / Ch)
}, Ah = {
    resistance: 1,
    checkpoint: 1,
    preventOvershoot: 1,
    linkedProps: 1,
    radius: 1,
    duration: 1
}, Lh = function(e, t, r, i) {
    if (t.linkedProps) {
        var n = t.linkedProps.split(","), s = {}, a, l, u, f, h, d;
        for (a = 0; a < n.length; a++)
            l = n[a],
            u = t[l],
            u && (Do(u.velocity) ? f = u.velocity : (h = h || Bs(e),
            f = h && h.isTracking(l) ? h.get(l) : 0),
            d = Math.abs(f / zs(u, "resistance", i)),
            s[l] = parseFloat(r(e, l)) + Gl(f, d));
        return s
    }
}, Bg = function(e, t, r, i, n, s) {
    if (r === void 0 && (r = 10),
    i === void 0 && (i = .2),
    n === void 0 && (n = 1),
    s === void 0 && (s = 0),
    Lg(e) && (e = xh(e)[0]),
    !e)
        return 0;
    var a = 0, l = Xi, u = t.inertia || t, f = kh(e).get, h = zs(u, "resistance", yo.resistance), d, c, p, g, _, v, y, m, b, w;
    w = Lh(e, u, f, h);
    for (d in u)
        Ah[d] || (c = u[d],
        di(c) || (m = m || Bs(e),
        m && m.isTracking(d) ? c = Do(c) ? {
            velocity: c
        } : {
            velocity: m.get(d)
        } : (g = +c || 0,
        p = Math.abs(g / h))),
        di(c) && (Do(c.velocity) ? g = c.velocity : (m = m || Bs(e),
        g = m && m.isTracking(d) ? m.get(d) : 0),
        p = Ph(i, r, Math.abs(g / zs(c, "resistance", h))),
        _ = parseFloat(f(e, d)) || 0,
        v = _ + Gl(g, p),
        "end"in c && (c = Dh(c, w && d in w ? w : v, c.max, c.min, d, u.radius, g),
        s && (vo === t && (vo = u = $g(t)),
        u[d] = Ig(c, u[d], "end"))),
        "max"in c && v > +c.max + sc ? (b = c.unitFactor || yo.unitFactors[d] || 1,
        y = _ > c.max && c.min !== c.max || g * b > -15 && g * b < 45 ? i + (r - i) * .1 : lc(_, c.max, g),
        y + n < l && (l = y + n)) : "min"in c && v < +c.min - sc && (b = c.unitFactor || yo.unitFactors[d] || 1,
        y = _ < c.min && c.min !== c.max || g * b > -45 && g * b < 15 ? i + (r - i) * .1 : lc(_, c.min, g),
        y + n < l && (l = y + n)),
        y > a && (a = y)),
        p > a && (a = p));
    return a > l && (a = l),
    a > r ? r : a < i ? i : a
}, uc = function() {
    ct = Eh(),
    ct && (oc = ct.parseEase,
    xh = ct.utils.toArray,
    Th = ct.utils.getUnit,
    kh = ct.core.getCache,
    Ph = ct.utils.clamp,
    dl = ct.core.getStyleSaver,
    Mh = ct.core.reverting || function() {}
    ,
    hl = oc("power3"),
    Hl = hl(.05),
    Sh = ct.core.PropTween,
    ct.config({
        resistance: 100,
        unitFactors: {
            time: 1e3,
            totalTime: 1e3,
            progress: 1e3,
            totalProgress: 1e3
        }
    }),
    yo = ct.config(),
    ct.registerPlugin(Fo),
    bh = 1)
}, Wl = {
    version: "3.11.3",
    name: "inertia",
    register: function(e) {
        ct = e,
        uc()
    },
    init: function(e, t, r, i, n) {
        bh || uc();
        var s = Bs(e);
        if (t === "auto") {
            if (!s) {
                console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                return
            }
            t = s.getAll()
        }
        this.styles = dl && typeof e.style == "object" && dl(e),
        this.target = e,
        this.tween = r,
        vo = t;
        var a = e._gsap, l = a.get, u = t.duration, f = di(u), h = t.preventOvershoot || f && u.overshoot === 0, d = zs(t, "resistance", yo.resistance), c = Do(u) ? u : Bg(e, t, f && u.max || 10, f && u.min || .2, f && "overshoot"in u ? +u.overshoot : h ? 0 : 1, !0), p, g, _, v, y, m, b, w, T;
        t = vo,
        vo = 0,
        T = Lh(e, t, l, d);
        for (p in t)
            Ah[p] || (g = t[p],
            pl(g) && (g = g(i, e, n)),
            Do(g) ? y = g : di(g) && !isNaN(g.velocity) ? y = +g.velocity : s && s.isTracking(p) ? y = s.get(p) : console.warn("ERROR: No velocity was defined for " + e + " property: " + p),
            m = Gl(y, c),
            w = 0,
            _ = l(e, p),
            v = Th(_),
            _ = parseFloat(_),
            di(g) && (b = _ + m,
            "end"in g && (g = Dh(g, T && p in T ? T : b, g.max, g.min, p, t.radius, y)),
            "max"in g && +g.max < b ? h || g.preventOvershoot ? m = g.max - _ : w = g.max - _ - m : "min"in g && +g.min > b && (h || g.preventOvershoot ? m = g.min - _ : w = g.min - _ - m)),
            this._props.push(p),
            this.styles && this.styles.save(p),
            this._pt = new Sh(this._pt,e,p,_,0,Fg,0,a.set(e, p, this)),
            this._pt.u = v || 0,
            this._pt.c1 = m,
            this._pt.c2 = w);
        return r.duration(c),
        Rg
    },
    render: function(e, t) {
        var r = t._pt;
        if (e = hl(t.tween._time / t.tween._dur),
        e || !Mh())
            for (; r; )
                r.set(r.t, r.p, Ng(r.s + r.c1 * e + r.c2 * e * e) + r.u, r.d, e),
                r = r._next;
        else
            t.styles.revert()
    }
};
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(o) {
    return Wl[o] = Fo[o]
});
Eh() && ct.registerPlugin(Wl);
function cc(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(o, r.key, r)
    }
}
function zg(o, e, t) {
    return e && cc(o.prototype, e),
    t && cc(o, t),
    o
}
/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ee, es, Lt, _n, to, Mr, Ei, fc, ve, Cr, ts, hc, dc, pc, gc, Rh = function() {
    return typeof window < "u"
}, Fh = function() {
    return Ee || Rh() && (Ee = window.gsap) && Ee.registerPlugin && Ee
}, Yg = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Xg = function(e, t) {
    var r = e.parentNode || to, i = e.getBoundingClientRect(), n = r.getBoundingClientRect(), s = n.top - i.top, a = n.bottom - i.bottom, l = (Math.abs(s) > Math.abs(a) ? s : a) / (1 - t), u = -l * t, f, h;
    return l > 0 && (f = n.height / (Lt.innerHeight + n.height),
    h = f === .5 ? n.height * 2 : Math.min(n.height, -l * f / (2 * f - 1)) * 2 * (t || 1),
    u += t ? -h * t : -h / 2,
    l += h),
    {
        change: l,
        offset: u
    }
}, Vg = function(e) {
    var t = _n.querySelector(".ScrollSmoother-wrapper");
    return t || (t = _n.createElement("div"),
    t.classList.add("ScrollSmoother-wrapper"),
    e.parentNode.insertBefore(t, e),
    t.appendChild(e)),
    t
}, yi = function() {
    function o(e) {
        var t = this;
        es || o.register(Ee) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        e = this.vars = e || {},
        Cr && Cr.kill(),
        Cr = this,
        pc(this);
        var r = e, i = r.smoothTouch, n = r.onUpdate, s = r.onStop, a = r.smooth, l = r.onFocusIn, u = r.normalizeScroll, f, h, d, c, p, g, _, v, y, m, b, w, T, k = this, S = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
            return ve.isRefreshing || gc.restart(!0)
        }
        ), C = e.effectsPrefix || "", B = ve.getScrollFunc(Lt), $ = ve.isTouch === 1 ? i === !0 ? .8 : parseFloat(i) || 0 : a === 0 || a === !1 ? 0 : parseFloat(a) || .8, M = 0, E = 0, F = 1, Y = hc(0), R = function() {
            return Y.update(-M)
        }, V = {
            y: 0
        }, H = function() {
            return f.style.overflow = "visible"
        }, ne, O = function(L) {
            L.update();
            var j = L.getTween();
            j && (j.pause(),
            j._time = j._dur,
            j._tTime = j._tDur),
            ne = !1,
            L.animation.progress(L.progress, !0)
        }, G = function(L, j) {
            (L !== M && !m || j) && ($ && (f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + L + ", 0, 1)",
            f._gsap.y = L + "px"),
            E = L - M,
            M = L,
            ve.isUpdating || ve.update())
        }, ee = function(L) {
            return arguments.length ? (L < 0 && (L = 0),
            V.y = -L,
            ne = !0,
            m ? M = -L : G(-L),
            ve.isRefreshing ? c.update() : B(L),
            this) : -M
        }, re, le = function(L) {
            h.scrollTop = 0,
            !(L.target.contains && L.target.contains(h) || l && l(t, L) === !1) && (ve.isInViewport(L.target) || L.target === re || t.scrollTo(L.target, !1, "center center"),
            re = L.target)
        }, De = function(L, j) {
            var D, Q, ie, Ne;
            p.forEach(function(he) {
                D = he.pins,
                Ne = he.markers,
                L.forEach(function(oe) {
                    he.trigger && oe.trigger && he !== oe && (oe.trigger === he.trigger || oe.pinnedContainer === he.trigger || he.trigger.contains(oe.trigger)) && (Q = oe.start,
                    ie = (Q - he.start - he.offset) / he.ratio - (Q - he.start),
                    D.forEach(function(Ce) {
                        return ie -= Ce.distance / he.ratio - Ce.distance
                    }),
                    oe.setPositions(Q + ie, oe.end + ie),
                    oe.markerStart && Ne.push(Ee.quickSetter([oe.markerStart, oe.markerEnd], "y", "px")),
                    oe.pin && oe.end > 0 && (ie = oe.end - oe.start,
                    D.push({
                        start: oe.start,
                        end: oe.end,
                        distance: ie,
                        trig: oe
                    }),
                    he.setPositions(he.start, he.end + ie),
                    he.vars.onRefresh(he)))
                })
            })
        }, fe = function() {
            H(),
            requestAnimationFrame(H),
            p && (p.forEach(function(L) {
                var j = L.start
                  , D = L.auto ? Math.min(ve.maxScroll(L.scroller), L.end) : j + (L.end - j) / L.ratio
                  , Q = (D - L.end) / 2;
                j -= Q,
                D -= Q,
                L.offset = Q || 1e-4,
                L.pins.length = 0,
                L.setPositions(Math.min(j, D), Math.max(j, D)),
                L.vars.onRefresh(L)
            }),
            De(ve.sort())),
            Y.reset()
        }, Ae = function() {
            return ve.addEventListener("refresh", fe)
        }, _e = function() {
            return p && p.forEach(function(L) {
                return L.vars.onRefresh(L)
            })
        }, qt = function() {
            return p && p.forEach(function(L) {
                return L.vars.onRefreshInit(L)
            }),
            _e
        }, de = function(L, j, D, Q) {
            return function() {
                var ie = typeof j == "function" ? j(D, Q) : j;
                return ie || ie === 0 || (ie = Q.getAttribute("data-" + C + L) || (L === "speed" ? 1 : 0)),
                Q.setAttribute("data-" + C + L, ie),
                ie === "auto" ? ie : parseFloat(ie)
            }
        }, Ge = function(L, j, D, Q) {
            var ie = de("speed", j, Q, L), Ne = de("lag", D, Q, L), he = Ee.getProperty(L, "y"), oe = L._gsap, Ce, Ie, st, ce, Xe, qe, Pr = function() {
                j = ie(),
                D = Ne(),
                Ce = parseFloat(j) || 1,
                st = j === "auto",
                Xe = st ? 0 : .5,
                ce && ce.kill(),
                ce = D && Ee.to(L, {
                    ease: ts,
                    overwrite: !1,
                    y: "+=0",
                    duration: D
                }),
                Ie && (Ie.ratio = Ce,
                Ie.autoSpeed = st)
            }, We = function() {
                oe.y = he + "px",
                oe.renderTransform(1),
                Pr()
            }, _t = [], _r = [], dt = 0, Ht = function(te) {
                if (st) {
                    We();
                    var je = Xg(L, fc(0, 1, -te.start / (te.end - te.start)));
                    dt = je.change,
                    qe = je.offset
                } else
                    dt = (te.end - te.start) * (1 - Ce),
                    qe = 0;
                _t.forEach(function(Ve) {
                    return dt -= Ve.distance * (1 - Ce)
                }),
                te.vars.onUpdate(te),
                ce && ce.progress(1)
            };
            return Pr(),
            (Ce !== 1 || st || ce) && (Ie = ve.create({
                trigger: st ? L.parentNode : L,
                scroller: h,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: We,
                onRefresh: Ht,
                onKill: function(te) {
                    var je = p.indexOf(te);
                    je >= 0 && p.splice(je, 1),
                    We()
                },
                onUpdate: function(te) {
                    var je = he + dt * (te.progress - Xe), Ve = _t.length, He = 0, $e, Le, bt;
                    if (te.offset) {
                        if (Ve) {
                            for (Le = -M,
                            bt = te.end; Ve--; ) {
                                if ($e = _t[Ve],
                                $e.trig.isActive || Le >= $e.start && Le <= $e.end) {
                                    ce && ($e.trig.progress += $e.trig.direction < 0 ? .001 : -.001,
                                    $e.trig.update(0, 0, 1),
                                    ce.resetTo("y", parseFloat(oe.y), -E, !0),
                                    F && ce.progress(1));
                                    return
                                }
                                Le > $e.end && (He += $e.distance),
                                bt -= $e.distance
                            }
                            je = he + He + dt * ((Ee.utils.clamp(te.start, te.end, Le) - te.start - He) / (bt - te.start) - Xe)
                        }
                        je = Yg(je + qe),
                        _r.length && !st && _r.forEach(function(mr) {
                            return mr(je - He)
                        }),
                        ce ? (ce.resetTo("y", je, -E, !0),
                        F && ce.progress(1)) : (oe.y = je + "px",
                        oe.renderTransform(1))
                    }
                }
            }),
            Ht(Ie),
            Ee.core.getCache(Ie.trigger).stRevert = qt,
            Ie.startY = he,
            Ie.pins = _t,
            Ie.markers = _r,
            Ie.ratio = Ce,
            Ie.autoSpeed = st,
            L.style.willChange = "transform"),
            Ie
        };
        Ae(),
        ve.addEventListener("killAll", Ae),
        Ee.delayedCall(.5, function() {
            return F = 0
        }),
        this.scrollTop = ee,
        this.scrollTo = function(X, L, j) {
            var D = Ee.utils.clamp(0, ve.maxScroll(Lt), isNaN(X) ? t.offset(X, j) : +X);
            L ? m ? Ee.to(t, {
                duration: $,
                scrollTop: D,
                overwrite: "auto",
                ease: ts
            }) : B(D) : ee(D)
        }
        ,
        this.offset = function(X, L) {
            X = Ei(X)[0];
            var j = X.style.cssText, D = ve.create({
                trigger: X,
                start: L || "top top"
            }), Q;
            return p && De([D]),
            Q = D.start,
            D.kill(!1),
            X.style.cssText = j,
            Ee.core.getCache(X).uncache = 1,
            Q
        }
        ;
        function ue() {
            return d = f.clientHeight,
            f.style.overflow = "visible",
            Mr.style.height = d + "px",
            d - Lt.innerHeight
        }
        this.content = function(X) {
            if (arguments.length) {
                var L = Ei(X || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Mr.children[0];
                return L !== f && (f = L,
                y = f.getAttribute("style") || "",
                S && S.observe(f),
                Ee.set(f, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                $ || Ee.set(f, {
                    clearProps: "transform"
                })),
                this
            }
            return f
        }
        ,
        this.wrapper = function(X) {
            return arguments.length ? (h = Ei(X || "#smooth-wrapper")[0] || Vg(f),
            v = h.getAttribute("style") || "",
            ue(),
            Ee.set(h, $ ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : h
        }
        ,
        this.effects = function(X, L) {
            var j;
            if (p || (p = []),
            !X)
                return p.slice(0);
            X = Ei(X),
            X.forEach(function(Ce) {
                for (var Ie = p.length; Ie--; )
                    p[Ie].trigger === Ce && p[Ie].kill()
            }),
            L = L || {};
            var D = L, Q = D.speed, ie = D.lag, Ne = [], he, oe;
            for (he = 0; he < X.length; he++)
                oe = Ge(X[he], Q, ie, he),
                oe && Ne.push(oe);
            return (j = p).push.apply(j, Ne),
            Ne
        }
        ,
        this.sections = function(X, L) {
            var j;
            if (g || (g = []),
            !X)
                return g.slice(0);
            var D = Ei(X).map(function(Q) {
                return ve.create({
                    trigger: Q,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function(Ne) {
                        Q.style.opacity = Ne.isActive ? "1" : "0",
                        Q.style.pointerEvents = Ne.isActive ? "all" : "none"
                    }
                })
            });
            return L && L.add ? (j = g).push.apply(j, D) : g = D.slice(0),
            D
        }
        ,
        this.content(e.content),
        this.wrapper(e.wrapper),
        this.render = function(X) {
            return G(X || X === 0 ? X : M)
        }
        ,
        this.getVelocity = function() {
            return Y.getVelocity(-M)
        }
        ,
        ve.scrollerProxy(h, {
            scrollTop: ee,
            scrollHeight: function() {
                return ue() && Mr.scrollHeight
            },
            fixedMarkers: e.fixedMarkers !== !1 && !!$,
            content: f,
            getBoundingClientRect: function() {
                return {
                    top: 0,
                    left: 0,
                    width: Lt.innerWidth,
                    height: Lt.innerHeight
                }
            }
        }),
        ve.defaults({
            scroller: h
        });
        var Ye = ve.getAll().filter(function(X) {
            return X.scroller === Lt || X.scroller === h
        });
        Ye.forEach(function(X) {
            return X.revert(!0)
        }),
        c = ve.create({
            animation: Ee.fromTo(V, {
                y: 0
            }, {
                y: function() {
                    return -ue()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    if (this._dur) {
                        var L = ne;
                        L && (O(c),
                        V.y = M),
                        G(V.y, L),
                        R(),
                        n && !m && n(k)
                    }
                }
            }),
            onRefreshInit: function(L) {
                if (p) {
                    var j = ve.getAll().filter(function(Q) {
                        return !!Q.pin
                    });
                    p.forEach(function(Q) {
                        Q.vars.pinnedContainer || j.forEach(function(ie) {
                            if (ie.pin.contains(Q.trigger)) {
                                var Ne = Q.vars;
                                Ne.pinnedContainer = ie.pin,
                                Q.vars = null,
                                Q.init(Ne, Q.animation)
                            }
                        })
                    })
                }
                var D = L.getTween();
                T = D && D._end > D._dp._time,
                w = M,
                V.y = 0,
                $ && (h.style.pointerEvents = "none",
                h.scrollTop = 0,
                setTimeout(function() {
                    return h.style.removeProperty("pointer-events")
                }, 50))
            },
            onRefresh: function(L) {
                L.animation.invalidate(),
                L.setPositions(L.start, ue()),
                T || O(L),
                V.y = -B(),
                G(V.y),
                F || L.animation.progress(Ee.utils.clamp(0, 1, w / -L.end)),
                T && (L.progress -= .001,
                L.update())
            },
            id: "ScrollSmoother",
            scroller: Lt,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: ue,
            onScrubComplete: function() {
                Y.reset(),
                s && s(t)
            },
            scrub: $ || !0
        }),
        this.smooth = function(X) {
            return arguments.length && ($ = X || 0),
            arguments.length ? c.scrubDuration(X) : c.getTween() ? c.getTween().duration() : 0
        }
        ,
        c.getTween() && (c.getTween().vars.ease = e.ease || ts),
        this.scrollTrigger = c,
        e.effects && this.effects(e.effects === !0 ? "[data-" + C + "speed], [data-" + C + "lag]" : e.effects, {}),
        e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections),
        Ye.forEach(function(X) {
            X.vars.scroller = h,
            X.init(X.vars, X.animation)
        }),
        this.paused = function(X, L) {
            return arguments.length ? (!!m !== X && (X ? (c.getTween() && c.getTween().pause(),
            B(-M),
            Y.reset(),
            b = ve.normalizeScroll(),
            b && b.disable(),
            m = ve.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function() {
                    return ee(-M)
                }
            }),
            m.nested = dc(to, "wheel,touch,scroll", !0, L !== !1)) : (m.nested.kill(),
            m.kill(),
            m = 0,
            b && b.enable(),
            c.progress = (-M - c.start) / (c.end - c.start),
            O(c))),
            this) : !!m
        }
        ,
        this.kill = this.revert = function() {
            t.paused(!1),
            O(c),
            c.kill();
            for (var X = (p || []).concat(g || []), L = X.length; L--; )
                X[L].kill();
            ve.scrollerProxy(h),
            ve.removeEventListener("killAll", Ae),
            ve.removeEventListener("refresh", fe),
            h.style.cssText = v,
            f.style.cssText = y;
            var j = ve.defaults({});
            j && j.scroller === h && ve.defaults({
                scroller: Lt
            }),
            t.normalizer && ve.normalizeScroll(!1),
            clearInterval(_),
            Cr = null,
            S && S.disconnect(),
            Mr.style.removeProperty("height"),
            Lt.removeEventListener("focusin", le)
        }
        ,
        this.refresh = function(X, L) {
            return c.refresh(X, L)
        }
        ,
        u && (this.normalizer = ve.normalizeScroll(u === !0 ? {
            debounce: !0,
            content: !$ && f
        } : u)),
        ve.config(e),
        "overscrollBehavior"in Lt.getComputedStyle(Mr) && Ee.set([Mr, to], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in Lt.getComputedStyle(Mr) && Ee.set([Mr, to], {
            scrollBehavior: "auto"
        }),
        Lt.addEventListener("focusin", le),
        _ = setInterval(R, 250),
        _n.readyState === "loading" || requestAnimationFrame(function() {
            return ve.refresh()
        })
    }
    return o.register = function(t) {
        return es || (Ee = t || Fh(),
        Rh() && window.document && (Lt = window,
        _n = document,
        to = _n.documentElement,
        Mr = _n.body),
        Ee && (Ei = Ee.utils.toArray,
        fc = Ee.utils.clamp,
        ts = Ee.parseEase("expo"),
        pc = Ee.core.context || function() {}
        ,
        gc = Ee.delayedCall(.2, function() {
            return ve.isRefreshing || Cr && Cr.refresh()
        }).pause(),
        ve = Ee.core.globals().ScrollTrigger,
        Ee.core.globals("ScrollSmoother", o),
        Mr && ve && (hc = ve.core._getVelocityProp,
        dc = ve.core._inputObserver,
        o.refresh = ve.refresh,
        es = 1))),
        es
    }
    ,
    zg(o, [{
        key: "progress",
        get: function() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    o
}();
yi.version = "3.11.3";
yi.create = function(o) {
    return Cr && o && Cr.content() === Ei(o.content)[0] ? Cr : new yi(o)
}
;
yi.get = function() {
    return Cr
}
;
Fh() && Ee.registerPlugin(yi);
J.registerPlugin(tt);
class qg extends Vt {
    init() {
        this.wrapper = this.block.querySelector(".showcase__wrap"),
        this.items = this.wrapper.querySelectorAll(".showcase__item"),
        this.titles = this.wrapper.querySelectorAll(".showcase__titles p"),
        this.titleLinks = this.wrapper.querySelectorAll(".showcase__titles a"),
        this.tools = this.wrapper.querySelectorAll(".showcase__tools p"),
        this.videos = this.wrapper.querySelectorAll(".showcase__video"),
        this.previous = this.block.querySelector(".button.prev"),
        this.next = this.block.querySelector(".button.next"),
        this.loopItems = this.loopItems.bind(this),
        this.loop = this.loopItems()
    }
    initEvents() {
        const e = "is-moving";
        this.previous.addEventListener("click", this.loop.previous),
        this.next.addEventListener("click", this.loop.next),
        tt.create({
            target: this.wrapper,
            type: "touch,pointer",
            dragMinimum: 10,
            onPress: () => {
                this.wrapper.classList.add(e)
            }
            ,
            onRelease: () => {
                this.wrapper.classList.remove(e)
            }
            ,
            onLeft: () => {
                this.loop.next()
            }
            ,
            onRight: () => {
                this.loop.previous()
            }
        }),
        ge.create({
            trigger: this.wrapper,
            start: "top bottom",
            end: "bottom top",
            once: !0,
            onEnter: () => {
                this.videos[1].play()
            }
        })
    }
    loopItems() {
        const e = J.utils.toArray(this.items);
        let t = J.timeline({
            paused: !0,
            draggable: !0,
            defaults: {
                ease: "none"
            },
            onReverseComplete: () => t.totalTime(t.rawTime() + t.duration() * 100)
        }), r = e.length, i = e[0].offsetLeft, n = [], s = [], a = [], l = 0, u = 1e3, f = J.utils.snap(1), h = () => e.forEach( (w, T) => {
            s[T] = parseFloat(J.getProperty(w, "width", "px")),
            a[T] = f(parseFloat(J.getProperty(w, "x", "px")) / s[T] * 100 + J.getProperty(w, "xPercent"))
        }
        ), d = () => e[r - 1].offsetLeft + a[r - 1] / 100 * s[r - 1] - i + e[r - 1].offsetWidth * J.getProperty(e[r - 1], "scaleX"), c, p, g, _, v, y;
        for (h(),
        J.set(e, {
            xPercent: w => a[w]
        }),
        J.set(e, {
            x: 0
        }),
        c = d(),
        y = 0; y < r; y++)
            v = e[y],
            p = a[y] / 100 * s[y],
            g = v.offsetLeft + p - i,
            _ = g + s[y] * J.getProperty(v, "scaleX"),
            t.to(v, {
                xPercent: f((p - _) / s[y] * 100),
                duration: _ / u
            }, 0).fromTo(v, {
                xPercent: f((p - _ + c) / s[y] * 100)
            }, {
                xPercent: a[y],
                duration: (p - _ + c - p) / u,
                immediateRender: !1
            }, _ / u).add("label" + y, g / u),
            n[y] = g / u;
        const m = w => {
            e.forEach(k => k.classList.remove("showcase__item--active")),
            this.titles.forEach(k => k.classList.remove("active")),
            this.titleLinks.forEach(k => {
                k.setAttribute("tabindex", "-1"),
                k.setAttribute("aria-hidden", "true")
            }
            ),
            this.tools.forEach(k => {
                k.setAttribute("tabindex", "-1"),
                k.setAttribute("aria-hidden", "true")
            }
            ),
            this.tools.forEach(k => k.classList.remove("active")),
            this.videos.forEach(k => k.pause());
            let T = J.utils.wrap(0, e.length);
            e[T(w)].classList.add("showcase__item--active"),
            this.titles[T(w)].classList.add("active"),
            this.titleLinks[T(w)].removeAttribute("tabindex"),
            this.titleLinks[T(w)].removeAttribute("aria-hidden"),
            this.tools[T(w)].removeAttribute("tabindex"),
            this.tools[T(w)].removeAttribute("aria-hidden"),
            this.tools[T(w)].classList.add("active"),
            this.videos[T(w)].play()
        }
          , b = w => {
            const T = {
                duration: .8,
                ease: "back.out(.95)"
            };
            Math.abs(w - l) > r / 2 && (w += w > l ? -r : r);
            let k = J.utils.wrap(0, r, w)
              , S = n[k];
            return S > t.time() != w > l && (T.modifiers = {
                time: J.utils.wrap(0, t.duration())
            },
            S += t.duration() * (w > l ? 1 : -1)),
            l = k,
            T.overwrite = !0,
            t.tweenTo(S, T)
        }
        ;
        return t.next = () => {
            this.animating || (this.animating = !0,
            this.timeout = setTimeout( () => {
                this.animating = !1
            }
            , 800),
            b(l + 1) && m(l + 1))
        }
        ,
        t.previous = () => {
            this.animating || (this.animating = !0,
            this.timeout = setTimeout( () => {
                this.animating = !1
            }
            , 800),
            b(l - 1) && m(l + 1))
        }
        ,
        t.toIndex = w => b(w),
        t.updateIndex = () => l = Math.round(t.progress() * e.length),
        t.times = n,
        t.progress(1, !0).progress(0, !0),
        t
    }
}
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _c(o, e) {
    var t = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(o);
        e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(o, i).enumerable
        })),
        t.push.apply(t, r)
    }
    return t
}
function mc(o) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? _c(Object(t), !0).forEach(function(r) {
            vs(o, r, t[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(t)) : _c(Object(t)).forEach(function(r) {
            Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(t, r))
        })
    }
    return o
}
function Mt() {
    Mt = function() {
        return o
    }
    ;
    var o = {}
      , e = Object.prototype
      , t = e.hasOwnProperty
      , r = Object.defineProperty || function(M, E, F) {
        M[E] = F.value
    }
      , i = typeof Symbol == "function" ? Symbol : {}
      , n = i.iterator || "@@iterator"
      , s = i.asyncIterator || "@@asyncIterator"
      , a = i.toStringTag || "@@toStringTag";
    function l(M, E, F) {
        return Object.defineProperty(M, E, {
            value: F,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        M[E]
    }
    try {
        l({}, "")
    } catch {
        l = function(E, F, Y) {
            return E[F] = Y
        }
    }
    function u(M, E, F, Y) {
        var R = E && E.prototype instanceof d ? E : d
          , V = Object.create(R.prototype)
          , H = new C(Y || []);
        return r(V, "_invoke", {
            value: w(M, F, H)
        }),
        V
    }
    function f(M, E, F) {
        try {
            return {
                type: "normal",
                arg: M.call(E, F)
            }
        } catch (Y) {
            return {
                type: "throw",
                arg: Y
            }
        }
    }
    o.wrap = u;
    var h = {};
    function d() {}
    function c() {}
    function p() {}
    var g = {};
    l(g, n, function() {
        return this
    });
    var _ = Object.getPrototypeOf
      , v = _ && _(_(B([])));
    v && v !== e && t.call(v, n) && (g = v);
    var y = p.prototype = d.prototype = Object.create(g);
    function m(M) {
        ["next", "throw", "return"].forEach(function(E) {
            l(M, E, function(F) {
                return this._invoke(E, F)
            })
        })
    }
    function b(M, E) {
        function F(R, V, H, ne) {
            var O = f(M[R], M, V);
            if (O.type !== "throw") {
                var G = O.arg
                  , ee = G.value;
                return ee && typeof ee == "object" && t.call(ee, "__await") ? E.resolve(ee.__await).then(function(re) {
                    F("next", re, H, ne)
                }, function(re) {
                    F("throw", re, H, ne)
                }) : E.resolve(ee).then(function(re) {
                    G.value = re,
                    H(G)
                }, function(re) {
                    return F("throw", re, H, ne)
                })
            }
            ne(O.arg)
        }
        var Y;
        r(this, "_invoke", {
            value: function(R, V) {
                function H() {
                    return new E(function(ne, O) {
                        F(R, V, ne, O)
                    }
                    )
                }
                return Y = Y ? Y.then(H, H) : H()
            }
        })
    }
    function w(M, E, F) {
        var Y = "suspendedStart";
        return function(R, V) {
            if (Y === "executing")
                throw new Error("Generator is already running");
            if (Y === "completed") {
                if (R === "throw")
                    throw V;
                return $()
            }
            for (F.method = R,
            F.arg = V; ; ) {
                var H = F.delegate;
                if (H) {
                    var ne = T(H, F);
                    if (ne) {
                        if (ne === h)
                            continue;
                        return ne
                    }
                }
                if (F.method === "next")
                    F.sent = F._sent = F.arg;
                else if (F.method === "throw") {
                    if (Y === "suspendedStart")
                        throw Y = "completed",
                        F.arg;
                    F.dispatchException(F.arg)
                } else
                    F.method === "return" && F.abrupt("return", F.arg);
                Y = "executing";
                var O = f(M, E, F);
                if (O.type === "normal") {
                    if (Y = F.done ? "completed" : "suspendedYield",
                    O.arg === h)
                        continue;
                    return {
                        value: O.arg,
                        done: F.done
                    }
                }
                O.type === "throw" && (Y = "completed",
                F.method = "throw",
                F.arg = O.arg)
            }
        }
    }
    function T(M, E) {
        var F = E.method
          , Y = M.iterator[F];
        if (Y === void 0)
            return E.delegate = null,
            F === "throw" && M.iterator.return && (E.method = "return",
            E.arg = void 0,
            T(M, E),
            E.method === "throw") || F !== "return" && (E.method = "throw",
            E.arg = new TypeError("The iterator does not provide a '" + F + "' method")),
            h;
        var R = f(Y, M.iterator, E.arg);
        if (R.type === "throw")
            return E.method = "throw",
            E.arg = R.arg,
            E.delegate = null,
            h;
        var V = R.arg;
        return V ? V.done ? (E[M.resultName] = V.value,
        E.next = M.nextLoc,
        E.method !== "return" && (E.method = "next",
        E.arg = void 0),
        E.delegate = null,
        h) : V : (E.method = "throw",
        E.arg = new TypeError("iterator result is not an object"),
        E.delegate = null,
        h)
    }
    function k(M) {
        var E = {
            tryLoc: M[0]
        };
        1 in M && (E.catchLoc = M[1]),
        2 in M && (E.finallyLoc = M[2],
        E.afterLoc = M[3]),
        this.tryEntries.push(E)
    }
    function S(M) {
        var E = M.completion || {};
        E.type = "normal",
        delete E.arg,
        M.completion = E
    }
    function C(M) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        M.forEach(k, this),
        this.reset(!0)
    }
    function B(M) {
        if (M) {
            var E = M[n];
            if (E)
                return E.call(M);
            if (typeof M.next == "function")
                return M;
            if (!isNaN(M.length)) {
                var F = -1
                  , Y = function R() {
                    for (; ++F < M.length; )
                        if (t.call(M, F))
                            return R.value = M[F],
                            R.done = !1,
                            R;
                    return R.value = void 0,
                    R.done = !0,
                    R
                };
                return Y.next = Y
            }
        }
        return {
            next: $
        }
    }
    function $() {
        return {
            value: void 0,
            done: !0
        }
    }
    return c.prototype = p,
    r(y, "constructor", {
        value: p,
        configurable: !0
    }),
    r(p, "constructor", {
        value: c,
        configurable: !0
    }),
    c.displayName = l(p, a, "GeneratorFunction"),
    o.isGeneratorFunction = function(M) {
        var E = typeof M == "function" && M.constructor;
        return !!E && (E === c || (E.displayName || E.name) === "GeneratorFunction")
    }
    ,
    o.mark = function(M) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(M, p) : (M.__proto__ = p,
        l(M, a, "GeneratorFunction")),
        M.prototype = Object.create(y),
        M
    }
    ,
    o.awrap = function(M) {
        return {
            __await: M
        }
    }
    ,
    m(b.prototype),
    l(b.prototype, s, function() {
        return this
    }),
    o.AsyncIterator = b,
    o.async = function(M, E, F, Y, R) {
        R === void 0 && (R = Promise);
        var V = new b(u(M, E, F, Y),R);
        return o.isGeneratorFunction(E) ? V : V.next().then(function(H) {
            return H.done ? H.value : V.next()
        })
    }
    ,
    m(y),
    l(y, a, "Generator"),
    l(y, n, function() {
        return this
    }),
    l(y, "toString", function() {
        return "[object Generator]"
    }),
    o.keys = function(M) {
        var E = Object(M)
          , F = [];
        for (var Y in E)
            F.push(Y);
        return F.reverse(),
        function R() {
            for (; F.length; ) {
                var V = F.pop();
                if (V in E)
                    return R.value = V,
                    R.done = !1,
                    R
            }
            return R.done = !0,
            R
        }
    }
    ,
    o.values = B,
    C.prototype = {
        constructor: C,
        reset: function(M) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = void 0,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = void 0,
            this.tryEntries.forEach(S),
            !M)
                for (var E in this)
                    E.charAt(0) === "t" && t.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = void 0)
        },
        stop: function() {
            this.done = !0;
            var M = this.tryEntries[0].completion;
            if (M.type === "throw")
                throw M.arg;
            return this.rval
        },
        dispatchException: function(M) {
            if (this.done)
                throw M;
            var E = this;
            function F(O, G) {
                return V.type = "throw",
                V.arg = M,
                E.next = O,
                G && (E.method = "next",
                E.arg = void 0),
                !!G
            }
            for (var Y = this.tryEntries.length - 1; Y >= 0; --Y) {
                var R = this.tryEntries[Y]
                  , V = R.completion;
                if (R.tryLoc === "root")
                    return F("end");
                if (R.tryLoc <= this.prev) {
                    var H = t.call(R, "catchLoc")
                      , ne = t.call(R, "finallyLoc");
                    if (H && ne) {
                        if (this.prev < R.catchLoc)
                            return F(R.catchLoc, !0);
                        if (this.prev < R.finallyLoc)
                            return F(R.finallyLoc)
                    } else if (H) {
                        if (this.prev < R.catchLoc)
                            return F(R.catchLoc, !0)
                    } else {
                        if (!ne)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < R.finallyLoc)
                            return F(R.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(M, E) {
            for (var F = this.tryEntries.length - 1; F >= 0; --F) {
                var Y = this.tryEntries[F];
                if (Y.tryLoc <= this.prev && t.call(Y, "finallyLoc") && this.prev < Y.finallyLoc) {
                    var R = Y;
                    break
                }
            }
            R && (M === "break" || M === "continue") && R.tryLoc <= E && E <= R.finallyLoc && (R = null);
            var V = R ? R.completion : {};
            return V.type = M,
            V.arg = E,
            R ? (this.method = "next",
            this.next = R.finallyLoc,
            h) : this.complete(V)
        },
        complete: function(M, E) {
            if (M.type === "throw")
                throw M.arg;
            return M.type === "break" || M.type === "continue" ? this.next = M.arg : M.type === "return" ? (this.rval = this.arg = M.arg,
            this.method = "return",
            this.next = "end") : M.type === "normal" && E && (this.next = E),
            h
        },
        finish: function(M) {
            for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                var F = this.tryEntries[E];
                if (F.finallyLoc === M)
                    return this.complete(F.completion, F.afterLoc),
                    S(F),
                    h
            }
        },
        catch: function(M) {
            for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                var F = this.tryEntries[E];
                if (F.tryLoc === M) {
                    var Y = F.completion;
                    if (Y.type === "throw") {
                        var R = Y.arg;
                        S(F)
                    }
                    return R
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(M, E, F) {
            return this.delegate = {
                iterator: B(M),
                resultName: E,
                nextLoc: F
            },
            this.method === "next" && (this.arg = void 0),
            h
        }
    },
    o
}
function yc(o, e, t, r, i, n, s) {
    try {
        var a = o[n](s)
          , l = a.value
    } catch (u) {
        t(u);
        return
    }
    a.done ? e(l) : Promise.resolve(l).then(r, i)
}
function Oi(o) {
    return function() {
        var e = this
          , t = arguments;
        return new Promise(function(r, i) {
            var n = o.apply(e, t);
            function s(l) {
                yc(n, r, i, s, a, "next", l)
            }
            function a(l) {
                yc(n, r, i, s, a, "throw", l)
            }
            s(void 0)
        }
        )
    }
}
function Nh(o, e) {
    if (!(o instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function vc(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(o, Bh(r.key), r)
    }
}
function Ih(o, e, t) {
    return e && vc(o.prototype, e),
    t && vc(o, t),
    Object.defineProperty(o, "prototype", {
        writable: !1
    }),
    o
}
function vs(o, e, t) {
    return e = Bh(e),
    e in o ? Object.defineProperty(o, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = t,
    o
}
function Hg(o, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: o,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(o, "prototype", {
        writable: !1
    }),
    e && Lo(o, e)
}
function Ao(o) {
    return Ao = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }
    ,
    Ao(o)
}
function Lo(o, e) {
    return Lo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    Lo(o, e)
}
function $h() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function ws(o, e, t) {
    return $h() ? ws = Reflect.construct.bind() : ws = function(i, n, s) {
        var a = [null];
        a.push.apply(a, n);
        var l = Function.bind.apply(i, a)
          , u = new l;
        return s && Lo(u, s.prototype),
        u
    }
    ,
    ws.apply(null, arguments)
}
function Gg(o) {
    return Function.toString.call(o).indexOf("[native code]") !== -1
}
function gl(o) {
    var e = typeof Map == "function" ? new Map : void 0;
    return gl = function(r) {
        if (r === null || !Gg(r))
            return r;
        if (typeof r != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (typeof e < "u") {
            if (e.has(r))
                return e.get(r);
            e.set(r, i)
        }
        function i() {
            return ws(r, arguments, Ao(this).constructor)
        }
        return i.prototype = Object.create(r.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        Lo(i, r)
    }
    ,
    gl(o)
}
function bs(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function Wg(o, e) {
    if (e && (typeof e == "object" || typeof e == "function"))
        return e;
    if (e !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return bs(o)
}
function jg(o) {
    var e = $h();
    return function() {
        var r = Ao(o), i;
        if (e) {
            var n = Ao(this).constructor;
            i = Reflect.construct(r, arguments, n)
        } else
            i = r.apply(this, arguments);
        return Wg(this, i)
    }
}
function Ug(o, e) {
    if (typeof o != "object" || o === null)
        return o;
    var t = o[Symbol.toPrimitive];
    if (t !== void 0) {
        var r = t.call(o, e || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(o)
}
function Bh(o) {
    var e = Ug(o, "string");
    return typeof e == "symbol" ? e : String(e)
}
var zh = typeof global < "u" && {}.toString.call(global) === "[object global]";
function wc(o, e) {
    return o.indexOf(e.toLowerCase()) === 0 ? o : "".concat(e.toLowerCase()).concat(o.substr(0, 1).toUpperCase()).concat(o.substr(1))
}
function Kg(o) {
    return !!(o && o.nodeType === 1 && "nodeName"in o && o.ownerDocument && o.ownerDocument.defaultView)
}
function Qg(o) {
    return !isNaN(parseFloat(o)) && isFinite(o) && Math.floor(o) == o
}
function Ki(o) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(o)
}
function Yh(o) {
    var e = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return e.test(o)
}
function Xh() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , e = o.id
      , t = o.url
      , r = e || t;
    if (!r)
        throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (Qg(r))
        return "https://vimeo.com/".concat(r);
    if (Ki(r))
        return r.replace("http:", "https:");
    throw e ? new TypeError("“".concat(e, "” is not a valid video id.")) : new TypeError("“".concat(r, "” is not a vimeo.com url."))
}
var bc = function(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener"
      , n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener"
      , s = typeof t == "string" ? [t] : t;
    return s.forEach(function(a) {
        e[i](a, r)
    }),
    {
        cancel: function() {
            return s.forEach(function(l) {
                return e[n](l, r)
            })
        }
    }
}
  , Zg = typeof Array.prototype.indexOf < "u"
  , Jg = typeof window < "u" && typeof window.postMessage < "u";
if (!zh && (!Zg || !Jg))
    throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var Mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function e0(o, e) {
    return e = {
        exports: {}
    },
    o(e, e.exports),
    e.exports
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function(o) {
    if (o.WeakMap)
        return;
    var e = Object.prototype.hasOwnProperty
      , t = Object.defineProperty && function() {
        try {
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1
        } catch {}
    }()
      , r = function(n, s, a) {
        t ? Object.defineProperty(n, s, {
            configurable: !0,
            writable: !0,
            value: a
        }) : n[s] = a
    };
    o.WeakMap = function() {
        function n() {
            if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
            if (r(this, "_id", a("_WeakMap")),
            arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported")
        }
        r(n.prototype, "delete", function(u) {
            if (s(this, "delete"),
            !i(u))
                return !1;
            var f = u[this._id];
            return f && f[0] === u ? (delete u[this._id],
            !0) : !1
        }),
        r(n.prototype, "get", function(u) {
            if (s(this, "get"),
            !!i(u)) {
                var f = u[this._id];
                if (f && f[0] === u)
                    return f[1]
            }
        }),
        r(n.prototype, "has", function(u) {
            if (s(this, "has"),
            !i(u))
                return !1;
            var f = u[this._id];
            return !!(f && f[0] === u)
        }),
        r(n.prototype, "set", function(u, f) {
            if (s(this, "set"),
            !i(u))
                throw new TypeError("Invalid value used as weak map key");
            var h = u[this._id];
            return h && h[0] === u ? (h[1] = f,
            this) : (r(u, this._id, [u, f]),
            this)
        });
        function s(u, f) {
            if (!i(u) || !e.call(u, "_id"))
                throw new TypeError(f + " method called on incompatible receiver " + typeof u)
        }
        function a(u) {
            return u + "_" + l() + "." + l()
        }
        function l() {
            return Math.random().toString().substring(2)
        }
        return r(n, "_polyfill", !0),
        n
    }();
    function i(n) {
        return Object(n) === n
    }
}
)(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Mn);
var or = e0(function(o) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
    (function(t, r, i) {
        r[t] = r[t] || i(),
        o.exports && (o.exports = r[t])
    }
    )("Promise", Mn, function() {
        var t, r, i, n = Object.prototype.toString, s = typeof setImmediate < "u" ? function(m) {
            return setImmediate(m)
        }
        : setTimeout;
        try {
            Object.defineProperty({}, "x", {}),
            t = function(m, b, w, T) {
                return Object.defineProperty(m, b, {
                    value: w,
                    writable: !0,
                    configurable: T !== !1
                })
            }
        } catch {
            t = function(b, w, T) {
                return b[w] = T,
                b
            }
        }
        i = function() {
            var m, b, w;
            function T(k, S) {
                this.fn = k,
                this.self = S,
                this.next = void 0
            }
            return {
                add: function(S, C) {
                    w = new T(S,C),
                    b ? b.next = w : m = w,
                    b = w,
                    w = void 0
                },
                drain: function() {
                    var S = m;
                    for (m = b = r = void 0; S; )
                        S.fn.call(S.self),
                        S = S.next
                }
            }
        }();
        function a(y, m) {
            i.add(y, m),
            r || (r = s(i.drain))
        }
        function l(y) {
            var m, b = typeof y;
            return y != null && (b == "object" || b == "function") && (m = y.then),
            typeof m == "function" ? m : !1
        }
        function u() {
            for (var y = 0; y < this.chain.length; y++)
                f(this, this.state === 1 ? this.chain[y].success : this.chain[y].failure, this.chain[y]);
            this.chain.length = 0
        }
        function f(y, m, b) {
            var w, T;
            try {
                m === !1 ? b.reject(y.msg) : (m === !0 ? w = y.msg : w = m.call(void 0, y.msg),
                w === b.promise ? b.reject(TypeError("Promise-chain cycle")) : (T = l(w)) ? T.call(w, b.resolve, b.reject) : b.resolve(w))
            } catch (k) {
                b.reject(k)
            }
        }
        function h(y) {
            var m, b = this;
            if (!b.triggered) {
                b.triggered = !0,
                b.def && (b = b.def);
                try {
                    (m = l(y)) ? a(function() {
                        var w = new p(b);
                        try {
                            m.call(y, function() {
                                h.apply(w, arguments)
                            }, function() {
                                d.apply(w, arguments)
                            })
                        } catch (T) {
                            d.call(w, T)
                        }
                    }) : (b.msg = y,
                    b.state = 1,
                    b.chain.length > 0 && a(u, b))
                } catch (w) {
                    d.call(new p(b), w)
                }
            }
        }
        function d(y) {
            var m = this;
            m.triggered || (m.triggered = !0,
            m.def && (m = m.def),
            m.msg = y,
            m.state = 2,
            m.chain.length > 0 && a(u, m))
        }
        function c(y, m, b, w) {
            for (var T = 0; T < m.length; T++)
                (function(S) {
                    y.resolve(m[S]).then(function(B) {
                        b(S, B)
                    }, w)
                }
                )(T)
        }
        function p(y) {
            this.def = y,
            this.triggered = !1
        }
        function g(y) {
            this.promise = y,
            this.state = 0,
            this.triggered = !1,
            this.chain = [],
            this.msg = void 0
        }
        function _(y) {
            if (typeof y != "function")
                throw TypeError("Not a function");
            if (this.__NPO__ !== 0)
                throw TypeError("Not a promise");
            this.__NPO__ = 1;
            var m = new g(this);
            this.then = function(w, T) {
                var k = {
                    success: typeof w == "function" ? w : !0,
                    failure: typeof T == "function" ? T : !1
                };
                return k.promise = new this.constructor(function(C, B) {
                    if (typeof C != "function" || typeof B != "function")
                        throw TypeError("Not a function");
                    k.resolve = C,
                    k.reject = B
                }
                ),
                m.chain.push(k),
                m.state !== 0 && a(u, m),
                k.promise
            }
            ,
            this.catch = function(w) {
                return this.then(void 0, w)
            }
            ;
            try {
                y.call(void 0, function(w) {
                    h.call(m, w)
                }, function(w) {
                    d.call(m, w)
                })
            } catch (b) {
                d.call(m, b)
            }
        }
        var v = t({}, "constructor", _, !1);
        return _.prototype = v,
        t(v, "__NPO__", 0, !1),
        t(_, "resolve", function(m) {
            var b = this;
            return m && typeof m == "object" && m.__NPO__ === 1 ? m : new b(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                T(m)
            }
            )
        }),
        t(_, "reject", function(m) {
            return new this(function(w, T) {
                if (typeof w != "function" || typeof T != "function")
                    throw TypeError("Not a function");
                T(m)
            }
            )
        }),
        t(_, "all", function(m) {
            var b = this;
            return n.call(m) != "[object Array]" ? b.reject(TypeError("Not an array")) : m.length === 0 ? b.resolve([]) : new b(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                var S = m.length
                  , C = Array(S)
                  , B = 0;
                c(b, m, function(M, E) {
                    C[M] = E,
                    ++B === S && T(C)
                }, k)
            }
            )
        }),
        t(_, "race", function(m) {
            var b = this;
            return n.call(m) != "[object Array]" ? b.reject(TypeError("Not an array")) : new b(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                c(b, m, function(C, B) {
                    T(B)
                }, k)
            }
            )
        }),
        _
    })
})
  , Kr = new WeakMap;
function qn(o, e, t) {
    var r = Kr.get(o.element) || {};
    e in r || (r[e] = []),
    r[e].push(t),
    Kr.set(o.element, r)
}
function Ys(o, e) {
    var t = Kr.get(o.element) || {};
    return t[e] || []
}
function Xs(o, e, t) {
    var r = Kr.get(o.element) || {};
    if (!r[e])
        return !0;
    if (!t)
        return r[e] = [],
        Kr.set(o.element, r),
        !0;
    var i = r[e].indexOf(t);
    return i !== -1 && r[e].splice(i, 1),
    Kr.set(o.element, r),
    r[e] && r[e].length === 0
}
function t0(o, e) {
    var t = Ys(o, e);
    if (t.length < 1)
        return !1;
    var r = t.shift();
    return Xs(o, e, r),
    r
}
function r0(o, e) {
    var t = Kr.get(o);
    Kr.set(e, t),
    Kr.delete(o)
}
function Ws(o) {
    if (typeof o == "string")
        try {
            o = JSON.parse(o)
        } catch (e) {
            return console.warn(e),
            {}
        }
    return o
}
function Si(o, e, t) {
    if (!(!o.element.contentWindow || !o.element.contentWindow.postMessage)) {
        var r = {
            method: e
        };
        t !== void 0 && (r.value = t);
        var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        i >= 8 && i < 10 && (r = JSON.stringify(r)),
        o.element.contentWindow.postMessage(r, o.origin)
    }
}
function i0(o, e) {
    e = Ws(e);
    var t = [], r;
    if (e.event) {
        if (e.event === "error") {
            var i = Ys(o, e.data.method);
            i.forEach(function(s) {
                var a = new Error(e.data.message);
                a.name = e.data.name,
                s.reject(a),
                Xs(o, e.data.method, s)
            })
        }
        t = Ys(o, "event:".concat(e.event)),
        r = e.data
    } else if (e.method) {
        var n = t0(o, e.method);
        n && (t.push(n),
        r = e.value)
    }
    t.forEach(function(s) {
        try {
            if (typeof s == "function") {
                s.call(o, r);
                return
            }
            s.resolve(r)
        } catch {}
    })
}
var n0 = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
function Vh(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return n0.reduce(function(t, r) {
        var i = o.getAttribute("data-vimeo-".concat(r));
        return (i || i === "") && (t[r] = i === "" ? 1 : i),
        t
    }, e)
}
function jl(o, e) {
    var t = o.html;
    if (!e)
        throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
        return e.querySelector("iframe");
    var r = document.createElement("div");
    return r.innerHTML = t,
    e.appendChild(r.firstChild),
    e.setAttribute("data-vimeo-initialized", "true"),
    e.querySelector("iframe")
}
function qh(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , t = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(r, i) {
        if (!Ki(o))
            throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
        var n = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
        for (var s in e)
            e.hasOwnProperty(s) && (n += "&".concat(s, "=").concat(encodeURIComponent(e[s])));
        var a = "XDomainRequest"in window ? new XDomainRequest : new XMLHttpRequest;
        a.open("GET", n, !0),
        a.onload = function() {
            if (a.status === 404) {
                i(new Error("“".concat(o, "” was not found.")));
                return
            }
            if (a.status === 403) {
                i(new Error("“".concat(o, "” is not embeddable.")));
                return
            }
            try {
                var l = JSON.parse(a.responseText);
                if (l.domain_status_code === 403) {
                    jl(l, t),
                    i(new Error("“".concat(o, "” is not embeddable.")));
                    return
                }
                r(l)
            } catch (u) {
                i(u)
            }
        }
        ,
        a.onerror = function() {
            var l = a.status ? " (".concat(a.status, ")") : "";
            i(new Error("There was an error fetching the embed code from Vimeo".concat(l, ".")))
        }
        ,
        a.send()
    }
    )
}
function o0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document
      , e = [].slice.call(o.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
      , t = function(i) {
        "console"in window && console.error && console.error("There was an error creating an embed: ".concat(i))
    };
    e.forEach(function(r) {
        try {
            if (r.getAttribute("data-vimeo-defer") !== null)
                return;
            var i = Vh(r)
              , n = Xh(i);
            qh(n, i, r).then(function(s) {
                return jl(s, r)
            }).catch(t)
        } catch (s) {
            t(s)
        }
    })
}
function s0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
        window.VimeoPlayerResizeEmbeds_ = !0;
        var e = function(r) {
            if (Ki(r.origin) && !(!r.data || r.data.event !== "spacechange")) {
                for (var i = o.querySelectorAll("iframe"), n = 0; n < i.length; n++)
                    if (i[n].contentWindow === r.source) {
                        var s = i[n].parentElement;
                        s.style.paddingBottom = "".concat(r.data.data[0].bottom, "px");
                        break
                    }
            }
        };
        window.addEventListener("message", e)
    }
}
function a0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
        window.VimeoSeoMetadataAppended = !0;
        var e = function(r) {
            if (Ki(r.origin)) {
                var i = Ws(r.data);
                if (!(!i || i.event !== "ready"))
                    for (var n = o.querySelectorAll("iframe"), s = 0; s < n.length; s++) {
                        var a = n[s]
                          , l = a.contentWindow === r.source;
                        if (Yh(a.src) && l) {
                            var u = new Ul(a);
                            u.callMethod("appendVideoMetadata", window.location.href)
                        }
                    }
            }
        };
        window.addEventListener("message", e)
    }
}
function l0() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
        window.VimeoCheckedUrlTimeParam = !0;
        var e = function(i) {
            "console"in window && console.error && console.error("There was an error getting video Id: ".concat(i))
        }
          , t = function(i) {
            if (Ki(i.origin)) {
                var n = Ws(i.data);
                if (!(!n || n.event !== "ready"))
                    for (var s = o.querySelectorAll("iframe"), a = function() {
                        var f = s[l]
                          , h = f.contentWindow === i.source;
                        if (Yh(f.src) && h) {
                            var d = new Ul(f);
                            d.getVideoId().then(function(c) {
                                var p = new RegExp("[?&]vimeo_t_".concat(c, "=([^&#]*)")).exec(window.location.href);
                                if (p && p[1]) {
                                    var g = decodeURI(p[1]);
                                    d.setCurrentTime(g)
                                }
                            }).catch(e)
                        }
                    }, l = 0; l < s.length; l++)
                        a()
            }
        };
        window.addEventListener("message", t)
    }
}
function u0() {
    var o = function() {
        for (var r, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, s = i.length, a = {}; n < s; n++)
            if (r = i[n],
            r && r[1]in document) {
                for (n = 0; n < r.length; n++)
                    a[i[0][n]] = r[n];
                return a
            }
        return !1
    }()
      , e = {
        fullscreenchange: o.fullscreenchange,
        fullscreenerror: o.fullscreenerror
    }
      , t = {
        request: function(i) {
            return new Promise(function(n, s) {
                var a = function u() {
                    t.off("fullscreenchange", u),
                    n()
                };
                t.on("fullscreenchange", a),
                i = i || document.documentElement;
                var l = i[o.requestFullscreen]();
                l instanceof Promise && l.then(a).catch(s)
            }
            )
        },
        exit: function() {
            return new Promise(function(i, n) {
                if (!t.isFullscreen) {
                    i();
                    return
                }
                var s = function l() {
                    t.off("fullscreenchange", l),
                    i()
                };
                t.on("fullscreenchange", s);
                var a = document[o.exitFullscreen]();
                a instanceof Promise && a.then(s).catch(n)
            }
            )
        },
        on: function(i, n) {
            var s = e[i];
            s && document.addEventListener(s, n)
        },
        off: function(i, n) {
            var s = e[i];
            s && document.removeEventListener(s, n)
        }
    };
    return Object.defineProperties(t, {
        isFullscreen: {
            get: function() {
                return !!document[o.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[o.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!document[o.fullscreenEnabled]
            }
        }
    }),
    t
}
var c0 = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: .3,
    maxAllowedDrift: 1,
    minCheckInterval: .1,
    maxRateAdjustment: .2,
    maxTimeToCatchUp: 1
}
  , f0 = function(o) {
    Hg(t, o);
    var e = jg(t);
    function t(r, i) {
        var n, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
        return Nh(this, t),
        n = e.call(this),
        vs(bs(n), "logger", void 0),
        vs(bs(n), "speedAdjustment", 0),
        vs(bs(n), "adjustSpeed", function() {
            var l = Oi(Mt().mark(function u(f, h) {
                var d;
                return Mt().wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            if (n.speedAdjustment !== h) {
                                p.next = 2;
                                break
                            }
                            return p.abrupt("return");
                        case 2:
                            return p.next = 4,
                            f.getPlaybackRate();
                        case 4:
                            return p.t0 = p.sent,
                            p.t1 = n.speedAdjustment,
                            p.t2 = p.t0 - p.t1,
                            p.t3 = h,
                            d = p.t2 + p.t3,
                            n.log("New playbackRate:  ".concat(d)),
                            p.next = 12,
                            f.setPlaybackRate(d);
                        case 12:
                            n.speedAdjustment = h;
                        case 13:
                        case "end":
                            return p.stop()
                        }
                }, u)
            }));
            return function(u, f) {
                return l.apply(this, arguments)
            }
        }()),
        n.logger = a,
        n.init(i, r, mc(mc({}, c0), s)),
        n
    }
    return Ih(t, [{
        key: "disconnect",
        value: function() {
            this.dispatchEvent(new Event("disconnect"))
        }
    }, {
        key: "init",
        value: function() {
            var r = Oi(Mt().mark(function n(s, a, l) {
                var u = this, f, h, d;
                return Mt().wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            return p.next = 2,
                            this.waitForTOReadyState(s, "open");
                        case 2:
                            if (l.role !== "viewer") {
                                p.next = 10;
                                break
                            }
                            return p.next = 5,
                            this.updatePlayer(s, a, l);
                        case 5:
                            f = bc(s, "change", function() {
                                return u.updatePlayer(s, a, l)
                            }),
                            h = this.maintainPlaybackPosition(s, a, l),
                            this.addEventListener("disconnect", function() {
                                h.cancel(),
                                f.cancel()
                            }),
                            p.next = 14;
                            break;
                        case 10:
                            return p.next = 12,
                            this.updateTimingObject(s, a);
                        case 12:
                            d = bc(a, ["seeked", "play", "pause", "ratechange"], function() {
                                return u.updateTimingObject(s, a)
                            }, "on", "off"),
                            this.addEventListener("disconnect", function() {
                                return d.cancel()
                            });
                        case 14:
                        case "end":
                            return p.stop()
                        }
                }, n, this)
            }));
            function i(n, s, a) {
                return r.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "updateTimingObject",
        value: function() {
            var r = Oi(Mt().mark(function n(s, a) {
                return Mt().wrap(function(u) {
                    for (; ; )
                        switch (u.prev = u.next) {
                        case 0:
                            return u.t0 = s,
                            u.next = 3,
                            a.getCurrentTime();
                        case 3:
                            return u.t1 = u.sent,
                            u.next = 6,
                            a.getPaused();
                        case 6:
                            if (!u.sent) {
                                u.next = 10;
                                break
                            }
                            u.t2 = 0,
                            u.next = 13;
                            break;
                        case 10:
                            return u.next = 12,
                            a.getPlaybackRate();
                        case 12:
                            u.t2 = u.sent;
                        case 13:
                            u.t3 = u.t2,
                            u.t4 = {
                                position: u.t1,
                                velocity: u.t3
                            },
                            u.t0.update.call(u.t0, u.t4);
                        case 16:
                        case "end":
                            return u.stop()
                        }
                }, n)
            }));
            function i(n, s) {
                return r.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "updatePlayer",
        value: function() {
            var r = Oi(Mt().mark(function n(s, a, l) {
                var u, f, h;
                return Mt().wrap(function(c) {
                    for (; ; )
                        switch (c.prev = c.next) {
                        case 0:
                            if (u = s.query(),
                            f = u.position,
                            h = u.velocity,
                            typeof f == "number" && a.setCurrentTime(f),
                            typeof h != "number") {
                                c.next = 25;
                                break
                            }
                            if (h !== 0) {
                                c.next = 11;
                                break
                            }
                            return c.next = 6,
                            a.getPaused();
                        case 6:
                            if (c.t0 = c.sent,
                            c.t0 !== !1) {
                                c.next = 9;
                                break
                            }
                            a.pause();
                        case 9:
                            c.next = 25;
                            break;
                        case 11:
                            if (!(h > 0)) {
                                c.next = 25;
                                break
                            }
                            return c.next = 14,
                            a.getPaused();
                        case 14:
                            if (c.t1 = c.sent,
                            c.t1 !== !0) {
                                c.next = 19;
                                break
                            }
                            return c.next = 18,
                            a.play().catch(function() {
                                var p = Oi(Mt().mark(function g(_) {
                                    return Mt().wrap(function(y) {
                                        for (; ; )
                                            switch (y.prev = y.next) {
                                            case 0:
                                                if (!(_.name === "NotAllowedError" && l.autoPlayMuted)) {
                                                    y.next = 5;
                                                    break
                                                }
                                                return y.next = 3,
                                                a.setMuted(!0);
                                            case 3:
                                                return y.next = 5,
                                                a.play().catch(function(m) {
                                                    return console.error("Couldn't play the video from TimingSrcConnector. Error:", m)
                                                });
                                            case 5:
                                            case "end":
                                                return y.stop()
                                            }
                                    }, g)
                                }));
                                return function(g) {
                                    return p.apply(this, arguments)
                                }
                            }());
                        case 18:
                            this.updatePlayer(s, a, l);
                        case 19:
                            return c.next = 21,
                            a.getPlaybackRate();
                        case 21:
                            if (c.t2 = c.sent,
                            c.t3 = h,
                            c.t2 === c.t3) {
                                c.next = 25;
                                break
                            }
                            a.setPlaybackRate(h);
                        case 25:
                        case "end":
                            return c.stop()
                        }
                }, n, this)
            }));
            function i(n, s, a) {
                return r.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "maintainPlaybackPosition",
        value: function(i, n, s) {
            var a = this
              , l = s.allowedDrift
              , u = s.maxAllowedDrift
              , f = s.minCheckInterval
              , h = s.maxRateAdjustment
              , d = s.maxTimeToCatchUp
              , c = Math.min(d, Math.max(f, u)) * 1e3
              , p = function() {
                var _ = Oi(Mt().mark(function v() {
                    var y, m, b, w, T;
                    return Mt().wrap(function(S) {
                        for (; ; )
                            switch (S.prev = S.next) {
                            case 0:
                                if (S.t0 = i.query().velocity === 0,
                                S.t0) {
                                    S.next = 6;
                                    break
                                }
                                return S.next = 4,
                                n.getPaused();
                            case 4:
                                S.t1 = S.sent,
                                S.t0 = S.t1 === !0;
                            case 6:
                                if (!S.t0) {
                                    S.next = 8;
                                    break
                                }
                                return S.abrupt("return");
                            case 8:
                                return S.t2 = i.query().position,
                                S.next = 11,
                                n.getCurrentTime();
                            case 11:
                                if (S.t3 = S.sent,
                                y = S.t2 - S.t3,
                                m = Math.abs(y),
                                a.log("Drift: ".concat(y)),
                                !(m > u)) {
                                    S.next = 22;
                                    break
                                }
                                return S.next = 18,
                                a.adjustSpeed(n, 0);
                            case 18:
                                n.setCurrentTime(i.query().position),
                                a.log("Resync by currentTime"),
                                S.next = 29;
                                break;
                            case 22:
                                if (!(m > l)) {
                                    S.next = 29;
                                    break
                                }
                                return b = m / d,
                                w = h,
                                T = b < w ? (w - b) / 2 : w,
                                S.next = 28,
                                a.adjustSpeed(n, T * Math.sign(y));
                            case 28:
                                a.log("Resync by playbackRate");
                            case 29:
                            case "end":
                                return S.stop()
                            }
                    }, v)
                }));
                return function() {
                    return _.apply(this, arguments)
                }
            }()
              , g = setInterval(function() {
                return p()
            }, c);
            return {
                cancel: function() {
                    return clearInterval(g)
                }
            }
        }
    }, {
        key: "log",
        value: function(i) {
            var n;
            (n = this.logger) === null || n === void 0 || n.call(this, "TimingSrcConnector: ".concat(i))
        }
    }, {
        key: "waitForTOReadyState",
        value: function(i, n) {
            return new Promise(function(s) {
                var a = function l() {
                    i.readyState === n ? s() : i.addEventListener("readystatechange", l, {
                        once: !0
                    })
                };
                a()
            }
            )
        }
    }]),
    t
}(gl(EventTarget))
  , nn = new WeakMap
  , ba = new WeakMap
  , Rt = {}
  , Ul = function() {
    function o(e) {
        var t = this
          , r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (Nh(this, o),
        window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
        e = e[0]),
        typeof document < "u" && typeof e == "string" && (e = document.getElementById(e)),
        !Kg(e))
            throw new TypeError("You must pass either a valid element or a valid id.");
        if (e.nodeName !== "IFRAME") {
            var i = e.querySelector("iframe");
            i && (e = i)
        }
        if (e.nodeName === "IFRAME" && !Ki(e.getAttribute("src") || ""))
            throw new Error("The player element passed isn’t a Vimeo embed.");
        if (nn.has(e))
            return nn.get(e);
        this._window = e.ownerDocument.defaultView,
        this.element = e,
        this.origin = "*";
        var n = new or(function(a, l) {
            if (t._onMessage = function(h) {
                if (!(!Ki(h.origin) || t.element.contentWindow !== h.source)) {
                    t.origin === "*" && (t.origin = h.origin);
                    var d = Ws(h.data)
                      , c = d && d.event === "error"
                      , p = c && d.data && d.data.method === "ready";
                    if (p) {
                        var g = new Error(d.data.message);
                        g.name = d.data.name,
                        l(g);
                        return
                    }
                    var _ = d && d.event === "ready"
                      , v = d && d.method === "ping";
                    if (_ || v) {
                        t.element.setAttribute("data-ready", "true"),
                        a();
                        return
                    }
                    i0(t, d)
                }
            }
            ,
            t._window.addEventListener("message", t._onMessage),
            t.element.nodeName !== "IFRAME") {
                var u = Vh(e, r)
                  , f = Xh(u);
                qh(f, u, e).then(function(h) {
                    var d = jl(h, e);
                    return t.element = d,
                    t._originalElement = e,
                    r0(e, d),
                    nn.set(t.element, t),
                    h
                }).catch(l)
            }
        }
        );
        if (ba.set(this, n),
        nn.set(this.element, this),
        this.element.nodeName === "IFRAME" && Si(this, "ping"),
        Rt.isEnabled) {
            var s = function() {
                return Rt.exit()
            };
            this.fullscreenchangeHandler = function() {
                Rt.isFullscreen ? qn(t, "event:exitFullscreen", s) : Xs(t, "event:exitFullscreen", s),
                t.ready().then(function() {
                    Si(t, "fullscreenchange", Rt.isFullscreen)
                })
            }
            ,
            Rt.on("fullscreenchange", this.fullscreenchangeHandler)
        }
        return this
    }
    return Ih(o, [{
        key: "callMethod",
        value: function(t) {
            var r = this
              , i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return new or(function(n, s) {
                return r.ready().then(function() {
                    qn(r, t, {
                        resolve: n,
                        reject: s
                    }),
                    Si(r, t, i)
                }).catch(s)
            }
            )
        }
    }, {
        key: "get",
        value: function(t) {
            var r = this;
            return new or(function(i, n) {
                return t = wc(t, "get"),
                r.ready().then(function() {
                    qn(r, t, {
                        resolve: i,
                        reject: n
                    }),
                    Si(r, t)
                }).catch(n)
            }
            )
        }
    }, {
        key: "set",
        value: function(t, r) {
            var i = this;
            return new or(function(n, s) {
                if (t = wc(t, "set"),
                r == null)
                    throw new TypeError("There must be a value to set.");
                return i.ready().then(function() {
                    qn(i, t, {
                        resolve: n,
                        reject: s
                    }),
                    Si(i, t, r)
                }).catch(s)
            }
            )
        }
    }, {
        key: "on",
        value: function(t, r) {
            if (!t)
                throw new TypeError("You must pass an event name.");
            if (!r)
                throw new TypeError("You must pass a callback function.");
            if (typeof r != "function")
                throw new TypeError("The callback must be a function.");
            var i = Ys(this, "event:".concat(t));
            i.length === 0 && this.callMethod("addEventListener", t).catch(function() {}),
            qn(this, "event:".concat(t), r)
        }
    }, {
        key: "off",
        value: function(t, r) {
            if (!t)
                throw new TypeError("You must pass an event name.");
            if (r && typeof r != "function")
                throw new TypeError("The callback must be a function.");
            var i = Xs(this, "event:".concat(t), r);
            i && this.callMethod("removeEventListener", t).catch(function(n) {})
        }
    }, {
        key: "loadVideo",
        value: function(t) {
            return this.callMethod("loadVideo", t)
        }
    }, {
        key: "ready",
        value: function() {
            var t = ba.get(this) || new or(function(r, i) {
                i(new Error("Unknown player. Probably unloaded."))
            }
            );
            return or.resolve(t)
        }
    }, {
        key: "addCuePoint",
        value: function(t) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return this.callMethod("addCuePoint", {
                time: t,
                data: r
            })
        }
    }, {
        key: "removeCuePoint",
        value: function(t) {
            return this.callMethod("removeCuePoint", t)
        }
    }, {
        key: "enableTextTrack",
        value: function(t, r) {
            if (!t)
                throw new TypeError("You must pass a language.");
            return this.callMethod("enableTextTrack", {
                language: t,
                kind: r
            })
        }
    }, {
        key: "disableTextTrack",
        value: function() {
            return this.callMethod("disableTextTrack")
        }
    }, {
        key: "pause",
        value: function() {
            return this.callMethod("pause")
        }
    }, {
        key: "play",
        value: function() {
            return this.callMethod("play")
        }
    }, {
        key: "requestFullscreen",
        value: function() {
            return Rt.isEnabled ? Rt.request(this.element) : this.callMethod("requestFullscreen")
        }
    }, {
        key: "exitFullscreen",
        value: function() {
            return Rt.isEnabled ? Rt.exit() : this.callMethod("exitFullscreen")
        }
    }, {
        key: "getFullscreen",
        value: function() {
            return Rt.isEnabled ? or.resolve(Rt.isFullscreen) : this.get("fullscreen")
        }
    }, {
        key: "requestPictureInPicture",
        value: function() {
            return this.callMethod("requestPictureInPicture")
        }
    }, {
        key: "exitPictureInPicture",
        value: function() {
            return this.callMethod("exitPictureInPicture")
        }
    }, {
        key: "getPictureInPicture",
        value: function() {
            return this.get("pictureInPicture")
        }
    }, {
        key: "remotePlaybackPrompt",
        value: function() {
            return this.callMethod("remotePlaybackPrompt")
        }
    }, {
        key: "unload",
        value: function() {
            return this.callMethod("unload")
        }
    }, {
        key: "destroy",
        value: function() {
            var t = this;
            return new or(function(r) {
                if (ba.delete(t),
                nn.delete(t.element),
                t._originalElement && (nn.delete(t._originalElement),
                t._originalElement.removeAttribute("data-vimeo-initialized")),
                t.element && t.element.nodeName === "IFRAME" && t.element.parentNode && (t.element.parentNode.parentNode && t._originalElement && t._originalElement !== t.element.parentNode ? t.element.parentNode.parentNode.removeChild(t.element.parentNode) : t.element.parentNode.removeChild(t.element)),
                t.element && t.element.nodeName === "DIV" && t.element.parentNode) {
                    t.element.removeAttribute("data-vimeo-initialized");
                    var i = t.element.querySelector("iframe");
                    i && i.parentNode && (i.parentNode.parentNode && t._originalElement && t._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i))
                }
                t._window.removeEventListener("message", t._onMessage),
                Rt.isEnabled && Rt.off("fullscreenchange", t.fullscreenchangeHandler),
                r()
            }
            )
        }
    }, {
        key: "getAutopause",
        value: function() {
            return this.get("autopause")
        }
    }, {
        key: "setAutopause",
        value: function(t) {
            return this.set("autopause", t)
        }
    }, {
        key: "getBuffered",
        value: function() {
            return this.get("buffered")
        }
    }, {
        key: "getCameraProps",
        value: function() {
            return this.get("cameraProps")
        }
    }, {
        key: "setCameraProps",
        value: function(t) {
            return this.set("cameraProps", t)
        }
    }, {
        key: "getChapters",
        value: function() {
            return this.get("chapters")
        }
    }, {
        key: "getCurrentChapter",
        value: function() {
            return this.get("currentChapter")
        }
    }, {
        key: "getColor",
        value: function() {
            return this.get("color")
        }
    }, {
        key: "getColors",
        value: function() {
            return or.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")])
        }
    }, {
        key: "setColor",
        value: function(t) {
            return this.set("color", t)
        }
    }, {
        key: "setColors",
        value: function(t) {
            if (!Array.isArray(t))
                return new or(function(n, s) {
                    return s(new TypeError("Argument must be an array."))
                }
                );
            var r = new or(function(n) {
                return n(null)
            }
            )
              , i = [t[0] ? this.set("colorOne", t[0]) : r, t[1] ? this.set("colorTwo", t[1]) : r, t[2] ? this.set("colorThree", t[2]) : r, t[3] ? this.set("colorFour", t[3]) : r];
            return or.all(i)
        }
    }, {
        key: "getCuePoints",
        value: function() {
            return this.get("cuePoints")
        }
    }, {
        key: "getCurrentTime",
        value: function() {
            return this.get("currentTime")
        }
    }, {
        key: "setCurrentTime",
        value: function(t) {
            return this.set("currentTime", t)
        }
    }, {
        key: "getDuration",
        value: function() {
            return this.get("duration")
        }
    }, {
        key: "getEnded",
        value: function() {
            return this.get("ended")
        }
    }, {
        key: "getLoop",
        value: function() {
            return this.get("loop")
        }
    }, {
        key: "setLoop",
        value: function(t) {
            return this.set("loop", t)
        }
    }, {
        key: "setMuted",
        value: function(t) {
            return this.set("muted", t)
        }
    }, {
        key: "getMuted",
        value: function() {
            return this.get("muted")
        }
    }, {
        key: "getPaused",
        value: function() {
            return this.get("paused")
        }
    }, {
        key: "getPlaybackRate",
        value: function() {
            return this.get("playbackRate")
        }
    }, {
        key: "setPlaybackRate",
        value: function(t) {
            return this.set("playbackRate", t)
        }
    }, {
        key: "getPlayed",
        value: function() {
            return this.get("played")
        }
    }, {
        key: "getQualities",
        value: function() {
            return this.get("qualities")
        }
    }, {
        key: "getQuality",
        value: function() {
            return this.get("quality")
        }
    }, {
        key: "setQuality",
        value: function(t) {
            return this.set("quality", t)
        }
    }, {
        key: "getRemotePlaybackAvailability",
        value: function() {
            return this.get("remotePlaybackAvailability")
        }
    }, {
        key: "getRemotePlaybackState",
        value: function() {
            return this.get("remotePlaybackState")
        }
    }, {
        key: "getSeekable",
        value: function() {
            return this.get("seekable")
        }
    }, {
        key: "getSeeking",
        value: function() {
            return this.get("seeking")
        }
    }, {
        key: "getTextTracks",
        value: function() {
            return this.get("textTracks")
        }
    }, {
        key: "getVideoEmbedCode",
        value: function() {
            return this.get("videoEmbedCode")
        }
    }, {
        key: "getVideoId",
        value: function() {
            return this.get("videoId")
        }
    }, {
        key: "getVideoTitle",
        value: function() {
            return this.get("videoTitle")
        }
    }, {
        key: "getVideoWidth",
        value: function() {
            return this.get("videoWidth")
        }
    }, {
        key: "getVideoHeight",
        value: function() {
            return this.get("videoHeight")
        }
    }, {
        key: "getVideoUrl",
        value: function() {
            return this.get("videoUrl")
        }
    }, {
        key: "getVolume",
        value: function() {
            return this.get("volume")
        }
    }, {
        key: "setVolume",
        value: function(t) {
            return this.set("volume", t)
        }
    }, {
        key: "setTimingSrc",
        value: function() {
            var e = Oi(Mt().mark(function r(i, n) {
                var s = this, a;
                return Mt().wrap(function(u) {
                    for (; ; )
                        switch (u.prev = u.next) {
                        case 0:
                            if (i) {
                                u.next = 2;
                                break
                            }
                            throw new TypeError("A Timing Object must be provided.");
                        case 2:
                            return u.next = 4,
                            this.ready();
                        case 4:
                            return a = new f0(this,i,n),
                            Si(this, "notifyTimingObjectConnect"),
                            a.addEventListener("disconnect", function() {
                                return Si(s, "notifyTimingObjectDisconnect")
                            }),
                            u.abrupt("return", a);
                        case 8:
                        case "end":
                            return u.stop()
                        }
                }, r, this)
            }));
            function t(r, i) {
                return e.apply(this, arguments)
            }
            return t
        }()
    }]),
    o
}();
zh || (Rt = u0(),
o0(),
s0(),
a0(),
l0());
class h0 extends Vt {
    init() {
        this.id = this.block.getAttribute("data-id"),
        this.cover = this.block.classList.contains("video--cover");
        var e = {
            id: this.id,
            background: this.cover
        };
        this.player = new Ul(this.block,e),
        this.cover && Promise.all([this.player.getVideoWidth(), this.player.getVideoHeight()]).then(t => {
            const [r,i] = t;
            this.aspectRatio = r / i,
            this.updatePosition()
        }
        ),
        this.updatePosition = this.updatePosition.bind(this)
    }
    initEvents() {
        this.cover && window.addEventListener("resize", this.updatePosition)
    }
    updatePosition() {
        const e = this.block.getBoundingClientRect()
          , t = e.width / e.height;
        t < this.aspectRatio ? (this.player.element.style.width = `${this.aspectRatio / t * 100}%`,
        this.player.element.style.height = "") : (this.player.element.style.height = `${t / this.aspectRatio * 100}%`,
        this.player.element.style.width = "")
    }
}
J.registerPlugin(ge);
class d0 extends Vt {
    init() {
        const e = {
            wrap: this.block,
            braces: this.block.querySelectorAll(".subtitle__brace"),
            label: this.block.querySelectorAll(".subtitle__label")
        };
        this.DOM = e,
        this.startDelay = Number(this.block.dataset.delay),
        this.buildOn()
    }
    buildOn() {
        const e = J.timeline({
            defaults: {
                ease: "power3.out",
                duration: .3
            },
            scrollTrigger: {
                trigger: this.block,
                start: "top 90%",
                once: !0
            }
        });
        J.set(this.DOM.wrap, {
            autoAlpha: 1
        }),
        Ll( () => {
            e.from(this.DOM.label, {
                opacity: 0,
                duration: .7,
                delay: this.startDelay
            }).from(this.DOM.braces[0], {
                opacity: 0,
                xPercent: 100
            }, "<0.1").from(this.DOM.braces[1], {
                opacity: 0,
                xPercent: -100
            }, "<")
        }
        )
    }
}
J.registerPlugin(Hi, Wl);
class p0 extends Vt {
    init() {
        const e = {
            wrapper: this.block,
            container: this.block.querySelector(".tools-morelinks__main"),
            carousel: this.block.querySelector(".tools-morelinks__items"),
            items: this.block.querySelectorAll(".tools-morelinks__item")
        };
        this.DOM = e,
        this.initMoreLinks()
    }
    setBounds() {
        Hi.get(this.DOM.carousel).applyBounds({
            minX: -this.DOM.carousel.offsetWidth + this.DOM.container.offsetWidth + 16,
            maxX: 0
        })
    }
    createCarousel() {
        Hi.create(this.DOM.carousel, {
            type: "x",
            edgeResistance: 1,
            inertia: !0,
            maxDuration: .5,
            snap: {
                x: e => {
                    const t = this.DOM.items[0].offsetWidth
                      , r = J.utils.snap(t, e);
                    return r === 0 ? 0 : r
                }
            }
        }),
        this.setBounds()
    }
    initMoreLinks() {
        this.DOM.items && (this.createCarousel(),
        window.addEventListener("resize", this.setBounds.bind(this)))
    }
}
J.registerPlugin(ge);
class g0 extends Vt {
    init() {
        const e = {
            select: this.block.querySelector(".demos__plugins-groups-select"),
            pluginSelects: this.block.querySelectorAll(".demos__plugin-select"),
            plugins: this.block.querySelectorAll(".demos__plugins-groups-plugins"),
            buttons: this.block.querySelectorAll("[data-demos-btn]"),
            demoButton: this.block.querySelector("[data-js=demo-button]"),
            docsButton: this.block.querySelector("[data-js=docs-button]"),
            iframe: this.block.querySelector(".js-demo-iframe")
        };
        this.DOM = e,
        this.DOM.pluginSelects.forEach(t => this.handlePluginSelect(t)),
        !(!this.DOM.select || !this.DOM.plugins) && this.handleSelect()
    }
    initEvents() {
        const e = "is-active";
        this.DOM.buttons.forEach(t => {
            t.addEventListener("click", r => {
                this.updateDemo(r.target),
                this.DOM.buttons.forEach(i => {
                    i.classList.remove(e)
                }
                ),
                t.classList.add(e)
            }
            )
        }
        )
    }
    handleSelect() {
        const e = this.DOM.plugins[this.DOM.select.value].querySelector("select")
          , t = e.options[e.selectedIndex];
        this.updateDemo(t),
        this.DOM.select.addEventListener("change", r => {
            this.DOM.plugins.forEach(s => {
                s.classList.remove("demos__plugins-groups-plugins--active")
            }
            ),
            this.DOM.plugins[this.DOM.select.value].classList.add("demos__plugins-groups-plugins--active");
            const i = this.DOM.plugins[this.DOM.select.value].querySelector("select")
              , n = i.options[i.selectedIndex];
            this.updateDemo(n)
        }
        )
    }
    handlePluginSelect(e) {
        const t = e.options[e.selectedIndex];
        this.updateDemo(t),
        e.addEventListener("change", r => {
            r.target;
            const i = e.options[e.selectedIndex];
            this.updateDemo(i)
        }
        )
    }
    updateDemo(e) {
        let t = e.dataset.id
          , r = e.dataset.docs;
        this.DOM.iframe.src = `https://codepen.io/GreenSock/debug/${t}`,
        this.DOM.demoButton.setAttribute("href", `https://codepen.io/GreenSock/pen/${t}`),
        r && this.DOM.docsButton.setAttribute("href", r)
    }
}
class _0 extends Vt {
    init() {
        const e = {
            items: this.block.querySelectorAll(".testimonials__item"),
            controls: this.block.querySelectorAll(".testimonials__control--button"),
            previous: this.block.querySelector(".prev"),
            next: this.block.querySelector(".next")
        };
        this.el = e,
        this.previousIndex = 0,
        this.currentIndex = 0,
        this.controlIndex = 0,
        this.handleNavigation(),
        this.navigateToNextSlide = this.navigateToNextSlide.bind(this)
    }
    handleNavigation() {
        this.el.controls.forEach(e => {
            e.addEventListener("click", t => {
                const r = parseInt(t.target.dataset.index);
                this.updateCurrent(r)
            }
            )
        }
        ),
        this.el.previous.addEventListener("click", () => {
            this.navigateToPreviousSlide()
        }
        ),
        this.el.next.addEventListener("click", () => {
            this.navigateToNextSlide()
        }
        )
    }
    navigateToPreviousSlide() {
        const e = this.currentIndex > 0 ? this.currentIndex - 1 : this.el.items.length - 1;
        this.updateCurrent(e)
    }
    navigateToNextSlide() {
        const e = this.currentIndex < this.el.items.length - 1 ? this.currentIndex + 1 : 0;
        this.updateCurrent(e)
    }
    updateCurrent(e) {
        this.disableButtons(),
        this.currentIndex = e,
        this.handleTestimonialState(),
        this.transitionOut()
    }
    transitionOut() {
        const e = this.previousIndex
          , r = this.el.items[e]
          , i = {
            authorName: r.querySelector(".testimonials__author--name"),
            authorFlair: r.querySelector(".testimonials__author--flair"),
            quote: r.querySelector(".testimonials__quote"),
            image: r.querySelector(".testimonials__image"),
            imageClip: r.querySelector(".tesimonials__image--clip")
        };
        J.timeline({
            default: {
                ease: "power3.in"
            },
            onComplete: () => {
                this.transitionIn()
            }
        }).to([i.authorName, i.quote], {
            x: -40,
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.image, {
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.authorFlair, {
            scaleX: 0,
            duration: .3
        }, 0)
    }
    transitionIn() {
        const e = this.currentIndex
          , r = this.el.items[e]
          , i = {
            authorName: r.querySelector(".testimonials__author--name"),
            authorFlair: r.querySelector(".testimonials__author--flair"),
            quote: r.querySelector(".testimonials__quote"),
            image: r.querySelector(".testimonials__image"),
            imageClip: r.querySelector(".tesimonials__image--clip")
        };
        J.timeline({
            delay: .1,
            defaults: {
                ease: "power3.out"
            },
            onComplete: () => {
                this.enableButtons()
            }
        }).fromTo(i.image, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: .4
        }).fromTo(i.quote, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .05).fromTo(i.authorName, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .15).fromTo(i.authorFlair, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: .4
        }, .15)
    }
    disableButtons() {
        this.el.controls.forEach(e => {
            e.disabled = !0
        }
        ),
        this.el.previous.disabled = !0,
        this.el.next.disabled = !0
    }
    enableButtons() {
        this.previousIndex = this.currentIndex,
        this.el.controls.forEach(e => {
            e.disabled = !1
        }
        ),
        this.el.previous.disabled = !1,
        this.el.next.disabled = !1
    }
    handleTestimonialState() {
        const e = this.currentIndex
          , t = this.el.items
          , r = this.el.controls;
        this.el.items.forEach(i => i.classList.remove("testimonials__item--active")),
        this.el.controls.forEach(i => i.classList.remove("testimonials__control--active")),
        t[e].classList.add("testimonials__item--active"),
        r[e].classList.add("testimonials__control--active")
    }
}
J.registerPlugin(_i);
class m0 extends Vt {
    init() {
        const e = J.utils.selector(this.block)
          , t = {
            block: this.block,
            get: e(".get-gsap-btn__word:first-child"),
            gsap: e(".get-gsap-btn__word:last-child"),
            icons: e(".get-gsap-btn__button svg"),
            circles: e("#btn-circles"),
            windmill: e("#btn-windmill"),
            square: e("#btn-square"),
            star: e("#btn-star")
        };
        this.DOM = t,
        this.eases = {
            airtime: _i.create("custom", "M0,0 C0.05,0.356 0.377,0.435 0.5,0.5 0.61,0.558 0.948,0.652 1,1 "),
            rotaaaaate: _i.create("custom", "M0,0 C0.148,0.346 0.254,0.444 0.5,0.5 0.751,0.557 0.852,0.646 1,1 ")
        },
        this.playing = !1,
        this.tl = this.createTimeline(),
        this.playTimeline = this.playTimeline.bind(this)
    }
    initEvents() {
        J.matchMedia().add("(min-width: 1240px) and (prefers-reduced-motion: no-preference)", () => (this.DOM.block.addEventListener("mouseenter", this.playTimeline),
        () => {
            this.DOM.block.removeEventListener("mouseenter", this.playTimeline)
        }
        ))
    }
    createTimeline() {
        const e = J.timeline({
            defaults: {
                duration: 1
            },
            paused: !0,
            onStart: () => {
                this.playing = !0
            }
            ,
            onComplete: () => {
                this.playing = !1
            }
        });
        return J.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0
        }),
        e.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0,
            x: 0,
            y: 10,
            rotateZ: 0
        }).set(this.DOM.icons[0], {
            yPercent: -140
        }).set(this.DOM.icons[1], {
            yPercent: 0
        }).to(this.DOM.get, {
            keyframes: [{
                x: -30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }).to(this.DOM.gsap, {
            keyframes: [{
                x: 30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }, "<").to(this.DOM.icons[0], {
            yPercent: 0,
            duration: .6,
            ease: "power3.in"
        }, "<.3").to(this.DOM.icons[1], {
            yPercent: 140,
            duration: .6,
            ease: "power3.out"
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            keyframes: [{
                scale: 0,
                zIndex: 2,
                duration: 0
            }, {
                y: () => J.utils.random(-80, -120),
                scale: 1
            }, {
                zIndex: -1,
                duration: .05
            }, {
                y: 0,
                scale: .3
            }],
            ease: this.eases.airtime,
            stagger: .15
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            x: () => J.utils.random(-50, 100),
            rotateZ: () => -360,
            ease: this.eases.rotaaaaate,
            stagger: .15
        }, "<"),
        e
    }
    playTimeline() {
        this.playing || this.tl.invalidate().play(0)
    }
}
class y0 extends Vt {
    init() {
        const e = {
            block: this.block,
            video: this.block.querySelector("video")
        };
        this.DOM = e
    }
    initEvents() {
        J.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 1240px)", () => {
            this.DOM.block.addEventListener("mouseenter", () => {
                this.playVideo()
            }
            ),
            this.DOM.block.addEventListener("mouseleave", () => {
                this.stopVideo()
            }
            )
        }
        )
    }
    playVideo() {
        this.pauseTimeout && clearTimeout(this.pauseTimeout),
        this.DOM.video.currentTime = 0,
        this.DOM.video.play()
    }
    stopVideo() {
        this.pauseTimeout = setTimeout( () => {
            this.DOM.video.pause()
        }
        , 1e3)
    }
}
J.registerPlugin(yi);
class v0 extends Vt {
    init() {
        Ll( () => {
            yi.create({
                smooth: 1.8,
                effects: !0
            }),
            document.body.classList.add("has-smooth-scroll")
        }
        )
    }
}
function w0(o, e) {
    for (var t = 0; t < e.length; t++) {
        var r = e[t];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(o, r.key, r)
    }
}
function rs(o) {
    return function(e) {
        if (Array.isArray(e))
            return xa(e)
    }(o) || function(e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(e))
            return Array.from(e)
    }(o) || function(e, t) {
        if (e) {
            if (typeof e == "string")
                return xa(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (r === "Object" && e.constructor && (r = e.constructor.name),
            r === "Map" || r === "Set")
                return Array.from(e);
            if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return xa(e, t)
        }
    }(o) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }()
}
function xa(o, e) {
    (e == null || e > o.length) && (e = o.length);
    for (var t = 0, r = new Array(e); t < e; t++)
        r[t] = o[t];
    return r
}
var xc, Ta, ki, Sa, Tc, _l = (xc = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
Ta = function() {
    function o(r) {
        var i = r.targetModal
          , n = r.triggers
          , s = n === void 0 ? [] : n
          , a = r.onShow
          , l = a === void 0 ? function() {}
        : a
          , u = r.onClose
          , f = u === void 0 ? function() {}
        : u
          , h = r.openTrigger
          , d = h === void 0 ? "data-micromodal-trigger" : h
          , c = r.closeTrigger
          , p = c === void 0 ? "data-micromodal-close" : c
          , g = r.openClass
          , _ = g === void 0 ? "is-open" : g
          , v = r.disableScroll
          , y = v !== void 0 && v
          , m = r.disableFocus
          , b = m !== void 0 && m
          , w = r.awaitCloseAnimation
          , T = w !== void 0 && w
          , k = r.awaitOpenAnimation
          , S = k !== void 0 && k
          , C = r.debugMode
          , B = C !== void 0 && C;
        (function($, M) {
            if (!($ instanceof M))
                throw new TypeError("Cannot call a class as a function")
        }
        )(this, o),
        this.modal = document.getElementById(i),
        this.config = {
            debugMode: B,
            disableScroll: y,
            openTrigger: d,
            closeTrigger: p,
            openClass: _,
            onShow: l,
            onClose: f,
            awaitCloseAnimation: T,
            awaitOpenAnimation: S,
            disableFocus: b
        },
        s.length > 0 && this.registerTriggers.apply(this, rs(s)),
        this.onClick = this.onClick.bind(this),
        this.onKeydown = this.onKeydown.bind(this)
    }
    var e, t;
    return e = o,
    (t = [{
        key: "registerTriggers",
        value: function() {
            for (var r = this, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                n[s] = arguments[s];
            n.filter(Boolean).forEach(function(a) {
                a.addEventListener("click", function(l) {
                    return r.showModal(l)
                })
            })
        }
    }, {
        key: "showModal",
        value: function() {
            var r = this
              , i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (this.activeElement = document.activeElement,
            this.modal.setAttribute("aria-hidden", "false"),
            this.modal.classList.add(this.config.openClass),
            this.scrollBehaviour("disable"),
            this.addEventListeners(),
            this.config.awaitOpenAnimation) {
                var n = function s() {
                    r.modal.removeEventListener("animationend", s, !1),
                    r.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", n, !1)
            } else
                this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, i)
        }
    }, {
        key: "closeModal",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null
              , i = this.modal;
            if (this.modal.setAttribute("aria-hidden", "true"),
            this.removeEventListeners(),
            this.scrollBehaviour("enable"),
            this.activeElement && this.activeElement.focus && this.activeElement.focus(),
            this.config.onClose(this.modal, this.activeElement, r),
            this.config.awaitCloseAnimation) {
                var n = this.config.openClass;
                this.modal.addEventListener("animationend", function s() {
                    i.classList.remove(n),
                    i.removeEventListener("animationend", s, !1)
                }, !1)
            } else
                i.classList.remove(this.config.openClass)
        }
    }, {
        key: "closeModalById",
        value: function(r) {
            this.modal = document.getElementById(r),
            this.modal && this.closeModal()
        }
    }, {
        key: "scrollBehaviour",
        value: function(r) {
            if (this.config.disableScroll) {
                var i = document.querySelector("body");
                switch (r) {
                case "enable":
                    Object.assign(i.style, {
                        overflow: ""
                    });
                    break;
                case "disable":
                    Object.assign(i.style, {
                        overflow: "hidden"
                    })
                }
            }
        }
    }, {
        key: "addEventListeners",
        value: function() {
            this.modal.addEventListener("touchstart", this.onClick),
            this.modal.addEventListener("click", this.onClick),
            document.addEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "removeEventListeners",
        value: function() {
            this.modal.removeEventListener("touchstart", this.onClick),
            this.modal.removeEventListener("click", this.onClick),
            document.removeEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "onClick",
        value: function(r) {
            (r.target.hasAttribute(this.config.closeTrigger) || r.target.parentNode.hasAttribute(this.config.closeTrigger)) && (r.preventDefault(),
            r.stopPropagation(),
            this.closeModal(r))
        }
    }, {
        key: "onKeydown",
        value: function(r) {
            r.keyCode === 27 && this.closeModal(r),
            r.keyCode === 9 && this.retainFocus(r)
        }
    }, {
        key: "getFocusableNodes",
        value: function() {
            var r = this.modal.querySelectorAll(xc);
            return Array.apply(void 0, rs(r))
        }
    }, {
        key: "setFocusToFirstNode",
        value: function() {
            var r = this;
            if (!this.config.disableFocus) {
                var i = this.getFocusableNodes();
                if (i.length !== 0) {
                    var n = i.filter(function(s) {
                        return !s.hasAttribute(r.config.closeTrigger)
                    });
                    n.length > 0 && n[0].focus(),
                    n.length === 0 && i[0].focus()
                }
            }
        }
    }, {
        key: "retainFocus",
        value: function(r) {
            var i = this.getFocusableNodes();
            if (i.length !== 0)
                if (i = i.filter(function(s) {
                    return s.offsetParent !== null
                }),
                this.modal.contains(document.activeElement)) {
                    var n = i.indexOf(document.activeElement);
                    r.shiftKey && n === 0 && (i[i.length - 1].focus(),
                    r.preventDefault()),
                    !r.shiftKey && i.length > 0 && n === i.length - 1 && (i[0].focus(),
                    r.preventDefault())
                } else
                    i[0].focus()
        }
    }]) && w0(e.prototype, t),
    o
}(),
ki = null,
Sa = function(o) {
    if (!document.getElementById(o))
        return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(o, '"></div>')),
        !1
}
,
Tc = function(o, e) {
    if (function(r) {
        r.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
    }(o),
    !e)
        return !0;
    for (var t in e)
        Sa(t);
    return !0
}
,
{
    init: function(o) {
        var e = Object.assign({}, {
            openTrigger: "data-micromodal-trigger"
        }, o)
          , t = rs(document.querySelectorAll("[".concat(e.openTrigger, "]")))
          , r = function(s, a) {
            var l = [];
            return s.forEach(function(u) {
                var f = u.attributes[a].value;
                l[f] === void 0 && (l[f] = []),
                l[f].push(u)
            }),
            l
        }(t, e.openTrigger);
        if (e.debugMode !== !0 || Tc(t, r) !== !1)
            for (var i in r) {
                var n = r[i];
                e.targetModal = i,
                e.triggers = rs(n),
                ki = new Ta(e)
            }
    },
    show: function(o, e) {
        var t = e || {};
        t.targetModal = o,
        t.debugMode === !0 && Sa(o) === !1 || (ki && ki.removeEventListeners(),
        (ki = new Ta(t)).showModal())
    },
    close: function(o) {
        o ? ki.closeModalById(o) : ki.closeModal()
    }
});
typeof window < "u" && (window.MicroModal = _l);
class b0 extends Vt {
    init() {
        this.DOM = {
            buttons: this.block.querySelectorAll(".button")
        },
        _l.init({
            disableScroll: !0
        })
    }
    initEvents() {
        this.DOM.buttons.forEach(e => {
            e.addEventListener("click", () => {
                setTimeout( () => {
                    _l.close(this.block.id)
                }
                , 10)
            }
            )
        }
        )
    }
}
class x0 extends Vt {
    init() {}
}
class T0 extends Vt {
    init() {
        this.plugins = document.querySelectorAll("[data-plugin]"),
        this.DOM = {
            clubGsapBadges: this.block.querySelectorAll("[data-club-gsap-badge]")
        },
        this.createPlugins()
    }
    createPlugins() {
        this.plugins.forEach(e => {
            switch (e.getAttribute("data-plugin")) {
            case "svg-morph-plugin":
                return new x0(e);
            default:
                return null
            }
        }
        )
    }
    initEvents() {
        this.DOM.clubGsapBadges.length && this.DOM.clubGsapBadges.forEach(e => {
            const t = e.querySelector("svg")
              , r = t.querySelector("path")
              , i = J.timeline({
                paused: !0
            });
            i.to(t, {
                rotateY: 90,
                duration: .3,
                ease: "power2.in"
            }).set(r, {
                fill: "var(--color-shockingly-green)"
            }).to(t, {
                rotateY: 180,
                duration: .3,
                ease: "power2.out"
            }),
            e.addEventListener("mouseenter", () => {
                i.play()
            }
            ),
            e.addEventListener("mouseleave", () => {
                i.reverse()
            }
            )
        }
        )
    }
}
const S0 = typeof window < "u";
S0 && (J.registerPlugin(J, ge, yi, _i, Ka, al),
window.gsap = J,
window.ScrollTrigger = ge,
window.CustomEase = _i,
window.MotionPathPlugin = Ka,
window.DrawSVGPlugin = al);
class k0 extends Hh {
    createBlock(e, t) {
        switch (e) {
        case "scroll-hero":
            return new v0(t);
        case "brands":
            return new sp(t);
        case "button":
            return new ap(t);
        case "demos":
            return new g0(t);
        case "get-gsap-btn":
            return new m0(t);
        case "hover-video":
            return new y0(t);
        case "showcase":
            return new qg(t);
        case "subtitle":
            return new d0(t);
        case "video":
            return new h0(t);
        case "more-links":
            return new p0(t);
        case "testimonials":
            return new _0(t);
        case "tooltip":
            return new b0(t);
        case "plugins":
            return new T0(t);
        default:
            return null
        }
    }
}
new k0;
export {_i as C, Vt as D, Wl as I, Ka as M, ge as S, Af as _, al as a, yi as b, Hh as c, qi as d, Mo as e, vu as f, J as g, M0 as h, za as i, wp as j, Kt as k, Hi as l, $p as m, Ip as n, Yp as o, Ya as p, ss as q, Rl as r, P0 as s, fn as t, kp as u, bp as v, Ll as w};
//# sourceMappingURL=index-79f4ab86.js.map

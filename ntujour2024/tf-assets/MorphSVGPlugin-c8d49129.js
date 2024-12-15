import {e as D, r as v, q as _t, u as ht, v as Y} from "./index-79f4ab86.js";
/*!
 * MorphSVGPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var P, W, X, at, O, ct = function() {
    return P || typeof window < "u" && (P = window.gsap) && P.registerPlugin && P
}, U = function(t) {
    return typeof t == "function"
}, b = Math.atan2, K = Math.cos, Z = Math.sin, T = Math.sqrt, Q = Math.PI, I = Q * 2, ut = Q * .3, yt = Q * .7, gt = 1e20, q = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, dt = /(^[#\.][a-z]|[a-y][a-z])/i, mt = /[achlmqstvz]/i, z = function(t) {
    return console && console.warn(t)
}, St = 1, tt = function(t) {
    var e = t.length, o = 0, l = 0, f;
    for (f = 0; f < e; f++)
        o += t[f++],
        l += t[f];
    return [o / (e / 2), l / (e / 2)]
}, C = function(t) {
    var e = t.length, o = t[0], l = o, f = t[1], i = f, r, s, c;
    for (c = 6; c < e; c += 6)
        r = t[c],
        s = t[c + 1],
        r > o ? o = r : r < l && (l = r),
        s > f ? f = s : s < i && (i = s);
    return t.centerX = (o + l) / 2,
    t.centerY = (f + i) / 2,
    t.size = (o - l) * (f - i)
}, G = function(t, e) {
    e === void 0 && (e = 3);
    for (var o = t.length, l = t[0][0], f = l, i = t[0][1], r = i, s = 1 / e, c, u, _, n, a, d, p, g, h, x, m, y, M, w, A, F; --o > -1; )
        for (a = t[o],
        c = a.length,
        n = 6; n < c; n += 6)
            for (h = a[n],
            x = a[n + 1],
            m = a[n + 2] - h,
            w = a[n + 3] - x,
            y = a[n + 4] - h,
            A = a[n + 5] - x,
            M = a[n + 6] - h,
            F = a[n + 7] - x,
            d = e; --d > -1; )
                p = s * d,
                g = 1 - p,
                u = (p * p * M + 3 * g * (p * y + g * m)) * p + h,
                _ = (p * p * F + 3 * g * (p * A + g * w)) * p + x,
                u > l ? l = u : u < f && (f = u),
                _ > i ? i = _ : _ < r && (r = _);
    return t.centerX = (l + f) / 2,
    t.centerY = (i + r) / 2,
    t.left = f,
    t.width = l - f,
    t.top = r,
    t.height = i - r,
    t.size = (l - f) * (i - r)
}, xt = function(t, e) {
    return e.length - t.length
}, et = function(t, e) {
    var o = t.size || C(t)
      , l = e.size || C(e);
    return Math.abs(l - o) < (o + l) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : l - o
}, it = function(t, e) {
    var o = t.slice(0), l = t.length, f = l - 2, i, r;
    for (e = e | 0,
    i = 0; i < l; i++)
        r = (i + e) % f,
        t[i++] = o[r],
        t[i] = o[r + 1]
}, B = function(t, e, o, l, f) {
    var i = t.length, r = 0, s = i - 2, c, u, _, n;
    for (o *= 6,
    u = 0; u < i; u += 6)
        c = (u + o) % s,
        n = t[c] - (e[u] - l),
        _ = t[c + 1] - (e[u + 1] - f),
        r += T(_ * _ + n * n);
    return r
}, Mt = function(t, e, o) {
    var l = t.length, f = tt(t), i = tt(e), r = i[0] - f[0], s = i[1] - f[1], c = B(t, e, 0, r, s), u = 0, _, n, a;
    for (a = 6; a < l; a += 6)
        n = B(t, e, a / 6, r, s),
        n < c && (c = n,
        u = a);
    if (o)
        for (_ = t.slice(0),
        Y(_),
        a = 6; a < l; a += 6)
            n = B(_, e, a / 6, r, s),
            n < c && (c = n,
            u = -a);
    return u / 6
}, Pt = function(t, e, o) {
    for (var l = t.length, f = gt, i = 0, r = 0, s, c, u, _, n, a; --l > -1; )
        for (s = t[l],
        a = s.length,
        n = 0; n < a; n += 6)
            c = s[n] - e,
            u = s[n + 1] - o,
            _ = T(c * c + u * u),
            _ < f && (f = _,
            i = s[n],
            r = s[n + 1]);
    return [i, r]
}, wt = function(t, e, o, l, f, i) {
    var r = e.length, s = 0, c = Math.min(t.size || C(t), e[o].size || C(e[o])) * l, u = gt, _ = t.centerX + f, n = t.centerY + i, a, d, p, g, h;
    for (d = o; d < r && (a = e[d].size || C(e[d]),
    !(a < c)); d++)
        p = e[d].centerX - _,
        g = e[d].centerY - n,
        h = T(p * p + g * g),
        h < u && (s = d,
        u = h);
    return h = e[s],
    e.splice(s, 1),
    h
}, L = function(t, e) {
    var o = 0, l = .999999, f = t.length, i = e / ((f - 2) / 6), r, s, c, u, _, n, a, d, p, g, h, x, m, y;
    for (m = 2; m < f; m += 6)
        for (o += i; o > l; )
            r = t[m - 2],
            s = t[m - 1],
            c = t[m],
            u = t[m + 1],
            _ = t[m + 2],
            n = t[m + 3],
            a = t[m + 4],
            d = t[m + 5],
            y = 1 / ((Math.floor(o) || 1) + 1),
            p = r + (c - r) * y,
            h = c + (_ - c) * y,
            p += (h - p) * y,
            h += (_ + (a - _) * y - h) * y,
            g = s + (u - s) * y,
            x = u + (n - u) * y,
            g += (x - g) * y,
            x += (n + (d - n) * y - x) * y,
            t.splice(m, 4, r + (c - r) * y, s + (u - s) * y, p, g, p + (h - p) * y, g + (x - g) * y, h, x, _ + (a - _) * y, n + (d - n) * y),
            m += 6,
            f += 6,
            o--;
    return t
}, E = function(t, e, o, l, f) {
    var i = e.length - t.length, r = i > 0 ? e : t, s = i > 0 ? t : e, c = 0, u = l === "complexity" ? xt : et, _ = l === "position" ? 0 : typeof l == "number" ? l : .8, n = s.length, a = typeof o == "object" && o.push ? o.slice(0) : [o], d = a[0] === "reverse" || a[0] < 0, p = o === "log", g, h, x, m, y, M, w;
    if (s[0]) {
        if (r.length > 1 && (t.sort(u),
        e.sort(u),
        M = r.size || G(r),
        M = s.size || G(s),
        M = r.centerX - s.centerX,
        w = r.centerY - s.centerY,
        u === et))
            for (n = 0; n < s.length; n++)
                r.splice(n, 0, wt(s[n], r, n, _, M, w));
        if (i)
            for (i < 0 && (i = -i),
            r[0].length > s[0].length && L(s[0], (r[0].length - s[0].length) / 6 | 0),
            n = s.length; c < i; )
                m = r[n].size || C(r[n]),
                x = Pt(s, r[n].centerX, r[n].centerY),
                m = x[0],
                y = x[1],
                s[n++] = [m, y, m, y, m, y, m, y],
                s.totalPoints += 8,
                c++;
        for (n = 0; n < t.length; n++)
            g = e[n],
            h = t[n],
            i = g.length - h.length,
            i < 0 ? L(g, -i / 6 | 0) : i > 0 && L(h, i / 6 | 0),
            d && f !== !1 && !h.reversed && Y(h),
            o = a[n] || a[n] === 0 ? a[n] : "auto",
            o && (h.closed || Math.abs(h[0] - h[h.length - 2]) < .5 && Math.abs(h[1] - h[h.length - 1]) < .5 ? o === "auto" || o === "log" ? (a[n] = o = Mt(h, g, !n || f === !1),
            o < 0 && (d = !0,
            Y(h),
            o = -o),
            it(h, o * 6)) : o !== "reverse" && (n && o < 0 && Y(h),
            it(h, (o < 0 ? -o : o) * 6)) : !d && (o === "auto" && Math.abs(g[0] - h[0]) + Math.abs(g[1] - h[1]) + Math.abs(g[g.length - 2] - h[h.length - 2]) + Math.abs(g[g.length - 1] - h[h.length - 1]) > Math.abs(g[0] - h[h.length - 2]) + Math.abs(g[1] - h[h.length - 1]) + Math.abs(g[g.length - 2] - h[0]) + Math.abs(g[g.length - 1] - h[1]) || o % 2) ? (Y(h),
            a[n] = -1,
            d = !0) : o === "auto" ? a[n] = 0 : o === "reverse" && (a[n] = -1),
            h.closed !== g.closed && (h.closed = g.closed = !1));
        return p && z("shapeIndex:[" + a.join(",") + "]"),
        t.shapeIndex = a,
        a
    }
}, nt = function(t, e, o, l, f) {
    var i = D(t[0])
      , r = D(t[1]);
    E(i, r, e || e === 0 ? e : "auto", o, f) && (t[0] = v(i),
    t[1] = v(r),
    (l === "log" || l === !0) && z('precompile:["' + t[0] + '","' + t[1] + '"]'))
}, Tt = function(t, e) {
    if (!e)
        return t;
    var o = t.match(q) || [], l = o.length, f = "", i, r, s;
    for (e === "reverse" ? (r = l - 1,
    i = -2) : (r = ((parseInt(e, 10) || 0) * 2 + 1 + l * 100) % l,
    i = 2),
    s = 0; s < l; s += 2)
        f += o[r - 1] + "," + o[r] + " ",
        r = (r + i) % l;
    return f
}, ot = function(t, e) {
    var o = 0, l = parseFloat(t[0]), f = parseFloat(t[1]), i = l + "," + f + " ", r = .999999, s, c, u, _, n, a, d;
    for (u = t.length,
    s = e * .5 / (u * .5 - 1),
    c = 0; c < u - 2; c += 2) {
        if (o += s,
        a = parseFloat(t[c + 2]),
        d = parseFloat(t[c + 3]),
        o > r)
            for (n = 1 / (Math.floor(o) + 1),
            _ = 1; o > r; )
                i += (l + (a - l) * n * _).toFixed(2) + "," + (f + (d - f) * n * _).toFixed(2) + " ",
                o--,
                _++;
        i += a + "," + d + " ",
        l = a,
        f = d
    }
    return i
}, k = function(t) {
    var e = t[0].match(q) || []
      , o = t[1].match(q) || []
      , l = o.length - e.length;
    l > 0 ? t[0] = ot(e, l) : t[1] = ot(o, -l)
}, At = function(t) {
    return isNaN(t) ? k : function(e) {
        k(e),
        e[1] = Tt(e[1], parseInt(t, 10))
    }
}, zt = function(t, e, o) {
    var l = typeof t == "string", f, i;
    return (!l || dt.test(t) || (t.match(q) || []).length < 3) && (f = W(t)[0],
    f ? (i = (f.nodeName + "").toUpperCase(),
    e && i !== "PATH" && (f = ht(f, !1),
    i = "PATH"),
    t = f.getAttribute(i === "PATH" ? "d" : "points") || "",
    f === o && (t = f.getAttributeNS(null, "data-original") || t)) : (z("WARNING: invalid morph to: " + t),
    t = !1)),
    t
}, rt = function(t, e) {
    for (var o = t.length, l = .2 * (e || 1), f, i, r, s, c, u, _, n, a, d, p, g; --o > -1; ) {
        for (i = t[o],
        p = i.isSmooth = i.isSmooth || [0, 0, 0, 0],
        g = i.smoothData = i.smoothData || [0, 0, 0, 0],
        p.length = 4,
        n = i.length - 2,
        _ = 6; _ < n; _ += 6)
            r = i[_] - i[_ - 2],
            s = i[_ + 1] - i[_ - 1],
            c = i[_ + 2] - i[_],
            u = i[_ + 3] - i[_ + 1],
            a = b(s, r),
            d = b(u, c),
            f = Math.abs(a - d) < l,
            f && (g[_ - 2] = a,
            g[_ + 2] = d,
            g[_ - 1] = T(r * r + s * s),
            g[_ + 3] = T(c * c + u * u)),
            p.push(f, f, 0, 0, f, f);
        i[n] === i[0] && i[n + 1] === i[1] && (r = i[0] - i[n - 2],
        s = i[1] - i[n - 1],
        c = i[2] - i[0],
        u = i[3] - i[1],
        a = b(s, r),
        d = b(u, c),
        Math.abs(a - d) < l && (g[n - 2] = a,
        g[2] = d,
        g[n - 1] = T(r * r + s * s),
        g[3] = T(c * c + u * u),
        p[n - 2] = p[n - 1] = !0))
    }
    return t
}, st = function(t) {
    var e = t.trim().split(" ")
      , o = ~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])
      , l = ~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1]);
    return {
        x: o / 100,
        y: l / 100
    }
}, bt = function(t) {
    return t !== t % Q ? t + (t < 0 ? I : -I) : t
}, lt = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.", Ft = function(t, e, o, l) {
    var f = this._origin, i = this._eOrigin, r = t[o] - f.x, s = t[o + 1] - f.y, c = T(r * r + s * s), u = b(s, r), _, n;
    return r = e[o] - i.x,
    s = e[o + 1] - i.y,
    _ = b(s, r) - u,
    n = bt(_),
    !l && X && Math.abs(n + X.ca) < ut && (l = X),
    this._anchorPT = X = {
        _next: this._anchorPT,
        t,
        sa: u,
        ca: l && n * l.ca < 0 && Math.abs(n) > yt ? _ : n,
        sl: c,
        cl: T(r * r + s * s) - c,
        i: o
    }
}, ft = function(t) {
    P = ct(),
    O = O || P && P.plugins.morphSVG,
    P && O ? (W = P.utils.toArray,
    O.prototype._tweenRotation = Ft,
    at = 1) : t && z("Please gsap.registerPlugin(MorphSVGPlugin)")
}, j = {
    version: "3.11.3",
    name: "morphSVG",
    rawVars: 1,
    register: function(t, e) {
        P = t,
        O = e,
        ft()
    },
    init: function(t, e, o, l, f) {
        if (at || ft(1),
        !e)
            return z("invalid shape"),
            !1;
        U(e) && (e = e.call(o, l, t, f));
        var i, r, s, c, u, _, n, a, d, p, g, h, x, m, y, M, w, A, F, N, V, R;
        if (typeof e == "string" || e.getBBox || e[0])
            e = {
                shape: e
            };
        else if (typeof e == "object") {
            i = {};
            for (r in e)
                i[r] = U(e[r]) && r !== "render" ? e[r].call(o, l, t, f) : e[r];
            e = i
        }
        var $ = t.nodeType ? window.getComputedStyle(t) : {}
          , J = $.fill + ""
          , pt = !(J === "none" || (J.match(q) || [])[3] === "0" || $.fillRule === "evenodd")
          , H = (e.origin || "50 50").split(",");
        if (i = (t.nodeName + "").toUpperCase(),
        u = i === "POLYLINE" || i === "POLYGON",
        i !== "PATH" && !u && !e.prop)
            return z("Cannot morph a <" + i + "> element. " + lt),
            !1;
        if (r = i === "PATH" ? "d" : "points",
        !e.prop && !U(t.setAttribute))
            return !1;
        if (c = zt(e.shape || e.d || e.points || "", r === "d", t),
        u && mt.test(c))
            return z("A <" + i + "> cannot accept path data. " + lt),
            !1;
        if (_ = e.shapeIndex || e.shapeIndex === 0 ? e.shapeIndex : "auto",
        n = e.map || j.defaultMap,
        this._prop = e.prop,
        this._render = e.render || j.defaultRender,
        this._apply = "updateTarget"in e ? e.updateTarget : j.defaultUpdateTarget,
        this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision),
        this._tween = o,
        c) {
            if (this._target = t,
            w = typeof e.precompile == "object",
            p = this._prop ? t[this._prop] : t.getAttribute(r),
            !this._prop && !t.getAttributeNS(null, "data-original") && t.setAttributeNS(null, "data-original", p),
            r === "d" || this._prop) {
                if (p = D(w ? e.precompile[0] : p),
                g = D(w ? e.precompile[1] : c),
                !w && !E(p, g, _, n, pt))
                    return !1;
                for ((e.precompile === "log" || e.precompile === !0) && z('precompile:["' + v(p) + '","' + v(g) + '"]'),
                V = (e.type || j.defaultType) !== "linear",
                V && (p = rt(p, e.smoothTolerance),
                g = rt(g, e.smoothTolerance),
                p.size || G(p),
                g.size || G(g),
                N = st(H[0]),
                this._origin = p.origin = {
                    x: p.left + N.x * p.width,
                    y: p.top + N.y * p.height
                },
                H[1] && (N = st(H[1])),
                this._eOrigin = {
                    x: g.left + N.x * g.width,
                    y: g.top + N.y * g.height
                }),
                this._rawPath = t._gsRawPath = p,
                x = p.length; --x > -1; )
                    for (y = p[x],
                    M = g[x],
                    a = y.isSmooth || [],
                    d = M.isSmooth || [],
                    m = y.length,
                    X = 0,
                    h = 0; h < m; h += 2)
                        (M[h] !== y[h] || M[h + 1] !== y[h + 1]) && (V ? a[h] && d[h] ? (A = y.smoothData,
                        F = M.smoothData,
                        R = h + (h === m - 4 ? 7 - m : 5),
                        this._controlPT = {
                            _next: this._controlPT,
                            i: h,
                            j: x,
                            l1s: A[h + 1],
                            l1c: F[h + 1] - A[h + 1],
                            l2s: A[R],
                            l2c: F[R] - A[R]
                        },
                        s = this._tweenRotation(y, M, h + 2),
                        this._tweenRotation(y, M, h, s),
                        this._tweenRotation(y, M, R - 1, s),
                        h += 4) : this._tweenRotation(y, M, h) : (s = this.add(y, h, y[h], M[h], 0, 0, 0, 0, 0, 1),
                        s = this.add(y, h + 1, y[h + 1], M[h + 1], 0, 0, 0, 0, 0, 1) || s))
            } else
                s = this.add(t, "setAttribute", t.getAttribute(r) + "", c + "", l, f, 0, At(_), r);
            V && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x, 0, 0, 0, 0, 0, 1),
            s = this.add(this._origin, "y", this._origin.y, this._eOrigin.y, 0, 0, 0, 0, 0, 1)),
            s && (this._props.push("morphSVG"),
            s.end = c,
            s.endProp = r)
        }
        return St
    },
    render: function(t, e) {
        for (var o = e._rawPath, l = e._controlPT, f = e._anchorPT, i = e._rnd, r = e._target, s = e._pt, c, u, _, n, a, d, p, g, h, x, m, y, M; s; )
            s.r(t, s.d),
            s = s._next;
        if (t === 1 && e._apply)
            for (s = e._pt; s; )
                s.end && (e._prop ? r[e._prop] = s.end : r.setAttribute(s.endProp, s.end)),
                s = s._next;
        else if (o) {
            for (; f; )
                d = f.sa + t * f.ca,
                a = f.sl + t * f.cl,
                f.t[f.i] = e._origin.x + K(d) * a,
                f.t[f.i + 1] = e._origin.y + Z(d) * a,
                f = f._next;
            for (_ = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; l; )
                p = l.i,
                n = o[l.j],
                M = p + (p === n.length - 4 ? 7 - n.length : 5),
                d = b(n[M] - n[p + 1], n[M - 1] - n[p]),
                m = Z(d),
                y = K(d),
                h = n[p + 2],
                x = n[p + 3],
                a = l.l1s + _ * l.l1c,
                n[p] = h - y * a,
                n[p + 1] = x - m * a,
                a = l.l2s + _ * l.l2c,
                n[M - 1] = h + y * a,
                n[M] = x + m * a,
                l = l._next;
            if (r._gsRawPath = o,
            e._apply) {
                for (c = "",
                u = " ",
                g = 0; g < o.length; g++)
                    for (n = o[g],
                    a = n.length,
                    c += "M" + (n[0] * i | 0) / i + u + (n[1] * i | 0) / i + " C",
                    p = 2; p < a; p++)
                        c += (n[p] * i | 0) / i + u;
                e._prop ? r[e._prop] = c : r.setAttribute("d", c)
            }
        }
        e._render && o && e._render.call(e._tween, o, r)
    },
    kill: function(t) {
        this._pt = this._rawPath = 0
    },
    getRawPath: _t,
    stringToRawPath: D,
    rawPathToString: v,
    normalizeStrings: function(t, e, o) {
        var l = o.shapeIndex
          , f = o.map
          , i = [t, e];
        return nt(i, l, f),
        i
    },
    pathFilter: nt,
    pointsFilter: k,
    getTotalSize: G,
    equalizeSegmentQuantity: E,
    convertToPath: function(t, e) {
        return W(t).map(function(o) {
            return ht(o, e !== !1)
        })
    },
    defaultType: "linear",
    defaultUpdateTarget: !0,
    defaultMap: "size"
};
ct() && P.registerPlugin(j);
export {j as M};
//# sourceMappingURL=MorphSVGPlugin-c8d49129.js.map

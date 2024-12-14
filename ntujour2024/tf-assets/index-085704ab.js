import {g as r, a as G, M as k, C as W, D as q, w as b, l as f, I as A, c as V} from "./index-79f4ab86.js";
import {M as R} from "./MorphSVGPlugin-c8d49129.js";
import {S as C} from "./SplitText-7307e934.js";
/*!
 * CustomWiggle 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var g, T, d, L = function() {
    return g || typeof window < "u" && (g = window.gsap) && g.registerPlugin && g
}, m = {
    easeOut: "M0,1,C0.7,1,0.6,0,1,0",
    easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
    anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
    uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
}, X = function(e) {
    return e
}, O = function(e) {
    if (!T)
        if (g = L(),
        d = g && g.parseEase("_CE"),
        d) {
            for (var t in m)
                m[t] = d("", m[t]);
            T = 1,
            v("wiggle").config = function(i) {
                return typeof i == "object" ? v("", i) : v("wiggle(" + i + ")", {
                    wiggles: +i
                })
            }
        } else
            e && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
}, _ = function(e, t) {
    return typeof e != "function" && (e = g.parseEase(e) || d("", e)),
    e.custom || !t ? e : function(i) {
        return 1 - e(i)
    }
}, v = function(e, t) {
    T || O(1),
    t = t || {};
    var i = (t.wiggles || 10) | 0, h = 1 / i, a = h / 2, D = t.type === "anticipate", u = m[t.type] || m.easeOut, c = X, M = 1e3, y, w, x, E, P, p, o, s, n;
    {
        if (D && (c = u,
        u = m.easeOut),
        t.timingEase && (c = _(t.timingEase)),
        t.amplitudeEase && (u = _(t.amplitudeEase, !0)),
        p = c(a),
        o = D ? -u(a) : u(a),
        s = [0, 0, p / 4, 0, p / 2, o, p, o],
        t.type === "random") {
            for (s.length = 4,
            y = c(h),
            w = Math.random() * 2 - 1,
            n = 2; n < i; n++)
                a = y,
                o = w,
                y = c(h * n),
                w = Math.random() * 2 - 1,
                x = Math.atan2(w - s[s.length - 3], y - s[s.length - 4]),
                E = Math.cos(x) * h,
                P = Math.sin(x) * h,
                s.push(a - E, o - P, a, o, a + E, o + P);
            s.push(y, 0, 1, 0)
        } else {
            for (n = 1; n < i; n++)
                s.push(c(a + h / 2), o),
                a += h,
                o = (o > 0 ? -1 : 1) * u(n * h),
                p = c(a),
                s.push(c(a - h / 2), o, p, o);
            s.push(c(a + h / 4), o, c(a + h / 4), 0, 1, 0)
        }
        for (n = s.length; --n > -1; )
            s[n] = ~~(s[n] * M) / M;
        return s[2] = "C" + s[2],
        d(e, "M" + s.join(","))
    }
}, S = function() {
    function l(e, t) {
        this.ease = v(e, t)
    }
    return l.create = function(t, i) {
        return v(t, i)
    }
    ,
    l.register = function(t) {
        g = t,
        O()
    }
    ,
    l
}();
L() && g.registerPlugin(S);
S.version = "3.11.3";
r.registerPlugin(G, k, W);
class j extends q {
    init() {
        const e = this.block.querySelector(".svg-hero-flair")
          , t = {
            path: e.querySelector(".svg-hero-flair--path"),
            star: e.querySelector(".svg-hero-flair--star"),
            circles: e.querySelectorAll(".svg-hero-flair--circle"),
            anchor: e.querySelector(".svg-hero-flair--anchor"),
            anchorPath: e.querySelector(".svg-hero-flair--anchor-path"),
            anchorRect: e.querySelectorAll(".svg-hero-flair--anchor-rect path")
        };
        this.el = t,
        this.initHero()
    }
    setElements() {
        r.set([this.el.path, this.el.star], {
            visibility: "visible"
        }),
        r.set(this.el.anchor, {
            transformOrigin: "50% 50%"
        }),
        r.set(this.el.anchorPath, {
            scaleX: 1,
            visibility: "visible"
        }),
        r.set(this.el.star, {
            scale: 1
        }),
        r.set([this.el.circles, this.el.anchorRect], {
            scale: 1,
            visibility: "visible"
        }),
        b( () => {
            r.set(this.el.anchorPath, {
                scaleX: 0,
                transformOrigin: "50% 50%",
                visibility: "visible"
            }),
            r.set(this.el.star, {
                scale: 0
            }),
            r.set([this.el.circles, this.el.anchorRect], {
                scale: 0,
                visibility: "visible",
                transformOrigin: "center center"
            })
        }
        )
    }
    pathMotion() {
        const e = W.create("custom", "M0,0 C0.096,0.014 0.212,0.101 0.242,0.134 0.418,0.328 0.788,0.754 1,1 ")
          , t = r.timeline({
            repeat: -1,
            repeatDelay: 1,
            defaults: {
                ease: "back.inOut(1.1)"
            }
        });
        return b( () => {
            t.fromTo(this.el.path, {
                drawSVG: 0
            }, {
                drawSVG: "100% 0%",
                ease: e,
                duration: 2.5
            }, 0),
            t.to(this.el.circles, {
                keyframes: {
                    scale: [0, 1.5, 1],
                    easeEach: "back.out(1.1)"
                },
                stagger: .1,
                duration: .5
            }, 2),
            t.to(this.el.anchorPath, {
                scaleX: 1,
                duration: 1
            }, 2.5),
            t.to(this.el.anchorRect, {
                keyframes: {
                    scale: [0, 1.5, 1],
                    easeEach: "back.out(1.1)"
                },
                stagger: .1,
                duration: .5
            }, 2.75),
            t.to(this.el.anchor, {
                rotate: -10,
                y: -2.5,
                duration: .5
            }, 2.75),
            t.to(this.el.star, {
                motionPath: {
                    path: this.el.path,
                    align: this.el.path,
                    alignOrigin: [.5, .5],
                    autoRotate: !0
                },
                ease: e,
                duration: 2.5
            }, 3),
            t.to(this.el.star, {
                scale: 1,
                duration: .5
            }, 3),
            t.to(this.el.path, {
                drawSVG: "100% 100%",
                ease: e,
                duration: 2.5
            }, 3.25),
            t.to(this.el.anchorPath, {
                scaleX: 0,
                duration: .5
            }, 4.25),
            t.to(this.el.anchorRect, {
                keyframes: {
                    scale: [1, 1.5, 0],
                    easeEach: "back.out(1.1)"
                },
                stagger: .1,
                duration: .5
            }, 4.25),
            t.to(this.el.circles, {
                keyframes: {
                    scale: [1, 1.5, 0],
                    easeEach: "back.out(1.1)"
                },
                stagger: .1,
                duration: .5
            }, 4.5),
            t.to(this.el.star, {
                scale: 0,
                duration: .5
            }, 5.75)
        }
        ),
        t
    }
    initHero() {
        this.setElements(),
        this.pathMotion()
    }
}
r.registerPlugin(R, C, k);
class B extends q {
    init() {
        const e = {
            morphParent: this.block.querySelector("#svg-morph-flair"),
            saveTimePath: this.block.querySelector("#svg-morph-save-time--path"),
            heavyLiftingPath: this.block.querySelector("#svg-morph-heavy-lifting--path"),
            saveTimeText: this.block.querySelector(".svg-morph__text--save-time"),
            heavyLiftingText: this.block.querySelector(".svg-morph__text--heavy-lifting"),
            saveTimeElements: this.block.querySelectorAll("#svg-morph-save-time-points .svg-morph-point"),
            heavyLiftingElements: this.block.querySelectorAll("#svg-morph-heavy-lifting-points .svg-morph-point"),
            pointsElements: this.block.querySelectorAll("#svg-morph-points .svg-morph-point"),
            saveTimeTextSplit: null,
            heavyLiftingTextSplit: null
        };
        this.el = e,
        this.positions = [],
        this.initMorph()
    }
    splitMorphText() {
        this.el.saveTimeTextSplit = new C(this.el.saveTimeText,{
            type: "words"
        }),
        this.el.heavyLiftingTextSplit = new C(this.el.heavyLiftingText,{
            type: "words"
        }),
        r.set(this.el.heavyLiftingTextSplit.words, {
            y: 180
        })
    }
    calculatePositions() {
        this.el.saveTimeElements.forEach( (e, t) => {
            const i = this.el.heavyLiftingElements[t];
            this.positions[t] = k.getRelativePosition(e, i, [.5, .5], [.5, .5])
        }
        )
    }
    morphAnimation() {
        const e = r.timeline({
            repeat: -1,
            repeatDelay: 1,
            yoyo: !0,
            defaults: {
                duration: 1,
                ease: "back.inOut(1.1)"
            }
        });
        return b( () => {
            e.to(this.el.saveTimeTextSplit.words, {
                y: 180
            }, 0),
            e.to(this.el.heavyLiftingTextSplit.words, {
                y: 0
            }, 0),
            this.el.saveTimeElements.forEach( (t, i) => {
                e.to(t, {
                    x: this.positions[i].x,
                    y: this.positions[i].y,
                    duration: .75
                }, 0)
            }
            ),
            e.to(this.el.saveTimePath, {
                ease: "power2.inOut",
                duration: .75,
                morphSVG: {
                    shape: this.el.heavyLiftingPath,
                    type: "rotational"
                }
            }, 0),
            e.to(this.el.morphParent, {
                duration: .75,
                rotate: -90
            }, 0)
        }
        ),
        e
    }
    initMorph() {
        this.splitMorphText(),
        this.calculatePositions(),
        this.morphAnimation(),
        window.addEventListener("resize", this.calculatePositions.bind(this))
    }
}
r.registerPlugin(f, A, S);
class I extends q {
    init() {
        const e = {
            objects: this.block.querySelector(".svg-drag__objects"),
            flower: this.block.querySelector("#svg-drag--flower"),
            polygon: this.block.querySelector("#svg-drag--polygon"),
            semiCirlce: this.block.querySelector("#svg-drag--semiCirlce"),
            circle: this.block.querySelector("#svg-drag--circle"),
            flowerWrapper: this.block.querySelector("#svg-drag-item--flower"),
            polygonWrapper: this.block.querySelector("#svg-drag-item--polygon"),
            semiCirlceWrapper: this.block.querySelector("#svg-drag-item--semiCirlce"),
            circleWrapper: this.block.querySelector("#svg-drag-item--circle")
        };
        this.el = e,
        this.flowerDraggable = null,
        this.polygonDraggable = null,
        this.semiCircleDraggable = null,
        this.circleDraggable = null,
        this.bounds = this.el.objects,
        this.initSVGDrag()
    }
    wiggle() {
        S.create("wiggle", {
            wiggles: 10,
            type: "anticipate"
        });
        const e = r.timeline({
            repeat: -1,
            repeatDelay: 3,
            defaults: {
                ease: "wiggle",
                duration: 2
            }
        });
        e.to([this.el.flowerWrapper, this.el.semiCirlceWrapper], {
            rotation: 5,
            stagger: 2.5
        }),
        e.to([this.el.polygonWrapper, this.el.circleWrapper], {
            y: 10,
            stagger: 2.5
        })
    }
    flowerInstance() {
        this.flowerDraggable = f.create(this.el.flower, {
            type: "rotation",
            inertia: !0,
            throwProps: !0,
            maxDuration: 1
        })
    }
    semiCircleInstance() {
        this.semiCircleDraggable = f.create(this.el.semiCirlce, {
            type: "rotation",
            inertia: !0,
            throwProps: !0,
            maxDuration: 1
        })
    }
    polygonInstance() {
        const e = this.el.polygon;
        this.polygonDraggable = f.create(e, {
            inertia: !0,
            overshootTolerance: 0,
            maxDuration: 1,
            bounds: this.bounds,
            zIndexBoost: !1,
            onThrowComplete: function() {
                r.to(e, {
                    x: 0,
                    y: 0,
                    duration: .5
                })
            }
        })
    }
    circleInstance() {
        const e = this.el.circle;
        this.circleDraggable = f.create(e, {
            inertia: !0,
            overshootTolerance: 0,
            maxDuration: 1,
            bounds: this.bounds,
            zIndexBoost: !1,
            onThrowComplete: function() {
                r.to(e, {
                    x: 0,
                    y: 0,
                    duration: .5
                })
            }
        })
    }
    initSVGDrag() {
        b( () => {
            this.flowerInstance(),
            this.polygonInstance(),
            this.semiCircleInstance(),
            this.circleInstance(),
            this.wiggle()
        }
        )
    }
}
class z extends V {
    createBlock(e, t) {
        switch (e) {
        case "svg-hero":
            return new j(t);
        case "svg-morph":
            return new B(t);
        case "svg-drag":
            return new I(t);
        case "svg-drag":
            return new I(t);
        default:
            return null
        }
    }
}
new z;
//# sourceMappingURL=index-085704ab.js.map

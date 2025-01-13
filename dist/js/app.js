(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function functions_getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerClose.classList.remove("_spoller-active");
                        _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = functions_getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            await response.json();
                            form.classList.remove("_sending");
                            formSent(form);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoblock_gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll("select");
                    if (selectItems.length) {
                        this.selectsInit(selectItems);
                        this.setLogging(`Проснулся, построил селектов: (${selectItems.length})`);
                    } else this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                selectItem.classList.add(originalSelect.getAttribute("class") ? `select_${originalSelect.getAttribute("class")}` : "");
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) selectOptionsItem.hidden = false; else selectOptionsItem.hidden = true;
                    }));
                    selectOptions.hidden === true ? _this.selectAction(selectItem) : null;
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message}`) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        function switchLanguage() {
            const lableLanguage = document.querySelectorAll(".language-top-content__lable");
            const dropdownLanguages = document.querySelectorAll(".language-top-content__dropdown");
            lableLanguage.forEach(((element, index) => {
                const dropdownLanguage = dropdownLanguages[index];
                element.addEventListener("click", (function(e) {
                    dropdownLanguage.classList.toggle("dropdown-open");
                    if (dropdownLanguage.classList.contains("dropdown-open")) element.classList.add("lable-active"); else element.classList.remove("lable-active");
                }));
            }));
        }
        if (document.querySelector(".language-top-content")) switchLanguage();
        function promoteMore() {
            const lablePromote = document.querySelectorAll(".promote-line-main__btn-orange");
            const dropdownPromotes = document.querySelectorAll(".dropdown-promote-orange");
            lablePromote.forEach(((element, index) => {
                const dropdownPromote = dropdownPromotes[index];
                element.addEventListener("click", (function(e) {
                    dropdownPromote.classList.toggle("promote-dropdown-open");
                    if (dropdownPromote.classList.contains("promote-dropdown-open")) element.classList.add("_active"); else element.classList.remove("_active");
                }));
                document.addEventListener("mousedown", (function(e) {
                    if (e.target.closest(".dropdown-promote") === null && !e.target.closest(".promote-line-main__btn-orange")) {
                        dropdownPromote.classList.remove("promote-dropdown-open");
                        element.classList.remove("_active");
                    }
                }));
            }));
        }
        if (document.querySelector(".promote-line-main")) promoteMore();
        function loadLogo() {
            const inputFile = document.querySelector("#load-logo__input");
            const picturePreview = document.querySelector(".load-logo__preview");
            inputFile.addEventListener("change", (function(e) {
                const inputTarget = e.target;
                const file = inputTarget.files[0];
                if (file) {
                    const maxSize = 1048576;
                    if (file.size > maxSize) {
                        alert("Размер файла превышает максимальный размер");
                        return;
                    }
                    const reader = new FileReader;
                    reader.addEventListener("load", (function(e) {
                        const readerTarget = e.target;
                        const buttonClose = document.createElement("button");
                        buttonClose.setAttribute("type", "button");
                        buttonClose.setAttribute("class", "load-logo__close _icon-plus");
                        buttonClose.addEventListener("click", (function() {
                            picturePreview.classList.remove("_show");
                            inputFile.value = null;
                        }));
                        const img = document.createElement("img");
                        img.src = readerTarget.result;
                        picturePreview.classList.add("_show");
                        picturePreview.innerHTML = "";
                        picturePreview.appendChild(img);
                        picturePreview.appendChild(buttonClose);
                    }));
                    reader.readAsDataURL(file);
                } else {
                    picturePreview.classList.remove("_show");
                    inputFile.value = null;
                }
            }));
        }
        if (document.querySelector(".load-logo")) loadLogo();
        function limitDropdown() {
            const lableLimit = document.querySelectorAll(".limit-top-content__lable");
            const dropdownsLimit = document.querySelectorAll(".limit-top-content__dropdown");
            lableLimit.forEach(((element, index) => {
                const dropdownLimit = dropdownsLimit[index];
                element.addEventListener("click", (function(e) {
                    dropdownLimit.classList.toggle("limit-dropdown-open");
                    if (dropdownLimit.classList.contains("limit-dropdown-open")) element.classList.add("_active"); else element.classList.remove("_active");
                }));
            }));
        }
        if (document.querySelector(".limit-top-content")) limitDropdown();
        function search() {
            const lableSearch = document.querySelectorAll(".search-lable");
            const inputsSearch = document.querySelectorAll(".search-input");
            lableSearch.forEach(((element, index) => {
                const inputSearch = inputsSearch[index];
                element.addEventListener("click", (function(e) {
                    inputSearch.classList.toggle("input-open");
                }));
                document.addEventListener("mousedown", (function(e) {
                    if (e.target.closest(".search-input") === null) inputSearch.classList.remove("input-open");
                }));
            }));
        }
        if (document.querySelector(".search-navigation-tabs")) search();
        document.addEventListener("DOMContentLoaded", (function() {
            const checkboxes = document.querySelectorAll(".checkbox__input");
            const targetContainer = document.querySelector(".section-main-addition__options");
            let title = document.querySelector(".sections-addition-form__title._main");
            checkboxes.forEach((checkbox => {
                checkbox.addEventListener("change", (function() {
                    if (this.checked) {
                        const checkboxName = this.nextElementSibling.textContent;
                        const blockId = `block_${Math.random().toString(36).substr(2, 9)}`;
                        const newBlock = document.createElement("div");
                        newBlock.className = "section-main-addition__item";
                        newBlock.setAttribute("id", blockId);
                        const hiddenInput = document.createElement("input");
                        hiddenInput.className = "section-main-addition__input";
                        hiddenInput.type = "radio";
                        hiddenInput.value = this.value;
                        hiddenInput.name = "option";
                        hiddenInput.hidden = true;
                        hiddenInput.id = `d_${Math.random().toString(36).substr(2, 9)}`;
                        const label = document.createElement("label");
                        label.htmlFor = hiddenInput.id;
                        label.className = "section-main-addition__label";
                        const textElement = document.createElement("div");
                        textElement.className = "section-main-addition__text";
                        const headingElement = document.createElement("div");
                        headingElement.className = "section-main-addition__heading";
                        headingElement.innerHTML = `<span>${checkboxName}</span>`;
                        const checklist = document.createElement("span");
                        checklist.className = "section-main-addition__checklist";
                        checklist.textContent = "Вторичные полимеры - переработка, сырье, переработка";
                        textElement.appendChild(headingElement);
                        textElement.appendChild(checklist);
                        label.appendChild(textElement);
                        newBlock.appendChild(hiddenInput);
                        newBlock.appendChild(label);
                        targetContainer.appendChild(newBlock);
                        this.dataset.blockId = blockId;
                        const items = Array.from(targetContainer.querySelectorAll(".section-main-addition__item"));
                        items.sort((function(a, b) {
                            const aValue = a.querySelector(".section-main-addition__input").value;
                            const bValue = b.querySelector(".section-main-addition__input").value;
                            return aValue - bValue;
                        })).forEach((function(item) {
                            targetContainer.appendChild(item);
                        }));
                        if (items.length === 1) {
                            newBlock.classList.add("_single");
                            title.textContent = "Выбран раздел";
                            title.classList.remove("_icon-star");
                            newBlock.querySelector('input[type="radio"]').checked = true;
                        } else {
                            items.forEach((function(item) {
                                item.classList.remove("_single");
                                item.querySelector('input[type="radio"]').checked = false;
                            }));
                            title.textContent = "Отметьте основной раздел";
                            title.classList.add("_icon-star");
                        }
                    } else {
                        const blockId = this.dataset.blockId;
                        const blockToRemove = document.getElementById(blockId);
                        if (blockToRemove) blockToRemove.remove();
                        let items = targetContainer.querySelectorAll(".section-main-addition__item");
                        if (items.length === 1) {
                            items[0].classList.add("_single");
                            title.textContent = "Выбран раздел";
                            title.classList.remove("_icon-star");
                            items[0].querySelector('input[type="radio"]').checked = true;
                        } else {
                            title.textContent = "Отметьте основной раздел";
                            title.classList.add("_icon-star");
                        }
                    }
                }));
            }));
        }));
        function changeTextarea() {
            const changeButton = document.querySelector(".description-addition__button");
            const textarea = document.querySelector(".product-addition-form__textarea");
            const contentTextarea = document.querySelector(".description-addition__content");
            changeButton.addEventListener("click", (() => {
                textarea.classList.remove("_lock");
                contentTextarea.classList.remove("_hide");
                changeButton.style.display = "none";
            }));
        }
        if (document.querySelector(".description-addition__button")) changeTextarea();
        function pay() {
            const payButton = document.querySelector(".payment-advertising__button._pay");
            const inputPay = document.querySelectorAll(".items-advertising__input");
            const textareaPay = document.querySelector(".product-addition-form__textarea");
            const descriptionAddition = document.querySelector(".description-addition");
            payButton.addEventListener("click", (function(event) {
                let isNotEmpty = Array.from(inputPay).some((input => input.value.trim() !== "" && input.value.trim() !== "0"));
                if (!isNotEmpty) {
                    alert("Должна быть введена продолжительность рекламы хотя бы в одной позиции");
                    event.preventDefault();
                }
                if (!descriptionAddition.classList.contains("_hide")) if (!textareaPay.value.trim()) {
                    alert("Заполните поле “Краткое описание деятельности”");
                    event.preventDefault();
                }
            }));
            const inputPremium = document.querySelector(".items-advertising__input._premium");
            inputPremium.addEventListener("input", (function() {
                if (this.value.trim() !== "" && this.value.trim() !== "0") descriptionAddition.classList.remove("_hide"); else descriptionAddition.classList.add("_hide");
            }));
        }
        if (document.querySelector(".payment-advertising._business-card")) pay();
        function favorite() {
            const favoriteButtons = document.querySelectorAll(".favorite-btn");
            favoriteButtons.forEach((button => {
                let isAdded = false;
                button.addEventListener("click", (function() {
                    if (isAdded) button.classList.remove("_add"); else button.classList.add("_add");
                    isAdded = !isAdded;
                }));
            }));
        }
        if (document.querySelector(".articles")) favorite();
        if (document.querySelector(".main-articles__ad")) {
            const adsDesk = document.querySelector(".main-articles__sticky");
            const mainBlockDesk = document.querySelector(".header");
            const navbar = document.querySelector(".navbar");
            const footer = document.querySelector(".footer");
            const mainBlockDeskHeight = mainBlockDesk.offsetHeight + navbar.offsetHeight;
            const handleScrollAndResize = () => {
                let scrollDistance = window.scrollY;
                let footerTopPosition = footer.getBoundingClientRect().top + window.scrollY;
                if (window.innerWidth > 992) {
                    if (scrollDistance >= mainBlockDeskHeight) {
                        adsDesk.classList.add("ads-fix");
                        adsDesk.style.position = "fixed";
                        adsDesk.style.top = "40px";
                    } else {
                        adsDesk.classList.remove("ads-fix");
                        adsDesk.style.position = "static";
                    }
                    if (window.innerHeight + scrollDistance >= footerTopPosition) {
                        adsDesk.style.position = "absolute";
                        adsDesk.style.top = "auto";
                        adsDesk.style.bottom = `0px`;
                        adsDesk.classList.add("ads-hides");
                    } else adsDesk.classList.remove("ads-hides");
                } else {
                    adsDesk.classList.remove("ads-fix", "ads-hides");
                    adsDesk.style.position = "static";
                    adsDesk.style.top = "auto";
                    adsDesk.style.bottom = "auto";
                }
            };
            window.addEventListener("scroll", handleScrollAndResize);
            window.addEventListener("resize", handleScrollAndResize);
            handleScrollAndResize();
        }
        if (document.querySelector(".banners-articles__btn-up")) {
            const backToTopButton = document.querySelector(".banners-articles__btn-up");
            backToTopButton.onclick = () => document.documentElement.scroll({
                top: 0,
                behavior: "smooth"
            });
            window.onscroll = () => {
                if (document.documentElement.scrollTop > 500) backToTopButton.classList.add("show"); else backToTopButton.classList.remove("show");
            };
        }
        if (document.querySelector(".select-wrapper")) {
            const navigationSelect = document.querySelectorAll(".select-wrapper");
            function initSelect(elem) {
                const selectHolder = elem.querySelector(".holder");
                const selectOptions = elem.querySelectorAll(".dropdownOption li");
                const dropHolder = elem.querySelector(".dropdown");
                let selectedOption = selectOptions[0];
                for (const option of selectOptions) if (option.classList.contains("current")) {
                    selectedOption = option;
                    break;
                }
                selectedOption.classList.add("current");
                selectHolder.innerText = selectedOption.textContent;
                selectHolder.addEventListener("click", (function() {
                    dropHolder.classList.toggle("active");
                }));
                selectOptions.forEach((function(currentElement) {
                    currentElement.addEventListener("click", (function() {
                        selectedOption.classList.remove("current");
                        selectedOption.classList.remove("hide-hover");
                        selectedOption = currentElement;
                        selectedOption.classList.add("current");
                        selectHolder.innerText = currentElement.textContent;
                        dropHolder.classList.remove("active");
                    }));
                    currentElement.addEventListener("mouseenter", (function() {
                        if (!currentElement.classList.contains("current")) selectedOption.classList.add("hide-hover");
                    }));
                    currentElement.addEventListener("mouseleave", (function() {
                        if (selectedOption.classList.contains("hide-hover")) selectedOption.classList.remove("hide-hover");
                    }));
                }));
                document.addEventListener("click", (function(event) {
                    if (!elem.contains(event.target)) dropHolder.classList.remove("active");
                }));
            }
            navigationSelect.forEach((function(elem) {
                initSelect(elem);
            }));
        }
        /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
        (function(global, factory) {
            "use strict";
            if (typeof module === "object" && typeof module.exports === "object") module.exports = global.document ? factory(global, true) : function(w) {
                if (!w.document) throw new Error("jQuery requires a window with a document");
                return factory(w);
            }; else factory(global);
        })(typeof window !== "undefined" ? window : void 0, (function(window, noGlobal) {
            "use strict";
            var arr = [];
            var getProto = Object.getPrototypeOf;
            var slice = arr.slice;
            var flat = arr.flat ? function(array) {
                return arr.flat.call(array);
            } : function(array) {
                return arr.concat.apply([], array);
            };
            var push = arr.push;
            var indexOf = arr.indexOf;
            var class2type = {};
            var toString = class2type.toString;
            var hasOwn = class2type.hasOwnProperty;
            var fnToString = hasOwn.toString;
            var ObjectFunctionString = fnToString.call(Object);
            var support = {};
            var isFunction = function isFunction(obj) {
                return typeof obj === "function" && typeof obj.nodeType !== "number";
            };
            var isWindow = function isWindow(obj) {
                return obj != null && obj === obj.window;
            };
            var document = window.document;
            var preservedScriptAttributes = {
                type: true,
                src: true,
                nonce: true,
                noModule: true
            };
            function DOMEval(code, node, doc) {
                doc = doc || document;
                var i, val, script = doc.createElement("script");
                script.text = code;
                if (node) for (i in preservedScriptAttributes) {
                    val = node[i] || node.getAttribute && node.getAttribute(i);
                    if (val) script.setAttribute(i, val);
                }
                doc.head.appendChild(script).parentNode.removeChild(script);
            }
            function toType(obj) {
                if (obj == null) return obj + "";
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
            }
            var version = "3.5.1", jQuery = function(selector, context) {
                return new jQuery.fn.init(selector, context);
            };
            jQuery.fn = jQuery.prototype = {
                jquery: version,
                constructor: jQuery,
                length: 0,
                toArray: function() {
                    return slice.call(this);
                },
                get: function(num) {
                    if (num == null) return slice.call(this);
                    return num < 0 ? this[num + this.length] : this[num];
                },
                pushStack: function(elems) {
                    var ret = jQuery.merge(this.constructor(), elems);
                    ret.prevObject = this;
                    return ret;
                },
                each: function(callback) {
                    return jQuery.each(this, callback);
                },
                map: function(callback) {
                    return this.pushStack(jQuery.map(this, (function(elem, i) {
                        return callback.call(elem, i, elem);
                    })));
                },
                slice: function() {
                    return this.pushStack(slice.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                        return (i + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                        return i % 2;
                    })));
                },
                eq: function(i) {
                    var len = this.length, j = +i + (i < 0 ? len : 0);
                    return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push,
                sort: arr.sort,
                splice: arr.splice
            };
            jQuery.extend = jQuery.fn.extend = function() {
                var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                if (typeof target === "boolean") {
                    deep = target;
                    target = arguments[i] || {};
                    i++;
                }
                if (typeof target !== "object" && !isFunction(target)) target = {};
                if (i === length) {
                    target = this;
                    i--;
                }
                for (;i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
                    copy = options[name];
                    if (name === "__proto__" || target === copy) continue;
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        src = target[name];
                        if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                        copyIsArray = false;
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else if (copy !== void 0) target[name] = copy;
                }
                return target;
            };
            jQuery.extend({
                expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                isReady: true,
                error: function(msg) {
                    throw new Error(msg);
                },
                noop: function() {},
                isPlainObject: function(obj) {
                    var proto, Ctor;
                    if (!obj || toString.call(obj) !== "[object Object]") return false;
                    proto = getProto(obj);
                    if (!proto) return true;
                    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                    return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                },
                isEmptyObject: function(obj) {
                    var name;
                    for (name in obj) return false;
                    return true;
                },
                globalEval: function(code, options, doc) {
                    DOMEval(code, {
                        nonce: options && options.nonce
                    }, doc);
                },
                each: function(obj, callback) {
                    var length, i = 0;
                    if (isArrayLike(obj)) {
                        length = obj.length;
                        for (;i < length; i++) if (callback.call(obj[i], i, obj[i]) === false) break;
                    } else for (i in obj) if (callback.call(obj[i], i, obj[i]) === false) break;
                    return obj;
                },
                makeArray: function(arr, results) {
                    var ret = results || [];
                    if (arr != null) if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr); else push.call(ret, arr);
                    return ret;
                },
                inArray: function(elem, arr, i) {
                    return arr == null ? -1 : indexOf.call(arr, elem, i);
                },
                merge: function(first, second) {
                    var len = +second.length, j = 0, i = first.length;
                    for (;j < len; j++) first[i++] = second[j];
                    first.length = i;
                    return first;
                },
                grep: function(elems, callback, invert) {
                    var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                    for (;i < length; i++) {
                        callbackInverse = !callback(elems[i], i);
                        if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                    }
                    return matches;
                },
                map: function(elems, callback, arg) {
                    var length, value, i = 0, ret = [];
                    if (isArrayLike(elems)) {
                        length = elems.length;
                        for (;i < length; i++) {
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        }
                    } else for (i in elems) {
                        value = callback(elems[i], i, arg);
                        if (value != null) ret.push(value);
                    }
                    return flat(ret);
                },
                guid: 1,
                support
            });
            if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
            jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            }));
            function isArrayLike(obj) {
                var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                if (isFunction(obj) || isWindow(obj)) return false;
                return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
            }
            var Sizzle = 
            /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
            function(window) {
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date, preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                    if (a === b) hasDuplicate = true;
                    return 0;
                }, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, pushNative = arr.push, push = arr.push, slice = arr.slice, indexOf = function(list, elem) {
                    var i = 0, len = list.length;
                    for (;i < len; i++) if (list[i] === elem) return i;
                    return -1;
                }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                    ID: new RegExp("^#(" + identifier + ")"),
                    CLASS: new RegExp("^\\.(" + identifier + ")"),
                    TAG: new RegExp("^(" + identifier + "|[*])"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                    var high = "0x" + escape.slice(1) - 65536;
                    return nonHex ? nonHex : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
                }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
                    if (asCodePoint) {
                        if (ch === "\0") return "�";
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    }
                    return "\\" + ch;
                }, unloadHandler = function() {
                    setDocument();
                }, inDisabledFieldset = addCombinator((function(elem) {
                    return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                    arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) {
                            pushNative.apply(target, slice.call(els));
                        } : function(target, els) {
                            var j = target.length, i = 0;
                            while (target[j++] = els[i++]) ;
                            target.length = j - 1;
                        }
                    };
                }
                function Sizzle(selector, context, results, seed) {
                    var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                    results = results || [];
                    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
                    if (!seed) {
                        setDocument(context);
                        context = context || document;
                        if (documentIsHTML) {
                            if (nodeType !== 11 && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                if (nodeType === 9) if (elem = context.getElementById(m)) {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else return results; else if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;
                            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                            if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                                newSelector = selector;
                                newContext = context;
                                if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                    if (newContext !== context || !support.scope) if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape); else context.setAttribute("id", nid = expando);
                                    groups = tokenize(selector);
                                    i = groups.length;
                                    while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                    newSelector = groups.join(",");
                                }
                                try {
                                    push.apply(results, newContext.querySelectorAll(newSelector));
                                    return results;
                                } catch (qsaError) {
                                    nonnativeSelectorCache(selector, true);
                                } finally {
                                    if (nid === expando) context.removeAttribute("id");
                                }
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed);
                }
                function createCache() {
                    var keys = [];
                    function cache(key, value) {
                        if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                        return cache[key + " "] = value;
                    }
                    return cache;
                }
                function markFunction(fn) {
                    fn[expando] = true;
                    return fn;
                }
                function assert(fn) {
                    var el = document.createElement("fieldset");
                    try {
                        return !!fn(el);
                    } catch (e) {
                        return false;
                    } finally {
                        if (el.parentNode) el.parentNode.removeChild(el);
                        el = null;
                    }
                }
                function addHandle(attrs, handler) {
                    var arr = attrs.split("|"), i = arr.length;
                    while (i--) Expr.attrHandle[arr[i]] = handler;
                }
                function siblingCheck(a, b) {
                    var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
                    if (diff) return diff;
                    if (cur) while (cur = cur.nextSibling) if (cur === b) return -1;
                    return a ? 1 : -1;
                }
                function createInputPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === type;
                    };
                }
                function createButtonPseudo(type) {
                    return function(elem) {
                        var name = elem.nodeName.toLowerCase();
                        return (name === "input" || name === "button") && elem.type === type;
                    };
                }
                function createDisabledPseudo(disabled) {
                    return function(elem) {
                        if ("form" in elem) {
                            if (elem.parentNode && elem.disabled === false) {
                                if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                            }
                            return elem.disabled === disabled;
                        } else if ("label" in elem) return elem.disabled === disabled;
                        return false;
                    };
                }
                function createPositionalPseudo(fn) {
                    return markFunction((function(argument) {
                        argument = +argument;
                        return markFunction((function(seed, matches) {
                            var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                            while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                        }));
                    }));
                }
                function testContext(context) {
                    return context && typeof context.getElementsByTagName !== "undefined" && context;
                }
                support = Sizzle.support = {};
                isXML = Sizzle.isXML = function(elem) {
                    var namespace = elem.namespaceURI, docElem = (elem.ownerDocument || elem).documentElement;
                    return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
                };
                setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                    if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
                    document = doc;
                    docElem = document.documentElement;
                    documentIsHTML = !isXML(document);
                    if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false); else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
                    support.scope = assert((function(el) {
                        docElem.appendChild(el).appendChild(document.createElement("div"));
                        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
                    }));
                    support.attributes = assert((function(el) {
                        el.className = "i";
                        return !el.getAttribute("className");
                    }));
                    support.getElementsByTagName = assert((function(el) {
                        el.appendChild(document.createComment(""));
                        return !el.getElementsByTagName("*").length;
                    }));
                    support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                    support.getById = assert((function(el) {
                        docElem.appendChild(el).id = expando;
                        return !document.getElementsByName || !document.getElementsByName(expando).length;
                    }));
                    if (support.getById) {
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                return elem.getAttribute("id") === attrId;
                            };
                        };
                        Expr.find["ID"] = function(id, context) {
                            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                var elem = context.getElementById(id);
                                return elem ? [ elem ] : [];
                            }
                        };
                    } else {
                        Expr.filter["ID"] = function(id) {
                            var attrId = id.replace(runescape, funescape);
                            return function(elem) {
                                var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                return node && node.value === attrId;
                            };
                        };
                        Expr.find["ID"] = function(id, context) {
                            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                var node, i, elems, elem = context.getElementById(id);
                                if (elem) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) return [ elem ];
                                    elems = context.getElementsByName(id);
                                    i = 0;
                                    while (elem = elems[i++]) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                    }
                                }
                                return [];
                            }
                        };
                    }
                    Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
                        if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag); else if (support.qsa) return context.querySelectorAll(tag);
                    } : function(tag, context) {
                        var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                        if (tag === "*") {
                            while (elem = results[i++]) if (elem.nodeType === 1) tmp.push(elem);
                            return tmp;
                        }
                        return results;
                    };
                    Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
                    };
                    rbuggyMatches = [];
                    rbuggyQSA = [];
                    if (support.qsa = rnative.test(document.querySelectorAll)) {
                        assert((function(el) {
                            var input;
                            docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                            if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                            if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                            if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                            input = document.createElement("input");
                            input.setAttribute("name", "");
                            el.appendChild(input);
                            if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                            if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                            if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                            el.querySelectorAll("\\\f");
                            rbuggyQSA.push("[\\r\\n\\f]");
                        }));
                        assert((function(el) {
                            el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                            var input = document.createElement("input");
                            input.setAttribute("type", "hidden");
                            el.appendChild(input).setAttribute("name", "D");
                            if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                            if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                            docElem.appendChild(el).disabled = true;
                            if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                            el.querySelectorAll("*,:x");
                            rbuggyQSA.push(",.*:");
                        }));
                    }
                    if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert((function(el) {
                        support.disconnectedMatch = matches.call(el, "*");
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    }));
                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                    hasCompare = rnative.test(docElem.compareDocumentPosition);
                    contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                    } : function(a, b) {
                        if (b) while (b = b.parentNode) if (b === a) return true;
                        return false;
                    };
                    sortOrder = hasCompare ? function(a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (compare) return compare;
                        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                            if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                            if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                            return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
                        }
                        return compare & 4 ? -1 : 1;
                    } : function(a, b) {
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }
                        var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                        if (!aup || !bup) return a == document ? -1 : b == document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; else if (aup === bup) return siblingCheck(a, b);
                        cur = a;
                        while (cur = cur.parentNode) ap.unshift(cur);
                        cur = b;
                        while (cur = cur.parentNode) bp.unshift(cur);
                        while (ap[i] === bp[i]) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0;
                    };
                    return document;
                };
                Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements);
                };
                Sizzle.matchesSelector = function(elem, expr) {
                    setDocument(elem);
                    if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret;
                    } catch (e) {
                        nonnativeSelectorCache(expr, true);
                    }
                    return Sizzle(expr, document, null, [ elem ]).length > 0;
                };
                Sizzle.contains = function(context, elem) {
                    if ((context.ownerDocument || context) != document) setDocument(context);
                    return contains(context, elem);
                };
                Sizzle.attr = function(elem, name) {
                    if ((elem.ownerDocument || elem) != document) setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return val !== void 0 ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                };
                Sizzle.escape = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape);
                };
                Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg);
                };
                Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [], j = 0, i = 0;
                    hasDuplicate = !support.detectDuplicates;
                    sortInput = !support.sortStable && results.slice(0);
                    results.sort(sortOrder);
                    if (hasDuplicate) {
                        while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                        while (j--) results.splice(duplicates[j], 1);
                    }
                    sortInput = null;
                    return results;
                };
                getText = Sizzle.getText = function(elem) {
                    var node, ret = "", i = 0, nodeType = elem.nodeType;
                    if (!nodeType) while (node = elem[i++]) ret += getText(node); else if (nodeType === 1 || nodeType === 9 || nodeType === 11) if (typeof elem.textContent === "string") return elem.textContent; else for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem); else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
                    return ret;
                };
                Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: true
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: true
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            match[1] = match[1].replace(runescape, funescape);
                            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                            if (match[2] === "~=") match[3] = " " + match[3] + " ";
                            return match.slice(0, 4);
                        },
                        CHILD: function(match) {
                            match[1] = match[1].toLowerCase();
                            if (match[1].slice(0, 3) === "nth") {
                                if (!match[3]) Sizzle.error(match[0]);
                                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                match[5] = +(match[7] + match[8] || match[3] === "odd");
                            } else if (match[3]) Sizzle.error(match[0]);
                            return match;
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            if (matchExpr["CHILD"].test(match[0])) return null;
                            if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                match[0] = match[0].slice(0, excess);
                                match[2] = unquoted.slice(0, excess);
                            }
                            return match.slice(0, 3);
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return nodeNameSelector === "*" ? function() {
                                return true;
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                if (result == null) return operator === "!=";
                                if (!operator) return true;
                                result += "";
                                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                            };
                        },
                        CHILD: function(type, what, _argument, first, last) {
                            var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                            return first === 1 && last === 0 ? function(elem) {
                                return !!elem.parentNode;
                            } : function(elem, _context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                if (parent) {
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while (node = node[dir]) if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) return false;
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }
                                    start = [ forward ? parent.firstChild : parent.lastChild ];
                                    if (forward && useCache) {
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
                                            uniqueCache[type] = [ dirruns, nodeIndex, diff ];
                                            break;
                                        }
                                    } else {
                                        if (useCache) {
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }
                                        if (diff === false) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            if (useCache) {
                                                outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                uniqueCache[type] = [ dirruns, diff ];
                                            }
                                            if (node === elem) break;
                                        }
                                    }
                                    diff -= last;
                                    return diff === first || diff % first === 0 && diff / first >= 0;
                                }
                            };
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            if (fn[expando]) return fn(argument);
                            if (fn.length > 1) {
                                args = [ pseudo, pseudo, "", argument ];
                                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                    var idx, matched = fn(seed, argument), i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                })) : function(elem) {
                                    return fn(elem, 0, args);
                                };
                            }
                            return fn;
                        }
                    },
                    pseudos: {
                        not: markFunction((function(selector) {
                            var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                            })) : function(elem, _context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                input[0] = null;
                                return !results.pop();
                            };
                        })),
                        has: markFunction((function(selector) {
                            return function(elem) {
                                return Sizzle(selector, elem).length > 0;
                            };
                        })),
                        contains: markFunction((function(text) {
                            text = text.replace(runescape, funescape);
                            return function(elem) {
                                return (elem.textContent || getText(elem)).indexOf(text) > -1;
                            };
                        })),
                        lang: markFunction((function(lang) {
                            if (!ridentifier.test(lang || "")) Sizzle.error("unsupported lang: " + lang);
                            lang = lang.replace(runescape, funescape).toLowerCase();
                            return function(elem) {
                                var elemLang;
                                do {
                                    if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                        elemLang = elemLang.toLowerCase();
                                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                    }
                                } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                return false;
                            };
                        })),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id;
                        },
                        root: function(elem) {
                            return elem === docElem;
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                        },
                        enabled: createDisabledPseudo(false),
                        disabled: createDisabledPseudo(true),
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                        },
                        selected: function(elem) {
                            if (elem.parentNode) elem.parentNode.selectedIndex;
                            return elem.selected === true;
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                            return true;
                        },
                        parent: function(elem) {
                            return !Expr.pseudos["empty"](elem);
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName);
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName);
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return name === "input" && elem.type === "button" || name === "button";
                        },
                        text: function(elem) {
                            var attr;
                            return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                        },
                        first: createPositionalPseudo((function() {
                            return [ 0 ];
                        })),
                        last: createPositionalPseudo((function(_matchIndexes, length) {
                            return [ length - 1 ];
                        })),
                        eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                            return [ argument < 0 ? argument + length : argument ];
                        })),
                        even: createPositionalPseudo((function(matchIndexes, length) {
                            var i = 0;
                            for (;i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        })),
                        odd: createPositionalPseudo((function(matchIndexes, length) {
                            var i = 1;
                            for (;i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes;
                        })),
                        lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument > length ? length : argument;
                            for (;--i >= 0; ) matchIndexes.push(i);
                            return matchIndexes;
                        })),
                        gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (;++i < length; ) matchIndexes.push(i);
                            return matchIndexes;
                        }))
                    }
                };
                Expr.pseudos["nth"] = Expr.pseudos["eq"];
                for (i in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) Expr.pseudos[i] = createInputPseudo(i);
                for (i in {
                    submit: true,
                    reset: true
                }) Expr.pseudos[i] = createButtonPseudo(i);
                function setFilters() {}
                setFilters.prototype = Expr.filters = Expr.pseudos;
                Expr.setFilters = new setFilters;
                tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) return parseOnly ? 0 : cached.slice(0);
                    soFar = selector;
                    groups = [];
                    preFilters = Expr.preFilter;
                    while (soFar) {
                        if (!matched || (match = rcomma.exec(soFar))) {
                            if (match) soFar = soFar.slice(match[0].length) || soFar;
                            groups.push(tokens = []);
                        }
                        matched = false;
                        if (match = rcombinators.exec(soFar)) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: match[0].replace(rtrim, " ")
                            });
                            soFar = soFar.slice(matched.length);
                        }
                        for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                        if (!matched) break;
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                };
                function toSelector(tokens) {
                    var i = 0, len = tokens.length, selector = "";
                    for (;i < len; i++) selector += tokens[i].value;
                    return selector;
                }
                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                    return combinator.first ? function(elem, context, xml) {
                        while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                        return false;
                    } : function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [ dirruns, doneName ];
                        if (xml) {
                            while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) if (matcher(elem, context, xml)) return true;
                        } else while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                            if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem; else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                uniqueCache[key] = newCache;
                                if (newCache[2] = matcher(elem, context, xml)) return true;
                            }
                        }
                        return false;
                    };
                }
                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        var i = matchers.length;
                        while (i--) if (!matchers[i](elem, context, xml)) return false;
                        return true;
                    } : matchers[0];
                }
                function multipleContexts(selector, contexts, results) {
                    var i = 0, len = contexts.length;
                    for (;i < len; i++) Sizzle(selector, contexts[i], results);
                    return results;
                }
                function condense(unmatched, map, filter, context, xml) {
                    var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                    for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i);
                    }
                    return newUnmatched;
                }
                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                    if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                    return markFunction((function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher) matcher(matcherIn, matcherOut, context, xml);
                        if (postFilter) {
                            temp = condense(matcherOut, postMap);
                            postFilter(temp, [], context, xml);
                            i = temp.length;
                            while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    temp = [];
                                    i = matcherOut.length;
                                    while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                    postFinder(null, matcherOut = [], temp, xml);
                                }
                                i = matcherOut.length;
                                while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                            }
                        } else {
                            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                            if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                        }
                    }));
                }
                function matcherFromTokens(tokens) {
                    var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                        return elem === checkContext;
                    }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                        return indexOf(checkContext, elem) > -1;
                    }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                        checkContext = null;
                        return ret;
                    } ];
                    for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                        if (matcher[expando]) {
                            j = ++i;
                            for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                value: tokens[i - 2].type === " " ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                        }
                        matchers.push(matcher);
                    }
                    return elementMatcher(matchers);
                }
                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                        var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                        if (outermost) outermostContext = context == document || context || outermost;
                        for (;i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument != document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                    results.push(elem);
                                    break;
                                }
                                if (outermost) dirruns = dirrunsUnique;
                            }
                            if (bySet) {
                                if (elem = !matcher && elem) matchedCount--;
                                if (seed) unmatched.push(elem);
                            }
                        }
                        matchedCount += i;
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                            if (seed) {
                                if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                setMatched = condense(setMatched);
                            }
                            push.apply(results, setMatched);
                            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle.uniqueSort(results);
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }
                        return unmatched;
                    };
                    return bySet ? markFunction(superMatcher) : superMatcher;
                }
                compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                    if (!cached) {
                        if (!match) match = tokenize(selector);
                        i = match.length;
                        while (i--) {
                            cached = matcherFromTokens(match[i]);
                            if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                        }
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                        cached.selector = selector;
                    }
                    return cached;
                };
                select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                    results = results || [];
                    if (match.length === 1) {
                        tokens = match[0] = match[0].slice(0);
                        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                            if (!context) return results; else if (compiled) context = context.parentNode;
                            selector = selector.slice(tokens.shift().value.length);
                        }
                        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                        while (i--) {
                            token = tokens[i];
                            if (Expr.relative[type = token.type]) break;
                            if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }
                                break;
                            }
                        }
                    }
                    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                    return results;
                };
                support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                support.detectDuplicates = !!hasDuplicate;
                setDocument();
                support.sortDetached = assert((function(el) {
                    return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                }));
                if (!assert((function(el) {
                    el.innerHTML = "<a href='#'></a>";
                    return el.firstChild.getAttribute("href") === "#";
                }))) addHandle("type|href|height|width", (function(elem, name, isXML) {
                    if (!isXML) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }));
                if (!support.attributes || !assert((function(el) {
                    el.innerHTML = "<input/>";
                    el.firstChild.setAttribute("value", "");
                    return el.firstChild.getAttribute("value") === "";
                }))) addHandle("value", (function(elem, _name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
                }));
                if (!assert((function(el) {
                    return el.getAttribute("disabled") == null;
                }))) addHandle(booleans, (function(elem, name, isXML) {
                    var val;
                    if (!isXML) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }));
                return Sizzle;
            }(window);
            jQuery.find = Sizzle;
            jQuery.expr = Sizzle.selectors;
            jQuery.expr[":"] = jQuery.expr.pseudos;
            jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
            jQuery.text = Sizzle.getText;
            jQuery.isXMLDoc = Sizzle.isXML;
            jQuery.contains = Sizzle.contains;
            jQuery.escapeSelector = Sizzle.escape;
            var dir = function(elem, dir, until) {
                var matched = [], truncate = until !== void 0;
                while ((elem = elem[dir]) && elem.nodeType !== 9) if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) break;
                    matched.push(elem);
                }
                return matched;
            };
            var siblings = function(n, elem) {
                var matched = [];
                for (;n; n = n.nextSibling) if (n.nodeType === 1 && n !== elem) matched.push(n);
                return matched;
            };
            var rneedsContext = jQuery.expr.match.needsContext;
            function nodeName(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
            }
            var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function winnow(elements, qualifier, not) {
                if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                    return !!qualifier.call(elem, i, elem) !== not;
                }));
                if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                    return elem === qualifier !== not;
                }));
                if (typeof qualifier !== "string") return jQuery.grep(elements, (function(elem) {
                    return indexOf.call(qualifier, elem) > -1 !== not;
                }));
                return jQuery.filter(qualifier, elements, not);
            }
            jQuery.filter = function(expr, elems, not) {
                var elem = elems[0];
                if (not) expr = ":not(" + expr + ")";
                if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                    return elem.nodeType === 1;
                })));
            };
            jQuery.fn.extend({
                find: function(selector) {
                    var i, ret, len = this.length, self = this;
                    if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter((function() {
                        for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                    })));
                    ret = this.pushStack([]);
                    for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                    return len > 1 ? jQuery.uniqueSort(ret) : ret;
                },
                filter: function(selector) {
                    return this.pushStack(winnow(this, selector || [], false));
                },
                not: function(selector) {
                    return this.pushStack(winnow(this, selector || [], true));
                },
                is: function(selector) {
                    return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                }
            });
            var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                var match, elem;
                if (!selector) return this;
                root = root || rootjQuery;
                if (typeof selector === "string") {
                    if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                    if (match && (match[1] || !context)) if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;
                        jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                        return this;
                    } else {
                        elem = document.getElementById(match[2]);
                        if (elem) {
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                } else if (selector.nodeType) {
                    this[0] = selector;
                    this.length = 1;
                    return this;
                } else if (isFunction(selector)) return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
                return jQuery.makeArray(selector, this);
            };
            init.prototype = jQuery.fn;
            rootjQuery = jQuery(document);
            var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
            jQuery.fn.extend({
                has: function(target) {
                    var targets = jQuery(target, this), l = targets.length;
                    return this.filter((function() {
                        var i = 0;
                        for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                    }));
                },
                closest: function(selectors, context) {
                    var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                    if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                        matched.push(cur);
                        break;
                    }
                    return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                },
                index: function(elem) {
                    if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
                    return indexOf.call(this, elem.jquery ? elem[0] : elem);
                },
                add: function(selector, context) {
                    return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                },
                addBack: function(selector) {
                    return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                }
            });
            function sibling(cur, dir) {
                while ((cur = cur[dir]) && cur.nodeType !== 1) ;
                return cur;
            }
            jQuery.each({
                parent: function(elem) {
                    var parent = elem.parentNode;
                    return parent && parent.nodeType !== 11 ? parent : null;
                },
                parents: function(elem) {
                    return dir(elem, "parentNode");
                },
                parentsUntil: function(elem, _i, until) {
                    return dir(elem, "parentNode", until);
                },
                next: function(elem) {
                    return sibling(elem, "nextSibling");
                },
                prev: function(elem) {
                    return sibling(elem, "previousSibling");
                },
                nextAll: function(elem) {
                    return dir(elem, "nextSibling");
                },
                prevAll: function(elem) {
                    return dir(elem, "previousSibling");
                },
                nextUntil: function(elem, _i, until) {
                    return dir(elem, "nextSibling", until);
                },
                prevUntil: function(elem, _i, until) {
                    return dir(elem, "previousSibling", until);
                },
                siblings: function(elem) {
                    return siblings((elem.parentNode || {}).firstChild, elem);
                },
                children: function(elem) {
                    return siblings(elem.firstChild);
                },
                contents: function(elem) {
                    if (elem.contentDocument != null && getProto(elem.contentDocument)) return elem.contentDocument;
                    if (nodeName(elem, "template")) elem = elem.content || elem;
                    return jQuery.merge([], elem.childNodes);
                }
            }, (function(name, fn) {
                jQuery.fn[name] = function(until, selector) {
                    var matched = jQuery.map(this, fn, until);
                    if (name.slice(-5) !== "Until") selector = until;
                    if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
                    if (this.length > 1) {
                        if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                        if (rparentsprev.test(name)) matched.reverse();
                    }
                    return this.pushStack(matched);
                };
            }));
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
            function createOptions(options) {
                var object = {};
                jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                    object[flag] = true;
                }));
                return object;
            }
            jQuery.Callbacks = function(options) {
                options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
                var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                    locked = locked || options.once;
                    fired = firing = true;
                    for (;queue.length; firingIndex = -1) {
                        memory = queue.shift();
                        while (++firingIndex < list.length) if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                    if (!options.memory) memory = false;
                    firing = false;
                    if (locked) if (memory) list = []; else list = "";
                }, self = {
                    add: function() {
                        if (list) {
                            if (memory && !firing) {
                                firingIndex = list.length - 1;
                                queue.push(memory);
                            }
                            (function add(args) {
                                jQuery.each(args, (function(_, arg) {
                                    if (isFunction(arg)) {
                                        if (!options.unique || !self.has(arg)) list.push(arg);
                                    } else if (arg && arg.length && toType(arg) !== "string") add(arg);
                                }));
                            })(arguments);
                            if (memory && !firing) fire();
                        }
                        return this;
                    },
                    remove: function() {
                        jQuery.each(arguments, (function(_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                list.splice(index, 1);
                                if (index <= firingIndex) firingIndex--;
                            }
                        }));
                        return this;
                    },
                    has: function(fn) {
                        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                    },
                    empty: function() {
                        if (list) list = [];
                        return this;
                    },
                    disable: function() {
                        locked = queue = [];
                        list = memory = "";
                        return this;
                    },
                    disabled: function() {
                        return !list;
                    },
                    lock: function() {
                        locked = queue = [];
                        if (!memory && !firing) list = memory = "";
                        return this;
                    },
                    locked: function() {
                        return !!locked;
                    },
                    fireWith: function(context, args) {
                        if (!locked) {
                            args = args || [];
                            args = [ context, args.slice ? args.slice() : args ];
                            queue.push(args);
                            if (!firing) fire();
                        }
                        return this;
                    },
                    fire: function() {
                        self.fireWith(this, arguments);
                        return this;
                    },
                    fired: function() {
                        return !!fired;
                    }
                };
                return self;
            };
            function Identity(v) {
                return v;
            }
            function Thrower(ex) {
                throw ex;
            }
            function adoptValue(value, resolve, reject, noValue) {
                var method;
                try {
                    if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                } catch (value) {
                    reject.apply(void 0, [ value ]);
                }
            }
            jQuery.extend({
                Deferred: function(func) {
                    var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                        state: function() {
                            return state;
                        },
                        always: function() {
                            deferred.done(arguments).fail(arguments);
                            return this;
                        },
                        catch: function(fn) {
                            return promise.then(null, fn);
                        },
                        pipe: function() {
                            var fns = arguments;
                            return jQuery.Deferred((function(newDefer) {
                                jQuery.each(tuples, (function(_i, tuple) {
                                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                    deferred[tuple[1]]((function() {
                                        var returned = fn && fn.apply(this, arguments);
                                        if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                    }));
                                }));
                                fns = null;
                            })).promise();
                        },
                        then: function(onFulfilled, onRejected, onProgress) {
                            var maxDepth = 0;
                            function resolve(depth, deferred, handler, special) {
                                return function() {
                                    var that = this, args = arguments, mightThrow = function() {
                                        var returned, then;
                                        if (depth < maxDepth) return;
                                        returned = handler.apply(that, args);
                                        if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                        then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                        if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                            maxDepth++;
                                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                        } else {
                                            if (handler !== Identity) {
                                                that = void 0;
                                                args = [ returned ];
                                            }
                                            (special || deferred.resolveWith)(that, args);
                                        }
                                    }, process = special ? mightThrow : function() {
                                        try {
                                            mightThrow();
                                        } catch (e) {
                                            if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                            if (depth + 1 >= maxDepth) {
                                                if (handler !== Thrower) {
                                                    that = void 0;
                                                    args = [ e ];
                                                }
                                                deferred.rejectWith(that, args);
                                            }
                                        }
                                    };
                                    if (depth) process(); else {
                                        if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                        window.setTimeout(process);
                                    }
                                };
                            }
                            return jQuery.Deferred((function(newDefer) {
                                tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                            })).promise();
                        },
                        promise: function(obj) {
                            return obj != null ? jQuery.extend(obj, promise) : promise;
                        }
                    }, deferred = {};
                    jQuery.each(tuples, (function(i, tuple) {
                        var list = tuple[2], stateString = tuple[5];
                        promise[tuple[1]] = list.add;
                        if (stateString) list.add((function() {
                            state = stateString;
                        }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                        list.add(tuple[3].fire);
                        deferred[tuple[0]] = function() {
                            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                            return this;
                        };
                        deferred[tuple[0] + "With"] = list.fireWith;
                    }));
                    promise.promise(deferred);
                    if (func) func.call(deferred, deferred);
                    return deferred;
                },
                when: function(singleValue) {
                    var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i) {
                        return function(value) {
                            resolveContexts[i] = this;
                            resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                            if (! --remaining) master.resolveWith(resolveContexts, resolveValues);
                        };
                    };
                    if (remaining <= 1) {
                        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);
                        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return master.then();
                    }
                    while (i--) adoptValue(resolveValues[i], updateFunc(i), master.reject);
                    return master.promise();
                }
            });
            var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            jQuery.Deferred.exceptionHook = function(error, stack) {
                if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
            };
            jQuery.readyException = function(error) {
                window.setTimeout((function() {
                    throw error;
                }));
            };
            var readyList = jQuery.Deferred();
            jQuery.fn.ready = function(fn) {
                readyList.then(fn).catch((function(error) {
                    jQuery.readyException(error);
                }));
                return this;
            };
            jQuery.extend({
                isReady: false,
                readyWait: 1,
                ready: function(wait) {
                    if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
                    jQuery.isReady = true;
                    if (wait !== true && --jQuery.readyWait > 0) return;
                    readyList.resolveWith(document, [ jQuery ]);
                }
            });
            jQuery.ready.then = readyList.then;
            function completed() {
                document.removeEventListener("DOMContentLoaded", completed);
                window.removeEventListener("load", completed);
                jQuery.ready();
            }
            if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                document.addEventListener("DOMContentLoaded", completed);
                window.addEventListener("load", completed);
            }
            var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0, len = elems.length, bulk = key == null;
                if (toType(key) === "object") {
                    chainable = true;
                    for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                } else if (value !== void 0) {
                    chainable = true;
                    if (!isFunction(value)) raw = true;
                    if (bulk) if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, _key, value) {
                            return bulk.call(jQuery(elem), value);
                        };
                    }
                    if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
                if (chainable) return elems;
                if (bulk) return fn.call(elems);
                return len ? fn(elems[0], key) : emptyGet;
            };
            var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
            function fcamelCase(_all, letter) {
                return letter.toUpperCase();
            }
            function camelCase(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
            }
            var acceptData = function(owner) {
                return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
            };
            function Data() {
                this.expando = jQuery.expando + Data.uid++;
            }
            Data.uid = 1;
            Data.prototype = {
                cache: function(owner) {
                    var value = owner[this.expando];
                    if (!value) {
                        value = {};
                        if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                            value,
                            configurable: true
                        });
                    }
                    return value;
                },
                set: function(owner, data, value) {
                    var prop, cache = this.cache(owner);
                    if (typeof data === "string") cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                    return cache;
                },
                get: function(owner, key) {
                    return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                },
                access: function(owner, key, value) {
                    if (key === void 0 || key && typeof key === "string" && value === void 0) return this.get(owner, key);
                    this.set(owner, key, value);
                    return value !== void 0 ? value : key;
                },
                remove: function(owner, key) {
                    var i, cache = owner[this.expando];
                    if (cache === void 0) return;
                    if (key !== void 0) {
                        if (Array.isArray(key)) key = key.map(camelCase); else {
                            key = camelCase(key);
                            key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                        }
                        i = key.length;
                        while (i--) delete cache[key[i]];
                    }
                    if (key === void 0 || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                },
                hasData: function(owner) {
                    var cache = owner[this.expando];
                    return cache !== void 0 && !jQuery.isEmptyObject(cache);
                }
            };
            var dataPriv = new Data;
            var dataUser = new Data;
            var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
            function getData(data) {
                if (data === "true") return true;
                if (data === "false") return false;
                if (data === "null") return null;
                if (data === +data + "") return +data;
                if (rbrace.test(data)) return JSON.parse(data);
                return data;
            }
            function dataAttr(elem, key, data) {
                var name;
                if (data === void 0 && elem.nodeType === 1) {
                    name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                    data = elem.getAttribute(name);
                    if (typeof data === "string") {
                        try {
                            data = getData(data);
                        } catch (e) {}
                        dataUser.set(elem, key, data);
                    } else data = void 0;
                }
                return data;
            }
            jQuery.extend({
                hasData: function(elem) {
                    return dataUser.hasData(elem) || dataPriv.hasData(elem);
                },
                data: function(elem, name, data) {
                    return dataUser.access(elem, name, data);
                },
                removeData: function(elem, name) {
                    dataUser.remove(elem, name);
                },
                _data: function(elem, name, data) {
                    return dataPriv.access(elem, name, data);
                },
                _removeData: function(elem, name) {
                    dataPriv.remove(elem, name);
                }
            });
            jQuery.fn.extend({
                data: function(key, value) {
                    var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                    if (key === void 0) {
                        if (this.length) {
                            data = dataUser.get(elem);
                            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                i = attrs.length;
                                while (i--) if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                                dataPriv.set(elem, "hasDataAttrs", true);
                            }
                        }
                        return data;
                    }
                    if (typeof key === "object") return this.each((function() {
                        dataUser.set(this, key);
                    }));
                    return access(this, (function(value) {
                        var data;
                        if (elem && value === void 0) {
                            data = dataUser.get(elem, key);
                            if (data !== void 0) return data;
                            data = dataAttr(elem, key);
                            if (data !== void 0) return data;
                            return;
                        }
                        this.each((function() {
                            dataUser.set(this, key, value);
                        }));
                    }), null, value, arguments.length > 1, null, true);
                },
                removeData: function(key) {
                    return this.each((function() {
                        dataUser.remove(this, key);
                    }));
                }
            });
            jQuery.extend({
                queue: function(elem, type, data) {
                    var queue;
                    if (elem) {
                        type = (type || "fx") + "queue";
                        queue = dataPriv.get(elem, type);
                        if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                        return queue || [];
                    }
                },
                dequeue: function(elem, type) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                        jQuery.dequeue(elem, type);
                    };
                    if (fn === "inprogress") {
                        fn = queue.shift();
                        startLength--;
                    }
                    if (fn) {
                        if (type === "fx") queue.unshift("inprogress");
                        delete hooks.stop;
                        fn.call(elem, next, hooks);
                    }
                    if (!startLength && hooks) hooks.empty.fire();
                },
                _queueHooks: function(elem, type) {
                    var key = type + "queueHooks";
                    return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                        empty: jQuery.Callbacks("once memory").add((function() {
                            dataPriv.remove(elem, [ type + "queue", key ]);
                        }))
                    });
                }
            });
            jQuery.fn.extend({
                queue: function(type, data) {
                    var setter = 2;
                    if (typeof type !== "string") {
                        data = type;
                        type = "fx";
                        setter--;
                    }
                    if (arguments.length < setter) return jQuery.queue(this[0], type);
                    return data === void 0 ? this : this.each((function() {
                        var queue = jQuery.queue(this, type, data);
                        jQuery._queueHooks(this, type);
                        if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
                    }));
                },
                dequeue: function(type) {
                    return this.each((function() {
                        jQuery.dequeue(this, type);
                    }));
                },
                clearQueue: function(type) {
                    return this.queue(type || "fx", []);
                },
                promise: function(type, obj) {
                    var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                        if (! --count) defer.resolveWith(elements, [ elements ]);
                    };
                    if (typeof type !== "string") {
                        obj = type;
                        type = void 0;
                    }
                    type = type || "fx";
                    while (i--) {
                        tmp = dataPriv.get(elements[i], type + "queueHooks");
                        if (tmp && tmp.empty) {
                            count++;
                            tmp.empty.add(resolve);
                        }
                    }
                    resolve();
                    return defer.promise(obj);
                }
            });
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
            var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
            var documentElement = document.documentElement;
            var isAttached = function(elem) {
                return jQuery.contains(elem.ownerDocument, elem);
            }, composed = {
                composed: true
            };
            if (documentElement.getRootNode) isAttached = function(elem) {
                return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
            };
            var isHiddenWithinTree = function(elem, el) {
                elem = el || elem;
                return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
            };
            function adjustCSS(elem, prop, valueParts, tween) {
                var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                    return tween.cur();
                } : function() {
                    return jQuery.css(elem, prop, "");
                }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                if (initialInUnit && initialInUnit[3] !== unit) {
                    initial /= 2;
                    unit = unit || initialInUnit[3];
                    initialInUnit = +initial || 1;
                    while (maxIterations--) {
                        jQuery.style(elem, prop, initialInUnit + unit);
                        if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                        initialInUnit /= scale;
                    }
                    initialInUnit *= 2;
                    jQuery.style(elem, prop, initialInUnit + unit);
                    valueParts = valueParts || [];
                }
                if (valueParts) {
                    initialInUnit = +initialInUnit || +initial || 0;
                    adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                    if (tween) {
                        tween.unit = unit;
                        tween.start = initialInUnit;
                        tween.end = adjusted;
                    }
                }
                return adjusted;
            }
            var defaultDisplayMap = {};
            function getDefaultDisplay(elem) {
                var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                if (display) return display;
                temp = doc.body.appendChild(doc.createElement(nodeName));
                display = jQuery.css(temp, "display");
                temp.parentNode.removeChild(temp);
                if (display === "none") display = "block";
                defaultDisplayMap[nodeName] = display;
                return display;
            }
            function showHide(elements, show) {
                var display, elem, values = [], index = 0, length = elements.length;
                for (;index < length; index++) {
                    elem = elements[index];
                    if (!elem.style) continue;
                    display = elem.style.display;
                    if (show) {
                        if (display === "none") {
                            values[index] = dataPriv.get(elem, "display") || null;
                            if (!values[index]) elem.style.display = "";
                        }
                        if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                    } else if (display !== "none") {
                        values[index] = "none";
                        dataPriv.set(elem, "display", display);
                    }
                }
                for (index = 0; index < length; index++) if (values[index] != null) elements[index].style.display = values[index];
                return elements;
            }
            jQuery.fn.extend({
                show: function() {
                    return showHide(this, true);
                },
                hide: function() {
                    return showHide(this);
                },
                toggle: function(state) {
                    if (typeof state === "boolean") return state ? this.show() : this.hide();
                    return this.each((function() {
                        if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                    }));
                }
            });
            var rcheckableType = /^(?:checkbox|radio)$/i;
            var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("checked", "checked");
                input.setAttribute("name", "t");
                div.appendChild(input);
                support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                div.innerHTML = "<textarea>x</textarea>";
                support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                div.innerHTML = "<option></option>";
                support.option = !!div.lastChild;
            })();
            var wrapMap = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
            wrapMap.th = wrapMap.td;
            if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
            function getAll(context, tag) {
                var ret;
                if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*"); else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*"); else ret = [];
                if (tag === void 0 || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                return ret;
            }
            function setGlobalEval(elems, refElements) {
                var i = 0, l = elems.length;
                for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
            }
            var rhtml = /<|&#?\w+;/;
            function buildFragment(elems, context, scripts, selection, ignored) {
                var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                for (;i < l; i++) {
                    elem = elems[i];
                    if (elem || elem === 0) if (toType(elem) === "object") jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) tmp = tmp.lastChild;
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
                fragment.textContent = "";
                i = 0;
                while (elem = nodes[i++]) {
                    if (selection && jQuery.inArray(elem, selection) > -1) {
                        if (ignored) ignored.push(elem);
                        continue;
                    }
                    attached = isAttached(elem);
                    tmp = getAll(fragment.appendChild(elem), "script");
                    if (attached) setGlobalEval(tmp);
                    if (scripts) {
                        j = 0;
                        while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                    }
                }
                return fragment;
            }
            var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
            function returnTrue() {
                return true;
            }
            function returnFalse() {
                return false;
            }
            function expectSync(elem, type) {
                return elem === safeActiveElement() === (type === "focus");
            }
            function safeActiveElement() {
                try {
                    return document.activeElement;
                } catch (err) {}
            }
            function on(elem, types, selector, data, fn, one) {
                var origFn, type;
                if (typeof types === "object") {
                    if (typeof selector !== "string") {
                        data = data || selector;
                        selector = void 0;
                    }
                    for (type in types) on(elem, type, selector, data, types[type], one);
                    return elem;
                }
                if (data == null && fn == null) {
                    fn = selector;
                    data = selector = void 0;
                } else if (fn == null) if (typeof selector === "string") {
                    fn = data;
                    data = void 0;
                } else {
                    fn = data;
                    data = selector;
                    selector = void 0;
                }
                if (fn === false) fn = returnFalse; else if (!fn) return elem;
                if (one === 1) {
                    origFn = fn;
                    fn = function(event) {
                        jQuery().off(event);
                        return origFn.apply(this, arguments);
                    };
                    fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                }
                return elem.each((function() {
                    jQuery.event.add(this, types, fn, data, selector);
                }));
            }
            jQuery.event = {
                global: {},
                add: function(elem, types, handler, data, selector) {
                    var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                    if (!acceptData(elem)) return;
                    if (handler.handler) {
                        handleObjIn = handler;
                        handler = handleObjIn.handler;
                        selector = handleObjIn.selector;
                    }
                    if (selector) jQuery.find.matchesSelector(documentElement, selector);
                    if (!handler.guid) handler.guid = jQuery.guid++;
                    if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                    if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                    };
                    types = (types || "").match(rnothtmlwhite) || [ "" ];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();
                        if (!type) continue;
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        special = jQuery.event.special[type] || {};
                        handleObj = jQuery.extend({
                            type,
                            origType,
                            data,
                            handler,
                            guid: handler.guid,
                            selector,
                            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                            namespace: namespaces.join(".")
                        }, handleObjIn);
                        if (!(handlers = events[type])) {
                            handlers = events[type] = [];
                            handlers.delegateCount = 0;
                            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                        }
                        if (special.add) {
                            special.add.call(elem, handleObj);
                            if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                        }
                        if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                        jQuery.event.global[type] = true;
                    }
                },
                remove: function(elem, types, handler, selector, mappedTypes) {
                    var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                    if (!elemData || !(events = elemData.events)) return;
                    types = (types || "").match(rnothtmlwhite) || [ "" ];
                    t = types.length;
                    while (t--) {
                        tmp = rtypenamespace.exec(types[t]) || [];
                        type = origType = tmp[1];
                        namespaces = (tmp[2] || "").split(".").sort();
                        if (!type) {
                            for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                            continue;
                        }
                        special = jQuery.event.special[type] || {};
                        type = (selector ? special.delegateType : special.bindType) || type;
                        handlers = events[type] || [];
                        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        origCount = j = handlers.length;
                        while (j--) {
                            handleObj = handlers[j];
                            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                handlers.splice(j, 1);
                                if (handleObj.selector) handlers.delegateCount--;
                                if (special.remove) special.remove.call(elem, handleObj);
                            }
                        }
                        if (origCount && !handlers.length) {
                            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                            delete events[type];
                        }
                    }
                    if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                },
                dispatch: function(nativeEvent) {
                    var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                    args[0] = event;
                    for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                    event.delegateTarget = this;
                    if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
                    handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                    i = 0;
                    while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                        event.currentTarget = matched.elem;
                        j = 0;
                        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== void 0) if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                    if (special.postDispatch) special.postDispatch.call(this, event);
                    return event.result;
                },
                handlers: function(event, handlers) {
                    var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                    if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];
                            sel = handleObj.selector + " ";
                            if (matchedSelectors[sel] === void 0) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                            if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                        }
                        if (matchedHandlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: matchedHandlers
                        });
                    }
                    cur = this;
                    if (delegateCount < handlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: handlers.slice(delegateCount)
                    });
                    return handlerQueue;
                },
                addProp: function(name, hook) {
                    Object.defineProperty(jQuery.Event.prototype, name, {
                        enumerable: true,
                        configurable: true,
                        get: isFunction(hook) ? function() {
                            if (this.originalEvent) return hook(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[name];
                        },
                        set: function(value) {
                            Object.defineProperty(this, name, {
                                enumerable: true,
                                configurable: true,
                                writable: true,
                                value
                            });
                        }
                    });
                },
                fix: function(originalEvent) {
                    return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                },
                special: {
                    load: {
                        noBubble: true
                    },
                    click: {
                        setup: function(data) {
                            var el = this || data;
                            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", returnTrue);
                            return false;
                        },
                        trigger: function(data) {
                            var el = this || data;
                            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                            return true;
                        },
                        _default: function(event) {
                            var target = event.target;
                            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(event) {
                            if (event.result !== void 0 && event.originalEvent) event.originalEvent.returnValue = event.result;
                        }
                    }
                }
            };
            function leverageNative(el, type, expectSync) {
                if (!expectSync) {
                    if (dataPriv.get(el, type) === void 0) jQuery.event.add(el, type, returnTrue);
                    return;
                }
                dataPriv.set(el, type, false);
                jQuery.event.add(el, type, {
                    namespace: false,
                    handler: function(event) {
                        var notAsync, result, saved = dataPriv.get(this, type);
                        if (event.isTrigger & 1 && this[type]) {
                            if (!saved.length) {
                                saved = slice.call(arguments);
                                dataPriv.set(this, type, saved);
                                notAsync = expectSync(this, type);
                                this[type]();
                                result = dataPriv.get(this, type);
                                if (saved !== result || notAsync) dataPriv.set(this, type, false); else result = {};
                                if (saved !== result) {
                                    event.stopImmediatePropagation();
                                    event.preventDefault();
                                    return result.value;
                                }
                            } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                        } else if (saved.length) {
                            dataPriv.set(this, type, {
                                value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                            });
                            event.stopImmediatePropagation();
                        }
                    }
                });
            }
            jQuery.removeEvent = function(elem, type, handle) {
                if (elem.removeEventListener) elem.removeEventListener(type, handle);
            };
            jQuery.Event = function(src, props) {
                if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                if (src && src.type) {
                    this.originalEvent = src;
                    this.type = src.type;
                    this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
                    this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                    this.currentTarget = src.currentTarget;
                    this.relatedTarget = src.relatedTarget;
                } else this.type = src;
                if (props) jQuery.extend(this, props);
                this.timeStamp = src && src.timeStamp || Date.now();
                this[jQuery.expando] = true;
            };
            jQuery.Event.prototype = {
                constructor: jQuery.Event,
                isDefaultPrevented: returnFalse,
                isPropagationStopped: returnFalse,
                isImmediatePropagationStopped: returnFalse,
                isSimulated: false,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = returnTrue;
                    if (e && !this.isSimulated) e.preventDefault();
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = returnTrue;
                    if (e && !this.isSimulated) e.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = returnTrue;
                    if (e && !this.isSimulated) e.stopImmediatePropagation();
                    this.stopPropagation();
                }
            };
            jQuery.each({
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: function(event) {
                    var button = event.button;
                    if (event.which == null && rkeyEvent.test(event.type)) return event.charCode != null ? event.charCode : event.keyCode;
                    if (!event.which && button !== void 0 && rmouseEvent.test(event.type)) {
                        if (button & 1) return 1;
                        if (button & 2) return 3;
                        if (button & 4) return 2;
                        return 0;
                    }
                    return event.which;
                }
            }, jQuery.event.addProp);
            jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(type, delegateType) {
                jQuery.event.special[type] = {
                    setup: function() {
                        leverageNative(this, type, expectSync);
                        return false;
                    },
                    trigger: function() {
                        leverageNative(this, type);
                        return true;
                    },
                    delegateType
                };
            }));
            jQuery.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(orig, fix) {
                jQuery.event.special[orig] = {
                    delegateType: fix,
                    bindType: fix,
                    handle: function(event) {
                        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                        if (!related || related !== target && !jQuery.contains(target, related)) {
                            event.type = handleObj.origType;
                            ret = handleObj.handler.apply(this, arguments);
                            event.type = fix;
                        }
                        return ret;
                    }
                };
            }));
            jQuery.fn.extend({
                on: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn);
                },
                one: function(types, selector, data, fn) {
                    return on(this, types, selector, data, fn, 1);
                },
                off: function(types, selector, fn) {
                    var handleObj, type;
                    if (types && types.preventDefault && types.handleObj) {
                        handleObj = types.handleObj;
                        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                        return this;
                    }
                    if (typeof types === "object") {
                        for (type in types) this.off(type, selector, types[type]);
                        return this;
                    }
                    if (selector === false || typeof selector === "function") {
                        fn = selector;
                        selector = void 0;
                    }
                    if (fn === false) fn = returnFalse;
                    return this.each((function() {
                        jQuery.event.remove(this, types, fn, selector);
                    }));
                }
            });
            var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function manipulationTarget(elem, content) {
                if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                return elem;
            }
            function disableScript(elem) {
                elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                return elem;
            }
            function restoreScript(elem) {
                if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                return elem;
            }
            function cloneCopyEvent(src, dest) {
                var i, l, type, pdataOld, udataOld, udataCur, events;
                if (dest.nodeType !== 1) return;
                if (dataPriv.hasData(src)) {
                    pdataOld = dataPriv.get(src);
                    events = pdataOld.events;
                    if (events) {
                        dataPriv.remove(dest, "handle events");
                        for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                    }
                }
                if (dataUser.hasData(src)) {
                    udataOld = dataUser.access(src);
                    udataCur = jQuery.extend({}, udataOld);
                    dataUser.set(dest, udataCur);
                }
            }
            function fixInput(src, dest) {
                var nodeName = dest.nodeName.toLowerCase();
                if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked; else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
            }
            function domManip(collection, args, callback, ignored) {
                args = flat(args);
                var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                    var self = collection.eq(index);
                    if (valueIsFunction) args[0] = value.call(this, index, self.html());
                    domManip(self, args, callback, ignored);
                }));
                if (l) {
                    fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                    first = fragment.firstChild;
                    if (fragment.childNodes.length === 1) fragment = first;
                    if (first || ignored) {
                        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                        hasScripts = scripts.length;
                        for (;i < l; i++) {
                            node = fragment;
                            if (i !== iNoClone) {
                                node = jQuery.clone(node, true, true);
                                if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                            }
                            callback.call(collection[i], node, i);
                        }
                        if (hasScripts) {
                            doc = scripts[scripts.length - 1].ownerDocument;
                            jQuery.map(scripts, restoreScript);
                            for (i = 0; i < hasScripts; i++) {
                                node = scripts[i];
                                if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && (node.type || "").toLowerCase() !== "module") {
                                    if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                        nonce: node.nonce || node.getAttribute("nonce")
                                    }, doc);
                                } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                            }
                        }
                    }
                }
                return collection;
            }
            function remove(elem, selector, keepData) {
                var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                for (;(node = nodes[i]) != null; i++) {
                    if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
                    if (node.parentNode) {
                        if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                        node.parentNode.removeChild(node);
                    }
                }
                return elem;
            }
            jQuery.extend({
                htmlPrefilter: function(html) {
                    return html;
                },
                clone: function(elem, dataAndEvents, deepDataAndEvents) {
                    var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                    if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                        destElements = getAll(clone);
                        srcElements = getAll(elem);
                        for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                    }
                    if (dataAndEvents) if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                    } else cloneCopyEvent(elem, clone);
                    destElements = getAll(clone, "script");
                    if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                    return clone;
                },
                cleanData: function(elems) {
                    var data, elem, type, special = jQuery.event.special, i = 0;
                    for (;(elem = elems[i]) !== void 0; i++) if (acceptData(elem)) {
                        if (data = elem[dataPriv.expando]) {
                            if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                            elem[dataPriv.expando] = void 0;
                        }
                        if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                    }
                }
            });
            jQuery.fn.extend({
                detach: function(selector) {
                    return remove(this, selector, true);
                },
                remove: function(selector) {
                    return remove(this, selector);
                },
                text: function(value) {
                    return access(this, (function(value) {
                        return value === void 0 ? jQuery.text(this) : this.empty().each((function() {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                        }));
                    }), null, value, arguments.length);
                },
                append: function() {
                    return domManip(this, arguments, (function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.appendChild(elem);
                        }
                    }));
                },
                prepend: function() {
                    return domManip(this, arguments, (function(elem) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var target = manipulationTarget(this, elem);
                            target.insertBefore(elem, target.firstChild);
                        }
                    }));
                },
                before: function() {
                    return domManip(this, arguments, (function(elem) {
                        if (this.parentNode) this.parentNode.insertBefore(elem, this);
                    }));
                },
                after: function() {
                    return domManip(this, arguments, (function(elem) {
                        if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                    }));
                },
                empty: function() {
                    var elem, i = 0;
                    for (;(elem = this[i]) != null; i++) if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.textContent = "";
                    }
                    return this;
                },
                clone: function(dataAndEvents, deepDataAndEvents) {
                    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                    return this.map((function() {
                        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                    }));
                },
                html: function(value) {
                    return access(this, (function(value) {
                        var elem = this[0] || {}, i = 0, l = this.length;
                        if (value === void 0 && elem.nodeType === 1) return elem.innerHTML;
                        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                            value = jQuery.htmlPrefilter(value);
                            try {
                                for (;i < l; i++) {
                                    elem = this[i] || {};
                                    if (elem.nodeType === 1) {
                                        jQuery.cleanData(getAll(elem, false));
                                        elem.innerHTML = value;
                                    }
                                }
                                elem = 0;
                            } catch (e) {}
                        }
                        if (elem) this.empty().append(value);
                    }), null, value, arguments.length);
                },
                replaceWith: function() {
                    var ignored = [];
                    return domManip(this, arguments, (function(elem) {
                        var parent = this.parentNode;
                        if (jQuery.inArray(this, ignored) < 0) {
                            jQuery.cleanData(getAll(this));
                            if (parent) parent.replaceChild(elem, this);
                        }
                    }), ignored);
                }
            });
            jQuery.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(name, original) {
                jQuery.fn[name] = function(selector) {
                    var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                    for (;i <= last; i++) {
                        elems = i === last ? this : this.clone(true);
                        jQuery(insert[i])[original](elems);
                        push.apply(ret, elems.get());
                    }
                    return this.pushStack(ret);
                };
            }));
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
            var getStyles = function(elem) {
                var view = elem.ownerDocument.defaultView;
                if (!view || !view.opener) view = window;
                return view.getComputedStyle(elem);
            };
            var swap = function(elem, options, callback) {
                var ret, name, old = {};
                for (name in options) {
                    old[name] = elem.style[name];
                    elem.style[name] = options[name];
                }
                ret = callback.call(elem);
                for (name in options) elem.style[name] = old[name];
                return ret;
            };
            var rboxStyle = new RegExp(cssExpand.join("|"), "i");
            (function() {
                function computeStyleTests() {
                    if (!div) return;
                    container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                    div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                    documentElement.appendChild(container).appendChild(div);
                    var divStyle = window.getComputedStyle(div);
                    pixelPositionVal = divStyle.top !== "1%";
                    reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                    div.style.right = "60%";
                    pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                    boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                    div.style.position = "absolute";
                    scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                    documentElement.removeChild(container);
                    div = null;
                }
                function roundPixelMeasures(measure) {
                    return Math.round(parseFloat(measure));
                }
                var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                if (!div.style) return;
                div.style.backgroundClip = "content-box";
                div.cloneNode(true).style.backgroundClip = "";
                support.clearCloneStyle = div.style.backgroundClip === "content-box";
                jQuery.extend(support, {
                    boxSizingReliable: function() {
                        computeStyleTests();
                        return boxSizingReliableVal;
                    },
                    pixelBoxStyles: function() {
                        computeStyleTests();
                        return pixelBoxStylesVal;
                    },
                    pixelPosition: function() {
                        computeStyleTests();
                        return pixelPositionVal;
                    },
                    reliableMarginLeft: function() {
                        computeStyleTests();
                        return reliableMarginLeftVal;
                    },
                    scrollboxSize: function() {
                        computeStyleTests();
                        return scrollboxSizeVal;
                    },
                    reliableTrDimensions: function() {
                        var table, tr, trChild, trStyle;
                        if (reliableTrDimensionsVal == null) {
                            table = document.createElement("table");
                            tr = document.createElement("tr");
                            trChild = document.createElement("div");
                            table.style.cssText = "position:absolute;left:-11111px";
                            tr.style.height = "1px";
                            trChild.style.height = "9px";
                            documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                            trStyle = window.getComputedStyle(tr);
                            reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
                            documentElement.removeChild(table);
                        }
                        return reliableTrDimensionsVal;
                    }
                });
            })();
            function curCSS(elem, name, computed) {
                var width, minWidth, maxWidth, ret, style = elem.style;
                computed = computed || getStyles(elem);
                if (computed) {
                    ret = computed.getPropertyValue(name) || computed[name];
                    if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
                    if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                        width = style.width;
                        minWidth = style.minWidth;
                        maxWidth = style.maxWidth;
                        style.minWidth = style.maxWidth = style.width = ret;
                        ret = computed.width;
                        style.width = width;
                        style.minWidth = minWidth;
                        style.maxWidth = maxWidth;
                    }
                }
                return ret !== void 0 ? ret + "" : ret;
            }
            function addGetHookIf(conditionFn, hookFn) {
                return {
                    get: function() {
                        if (conditionFn()) {
                            delete this.get;
                            return;
                        }
                        return (this.get = hookFn).apply(this, arguments);
                    }
                };
            }
            var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
            function vendorPropName(name) {
                var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                while (i--) {
                    name = cssPrefixes[i] + capName;
                    if (name in emptyStyle) return name;
                }
            }
            function finalPropName(name) {
                var final = jQuery.cssProps[name] || vendorProps[name];
                if (final) return final;
                if (name in emptyStyle) return name;
                return vendorProps[name] = vendorPropName(name) || name;
            }
            var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function setPositiveNumber(_elem, value, subtract) {
                var matches = rcssNum.exec(value);
                return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
            }
            function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
                if (box === (isBorderBox ? "border" : "content")) return 0;
                for (;i < 4; i += 2) {
                    if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i], true, styles);
                    if (!isBorderBox) {
                        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                        if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    } else {
                        if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                        if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                    }
                }
                if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                return delta;
            }
            function getWidthOrHeight(elem, dimension, extra) {
                var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                if (rnumnonpx.test(val)) {
                    if (!extra) return val;
                    val = "auto";
                }
                if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                    valueIsBorderBox = offsetProp in elem;
                    if (valueIsBorderBox) val = elem[offsetProp];
                }
                val = parseFloat(val) || 0;
                return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
            }
            jQuery.extend({
                cssHooks: {
                    opacity: {
                        get: function(elem, computed) {
                            if (computed) {
                                var ret = curCSS(elem, "opacity");
                                return ret === "" ? "1" : ret;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: true,
                    columnCount: true,
                    fillOpacity: true,
                    flexGrow: true,
                    flexShrink: true,
                    fontWeight: true,
                    gridArea: true,
                    gridColumn: true,
                    gridColumnEnd: true,
                    gridColumnStart: true,
                    gridRow: true,
                    gridRowEnd: true,
                    gridRowStart: true,
                    lineHeight: true,
                    opacity: true,
                    order: true,
                    orphans: true,
                    widows: true,
                    zIndex: true,
                    zoom: true
                },
                cssProps: {},
                style: function(elem, name, value, extra) {
                    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
                    var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                    if (!isCustomProp) name = finalPropName(origName);
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                    if (value !== void 0) {
                        type = typeof value;
                        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                            value = adjustCSS(elem, name, ret);
                            type = "number";
                        }
                        if (value == null || value !== value) return;
                        if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                    } else {
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) return ret;
                        return style[name];
                    }
                },
                css: function(elem, name, extra, styles) {
                    var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                    if (!isCustomProp) name = finalPropName(origName);
                    hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                    if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                    if (val === void 0) val = curCSS(elem, name, styles);
                    if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
                    if (extra === "" || extra) {
                        num = parseFloat(val);
                        return extra === true || isFinite(num) ? num || 0 : val;
                    }
                    return val;
                }
            });
            jQuery.each([ "height", "width" ], (function(_i, dimension) {
                jQuery.cssHooks[dimension] = {
                    get: function(elem, computed, extra) {
                        if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                            return getWidthOrHeight(elem, dimension, extra);
                        })) : getWidthOrHeight(elem, dimension, extra);
                    },
                    set: function(elem, value, extra) {
                        var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                        if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                            elem.style[dimension] = value;
                            value = jQuery.css(elem, dimension);
                        }
                        return setPositiveNumber(elem, value, subtract);
                    }
                };
            }));
            jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                    marginLeft: 0
                }, (function() {
                    return elem.getBoundingClientRect().left;
                }))) + "px";
            }));
            jQuery.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                    expand: function(value) {
                        var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                        for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                        return expanded;
                    }
                };
                if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
            }));
            jQuery.fn.extend({
                css: function(name, value) {
                    return access(this, (function(elem, name, value) {
                        var styles, len, map = {}, i = 0;
                        if (Array.isArray(name)) {
                            styles = getStyles(elem);
                            len = name.length;
                            for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                            return map;
                        }
                        return value !== void 0 ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                    }), name, value, arguments.length > 1);
                }
            });
            function Tween(elem, options, prop, end, easing) {
                return new Tween.prototype.init(elem, options, prop, end, easing);
            }
            jQuery.Tween = Tween;
            Tween.prototype = {
                constructor: Tween,
                init: function(elem, options, prop, end, easing, unit) {
                    this.elem = elem;
                    this.prop = prop;
                    this.easing = easing || jQuery.easing._default;
                    this.options = options;
                    this.start = this.now = this.cur();
                    this.end = end;
                    this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                },
                cur: function() {
                    var hooks = Tween.propHooks[this.prop];
                    return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                },
                run: function(percent) {
                    var eased, hooks = Tween.propHooks[this.prop];
                    if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                    this.now = (this.end - this.start) * eased + this.start;
                    if (this.options.step) this.options.step.call(this.elem, this.now, this);
                    if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                    return this;
                }
            };
            Tween.prototype.init.prototype = Tween.prototype;
            Tween.propHooks = {
                _default: {
                    get: function(tween) {
                        var result;
                        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                        result = jQuery.css(tween.elem, tween.prop, "");
                        return !result || result === "auto" ? 0 : result;
                    },
                    set: function(tween) {
                        if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                    }
                }
            };
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                set: function(tween) {
                    if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                }
            };
            jQuery.easing = {
                linear: function(p) {
                    return p;
                },
                swing: function(p) {
                    return .5 - Math.cos(p * Math.PI) / 2;
                },
                _default: "swing"
            };
            jQuery.fx = Tween.prototype.init;
            jQuery.fx.step = {};
            var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
            function schedule() {
                if (inProgress) {
                    if (document.hidden === false && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                    jQuery.fx.tick();
                }
            }
            function createFxNow() {
                window.setTimeout((function() {
                    fxNow = void 0;
                }));
                return fxNow = Date.now();
            }
            function genFx(type, includeWidth) {
                var which, i = 0, attrs = {
                    height: type
                };
                includeWidth = includeWidth ? 1 : 0;
                for (;i < 4; i += 2 - includeWidth) {
                    which = cssExpand[i];
                    attrs["margin" + which] = attrs["padding" + which] = type;
                }
                if (includeWidth) attrs.opacity = attrs.width = type;
                return attrs;
            }
            function createTween(value, prop, animation) {
                var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
            }
            function defaultPrefilter(elem, props, opts) {
                var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                if (!opts.queue) {
                    hooks = jQuery._queueHooks(elem, "fx");
                    if (hooks.unqueued == null) {
                        hooks.unqueued = 0;
                        oldfire = hooks.empty.fire;
                        hooks.empty.fire = function() {
                            if (!hooks.unqueued) oldfire();
                        };
                    }
                    hooks.unqueued++;
                    anim.always((function() {
                        anim.always((function() {
                            hooks.unqueued--;
                            if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                        }));
                    }));
                }
                for (prop in props) {
                    value = props[prop];
                    if (rfxtypes.test(value)) {
                        delete props[prop];
                        toggle = toggle || value === "toggle";
                        if (value === (hidden ? "hide" : "show")) if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = true; else continue;
                        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                    }
                }
                propTween = !jQuery.isEmptyObject(props);
                if (!propTween && jQuery.isEmptyObject(orig)) return;
                if (isBox && elem.nodeType === 1) {
                    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                    restoreDisplay = dataShow && dataShow.display;
                    if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
                    display = jQuery.css(elem, "display");
                    if (display === "none") if (restoreDisplay) display = restoreDisplay; else {
                        showHide([ elem ], true);
                        restoreDisplay = elem.style.display || restoreDisplay;
                        display = jQuery.css(elem, "display");
                        showHide([ elem ]);
                    }
                    if (display === "inline" || display === "inline-block" && restoreDisplay != null) if (jQuery.css(elem, "float") === "none") {
                        if (!propTween) {
                            anim.done((function() {
                                style.display = restoreDisplay;
                            }));
                            if (restoreDisplay == null) {
                                display = style.display;
                                restoreDisplay = display === "none" ? "" : display;
                            }
                        }
                        style.display = "inline-block";
                    }
                }
                if (opts.overflow) {
                    style.overflow = "hidden";
                    anim.always((function() {
                        style.overflow = opts.overflow[0];
                        style.overflowX = opts.overflow[1];
                        style.overflowY = opts.overflow[2];
                    }));
                }
                propTween = false;
                for (prop in orig) {
                    if (!propTween) {
                        if (dataShow) {
                            if ("hidden" in dataShow) hidden = dataShow.hidden;
                        } else dataShow = dataPriv.access(elem, "fxshow", {
                            display: restoreDisplay
                        });
                        if (toggle) dataShow.hidden = !hidden;
                        if (hidden) showHide([ elem ], true);
                        anim.done((function() {
                            if (!hidden) showHide([ elem ]);
                            dataPriv.remove(elem, "fxshow");
                            for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                        }));
                    }
                    propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = propTween.start;
                        if (hidden) {
                            propTween.end = propTween.start;
                            propTween.start = 0;
                        }
                    }
                }
            }
            function propFilter(props, specialEasing) {
                var index, name, easing, value, hooks;
                for (index in props) {
                    name = camelCase(index);
                    easing = specialEasing[name];
                    value = props[index];
                    if (Array.isArray(value)) {
                        easing = value[1];
                        value = props[index] = value[0];
                    }
                    if (index !== name) {
                        props[name] = value;
                        delete props[index];
                    }
                    hooks = jQuery.cssHooks[name];
                    if (hooks && "expand" in hooks) {
                        value = hooks.expand(value);
                        delete props[name];
                        for (index in value) if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    } else specialEasing[name] = easing;
                }
            }
            function Animation(elem, properties, options) {
                var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                    delete tick.elem;
                })), tick = function() {
                    if (stopped) return false;
                    var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                    for (;index < length; index++) animation.tweens[index].run(percent);
                    deferred.notifyWith(elem, [ animation, percent, remaining ]);
                    if (percent < 1 && length) return remaining;
                    if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                    deferred.resolveWith(elem, [ animation ]);
                    return false;
                }, animation = deferred.promise({
                    elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(true, {
                        specialEasing: {},
                        easing: jQuery.easing._default
                    }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        animation.tweens.push(tween);
                        return tween;
                    },
                    stop: function(gotoEnd) {
                        var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) return this;
                        stopped = true;
                        for (;index < length; index++) animation.tweens[index].run(1);
                        if (gotoEnd) {
                            deferred.notifyWith(elem, [ animation, 1, 0 ]);
                            deferred.resolveWith(elem, [ animation, gotoEnd ]);
                        } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                        return this;
                    }
                }), props = animation.props;
                propFilter(props, animation.opts.specialEasing);
                for (;index < length; index++) {
                    result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                    if (result) {
                        if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                        return result;
                    }
                }
                jQuery.map(props, createTween, animation);
                if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                jQuery.fx.timer(jQuery.extend(tick, {
                    elem,
                    anim: animation,
                    queue: animation.opts.queue
                }));
                return animation;
            }
            jQuery.Animation = jQuery.extend(Animation, {
                tweeners: {
                    "*": [ function(prop, value) {
                        var tween = this.createTween(prop, value);
                        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                        return tween;
                    } ]
                },
                tweener: function(props, callback) {
                    if (isFunction(props)) {
                        callback = props;
                        props = [ "*" ];
                    } else props = props.match(rnothtmlwhite);
                    var prop, index = 0, length = props.length;
                    for (;index < length; index++) {
                        prop = props[index];
                        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                        Animation.tweeners[prop].unshift(callback);
                    }
                },
                prefilters: [ defaultPrefilter ],
                prefilter: function(callback, prepend) {
                    if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                }
            });
            jQuery.speed = function(speed, easing, fn) {
                var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                    complete: fn || !fn && easing || isFunction(speed) && speed,
                    duration: speed,
                    easing: fn && easing || easing && !isFunction(easing) && easing
                };
                if (jQuery.fx.off) opt.duration = 0; else if (typeof opt.duration !== "number") if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                if (opt.queue == null || opt.queue === true) opt.queue = "fx";
                opt.old = opt.complete;
                opt.complete = function() {
                    if (isFunction(opt.old)) opt.old.call(this);
                    if (opt.queue) jQuery.dequeue(this, opt.queue);
                };
                return opt;
            };
            jQuery.fn.extend({
                fadeTo: function(speed, to, easing, callback) {
                    return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                        opacity: to
                    }, speed, easing, callback);
                },
                animate: function(prop, speed, easing, callback) {
                    var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                        var anim = Animation(this, jQuery.extend({}, prop), optall);
                        if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                    };
                    doAnimation.finish = doAnimation;
                    return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                },
                stop: function(type, clearQueue, gotoEnd) {
                    var stopQueue = function(hooks) {
                        var stop = hooks.stop;
                        delete hooks.stop;
                        stop(gotoEnd);
                    };
                    if (typeof type !== "string") {
                        gotoEnd = clearQueue;
                        clearQueue = type;
                        type = void 0;
                    }
                    if (clearQueue) this.queue(type || "fx", []);
                    return this.each((function() {
                        var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                        if (index) {
                            if (data[index] && data[index].stop) stopQueue(data[index]);
                        } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                        for (index = timers.length; index--; ) if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                        if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                    }));
                },
                finish: function(type) {
                    if (type !== false) type = type || "fx";
                    return this.each((function() {
                        var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                        data.finish = true;
                        jQuery.queue(this, type, []);
                        if (hooks && hooks.stop) hooks.stop.call(this, true);
                        for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                        for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                        delete data.finish;
                    }));
                }
            });
            jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                var cssFn = jQuery.fn[name];
                jQuery.fn[name] = function(speed, easing, callback) {
                    return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                };
            }));
            jQuery.each({
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(name, props) {
                jQuery.fn[name] = function(speed, easing, callback) {
                    return this.animate(props, speed, easing, callback);
                };
            }));
            jQuery.timers = [];
            jQuery.fx.tick = function() {
                var timer, i = 0, timers = jQuery.timers;
                fxNow = Date.now();
                for (;i < timers.length; i++) {
                    timer = timers[i];
                    if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                }
                if (!timers.length) jQuery.fx.stop();
                fxNow = void 0;
            };
            jQuery.fx.timer = function(timer) {
                jQuery.timers.push(timer);
                jQuery.fx.start();
            };
            jQuery.fx.interval = 13;
            jQuery.fx.start = function() {
                if (inProgress) return;
                inProgress = true;
                schedule();
            };
            jQuery.fx.stop = function() {
                inProgress = null;
            };
            jQuery.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            jQuery.fn.delay = function(time, type) {
                time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                type = type || "fx";
                return this.queue(type, (function(next, hooks) {
                    var timeout = window.setTimeout(next, time);
                    hooks.stop = function() {
                        window.clearTimeout(timeout);
                    };
                }));
            };
            (function() {
                var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                input.type = "checkbox";
                support.checkOn = input.value !== "";
                support.optSelected = opt.selected;
                input = document.createElement("input");
                input.value = "t";
                input.type = "radio";
                support.radioValue = input.value === "t";
            })();
            var boolHook, attrHandle = jQuery.expr.attrHandle;
            jQuery.fn.extend({
                attr: function(name, value) {
                    return access(this, jQuery.attr, name, value, arguments.length > 1);
                },
                removeAttr: function(name) {
                    return this.each((function() {
                        jQuery.removeAttr(this, name);
                    }));
                }
            });
            jQuery.extend({
                attr: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (nType === 3 || nType === 8 || nType === 2) return;
                    if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                    if (value !== void 0) {
                        if (value === null) {
                            jQuery.removeAttr(elem, name);
                            return;
                        }
                        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                        elem.setAttribute(name, value + "");
                        return value;
                    }
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                    ret = jQuery.find.attr(elem, name);
                    return ret == null ? void 0 : ret;
                },
                attrHooks: {
                    type: {
                        set: function(elem, value) {
                            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                                var val = elem.value;
                                elem.setAttribute("type", value);
                                if (val) elem.value = val;
                                return value;
                            }
                        }
                    }
                },
                removeAttr: function(elem, value) {
                    var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                    if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) elem.removeAttribute(name);
                }
            });
            boolHook = {
                set: function(elem, value, name) {
                    if (value === false) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                    return name;
                }
            };
            jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                var getter = attrHandle[name] || jQuery.find.attr;
                attrHandle[name] = function(elem, name, isXML) {
                    var ret, handle, lowercaseName = name.toLowerCase();
                    if (!isXML) {
                        handle = attrHandle[lowercaseName];
                        attrHandle[lowercaseName] = ret;
                        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                        attrHandle[lowercaseName] = handle;
                    }
                    return ret;
                };
            }));
            var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
            jQuery.fn.extend({
                prop: function(name, value) {
                    return access(this, jQuery.prop, name, value, arguments.length > 1);
                },
                removeProp: function(name) {
                    return this.each((function() {
                        delete this[jQuery.propFix[name] || name];
                    }));
                }
            });
            jQuery.extend({
                prop: function(elem, name, value) {
                    var ret, hooks, nType = elem.nodeType;
                    if (nType === 3 || nType === 8 || nType === 2) return;
                    if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                        name = jQuery.propFix[name] || name;
                        hooks = jQuery.propHooks[name];
                    }
                    if (value !== void 0) {
                        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                        return elem[name] = value;
                    }
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                    return elem[name];
                },
                propHooks: {
                    tabIndex: {
                        get: function(elem) {
                            var tabindex = jQuery.find.attr(elem, "tabindex");
                            if (tabindex) return parseInt(tabindex, 10);
                            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                            return -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            });
            if (!support.optSelected) jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                    return null;
                },
                set: function(elem) {
                    var parent = elem.parentNode;
                    if (parent) {
                        parent.selectedIndex;
                        if (parent.parentNode) parent.parentNode.selectedIndex;
                    }
                }
            };
            jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                jQuery.propFix[this.toLowerCase()] = this;
            }));
            function stripAndCollapse(value) {
                var tokens = value.match(rnothtmlwhite) || [];
                return tokens.join(" ");
            }
            function getClass(elem) {
                return elem.getAttribute && elem.getAttribute("class") || "";
            }
            function classesToArray(value) {
                if (Array.isArray(value)) return value;
                if (typeof value === "string") return value.match(rnothtmlwhite) || [];
                return [];
            }
            jQuery.fn.extend({
                addClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (isFunction(value)) return this.each((function(j) {
                        jQuery(this).addClass(value.call(this, j, getClass(this)));
                    }));
                    classes = classesToArray(value);
                    if (classes.length) while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) if (cur.indexOf(" " + clazz + " ") < 0) cur += clazz + " ";
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                        }
                    }
                    return this;
                },
                removeClass: function(value) {
                    var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                    if (isFunction(value)) return this.each((function(j) {
                        jQuery(this).removeClass(value.call(this, j, getClass(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    classes = classesToArray(value);
                    if (classes.length) while (elem = this[i++]) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                        if (cur) {
                            j = 0;
                            while (clazz = classes[j++]) while (cur.indexOf(" " + clazz + " ") > -1) cur = cur.replace(" " + clazz + " ", " ");
                            finalValue = stripAndCollapse(cur);
                            if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                        }
                    }
                    return this;
                },
                toggleClass: function(value, stateVal) {
                    var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                    if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                    if (isFunction(value)) return this.each((function(i) {
                        jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                    }));
                    return this.each((function() {
                        var className, i, self, classNames;
                        if (isValidValue) {
                            i = 0;
                            self = jQuery(this);
                            classNames = classesToArray(value);
                            while (className = classNames[i++]) if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                        } else if (value === void 0 || type === "boolean") {
                            className = getClass(this);
                            if (className) dataPriv.set(this, "__className__", className);
                            if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                        }
                    }));
                },
                hasClass: function(selector) {
                    var className, elem, i = 0;
                    className = " " + selector + " ";
                    while (elem = this[i++]) if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                    return false;
                }
            });
            var rreturn = /\r/g;
            jQuery.fn.extend({
                val: function(value) {
                    var hooks, ret, valueIsFunction, elem = this[0];
                    if (!arguments.length) {
                        if (elem) {
                            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) return ret;
                            ret = elem.value;
                            if (typeof ret === "string") return ret.replace(rreturn, "");
                            return ret == null ? "" : ret;
                        }
                        return;
                    }
                    valueIsFunction = isFunction(value);
                    return this.each((function(i) {
                        var val;
                        if (this.nodeType !== 1) return;
                        if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                        if (val == null) val = ""; else if (typeof val === "number") val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                            return value == null ? "" : value + "";
                        }));
                        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) this.value = val;
                    }));
                }
            });
            jQuery.extend({
                valHooks: {
                    option: {
                        get: function(elem) {
                            var val = jQuery.find.attr(elem, "value");
                            return val != null ? val : stripAndCollapse(jQuery.text(elem));
                        }
                    },
                    select: {
                        get: function(elem) {
                            var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                            if (index < 0) i = max; else i = one ? index : 0;
                            for (;i < max; i++) {
                                option = options[i];
                                if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                    value = jQuery(option).val();
                                    if (one) return value;
                                    values.push(value);
                                }
                            }
                            return values;
                        },
                        set: function(elem, value) {
                            var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                            while (i--) {
                                option = options[i];
                                if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                            }
                            if (!optionSet) elem.selectedIndex = -1;
                            return values;
                        }
                    }
                }
            });
            jQuery.each([ "radio", "checkbox" ], (function() {
                jQuery.valHooks[this] = {
                    set: function(elem, value) {
                        if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                    }
                };
                if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                    return elem.getAttribute("value") === null ? "on" : elem.value;
                };
            }));
            support.focusin = "onfocusin" in window;
            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                e.stopPropagation();
            };
            jQuery.extend(jQuery.event, {
                trigger: function(event, data, elem, onlyHandlers) {
                    var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                    cur = lastElement = tmp = elem = elem || document;
                    if (elem.nodeType === 3 || elem.nodeType === 8) return;
                    if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                    if (type.indexOf(".") > -1) {
                        namespaces = type.split(".");
                        type = namespaces.shift();
                        namespaces.sort();
                    }
                    ontype = type.indexOf(":") < 0 && "on" + type;
                    event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                    event.isTrigger = onlyHandlers ? 2 : 3;
                    event.namespace = namespaces.join(".");
                    event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    event.result = void 0;
                    if (!event.target) event.target = elem;
                    data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                    special = jQuery.event.special[type] || {};
                    if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
                    if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                        bubbleType = special.delegateType || type;
                        if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                        for (;cur; cur = cur.parentNode) {
                            eventPath.push(cur);
                            tmp = cur;
                        }
                        if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                    }
                    i = 0;
                    while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                        lastElement = cur;
                        event.type = i > 1 ? bubbleType : special.bindType || type;
                        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                        if (handle) handle.apply(cur, data);
                        handle = ontype && cur[ontype];
                        if (handle && handle.apply && acceptData(cur)) {
                            event.result = handle.apply(cur, data);
                            if (event.result === false) event.preventDefault();
                        }
                    }
                    event.type = type;
                    if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = void 0;
                        if (tmp) elem[ontype] = tmp;
                    }
                    return event.result;
                },
                simulate: function(type, elem, event) {
                    var e = jQuery.extend(new jQuery.Event, event, {
                        type,
                        isSimulated: true
                    });
                    jQuery.event.trigger(e, null, elem);
                }
            });
            jQuery.fn.extend({
                trigger: function(type, data) {
                    return this.each((function() {
                        jQuery.event.trigger(type, data, this);
                    }));
                },
                triggerHandler: function(type, data) {
                    var elem = this[0];
                    if (elem) return jQuery.event.trigger(type, data, elem, true);
                }
            });
            if (!support.focusin) jQuery.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(orig, fix) {
                var handler = function(event) {
                    jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
                };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                        if (!attaches) doc.addEventListener(orig, handler, true);
                        dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, true);
                            dataPriv.remove(doc, fix);
                        } else dataPriv.access(doc, fix, attaches);
                    }
                };
            }));
            var location = window.location;
            var nonce = {
                guid: Date.now()
            };
            var rquery = /\?/;
            jQuery.parseXML = function(data) {
                var xml;
                if (!data || typeof data !== "string") return null;
                try {
                    xml = (new window.DOMParser).parseFromString(data, "text/xml");
                } catch (e) {
                    xml = void 0;
                }
                if (!xml || xml.getElementsByTagName("parsererror").length) jQuery.error("Invalid XML: " + data);
                return xml;
            };
            var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
            function buildParams(prefix, obj, traditional, add) {
                var name;
                if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                    if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                })); else if (!traditional && toType(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
            }
            jQuery.param = function(a, traditional) {
                var prefix, s = [], add = function(key, valueOrFunction) {
                    var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
                };
                if (a == null) return "";
                if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                    add(this.name, this.value);
                })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                return s.join("&");
            };
            jQuery.fn.extend({
                serialize: function() {
                    return jQuery.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var elements = jQuery.prop(this, "elements");
                        return elements ? jQuery.makeArray(elements) : this;
                    })).filter((function() {
                        var type = this.type;
                        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                    })).map((function(_i, elem) {
                        var val = jQuery(this).val();
                        if (val == null) return null;
                        if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        }));
                        return {
                            name: elem.name,
                            value: val.replace(rCRLF, "\r\n")
                        };
                    })).get();
                }
            });
            var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
            originAnchor.href = location.href;
            function addToPrefiltersOrTransports(structure) {
                return function(dataTypeExpression, func) {
                    if (typeof dataTypeExpression !== "string") {
                        func = dataTypeExpression;
                        dataTypeExpression = "*";
                    }
                    var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                    if (isFunction(func)) while (dataType = dataTypes[i++]) if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else (structure[dataType] = structure[dataType] || []).push(func);
                };
            }
            function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                var inspected = {}, seekingTransport = structure === transports;
                function inspect(dataType) {
                    var selected;
                    inspected[dataType] = true;
                    jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                            options.dataTypes.unshift(dataTypeOrTransport);
                            inspect(dataTypeOrTransport);
                            return false;
                        } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                    }));
                    return selected;
                }
                return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
            }
            function ajaxExtend(target, src) {
                var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                for (key in src) if (src[key] !== void 0) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                if (deep) jQuery.extend(true, target, deep);
                return target;
            }
            function ajaxHandleResponses(s, jqXHR, responses) {
                var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                while (dataTypes[0] === "*") {
                    dataTypes.shift();
                    if (ct === void 0) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                }
                if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
                if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                    for (type in responses) {
                        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                            finalDataType = type;
                            break;
                        }
                        if (!firstDataType) firstDataType = type;
                    }
                    finalDataType = finalDataType || firstDataType;
                }
                if (finalDataType) {
                    if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                    return responses[finalDataType];
                }
            }
            function ajaxConvert(s, response, jqXHR, isSuccess) {
                var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                current = dataTypes.shift();
                while (current) {
                    if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                    if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                    prev = current;
                    current = dataTypes.shift();
                    if (current) if (current === "*") current = prev; else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) for (conv2 in converters) {
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    if (conv === true) conv = converters[conv2]; else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                        if (conv !== true) if (conv && s.throws) response = conv(response); else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
                return {
                    state: "success",
                    data: response
                };
            }
            jQuery.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: location.href,
                    type: "GET",
                    isLocal: rlocalProtocol.test(location.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": allTypes,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": true,
                        "text json": JSON.parse,
                        "text xml": jQuery.parseXML
                    },
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },
                ajaxSetup: function(target, settings) {
                    return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                },
                ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                ajaxTransport: addToPrefiltersOrTransports(transports),
                ajax: function(url, options) {
                    if (typeof url === "object") {
                        options = url;
                        url = void 0;
                    }
                    options = options || {};
                    var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (completed) {
                                if (!responseHeaders) {
                                    responseHeaders = {};
                                    while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                }
                                match = responseHeaders[key.toLowerCase() + " "];
                            }
                            return match == null ? null : match.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return completed ? responseHeadersString : null;
                        },
                        setRequestHeader: function(name, value) {
                            if (completed == null) {
                                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                requestHeaders[name] = value;
                            }
                            return this;
                        },
                        overrideMimeType: function(type) {
                            if (completed == null) s.mimeType = type;
                            return this;
                        },
                        statusCode: function(map) {
                            var code;
                            if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                            return this;
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            if (transport) transport.abort(finalText);
                            done(0, finalText);
                            return this;
                        }
                    };
                    deferred.promise(jqXHR);
                    s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                    s.type = options.method || options.type || s.method || s.type;
                    s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                    if (s.crossDomain == null) {
                        urlAnchor = document.createElement("a");
                        try {
                            urlAnchor.href = s.url;
                            urlAnchor.href = urlAnchor.href;
                            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                        } catch (e) {
                            s.crossDomain = true;
                        }
                    }
                    if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
                    inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                    if (completed) return jqXHR;
                    fireGlobals = jQuery.event && s.global;
                    if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
                    s.type = s.type.toUpperCase();
                    s.hasContent = !rnoContent.test(s.type);
                    cacheURL = s.url.replace(rhash, "");
                    if (!s.hasContent) {
                        uncached = s.url.slice(cacheURL.length);
                        if (s.data && (s.processData || typeof s.data === "string")) {
                            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                            delete s.data;
                        }
                        if (s.cache === false) {
                            cacheURL = cacheURL.replace(rantiCache, "$1");
                            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                        }
                        s.url = cacheURL + uncached;
                    } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
                    if (s.ifModified) {
                        if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                        if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                    }
                    if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                    jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                    for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                    if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) return jqXHR.abort();
                    strAbort = "abort";
                    completeDeferred.add(s.complete);
                    jqXHR.done(s.success);
                    jqXHR.fail(s.error);
                    transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                    if (!transport) done(-1, "No Transport"); else {
                        jqXHR.readyState = 1;
                        if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                        if (completed) return jqXHR;
                        if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                            jqXHR.abort("timeout");
                        }), s.timeout);
                        try {
                            completed = false;
                            transport.send(requestHeaders, done);
                        } catch (e) {
                            if (completed) throw e;
                            done(-1, e);
                        }
                    }
                    function done(status, nativeStatusText, responses, headers) {
                        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                        if (completed) return;
                        completed = true;
                        if (timeoutTimer) window.clearTimeout(timeoutTimer);
                        transport = void 0;
                        responseHeadersString = headers || "";
                        jqXHR.readyState = status > 0 ? 4 : 0;
                        isSuccess = status >= 200 && status < 300 || status === 304;
                        if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) s.converters["text script"] = function() {};
                        response = ajaxConvert(s, response, jqXHR, isSuccess);
                        if (isSuccess) {
                            if (s.ifModified) {
                                modified = jqXHR.getResponseHeader("Last-Modified");
                                if (modified) jQuery.lastModified[cacheURL] = modified;
                                modified = jqXHR.getResponseHeader("etag");
                                if (modified) jQuery.etag[cacheURL] = modified;
                            }
                            if (status === 204 || s.type === "HEAD") statusText = "nocontent"; else if (status === 304) statusText = "notmodified"; else {
                                statusText = response.state;
                                success = response.data;
                                error = response.error;
                                isSuccess = !error;
                            }
                        } else {
                            error = statusText;
                            if (status || !statusText) {
                                statusText = "error";
                                if (status < 0) status = 0;
                            }
                        }
                        jqXHR.status = status;
                        jqXHR.statusText = (nativeStatusText || statusText) + "";
                        if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                        jqXHR.statusCode(statusCode);
                        statusCode = void 0;
                        if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                        completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                        if (fireGlobals) {
                            globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                            if (! --jQuery.active) jQuery.event.trigger("ajaxStop");
                        }
                    }
                    return jqXHR;
                },
                getJSON: function(url, data, callback) {
                    return jQuery.get(url, data, callback, "json");
                },
                getScript: function(url, callback) {
                    return jQuery.get(url, void 0, callback, "script");
                }
            });
            jQuery.each([ "get", "post" ], (function(_i, method) {
                jQuery[method] = function(url, data, callback, type) {
                    if (isFunction(data)) {
                        type = type || callback;
                        callback = data;
                        data = void 0;
                    }
                    return jQuery.ajax(jQuery.extend({
                        url,
                        type: method,
                        dataType: type,
                        data,
                        success: callback
                    }, jQuery.isPlainObject(url) && url));
                };
            }));
            jQuery.ajaxPrefilter((function(s) {
                var i;
                for (i in s.headers) if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
            }));
            jQuery._evalUrl = function(url, options, doc) {
                return jQuery.ajax({
                    url,
                    type: "GET",
                    dataType: "script",
                    cache: true,
                    async: false,
                    global: false,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(response) {
                        jQuery.globalEval(response, options, doc);
                    }
                });
            };
            jQuery.fn.extend({
                wrapAll: function(html) {
                    var wrap;
                    if (this[0]) {
                        if (isFunction(html)) html = html.call(this[0]);
                        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) wrap.insertBefore(this[0]);
                        wrap.map((function() {
                            var elem = this;
                            while (elem.firstElementChild) elem = elem.firstElementChild;
                            return elem;
                        })).append(this);
                    }
                    return this;
                },
                wrapInner: function(html) {
                    if (isFunction(html)) return this.each((function(i) {
                        jQuery(this).wrapInner(html.call(this, i));
                    }));
                    return this.each((function() {
                        var self = jQuery(this), contents = self.contents();
                        if (contents.length) contents.wrapAll(html); else self.append(html);
                    }));
                },
                wrap: function(html) {
                    var htmlIsFunction = isFunction(html);
                    return this.each((function(i) {
                        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                    }));
                },
                unwrap: function(selector) {
                    this.parent(selector).not("body").each((function() {
                        jQuery(this).replaceWith(this.childNodes);
                    }));
                    return this;
                }
            });
            jQuery.expr.pseudos.hidden = function(elem) {
                return !jQuery.expr.pseudos.visible(elem);
            };
            jQuery.expr.pseudos.visible = function(elem) {
                return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
            };
            jQuery.ajaxSettings.xhr = function() {
                try {
                    return new window.XMLHttpRequest;
                } catch (e) {}
            };
            var xhrSuccessStatus = {
                0: 200,
                1223: 204
            }, xhrSupported = jQuery.ajaxSettings.xhr();
            support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
            support.ajax = xhrSupported = !!xhrSupported;
            jQuery.ajaxTransport((function(options) {
                var callback, errorCallback;
                if (support.cors || xhrSupported && !options.crossDomain) return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                        if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                        if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                        for (i in headers) xhr.setRequestHeader(i, headers[i]);
                        callback = function(type) {
                            return function() {
                                if (callback) {
                                    callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                    if (type === "abort") xhr.abort(); else if (type === "error") if (typeof xhr.status !== "number") complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                        binary: xhr.response
                                    } : {
                                        text: xhr.responseText
                                    }, xhr.getAllResponseHeaders());
                                }
                            };
                        };
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                        if (xhr.onabort !== void 0) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) window.setTimeout((function() {
                                if (callback) errorCallback();
                            }));
                        };
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) throw e;
                        }
                    },
                    abort: function() {
                        if (callback) callback();
                    }
                };
            }));
            jQuery.ajaxPrefilter((function(s) {
                if (s.crossDomain) s.contents.script = false;
            }));
            jQuery.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(text) {
                        jQuery.globalEval(text);
                        return text;
                    }
                }
            });
            jQuery.ajaxPrefilter("script", (function(s) {
                if (s.cache === void 0) s.cache = false;
                if (s.crossDomain) s.type = "GET";
            }));
            jQuery.ajaxTransport("script", (function(s) {
                if (s.crossDomain || s.scriptAttrs) {
                    var script, callback;
                    return {
                        send: function(_, complete) {
                            script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                charset: s.scriptCharset,
                                src: s.url
                            }).on("load error", callback = function(evt) {
                                script.remove();
                                callback = null;
                                if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                            });
                            document.head.appendChild(script[0]);
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }
            }));
            var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
            jQuery.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                    this[callback] = true;
                    return callback;
                }
            });
            jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
                if (jsonProp || s.dataTypes[0] === "jsonp") {
                    callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                    if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                    s.converters["script json"] = function() {
                        if (!responseContainer) jQuery.error(callbackName + " was not called");
                        return responseContainer[0];
                    };
                    s.dataTypes[0] = "json";
                    overwritten = window[callbackName];
                    window[callbackName] = function() {
                        responseContainer = arguments;
                    };
                    jqXHR.always((function() {
                        if (overwritten === void 0) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                        if (s[callbackName]) {
                            s.jsonpCallback = originalSettings.jsonpCallback;
                            oldCallbacks.push(callbackName);
                        }
                        if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                        responseContainer = overwritten = void 0;
                    }));
                    return "script";
                }
            }));
            support.createHTMLDocument = function() {
                var body = document.implementation.createHTMLDocument("").body;
                body.innerHTML = "<form></form><form></form>";
                return body.childNodes.length === 2;
            }();
            jQuery.parseHTML = function(data, context, keepScripts) {
                if (typeof data !== "string") return [];
                if (typeof context === "boolean") {
                    keepScripts = context;
                    context = false;
                }
                var base, parsed, scripts;
                if (!context) if (support.createHTMLDocument) {
                    context = document.implementation.createHTMLDocument("");
                    base = context.createElement("base");
                    base.href = document.location.href;
                    context.head.appendChild(base);
                } else context = document;
                parsed = rsingleTag.exec(data);
                scripts = !keepScripts && [];
                if (parsed) return [ context.createElement(parsed[1]) ];
                parsed = buildFragment([ data ], context, scripts);
                if (scripts && scripts.length) jQuery(scripts).remove();
                return jQuery.merge([], parsed.childNodes);
            };
            jQuery.fn.load = function(url, params, callback) {
                var selector, type, response, self = this, off = url.indexOf(" ");
                if (off > -1) {
                    selector = stripAndCollapse(url.slice(off));
                    url = url.slice(0, off);
                }
                if (isFunction(params)) {
                    callback = params;
                    params = void 0;
                } else if (params && typeof params === "object") type = "POST";
                if (self.length > 0) jQuery.ajax({
                    url,
                    type: type || "GET",
                    dataType: "html",
                    data: params
                }).done((function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                })).always(callback && function(jqXHR, status) {
                    self.each((function() {
                        callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                    }));
                });
                return this;
            };
            jQuery.expr.pseudos.animated = function(elem) {
                return jQuery.grep(jQuery.timers, (function(fn) {
                    return elem === fn.elem;
                })).length;
            };
            jQuery.offset = {
                setOffset: function(elem, options, i) {
                    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                    if (position === "static") elem.style.position = "relative";
                    curOffset = curElem.offset();
                    curCSSTop = jQuery.css(elem, "top");
                    curCSSLeft = jQuery.css(elem, "left");
                    calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                    if (calculatePosition) {
                        curPosition = curElem.position();
                        curTop = curPosition.top;
                        curLeft = curPosition.left;
                    } else {
                        curTop = parseFloat(curCSSTop) || 0;
                        curLeft = parseFloat(curCSSLeft) || 0;
                    }
                    if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                    if (options.top != null) props.top = options.top - curOffset.top + curTop;
                    if (options.left != null) props.left = options.left - curOffset.left + curLeft;
                    if ("using" in options) options.using.call(elem, props); else {
                        if (typeof props.top === "number") props.top += "px";
                        if (typeof props.left === "number") props.left += "px";
                        curElem.css(props);
                    }
                }
            };
            jQuery.fn.extend({
                offset: function(options) {
                    if (arguments.length) return options === void 0 ? this : this.each((function(i) {
                        jQuery.offset.setOffset(this, options, i);
                    }));
                    var rect, win, elem = this[0];
                    if (!elem) return;
                    if (!elem.getClientRects().length) return {
                        top: 0,
                        left: 0
                    };
                    rect = elem.getBoundingClientRect();
                    win = elem.ownerDocument.defaultView;
                    return {
                        top: rect.top + win.pageYOffset,
                        left: rect.left + win.pageXOffset
                    };
                },
                position: function() {
                    if (!this[0]) return;
                    var offsetParent, offset, doc, elem = this[0], parentOffset = {
                        top: 0,
                        left: 0
                    };
                    if (jQuery.css(elem, "position") === "fixed") offset = elem.getBoundingClientRect(); else {
                        offset = this.offset();
                        doc = elem.ownerDocument;
                        offsetParent = elem.offsetParent || doc.documentElement;
                        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.parentNode;
                        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                            parentOffset = jQuery(offsetParent).offset();
                            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                        }
                    }
                    return {
                        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                    };
                },
                offsetParent: function() {
                    return this.map((function() {
                        var offsetParent = this.offsetParent;
                        while (offsetParent && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
                        return offsetParent || documentElement;
                    }));
                }
            });
            jQuery.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(method, prop) {
                var top = "pageYOffset" === prop;
                jQuery.fn[method] = function(val) {
                    return access(this, (function(elem, method, val) {
                        var win;
                        if (isWindow(elem)) win = elem; else if (elem.nodeType === 9) win = elem.defaultView;
                        if (val === void 0) return win ? win[prop] : elem[method];
                        if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                    }), method, val, arguments.length);
                };
            }));
            jQuery.each([ "top", "left" ], (function(_i, prop) {
                jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                    if (computed) {
                        computed = curCSS(elem, prop);
                        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                    }
                }));
            }));
            jQuery.each({
                Height: "height",
                Width: "width"
            }, (function(name, type) {
                jQuery.each({
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name
                }, (function(defaultExtra, funcName) {
                    jQuery.fn[funcName] = function(margin, value) {
                        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                        return access(this, (function(elem, type, value) {
                            var doc;
                            if (isWindow(elem)) return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                            if (elem.nodeType === 9) {
                                doc = elem.documentElement;
                                return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                            }
                            return value === void 0 ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                        }), type, chainable ? margin : void 0, chainable);
                    };
                }));
            }));
            jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                jQuery.fn[type] = function(fn) {
                    return this.on(type, fn);
                };
            }));
            jQuery.fn.extend({
                bind: function(types, data, fn) {
                    return this.on(types, null, data, fn);
                },
                unbind: function(types, fn) {
                    return this.off(types, null, fn);
                },
                delegate: function(selector, types, data, fn) {
                    return this.on(types, selector, data, fn);
                },
                undelegate: function(selector, types, fn) {
                    return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                },
                hover: function(fnOver, fnOut) {
                    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                }
            });
            jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                jQuery.fn[name] = function(data, fn) {
                    return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                };
            }));
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            jQuery.proxy = function(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }
                if (!isFunction(fn)) return;
                args = slice.call(arguments, 2);
                proxy = function() {
                    return fn.apply(context || this, args.concat(slice.call(arguments)));
                };
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy;
            };
            jQuery.holdReady = function(hold) {
                if (hold) jQuery.readyWait++; else jQuery.ready(true);
            };
            jQuery.isArray = Array.isArray;
            jQuery.parseJSON = JSON.parse;
            jQuery.nodeName = nodeName;
            jQuery.isFunction = isFunction;
            jQuery.isWindow = isWindow;
            jQuery.camelCase = camelCase;
            jQuery.type = toType;
            jQuery.now = Date.now;
            jQuery.isNumeric = function(obj) {
                var type = jQuery.type(obj);
                return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
            };
            jQuery.trim = function(text) {
                return text == null ? "" : (text + "").replace(rtrim, "");
            };
            if (typeof define === "function" && define.amd) define("jquery", [], (function() {
                return jQuery;
            }));
            var _jQuery = window.jQuery, _$ = window.$;
            jQuery.noConflict = function(deep) {
                if (window.$ === jQuery) window.$ = _$;
                if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                return jQuery;
            };
            if (typeof noGlobal === "undefined") window.jQuery = window.$ = jQuery;
            return jQuery;
        }));
        !function(e) {
            var t = {};
            function n(i) {
                if (t[i]) return t[i].exports;
                var s = t[i] = {
                    i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
            }
            n.m = e, n.c = t, n.d = function(e, t, i) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                });
            }, n.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                });
            }, n.t = function(e, t) {
                if (1 & t && (e = n(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function(t) {
                    return e[t];
                }.bind(null, s));
                return i;
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return n.d(t, "a", t), t;
            }, n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, n.p = "", n(n.s = 0);
        }([ function(e, t, n) {
            "use strict";
            n.r(t);
            var i = {
                hooks: {},
                extensions: [],
                wrappers: [],
                navbar: {
                    add: !0,
                    sticky: !0,
                    title: "Menu",
                    titleLink: "parent"
                },
                onClick: {
                    close: null,
                    preventDefault: null,
                    setSelected: !0
                },
                slidingSubmenus: !0
            }, s = {
                classNames: {
                    inset: "Inset",
                    nolistview: "NoListview",
                    nopanel: "NoPanel",
                    panel: "Panel",
                    selected: "Selected",
                    vertical: "Vertical"
                },
                language: null,
                openingInterval: 25,
                panelNodetype: [ "ul", "ol", "div" ],
                transitionDuration: 400
            };
            function a(e, t) {
                for (var n in "object" != o(e) && (e = {}), "object" != o(t) && (t = {}), t) t.hasOwnProperty(n) && (void 0 === e[n] ? e[n] = t[n] : "object" == o(e[n]) && a(e[n], t[n]));
                return e;
            }
            function o(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            function r(e, t, n) {
                if ("function" == typeof t) {
                    var i = t.call(e);
                    if (void 0 !== i) return i;
                }
                return null !== t && "function" != typeof t && void 0 !== t || void 0 === n ? t : n;
            }
            function c(e, t, n) {
                var i = !1, s = function(n) {
                    void 0 !== n && n.target !== e || (i || (e.removeEventListener("transitionend", s), 
                    e.removeEventListener("webkitTransitionEnd", s), t.call(e)), i = !0);
                };
                e.addEventListener("transitionend", s), e.addEventListener("webkitTransitionEnd", s), 
                setTimeout(s, 1.1 * n);
            }
            function m() {
                return "mm-" + l++;
            }
            var l = 0;
            function d(e) {
                return "mm-" == e.slice(0, 3) ? e.slice(3) : e;
            }
            var p = {};
            function u(e, t) {
                void 0 === p[t] && (p[t] = {}), a(p[t], e);
            }
            var f = {
                Menu: "منو"
            }, h = {
                Menu: "Menü"
            }, v = {
                Menu: "Меню"
            };
            function b(e) {
                var t = e.split("."), n = document.createElement(t.shift());
                return t.forEach((function(e) {
                    n.classList.add(e);
                })), n;
            }
            function g(e, t) {
                return Array.prototype.slice.call(e.querySelectorAll(t));
            }
            function _(e, t) {
                var n = Array.prototype.slice.call(e.children);
                return t ? n.filter((function(e) {
                    return e.matches(t);
                })) : n;
            }
            function y(e, t) {
                for (var n = [], i = e.parentElement; i; ) n.push(i), i = i.parentElement;
                return t ? n.filter((function(e) {
                    return e.matches(t);
                })) : n;
            }
            function L(e) {
                return e.filter((function(e) {
                    return !e.matches(".mm-hidden");
                }));
            }
            function w(e) {
                var t = [];
                return L(e).forEach((function(e) {
                    t.push.apply(t, _(e, "a.mm-listitem__text"));
                })), t.filter((function(e) {
                    return !e.matches(".mm-btn_next");
                }));
            }
            function E(e, t, n) {
                e.matches("." + t) && (e.classList.remove(t), e.classList.add(n));
            }
            var x = {};
            function P(e, t, n) {
                "number" == typeof e && (e = "(min-width: " + e + "px)"), x[e] = x[e] || [], x[e].push({
                    yes: t,
                    no: n
                });
            }
            function k(e, t) {
                for (var n = t.matches ? "yes" : "no", i = 0; i < x[e].length; i++) x[e][i][n]();
            }
            u({
                Menu: "Menu"
            }, "nl"), u(f, "fa"), u(h, "de"), u(v, "ru");
            var S = function() {
                function e(t, n, i) {
                    return this.opts = a(n, e.options), this.conf = a(i, e.configs), this._api = [ "bind", "initPanel", "initListview", "openPanel", "closePanel", "closeAllPanels", "setSelected" ], 
                    this.node = {}, this.vars = {}, this.hook = {}, this.clck = [], this.node.menu = "string" == typeof t ? document.querySelector(t) : t, 
                    "function" == typeof this._deprecatedWarnings && this._deprecatedWarnings(), this._initWrappers(), 
                    this._initAddons(), this._initExtensions(), this._initHooks(), this._initAPI(), 
                    this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), function() {
                        var e = function(e) {
                            var t = window.matchMedia(e);
                            k(e, t), t.onchange = function(n) {
                                k(e, t);
                            };
                        };
                        for (var t in x) e(t);
                    }(), this;
                }
                return e.prototype.openPanel = function(e, t) {
                    var n = this;
                    if (this.trigger("openPanel:before", [ e ]), e && (e.matches(".mm-panel") || (e = e.closest(".mm-panel")), 
                    e)) {
                        if ("boolean" != typeof t && (t = !0), e.parentElement.matches(".mm-listitem_vertical")) {
                            y(e, ".mm-listitem_vertical").forEach((function(e) {
                                e.classList.add("mm-listitem_opened"), _(e, ".mm-panel").forEach((function(e) {
                                    e.classList.remove("mm-hidden");
                                }));
                            }));
                            var i = y(e, ".mm-panel").filter((function(e) {
                                return !e.parentElement.matches(".mm-listitem_vertical");
                            }));
                            this.trigger("openPanel:start", [ e ]), i.length && this.openPanel(i[0]), this.trigger("openPanel:finish", [ e ]);
                        } else {
                            if (e.matches(".mm-panel_opened")) return;
                            var s = _(this.node.pnls, ".mm-panel"), a = _(this.node.pnls, ".mm-panel_opened")[0];
                            s.filter((function(t) {
                                return t !== e;
                            })).forEach((function(e) {
                                e.classList.remove("mm-panel_opened-parent");
                            }));
                            for (var o = e.mmParent; o; ) (o = o.closest(".mm-panel")) && (o.parentElement.matches(".mm-listitem_vertical") || o.classList.add("mm-panel_opened-parent"), 
                            o = o.mmParent);
                            s.forEach((function(e) {
                                e.classList.remove("mm-panel_highest");
                            })), s.filter((function(e) {
                                return e !== a;
                            })).filter((function(t) {
                                return t !== e;
                            })).forEach((function(e) {
                                e.classList.add("mm-hidden");
                            })), e.classList.remove("mm-hidden");
                            var r = function() {
                                a && a.classList.remove("mm-panel_opened"), e.classList.add("mm-panel_opened"), 
                                e.matches(".mm-panel_opened-parent") ? (a && a.classList.add("mm-panel_highest"), 
                                e.classList.remove("mm-panel_opened-parent")) : (a && a.classList.add("mm-panel_opened-parent"), 
                                e.classList.add("mm-panel_highest")), n.trigger("openPanel:start", [ e ]);
                            }, m = function() {
                                a && (a.classList.remove("mm-panel_highest"), a.classList.add("mm-hidden")), e.classList.remove("mm-panel_highest"), 
                                n.trigger("openPanel:finish", [ e ]);
                            };
                            t && !e.matches(".mm-panel_noanimation") ? setTimeout((function() {
                                c(e, (function() {
                                    m();
                                }), n.conf.transitionDuration), r();
                            }), this.conf.openingInterval) : (r(), m());
                        }
                        this.trigger("openPanel:after", [ e ]);
                    }
                }, e.prototype.closePanel = function(e) {
                    this.trigger("closePanel:before", [ e ]);
                    var t = e.parentElement;
                    t.matches(".mm-listitem_vertical") && (t.classList.remove("mm-listitem_opened"), 
                    e.classList.add("mm-hidden"), this.trigger("closePanel", [ e ])), this.trigger("closePanel:after", [ e ]);
                }, e.prototype.closeAllPanels = function(e) {
                    this.trigger("closeAllPanels:before"), this.node.pnls.querySelectorAll(".mm-listitem").forEach((function(e) {
                        e.classList.remove("mm-listitem_selected"), e.classList.remove("mm-listitem_opened");
                    }));
                    var t = _(this.node.pnls, ".mm-panel"), n = e || t[0];
                    _(this.node.pnls, ".mm-panel").forEach((function(e) {
                        e !== n && (e.classList.remove("mm-panel_opened"), e.classList.remove("mm-panel_opened-parent"), 
                        e.classList.remove("mm-panel_highest"), e.classList.add("mm-hidden"));
                    })), this.openPanel(n, !1), this.trigger("closeAllPanels:after");
                }, e.prototype.togglePanel = function(e) {
                    var t = e.parentElement;
                    t.matches(".mm-listitem_vertical") && this[t.matches(".mm-listitem_opened") ? "closePanel" : "openPanel"](e);
                }, e.prototype.setSelected = function(e) {
                    this.trigger("setSelected:before", [ e ]), g(this.node.menu, ".mm-listitem_selected").forEach((function(e) {
                        e.classList.remove("mm-listitem_selected");
                    })), e.classList.add("mm-listitem_selected"), this.trigger("setSelected:after", [ e ]);
                }, e.prototype.bind = function(e, t) {
                    this.hook[e] = this.hook[e] || [], this.hook[e].push(t);
                }, e.prototype.trigger = function(e, t) {
                    if (this.hook[e]) for (var n = 0, i = this.hook[e].length; n < i; n++) this.hook[e][n].apply(this, t);
                }, e.prototype._initAPI = function() {
                    var e = this, t = this;
                    this.API = {}, this._api.forEach((function(n) {
                        e.API[n] = function() {
                            var e = t[n].apply(t, arguments);
                            return void 0 === e ? t.API : e;
                        };
                    })), this.node.menu.mmApi = this.API;
                }, e.prototype._initHooks = function() {
                    for (var e in this.opts.hooks) this.bind(e, this.opts.hooks[e]);
                }, e.prototype._initWrappers = function() {
                    this.trigger("initWrappers:before");
                    for (var t = 0; t < this.opts.wrappers.length; t++) {
                        var n = e.wrappers[this.opts.wrappers[t]];
                        "function" == typeof n && n.call(this);
                    }
                    this.trigger("initWrappers:after");
                }, e.prototype._initAddons = function() {
                    for (var t in this.trigger("initAddons:before"), e.addons) e.addons[t].call(this);
                    this.trigger("initAddons:after");
                }, e.prototype._initExtensions = function() {
                    var e = this;
                    this.trigger("initExtensions:before"), "array" == o(this.opts.extensions) && (this.opts.extensions = {
                        all: this.opts.extensions
                    }), Object.keys(this.opts.extensions).forEach((function(t) {
                        var n = e.opts.extensions[t].map((function(e) {
                            return "mm-menu_" + e;
                        }));
                        n.length && P(t, (function() {
                            n.forEach((function(t) {
                                e.node.menu.classList.add(t);
                            }));
                        }), (function() {
                            n.forEach((function(t) {
                                e.node.menu.classList.remove(t);
                            }));
                        }));
                    })), this.trigger("initExtensions:after");
                }, e.prototype._initMenu = function() {
                    var e = this;
                    this.trigger("initMenu:before"), this.node.wrpr = this.node.wrpr || this.node.menu.parentElement, 
                    this.node.wrpr.classList.add("mm-wrapper"), this.node.menu.id = this.node.menu.id || m();
                    var t = b("div.mm-panels");
                    _(this.node.menu).forEach((function(n) {
                        e.conf.panelNodetype.indexOf(n.nodeName.toLowerCase()) > -1 && t.append(n);
                    })), this.node.menu.append(t), this.node.pnls = t, this.node.menu.classList.add("mm-menu"), 
                    this.trigger("initMenu:after");
                }, e.prototype._initPanels = function() {
                    var e = this;
                    this.trigger("initPanels:before"), this.clck.push((function(t, n) {
                        if (n.inMenu) {
                            var i = t.getAttribute("href");
                            if (i && i.length > 1 && "#" == i.slice(0, 1)) try {
                                var s = g(e.node.menu, i)[0];
                                if (s && s.matches(".mm-panel")) return t.parentElement.matches(".mm-listitem_vertical") ? e.togglePanel(s) : e.openPanel(s), 
                                !0;
                            } catch (e) {}
                        }
                    })), _(this.node.pnls).forEach((function(t) {
                        e.initPanel(t);
                    })), this.trigger("initPanels:after");
                }, e.prototype.initPanel = function(e) {
                    var t = this, n = this.conf.panelNodetype.join(", ");
                    if (e.matches(n) && (e.matches(".mm-panel") || (e = this._initPanel(e)), e)) {
                        var i = [];
                        i.push.apply(i, _(e, "." + this.conf.classNames.panel)), _(e, ".mm-listview").forEach((function(e) {
                            _(e, ".mm-listitem").forEach((function(e) {
                                i.push.apply(i, _(e, n));
                            }));
                        })), i.forEach((function(e) {
                            t.initPanel(e);
                        }));
                    }
                }, e.prototype._initPanel = function(e) {
                    var t = this;
                    if (this.trigger("initPanel:before", [ e ]), E(e, this.conf.classNames.panel, "mm-panel"), 
                    E(e, this.conf.classNames.nopanel, "mm-nopanel"), E(e, this.conf.classNames.inset, "mm-listview_inset"), 
                    e.matches(".mm-listview_inset") && e.classList.add("mm-nopanel"), e.matches(".mm-nopanel")) return null;
                    var n = e.id || m(), i = e.matches("." + this.conf.classNames.vertical) || !this.opts.slidingSubmenus;
                    if (e.classList.remove(this.conf.classNames.vertical), e.matches("ul, ol")) {
                        e.removeAttribute("id");
                        var s = b("div");
                        e.before(s), s.append(e), e = s;
                    }
                    e.id = n, e.classList.add("mm-panel"), e.classList.add("mm-hidden");
                    var a = [ e.parentElement ].filter((function(e) {
                        return e.matches("li");
                    }))[0];
                    if (i ? a && a.classList.add("mm-listitem_vertical") : this.node.pnls.append(e), 
                    a && (a.mmChild = e, e.mmParent = a, a && a.matches(".mm-listitem") && !_(a, ".mm-btn").length)) {
                        var o = _(a, ".mm-listitem__text")[0];
                        if (o) {
                            var r = b("a.mm-btn.mm-btn_next.mm-listitem__btn");
                            r.setAttribute("href", "#" + e.id), o.matches("span") ? (r.classList.add("mm-listitem__text"), 
                            r.innerHTML = o.innerHTML, a.insertBefore(r, o.nextElementSibling), o.remove()) : a.insertBefore(r, _(a, ".mm-panel")[0]);
                        }
                    }
                    return this._initNavbar(e), _(e, "ul, ol").forEach((function(e) {
                        t.initListview(e);
                    })), this.trigger("initPanel:after", [ e ]), e;
                }, e.prototype._initNavbar = function(e) {
                    if (this.trigger("initNavbar:before", [ e ]), !_(e, ".mm-navbar").length) {
                        var t = null, n = null;
                        if (e.getAttribute("data-mm-parent") ? n = g(this.node.pnls, e.getAttribute("data-mm-parent"))[0] : (t = e.mmParent) && (n = t.closest(".mm-panel")), 
                        !t || !t.matches(".mm-listitem_vertical")) {
                            var i = b("div.mm-navbar");
                            if (this.opts.navbar.add ? this.opts.navbar.sticky && i.classList.add("mm-navbar_sticky") : i.classList.add("mm-hidden"), 
                            n) {
                                var s = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
                                s.setAttribute("href", "#" + n.id), i.append(s);
                            }
                            var a = null;
                            t ? a = _(t, ".mm-listitem__text")[0] : n && (a = g(n, 'a[href="#' + e.id + '"]')[0]);
                            var o = b("a.mm-navbar__title"), r = b("span");
                            switch (o.append(r), r.innerHTML = e.getAttribute("data-mm-title") || (a ? a.textContent : "") || this.i18n(this.opts.navbar.title) || this.i18n("Menu"), 
                            this.opts.navbar.titleLink) {
                              case "anchor":
                                a && o.setAttribute("href", a.getAttribute("href"));
                                break;

                              case "parent":
                                n && o.setAttribute("href", "#" + n.id);
                            }
                            i.append(o), e.prepend(i), this.trigger("initNavbar:after", [ e ]);
                        }
                    }
                }, e.prototype.initListview = function(e) {
                    var t = this;
                    this.trigger("initListview:before", [ e ]), E(e, this.conf.classNames.nolistview, "mm-nolistview"), 
                    e.matches(".mm-nolistview") || (e.classList.add("mm-listview"), _(e).forEach((function(e) {
                        e.classList.add("mm-listitem"), E(e, t.conf.classNames.selected, "mm-listitem_selected"), 
                        _(e, "a, span").forEach((function(e) {
                            e.matches(".mm-btn") || e.classList.add("mm-listitem__text");
                        }));
                    }))), this.trigger("initListview:after", [ e ]);
                }, e.prototype._initOpened = function() {
                    this.trigger("initOpened:before");
                    var e = this.node.pnls.querySelectorAll(".mm-listitem_selected"), t = null;
                    e.forEach((function(e) {
                        t = e, e.classList.remove("mm-listitem_selected");
                    })), t && t.classList.add("mm-listitem_selected");
                    var n = t ? t.closest(".mm-panel") : _(this.node.pnls, ".mm-panel")[0];
                    this.openPanel(n, !1), this.trigger("initOpened:after");
                }, e.prototype._initAnchors = function() {
                    var e = this;
                    this.trigger("initAnchors:before"), document.addEventListener("click", (function(t) {
                        var n = t.target.closest("a[href]");
                        if (n) {
                            for (var i = {
                                inMenu: n.closest(".mm-menu") === e.node.menu,
                                inListview: n.matches(".mm-listitem > a"),
                                toExternal: n.matches('[rel="external"]') || n.matches('[target="_blank"]')
                            }, s = {
                                close: null,
                                setSelected: null,
                                preventDefault: "#" == n.getAttribute("href").slice(0, 1)
                            }, c = 0; c < e.clck.length; c++) {
                                var m = e.clck[c].call(e, n, i);
                                if (m) {
                                    if ("boolean" == typeof m) return void t.preventDefault();
                                    "object" == o(m) && (s = a(m, s));
                                }
                            }
                            i.inMenu && i.inListview && !i.toExternal && (r(n, e.opts.onClick.setSelected, s.setSelected) && e.setSelected(n.parentElement), 
                            r(n, e.opts.onClick.preventDefault, s.preventDefault) && t.preventDefault(), r(n, e.opts.onClick.close, s.close) && e.opts.offCanvas && "function" == typeof e.close && e.close());
                        }
                    }), !0), this.trigger("initAnchors:after");
                }, e.prototype.i18n = function(e) {
                    return function(e, t) {
                        return "string" == typeof t && void 0 !== p[t] && p[t][e] || e;
                    }(e, this.conf.language);
                }, e.options = i, e.configs = s, e.addons = {}, e.wrappers = {}, e.node = {}, e.vars = {}, 
                e;
            }(), M = {
                blockUI: !0,
                moveBackground: !0
            };
            var A = {
                clone: !1,
                menu: {
                    insertMethod: "prepend",
                    insertSelector: "body"
                },
                page: {
                    nodetype: "div",
                    selector: null,
                    noSelector: []
                }
            };
            function T(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1) : "";
            }
            function C(e, t, n) {
                var i = t.split(".");
                e[t = "mmEvent" + T(i[0]) + T(i[1])] = e[t] || [], e[t].push(n), e.addEventListener(i[0], n);
            }
            function N(e, t) {
                var n = t.split(".");
                t = "mmEvent" + T(n[0]) + T(n[1]), (e[t] || []).forEach((function(t) {
                    e.removeEventListener(n[0], t);
                }));
            }
            S.options.offCanvas = M, S.configs.offCanvas = A;
            S.prototype.open = function() {
                var e = this;
                this.trigger("open:before"), this.vars.opened || (this._openSetup(), setTimeout((function() {
                    e._openStart();
                }), this.conf.openingInterval), this.trigger("open:after"));
            }, S.prototype._openSetup = function() {
                var e = this, t = this.opts.offCanvas;
                this.closeAllOthers(), function(e, t, n) {
                    var i = t.split(".");
                    (e[t = "mmEvent" + T(i[0]) + T(i[1])] || []).forEach((function(e) {
                        e(n || {});
                    }));
                }(window, "resize.page", {
                    force: !0
                });
                var n = [ "mm-wrapper_opened" ];
                t.blockUI && n.push("mm-wrapper_blocking"), "modal" == t.blockUI && n.push("mm-wrapper_modal"), 
                t.moveBackground && n.push("mm-wrapper_background"), n.forEach((function(t) {
                    e.node.wrpr.classList.add(t);
                })), setTimeout((function() {
                    e.vars.opened = !0;
                }), this.conf.openingInterval), this.node.menu.classList.add("mm-menu_opened");
            }, S.prototype._openStart = function() {
                var e = this;
                c(S.node.page, (function() {
                    e.trigger("open:finish");
                }), this.conf.transitionDuration), this.trigger("open:start"), this.node.wrpr.classList.add("mm-wrapper_opening");
            }, S.prototype.close = function() {
                var e = this;
                this.trigger("close:before"), this.vars.opened && (c(S.node.page, (function() {
                    e.node.menu.classList.remove("mm-menu_opened");
                    [ "mm-wrapper_opened", "mm-wrapper_blocking", "mm-wrapper_modal", "mm-wrapper_background" ].forEach((function(t) {
                        e.node.wrpr.classList.remove(t);
                    })), e.vars.opened = !1, e.trigger("close:finish");
                }), this.conf.transitionDuration), this.trigger("close:start"), this.node.wrpr.classList.remove("mm-wrapper_opening"), 
                this.trigger("close:after"));
            }, S.prototype.closeAllOthers = function() {
                var e = this;
                g(document.body, ".mm-menu_offcanvas").forEach((function(t) {
                    if (t !== e.node.menu) {
                        var n = t.mmApi;
                        n && n.close && n.close();
                    }
                }));
            }, S.prototype.setPage = function(e) {
                this.trigger("setPage:before", [ e ]);
                var t = this.conf.offCanvas;
                if (!e) {
                    var n = "string" == typeof t.page.selector ? g(document.body, t.page.selector) : _(document.body, t.page.nodetype);
                    if (n = n.filter((function(e) {
                        return !e.matches(".mm-menu, .mm-wrapper__blocker");
                    })), t.page.noSelector.length && (n = n.filter((function(e) {
                        return !e.matches(t.page.noSelector.join(", "));
                    }))), n.length > 1) {
                        var i = b("div");
                        n[0].before(i), n.forEach((function(e) {
                            i.append(e);
                        })), n = [ i ];
                    }
                    e = n[0];
                }
                e.classList.add("mm-page"), e.classList.add("mm-slideout"), e.id = e.id || m(), 
                S.node.page = e, this.trigger("setPage:after", [ e ]);
            };
            var H = function() {
                var e = this;
                N(document.body, "keydown.tabguard"), C(document.body, "keydown.tabguard", (function(t) {
                    9 == t.keyCode && e.node.wrpr.matches(".mm-wrapper_opened") && t.preventDefault();
                }));
            }, j = function() {
                var e = this;
                this.trigger("initBlocker:before");
                var t = this.opts.offCanvas, n = this.conf.offCanvas;
                if (t.blockUI) {
                    if (!S.node.blck) {
                        var i = b("div.mm-wrapper__blocker.mm-slideout");
                        i.innerHTML = "<a></a>", document.querySelector(n.menu.insertSelector).append(i), 
                        S.node.blck = i;
                    }
                    var s = function(t) {
                        t.preventDefault(), t.stopPropagation(), e.node.wrpr.matches(".mm-wrapper_modal") || e.close();
                    };
                    S.node.blck.addEventListener("mousedown", s), S.node.blck.addEventListener("touchstart", s), 
                    S.node.blck.addEventListener("touchmove", s), this.trigger("initBlocker:after");
                }
            }, D = {
                aria: !0,
                text: !0
            };
            var I = {
                text: {
                    closeMenu: "Close menu",
                    closeSubmenu: "Close submenu",
                    openSubmenu: "Open submenu",
                    toggleSubmenu: "Toggle submenu"
                }
            }, O = {
                "Close menu": "بستن منو",
                "Close submenu": "بستن زیرمنو",
                "Open submenu": "بازکردن زیرمنو",
                "Toggle submenu": "سوییچ زیرمنو"
            }, q = {
                "Close menu": "Menü schließen",
                "Close submenu": "Untermenü schließen",
                "Open submenu": "Untermenü öffnen",
                "Toggle submenu": "Untermenü wechseln"
            }, B = {
                "Close menu": "Закрыть меню",
                "Close submenu": "Закрыть подменю",
                "Open submenu": "Открыть подменю",
                "Toggle submenu": "Переключить подменю"
            };
            u({
                "Close menu": "Menu sluiten",
                "Close submenu": "Submenu sluiten",
                "Open submenu": "Submenu openen",
                "Toggle submenu": "Submenu wisselen"
            }, "nl"), u(O, "fa"), u(q, "de"), u(B, "ru"), S.options.screenReader = D, S.configs.screenReader = I;
            var z;
            z = function(e, t, n) {
                e[t] = n, n ? e.setAttribute(t, n.toString()) : e.removeAttribute(t);
            }, S.sr_aria = function(e, t, n) {
                z(e, "aria-" + t, n);
            }, S.sr_role = function(e, t) {
                z(e, "role", t);
            }, S.sr_text = function(e) {
                return '<span class="mm-sronly">' + e + "</span>";
            };
            var R = {
                fix: !0
            };
            var U = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1;
            S.options.scrollBugFix = R;
            var W = {
                height: "default"
            };
            S.options.autoHeight = W;
            var Y = {
                close: !1,
                open: !1
            };
            S.options.backButton = Y;
            var F = {
                add: !1,
                visible: {
                    min: 1,
                    max: 3
                }
            };
            S.options.columns = F;
            var X = {
                add: !1,
                addTo: "panels",
                count: !1
            };
            S.options.counters = X, S.configs.classNames.counters = {
                counter: "Counter"
            };
            var V = {
                add: !1,
                addTo: "panels"
            };
            S.options.dividers = V, S.configs.classNames.divider = "Divider";
            var Z = {
                open: !1,
                node: null
            };
            var G = "ontouchstart" in window || !!navigator.msMaxTouchPoints || !1, K = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, Q = {
                start: 15,
                swipe: 15
            }, J = {
                x: [ "Right", "Left" ],
                y: [ "Down", "Up" ]
            }, $ = 0, ee = 1, te = 2, ne = function(e, t) {
                return "string" == typeof e && "%" == e.slice(-1) && (e = t * ((e = parseInt(e.slice(0, -1), 10)) / 100)), 
                e;
            }, ie = function() {
                function e(e, t, n) {
                    this.surface = e, this.area = a(t, K), this.treshold = a(n, Q), this.surface.mmHasDragEvents || (this.surface.addEventListener(G ? "touchstart" : "mousedown", this.start.bind(this)), 
                    this.surface.addEventListener(G ? "touchend" : "mouseup", this.stop.bind(this)), 
                    this.surface.addEventListener(G ? "touchleave" : "mouseleave", this.stop.bind(this)), 
                    this.surface.addEventListener(G ? "touchmove" : "mousemove", this.move.bind(this))), 
                    this.surface.mmHasDragEvents = !0;
                }
                return e.prototype.start = function(e) {
                    this.currentPosition = {
                        x: e.touches ? e.touches[0].pageX : e.pageX || 0,
                        y: e.touches ? e.touches[0].pageY : e.pageY || 0
                    };
                    var t = this.surface.clientWidth, n = this.surface.clientHeight, i = ne(this.area.top, n);
                    if (!("number" == typeof i && this.currentPosition.y < i)) {
                        var s = ne(this.area.right, t);
                        if (!("number" == typeof s && (s = t - s, this.currentPosition.x > s))) {
                            var a = ne(this.area.bottom, n);
                            if (!("number" == typeof a && (a = n - a, this.currentPosition.y > a))) {
                                var o = ne(this.area.left, t);
                                "number" == typeof o && this.currentPosition.x < o || (this.startPosition = {
                                    x: this.currentPosition.x,
                                    y: this.currentPosition.y
                                }, this.state = ee);
                            }
                        }
                    }
                }, e.prototype.stop = function(e) {
                    if (this.state == te) {
                        var t = this._dragDirection(), n = this._eventDetail(t);
                        if (this._dispatchEvents("drag*End", n), Math.abs(this.movement[this.axis]) > this.treshold.swipe) {
                            var i = this._swipeDirection();
                            n.direction = i, this._dispatchEvents("swipe*", n);
                        }
                    }
                    this.state = $;
                }, e.prototype.move = function(e) {
                    switch (this.state) {
                      case ee:
                      case te:
                        var t = {
                            x: e.changedTouches ? e.touches[0].pageX : e.pageX || 0,
                            y: e.changedTouches ? e.touches[0].pageY : e.pageY || 0
                        };
                        this.movement = {
                            x: t.x - this.currentPosition.x,
                            y: t.y - this.currentPosition.y
                        }, this.distance = {
                            x: t.x - this.startPosition.x,
                            y: t.y - this.startPosition.y
                        }, this.currentPosition = {
                            x: t.x,
                            y: t.y
                        }, this.axis = Math.abs(this.distance.x) > Math.abs(this.distance.y) ? "x" : "y";
                        var n = this._dragDirection(), i = this._eventDetail(n);
                        this.state == ee && Math.abs(this.distance[this.axis]) > this.treshold.start && (this._dispatchEvents("drag*Start", i), 
                        this.state = te), this.state == te && this._dispatchEvents("drag*Move", i);
                    }
                }, e.prototype._eventDetail = function(e) {
                    var t = this.distance.x, n = this.distance.y;
                    return "x" == this.axis && (t -= t > 0 ? this.treshold.start : 0 - this.treshold.start), 
                    "y" == this.axis && (n -= n > 0 ? this.treshold.start : 0 - this.treshold.start), 
                    {
                        axis: this.axis,
                        direction: e,
                        movementX: this.movement.x,
                        movementY: this.movement.y,
                        distanceX: t,
                        distanceY: n
                    };
                }, e.prototype._dispatchEvents = function(e, t) {
                    var n = new CustomEvent(e.replace("*", ""), {
                        detail: t
                    });
                    this.surface.dispatchEvent(n);
                    var i = new CustomEvent(e.replace("*", this.axis.toUpperCase()), {
                        detail: t
                    });
                    this.surface.dispatchEvent(i);
                    var s = new CustomEvent(e.replace("*", t.direction), {
                        detail: t
                    });
                    this.surface.dispatchEvent(s);
                }, e.prototype._dragDirection = function() {
                    return J[this.axis][this.distance[this.axis] > 0 ? 0 : 1];
                }, e.prototype._swipeDirection = function() {
                    return J[this.axis][this.movement[this.axis] > 0 ? 0 : 1];
                }, e;
            }(), se = null, ae = null, oe = 0, re = function(e) {
                var t = this, n = {}, i = !1, s = function() {
                    var e = Object.keys(t.opts.extensions);
                    e.length ? (P(e.join(", "), (function() {}), (function() {
                        n = ce(n, [], t.node.menu);
                    })), e.forEach((function(e) {
                        P(e, (function() {
                            n = ce(n, t.opts.extensions[e], t.node.menu);
                        }), (function() {}));
                    }))) : n = ce(n, [], t.node.menu);
                };
                ae && (N(ae, "dragStart"), N(ae, "dragMove"), N(ae, "dragEnd")), se = new ie(ae = e), 
                s(), s = function() {}, ae && (C(ae, "dragStart", (function(e) {
                    e.detail.direction == n.direction && (i = !0, t.node.wrpr.classList.add("mm-wrapper_dragging"), 
                    t._openSetup(), t.trigger("open:start"), oe = t.node.menu["x" == n.axis ? "clientWidth" : "clientHeight"]);
                })), C(ae, "dragMove", (function(e) {
                    if (e.detail.axis == n.axis && i) {
                        var t = e.detail["distance" + n.axis.toUpperCase()];
                        switch (n.position) {
                          case "right":
                          case "bottom":
                            t = Math.min(Math.max(t, -oe), 0);
                            break;

                          default:
                            t = Math.max(Math.min(t, oe), 0);
                        }
                        if ("front" == n.zposition) switch (n.position) {
                          case "right":
                          case "bottom":
                            t += oe;
                            break;

                          default:
                            t -= oe;
                        }
                        n.slideOutNodes.forEach((function(e) {
                            e.style.transform = "translate" + n.axis.toUpperCase() + "(" + t + "px)";
                        }));
                    }
                })), C(ae, "dragEnd", (function(e) {
                    if (e.detail.axis == n.axis && i) {
                        i = !1, t.node.wrpr.classList.remove("mm-wrapper_dragging"), n.slideOutNodes.forEach((function(e) {
                            e.style.transform = "";
                        }));
                        var s = Math.abs(e.detail["distance" + n.axis.toUpperCase()]) >= .75 * oe;
                        if (!s) {
                            var a = e.detail["movement" + n.axis.toUpperCase()];
                            switch (n.position) {
                              case "right":
                              case "bottom":
                                s = a <= 0;
                                break;

                              default:
                                s = a >= 0;
                            }
                        }
                        s ? t._openStart() : t.close();
                    }
                })));
            }, ce = function(e, t, n) {
                switch (e.position = "left", e.zposition = "back", [ "right", "top", "bottom" ].forEach((function(n) {
                    t.indexOf("position-" + n) > -1 && (e.position = n);
                })), [ "front", "top", "bottom" ].forEach((function(n) {
                    t.indexOf("position-" + n) > -1 && (e.zposition = "front");
                })), se.area = {
                    top: "bottom" == e.position ? "75%" : 0,
                    right: "left" == e.position ? "75%" : 0,
                    bottom: "top" == e.position ? "75%" : 0,
                    left: "right" == e.position ? "75%" : 0
                }, e.position) {
                  case "top":
                  case "bottom":
                    e.axis = "y";
                    break;

                  default:
                    e.axis = "x";
                }
                switch (e.position) {
                  case "top":
                    e.direction = "Down";
                    break;

                  case "right":
                    e.direction = "Left";
                    break;

                  case "bottom":
                    e.direction = "Up";
                    break;

                  default:
                    e.direction = "Right";
                }
                switch (e.zposition) {
                  case "front":
                    e.slideOutNodes = [ n ];
                    break;

                  default:
                    e.slideOutNodes = g(document.body, ".mm-slideout");
                }
                return e;
            };
            S.options.drag = Z;
            var me = {
                drop: !1,
                fitViewport: !0,
                event: "click",
                position: {},
                tip: !0
            };
            var le = {
                offset: {
                    button: {
                        x: -5,
                        y: 5
                    },
                    viewport: {
                        x: 20,
                        y: 20
                    }
                },
                height: {
                    max: 880
                },
                width: {
                    max: 440
                }
            };
            S.options.dropdown = me, S.configs.dropdown = le;
            var de = {
                insertMethod: "append",
                insertSelector: "body"
            };
            S.configs.fixedElements = de, S.configs.classNames.fixedElements = {
                fixed: "Fixed"
            };
            var pe = {
                use: !1,
                top: [],
                bottom: [],
                position: "left",
                type: "default"
            };
            S.options.iconbar = pe;
            var ue = {
                add: !1,
                blockPanel: !0,
                hideDivider: !1,
                hideNavbar: !0,
                visible: 3
            };
            S.options.iconPanels = ue;
            var fe = {
                enable: !1,
                enhance: !1
            };
            S.options.keyboardNavigation = fe;
            var he = function(e) {
                var t = this;
                N(document.body, "keydown.tabguard"), N(document.body, "focusin.tabguard"), C(document.body, "focusin.tabguard", (function(e) {
                    if (t.node.wrpr.matches(".mm-wrapper_opened")) {
                        var n = e.target;
                        if (n.matches(".mm-tabend")) {
                            var i = void 0;
                            n.parentElement.matches(".mm-menu") && S.node.blck && (i = S.node.blck), n.parentElement.matches(".mm-wrapper__blocker") && (i = g(document.body, ".mm-menu_offcanvas.mm-menu_opened")[0]), 
                            i || (i = n.parentElement), i && _(i, ".mm-tabstart")[0].focus();
                        }
                    }
                })), N(document.body, "keydown.navigate"), C(document.body, "keydown.navigate", (function(t) {
                    var n = t.target, i = n.closest(".mm-menu");
                    if (i) {
                        i.mmApi;
                        if (!n.matches("input, textarea")) switch (t.keyCode) {
                          case 13:
                            (n.matches(".mm-toggle") || n.matches(".mm-check")) && n.dispatchEvent(new Event("click"));
                            break;

                          case 32:
                          case 37:
                          case 38:
                          case 39:
                          case 40:
                            t.preventDefault();
                        }
                        if (e) if (n.matches("input")) switch (t.keyCode) {
                          case 27:
                            n.value = "";
                        } else {
                            var s = i.mmApi;
                            switch (t.keyCode) {
                              case 8:
                                var a = g(i, ".mm-panel_opened")[0].mmParent;
                                a && s.openPanel(a.closest(".mm-panel"));
                                break;

                              case 27:
                                i.matches(".mm-menu_offcanvas") && s.close();
                            }
                        }
                    }
                }));
            }, ve = {
                load: !1
            };
            S.options.lazySubmenus = ve;
            var be = [];
            var ge = {
                breadcrumbs: {
                    separator: "/",
                    removeFirst: !1
                }
            };
            function _e() {
                var e = this, t = this.opts.navbars;
                if (void 0 !== t) {
                    t instanceof Array || (t = [ t ]);
                    var n = {};
                    t.length && (t.forEach((function(t) {
                        if (!(t = function(e) {
                            return "boolean" == typeof e && e && (e = {}), "object" != typeof e && (e = {}), 
                            void 0 === e.content && (e.content = [ "prev", "title" ]), e.content instanceof Array || (e.content = [ e.content ]), 
                            void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), 
                            e;
                        }(t)).use) return !1;
                        var i = b("div.mm-navbar"), s = t.position;
                        "bottom" !== s && (s = "top"), n[s] || (n[s] = b("div.mm-navbars_" + s)), n[s].append(i);
                        for (var a = 0, o = t.content.length; a < o; a++) {
                            var r, c = t.content[a];
                            if ("string" == typeof c) if ("function" == typeof (r = _e.navbarContents[c])) r.call(e, i); else {
                                var m = b("span");
                                m.innerHTML = c;
                                var l = _(m);
                                1 == l.length && (m = l[0]), i.append(m);
                            } else i.append(c);
                        }
                        "string" == typeof t.type && "function" == typeof (r = _e.navbarTypes[t.type]) && r.call(e, i);
                        "boolean" != typeof t.use && P(t.use, (function() {
                            i.classList.remove("mm-hidden"), S.sr_aria(i, "hidden", !1);
                        }), (function() {
                            i.classList.add("mm-hidden"), S.sr_aria(i, "hidden", !0);
                        }));
                    })), this.bind("initMenu:after", (function() {
                        for (var t in n) e.node.menu["bottom" == t ? "append" : "prepend"](n[t]);
                    })));
                }
            }
            S.options.navbars = be, S.configs.navbars = ge, S.configs.classNames.navbars = {
                panelPrev: "Prev",
                panelTitle: "Title"
            }, _e.navbarContents = {
                breadcrumbs: function(e) {
                    var t = this, n = b("div.mm-navbar__breadcrumbs");
                    e.append(n), this.bind("initNavbar:after", (function(e) {
                        if (!e.querySelector(".mm-navbar__breadcrumbs")) {
                            _(e, ".mm-navbar")[0].classList.add("mm-hidden");
                            for (var n = [], i = b("span.mm-navbar__breadcrumbs"), s = e, a = !0; s; ) {
                                if (!(s = s.closest(".mm-panel")).parentElement.matches(".mm-listitem_vertical")) {
                                    var o = g(s, ".mm-navbar__title span")[0];
                                    if (o) {
                                        var r = o.textContent;
                                        r.length && n.unshift(a ? "<span>" + r + "</span>" : '<a href="#' + s.id + '">' + r + "</a>");
                                    }
                                    a = !1;
                                }
                                s = s.mmParent;
                            }
                            t.conf.navbars.breadcrumbs.removeFirst && n.shift(), i.innerHTML = n.join('<span class="mm-separator">' + t.conf.navbars.breadcrumbs.separator + "</span>"), 
                            _(e, ".mm-navbar")[0].append(i);
                        }
                    })), this.bind("openPanel:start", (function(e) {
                        var t = e.querySelector(".mm-navbar__breadcrumbs");
                        n.innerHTML = t ? t.innerHTML : "";
                    })), this.bind("initNavbar:after:sr-aria", (function(e) {
                        g(e, ".mm-breadcrumbs a").forEach((function(e) {
                            S.sr_aria(e, "owns", e.getAttribute("href").slice(1));
                        }));
                    }));
                },
                close: function(e) {
                    var t = this, n = b("a.mm-btn.mm-btn_close.mm-navbar__btn");
                    e.append(n), this.bind("setPage:after", (function(e) {
                        n.setAttribute("href", "#" + e.id);
                    })), this.bind("setPage:after:sr-text", (function() {
                        n.innerHTML = S.sr_text(t.i18n(t.conf.screenReader.text.closeMenu));
                    }));
                },
                prev: function(e) {
                    var t, n, i, s = this, a = b("a.mm-btn.mm-btn_prev.mm-navbar__btn");
                    e.append(a), this.bind("initNavbar:after", (function(e) {
                        _(e, ".mm-navbar")[0].classList.add("mm-hidden");
                    })), this.bind("openPanel:start", (function(e) {
                        e.parentElement.matches(".mm-listitem_vertical") || ((t = e.querySelector("." + s.conf.classNames.navbars.panelPrev)) || (t = e.querySelector(".mm-navbar__btn.mm-btn_prev")), 
                        n = t ? t.getAttribute("href") : "", i = t ? t.innerHTML : "", n ? a.setAttribute("href", n) : a.removeAttribute("href"), 
                        a.classList[n || i ? "remove" : "add"]("mm-hidden"), a.innerHTML = i);
                    })), this.bind("initNavbar:after:sr-aria", (function(e) {
                        S.sr_aria(e.querySelector(".mm-navbar"), "hidden", !0);
                    })), this.bind("openPanel:start:sr-aria", (function(e) {
                        S.sr_aria(a, "hidden", a.matches(".mm-hidden")), S.sr_aria(a, "owns", (a.getAttribute("href") || "").slice(1));
                    }));
                },
                searchfield: function(e) {
                    "object" != o(this.opts.searchfield) && (this.opts.searchfield = {});
                    var t = b("div.mm-navbar__searchfield");
                    e.append(t), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = [ t ];
                },
                title: function(e) {
                    var t, n, i, s, a = this, o = b("a.mm-navbar__title"), r = b("span");
                    o.append(r), e.append(o), this.bind("openPanel:start", (function(e) {
                        e.parentElement.matches(".mm-listitem_vertical") || ((i = e.querySelector("." + a.conf.classNames.navbars.panelTitle)) || (i = e.querySelector(".mm-navbar__title span")), 
                        (t = i && i.closest("a") ? i.closest("a").getAttribute("href") : "") ? o.setAttribute("href", t) : o.removeAttribute("href"), 
                        n = i ? i.innerHTML : "", r.innerHTML = n);
                    })), this.bind("openPanel:start:sr-aria", (function(e) {
                        if (a.opts.screenReader.text) {
                            if (!s) _(a.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach((function(e) {
                                var t = e.querySelector(".mm-btn_prev");
                                t && (s = t);
                            }));
                            if (s) {
                                var t = !0;
                                "parent" == a.opts.navbar.titleLink && (t = !s.matches(".mm-hidden")), S.sr_aria(o, "hidden", t);
                            }
                        }
                    }));
                }
            }, _e.navbarTypes = {
                tabs: function(e) {
                    var t = this;
                    e.classList.add("mm-navbar_tabs"), e.parentElement.classList.add("mm-navbars_has-tabs");
                    var n = _(e, "a");
                    e.addEventListener("click", (function(e) {
                        var n = e.target;
                        if (n.matches("a")) if (n.matches(".mm-navbar__tab_selected")) e.stopImmediatePropagation(); else try {
                            t.openPanel(t.node.menu.querySelector(n.getAttribute("href")), !1), e.stopImmediatePropagation();
                        } catch (e) {}
                    })), this.bind("openPanel:start", (function e(t) {
                        n.forEach((function(e) {
                            e.classList.remove("mm-navbar__tab_selected");
                        }));
                        var i = n.filter((function(e) {
                            return e.matches('[href="#' + t.id + '"]');
                        }))[0];
                        if (i) i.classList.add("mm-navbar__tab_selected"); else {
                            var s = t.mmParent;
                            s && e.call(this, s.closest(".mm-panel"));
                        }
                    }));
                }
            };
            var ye = {
                scroll: !1,
                update: !1
            };
            var Le = {
                scrollOffset: 0,
                updateOffset: 50
            };
            S.options.pageScroll = ye, S.configs.pageScroll = Le;
            var we = {
                add: !1,
                addTo: "panels",
                cancel: !1,
                noResults: "No results found.",
                placeholder: "Search",
                panel: {
                    add: !1,
                    dividers: !0,
                    fx: "none",
                    id: null,
                    splash: null,
                    title: "Search"
                },
                search: !0,
                showTextItems: !1,
                showSubPanels: !0
            };
            var Ee = {
                clear: !1,
                form: !1,
                input: !1,
                submit: !1
            }, xe = {
                Search: "جستجو",
                "No results found.": "نتیجه‌ای یافت نشد.",
                cancel: "انصراف"
            }, Pe = {
                Search: "Suche",
                "No results found.": "Keine Ergebnisse gefunden.",
                cancel: "beenden"
            }, ke = {
                Search: "Найти",
                "No results found.": "Ничего не найдено.",
                cancel: "отменить"
            }, Se = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var i = Array(e), s = 0;
                for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, r = a.length; o < r; o++, 
                s++) i[s] = a[o];
                return i;
            };
            u({
                Search: "Zoeken",
                "No results found.": "Geen resultaten gevonden.",
                cancel: "annuleren"
            }, "nl"), u(xe, "fa"), u(Pe, "de"), u(ke, "ru"), S.options.searchfield = we, S.configs.searchfield = Ee;
            var Me = function() {
                var e = this.opts.searchfield, t = (this.conf.searchfield, _(this.node.pnls, ".mm-panel_search")[0]);
                if (t) return t;
                t = b("div.mm-panel.mm-panel_search.mm-hidden"), e.panel.id && (t.id = e.panel.id), 
                e.panel.title && t.setAttribute("data-mm-title", e.panel.title);
                var n = b("ul");
                switch (t.append(n), this.node.pnls.append(t), this.initListview(n), this._initNavbar(t), 
                e.panel.fx) {
                  case !1:
                    break;

                  case "none":
                    t.classList.add("mm-panel_noanimation");
                    break;

                  default:
                    t.classList.add("mm-panel_fx-" + e.panel.fx);
                }
                if (e.panel.splash) {
                    var i = b("div.mm-panel__content");
                    i.innerHTML = e.panel.splash, t.append(i);
                }
                return t.classList.add("mm-panel"), t.classList.add("mm-hidden"), this.node.pnls.append(t), 
                t;
            }, Ae = function(e) {
                var t = this.opts.searchfield, n = this.conf.searchfield;
                if (e.parentElement.matches(".mm-listitem_vertical")) return null;
                if (a = g(e, ".mm-searchfield")[0]) return a;
                function i(e, t) {
                    if (t) for (var n in t) e.setAttribute(n, t[n]);
                }
                var s, a = b((n.form ? "form" : "div") + ".mm-searchfield"), o = b("div.mm-searchfield__input"), r = b("input");
                (r.type = "text", r.autocomplete = "off", r.placeholder = this.i18n(t.placeholder), 
                o.append(r), a.append(o), e.prepend(a), i(r, n.input), n.clear) && ((s = b("a.mm-btn.mm-btn_close.mm-searchfield__btn")).setAttribute("href", "#"), 
                o.append(s));
                (i(a, n.form), n.form && n.submit && !n.clear) && ((s = b("a.mm-btn.mm-btn_next.mm-searchfield__btn")).setAttribute("href", "#"), 
                o.append(s));
                t.cancel && ((s = b("a.mm-searchfield__cancel")).setAttribute("href", "#"), s.textContent = this.i18n("cancel"), 
                a.append(s));
                return a;
            }, Te = function(e) {
                var t = this, n = this.opts.searchfield, i = (this.conf.searchfield, {});
                e.closest(".mm-panel_search") ? (i.panels = g(this.node.pnls, ".mm-panel"), i.noresults = [ e.closest(".mm-panel") ]) : e.closest(".mm-panel") ? (i.panels = [ e.closest(".mm-panel") ], 
                i.noresults = i.panels) : (i.panels = g(this.node.pnls, ".mm-panel"), i.noresults = [ this.node.menu ]), 
                i.panels = i.panels.filter((function(e) {
                    return !e.matches(".mm-panel_search");
                })), i.panels = i.panels.filter((function(e) {
                    return !e.parentElement.matches(".mm-listitem_vertical");
                })), i.listitems = [], i.dividers = [], i.panels.forEach((function(e) {
                    var t, n;
                    (t = i.listitems).push.apply(t, g(e, ".mm-listitem")), (n = i.dividers).push.apply(n, g(e, ".mm-divider"));
                }));
                var s = _(this.node.pnls, ".mm-panel_search")[0], a = g(e, "input")[0], o = g(e, ".mm-searchfield__cancel")[0];
                a.mmSearchfield = i, n.panel.add && n.panel.splash && (N(a, "focus.splash"), C(a, "focus.splash", (function(e) {
                    t.openPanel(s);
                }))), n.cancel && (N(a, "focus.cancel"), C(a, "focus.cancel", (function(e) {
                    o.classList.add("mm-searchfield__cancel-active");
                })), N(o, "click.splash"), C(o, "click.splash", (function(e) {
                    if (e.preventDefault(), o.classList.remove("mm-searchfield__cancel-active"), s.matches(".mm-panel_opened")) {
                        var n = _(t.node.pnls, ".mm-panel_opened-parent");
                        n.length && t.openPanel(n[n.length - 1]);
                    }
                }))), n.panel.add && "panel" == n.addTo && this.bind("openPanel:finish", (function(e) {
                    e === s && a.focus();
                })), N(a, "input.search"), C(a, "input.search", (function(e) {
                    switch (e.keyCode) {
                      case 9:
                      case 16:
                      case 17:
                      case 18:
                      case 37:
                      case 38:
                      case 39:
                      case 40:
                        break;

                      default:
                        t.search(a);
                    }
                })), this.search(a);
            }, Ce = function(e) {
                if (e) {
                    var t = this.opts.searchfield;
                    this.conf.searchfield;
                    if (e.closest(".mm-panel") || (e = _(this.node.pnls, ".mm-panel")[0]), !_(e, ".mm-panel__noresultsmsg").length) {
                        var n = b("div.mm-panel__noresultsmsg.mm-hidden");
                        n.innerHTML = this.i18n(t.noResults), e.append(n);
                    }
                }
            };
            S.prototype.search = function(e, t) {
                var n, i = this, s = this.opts.searchfield;
                this.conf.searchfield;
                t = (t = t || "" + e.value).toLowerCase().trim();
                var a = e.mmSearchfield, o = g(e.closest(".mm-searchfield"), ".mm-btn"), r = _(this.node.pnls, ".mm-panel_search")[0], c = a.panels, m = a.noresults, l = a.listitems, d = a.dividers;
                if (l.forEach((function(e) {
                    e.classList.remove("mm-listitem_nosubitems"), e.classList.remove("mm-listitem_onlysubitems"), 
                    e.classList.remove("mm-hidden");
                })), r && (_(r, ".mm-listview")[0].innerHTML = ""), c.forEach((function(e) {
                    e.scrollTop = 0;
                })), t.length) {
                    d.forEach((function(e) {
                        e.classList.add("mm-hidden");
                    })), l.forEach((function(e) {
                        var n, i = _(e, ".mm-listitem__text")[0], a = !1;
                        i && (n = i, Array.prototype.slice.call(n.childNodes).filter((function(e) {
                            return 3 == e.nodeType;
                        })).map((function(e) {
                            return e.textContent;
                        })).join(" ")).toLowerCase().indexOf(t) > -1 && (i.matches(".mm-listitem__btn") ? s.showSubPanels && (a = !0) : (i.matches("a") || s.showTextItems) && (a = !0)), 
                        a || e.classList.add("mm-hidden");
                    }));
                    var p = l.filter((function(e) {
                        return !e.matches(".mm-hidden");
                    })).length;
                    if (s.panel.add) {
                        var u = [];
                        c.forEach((function(e) {
                            var t = L(g(e, ".mm-listitem"));
                            if ((t = t.filter((function(e) {
                                return !e.matches(".mm-hidden");
                            }))).length) {
                                if (s.panel.dividers) {
                                    var n = b("li.mm-divider"), i = g(e, ".mm-navbar__title")[0];
                                    i && (n.innerHTML = i.innerHTML, u.push(n));
                                }
                                t.forEach((function(e) {
                                    u.push(e.cloneNode(!0));
                                }));
                            }
                        })), u.forEach((function(e) {
                            e.querySelectorAll(".mm-toggle, .mm-check").forEach((function(e) {
                                e.remove();
                            }));
                        })), (n = _(r, ".mm-listview")[0]).append.apply(n, u), this.openPanel(r);
                    } else s.showSubPanels && c.forEach((function(e) {
                        L(g(e, ".mm-listitem")).forEach((function(e) {
                            var t = e.mmChild;
                            t && g(t, ".mm-listitem").forEach((function(e) {
                                e.classList.remove("mm-hidden");
                            }));
                        }));
                    })), Se(c).reverse().forEach((function(t, n) {
                        var s = t.mmParent;
                        s && (L(g(t, ".mm-listitem")).length ? (s.matches(".mm-hidden") && s.classList.remove("mm-hidden"), 
                        s.classList.add("mm-listitem_onlysubitems")) : e.closest(".mm-panel") || ((t.matches(".mm-panel_opened") || t.matches(".mm-panel_opened-parent")) && setTimeout((function() {
                            i.openPanel(s.closest(".mm-panel"));
                        }), (n + 1) * (1.5 * i.conf.openingInterval)), s.classList.add("mm-listitem_nosubitems")));
                    })), c.forEach((function(e) {
                        L(g(e, ".mm-listitem")).forEach((function(e) {
                            y(e, ".mm-listitem_vertical").forEach((function(e) {
                                e.matches(".mm-hidden") && (e.classList.remove("mm-hidden"), e.classList.add("mm-listitem_onlysubitems"));
                            }));
                        }));
                    })), c.forEach((function(e) {
                        L(g(e, ".mm-listitem")).forEach((function(e) {
                            var t = function(e, t) {
                                for (var n = [], i = e.previousElementSibling; i; ) t && !i.matches(t) || n.push(i), 
                                i = i.previousElementSibling;
                                return n;
                            }(e, ".mm-divider")[0];
                            t && t.classList.remove("mm-hidden");
                        }));
                    }));
                    o.forEach((function(e) {
                        return e.classList.remove("mm-hidden");
                    })), m.forEach((function(e) {
                        g(e, ".mm-panel__noresultsmsg").forEach((function(e) {
                            return e.classList[p ? "add" : "remove"]("mm-hidden");
                        }));
                    })), s.panel.add && (s.panel.splash && g(r, ".mm-panel__content").forEach((function(e) {
                        return e.classList.add("mm-hidden");
                    })), l.forEach((function(e) {
                        return e.classList.remove("mm-hidden");
                    })), d.forEach((function(e) {
                        return e.classList.remove("mm-hidden");
                    })));
                } else if (l.forEach((function(e) {
                    return e.classList.remove("mm-hidden");
                })), d.forEach((function(e) {
                    return e.classList.remove("mm-hidden");
                })), o.forEach((function(e) {
                    return e.classList.add("mm-hidden");
                })), m.forEach((function(e) {
                    g(e, ".mm-panel__noresultsmsg").forEach((function(e) {
                        return e.classList.add("mm-hidden");
                    }));
                })), s.panel.add) if (s.panel.splash) g(r, ".mm-panel__content").forEach((function(e) {
                    return e.classList.remove("mm-hidden");
                })); else if (!e.closest(".mm-panel_search")) {
                    var f = _(this.node.pnls, ".mm-panel_opened-parent");
                    this.openPanel(f.slice(-1)[0]);
                }
                this.trigger("updateListview");
            };
            var Ne = {
                add: !1,
                addTo: "panels"
            };
            S.options.sectionIndexer = Ne;
            var He = {
                current: !0,
                hover: !1,
                parent: !1
            };
            S.options.setSelected = He;
            var je = {
                collapsed: {
                    use: !1,
                    blockMenu: !0,
                    hideDivider: !1,
                    hideNavbar: !0
                },
                expanded: {
                    use: !1,
                    initial: "open"
                }
            };
            S.options.sidebar = je;
            S.configs.classNames.toggles = {
                toggle: "Toggle",
                check: "Check"
            };
            /*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 */            S.addons = {
                offcanvas: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t = function(e) {
                            return "object" != typeof e && (e = {}), e;
                        }(this.opts.offCanvas);
                        this.opts.offCanvas = a(t, S.options.offCanvas);
                        var n = this.conf.offCanvas;
                        this._api.push("open", "close", "setPage"), this.vars.opened = !1, this.bind("initMenu:before", (function() {
                            n.clone && (e.node.menu = e.node.menu.cloneNode(!0), e.node.menu.id && (e.node.menu.id = "mm-" + e.node.menu.id), 
                            g(e.node.menu, "[id]").forEach((function(e) {
                                e.id = "mm-" + e.id;
                            }))), e.node.wrpr = document.body, document.querySelector(n.menu.insertSelector)[n.menu.insertMethod](e.node.menu);
                        })), this.bind("initMenu:after", (function() {
                            j.call(e), e.setPage(S.node.page), H.call(e), e.node.menu.classList.add("mm-menu_offcanvas");
                            var t = window.location.hash;
                            if (t) {
                                var n = d(e.node.menu.id);
                                n && n == t.slice(1) && setTimeout((function() {
                                    e.open();
                                }), 1e3);
                            }
                        })), this.bind("setPage:after", (function(e) {
                            S.node.blck && _(S.node.blck, "a").forEach((function(t) {
                                t.setAttribute("href", "#" + e.id);
                            }));
                        })), this.bind("open:start:sr-aria", (function() {
                            S.sr_aria(e.node.menu, "hidden", !1);
                        })), this.bind("close:finish:sr-aria", (function() {
                            S.sr_aria(e.node.menu, "hidden", !0);
                        })), this.bind("initMenu:after:sr-aria", (function() {
                            S.sr_aria(e.node.menu, "hidden", !0);
                        })), this.bind("initBlocker:after:sr-text", (function() {
                            _(S.node.blck, "a").forEach((function(t) {
                                t.innerHTML = S.sr_text(e.i18n(e.conf.screenReader.text.closeMenu));
                            }));
                        })), this.clck.push((function(t, n) {
                            var i = d(e.node.menu.id);
                            if (i && t.matches('[href="#' + i + '"]')) {
                                if (n.inMenu) return e.open(), !0;
                                var s = t.closest(".mm-menu");
                                if (s) {
                                    var a = s.mmApi;
                                    if (a && a.close) return a.close(), c(s, (function() {
                                        e.open();
                                    }), e.conf.transitionDuration), !0;
                                }
                                return e.open(), !0;
                            }
                            if ((i = S.node.page.id) && t.matches('[href="#' + i + '"]')) return e.close(), 
                            !0;
                        }));
                    }
                },
                screenReader: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            aria: e,
                            text: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.screenReader);
                    this.opts.screenReader = a(t, S.options.screenReader);
                    var n = this.conf.screenReader;
                    t.aria && (this.bind("initAddons:after", (function() {
                        e.bind("initMenu:after", (function() {
                            this.trigger("initMenu:after:sr-aria", [].slice.call(arguments));
                        })), e.bind("initNavbar:after", (function() {
                            this.trigger("initNavbar:after:sr-aria", [].slice.call(arguments));
                        })), e.bind("openPanel:start", (function() {
                            this.trigger("openPanel:start:sr-aria", [].slice.call(arguments));
                        })), e.bind("close:start", (function() {
                            this.trigger("close:start:sr-aria", [].slice.call(arguments));
                        })), e.bind("close:finish", (function() {
                            this.trigger("close:finish:sr-aria", [].slice.call(arguments));
                        })), e.bind("open:start", (function() {
                            this.trigger("open:start:sr-aria", [].slice.call(arguments));
                        })), e.bind("initOpened:after", (function() {
                            this.trigger("initOpened:after:sr-aria", [].slice.call(arguments));
                        }));
                    })), this.bind("updateListview", (function() {
                        e.node.pnls.querySelectorAll(".mm-listitem").forEach((function(e) {
                            S.sr_aria(e, "hidden", e.matches(".mm-hidden"));
                        }));
                    })), this.bind("openPanel:start", (function(t) {
                        var n = g(e.node.pnls, ".mm-panel").filter((function(e) {
                            return e !== t;
                        })).filter((function(e) {
                            return !e.parentElement.matches(".mm-panel");
                        })), i = [ t ];
                        g(t, ".mm-listitem_vertical .mm-listitem_opened").forEach((function(e) {
                            i.push.apply(i, _(e, ".mm-panel"));
                        })), n.forEach((function(e) {
                            S.sr_aria(e, "hidden", !0);
                        })), i.forEach((function(e) {
                            S.sr_aria(e, "hidden", !1);
                        }));
                    })), this.bind("closePanel", (function(e) {
                        S.sr_aria(e, "hidden", !0);
                    })), this.bind("initPanel:after", (function(e) {
                        g(e, ".mm-btn").forEach((function(e) {
                            S.sr_aria(e, "haspopup", !0);
                            var t = e.getAttribute("href");
                            t && S.sr_aria(e, "owns", t.replace("#", ""));
                        }));
                    })), this.bind("initNavbar:after", (function(e) {
                        var t = _(e, ".mm-navbar")[0], n = t.matches(".mm-hidden");
                        S.sr_aria(t, "hidden", n);
                    })), t.text && "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", (function(e) {
                        var t = _(e, ".mm-navbar")[0], n = !!t.querySelector(".mm-btn_prev");
                        S.sr_aria(g(t, ".mm-navbar__title")[0], "hidden", n);
                    }))), t.text && (this.bind("initAddons:after", (function() {
                        e.bind("setPage:after", (function() {
                            this.trigger("setPage:after:sr-text", [].slice.call(arguments));
                        })), e.bind("initBlocker:after", (function() {
                            this.trigger("initBlocker:after:sr-text", [].slice.call(arguments));
                        }));
                    })), this.bind("initNavbar:after", (function(t) {
                        var i = _(t, ".mm-navbar")[0];
                        if (i) {
                            var s = _(i, ".mm-btn_prev")[0];
                            s && (s.innerHTML = S.sr_text(e.i18n(n.text.closeSubmenu)));
                        }
                    })), this.bind("initListview:after", (function(t) {
                        var i = t.closest(".mm-panel").mmParent;
                        if (i) {
                            var s = _(i, ".mm-btn_next")[0];
                            if (s) {
                                var a = e.i18n(n.text[s.parentElement.matches(".mm-listitem_vertical") ? "toggleSubmenu" : "openSubmenu"]);
                                s.innerHTML += S.sr_text(a);
                            }
                        }
                    })));
                },
                scrollBugFix: function() {
                    var e = this;
                    if (U && this.opts.offCanvas && this.opts.offCanvas.blockUI) {
                        var t = function(e) {
                            return "boolean" == typeof e && (e = {
                                fix: e
                            }), "object" != typeof e && (e = {}), e;
                        }(this.opts.scrollBugFix);
                        if (this.opts.scrollBugFix = a(t, S.options.scrollBugFix), t.fix) {
                            var n, i, s = (n = this.node.menu, i = "", n.addEventListener("touchmove", (function(e) {
                                i = "", e.movementY > 0 ? i = "down" : e.movementY < 0 && (i = "up");
                            })), {
                                get: function() {
                                    return i;
                                }
                            });
                            this.node.menu.addEventListener("scroll", o, {
                                passive: !1
                            }), this.node.menu.addEventListener("touchmove", (function(e) {
                                var t = e.target.closest(".mm-panel, .mm-iconbar__top, .mm-iconbar__bottom");
                                t && t.closest(".mm-listitem_vertical") && (t = y(t, ".mm-panel").pop()), t ? (t.scrollHeight === t.offsetHeight || 0 == t.scrollTop && "down" == s.get() || t.scrollHeight == t.scrollTop + t.offsetHeight && "up" == s.get()) && o(e) : o(e);
                            }), {
                                passive: !1
                            }), this.bind("open:start", (function() {
                                var t = _(e.node.pnls, ".mm-panel_opened")[0];
                                t && (t.scrollTop = 0);
                            })), window.addEventListener("orientationchange", (function(t) {
                                var n = _(e.node.pnls, ".mm-panel_opened")[0];
                                n && (n.scrollTop = 0, n.style["-webkit-overflow-scrolling"] = "auto", n.style["-webkit-overflow-scrolling"] = "touch");
                            }));
                        }
                    }
                    function o(e) {
                        e.preventDefault(), e.stopPropagation();
                    }
                },
                autoHeight: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && e && (e = {
                            height: "auto"
                        }), "string" == typeof e && (e = {
                            height: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.autoHeight);
                    if (this.opts.autoHeight = a(t, S.options.autoHeight), "auto" == t.height || "highest" == t.height) {
                        var n, i = (n = function(e) {
                            return e.parentElement.matches(".mm-listitem_vertical") && (e = y(e, ".mm-panel").filter((function(e) {
                                return !e.parentElement.matches(".mm-listitem_vertical");
                            }))[0]), e;
                        }, function() {
                            if (!e.opts.offCanvas || e.vars.opened) {
                                var i, s, a = 0, o = e.node.menu.offsetHeight - e.node.pnls.offsetHeight;
                                e.node.menu.classList.add("mm-menu_autoheight-measuring"), "auto" == t.height ? ((s = _(e.node.pnls, ".mm-panel_opened")[0]) && (s = n(s)), 
                                s || (s = _(e.node.pnls, ".mm-panel")[0]), a = s.scrollHeight) : "highest" == t.height && (i = 0, 
                                _(e.node.pnls, ".mm-panel").forEach((function(e) {
                                    e = n(e), i = Math.max(i, e.scrollHeight);
                                })), a = i), e.node.menu.style.height = a + o + "px", e.node.menu.classList.remove("mm-menu_autoheight-measuring");
                            }
                        });
                        this.bind("initMenu:after", (function() {
                            e.node.menu.classList.add("mm-menu_autoheight");
                        })), this.opts.offCanvas && this.bind("open:start", i), "highest" == t.height && this.bind("initPanels:after", i), 
                        "auto" == t.height && (this.bind("updateListview", i), this.bind("openPanel:start", i));
                    }
                },
                backButton: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t = function(e) {
                            return "boolean" == typeof e && (e = {
                                close: e
                            }), "object" != typeof e && (e = {}), e;
                        }(this.opts.backButton);
                        this.opts.backButton = a(t, S.options.backButton);
                        var n = "#" + this.node.menu.id;
                        if (t.close) {
                            var i = [], s = function() {
                                i = [ n ], _(e.node.pnls, ".mm-panel_opened, .mm-panel_opened-parent").forEach((function(e) {
                                    i.push("#" + e.id);
                                }));
                            };
                            this.bind("open:finish", (function() {
                                history.pushState(null, document.title, n);
                            })), this.bind("open:finish", s), this.bind("openPanel:finish", s), this.bind("close:finish", (function() {
                                i = [], history.back(), history.pushState(null, document.title, location.pathname + location.search);
                            })), window.addEventListener("popstate", (function(t) {
                                if (e.vars.opened && i.length) {
                                    var s = (i = i.slice(0, -1))[i.length - 1];
                                    s == n ? e.close() : (e.openPanel(e.node.menu.querySelector(s)), history.pushState(null, document.title, n));
                                }
                            }));
                        }
                        t.open && window.addEventListener("popstate", (function(t) {
                            e.vars.opened || location.hash != n || e.open();
                        }));
                    }
                },
                columns: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e
                        }), "number" == typeof e && (e = {
                            add: !0,
                            visible: e
                        }), "object" != typeof e && (e = {}), "number" == typeof e.visible && (e.visible = {
                            min: e.visible,
                            max: e.visible
                        }), e;
                    }(this.opts.columns);
                    if (this.opts.columns = a(t, S.options.columns), t.add) {
                        t.visible.min = Math.max(1, Math.min(6, t.visible.min)), t.visible.max = Math.max(t.visible.min, Math.min(6, t.visible.max));
                        for (var n = [], i = [], s = [ "mm-panel_opened", "mm-panel_opened-parent", "mm-panel_highest" ], o = 0; o <= t.visible.max; o++) n.push("mm-menu_columns-" + o), 
                        i.push("mm-panel_columns-" + o);
                        s.push.apply(s, i), this.bind("openPanel:before", (function(t) {
                            var n;
                            if (t && (n = t.mmParent), n && !n.classList.contains("mm-listitem_vertical") && (n = n.closest(".mm-panel"))) {
                                var i = n.className;
                                if (i.length && (i = i.split("mm-panel_columns-")[1])) for (var a = parseInt(i.split(" ")[0], 10) + 1; a > 0; ) {
                                    if (!(t = _(e.node.pnls, ".mm-panel_columns-" + a)[0])) {
                                        a = -1;
                                        break;
                                    }
                                    a++, t.classList.add("mm-hidden"), s.forEach((function(e) {
                                        t.classList.remove(e);
                                    }));
                                }
                            }
                        })), this.bind("openPanel:start", (function(s) {
                            if (s) {
                                var a = s.mmParent;
                                if (a && a.classList.contains("mm-listitem_vertical")) return;
                            }
                            var o = _(e.node.pnls, ".mm-panel_opened-parent").length;
                            s.matches(".mm-panel_opened-parent") || o++, o = Math.min(t.visible.max, Math.max(t.visible.min, o)), 
                            n.forEach((function(t) {
                                e.node.menu.classList.remove(t);
                            })), e.node.menu.classList.add("mm-menu_columns-" + o);
                            var r = [];
                            _(e.node.pnls, ".mm-panel").forEach((function(e) {
                                i.forEach((function(t) {
                                    e.classList.remove(t);
                                })), e.matches(".mm-panel_opened-parent") && r.push(e);
                            })), r.push(s), r.slice(-t.visible.max).forEach((function(e, t) {
                                e.classList.add("mm-panel_columns-" + t);
                            }));
                        }));
                    }
                },
                counters: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e,
                            addTo: "panels",
                            count: e
                        }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-listview"), 
                        e;
                    }(this.opts.counters);
                    if (this.opts.counters = a(t, S.options.counters), this.bind("initListview:after", (function(t) {
                        var n = e.conf.classNames.counters.counter;
                        g(t, "." + n).forEach((function(e) {
                            E(e, n, "mm-counter");
                        }));
                    })), t.add && this.bind("initListview:after", (function(e) {
                        if (e.matches(t.addTo)) {
                            var n = e.closest(".mm-panel").mmParent;
                            if (n && !g(n, ".mm-counter").length) {
                                var i = _(n, ".mm-btn")[0];
                                i && i.prepend(b("span.mm-counter"));
                            }
                        }
                    })), t.count) {
                        var n = function(t) {
                            (t ? [ t.closest(".mm-panel") ] : _(e.node.pnls, ".mm-panel")).forEach((function(e) {
                                var t = e.mmParent;
                                if (t) {
                                    var n = g(t, ".mm-counter")[0];
                                    if (n) {
                                        var i = [];
                                        _(e, ".mm-listview").forEach((function(e) {
                                            i.push.apply(i, _(e));
                                        })), n.innerHTML = L(i).length.toString();
                                    }
                                }
                            }));
                        };
                        this.bind("initListview:after", n), this.bind("updateListview", n);
                    }
                },
                dividers: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e
                        }), "object" != typeof e && (e = {}), "panels" == e.addTo && (e.addTo = ".mm-listview"), 
                        e;
                    }(this.opts.dividers);
                    this.opts.dividers = a(t, S.options.dividers), this.bind("initListview:after", (function(t) {
                        _(t).forEach((function(t) {
                            E(t, e.conf.classNames.divider, "mm-divider"), t.matches(".mm-divider") && t.classList.remove("mm-listitem");
                        }));
                    })), t.add && this.bind("initListview:after", (function(e) {
                        if (e.matches(t.addTo)) {
                            g(e, ".mm-divider").forEach((function(e) {
                                e.remove();
                            }));
                            var n = "";
                            L(_(e)).forEach((function(t) {
                                var i = _(t, ".mm-listitem__text")[0].textContent.trim().toLowerCase()[0];
                                if (i.length && i != n) {
                                    n = i;
                                    var s = b("li.mm-divider");
                                    s.textContent = i, e.insertBefore(s, t);
                                }
                            }));
                        }
                    }));
                },
                drag: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t = function(e) {
                            return "boolean" == typeof e && (e = {
                                open: e
                            }), "object" != typeof e && (e = {}), e;
                        }(this.opts.drag);
                        this.opts.drag = a(t, S.options.drag), t.open && this.bind("setPage:after", (function(n) {
                            re.call(e, t.node || n);
                        }));
                    }
                },
                dropdown: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t = function(e) {
                            return "boolean" == typeof e && e && (e = {
                                drop: e
                            }), "object" != typeof e && (e = {}), "string" == typeof e.position && (e.position = {
                                of: e.position
                            }), e;
                        }(this.opts.dropdown);
                        this.opts.dropdown = a(t, S.options.dropdown);
                        var n = this.conf.dropdown;
                        if (t.drop) {
                            var i;
                            this.bind("initMenu:after", (function() {
                                if (e.node.menu.classList.add("mm-menu_dropdown"), "string" != typeof t.position.of) {
                                    var n = d(e.node.menu.id);
                                    n && (t.position.of = '[href="#' + n + '"]');
                                }
                                if ("string" == typeof t.position.of) {
                                    i = g(document.body, t.position.of)[0];
                                    var s = t.event.split(" ");
                                    1 == s.length && (s[1] = s[0]), "hover" == s[0] && i.addEventListener("mouseenter", (function() {
                                        e.open();
                                    }), {
                                        passive: !0
                                    }), "hover" == s[1] && e.node.menu.addEventListener("mouseleave", (function() {
                                        e.close();
                                    }), {
                                        passive: !0
                                    });
                                }
                            })), this.bind("open:start", (function() {
                                e.node.menu.mmStyle = e.node.menu.getAttribute("style"), e.node.wrpr.classList.add("mm-wrapper_dropdown");
                            })), this.bind("close:finish", (function() {
                                e.node.menu.setAttribute("style", e.node.menu.mmStyle), e.node.wrpr.classList.remove("mm-wrapper_dropdown");
                            }));
                            var s = function(e, s) {
                                var a, o, r, c = s[0], m = s[1], l = "x" == e ? "offsetWidth" : "offsetHeight", d = "x" == e ? "left" : "top", p = "x" == e ? "right" : "bottom", u = "x" == e ? "width" : "height", f = "x" == e ? "innerWidth" : "innerHeight", h = "x" == e ? "maxWidth" : "maxHeight", v = null, b = (a = d, 
                                i.getBoundingClientRect()[a] + document.body["left" === a ? "scrollLeft" : "scrollTop"]), g = b + i[l], _ = window[f], y = n.offset.button[e] + n.offset.viewport[e];
                                if (t.position[e]) switch (t.position[e]) {
                                  case "left":
                                  case "bottom":
                                    v = "after";
                                    break;

                                  case "right":
                                  case "top":
                                    v = "before";
                                }
                                return null === v && (v = b + (g - b) / 2 < _ / 2 ? "after" : "before"), "after" == v ? (r = _ - ((o = "x" == e ? b : g) + y), 
                                c[d] = o + n.offset.button[e] + "px", c[p] = "auto", t.tip && m.push("mm-menu_tip-" + ("x" == e ? "left" : "top"))) : (r = (o = "x" == e ? g : b) - y, 
                                c[p] = "calc( 100% - " + (o - n.offset.button[e]) + "px )", c[d] = "auto", t.tip && m.push("mm-menu_tip-" + ("x" == e ? "right" : "bottom"))), 
                                t.fitViewport && (c[h] = Math.min(n[u].max, r) + "px"), [ c, m ];
                            };
                            this.bind("open:start", o), window.addEventListener("resize", (function(t) {
                                o.call(e);
                            }), {
                                passive: !0
                            }), this.opts.offCanvas.blockUI || window.addEventListener("scroll", (function(t) {
                                o.call(e);
                            }), {
                                passive: !0
                            });
                        }
                    }
                    function o() {
                        var e = this;
                        if (this.vars.opened) {
                            this.node.menu.setAttribute("style", this.node.menu.mmStyle);
                            var n = [ {}, [] ];
                            for (var i in n = s.call(this, "y", n), (n = s.call(this, "x", n))[0]) this.node.menu.style[i] = n[0][i];
                            if (t.tip) [ "mm-menu_tip-left", "mm-menu_tip-right", "mm-menu_tip-top", "mm-menu_tip-bottom" ].forEach((function(t) {
                                e.node.menu.classList.remove(t);
                            })), n[1].forEach((function(t) {
                                e.node.menu.classList.add(t);
                            }));
                        }
                    }
                },
                fixedElements: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t, n, i = this.conf.fixedElements;
                        this.bind("setPage:after", (function(s) {
                            t = e.conf.classNames.fixedElements.fixed, n = g(document, i.insertSelector)[0], 
                            g(s, "." + t).forEach((function(e) {
                                E(e, t, "mm-slideout"), n[i.insertMethod](e);
                            }));
                        }));
                    }
                },
                iconbar: function() {
                    var e, t = this, n = function(e) {
                        return "array" == o(e) && (e = {
                            use: !0,
                            top: e
                        }), "object" != o(e) && (e = {}), void 0 === e.use && (e.use = !0), "boolean" == typeof e.use && e.use && (e.use = !0), 
                        e;
                    }(this.opts.iconbar);
                    if ((this.opts.iconbar = a(n, S.options.iconbar), n.use) && ([ "top", "bottom" ].forEach((function(t, i) {
                        var s = n[t];
                        "array" != o(s) && (s = [ s ]);
                        for (var a = b("div.mm-iconbar__" + t), r = 0, c = s.length; r < c; r++) "string" == typeof s[r] ? a.innerHTML += s[r] : a.append(s[r]);
                        a.children.length && (e || (e = b("div.mm-iconbar")), e.append(a));
                    })), e)) {
                        this.bind("initMenu:after", (function() {
                            t.node.menu.prepend(e);
                        }));
                        var i = "mm-menu_iconbar-" + n.position, s = function() {
                            t.node.menu.classList.add(i), S.sr_aria(e, "hidden", !1);
                        };
                        if ("boolean" == typeof n.use ? this.bind("initMenu:after", s) : P(n.use, s, (function() {
                            t.node.menu.classList.remove(i), S.sr_aria(e, "hidden", !0);
                        })), "tabs" == n.type) {
                            e.classList.add("mm-iconbar_tabs"), e.addEventListener("click", (function(e) {
                                var n = e.target;
                                if (n.matches("a")) if (n.matches(".mm-iconbar__tab_selected")) e.stopImmediatePropagation(); else try {
                                    var i = t.node.menu.querySelector(n.getAttribute("href"))[0];
                                    i && i.matches(".mm-panel") && (e.preventDefault(), e.stopImmediatePropagation(), 
                                    t.openPanel(i, !1));
                                } catch (e) {}
                            }));
                            var r = function(t) {
                                g(e, "a").forEach((function(e) {
                                    e.classList.remove("mm-iconbar__tab_selected");
                                }));
                                var n = g(e, '[href="#' + t.id + '"]')[0];
                                if (n) n.classList.add("mm-iconbar__tab_selected"); else {
                                    var i = t.mmParent;
                                    i && r(i.closest(".mm-panel"));
                                }
                            };
                            this.bind("openPanel:start", r);
                        }
                    }
                },
                iconPanels: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e
                        }), "number" != typeof e && "string" != typeof e || (e = {
                            add: !0,
                            visible: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.iconPanels);
                    this.opts.iconPanels = a(t, S.options.iconPanels);
                    var n = !1;
                    if ("first" == t.visible && (n = !0, t.visible = 1), t.visible = Math.min(3, Math.max(1, t.visible)), 
                    t.visible++, t.add) {
                        this.bind("initMenu:after", (function() {
                            var n = [ "mm-menu_iconpanel" ];
                            t.hideNavbar && n.push("mm-menu_hidenavbar"), t.hideDivider && n.push("mm-menu_hidedivider"), 
                            n.forEach((function(t) {
                                e.node.menu.classList.add(t);
                            }));
                        }));
                        var i = [];
                        if (!n) for (var s = 0; s <= t.visible; s++) i.push("mm-panel_iconpanel-" + s);
                        this.bind("openPanel:start", (function(s) {
                            var a = _(e.node.pnls, ".mm-panel");
                            if (!(s = s || a[0]).parentElement.matches(".mm-listitem_vertical")) if (n) a.forEach((function(e, t) {
                                e.classList[0 == t ? "add" : "remove"]("mm-panel_iconpanel-first");
                            })); else {
                                a.forEach((function(e) {
                                    i.forEach((function(t) {
                                        e.classList.remove(t);
                                    }));
                                })), a = a.filter((function(e) {
                                    return e.matches(".mm-panel_opened-parent");
                                }));
                                var o = !1;
                                a.forEach((function(e) {
                                    s === e && (o = !0);
                                })), o || a.push(s), a.forEach((function(e) {
                                    e.classList.remove("mm-hidden");
                                })), (a = a.slice(-t.visible)).forEach((function(e, t) {
                                    e.classList.add("mm-panel_iconpanel-" + t);
                                }));
                            }
                        })), this.bind("initPanel:after", (function(e) {
                            if (t.blockPanel && !e.parentElement.matches(".mm-listitem_vertical") && !_(e, ".mm-panel__blocker")[0]) {
                                var n = b("a.mm-panel__blocker");
                                n.setAttribute("href", "#" + e.closest(".mm-panel").id), e.prepend(n);
                            }
                        }));
                    }
                },
                keyboardNavigation: function() {
                    var e = this;
                    if (!U) {
                        var t = function(e) {
                            return "boolean" != typeof e && "string" != typeof e || (e = {
                                enable: e
                            }), "object" != typeof e && (e = {}), e;
                        }(this.opts.keyboardNavigation);
                        if (this.opts.keyboardNavigation = a(t, S.options.keyboardNavigation), t.enable) {
                            var n = b("button.mm-tabstart.mm-sronly"), i = b("button.mm-tabend.mm-sronly"), s = b("button.mm-tabend.mm-sronly");
                            this.bind("initMenu:after", (function() {
                                t.enhance && e.node.menu.classList.add("mm-menu_keyboardfocus"), he.call(e, t.enhance);
                            })), this.bind("initOpened:before", (function() {
                                e.node.menu.prepend(n), e.node.menu.append(i), _(e.node.menu, ".mm-navbars-top, .mm-navbars-bottom").forEach((function(e) {
                                    e.querySelectorAll(".mm-navbar__title").forEach((function(e) {
                                        e.setAttribute("tabindex", "-1");
                                    }));
                                }));
                            })), this.bind("initBlocker:after", (function() {
                                S.node.blck.append(s), _(S.node.blck, "a")[0].classList.add("mm-tabstart");
                            }));
                            var o = "input, select, textarea, button, label, a[href]", r = function(n) {
                                n = n || _(e.node.pnls, ".mm-panel_opened")[0];
                                var i = null, s = document.activeElement.closest(".mm-navbar");
                                if (!s || s.closest(".mm-menu") != e.node.menu) {
                                    if ("default" == t.enable && ((i = g(n, ".mm-listview a[href]:not(.mm-hidden)")[0]) || (i = g(n, o + ":not(.mm-hidden)")[0]), 
                                    !i)) {
                                        var a = [];
                                        _(e.node.menu, ".mm-navbars_top, .mm-navbars_bottom").forEach((function(e) {
                                            a.push.apply(a, g(e, o + ":not(.mm-hidden)"));
                                        })), i = a[0];
                                    }
                                    i || (i = _(e.node.menu, ".mm-tabstart")[0]), i && i.focus();
                                }
                            };
                            this.bind("open:finish", r), this.bind("openPanel:finish", r), this.bind("initOpened:after:sr-aria", (function() {
                                [ e.node.menu, S.node.blck ].forEach((function(e) {
                                    _(e, ".mm-tabstart, .mm-tabend").forEach((function(e) {
                                        S.sr_aria(e, "hidden", !0), S.sr_role(e, "presentation");
                                    }));
                                }));
                            }));
                        }
                    }
                },
                lazySubmenus: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            load: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.lazySubmenus);
                    this.opts.lazySubmenus = a(t, S.options.lazySubmenus), t.load && (this.bind("initPanels:before", (function() {
                        var t = [];
                        g(e.node.pnls, "li").forEach((function(n) {
                            t.push.apply(t, _(n, e.conf.panelNodetype.join(", ")));
                        })), t.filter((function(e) {
                            return !e.matches(".mm-listview_inset");
                        })).filter((function(e) {
                            return !e.matches(".mm-nolistview");
                        })).filter((function(e) {
                            return !e.matches(".mm-nopanel");
                        })).forEach((function(e) {
                            [ "mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel" ].forEach((function(t) {
                                e.classList.add(t);
                            }));
                        }));
                    })), this.bind("initPanels:before", (function() {
                        var t = [];
                        g(e.node.pnls, "." + e.conf.classNames.selected).forEach((function(e) {
                            t.push.apply(t, y(e, ".mm-panel_lazysubmenu"));
                        })), t.length && t.forEach((function(e) {
                            console.log(e);
                            [ "mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel" ].forEach((function(t) {
                                e.classList.remove(t);
                            }));
                        }));
                    })), this.bind("openPanel:before", (function(t) {
                        var n = g(t, ".mm-panel_lazysubmenu").filter((function(e) {
                            return !e.matches(".mm-panel_lazysubmenu .mm-panel_lazysubmenu");
                        }));
                        t.matches(".mm-panel_lazysubmenu") && n.unshift(t), n.forEach((function(t) {
                            [ "mm-panel_lazysubmenu", "mm-nolistview", "mm-nopanel" ].forEach((function(e) {
                                t.classList.remove(e);
                            })), e.initPanel(t);
                        }));
                    })));
                },
                navbars: _e,
                pageScroll: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            scroll: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.pageScroll);
                    this.opts.pageScroll = a(t, S.options.pageScroll);
                    var n, i = this.conf.pageScroll;
                    function s() {
                        n && window.scrollTo({
                            top: n.getBoundingClientRect().top + document.scrollingElement.scrollTop - i.scrollOffset,
                            behavior: "smooth"
                        }), n = null;
                    }
                    function o(e) {
                        try {
                            return "#" != e && "#" == e.slice(0, 1) ? S.node.page.querySelector(e) : null;
                        } catch (e) {
                            return null;
                        }
                    }
                    if (t.scroll && this.bind("close:finish", (function() {
                        s();
                    })), this.opts.offCanvas && t.scroll && this.clck.push((function(t, i) {
                        if (n = null, i.inMenu) {
                            var a = t.getAttribute("href");
                            if (n = o(a)) return e.node.menu.matches(".mm-menu_sidebar-expanded") && e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") ? void s() : {
                                close: !0
                            };
                        }
                    })), t.update) {
                        var r = [];
                        this.bind("initListview:after", (function(e) {
                            w(_(e, ".mm-listitem")).forEach((function(e) {
                                var t = o(e.getAttribute("href"));
                                t && r.unshift(t);
                            }));
                        }));
                        var c = -1;
                        window.addEventListener("scroll", (function(t) {
                            for (var n = window.scrollY, s = 0; s < r.length; s++) if (r[s].offsetTop < n + i.updateOffset) {
                                if (c !== s) {
                                    c = s;
                                    var a = w(g(_(e.node.pnls, ".mm-panel_opened")[0], ".mm-listitem"));
                                    (a = a.filter((function(e) {
                                        return e.matches('[href="#' + r[s].id + '"]');
                                    }))).length && e.setSelected(a[0].parentElement);
                                }
                                break;
                            }
                        }));
                    }
                },
                searchfield: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e
                        }), "object" != typeof e && (e = {}), "boolean" == typeof e.panel && (e.panel = {
                            add: e.panel
                        }), "object" != typeof e.panel && (e.panel = {}), "panel" == e.addTo && (e.panel.add = !0), 
                        e.panel.add && (e.showSubPanels = !1, e.panel.splash && (e.cancel = !0)), e;
                    }(this.opts.searchfield);
                    this.opts.searchfield = a(t, S.options.searchfield);
                    this.conf.searchfield;
                    t.add && (this.bind("close:start", (function() {
                        g(e.node.menu, ".mm-searchfield").forEach((function(e) {
                            e.blur();
                        }));
                    })), this.bind("initPanel:after", (function(n) {
                        var i = null;
                        t.panel.add && (i = Me.call(e));
                        var s = null;
                        switch (t.addTo) {
                          case "panels":
                            s = [ n ];
                            break;

                          case "panel":
                            s = [ i ];
                            break;

                          default:
                            "string" == typeof t.addTo ? s = g(e.node.menu, t.addTo) : "array" == o(t.addTo) && (s = t.addTo);
                        }
                        s.forEach((function(n) {
                            n = Ae.call(e, n), t.search && n && Te.call(e, n);
                        })), t.noResults && Ce.call(e, t.panel.add ? i : n);
                    })), this.clck.push((function(t, n) {
                        if (n.inMenu && t.matches(".mm-searchfield__btn")) {
                            if (t.matches(".mm-btn_close")) {
                                var i = g(s = t.closest(".mm-searchfield"), "input")[0];
                                return i.value = "", e.search(i), !0;
                            }
                            var s;
                            if (t.matches(".mm-btn_next")) return (s = t.closest("form")) && s.submit(), !0;
                        }
                    })));
                },
                sectionIndexer: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            add: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.sectionIndexer);
                    this.opts.sectionIndexer = a(t, S.options.sectionIndexer), t.add && this.bind("initPanels:after", (function() {
                        if (!e.node.indx) {
                            var t = "";
                            "abcdefghijklmnopqrstuvwxyz".split("").forEach((function(e) {
                                t += '<a href="#">' + e + "</a>";
                            }));
                            var n = b("div.mm-sectionindexer");
                            n.innerHTML = t, e.node.pnls.prepend(n), e.node.indx = n, e.node.indx.addEventListener("click", (function(e) {
                                e.target.matches("a") && e.preventDefault();
                            }));
                            var i = function(t) {
                                if (t.target.matches("a")) {
                                    var n = t.target.textContent, i = _(e.node.pnls, ".mm-panel_opened")[0], s = -1, a = i.scrollTop;
                                    i.scrollTop = 0, g(i, ".mm-divider").filter((function(e) {
                                        return !e.matches(".mm-hidden");
                                    })).forEach((function(e) {
                                        s < 0 && n == e.textContent.trim().slice(0, 1).toLowerCase() && (s = e.offsetTop);
                                    })), i.scrollTop = s > -1 ? s : a;
                                }
                            };
                            U ? (e.node.indx.addEventListener("touchstart", i), e.node.indx.addEventListener("touchmove", i)) : e.node.indx.addEventListener("mouseover", i);
                        }
                        e.bind("openPanel:start", (function(t) {
                            var n = g(t, ".mm-divider").filter((function(e) {
                                return !e.matches(".mm-hidden");
                            })).length;
                            e.node.indx.classList[n ? "add" : "remove"]("mm-sectionindexer_active");
                        }));
                    }));
                },
                setSelected: function() {
                    var e = this, t = function(e) {
                        return "boolean" == typeof e && (e = {
                            hover: e,
                            parent: e
                        }), "object" != typeof e && (e = {}), e;
                    }(this.opts.setSelected);
                    if (this.opts.setSelected = a(t, S.options.setSelected), "detect" == t.current) {
                        var n = function(t) {
                            t = t.split("?")[0].split("#")[0];
                            var i = e.node.menu.querySelector('a[href="' + t + '"], a[href="' + t + '/"]');
                            if (i) e.setSelected(i.parentElement); else {
                                var s = t.split("/").slice(0, -1);
                                s.length && n(s.join("/"));
                            }
                        };
                        this.bind("initMenu:after", (function() {
                            n.call(e, window.location.href);
                        }));
                    } else t.current || this.bind("initListview:after", (function(e) {
                        _(e, ".mm-listitem_selected").forEach((function(e) {
                            e.classList.remove("mm-listitem_selected");
                        }));
                    }));
                    t.hover && this.bind("initMenu:after", (function() {
                        e.node.menu.classList.add("mm-menu_selected-hover");
                    })), t.parent && (this.bind("openPanel:finish", (function(t) {
                        g(e.node.pnls, ".mm-listitem_selected-parent").forEach((function(e) {
                            e.classList.remove("mm-listitem_selected-parent");
                        }));
                        for (var n = t.mmParent; n; ) n.matches(".mm-listitem_vertical") || n.classList.add("mm-listitem_selected-parent"), 
                        n = (n = n.closest(".mm-panel")).mmParent;
                    })), this.bind("initMenu:after", (function() {
                        e.node.menu.classList.add("mm-menu_selected-parent");
                    })));
                },
                sidebar: function() {
                    var e = this;
                    if (this.opts.offCanvas) {
                        var t = function(e) {
                            return ("string" == typeof e || "boolean" == typeof e && e || "number" == typeof e) && (e = {
                                expanded: e
                            }), "object" != typeof e && (e = {}), "boolean" == typeof e.collapsed && e.collapsed && (e.collapsed = {
                                use: !0
                            }), "string" != typeof e.collapsed && "number" != typeof e.collapsed || (e.collapsed = {
                                use: e.collapsed
                            }), "object" != typeof e.collapsed && (e.collapsed = {}), "boolean" == typeof e.expanded && e.expanded && (e.expanded = {
                                use: !0
                            }), "string" != typeof e.expanded && "number" != typeof e.expanded || (e.expanded = {
                                use: e.expanded
                            }), "object" != typeof e.expanded && (e.expanded = {}), e;
                        }(this.opts.sidebar);
                        if (this.opts.sidebar = a(t, S.options.sidebar), t.collapsed.use) {
                            this.bind("initMenu:after", (function() {
                                if (e.node.menu.classList.add("mm-menu_sidebar-collapsed"), t.collapsed.blockMenu && e.opts.offCanvas && !_(e.node.menu, ".mm-menu__blocker")[0]) {
                                    var n = b("a.mm-menu__blocker");
                                    n.setAttribute("href", "#" + e.node.menu.id), e.node.menu.prepend(n);
                                }
                                t.collapsed.hideNavbar && e.node.menu.classList.add("mm-menu_hidenavbar"), t.collapsed.hideDivider && e.node.menu.classList.add("mm-menu_hidedivider");
                            }));
                            var n = function() {
                                e.node.wrpr.classList.add("mm-wrapper_sidebar-collapsed");
                            }, i = function() {
                                e.node.wrpr.classList.remove("mm-wrapper_sidebar-collapsed");
                            };
                            "boolean" == typeof t.collapsed.use ? this.bind("initMenu:after", n) : P(t.collapsed.use, n, i);
                        }
                        if (t.expanded.use) {
                            this.bind("initMenu:after", (function() {
                                e.node.menu.classList.add("mm-menu_sidebar-expanded");
                            }));
                            n = function() {
                                e.node.wrpr.classList.add("mm-wrapper_sidebar-expanded"), e.node.wrpr.matches(".mm-wrapper_sidebar-closed") || e.open();
                            }, i = function() {
                                e.node.wrpr.classList.remove("mm-wrapper_sidebar-expanded"), e.close();
                            };
                            "boolean" == typeof t.expanded.use ? this.bind("initMenu:after", n) : P(t.expanded.use, n, i), 
                            this.bind("close:start", (function() {
                                e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (e.node.wrpr.classList.add("mm-wrapper_sidebar-closed"), 
                                "remember" == t.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "closed"));
                            })), this.bind("open:start", (function() {
                                e.node.wrpr.matches(".mm-wrapper_sidebar-expanded") && (e.node.wrpr.classList.remove("mm-wrapper_sidebar-closed"), 
                                "remember" == t.expanded.initial && window.localStorage.setItem("mmenuExpandedState", "open"));
                            }));
                            var s = t.expanded.initial;
                            if ("remember" == t.expanded.initial) {
                                var o = window.localStorage.getItem("mmenuExpandedState");
                                switch (o) {
                                  case "open":
                                  case "closed":
                                    s = o;
                                }
                            }
                            "closed" == s && this.bind("initMenu:after", (function() {
                                e.node.wrpr.classList.add("mm-wrapper_sidebar-closed");
                            })), this.clck.push((function(n, i) {
                                if (i.inMenu && i.inListview && e.node.wrpr.matches(".mm-wrapper_sidebar-expanded")) return {
                                    close: "closed" == t.expanded.initial
                                };
                            }));
                        }
                    }
                },
                toggles: function() {
                    var e = this;
                    this.bind("initPanel:after", (function(t) {
                        g(t, "input").forEach((function(t) {
                            E(t, e.conf.classNames.toggles.toggle, "mm-toggle"), E(t, e.conf.classNames.toggles.check, "mm-check");
                        }));
                    }));
                }
            }, S.wrappers = {
                angular: function() {
                    this.opts.onClick = {
                        close: !0,
                        preventDefault: !1,
                        setSelected: !0
                    };
                },
                bootstrap: function() {
                    var e = this;
                    if (this.node.menu.matches(".navbar-collapse")) {
                        this.conf.offCanvas && (this.conf.offCanvas.clone = !1);
                        var t = b("nav"), n = b("div");
                        t.append(n), _(this.node.menu).forEach((function(t) {
                            switch (!0) {
                              case t.matches(".navbar-nav"):
                                n.append(function(e) {
                                    var t = b("ul");
                                    return g(e, ".nav-item").forEach((function(e) {
                                        var n = b("li");
                                        if (e.matches(".active") && n.classList.add("Selected"), !e.matches(".nav-link")) {
                                            var i = _(e, ".dropdown-menu")[0];
                                            i && n.append(o(i)), e = _(e, ".nav-link")[0];
                                        }
                                        n.prepend(a(e)), t.append(n);
                                    })), t;
                                }(t));
                                break;

                              case t.matches(".dropdown-menu"):
                                n.append(o(t));
                                break;

                              case t.matches(".form-inline"):
                                e.conf.searchfield.form = {
                                    action: t.getAttribute("action") || null,
                                    method: t.getAttribute("method") || null
                                }, e.conf.searchfield.input = {
                                    name: t.querySelector("input").getAttribute("name") || null
                                }, e.conf.searchfield.clear = !1, e.conf.searchfield.submit = !0;
                                break;

                              default:
                                n.append(t.cloneNode(!0));
                            }
                        })), this.bind("initMenu:before", (function() {
                            document.body.prepend(t), e.node.menu = t;
                        }));
                        var i = this.node.menu.parentElement;
                        if (i) {
                            var s = i.querySelector(".navbar-toggler");
                            s && (s.removeAttribute("data-target"), s.removeAttribute("aria-controls"), s.outerHTML = s.outerHTML, 
                            (s = i.querySelector(".navbar-toggler")).addEventListener("click", (function(t) {
                                t.preventDefault(), t.stopImmediatePropagation(), e[e.vars.opened ? "close" : "open"]();
                            })));
                        }
                    }
                    function a(e) {
                        for (var t = b(e.matches("a") ? "a" : "span"), n = [ "href", "title", "target" ], i = 0; i < n.length; i++) e.getAttribute(n[i]) && t.setAttribute(n[i], e.getAttribute(n[i]));
                        return t.innerHTML = e.innerHTML, g(t, ".sr-only").forEach((function(e) {
                            e.remove();
                        })), t;
                    }
                    function o(e) {
                        var t = b("ul");
                        return _(e).forEach((function(e) {
                            var n = b("li");
                            e.matches(".dropdown-divider") ? n.classList.add("Divider") : e.matches(".dropdown-item") && n.append(a(e)), 
                            t.append(n);
                        })), t;
                    }
                },
                olark: function() {
                    this.conf.offCanvas.page.noSelector.push("#olark");
                },
                turbolinks: function() {
                    var e;
                    document.addEventListener("turbolinks:before-visit", (function(t) {
                        e = document.querySelector(".mm-wrapper").className.split(" ").filter((function(e) {
                            return /mm-/.test(e);
                        }));
                    })), document.addEventListener("turbolinks:load", (function(t) {
                        void 0 !== e && (document.querySelector(".mm-wrapper").className = e);
                    }));
                },
                wordpress: function() {
                    this.conf.classNames.selected = "current-menu-item";
                    var e = document.getElementById("wpadminbar");
                    e && (e.style.position = "fixed", e.classList.add("mm-slideout"));
                }
            };
            var De;
            t.default = S;
            window && (window.Mmenu = S), (De = window.jQuery || window.Zepto || null) && (De.fn.mmenu = function(e, t) {
                var n = De();
                return this.each((function(i, s) {
                    if (!s.mmApi) {
                        var a = new S(s, e, t), o = De(a.node.menu);
                        o.data("mmenu", a.API), n = n.add(o);
                    }
                })), n;
            });
        } ]);
        $((function() {
            var localizedTitle = "Объявления, Визитки";
            var localizedSearchfieldPlaceholder = "Поиск разделов";
            switch ($("html").attr("lang")) {
              case "uk":
                localizedTitle = "Оголошення, Візитки";
                localizedSearchfieldPlaceholder = "Пошук розділів";
                break;

              case "en":
                localizedTitle = "Ads & Companies";
                localizedSearchfieldPlaceholder = "Category search";
                break;
            }
            if ($(location).attr("hash") == "#menu") history.replaceState({}, null, "#");
            const mobileMenu = new Mmenu("#menu", {
                backButton: true,
                extensions: [ "fullscreen", "position-front", "theme-green" ],
                iconPanels: true,
                navbar: {
                    title: localizedTitle
                },
                navbars: [ {
                    content: [ "searchfield", "close" ]
                } ],
                screenReader: {
                    text: false
                },
                searchfield: {
                    placeholder: localizedSearchfieldPlaceholder
                },
                setSelected: true,
                scrollBugFix: false,
                wrappers: [ "bootstrap" ]
            }, {
                language: "ru",
                offCanvas: {
                    clone: true,
                    menu: {
                        insertMethod: "append"
                    }
                },
                searchfield: {
                    clear: true
                },
                classNames: {
                    vertical: "lvl-3"
                }
            });
            const desktopMenu = new Mmenu("#menu", {
                backButton: true,
                columns: {
                    add: true,
                    visible: {
                        max: 2,
                        min: 2
                    }
                },
                extensions: [ "shadow-panels", "theme-green", "pagedim-black", "popup" ],
                navbar: {
                    title: localizedTitle
                },
                navbars: [ {
                    content: [ "searchfield", "close" ]
                } ],
                screenReader: {
                    text: false
                },
                searchfield: {
                    placeholder: localizedSearchfieldPlaceholder
                },
                setSelected: true,
                wrappers: [ "bootstrap" ]
            }, {
                language: "ru",
                searchfield: {
                    clear: true
                }
            });
            const mdBreakpoint = window.matchMedia("(min-width: 768px)");
            function openSubmenu(hash) {
                var isMobile = !mdBreakpoint.matches;
                var panelSelector = hash + "-panel";
                if (isMobile) panelSelector = "#mm-" + panelSelector.substring(1);
                var panel = document.querySelector(panelSelector);
                if (panel == null) return;
                var menu = isMobile ? mobileMenu : desktopMenu;
                menu.API.closeAllPanels();
                menu.API.openPanel(panel);
                menu.open();
                scrollIntoView(panelSelector);
            }
            function openMenu() {
                var isMobile = !mdBreakpoint.matches;
                var menu = isMobile ? mobileMenu : desktopMenu;
                menu.API.closeAllPanels();
                menu.open();
            }
            function scrollIntoView(panelSelector) {
                var listitem = $("a[href='" + panelSelector + "']").parent("li.mm-listitem");
                listitem[0].scrollIntoView(false);
            }
            $("a[data-menu-opener]").click((function() {
                var hash = $(this).attr("href");
                if (hash == "#") {
                    openMenu();
                    return;
                }
                var isMobile = !mdBreakpoint.matches;
                if (isMobile) if ($(this).data("menu-opener") == "has-subcategories") hash += "-subcategories";
                openSubmenu(hash);
            }));
            $("#menu a, #mm-menu a").not("[href*='#']").click((function() {
                var panelId = $(this).parents("div.mm-panel").attr("id");
                var hash = "#" + panelId.replace("-panel", "").replace("mm-", "");
                history.replaceState({}, null, hash);
            }));
            function closeMenuOnBreakpoint(evt) {
                if (evt.matches) mobileMenu.close(); else desktopMenu.close();
            }
            mdBreakpoint.addListener(closeMenuOnBreakpoint);
            var hash = $(location).attr("hash");
            openSubmenu(hash);
        }));
        $((function() {
            $(".header__body .search-btn").on("click", (function(e) {
                e.preventDefault();
                var search = $(".searchbar-wrapper");
                search.toggleClass("hide");
                $(".searchbar-input").val("");
                $(".header__body .search-btn img").attr("src", (function(index, attr) {
                    return attr != "img/header/close.png" ? "img/header/close.png" : "img/header/03.png";
                }));
            }));
            function sendSearchString(value) {
                value = $(".searchbar-input").val();
                $($.ajax({
                    type: "Post",
                    url: "url",
                    data: value,
                    success: function(response) {}
                }));
                $(".header__body .search-btn img").attr("src", (function(index, attr) {
                    return attr != "img/header/close.png" ? "img/header/close.png" : "img/header/03.png";
                }));
                $(".searchbar-wrapper").addClass("hide");
                $(".searchbar-input").val("");
            }
            $(document).keyup((function(e) {
                var value = $(".searchbar-input").val();
                if (e.key === "Enter" && value !== "") sendSearchString(value);
            }));
            $(".searchbar-btn").on("click", (function(e) {
                e.preventDefault();
                var value = $(".searchbar-input").val();
                if (value !== "") sendSearchString();
            }));
        }));
        (function() {
            "use strict";
            function AccordionTabs(el, options) {
                if (!el) return;
                this.el = el;
                this.tabTriggers = this.el.getElementsByClassName("js-tabs-trigger");
                this.tabPanels = this.el.getElementsByClassName("js-tabs-panel");
                this.accordionTriggers = this.el.getElementsByClassName("js-accordion-trigger");
                this.options = this._extend({
                    breakpoint: 640,
                    tabsAllowed: true,
                    selectedTab: 0,
                    startCollapsed: false
                }, options);
                if (el.getAttribute("data-tabs-allowed") == "true") this.options.tabsAllowed = true; else if (el.getAttribute("data-tabs-allowed") == "false") this.options.tabsAllowed = false;
                if (el.getAttribute("data-breakpoint")) this.options.breakpoint = parseInt(el.getAttribute("data-breakpoint"));
                if (el.getAttribute("data-selected-tab")) this.options.selectedTab = parseInt(el.getAttribute("data-selected-tab"));
                if (el.getAttribute("data-start-collapsed") == "true") this.options.startCollapsed = true; else if (el.getAttribute("data-start-collapsed") == "false") this.options.startCollapsed = false;
                if (this.tabTriggers.length === 0 || this.tabTriggers.length !== this.tabPanels.length) return;
                this._init();
            }
            AccordionTabs.prototype._init = function() {
                var _this = this;
                this.tabTriggersLength = this.tabTriggers.length;
                this.accordionTriggersLength = this.accordionTriggers.length;
                this.selectedTab = 0;
                this.prevSelectedTab = null;
                this.clickListener = this._clickEvent.bind(this);
                this.keydownListener = this._keydownEvent.bind(this);
                this.keys = {
                    prev: 37,
                    next: 39,
                    space: 32,
                    enter: 13
                };
                if (window.innerWidth >= this.options.breakpoint && this.options.tabsAllowed) this.isAccordion = false; else this.isAccordion = true;
                for (var i = 0; i < this.tabTriggersLength; i++) {
                    this.tabTriggers[i].index = i;
                    this.tabTriggers[i].addEventListener("click", this.clickListener, false);
                    this.tabTriggers[i].addEventListener("keydown", this.keydownListener, false);
                    if (this.tabTriggers[i].classList.contains("is-selected")) this.selectedTab = i;
                    this._hide(i);
                }
                for (i = 0; i < this.accordionTriggersLength; i++) {
                    this.accordionTriggers[i].index = i;
                    this.accordionTriggers[i].addEventListener("click", this.clickListener, false);
                    this.accordionTriggers[i].addEventListener("keydown", this.keydownListener, false);
                    if (this.accordionTriggers[i].classList.contains("is-selected")) this.selectedTab = i;
                }
                if (!isNaN(this.options.selectedTab)) this.selectedTab = this.options.selectedTab < this.tabTriggersLength ? this.options.selectedTab : this.tabTriggersLength - 1;
                this.el.classList.add("is-initialized");
                if (this.options.tabsAllowed) this.el.classList.add("tabs-allowed");
                if (!this.options.startCollapsed || !this.isAccordion) this.selectTab(this.selectedTab, false);
                var resizeTabs = this._debounce((function() {
                    if (window.innerWidth >= _this.options.breakpoint && _this.options.tabsAllowed) {
                        _this.isAccordion = false;
                        if (_this.options.tabsAllowed) _this.el.classList.add("tabs-allowed");
                        _this.selectTab(_this.selectedTab);
                    } else {
                        _this.isAccordion = true;
                        _this.el.classList.remove("tabs-allowed");
                        if (!_this.options.startCollapsed) _this.selectTab(_this.selectedTab);
                    }
                }), 50);
                window.addEventListener("resize", resizeTabs);
            };
            AccordionTabs.prototype._clickEvent = function(e) {
                e.preventDefault();
                var closestTrigger = this._getClosest(e.target, ".js-tabs-trigger");
                var closestTab = 0;
                if (closestTrigger == null) {
                    closestTrigger = this._getClosest(e.target, ".js-accordion-trigger");
                    closestTab = this._getClosest(closestTrigger, ".js-tabs-panel");
                    this.isAccordion = true;
                } else this.isAccordion = false;
                var targetIndex = e.target.index != null ? e.target.index : closestTab.index;
                if (targetIndex === this.selectedTab && !this.isAccordion) return;
                this.selectTab(targetIndex, true);
            };
            AccordionTabs.prototype._keydownEvent = function(e) {
                var targetIndex;
                if (e.keyCode === this.keys.prev || e.keyCode === this.keys.next || e.keyCode === this.keys.space || e.keyCode === this.keys.enter) e.preventDefault(); else return;
                if (e.keyCode === this.keys.prev && e.target.index > 0 && !this.isAccordion) targetIndex = e.target.index - 1; else if (e.keyCode === this.keys.next && e.target.index < this.tabTriggersLength - 1 && !this.isAccordion) targetIndex = e.target.index + 1; else if (e.keyCode === this.keys.space || e.keyCode === this.keys.enter) targetIndex = e.target.index; else return;
                this.selectTab(targetIndex, true);
            };
            AccordionTabs.prototype._show = function(index, userInvoked) {
                this.tabPanels[index].removeAttribute("tabindex");
                this.tabTriggers[index].removeAttribute("tabindex");
                this.tabTriggers[index].classList.add("is-selected");
                this.tabTriggers[index].setAttribute("aria-selected", true);
                this.accordionTriggers[index].setAttribute("aria-expanded", true);
                var panelContent = this.tabPanels[index].getElementsByClassName("content")[0];
                panelContent.setAttribute("aria-hidden", false);
                panelContent.classList.remove("is-hidden");
                panelContent.classList.add("is-open");
                this.tabPanels[index].classList.remove("is-hidden");
                this.tabPanels[index].classList.add("is-open");
                if (userInvoked) this.tabTriggers[index].focus();
            };
            AccordionTabs.prototype._hide = function(index) {
                this.tabTriggers[index].classList.remove("is-selected");
                this.tabTriggers[index].setAttribute("aria-selected", false);
                this.tabTriggers[index].setAttribute("tabindex", -1);
                this.accordionTriggers[index].setAttribute("aria-expanded", false);
                var panelContent = this.tabPanels[index].getElementsByClassName("content")[0];
                panelContent.setAttribute("aria-hidden", true);
                panelContent.classList.remove("is-open");
                panelContent.classList.add("is-hidden");
                this.tabPanels[index].classList.remove("is-open");
                this.tabPanels[index].classList.add("is-hidden");
                this.tabPanels[index].setAttribute("tabindex", -1);
            };
            AccordionTabs.prototype.selectTab = function(index, userInvoked) {
                if (index === null) if (this.isAccordion) return; else index = 0;
                if (!this.tabPanels[index].classList.contains("is-hidden") && userInvoked) {
                    if (index === this.selectedTab) this.selectedTab = null; else {
                        this.selectedTab = null;
                        this.prevSelectedTab = index;
                    }
                    this._hide(index);
                    return;
                }
                if (this.isAccordion) {
                    this.prevSelectedTab = this.selectedTab;
                    this.selectedTab = index;
                } else {
                    if (this.prevSelectedTab === null || !this.isAccordion) {
                        for (var i = 0; i < this.tabTriggersLength; i++) if (i !== index) this._hide(i);
                    } else this._hide(this.selectedTab);
                    this.prevSelectedTab = this.selectedTab;
                    this.selectedTab = index;
                }
                this._show(this.selectedTab, userInvoked);
            };
            AccordionTabs.prototype.destroy = function() {
                for (var i = 0; i < this.tabTriggersLength; i++) {
                    this.tabTriggers[i].classList.remove("is-selected");
                    this.tabTriggers[i].removeAttribute("aria-selected");
                    this.tabTriggers[i].removeAttribute("tabindex");
                    this.tabPanels[i].classList.remove("is-hidden");
                    this.tabPanels[i].removeAttribute("aria-hidden");
                    this.tabPanels[i].removeAttribute("tabindex");
                    this.tabTriggers[i].removeEventListener("click", this.clickListener, false);
                    this.tabTriggers[i].removeEventListener("keydown", this.keydownListener, false);
                    delete this.tabTriggers[i].index;
                }
                this.el.classList.remove("is-initialized");
            };
            AccordionTabs.prototype._getClosest = function(elem, selector) {
                if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) ;
                    return i > -1;
                };
                for (;elem && elem !== document; elem = elem.parentNode) if (elem.matches(selector)) return elem;
                return null;
            };
            AccordionTabs.prototype._extend = function() {
                var extended = {};
                var deep = false;
                var i = 0;
                var length = arguments.length;
                if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
                    deep = arguments[0];
                    i++;
                }
                var merge = function(obj) {
                    for (var prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") extended[prop] = extend(true, extended[prop], obj[prop]); else extended[prop] = obj[prop];
                };
                for (;i < length; i++) {
                    var obj = arguments[i];
                    merge(obj);
                }
                return extended;
            };
            AccordionTabs.prototype._debounce = function(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            };
            var slice = Array.prototype.slice;
            function $$(expr, con) {
                return slice.call((con || document).querySelectorAll(expr));
            }
            function init() {
                $$(".js-tabs").forEach((function(input) {
                    new AccordionTabs(input);
                }));
            }
            if (typeof Document !== "undefined") if (document.readyState !== "loading") init(); else document.addEventListener("DOMContentLoaded", init);
            if (typeof self !== "undefined") self.AccordionTabs = AccordionTabs;
            if (typeof module === "object" && module.exports) module.exports = AccordionTabs;
            return AccordionTabs;
        })();
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        spollers();
        tabs();
        formFieldsInit({
            viewPass: true
        });
        formSubmit();
    })();
})();
(() => {
  var e = {
      267: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += '@supports ('.concat(t[4], ') {')),
                  t[2] && (n += '@media '.concat(t[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {',
                    )),
                  (n += e(t)),
                  r && (n += '}'),
                  t[2] && (n += '}'),
                  t[4] && (n += '}'),
                  n
                );
              }).join('');
            }),
            (t.i = function (e, n, r, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = '@layer'
                        .concat(s[5].length > 0 ? ' '.concat(s[5]) : '', ' {')
                        .concat(s[1], '}')),
                    (s[5] = i)),
                  n &&
                    (s[2]
                      ? ((s[1] = '@media '
                          .concat(s[2], ' {')
                          .concat(s[1], '}')),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = '@supports ('
                          .concat(s[4], ') {')
                          .concat(s[1], '}')),
                        (s[4] = o))
                      : (s[4] = ''.concat(o))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      978: (e) => {
        'use strict';
        e.exports = function (e) {
          return e[1];
        };
      },
      413: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r);
          }
        }
        function n(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf('[native code]')
                    );
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (e.bind.apply(e, i))();
                  return n && o(a, n.prototype), a;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, e)
              );
            }),
            n(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function o(e, t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            o(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        function a(e, t, n) {
          return (
            (t = c(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function c(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, 'string');
              if ('object' != e(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        var u = (function (n) {
          function c() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              a(
                (t = (function (t, n, o) {
                  return (
                    (n = i(n)),
                    (function (t, n) {
                      if (n && ('object' == e(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return e;
                      })(t);
                    })(
                      t,
                      r()
                        ? Reflect.construct(n, o || [], i(t).constructor)
                        : n.apply(t, o),
                    )
                  );
                })(this, c)),
                '_shadowRoot',
                null,
              ),
              a(t, '_style', null),
              a(t, '_needTitle', 'NEED SECTION TITLE'),
              (t._shadowRoot = t.attachShadow({ mode: 'open' })),
              (t._style = document.createElement('style')),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && o(e, t);
            })(c, n),
            (u = c),
            (s = [
              {
                key: 'observedAttributes',
                get: function () {
                  return ['title'];
                },
              },
            ]),
            (l = [
              {
                key: '_emptyContent',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'title',
                get: function () {
                  return this._needTitle;
                },
                set: function (e) {
                  this._needTitle = e;
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n      text-align: center;\n      font-size: large;\n      color: #2c5c68;\n      }\n      h2{\n      margin-bottom:0.5em\n      }\n    ';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyContent(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <div class="add-notes">\n        <h2>'.concat(
                        this._needTitle,
                        '</h2>\n        <slot></slot>\n    </div>',
                      ));
                },
              },
              {
                key: 'attributeChangedCallback',
                value: function (e, t, n) {
                  'title' === e && (this._needTitle = n), this.render();
                },
              },
            ]) && t(u.prototype, l),
            s && t(u, s),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            u
          );
          var u, l, s;
        })(n(HTMLElement));
        customElements.define('section-with-title', u);
      },
      260: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r);
          }
        }
        function n(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf('[native code]')
                    );
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (e.bind.apply(e, i))();
                  return n && o(a, n.prototype), a;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, e)
              );
            }),
            n(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function o(e, t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            o(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        function a(e, t, n) {
          return (
            (t = c(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function c(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, 'string');
              if ('object' != e(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        var u = (function (n) {
          function c() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              a(
                (t = (function (t, n, o) {
                  return (
                    (n = i(n)),
                    (function (t, n) {
                      if (n && ('object' == e(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return e;
                      })(t);
                    })(
                      t,
                      r()
                        ? Reflect.construct(n, o || [], i(t).constructor)
                        : n.apply(t, o),
                    )
                  );
                })(this, c)),
                '_style',
                null,
              ),
              a(t, '_shadowRoot', null),
              (t._shadowRoot = t.attachShadow({ mode: 'open' })),
              (t._style = document.createElement('style')),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && o(e, t);
            })(c, n),
            (u = c),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: '_emptyElement',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n    width: 100%;\n    color: #f7f7f7;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n    text-align: center;}\n    ';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyElement(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML += '\n    <h1>Notes App</h1>');
                },
              },
            ]) && t(u.prototype, l),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define('app-bar', u);
      },
      646: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r);
          }
        }
        function n(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf('[native code]')
                    );
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (e.bind.apply(e, i))();
                  return n && o(a, n.prototype), a;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, e)
              );
            }),
            n(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function o(e, t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            o(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        function a(e, t, n) {
          return (
            (t = c(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function c(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, 'string');
              if ('object' != e(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        var u = (function (n) {
          function c() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              a(
                (t = (function (t, n, o) {
                  return (
                    (n = i(n)),
                    (function (t, n) {
                      if (n && ('object' == e(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return e;
                      })(t);
                    })(
                      t,
                      r()
                        ? Reflect.construct(n, o || [], i(t).constructor)
                        : n.apply(t, o),
                    )
                  );
                })(this, c)),
                '_style',
                null,
              ),
              a(t, '_shadowRoot', null),
              (t._shadowRoot = t.attachShadow({ mode: 'open' })),
              (t._style = document.createElement('style')),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && o(e, t);
            })(c, n),
            (u = c),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: '_emptyElement',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n      width: 4px;\n      background-color: #3f7785;\n      min-height: 100%;\n      margin: 0 20px;\n    }';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyElement(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <div class="divider"></div>\n    ');
                },
              },
            ]) && t(u.prototype, l),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define('divider-bar', u);
      },
      654: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, c(r.key), r);
          }
        }
        function n(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (n = function (e) {
              if (
                null === e ||
                !(function (e) {
                  try {
                    return (
                      -1 !== Function.toString.call(e).indexOf('[native code]')
                    );
                  } catch (t) {
                    return 'function' == typeof e;
                  }
                })(e)
              )
                return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n);
              }
              function n() {
                return (function (e, t, n) {
                  if (r()) return Reflect.construct.apply(null, arguments);
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (e.bind.apply(e, i))();
                  return n && o(a, n.prototype), a;
                })(e, arguments, i(this).constructor);
              }
              return (
                (n.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, e)
              );
            }),
            n(e)
          );
        }
        function r() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (r = function () {
            return !!e;
          })();
        }
        function o(e, t) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            o(e, t)
          );
        }
        function i(e) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            i(e)
          );
        }
        function a(e, t, n) {
          return (
            (t = c(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function c(t) {
          var n = (function (t) {
            if ('object' != e(t) || !t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, 'string');
              if ('object' != e(r)) return r;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              );
            }
            return String(t);
          })(t);
          return 'symbol' == e(n) ? n : n + '';
        }
        var u = (function (n) {
          function c() {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              a(
                (t = (function (t, n, o) {
                  return (
                    (n = i(n)),
                    (function (t, n) {
                      if (n && ('object' == e(n) || 'function' == typeof n))
                        return n;
                      if (void 0 !== n)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined',
                        );
                      return (function (e) {
                        if (void 0 === e)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return e;
                      })(t);
                    })(
                      t,
                      r()
                        ? Reflect.construct(n, o || [], i(t).constructor)
                        : n.apply(t, o),
                    )
                  );
                })(this, c)),
                '_style',
                null,
              ),
              a(t, '_shadowRoot', null),
              (t._shadowRoot = t.attachShadow({ mode: 'open' })),
              (t._style = document.createElement('style')),
              t
            );
          }
          return (
            (function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && o(e, t);
            })(c, n),
            (u = c),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: '_emptyElement',
                value: function () {
                  this._shadowRoot.innerHTML = '';
                },
              },
              {
                key: '_updateStyle',
                value: function () {
                  this._style.textContent =
                    '\n    :host {\n      text-align: center;\n      color: #f7f7f7;\n      width: 100%;\n      }\n    ';
                },
              },
              {
                key: 'render',
                value: function () {
                  this._emptyElement(),
                    this._updateStyle(),
                    this._shadowRoot.appendChild(this._style),
                    (this._shadowRoot.innerHTML +=
                      '\n    <p>&copy; 2024 Notes App | Fahmy Anugrah</p>');
                },
              },
            ]) && t(u.prototype, l),
            Object.defineProperty(u, 'prototype', { writable: !1 }),
            u
          );
          var u, l;
        })(n(HTMLElement));
        customElements.define('footer-app', u);
      },
      83: (e, t, n) => {
        'use strict';
        n.d(t, { A: () => c });
        var r = n(978),
          o = n.n(r),
          i = n(267),
          a = n.n(i)()(o());
        a.push([
          e.id,
          '* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  flex: 1;\n}\n\nmain {\n  flex: 1;\n}\n\nheader,\nfooter {\n  background-color: #3f7785;\n}\n.form-group {\n  box-shadow: 1px 1px 10px 1px #3f7785;\n  border-radius: 10px;\n  max-width: 400px;\n  margin: 0 auto 1em;\n  padding: 2em;\n}\n.title,\n.body {\n  font-size: medium;\n  padding: 8px;\n  width: 90%;\n  border-radius: 5px;\n  border: 2px solid #2c5c68;\n  color: #2c5c68;\n  transition: box-shadow 0.2s ease-in-out;\n}\n\ninput:focus-visible,\ntextarea:focus-visible {\n  outline: none;\n  box-shadow: 1px 1px 10px 1px #3f7785;\n}\n\ninput:focus:invalid,\ntextarea:focus:invalid {\n  box-shadow: 1px 1px 10px 1px red;\n}\n\ntextarea {\n  height: 150px;\n  overflow-y: auto;\n}\n\ntextarea::-webkit-scrollbar {\n  width: 8px;\n}\n\ntextarea::-webkit-scrollbar-thumb {\n  background-color: #3f7785;\n  border-radius: 10px;\n}\n\ntextarea::-webkit-scrollbar-track {\n  background-color: #e0e0e0;\n}\n\ntextarea::-webkit-scrollbar-thumb:hover {\n  background-color: #2c5c68;\n}\n\n.validation-message {\n  margin: 0.2rem 0 10px;\n  opacity: 0;\n  color: red;\n  text-align: left;\n  padding: 5px 20px;\n  font-size: small;\n  transition: opacity 0.3s ease-in-out;\n}\n.validation-message.visible {\n  opacity: 1;\n}\nbutton {\n  border-radius: 10px;\n  background-color: #3f7785;\n  color: #f7f7f7;\n  padding: 10px 12px;\n  border: none;\n  transition: background-color 0.2s ease-in-out, transform 0.2s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: #2c5c68;\n}\n\nbutton:active {\n  transform: scale(0.98);\n  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);\n}\n\n.wrapper-notes {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 40px;\n  color: #2c5c68;\n  justify-items: center;\n  padding: 20px;\n}\n\n::placeholder {\n  font-style: italic;\n}\n\n.active-notes,\n.archived-notes {\n  width: 100%;\n}\n\n.active-notes-body,\n.archived-notes-body {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  justify-items: center;\n  margin-top: 20px;\n}\n\n.active-notes-head,\n.archived-notes-head,\n.note-card {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.active-notes-head,\n.archived-notes-head {\n  max-width: 600px;\n  background-color: #3f7785;\n  color: #f7f7f7;\n  margin: auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n\n.note-card {\n  background-color: #f7f7f7;\n  box-shadow: 1px 1px 10px 1px #3f7785;\n  width: 100%;\n  border: 1px solid #3f7785;\n  text-align: center;\n}\n\n.note-card h3 {\n  margin-bottom: 6px;\n}\n\n.note-card p {\n  min-height: 100px;\n  max-height: 100px;\n  margin-bottom: 6px;\n  text-align: left;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  padding-right: 5px;\n}\n\n.note-card p::-webkit-scrollbar {\n  width: 6px;\n}\n\n.note-card p::-webkit-scrollbar-thumb {\n  background-color: #3f7785;\n  border-radius: 10px;\n}\n\n.note-card p::-webkit-scrollbar-track {\n  background-color: #e0e0e0;\n}\n\n.note-card:hover {\n  transform: scale(1.02);\n  box-shadow: 1px 1px 15px 2px rgba(63, 119, 133, 0.5);\n}\n\n.button-date-container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 10px;\n}\n\n/* Media Query for mobile */\n@media (max-width: 768px) {\n  .wrapper-notes {\n    grid-template-columns: 1fr;\n  }\n\n  .divider {\n    display: none;\n  }\n\n  .active-notes-head,\n  .archived-notes-head {\n    font-size: 1.2em;\n    padding: 15px;\n    max-width: 80%;\n  }\n\n  .note-card {\n    width: 80%;\n  }\n\n  .active-notes-body,\n  .archived-notes-body {\n    grid-template-columns: 1fr;\n  }\n\n  .add-notes,\n  .note-card {\n    padding: 15px;\n    margin: 10px auto;\n  }\n\n  .add-notes h2,\n  .active-notes-head h2,\n  .archived-notes-head h2 {\n    font-size: 1.5em;\n  }\n}\n',
          '',
        ]);
        const c = a;
      },
      72: (e) => {
        'use strict';
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var u = e[c],
              l = r.base ? u[0] + r.base : u[0],
              s = i[l] || 0,
              d = ''.concat(l, ' ').concat(s);
            i[l] = s + 1;
            var f = n(d),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== f) t[f].references++, t[f].updater(p);
            else {
              var y = o(p, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: y, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = n(i[a]);
              t[c].references--;
            }
            for (var u = r(e, o), l = 0; l < i.length; l++) {
              var s = n(i[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            i = u;
          };
        };
      },
      659: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      540: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      56: (e, t, n) => {
        'use strict';
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      825: (e) => {
        'use strict';
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = '';
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'));
                var o = void 0 !== n.layer;
                o &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {',
                  )),
                  (r += n.css),
                  o && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}');
                var i = n.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */',
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      113: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0),
    (() => {
      'use strict';
      var e = n(72),
        t = n.n(e),
        r = n(825),
        o = n.n(r),
        i = n(659),
        a = n.n(i),
        c = n(56),
        u = n.n(c),
        l = n(540),
        s = n.n(l),
        d = n(113),
        f = n.n(d),
        p = n(83),
        y = {};
      function b(e) {
        return (
          (b =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          b(e)
        );
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function h(e) {
        var t = (function (e) {
          if ('object' != b(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, 'string');
            if ('object' != b(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return String(e);
        })(e);
        return 'symbol' == b(t) ? t : t + '';
      }
      (y.styleTagTransform = f()),
        (y.setAttributes = u()),
        (y.insert = a().bind(null, 'head')),
        (y.domAPI = o()),
        (y.insertStyleElement = s()),
        t()(p.A, y),
        p.A && p.A.locals && p.A.locals;
      var m = [
        {
          id: 'notes-jT-jjsyz61J8XKiI',
          title: 'Welcome to Notes, Dimas!',
          body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
          createdAt: '2022-07-28T10:03:12.594Z',
          archived: !1,
        },
        {
          id: 'notes-aB-cdefg12345',
          title: 'Meeting Agenda',
          body: 'Discuss project updates and assign tasks for the upcoming week.',
          createdAt: '2022-08-05T15:30:00.000Z',
          archived: !1,
        },
        {
          id: 'notes-XyZ-789012345',
          title: 'Shopping List',
          body: 'Milk, eggs, bread, fruits, and vegetables.',
          createdAt: '2022-08-10T08:45:23.120Z',
          archived: !1,
        },
        {
          id: 'notes-1a-2b3c4d5e6f',
          title: 'Personal Goals',
          body: 'Read two books per month, exercise three times a week, learn a new language.',
          createdAt: '2022-08-15T18:12:55.789Z',
          archived: !1,
        },
        {
          id: 'notes-LMN-456789',
          title: 'Recipe: Spaghetti Bolognese',
          body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
          createdAt: '2022-08-20T12:30:40.200Z',
          archived: !1,
        },
        {
          id: 'notes-QwErTyUiOp',
          title: 'Workout Routine',
          body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
          createdAt: '2022-08-25T09:15:17.890Z',
          archived: !1,
        },
        {
          id: 'notes-abcdef-987654',
          title: 'Book Recommendations',
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: '2022-09-01T14:20:05.321Z',
          archived: !1,
        },
        {
          id: 'notes-zyxwv-54321',
          title: 'Daily Reflections',
          body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
          createdAt: '2022-09-07T20:40:30.150Z',
          archived: !1,
        },
        {
          id: 'notes-poiuyt-987654',
          title: 'Travel Bucket List',
          body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
          createdAt: '2022-09-15T11:55:44.678Z',
          archived: !1,
        },
        {
          id: 'notes-asdfgh-123456',
          title: 'Coding Projects',
          body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
          createdAt: '2022-09-20T17:10:12.987Z',
          archived: !1,
        },
        {
          id: 'notes-5678-abcd-efgh',
          title: 'Project Deadline',
          body: 'Complete project tasks by the deadline on October 1st.',
          createdAt: '2022-09-28T14:00:00.000Z',
          archived: !1,
        },
        {
          id: 'notes-9876-wxyz-1234',
          title: 'Health Checkup',
          body: 'Schedule a routine health checkup with the doctor.',
          createdAt: '2022-10-05T09:30:45.600Z',
          archived: !1,
        },
        {
          id: 'notes-qwerty-8765-4321',
          title: 'Financial Goals',
          body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
          createdAt: '2022-10-12T12:15:30.890Z',
          archived: !1,
        },
        {
          id: 'notes-98765-54321-12345',
          title: 'Holiday Plans',
          body: 'Research and plan for the upcoming holiday destination.',
          createdAt: '2022-10-20T16:45:00.000Z',
          archived: !1,
        },
        {
          id: 'notes-1234-abcd-5678',
          title: 'Language Learning',
          body: 'Practice Spanish vocabulary for 30 minutes every day.',
          createdAt: '2022-10-28T08:00:20.120Z',
          archived: !1,
        },
      ];
      const g = (function () {
        return (
          (e = function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e);
          }),
          (t = [
            {
              key: 'getAll',
              value: function () {
                return m;
              },
            },
            {
              key: 'addNote',
              value: function (e) {
                m.push(e);
              },
            },
          ]),
          null && v(e.prototype, null),
          t && v(e, t),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
        var e, t;
      })();
      function w(e, t) {
        var n =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ('string' == typeof e) return x(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? x(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          a = !0,
          c = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (a = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n(260),
        n(654),
        n(646),
        n(413),
        document.addEventListener('DOMContentLoaded', function () {
          (function () {
            var e = 'render-notes';
            function t(t) {
              var o = document.createElement('div');
              o.classList.add('note-card'), o.setAttribute('id', t.id);
              var i = document.createElement('h3');
              i.innerText = t.title;
              var a = document.createElement('p');
              a.innerText = t.body;
              var c = document.createElement('div');
              c.classList.add('button-date-container');
              var u = document.createElement('h5');
              u.classList.add('date-create');
              var l = t.createdAt.split('T')[0];
              u.innerText = l;
              var s = document.createElement('button');
              s.classList.add('button-change-status'),
                (s.innerText = t.archived ? 'Active' : 'Archived'),
                s.addEventListener('click', function () {
                  var r;
                  0 == t.archived
                    ? null != (r = n(t.id)) &&
                      ((r.archived = !0), document.dispatchEvent(new Event(e)))
                    : (function (t) {
                        var r = n(t);
                        null != r &&
                          ((r.archived = !1),
                          document.dispatchEvent(new Event(e)));
                      })(t.id);
                });
              var d = document.createElement('i');
              d.classList.add('fa-regular', 'fa-pen-to-square');
              var f = document.createElement('button');
              f.classList.add('button-edit'),
                f.appendChild(d),
                f.addEventListener('click', function () {
                  var e, o;
                  null != (o = n((e = t.id))) &&
                    ((document.getElementById('title').value = o.title),
                    (document.getElementById('body').value = o.body),
                    r(e));
                });
              var p = document.createElement('i');
              p.classList.add('fa-solid', 'fa-trash');
              var y = document.createElement('button');
              return (
                y.classList.add('button-delete'),
                y.appendChild(p),
                y.addEventListener('click', function () {
                  r(t.id);
                }),
                c.append(u, s, f, y),
                o.append(i, a, c),
                o
              );
            }
            function n(e) {
              var t,
                n = w(g.getAll());
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value;
                  if (r.id === e) return r;
                }
              } catch (e) {
                n.e(e);
              } finally {
                n.f();
              }
            }
            function r(t) {
              var n = (function (e) {
                for (var t in g.getAll()) if (g.getAll()[t].id === e) return t;
              })(t);
              -1 != n &&
                (g.getAll().splice(n, 1), document.dispatchEvent(new Event(e)));
            }
            document
              .querySelector('form')
              .addEventListener('submit', function (t) {
                var n, r, o, i, a;
                t.preventDefault(),
                  (n = document.getElementById('title').value),
                  (r = document.getElementById('body').value),
                  (i = Math.random().toString(36).substring(2, 4)),
                  (a = Math.random().toString(36).substring(2, 11)),
                  (o = {
                    id: 'notes-'.concat(i, '-').concat(a),
                    title: n,
                    body: r,
                    createdAt: new Date().toISOString(),
                    archived: !1,
                  }),
                  (document.getElementById('title').value = ''),
                  (document.getElementById('body').value = ''),
                  g.addNote(o),
                  document.dispatchEvent(new Event(e));
              }),
              document.addEventListener(e, function () {
                var e = document.getElementById('active-notes-body'),
                  n = document.getElementById('archived-notes-body');
                (e.innerHTML = ''), (n.innerHTML = '');
                var r,
                  o = w(g.getAll());
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var i = r.value,
                      a = t(i);
                    i.archived ? n.append(a) : e.append(a);
                  }
                } catch (e) {
                  o.e(e);
                } finally {
                  o.f();
                }
              });
          })(),
            (function () {
              var e = document.querySelector('form'),
                t = e.elements.title,
                n = e.elements.body;
              e.addEventListener('submit', function (e) {
                return e.preventDefault();
              });
              var r = function (e, t) {
                  e.setCustomValidity('');
                  var n = document.getElementById(
                    e.getAttribute('aria-describedby'),
                  );
                  e.validity.valueMissing
                    ? e.setCustomValidity('This field is required.')
                    : '' === e.value.trim()
                      ? e.setCustomValidity(
                          'Input cannot be empty or just spaces.',
                        )
                      : e.validity.patternMismatch && e.setCustomValidity(t),
                    (n.innerText = e.validationMessage),
                    e.validationMessage
                      ? n.classList.add('visible')
                      : n.classList.remove('visible');
                },
                o = function (e, t) {
                  e.addEventListener('input', function () {
                    return r(e, t);
                  }),
                    e.addEventListener('blur', function () {
                      r(e, t);
                    });
                };
              o(t, ''), o(n, '');
            })(),
            document.dispatchEvent(new Event('render-notes'));
        });
    })();
})();

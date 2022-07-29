var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/_snowpack/pkg/common/index-3d8027a6.js
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element");
var n = Symbol.for("react.portal");
var p = Symbol.for("react.fragment");
var q = Symbol.for("react.strict_mode");
var r = Symbol.for("react.profiler");
var t = Symbol.for("react.provider");
var u = Symbol.for("react.context");
var v = Symbol.for("react.forward_ref");
var w = Symbol.for("react.suspense");
var x = Symbol.for("react.memo");
var y = Symbol.for("react.lazy");
var z = Symbol.iterator;
function A(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = z && a[z] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var B = {isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
}};
var C = Object.assign;
var D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray;
var J = Object.prototype.hasOwnProperty;
var K = {current: null};
var L = {key: true, ref: true, __self: true, __source: true};
function M(a, b, e) {
  var d, c = {}, k = null, h = null;
  if (b != null)
    for (d in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (g === 1)
    c.children = e;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      c[d] === void 0 && (c[d] = g[d]);
  return {$$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current};
}
function N(a, b) {
  return {$$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
}
function O(a) {
  return typeof a === "object" && a !== null && a.$$typeof === l;
}
function escape(a) {
  var b = {"=": "=0", ":": "=2"};
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h = false;
  if (a === null)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = d === "" ? "." : d + ":";
  if (I(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
  else if (f = A(a), typeof f === "function")
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  else if (k === "object")
    throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (a == null)
    return a;
  var d = [], c = 0;
  R(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (a._status === 0 || a._status === -1)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (a._status === 0 || a._status === -1)
        a._status = 2, a._result = b2;
    });
    a._status === -1 && (a._status = 0, a._result = b);
  }
  if (a._status === 1)
    return a._result.default;
  throw a._result;
}
var U = {current: null};
var V = {transition: null};
var W = {ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K};
var Children = {map: S, forEach: function(a, b, e) {
  S(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
}};
var Component = E;
var Fragment = p;
var Profiler = r;
var PureComponent = G;
var StrictMode = q;
var Suspense = w;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
var cloneElement = function(a, b, e) {
  if (a === null || a === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h = K.current);
    b.key !== void 0 && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    d.children = e;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    d.children = g;
  }
  return {$$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h};
};
var createContext = function(a) {
  a = {$$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null};
  a.Provider = {$$typeof: t, _context: a};
  return a.Consumer = a;
};
var createElement = M;
var createFactory = function(a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
var createRef = function() {
  return {current: null};
};
var forwardRef = function(a) {
  return {$$typeof: v, render: a};
};
var isValidElement = O;
var lazy = function(a) {
  return {$$typeof: y, _payload: {_status: -1, _result: a}, _init: T};
};
var memo = function(a, b) {
  return {$$typeof: x, type: a, compare: b === void 0 ? null : b};
};
var startTransition = function(a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
var unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
var useCallback = function(a, b) {
  return U.current.useCallback(a, b);
};
var useContext = function(a) {
  return U.current.useContext(a);
};
var useDebugValue = function() {
};
var useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
var useEffect = function(a, b) {
  return U.current.useEffect(a, b);
};
var useId = function() {
  return U.current.useId();
};
var useImperativeHandle = function(a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
var useInsertionEffect = function(a, b) {
  return U.current.useInsertionEffect(a, b);
};
var useLayoutEffect = function(a, b) {
  return U.current.useLayoutEffect(a, b);
};
var useMemo = function(a, b) {
  return U.current.useMemo(a, b);
};
var useReducer = function(a, b, e) {
  return U.current.useReducer(a, b, e);
};
var useRef = function(a) {
  return U.current.useRef(a);
};
var useState = function(a) {
  return U.current.useState(a);
};
var useSyncExternalStore = function(a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
var useTransition = function() {
  return U.current.useTransition();
};
var version = "18.2.0";
var react_production_min = {
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
};
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// build/_snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  function f(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return a.length === 0 ? null : a[0];
  }
  function k(a) {
    if (a.length === 0)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m = 2 * (d + 1) - 1, C3 = a[m], n2 = m + 1, x2 = a[n2];
          if (0 > g(C3, c))
            n2 < e && 0 > g(x2, C3) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C3, a[m] = c, d = m);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q2 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v3 = null, y2 = 3, z3 = false, A3 = false, B3 = false, D3 = typeof setTimeout === "function" ? setTimeout : null, E3 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G3(a) {
    for (var b = h(t2); b !== null; ) {
      if (b.callback === null)
        k(t2);
      else if (b.startTime <= a)
        k(t2), b.sortIndex = b.expirationTime, f(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H3(a) {
    B3 = false;
    G3(a);
    if (!A3)
      if (h(r2) !== null)
        A3 = true, I3(J2);
      else {
        var b = h(t2);
        b !== null && K3(H3, b.startTime - a);
      }
  }
  function J2(a, b) {
    A3 = false;
    B3 && (B3 = false, E3(L3), L3 = -1);
    z3 = true;
    var c = y2;
    try {
      G3(b);
      for (v3 = h(r2); v3 !== null && (!(v3.expirationTime > b) || a && !M3()); ) {
        var d = v3.callback;
        if (typeof d === "function") {
          v3.callback = null;
          y2 = v3.priorityLevel;
          var e = d(v3.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? v3.callback = e : v3 === h(r2) && k(r2);
          G3(b);
        } else
          k(r2);
        v3 = h(r2);
      }
      if (v3 !== null)
        var w2 = true;
      else {
        var m = h(t2);
        m !== null && K3(H3, m.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v3 = null, y2 = c, z3 = false;
    }
  }
  var N3 = false, O3 = null, L3 = -1, P3 = 5, Q3 = -1;
  function M3() {
    return exports.unstable_now() - Q3 < P3 ? false : true;
  }
  function R3() {
    if (O3 !== null) {
      var a = exports.unstable_now();
      Q3 = a;
      var b = true;
      try {
        b = O3(true, a);
      } finally {
        b ? S3() : (N3 = false, O3 = null);
      }
    } else
      N3 = false;
  }
  var S3;
  if (typeof F2 === "function")
    S3 = function() {
      F2(R3);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T3 = new MessageChannel(), U3 = T3.port2;
    T3.port1.onmessage = R3;
    S3 = function() {
      U3.postMessage(null);
    };
  } else
    S3 = function() {
      D3(R3, 0);
    };
  function I3(a) {
    O3 = a;
    N3 || (N3 = true, S3());
  }
  function K3(a, b) {
    L3 = D3(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A3 || z3 || (A3 = true, I3(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P3 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = {id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1};
    c > d ? (a.sortIndex = c, f(t2, a), h(r2) === null && a === h(t2) && (B3 ? (E3(L3), L3 = -1) : B3 = true, K3(H3, c - d))) : (a.sortIndex = e, f(r2, a), A3 || z3 || (A3 = true, I3(J2)));
    return a;
  };
  exports.unstable_shouldYield = M3;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function p2(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set();
var ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ja = Object.prototype.hasOwnProperty;
var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var la = {};
var ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (b === null || typeof b === "undefined" || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v2(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z2[a] = new v2(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z2[b] = new v2(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z2[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z2[a] = new v2(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z2[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z2[a] = new v2(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z2[a] = new v2(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z2[a] = new v2(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z2[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z2[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
});
z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z2[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z2.hasOwnProperty(b) ? z2[b] : null;
  if (e !== null ? e.type !== 0 : d || !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N")
    qa(b, c, e, d) && (c = null), d || e === null ? oa(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var va = Symbol.for("react.element");
var wa = Symbol.for("react.portal");
var ya = Symbol.for("react.fragment");
var za = Symbol.for("react.strict_mode");
var Aa = Symbol.for("react.profiler");
var Ba = Symbol.for("react.provider");
var Ca = Symbol.for("react.context");
var Da = Symbol.for("react.forward_ref");
var Ea = Symbol.for("react.suspense");
var Fa = Symbol.for("react.suspense_list");
var Ga = Symbol.for("react.memo");
var Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var A2 = Object.assign;
var La;
function Ma(a) {
  if (La === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && typeof l2.stack === "string") {
      for (var e = l2.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, b !== null ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b === "function")
        return b.displayName || b.name || null;
      if (typeof b === "string")
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, {configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    }});
    Object.defineProperty(a, b, {enumerable: c.enumerable});
    return {getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    }};
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A2({}, b, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked});
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = {initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null};
}
function ab(a, b) {
  b = b.checked;
  b != null && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function cb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(p2(91));
  return A2({}, b, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(p2(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p2(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = {initialValue: Sa(c)};
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? kb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var mb;
var nb = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = rb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A2({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function ub(a, b) {
  if (b) {
    if (tb[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(p2(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(p2(60));
      if (typeof b.dangerouslySetInnerHTML !== "object" || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p2(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(p2(62));
  }
}
function vb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(p2(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, zb !== null || Ab !== null)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(p2(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    Mb = {};
    Object.defineProperty(Mb, "passive", {get: function() {
      Lb = true;
    }});
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
var Mb;
function Nb(a, b, c, d, e, f, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m) {
    this.onError(m);
  }
}
var Ob = false;
var Pb = null;
var Qb = false;
var Rb = null;
var Sb = {onError: function(a) {
  Ob = true;
  Pb = a;
}};
function Tb(a, b, c, d, e, f, g, h, k) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 4098) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function Wb(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p2(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (b === null)
      throw Error(p2(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return Xb(e), a;
        if (f === d)
          return Xb(e), b;
        f = f.sibling;
      }
      throw Error(p2(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p2(190));
  }
  if (c.tag !== 3)
    throw Error(p2(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return a !== null ? $b(a) : null;
}
function $b(a) {
  if (a.tag === 5 || a.tag === 6)
    return a;
  for (a = a.child; a !== null; ) {
    var b = $b(a);
    if (b !== null)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = scheduler.unstable_scheduleCallback;
var bc = scheduler.unstable_cancelCallback;
var cc = scheduler.unstable_shouldYield;
var dc = scheduler.unstable_requestPaint;
var B2 = scheduler.unstable_now;
var ec = scheduler.unstable_getCurrentPriorityLevel;
var fc = scheduler.unstable_ImmediatePriority;
var gc = scheduler.unstable_UserBlockingPriority;
var hc = scheduler.unstable_NormalPriority;
var ic = scheduler.unstable_LowPriority;
var jc = scheduler.unstable_IdlePriority;
var kc = null;
var lc = null;
function mc(a) {
  if (lc && typeof lc.onCommitFiberRoot === "function")
    try {
      lc.onCommitFiberRoot(kc, a, void 0, (a.current.flags & 128) === 128);
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc;
var pc = Math.log;
var qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return a === 0 ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64;
var sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return 0;
  var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
  if (g !== 0) {
    var h = g & ~e;
    h !== 0 ? d = tc(h) : (f &= g, f !== 0 && (d = tc(f)));
  } else
    g = c & ~e, g !== 0 ? d = tc(g) : f !== 0 && (d = tc(f));
  if (d === 0)
    return 0;
  if (b !== 0 && b !== d && (b & e) === 0 && (e = d & -d, f = b & -b, e >= f || e === 16 && (f & 4194240) !== 0))
    return b;
  (d & 4) !== 0 && (d |= c & 16);
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
    var g = 31 - oc(f), h = 1 << g, k = e[g];
    if (k === -1) {
      if ((h & c) === 0 || (h & d) !== 0)
        e[g] = vc(h, b);
    } else
      k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  (rc & 4194240) === 0 && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  b !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C2 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Ec;
var Fc;
var Gc;
var Hc;
var Ic;
var Jc = false;
var Kc = [];
var Lc = null;
var Mc = null;
var Nc = null;
var Oc = new Map();
var Pc = new Map();
var Qc = [];
var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = {blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e]}, b !== null && (b = Cb(b), b !== null && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (b !== null) {
    var c = Vb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = Wb(c), b !== null) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (b === 3 && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c === null) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), b !== null && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  Lc !== null && Xc(Lc) && (Lc = null);
  Mc !== null && Xc(Mc) && (Mc = null);
  Nc !== null && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  Lc !== null && ad(Lc, a);
  Mc !== null && ad(Mc, a);
  Nc !== null && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], c.blockedOn === null); )
    Vc(c), c.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig;
var dd = true;
function ed(a, b, c, d) {
  var e = C2, f = cd.transition;
  cd.transition = null;
  try {
    C2 = 1, fd(a, b, c, d);
  } finally {
    C2 = e, cd.transition = f;
  }
}
function gd(a, b, c, d) {
  var e = C2, f = cd.transition;
  cd.transition = null;
  try {
    C2 = 4, fd(a, b, c, d);
  } finally {
    C2 = e, cd.transition = f;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (e === null)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; e !== null; ) {
        var f = Cb(e);
        f !== null && Ec(f);
        f = Yc(a, b, c, d);
        f === null && hd(a, b, d, id, c);
        if (f === e)
          break;
        e = f;
      }
      e !== null && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (a !== null)
    if (b = Vb(a), b === null)
      a = null;
    else if (c = b.tag, c === 13) {
      a = Wb(b);
      if (a !== null)
        return a;
      a = null;
    } else if (c === 3) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return b.tag === 3 ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A2(b.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = A2({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = A2({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = A2({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = A2({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = A2({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = A2({}, sd, {clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = A2({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A2({}, ud, {key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = A2({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = A2({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = A2({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = A2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = ia && "CompositionEvent" in window;
var be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be;
var de = ia && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({event: c, listeners: b}));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (ia) {
  if (ia) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return {node: c, offset: b - a};
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (d !== null && Ne(c)) {
      if (b = d.start, a = d.end, a === void 0 && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f = Math.min(d.start, e);
        d = d.end === void 0 ? f : Math.min(d.end, e);
        !a.extend && f > d && (e = d, d = f, f = e);
        e = Ke(c, f);
        var g = Ke(c, d);
        e && g && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      a.nodeType === 1 && b.push({element: a, left: a.scrollLeft, top: a.scrollTop});
    typeof c.focus === "function" && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {start: d.selectionStart, end: d.selectionEnd} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({event: b, listeners: d}), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = {animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd")};
var Xe = {};
var Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend");
var af = Ze("animationiteration");
var bf = Ze("animationstart");
var cf = Ze("transitionend");
var df = new Map();
var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
var hf;
var jf;
var kf;
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f = k;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D2(a, b) {
  var c = b[of];
  c === void 0 && (c = b[of] = new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      b2 !== "selectionchange" && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = a.nodeType === 9 ? a : a.ownerDocument;
    b === null || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, {capture: true, passive: e}) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {passive: e}) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = Wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (h2 !== void 0) {
        var k2 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k2 = Hd;
            break;
          case cf:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var t2 = (b & 4) !== 0, J2 = !t2 && a === "scroll", x2 = t2 ? h2 !== null ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; w2 !== null; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          u2.tag === 5 && F2 !== null && (u2 = F2, x2 !== null && (F2 = Kb(w2, x2), F2 != null && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k2(h2, n2, null, c, e2), g2.push({event: h2, listeners: t2}));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (n2 = c.relatedTarget || c.toElement, k2 = d2, n2 = n2 ? Wc(n2) : null, n2 !== null && (J2 = Vb(n2), n2 !== J2 || n2.tag !== 5 && n2.tag !== 6))
              n2 = null;
          } else
            k2 = null, n2 = d2;
          if (k2 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = k2 == null ? h2 : ue(k2);
            u2 = n2 == null ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k2, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k2 && n2)
              b: {
                t2 = k2;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || x2 !== null && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            k2 !== null && wf(g2, h2, k2, t2, false);
            n2 !== null && J2 !== null && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        a === "focusout" && (xa = h2._wrapperState) && xa.controlled && h2.type === "number" && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || xa.contentEditable === "true")
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (ba = "onCompositionStart");
      ba && (de && c.locale !== "ko" && (ie || ba !== "onCompositionStart" ? ba === "onCompositionEnd" && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({event: ba, listeners: xa}), $a ? ba.data = $a : ($a = he(c), $a !== null && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({event: e2, listeners: d2}), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return {instance: a, listener: b, currentTarget: c};
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Kb(a, c), f != null && d.unshift(tf(a, f, e)), f = Kb(a, b), f != null && d.push(tf(a, f, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l2 = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l2 !== null && (h = l2, e ? (k = Kb(c, f), k != null && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), k != null && g.push(tf(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({event: b, listeners: g});
}
var xf = /\r\n?/g;
var yf = /\u0000|\uFFFD/g;
function zf(a) {
  return (typeof a === "string" ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p2(425));
}
function Bf() {
}
var Cf = null;
var Df = null;
function Ef(a, b) {
  return a === "textarea" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var Ff = typeof setTimeout === "function" ? setTimeout : void 0;
var Gf = typeof clearTimeout === "function" ? clearTimeout : void 0;
var Hf = typeof Promise === "function" ? Promise : void 0;
var Jf = typeof queueMicrotask === "function" ? queueMicrotask : typeof Hf !== "undefined" ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && e.nodeType === 8)
      if (c = e.data, c === "/$") {
        if (d === 0) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        c !== "$" && c !== "$?" && c !== "$!" || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
    if (b === 8) {
      b = a.data;
      if (b === "$" || b === "$!" || b === "$?")
        break;
      if (b === "/$")
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2);
var Of = "__reactFiber$" + Nf;
var Pf = "__reactProps$" + Nf;
var uf = "__reactContainer$" + Nf;
var of = "__reactEvents$" + Nf;
var Qf = "__reactListeners$" + Nf;
var Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = Mf(a); a !== null; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(p2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [];
var Tf = -1;
function Uf(a) {
  return {current: a};
}
function E2(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G2(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {};
var H2 = Uf(Vf);
var Wf = Uf(false);
var Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function $f() {
  E2(Wf);
  E2(H2);
}
function ag(a, b, c) {
  if (H2.current !== Vf)
    throw Error(p2(168));
  G2(H2, b);
  G2(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p2(108, Ra(a) || "Unknown", e));
  return A2({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H2.current;
  G2(H2, a);
  G2(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p2(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H2), G2(H2, a)) : E2(Wf);
  G2(Wf, c);
}
var eg = null;
var fg = false;
var gg = false;
function hg(a) {
  eg === null ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && eg !== null) {
    gg = true;
    var a = 0, b = C2;
    try {
      var c = eg;
      for (C2 = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (d !== null);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw eg !== null && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C2 = b, gg = false;
    }
  }
  return null;
}
var kg = [];
var lg = 0;
var mg = null;
var ng = 0;
var og = [];
var pg = 0;
var qg = null;
var rg = 1;
var sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - oc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f + a;
  } else
    rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
  a.return !== null && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null;
var yg = null;
var I2 = false;
var zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  b === null ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = b.nodeType !== 8 ? null : b, b !== null ? (c = qg !== null ? {id: rg, overflow: sg} : null, a.memoizedState = {dehydrated: b, treeContext: c, retryLane: 1073741824}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
}
function Eg(a) {
  if (I2) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p2(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p2(418));
      a.flags = a.flags & -4097 | 2;
      I2 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I2)
    return Fg(a), I2 = true, false;
  var b;
  (b = a.tag !== 3) && !(b = a.tag !== 5) && (b = a.type, b = b !== "head" && b !== "body" && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p2(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(p2(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I2 = false;
}
function Jg(a) {
  zg === null ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A2({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null);
var Ng = null;
var Og = null;
var Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E2(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; a !== null; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, d !== null && (d.childLanes |= b)) : d !== null && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = {context: a, memoizedValue: b, next: null}, Og === null) {
      if (Ng === null)
        throw Error(p2(308));
      Og = a;
      Ng.dependencies = {lanes: 0, firstContext: a};
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  Wg === null ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  e === null ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
}
function ch(a, b) {
  return {eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null};
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (d === null)
    return null;
  d = d.shared;
  if ((K2 & 2) !== 0) {
    var e = d.pending;
    e === null ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  e === null ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (b !== null && (b = b.shared, (c & 4194240) !== 0)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = {eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null};
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = {baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects};
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l2 = k.next;
    k.next = null;
    g === null ? f = l2 : g.next = l2;
    g = k;
    var m = a.alternate;
    m !== null && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (h === null ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k));
  }
  if (f !== null) {
    var q2 = e.baseState;
    g = 0;
    m = l2 = k = null;
    h = f;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        m !== null && (m = m.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if (typeof n2 === "function") {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = typeof n2 === "function" ? n2.call(y2, q2, r2) : n2;
              if (r2 === null || r2 === void 0)
                break a;
              q2 = A2({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        h.callback !== null && h.lane !== 0 && (a.flags |= 64, r2 = e.effects, r2 === null ? e.effects = [h] : r2.push(h));
      } else
        y2 = {eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null}, m === null ? (l2 = m = y2, k = q2) : m = m.next = y2, g |= r2;
      h = h.next;
      if (h === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    m === null && (k = q2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m;
    b = e.shared.interleaved;
    if (b !== null) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      f === null && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(p2(191, e));
        e.call(d);
      }
    }
}
var jh = new react.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : A2({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var nh = {isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L2(), e = lh(a), f = ch(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  b = dh(a, f, e);
  b !== null && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L2(), e = lh(a), f = ch(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  b = dh(a, f, e);
  b !== null && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L2(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  b = dh(a, e, d);
  b !== null && (mh(b, a, d, c), eh(b, a, d));
}};
function oh(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = Vg(f) : (e = Zf(b) ? Xf : H2.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Yf(a, e) : Vf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = Vg(f) : (f = Zf(b) ? Xf : H2.current, e.context = Yf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (kh(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(p2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p2(147, a));
      var e = d, f = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === f)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        a2 === null ? delete b2[f] : b2[f] = a2;
      };
      b._stringRef = f;
      return b;
    }
    if (typeof a !== "string")
      throw Error(p2(284));
    if (!c._owner)
      throw Error(p2(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      d2 === null ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    var f2 = c2.type;
    if (f2 === ya)
      return m(a2, b2, c2.props.children, d2, c2.key);
    if (b2 !== null && (b2.elementType === f2 || typeof f2 === "object" && f2 !== null && f2.$$typeof === Ha && uh(f2) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Ah(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if (typeof b2 === "string" && b2 !== "" || typeof b2 === "number")
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(a2, b2, e2(c2._payload), d2);
      }
      if (eb(c2) || Ka(c2))
        return e2 !== null ? null : m(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, k(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f2 = d2._init;
          return y2(a2, b2, c2, f2(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k2) {
    for (var l3 = null, m2 = null, u2 = g2, w2 = g2 = 0, x2 = null; u2 !== null && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k2);
      if (n3 === null) {
        u2 === null && (u2 = x2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g2 = f(n3, g2, w2);
      m2 === null ? l3 = n3 : m2.sibling = n3;
      m2 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I2 && tg(e2, w2), l3;
    if (u2 === null) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k2), u2 !== null && (g2 = f(u2, g2, w2), m2 === null ? l3 = u2 : m2.sibling = u2, m2 = u2);
      I2 && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k2), x2 !== null && (a && x2.alternate !== null && u2.delete(x2.key === null ? w2 : x2.key), g2 = f(x2, g2, w2), m2 === null ? l3 = x2 : m2.sibling = x2, m2 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I2 && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k2) {
    var l3 = Ka(h2);
    if (typeof l3 !== "function")
      throw Error(p2(150));
    h2 = l3.call(h2);
    if (h2 == null)
      throw Error(p2(151));
    for (var u2 = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); m2 !== null && !n3.done; w2++, n3 = h2.next()) {
      m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
      var t3 = r2(e2, m2, n3.value, k2);
      if (t3 === null) {
        m2 === null && (m2 = x2);
        break;
      }
      a && m2 && t3.alternate === null && b(e2, m2);
      g2 = f(t3, g2, w2);
      u2 === null ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m2 = x2;
    }
    if (n3.done)
      return c(e2, m2), I2 && tg(e2, w2), l3;
    if (m2 === null) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k2), n3 !== null && (g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I2 && tg(e2, w2);
      return l3;
    }
    for (m2 = d(e2, m2); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m2, e2, w2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && m2.delete(n3.key === null ? w2 : n3.key), g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m2.forEach(function(a2) {
      return b(e2, a2);
    });
    I2 && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f2, h2) {
    typeof f2 === "object" && f2 !== null && f2.type === ya && f2.key === null && (f2 = f2.props.children);
    if (typeof f2 === "object" && f2 !== null) {
      switch (f2.$$typeof) {
        case va:
          a: {
            for (var k2 = f2.key, l3 = d2; l3 !== null; ) {
              if (l3.key === k2) {
                k2 = f2.type;
                if (k2 === ya) {
                  if (l3.tag === 7) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f2.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k2 || typeof k2 === "object" && k2 !== null && k2.$$typeof === Ha && uh(k2) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f2.props);
                  d2.ref = sh(a2, l3, f2);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f2.type === ya ? (d2 = Ah(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = yh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f2.key; d2 !== null; ) {
              if (d2.key === l3)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f2._init, J2(a2, d2, l3(f2._payload), h2);
      }
      if (eb(f2))
        return n2(a2, d2, f2, h2);
      if (Ka(f2))
        return t2(a2, d2, f2, h2);
      th(a2, f2);
    }
    return typeof f2 === "string" && f2 !== "" || typeof f2 === "number" ? (f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true);
var Ch = vh(false);
var Dh = {};
var Eh = Uf(Dh);
var Fh = Uf(Dh);
var Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p2(174));
  return a;
}
function Ih(a, b) {
  G2(Gh, b);
  G2(Fh, a);
  G2(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E2(Eh);
  G2(Eh, b);
}
function Jh() {
  E2(Eh);
  E2(Fh);
  E2(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G2(Fh, a), G2(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E2(Eh), E2(Fh));
}
var M2 = Uf(0);
function Mh(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 128) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher;
var Qh = ua.ReactCurrentBatchConfig;
var Rh = 0;
var N2 = null;
var O2 = null;
var P2 = null;
var Sh = false;
var Th = false;
var Uh = 0;
var Vh = 0;
function Q2() {
  throw Error(p2(321));
}
function Wh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f) {
  Rh = f;
  N2 = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = a === null || a.memoizedState === null ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f)
        throw Error(p2(301));
      f += 1;
      P2 = O2 = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = O2 !== null && O2.next !== null;
  Rh = 0;
  P2 = O2 = N2 = null;
  Sh = false;
  if (b)
    throw Error(p2(300));
  return a;
}
function bi() {
  var a = Uh !== 0;
  Uh = 0;
  return a;
}
function ci() {
  var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  P2 === null ? N2.memoizedState = P2 = a : P2 = P2.next = a;
  return P2;
}
function di() {
  if (O2 === null) {
    var a = N2.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = O2.next;
  var b = P2 === null ? N2.memoizedState : P2.next;
  if (b !== null)
    P2 = b, O2 = a;
  else {
    if (a === null)
      throw Error(p2(310));
    O2 = a;
    a = {memoizedState: O2.memoizedState, baseState: O2.baseState, baseQueue: O2.baseQueue, queue: O2.queue, next: null};
    P2 === null ? N2.memoizedState = P2 = a : P2 = P2.next = a;
  }
  return P2;
}
function ei(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (c === null)
    throw Error(p2(311));
  c.lastRenderedReducer = a;
  var d = O2, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    f = e.next;
    d = d.baseState;
    var h = g = null, k = null, l2 = f;
    do {
      var m = l2.lane;
      if ((Rh & m) === m)
        k !== null && (k = k.next = {lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null}), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k === null ? (h = k = q2, g = d) : k = k.next = q2;
        N2.lanes |= m;
        hh |= m;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f);
    k === null ? g = d : k.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (a !== null) {
    e = a;
    do
      f = e.lane, N2.lanes |= f, hh |= f, e = e.next;
    while (e !== a);
  } else
    e === null && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (c === null)
    throw Error(p2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (Ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function hi() {
}
function ii(a, b) {
  var c = N2, d = di(), e = b(), f = !He(d.memoizedState, e);
  f && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || P2 !== null && P2.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (R2 === null)
      throw Error(p2(349));
    (Rh & 30) !== 0 || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = {getSnapshot: b, value: c};
  b = N2.updateQueue;
  b === null ? (b = {lastEffect: null, stores: null}, N2.updateQueue = b, b.stores = [a]) : (c = b.stores, c === null ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  b !== null && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a};
  b.queue = a;
  a = a.dispatch = ri.bind(null, N2, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = {tag: a, create: b, destroy: c, deps: d, next: null};
  b = N2.updateQueue;
  b === null ? (b = {lastEffect: null, stores: null}, N2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N2.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, d === void 0 ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (O2 !== null) {
    var g = O2.memoizedState;
    f = g.destroy;
    if (d !== null && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f, d);
      return;
    }
  }
  N2.flags |= a;
  e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if ((Rh & 21) === 0)
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N2.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C2;
  C2 = c !== 0 && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C2 = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = {lane: d, action: c, hasEagerState: false, eagerState: null, next: null};
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), c !== null) {
    var e = L2();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = {lane: d, action: c, hasEagerState: false, eagerState: null, next: null};
  if (Hi(a))
    Ii(b, e);
  else {
    var f = a.alternate;
    if (a.lanes === 0 && (f === null || f.lanes === 0) && (f = b.lastRenderedReducer, f !== null))
      try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          k === null ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    c !== null && (e = L2(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N2 || b !== null && b === N2;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  c === null ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if ((c & 4194240) !== 0) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = {readContext: Vg, useCallback: Q2, useContext: Q2, useEffect: Q2, useImperativeHandle: Q2, useInsertionEffect: Q2, useLayoutEffect: Q2, useMemo: Q2, useReducer: Q2, useRef: Q2, useState: Q2, useDebugValue: Q2, useDeferredValue: Q2, useTransition: Q2, useMutableSource: Q2, useSyncExternalStore: Q2, useId: Q2, unstable_isNewReconciler: false};
var Yh = {readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return ti(4194308, 4, yi.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b};
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N2, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = {current: a};
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N2, e = ci();
  if (I2) {
    if (c === void 0)
      throw Error(p2(407));
    c = c();
  } else {
    c = b();
    if (R2 === null)
      throw Error(p2(349));
    (Rh & 30) !== 0 || ni(d, b, c);
  }
  e.memoizedState = c;
  var f = {value: c, getSnapshot: b};
  e.queue = f;
  vi(ki.bind(null, d, f, a), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R2.identifierPrefix;
  if (I2) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false};
var Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O2.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
};
var $h = {readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return O2 === null ? b.memoizedState = a : Di(b, O2.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false};
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {value: a, source: b, stack: e, digest: null};
}
function Li(a, b, c) {
  return {value: a, source: null, stack: c != null ? c : null, digest: b != null ? b : null};
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = typeof WeakMap === "function" ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = {element: null};
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    Mi(a, b);
    typeof d !== "function" && (Si === null ? Si = new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, {componentStack: c2 !== null ? c2 : ""});
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (d === null) {
    d = a.pingCache = new Ni();
    var e = new Set();
    d.set(b, e);
  } else
    e = d.get(b), e === void 0 && (e = new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = a.tag === 13)
      b = a.memoizedState, b = b !== null ? b.dehydrated !== null ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (a !== null);
  return null;
}
function Wi(a, b, c, d, e) {
  if ((a.mode & 1) === 0)
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner;
var Ug = false;
function Yi(a, b, c, d) {
  b.child = a === null ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f, e);
  c = bi();
  if (a !== null && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I2 && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (a === null) {
    var f = c.type;
    if (typeof f === "function" && !bj(f) && f.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = f, cj(a, b, f, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if ((a.lanes & e) === 0) {
    var g = f.memoizedProps;
    c = c.compare;
    c = c !== null ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (a !== null) {
    var f = a.memoizedProps;
    if (Ie(f, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f, (a.lanes & e) !== 0)
        (a.flags & 131072) !== 0 && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden")
    if ((b.mode & 1) === 0)
      b.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}, G2(fj, gj), gj |= c;
    else {
      if ((c & 1073741824) === 0)
        return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {baseLanes: a, cachePool: null, transitions: null}, b.updateQueue = null, G2(fj, gj), gj |= a, null;
      b.memoizedState = {baseLanes: 0, cachePool: null, transitions: null};
      d = f !== null ? f.baseLanes : c;
      G2(fj, gj);
      gj |= d;
    }
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G2(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f = Zf(c) ? Xf : H2.current;
  f = Yf(b, f);
  Tg(b, e);
  c = Xh(a, b, c, d, f, e);
  d = bi();
  if (a !== null && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I2 && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f = true;
    cg(b);
  } else
    f = false;
  Tg(b, e);
  if (b.stateNode === null)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
    var m = c.getDerivedStateFromProps, q2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    q2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k = b.memoizedState;
    h !== d || r2 !== k || Wf.current || $g ? (typeof m === "function" && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k, l2)) ? (q2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4194308)) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = Vg(k) : (k = Zf(c) ? Xf : H2.current, k = Yf(b, k));
    var y2 = c.getDerivedStateFromProps;
    (m = typeof y2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== q2 || r2 !== k) && qh(b, g, d, k);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? (typeof y2 === "function" && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k) || false) ? (m || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, n2, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, n2, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 1024)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k, d = l2) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
  hj(a, b);
  var g = (b.flags & 128) !== 0;
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f);
  d = b.stateNode;
  Xi.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = {dehydrated: null, treeContext: null, retryLane: 0};
function oj(a) {
  return {baseLanes: a, cachePool: null, transitions: null};
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M2.current, f = false, g = (b.flags & 128) !== 0, h;
  (h = g) || (h = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  if (h)
    f = true, b.flags &= -129;
  else if (a === null || a.memoizedState !== null)
    e |= 1;
  G2(M2, e & 1);
  if (a === null) {
    Eg(b);
    a = b.memoizedState;
    if (a !== null && (a = a.dehydrated, a !== null))
      return (b.mode & 1) === 0 ? b.lanes = 1 : a.data === "$!" ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, g = {mode: "hidden", children: g}, (d & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (e !== null && (h = e.dehydrated, h !== null))
    return sj(a, b, g, d, h, e, c);
  if (f) {
    f = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k = {mode: "hidden", children: d.children};
    (g & 1) === 0 && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
    h !== null ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
    f.return = b;
    d.return = b;
    d.sibling = f;
    b.child = d;
    d = f;
    f = b.child;
    g = a.child.memoizedState;
    g = g === null ? oj(c) : {baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions};
    f.memoizedState = g;
    f.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f = a.child;
  a = f.sibling;
  d = wh(f, {mode: "visible", children: d.children});
  (b.mode & 1) === 0 && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  a !== null && (c = b.deletions, c === null ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({mode: "visible", children: b}, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  d !== null && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p2(422))), tj(a, b, g, d);
    if (b.memoizedState !== null)
      return b.child = a.child, b.flags |= 128, null;
    f = d.fallback;
    e = b.mode;
    d = qj({mode: "visible", children: d.children}, e, 0, null);
    f = Ah(f, e, g, null);
    f.flags |= 2;
    d.return = b;
    f.return = b;
    d.sibling = f;
    b.child = d;
    (b.mode & 1) !== 0 && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f;
  }
  if ((b.mode & 1) === 0)
    return tj(a, b, g, null);
  if (e.data === "$!") {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f = Error(p2(419));
    d = Li(f, d, void 0);
    return tj(a, b, g, d);
  }
  h = (g & a.childLanes) !== 0;
  if (Ug || h) {
    d = R2;
    if (d !== null) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = (e & (d.suspendedLanes | g)) !== 0 ? 0 : e;
      e !== 0 && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p2(421)));
    return tj(a, b, g, d);
  }
  if (e.data === "$?")
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I2 = true;
  zg = null;
  a !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  d !== null && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f = a.memoizedState;
  f === null ? a.memoizedState = {isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  Yi(a, b, d.children, c);
  d = M2.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (a !== null && (a.flags & 128) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && wj(a, c, b);
          else if (a.tag === 19)
            wj(a, c, b);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G2(M2, d);
  if ((b.mode & 1) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && Mh(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && Mh(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  (b.mode & 1) === 0 && a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if ((c & b.childLanes) === 0)
    return null;
  if (a !== null && b.child !== a.child)
    throw Error(p2(153));
  if (b.child !== null) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; a.sibling !== null; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G2(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (d !== null) {
        if (d.dehydrated !== null)
          return G2(M2, M2.current & 1), b.flags |= 128, null;
        if ((c & b.child.childLanes) !== 0)
          return pj(a, b, c);
        G2(M2, M2.current & 1);
        a = $i(a, b, c);
        return a !== null ? a.sibling : null;
      }
      G2(M2, M2.current & 1);
      break;
    case 19:
      d = (c & b.childLanes) !== 0;
      if ((a.flags & 128) !== 0) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G2(M2, M2.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj;
var Bj;
var Cj;
var Dj;
Aj = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "select":
        e = A2({}, e, {value: void 0});
        d = A2({}, d, {value: void 0});
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h && (k != null || h != null))
        if (l2 === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && D2("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l2, k));
    }
    c && (f = f || []).push("style", c);
    var l2 = f;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I2)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S2(a) {
  var b = a.alternate !== null && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; e !== null; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; e !== null; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S2(b), null;
    case 1:
      return Zf(b.type) && $f(), S2(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E2(Wf);
      E2(H2);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        Gg(b) ? b.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b.flags & 256) === 0 || (b.flags |= 1024, zg !== null && (Gj(zg), zg = null));
      Bj(a, b);
      S2(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(p2(166));
          S2(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f;
          a = (b.mode & 1) !== 0;
          switch (c) {
            case "dialog":
              D2("cancel", d);
              D2("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D2("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D2(lf[e], d);
              break;
            case "source":
              D2("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D2("error", d);
              D2("load", d);
              break;
            case "details":
              D2("toggle", d);
              break;
            case "input":
              Za(d, f);
              D2("invalid", d);
              break;
            case "select":
              d._wrapperState = {wasMultiple: !!f.multiple};
              D2("invalid", d);
              break;
            case "textarea":
              hb(d, f), D2("invalid", d);
          }
          ub(c, f);
          e = null;
          for (var g in f)
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              g === "children" ? typeof h === "string" ? d.textContent !== h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && h != null && g === "onScroll" && D2("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === "http://www.w3.org/1999/xhtml" && (a = kb(c));
          a === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {is: d.is}) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D2("cancel", a);
                D2("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D2(lf[e], a);
                e = d;
                break;
              case "source":
                D2("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D2("error", a);
                D2("load", a);
                e = d;
                break;
              case "details":
                D2("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D2("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = {wasMultiple: !!d.multiple};
                e = A2({}, d, {value: void 0});
                D2("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D2("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f in h)
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                f === "style" ? sb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && nb(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && ob(a, k) : typeof k === "number" && ob(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ea.hasOwnProperty(f) ? k != null && f === "onScroll" && D2("scroll", a) : k != null && ta(a, f, k, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                d.value != null && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof e.onClick === "function" && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 512, b.flags |= 2097152);
      }
      S2(b);
      return null;
    case 6:
      if (a && b.stateNode != null)
        Dj(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(p2(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f = d.nodeValue !== c) {
            if (a = xg, a !== null)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, (a.mode & 1) !== 0);
                  break;
                case 5:
                  a.memoizedProps.suppressHydrationWarning !== true && Af(d.nodeValue, c, (a.mode & 1) !== 0);
              }
          }
          f && (b.flags |= 4);
        } else
          d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S2(b);
      return null;
    case 13:
      E2(M2);
      d = b.memoizedState;
      if (a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
        if (I2 && yg !== null && (b.mode & 1) !== 0 && (b.flags & 128) === 0)
          Hg(), Ig(), b.flags |= 98560, f = false;
        else if (f = Gg(b), d !== null && d.dehydrated !== null) {
          if (a === null) {
            if (!f)
              throw Error(p2(318));
            f = b.memoizedState;
            f = f !== null ? f.dehydrated : null;
            if (!f)
              throw Error(p2(317));
            f[Of] = b;
          } else
            Ig(), (b.flags & 128) === 0 && (b.memoizedState = null), b.flags |= 4;
          S2(b);
          f = false;
        } else
          zg !== null && (Gj(zg), zg = null), f = true;
        if (!f)
          return b.flags & 65536 ? b : null;
      }
      if ((b.flags & 128) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      d !== (a !== null && a.memoizedState !== null) && d && (b.child.flags |= 8192, (b.mode & 1) !== 0 && (a === null || (M2.current & 1) !== 0 ? T2 === 0 && (T2 = 3) : uj()));
      b.updateQueue !== null && (b.flags |= 4);
      S2(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), a === null && sf(b.stateNode.containerInfo), S2(b), null;
    case 10:
      return Rg(b.type._context), S2(b), null;
    case 17:
      return Zf(b.type) && $f(), S2(b), null;
    case 19:
      E2(M2);
      f = b.memoizedState;
      if (f === null)
        return S2(b), null;
      d = (b.flags & 128) !== 0;
      g = f.rendering;
      if (g === null)
        if (d)
          Ej(f, false);
        else {
          if (T2 !== 0 || a !== null && (a.flags & 128) !== 0)
            for (a = b.child; a !== null; ) {
              g = Mh(a);
              if (g !== null) {
                b.flags |= 128;
                Ej(f, false);
                d = g.updateQueue;
                d !== null && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c = c.sibling;
                G2(M2, M2.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          f.tail !== null && B2() > Hj && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), a !== null) {
            if (b.flags |= 128, d = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Ej(f, true), f.tail === null && f.tailMode === "hidden" && !g.alternate && !I2)
              return S2(b), null;
          } else
            2 * B2() - f.renderingStartTime > Hj && c !== 1073741824 && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, c !== null ? c.sibling = g : b.child = g, f.last = g);
      }
      if (f.tail !== null)
        return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B2(), b.sibling = null, c = M2.current, G2(M2, d ? c & 1 | 2 : c & 1), b;
      S2(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = b.memoizedState !== null, a !== null && a.memoizedState !== null !== d && (b.flags |= 8192), d && (b.mode & 1) !== 0 ? (gj & 1073741824) !== 0 && (S2(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S2(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p2(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E2(Wf), E2(H2), Oh(), a = b.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E2(M2);
      a = b.memoizedState;
      if (a !== null && a.dehydrated !== null) {
        if (b.alternate === null)
          throw Error(p2(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E2(M2), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false;
var U2 = false;
var Lj = typeof WeakSet === "function" ? WeakSet : Set;
var V2 = null;
function Mj(a, b) {
  var c = a.ref;
  if (c !== null)
    if (typeof c === "function")
      try {
        c(null);
      } catch (d) {
        W2(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W2(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = {start: a.selectionStart, end: a.selectionEnd};
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && d.rangeCount !== 0) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l2 = 0, m = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || e !== 0 && q2.nodeType !== 3 || (h = g + e);
                q2 !== f || d !== 0 && q2.nodeType !== 3 || (k = g + d);
                q2.nodeType === 3 && (g += q2.nodeValue.length);
                if ((y2 = q2.firstChild) === null)
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f && ++m === d && (k = g);
                if ((y2 = q2.nextSibling) !== null)
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = h === -1 || k === -1 ? null : {start: h, end: k};
        } else
          c = null;
      }
    c = c || {start: 0, end: 0};
  } else
    c = null;
  Df = {focusedElem: a, selectionRange: c};
  dd = false;
  for (V2 = b; V2 !== null; )
    if (b = V2, a = b.child, (b.subtreeFlags & 1028) !== 0 && a !== null)
      a.return = b, V2 = a;
    else
      for (; V2 !== null; ) {
        b = V2;
        try {
          var n2 = b.alternate;
          if ((b.flags & 1024) !== 0)
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (n2 !== null) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                u2.nodeType === 1 ? u2.textContent = "" : u2.nodeType === 9 && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
        } catch (F2) {
          W2(b, b.return, F2);
        }
        a = b.sibling;
        if (a !== null) {
          a.return = b.return;
          V2 = a;
          break;
        }
        V2 = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = d !== null ? d.lastEffect : null;
  if (d !== null) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        f !== void 0 && Nj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (b !== null) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    typeof b === "function" ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  b !== null && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  a.tag === 5 && (b = a.stateNode, b !== null && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.flags & 2)
          continue a;
        if (a.child === null || a.tag === 4)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (d === 5 || d === 6)
    a = a.stateNode, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = Bf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (Wj(a, b, c), a = a.sibling; a !== null; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (d === 5 || d === 6)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (Xj(a, b, c), a = a.sibling; a !== null; )
      Xj(a, b, c), a = a.sibling;
}
var X = null;
var Yj = false;
function Zj(a, b, c) {
  for (c = c.child; c !== null; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && typeof lc.onCommitFiberUnmount === "function")
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U2 || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? Kf(a.parentNode, c) : a.nodeType === 1 && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U2 && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
        e = d = d.next;
        do {
          var f = e, g = f.destroy;
          f = f.tag;
          g !== void 0 && ((f & 2) !== 0 ? Nj(c, b, g) : (f & 4) !== 0 && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U2 && (Mj(c, b), d = c.stateNode, typeof d.componentWillUnmount === "function"))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W2(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U2 = (d = U2) || c.memoizedState !== null, Zj(a, b, c), U2 = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (c !== null)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a:
          for (; h !== null; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (X === null)
          throw Error(p2(160));
        ak(f, g, e);
        X = null;
        Yj = false;
        var k = e.alternate;
        k !== null && (k.return = null);
        e.return = null;
      } catch (l2) {
        W2(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; b !== null; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W2(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && c !== null && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && c !== null && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, e != null)) {
        var f = a.memoizedProps, g = c !== null ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
        a.updateQueue = null;
        if (k !== null)
          try {
            h === "input" && f.type === "radio" && f.name != null && ab(e, f);
            vb(h, g);
            var l2 = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q2 = k[g + 1];
              m === "style" ? sb(e, q2) : m === "dangerouslySetInnerHTML" ? nb(e, q2) : m === "children" ? ob(e, q2) : ta(e, m, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y2 = f.value;
                y2 != null ? fb(e, !!f.multiple, y2, false) : r2 !== !!f.multiple && (f.defaultValue != null ? fb(e, !!f.multiple, f.defaultValue, true) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t2) {
            W2(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (a.stateNode === null)
          throw Error(p2(162));
        e = a.stateNode;
        f = a.memoizedProps;
        try {
          e.nodeValue = f;
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && c !== null && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W2(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f = e.memoizedState !== null, e.stateNode.isHidden = f, !f || e.alternate !== null && e.alternate.memoizedState !== null || (gk = B2()));
      d & 4 && bk(a);
      break;
    case 22:
      m = c !== null && c.memoizedState !== null;
      a.mode & 1 ? (U2 = (l2 = U2) || m, dk(b, a), U2 = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = a.memoizedState !== null;
        if ((a.stateNode.isHidden = l2) && !m && (a.mode & 1) !== 0)
          for (V2 = a, m = a.child; m !== null; ) {
            for (q2 = V2 = m; V2 !== null; ) {
              r2 = V2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if (typeof n2.componentWillUnmount === "function") {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W2(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (r2.memoizedState !== null) {
                    hk(q2);
                    continue;
                  }
              }
              y2 !== null ? (y2.return = r2, V2 = y2) : hk(q2);
            }
            m = m.sibling;
          }
        a:
          for (m = null, q2 = a; ; ) {
            if (q2.tag === 5) {
              if (m === null) {
                m = q2;
                try {
                  e = q2.stateNode, l2 ? (f = e.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q2.stateNode, k = q2.memoizedProps.style, g = k !== void 0 && k !== null && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W2(a, a.return, t2);
                }
              }
            } else if (q2.tag === 6) {
              if (m === null)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W2(a, a.return, t2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a)
                break a;
              m === q2 && (m = null);
              q2 = q2.return;
            }
            m === q2 && (m = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(b, a), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; c !== null; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p2(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f = Vj(a);
          Xj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p2(161));
      }
    } catch (k) {
      W2(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V2 = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = (a.mode & 1) !== 0; V2 !== null; ) {
    var e = V2, f = e.child;
    if (e.tag === 22 && d) {
      var g = e.memoizedState !== null || Kj;
      if (!g) {
        var h = e.alternate, k = h !== null && h.memoizedState !== null || U2;
        h = Kj;
        var l2 = U2;
        Kj = g;
        if ((U2 = k) && !l2)
          for (V2 = e; V2 !== null; )
            g = V2, k = g.child, g.tag === 22 && g.memoizedState !== null ? kk(e) : k !== null ? (k.return = g, V2 = k) : kk(e);
        for (; f !== null; )
          V2 = f, jk(f), f = f.sibling;
        V2 = e;
        Kj = h;
        U2 = l2;
      }
      lk(a);
    } else
      (e.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = e, V2 = f) : lk(a);
  }
}
function lk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    if ((b.flags & 8772) !== 0) {
      var c = b.alternate;
      try {
        if ((b.flags & 8772) !== 0)
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U2)
                if (c === null)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f = b.updateQueue;
              f !== null && ih(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (g !== null) {
                c = null;
                if (b.child !== null)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (c === null && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b.memoizedState === null) {
                var l2 = b.alternate;
                if (l2 !== null) {
                  var m = l2.memoizedState;
                  if (m !== null) {
                    var q2 = m.dehydrated;
                    q2 !== null && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
        U2 || b.flags & 512 && Sj(b);
      } catch (r2) {
        W2(b, b.return, r2);
      }
    }
    if (b === a) {
      V2 = null;
      break;
    }
    c = b.sibling;
    if (c !== null) {
      c.return = b.return;
      V2 = c;
      break;
    }
    V2 = b.return;
  }
}
function hk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    if (b === a) {
      V2 = null;
      break;
    }
    var c = b.sibling;
    if (c !== null) {
      c.return = b.return;
      V2 = c;
      break;
    }
    V2 = b.return;
  }
}
function kk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k) {
            W2(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if (typeof d.componentDidMount === "function") {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              W2(b, e, k);
            }
          }
          var f = b.return;
          try {
            Sj(b);
          } catch (k) {
            W2(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k) {
            W2(b, g, k);
          }
      }
    } catch (k) {
      W2(b, b.return, k);
    }
    if (b === a) {
      V2 = null;
      break;
    }
    var h = b.sibling;
    if (h !== null) {
      h.return = b.return;
      V2 = h;
      break;
    }
    V2 = b.return;
  }
}
var mk = Math.ceil;
var nk = ua.ReactCurrentDispatcher;
var ok = ua.ReactCurrentOwner;
var pk = ua.ReactCurrentBatchConfig;
var K2 = 0;
var R2 = null;
var Y = null;
var Z = 0;
var gj = 0;
var fj = Uf(0);
var T2 = 0;
var qk = null;
var hh = 0;
var rk = 0;
var sk = 0;
var tk = null;
var uk = null;
var gk = 0;
var Hj = Infinity;
var vk = null;
var Pi = false;
var Qi = null;
var Si = null;
var wk = false;
var xk = null;
var yk = 0;
var zk = 0;
var Ak = null;
var Bk = -1;
var Ck = 0;
function L2() {
  return (K2 & 6) !== 0 ? B2() : Bk !== -1 ? Bk : Bk = B2();
}
function lh(a) {
  if ((a.mode & 1) === 0)
    return 1;
  if ((K2 & 2) !== 0 && Z !== 0)
    return Z & -Z;
  if (Kg.transition !== null)
    return Ck === 0 && (Ck = yc()), Ck;
  a = C2;
  if (a !== 0)
    return a;
  a = window.event;
  a = a === void 0 ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p2(185));
  Ac(a, c, d);
  if ((K2 & 2) === 0 || a !== R2)
    a === R2 && ((K2 & 2) === 0 && (rk |= c), T2 === 4 && Dk(a, Z)), Ek(a, d), c === 1 && K2 === 0 && (b.mode & 1) === 0 && (Hj = B2() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R2 ? Z : 0);
  if (d === 0)
    c !== null && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    c != null && bc(c);
    if (b === 1)
      a.tag === 0 ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        (K2 & 6) === 0 && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R2 ? Z : 0);
  if (d === 0)
    return null;
  if ((d & 30) !== 0 || (d & a.expiredLanes) !== 0 || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K2;
    K2 |= 2;
    var f = Kk();
    if (R2 !== a || Z !== b)
      vk = null, Hj = B2() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f;
    K2 = e;
    Y !== null ? b = 0 : (R2 = null, Z = 0, b = T2);
  }
  if (b !== 0) {
    b === 2 && (e = xc(a), e !== 0 && (d = e, b = Ok(a, e)));
    if (b === 1)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B2()), c;
    if (b === 6)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if ((d & 30) === 0 && !Pk(e) && (b = Jk(a, d), b === 2 && (f = xc(a), f !== 0 && (d = f, b = Ok(a, f))), b === 1))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B2()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B2(), 10 < b)) {
            if (uc(a, 0) !== 0)
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L2();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B2() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p2(329));
      }
    }
  }
  Ek(a, B2());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  a !== 2 && (b = uk, uk = c, b !== null && Gj(b));
  return a;
}
function Gj(a) {
  uk === null ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (c !== null && (c = c.stores, c !== null))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && c !== null)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; b.sibling === null; ) {
        if (b.return === null || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  Ik();
  var b = uc(a, 0);
  if ((b & 1) === 0)
    return Ek(a, B2()), null;
  var c = Jk(a, b);
  if (a.tag !== 0 && c === 2) {
    var d = xc(a);
    d !== 0 && (b = d, c = Ok(a, d));
  }
  if (c === 1)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B2()), c;
  if (c === 6)
    throw Error(p2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B2());
  return null;
}
function Rk(a, b) {
  var c = K2;
  K2 |= 1;
  try {
    return a(b);
  } finally {
    K2 = c, K2 === 0 && (Hj = B2() + 500, fg && jg());
  }
}
function Sk(a) {
  xk !== null && xk.tag === 0 && (K2 & 6) === 0 && Ik();
  var b = K2;
  K2 |= 1;
  var c = pk.transition, d = C2;
  try {
    if (pk.transition = null, C2 = 1, a)
      return a();
  } finally {
    C2 = d, pk.transition = c, K2 = b, (K2 & 6) === 0 && jg();
  }
}
function Ij() {
  gj = fj.current;
  E2(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, Gf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && $f();
          break;
        case 3:
          Jh();
          E2(Wf);
          E2(H2);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E2(M2);
          break;
        case 19:
          E2(M2);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R2 = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T2 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (Wg !== null) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, d !== null) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (f !== null) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N2.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P2 = O2 = N2 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (c === null || c.return === null) {
        T2 = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = Z;
        h.flags |= 32768;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k, m = h, q2 = m.tag;
          if ((m.mode & 1) === 0 && (q2 === 0 || q2 === 11 || q2 === 15)) {
            var r2 = m.alternate;
            r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y2 = Vi(g);
          if (y2 !== null) {
            y2.flags &= -257;
            Wi(y2, g, h, f, b);
            y2.mode & 1 && Ti(f, l2, b);
            b = y2;
            k = l2;
            var n2 = b.updateQueue;
            if (n2 === null) {
              var t2 = new Set();
              t2.add(k);
              b.updateQueue = t2;
            } else
              n2.add(k);
            break a;
          } else {
            if ((b & 1) === 0) {
              Ti(f, l2, b);
              uj();
              break a;
            }
            k = Error(p2(426));
          }
        } else if (I2 && h.mode & 1) {
          var J2 = Vi(g);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Wi(J2, g, h, f, b);
            Jg(Ki(k, h));
            break a;
          }
        }
        f = k = Ki(k, h);
        T2 !== 4 && (T2 = 2);
        tk === null ? tk = [f] : tk.push(f);
        f = g;
        do {
          switch (f.tag) {
            case 3:
              f.flags |= 65536;
              b &= -b;
              f.lanes |= b;
              var x2 = Oi(f, k, b);
              fh(f, x2);
              break a;
            case 1:
              h = k;
              var w2 = f.type, u2 = f.stateNode;
              if ((f.flags & 128) === 0 && (typeof w2.getDerivedStateFromError === "function" || u2 !== null && typeof u2.componentDidCatch === "function" && (Si === null || !Si.has(u2)))) {
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var F2 = Ri(f, h, b);
                fh(f, F2);
                break a;
              }
          }
          f = f.return;
        } while (f !== null);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return a === null ? ai : a;
}
function uj() {
  if (T2 === 0 || T2 === 3 || T2 === 2)
    T2 = 4;
  R2 === null || (hh & 268435455) === 0 && (rk & 268435455) === 0 || Dk(R2, Z);
}
function Jk(a, b) {
  var c = K2;
  K2 |= 2;
  var d = Kk();
  if (R2 !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K2 = c;
  nk.current = d;
  if (Y !== null)
    throw Error(p2(261));
  R2 = null;
  Z = 0;
  return T2;
}
function Uk() {
  for (; Y !== null; )
    Vk(Y);
}
function Mk() {
  for (; Y !== null && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  b === null ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 32768) === 0) {
      if (c = Fj(c, b, gj), c !== null) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (c !== null) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (a !== null)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T2 = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  T2 === 0 && (T2 = 5);
}
function Qk(a, b, c) {
  var d = C2, e = pk.transition;
  try {
    pk.transition = null, C2 = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C2 = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (xk !== null);
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Bc(a, f);
  a === R2 && (Y = R2 = null, Z = 0);
  (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f = (c.flags & 15990) !== 0;
  if ((c.subtreeFlags & 15990) !== 0 || f) {
    f = pk.transition;
    pk.transition = null;
    var g = C2;
    C2 = 1;
    var h = K2;
    K2 |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K2 = h;
    C2 = g;
    pk.transition = f;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f = a.pendingLanes;
  f === 0 && (Si = null);
  mc(c.stateNode);
  Ek(a, B2());
  if (b !== null)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, {componentStack: e.stack, digest: e.digest});
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  (yk & 1) !== 0 && a.tag !== 0 && Ik();
  f = a.pendingLanes;
  (f & 1) !== 0 ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (xk !== null) {
    var a = Dc(yk), b = pk.transition, c = C2;
    try {
      pk.transition = null;
      C2 = 16 > a ? 16 : a;
      if (xk === null)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if ((K2 & 6) !== 0)
          throw Error(p2(331));
        var e = K2;
        K2 |= 4;
        for (V2 = a.current; V2 !== null; ) {
          var f = V2, g = f.child;
          if ((V2.flags & 16) !== 0) {
            var h = f.deletions;
            if (h !== null) {
              for (var k = 0; k < h.length; k++) {
                var l2 = h[k];
                for (V2 = l2; V2 !== null; ) {
                  var m = V2;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m, f);
                  }
                  var q2 = m.child;
                  if (q2 !== null)
                    q2.return = m, V2 = q2;
                  else
                    for (; V2 !== null; ) {
                      m = V2;
                      var r2 = m.sibling, y2 = m.return;
                      Tj(m);
                      if (m === l2) {
                        V2 = null;
                        break;
                      }
                      if (r2 !== null) {
                        r2.return = y2;
                        V2 = r2;
                        break;
                      }
                      V2 = y2;
                    }
                }
              }
              var n2 = f.alternate;
              if (n2 !== null) {
                var t2 = n2.child;
                if (t2 !== null) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (t2 !== null);
                }
              }
              V2 = f;
            }
          }
          if ((f.subtreeFlags & 2064) !== 0 && g !== null)
            g.return = f, V2 = g;
          else
            b:
              for (; V2 !== null; ) {
                f = V2;
                if ((f.flags & 2048) !== 0)
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f, f.return);
                  }
                var x2 = f.sibling;
                if (x2 !== null) {
                  x2.return = f.return;
                  V2 = x2;
                  break b;
                }
                V2 = f.return;
              }
        }
        var w2 = a.current;
        for (V2 = w2; V2 !== null; ) {
          g = V2;
          var u2 = g.child;
          if ((g.subtreeFlags & 2064) !== 0 && u2 !== null)
            u2.return = g, V2 = u2;
          else
            b:
              for (g = w2; V2 !== null; ) {
                h = V2;
                if ((h.flags & 2048) !== 0)
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W2(h, h.return, na);
                  }
                if (h === g) {
                  V2 = null;
                  break b;
                }
                var F2 = h.sibling;
                if (F2 !== null) {
                  F2.return = h.return;
                  V2 = F2;
                  break b;
                }
                V2 = h.return;
              }
        }
        K2 = e;
        jg();
        if (lc && typeof lc.onPostCommitFiberRoot === "function")
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C2 = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L2();
  a !== null && (Ac(a, 1, b), Ek(a, b));
}
function W2(a, b, c) {
  if (a.tag === 3)
    Yk(a, a, c);
  else
    for (; b !== null; ) {
      if (b.tag === 3) {
        Yk(b, a, c);
        break;
      } else if (b.tag === 1) {
        var d = b.stateNode;
        if (typeof b.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Si === null || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L2();
          b !== null && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = L2();
  a.pingedLanes |= a.suspendedLanes & c;
  R2 === a && (Z & c) === c && (T2 === 4 || T2 === 3 && (Z & 130023424) === Z && 500 > B2() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  b === 0 && ((a.mode & 1) === 0 ? b = 1 : (b = sc, sc <<= 1, (sc & 130023424) === 0 && (sc = 4194304)));
  var c = L2();
  a = Zg(a, b);
  a !== null && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  b !== null && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      e !== null && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p2(314));
  }
  d !== null && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if ((a.lanes & c) === 0 && (b.flags & 128) === 0)
        return Ug = false, zj(a, b, c);
      Ug = (a.flags & 131072) !== 0 ? true : false;
    }
  else
    Ug = false, I2 && (b.flags & 1048576) !== 0 && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H2.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f = bi();
      b.flags |= 1;
      typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0 ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f, c)) : (b.tag = 0, I2 && f && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p2(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (a === null)
          throw Error(p2(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated)
          if (f = {element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ki(Error(p2(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p2(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), a === null && Eg(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : f !== null && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return a === null && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G2(Mg, d._currentValue);
        d._currentValue = g;
        if (f !== null)
          if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f = b.child, f !== null && (f.return = b); f !== null; ) {
              var h = f.dependencies;
              if (h !== null) {
                g = f.child;
                for (var k = h.firstContext; k !== null; ) {
                  if (k.context === d) {
                    if (f.tag === 1) {
                      k = ch(-1, c & -c);
                      k.tag = 2;
                      var l2 = f.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var m = l2.pending;
                        m === null ? k.next = k : (k.next = m.next, m.next = k);
                        l2.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    k !== null && (k.lanes |= c);
                    Sg(f.return, c, b);
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (f.tag === 10)
                g = f.type === b.type ? null : f.child;
              else if (f.tag === 18) {
                g = f.return;
                if (g === null)
                  throw Error(p2(341));
                g.lanes |= c;
                h = g.alternate;
                h !== null && (h.lanes |= c);
                Sg(g, c, b);
                g = f.sibling;
              } else
                g = f.child;
              if (g !== null)
                g.return = f;
              else
                for (g = f; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (f !== null) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
              f = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p2(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if (typeof a === "function")
    return bj(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  c === null ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {lanes: b.lanes, firstContext: b.firstContext};
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    bj(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return qj(c, e, f, b);
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p2(130, a == null ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = {isHidden: false};
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
  a = new bl(a, b, c, h, k);
  b === 1 ? (b = 1, f === true && (b |= 8)) : b = 0;
  f = Bg(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = {element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null};
  ah(f);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: wa, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c};
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || a.tag !== 1)
      throw Error(p2(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (b !== null);
    throw Error(p2(171));
  }
  if (a.tag === 1) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
  a = cl(c, d, true, a, e, f, g, h, k);
  a.context = el(null);
  c = a.current;
  d = L2();
  e = lh(c);
  f = ch(d, e);
  f.callback = b !== void 0 && b !== null ? b : null;
  dh(c, f, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f = L2(), g = lh(e);
  c = el(c);
  b.context === null ? b.context = c : b.pendingContext = c;
  b = ch(f, g);
  b.payload = {element: a};
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  a = dh(e, b, g);
  a !== null && (mh(a, e, g, f), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = typeof reportError === "function" ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (b === null)
    throw Error(p2(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (a !== null) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = {blockedOn: null, target: a, priority: b};
    for (var c = 0; c < Qc.length && b !== 0 && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    c === 0 && Vc(a);
  }
};
function ol(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
}
function pl(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if (typeof d === "function") {
      var f = d;
      d = function() {
        var a2 = hl(g);
        f.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if (typeof d === "function") {
    var h = d;
    d = function() {
      var a2 = hl(k);
      h.call(a2);
    };
  }
  var k = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k;
  a[uf] = k.current;
  sf(a.nodeType === 8 ? a.parentNode : a);
  Sk(function() {
    gl(b, k, c, d);
  });
  return k;
}
function sl(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        c !== 0 && (Cc(b, c | 1), Ek(b, B2()), (K2 & 6) === 0 && (Hj = B2() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (b2 !== null) {
          var c2 = L2();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (a.tag === 13) {
    var b = Zg(a, 134217728);
    if (b !== null) {
      var c = L2();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (a.tag === 13) {
    var b = lh(a), c = Zg(a, b);
    if (c !== null) {
      var d = L2();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C2;
};
Ic = function(a, b) {
  var c = C2;
  try {
    return C2 = a, b();
  } finally {
    C2 = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p2(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = {usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk]};
var ul = {findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"};
var vl = {bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
var wl;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = tl;
var createPortal = function(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ol(b))
    throw Error(p2(200));
  return dl(a, b, null, c);
};
var createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p2(299));
  var c = false, d = "", e = ll;
  b !== null && b !== void 0 && (b.unstable_strictMode === true && (c = true), b.identifierPrefix !== void 0 && (d = b.identifierPrefix), b.onRecoverableError !== void 0 && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(a.nodeType === 8 ? a.parentNode : a);
  return new ml(b);
};
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(p2(188));
    a = Object.keys(a).join(",");
    throw Error(p2(268, a));
  }
  a = Zb(b);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a) {
  return Sk(a);
};
var hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p2(200));
  return sl(null, a, b, true, c);
};
var hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p2(405));
  var d = c != null && c.hydratedSources || null, e = false, f = "", g = ll;
  c !== null && c !== void 0 && (c.unstable_strictMode === true && (e = true), c.identifierPrefix !== void 0 && (f = c.identifierPrefix), c.onRecoverableError !== void 0 && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, c != null ? c : null, e, false, f, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), b.mutableSourceEagerHydrationData == null ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
  return new nl(b);
};
var render = function(a, b, c) {
  if (!pl(b))
    throw Error(p2(200));
  return sl(null, a, b, false, c);
};
var unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Rk;
var unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p2(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(p2(38));
  return sl(a, b, c, false, d);
};
var version2 = "18.2.0-next-9e3b772b8-20220608";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// build/dist/blocks/LeftMain.js
var LeftMain = ({children}) => {
  return /* @__PURE__ */ react.createElement("div", {
    className: "block__leftmain"
  }, children);
};

// build/dist/blocks/RightMain.js
var RightMain = ({children}) => {
  return /* @__PURE__ */ react.createElement("div", {
    className: "block__rightmain"
  }, children);
};

// build/dist/Demo.js
var Demo = () => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ react.createElement("h2", null, "Demo")), /* @__PURE__ */ react.createElement("div", {
    className: "demo"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "content--left"
  }, /* @__PURE__ */ react.createElement(LeftMain, null, /* @__PURE__ */ react.createElement("h2", null, "Hello World, the SCF Border"), /* @__PURE__ */ react.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis cumque dolore doloremque doloribus id ipsum maiores odio quam, quo quos ratione sapiente similique soluta tempora tenetur vel voluptas voluptates?"), /* @__PURE__ */ react.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis cumque dolore doloremque doloribus id ipsum maiores odio quam, quo quos ratione sapiente similique soluta tempora tenetur vel voluptas voluptates?"), /* @__PURE__ */ react.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis cumque dolore doloremque doloribus id ipsum maiores odio quam, quo quos ratione sapiente similique soluta tempora tenetur vel voluptas voluptates?"))), /* @__PURE__ */ react.createElement("div", {
    className: "content--right"
  }, /* @__PURE__ */ react.createElement(RightMain, null, /* @__PURE__ */ react.createElement("h1", null, "Foo, the bar foo baz?")))));
};

// build/dist/Intro.js
var Intro = () => {
  return /* @__PURE__ */ react.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ react.createElement("h2", null, "About"), /* @__PURE__ */ react.createElement("p", null, "A css houdini paintWorklet to create these beveled borders in CSS. See ", /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement("a", {
    href: "https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md",
    target: "_blank"
  }, "https://github.com/w3c/css-houdini-drafts/blob/main/css-paint-api/EXPLAINER.md"), " ", /* @__PURE__ */ react.createElement("br", null), "for mor details on Houdinis css-paint-api."), /* @__PURE__ */ react.createElement("p", null, "For supported Browsers check: ", /* @__PURE__ */ react.createElement("a", {
    href: "https://ishoudinireadyyet.com/",
    target: "_blank"
  }, "https://ishoudinireadyyet.com/"), "A Polyfill for Firefox exists, but is slow and somewhat unreliable."));
};

// build/dist/Explanation.js
var Explanation = () => {
  return /* @__PURE__ */ react.createElement("div", {
    className: "demo"
  }, /* @__PURE__ */ react.createElement("div", {
    className: "content--left"
  }, /* @__PURE__ */ react.createElement("pre", null, "&__leftmain {\n\n  --scfborder-top-left: 20px 70px;\n  --scfborder-top-right: 20;\n  --scfborder-bottom-right: 20;\n  --scfborder-bottom-left: 20px 70px;\n  --scfborder-width: 3px;\n  --scfborder-shadow-color: #69e9ff;\n  --scfborder-border-color: #69e9ff;\n  --scfborder-pattern-shift: 0px 50px;\n  --scfborder-top-dent: 10px;\n  --scfborder-top-dent-length: 33%;\n\n  background-image: paint(scfborder);\n}")), /* @__PURE__ */ react.createElement("div", {
    className: "content--right"
  }, /* @__PURE__ */ react.createElement("pre", null, "    &__rightmain {\n\n      --scfborder-top-left: 20;\n      --scfborder-top-right: 20px 70px;\n      --scfborder-bottom-right: 20px 70px;\n      --scfborder-bottom-left: 20;\n      --scfborder-width: 3px;\n      --scfborder-shadow-color: #69e9ff;\n      --scfborder-border-color: #69e9ff;\n      --scfborder-pattern-shift: 0 -50;\n      --scfborder-top-dent: 10px;\n      --scfborder-top-dent-length: 33%;\n\n      background-image: paint(scfborder);\n    }")));
};

// build/dist/TopBar.js
var TopBar = () => {
  return /* @__PURE__ */ react.createElement("div", {
    className: "topbar"
  }, /* @__PURE__ */ react.createElement("h1", null, "@holymarcell/css-scf-border"));
};

// build/dist/Api.js
var Api = () => {
  const foo = [
    "--scfborder-width",
    "--scfborder-border-color",
    "--scfborder-shadow-color",
    "--scfborder-pattern-size",
    "--scfborder-pattern-color",
    "--scfborder-top-dent",
    "--scfborder-top-dent-length",
    "--scfborder-bottom-dent",
    "--scfborder-bottom-dent-length"
  ];
  return /* @__PURE__ */ react.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ react.createElement("h2", null, "Api"), /* @__PURE__ */ react.createElement("h4", null, "Properties with two values"), /* @__PURE__ */ react.createElement("p", null, 'These Properties accept up to two values, either as plain number (interpreted as pixel values) as pixel value (e.g. "42px") or as percentage. Percentages are calculated relative to the height or width of the container depending on context. If you set ', /* @__PURE__ */ react.createElement("em", null, "--scfborder-top-left"), ' to "50% 50%" the top left border will be inset at 45° on a 100px times 100px container, but look diffrently on a container that is 100px times 200px large.'), /* @__PURE__ */ react.createElement("p", null, "Each of these properties also accepts a single value, that then is applied twice."), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-top-left"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-top-right"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-bottom-right"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-bottom-left"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-pattern-shift"), /* @__PURE__ */ react.createElement("h4", null, "Properties with one value"), /* @__PURE__ */ react.createElement("p", null, `These properties accept one value. Properties ending in "color" will accept any way of declaring colors in css e.g. #f1f1f1 or 'hotpink'.`), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-width"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-border-color"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-shadow-color"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-pattern-size"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-pattern-color"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-top-dent"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-top-dent-length"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-bottom-dent"), /* @__PURE__ */ react.createElement("pre", null, "--scfborder-bottom-dent-length"));
};

// build/dist/Layout.js
var Layout = () => {
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(TopBar, null), /* @__PURE__ */ react.createElement("div", {
    className: "layout"
  }, /* @__PURE__ */ react.createElement(Intro, null), /* @__PURE__ */ react.createElement(Demo, null), /* @__PURE__ */ react.createElement(Explanation, null), /* @__PURE__ */ react.createElement(Api, null)));
};

// build/dist/App.js
var App = () => {
  return /* @__PURE__ */ react.createElement(Layout, null);
};

// build/_snowpack/pkg/css-paint-polyfill.js
!function() {
  function e(e2, t3) {
    var n3 = new XMLHttpRequest();
    n3.onreadystatechange = function() {
      n3.readyState === 4 && t3(n3.responseText);
    }, n3.open("GET", e2, true), n3.send();
  }
  function t2(e2, t3, n3) {
    Object.defineProperty ? Object.defineProperty(e2, t3, n3) : e2[t3] = n3.get();
  }
  var n2, r2 = window.CSS;
  r2 || (window.CSS = r2 = {}), r2.supports || (r2.supports = function e2(t3, n3) {
    if (t3 == "paint")
      return true;
    if (n3) {
      var r3 = u2.contentDocument.body;
      return r3.style.cssText = t3 + ":" + n3, r3.style.cssText.length > 0;
    }
    for (var i2, o2, a2, s2, l3 = /(^|not|(or)|(and))\s*\(\s*(.+?)\s*:(.+?)\)\s*|(.)/gi; a2 = l3.exec(t3); ) {
      if (a2[6])
        return false;
      s2 = e2(a2[4], a2[5]), o2 = a2[2] ? o2 || s2 : a2[3] ? o2 && s2 : (i2 = !a2[1], s2);
    }
    return o2 == i2;
  }), r2.escape || (r2.escape = function(e2) {
    return e2.replace(/([^\w-])/g, "\\$1");
  });
  var i = {};
  function o(e2, t3) {
    var n3 = parseFloat(e2);
    this.value = isNaN(n3) ? e2 : n3, this.unit = t3;
  }
  r2.registerProperty || (r2.registerProperty = function(e2) {
    i[e2.name] = e2;
  }), o.prototype.toString = function() {
    return this.value + (this.unit == "number" ? "" : this.unit);
  }, o.prototype.valueOf = function() {
    return this.value;
  }, "Hz Q ch cm deg dpcm dpi ddpx em ex fr grad in kHz mm ms number pc percent pt px rad rem s turn vh vmax vmin vw".split(" ").forEach(function(e2) {
    r2[e2] || (r2[e2] = function(t3) {
      return new o(t3, e2);
    });
  });
  var a = /(background|mask|cursor|-image|-source)/, s = !!r2.paintWorklet;
  s || (n2 = new ie2(), t2(r2, "paintWorklet", {enumerable: true, configurable: true, get: function() {
    return n2;
  }}));
  var l2 = "css-paint-polyfill", c = document.createElement(l2);
  s || document.documentElement.appendChild(c);
  var u2 = document.createElement("iframe");
  u2.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", c.appendChild(u2);
  var p3 = document.createElement("style");
  p3.id = l2, p3.$$isPaint = true, c.appendChild(p3);
  var d = p3.sheet, f = c.style, v3 = false, h = [], m = /(paint\(|-moz-element\(#paint-|-webkit-canvas\(paint-|[('"]blob:[^'"#]+#paint=|[('"]data:image\/paint-)/, g = "getCSSCanvasContext" in document, y2 = (f.backgroundImage = "-moz-element(#" + l2 + ")") === f.backgroundImage, $ = typeof Promise == "function";
  f.cssText = "display:none !important;";
  var b = window.requestAnimationFrame || setTimeout, w2 = function() {
    return window.devicePixelRatio || 1;
  }, P3 = {}, x2 = {}, R3 = 0;
  function S3(e2) {
    var t3 = e2.bit ^= 1;
    return e2.instances[t3] || (e2.instances[t3] = new e2.Painter());
  }
  function O3(e2, t3) {
    var n3 = e2.cssText, r3 = m.test(n3);
    if (t3.isNew === true && r3 && n3 !== (n3 = z3(n3)) && (e2 = function(e3, t4) {
      for (var n4 = e3.parentStyleSheet, r4 = e3.parentRule, i3 = (r4 || n4).cssRules, o3 = i3.length - 1, a3 = 0; a3 <= o3; a3++)
        if (i3[a3] === e3) {
          (r4 || n4).deleteRule(a3), o3 = a3;
          break;
        }
      if (t4 != null) {
        if (r4) {
          var s3 = r4.appendRule(t4);
          return r4.cssRules[s3];
        }
        return n4.insertRule(t4, o3), n4.cssRules[o3];
      }
    }(e2, n3)), r3) {
      var i2, o2, a2, s2 = e2.selectorText, l3 = B3(e2.style);
      if (i2 = t3.counters[s2] == null ? t3.counters[s2] = 1 : ++t3.counters[s2], x2[o2 = "sheet" + t3.sheetId + "\n" + s2 + "\n" + i2] != null) {
        if ((a2 = x2[o2]).selector === s2)
          return a2.rule = e2, void (a2.cssText !== l3 && t3.toProcess.push(a2));
        t3.toRemove.push(a2);
      } else
        a2 = x2[o2] = {key: o2, selector: s2, cssText: l3, properties: {}, rule: e2}, t3.toProcess.push(a2.selector);
    }
  }
  function C3(e2, t3) {
    if (!("ownerSVGElement" in e2)) {
      t3(e2);
      for (var n3 = e2.firstElementChild; n3; )
        C3(n3, t3), n3 = n3.nextElementSibling;
    }
  }
  function T3() {
    for (var e2, t3 = [].slice.call(document.styleSheets), n3 = {toProcess: [], toRemove: [], counters: {}, isNew: false, sheetId: null, rules: null}, r3 = 0; r3 < t3.length; r3++) {
      var i2 = t3[r3].ownerNode;
      if (!i2.$$isPaint) {
        try {
          n3.rules = i2.sheet.cssRules;
        } catch (e3) {
          continue;
        }
        if (n3.sheetId = i2.$$paintid, n3.isNew = n3.sheetId == null, n3.isNew) {
          if (n3.sheetId = i2.$$paintid = ++R3, k(i2) === false)
            continue;
          e2 = true;
        }
        E3(i2.sheet, O3, n3);
      }
    }
    for (var o2 = n3.toRemove.length; o2--; )
      delete x2[n3.toRemove[o2].key];
    n3.toProcess.length > 0 && F2(n3.toProcess.join(", ")), e2 && F2("[data-css-paint]", true);
  }
  function E3(t3, n3, r3) {
    var i2 = [[0, t3.cssRules]], o2 = i2[0], a2 = o2[1];
    if (a2)
      for (var s2 = 0; i2.length > 0; s2++)
        if (s2 >= a2.length) {
          i2.pop();
          var l3 = i2.length;
          l3 > 0 && (a2 = (o2 = i2[l3 - 1])[1], s2 = o2[0]);
        } else {
          o2[0] = s2;
          var c2 = a2[s2];
          if (c2.type !== 3)
            if (c2.type === 1) {
              var u3 = n3(c2, r3);
              u3 !== void 0 && (r3 = u3);
            } else
              c2.cssRules && c2.cssRules.length > 0 && i2.push([0, c2.cssRules]);
          else {
            if (c2.$$isPaint)
              continue;
            var p4 = c2.media && c2.media.mediaText;
            if (p4 && !self.matchMedia(p4).matches)
              continue;
            if (/ts\.g.{7}is\.com\/css/.test(c2.href))
              continue;
            c2.$$isPaint = true, e(c2.href, N3);
          }
        }
    return r3;
  }
  function k(t3) {
    if (!t3.$$isPaint) {
      if (t3.href)
        return e(t3.href, N3), false;
      for (var n3 = t3.childNodes.length; n3--; ) {
        var r3 = t3.childNodes[n3].nodeValue, i2 = z3(r3);
        i2 !== r3 && (t3.childNodes[n3].nodeValue = i2);
      }
    }
  }
  function N3(e2) {
    var t3 = function(e3) {
      var t4 = u2.contentDocument.body, n4 = document.createElement("style");
      return n4.media = "print", n4.$$paintid = ++R3, n4.appendChild(document.createTextNode(e3)), t4.appendChild(n4), n4.sheet.remove = function() {
        return t4.removeChild(n4);
      }, n4.sheet;
    }(z3(e2));
    try {
      t3._ = t3.cssRules.length;
    } catch (e3) {
      var n3 = function() {
        t3 && G3(t3), t3 = null, clearTimeout(r3);
      };
      t3.ownerNode.onload = t3.ownerNode.onerror = n3;
      var r3 = setTimeout(n3, 5e3);
      return;
    }
    G3(t3);
  }
  function G3(e2) {
    var t3 = "";
    if (E3(e2, function(e3) {
      if (e3.type === 1) {
        for (var n4 = "", r3 = 0; r3 < e3.style.length; r3++) {
          var i2 = e3.style.item(r3), o2 = e3.style.getPropertyValue(i2);
          m.test(o2) && (n4 = i2 + ": " + o2 + e3.style.getPropertyPriority(i2) + ";");
        }
        if (n4) {
          n4 = e3.selectorText + "{" + n4 + "}";
          for (var a2 = e3; a2 = a2.parentRule; )
            n4 = "" + a2.cssText.match(/^[\s\S]+?\{/)[0] + n4 + "}";
          t3 += n4;
        }
      }
    }), e2.remove(), t3) {
      var n3 = document.createElement("style");
      n3.appendChild(document.createTextNode(t3)), c.appendChild(n3), T3();
    }
  }
  function z3(e2) {
    return e2.replace(/( |;|,|\b)paint\s*\(\s*(['"]?)(.+?)\2\s*\)( |;|,|!|\b|$)/g, "$1url(data:image/paint-$3,=)$4");
  }
  var V3, D3, L3, j = [];
  function A3(e2, t3) {
    t3 && (e2.$$paintObservedProperties = null, e2.$$paintGeometry && !e2.$$paintGeometry.live && (e2.$$paintGeometry = null)), e2.$$paintPending !== true && (e2.$$paintPending = true, j.indexOf(e2) === -1 && j.push(e2) === 1 && b(I3));
  }
  function I3() {
    for (var e2, t3 = 0; t3 < j.length; t3++)
      j[t3] && j[t3].localName === "style" && (e2 = true, j[t3] = null);
    if (e2)
      return b(I3), void T3();
    var n3 = j.length && j.some(function(e3) {
      return e3 && e3.$$needsOverrides === true;
    });
    for (n3 && K3(); j.length; ) {
      var r3 = j.pop();
      r3 && W3(r3);
    }
    n3 && Y2();
  }
  function F2(e2, t3) {
    try {
      for (var n3 = document.querySelectorAll(e2), r3 = 0; r3 < n3.length; r3++)
        A3(n3[r3], t3);
    } catch (e3) {
    }
  }
  function M3(e2, t3, n3) {
    for (var r3 = e2.length, i2 = function() {
      --r3 || t3.apply(null, n3 || h);
    }, o2 = 0; o2 < e2.length; o2++) {
      var a2 = new Image();
      a2.onload = i2, a2.onerror = onerror, a2.src = e2[o2];
    }
  }
  function H3(e2) {
    var t3 = e2.$$paintId;
    return t3 == null && (t3 = e2.$$paintId = ++Z2), t3;
  }
  function U3(e2) {
    var t3 = e2.$$paintRule, n3 = H3(e2);
    if (Number(e2.getAttribute("data-css-paint")) !== n3 && e2.setAttribute("data-css-paint", n3), t3 == null) {
      var r3 = d.insertRule('[data-css-paint="' + n3 + '"] {}', d.cssRules.length);
      t3 = e2.$$paintRule = d.cssRules[r3];
    }
    return t3;
  }
  function B3(e2) {
    var t3 = e2.cssText;
    if (t3)
      return t3;
    t3 = "";
    for (var n3 = 0, r3 = void 0; n3 < e2.length; n3++)
      r3 = e2[n3], n3 !== 0 && (t3 += " "), t3 += r3, t3 += ":", t3 += e2.getPropertyValue(r3), t3 += ";";
    return t3;
  }
  function W3(e2) {
    var t3 = getComputedStyle(e2);
    if (e2.$$paintObservedProperties && !e2.$$needsOverrides)
      for (var n3 = 0; n3 < e2.$$paintObservedProperties.length; n3++) {
        var r3 = e2.$$paintObservedProperties[n3];
        if (t3.getPropertyValue(r3).trim() !== e2.$$paintedPropertyValues[r3]) {
          _(e2, t3);
          break;
        }
      }
    else if (e2.$$paintId || m.test(B3(t3)))
      _(e2, t3);
    else {
      var i2 = e2.getAttribute("style");
      m.test(i2) && (e2.style.cssText = i2.replace(/;\s*$/, "") + "; " + e2.style.cssText, _(e2));
    }
    e2.$$paintPending = false;
  }
  function q2(e2) {
    e2.$$paintGeometry && !e2.$$paintGeometry.live && (e2.$$paintGeometry = null), A3(e2);
  }
  var Q3 = {get: function(e2) {
    var t3 = i[e2], n3 = t3 && t3.inherits === false ? D3.style.getPropertyValue(e2) : Q3.getRaw(e2);
    if (n3 == null && t3)
      n3 = t3.initialValue;
    else if (t3 && t3.syntax) {
      var o2 = t3.syntax.replace(/[<>\s]/g, "");
      typeof r2[o2] == "function" && (n3 = r2[o2](n3));
    }
    return typeof n3 == "string" && (n3 = n3.trim()), n3;
  }, getRaw: function(e2) {
    if (e2 in L3)
      return L3[e2];
    var t3 = V3.getPropertyValue(e2);
    return typeof t3 == "string" && (t3 = t3.trim()), L3[e2] = t3;
  }};
  var X2 = window.ResizeObserver && new window.ResizeObserver(function(e2) {
    for (var t3 = 0; t3 < e2.length; t3++) {
      var n3 = e2[t3], r3 = n3.target.$$paintGeometry;
      r3 ? r3.live = true : r3 = n3.target.$$paintGeometry = {width: 0, height: 0, live: true};
      var i2 = n3.borderBoxSize;
      if (i2 && i2.length && (i2 = i2[0]), i2)
        r3.width = 0 | i2.inlineSize, r3.height = 0 | i2.blockSize;
      else {
        var o2 = getComputedStyle(n3.target), a2 = parseFloat(o2.paddingLeft) + parseFloat(o2.paddingRight), s2 = parseFloat(o2.paddingTop) + parseFloat(o2.paddingBottom);
        r3.width = Math.round((n3.contentRect.right - n3.contentRect.left || n3.contentRect.width) + a2), r3.height = Math.round((n3.contentRect.bottom - n3.contentRect.top || n3.contentRect.height) + s2);
      }
      A3(n3.target, true);
    }
  });
  var Z2 = 0;
  function _(e2, t3) {
    e2.$$needsOverrides === true && K3();
    var n3, r3 = V3 = t3 == null ? getComputedStyle(e2) : t3;
    D3 = e2, L3 = {};
    var i2 = [];
    e2.$$paintPending = false;
    var o2 = function(e3) {
      return e3.$$paintGeometry || (e3.$$paintGeometry = {width: e3.clientWidth, height: e3.clientHeight, live: false});
    }(e2);
    !function(e3) {
      X2 && !e3.$$paintGeometry.live && (e3.$$paintGeometry.live = true, X2.observe(e3));
    }(e2), o2 = {width: o2.width, height: o2.height};
    for (var s2 = w2(), l3 = e2.$$paintedProperties, u3 = 0; u3 < r3.length; u3++) {
      var p4 = r3[u3], d2 = Q3.getRaw(p4), f2 = /(,|\b|^)(?:url\((['"]?))?((?:-moz-element\(#|-webkit-canvas\()paint-\d+-([^;,]+)|(?:data:image\/paint-|blob:[^'"#]+#paint=)([^"';, ]+)(?:[;,].*?)?)\2\)(;|,|\s|\b|$)/g, v4 = "", h2 = 0, m2 = [], $2 = false, b2 = false, x3 = void 0, R4 = void 0, O4 = false, C4 = o2;
      if (a.test(p4) && p4 !== "-webkit-border-image") {
        if (/border-image/.test(p4)) {
          var T4 = C4.width, E4 = C4.height, k2 = re2(Q3.getRaw("border-image-slice").replace(/\sfill/, "").split(" ")), N4 = re2(Q3.getRaw("border-width").split(" ")), G4 = re2(Q3.getRaw("border-image-outset").split(" "));
          T4 += ne2(k2.left != "0" && parseFloat(N4.left) || 0, G4.left || 0, true), T4 += ne2(k2.right != "0" && parseFloat(N4.right) || 0, G4.right || 0, true), E4 += ne2(k2.top != "0" && parseFloat(N4.top) || 0, G4.top || 0, true), O4 = true, C4 = {width: T4, height: E4 += ne2(k2.bottom != "0" && parseFloat(N4.bottom) || 0, G4.bottom || 0, true)};
        }
        for (; R4 = f2.exec(d2); ) {
          b2 === false && (x3 = H3(e2)), b2 = true, v4 += d2.substring(0, R4.index);
          var z4 = R4[4] || R4[5], j2 = R4[3], A4 = P3[z4], I4 = A4 && A4.Painter.contextOptions || {}, F3 = O4 || I4.scaling === false ? 1 : s2, B4 = void 0;
          A4 && (A4.Painter.inputProperties && i2.push.apply(i2, A4.Painter.inputProperties), B4 = S3(A4)), I4.nativePixels === true && (C4.width *= s2, C4.height *= s2, F3 = 1);
          var W4 = F3 * C4.width, q3 = F3 * C4.height, Z3 = e2.$$paintContext, _2 = "paint-" + x3 + "-" + z4, J3 = Z3 && Z3.canvas;
          if (!J3 || J3.width != W4 || J3.height != q3 || g === true && Z3 && _2 !== Z3.id) {
            if (g === true)
              (Z3 = document.getCSSCanvasContext("2d", _2, W4, q3)).id = _2, e2.$$paintContext && Z3.clearRect(0, 0, W4, q3);
            else {
              var ie3 = false;
              J3 || ((J3 = document.createElement("canvas")).id = _2, ie3 = y2), J3.width = W4, J3.height = q3, ie3 && (J3.style.display = "none", c.appendChild(J3)), Z3 = J3.getContext("2d");
            }
            e2.$$paintContext = Z3, Z3.imageSmoothingEnabled = false, F3 !== 1 && Z3.scale(F3, F3);
          } else
            Z3.clearRect(0, 0, W4, q3);
          if (B4 && (Z3.save(), Z3.beginPath(), B4.paint(Z3, C4, Q3), Z3.closePath(), Z3.restore(), g === false && !y2 && "resetTransform" in Z3 && Z3.resetTransform()), v4 += R4[1], g === true)
            v4 += "-webkit-canvas(" + _2 + ")", (R4[4] == null || J3 && J3.id !== _2) && ($2 = true);
          else if (y2 === true)
            v4 += "-moz-element(#" + _2 + ")", R4[4] == null && ($2 = true), J3 && J3.id !== _2 && (J3.id = _2, $2 = true);
          else {
            var oe2 = J3.toDataURL("image/png").replace("/png", "/paint-" + z4);
            if (typeof MSBlobBuilder == "function" && (oe2 = ee2(oe2, z4)), m2.push(oe2), v4 += 'url("' + oe2 + '")', oe2 !== j2 || !n3) {
              var ae2 = j2 ? j2.indexOf("#") : -1;
              ~ae2 && URL.revokeObjectURL(j2.substring(0, ae2)), $2 = true;
            }
            j2 = oe2;
          }
          v4 += R4[6], h2 = R4.index + R4[0].length;
        }
        b2 !== false || l3 == null || l3[p4] == null ? (v4 += d2.substring(h2), $2 && (n3 || (n3 = U3(e2)), l3 == null && (l3 = e2.$$paintedProperties = {}), l3[p4] = true, p4.substring(0, 10) === "background" && s2 !== 1 && te2(n3.style, "background-size", "100% 100%"), /mask/.test(p4) && s2 !== 1 && (te2(n3.style, "mask-size", "contain"), g && te2(n3.style, "-webkit-mask-size", "contain")), /border-image/.test(p4) && g && (te2(n3.style, "border-color", "initial"), te2(n3.style, "image-rendering", "optimizeSpeed")), m2.length === 0 ? te2(n3.style, p4, v4) : M3(m2, te2, [n3.style, p4, v4]))) : (n3 || (n3 = U3(e2)), n3.style.removeProperty(p4), X2 && X2.unobserve(e2), e2.$$paintGeometry && (e2.$$paintGeometry.live = false));
      }
    }
    e2.$$paintObservedProperties = i2.length === 0 ? null : i2;
    for (var se2 = e2.$$paintedPropertyValues = {}, le2 = 0; le2 < i2.length; le2++) {
      var ce2 = i2[le2];
      se2[ce2] = Q3.getRaw(ce2);
    }
    e2.$$needsOverrides === true && Y2(), e2.$$needsOverrides = null;
  }
  var J2 = 0;
  function K3() {
    J2++ || (p3.disabled = true);
  }
  function Y2() {
    --J2 || (p3.disabled = false);
  }
  function ee2(e2, t3) {
    for (var n3 = atob(e2.split(",")[1]), r3 = new Uint8Array(n3.length), i2 = 0; i2 < n3.length; i2++)
      r3[i2] = n3.charCodeAt(i2);
    return URL.createObjectURL(new Blob([r3])) + "#paint=" + t3;
  }
  function te2(e2, t3, n3) {
    var r3 = v3;
    v3 = true, e2.setProperty(t3, n3, "important"), v3 = r3;
  }
  function ne2(e2, t3, n3) {
    var r3 = n3 ? 0 : e2, i2 = parseFloat(t3);
    return t3 ? t3.match("px") ? r3 + i2 : (t3.match("%") && (i2 /= 100), e2 * i2) : r3;
  }
  function re2(e2) {
    return {top: e2[0], bottom: e2[2] || e2[0], left: e2[3] || e2[1] || e2[0], right: e2[1] || e2[0]};
  }
  function ie2() {
  }
  if (ie2.prototype.addModule = function(n3) {
    var r3, i2, o2 = this;
    return $ && (r3 = new Promise(function(e2) {
      return i2 = e2;
    })), e(n3, function(e2) {
      var n4 = {registerPaint: function(e3, t3) {
        !function(e4, t4, n5) {
          P3[e4] = {worklet: n5, Painter: t4, properties: t4.inputProperties ? [].slice.call(t4.inputProperties) : [], bit: 0, instances: []};
          for (var r5 = "", i3 = d.cssRules.length; i3--; ) {
            var o3 = d.cssRules[i3];
            o3.style.cssText.indexOf("-" + e4) !== -1 && (r5 += o3.selectorText);
          }
          r5 && F2(r5, true);
        }(e3, t3, {context: n4, realm: r4});
      }};
      t2(n4, "devicePixelRatio", {get: w2}), n4.self = n4;
      var r4 = new function(e3, t3) {
        var n5 = document.createElement("iframe");
        n5.style.cssText = "position:absolute; left:0; top:-999px; width:1px; height:1px;", t3.appendChild(n5);
        var r5 = n5.contentWindow, i3 = r5.document, o3 = "var window,$hook";
        for (var a2 in r5)
          a2 in e3 || a2 === "eval" || (o3 += ",", o3 += a2);
        for (var s2 in e3)
          o3 += ",", o3 += s2, o3 += "=self.", o3 += s2;
        var l3 = i3.createElement("script");
        l3.appendChild(i3.createTextNode('function $hook(self,console) {"use strict";\n		' + o3 + ";return function() {return eval(arguments[0])}}")), i3.body.appendChild(l3), this.exec = r5.$hook(e3, console);
      }(n4, u2.contentDocument && u2.contentDocument.body || c);
      e2 = (o2.transpile || String)(e2), r4.exec(e2), i2 && i2();
    }), r3;
  }, !s)
    try {
      !function() {
        var e2 = false;
        new MutationObserver(function(t3) {
          if (e2 !== true && !J2) {
            e2 = true;
            for (var n4 = 0; n4 < t3.length; n4++) {
              var r4 = t3[n4], i3 = r4.target, o3 = void 0, a2 = void 0;
              if (!(i3 && "ownerSVGElement" in i3)) {
                if (r4.type === "childList") {
                  if (o3 = r4.addedNodes)
                    for (var s3 = 0; s3 < o3.length; s3++)
                      o3[s3].nodeType === 1 && C3(o3[s3], A3);
                  if (a2 = r4.removedNodes)
                    for (var l4 = 0; l4 < a2.length; l4++)
                      X2 && a2[l4].$$paintGeometry && (a2[l4].$$paintGeometry.live = false, X2 && X2.unobserve(a2[l4]));
                } else if (r4.type === "attributes" && i3.nodeType === 1) {
                  if (r4.attributeName === "data-css-paint" && r4.oldValue && i3.$$paintId != null && !i3.getAttribute("data-css-paint")) {
                    H3(i3);
                    continue;
                  }
                  C3(i3, q2);
                }
              }
            }
            e2 = false;
          }
        }).observe(document.body, {childList: true, attributes: true, attributeOldValue: true, subtree: true});
        var n3 = Object.getOwnPropertyDescriptor(Element.prototype, "setAttribute"), r3 = n3.value;
        n3.value = function(e3, t3) {
          return e3 === "style" && m.test(t3) && (t3 = z3(t3), H3(this), this.$$needsOverrides = true, q2(this)), r3.call(this, e3, t3);
        }, t2(Element.prototype, "setAttribute", n3);
        var i2 = Object.getOwnPropertyDescriptor(Element.prototype, "removeAttribute"), o2 = i2.value;
        i2.value = function(e3) {
          if (e3 !== "data-css-paint")
            return o2.call(this, e3);
        }, t2(Element.prototype, "removeAttribute", i2);
        var s2 = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "style"), l3 = s2.get;
        s2.set = function(e3) {
          return s2.get.call(this).cssText = e3;
        }, s2.get = function() {
          var e3 = l3.call(this);
          return e3.ownerElement !== this && t2(e3, "ownerElement", {value: this}), e3;
        }, t2(HTMLElement.prototype, "style", s2);
        var c2 = {}, u3 = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "cssText"), p4 = u3.set;
        u3.set = function(e3) {
          if (!J2 && m.test(e3)) {
            e3 = e3 && z3(e3);
            var t3 = this.ownerElement;
            t3 && (H3(t3), t3.$$needsOverrides = true, q2(t3));
          }
          return p4.call(this, e3);
        }, c2.cssText = u3, Object.keys((window.CSS2Properties || CSSStyleDeclaration).prototype).filter(function(e3) {
          return a.test(e3);
        }).forEach(function(e3) {
          var t3 = e3.replace(/([A-Z])/g, "-$1").toLowerCase();
          c2[e3] = {configurable: true, enumerable: true, get: function() {
            var e4 = this.getPropertyPriority(t3);
            return this.getPropertyValue(t3) + (e4 ? " !" + e4 : "");
          }, set: function(n4) {
            var r4 = String(n4).match(/^(.*?)\s*(?:!\s*(important)\s*)?$/);
            return this.setProperty(t3, r4[1], r4[2]), this[e3];
          }};
        });
        var d2 = Object.getOwnPropertyDescriptor(CSSStyleDeclaration.prototype, "setProperty"), f2 = d2.value;
        d2.value = function(e3, t3, n4) {
          if (!v3 && !J2 && m.test(t3)) {
            t3 = t3 && z3(t3);
            var r4 = this.ownerElement;
            r4 && (H3(r4), r4.$$needsOverrides = true, q2(r4));
          }
          f2.call(this, e3, t3, n4);
        }, c2.setProperty = d2, Object.defineProperties(CSSStyleDeclaration.prototype, c2), window.CSS2Properties && Object.defineProperties(window.CSS2Properties.prototype, c2), addEventListener("resize", function() {
          F2("[data-css-paint]");
        });
        var h2 = {passive: true};
        function g2(e3) {
          for (var t3 = e3.target; t3; )
            t3.nodeType === 1 && A3(t3), t3 = t3.parentNode;
        }
        ["animationiteration", "animationend", "animationstart", "transitionstart", "transitionend", "transitionrun", "transitioncancel", "mouseover", "mouseout", "mousedown", "mouseup", "focus", "blur"].forEach(function(e3) {
          addEventListener(e3, g2, h2);
        }), T3(), F2('[style*="paint"]');
      }();
    } catch (e2) {
    }
}();

// build/dist/index.js
import.meta.env = env_exports;
CSS.paintWorklet.addModule(new URL("./scfBorder.js", import.meta.url));
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App, null)), document.getElementById("root"));
if (void 0) {
  (void 0).accept();
}
//# sourceMappingURL=index.js.map

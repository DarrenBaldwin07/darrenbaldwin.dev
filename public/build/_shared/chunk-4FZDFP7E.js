import {
  require_react_dom
} from "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn2) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn2(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esm({
  "node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
    memoize_browser_esm_default = memoize;
  }
});

// node_modules/.pnpm/@emotion+is-prop-valid@0.8.8/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var is_prop_valid_browser_esm_exports = {};
__export(is_prop_valid_browser_esm_exports, {
  default: () => is_prop_valid_browser_esm_default
});
var reactPropsRegex, index, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esm({
  "node_modules/.pnpm/@emotion+is-prop-valid@0.8.8/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
    init_memoize_browser_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_browser_esm_default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
      /* Z+1 */
    );
    is_prop_valid_browser_esm_default = index;
  }
});

// node_modules/.pnpm/@rapid-web+ui@0.2.2_biqbaboplfbrettd7655fr4n2y/node_modules/@rapid-web/ui/dist/@rapid-web/ui.es.js
var U = __toESM(require_react());
var import_react = __toESM(require_react());
var xc = __toESM(require_react_dom());
var import_react_dom = __toESM(require_react_dom());
var Wt = {};
var Sc = {
  get exports() {
    return Wt;
  },
  set exports(e) {
    Wt = e;
  }
};
var Mt = {};
var yi;
function Pc() {
  return yi || (yi = 1, function() {
    var e = import_react.default, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function v(p) {
      if (p === null || typeof p != "object")
        return null;
      var S = m && p[m] || p[g];
      return typeof S == "function" ? S : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(p) {
      {
        for (var S = arguments.length, A = new Array(S > 1 ? S - 1 : 0), L = 1; L < S; L++)
          A[L - 1] = arguments[L];
        w("error", p, A);
      }
    }
    function w(p, S, A) {
      {
        var L = x.ReactDebugCurrentFrame, B = L.getStackAddendum();
        B !== "" && (S += "%s", A = A.concat([B]));
        var K = A.map(function(F) {
          return String(F);
        });
        K.unshift("Warning: " + S), Function.prototype.apply.call(console[p], console, K);
      }
    }
    var b = false, P = false, E = false, N = false, W = false, _;
    _ = Symbol.for("react.module.reference");
    function D(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || W || p === o || p === c || p === u || N || p === h || b || P || E || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === _ || p.getModuleId !== void 0));
    }
    function $(p, S, A) {
      var L = p.displayName;
      if (L)
        return L;
      var B = S.displayName || S.name || "";
      return B !== "" ? A + "(" + B + ")" : A;
    }
    function z(p) {
      return p.displayName || "Context";
    }
    function H(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var S = p;
            return z(S) + ".Consumer";
          case i:
            var A = p;
            return z(A._context) + ".Provider";
          case l:
            return $(p, p.render, "ForwardRef");
          case d:
            var L = p.displayName || null;
            return L !== null ? L : H(p.type) || "Memo";
          case f: {
            var B = p, K = B._payload, F = B._init;
            try {
              return H(F(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, k = 0, V, Q, ae, le, we, Y, on;
    function sn() {
    }
    sn.__reactDisabledLog = true;
    function Kl() {
      {
        if (k === 0) {
          V = console.log, Q = console.info, ae = console.warn, le = console.error, we = console.group, Y = console.groupCollapsed, on = console.groupEnd;
          var p = {
            configurable: true,
            enumerable: true,
            value: sn,
            writable: true
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        k++;
      }
    }
    function ql() {
      {
        if (k--, k === 0) {
          var p = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: j({}, p, {
              value: V
            }),
            info: j({}, p, {
              value: Q
            }),
            warn: j({}, p, {
              value: ae
            }),
            error: j({}, p, {
              value: le
            }),
            group: j({}, p, {
              value: we
            }),
            groupCollapsed: j({}, p, {
              value: Y
            }),
            groupEnd: j({}, p, {
              value: on
            })
          });
        }
        k < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var or = x.ReactCurrentDispatcher, ir;
    function an(p, S, A) {
      {
        if (ir === void 0)
          try {
            throw Error();
          } catch (B) {
            var L = B.stack.trim().match(/\n( *(at )?)/);
            ir = L && L[1] || "";
          }
        return `
` + ir + p;
      }
    }
    var sr = false, ln;
    {
      var Xl = typeof WeakMap == "function" ? WeakMap : Map;
      ln = new Xl();
    }
    function ti(p, S) {
      if (!p || sr)
        return "";
      {
        var A = ln.get(p);
        if (A !== void 0)
          return A;
      }
      var L;
      sr = true;
      var B = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = or.current, or.current = null, Kl();
      try {
        if (S) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (Oe) {
              L = Oe;
            }
            Reflect.construct(p, [], F);
          } else {
            try {
              F.call();
            } catch (Oe) {
              L = Oe;
            }
            p.call(F.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            L = Oe;
          }
          p();
        }
      } catch (Oe) {
        if (Oe && L && typeof Oe.stack == "string") {
          for (var I = Oe.stack.split(`
`), fe = L.stack.split(`
`), te = I.length - 1, ne = fe.length - 1; te >= 1 && ne >= 0 && I[te] !== fe[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (I[te] !== fe[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || I[te] !== fe[ne]) {
                    var Se = `
` + I[te].replace(" at new ", " at ");
                    return p.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", p.displayName)), typeof p == "function" && ln.set(p, Se), Se;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        sr = false, or.current = K, ql(), Error.prepareStackTrace = B;
      }
      var gt = p ? p.displayName || p.name : "", pi = gt ? an(gt) : "";
      return typeof p == "function" && ln.set(p, pi), pi;
    }
    function Zl(p, S, A) {
      return ti(p, false);
    }
    function Jl(p) {
      var S = p.prototype;
      return !!(S && S.isReactComponent);
    }
    function cn(p, S, A) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return ti(p, Jl(p));
      if (typeof p == "string")
        return an(p);
      switch (p) {
        case c:
          return an("Suspense");
        case u:
          return an("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return Zl(p.render);
          case d:
            return cn(p.type, S, A);
          case f: {
            var L = p, B = L._payload, K = L._init;
            try {
              return cn(K(B), S, A);
            } catch {
            }
          }
        }
      return "";
    }
    var un = Object.prototype.hasOwnProperty, ni = {}, ri = x.ReactDebugCurrentFrame;
    function dn(p) {
      if (p) {
        var S = p._owner, A = cn(p.type, p._source, S ? S.type : null);
        ri.setExtraStackFrame(A);
      } else
        ri.setExtraStackFrame(null);
    }
    function Ql(p, S, A, L, B) {
      {
        var K = Function.call.bind(un);
        for (var F in p)
          if (K(p, F)) {
            var I = void 0;
            try {
              if (typeof p[F] != "function") {
                var fe = Error((L || "React class") + ": " + A + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw fe.name = "Invariant Violation", fe;
              }
              I = p[F](S, F, L, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              I = te;
            }
            I && !(I instanceof Error) && (dn(B), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", A, F, typeof I), dn(null)), I instanceof Error && !(I.message in ni) && (ni[I.message] = true, dn(B), y("Failed %s type: %s", A, I.message), dn(null));
          }
      }
    }
    var ec = Array.isArray;
    function ar(p) {
      return ec(p);
    }
    function tc(p) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, A = S && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return A;
      }
    }
    function nc(p) {
      try {
        return oi(p), false;
      } catch {
        return true;
      }
    }
    function oi(p) {
      return "" + p;
    }
    function ii(p) {
      if (nc(p))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tc(p)), oi(p);
    }
    var Ct = x.ReactCurrentOwner, rc = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    }, si, ai, lr;
    lr = {};
    function oc(p) {
      if (un.call(p, "ref")) {
        var S = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (S && S.isReactWarning)
          return false;
      }
      return p.ref !== void 0;
    }
    function ic(p) {
      if (un.call(p, "key")) {
        var S = Object.getOwnPropertyDescriptor(p, "key").get;
        if (S && S.isReactWarning)
          return false;
      }
      return p.key !== void 0;
    }
    function sc(p, S) {
      if (typeof p.ref == "string" && Ct.current && S && Ct.current.stateNode !== S) {
        var A = H(Ct.current.type);
        lr[A] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(Ct.current.type), p.ref), lr[A] = true);
      }
    }
    function ac(p, S) {
      {
        var A = function() {
          si || (si = true, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        A.isReactWarning = true, Object.defineProperty(p, "key", {
          get: A,
          configurable: true
        });
      }
    }
    function lc(p, S) {
      {
        var A = function() {
          ai || (ai = true, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        A.isReactWarning = true, Object.defineProperty(p, "ref", {
          get: A,
          configurable: true
        });
      }
    }
    var cc = function(p, S, A, L, B, K, F) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: S,
        ref: A,
        props: F,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }), Object.defineProperty(I, "_self", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: L
      }), Object.defineProperty(I, "_source", {
        configurable: false,
        enumerable: false,
        writable: false,
        value: B
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function uc(p, S, A, L, B) {
      {
        var K, F = {}, I = null, fe = null;
        A !== void 0 && (ii(A), I = "" + A), ic(S) && (ii(S.key), I = "" + S.key), oc(S) && (fe = S.ref, sc(S, B));
        for (K in S)
          un.call(S, K) && !rc.hasOwnProperty(K) && (F[K] = S[K]);
        if (p && p.defaultProps) {
          var te = p.defaultProps;
          for (K in te)
            F[K] === void 0 && (F[K] = te[K]);
        }
        if (I || fe) {
          var ne = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          I && ac(F, ne), fe && lc(F, ne);
        }
        return cc(p, I, fe, B, L, Ct.current, F);
      }
    }
    var cr = x.ReactCurrentOwner, li = x.ReactDebugCurrentFrame;
    function mt(p) {
      if (p) {
        var S = p._owner, A = cn(p.type, p._source, S ? S.type : null);
        li.setExtraStackFrame(A);
      } else
        li.setExtraStackFrame(null);
    }
    var ur;
    ur = false;
    function dr(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function ci() {
      {
        if (cr.current) {
          var p = H(cr.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function dc(p) {
      {
        if (p !== void 0) {
          var S = p.fileName.replace(/^.*[\\\/]/, ""), A = p.lineNumber;
          return `

Check your code at ` + S + ":" + A + ".";
        }
        return "";
      }
    }
    var ui = {};
    function fc(p) {
      {
        var S = ci();
        if (!S) {
          var A = typeof p == "string" ? p : p.displayName || p.name;
          A && (S = `

Check the top-level render call using <` + A + ">.");
        }
        return S;
      }
    }
    function di(p, S) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = true;
        var A = fc(S);
        if (ui[A])
          return;
        ui[A] = true;
        var L = "";
        p && p._owner && p._owner !== cr.current && (L = " It was passed a child from " + H(p._owner.type) + "."), mt(p), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, L), mt(null);
      }
    }
    function fi(p, S) {
      {
        if (typeof p != "object")
          return;
        if (ar(p))
          for (var A = 0; A < p.length; A++) {
            var L = p[A];
            dr(L) && di(L, S);
          }
        else if (dr(p))
          p._store && (p._store.validated = true);
        else if (p) {
          var B = v(p);
          if (typeof B == "function" && B !== p.entries)
            for (var K = B.call(p), F; !(F = K.next()).done; )
              dr(F.value) && di(F.value, S);
        }
      }
    }
    function hc(p) {
      {
        var S = p.type;
        if (S == null || typeof S == "string")
          return;
        var A;
        if (typeof S == "function")
          A = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === d))
          A = S.propTypes;
        else
          return;
        if (A) {
          var L = H(S);
          Ql(A, p.props, "prop", L, p);
        } else if (S.PropTypes !== void 0 && !ur) {
          ur = true;
          var B = H(S);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", B || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pc(p) {
      {
        for (var S = Object.keys(p.props), A = 0; A < S.length; A++) {
          var L = S[A];
          if (L !== "children" && L !== "key") {
            mt(p), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), mt(null);
            break;
          }
        }
        p.ref !== null && (mt(p), y("Invalid attribute `ref` supplied to `React.Fragment`."), mt(null));
      }
    }
    function hi(p, S, A, L, B, K) {
      {
        var F = D(p);
        if (!F) {
          var I = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var fe = dc(B);
          fe ? I += fe : I += ci();
          var te;
          p === null ? te = "null" : ar(p) ? te = "array" : p !== void 0 && p.$$typeof === t ? (te = "<" + (H(p.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : te = typeof p, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, I);
        }
        var ne = uc(p, S, A, B, K);
        if (ne == null)
          return ne;
        if (F) {
          var Se = S.children;
          if (Se !== void 0)
            if (L)
              if (ar(Se)) {
                for (var gt = 0; gt < Se.length; gt++)
                  fi(Se[gt], p);
                Object.freeze && Object.freeze(Se);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fi(Se, p);
        }
        return p === r ? pc(ne) : hc(ne), ne;
      }
    }
    function mc(p, S, A) {
      return hi(p, S, A, true);
    }
    function gc(p, S, A) {
      return hi(p, S, A, false);
    }
    var yc = gc, vc = mc;
    Mt.Fragment = r, Mt.jsx = yc, Mt.jsxs = vc;
  }()), Mt;
}
(function(e) {
  false ? e.exports = Tc() : e.exports = Pc();
})(Sc);
var St = Wt.Fragment;
var T = Wt.jsx;
var Gt = Wt.jsxs;
function Ac() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = zs(t)) && (r && (r += " "), r += n);
  return r;
}
function zs(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = zs(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
var ho = "-";
function Ec(e) {
  var t = Rc(e);
  function n(o) {
    var s = o.split(ho);
    return s[0] === "" && s.length !== 1 && s.shift(), Ws(s, t) || Cc(o);
  }
  function r(o) {
    return e.conflictingClassGroups[o] || [];
  }
  return {
    getClassGroupId: n,
    getConflictingClassGroupIds: r
  };
}
function Ws(e, t) {
  var n;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), s = o ? Ws(e.slice(1), o) : void 0;
  if (s)
    return s;
  if (t.validators.length !== 0) {
    var i = e.join(ho);
    return (n = t.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : n.classGroupId;
  }
}
var vi = /^\[(.+)\]$/;
function Cc(e) {
  if (vi.test(e)) {
    var t = vi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Rc(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Lc(Object.entries(e.classGroups), n);
  return o.forEach(function(s) {
    var i = s[0], a = s[1];
    Ir(a, r, i, t);
  }), r;
}
function Ir(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var s = o === "" ? t : bi(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Mc(o)) {
        Ir(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var a = i[0], l = i[1];
      Ir(l, bi(t, a), n, r);
    });
  });
}
function bi(e, t) {
  var n = e;
  return t.split(ho).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Mc(e) {
  return e.isThemeGetter;
}
function Lc(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], s = o.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(a) {
        var l = a[0], c = a[1];
        return [t + l, c];
      })) : i;
    });
    return [r, s];
  }) : e;
}
function Dc(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set: function(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}
var Gs = "!";
function Nc(e) {
  var t = e.separator || ":";
  return function(r) {
    for (var o = 0, s = [], i = 0, a = 0; a < r.length; a++) {
      var l = r[a];
      o === 0 && l === t[0] && (t.length === 1 || r.slice(a, a + t.length) === t) && (s.push(r.slice(i, a)), i = a + t.length), l === "[" ? o++ : l === "]" && o--;
    }
    var c = s.length === 0 ? r : r.substring(i), u = c.startsWith(Gs), d = u ? c.substring(1) : c;
    return {
      modifiers: s,
      hasImportantModifier: u,
      baseClassName: d
    };
  };
}
function kc(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Vc(e) {
  return Vr({
    cache: Dc(e.cacheSize),
    splitModifiers: Nc(e)
  }, Ec(e));
}
var Ic = /\s+/;
function Oc(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, s = /* @__PURE__ */ new Set();
  return e.trim().split(Ic).map(function(i) {
    var a = n(i), l = a.modifiers, c = a.hasImportantModifier, u = a.baseClassName, d = r(u);
    if (!d)
      return {
        isTailwindClass: false,
        originalClassName: i
      };
    var f = kc(l).join(":"), h = c ? f + Gs : f;
    return {
      isTailwindClass: true,
      modifierId: h,
      classGroupId: d,
      originalClassName: i
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return true;
    var a = i.modifierId, l = i.classGroupId, c = a + l;
    return s.has(c) ? false : (s.add(c), o(l).forEach(function(u) {
      return s.add(a + u);
    }), true);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Fc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, s, i = a;
  function a(c) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(h, m) {
      return m(h);
    }, u());
    return r = Vc(f), o = r.cache.get, s = r.cache.set, i = l, l(c);
  }
  function l(c) {
    var u = o(c);
    if (u)
      return u;
    var d = Oc(c, r);
    return s(c, d), d;
  }
  return function() {
    return i(Ac.apply(null, arguments));
  };
}
function J(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = true, t;
}
var Hs = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var $c = /^\d+\/\d+$/;
var jc = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var _c = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var Bc = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))/;
var Uc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Ee(e) {
  return It(e) || jc.has(e) || $c.test(e) || it(e);
}
function it(e) {
  return ft(e, "length", Yc);
}
function zc(e) {
  return ft(e, "size", Ys);
}
function Wc(e) {
  return ft(e, "position", Ys);
}
function Gc(e) {
  return ft(e, "url", Kc);
}
function fr(e) {
  return ft(e, "number", It);
}
function It(e) {
  return !Number.isNaN(Number(e));
}
function Lt(e) {
  return xi(e) || ft(e, "number", xi);
}
function re(e) {
  return Hs.test(e);
}
function Dt() {
  return true;
}
function We(e) {
  return _c.test(e);
}
function Hc(e) {
  return ft(e, "", qc);
}
function ft(e, t, n) {
  var r = Hs.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : false;
}
function Yc(e) {
  return Bc.test(e);
}
function Ys() {
  return false;
}
function Kc(e) {
  return e.startsWith("url(");
}
function xi(e) {
  return Number.isInteger(Number(e));
}
function qc(e) {
  return Uc.test(e);
}
function Xc() {
  var e = J("colors"), t = J("spacing"), n = J("blur"), r = J("brightness"), o = J("borderColor"), s = J("borderRadius"), i = J("borderSpacing"), a = J("borderWidth"), l = J("contrast"), c = J("grayscale"), u = J("hueRotate"), d = J("invert"), f = J("gap"), h = J("gradientColorStops"), m = J("inset"), g = J("margin"), v = J("opacity"), x = J("padding"), y = J("saturate"), w = J("scale"), b = J("sepia"), P = J("skew"), E = J("space"), N = J("translate"), W = function() {
    return ["auto", "contain", "none"];
  }, _ = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, D = function() {
    return ["auto", t];
  }, $ = function() {
    return ["", Ee];
  }, z = function() {
    return ["auto", It, re];
  }, H = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, j = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, k = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, V = function() {
    return ["start", "end", "center", "between", "around", "evenly"];
  }, Q = function() {
    return ["", "0", re];
  }, ae = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, le = function() {
    return [It, fr];
  }, we = function() {
    return [It, re];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Dt],
      spacing: [Ee],
      blur: ["none", "", We, it],
      brightness: le(),
      borderColor: [e],
      borderRadius: ["none", "", "full", We, it],
      borderSpacing: [t],
      borderWidth: $(),
      contrast: le(),
      grayscale: Q(),
      hueRotate: we(),
      invert: Q(),
      gap: [t],
      gradientColorStops: [e],
      inset: D(),
      margin: D(),
      opacity: le(),
      padding: [t],
      saturate: le(),
      scale: le(),
      sepia: Q(),
      skew: we(),
      space: [t],
      translate: [t]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", re]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [We]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(H(), [re])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: _()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": _()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": _()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Lt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [t]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", re]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Lt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Dt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: [Lt]
        }, re]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Dt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Lt]
        }, re]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", re]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", re]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: V()
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: [].concat(V(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(V(), ["baseline", "stretch"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [E]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", Ee]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [We]
        }, We, it]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", Ee]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", We, it]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", fr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", it]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ee]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", re]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(j(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ee]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [t]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", it]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", re]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(H(), [Wc])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zc]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gc]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(j(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(j())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ee]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ee]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", We, Hc]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Dt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Beldn Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": k()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": k()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", We, re]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [b]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [b]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", re]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: we()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", re]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: we()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", re]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Lt, re]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", re]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", re]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": [t]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": [t]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": [t]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": [t]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": [t]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": [t]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": [t]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": [t]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": [t]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": [t]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": [t]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": [t]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": [t]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": [t]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", re]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ee, fr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    }
  };
}
var Pn = /* @__PURE__ */ Fc(Xc);
var xn = (...e) => e.flat(1 / 0).filter(Boolean).join(" ");
function C(e, t, n) {
  return Pn(Pn(t, e), n);
}
function Zc(e) {
  return import_react.Children.toArray(e).filter(
    (t) => (0, import_react.isValidElement)(t)
  );
}
var $n = (e, t, n) => {
  const r = [], o = `rapid-${t}`;
  if (e ? r.push(`rapid-${t}-${e}`) : r.push(o), n && r.push(`rapid-${t}-${n}`), r.length > 0)
    return r.join(" ");
};
var Ks = (0, import_react.createContext)(
  void 0
);
var po = () => {
  const e = (0, import_react.useContext)(Ks);
  if (!e)
    throw new Error(
      "This component must be used within an Accordion component"
    );
  return e;
};
var mo = (e) => {
  const [t, n] = (0, import_react.useState)(null);
  return (0, import_react.useEffect)(() => {
    var s;
    const r = (s = e.current) == null ? void 0 : s.closest(`.${fl}`), o = r == null ? void 0 : r.parentElement;
    if (o && r) {
      const i = Array.from(o.children).indexOf(r);
      n(i);
    }
  }, [e]), t;
};
var go = (e, t) => {
  const [n, r] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)(() => {
    r(e !== null && t.includes(e));
  }, [t, e]), n;
};
var Jc = "rapid-accordion";
var Qc = "flex flex-col overflow-x-auto";
var Ky = (0, import_react.forwardRef)(
  ({
    allowMultiple: e = false,
    allowToggle: t = false,
    defaultIndexes: n = [],
    children: r,
    styles: o,
    ...s
  }, i) => {
    const [a, l] = (0, import_react.useState)(n);
    return /* @__PURE__ */ T(
      Ks.Provider,
      {
        value: {
          allowMultiple: e,
          allowToggle: t,
          activeItems: a,
          setActiveItems: l,
          id: (0, import_react.useId)()
        },
        children: /* @__PURE__ */ T(
          "div",
          {
            ref: i,
            ...s,
            className: C(
              o || s.className,
              Qc,
              Jc
            ),
            role: "region",
            "aria-multiselectable": e,
            children: r
          }
        )
      }
    );
  }
);
var qs = (0, import_react.createContext)({
  transformPagePoint: (e) => e,
  isStatic: false,
  reducedMotion: "never"
});
var jn = (0, import_react.createContext)({});
function eu() {
  return (0, import_react.useContext)(jn).visualElement;
}
var _n = (0, import_react.createContext)(null);
var Bn = typeof document < "u";
var An = Bn ? import_react.useLayoutEffect : import_react.useEffect;
var Xs = (0, import_react.createContext)({ strict: false });
function tu(e, t, n, r) {
  const o = eu(), s = (0, import_react.useContext)(Xs), i = (0, import_react.useContext)(_n), a = (0, import_react.useContext)(qs).reducedMotion, l = (0, import_react.useRef)();
  r = r || s.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === false : false,
    reducedMotionConfig: a
  }));
  const c = l.current;
  return (0, import_react.useInsertionEffect)(() => {
    c && c.update(n, i);
  }), An(() => {
    c && c.render();
  }), (0, import_react.useEffect)(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? An : import_react.useEffect)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function vt(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function nu(e, t, n) {
  return (0, import_react.useCallback)(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : vt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ht(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Un(e) {
  return typeof e == "object" && typeof e.start == "function";
}
var yo = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
];
var vo = ["initial", ...yo];
function zn(e) {
  return Un(e.animate) || vo.some((t) => Ht(e[t]));
}
function Zs(e) {
  return Boolean(zn(e) || e.variants);
}
function ru(e, t) {
  if (zn(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === false || Ht(n) ? n : void 0,
      animate: Ht(r) ? r : void 0
    };
  }
  return e.inherit !== false ? t : {};
}
function ou(e) {
  const { initial: t, animate: n } = ru(e, (0, import_react.useContext)(jn));
  return (0, import_react.useMemo)(() => ({ initial: t, animate: n }), [Si(t), Si(n)]);
}
function Si(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Ti = {
  animation: [
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
var Yt = {};
for (const e in Ti)
  Yt[e] = {
    isEnabled: (t) => Ti[e].some((n) => !!t[n])
  };
function iu(e) {
  for (const t in e)
    Yt[t] = {
      ...Yt[t],
      ...e[t]
    };
}
function bo(e) {
  const t = (0, import_react.useRef)(null);
  return t.current === null && (t.current = e()), t.current;
}
var Ot = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: true,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: false
};
var su = 1;
function au() {
  return bo(() => {
    if (Ot.hasEverUpdated)
      return su++;
  });
}
var xo = (0, import_react.createContext)({});
var Js = (0, import_react.createContext)({});
var lu = Symbol.for("motionComponentSymbol");
function cu({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && iu(e);
  function s(a, l) {
    let c;
    const u = {
      ...(0, import_react.useContext)(qs),
      ...a,
      layoutId: uu(a)
    }, { isStatic: d } = u, f = ou(a), h = d ? void 0 : au(), m = r(a, d);
    if (!d && Bn) {
      f.visualElement = tu(o, m, u, t);
      const g = (0, import_react.useContext)(Js), v = (0, import_react.useContext)(Xs).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        v,
        e,
        h,
        g
      ));
    }
    return U.createElement(
      jn.Provider,
      { value: f },
      c && f.visualElement ? U.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      n(o, a, h, nu(m, f.visualElement, l), m, d, f.visualElement)
    );
  }
  const i = (0, import_react.forwardRef)(s);
  return i[lu] = o, i;
}
function uu({ layoutId: e }) {
  const t = (0, import_react.useContext)(xo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function du(e) {
  function t(r, o = {}) {
    return cu(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
var fu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function wo(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
    * If it contains a dash, the element is a custom HTML webcomponent.
    */
    e.includes("-") ? false : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(fu.indexOf(e) > -1 || /**
      * If it contains a capital letter, it's an SVG component
      */
      /[A-Z]/.test(e))
    )
  );
}
var En = {};
function hu(e) {
  Object.assign(En, e);
}
var Wn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var ht = new Set(Wn);
function Qs(e, { layout: t, layoutId: n }) {
  return ht.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!En[e] || e === "opacity");
}
var ge = (e) => Boolean(e && e.getVelocity);
var pu = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var mu = Wn.length;
function gu(e, { enableHardwareAcceleration: t = true, allowTransformNone: n = true }, r, o) {
  let s = "";
  for (let i = 0; i < mu; i++) {
    const a = Wn[i];
    if (e[a] !== void 0) {
      const l = pu[a] || a;
      s += `${l}(${e[a]}) `;
    }
  }
  return t && !e.z && (s += "translateZ(0)"), s = s.trim(), o ? s = o(e, r ? "" : s) : n && r && (s = "none"), s;
}
var ea = (e) => (t) => typeof t == "string" && t.startsWith(e);
var ta = ea("--");
var Or = ea("var(--");
var yu = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
var Tt = (e, t, n) => Math.min(Math.max(n, e), t);
var pt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
};
var Ft = {
  ...pt,
  transform: (e) => Tt(0, 1, e)
};
var fn = {
  ...pt,
  default: 1
};
var $t = (e) => Math.round(e * 1e5) / 1e5;
var Kt = /(-)?([\d]*\.?[\d])+/g;
var Fr = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var vu = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Jt(e) {
  return typeof e == "string";
}
var Qt = (e) => ({
  test: (t) => Jt(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
});
var He = Qt("deg");
var Ve = Qt("%");
var R = Qt("px");
var bu = Qt("vh");
var xu = Qt("vw");
var Pi = {
  ...Ve,
  parse: (e) => Ve.parse(e) / 100,
  transform: (e) => Ve.transform(e * 100)
};
var Ai = {
  ...pt,
  transform: Math.round
};
var na = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  size: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Transform props
  rotate: He,
  rotateX: He,
  rotateY: He,
  rotateZ: He,
  scale: fn,
  scaleX: fn,
  scaleY: fn,
  scaleZ: fn,
  skew: He,
  skewX: He,
  skewY: He,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: Ft,
  originX: Pi,
  originY: Pi,
  originZ: R,
  // Misc
  zIndex: Ai,
  // SVG
  fillOpacity: Ft,
  strokeOpacity: Ft,
  numOctaves: Ai
};
function So(e, t, n, r) {
  const { style: o, vars: s, transform: i, transformOrigin: a } = e;
  let l = false, c = false, u = true;
  for (const d in t) {
    const f = t[d];
    if (ta(d)) {
      s[d] = f;
      continue;
    }
    const h = na[d], m = yu(f, h);
    if (ht.has(d)) {
      if (l = true, i[d] = m, !u)
        continue;
      f !== (h.default || 0) && (u = false);
    } else
      d.startsWith("origin") ? (c = true, a[d] = m) : o[d] = m;
  }
  if (t.transform || (l || r ? o.transform = gu(e.transform, n, u, r) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
var To = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ra(e, t, n) {
  for (const r in t)
    !ge(t[r]) && !Qs(r, n) && (e[r] = t[r]);
}
function wu({ transformTemplate: e }, t, n) {
  return (0, import_react.useMemo)(() => {
    const r = To();
    return So(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Su(e, t, n) {
  const r = e.style || {}, o = {};
  return ra(o, r, e), Object.assign(o, wu(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Tu(e, t, n) {
  const r = {}, o = Su(e, t, n);
  return e.drag && e.dragListener !== false && (r.draggable = false, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === true ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r;
}
var Pu = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function Cn(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Pu.has(e);
}
var oa = (e) => !Cn(e);
function Au(e) {
  e && (oa = (t) => t.startsWith("on") ? !Cn(t) : e(t));
}
try {
  Au((init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default);
} catch {
}
function Eu(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (oa(o) || n === true && Cn(o) || !t && !Cn(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function Ei(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function Cu(e, t, n) {
  const r = Ei(t, e.x, e.width), o = Ei(n, e.y, e.height);
  return `${r} ${o}`;
}
var Ru = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var Mu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Lu(e, t, n = 1, r = 0, o = true) {
  e.pathLength = 1;
  const s = o ? Ru : Mu;
  e[s.offset] = R.transform(-r);
  const i = R.transform(t), a = R.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Po(e, {
  attrX: t,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, u, d) {
  if (So(e, l, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: m } = e;
  f.transform && (m && (h.transform = f.transform), delete f.transform), m && (r !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = Cu(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), s !== void 0 && Lu(f, s, i, a, false);
}
var ia = () => ({
  ...To(),
  attrs: {}
});
var Ao = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Du(e, t, n, r) {
  const o = (0, import_react.useMemo)(() => {
    const s = ia();
    return Po(s, t, { enableHardwareAcceleration: false }, Ao(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ra(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function Nu(e = false) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const c = (wo(n) ? Du : Tu)(r, i, a, n), d = {
      ...Eu(r, typeof n == "string", e),
      ...c,
      ref: s
    }, { children: f } = r, h = (0, import_react.useMemo)(() => ge(f) ? f.get() : f, [f]);
    return o && (d["data-projection-id"] = o), (0, import_react.createElement)(n, {
      ...d,
      children: h
    });
  };
}
var Eo = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function sa(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
var aa = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function la(e, t, n, r) {
  sa(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(aa.has(o) ? o : Eo(o), t.attrs[o]);
}
function Co(e, t) {
  const { style: n } = e, r = {};
  for (const o in n)
    (ge(n[o]) || t.style && ge(t.style[o]) || Qs(o, e)) && (r[o] = n[o]);
  return r;
}
function ca(e, t) {
  const n = Co(e, t);
  for (const r in e)
    if (ge(e[r]) || ge(t[r])) {
      const o = r === "x" || r === "y" ? "attr" + r.toUpperCase() : r;
      n[o] = e[r];
    }
  return n;
}
function Ro(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
var Rn = (e) => Array.isArray(e);
var ku = (e) => Boolean(e && typeof e == "object" && e.mix && e.toValue);
var Vu = (e) => Rn(e) ? e[e.length - 1] || 0 : e;
function wn(e) {
  const t = ge(e) ? e.get() : e;
  return ku(t) ? t.toValue() : t;
}
function Iu({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
  const i = {
    latestValues: Ou(r, o, s, e),
    renderState: t()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
var ua = (e) => (t, n) => {
  const r = (0, import_react.useContext)(jn), o = (0, import_react.useContext)(_n), s = () => Iu(e, t, r, o);
  return n ? s() : bo(s);
};
function Ou(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = wn(s[f]);
  let { initial: i, animate: a } = e;
  const l = zn(e), c = Zs(e);
  t && c && !l && e.inherit !== false && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === false : false;
  u = u || i === false;
  const d = u ? a : i;
  return d && typeof d != "boolean" && !Un(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = Ro(e, h);
    if (!m)
      return;
    const { transitionEnd: g, transition: v, ...x } = m;
    for (const y in x) {
      let w = x[y];
      if (Array.isArray(w)) {
        const b = u ? w.length - 1 : 0;
        w = w[b];
      }
      w !== null && (o[y] = w);
    }
    for (const y in g)
      o[y] = g[y];
  }), o;
}
var Fu = {
  useVisualState: ua({
    scrapeMotionValuesFromProps: ca,
    createRenderState: ia,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      try {
        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Po(n, r, { enableHardwareAcceleration: false }, Ao(t.tagName), e.transformTemplate), la(t, n);
    }
  })
};
var $u = {
  useVisualState: ua({
    scrapeMotionValuesFromProps: Co,
    createRenderState: To
  })
};
function ju(e, { forwardMotionProps: t = false }, n, r) {
  return {
    ...wo(e) ? Fu : $u,
    preloadedFeatures: n,
    useRender: Nu(t),
    createVisualElement: r,
    Component: e
  };
}
function Fe(e, t, n, r = { passive: true }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
var da = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== false;
function Gn(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
var _u = (e) => (t) => da(t) && e(t, Gn(t));
function _e(e, t, n, r) {
  return Fe(e, t, _u(n), r);
}
var Bu = (e, t) => (n) => t(e(n));
var qe = (...e) => e.reduce(Bu);
function fa(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : false;
  };
}
var Ci = fa("dragHorizontal");
var Ri = fa("dragVertical");
function ha(e) {
  let t = false;
  if (e === "y")
    t = Ri();
  else if (e === "x")
    t = Ci();
  else {
    const n = Ci(), r = Ri();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function pa() {
  const e = ha(true);
  return e ? (e(), false) : true;
}
var tt = class {
  constructor(t) {
    this.isMounted = false, this.node = t;
  }
  update() {
  }
};
function Mi(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"), r = "onHover" + (t ? "Start" : "End"), o = (s, i) => {
    if (s.type === "touch" || pa())
      return;
    const a = e.getProps();
    e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && a[r](s, i);
  };
  return _e(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
var Uu = class extends tt {
  mount() {
    this.unmount = qe(Mi(this.node, true), Mi(this.node, false));
  }
  unmount() {
  }
};
var zu = class extends tt {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let t = false;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = true;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = qe(Fe(this.node.current, "focus", () => this.onFocus()), Fe(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
};
var ma = (e, t) => t ? e === t ? true : ma(e, t.parentElement) : false;
var Ae = (e) => e;
function hr(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Gn(n));
}
var Wu = class extends tt {
  constructor() {
    super(...arguments), this.removeStartListeners = Ae, this.removeEndListeners = Ae, this.removeAccessibleListeners = Ae, this.startPointerPress = (t, n) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const r = this.node.getProps(), s = _e(window, "pointerup", (a, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        ma(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
      }, { passive: !(r.onTap || r.onPointerUp) }), i = _e(window, "pointercancel", (a, l) => this.cancelPress(a, l), { passive: !(r.onTapCancel || r.onPointerCancel) });
      this.removeEndListeners = qe(s, i), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const i = (a) => {
          a.key !== "Enter" || !this.checkPressEnd() || hr("up", this.node.getProps().onTap);
        };
        this.removeEndListeners(), this.removeEndListeners = Fe(this.node.current, "keyup", i), hr("down", (a, l) => {
          this.startPress(a, l);
        });
      }, n = Fe(this.node.current, "keydown", t), r = () => {
        this.isPressing && hr("cancel", (s, i) => this.cancelPress(s, i));
      }, o = Fe(this.node.current, "blur", r);
      this.removeAccessibleListeners = qe(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = true;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", true), r && r(t, n);
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = false, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", false), !pa();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && r(t, n);
  }
  mount() {
    const t = this.node.getProps(), n = _e(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), r = Fe(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = qe(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
};
var $r = /* @__PURE__ */ new WeakMap();
var pr = /* @__PURE__ */ new WeakMap();
var Gu = (e) => {
  const t = $r.get(e.target);
  t && t(e);
};
var Hu = (e) => {
  e.forEach(Gu);
};
function Yu({ root: e, ...t }) {
  const n = e || document;
  pr.has(n) || pr.set(n, {});
  const r = pr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Hu, { root: e, ...t })), r[o];
}
function Ku(e, t, n) {
  const r = Yu(t);
  return $r.set(e, n), r.observe(e), () => {
    $r.delete(e), r.unobserve(e);
  };
}
var qu = {
  some: 0,
  all: 1
};
var Xu = class extends tt {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  /**
   * TODO: Remove this in 10.0
   */
  viewportFallback() {
    requestAnimationFrame(() => {
      this.hasEnteredView = true;
      const { onViewportEnter: t } = this.node.getProps();
      t && t(null), this.node.animationState && this.node.animationState.setActive("whileInView", true);
    });
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s, fallback: i = true } = t;
    if (typeof IntersectionObserver > "u") {
      i && this.viewportFallback();
      return;
    }
    const a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : qu[o]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), h = u ? d : f;
      h && h(c);
    };
    return Ku(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Zu(t, n)) && this.startObserver();
  }
  unmount() {
  }
};
function Zu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Ju = {
  inView: {
    Feature: Xu
  },
  tap: {
    Feature: Wu
  },
  focus: {
    Feature: zu
  },
  hover: {
    Feature: Uu
  }
};
function ga(e, t) {
  if (!Array.isArray(t))
    return false;
  const n = t.length;
  if (n !== e.length)
    return false;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return false;
  return true;
}
var Qu = (e) => /^\-?\d*\.?\d+$/.test(e);
var ed = (e) => /^0[^.\s]+$/.test(e);
var Be = {
  delta: 0,
  timestamp: 0
};
var ya = 1 / 60 * 1e3;
var td = typeof performance < "u" ? () => performance.now() : () => Date.now();
var va = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(td()), ya);
function nd(e) {
  let t = [], n = [], r = 0, o = false, s = false;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = false, u = false) => {
      const d = u && o, f = d ? t : n;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = n.indexOf(l);
      c !== -1 && n.splice(c, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        s = true;
        return;
      }
      if (o = true, [t, n] = [n, t], n.length = 0, r = t.length, r)
        for (let c = 0; c < r; c++) {
          const u = t[c];
          u(l), i.has(u) && (a.schedule(u), e());
        }
      o = false, s && (s = false, a.process(l));
    }
  };
  return a;
}
var rd = 40;
var jr = true;
var qt = false;
var _r = false;
var en = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var Hn = en.reduce((e, t) => (e[t] = nd(() => qt = true), e), {});
var ce = en.reduce((e, t) => {
  const n = Hn[t];
  return e[t] = (r, o = false, s = false) => (qt || id(), n.schedule(r, o, s)), e;
}, {});
var Je = en.reduce((e, t) => (e[t] = Hn[t].cancel, e), {});
var mr = en.reduce((e, t) => (e[t] = () => Hn[t].process(Be), e), {});
var od = (e) => Hn[e].process(Be);
var ba = (e) => {
  qt = false, Be.delta = jr ? ya : Math.max(Math.min(e - Be.timestamp, rd), 1), Be.timestamp = e, _r = true, en.forEach(od), _r = false, qt && (jr = false, va(ba));
};
var id = () => {
  qt = true, jr = true, _r || va(ba);
};
function Mo(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Lo(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Do = class {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Mo(this.subscriptions, t), () => Lo(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function No(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var sd = (e) => !isNaN(parseFloat(e));
var ad = class {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "9.1.7", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = false, this.events = {}, this.updateAndNotify = (r, o = true) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: i } = Be;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, ce.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => ce.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = false, this.prev = this.current = t, this.canTrackVelocity = sd(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Do());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ce.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = true) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      No(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = true, this.animation = t(n) || null, this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
};
function Pt(e, t) {
  return new ad(e, t);
}
var ko = (e, t) => (n) => Boolean(Jt(n) && vu.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t));
var xa = (e, t, n) => (r) => {
  if (!Jt(r))
    return r;
  const [o, s, i, a] = r.match(Kt);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
};
var ld = (e) => Tt(0, 255, e);
var gr = {
  ...pt,
  transform: (e) => Math.round(ld(e))
};
var lt = {
  test: ko("rgb", "red"),
  parse: xa("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + gr.transform(e) + ", " + gr.transform(t) + ", " + gr.transform(n) + ", " + $t(Ft.transform(r)) + ")"
};
function cd(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
var Br = {
  test: ko("#"),
  parse: cd,
  transform: lt.transform
};
var bt = {
  test: ko("hsl", "hue"),
  parse: xa("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ve.transform($t(t)) + ", " + Ve.transform($t(n)) + ", " + $t(Ft.transform(r)) + ")"
};
var he = {
  test: (e) => lt.test(e) || Br.test(e) || bt.test(e),
  parse: (e) => lt.test(e) ? lt.parse(e) : bt.test(e) ? bt.parse(e) : Br.parse(e),
  transform: (e) => Jt(e) ? e : e.hasOwnProperty("red") ? lt.transform(e) : bt.transform(e)
};
var wa = "${c}";
var Sa = "${n}";
function ud(e) {
  var t, n;
  return isNaN(e) && Jt(e) && (((t = e.match(Kt)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Fr)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function Mn(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0, r = 0;
  const o = e.match(Fr);
  o && (n = o.length, e = e.replace(Fr, wa), t.push(...o.map(he.parse)));
  const s = e.match(Kt);
  return s && (r = s.length, e = e.replace(Kt, Sa), t.push(...s.map(pt.parse))), { values: t, numColors: n, numNumbers: r, tokenised: e };
}
function Ta(e) {
  return Mn(e).values;
}
function Pa(e) {
  const { values: t, numColors: n, tokenised: r } = Mn(e), o = t.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? wa : Sa, a < n ? he.transform(s[a]) : $t(s[a]));
    return i;
  };
}
var dd = (e) => typeof e == "number" ? 0 : e;
function fd(e) {
  const t = Ta(e);
  return Pa(e)(t.map(dd));
}
var Qe = { test: ud, parse: Ta, createTransformer: Pa, getAnimatableNone: fd };
var hd = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function pd(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Kt) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = hd.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
var md = /([a-z-]*)\(.*?\)/g;
var Ur = {
  ...Qe,
  getAnimatableNone: (e) => {
    const t = e.match(md);
    return t ? t.map(pd).join(" ") : e;
  }
};
var gd = {
  ...na,
  // Color props
  color: he,
  backgroundColor: he,
  outlineColor: he,
  fill: he,
  stroke: he,
  // Border props
  borderColor: he,
  borderTopColor: he,
  borderRightColor: he,
  borderBottomColor: he,
  borderLeftColor: he,
  filter: Ur,
  WebkitFilter: Ur
};
var Vo = (e) => gd[e];
function Io(e, t) {
  let n = Vo(e);
  return n !== Ur && (n = Qe), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
var Aa = (e) => (t) => t.test(e);
var yd = {
  test: (e) => e === "auto",
  parse: (e) => e
};
var Ea = [pt, R, Ve, He, xu, bu, yd];
var Nt = (e) => Ea.find(Aa(e));
var vd = [...Ea, he, Qe];
var bd = (e) => vd.find(Aa(e));
function xd(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function wd(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Yn(e, t, n) {
  const r = e.getProps();
  return Ro(r, t, n !== void 0 ? n : r.custom, xd(e), wd(e));
}
function Sd(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pt(n));
}
function Td(e, t) {
  const n = Yn(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, false) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = Vu(s[i]);
    Sd(e, i, a);
  }
}
function Pd(e, t, n) {
  var r, o;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const l = s[a], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (Qu(u) || ed(u)) ? u = parseFloat(u) : !bd(u) && Qe.test(c) && (u = Io(l, c)), e.addValue(l, Pt(u, { owner: e })), n[l] === void 0 && (n[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function Ad(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Ed(e, t, n) {
  const r = {};
  for (const o in e) {
    const s = Ad(o, t);
    if (s !== void 0)
      r[o] = s;
    else {
      const i = n.getValue(o);
      i && (r[o] = i.get());
    }
  }
  return r;
}
function Ln(e) {
  return Boolean(ge(e) && e.add);
}
var Cd = "framerAppearId";
var Rd = "data-" + Eo(Cd);
var tn = Ae;
var Le = Ae;
tn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Le = (e, t) => {
  if (!e)
    throw new Error(t);
};
var Sn = (e) => e * 1e3;
var Md = {
  current: false
};
var Oo = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
var Fo = (e) => (t) => 1 - e(1 - t);
var $o = (e) => e * e;
var Ld = Fo($o);
var jo = Oo($o);
var ee = (e, t, n) => -n * e + n * t + e;
function yr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dd({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = yr(l, a, e + 1 / 3), s = yr(l, a, e), i = yr(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
var vr = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
};
var Nd = [Br, lt, bt];
var kd = (e) => Nd.find((t) => t.test(e));
function Li(e) {
  const t = kd(e);
  Le(Boolean(t), `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = t.parse(e);
  return t === bt && (n = Dd(n)), n;
}
var Ca = (e, t) => {
  const n = Li(e), r = Li(t), o = { ...n };
  return (s) => (o.red = vr(n.red, r.red, s), o.green = vr(n.green, r.green, s), o.blue = vr(n.blue, r.blue, s), o.alpha = ee(n.alpha, r.alpha, s), lt.transform(o));
};
function Ra(e, t) {
  return typeof e == "number" ? (n) => ee(e, t, n) : he.test(e) ? Ca(e, t) : La(e, t);
}
var Ma = (e, t) => {
  const n = [...e], r = n.length, o = e.map((s, i) => Ra(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
};
var Vd = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Ra(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
};
var La = (e, t) => {
  const n = Qe.createTransformer(t), r = Mn(e), o = Mn(t);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? qe(Ma(r.values, o.values), n) : (tn(true, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
};
var Xt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
var Di = (e, t) => (n) => ee(e, t, n);
function Id(e) {
  return typeof e == "number" ? Di : typeof e == "string" ? he.test(e) ? Ca : La : Array.isArray(e) ? Ma : typeof e == "object" ? Vd : Di;
}
function Od(e, t, n) {
  const r = [], o = n || Id(e[0]), s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] : t;
      a = qe(l, a);
    }
    r.push(a);
  }
  return r;
}
function Da(e, t, { clamp: n = true, ease: r, mixer: o } = {}) {
  const s = e.length;
  Le(s === t.length, "Both input and output ranges must be the same length"), Le(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Od(t, r, o), a = i.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Xt(e[u], e[u + 1], c);
    return i[u](d);
  };
  return n ? (c) => l(Tt(e[0], e[s - 1], c)) : l;
}
function Fd(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = Xt(0, t, r);
    e.push(ee(n, 1, o));
  }
}
function $d(e) {
  const t = [0];
  return Fd(t, e.length - 1), t;
}
function jd(e, t) {
  return e.map((n) => n * t);
}
var Na = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
var _d = 1e-7;
var Bd = 12;
function Ud(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = Na(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > _d && ++a < Bd);
  return i;
}
function ka(e, t, n, r) {
  if (e === t && n === r)
    return Ae;
  const o = (s) => Ud(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Na(o(s), t, r);
}
var Va = (e) => 1 - Math.sin(Math.acos(e));
var _o = Fo(Va);
var zd = Oo(_o);
var Ia = ka(0.33, 1.53, 0.69, 0.99);
var Bo = Fo(Ia);
var Wd = Oo(Bo);
var Gd = (e) => (e *= 2) < 1 ? 0.5 * Bo(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
var Ni = {
  linear: Ae,
  easeIn: $o,
  easeInOut: jo,
  easeOut: Ld,
  circIn: Va,
  circInOut: zd,
  circOut: _o,
  backIn: Bo,
  backInOut: Wd,
  backOut: Ia,
  anticipate: Gd
};
var ki = (e) => {
  if (Array.isArray(e)) {
    Le(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return ka(t, n, r, o);
  } else if (typeof e == "string")
    return Le(Ni[e] !== void 0, `Invalid easing type '${e}'`), Ni[e];
  return e;
};
var Hd = (e) => Array.isArray(e) && typeof e[0] != "number";
function Yd(e, t) {
  return e.map(() => t || jo).splice(0, e.length - 1);
}
function zr({ keyframes: e, ease: t = jo, times: n, duration: r = 300 }) {
  e = [...e];
  const o = Hd(t) ? t.map(ki) : ki(t), s = {
    done: false,
    value: e[0]
  }, i = jd(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : $d(e),
    r
  );
  function a() {
    return Da(i, e, {
      ease: Array.isArray(o) ? o : Yd(e, o)
    });
  }
  let l = a();
  return {
    next: (c) => (s.value = l(c), s.done = c >= r, s),
    flipTarget: () => {
      e.reverse(), l = a();
    }
  };
}
var br = 1e-3;
var Kd = 0.01;
var Vi = 10;
var qd = 0.05;
var Xd = 1;
function Zd({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  tn(e <= Vi * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Tt(qd, Xd, i), e = Tt(Kd, Vi, e / 1e3), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - n, h = Wr(c, i), m = Math.exp(-d);
    return br - f / h * m;
  }, s = (c) => {
    const d = c * i * e, f = d * n + n, h = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), g = Wr(Math.pow(c, 2), i);
    return (-o(c) + br > 0 ? -1 : 1) * ((f - h) * m) / g;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -br + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = Qd(o, s, a);
  if (e = e * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
var Jd = 12;
function Qd(e, t, n) {
  let r = n;
  for (let o = 1; o < Jd; o++)
    r = r - e(r) / t(r);
  return r;
}
function Wr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var ef = ["duration", "bounce"];
var tf = ["stiffness", "damping", "mass"];
function Ii(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function nf(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: false,
    ...e
  };
  if (!Ii(e, tf) && Ii(e, ef)) {
    const n = Zd(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = true;
  }
  return t;
}
var rf = 5;
function Oa({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let o = e[0], s = e[e.length - 1];
  const i = { done: false, value: o }, { stiffness: a, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = nf(r);
  let h = of, m = u ? -(u / 1e3) : 0;
  const g = l / (2 * Math.sqrt(a * c));
  function v() {
    const x = s - o, y = Math.sqrt(a / c) / 1e3, w = Math.abs(x) < 5;
    if (n || (n = w ? 0.01 : 2), t || (t = w ? 5e-3 : 0.5), g < 1) {
      const b = Wr(y, g);
      h = (P) => {
        const E = Math.exp(-g * y * P);
        return s - E * ((m + g * y * x) / b * Math.sin(b * P) + x * Math.cos(b * P));
      };
    } else if (g === 1)
      h = (b) => s - Math.exp(-y * b) * (x + (m + y * x) * b);
    else {
      const b = y * Math.sqrt(g * g - 1);
      h = (P) => {
        const E = Math.exp(-g * y * P), N = Math.min(b * P, 300);
        return s - E * ((m + g * y * x) * Math.sinh(N) + b * x * Math.cosh(N)) / b;
      };
    }
  }
  return v(), {
    next: (x) => {
      const y = h(x);
      if (f)
        i.done = x >= d;
      else {
        let w = m;
        if (x !== 0)
          if (g < 1) {
            const E = Math.max(0, x - rf);
            w = No(y - h(E), x - E);
          } else
            w = 0;
        const b = Math.abs(w) <= n, P = Math.abs(s - y) <= t;
        i.done = b && P;
      }
      return i.value = i.done ? s : y, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], v();
    }
  };
}
Oa.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
var of = (e) => 0;
function sf({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: e = [0],
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: s
}) {
  const i = e[0], a = { done: false, value: i };
  let l = n * t;
  const c = i + l, u = s === void 0 ? c : s(c);
  return u !== c && (l = u - i), {
    next: (d) => {
      const f = -l * Math.exp(-d / r);
      return a.done = !(f > o || f < -o), a.value = a.done ? u : u + f, a;
    },
    flipTarget: () => {
    }
  };
}
var af = {
  decay: sf,
  keyframes: zr,
  tween: zr,
  spring: Oa
};
function Fa(e, t, n = 0) {
  return e - t - n;
}
function lf(e, t = 0, n = 0, r = true) {
  return r ? Fa(t + -e, t, n) : t - (e - t) + n;
}
function cf(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
var uf = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => ce.update(t, true),
    stop: () => Je.update(t)
  };
};
function Dn({ duration: e, driver: t = uf, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = true, onPlay: l, onStop: c, onComplete: u, onRepeat: d, onUpdate: f, type: h = "keyframes", ...m }) {
  const g = n;
  let v, x = 0, y = e, w = false, b = true, P;
  const E = af[i.length > 2 ? "keyframes" : h] || zr, N = i[0], W = i[i.length - 1];
  let _ = { done: false, value: N };
  const { needsInterpolation: D } = E;
  D && D(N, W) && (P = Da([0, 100], [N, W], {
    clamp: false
  }), i = [0, 100]);
  const $ = E({
    ...m,
    duration: e,
    keyframes: i
  });
  function z() {
    x++, o === "reverse" ? (b = x % 2 === 0, n = lf(n, y, s, b)) : (n = Fa(n, y, s), o === "mirror" && $.flipTarget()), w = false, d && d();
  }
  function H() {
    v && v.stop(), u && u();
  }
  function j(V) {
    b || (V = -V), n += V, w || (_ = $.next(Math.max(0, n)), P && (_.value = P(_.value)), w = b ? _.done : n <= 0), f && f(_.value), w && (x === 0 && (y = y !== void 0 ? y : n), x < r ? cf(n, y, s, b) && z() : H());
  }
  function k() {
    l && l(), v = t(j), v.start();
  }
  return a && k(), {
    stop: () => {
      c && c(), v && v.stop();
    },
    /**
     * Set the current time of the animation. This is purposefully
     * mirroring the WAAPI animation API to make them interchanagable.
     * Going forward this file should be ported more towards
     * https://github.com/motiondivision/motionone/blob/main/packages/animation/src/Animation.ts
     * Which behaviourally adheres to WAAPI as far as possible.
     *
     * WARNING: This is not safe to use for most animations. We currently
     * only use it for handoff from WAAPI within Framer.
     *
     * This animation function consumes time every frame rather than being sampled for time.
     * So the sample() method performs some headless frames to ensure
     * repeats are handled correctly. Ideally in the future we will replace
     * that method with this, once repeat calculations are pure.
     */
    set currentTime(V) {
      n = g, j(V);
    },
    /**
     * animate() can't yet be sampled for time, instead it
     * consumes time. So to sample it we have to run a low
     * temporal-resolution version.
     */
    sample: (V) => {
      n = g;
      const Q = e && typeof e == "number" ? Math.max(e * 0.5, 50) : 50;
      let ae = 0;
      for (j(0); ae <= V; ) {
        const le = V - ae;
        j(Math.min(le, Q)), ae += Q;
      }
      return _;
    }
  };
}
function df(e) {
  return !e || // Default easing
  Array.isArray(e) || // Bezier curve
  typeof e == "string" && $a[e];
}
var Vt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`;
var $a = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: Vt([0, 0.65, 0.55, 1]),
  circOut: Vt([0.55, 0, 1, 0.45]),
  backIn: Vt([0.31, 0.01, 0.66, -0.59]),
  backOut: Vt([0.33, 1.53, 0.69, 0.99])
};
function ff(e) {
  if (e)
    return Array.isArray(e) ? Vt(e) : $a[e];
}
function hf(e, t, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: l } = {}) {
  return e.animate({ [t]: n, offset: l }, {
    delay: r,
    duration: o,
    easing: ff(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
var Oi = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
};
var xr = {};
var ja = {};
for (const e in Oi)
  ja[e] = () => (xr[e] === void 0 && (xr[e] = Oi[e]()), xr[e]);
function pf(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
var mf = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
]);
var hn = 10;
function gf(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (!(ja.waapi() && mf.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0))
    return false;
  let { keyframes: i, duration: a = 300, elapsed: l = 0, ease: c } = o;
  if (o.type === "spring" || !df(o.ease)) {
    if (o.repeat === 1 / 0)
      return;
    const d = Dn({ ...o, elapsed: 0 });
    let f = { done: false, value: i[0] };
    const h = [];
    let m = 0;
    for (; !f.done && m < 2e4; )
      f = d.sample(m), h.push(f.value), m += hn;
    i = h, a = m - hn, c = "linear";
  }
  const u = hf(e.owner.current, t, i, {
    ...o,
    delay: -l,
    duration: a,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: c
  });
  return u.onfinish = () => {
    e.set(pf(i, o)), ce.update(() => u.cancel()), r && r();
  }, {
    get currentTime() {
      return u.currentTime || 0;
    },
    set currentTime(d) {
      u.currentTime = d;
    },
    stop: () => {
      const { currentTime: d } = u;
      if (d) {
        const f = Dn({
          ...o,
          autoplay: false
        });
        e.setWithVelocity(f.sample(d - hn).value, f.sample(d).value, hn);
      }
      ce.update(() => u.cancel());
    }
  };
}
function _a(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Je.read(r), e(s - t));
  };
  return ce.read(r, true), () => Je.read(r);
}
function yf({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => {
    n && n(e[e.length - 1]), r && r();
  };
  return t ? { stop: _a(o, -t) } : o();
}
function vf({ keyframes: e, velocity: t = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: d, onComplete: f, onStop: h }) {
  const m = e[0];
  let g;
  function v(b) {
    return n !== void 0 && b < n || r !== void 0 && b > r;
  }
  function x(b) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - b) < Math.abs(r - b) ? n : r;
  }
  function y(b) {
    g && g.stop(), g = Dn({
      keyframes: [0, 1],
      velocity: 0,
      ...b,
      driver: u,
      onUpdate: (P) => {
        d && d(P), b.onUpdate && b.onUpdate(P);
      },
      onComplete: f,
      onStop: h
    });
  }
  function w(b) {
    y({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: l,
      ...b
    });
  }
  if (v(m))
    w({
      velocity: t,
      keyframes: [m, x(m)]
    });
  else {
    let b = o * t + m;
    typeof c < "u" && (b = c(b));
    const P = x(b), E = P === n ? -1 : 1;
    let N, W;
    const _ = (D) => {
      N = W, W = D, t = No(D - N, Be.delta), (E === 1 && D > P || E === -1 && D < P) && w({ keyframes: [D, P], velocity: t });
    };
    y({
      type: "decay",
      keyframes: [m, 0],
      velocity: t,
      timeConstant: s,
      power: o,
      restDelta: l,
      modifyTarget: c,
      onUpdate: v(b) ? _ : void 0
    });
  }
  return {
    stop: () => g && g.stop()
  };
}
var bf = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var xf = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var wf = {
  type: "keyframes",
  duration: 0.8
};
var Sf = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var Tf = (e, { keyframes: t }) => t.length > 2 ? wf : ht.has(e) ? e.startsWith("scale") ? xf(t[1]) : bf : Sf;
var Gr = (e, t) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
Qe.test(t) && // And it contains numbers and/or colors
!t.startsWith("url("));
function Pf({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Fi(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function $i(e) {
  return typeof e == "number" ? 0 : Io("", e);
}
function Ba(e, t) {
  return e[t] || e.default || e;
}
function Af(e, t, n, r) {
  const o = Gr(t, n);
  let s = r.from !== void 0 ? r.from : e.get();
  return s === "none" && o && typeof n == "string" ? s = Io(t, n) : Fi(s) && typeof n == "string" ? s = $i(n) : !Array.isArray(n) && Fi(n) && typeof s == "string" && (n = $i(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
var Uo = (e, t, n, r = {}) => (o) => {
  const s = Ba(r, e) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - Sn(i);
  const l = Af(t, e, n, s), c = l[0], u = l[l.length - 1], d = Gr(e, c), f = Gr(e, u);
  tn(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let h = {
    keyframes: l,
    velocity: t.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (m) => {
      t.set(m), s.onUpdate && s.onUpdate(m);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!d || !f || Md.current || s.type === false)
    return yf(h);
  if (s.type === "inertia")
    return vf(h);
  if (Pf(s) || (h = {
    ...h,
    ...Tf(e, h)
  }), h.duration && (h.duration = Sn(h.duration)), h.repeatDelay && (h.repeatDelay = Sn(h.repeatDelay)), t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const m = gf(t, e, h);
    if (m)
      return m;
  }
  return Dn(h);
};
function Ef(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => Hr(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Hr(e, t, n);
  else {
    const o = typeof t == "function" ? Yn(e, t, n.custom) : t;
    r = Ua(e, o, n);
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function Hr(e, t, n = {}) {
  const r = Yn(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = r ? () => Ua(e, r, n) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return Cf(e, t, c + l, u, d, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [l, c] = a === "beforeChildren" ? [s, i] : [i, s];
    return l().then(c);
  } else
    return Promise.all([s(), i(n.delay)]);
}
function Ua(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: i, ...a } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (s = r);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const f = e.getValue(d), h = a[d];
    if (!f || h === void 0 || u && Mf(u, d))
      continue;
    const m = { delay: n, elapsed: 0, ...s };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const v = e.getProps()[Rd];
      v && (m.elapsed = window.HandoffAppearAnimations(v, d, f, ce));
    }
    let g = f.start(Uo(d, f, h, e.shouldReduceMotion && ht.has(d) ? { type: false } : m));
    Ln(l) && (l.add(d), g = g.then(() => l.remove(d))), c.push(g);
  }
  return Promise.all(c).then(() => {
    i && Td(e, i);
  });
}
function Cf(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Rf).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Hr(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function Rf(e, t) {
  return e.sortNodePosition(t);
}
function Mf({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== true;
  return t[n] = false, r;
}
var Lf = [...yo].reverse();
var Df = yo.length;
function Nf(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ef(e, n, r)));
}
function kf(e) {
  let t = Nf(e);
  const n = If();
  let r = true;
  const o = (l, c) => {
    const u = Yn(e, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...h } = u;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function s(l) {
    t = l(e);
  }
  function i(l, c) {
    const u = e.getProps(), d = e.getVariantContext(true) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let x = 0; x < Df; x++) {
      const y = Lf[x], w = n[y], b = u[y] !== void 0 ? u[y] : d[y], P = Ht(b), E = y === c ? w.isActive : null;
      E === false && (g = x);
      let N = b === d[y] && b !== u[y] && P;
      if (N && r && e.manuallyAnimateOnMount && (N = false), w.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !b && !w.prevProp || // Or if the prop doesn't define an animation
      Un(b) || typeof b == "boolean")
        continue;
      const W = Vf(w.prevProp, b);
      let _ = W || // If we're making this variant active, we want to always make it active
      y === c && w.isActive && !N && P || // If we removed a higher-priority variant (i is in reverse order)
      x > g && P;
      const D = Array.isArray(b) ? b : [b];
      let $ = D.reduce(o, {});
      E === false && ($ = {});
      const { prevResolvedValues: z = {} } = w, H = {
        ...z,
        ...$
      }, j = (k) => {
        _ = true, h.delete(k), w.needsAnimating[k] = true;
      };
      for (const k in H) {
        const V = $[k], Q = z[k];
        m.hasOwnProperty(k) || (V !== Q ? Rn(V) && Rn(Q) ? !ga(V, Q) || W ? j(k) : w.protectedKeys[k] = true : V !== void 0 ? j(k) : h.add(k) : V !== void 0 && h.has(k) ? j(k) : w.protectedKeys[k] = true);
      }
      w.prevProp = b, w.prevResolvedValues = $, w.isActive && (m = { ...m, ...$ }), r && e.blockInitialAnimation && (_ = false), _ && !N && f.push(...D.map((k) => ({
        animation: k,
        options: { type: y, ...l }
      })));
    }
    if (h.size) {
      const x = {};
      h.forEach((y) => {
        const w = e.getBaseTarget(y);
        w !== void 0 && (x[y] = w);
      }), f.push({ animation: x });
    }
    let v = Boolean(f.length);
    return r && u.initial === false && !e.manuallyAnimateOnMount && (v = false), r = false, v ? t(f) : Promise.resolve();
  }
  function a(l, c, u) {
    var d;
    if (n[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
    }), n[l].isActive = c;
    const f = i(u, l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function Vf(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ga(t, e) : false;
}
function rt(e = false) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function If() {
  return {
    animate: rt(true),
    whileInView: rt(),
    whileHover: rt(),
    whileTap: rt(),
    whileDrag: rt(),
    whileFocus: rt(),
    exit: rt()
  };
}
var Of = class extends tt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = kf(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Un(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
};
var Ff = 0;
var $f = class extends tt {
  constructor() {
    super(...arguments), this.id = Ff++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const s = this.node.animationState.setActive("exit", !t, { custom: r ?? this.node.getProps().custom });
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
};
var jf = {
  animation: {
    Feature: Of
  },
  exit: {
    Feature: $f
  }
};
var ji = (e, t) => Math.abs(e - t);
function _f(e, t) {
  const n = ji(e.x, t.x), r = ji(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var za = class {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Sr(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = _f(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: h } = Be;
      this.history.push({ ...f, timestamp: h });
      const { onStart: m, onMove: g } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = wr(u, this.transformPagePoint), ce.update(this.updatePoint, true);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, h = Sr(c.type === "pointercancel" ? this.lastMoveEventInfo : wr(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, h), f && f(c, h);
    }, !da(t))
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = Gn(t), s = wr(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = Be;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, Sr(s, this.history)), this.removeListeners = qe(_e(window, "pointermove", this.handlePointerMove), _e(window, "pointerup", this.handlePointerUp), _e(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Je.update(this.updatePoint);
  }
};
function wr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function _i(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Sr({ point: e }, t) {
  return {
    point: e,
    delta: _i(e, Wa(t)),
    offset: _i(e, Bf(t)),
    velocity: Uf(t, 0.1)
  };
}
function Bf(e) {
  return e[0];
}
function Wa(e) {
  return e[e.length - 1];
}
function Uf(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Wa(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Sn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = (o.timestamp - r.timestamp) / 1e3;
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function xe(e) {
  return e.max - e.min;
}
function Yr(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Bi(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ee(t.min, t.max, e.origin), e.scale = xe(n) / xe(t), (Yr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = ee(n.min, n.max, e.origin) - e.originPoint, (Yr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function jt(e, t, n, r) {
  Bi(e.x, t.x, n.x, r ? r.originX : void 0), Bi(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ui(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + xe(t);
}
function zf(e, t, n) {
  Ui(e.x, t.x, n.x), Ui(e.y, t.y, n.y);
}
function zi(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + xe(t);
}
function _t(e, t, n) {
  zi(e.x, t.x, n.x), zi(e.y, t.y, n.y);
}
function Wf(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ee(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ee(n, e, r.max) : Math.min(e, n)), e;
}
function Wi(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Gf(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: Wi(e.x, n, o),
    y: Wi(e.y, t, r)
  };
}
function Gi(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Hf(e, t) {
  return {
    x: Gi(e.x, t.x),
    y: Gi(e.y, t.y)
  };
}
function Yf(e, t) {
  let n = 0.5;
  const r = xe(e), o = xe(t);
  return o > r ? n = Xt(t.min, t.max - r, e.min) : r > o && (n = Xt(e.min, e.max - o, t.min)), Tt(0, 1, n);
}
function Kf(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Kr = 0.35;
function qf(e = Kr) {
  return e === false ? e = 0 : e === true && (e = Kr), {
    x: Hi(e, "left", "right"),
    y: Hi(e, "top", "bottom")
  };
}
function Hi(e, t, n) {
  return {
    min: Yi(e, t),
    max: Yi(e, n)
  };
}
function Yi(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
var Ki = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var Bt = () => ({
  x: Ki(),
  y: Ki()
});
var qi = () => ({ min: 0, max: 0 });
var oe = () => ({
  x: qi(),
  y: qi()
});
function ke(e) {
  return [e("x"), e("y")];
}
function Ga({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Xf({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Zf(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Tr(e) {
  return e === void 0 || e === 1;
}
function qr({ scale: e, scaleX: t, scaleY: n }) {
  return !Tr(e) || !Tr(t) || !Tr(n);
}
function st(e) {
  return qr(e) || Ha(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Ha(e) {
  return Xi(e.x) || Xi(e.y);
}
function Xi(e) {
  return e && e !== "0%";
}
function Nn(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Zi(e, t, n, r, o) {
  return o !== void 0 && (e = Nn(e, o, r)), Nn(e, n, r) + t;
}
function Xr(e, t = 0, n = 1, r, o) {
  e.min = Zi(e.min, t, n, r, o), e.max = Zi(e.max, t, n, r, o);
}
function Ya(e, { x: t, y: n }) {
  Xr(e.x, t.translate, t.scale, t.originPoint), Xr(e.y, n.translate, n.scale, n.originPoint);
}
function Jf(e, t, n, r = false) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const l = s.instance;
    l && l.style && l.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && xt(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Ya(e, i)), r && st(s.latestValues) && xt(e, s.latestValues));
  }
  t.x = Ji(t.x), t.y = Ji(t.y);
}
function Ji(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ye(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Qi(e, t, [n, r, o]) {
  const s = t[o] !== void 0 ? t[o] : 0.5, i = ee(e.min, e.max, s);
  Xr(e, t[n], t[r], i, t.scale);
}
var Qf = ["x", "scaleX", "originX"];
var eh = ["y", "scaleY", "originY"];
function xt(e, t) {
  Qi(e.x, t, Qf), Qi(e.y, t, eh);
}
function Ka(e, t) {
  return Ga(Zf(e.getBoundingClientRect(), t));
}
function th(e, t, n) {
  const r = Ka(e, n), { scroll: o } = t;
  return o && (Ye(r.x, o.offset.x), Ye(r.y, o.offset.y)), r;
}
var nh = /* @__PURE__ */ new WeakMap();
var rh = class {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = oe(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = false } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === false)
      return;
    const o = (l) => {
      this.stopAnimation(), n && this.snapToCursor(Gn(l, "page").point);
    }, s = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = ha(u), !this.openGlobalLock))
        return;
      this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), ke((m) => {
        let g = this.getAxisMotionValue(m).get() || 0;
        if (Ve.test(g)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const x = v.layout.layoutBox[m];
            x && (g = xe(x) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[m] = g;
      }), f && f(l, c);
      const { animationState: h } = this.visualElement;
      h && h.setActive("whileDrag", true);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: h } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: m } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = oh(m), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, m), this.updateAxis("y", c.point, m), this.visualElement.render(), h && h(l, c);
    }, a = (l, c) => this.stop(l, c);
    this.panSession = new za(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && s(t, n);
  }
  cancel() {
    this.isDragging = false;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", false);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !pn(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = Wf(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    t && vt(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Gf(r.layoutBox, t) : this.constraints = false, this.elastic = qf(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ke((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = Kf(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !vt(t))
      return false;
    const r = t.current;
    Le(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return false;
    const s = th(r, o.root, this.visualElement.getTransformPagePoint());
    let i = Hf(o.layout.layoutBox, s);
    if (n) {
      const a = n(Xf(i));
      this.hasMutatedConstraints = !!a, a && (i = Ga(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = ke((u) => {
      if (!pn(u, n, this.currentDirection))
        return;
      let d = l && l[u] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Uo(t, r, 0, n));
  }
  stopAnimation() {
    ke((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(), r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ke((n) => {
      const { drag: r } = this.getProps();
      if (!pn(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - ee(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!vt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    ke((i) => {
      const a = this.getAxisMotionValue(i);
      if (a) {
        const l = a.get();
        o[i] = Yf({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ke((i) => {
      if (!pn(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      a.set(ee(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    nh.set(this.visualElement, this);
    const t = this.visualElement.current, n = _e(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = true } = this.getProps();
      c && u && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      vt(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const i = Fe(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (ke((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: r = false, dragPropagation: o = false, dragConstraints: s = false, dragElastic: i = Kr, dragMomentum: a = true } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
};
function pn(e, t, n) {
  return (t === true || t === e) && (n === null || n === e);
}
function oh(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
var ih = class extends tt {
  constructor(t) {
    super(t), this.removeGroupControls = Ae, this.removeListeners = Ae, this.controls = new rh(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ae;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
};
var sh = class extends tt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ae;
  }
  onPointerDown(t) {
    this.session = new za(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: t,
      onStart: n,
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && o(s, i);
      }
    };
  }
  mount() {
    this.removePointerDownListener = _e(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
};
function ah() {
  const e = (0, import_react.useContext)(_n);
  if (e === null)
    return [true, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = (0, import_react.useId)();
  return (0, import_react.useEffect)(() => r(o), []), !t && n ? [false, () => n && n(o)] : [true];
}
function es(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var kt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = es(e, t.target.x), r = es(e, t.target.y);
    return `${n}% ${r}%`;
  }
};
var qa = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function lh(e) {
  const t = qa.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
var ch = 4;
function Zr(e, t, n = 1) {
  Le(n <= ch, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = lh(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  return s ? s.trim() : Or(o) ? Zr(o, t, n + 1) : o;
}
function uh(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const s = o.get();
    if (!Or(s))
      return;
    const i = Zr(s, r);
    i && o.set(i);
  });
  for (const o in t) {
    const s = t[o];
    if (!Or(s))
      continue;
    const i = Zr(s, r);
    i && (t[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: t, transitionEnd: n };
}
var ts = "_$css";
var dh = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = e.includes("var("), s = [];
    o && (e = e.replace(qa, (h) => (s.push(h), ts)));
    const i = Qe.parse(e);
    if (i.length > 5)
      return r;
    const a = Qe.createTransformer(e), l = typeof i[0] != "number" ? 1 : 0, c = n.x.scale * t.x, u = n.y.scale * t.y;
    i[0 + l] /= c, i[1 + l] /= u;
    const d = ee(c, u, 0.5);
    typeof i[2 + l] == "number" && (i[2 + l] /= d), typeof i[3 + l] == "number" && (i[3 + l] /= d);
    let f = a(i);
    if (o) {
      let h = 0;
      f = f.replace(ts, () => {
        const m = s[h];
        return h++, m;
      });
    }
    return f;
  }
};
var fh = class extends import_react.default.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    hu(hh), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ot.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || ce.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
};
function Xa(e) {
  const [t, n] = ah(), r = (0, import_react.useContext)(xo);
  return import_react.default.createElement(fh, { ...e, layoutGroup: r, switchLayoutGroup: (0, import_react.useContext)(Js), isPresent: t, safeToRemove: n });
}
var hh = {
  borderRadius: {
    ...kt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: kt,
  borderTopRightRadius: kt,
  borderBottomLeftRadius: kt,
  borderBottomRightRadius: kt,
  boxShadow: dh
};
function ph(e, t, n = {}) {
  const r = ge(e) ? e : Pt(e);
  return r.start(Uo("", r, t, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
var Za = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var mh = Za.length;
var ns = (e) => typeof e == "string" ? parseFloat(e) : e;
var rs = (e) => typeof e == "number" || R.test(e);
function gh(e, t, n, r, o, s) {
  o ? (e.opacity = ee(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    yh(r)
  ), e.opacityExit = ee(t.opacity !== void 0 ? t.opacity : 1, 0, vh(r))) : s && (e.opacity = ee(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < mh; i++) {
    const a = `border${Za[i]}Radius`;
    let l = os(t, a), c = os(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || rs(l) === rs(c) ? (e[a] = Math.max(ee(ns(l), ns(c), r), 0), (Ve.test(c) || Ve.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = ee(t.rotate || 0, n.rotate || 0, r));
}
function os(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var yh = Ja(0, 0.5, _o);
var vh = Ja(0.5, 0.95, Ae);
function Ja(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Xt(e, t, r));
}
function is(e, t) {
  e.min = t.min, e.max = t.max;
}
function Te(e, t) {
  is(e.x, t.x), is(e.y, t.y);
}
function ss(e, t, n, r, o) {
  return e -= t, e = Nn(e, 1 / n, r), o !== void 0 && (e = Nn(e, 1 / o, r)), e;
}
function bh(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ve.test(t) && (t = parseFloat(t), t = ee(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = ee(s.min, s.max, r);
  e === s && (a -= t), e.min = ss(e.min, t, n, a, o), e.max = ss(e.max, t, n, a, o);
}
function as(e, t, [n, r, o], s, i) {
  bh(e, t[n], t[r], t[o], t.scale, s, i);
}
var xh = ["x", "scaleX", "originX"];
var wh = ["y", "scaleY", "originY"];
function ls(e, t, n, r) {
  as(e.x, t, xh, n ? n.x : void 0, r ? r.x : void 0), as(e.y, t, wh, n ? n.y : void 0, r ? r.y : void 0);
}
function cs(e) {
  return e.translate === 0 && e.scale === 1;
}
function Qa(e) {
  return cs(e.x) && cs(e.y);
}
function Jr(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function us(e) {
  return xe(e.x) / xe(e.y);
}
var Sh = class {
  constructor() {
    this.members = [];
  }
  add(t) {
    Mo(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Lo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return false;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== false) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), true) : false;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = true), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = true);
      const { crossfade: o } = t.options;
      o === false && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(false);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function ds(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    l && (r += `rotate(${l}deg) `), c && (r += `rotateX(${c}deg) `), u && (r += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, a = e.y.scale * t.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
var Th = (e, t) => e.depth - t.depth;
var Ph = class {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(t) {
    Mo(this.children, t), this.isDirty = true;
  }
  remove(t) {
    Lo(this.children, t), this.isDirty = true;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Th), this.isDirty = false, this.children.forEach(t);
  }
};
function Ah(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
var fs = ["", "X", "Y", "Z"];
var hs = 1e3;
var Eh = 0;
var at = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function el({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, l = t == null ? void 0 : t()) {
      this.id = Eh++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0, this.nodes.forEach(Mh), this.nodes.forEach(kh), this.nodes.forEach(Vh), this.nodes.forEach(Lh), Ah(at);
      }, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = true;
      this.root === this && (this.nodes = new Ph());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Do()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    registerPotentialNode(i, a) {
      this.potentialNodes.set(i, a);
    }
    /**
     * Lifecycles
     */
    mount(i, a = false) {
      if (this.instance)
        return;
      this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (c || l) && (this.isLayoutDirty = true), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = false;
        e(i, () => {
          this.root.updateBlockedByResize = true, d && d(), d = _a(f, 250), Ot.hasAnimatedSinceResize && (Ot.hasAnimatedSinceResize = false, this.nodes.forEach(ms));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== false && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: h, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || u.getDefaultTransition() || jh, { onLayoutAnimationStart: v, onLayoutAnimationComplete: x } = u.getProps(), y = !this.targetLayout || !Jr(this.targetLayout, m) || h, w = !f && h;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, w);
          const b = {
            ...Ba(g, "layout"),
            onPlay: v,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = false), this.startAnimation(b);
        } else
          !f && this.animationProgress === 0 && ms(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Je.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(Ih), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = true) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = true, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(false);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ps);
        return;
      }
      this.isUpdating && (this.isUpdating = false, this.potentialNodes.size && (this.potentialNodes.forEach(_h), this.potentialNodes.clear()), this.nodes.forEach(Nh), this.nodes.forEach(Ch), this.nodes.forEach(Rh), this.clearAllSnapshots(), mr.update(), mr.preRender(), mr.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(Dh), this.sharedNodes.forEach(Oh);
    }
    scheduleUpdateProjection() {
      ce.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      ce.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(false), this.layoutCorrected = oe(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let a = Boolean(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = false), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, a = this.projectionDelta && !Qa(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (a || st(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(i = true) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), Bh(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return oe();
      const a = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (Ye(a.x, l.offset.x), Ye(a.y, l.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = oe();
      Te(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Te(a, i);
            const { scroll: f } = this.root;
            f && (Ye(a.x, -f.offset.x), Ye(a.y, -f.offset.y));
          }
          Ye(a.x, u.offset.x), Ye(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = false) {
      const l = oe();
      Te(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && xt(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), st(u.latestValues) && xt(l, u.latestValues);
      }
      return st(this.latestValues) && xt(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = oe();
      Te(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !st(c.latestValues))
          continue;
        qr(c.latestValues) && c.updateSnapshot();
        const u = oe(), d = c.measurePageBox();
        Te(u, d), ls(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return st(this.latestValues) && ls(a, this.latestValues), a;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : true
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    /**
     * Frame calculations
     */
    resolveTargetDelta() {
      var i;
      const a = this.getLead();
      if (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty), !((Boolean(this.resumingFrom) || this !== a) && this.isSharedProjectionDirty || this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout ? (this.relativeParent = f, this.relativeTarget = oe(), this.relativeTargetOrigin = oe(), _t(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), Te(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = oe(), this.targetWithTransforms = oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? zf(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Te(this.target, this.layout.layoutBox), Ya(this.target, this.targetDelta)) : Te(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = false;
            const f = this.getClosestProjectingParent();
            f && Boolean(f.resumingFrom) === Boolean(this.resumingFrom) && !f.options.layoutScroll && f.target ? (this.relativeParent = f, this.relativeTarget = oe(), this.relativeTargetOrigin = oe(), _t(this.relativeTargetOrigin, this.target, f.target), Te(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          at.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || qr(this.parent.latestValues) || Ha(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = Boolean(this.resumingFrom) || this !== a;
      let c = true;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = false), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = false), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Te(this.layoutCorrected, this.layout.layoutBox), Jf(this.layoutCorrected, this.treeScale, this.path, l);
      const { target: f } = a;
      if (!f)
        return;
      this.projectionDelta || (this.projectionDelta = Bt(), this.projectionDeltaWithTransform = Bt());
      const h = this.treeScale.x, m = this.treeScale.y, g = this.projectionTransform;
      jt(this.projectionDelta, this.layoutCorrected, f, this.latestValues), this.projectionTransform = ds(this.projectionDelta, this.treeScale), (this.projectionTransform !== g || this.treeScale.x !== h || this.treeScale.y !== m) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", f)), at.recalculatedProjection++;
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(i = true) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = false) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Bt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = oe(), h = l ? l.source : void 0, m = this.layout ? this.layout.source : void 0, g = h !== m, v = this.getStack(), x = !v || v.members.length <= 1, y = Boolean(g && !x && this.options.crossfade === true && !this.path.some($h));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (b) => {
        const P = b / 1e3;
        gs(d.x, i.x, P), gs(d.y, i.y, P), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_t(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Fh(this.relativeTarget, this.relativeTargetOrigin, f, P), w && Jr(this.relativeTarget, w) && (this.isProjectionDirty = false), w || (w = oe()), Te(w, this.relativeTarget)), g && (this.animationValues = u, gh(u, c, this.latestValues, P, y, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = P;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Je.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ce.update(() => {
        Ot.hasAnimatedSinceResize = true, this.currentAnimation = ph(0, hs, {
          ...i,
          onUpdate: (a) => {
            this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && tl(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || oe();
          const d = xe(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = xe(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        Te(a, l), xt(a, u), jt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new Sh()), this.sharedNodes.get(i).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : true;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = true), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : false;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = false;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = true), !a)
        return;
      const c = {};
      for (let u = 0; u < fs.length; u++) {
        const d = "rotate" + fs[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, l;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = false, c.opacity = "", c.pointerEvents = wn(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const g = {};
        return this.options.layoutId && (g.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, g.pointerEvents = wn(i.pointerEvents) || ""), this.hasProjected && !st(this.latestValues) && (g.transform = u ? u({}, "") : "none", this.hasProjected = false), g;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = ds(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: h, y: m } = this.projectionDelta;
      c.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const g in En) {
        if (f[g] === void 0)
          continue;
        const { correct: v, applyTo: x } = En[g], y = c.transform === "none" ? f[g] : v(f[g], d);
        if (x) {
          const w = x.length;
          for (let b = 0; b < w; b++)
            c[x[b]] = y;
        } else
          c[g] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? wn(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(ps), this.root.sharedNodes.clear();
    }
  };
}
function Ch(e) {
  e.updateLayout();
}
function Rh(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? ke((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = xe(f);
      f.min = r[d].min, f.max = f.min + h;
    }) : tl(s, n.layoutBox, r) && ke((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], h = xe(r[d]);
      f.max = f.min + h;
    });
    const a = Bt();
    jt(a, r, n.layoutBox);
    const l = Bt();
    i ? jt(l, e.applyTransform(o, true), n.measuredBox) : jt(l, r, n.layoutBox);
    const c = !Qa(a);
    let u = false;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const m = oe();
          _t(m, n.layoutBox, f.layoutBox);
          const g = oe();
          _t(g, r, h.layoutBox), Jr(m, g) || (u = true), d.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = m, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Mh(e) {
  at.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Lh(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = false;
}
function Dh(e) {
  e.clearSnapshot();
}
function ps(e) {
  e.clearMeasurements();
}
function Nh(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ms(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function kh(e) {
  e.resolveTargetDelta();
}
function Vh(e) {
  e.calcProjection();
}
function Ih(e) {
  e.resetRotation();
}
function Oh(e) {
  e.removeLeadSnapshot();
}
function gs(e, t, n) {
  e.translate = ee(t.translate, 0, n), e.scale = ee(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ys(e, t, n, r) {
  e.min = ee(t.min, n.min, r), e.max = ee(t.max, n.max, r);
}
function Fh(e, t, n, r) {
  ys(e.x, t.x, n.x, r), ys(e.y, t.y, n.y, r);
}
function $h(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var jh = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function _h(e, t) {
  let n = e.root;
  for (let s = e.path.length - 1; s >= 0; s--)
    if (Boolean(e.path[s].instance)) {
      n = e.path[s];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, true);
}
function vs(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Bh(e) {
  vs(e.x), vs(e.y);
}
function tl(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Yr(us(t), us(n), 0.2);
}
var Uh = el({
  attachResizeListener: (e, t) => Fe(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});
var Pr = {
  current: void 0
};
var nl = el({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Pr.current) {
      const e = new Uh(0, {});
      e.mount(window), e.setOptions({ layoutScroll: true }), Pr.current = e;
    }
    return Pr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => Boolean(window.getComputedStyle(e).position === "fixed")
});
var zh = {
  pan: {
    Feature: sh
  },
  drag: {
    Feature: ih,
    ProjectionNode: nl,
    MeasureLayout: Xa
  }
};
var Wh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var rl = (e) => Wh.has(e);
var Gh = (e) => Object.keys(e).some(rl);
var mn = (e) => e === pt || e === R;
var bs = (e, t) => parseFloat(e.split(", ")[t]);
var xs = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return bs(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? bs(s[1], e) : 0;
  }
};
var Hh = /* @__PURE__ */ new Set(["x", "y", "z"]);
var Yh = Wn.filter((e) => !Hh.has(e));
function Kh(e) {
  const t = [];
  return Yh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
var ws = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: xs(4, 13),
  y: xs(5, 14)
};
var qh = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((c) => {
    a[c] = ws[c](r, s);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(a[c]), e[c] = ws[c](l, s);
  }), e;
};
var Xh = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(rl);
  let s = [], i = false;
  const a = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = n[l], d = Nt(u);
    const f = t[l];
    let h;
    if (Rn(f)) {
      const m = f.length, g = f[0] === null ? 1 : 0;
      u = f[g], d = Nt(u);
      for (let v = g; v < m; v++)
        h ? Le(Nt(f[v]) === h, "All keyframes must be of the same type") : (h = Nt(f[v]), Le(h === d || mn(d) && mn(h), "Keyframes must be of the same dimension as the current value"));
    } else
      h = Nt(f);
    if (d !== h)
      if (mn(d) && mn(h)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === R && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(h.transform(u)) : t[l] = d.transform(f) : (i || (s = Kh(e), i = true), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], c.jump(f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, c = qh(t, e, a);
    return s.length && s.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Bn && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function Zh(e, t, n, r) {
  return Gh(t) ? Xh(e, t, n, r) : { target: t, transitionEnd: r };
}
var Jh = (e, t, n, r) => {
  const o = uh(e, t, r);
  return t = o.target, r = o.transitionEnd, Zh(e, t, n, r);
};
var Qr = { current: null };
var ol = { current: false };
function Qh() {
  if (ol.current = true, !!Bn)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Qr.current = e.matches;
      e.addListener(t), t();
    } else
      Qr.current = false;
}
var Ss = /* @__PURE__ */ new Set();
function zo(e, t, n) {
  e || Ss.has(t) || (console.warn(t), n && console.warn(n), Ss.add(t));
}
function ep(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const s = t[o], i = n[o];
    if (ge(s))
      e.addValue(o, s), Ln(r) && r.add(o), zo(s.version === "9.1.7", `Attempting to mix Framer Motion versions ${s.version} with 9.1.7 may not work as expected.`);
    else if (ge(i))
      e.addValue(o, Pt(s, { owner: e })), Ln(r) && r.remove(o);
    else if (i !== s)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Pt(a !== void 0 ? a : s, { owner: e }));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
var il = Object.keys(Yt);
var tp = il.length;
var Ts = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var np = vo.length;
var rp = class {
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: s }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => ce.render(this.render, false, true);
    const { latestValues: a, renderState: l } = s;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = zn(n), this.isVariantNode = Zs(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = Boolean(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in u) {
      const f = u[d];
      a[d] !== void 0 && ge(f) && (f.set(a[d], false), Ln(c) && c.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ol.current || Qh(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Qr.current, zo(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Je.update(this.notifyUpdate), Je.render(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = ht.has(t), o = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && ce.update(this.notifyUpdate, false, true), r && this.projection && (this.projection.isTransformDirty = true);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), s();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, s, i) {
    let a, l;
    if (o && r) {
      const c = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      n.ignoreStrict ? tn(false, c) : Le(false, c);
    }
    for (let c = 0; c < tp; c++) {
      const u = il[c], { isEnabled: d, Feature: f, ProjectionNode: h, MeasureLayout: m } = Yt[u];
      h && (a = h), d(n) && (!this.features[u] && f && (this.features[u] = new f(this)), m && (l = m));
    }
    if (!this.projection && a) {
      this.projection = new a(s, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: c, layout: u, drag: d, dragConstraints: f, layoutScroll: h, layoutRoot: m } = n;
      this.projection.setOptions({
        layoutId: c,
        layout: u,
        alwaysMeasureLayout: Boolean(d) || f && vt(f),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update(this.props, this.prevProps) : (n.mount(), n.isMounted = true);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = true) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Ts.length; r++) {
      const o = Ts[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = t["on" + o];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    this.prevMotionValues = ep(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = false) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < np; r++) {
      const o = vo[r], s = this.props[o];
      (Ht(s) || s === false) && (n[o] = s);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Pt(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = Ro(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ge(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Do()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
};
var sl = class extends rp {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, s) {
    let i = Ed(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      Pd(this, r, i);
      const a = Jh(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
};
function op(e) {
  return window.getComputedStyle(e);
}
var ip = class extends sl {
  readValueFromInstance(t, n) {
    if (ht.has(n)) {
      const r = Vo(n);
      return r && r.default || 0;
    } else {
      const r = op(t), o = (ta(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Ka(t, n);
  }
  build(t, n, r, o) {
    So(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Co(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, o) {
    sa(t, n, r, o);
  }
};
var sp = class extends sl {
  constructor() {
    super(...arguments), this.isSVGTag = false;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ht.has(n)) {
      const r = Vo(n);
      return r && r.default || 0;
    }
    return n = aa.has(n) ? n : Eo(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return oe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ca(t, n);
  }
  build(t, n, r, o) {
    Po(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    la(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = Ao(t.tagName), super.mount(t);
  }
};
var ap = (e, t) => wo(e) ? new sp(t, { enableHardwareAcceleration: false }) : new ip(t, { enableHardwareAcceleration: true });
var lp = {
  layout: {
    ProjectionNode: nl,
    MeasureLayout: Xa
  }
};
var cp = {
  ...jf,
  ...Ju,
  ...zh,
  ...lp
};
var nn = /* @__PURE__ */ du((e, t) => ju(e, t, cp, ap));
function al() {
  const e = (0, import_react.useRef)(false);
  return An(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function up() {
  const e = al(), [t, n] = (0, import_react.useState)(0), r = (0, import_react.useCallback)(() => {
    e.current && n(t + 1);
  }, [t]);
  return [(0, import_react.useCallback)(() => ce.postRender(r), [r]), t];
}
var dp = class extends U.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};
function fp({ children: e, isPresent: t }) {
  const n = (0, import_react.useId)(), r = (0, import_react.useRef)(null), o = (0, import_react.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return (0, import_react.useInsertionEffect)(() => {
    const { width: s, height: i, top: a, left: l } = o.current;
    if (t || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), U.createElement(dp, { isPresent: t, childRef: r, sizeRef: o }, U.cloneElement(e, { ref: r }));
}
var Ar = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = bo(hp), l = (0, import_react.useId)(), c = (0, import_react.useMemo)(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (u) => {
        a.set(u, true);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (u) => (a.set(u, false), () => a.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return (0, import_react.useMemo)(() => {
    a.forEach((u, d) => a.set(d, false));
  }, [n]), U.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = U.createElement(fp, { isPresent: n }, e)), U.createElement(_n.Provider, { value: c }, e);
};
function hp() {
  return /* @__PURE__ */ new Map();
}
function pp(e) {
  return (0, import_react.useEffect)(() => () => e(), []);
}
var yt = (e) => e.key || "";
function mp(e, t) {
  e.forEach((n) => {
    const r = yt(n);
    t.set(r, n);
  });
}
function gp(e) {
  const t = [];
  return import_react.Children.forEach(e, (n) => {
    (0, import_react.isValidElement)(n) && t.push(n);
  }), t;
}
var ll = ({ children: e, custom: t, initial: n = true, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = true, mode: i = "sync" }) => {
  o && (i = "wait", zo(false, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = up();
  const l = (0, import_react.useContext)(xo).forceRender;
  l && (a = l);
  const c = al(), u = gp(e);
  let d = u;
  const f = /* @__PURE__ */ new Set(), h = (0, import_react.useRef)(d), m = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current, g = (0, import_react.useRef)(true);
  if (An(() => {
    g.current = false, mp(u, m), h.current = d;
  }), pp(() => {
    g.current = true, m.clear(), f.clear();
  }), g.current)
    return U.createElement(U.Fragment, null, d.map((w) => U.createElement(Ar, { key: yt(w), isPresent: true, initial: n ? void 0 : false, presenceAffectsLayout: s, mode: i }, w)));
  d = [...d];
  const v = h.current.map(yt), x = u.map(yt), y = v.length;
  for (let w = 0; w < y; w++) {
    const b = v[w];
    x.indexOf(b) === -1 && f.add(b);
  }
  return i === "wait" && f.size && (d = []), f.forEach((w) => {
    if (x.indexOf(w) !== -1)
      return;
    const b = m.get(w);
    if (!b)
      return;
    const P = v.indexOf(w), E = () => {
      m.delete(w), f.delete(w);
      const N = h.current.findIndex((W) => W.key === w);
      if (h.current.splice(N, 1), !f.size) {
        if (h.current = u, c.current === false)
          return;
        a(), r && r();
      }
    };
    d.splice(P, 0, U.createElement(Ar, { key: yt(b), isPresent: false, onExitComplete: E, custom: t, presenceAffectsLayout: s, mode: i }, b));
  }), d = d.map((w) => {
    const b = w.key;
    return f.has(b) ? w : U.createElement(Ar, { key: yt(w), isPresent: true, presenceAffectsLayout: s, mode: i }, w);
  }), i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), U.createElement(U.Fragment, null, f.size ? d : d.map((w) => (0, import_react.cloneElement)(w)));
};
function yp() {
  const [e, t] = (0, import_react.useState)(false), n = () => t(true), r = () => t(false), o = import_react.default.useCallback(
    () => t((c) => !c),
    [e, n, r]
  ), i = `disclosure-${(0, import_react.useId)()}`;
  function a(c = {}) {
    return {
      ...c,
      "aria-expanded": e,
      "aria-controls": i,
      // This registers a aria control relationship between the trigger and the disclosure
      onClick(u) {
        var d;
        (d = c.onClick) == null || d.call(c, u), o();
      }
    };
  }
  function l(c = {}) {
    return {
      ...c,
      hidden: !e,
      id: i
      // This connects back to the id above (hence the aria control relationship where the button controls the disclosure)
    };
  }
  return {
    isOpen: e,
    onOpen: n,
    onClose: r,
    onToggle: o,
    getTriggerProps: a,
    getDisclosureProps: l
  };
}
function cl(e) {
  const { onMatch: t, enabled: n = true } = e, r = (0, import_react.useRef)(null), o = (i) => {
    r.current && !r.current.contains(i.target) && t();
  }, s = (i) => {
    r.current && !r.current.contains(i.target) && t();
  };
  return (0, import_react.useEffect)(() => {
    if (!n)
      return;
    const i = vp(r.current);
    return i.addEventListener("mousedown", o), i.addEventListener("touchstart", s), () => {
      i.removeEventListener("mousedown", o), i.removeEventListener("touchstart", s);
    };
  }, []), r;
}
function vp(e) {
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
var ul = (...e) => {
  const t = (0, import_react.useRef)(null);
  return (0, import_react.useEffect)(() => {
    e.forEach((n) => {
      n && (typeof n == "function" ? n(t.current) : n.current = t.current);
    });
  }, [e]), t;
};
function bp(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function dl(...e) {
  return (0, import_react.useMemo)(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      n && bp(n, t);
    });
  }, e);
}
var eo = "rapid-accordion-content";
var xp = "p-2 text-gray-500";
var Xy = (0, import_react.forwardRef)(
  ({ children: e, styles: t, ...n }, r) => {
    const o = (0, import_react.useRef)(null), s = ul(r, o), { activeItems: i, id: a } = po(), l = mo(o), c = go(l, i), u = {
      open: { opacity: 1, height: "auto" },
      closed: { opacity: 0, height: 0 }
    }, d = {
      opacity: { duration: 0.3, ease: "easeInOut" },
      height: { duration: c ? 0.3 : 0.2, ease: "easeInOut" }
    };
    return /* @__PURE__ */ T(
      nn.div,
      {
        initial: "closed",
        animate: c ? "open" : "closed",
        variants: u,
        transition: d,
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ T(
          "div",
          {
            id: `${eo}-${a}-${l}`,
            ref: s,
            ...n,
            className: C(
              t || n.className,
              xp,
              eo
            ),
            "aria-labelledby": `${to}-${a}-${l}`,
            role: "region",
            children: e
          }
        )
      }
    );
  }
);
var to = "rapid-accordion-header";
var wp = "cursor-pointer p-2 hover:bg-hoverWhite";
var Sp = "flex justify-between items-center";
var Zy = (0, import_react.forwardRef)(({ children: e, styles: t, ...n }, r) => {
  const { allowToggle: o, activeItems: s, setActiveItems: i, id: a } = po(), l = (0, import_react.useRef)(null), c = mo(l), u = go(c, s), d = (0, import_react.useCallback)(() => {
    c !== null && i(
      o ? (h) => u ? h.filter((m) => m !== c) : [...h, c] : (h) => u ? h : [c]
    );
  }, [c, u, o, i]), f = (0, import_react.useCallback)(
    (h) => {
      (h.key === "Enter" || h.key === " ") && d();
    },
    [d]
  );
  return /* @__PURE__ */ T(
    "h2",
    {
      ref: r,
      ...n,
      id: `${to}-${a}-${c}`,
      className: C(
        t || n.className,
        wp,
        to
      ),
      onClick: d,
      onKeyDown: f,
      role: "button",
      tabIndex: 0,
      "aria-expanded": u,
      "aria-controls": `${eo}-${a}-${c}`,
      children: /* @__PURE__ */ T("div", { ref: l, className: Sp, children: e })
    }
  );
});
var Tp = "rapid-accordion-icon";
var Jy = (0, import_react.forwardRef)(
  ({ styles: e, ...t }, n) => {
    const r = import_react.default.useRef(null), o = ul(n, r), { activeItems: s } = po(), i = mo(r), l = `transition-transform duration-300 ${go(i, s) ? "rotate-180 transform" : ""}`;
    return /* @__PURE__ */ T(
      "svg",
      {
        ref: o,
        ...t,
        className: C(
          e || t.className,
          l,
          Tp
        ),
        pointerEvents: "box-none",
        role: "presentation",
        width: "16px",
        height: "16px",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        children: /* @__PURE__ */ T(
          "path",
          {
            fill: "currentColor",
            d: "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          }
        )
      }
    );
  }
);
var fl = "rapid-accordion-item";
var Pp = "border-b";
var Qy = (0, import_react.forwardRef)(
  ({ children: e, styles: t, ...n }, r) => /* @__PURE__ */ T(
    "div",
    {
      ref: r,
      ...n,
      className: C(
        t || n.className,
        Pp,
        fl
      ),
      children: e
    }
  )
);
var Ap = "h-6 w-6 spinner-fast rounded-full border border-solid border-black border-t-transparent border-r-transparent";
var Ep = import_react.default.forwardRef(
  ({
    styles: e,
    speed: t = "fast",
    size: n = "md",
    label: r = "Loading...",
    children: o,
    ...s
  }, i) => {
    const a = (c) => {
      switch (c) {
        case "slow":
          return "spinner-slow";
        case "medium":
          return "spinner-medium";
        case "fast":
          return "spinner-fast";
      }
    }, l = (c) => {
      switch (c) {
        case "sm":
          return "h-4 w-4";
        case "md":
          return "h-6 w-6";
        case "lg":
          return "h-8 w-8";
      }
    };
    return /* @__PURE__ */ T(
      "div",
      {
        ...s,
        ref: i,
        className: C(
          e || s.className,
          xn(
            Ap,
            a(t),
            l(n)
          )
        ),
        children: /* @__PURE__ */ T("span", { className: "sr-only", role: "alert", "aria-busy": "true", children: r })
      }
    );
  }
);
function Wo(...e) {
  return e.reduce(
    (t, n) => {
      if (typeof n == "boolean")
        return t;
      const r = n;
      return (r == null ? void 0 : r.condition) != null ? (r != null && r.condition && t.push(r.classNames), t) : (t.push(n), t);
    },
    []
  ).join(" ");
}
var Cp = "rapid-skeleton";
var Rp = "h-6 w-full rounded-md";
var Mp = import_react.default.forwardRef(
  ({ styles: e, isLoading: t = true, speed: n = "skeleton-pulse", ...r }, o) => /* @__PURE__ */ T(
    "div",
    {
      ...r,
      ref: o,
      className: Pn(
        Wo({
          condition: t,
          classNames: n || "skeleton-pulse"
        }),
        C(
          e || r.className,
          Rp,
          Cp
        )
        // The pulse className is merged with all the others so that it cannot get overridden by the user
      )
    }
  )
);
Mp.displayName = "Skeleton";
var Lp = "rapid-container";
var Dp = (e) => {
  switch (e) {
    case "sm":
      return "max-w-5xl";
    case "md":
      return "max-w-7xl";
    case "lg":
      return "max-w-container";
  }
};
var tv = import_react.default.forwardRef(
  ({ styles: e, maxWidth: t = "lg", ...n }, r) => {
    const o = `container ${Dp(
      t
    )} mx-auto px-4`;
    return /* @__PURE__ */ T(
      "div",
      {
        ref: r,
        ...n,
        className: C(
          e || n.className,
          o,
          Lp
        )
      }
    );
  }
);
var Np = "rapid-stack";
var hl = import_react.default.forwardRef(
  ({ styles: e, children: t, spacing: n = "lg", direction: r = "column", ...o }, s) => {
    const i = (0, import_react.useMemo)(
      () => Zc(t),
      [t]
    ), a = (0, import_react.useMemo)(() => {
      switch (n) {
        case "sm":
          return "1.5";
        case "md":
          return "3";
        case "lg":
          return "6";
      }
    }, [n]), l = (0, import_react.useMemo)(() => {
      switch (r) {
        case "row":
          return `flex ${`space-x-${a}`}`;
        case "column":
          return `flex flex-col ${`space-y-${a}`}`;
      }
    }, [r, a]);
    return /* @__PURE__ */ T(
      "div",
      {
        ref: s,
        ...o,
        className: C(
          e || o.className,
          l,
          Np
        ),
        children: i
      }
    );
  }
);
var kp = import_react.default.forwardRef(
  ({ styles: e, children: t, spacing: n = "lg", ...r }, o) => /* @__PURE__ */ T(
    hl,
    {
      ...r,
      ref: o,
      spacing: n,
      direction: "column",
      styles: e,
      children: t
    }
  )
);
var nv = import_react.default.forwardRef(
  ({ styles: e, children: t, spacing: n = "lg", ...r }, o) => /* @__PURE__ */ T(
    hl,
    {
      ...r,
      ref: o,
      styles: e,
      spacing: n,
      direction: "row",
      children: t
    }
  )
);
var Vp = (e) => ({
  ...e
});
function nt(e) {
  const { variants: t, defaultProps: n, sizes: r, baseStyle: o } = e, s = (l) => l ? t[l] : t[n.variant], i = (l) => r ? l ? r[l] : r[n.size] || "" : "";
  return {
    variant: (l, c) => {
      let u = C(
        xn(i(c)),
        // We only want to apply variants if the user did not pass in a size
        c ? "" : xn(
          s(l)
        )
      );
      return C(
        u,
        xn(o)
      );
    },
    themeObject: e
  };
}
var Ip = nt({
  variants: {
    dashed: "border-dashed",
    solid: "border-solid"
  },
  sizes: {
    sm: "border",
    md: "border-2",
    lg: "border-4",
    xl: "border-8"
  },
  defaultProps: {
    variant: "solid",
    size: "sm"
  }
});
var Op = "rapid-divider";
var As = "text-lightGrey border-current border-opacity-60";
var Fp = (0, import_react.forwardRef)(
  ({ styles: e, size: t = "sm", orientation: n = "horizontal", variant: r, ...o }, s) => {
    const i = (0, import_react.useMemo)(() => n === "vertical" ? `${As} h-full border-t-0 border-l` : `${As} w-full border-b`, [n]);
    return /* @__PURE__ */ T(
      "hr",
      {
        ref: s,
        ...o,
        className: C(
          e || o.className,
          i,
          $n(r, "divider", t) || Op
        )
      }
    );
  }
);
Fp.displayName = "Divider";
var $p = "rapid-flex";
var ov = (0, import_react.forwardRef)(
  ({ styles: e, children: t, ...n }, r) => {
    const o = "flex";
    return /* @__PURE__ */ T(
      "div",
      {
        ref: r,
        ...n,
        className: C(
          e || n.className,
          o,
          $p
        ),
        children: t
      }
    );
  }
);
var jp = "rapid-skeleton";
var _p = "h-3 w-full rounded-md";
var Bp = import_react.default.forwardRef(
  ({
    styles: e,
    containerStyles: t,
    lineSpacing: n,
    isLoading: r = true,
    numberOfLines: o = 4,
    speed: s
  }, i) => /* @__PURE__ */ T(kp, { styles: t, spacing: n, children: Array.from(Array(o).keys()).map(
    (a, l) => /* @__PURE__ */ T(
      "div",
      {
        ref: i,
        className: Pn(
          C(
            e,
            _p,
            jp
          ),
          Wo({
            condition: r,
            classNames: s || "skeleton-pulse"
          })
        )
      },
      l + a
    )
  ) })
);
Bp.displayName = "SkeletonText";
var Up = Object.defineProperty;
var zp = (e, t, n) => t in e ? Up(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var Er = (e, t, n) => (zp(e, typeof t != "symbol" ? t + "" : t, n), n);
var Wp = class {
  constructor() {
    Er(this, "current", this.detect()), Er(this, "handoffState", "pending"), Er(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var Xe = new Wp();
var me = (e, t) => {
  Xe.isServer ? (0, import_react.useEffect)(e, t) : (0, import_react.useLayoutEffect)(e, t);
};
function ct(e) {
  let t = (0, import_react.useRef)(e);
  return me(() => {
    t.current = e;
  }, [e]), t;
}
function Gp(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ue() {
  let e = [], t = { addEventListener(n, r, o, s) {
    return n.addEventListener(r, o, s), t.add(() => n.removeEventListener(r, o, s));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: true };
    return Gp(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = false;
    });
  }, style(n, r, o) {
    let s = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: o }), this.add(() => {
      Object.assign(n.style, { [r]: s });
    });
  }, group(n) {
    let r = Ue();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let o of e.splice(r, 1))
          o();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function rn() {
  let [e] = (0, import_react.useState)(Ue);
  return (0, import_react.useEffect)(() => () => e.dispose(), [e]), e;
}
var X = function(e) {
  let t = ct(e);
  return import_react.default.useCallback((...n) => t.current(...n), [t]);
};
function Go() {
  let [e, t] = (0, import_react.useState)(Xe.isHandoffComplete);
  return e && Xe.isHandoffComplete === false && t(false), (0, import_react.useEffect)(() => {
    e !== true && t(true);
  }, [e]), (0, import_react.useEffect)(() => Xe.handoff(), []), e;
}
var Es;
var Et = (Es = import_react.default.useId) != null ? Es : function() {
  let e = Go(), [t, n] = import_react.default.useState(e ? () => Xe.nextId() : null);
  return me(() => {
    t === null && n(Xe.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function ve(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...n) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, ve), r;
}
function Kn(e) {
  return Xe.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
var no = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ro = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ro || {});
var Hp = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Hp || {});
var Yp = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Yp || {});
function pl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(no)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ho = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ho || {});
function Yo(e, t = 0) {
  var n;
  return e === ((n = Kn(e)) == null ? void 0 : n.body) ? false : ve(t, { [0]() {
    return e.matches(no);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(no))
        return true;
      r = r.parentElement;
    }
    return false;
  } });
}
function ml(e) {
  let t = Kn(e);
  Ue().nextFrame(() => {
    t && !Yo(t.activeElement, 0) && Kp(e);
  });
}
function Kp(e) {
  e == null || e.focus({ preventScroll: true });
}
var qp = ["textarea", "input"].join(",");
function Xp(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, qp)) != null ? n : false;
}
function gl(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n), s = t(r);
    if (o === null || s === null)
      return 0;
    let i = o.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Zp(e, t) {
  return Jp(pl(), t, { relativeTo: e });
}
function Jp(e, t, { sorted: n = true, relativeTo: r = null, skipElements: o = [] } = {}) {
  let s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, i = Array.isArray(e) ? n ? gl(e) : e : pl(e);
  o.length > 0 && i.length > 1 && (i = i.filter((h) => !o.includes(h))), r = r ?? s.activeElement;
  let a = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(r)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: true } : {}, u = 0, d = i.length, f;
  do {
    if (u >= d || u + d <= 0)
      return 0;
    let h = l + u;
    if (t & 16)
      h = (h + d) % d;
    else {
      if (h < 0)
        return 3;
      if (h >= d)
        return 1;
    }
    f = i[h], f == null || f.focus(c), u += a;
  } while (f !== s.activeElement);
  return t & 6 && Xp(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function Cr(e, t, n) {
  let r = ct(t);
  (0, import_react.useEffect)(() => {
    function o(s) {
      r.current(s);
    }
    return document.addEventListener(e, o, n), () => document.removeEventListener(e, o, n);
  }, [e, n]);
}
function Qp(e, t, n = true) {
  let r = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function o(i, a) {
    if (!r.current || i.defaultPrevented)
      return;
    let l = function u(d) {
      return typeof d == "function" ? u(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e), c = a(i);
    if (c !== null && c.getRootNode().contains(c)) {
      for (let u of l) {
        if (u === null)
          continue;
        let d = u instanceof HTMLElement ? u : u.current;
        if (d != null && d.contains(c) || i.composed && i.composedPath().includes(d))
          return;
      }
      return !Yo(c, Ho.Loose) && c.tabIndex !== -1 && i.preventDefault(), t(i, c);
    }
  }
  let s = (0, import_react.useRef)(null);
  Cr("mousedown", (i) => {
    var a, l;
    r.current && (s.current = ((l = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : l[0]) || i.target);
  }, true), Cr("click", (i) => {
    s.current && (o(i, () => s.current), s.current = null);
  }, true), Cr("blur", (i) => o(i, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function Cs(e) {
  var t;
  if (e.type)
    return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function yl(e, t) {
  let [n, r] = (0, import_react.useState)(() => Cs(e));
  return me(() => {
    r(Cs(e));
  }, [e.type, e.as]), me(() => {
    n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
var em = Symbol();
function ze(...e) {
  let t = (0, import_react.useRef)(e);
  (0, import_react.useEffect)(() => {
    t.current = e;
  }, [e]);
  let n = X((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[em])) ? void 0 : n;
}
function tm({ container: e, accept: t, walk: n, enabled: r = true }) {
  let o = (0, import_react.useRef)(t), s = (0, import_react.useRef)(n);
  (0, import_react.useEffect)(() => {
    o.current = t, s.current = n;
  }, [t, n]), me(() => {
    if (!e || !r)
      return;
    let i = Kn(e);
    if (!i)
      return;
    let a = o.current, l = s.current, c = Object.assign((d) => a(d), { acceptNode: a }), u = i.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, c, false);
    for (; u.nextNode(); )
      l(u.currentNode);
  }, [e, r, o, s]);
}
function nm(e) {
  throw new Error("Unexpected object: " + e);
}
var Ce = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Ce || {});
function rm(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), o = r ?? -1, s = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((a, l, c) => o !== -1 && c.length - l - 1 >= o ? false : !t.resolveDisabled(a));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, a) => a <= o ? false : !t.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((a) => !t.resolveDisabled(a));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        nm(e);
    }
  })();
  return s === -1 ? r : s;
}
function vl(...e) {
  return e.filter(Boolean).join(" ");
}
var kn = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(kn || {});
var $e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($e || {});
function De({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: s = true, name: i }) {
  let a = bl(t, e);
  if (s)
    return yn(a, n, r, i);
  let l = o ?? 0;
  if (l & 2) {
    let { static: c = false, ...u } = a;
    if (c)
      return yn(u, n, r, i);
  }
  if (l & 1) {
    let { unmount: c = true, ...u } = a;
    return ve(c ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return yn({ ...u, hidden: true, style: { display: "none" } }, n, r, i);
    } });
  }
  return yn(a, n, r, i);
}
function yn(e, t = {}, n, r) {
  var o;
  let { as: s = n, children: i, refName: a = "ref", ...l } = Rr(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof i == "function" ? i(t) : i;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t));
  let d = {};
  if (t) {
    let f = false, h = [];
    for (let [m, g] of Object.entries(t))
      typeof g == "boolean" && (f = true), g === true && h.push(m);
    f && (d["data-headlessui-state"] = h.join(" "));
  }
  if (s === import_react.Fragment && Object.keys(oo(l)).length > 0) {
    if (!(0, import_react.isValidElement)(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
    let f = vl((o = u.props) == null ? void 0 : o.className, l.className), h = f ? { className: f } : {};
    return (0, import_react.cloneElement)(u, Object.assign({}, bl(u.props, oo(Rr(l, ["ref"]))), d, c, om(u.ref, c.ref), h));
  }
  return (0, import_react.createElement)(s, Object.assign({}, Rr(l, ["ref"]), s !== import_react.Fragment && c, s !== import_react.Fragment && d), u);
}
function om(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  } };
}
function bl(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](o, ...s) {
      let i = n[r];
      for (let a of i) {
        if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented)
          return;
        a(o, ...s);
      }
    } });
  return t;
}
function Ne(e) {
  var t;
  return Object.assign((0, import_react.forwardRef)(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function oo(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Rr(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function xl(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && im(n) ? false : r;
}
function im(e) {
  if (!e)
    return false;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return false;
    t = t.previousElementSibling;
  }
  return true;
}
function sm(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
var am = "div";
var wl = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(wl || {});
function lm(e, t) {
  let { features: n = 1, ...r } = e, o = { ref: t, "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return De({ ourProps: o, theirProps: r, slot: {}, defaultTag: am, name: "Hidden" });
}
var cm = Ne(lm);
var Ko = (0, import_react.createContext)(null);
Ko.displayName = "OpenClosedContext";
var ye = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ye || {});
function qo() {
  return (0, import_react.useContext)(Ko);
}
function Sl({ value: e, children: t }) {
  return import_react.default.createElement(Ko.Provider, { value: e }, t);
}
var se = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(se || {});
function um(e, t, n) {
  let [r, o] = (0, import_react.useState)(n), s = e !== void 0, i = (0, import_react.useRef)(s), a = (0, import_react.useRef)(false), l = (0, import_react.useRef)(false);
  return s && !i.current && !a.current ? (a.current = true, i.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !s && i.current && !l.current && (l.current = true, i.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [s ? e : r, X((c) => (s || o(c), t == null ? void 0 : t(c)))];
}
function Rs(e) {
  return [e.screenX, e.screenY];
}
function dm() {
  let e = (0, import_react.useRef)([-1, -1]);
  return { wasMoved(t) {
    let n = Rs(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? false : (e.current = n, true);
  }, update(t) {
    e.current = Rs(t);
  } };
}
function Tl() {
  let e = (0, import_react.useRef)(false);
  return me(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function fm(...e) {
  return (0, import_react.useMemo)(() => Kn(...e), [...e]);
}
var Pl = (0, import_react.createContext)(null);
function Al() {
  let e = (0, import_react.useContext)(Pl);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Al), t;
  }
  return e;
}
function hm() {
  let [e, t] = (0, import_react.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react.useMemo)(() => function(n) {
    let r = X((s) => (t((i) => [...i, s]), () => t((i) => {
      let a = i.slice(), l = a.indexOf(s);
      return l !== -1 && a.splice(l, 1), a;
    }))), o = (0, import_react.useMemo)(() => ({ register: r, slot: n.slot, name: n.name, props: n.props }), [r, n.slot, n.name, n.props]);
    return import_react.default.createElement(Pl.Provider, { value: o }, n.children);
  }, [t])];
}
var pm = "p";
function mm(e, t) {
  let n = Et(), { id: r = `headlessui-description-${n}`, ...o } = e, s = Al(), i = ze(t);
  me(() => s.register(r), [r, s.register]);
  let a = { ref: i, ...s.props, id: r };
  return De({ ourProps: a, theirProps: o, slot: s.slot || {}, defaultTag: pm, name: s.name || "Description" });
}
var gm = Ne(mm);
var ym = Object.assign(gm, {});
var vm = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vm || {});
var bm = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(bm || {});
var xm = ((e) => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(xm || {});
function Mr(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, r = gl(t(e.items.slice()), (s) => s.dataRef.current.domRef.current), o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { items: r, activeItemIndex: o };
}
var wm = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, menuState: 0 };
}, [2]: (e, t) => {
  var n;
  let r = Mr(e), o = rm(t, { resolveItems: () => r.items, resolveActiveIndex: () => r.activeItemIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled });
  return { ...e, ...r, searchQuery: "", activeItemIndex: o, activationTrigger: (n = t.trigger) != null ? n : 1 };
}, [3]: (e, t) => {
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), o = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find((i) => {
    var a;
    return ((a = i.dataRef.current.textValue) == null ? void 0 : a.startsWith(r)) && !i.dataRef.current.disabled;
  }), s = o ? e.items.indexOf(o) : -1;
  return s === -1 || s === e.activeItemIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeItemIndex: s, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, t) => {
  let n = Mr(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
  return { ...e, ...n };
}, [6]: (e, t) => {
  let n = Mr(e, (r) => {
    let o = r.findIndex((s) => s.id === t.id);
    return o !== -1 && r.splice(o, 1), r;
  });
  return { ...e, ...n, activationTrigger: 1 };
} };
var Xo = (0, import_react.createContext)(null);
Xo.displayName = "MenuContext";
function qn(e) {
  let t = (0, import_react.useContext)(Xo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, qn), n;
  }
  return t;
}
function Sm(e, t) {
  return ve(t.type, wm, e, t);
}
var Tm = import_react.Fragment;
function Pm(e, t) {
  let n = (0, import_react.useReducer)(Sm, { menuState: 1, buttonRef: (0, import_react.createRef)(), itemsRef: (0, import_react.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: r, itemsRef: o, buttonRef: s }, i] = n, a = ze(t);
  Qp([s, o], (f, h) => {
    var m;
    i({ type: 1 }), Yo(h, Ho.Loose) || (f.preventDefault(), (m = s.current) == null || m.focus());
  }, r === 0);
  let l = X(() => {
    i({ type: 1 });
  }), c = (0, import_react.useMemo)(() => ({ open: r === 0, close: l }), [r, l]), u = e, d = { ref: a };
  return import_react.default.createElement(Xo.Provider, { value: n }, import_react.default.createElement(Sl, { value: ve(r, { [0]: ye.Open, [1]: ye.Closed }) }, De({ ourProps: d, theirProps: u, slot: c, defaultTag: Tm, name: "Menu" })));
}
var Am = "button";
function Em(e, t) {
  var n;
  let r = Et(), { id: o = `headlessui-menu-button-${r}`, ...s } = e, [i, a] = qn("Menu.Button"), l = ze(i.buttonRef, t), c = rn(), u = X((g) => {
    switch (g.key) {
      case se.Space:
      case se.Enter:
      case se.ArrowDown:
        g.preventDefault(), g.stopPropagation(), a({ type: 0 }), c.nextFrame(() => a({ type: 2, focus: Ce.First }));
        break;
      case se.ArrowUp:
        g.preventDefault(), g.stopPropagation(), a({ type: 0 }), c.nextFrame(() => a({ type: 2, focus: Ce.Last }));
        break;
    }
  }), d = X((g) => {
    switch (g.key) {
      case se.Space:
        g.preventDefault();
        break;
    }
  }), f = X((g) => {
    if (xl(g.currentTarget))
      return g.preventDefault();
    e.disabled || (i.menuState === 0 ? (a({ type: 1 }), c.nextFrame(() => {
      var v;
      return (v = i.buttonRef.current) == null ? void 0 : v.focus({ preventScroll: true });
    })) : (g.preventDefault(), a({ type: 0 })));
  }), h = (0, import_react.useMemo)(() => ({ open: i.menuState === 0 }), [i]), m = { ref: l, id: o, type: yl(e, i.buttonRef), "aria-haspopup": "menu", "aria-controls": (n = i.itemsRef.current) == null ? void 0 : n.id, "aria-expanded": e.disabled ? void 0 : i.menuState === 0, onKeyDown: u, onKeyUp: d, onClick: f };
  return De({ ourProps: m, theirProps: s, slot: h, defaultTag: Am, name: "Menu.Button" });
}
var Cm = "div";
var Rm = kn.RenderStrategy | kn.Static;
function Mm(e, t) {
  var n, r;
  let o = Et(), { id: s = `headlessui-menu-items-${o}`, ...i } = e, [a, l] = qn("Menu.Items"), c = ze(a.itemsRef, t), u = fm(a.itemsRef), d = rn(), f = qo(), h = (() => f !== null ? (f & ye.Open) === ye.Open : a.menuState === 0)();
  (0, import_react.useEffect)(() => {
    let y = a.itemsRef.current;
    y && a.menuState === 0 && y !== (u == null ? void 0 : u.activeElement) && y.focus({ preventScroll: true });
  }, [a.menuState, a.itemsRef, u]), tm({ container: a.itemsRef.current, enabled: a.menuState === 0, accept(y) {
    return y.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(y) {
    y.setAttribute("role", "none");
  } });
  let m = X((y) => {
    var w, b;
    switch (d.dispose(), y.key) {
      case se.Space:
        if (a.searchQuery !== "")
          return y.preventDefault(), y.stopPropagation(), l({ type: 3, value: y.key });
      case se.Enter:
        if (y.preventDefault(), y.stopPropagation(), l({ type: 1 }), a.activeItemIndex !== null) {
          let { dataRef: P } = a.items[a.activeItemIndex];
          (b = (w = P.current) == null ? void 0 : w.domRef.current) == null || b.click();
        }
        ml(a.buttonRef.current);
        break;
      case se.ArrowDown:
        return y.preventDefault(), y.stopPropagation(), l({ type: 2, focus: Ce.Next });
      case se.ArrowUp:
        return y.preventDefault(), y.stopPropagation(), l({ type: 2, focus: Ce.Previous });
      case se.Home:
      case se.PageUp:
        return y.preventDefault(), y.stopPropagation(), l({ type: 2, focus: Ce.First });
      case se.End:
      case se.PageDown:
        return y.preventDefault(), y.stopPropagation(), l({ type: 2, focus: Ce.Last });
      case se.Escape:
        y.preventDefault(), y.stopPropagation(), l({ type: 1 }), Ue().nextFrame(() => {
          var P;
          return (P = a.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
        break;
      case se.Tab:
        y.preventDefault(), y.stopPropagation(), l({ type: 1 }), Ue().nextFrame(() => {
          Zp(a.buttonRef.current, y.shiftKey ? ro.Previous : ro.Next);
        });
        break;
      default:
        y.key.length === 1 && (l({ type: 3, value: y.key }), d.setTimeout(() => l({ type: 4 }), 350));
        break;
    }
  }), g = X((y) => {
    switch (y.key) {
      case se.Space:
        y.preventDefault();
        break;
    }
  }), v = (0, import_react.useMemo)(() => ({ open: a.menuState === 0 }), [a]), x = { "aria-activedescendant": a.activeItemIndex === null || (n = a.items[a.activeItemIndex]) == null ? void 0 : n.id, "aria-labelledby": (r = a.buttonRef.current) == null ? void 0 : r.id, id: s, onKeyDown: m, onKeyUp: g, role: "menu", tabIndex: 0, ref: c };
  return De({ ourProps: x, theirProps: i, slot: v, defaultTag: Cm, features: Rm, visible: h, name: "Menu.Items" });
}
var Lm = import_react.Fragment;
function Dm(e, t) {
  let n = Et(), { id: r = `headlessui-menu-item-${n}`, disabled: o = false, ...s } = e, [i, a] = qn("Menu.Item"), l = i.activeItemIndex !== null ? i.items[i.activeItemIndex].id === r : false, c = (0, import_react.useRef)(null), u = ze(t, c);
  me(() => {
    if (i.menuState !== 0 || !l || i.activationTrigger === 0)
      return;
    let b = Ue();
    return b.requestAnimationFrame(() => {
      var P, E;
      (E = (P = c.current) == null ? void 0 : P.scrollIntoView) == null || E.call(P, { block: "nearest" });
    }), b.dispose;
  }, [c, l, i.menuState, i.activationTrigger, i.activeItemIndex]);
  let d = (0, import_react.useRef)({ disabled: o, domRef: c });
  me(() => {
    d.current.disabled = o;
  }, [d, o]), me(() => {
    var b, P;
    d.current.textValue = (P = (b = c.current) == null ? void 0 : b.textContent) == null ? void 0 : P.toLowerCase();
  }, [d, c]), me(() => (a({ type: 5, id: r, dataRef: d }), () => a({ type: 6, id: r })), [d, r]);
  let f = X(() => {
    a({ type: 1 });
  }), h = X((b) => {
    if (o)
      return b.preventDefault();
    a({ type: 1 }), ml(i.buttonRef.current);
  }), m = X(() => {
    if (o)
      return a({ type: 2, focus: Ce.Nothing });
    a({ type: 2, focus: Ce.Specific, id: r });
  }), g = dm(), v = X((b) => g.update(b)), x = X((b) => {
    g.wasMoved(b) && (o || l || a({ type: 2, focus: Ce.Specific, id: r, trigger: 0 }));
  }), y = X((b) => {
    g.wasMoved(b) && (o || l && a({ type: 2, focus: Ce.Nothing }));
  }), w = (0, import_react.useMemo)(() => ({ active: l, disabled: o, close: f }), [l, o, f]);
  return De({ ourProps: { id: r, ref: u, role: "menuitem", tabIndex: o === true ? void 0 : -1, "aria-disabled": o === true ? true : void 0, disabled: void 0, onClick: h, onFocus: m, onPointerEnter: v, onMouseEnter: v, onPointerMove: x, onMouseMove: x, onPointerLeave: y, onMouseLeave: y }, theirProps: s, slot: w, defaultTag: Lm, name: "Menu.Item" });
}
var Nm = Ne(Pm);
var km = Ne(Em);
var Vm = Ne(Mm);
var Im = Ne(Dm);
var Ke = Object.assign(Nm, { Button: km, Items: Vm, Item: Im });
function Om(e = 0) {
  let [t, n] = (0, import_react.useState)(e), r = (0, import_react.useCallback)((a) => n((l) => l | a), [t]), o = (0, import_react.useCallback)((a) => Boolean(t & a), [t]), s = (0, import_react.useCallback)((a) => n((l) => l & ~a), [n]), i = (0, import_react.useCallback)((a) => n((l) => l ^ a), [n]);
  return { flags: t, addFlag: r, hasFlag: o, removeFlag: s, toggleFlag: i };
}
var El = (0, import_react.createContext)(null);
function Cl() {
  let e = (0, import_react.useContext)(El);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Cl), t;
  }
  return e;
}
function Fm() {
  let [e, t] = (0, import_react.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react.useMemo)(() => function(n) {
    let r = X((s) => (t((i) => [...i, s]), () => t((i) => {
      let a = i.slice(), l = a.indexOf(s);
      return l !== -1 && a.splice(l, 1), a;
    }))), o = (0, import_react.useMemo)(() => ({ register: r, slot: n.slot, name: n.name, props: n.props }), [r, n.slot, n.name, n.props]);
    return import_react.default.createElement(El.Provider, { value: o }, n.children);
  }, [t])];
}
var $m = "label";
function jm(e, t) {
  let n = Et(), { id: r = `headlessui-label-${n}`, passive: o = false, ...s } = e, i = Cl(), a = ze(t);
  me(() => i.register(r), [r, i.register]);
  let l = { ref: a, ...i.props, id: r };
  return o && ("onClick" in l && (delete l.htmlFor, delete l.onClick), "onClick" in s && delete s.onClick), De({ ourProps: l, theirProps: s, slot: i.slot || {}, defaultTag: $m, name: i.name || "Label" });
}
var _m = Ne(jm);
var Bm = Object.assign(_m, {});
var Zo = (0, import_react.createContext)(null);
Zo.displayName = "GroupContext";
var Um = import_react.Fragment;
function zm(e) {
  var t;
  let [n, r] = (0, import_react.useState)(null), [o, s] = Fm(), [i, a] = hm(), l = (0, import_react.useMemo)(() => ({ switch: n, setSwitch: r, labelledby: o, describedby: i }), [n, r, o, i]), c = {}, u = e;
  return import_react.default.createElement(a, { name: "Switch.Description" }, import_react.default.createElement(s, { name: "Switch.Label", props: { htmlFor: (t = l.switch) == null ? void 0 : t.id, onClick(d) {
    n && (d.currentTarget.tagName === "LABEL" && d.preventDefault(), n.click(), n.focus({ preventScroll: true }));
  } } }, import_react.default.createElement(Zo.Provider, { value: l }, De({ ourProps: c, theirProps: u, defaultTag: Um, name: "Switch.Group" }))));
}
var Wm = "button";
function Gm(e, t) {
  let n = Et(), { id: r = `headlessui-switch-${n}`, checked: o, defaultChecked: s = false, onChange: i, name: a, value: l, ...c } = e, u = (0, import_react.useContext)(Zo), d = (0, import_react.useRef)(null), f = ze(d, t, u === null ? null : u.setSwitch), [h, m] = um(o, i, s), g = X(() => m == null ? void 0 : m(!h)), v = X((E) => {
    if (xl(E.currentTarget))
      return E.preventDefault();
    E.preventDefault(), g();
  }), x = X((E) => {
    E.key === se.Space ? (E.preventDefault(), g()) : E.key === se.Enter && sm(E.currentTarget);
  }), y = X((E) => E.preventDefault()), w = (0, import_react.useMemo)(() => ({ checked: h }), [h]), b = { id: r, ref: f, role: "switch", type: yl(e, d), tabIndex: 0, "aria-checked": h, "aria-labelledby": u == null ? void 0 : u.labelledby, "aria-describedby": u == null ? void 0 : u.describedby, onClick: v, onKeyUp: x, onKeyPress: y }, P = rn();
  return (0, import_react.useEffect)(() => {
    var E;
    let N = (E = d.current) == null ? void 0 : E.closest("form");
    N && s !== void 0 && P.addEventListener(N, "reset", () => {
      m(s);
    });
  }, [d, m]), import_react.default.createElement(import_react.default.Fragment, null, a != null && h && import_react.default.createElement(cm, { features: wl.Hidden, ...oo({ as: "input", type: "checkbox", hidden: true, readOnly: true, checked: h, name: a, value: l }) }), De({ ourProps: b, theirProps: c, slot: w, defaultTag: Wm, name: "Switch" }));
}
var Hm = Ne(Gm);
var Ym = zm;
var Km = Object.assign(Hm, { Group: Ym, Label: Bm, Description: ym });
function qm(e) {
  let t = { called: false };
  return (...n) => {
    if (!t.called)
      return t.called = true, e(...n);
  };
}
function Lr(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Dr(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Xm(e, t) {
  let n = Ue();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e), [s, i] = [r, o].map((l) => {
    let [c = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return c;
  }), a = s + i;
  if (a !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, a), c.addEventListener(e, "transitionrun", (u) => {
        u.target === u.currentTarget && c.dispose();
      });
    });
    let l = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), l());
    });
  } else
    t();
  return n.add(() => t()), n.dispose;
}
function Zm(e, t, n, r) {
  let o = n ? "enter" : "leave", s = Ue(), i = r !== void 0 ? qm(r) : () => {
  };
  o === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = ve(o, { enter: () => t.enter, leave: () => t.leave }), l = ve(o, { enter: () => t.enterTo, leave: () => t.leaveTo }), c = ve(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Dr(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Lr(e, ...a, ...c), s.nextFrame(() => {
    Dr(e, ...c), Lr(e, ...l), Xm(e, () => (Dr(e, ...a), Lr(e, ...t.entered), i()));
  }), s.dispose;
}
function Jm({ container: e, direction: t, classes: n, onStart: r, onStop: o }) {
  let s = Tl(), i = rn(), a = ct(t);
  me(() => {
    let l = Ue();
    i.add(l.dispose);
    let c = e.current;
    if (c && a.current !== "idle" && s.current)
      return l.dispose(), r.current(a.current), l.add(Zm(c, n.current, a.current === "enter", () => {
        l.dispose(), o.current(a.current);
      })), l.dispose;
  }, [t]);
}
function ot(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
var Xn = (0, import_react.createContext)(null);
Xn.displayName = "TransitionContext";
var Qm = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Qm || {});
function eg() {
  let e = (0, import_react.useContext)(Xn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function tg() {
  let e = (0, import_react.useContext)(Zn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
var Zn = (0, import_react.createContext)(null);
Zn.displayName = "NestingContext";
function Jn(e) {
  return "children" in e ? Jn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Rl(e, t) {
  let n = ct(e), r = (0, import_react.useRef)([]), o = Tl(), s = rn(), i = X((h, m = $e.Hidden) => {
    let g = r.current.findIndex(({ el: v }) => v === h);
    g !== -1 && (ve(m, { [$e.Unmount]() {
      r.current.splice(g, 1);
    }, [$e.Hidden]() {
      r.current[g].state = "hidden";
    } }), s.microTask(() => {
      var v;
      !Jn(r) && o.current && ((v = n.current) == null || v.call(n));
    }));
  }), a = X((h) => {
    let m = r.current.find(({ el: g }) => g === h);
    return m ? m.state !== "visible" && (m.state = "visible") : r.current.push({ el: h, state: "visible" }), () => i(h, $e.Unmount);
  }), l = (0, import_react.useRef)([]), c = (0, import_react.useRef)(Promise.resolve()), u = (0, import_react.useRef)({ enter: [], leave: [], idle: [] }), d = X((h, m, g) => {
    l.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([v]) => v !== h)), t == null || t.chains.current[m].push([h, new Promise((v) => {
      l.current.push(v);
    })]), t == null || t.chains.current[m].push([h, new Promise((v) => {
      Promise.all(u.current[m].map(([x, y]) => y)).then(() => v());
    })]), m === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => g(m)) : g(m);
  }), f = X((h, m, g) => {
    Promise.all(u.current[m].splice(0).map(([v, x]) => x)).then(() => {
      var v;
      (v = l.current.shift()) == null || v();
    }).then(() => g(m));
  });
  return (0, import_react.useMemo)(() => ({ children: r, register: a, unregister: i, onStart: d, onStop: f, wait: c, chains: u }), [a, i, r, d, f, u, c]);
}
function ng() {
}
var rg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ms(e) {
  var t;
  let n = {};
  for (let r of rg)
    n[r] = (t = e[r]) != null ? t : ng;
  return n;
}
function og(e) {
  let t = (0, import_react.useRef)(Ms(e));
  return (0, import_react.useEffect)(() => {
    t.current = Ms(e);
  }, [e]), t;
}
var ig = "div";
var Ml = kn.RenderStrategy;
function sg(e, t) {
  let { beforeEnter: n, afterEnter: r, beforeLeave: o, afterLeave: s, enter: i, enterFrom: a, enterTo: l, entered: c, leave: u, leaveFrom: d, leaveTo: f, ...h } = e, m = (0, import_react.useRef)(null), g = ze(m, t), v = h.unmount ? $e.Unmount : $e.Hidden, { show: x, appear: y, initial: w } = eg(), [b, P] = (0, import_react.useState)(x ? "visible" : "hidden"), E = tg(), { register: N, unregister: W } = E, _ = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => N(m), [N, m]), (0, import_react.useEffect)(() => {
    if (v === $e.Hidden && m.current) {
      if (x && b !== "visible") {
        P("visible");
        return;
      }
      return ve(b, { hidden: () => W(m), visible: () => N(m) });
    }
  }, [b, m, N, W, x, v]);
  let D = ct({ enter: ot(i), enterFrom: ot(a), enterTo: ot(l), entered: ot(c), leave: ot(u), leaveFrom: ot(d), leaveTo: ot(f) }), $ = og({ beforeEnter: n, afterEnter: r, beforeLeave: o, afterLeave: s }), z = Go();
  (0, import_react.useEffect)(() => {
    if (z && b === "visible" && m.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [m, b, z]);
  let H = w && !y, j = (() => !z || H || _.current === x ? "idle" : x ? "enter" : "leave")(), k = Om(0), V = X((Y) => ve(Y, { enter: () => {
    k.addFlag(ye.Opening), $.current.beforeEnter();
  }, leave: () => {
    k.addFlag(ye.Closing), $.current.beforeLeave();
  }, idle: () => {
  } })), Q = X((Y) => ve(Y, { enter: () => {
    k.removeFlag(ye.Opening), $.current.afterEnter();
  }, leave: () => {
    k.removeFlag(ye.Closing), $.current.afterLeave();
  }, idle: () => {
  } })), ae = Rl(() => {
    P("hidden"), W(m);
  }, E);
  Jm({ container: m, classes: D, direction: j, onStart: ct((Y) => {
    ae.onStart(m, Y, V);
  }), onStop: ct((Y) => {
    ae.onStop(m, Y, Q), Y === "leave" && !Jn(ae) && (P("hidden"), W(m));
  }) }), (0, import_react.useEffect)(() => {
    H && (v === $e.Hidden ? _.current = null : _.current = x);
  }, [x, H, b]);
  let le = h, we = { ref: g };
  return y && x && Xe.isServer && (le = { ...le, className: vl(h.className, ...D.current.enter, ...D.current.enterFrom) }), import_react.default.createElement(Zn.Provider, { value: ae }, import_react.default.createElement(Sl, { value: ve(b, { visible: ye.Open, hidden: ye.Closed }) | k.flags }, De({ ourProps: we, theirProps: le, defaultTag: ig, features: Ml, visible: b === "visible", name: "Transition.Child" })));
}
function ag(e, t) {
  let { show: n, appear: r = false, unmount: o, ...s } = e, i = (0, import_react.useRef)(null), a = ze(i, t);
  Go();
  let l = qo();
  if (n === void 0 && l !== null && (n = (l & ye.Open) === ye.Open), ![true, false].includes(n))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, u] = (0, import_react.useState)(n ? "visible" : "hidden"), d = Rl(() => {
    u("hidden");
  }), [f, h] = (0, import_react.useState)(true), m = (0, import_react.useRef)([n]);
  me(() => {
    f !== false && m.current[m.current.length - 1] !== n && (m.current.push(n), h(false));
  }, [m, n]);
  let g = (0, import_react.useMemo)(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  (0, import_react.useEffect)(() => {
    if (n)
      u("visible");
    else if (!Jn(d))
      u("hidden");
    else {
      let x = i.current;
      if (!x)
        return;
      let y = x.getBoundingClientRect();
      y.x === 0 && y.y === 0 && y.width === 0 && y.height === 0 && u("hidden");
    }
  }, [n, d]);
  let v = { unmount: o };
  return import_react.default.createElement(Zn.Provider, { value: d }, import_react.default.createElement(Xn.Provider, { value: g }, De({ ourProps: { ...v, as: import_react.Fragment, children: import_react.default.createElement(Ll, { ref: a, ...v, ...s }) }, theirProps: {}, defaultTag: import_react.Fragment, features: Ml, visible: c === "visible", name: "Transition" })));
}
function lg(e, t) {
  let n = (0, import_react.useContext)(Xn) !== null, r = qo() !== null;
  return import_react.default.createElement(import_react.default.Fragment, null, !n && r ? import_react.default.createElement(io, { ref: t, ...e }) : import_react.default.createElement(Ll, { ref: t, ...e }));
}
var io = Ne(ag);
var Ll = Ne(sg);
var cg = Ne(lg);
var ug = Object.assign(io, { Child: cg, Root: io });
var dg = nt({
  variants: {
    default: "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  },
  sizes: {
    sm: "h-[20px] w-[40px]",
    md: "h-[28px] w-[52px]",
    lg: "h-[36px] w-[64px]"
  },
  defaultProps: {
    variant: "default",
    size: "md"
  }
});
var fg = "rapid-switch";
var hg = import_react.default.forwardRef(
  ({
    styles: e,
    ariaLabel: t,
    enabled: n,
    size: r,
    variant: o,
    enabledStyles: s,
    disabledStyles: i,
    ...a
  }, l) => {
    const c = C(
      Wo(
        n ? s || "bg-black" : i || "bg-lightGrey",
        "inline-flex ring-0 focus:ring-0",
        n ? "justify-end" : "justify-start"
      ),
      e || a.className,
      $n(o, "switch", r) || fg
    );
    return /* @__PURE__ */ Gt(
      Km,
      {
        checked: n,
        ref: l,
        ...a,
        className: c,
        children: [
          /* @__PURE__ */ T("span", { className: "sr-only", children: t || "toggle" }),
          /* @__PURE__ */ T(
            nn.span,
            {
              layout: true,
              transition: {
                duration: 0.2
              },
              "aria-hidden": "true",
              className: "pointer-events-none inline-block aspect-square h-[100%] transform rounded-full bg-white shadow-lg ring-0 focus:ring-0"
            }
          )
        ]
      }
    );
  }
);
hg.displayName = "Switch";
Object.assign(Ke, {
  Item: Ke.Item,
  Button: Ke.Button,
  Items: Ke.Items
});
var pg = "rapid-menu";
var mg = import_react.default.forwardRef(
  ({ styles: e, ...t }, n) => {
    const r = "relative inline-block text-left";
    return /* @__PURE__ */ T(
      Ke,
      {
        className: C(
          e || t.className,
          r,
          pg
        ),
        as: "div",
        ...t,
        ref: n
      }
    );
  }
);
mg.displayName = "Menu";
var gg = "rapid-menu-item";
var yg = ({ styles: e, ...t }) => {
  const n = "p-1 hover:disabled:cursor-not-allowed hover:cursor-pointer";
  return /* @__PURE__ */ T(
    Ke.Item,
    {
      className: C(
        e || t.className,
        n,
        gg
      ),
      ...t
    }
  );
};
yg.displayName = "MenuItem";
var vg = "rapid-scale-fade";
var Qn = import_react.default.forwardRef(
  ({
    styles: e,
    initialOpacity: t,
    exitAnimation: n = "initial",
    isEnabled: r,
    transition: o,
    transitionEnd: s,
    ...i
  }, a) => {
    const l = {
      enter: {
        opacity: 1,
        scale: 1,
        transition: o == null ? void 0 : o.enter,
        transitionEnd: s == null ? void 0 : s.enter
      },
      initial: {
        opacity: t || 1,
        scale: i.initialscale || 0.95,
        transition: o == null ? void 0 : o.exit,
        transitionEnd: s == null ? void 0 : s.exit
      },
      exit: {
        opacity: t || 1,
        scale: i.initialscale || 0.95,
        transition: o == null ? void 0 : o.exit,
        transitionEnd: s == null ? void 0 : s.exit
      }
    }, c = {
      initial: "initial",
      animate: "enter",
      exit: n,
      variants: l
    };
    return r === false ? /* @__PURE__ */ T(St, { children: i.children }) : /* @__PURE__ */ T(
      nn.div,
      {
        ...i,
        ...c,
        ref: a,
        className: C(e, vg)
      }
    );
  }
);
Qn.displayName = "ScaleFade";
var bg = "rapid-fade";
var Dl = import_react.default.forwardRef(
  ({
    styles: e,
    initialOpacity: t,
    isEnabled: n,
    transition: r,
    transitionEnd: o,
    ...s
  }, i) => {
    const l = {
      initial: "exit",
      animate: "enter",
      exit: "exit",
      variants: {
        enter: {
          opacity: 1,
          transition: r == null ? void 0 : r.enter,
          transitionEnd: o == null ? void 0 : o.enter
        },
        exit: {
          opacity: t || 0,
          transition: r == null ? void 0 : r.exit,
          transitionEnd: o == null ? void 0 : o.exit
        }
      }
    };
    return n === false ? /* @__PURE__ */ T(St, { children: s.children }) : /* @__PURE__ */ T(
      nn.div,
      {
        ...s,
        ...l,
        ref: i,
        className: C(e, bg)
      }
    );
  }
);
Dl.displayName = "Fade";
var xg = "rapid-slide-fade";
var vn = {
  exit: {
    duration: 0.25,
    ease: "easeInOut"
  },
  enter: {
    duration: 0.25,
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var Nl = import_react.default.forwardRef(
  ({
    open: e,
    styles: t,
    initialOpacity: n,
    exitAnimation: r = "exit",
    isEnabled: o,
    direction: s = "right",
    transition: i,
    transitionEnd: a,
    ...l
  }, c) => {
    const u = {
      enter: {
        opacity: 1,
        x: s === "right" || s === "left" ? 0 : void 0,
        y: s === "bottom" || s === "top" ? 0 : void 0,
        transition: (i == null ? void 0 : i.enter) || vn.enter,
        transitionEnd: (a == null ? void 0 : a.enter) || vn.enter
      },
      initial: {
        opacity: n || 1,
        x: s === "right" ? "100%" : s === "left" ? "-100%" : 0,
        y: s === "bottom" ? "100%" : s === "top" ? "-100%" : 0,
        transition: i == null ? void 0 : i.exit,
        transitionEnd: a == null ? void 0 : a.exit
      },
      exit: {
        opacity: 1,
        x: s === "right" ? "100%" : s === "left" ? "-100%" : 0,
        y: s === "bottom" ? "100%" : s === "top" ? "-100%" : 0,
        transition: (i == null ? void 0 : i.exit) || vn.exit,
        transitionEnd: (a == null ? void 0 : a.exit) || vn.exit
      }
    }, d = {
      initial: "initial",
      animate: "enter",
      exit: r,
      variants: u
    };
    return o === false ? /* @__PURE__ */ T(St, { children: l.children }) : /* @__PURE__ */ T(
      nn.div,
      {
        ...l,
        ...d,
        ref: c,
        className: C(t, xg)
      }
    );
  }
);
Nl.displayName = "SlideFade";
var wg = "rapid-menu-items";
var Sg = import_react.default.forwardRef(({ styles: e, children: t, wrapperStyles: n, ...r }, o) => {
  const s = "bg-white border border-lightGrey mt-2 rounded-lg shadow-lg absolute z-10 flex flex-col space-y-2 py-1 w-56";
  return /* @__PURE__ */ T(
    ug,
    {
      as: import_react.Fragment,
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ T(
        Ke.Items,
        {
          ...r,
          className: C(n, "", wg),
          ref: o,
          children: /* @__PURE__ */ T(
            Qn,
            {
              styles: C(
                e || r.className,
                s
              ),
              exitAnimation: "exit",
              children: t
            }
          )
        }
      )
    }
  );
});
Sg.displayName = "MenuItems";
var Tg = "rapid-menu-button";
var Pg = nt({
  baseStyle: "p-3 transition-all ease-out duration-300 outline-none inline-flex items-center rounded-xl text-sm font-medium focus:shadow-button-focus focus:outline-none disabled:opacity-50 hover:disabled:cursor-not-allowed",
  variants: {
    default: "bg-main hover:bg-hoverMain text-white active:bg-activeMain",
    outline: "bg-white hover:bg-hoverWhite border border-lightGrey active:bg-activeWhite"
  },
  sizes: {
    default: "p-3",
    sm: "py-3 px-2",
    lg: "px-8 py-3"
  },
  defaultProps: {
    variant: "default",
    size: "default"
  }
});
var Ag = (e, t) => {
  const n = [];
  if (t && n.push(`rapid-menu-button-${t}`), e && n.push(`rapid-menu-button-${e}`), n.length > 0)
    return n.join(" ");
};
var Eg = (0, import_react.forwardRef)(
  ({ styles: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ T(
    Ke.Button,
    {
      ref: o,
      ...r,
      className: C(
        e || r.className,
        Ag(t, n) || Tg
      )
    }
  )
);
Eg.displayName = "MenuButton";
var Cg = "rapid-portal";
var Jo = import_react.default.forwardRef(
  (e, t) => {
    const { node: n, ...r } = e;
    return import_react_dom.default.createPortal(
      /* @__PURE__ */ T("div", { ...r, ref: t, className: Cg }),
      n || document.body
    );
  }
);
Jo.displayName = "Portal";
var Qo = (0, import_react.createContext)(null);
var Rg = () => {
  const e = (0, import_react.useContext)(Qo);
  if (!e)
    throw new Error("useModalContext must be used within a ModalProvider");
  return e;
};
var Mg = () => {
  const e = (0, import_react.useContext)(Qo);
  if (!e)
    throw new Error("useModalClose must be used within a ModalProvider");
  return e.onClose;
};
var Ls = "rapid-modal";
var Lg = (0, import_react.forwardRef)(
  ({
    open: e = false,
    onClose: t,
    initialFocus: n,
    enableAnimation: r = true,
    zIndex: o = 40,
    fadeAnimation: s,
    enableOverlay: i = true,
    styles: a,
    children: l,
    ...c
  }, u) => {
    (0, import_react.useEffect)(() => {
      if (e)
        if (n && n.current)
          n.current.focus();
        else {
          const h = document.querySelector(
            `.${Ls}`
          );
          h && h.focus({
            preventScroll: true
          });
        }
    }, [e, n]);
    const d = (0, import_react.useCallback)(
      (h) => {
        h.key === "Escape" && t();
      },
      [t]
    ), f = (0, import_react.useMemo)(
      () => ({ open: e, onClose: t, enableAnimation: r, zIndex: o }),
      [e, t, r, o]
    );
    return /* @__PURE__ */ T(ll, { children: e ? /* @__PURE__ */ T(Jo, { children: /* @__PURE__ */ T(Qo.Provider, { value: f, children: /* @__PURE__ */ Gt(
      "div",
      {
        ref: u,
        ...c,
        role: "dialog",
        tabIndex: -1,
        "data-focus-guard": true,
        onKeyDown: d,
        style: { position: "relative", zIndex: o },
        className: C(
          a || c.className,
          Ls
        ),
        children: [
          i ? /* @__PURE__ */ T(
            Ig,
            {
              transition: s == null ? void 0 : s.transition
            }
          ) : null,
          l
        ]
      }
    ) }) }) : null });
  }
);
var Dg = "rapid-modal-overlay";
var Ng = "fixed inset-0 bg-black bg-opacity-50 top-0 left-0 w-full h-full flex justify-center items-center";
var kg = {
  enter: { duration: 0.025 },
  exit: { duration: 0.025 }
};
var Vg = (0, import_react.forwardRef)(
  ({ isEnabled: e, transition: t, styles: n, ...r }, o) => ((0, import_react.useEffect)(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "";
  }), []), /* @__PURE__ */ T(Dl, { transition: t || kg, children: /* @__PURE__ */ T(
    "div",
    {
      ref: o,
      ...r,
      className: C(
        n || r.className,
        Ng,
        Dg
      ),
      "aria-hidden": "true"
    }
  ) }))
);
var Ig = Vg;
var Og = "rapid-modal-content";
var Fg = "rapid-modal-panel-container";
var $g = "fixed inset-0 flex items-center justify-center";
var jg = "w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all";
var sv = (0, import_react.forwardRef)(
  ({ styles: e, containerStyles: t, children: n, ...r }, o) => {
    const { onClose: s, enableAnimation: i, zIndex: a } = Rg(), l = cl({
      onMatch: () => s(),
      enabled: true
    });
    return /* @__PURE__ */ T(
      "div",
      {
        "aria-modal": "true",
        "aria-labelledby": "rapid-modal-header",
        "aria-describedby": "rapid-modal-body",
        style: { zIndex: a ? a + 1 : 50 },
        className: C(
          t,
          $g,
          Fg
        ),
        children: /* @__PURE__ */ T(
          Qn,
          {
            isEnabled: i,
            initialscale: 0.98,
            transition: { exit: { duration: 0.025 } },
            exitAnimation: "exit",
            initialOpacity: 0,
            children: /* @__PURE__ */ T(
              "div",
              {
                ref: dl(o, l),
                ...r,
                className: C(
                  e || r.className,
                  jg,
                  Og
                ),
                children: n
              }
            )
          }
        )
      }
    );
  }
);
var Ds = "rapid-modal-header";
var _g = "text-lg font-semibold p-4 flex justify-between items-center ";
var av = (0, import_react.forwardRef)(
  ({ styles: e, children: t, ...n }, r) => /* @__PURE__ */ T(
    "header",
    {
      id: Ds,
      ref: r,
      ...n,
      className: C(
        e || n.className,
        _g,
        Ds
      ),
      children: t
    }
  )
);
var Ns = "rapid-modal-body";
var Bg = "p-4 flex-1";
var lv = (0, import_react.forwardRef)(
  ({ styles: e, children: t, ...n }, r) => /* @__PURE__ */ T(
    "div",
    {
      id: Ns,
      ref: r,
      className: C(
        e || n.className,
        Bg,
        Ns
      ),
      children: t
    }
  )
);
var Ug = nt({
  baseStyle: "p-3 transition-all ease-out duration-300 outline-none inline-flex justify-center items-center rounded-xl text-sm font-medium focus:shadow-button-focus focus:outline-none disabled:opacity-50 hover:disabled:cursor-not-allowed",
  variants: {
    default: "bg-main hover:bg-hoverMain text-white active:bg-activeMain",
    outline: "bg-white hover:bg-hoverWhite border border-lightGrey active:bg-activeWhite",
    destructive: "bg-danger hover:bg-hoverDanger text-white active:bg-activeDanger",
    ghost: "bg-transparent hover:bg-hoverWhite active:bg-activeWhite",
    link: "bg-transparent active:text-activeMain focus:shadow-none"
  },
  sizes: {
    default: "p-3",
    sm: "py-3 px-2",
    lg: "px-8 py-3"
  },
  defaultProps: {
    variant: "default",
    size: "default"
  }
});
var zg = "rapid-button";
var kl = import_react.default.forwardRef(
  ({
    styles: e,
    isLoading: t = false,
    spinner: n,
    variant: r,
    size: o,
    children: s,
    ...i
  }, a) => /* @__PURE__ */ T(
    "button",
    {
      ref: a,
      ...i,
      className: C(
        e || i.className,
        $n(r, "button", o) || zg
      ),
      disabled: t,
      children: t ? /* @__PURE__ */ T(St, { children: n || /* @__PURE__ */ T(
        Ep,
        {
          "data-testid": "button-spinner",
          size: "sm",
          styles: "border-white border-t-transparent border-r-transparent"
        }
      ) }) : s
    }
  )
);
kl.displayName = "Button";
var Pe = "rapid-text";
var Vl = import_react.default.forwardRef(
  ({ styles: e, as: t = "p", ...n }, r) => ((s) => {
    switch (s) {
      case "p":
        return /* @__PURE__ */ T(
          "p",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "span":
        return /* @__PURE__ */ T(
          "span",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "i":
        return /* @__PURE__ */ T(
          "i",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "b":
        return /* @__PURE__ */ T(
          "b",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "u":
        return /* @__PURE__ */ T(
          "u",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "abbr":
        return /* @__PURE__ */ T(
          "abbr",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "cite":
        return /* @__PURE__ */ T(
          "cite",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "kbd":
        return /* @__PURE__ */ T(
          "kbd",
          {
            ref: r,
            ...n,
            className: C(e, Pe)
          }
        );
      case "mark":
        return /* @__PURE__ */ T(
          "mark",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "s":
        return /* @__PURE__ */ T(
          "s",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "samp":
        return /* @__PURE__ */ T(
          "samp",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
      case "sup":
        return /* @__PURE__ */ T(
          "sup",
          {
            ref: r,
            ...n,
            className: C(
              e || n.className,
              Pe
            )
          }
        );
    }
  })(t)
);
Vl.displayName = "Text";
var Wg = "rapid-heading";
var Gg = import_react.default.forwardRef(
  ({ styles: e, size: t = "lg", ...n }, r) => {
    const s = ((i) => {
      switch (i) {
        case "sm":
          return "text-sm";
        case "md":
          return "text-lg";
        case "lg":
          return "text-3xl";
      }
    })(t);
    return /* @__PURE__ */ T(
      "h2",
      {
        ref: r,
        ...n,
        className: C(
          e || n.className,
          s,
          Wg
        )
      }
    );
  }
);
Gg.displayName = "Heading";
var Hg = nt({
  baseStyle: "h-9 rounded-lg transition-all ease-out duration-300 outline-none focus:outline-none focus:shadow-button-focus focus:border-main px-3 py-1 disabled:opacity-50 hover:disabled:cursor-not-allowed",
  variants: {
    default: "border border-lightGrey",
    filled: "bg-lightGrey focus:bg-white focus:border-main border border-transparent",
    faded: "bg-hoverWhite border-lightGrey focus:border-main border",
    invalid: "focus:shadow-invalid focus:border-danger border border-danger",
    flushed: "px-0 rounded-none border-b border-t-0 border-l-0 border-r-0 focus:outline-none focus:shadow-none",
    unstyled: "border-none rounded-none px-0 focus:outline-none focus:shadow-none"
  },
  defaultProps: {
    variant: "default"
  }
});
var Yg = "rapid-input";
var Kg = (e) => {
  if (e)
    return `rapid-input-${e}`;
};
var qg = U.forwardRef(
  ({ styles: e, placeholder: t, variant: n, ...r }, o) => /* @__PURE__ */ T(
    "input",
    {
      ref: o,
      ...r,
      placeholder: t || "Rapid Input",
      className: C(
        e || r.className,
        Kg(n) || Yg
      )
    }
  )
);
qg.displayName = "Input";
var Xg = nt({
  baseStyle: "rounded-lg transition-all ease-out duration-300 outline-none focus:outline-none focus:shadow-button-focus focus:border-main px-3 py-1 disabled:opacity-50 hover:disabled:cursor-not-allowed",
  variants: {
    default: "border border-lightGrey",
    filled: "bg-lightGrey focus:bg-white focus:border-main border border-transparent",
    faded: "bg-hoverWhite border-lightGrey focus:border-main border",
    invalid: "focus:shadow-invalid focus:border-danger border border-danger border border-transparent",
    unstyled: "border-none rounded-none px-0 focus:outline-none focus:shadow-none"
  },
  defaultProps: {
    variant: "default"
  }
});
var Zg = (e) => {
  if (e)
    return `rapid-textarea-${e}`;
};
var Jg = "rapid-textarea";
var Qg = (0, import_react.forwardRef)(
  ({ styles: e, variant: t, ...n }, r) => /* @__PURE__ */ T(
    "textarea",
    {
      ...n,
      ref: r,
      placeholder: n.placeholder || "Rapid Textarea",
      className: C(
        e || n.className,
        Zg(t) || Jg
      )
    }
  )
);
Qg.displayName = "Textarea";
var ey = (e) => /* @__PURE__ */ T("div", { className: "pointer-events-none absolute top-1/2 right-0 mr-3 inline-flex -translate-y-1/2 items-center justify-center", children: /* @__PURE__ */ T(
  "svg",
  {
    pointerEvents: "box-none",
    ...e,
    role: "presentation",
    width: "16px",
    height: "16px",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    children: /* @__PURE__ */ T(
      "path",
      {
        fill: "black",
        d: "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
      }
    )
  }
) });
var ty = (e) => /* @__PURE__ */ T("option", { ...e });
var ny = nt({
  baseStyle: "h-9 rounded-lg transition-all ease-out duration-300 outline-none focus-within:outline-none focus-within:shadow-button-focus focus-within:border-main py-1 disabled:opacity-50 hover:disabled:cursor-not-allowed",
  variants: {
    default: "border border-lightGrey",
    filled: "bg-lightGrey focus-within:bg-white focus-within:border-main border border-transparent",
    invalid: "focus-within:shadow-invalid focus-within:border-danger border border-danger",
    flushed: "px-0 rounded-none border-b border-t-0 border-l-0 border-r-0 focus-within:outline-none focus-within:shadow-none",
    unstyled: "border-none rounded-none px-0 focus-within:outline-none focus-within:shadow-none"
  },
  defaultProps: {
    variant: "default"
  }
});
var ry = "rapid-select";
var oy = "rapid-select-select";
var iy = "relative flex items-center";
var sy = "w-full focus:outline-none focus:shadow-none px-3 bg-transparent";
var ay = (e, t) => {
  const n = [];
  if (t && n.push(`rapid-select-${t}`), e && n.push(`rapid-select-${e}`), n.length > 0)
    return n.join(" ");
};
var cv = import_react.default.forwardRef(
  (e, t) => {
    const {
      styles: n,
      variant: r,
      variantSize: o,
      placeholder: s,
      iconProps: i,
      children: a,
      selectStyles: l,
      icon: c = /* @__PURE__ */ T(ey, { ...i }),
      ...u
    } = e;
    return /* @__PURE__ */ Gt(
      "div",
      {
        className: C(
          n || u.className,
          iy,
          ay(r, o) || ry
        ),
        children: [
          /* @__PURE__ */ Gt(
            "select",
            {
              ref: t,
              ...u,
              className: C(
                l || sy,
                oy
              ),
              children: [
                s && /* @__PURE__ */ T(ty, { value: "", children: s }),
                a
              ]
            }
          ),
          c
        ]
      }
    );
  }
);
var ly = "rapid-modal-close-button";
var cy = "top-4 right-4 p-2";
var uy = (0, import_react.forwardRef)(
  ({ styles: e, ...t }, n) => {
    const r = Mg();
    return /* @__PURE__ */ T(
      kl,
      {
        ref: n,
        ...t,
        onClick: () => r(),
        className: C(
          e || t.className,
          cy,
          ly
        ),
        variant: "ghost",
        "aria-label": "Close Modal",
        children: /* @__PURE__ */ T(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 384 512",
            height: "16px",
            width: "16px",
            children: /* @__PURE__ */ T("path", { d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" })
          }
        )
      }
    );
  }
);
uy.displayName = "ModalCloseButton";
var dy = "rapid-modal-footer";
var fy = "flex items-center justify-end p-4";
var uv = (0, import_react.forwardRef)(
  ({ styles: e, children: t, ...n }, r) => /* @__PURE__ */ T(
    "div",
    {
      ref: r,
      className: C(
        e || n.className,
        fy,
        dy
      ),
      children: t
    }
  )
);
function er(e) {
  return e.split("-")[1];
}
function Il(e) {
  return e === "y" ? "height" : "width";
}
function ut(e) {
  return e.split("-")[0];
}
function tr(e) {
  return ["top", "bottom"].includes(ut(e)) ? "x" : "y";
}
function ks(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = r.x + r.width / 2 - o.width / 2, i = r.y + r.height / 2 - o.height / 2, a = tr(t), l = Il(a), c = r[l] / 2 - o[l] / 2, u = a === "x";
  let d;
  switch (ut(t)) {
    case "top":
      d = { x: s, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: s, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: i };
      break;
    case "left":
      d = { x: r.x - o.width, y: i };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (er(t)) {
    case "start":
      d[a] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      d[a] += c * (n && u ? -1 : 1);
  }
  return d;
}
var hy = async (e, t, n) => {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: s = [], platform: i } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({ reference: e, floating: t, strategy: o }), { x: u, y: d } = ks(c, r, l), f = r, h = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: v, fn: x } = a[g], { x: y, y: w, data: b, reset: P } = await x({ x: u, y: d, initialPlacement: r, placement: f, strategy: o, middlewareData: h, rects: c, platform: i, elements: { reference: e, floating: t } });
    u = y ?? u, d = w ?? d, h = { ...h, [v]: { ...h[v], ...b } }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (c = P.rects === true ? await i.getElementRects({ reference: e, floating: t, strategy: o }) : P.rects), { x: u, y: d } = ks(c, f, l)), g = -1);
  }
  return { x: u, y: d, placement: f, strategy: o, middlewareData: h };
};
function py(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Vn(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Ol(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: a, strategy: l } = e, { boundary: c = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = false, padding: h = 0 } = t, m = py(h), g = a[f ? d === "floating" ? "reference" : "floating" : d], v = Vn(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)), boundary: c, rootBoundary: u, strategy: l })), x = d === "floating" ? { ...i.floating, x: r, y: o } : i.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), w = await (s.isElement == null ? void 0 : s.isElement(y)) && await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 }, b = Vn(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: x, offsetParent: y, strategy: l }) : x);
  return { top: (v.top - b.top + m.top) / w.y, bottom: (b.bottom - v.bottom + m.bottom) / w.y, left: (v.left - b.left + m.left) / w.x, right: (b.right - v.right + m.right) / w.x };
}
var my = Math.min;
var gy = Math.max;
function Vs(e, t, n) {
  return gy(e, my(t, n));
}
var yy = ["top", "right", "bottom", "left"];
yy.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
var vy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function In(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vy[t]);
}
function by(e, t, n) {
  n === void 0 && (n = false);
  const r = er(e), o = tr(e), s = Il(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = In(i)), { main: i, cross: In(i) };
}
var xy = { start: "end", end: "start" };
function Nr(e) {
  return e.replace(/start|end/g, (t) => xy[t]);
}
var wy = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: r, middlewareData: o, rects: s, initialPlacement: i, platform: a, elements: l } = t, { mainAxis: c = true, crossAxis: u = true, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: m = true, ...g } = e, v = ut(r), x = ut(i) === i, y = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), w = d || (x || !m ? [In(i)] : function($) {
      const z = In($);
      return [Nr($), z, Nr(z)];
    }(i));
    d || h === "none" || w.push(...function($, z, H, j) {
      const k = er($);
      let V = function(Q, ae, le) {
        const we = ["left", "right"], Y = ["right", "left"], on = ["top", "bottom"], sn = ["bottom", "top"];
        switch (Q) {
          case "top":
          case "bottom":
            return le ? ae ? Y : we : ae ? we : Y;
          case "left":
          case "right":
            return ae ? on : sn;
          default:
            return [];
        }
      }(ut($), H === "start", j);
      return k && (V = V.map((Q) => Q + "-" + k), z && (V = V.concat(V.map(Nr)))), V;
    }(i, m, h, y));
    const b = [i, ...w], P = await Ol(t, g), E = [];
    let N = ((n = o.flip) == null ? void 0 : n.overflows) || [];
    if (c && E.push(P[v]), u) {
      const { main: $, cross: z } = by(r, s, y);
      E.push(P[$], P[z]);
    }
    if (N = [...N, { placement: r, overflows: E }], !E.every(($) => $ <= 0)) {
      var W, _;
      const $ = (((W = o.flip) == null ? void 0 : W.index) || 0) + 1, z = b[$];
      if (z)
        return { data: { index: $, overflows: N }, reset: { placement: z } };
      let H = (_ = N.filter((j) => j.overflows[0] <= 0).sort((j, k) => j.overflows[1] - k.overflows[1])[0]) == null ? void 0 : _.placement;
      if (!H)
        switch (f) {
          case "bestFit": {
            var D;
            const j = (D = N.map((k) => [k.placement, k.overflows.filter((V) => V > 0).reduce((V, Q) => V + Q, 0)]).sort((k, V) => k[1] - V[1])[0]) == null ? void 0 : D[0];
            j && (H = j);
            break;
          }
          case "initialPlacement":
            H = i;
        }
      if (r !== H)
        return { reset: { placement: H } };
    }
    return {};
  } };
};
var Sy = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: r } = t, o = await async function(s, i) {
      const { placement: a, platform: l, elements: c } = s, u = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), d = ut(a), f = er(a), h = tr(a) === "x", m = ["left", "top"].includes(d) ? -1 : 1, g = u && h ? -1 : 1, v = typeof i == "function" ? i(s) : i;
      let { mainAxis: x, crossAxis: y, alignmentAxis: w } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return f && typeof w == "number" && (y = f === "end" ? -1 * w : w), h ? { x: y * g, y: x * m } : { x: x * m, y: y * g };
    }(t, e);
    return { x: n + o.x, y: r + o.y, data: o };
  } };
};
function Ty(e) {
  return e === "x" ? "y" : "x";
}
var Py = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: r, placement: o } = t, { mainAxis: s = true, crossAxis: i = false, limiter: a = { fn: (v) => {
      let { x, y } = v;
      return { x, y };
    } }, ...l } = e, c = { x: n, y: r }, u = await Ol(t, l), d = tr(ut(o)), f = Ty(d);
    let h = c[d], m = c[f];
    if (s) {
      const v = d === "y" ? "bottom" : "right";
      h = Vs(h + u[d === "y" ? "top" : "left"], h, h - u[v]);
    }
    if (i) {
      const v = f === "y" ? "bottom" : "right";
      m = Vs(m + u[f === "y" ? "top" : "left"], m, m - u[v]);
    }
    const g = a.fn({ ...t, [d]: h, [f]: m });
    return { ...g, data: { x: g.x - n, y: g.y - r } };
  } };
};
function be(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ie(e) {
  return be(e).getComputedStyle(e);
}
var Is = Math.min;
var Ut = Math.max;
var On = Math.round;
function Fl(e) {
  const t = Ie(e);
  let n = parseFloat(t.width), r = parseFloat(t.height);
  const o = e.offsetWidth, s = e.offsetHeight, i = On(n) !== o || On(r) !== s;
  return i && (n = o, r = s), { width: n, height: r, fallback: i };
}
function et(e) {
  return jl(e) ? (e.nodeName || "").toLowerCase() : "";
}
var bn;
function $l() {
  if (bn)
    return bn;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (bn = e.brands.map((t) => t.brand + "/" + t.version).join(" "), bn) : navigator.userAgent;
}
function Re(e) {
  return e instanceof be(e).HTMLElement;
}
function Me(e) {
  return e instanceof be(e).Element;
}
function jl(e) {
  return e instanceof be(e).Node;
}
function Os(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof be(e).ShadowRoot || e instanceof ShadowRoot;
}
function nr(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ay(e) {
  return ["table", "td", "th"].includes(et(e));
}
function so(e) {
  const t = /firefox/i.test($l()), n = Ie(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((o) => n.willChange.includes(o)) || ["paint", "layout", "strict", "content"].some((o) => {
    const s = n.contain;
    return s != null && s.includes(o);
  });
}
function ao() {
  return /^((?!chrome|android).)*safari/i.test($l());
}
function ei(e) {
  return ["html", "body", "#document"].includes(et(e));
}
function _l(e) {
  return Me(e) ? e : e.contextElement;
}
var Bl = { x: 1, y: 1 };
function wt(e) {
  const t = _l(e);
  if (!Re(t))
    return Bl;
  const n = t.getBoundingClientRect(), { width: r, height: o, fallback: s } = Fl(t);
  let i = (s ? On(n.width) : n.width) / r, a = (s ? On(n.height) : n.height) / o;
  return i && Number.isFinite(i) || (i = 1), a && Number.isFinite(a) || (a = 1), { x: i, y: a };
}
function dt(e, t, n, r) {
  var o, s;
  t === void 0 && (t = false), n === void 0 && (n = false);
  const i = e.getBoundingClientRect(), a = _l(e);
  let l = Bl;
  t && (r ? Me(r) && (l = wt(r)) : l = wt(e));
  const c = a ? be(a) : window, u = ao() && n;
  let d = (i.left + (u && ((o = c.visualViewport) == null ? void 0 : o.offsetLeft) || 0)) / l.x, f = (i.top + (u && ((s = c.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / l.y, h = i.width / l.x, m = i.height / l.y;
  if (a) {
    const g = be(a), v = r && Me(r) ? be(r) : r;
    let x = g.frameElement;
    for (; x && r && v !== g; ) {
      const y = wt(x), w = x.getBoundingClientRect(), b = getComputedStyle(x);
      w.x += (x.clientLeft + parseFloat(b.paddingLeft)) * y.x, w.y += (x.clientTop + parseFloat(b.paddingTop)) * y.y, d *= y.x, f *= y.y, h *= y.x, m *= y.y, d += w.x, f += w.y, x = be(x).frameElement;
    }
  }
  return Vn({ width: h, height: m, x: d, y: f });
}
function Ze(e) {
  return ((jl(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rr(e) {
  return Me(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Ul(e) {
  return dt(Ze(e)).left + rr(e).scrollLeft;
}
function Zt(e) {
  if (et(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Os(e) && e.host || Ze(e);
  return Os(t) ? t.host : t;
}
function zl(e) {
  const t = Zt(e);
  return ei(t) ? t.ownerDocument.body : Re(t) && nr(t) ? t : zl(t);
}
function zt(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = zl(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = be(r);
  return o ? t.concat(s, s.visualViewport || [], nr(r) ? r : []) : t.concat(r, zt(r));
}
function Fs(e, t, n) {
  let r;
  if (t === "viewport")
    r = function(i, a) {
      const l = be(i), c = Ze(i), u = l.visualViewport;
      let d = c.clientWidth, f = c.clientHeight, h = 0, m = 0;
      if (u) {
        d = u.width, f = u.height;
        const g = ao();
        (!g || g && a === "fixed") && (h = u.offsetLeft, m = u.offsetTop);
      }
      return { width: d, height: f, x: h, y: m };
    }(e, n);
  else if (t === "document")
    r = function(i) {
      const a = Ze(i), l = rr(i), c = i.ownerDocument.body, u = Ut(a.scrollWidth, a.clientWidth, c.scrollWidth, c.clientWidth), d = Ut(a.scrollHeight, a.clientHeight, c.scrollHeight, c.clientHeight);
      let f = -l.scrollLeft + Ul(i);
      const h = -l.scrollTop;
      return Ie(c).direction === "rtl" && (f += Ut(a.clientWidth, c.clientWidth) - u), { width: u, height: d, x: f, y: h };
    }(Ze(e));
  else if (Me(t))
    r = function(i, a) {
      const l = dt(i, true, a === "fixed"), c = l.top + i.clientTop, u = l.left + i.clientLeft, d = Re(i) ? wt(i) : { x: 1, y: 1 };
      return { width: i.clientWidth * d.x, height: i.clientHeight * d.y, x: u * d.x, y: c * d.y };
    }(t, n);
  else {
    const i = { ...t };
    if (ao()) {
      var o, s;
      const a = be(e);
      i.x -= ((o = a.visualViewport) == null ? void 0 : o.offsetLeft) || 0, i.y -= ((s = a.visualViewport) == null ? void 0 : s.offsetTop) || 0;
    }
    r = i;
  }
  return Vn(r);
}
function $s(e, t) {
  return Re(e) && Ie(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function js(e, t) {
  const n = be(e);
  if (!Re(e))
    return n;
  let r = $s(e, t);
  for (; r && Ay(r) && Ie(r).position === "static"; )
    r = $s(r, t);
  return r && (et(r) === "html" || et(r) === "body" && Ie(r).position === "static" && !so(r)) ? n : r || function(o) {
    let s = Zt(o);
    for (; Re(s) && !ei(s); ) {
      if (so(s))
        return s;
      s = Zt(s);
    }
    return null;
  }(e) || n;
}
function Ey(e, t, n) {
  const r = Re(t), o = Ze(t), s = dt(e, true, n === "fixed", t);
  let i = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || !r && n !== "fixed")
    if ((et(t) !== "body" || nr(o)) && (i = rr(t)), Re(t)) {
      const l = dt(t, true);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      o && (a.x = Ul(o));
  return { x: s.left + i.scrollLeft - a.x, y: s.top + i.scrollTop - a.y, width: s.width, height: s.height };
}
var Cy = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = n === "clippingAncestors" ? function(c, u) {
    const d = u.get(c);
    if (d)
      return d;
    let f = zt(c).filter((v) => Me(v) && et(v) !== "body"), h = null;
    const m = Ie(c).position === "fixed";
    let g = m ? Zt(c) : c;
    for (; Me(g) && !ei(g); ) {
      const v = Ie(g), x = so(g);
      v.position === "fixed" ? h = null : (m ? x || h : x || v.position !== "static" || !h || !["absolute", "fixed"].includes(h.position)) ? h = v : f = f.filter((y) => y !== g), g = Zt(g);
    }
    return u.set(c, f), f;
  }(t, this._c) : [].concat(n), i = [...s, r], a = i[0], l = i.reduce((c, u) => {
    const d = Fs(t, u, o);
    return c.top = Ut(d.top, c.top), c.right = Is(d.right, c.right), c.bottom = Is(d.bottom, c.bottom), c.left = Ut(d.left, c.left), c;
  }, Fs(t, a, o));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = Re(n), s = Ze(n);
  if (n === s)
    return t;
  let i = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((o || !o && r !== "fixed") && ((et(n) !== "body" || nr(s)) && (i = rr(n)), Re(n))) {
    const c = dt(n);
    a = wt(n), l.x = c.x + n.clientLeft, l.y = c.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - i.scrollLeft * a.x + l.x, y: t.y * a.y - i.scrollTop * a.y + l.y };
}, isElement: Me, getDimensions: function(e) {
  return Re(e) ? Fl(e) : e.getBoundingClientRect();
}, getOffsetParent: js, getDocumentElement: Ze, getScale: wt, async getElementRects(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const o = this.getOffsetParent || js, s = this.getDimensions;
  return { reference: Ey(t, await o(n), r), floating: { x: 0, y: 0, ...await s(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ie(e).direction === "rtl" };
function Ry(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: s = true, elementResize: i = true, animationFrame: a = false } = r, l = o && !a, c = l || s ? [...Me(e) ? zt(e) : e.contextElement ? zt(e.contextElement) : [], ...zt(t)] : [];
  c.forEach((h) => {
    l && h.addEventListener("scroll", n, { passive: true }), s && h.addEventListener("resize", n);
  });
  let u, d = null;
  if (i) {
    let h = true;
    d = new ResizeObserver(() => {
      h || n(), h = false;
    }), Me(e) && !a && d.observe(e), Me(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let f = a ? dt(e) : null;
  return a && function h() {
    const m = dt(e);
    !f || m.x === f.x && m.y === f.y && m.width === f.width && m.height === f.height || n(), f = m, u = requestAnimationFrame(h);
  }(), n(), () => {
    var h;
    c.forEach((m) => {
      l && m.removeEventListener("scroll", n), s && m.removeEventListener("resize", n);
    }), (h = d) == null || h.disconnect(), d = null, a && cancelAnimationFrame(u);
  };
}
var My = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = { platform: Cy, ...n }, s = { ...o.platform, _c: r };
  return hy(e, t, { ...o, platform: s });
};
var Tn = typeof document < "u" ? import_react.useLayoutEffect : import_react.useEffect;
function Fn(e, t) {
  if (e === t)
    return true;
  if (typeof e != typeof t)
    return false;
  if (typeof e == "function" && e.toString() === t.toString())
    return true;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return false;
      for (r = n; r-- !== 0; )
        if (!Fn(e[r], t[r]))
          return false;
      return true;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return false;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r]))
        return false;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Fn(e[s], t[s]))
        return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function _s(e) {
  const t = U.useRef(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
function Ly(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    whileElementsMounted: s,
    open: i
  } = e, [a, l] = U.useState({
    x: null,
    y: null,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: false
  }), [c, u] = U.useState(r);
  Fn(c, r) || u(r);
  const d = U.useRef(null), f = U.useRef(null), h = U.useRef(a), m = _s(s), g = _s(o), [v, x] = U.useState(null), [y, w] = U.useState(null), b = U.useCallback((D) => {
    d.current !== D && (d.current = D, x(D));
  }, []), P = U.useCallback((D) => {
    f.current !== D && (f.current = D, w(D));
  }, []), E = U.useCallback(() => {
    if (!d.current || !f.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: c
    };
    g.current && (D.platform = g.current), My(d.current, f.current, D).then(($) => {
      const z = {
        ...$,
        isPositioned: true
      };
      N.current && !Fn(h.current, z) && (h.current = z, xc.flushSync(() => {
        l(z);
      }));
    });
  }, [c, t, n, g]);
  Tn(() => {
    i === false && h.current.isPositioned && (h.current.isPositioned = false, l((D) => ({
      ...D,
      isPositioned: false
    })));
  }, [i]);
  const N = U.useRef(false);
  Tn(() => (N.current = true, () => {
    N.current = false;
  }), []), Tn(() => {
    if (v && y) {
      if (m.current)
        return m.current(v, y, E);
      E();
    }
  }, [v, y, E, m]);
  const W = U.useMemo(() => ({
    reference: d,
    floating: f,
    setReference: b,
    setFloating: P
  }), [b, P]), _ = U.useMemo(() => ({
    reference: v,
    floating: y
  }), [v, y]);
  return U.useMemo(() => ({
    ...a,
    update: E,
    refs: W,
    elements: _,
    reference: b,
    floating: P
  }), [a, E, W, _, b, P]);
}
var Dy = nt({
  baseStyle: "rounded-[13px] py-1 px-2",
  variants: {
    default: "bg-main text-white",
    outline: "bg-white border border-lightGrey text-main",
    destructive: "bg-danger text-white",
    unstyled: "text-black"
  },
  defaultProps: {
    variant: "default"
  }
});
var Ny = "rapid-tooltip";
var ky = (e) => {
  const {
    children: t,
    shouldCloseOnSroll: n,
    label: r,
    id: o,
    styles: s,
    orientation: i = "top",
    isAnimated: a = true,
    variant: l,
    ...c
  } = e, { isOpen: u, onOpen: d, onClose: f } = yp(), { x: h, y: m, strategy: g, refs: v } = Ly({
    open: u,
    placement: i,
    middleware: [Sy(10), wy(), Py({ padding: 5 })],
    whileElementsMounted: Ry
  }), x = (0, import_react.useId)(), w = `rapid-tooltip-${o ?? x}`, b = import_react.Children.only(t), P = (0, import_react.cloneElement)(b, {
    ...b.props,
    ref: v.setReference,
    onPointerEnter: (D) => {
      D.pointerType != "touch" && d();
    },
    onPointerLeave: (D) => {
      D.pointerType != "touch" && f();
    },
    onClick: () => {
      var D;
      f(), (D = b == null ? void 0 : b.props) != null && D.onClick && b.props.onClick();
    },
    onBlur: () => f(),
    onFocus: () => d(),
    onPointerDown: () => N(),
    "aria-describedby": o
  }), E = (0, import_react.useCallback)(
    (D) => {
      D.key === "Escape" && f();
    },
    [u]
  ), N = (0, import_react.useCallback)(() => {
    u && f();
  }, [u]), W = (0, import_react.useCallback)(() => {
    u && n && f();
  }, [u]), _ = (0, import_react.useCallback)(() => {
    u && f();
  }, [u]);
  return (0, import_react.useEffect)(() => {
    document.addEventListener("keydown", E), document.addEventListener("pointerDown", N), document.addEventListener("pointerLeave", _), document.addEventListener("scroll", W);
  }, []), r ? /* @__PURE__ */ Gt(St, { children: [
    P,
    /* @__PURE__ */ T(ll, { children: u ? /* @__PURE__ */ T(Jo, { children: /* @__PURE__ */ T(
      "div",
      {
        ref: v.setFloating,
        style: {
          position: g,
          top: m ?? 0,
          left: h ?? 0
        },
        children: /* @__PURE__ */ T(
          Qn,
          {
            isEnabled: a,
            initialscale: 0.85,
            exitAnimation: "exit",
            initialOpacity: 0,
            transition: { exit: { duration: 0.1 } },
            children: /* @__PURE__ */ T(
              "div",
              {
                id: w,
                role: "tooltip",
                className: C(
                  s || c.className,
                  $n(
                    l,
                    "tooltip"
                  ) || Ny
                ),
                children: /* @__PURE__ */ T(Vl, { styles: "text-sm", children: r })
              }
            )
          }
        )
      }
    ) }) : null })
  ] }) : /* @__PURE__ */ T(St, { children: t });
};
ky.displayName = "Tooltip";
var Wl = (0, import_react.createContext)(
  void 0
);
var Vy = () => {
  const e = (0, import_react.useContext)(Wl);
  if (e === void 0)
    throw new Error("useDrawer must be used within a DrawerProvider");
  return e;
};
var Iy = "rapid-drawer";
var dv = (0, import_react.forwardRef)((e, t) => {
  const {
    open: n,
    onClose: r,
    direction: o = "right",
    size: s = "md",
    enableAnimation: i = true,
    enableOverlay: a = true,
    initialFocus: l,
    zIndex: c,
    styles: u,
    children: d,
    ...f
  } = e, h = (0, import_react.useMemo)(
    () => ({ open: n, direction: o, onClose: r, size: s, enableAnimation: i, zIndex: c }),
    [n, o, r, s, i, c]
  );
  return /* @__PURE__ */ T(Wl.Provider, { value: h, children: /* @__PURE__ */ T(
    Lg,
    {
      ref: t,
      ...f,
      open: n,
      onClose: r,
      enableAnimation: false,
      className: C(
        u || f.className,
        Iy
      ),
      zIndex: c,
      enableOverlay: a,
      fadeAnimation: {
        transition: {
          exit: {
            duration: 0.25
          }
        }
      },
      children: d
    }
  ) });
});
var Oy = "rapid-drawer-content";
var Fy = "rapid-drawer-panel-container";
var $y = "fixed";
var jy = "flex flex-col item-start bg-white w-full h-full overflow-y-auto";
var _y = {
  left: "flex inset-y-0 left-0",
  right: "flex inset-y-0 right-0",
  top: "inset-x-0 top-0 overflow-y-auto",
  bottom: "inset-x-0 bottom-0"
};
var By = (e, t) => {
  const n = {
    sm: "20%",
    md: "40%",
    lg: "60%",
    xl: "80%",
    full: "100%"
  };
  return { [e === "left" || e === "right" ? "width" : "height"]: n[t] };
};
var fv = (0, import_react.forwardRef)(
  ({ styles: e, containerStyles: t, children: n, ...r }, o) => {
    const { open: s, onClose: i, size: a, direction: l, enableAnimation: c, zIndex: u } = Vy(), d = cl({
      onMatch: () => i(),
      enabled: true
    });
    return /* @__PURE__ */ T(
      "div",
      {
        style: {
          ...By(l, a),
          zIndex: u ? u + 1 : 50
        },
        className: C(
          t,
          `${$y} ${_y[l]}`,
          Fy
        ),
        children: /* @__PURE__ */ T(
          Nl,
          {
            direction: l,
            open: s,
            isEnabled: c,
            styles: "w-full h-full",
            children: /* @__PURE__ */ T(
              "div",
              {
                ref: dl(o, d),
                ...r,
                className: C(
                  e || r.className,
                  jy,
                  Oy
                ),
                children: n
              }
            )
          }
        )
      }
    );
  }
);
var Gl = {};
var Hl = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: true
  }), Object.defineProperty(e, "default", {
    enumerable: true,
    get: () => n
  });
  function t(r, o) {
    return {
      handler: r,
      config: o
    };
  }
  t.withOptions = function(r, o = () => ({})) {
    const s = function(i) {
      return {
        __options: i,
        handler: r(i),
        config: o(i)
      };
    };
    return s.__isOptionsFunction = true, s.__pluginFunction = r, s.__configFunction = o, s;
  };
  const n = t;
})(Hl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: true
  }), Object.defineProperty(e, "default", {
    enumerable: true,
    get: () => r
  });
  const t = /* @__PURE__ */ n(Hl);
  function n(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  const r = t.default;
})(Gl);
var kr = Gl;
var Uy = (kr.__esModule ? kr : { default: kr }).default;
var Yl = Vp({
  button: Ug,
  input: Hg,
  textArea: Xg,
  menuButton: Pg,
  select: ny,
  tooltip: Dy,
  switch: dg,
  divider: Ip
});

export {
  Ep,
  Wo,
  tv,
  kp,
  ov,
  Vl,
  Gg
};
/*! Bundled license information:

@rapid-web/ui/dist/@rapid-web/ui.es.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@rapid-web/ui/dist/@rapid-web/ui.es.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-4FZDFP7E.js.map

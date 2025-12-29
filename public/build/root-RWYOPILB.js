import {
  Vl,
  Wo,
  tv
} from "/build/_shared/chunk-4FZDFP7E.js";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-XTR6BHFN.js";
import {
  createHotContext
} from "/build/_shared/chunk-FL6IZLGV.js";
import "/build/_shared/chunk-K6PKGSTD.js";
import "/build/_shared/chunk-H5ZE7JVG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NRH5LTJ7.js";
import {
  require_react
} from "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// assets/gradientMain.svg
var gradientMain_default = "/build/_assets/gradientMain-JYWMBQBK.svg";

// app/components/Navigation.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigation.tsx"
  );
  import.meta.hot.lastModified = "1700797081133.1807";
}
var Navigation = () => {
  _s();
  const [scrollY, setScrollY] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed w-full z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tv, { maxWidth: "sm", styles: "max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Wo("flex justify-between sm:justify-start sm:space-x-[62px] pl-4 pr-4 top-0 backdrop-blur-lg transition duration-500 safari-blur z-50 py-[11px] exclude-from-markdown rounded-full", scrollY > 40 ? "shadow-navbar" : ""), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "bg-none z-10 text-white text-center exclude-from-markdown", to: "/", children: ({
      isActive
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { children: "About" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-full mt-[2px] inset-0 bg-white dark:bg-white z-[-1] dark:bg-gradient-to-r from-transparent to-backgroundSecondary" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 46,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 44,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 41,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "bg-none z-10 text-white text-center exclude-from-markdown", to: "/oss", children: ({
      isActive
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { children: "OSS" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-full mt-[2px] inset-0 bg-white dark:bg-white z-[-1] dark:bg-gradient-to-r from-transparent to-backgroundSecondary" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 54,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 49,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "bg-none z-10 text-white text-center exclude-from-markdown", to: "/blog", children: ({
      isActive
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { children: "Blog" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-full mt-[2px] inset-0 bg-white dark:bg-white z-[-1] dark:bg-gradient-to-r from-transparent to-backgroundSecondary" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 62,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 57,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: "bg-none z-10 text-white text-center exclude-from-markdown", to: "/chat", children: ({
      isActive
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { children: "Chat" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      isActive && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[1px] w-full mt-[2px] inset-0 bg-white dark:bg-white z-[-1] dark:bg-gradient-to-r from-transparent to-backgroundSecondary" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 70,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 65,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 39,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(Navigation, "eTR5W6wH45bVtWbD0ho0jkNrbDM=");
_c = Navigation;
var Navigation_default = Navigation;
var _c;
$RefreshReg$(_c, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Layout.tsx"
  );
  import.meta.hot.lastModified = "1710879182545.8271";
}
var Layout = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative min-h-screen w-full overflow-hidden exclude-from-markdown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: gradientMain_default, alt: "gradient3", className: "absolute top-0 md:-top-[50px] left-1/2 -translate-x-1/2" }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 29,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 mb-20 md:mb-18 w-full exclude-from-markdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 30,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(tv, { maxWidth: "sm", styles: "z-10 pb-12 overflow-y-visible w-full max-w-4xl exclude-from-markdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 flex flex-col z-100 w-ful exclude-from-markdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 mt-6 w-full", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 35,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c2 = Layout;
var Layout_default = Layout;
var _c2;
$RefreshReg$(_c2, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/index.css
var styles_default = "/build/_assets/index-DRENG2AE.css";

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
function links() {
  return [{
    rel: "stylesheet",
    href: styles_default
  }];
}
var meta = () => {
  return [{
    title: "Darren Baldwin"
  }, {
    name: "description",
    content: "OSS \u2022 Startups \u2022 Dev tools"
  }];
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "description", content: "Darren Baldwin's portfolio" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "twitter:description", content: "Darren Baldwin's website." }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "twitter:site", content: "https://darrenbaldwin.dev" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "twitter:title", content: "Darren Baldwin" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "twitter:image", content: "https://storage.googleapis.com/cv-framework/ogImage.jpg" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { property: "og:image", content: "https://storage.googleapis.com/cv-framework/ogImage.jpg" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { property: "og:title", content: "Darren Baldwin" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { property: "og:description", content: "Darren Baldwin's website." }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 71,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-RWYOPILB.js.map

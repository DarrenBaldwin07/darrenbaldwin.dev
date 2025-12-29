import {
  arrow_up_right_from_square_solid_default,
  github_default
} from "/build/_shared/chunk-S3GEOGY7.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Ep,
  Gg,
  Vl,
  kp,
  ov
} from "/build/_shared/chunk-4FZDFP7E.js";
import {
  Await,
  useLoaderData
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

// app/routes/oss.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());

// assets/star-regular.svg
var star_regular_default = "/build/_assets/star-regular-ZU4POBN7.svg";

// app/components/Repository.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Repository.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Repository.tsx"
  );
  import.meta.hot.lastModified = "1711920510004.2234";
}
var Repository = ({
  title,
  description,
  stars,
  url,
  language,
  languageColor
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: url, target: "_blank", rel: "noreferrer", className: "transition ease-in-out hover:-translate-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-background border-backgroundSecondary border p-4 rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 26, src: github_default, alt: "github" }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 39,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gg, { styles: "text-white text-2xl", children: title }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 40,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Repository.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-1 rounded-xl border-[1px] py-1 px-2 border-backgroundSecondary", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: star_regular_default, alt: "star", width: 18 }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 45,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white", children: stars }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 46,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Repository.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Repository.tsx",
      lineNumber: 37,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white mt-2 font-light", children: description }, void 0, false, {
      fileName: "app/components/Repository.tsx",
      lineNumber: 49,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ov, { styles: "items-center justify-between mt-4 w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ov, { styles: "items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-4 rounded-full", style: {
          backgroundColor: languageColor
        } }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 54,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white", children: language }, void 0, false, {
          fileName: "app/components/Repository.tsx",
          lineNumber: 57,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Repository.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-backgroundSecondary rounded-full p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: arrow_up_right_from_square_solid_default, width: 12, alt: "link" }, void 0, false, {
        fileName: "app/components/Repository.tsx",
        lineNumber: 60,
        columnNumber: 8
      }, this) }, void 0, false, {
        fileName: "app/components/Repository.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Repository.tsx",
      lineNumber: 52,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Repository.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Repository.tsx",
    lineNumber: 35,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Repository.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c = Repository;
var Repository_default = Repository;
var _c;
$RefreshReg$(_c, "Repository");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/oss.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/oss.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/oss.tsx"
  );
  import.meta.hot.lastModified = "1711920488198.9634";
}
var meta = () => {
  return [{
    title: "Projects & OSS"
  }];
};
function Oss() {
  _s();
  const repos = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "z-10 slide-enter-content w-full h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ov, { styles: "items-center gap-2 relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Gg, { styles: "text-white text-3xl tracking-widest font-extrabold", children: "Projects" }, void 0, false, {
        fileName: "app/routes/oss.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ov, { styles: "items-center justify-center p-2 rounded-full bg-background border border-backgroundSecondary w-8 h-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white", children: "5" }, void 0, false, {
        fileName: "app/routes/oss.tsx",
        lineNumber: 48,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/oss.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 43,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kp, { styles: "mt-6 w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kp, { styles: "bg-background border-backgroundSecondary border p-2 rounded-xl w-min h-full items-center justify-center m-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ep, { styles: "border-r-white border-l-transparent border-t-transparent border-b-transparent bg-transparent" }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 53,
      columnNumber: 8
    }, this) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 52,
      columnNumber: 25
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Await, { resolve: repos.data, children: (repos2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(kp, { children: repos2.map(({
      title,
      description,
      language,
      languageColor,
      url,
      stars
    }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Repository_default, { title, description, language, languageColor, url, stars }, index, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 65,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 55,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/oss.tsx",
      lineNumber: 51,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/oss.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(Oss, "Y1RO777wfc8eggXfuREyCKm/IWU=", false, function() {
  return [useLoaderData];
});
_c2 = Oss;
var oss_default = Oss;
var _c2;
$RefreshReg$(_c2, "Oss");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  oss_default as default,
  meta
};
//# sourceMappingURL=/build/routes/oss-QR3XTIKM.js.map

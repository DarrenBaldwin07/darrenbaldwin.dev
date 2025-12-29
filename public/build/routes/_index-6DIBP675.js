import {
  arrow_up_right_from_square_solid_default,
  formatNumber,
  getLanguageColor,
  github_default
} from "/build/_shared/chunk-S3GEOGY7.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Gg,
  Vl,
  ov
} from "/build/_shared/chunk-4FZDFP7E.js";
import {
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
import "/build/_shared/chunk-O4OKU2LD.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_node = __toESM(require_node());

// app/components/SocialLink.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/SocialLink.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SocialLink.tsx"
  );
  import.meta.hot.lastModified = "1693870020437.709";
}
var SocialLink = ({
  image,
  url,
  title
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "w-full md:w-max", href: url, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-background border border-backgroundSecondary hover:-translate-y-1 transition ease-linear p-4 rounded-lg flex items-center justify-between gap-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { width: 24, src: image, alt: "linkedin" }, void 0, false, {
        fileName: "app/components/SocialLink.tsx",
        lineNumber: 32,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white ml-2", children: title }, void 0, false, {
        fileName: "app/components/SocialLink.tsx",
        lineNumber: 33,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/SocialLink.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: arrow_up_right_from_square_solid_default, width: 15, alt: "link" }, void 0, false, {
      fileName: "app/components/SocialLink.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SocialLink.tsx",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/SocialLink.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = SocialLink;
var SocialLink_default = SocialLink;
var _c;
$RefreshReg$(_c, "SocialLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// assets/twitter.svg
var twitter_default = "/build/_assets/twitter-YJAPHU7A.svg";

// assets/terminalSolid.svg
var terminalSolid_default = "/build/_assets/terminalSolid-6NXRD6A7.svg";

// assets/linkedin.svg
var linkedin_default = "/build/_assets/linkedin-J5QKS2Y7.svg";

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1711911272973.3926";
}
var meta = () => {
  return [{
    title: "Darren Baldwin"
  }, {
    name: "description",
    content: "Darren Baldwin - OSS, Startups, Dev tools"
  }];
};
function Index() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "slide-enter-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Gg, { styles: "text-white text-3xl tracking-widest font-extrabold z-10", children: "Darren Baldwin" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { className: "text-white font-sans mt-4 z-10 font-light", children: [
      "Hey, I\u2019m Darren. I start companies and write code. Currently working @",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { as: "span", styles: "font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { rel: "noreferrer", className: "hover:underline decoration-solid", href: "https://tembo.io", target: "_blank", children: "Tembo" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 106,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 5
      }, this),
      ", a venture-backed company building the Postgres platform for every application and data service."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 102,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col mt-8 space-y-6 font-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { width: 26, src: github_default, alt: "github" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-sans", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: formatNumber(data.totalContributions.toString()) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 117,
            columnNumber: 7
          }, this),
          " ",
          "contributions in the last year"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 114,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { width: 26, src: twitter_default, alt: "twitter" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 124,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-sans", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: 1457 }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 126,
            columnNumber: 7
          }, this),
          " all time tweets"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 125,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { width: 26, src: terminalSolid_default, alt: "code" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 130,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-sans", children: "Most used language:" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 131,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ov, { styles: "items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-sans font-semibold", children: data.mostUsedLanguage }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 135,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-4 w-4 rounded-full", style: {
            backgroundColor: getLanguageColor(data.mostUsedLanguage)
          } }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 138,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-sans mt-8 font-light", children: [
      "I contribute and maintain various open source projects and am very passionate about fullstack web development and performance with tools like",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "gradient-typescript-text font-semibold", children: "Typescript" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 148,
        columnNumber: 5
      }, this),
      " ",
      "and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "gradient-rust-text font-semibold", children: "Rust" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 152,
        columnNumber: 5
      }, this),
      ". I\u2019m also an Advisor and Angel Investor in early stage startups."
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 144,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-12 flex flex-col md:flex-row items-center space-y-6 md:space-x-12 md:space-y-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { url: "https://github.com/DarrenBaldwin07", image: github_default, title: "Github" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 156,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { url: "https://twitter.com/DarrenBaldwin03", image: twitter_default, title: "Twitter" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 157,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SocialLink_default, { url: "https://www.linkedin.com/in/real-darren-baldwin/", image: linkedin_default, title: "LinkedIn" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 158,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 155,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s(Index, "9CtdaGi9eBovaKhclDz8J1O5xzw=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-6DIBP675.js.map

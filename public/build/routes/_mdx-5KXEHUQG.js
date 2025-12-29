import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-ANEH5SZM.js";
import {
  Gg,
  Vl,
  Wo
} from "/build/_shared/chunk-4FZDFP7E.js";
import {
  Outlet,
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

// app/routes/_mdx.tsx
var import_node = __toESM(require_node());

// assets/profile.svg
var profile_default = "/build/_assets/profile-DBSUZVPC.svg";

// app/components/Markdown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Markdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Markdown.tsx"
  );
  import.meta.hot.lastModified = "1711918846295.5964";
}
var Markdown = ({
  classNames = "",
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: Wo(`max-[900px]:max-w-full prose prose-md dark:prose-invert prose-p:text-white prose-p:font-secondary prose-li:text-white
    prose-headings:font-extrabold prose-h1:text-4xl prose-headings:text-white prose-headings:font-archivo prose-a:underline`, classNames), children }, void 0, false, {
    fileName: "app/components/Markdown.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = Markdown;
var Markdown_default = Markdown;
var _c;
$RefreshReg$(_c, "Markdown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_mdx.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_mdx.tsx"
  );
  import.meta.hot.lastModified = "1711997495865.9395";
}
var _mdx = () => {
  const currentPost = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col pb-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col justify-center mb-14 gap-6", children: [
      (currentPost == null ? void 0 : currentPost.img) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "img",
        {
          src: currentPost.img,
          className: "w-full shadow-navbarSmall rounded-2xl",
          alt: "Blog post cover"
        },
        void 0,
        false,
        {
          fileName: "app/routes/_mdx.tsx",
          lineNumber: 36,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "font-light font-secondary text-md text-white mt-6 exclude-from-markdown gradient-text", children: currentPost.publishDate }, void 0, false, {
        fileName: "app/routes/_mdx.tsx",
        lineNumber: 42,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Gg, { styles: "exclude-from-markdow font-archivo heading font-bold text-[1.65rem] sm:text-3xl lg:text-4xl text-white", children: currentPost.title }, void 0, false, {
          fileName: "app/routes/_mdx.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "font-light text-md text-white mt-4 exclude-from-markdown", children: currentPost.description }, void 0, false, {
          fileName: "app/routes/_mdx.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_mdx.tsx",
        lineNumber: 45,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "img",
          {
            width: 35,
            height: 35,
            className: "rounded-full",
            src: profile_default,
            alt: currentPost.author
          },
          void 0,
          false,
          {
            fileName: "app/routes/_mdx.tsx",
            lineNumber: 54,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Vl, { styles: "text-white font-light exclude-from-markdown", children: currentPost.author }, void 0, false, {
          fileName: "app/routes/_mdx.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_mdx.tsx",
        lineNumber: 53,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_mdx.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Markdown_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_mdx.tsx",
      lineNumber: 67,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_mdx.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_mdx.tsx",
    lineNumber: 33,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/_mdx.tsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
};
var mdx_default = _mdx;
export {
  mdx_default as default
};
//# sourceMappingURL=/build/routes/_mdx-5KXEHUQG.js.map

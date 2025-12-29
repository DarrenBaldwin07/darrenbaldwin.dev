import {
  posts
} from "/build/_shared/chunk-ANEH5SZM.js";
import {
  Gg,
  Vl
} from "/build/_shared/chunk-4FZDFP7E.js";
import {
  Link
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

// app/routes/blog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.tsx"
  );
  import.meta.hot.lastModified = "1711919989460.62";
}
var meta = () => {
  return [{
    title: "Read my blog"
  }, {
    name: "description",
    content: "Darren Baldwin - OSS, Startups, Dev tools"
  }];
};
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-enter-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gg, { styles: "text-white text-3xl tracking-widest font-extrabold", children: "Blog" }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-xl flex flex-col gap-10 items-center justify-between w-full mt-10", children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: post.pathName, prefetch: "intent", className: "hover:underline decoration-white underline-offset-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gg, { styles: "text-white text-xl mt-1", children: post.title }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 41,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white font-light w-full font-secondary", children: post.description }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 46,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white font-light mt-2 gradient-text font-secondary", children: post.publishDate }, void 0, false, {
        fileName: "app/routes/blog.tsx",
        lineNumber: 49,
        columnNumber: 8
      }, this)
    ] }, index, true, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 40,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/blog.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 35,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/blog.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = Blog;
var blog_default = Blog;
var _c;
$RefreshReg$(_c, "Blog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  blog_default as default,
  meta
};
//# sourceMappingURL=/build/routes/blog-KYXQFH4X.js.map

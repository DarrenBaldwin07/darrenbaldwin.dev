import {
  Gg,
  Vl
} from "/build/_shared/chunk-4FZDFP7E.js";
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

// app/routes/chat.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/chat.tsx"
  );
  import.meta.hot.lastModified = "1710729991396.4746";
}
var meta = () => {
  return [{
    title: "Chat with me?"
  }];
};
function Chat() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-enter-content z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Gg, { styles: "text-white text-3xl tracking-widest font-extrabold", children: "Chat" }, void 0, false, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-background border border-backgroundSecondary hover:-translate-y-1 transition ease-linear p-2 rounded-xl flex items-center justify-between w-full lg:w-96 mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Vl, { styles: "text-white ml-2", children: "Still need to finish this... :)" }, void 0, false, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 35,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/chat.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chat.tsx",
    lineNumber: 30,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/chat.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Chat;
var chat_default = Chat;
var _c;
$RefreshReg$(_c, "Chat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  chat_default as default,
  meta
};
//# sourceMappingURL=/build/routes/chat-EJFZRLLF.js.map

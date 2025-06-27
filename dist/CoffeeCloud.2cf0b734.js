// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"1zY5r":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "42cfc99e2cf0b734";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"b7W5s":[function(require,module,exports,__globalThis) {
var _headersJs = require("./headers.js");
// const apiUrl ="https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS";
const apiUrls = {
    "Last 8 hours": "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS",
    "Last 24 hours": "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=TWENTY_FOUR_HOURS",
    "Last 1 week": "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=ONE_WEEK"
};
let progressBar = document.createElement("div");
progressBar.id = "loading-progress-bar";
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "2px";
progressBar.style.backgroundColor = "white";
progressBar.style.zIndex = 9999;
progressBar.style.transition = "width 0.1s ease-in-out";
document.body.appendChild(progressBar);
function fetchAndRenderDatatech(timeRange) {
    const apiUrl = apiUrls[timeRange];
    if (!apiUrl) return;
    progressBar.style.width = "10%";
    let interval = setInterval(()=>{
        if (parseFloat(progressBar.style.width) < 90) progressBar.style.width = `${parseFloat(progressBar.style.width) + 10}%`;
    }, 300);
    fetch(apiUrl, {
        headers: (0, _headersJs.commonHeaders)
    }).then((response)=>response.json()).then((data)=>{
        const chartData = data.map((item)=>[
                item.Hour,
                parseInt(item.Errors)
            ]);
        Highcharts.chart("containertech", {
            chart: {
                type: "area",
                zooming: {
                    type: "x"
                },
                panning: true,
                panKey: "shift",
                scrollablePlotArea: {
                    minWidth: 600
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: chartData.map((item)=>item[0]),
                title: {
                    text: "Hour"
                }
            },
            yAxis: {
                title: {
                    text: "Number of Errors"
                }
            },
            tooltip: {
                headerFormat: "{point.key}<br>",
                pointFormat: "No of Errors: {point.y}",
                shared: true
            },
            legend: {
                enabled: false
            },
            series: [
                {
                    data: chartData.map((item)=>item[1]),
                    name: "Number of Errors",
                    color: "#3498db",
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false
                    }
                }
            ]
        });
        progressBar.style.width = "100%";
        setTimeout(()=>{
            progressBar.style.width = "0%";
        }, 500);
    }).catch((error)=>{
        console.error("Error fetching data:", error);
        progressBar.style.width = "0%";
    }).finally(()=>clearInterval(interval));
}
document.querySelector(".opttech").addEventListener("change", function() {
    fetchAndRenderDatatech(this.value);
});
document.addEventListener("DOMContentLoaded", function() {
    fetchAndRenderDatatech("Last 8 hours");
});
am5.ready(function() {
    fetch("https://ccdev.scanomat.com/rest/dashboard/error_doughnut_chart?groupid=-1", {
        method: "GET",
        headers: (0, _headersJs.commonHeaders)
    }).then((response)=>response.json()).then((data)=>{
        var root = am5.Root.new("chartdivtech");
        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        // Create chart
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));
        // Create series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));
        series.labels.template.setAll({
            textType: "circular",
            centerX: 0,
            centerY: 0
        });
        // Transform API response to match the chart format
        const formattedData = data.filter((item)=>item.label) // Remove empty labels
        .map((item)=>({
                category: item.label,
                value: item.value,
                fill: am5.color(item.color)
            }));
        series.data.setAll(formattedData.splice(0, 10));
        var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
        }));
        legend.data.setAll(series.dataItems);
        series.appear(1000, 100);
    }).catch((error)=>console.error("Error fetching data:", error));
});
//Top Error//
document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("machinetroble");
    let markup = `
    <div class="machine-divtech">
      <h3>Top error</h3>
      <div class="machine-div-childtech">
        <h5 class="average-bordertech active2">This Month</h5>
        <h5 class="average-bordertechweek">This Week</h5>
      </div>
    </div>
    <div class="navbar-line-cardtech"></div>
    <h2 class="healthy-h2tech"></h2>
    <div class="tsub">
      <h3 class="occur"></h3>
      <button class="troublebtn">Troubleshoot</button>
    </div>
  `;
    container.insertAdjacentHTML("beforeend", markup);
    let flow1 = document.querySelector(".healthy-h2tech");
    let occur = document.querySelector(".occur");
    let progressBar = document.createElement("div");
    progressBar.id = "loading-progress-bar";
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.width = "0%";
    progressBar.style.height = "2px";
    progressBar.style.backgroundColor = "white";
    progressBar.style.zIndex = 9999;
    progressBar.style.transition = "width 0.1s ease-in-out";
    // document.html.appendChild(progressBar);
    let periodMap = {
        this_week: "top_error_this_week",
        this_month: "top_error_this_month"
    };
    machinet("this_month", document.querySelector(".average-bordertech"));
    async function machinet(period, clickedElement) {
        let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;
        progressBar.style.width = "10%";
        let interval = setInterval(()=>{
            if (parseFloat(progressBar.style.width) < 90) progressBar.style.width = `${parseFloat(progressBar.style.width) + 10}%`;
        }, 300);
        try {
            let response = await fetch(apiUrl, {
                headers: (0, _headersJs.commonHeaders)
            });
            let data = await response.json();
            // Update UI
            flow1.textContent = `${data.error}`;
            occur.textContent = `(${data.count} occurrences)`;
            // Toggle active state
            document.querySelectorAll(".machine-div-childtech h5").forEach((el)=>el.classList.remove("active2"));
            clickedElement.classList.add("active2");
            progressBar.style.width = "100%";
            setTimeout(()=>{
                progressBar.style.width = "0%";
            }, 500);
        } catch (error) {
            console.error("Error fetching coffee data:", error);
            flow1.textContent = "Error loading data";
            progressBar.style.width = "0%";
        }
    }
    document.querySelector(".average-bordertechweek").addEventListener("click", function() {
        machinet("this_week", this);
    });
    document.querySelector(".average-bordertech").addEventListener("click", function() {
        machinet("this_month", this);
    });
});
// Last error - Realtime//
let container = document.getElementById("errorrealtime");
async function toperror() {
    try {
        const response = await fetch("https://ccdev.scanomat.com/rest/dashboard/error/search?groupid=-1", {
            method: "POST",
            headers: (0, _headersJs.commonHeaders),
            body: JSON.stringify({
                criteria: {},
                sort: {
                    "timestamp.milliseconds": "desc"
                },
                offset: 0,
                limit: 1,
                count: false
            })
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        if (data && data.result && data.result.length > 0) {
            const errorEntry = data.result[0];
            const machineName = errorEntry.machineName;
            const errorText = errorEntry.error;
            const timestamp = errorEntry.timestamp?.milliseconds;
            let timeAgo = "HAHAHA";
            if (timestamp) {
                const now = Date.now();
                const diffMs = now - timestamp;
                const diffHours = Math.floor(diffMs / 3600000);
                const diffMinutes = Math.floor(diffMs / 60000) % 60;
                if (diffHours >= 1) timeAgo = `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
                else timeAgo = `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
            }
            const markup = `
      <div class="machine-divtech">
      <h3>Last error - Realtime</h3>
      <div class="machine-div-childtech">
        <a id="notifyToggle"><ion-icon name="notifications-off" class="icon-infobelltech"></ion-icon></a>
        <h5 class="average-borderteche">Last Error</h5>
      </div>
    </div>
    
    <div class="navbar-line-card"></div>
    
    <h2 class="daystech">${errorText}<span class="piston">${timeAgo}</span></h2>
    <div class="tsub">
      <h4 class="machname">${machineName}</h4>
      <button class="trouble-btn">Troubleshoot</button>
    </div>
      `;
            container.insertAdjacentHTML("beforeend", markup);
        } else container.innerHTML = `<p>No error data found.</p>`;
    } catch (error) {
        console.error("Error fetching data:", error);
        container.innerHTML = `<p>Error loading top error.</p>`;
    }
}
toperror();
//No of errors - Realtime//
document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("totalerrors");
    let markup = `
     <div class="machine-div-sptech">
      <h3>No of errors</h3>
      <div class="machine-div-childtech">
      <h5 class="card-3tech active3">Today</h5>
        <h5 class="card-4tech">This Week</h5>
      </div>
      </div>
      <div class="navbar-line-card"></div>
      <h2 class = "errornumber">57</h2>
    <p class="arrowtech">-578.53% &#8628;</p>
  `;
    container.insertAdjacentHTML("beforeend", markup);
    let errornumber = document.querySelector(".errornumber");
    let arrowtech = document.querySelector(".arrowtech");
    let progressBar = document.createElement("div");
    progressBar.id = "loading-progress-bar";
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.width = "0%";
    progressBar.style.height = "2px";
    progressBar.style.backgroundColor = "white";
    progressBar.style.zIndex = 9999;
    progressBar.style.transition = "width 0.1s ease-in-out";
    // document.html.appendChild(progressBar);
    let periodMap = {
        Today: "number_of_errors_today",
        Week: "number_of_errors_this_week"
    };
    machinet("Today", document.querySelector(".card-3tech"));
    async function machinet(period, clickedElement) {
        let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;
        progressBar.style.width = "10%";
        let interval = setInterval(()=>{
            if (parseFloat(progressBar.style.width) < 90) progressBar.style.width = `${parseFloat(progressBar.style.width) + 10}%`;
        }, 300);
        try {
            let response = await fetch(apiUrl, {
                headers: (0, _headersJs.commonHeaders)
            });
            let data = await response.json();
            // Update UI
            errornumber.textContent = `${data.totalErrors}`;
            arrowtech.textContent = `${data.percentage}`;
            // Toggle active state
            document.querySelectorAll(".machine-div-childtech h5").forEach((el)=>el.classList.remove("active3"));
            clickedElement.classList.add("active3");
            progressBar.style.width = "100%";
            setTimeout(()=>{
                progressBar.style.width = "0%";
            }, 500);
        } catch (error) {
            console.error("Error fetching coffee data:", error);
            flow.textContent = "Error loading data";
            progressBar.style.width = "0%";
        }
    }
    document.querySelector(".card-3tech").addEventListener("click", function() {
        machinet("Today", this);
    });
    document.querySelector(".card-4tech").addEventListener("click", function() {
        machinet("Week", this);
    });
});
//No of realtime errors//
const noofcupsrealtimetech = document.querySelector(".no-of-cups-realtimetech");
async function fetchTotalcups() {
    try {
        const response = await fetch("https://ccdev.scanomat.com/rest/dashboard/number_of_errors_this_month?groupid=-1&offset=-330", {
            headers: (0, _headersJs.commonHeaders)
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        //   console.log(data);
        const markup = `<h2 class="realtimeerrors">${data.totalErrors}</h2>`;
        noofcupsrealtimetech.insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.error("Error fetching data:", error);
    //   document.getElementById("cupCount").textContent = "Error!";
    }
}
fetchTotalcups();
//No of errors//
document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("totalerrorrr");
    let markup = `
    <div class="machine-divtech">
    <h3>No of errors - Realtime</h3>
    <div class="machine-div-childtech">
    <h5 class="average-bordertechh">This Year</h5>
    <h5 class="average-bordertechweekk">Total</h5>
    </div>
    </div>
    <div class="navbar-line-cardtech"></div>
    <h2 class="healthy-h2-cupstech"></h2>
  `;
    container.insertAdjacentHTML("beforeend", markup);
    let totalerr = document.querySelector(".healthy-h2-cupstech");
    // let arrowtech = document.querySelector(".arrowtech");
    let progressBar = document.createElement("div");
    progressBar.id = "loading-progress-bar";
    progressBar.style.position = "fixed";
    progressBar.style.top = "0";
    progressBar.style.left = "0";
    progressBar.style.width = "0%";
    progressBar.style.height = "2px";
    progressBar.style.backgroundColor = "white";
    progressBar.style.zIndex = 9999;
    progressBar.style.transition = "width 0.1s ease-in-out";
    // document.html.appendChild(progressBar);
    let periodMap = {
        This_year: "number_of_errors_this_year",
        Total: "number_of_errors_this_year"
    };
    machinet("This_year", document.querySelector(".average-bordertechh"));
    async function machinet(period, clickedElement) {
        let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;
        progressBar.style.width = "10%";
        let interval = setInterval(()=>{
            if (parseFloat(progressBar.style.width) < 90) progressBar.style.width = `${parseFloat(progressBar.style.width) + 10}%`;
        }, 300);
        try {
            let response = await fetch(apiUrl, {
                headers: (0, _headersJs.commonHeaders)
            });
            let data = await response.json();
            totalerr.textContent = `${data.totalErrors}`;
            document.querySelectorAll(".machine-div-childtech h5").forEach((el)=>el.classList.remove("active4"));
            clickedElement.classList.add("active4");
            progressBar.style.width = "100%";
            setTimeout(()=>{
                progressBar.style.width = "0%";
            }, 500);
        } catch (error) {
            console.error("Error fetching coffee data:", error);
            totalerr.textContent = "Error loading data";
            progressBar.style.width = "0%";
        }
    }
    document.querySelector(".average-bordertechh").addEventListener("click", function() {
        machinet("This_year", this);
    });
    document.querySelector(".average-bordertechweekk").addEventListener("click", function() {
        machinet("Total", this);
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const tableBody = document.getElementById("table-body");
    const paginationDiv = document.getElementById("pagination-controls");
    const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/top_machine_errors?groupid=-1";
    const commonHeaders = {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwianRpIjoiNTk0ZTU5N2FmYTRmOGMwMDAxMDJjMzg4IiwiYXV0aCI6IkFETUlOLEFQSV9BQ0NFU1MsQlVTSU5FU1NfTU9ERUwsQ0xJRU5ULENPRkZFRV9BU19BX1NFUlZJQ0VfQVVTVFJBTElBLENPRkZFRV9BU19BX1NFUlZJQ0VfREssQ09GRkVFX0FTX0FfU0VSVklDRV9LVVdBSVQsQ09GRkVFX0VYVEVSTkFMLEdFTkVSQUwsSU5TSUdIVFNfREFUQSxTQ0FOT01BVF9BRE1JTixTQ1RfREVWLFNVUEVSLVVTRVIsVEVDSE5JQ0FMLFRFU1RJTkcsVU5BU1NJR05FRF9BQ0NFU1MsVVNFUiIsImV4cCI6MTc0ODY5MTczMX0.uePXpSnYG5cVd3wx4lNwO332BmF7V7zOK_Ipo_ajNzs"
    };
    let currentPage = 1;
    const limit = 10;
    let totalCount = 0;
    function formatDate(milliseconds) {
        const date = new Date(milliseconds);
        return date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });
    }
    function renderPagination() {
        const totalPages = Math.ceil(totalCount / limit);
        paginationDiv.innerHTML = "";
        const createButton = (text, page, isDisabled = false)=>{
            const btn = document.createElement("button");
            btn.textContent = text;
            btn.classList.add("pagination-btn");
            if (page === currentPage && ![
                "First",
                "Previous",
                "Next",
                "Last"
            ].includes(text)) btn.classList.add("activepag");
            if (isDisabled) {
                btn.disabled = true;
                btn.classList.add("disabled");
            } else btn.addEventListener("click", ()=>{
                currentPage = page;
                fetchTableData();
            });
            return btn;
        };
        // Always show First and Previous 
        paginationDiv.appendChild(createButton("First", 1, currentPage === 1));
        paginationDiv.appendChild(createButton("Previous", currentPage - 1, currentPage === 1));
        // Numbered buttons
        for(let i = 1; i <= totalPages; i++)paginationDiv.appendChild(createButton(i, i));
        // Always show Next and Last 
        paginationDiv.appendChild(createButton("Next", currentPage + 1, currentPage === totalPages));
        paginationDiv.appendChild(createButton("Last", totalPages, currentPage === totalPages));
    }
    async function fetchTableData() {
        const offset = (currentPage - 1) * limit;
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: commonHeaders,
                body: JSON.stringify({
                    criteria: {},
                    sort: {
                        "timestamp.milliseconds": "desc"
                    },
                    offset: offset,
                    limit: limit,
                    count: true
                })
            });
            const data = await response.json();
            totalCount = data.count || 0;
            tableBody.innerHTML = "";
            if (!data.result || !Array.isArray(data.result)) throw new Error("Unexpected API response format");
            data.result.forEach((item)=>{
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                nameCell.textContent = item.machineName || "Unknown";
                const errorCell = document.createElement("td");
                errorCell.textContent = item.errorsCountMap?.[0]?.error || "N/A";
                const countCell = document.createElement("td");
                countCell.textContent = item.errorsCountMap?.[0]?.count || "0";
                const totalCell = document.createElement("td");
                totalCell.textContent = item.totalCount || "0";
                const dateCell = document.createElement("td");
                dateCell.textContent = formatDate(item.timestamp.milliseconds);
                row.append(nameCell, errorCell, countCell, totalCell, dateCell);
                tableBody.appendChild(row);
            });
            renderPagination();
        } catch (error) {
            console.error("Error fetching table data:", error);
        }
    }
    fetchTableData();
});
document.addEventListener("DOMContentLoaded", function() {
    const troubleshootBtn = document.querySelector(".troublebtn");
    const modalOverlay = document.getElementById("modal-overlay");
    const closeModal = document.getElementById("close-modal");
    troubleshootBtn.addEventListener("click", ()=>{
        modalOverlay.style.display = "flex";
    });
    closeModal.addEventListener("click", ()=>{
        modalOverlay.style.display = "none";
    });
    modalOverlay.addEventListener("click", (e)=>{
        if (e.target === modalOverlay) modalOverlay.style.display = "none";
    });
});
document.addEventListener("click", function() {
    const troubleshootBtnsec = document.querySelector(".trouble-btn");
    const modalOverlaysec = document.getElementById("modal-overlaysec");
    const closeModalsec = document.getElementById("close-modalsec");
    troubleshootBtnsec.addEventListener("click", ()=>{
        modalOverlaysec.style.display = "flex";
    });
    closeModalsec.addEventListener("click", ()=>{
        modalOverlaysec.style.display = "none";
    });
    modalOverlaysec.addEventListener("click", (e)=>{
        if (e.target === modalOverlaysec) modalOverlaysec.style.display = "none";
    });
});
document.addEventListener("click", ()=>{
    const icon = document.querySelector(".icon-infobelltech");
    const modal = document.getElementById("notificationModal");
    const closeBtn = document.getElementById("closeModal");
    let modalVisible = false;
    document.getElementById("notifyToggle").addEventListener("click", ()=>{
        modalVisible = !modalVisible;
        if (modalVisible) {
            modal.style.display = "flex";
            icon.setAttribute("name", "notifications");
        } else {
            modal.style.display = "none";
            icon.setAttribute("name", "notifications-off");
        }
    });
    closeBtn.addEventListener("click", ()=>{
        modal.style.display = "none";
        icon.setAttribute("name", "notifications");
        modalVisible = false;
    });
    modal.addEventListener("click", (e)=>{
        if (e.target === modal) {
            modal.style.display = "none";
            icon.setAttribute("name", "notifications");
            modalVisible = false;
        }
    });
});

},{"./headers.js":"9Rryj"}]},["1zY5r","b7W5s"], "b7W5s", "parcelRequire3a11")

//# sourceMappingURL=CoffeeCloud.2cf0b734.js.map

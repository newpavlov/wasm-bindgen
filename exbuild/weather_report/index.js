/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\n__webpack_require__.e(/*! import() */ \"pkg_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./pkg */ \"./pkg/index.js\"))\n    .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading wasm modules
/******/ 		var installedWasmModules = {};
/******/ 		
/******/ 		function promiseResolve() { return Promise.resolve(); }
/******/ 		
/******/ 		var wasmImportedFuncCache0;
/******/ 		var wasmImportedFuncCache1;
/******/ 		var wasmImportedFuncCache2;
/******/ 		var wasmImportedFuncCache3;
/******/ 		var wasmImportedFuncCache4;
/******/ 		var wasmImportedFuncCache5;
/******/ 		var wasmImportedFuncCache6;
/******/ 		var wasmImportedFuncCache7;
/******/ 		var wasmImportedFuncCache8;
/******/ 		var wasmImportedFuncCache9;
/******/ 		var wasmImportedFuncCache10;
/******/ 		var wasmImportedFuncCache11;
/******/ 		var wasmImportedFuncCache12;
/******/ 		var wasmImportedFuncCache13;
/******/ 		var wasmImportedFuncCache14;
/******/ 		var wasmImportedFuncCache15;
/******/ 		var wasmImportedFuncCache16;
/******/ 		var wasmImportedFuncCache17;
/******/ 		var wasmImportedFuncCache18;
/******/ 		var wasmImportedFuncCache19;
/******/ 		var wasmImportedFuncCache20;
/******/ 		var wasmImportedFuncCache21;
/******/ 		var wasmImportedFuncCache22;
/******/ 		var wasmImportedFuncCache23;
/******/ 		var wasmImportedFuncCache24;
/******/ 		var wasmImportedFuncCache25;
/******/ 		var wasmImportedFuncCache26;
/******/ 		var wasmImportedFuncCache27;
/******/ 		var wasmImportedFuncCache28;
/******/ 		var wasmImportedFuncCache29;
/******/ 		var wasmImportedFuncCache30;
/******/ 		var wasmImportedFuncCache31;
/******/ 		var wasmImportedFuncCache32;
/******/ 		var wasmImportedFuncCache33;
/******/ 		var wasmImportedFuncCache34;
/******/ 		var wasmImportedFuncCache35;
/******/ 		var wasmImportedFuncCache36;
/******/ 		var wasmImportedFuncCache37;
/******/ 		var wasmImportedFuncCache38;
/******/ 		var wasmImportedFuncCache39;
/******/ 		var wasmImportedFuncCache40;
/******/ 		var wasmImportedFuncCache41;
/******/ 		var wasmImportedFuncCache42;
/******/ 		var wasmImportedFuncCache43;
/******/ 		var wasmImportedFuncCache44;
/******/ 		var wasmImportedFuncCache45;
/******/ 		var wasmImportedFuncCache46;
/******/ 		var wasmImportedFuncCache47;
/******/ 		var wasmImportedFuncCache48;
/******/ 		var wasmImportedFuncCache49;
/******/ 		var wasmImportedFuncCache50;
/******/ 		var wasmImportedFuncCache51;
/******/ 		var wasmImportedFuncCache52;
/******/ 		var wasmImportedFuncCache53;
/******/ 		var wasmImportedFuncCache54;
/******/ 		var wasmImportedFuncCache55;
/******/ 		var wasmImportedFuncCache56;
/******/ 		var wasmImportedFuncCache57;
/******/ 		var wasmImportedFuncCache58;
/******/ 		var wasmImportedFuncCache59;
/******/ 		var wasmImportedFuncCache60;
/******/ 		var wasmImportedFuncCache61;
/******/ 		var wasmImportedFuncCache62;
/******/ 		var wasmImportedFuncCache63;
/******/ 		var wasmImportedFuncCache64;
/******/ 		var wasmImportedFuncCache65;
/******/ 		var wasmImportedFuncCache66;
/******/ 		var wasmImportedFuncCache67;
/******/ 		var wasmImportedFuncCache68;
/******/ 		var wasmImportedFuncCache69;
/******/ 		var wasmImportedFuncCache70;
/******/ 		var wasmImportedFuncCache71;
/******/ 		var wasmImportedFuncCache72;
/******/ 		var wasmImportedFuncCache73;
/******/ 		var wasmImportObjects = {
/******/ 			"./pkg/index_bg.wasm": function() {
/******/ 				return {
/******/ 					"./index_bg.js": {
/******/ 						"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_string_get"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbindgen_object_clone_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_cb_drop": function(p0i32) {
/******/ 							if(wasmImportedFuncCache3 === undefined) wasmImportedFuncCache3 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache3["__wbindgen_cb_drop"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_undefined": function(p0i32) {
/******/ 							if(wasmImportedFuncCache4 === undefined) wasmImportedFuncCache4 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache4["__wbindgen_is_undefined"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_object": function(p0i32) {
/******/ 							if(wasmImportedFuncCache5 === undefined) wasmImportedFuncCache5 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache5["__wbindgen_is_object"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache6 === undefined) wasmImportedFuncCache6 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache6["__wbindgen_string_new"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_fetch_f8d735ba6fe1b719": function(p0i32) {
/******/ 							if(wasmImportedFuncCache7 === undefined) wasmImportedFuncCache7 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache7["__wbg_fetch_f8d735ba6fe1b719"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_is_function": function(p0i32) {
/******/ 							if(wasmImportedFuncCache8 === undefined) wasmImportedFuncCache8 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache8["__wbindgen_is_function"](p0i32);
/******/ 						},
/******/ 						"__wbg_queueMicrotask_f94325d4468bfb98": function(p0i32) {
/******/ 							if(wasmImportedFuncCache9 === undefined) wasmImportedFuncCache9 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache9["__wbg_queueMicrotask_f94325d4468bfb98"](p0i32);
/******/ 						},
/******/ 						"__wbg_queueMicrotask_e7bd49216a137e8f": function(p0i32) {
/******/ 							if(wasmImportedFuncCache10 === undefined) wasmImportedFuncCache10 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache10["__wbg_queueMicrotask_e7bd49216a137e8f"](p0i32);
/******/ 						},
/******/ 						"__wbg_instanceof_HtmlInputElement_bde63bddce063fdd": function(p0i32) {
/******/ 							if(wasmImportedFuncCache11 === undefined) wasmImportedFuncCache11 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache11["__wbg_instanceof_HtmlInputElement_bde63bddce063fdd"](p0i32);
/******/ 						},
/******/ 						"__wbg_value_c9a4963ef86bf039": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache12 === undefined) wasmImportedFuncCache12 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache12["__wbg_value_c9a4963ef86bf039"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_signal_719f6b202ad6128b": function(p0i32) {
/******/ 							if(wasmImportedFuncCache13 === undefined) wasmImportedFuncCache13 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache13["__wbg_signal_719f6b202ad6128b"](p0i32);
/******/ 						},
/******/ 						"__wbg_new_b3239d1070cf8f8c": function() {
/******/ 							if(wasmImportedFuncCache14 === undefined) wasmImportedFuncCache14 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache14["__wbg_new_b3239d1070cf8f8c"]();
/******/ 						},
/******/ 						"__wbg_abort_27bffd6ebfab350d": function(p0i32) {
/******/ 							if(wasmImportedFuncCache15 === undefined) wasmImportedFuncCache15 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache15["__wbg_abort_27bffd6ebfab350d"](p0i32);
/******/ 						},
/******/ 						"__wbg_fetch_6fe60936de1f9aa4": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache16 === undefined) wasmImportedFuncCache16 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache16["__wbg_fetch_6fe60936de1f9aa4"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_instanceof_Response_de0e73171a8bc5d7": function(p0i32) {
/******/ 							if(wasmImportedFuncCache17 === undefined) wasmImportedFuncCache17 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache17["__wbg_instanceof_Response_de0e73171a8bc5d7"](p0i32);
/******/ 						},
/******/ 						"__wbg_url_8d249cb38ffef7eb": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache18 === undefined) wasmImportedFuncCache18 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache18["__wbg_url_8d249cb38ffef7eb"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_status_1555eb2cc1b1085c": function(p0i32) {
/******/ 							if(wasmImportedFuncCache19 === undefined) wasmImportedFuncCache19 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache19["__wbg_status_1555eb2cc1b1085c"](p0i32);
/******/ 						},
/******/ 						"__wbg_headers_c48a019b536eea64": function(p0i32) {
/******/ 							if(wasmImportedFuncCache20 === undefined) wasmImportedFuncCache20 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache20["__wbg_headers_c48a019b536eea64"](p0i32);
/******/ 						},
/******/ 						"__wbg_text_7836b85fa04b25b1": function(p0i32) {
/******/ 							if(wasmImportedFuncCache21 === undefined) wasmImportedFuncCache21 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache21["__wbg_text_7836b85fa04b25b1"](p0i32);
/******/ 						},
/******/ 						"__wbg_instanceof_Window_1ac2dc052444278b": function(p0i32) {
/******/ 							if(wasmImportedFuncCache22 === undefined) wasmImportedFuncCache22 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache22["__wbg_instanceof_Window_1ac2dc052444278b"](p0i32);
/******/ 						},
/******/ 						"__wbg_document_d405a2b2abd26aaf": function(p0i32) {
/******/ 							if(wasmImportedFuncCache23 === undefined) wasmImportedFuncCache23 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache23["__wbg_document_d405a2b2abd26aaf"](p0i32);
/******/ 						},
/******/ 						"__wbg_body_3b7f74ebdd47855a": function(p0i32) {
/******/ 							if(wasmImportedFuncCache24 === undefined) wasmImportedFuncCache24 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache24["__wbg_body_3b7f74ebdd47855a"](p0i32);
/******/ 						},
/******/ 						"__wbg_createElement_4380c5d2cd930ece": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache25 === undefined) wasmImportedFuncCache25 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache25["__wbg_createElement_4380c5d2cd930ece"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_getElementById_525880422441509b": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache26 === undefined) wasmImportedFuncCache26 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache26["__wbg_getElementById_525880422441509b"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_newwithstrandinit_491dcca28d02ec1f": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache27 === undefined) wasmImportedFuncCache27 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache27["__wbg_newwithstrandinit_491dcca28d02ec1f"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_new_c784788943996281": function() {
/******/ 							if(wasmImportedFuncCache28 === undefined) wasmImportedFuncCache28 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache28["__wbg_new_c784788943996281"]();
/******/ 						},
/******/ 						"__wbg_append_75c5cce868c2dd9a": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache29 === undefined) wasmImportedFuncCache29 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache29["__wbg_append_75c5cce868c2dd9a"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_setid_88ada738d62ed18a": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache30 === undefined) wasmImportedFuncCache30 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache30["__wbg_setid_88ada738d62ed18a"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setclassName_e5205b616bcc84af": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache31 === undefined) wasmImportedFuncCache31 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache31["__wbg_setclassName_e5205b616bcc84af"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setinnerHTML_51a946f38f867aeb": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache32 === undefined) wasmImportedFuncCache32 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache32["__wbg_setinnerHTML_51a946f38f867aeb"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setAttribute_dc32316921240878": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache33 === undefined) wasmImportedFuncCache33 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache33["__wbg_setAttribute_dc32316921240878"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_setcapture_89f8f8aa41fbf447": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache34 === undefined) wasmImportedFuncCache34 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache34["__wbg_setcapture_89f8f8aa41fbf447"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setonce_08955a31e0874146": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache35 === undefined) wasmImportedFuncCache35 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache35["__wbg_setonce_08955a31e0874146"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setpassive_2e504d2abef8e3fa": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache36 === undefined) wasmImportedFuncCache36 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache36["__wbg_setpassive_2e504d2abef8e3fa"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_addEventListener_2242ba057d15b477": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache37 === undefined) wasmImportedFuncCache37 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache37["__wbg_addEventListener_2242ba057d15b477"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_removeEventListener_9b478e4cf0deba1f": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 							if(wasmImportedFuncCache38 === undefined) wasmImportedFuncCache38 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache38["__wbg_removeEventListener_9b478e4cf0deba1f"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 						},
/******/ 						"__wbg_appendChild_57151f4a5757b5d3": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache39 === undefined) wasmImportedFuncCache39 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache39["__wbg_appendChild_57151f4a5757b5d3"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setbody_b2bbe20275c4303f": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache40 === undefined) wasmImportedFuncCache40 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache40["__wbg_setbody_b2bbe20275c4303f"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setcredentials_cd35c7e6a6c34649": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache41 === undefined) wasmImportedFuncCache41 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache41["__wbg_setcredentials_cd35c7e6a6c34649"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setheaders_9cf16292be6530ca": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache42 === undefined) wasmImportedFuncCache42 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache42["__wbg_setheaders_9cf16292be6530ca"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setmethod_bfe6efdb72efe370": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache43 === undefined) wasmImportedFuncCache43 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache43["__wbg_setmethod_bfe6efdb72efe370"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_setmode_6c2145a216392554": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache44 === undefined) wasmImportedFuncCache44 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache44["__wbg_setmode_6c2145a216392554"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_setsignal_f91ca900216d46a1": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache45 === undefined) wasmImportedFuncCache45 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache45["__wbg_setsignal_f91ca900216d46a1"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_get_66a21b430ee60e21": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache46 === undefined) wasmImportedFuncCache46 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache46["__wbg_get_66a21b430ee60e21"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_has_59fa6f043275d55b": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache47 === undefined) wasmImportedFuncCache47 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache47["__wbg_has_59fa6f043275d55b"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_newnoargs_7e07f6df0249a9eb": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache48 === undefined) wasmImportedFuncCache48 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache48["__wbg_newnoargs_7e07f6df0249a9eb"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_call_80a29cc8c56c2fdb": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache49 === undefined) wasmImportedFuncCache49 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache49["__wbg_call_80a29cc8c56c2fdb"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_next_5031b23d01a57e43": function(p0i32) {
/******/ 							if(wasmImportedFuncCache50 === undefined) wasmImportedFuncCache50 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache50["__wbg_next_5031b23d01a57e43"](p0i32);
/******/ 						},
/******/ 						"__wbg_next_cf85472bdc45991c": function(p0i32) {
/******/ 							if(wasmImportedFuncCache51 === undefined) wasmImportedFuncCache51 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache51["__wbg_next_cf85472bdc45991c"](p0i32);
/******/ 						},
/******/ 						"__wbg_done_29eaeae360b599f0": function(p0i32) {
/******/ 							if(wasmImportedFuncCache52 === undefined) wasmImportedFuncCache52 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache52["__wbg_done_29eaeae360b599f0"](p0i32);
/******/ 						},
/******/ 						"__wbg_value_2ab39ab86cd116c8": function(p0i32) {
/******/ 							if(wasmImportedFuncCache53 === undefined) wasmImportedFuncCache53 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache53["__wbg_value_2ab39ab86cd116c8"](p0i32);
/******/ 						},
/******/ 						"__wbg_new_1eeda863d3a41cf5": function() {
/******/ 							if(wasmImportedFuncCache54 === undefined) wasmImportedFuncCache54 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache54["__wbg_new_1eeda863d3a41cf5"]();
/******/ 						},
/******/ 						"__wbg_iterator_0c8ef9b10b7765c3": function() {
/******/ 							if(wasmImportedFuncCache55 === undefined) wasmImportedFuncCache55 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache55["__wbg_iterator_0c8ef9b10b7765c3"]();
/******/ 						},
/******/ 						"__wbg_resolve_ecc967b39a4b6b09": function(p0i32) {
/******/ 							if(wasmImportedFuncCache56 === undefined) wasmImportedFuncCache56 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache56["__wbg_resolve_ecc967b39a4b6b09"](p0i32);
/******/ 						},
/******/ 						"__wbg_then_10f914213a99bdb1": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache57 === undefined) wasmImportedFuncCache57 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache57["__wbg_then_10f914213a99bdb1"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbg_then_755ea748c050e40d": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache58 === undefined) wasmImportedFuncCache58 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache58["__wbg_then_755ea748c050e40d"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_globalThis_6b6371664ea861fe": function() {
/******/ 							if(wasmImportedFuncCache59 === undefined) wasmImportedFuncCache59 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache59["__wbg_globalThis_6b6371664ea861fe"]();
/******/ 						},
/******/ 						"__wbg_self_8304bf00151027a6": function() {
/******/ 							if(wasmImportedFuncCache60 === undefined) wasmImportedFuncCache60 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache60["__wbg_self_8304bf00151027a6"]();
/******/ 						},
/******/ 						"__wbg_window_d3fc43f882d25ed3": function() {
/******/ 							if(wasmImportedFuncCache61 === undefined) wasmImportedFuncCache61 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache61["__wbg_window_d3fc43f882d25ed3"]();
/******/ 						},
/******/ 						"__wbg_global_ed77f1e27d7c7877": function() {
/******/ 							if(wasmImportedFuncCache62 === undefined) wasmImportedFuncCache62 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache62["__wbg_global_ed77f1e27d7c7877"]();
/******/ 						},
/******/ 						"__wbg_new_95baebca658ce8c4": function(p0i32) {
/******/ 							if(wasmImportedFuncCache63 === undefined) wasmImportedFuncCache63 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache63["__wbg_new_95baebca658ce8c4"](p0i32);
/******/ 						},
/******/ 						"__wbg_newwithbyteoffsetandlength_a25c83fc00c2d030": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache64 === undefined) wasmImportedFuncCache64 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache64["__wbg_newwithbyteoffsetandlength_a25c83fc00c2d030"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbg_buffer_458fe41b6715a3b0": function(p0i32) {
/******/ 							if(wasmImportedFuncCache65 === undefined) wasmImportedFuncCache65 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache65["__wbg_buffer_458fe41b6715a3b0"](p0i32);
/******/ 						},
/******/ 						"__wbg_stringify_759680f7c849ea6b": function(p0i32) {
/******/ 							if(wasmImportedFuncCache66 === undefined) wasmImportedFuncCache66 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache66["__wbg_stringify_759680f7c849ea6b"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 							if(wasmImportedFuncCache67 === undefined) wasmImportedFuncCache67 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache67["__wbindgen_object_drop_ref"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache68 === undefined) wasmImportedFuncCache68 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache68["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache69 === undefined) wasmImportedFuncCache69 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache69["__wbindgen_throw"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_rethrow": function(p0i32) {
/******/ 							if(wasmImportedFuncCache70 === undefined) wasmImportedFuncCache70 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache70["__wbindgen_rethrow"](p0i32);
/******/ 						},
/******/ 						"__wbindgen_memory": function() {
/******/ 							if(wasmImportedFuncCache71 === undefined) wasmImportedFuncCache71 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache71["__wbindgen_memory"]();
/******/ 						},
/******/ 						"__wbindgen_closure_wrapper920": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache72 === undefined) wasmImportedFuncCache72 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache72["__wbindgen_closure_wrapper920"](p0i32,p1i32,p2i32);
/******/ 						},
/******/ 						"__wbindgen_closure_wrapper1672": function(p0i32,p1i32,p2i32) {
/******/ 							if(wasmImportedFuncCache73 === undefined) wasmImportedFuncCache73 = __webpack_require__.c["./pkg/index_bg.js"].exports;
/******/ 							return wasmImportedFuncCache73["__wbindgen_closure_wrapper1672"](p0i32,p1i32,p2i32);
/******/ 						}
/******/ 					},
/******/ 					"./snippets/rust-webassembly-weather-reports-7e815c9c0f487b6a/util.js": {
/******/ 						"initialize": function(p0f64,p1f64) {
/******/ 							if(wasmImportedFuncCache2 === undefined) wasmImportedFuncCache2 = __webpack_require__.c["./pkg/snippets/rust-webassembly-weather-reports-7e815c9c0f487b6a/util.js"].exports;
/******/ 							return wasmImportedFuncCache2["initialize"](p0f64,p1f64);
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"pkg_index_js": [
/******/ 				"./pkg/index_bg.wasm"
/******/ 			]
/******/ 		};
/******/ 		
/******/ 		// object with all WebAssembly.instance exports
/******/ 		__webpack_require__.w = {};
/******/ 		
/******/ 		// Fetch + compile chunk loading for webassembly
/******/ 		__webpack_require__.f.wasm = function(chunkId, promises) {
/******/ 		
/******/ 			var wasmModules = wasmModuleMap[chunkId] || [];
/******/ 		
/******/ 			wasmModules.forEach(function(wasmModuleId, idx) {
/******/ 				var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/ 		
/******/ 				// a Promise means "currently loading" or "already loaded".
/******/ 				if(installedWasmModuleData)
/******/ 					promises.push(installedWasmModuleData);
/******/ 				else {
/******/ 					var importObject = wasmImportObjects[wasmModuleId]();
/******/ 					var req = fetch(__webpack_require__.p + "" + {"pkg_index_js":{"./pkg/index_bg.wasm":"213d5c809411387a87a9"}}[chunkId][wasmModuleId] + ".module.wasm");
/******/ 					var promise;
/******/ 					if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {
/******/ 						promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 							return WebAssembly.instantiate(items[0], items[1]);
/******/ 						});
/******/ 					} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 						promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 					} else {
/******/ 						var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 						promise = bytesPromise.then(function(bytes) {
/******/ 							return WebAssembly.instantiate(bytes, importObject);
/******/ 						});
/******/ 					}
/******/ 					promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 						return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 					}));
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
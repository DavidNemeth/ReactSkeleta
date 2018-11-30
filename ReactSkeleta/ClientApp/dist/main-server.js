(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot-server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Globals.ts":
/*!******************************!*\
  !*** ./ClientApp/Globals.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var NSerializeJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! NSerializeJson */ "./node_modules/NSerializeJson/dist/cjs/index.js");
/* harmony import */ var NSerializeJson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(NSerializeJson__WEBPACK_IMPORTED_MODULE_0__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


/**
 * Contains global isomorphic session.
 */

var Globals =
/** @class */
function () {
  function Globals() {}

  Globals.reset = function () {
    this.isInitialized = false;
    this.data = {};
  };

  Globals.init = function (data) {
    if (this.isInitialized) {
      throw Error("Globals is already initialized.");
    }

    this.data = data || {
      public: {},
      private: {}
    };
    this.isInitialized = true; // Use dot notation in name of the form inputs.

    NSerializeJson__WEBPACK_IMPORTED_MODULE_0__["NSerializeJson"].options.useDotSeparatorInPath = true;
  };

  Globals.throwIfNotInitialized = function () {
    if (!this.isInitialized) throw Error("Globals is not initialized. You have to call Session.init before.");
  };

  Globals.getData = function () {
    this.throwIfNotInitialized();
    return this.data;
  };

  Globals.setData = function (data) {
    this.throwIfNotInitialized();
    var oldData = this.data;
    this.data = __assign({}, oldData, data);
  };

  Object.defineProperty(Globals, "serviceUser", {
    get: function () {
      return this.getData().public.serviceUser;
    },
    set: function (serviceUser) {
      this.setData({
        public: {
          serviceUser: serviceUser
        }
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Globals, "isAuthenticated", {
    get: function () {
      return this.serviceUser != null;
    },
    enumerable: true,
    configurable: true
  });
  Globals.isInitialized = false;
  Globals.data = {};
  return Globals;
}();

/* harmony default export */ __webpack_exports__["default"] = (Globals);

/***/ }),

/***/ "./ClientApp/Ui.ts":
/*!*************************!*\
  !*** ./ClientApp/Ui.ts ***!
  \*************************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);


var Ui =
/** @class */
function () {
  function Ui() {}

  Ui.showErrors = function () {
    var messages = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      messages[_i] = arguments[_i];
    }

    messages.forEach(function (x) {
      if (!Array.isArray(x)) {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(x);
      } else {
        x.forEach(function (y) {
          return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(y);
        });
      }
    });
  };

  Ui.showInfo = function (message) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].info(message);
  };

  return Ui;
}();



/***/ }),

/***/ "./ClientApp/boot-server.tsx":
/*!***********************************!*\
  !*** ./ClientApp/boot-server.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aspnet-prerendering */ "./node_modules/aspnet-prerendering/index.js");
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./ClientApp/routes.tsx");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configureStore */ "./ClientApp/configureStore.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_11__);













var renderHelmet = function () {
  var helmetData = react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"].renderStatic();
  var helmetStrings = "";

  for (var key in helmetData) {
    if (helmetData.hasOwnProperty(key)) {
      helmetStrings += helmetData[key].toString();
    }
  }

  return helmetStrings;
};

var createGlobals = function (nodeSession, initialReduxState, helmetStrings) {
  return {
    completedTasks: domain_wait__WEBPACK_IMPORTED_MODULE_11__["completedTasks"],
    nodeSession: nodeSession,
    initialReduxState: initialReduxState,
    helmetStrings: helmetStrings
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__["createServerRenderer"])(function (params) {
  _Globals__WEBPACK_IMPORTED_MODULE_10__["default"].reset();
  _Globals__WEBPACK_IMPORTED_MODULE_10__["default"].init(params.data);
  return new Promise(function (resolve, reject) {
    // Prepare Redux store with in-memory history, and dispatch a navigation event.
    // corresponding to the incoming URL.
    var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash.

    var urlAfterBasename = params.url.substring(basename.length);
    var store = Object(_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(history__WEBPACK_IMPORTED_MODULE_5__["createMemoryHistory"])());
    store.dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["replace"])(urlAfterBasename)); // Prepare an instance of the application and perform an inital render that will
    // cause any async tasks (e.g., data access) to begin.

    var routerContext = {};
    var app = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"], {
      basename: basename,
      context: routerContext,
      location: params.location.path,
      children: _routes__WEBPACK_IMPORTED_MODULE_7__["routes"]
    }));

    var renderApp = function () {
      return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(app);
    };

    renderApp(); // If there's a redirection, just send this information back to the host application.

    if (routerContext.url) {
      resolve({
        redirectUrl: routerContext.url,
        globals: createGlobals(params.data, store.getState(), renderHelmet())
      });
      return;
    } // Once any async tasks are done, we can perform the final render.
    // We also send the redux store state, so the client can continue execution where the server left off.


    params.domainTasks.then(function () {
      resolve({
        html: renderApp(),
        globals: createGlobals(params.data, store.getState(), renderHelmet())
      });
    }, reject); // Also propagate any errors back into the host application.
  });
}));

/***/ }),

/***/ "./ClientApp/components/person/PersonEditor.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/person/PersonEditor.tsx ***!
  \******************************************************/
/*! exports provided: PersonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonEditor", function() { return PersonEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
/* harmony import */ var _Components_shared_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/Input */ "./ClientApp/components/shared/Input.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PersonEditor =
/** @class */
function (_super) {
  __extends(PersonEditor, _super);

  function PersonEditor(props) {
    return _super.call(this, props) || this;
  }

  PersonEditor.prototype.emptyForm = function () {
    if (this.elForm) {
      this.elForm.emptyForm();
    }
  };

  PersonEditor.prototype.componentDidMount = function () {};

  PersonEditor.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      className: "form",
      ref: function (x) {
        return _this.elForm = x;
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
      type: "hidden",
      name: "id",
      defaultValue: (this.props.data.id || 0).toString()
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
      className: "control-label required",
      htmlFor: "person__firstName"
    }, "First name"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      className: "form-control",
      id: "person__firstName",
      name: "firstName",
      "data-value-type": "string",
      "data-val-required": "true",
      "data-msg-required": "First name is required.",
      value: this.props.data.firstName
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
      className: "control-label required",
      htmlFor: "person__lastName"
    }, "Last name"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
      type: "text",
      className: "form-control",
      id: "person__lastName",
      name: "lastName",
      "data-value-type": "string",
      "data-val-required": "true",
      "data-msg-required": "Last name is required.",
      value: this.props.data.lastName
    })));
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a], PersonEditor.prototype, "emptyForm", null);

  return PersonEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./ClientApp/components/shared/AppComponent.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/shared/AppComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * This component contains helpful method which
 * allows you to make "force update" of the stuck elements.
 */

var AppComponent =
/** @class */
function (_super) {
  __extends(AppComponent, _super);

  function AppComponent(props) {
    var _this = _super.call(this, props) || this;
    /**
     * Place it into the "key" attribute of an element.
     */


    _this.renderKey = 0;
    return _this;
  }
  /**
   * Call this if component state is stuck.
   * But you should set the renderKey to the element's attribute.
   */


  AppComponent.prototype.forceUpdate = function () {
    this.renderKey = Math.random();
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a], AppComponent.prototype, "forceUpdate", null);

  return AppComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "./ClientApp/components/shared/AppRoute.tsx":
/*!**************************************************!*\
  !*** ./ClientApp/components/shared/AppRoute.tsx ***!
  \**************************************************/
/*! exports provided: AppRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
};




var AppRoute = function (_a) {
  var Component = _a.component,
      Layout = _a.layout,
      Path = _a.path,
      rest = __rest(_a, ["component", "layout", "path"]);

  var isLoginPath = Path === "/login";

  if (!_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated && !isLoginPath) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
      to: "/login"
    });
  }

  if (_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated && isLoginPath) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"], {
      to: "/"
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Route"], __assign({}, rest, {
    render: function (props) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Layout, null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, __assign({}, props)));
    }
  }));
};

/***/ }),

/***/ "./ClientApp/components/shared/Footer.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Footer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Footer =
/** @class */
function (_super) {
  __extends(Footer, _super);

  function Footer(props) {
    return _super.call(this, props) || this;
  }

  Footer.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
      className: "footer text-center"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "View on ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://github.com/NickMaev/react-core-boilerplate"
    }, "GitHub")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "Copyright (c) 2018 Nikolay Maev"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "https://en.wikipedia.org/wiki/MIT_License"
    }, "MIT License")));
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./ClientApp/components/shared/Form.tsx":
/*!**********************************************!*\
  !*** ./ClientApp/components/shared/Form.tsx ***!
  \**********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var NSerializeJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! NSerializeJson */ "./node_modules/NSerializeJson/dist/cjs/index.js");
/* harmony import */ var NSerializeJson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(NSerializeJson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nval-tippy */ "./node_modules/nval-tippy/dist/cjs/index.js");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nval_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_4__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Form =
/** @class */
function (_super) {
  __extends(Form, _super);

  function Form(props) {
    return _super.call(this, props) || this;
  }

  Form.prototype.isValid = function () {
    return this.validator.isValid();
  };

  Form.prototype.emptyForm = function () {
    Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["emptyForm"])(this.elForm);
  };

  Form.prototype.getData = function () {
    return NSerializeJson__WEBPACK_IMPORTED_MODULE_1__["NSerializeJson"].serializeForm(this.elForm);
  };

  Form.prototype.componentDidMount = function () {
    this.validator = new nval_tippy__WEBPACK_IMPORTED_MODULE_3__["NValTippy"](this.elForm);
  };

  Form.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", __assign({}, this.props, {
      ref: function (x) {
        return _this.elForm = x;
      }
    }), this.props.children);
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a], Form.prototype, "isValid", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a], Form.prototype, "emptyForm", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a], Form.prototype, "getData", null);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./ClientApp/components/shared/Input.tsx":
/*!***********************************************!*\
  !*** ./ClientApp/components/shared/Input.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      value: ""
    };
    return _this;
  }

  Input.prototype.componentWillReceiveProps = function (props) {
    this.setState({
      value: props.value || ""
    });
  };

  Input.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", __assign({}, this.props, {
      value: this.state.value,
      onChange: function (e) {
        return _this.setState({
          value: e.target.value
        });
      }
    }));
  };

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./ClientApp/components/shared/Loader.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Loader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/loader.scss */ "./ClientApp/styles/loader.scss");
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppComponent */ "./ClientApp/components/shared/AppComponent.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Loader =
/** @class */
function (_super) {
  __extends(Loader, _super);

  function Loader(props) {
    return _super.call(this, props) || this;
  }

  Loader.prototype.render = function () {
    var css = {
      "display": "none"
    };

    if (!Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isNode"])()) {
      css = {
        "display": this.props.show ? "block" : "none"
      };
    }

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      key: this.renderKey,
      className: "loader-bg",
      style: css
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle1 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle2 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle3 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle4 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle5 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle6 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle7 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle8 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle9 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle10 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle11 sk-child"
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "sk-circle12 sk-child"
    })));
  };

  return Loader;
}(_Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./ClientApp/components/shared/ModalComponent.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/components/shared/ModalComponent.tsx ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModalComponent =
/** @class */
function (_super) {
  __extends(ModalComponent, _super);

  function ModalComponent(props) {
    return _super.call(this, props) || this;
  }

  ModalComponent.prototype.show = function () {
    this.modalPlugin.show();
  };

  ModalComponent.prototype.hide = function () {
    this.modalPlugin.hide();
  };

  ModalComponent.prototype.componentDidMount = function () {
    var _this = this;

    this.modalPlugin = new bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__["Modal"](this.elModal);

    if (this.props.onShow) {
      this.elModal.addEventListener("show.bs.modal", function () {
        return _this.props.onShow();
      });
    }

    if (this.props.onHide) {
      this.elModal.addEventListener("hide.bs.modal", function () {
        return _this.props.onHide();
      });
    }
  };

  ModalComponent.prototype.componentWillUnmount = function () {
    this.modalPlugin.hide();
  };

  ModalComponent.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal fade",
      tabIndex: -1,
      role: "dialog",
      ref: function (x) {
        return _this.elModal = x;
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-dialog",
      role: "document"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-content"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      "aria-hidden": "true"
    }, "\u00D7")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4", {
      className: "modal-title"
    }, this.props.title)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-body"
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "modal-footer"
    }, this.props.buttons))));
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a], ModalComponent.prototype, "show", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a], ModalComponent.prototype, "hide", null);

  return ModalComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./ClientApp/components/shared/PagingBar.tsx":
/*!***************************************************!*\
  !*** ./ClientApp/components/shared/PagingBar.tsx ***!
  \***************************************************/
/*! exports provided: PagingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingBar", function() { return PagingBar; });
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/index.js");
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_paginating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* Below code of the 'Pagination' component was taken
from the https://github.com/ChoTotOSS/react-paginating
and remaked for the Bootstrap style. */

var PagingBar =
/** @class */
function (_super) {
  __extends(PagingBar, _super);

  function PagingBar(props) {
    return _super.call(this, props) || this;
  }

  PagingBar.prototype.setFirstPage = function () {
    this.elFirstPageBtn.click();
  };

  PagingBar.prototype.setLastPage = function () {
    this.elLastPageBtn.click();
  };

  PagingBar.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_paginating__WEBPACK_IMPORTED_MODULE_0___default.a, {
      total: this.props.totalResults,
      limit: this.props.limitPerPage,
      currentPage: this.props.currentPage
    }, function (_a) {
      var pages = _a.pages,
          currentPage = _a.currentPage,
          hasNextPage = _a.hasNextPage,
          hasPreviousPage = _a.hasPreviousPage,
          previousPage = _a.previousPage,
          nextPage = _a.nextPage,
          totalPages = _a.totalPages,
          getPageItemProps = _a.getPageItemProps;
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", {
        className: "pagination"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", __assign({}, getPageItemProps({
        pageValue: 1,
        onPageChange: _this.props.onChangePage
      }), {
        ref: function (x) {
          return _this.elFirstPageBtn = x;
        }
      }), "first")), hasPreviousPage && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", __assign({}, getPageItemProps({
        pageValue: previousPage,
        onPageChange: _this.props.onChangePage
      })), '<')), pages.map(function (page) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
          key: page,
          className: page === currentPage ? 'active' : ''
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", __assign({}, getPageItemProps({
          pageValue: page,
          onPageChange: _this.props.onChangePage
        })), page));
      }), hasNextPage && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", __assign({}, getPageItemProps({
        pageValue: nextPage,
        onPageChange: _this.props.onChangePage
      })), '>')), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", __assign({}, getPageItemProps({
        pageValue: totalPages,
        onPageChange: _this.props.onChangePage
      }), {
        ref: function (x) {
          return _this.elLastPageBtn = x;
        }
      }), "last")));
    });
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a], PagingBar.prototype, "setFirstPage", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a], PagingBar.prototype, "setLastPage", null);

  return PagingBar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./ClientApp/components/shared/TopMenu.tsx":
/*!*************************************************!*\
  !*** ./ClientApp/components/shared/TopMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_6__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};









var TopMenu =
/** @class */
function (_super) {
  __extends(TopMenu, _super);

  function TopMenu(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      logoutAction: false
    };
    return _this;
  }

  TopMenu.prototype.onClickSignOut = function (e) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            return [4
            /*yield*/
            , _Services_AccountService__WEBPACK_IMPORTED_MODULE_4__["default"].logout()];

          case 1:
            _a.sent();

            this.setState({
              logoutAction: true
            });
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TopMenu.prototype.componentDidMount = function () {
    var dropdown = new bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__["Dropdown"](this.elDropdown);
  };

  TopMenu.prototype.componentDidUpdate = function () {};

  TopMenu.prototype.render = function () {
    var _this = this;

    if (this.state.logoutAction) return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login"
    });
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "navbar navbar-default"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "container-fluid"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "navbar-header"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
      type: "button",
      className: "navbar-toggle collapsed",
      "data-toggle": "collapse",
      "data-target": "#navbar",
      "aria-expanded": "false",
      "aria-controls": "navbar"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "sr-only"
    }, "Toggle navigation"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "icon-bar"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "icon-bar"
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "icon-bar"
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      className: "navbar-brand",
      href: "#"
    }, "RCB")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      id: "navbar",
      className: "navbar-collapse collapse nav navbar-nav navbar-right"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "nav navbar-nav"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: '/',
      activeClassName: "active"
    }, "Home")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      exact: true,
      to: '/example',
      activeClassName: "active"
    }, "Example")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      className: "dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "#",
      ref: function (x) {
        return _this.elDropdown = x;
      },
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      role: "button",
      "aria-haspopup": "true",
      "aria-expanded": "false"
    }, _Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser.login, "\u00A0", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: "caret"
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: "dropdown-menu"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "#",
      onClick: this.onClickSignOut
    }, "Sing out"))))))));
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_6___default.a], TopMenu.prototype, "onClickSignOut", null);

  return TopMenu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopMenu));

/***/ }),

/***/ "./ClientApp/configureStore.ts":
/*!*************************************!*\
  !*** ./ClientApp/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./ClientApp/store/index.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};





function configureStore(history, initialState) {
  // Build middleware. These are functions that can process the actions before they reach the store.
  var windowIfDefined = typeof window === 'undefined' ? null : window; // If devTools is installed, connect to it

  var devToolsExtension = windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;
  var createStoreWithMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) {
    return next;
  })(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]); // Combine all reducers and instantiate the app-wide store instance

  var allReducers = buildRootReducer(_store__WEBPACK_IMPORTED_MODULE_3__["reducers"], history);
  var store = createStoreWithMiddleware(allReducers, initialState); // Enable Webpack hot module replacement for reducers

  if (false) {}

  return store;
}

var routerReducer = function (history) {
  var initialState = {
    location: history.location,
    action: history.action
  };
  return function (state, arg) {
    if (state === void 0) {
      state = initialState;
    }

    if (arg === void 0) {
      arg = {};
    }

    if (arg.type === connected_react_router__WEBPACK_IMPORTED_MODULE_2__["LOCATION_CHANGE"]) {
      return __assign({}, state, arg.payload);
    }

    return state;
  };
};

function buildRootReducer(allReducers, history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(__assign({}, allReducers, {
    router: routerReducer(history)
  }));
}

/***/ }),

/***/ "./ClientApp/images/logo.png":
/*!***********************************!*\
  !*** ./ClientApp/images/logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "41b61ebfee29e470850ed2d2d889e33f.png";

/***/ }),

/***/ "./ClientApp/layouts/authorizedLayout.tsx":
/*!************************************************!*\
  !*** ./ClientApp/layouts/authorizedLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/TopMenu */ "./ClientApp/components/shared/TopMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/authorizedLayout.scss */ "./ClientApp/styles/authorizedLayout.scss");
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/shared/Footer */ "./ClientApp/components/shared/Footer.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var AuthorizedLayout =
/** @class */
function (_super) {
  __extends(AuthorizedLayout, _super);

  function AuthorizedLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AuthorizedLayout.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      id: "authorizedLayout",
      className: "layout"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__["default"], null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container container-content"
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], null), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };

  return AuthorizedLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuthorizedLayout);

/***/ }),

/***/ "./ClientApp/layouts/guestLayout.tsx":
/*!*******************************************!*\
  !*** ./ClientApp/layouts/guestLayout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/guestLayout.scss */ "./ClientApp/styles/guestLayout.scss");
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var GuestLayout =
/** @class */
function (_super) {
  __extends(GuestLayout, _super);

  function GuestLayout() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GuestLayout.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      id: "guestLayout",
      className: "layout"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "container container-content"
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], null));
  };

  return GuestLayout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GuestLayout);

/***/ }),

/***/ "./ClientApp/models/Result.ts":
/*!************************************!*\
  !*** ./ClientApp/models/Result.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Result =
/** @class */
function () {
  function Result(value) {
    var errors = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      errors[_i - 1] = arguments[_i];
    }

    this.value = value;
    this.errors = errors[0] == undefined || errors[0] == null ? [] : errors;
  }

  Object.defineProperty(Result.prototype, "hasErrors", {
    get: function () {
      return this.errors != null && Array.isArray(this.errors) && this.errors.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  return Result;
}();

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./ClientApp/pages/ExamplePage.tsx":
/*!*****************************************!*\
  !*** ./ClientApp/pages/ExamplePage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/shared/PagingBar */ "./ClientApp/components/shared/PagingBar.tsx");
/* harmony import */ var _Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/person/PersonEditor */ "./ClientApp/components/person/PersonEditor.tsx");
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/shared/ModalComponent */ "./ClientApp/components/shared/ModalComponent.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ExamplePage =
/** @class */
function (_super) {
  __extends(ExamplePage, _super);

  function ExamplePage(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      pageNum: 1,
      limitPerPage: 5,
      rowOffset: 0,
      modelForEdit: {}
    };
    return _this;
  }

  ExamplePage.prototype.componentWillMount = function () {
    this.props.getAllRequest();
  };

  ExamplePage.prototype.componentWillUnmount = function () {
    if (this.elModalAdd) {
      this.elModalAdd.hide();
    }

    if (this.elModalEdit) {
      this.elModalEdit.hide();
    }

    if (this.elModalDelete) {
      this.elModalDelete.hide();
    }
  };

  ExamplePage.prototype.onChangePage = function (pageNum) {
    var rowOffset = Math.ceil((pageNum - 1) * this.state.limitPerPage);
    this.setState({
      pageNum: pageNum,
      rowOffset: rowOffset
    });
  };

  ExamplePage.prototype.onClickShowAddModal = function (e) {
    this.elModalAdd.show();
  };

  ExamplePage.prototype.onClickShowEditModal = function (e, modelForEdit) {
    this.setState({
      modelForEdit: modelForEdit
    });
    this.elModalEdit.show();
  };

  ExamplePage.prototype.onClickShowDeleteModal = function (e, modelForEdit) {
    this.setState({
      modelForEdit: modelForEdit
    });
    this.elModalDelete.show();
  };

  ExamplePage.prototype.onClickPersonEditorAdd__saveBtn = function (e) {
    e.preventDefault();

    if (!this.personEditorAdd.elForm.isValid()) {
      return;
    }

    this.props.addRequest(this.personEditorAdd.elForm.getData());
    this.pagingBar.setLastPage();
    this.elModalAdd.hide();
  };

  ExamplePage.prototype.onClickPersonEditorEdit__saveBtn = function (e) {
    if (!this.personEditorEdit.elForm.isValid()) {
      return;
    }

    var data = this.personEditorEdit.elForm.getData();
    this.props.updateRequest(data);
    this.elModalEdit.hide();
  };

  ExamplePage.prototype.onClickPersonEditorDelete__saveBtn = function (e) {
    this.props.deleteRequest(this.state.modelForEdit.id);
    this.elModalDelete.hide();
  };

  ExamplePage.prototype.renderRow = function (person) {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", {
      key: person.id
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, person.firstName), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, person.lastName), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-info",
      onClick: function (x) {
        return _this.onClickShowEditModal(x, person);
      }
    }, "Edit"), "\u00A0", react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-danger",
      onClick: function (x) {
        return _this.onClickShowDeleteModal(x, person);
      }
    }, "Delete")));
  };

  ExamplePage.prototype.renderRows = function (data) {
    var _this = this;

    return data.slice(this.state.rowOffset, this.state.rowOffset + this.state.limitPerPage).map(function (x) {
      return _this.renderRow(x);
    });
  };

  ExamplePage.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title", null, "Example - RCB")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      show: this.props.indicators.operationLoading
    }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "panel panel-default"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: "panel-body"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
      className: "btn btn-success",
      onClick: this.onClickShowAddModal
    }, "Add"))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table", {
      className: "table"
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "First name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null, "Last name"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th", null))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody", null, this.renderRows(this.props.people))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], {
      ref: function (x) {
        return _this.elModalAdd = x;
      },
      buttons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-default",
        "data-dismiss": "modal"
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.onClickPersonEditorAdd__saveBtn
      }, "Save")),
      title: "Add person",
      onHide: function () {
        if (_this.personEditorAdd) {
          _this.personEditorAdd.emptyForm();
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["PersonEditor"], {
      ref: function (x) {
        return _this.personEditorAdd = x;
      },
      data: {}
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], {
      ref: function (x) {
        return _this.elModalEdit = x;
      },
      buttons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-default",
        "data-dismiss": "modal"
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-primary",
        onClick: this.onClickPersonEditorEdit__saveBtn
      }, "Save")),
      title: "Edit person: " + this.state.modelForEdit.firstName + " " + this.state.modelForEdit.lastName,
      onHide: function () {
        if (_this.personEditorEdit) {
          _this.setState({
            modelForEdit: {}
          });
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["PersonEditor"], {
      ref: function (x) {
        return _this.personEditorEdit = x;
      },
      data: this.state.modelForEdit
    })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"], {
      ref: function (x) {
        return _this.elModalDelete = x;
      },
      buttons: react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-default",
        "data-dismiss": "modal"
      }, "Close"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: this.onClickPersonEditorDelete__saveBtn
      }, "Delete")),
      title: "Delete person: " + this.state.modelForEdit.firstName + " " + this.state.modelForEdit.lastName
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null, "Do you really want to delete this person?")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__["PagingBar"], {
      ref: function (x) {
        return _this.pagingBar = x;
      },
      totalResults: this.props.people.length,
      limitPerPage: this.state.limitPerPage,
      currentPage: this.state.pageNum,
      onChangePage: this.onChangePage
    }));
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onChangePage", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickShowAddModal", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickShowEditModal", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickShowDeleteModal", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickPersonEditorAdd__saveBtn", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickPersonEditorEdit__saveBtn", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "onClickPersonEditorDelete__saveBtn", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "renderRow", null);

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a], ExamplePage.prototype, "renderRows", null);

  return ExamplePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var component = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.person;
}, // Selects which state properties are merged into the component's props.
_Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__["PersonStore"].actionCreators // Selects which action creators are merged into the component's props.
)(ExamplePage);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/pages/HomePage.tsx":
/*!**************************************!*\
  !*** ./ClientApp/pages/HomePage.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Images/logo.png */ "./ClientApp/images/logo.png");
/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var HomePage =
/** @class */
function (_super) {
  __extends(HomePage, _super);

  function HomePage(props) {
    return _super.call(this, props) || this;
  }

  HomePage.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Home page - RCB")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      style: {
        "margin": "0 auto",
        "display": "block",
        "width": "100%"
      },
      src: _Images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a
    }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      className: "text-center",
      style: {
        "fontSize": "52px"
      }
    }, "Happy coding!"));
  };

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./ClientApp/pages/loginPage.tsx":
/*!***************************************!*\
  !*** ./ClientApp/pages/loginPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




;







var LoginPage =
/** @class */
function (_super) {
  __extends(LoginPage, _super);

  function LoginPage(props) {
    return _super.call(this, props) || this;
  }

  LoginPage.prototype.componentDidMount = function () {
    this.props.init();

    if (this.elLoader) {
      this.elLoader.forceUpdate();
    }
  };

  LoginPage.prototype.onClickSubmitBtn = function (e) {
    return __awaiter(this, void 0, void 0, function () {
      var data;
      return __generator(this, function (_a) {
        e.preventDefault();

        if (this.elForm.isValid()) {
          data = this.elForm.getData();
          this.props.loginRequest(data);
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  LoginPage.prototype.render = function () {
    var _this = this;

    if (this.props.indicators.loginSuccess) {
      return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_6__["Redirect"], {
        to: "/"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      id: "loginPage"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("title", null, "Login page - RCB")), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      ref: function (x) {
        return _this.elLoader = x;
      },
      show: this.props.indicators.operationLoading
    }), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      id: "loginContainer"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", {
      className: "text-center"
    }, "Type any login and password to enter."), react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__["Form"], {
      ref: function (x) {
        return _this.elForm = x;
      }
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", {
      htmlFor: "inputLogin"
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", {
      type: "text",
      name: "login",
      "data-value-type": "string",
      className: "form-control",
      id: "inputLogin",
      "data-val-required": "true",
      "data-msg-required": "Login is required."
    })), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "form-group"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", {
      htmlFor: "inputLogin"
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input", {
      type: "password",
      name: "password",
      "data-value-type": "string",
      className: "form-control",
      id: "inputPassword",
      "data-val-required": "true",
      "data-msg-required": "Password is required."
    })), react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: "form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {
      className: "btn btn-success",
      onClick: this.onClickSubmitBtn
    }, "Sign in")))));
  };

  __decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_7___default.a], LoginPage.prototype, "onClickSubmitBtn", null);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

var component = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (state) {
  return state.login;
}, // Selects which state properties are merged into the component's props
_Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__["LoginStore"].actionCreators // Selects which action creators are merged into the component's props
)(LoginPage);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Layouts_authorizedLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Layouts/authorizedLayout */ "./ClientApp/layouts/authorizedLayout.tsx");
/* harmony import */ var _Layouts_guestLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Layouts/guestLayout */ "./ClientApp/layouts/guestLayout.tsx");
/* harmony import */ var _Pages_loginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Pages/loginPage */ "./ClientApp/pages/loginPage.tsx");
/* harmony import */ var _Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppRoute */ "./ClientApp/components/shared/AppRoute.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Pages/HomePage */ "./ClientApp/pages/HomePage.tsx");
/* harmony import */ var _Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Pages/ExamplePage */ "./ClientApp/pages/ExamplePage.tsx");








var routes = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"], {
  layout: _Layouts_guestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],
  exact: true,
  path: "/login",
  component: _Pages_loginPage__WEBPACK_IMPORTED_MODULE_2__["default"]
}), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"], {
  layout: _Layouts_authorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true,
  path: "/",
  component: _Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__["default"]
}), react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"], {
  layout: _Layouts_authorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true,
  path: "/example",
  component: _Pages_ExamplePage__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./ClientApp/services/AccountService.ts":
/*!**********************************************!*\
  !*** ./ClientApp/services/AccountService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceBase */ "./ClientApp/services/ServiceBase.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




var AccountService =
/** @class */
function (_super) {
  __extends(AccountService, _super);

  function AccountService() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AccountService.login = function (loginModel) {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "api/Account/Login",
              method: "POST",
              data: loginModel
            })];

          case 1:
            result = _a.sent();

            if (!result.hasErrors) {
              _Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser = result.value;
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  AccountService.logout = function () {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "api/Account/Logout",
              method: "POST"
            })];

          case 1:
            result = _a.sent();

            if (!result.hasErrors) {
              _Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser = null;
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return AccountService;
}(_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);

/* harmony default export */ __webpack_exports__["default"] = (AccountService);

/***/ }),

/***/ "./ClientApp/services/PersonService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/services/PersonService.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services/ServiceBase */ "./ClientApp/services/ServiceBase.ts");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var PersonService =
/** @class */
function (_super) {
  __extends(PersonService, _super);

  function PersonService() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PersonService.getAll = function () {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "/api/Person",
              method: "GET"
            })];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  PersonService.update = function (model) {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "/api/Person",
              method: "PATCH",
              data: model
            })];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  PersonService.delete = function (id) {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "/api/Person/" + id,
              method: "DELETE"
            })];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  PersonService.add = function (model) {
    return __awaiter(this, void 0, Promise, function () {
      var result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , this.requestJson({
              url: "/api/Person",
              method: "POST",
              data: model
            })];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return PersonService;
}(_Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);

/* harmony default export */ __webpack_exports__["default"] = (PersonService);

/***/ }),

/***/ "./ClientApp/services/ServiceBase.ts":
/*!*******************************************!*\
  !*** ./ClientApp/services/ServiceBase.ts ***!
  \*******************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Ui */ "./ClientApp/Ui.ts");
/* harmony import */ var _Models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Models/Result */ "./ClientApp/models/Result.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-to-url */ "./node_modules/json-to-url/index.js");
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_to_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};








/**
 * Represents base class of the isomorphic service.
 */

var ServiceBase =
/** @class */
function () {
  function ServiceBase() {}
  /**
   * Make request with JSON data.
   * @param opts
   */


  ServiceBase.requestJson = function (opts) {
    return __awaiter(this, void 0, Promise, function () {
      var axiosResult, result, processQuery, axiosRequestConfig, _a, error_1;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            axiosResult = null;
            result = null;
            opts.url = Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url); // Allow requests also for Node.

            processQuery = function (url, data) {
              if (data) {
                return url + "?" + json_to_url__WEBPACK_IMPORTED_MODULE_4___default()(data);
              }

              return url;
            };

            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["isNode"])()) {
              // Used for SSR requests from the web server to NodeServices.
              axiosRequestConfig = {
                headers: {
                  Cookie: _Globals__WEBPACK_IMPORTED_MODULE_6__["default"].getData().private.cookie
                }
              };
            }

            _b.label = 1;

          case 1:
            _b.trys.push([1, 13,, 14]);

            _a = opts.method;

            switch (_a) {
              case "GET":
                return [3
                /*break*/
                , 2];

              case "POST":
                return [3
                /*break*/
                , 4];

              case "PUT":
                return [3
                /*break*/
                , 6];

              case "PATCH":
                return [3
                /*break*/
                , 8];

              case "DELETE":
                return [3
                /*break*/
                , 10];
            }

            return [3
            /*break*/
            , 12];

          case 2:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(processQuery(opts.url, opts.data), axiosRequestConfig)];

          case 3:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 12];

          case 4:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url, opts.data, axiosRequestConfig)];

          case 5:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 12];

          case 6:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url, opts.data, axiosRequestConfig)];

          case 7:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 12];

          case 8:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url, opts.data, axiosRequestConfig)];

          case 9:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 12];

          case 10:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(processQuery(opts.url, opts.data), axiosRequestConfig)];

          case 11:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 12];

          case 12:
            result = new (_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"], [void 0, axiosResult.data.value].concat(axiosResult.data.errors)))();
            return [3
            /*break*/
            , 14];

          case 13:
            error_1 = _b.sent();
            result = new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null, error_1.message);
            return [3
            /*break*/
            , 14];

          case 14:
            if (result.hasErrors) {
              _Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"], result.errors);
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };
  /**
   * Allows you to send files to the server.
   * @param opts
   */


  ServiceBase.sendFormData = function (opts) {
    return __awaiter(this, void 0, Promise, function () {
      var axiosResult, result, axiosOpts, _a, error_2;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            axiosResult = null;
            result = null;
            opts.url = Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url); // Allow requests also for Node.

            axiosOpts = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            _b.label = 1;

          case 1:
            _b.trys.push([1, 9,, 10]);

            _a = opts.method;

            switch (_a) {
              case "POST":
                return [3
                /*break*/
                , 2];

              case "PUT":
                return [3
                /*break*/
                , 4];

              case "PATCH":
                return [3
                /*break*/
                , 6];
            }

            return [3
            /*break*/
            , 8];

          case 2:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url, opts.data, axiosOpts)];

          case 3:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 8];

          case 4:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url, opts.data, axiosOpts)];

          case 5:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 8];

          case 6:
            return [4
            /*yield*/
            , axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url, opts.data, axiosOpts)];

          case 7:
            axiosResult = _b.sent();
            return [3
            /*break*/
            , 8];

          case 8:
            result = new (_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"], [void 0, axiosResult.data.value].concat(axiosResult.data.errors)))();
            return [3
            /*break*/
            , 10];

          case 9:
            error_2 = _b.sent();
            result = new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null, error_2.message);
            return [3
            /*break*/
            , 10];

          case 10:
            if (result.hasErrors) {
              _Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"], result.errors);
            }

            return [2
            /*return*/
            , result];
        }
      });
    });
  };

  return ServiceBase;
}();



/***/ }),

/***/ "./ClientApp/store/LoginStore.ts":
/*!***************************************!*\
  !*** ./ClientApp/store/LoginStore.ts ***!
  \***************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



var LoginStore;

(function (LoginStore) {
  var _this = this;

  var Actions;

  (function (Actions) {
    /**
     * You need to have the initial state to
     * reset the indicators (e.g. loginSuccess)
     * that call redirect or any other actions.
     * It must be called in method 'componentDidMount'
     * of a component.
     */
    Actions["Init"] = "LOGIN_INIT";
    Actions["Request"] = "LOGIN_REQUEST";
    Actions["Success"] = "LOGIN_SUCCESS";
    Actions["Failure"] = "LOGIN_FAILURE";
  })(Actions = LoginStore.Actions || (LoginStore.Actions = {}));

  LoginStore.actionCreators = {
    init: function () {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          return __generator(this, function (_a) {
            dispatch({
              type: Actions.Init
            });
            return [2
            /*return*/
            ];
          });
        });
      };
    },
    loginRequest: function (model) {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                dispatch({
                  type: Actions.Request
                });
                return [4
                /*yield*/
                , _Services_AccountService__WEBPACK_IMPORTED_MODULE_1__["default"].login(model)];

              case 1:
                result = _a.sent();

                if (result.hasErrors) {
                  dispatch({
                    type: Actions.Failure
                  });
                  return [2
                  /*return*/
                  ];
                }

                dispatch({
                  type: Actions.Success,
                  payload: result.value
                });
                return [2
                /*return*/
                ];
            }
          });
        });
      };
    }
  };
  var initialState = {
    indicators: {
      operationLoading: false,
      loginSuccess: false
    }
  };

  LoginStore.reducer = function (currentState, incomingAction) {
    var action = incomingAction;

    var cloneIndicators = function () {
      return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);
    };

    switch (action.type) {
      case Actions.Init:
        return initialState;

      case Actions.Request:
        var indicators = cloneIndicators();
        indicators.operationLoading = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.Success:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        indicators.loginSuccess = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.Failure:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        return __assign({}, currentState, {
          indicators: indicators
        });

      default:
        // The following line guarantees that every action in the KnownAction union has been covered by a case above
        var exhaustiveCheck = action;
    }

    return currentState || initialState;
  };
})(LoginStore || (LoginStore = {}));

/***/ }),

/***/ "./ClientApp/store/PersonStore.ts":
/*!****************************************!*\
  !*** ./ClientApp/store/PersonStore.ts ***!
  \****************************************/
/*! exports provided: PersonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonStore", function() { return PersonStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/PersonService */ "./ClientApp/services/PersonService.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_2__);
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};




var PersonStore;

(function (PersonStore) {
  var _this = this;

  var Actions;

  (function (Actions) {
    Actions["GetAllRequest"] = "PERSON_GET_ALL_REQUEST";
    Actions["GetAllResponse"] = "PERSON_GET_ALL_RESPONSE";
    Actions["AddRequest"] = "PERSON_ADD_REQUEST";
    Actions["AddResponse"] = "PERSON_ADD_RESPONSE";
    Actions["UpdateRequest"] = "PERSON_UPDATE_REQUEST";
    Actions["UpdateResponse"] = "PERSON_UPDATE_RESPONSE";
    Actions["DeleteRequest"] = "PERSON_DELETE_REQUEST";
    Actions["DeleteResponse"] = "PERSON_DELETE_RESPONSE";
  })(Actions = PersonStore.Actions || (PersonStore.Actions = {}));

  PersonStore.actionCreators = {
    getAllRequest: function () {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          var _this = this;

          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , Object(domain_wait__WEBPACK_IMPORTED_MODULE_2__["wait"])(function (transformUrl) {
                  return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          // Wait for server prerendering.
                          dispatch({
                            type: Actions.GetAllRequest
                          });
                          return [4
                          /*yield*/
                          , _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].getAll()];

                        case 1:
                          result = _a.sent();

                          if (!result.hasErrors) {
                            dispatch({
                              type: Actions.GetAllResponse,
                              payload: result.value
                            });
                          }

                          return [2
                          /*return*/
                          ];
                      }
                    });
                  });
                })];

              case 1:
                _a.sent();

                return [2
                /*return*/
                ];
            }
          });
        });
      };
    },
    addRequest: function (model) {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                dispatch({
                  type: Actions.AddRequest
                });
                return [4
                /*yield*/
                , _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].add(model)];

              case 1:
                result = _a.sent();

                if (!result.hasErrors) {
                  model.id = result.value;
                  dispatch({
                    type: Actions.AddResponse,
                    payload: model
                  });
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      };
    },
    updateRequest: function (model) {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                dispatch({
                  type: Actions.UpdateRequest
                });
                return [4
                /*yield*/
                , _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].update(model)];

              case 1:
                result = _a.sent();

                if (!result.hasErrors) {
                  dispatch({
                    type: Actions.UpdateResponse,
                    payload: model
                  });
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      };
    },
    deleteRequest: function (id) {
      return function (dispatch, getState) {
        return __awaiter(_this, void 0, void 0, function () {
          var result;
          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                dispatch({
                  type: Actions.DeleteRequest
                });
                return [4
                /*yield*/
                , _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].delete(id)];

              case 1:
                result = _a.sent();

                if (!result.hasErrors) {
                  dispatch({
                    type: Actions.DeleteResponse,
                    id: id
                  });
                }

                return [2
                /*return*/
                ];
            }
          });
        });
      };
    }
  };
  var initialState = {
    people: [],
    indicators: {
      operationLoading: false
    }
  };

  PersonStore.reducer = function (currentState, incomingAction) {
    var action = incomingAction;

    var cloneIndicators = function () {
      return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);
    };

    switch (action.type) {
      case Actions.GetAllRequest:
        var indicators = cloneIndicators();
        indicators.operationLoading = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.GetAllResponse:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        return __assign({}, currentState, {
          indicators: indicators,
          people: action.payload
        });

      case Actions.UpdateRequest:
        var indicators = cloneIndicators();
        indicators.operationLoading = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.UpdateResponse:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        var data = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);
        var itemToUpdate = data.filter(function (x) {
          return x.id === action.payload.id;
        })[0];
        itemToUpdate.firstName = action.payload.firstName;
        itemToUpdate.lastName = action.payload.lastName;
        return __assign({}, currentState, {
          indicators: indicators,
          people: data
        });

      case Actions.AddRequest:
        var indicators = cloneIndicators();
        indicators.operationLoading = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.AddResponse:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        var data = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);
        data.push(action.payload);
        return __assign({}, currentState, {
          indicators: indicators,
          people: data
        });

      case Actions.DeleteRequest:
        var indicators = cloneIndicators();
        indicators.operationLoading = true;
        return __assign({}, currentState, {
          indicators: indicators
        });

      case Actions.DeleteResponse:
        var indicators = cloneIndicators();
        indicators.operationLoading = false;
        var data = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people).filter(function (x) {
          return x.id !== action.id;
        });
        return __assign({}, currentState, {
          indicators: indicators,
          people: data
        });

      default:
        // The following line guarantees that every action in the KnownAction union has been covered by a case above
        var exhaustiveCheck = action;
    }

    return currentState || initialState;
  };
})(PersonStore || (PersonStore = {}));

/***/ }),

/***/ "./ClientApp/store/index.ts":
/*!**********************************!*\
  !*** ./ClientApp/store/index.ts ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");

 // Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.

var reducers = {
  login: _Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__["LoginStore"].reducer,
  person: _Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__["PersonStore"].reducer
};

/***/ }),

/***/ "./ClientApp/styles/authorizedLayout.scss":
/*!************************************************!*\
  !*** ./ClientApp/styles/authorizedLayout.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/guestLayout.scss":
/*!*******************************************!*\
  !*** ./ClientApp/styles/guestLayout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/loader.scss":
/*!**************************************!*\
  !*** ./ClientApp/styles/loader.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/main.scss":
/*!************************************!*\
  !*** ./ClientApp/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/utils.ts":
/*!****************************!*\
  !*** ./ClientApp/utils.ts ***!
  \****************************/
/*! exports provided: clone, getPromiseFromAction, isNode, isObjectEmpty, emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromiseFromAction", function() { return getPromiseFromAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
function clone(object) {
  return JSON.parse(JSON.stringify(object));
}
function getPromiseFromAction(asyncActionCreator) {
  return asyncActionCreator;
}
/**
 * Is server prerendering by Node.js.
 * There can't be any DOM: window, document, etc.
 */

function isNode() {
  return typeof process === 'object' && process.versions && !!process.versions.node;
}
function isObjectEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
}
function emptyForm(form) {
  var inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach(function (x) {
    var inputType = x.getAttribute("type");

    if (inputType === "checkbox" || inputType === "radio") {
      x.checked = false;
    } else {
      x.value = "";
    }
  });
}

/***/ }),

/***/ "./node_modules/NSerializeJson/dist/cjs/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/NSerializeJson/dist/cjs/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NSerializeJson_1 = __webpack_require__(/*! ./src/NSerializeJson */ "./node_modules/NSerializeJson/dist/cjs/src/NSerializeJson.js");
exports.NSerializeJson = NSerializeJson_1.NSerializeJson;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/NSerializeJson/dist/cjs/src/Constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/NSerializeJson/dist/cjs/src/Constants.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginName = "NSerializeJson";
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ "./node_modules/NSerializeJson/dist/cjs/src/NSerializeJson.js":
/*!********************************************************************!*\
  !*** ./node_modules/NSerializeJson/dist/cjs/src/NSerializeJson.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ./Util */ "./node_modules/NSerializeJson/dist/cjs/src/Util.js");
var ParserList_1 = __webpack_require__(/*! ./ParserList */ "./node_modules/NSerializeJson/dist/cjs/src/ParserList.js");
var Constants_1 = __webpack_require__(/*! ./Constants */ "./node_modules/NSerializeJson/dist/cjs/src/Constants.js");
var NSerializeJson = (function () {
    function NSerializeJson() {
    }
    NSerializeJson.parseValue = function (value, type) {
        if (Util_1.isStringNullOrEmpty(type)) {
            var autoParser = this.parsers.filter(function (x) { return x.name === "auto"; })[0];
            return autoParser.parse(value, this.options.forceNullOnEmpty);
        }
        var parser = this.parsers.filter(function (x) { return x.name === type; })[0];
        if (parser == null) {
            throw Constants_1.pluginName + ": couldn't find ther parser for type '" + type + "'";
        }
        return parser.parse(value, this.options.forceNullOnEmpty);
    };
    NSerializeJson.serializeForm = function (htmlFormElement) {
        var _this = this;
        var nodeList = htmlFormElement.querySelectorAll("input, select, textarea");
        var htmlInputElements = Util_1.nodeListToArray(nodeList);
        var checkedElements = htmlInputElements.filter(function (x) {
            if (x.disabled ||
                ((x.getAttribute("type") === "radio" && !x.checked) ||
                    (x.getAttribute("type") === "checkbox" && !x.checked))) {
                return false;
            }
            return true;
        });
        var resultObject = {};
        checkedElements.forEach(function (x) { return _this.serializeIntoObject(resultObject, x); });
        return resultObject;
    };
    NSerializeJson.serializeIntoObject = function (obj, htmlInputElement) {
        var value = htmlInputElement.value;
        var pathStr = htmlInputElement.getAttribute("name");
        if (Util_1.isStringNullOrEmpty(pathStr))
            return obj;
        var path = [];
        var type = null;
        var typeIndex = pathStr.indexOf(":");
        if (typeIndex > -1) {
            type = pathStr.substring(typeIndex + 1, pathStr.length);
            if (type === "skip") {
                return obj;
            }
            pathStr = pathStr.substring(0, typeIndex);
        }
        else {
            type = htmlInputElement.getAttribute("data-value-type");
        }
        if (this.options.onBeforeParseValue != null) {
            value = this.options.onBeforeParseValue(value, type);
        }
        var parsedValue = this.parseValue(value, type);
        var pathLength = 0;
        if (this.options.useDotSeparatorInPath) {
            var addArrayToPath = false;
            path = pathStr.split(".");
            pathLength = path.length;
            path.forEach(function (step, index) {
                var indexOfBrackets = step.indexOf("[]");
                if (index !== pathLength - 1) {
                    if (indexOfBrackets > -1) {
                        throw Constants_1.pluginName + ": error in path '" + pathStr + "' empty values in the path mean array and should be at the end.";
                    }
                }
                else {
                    if (indexOfBrackets > -1) {
                        path[index] = step.replace("[]", "");
                        addArrayToPath = true;
                    }
                }
            });
            if (addArrayToPath) {
                path.push("");
            }
        }
        else {
            path = pathStr.split("[").map(function (x, i) { return x.replace("]", ""); });
            pathLength = path.length;
            path.forEach(function (step, index) {
                if (index !== pathLength - 1 && Util_1.isStringNullOrEmpty(step))
                    throw Constants_1.pluginName + ": error in path '" + pathStr + "' empty values in the path mean array and should be at the end.";
            });
        }
        this.searchAndSet(obj, path, 0, parsedValue);
        return obj;
    };
    NSerializeJson.searchAndSet = function (currentObj, path, pathIndex, parsedValue, arrayInternalIndex) {
        if (arrayInternalIndex === void 0) { arrayInternalIndex = 0; }
        var step = path[pathIndex];
        var isFinalStep = pathIndex === path.length - 1;
        var nextStep = path[pathIndex + 1];
        if (currentObj == null || typeof currentObj == "string") {
            path = path.map(function (x) { return Util_1.isStringNullOrEmpty(x) ? "[]" : x; });
            console.log(Constants_1.pluginName + ": there was an error in path '" + path + "' in step '" + step + "'.");
            throw Constants_1.pluginName + ": error.";
        }
        var isArrayStep = Util_1.isStringNullOrEmpty(step);
        var isIntegerStep = Util_1.isStringInteger(step);
        var isNextStepAnArray = Util_1.isStringInteger(nextStep) || Util_1.isStringNullOrEmpty(nextStep);
        if (isArrayStep) {
            if (isFinalStep) {
                currentObj.push(parsedValue);
                return;
            }
            else {
                if (currentObj[arrayInternalIndex] == null) {
                    currentObj[arrayInternalIndex] = {};
                }
                step = arrayInternalIndex;
                arrayInternalIndex++;
            }
        }
        else if (isIntegerStep && this.options.useNumKeysAsArrayIndex) {
            step = parseInt(step);
            if (!Util_1.isArray(currentObj)) {
                currentObj = [];
            }
            if (isFinalStep) {
                currentObj[step] = parsedValue;
                return;
            }
            else {
                if (currentObj[step] == null)
                    currentObj[step] = {};
            }
        }
        else {
            if (isFinalStep) {
                currentObj[step] = parsedValue;
                return;
            }
            else {
                if (this.options.useNumKeysAsArrayIndex) {
                    if (isNextStepAnArray) {
                        if (!Util_1.isArray(currentObj[step]))
                            currentObj[step] = [];
                    }
                    else {
                        if (currentObj[step] == null)
                            currentObj[step] = {};
                    }
                }
                else {
                    if (currentObj[step] == null)
                        currentObj[step] = {};
                }
            }
        }
        pathIndex++;
        this.searchAndSet(currentObj[step], path, pathIndex, parsedValue, arrayInternalIndex);
    };
    NSerializeJson.options = {
        useNumKeysAsArrayIndex: true,
        useDotSeparatorInPath: false,
        forceNullOnEmpty: false
    };
    NSerializeJson.parsers = ParserList_1.parserList.slice();
    return NSerializeJson;
}());
exports.NSerializeJson = NSerializeJson;
//# sourceMappingURL=NSerializeJson.js.map

/***/ }),

/***/ "./node_modules/NSerializeJson/dist/cjs/src/ParserList.js":
/*!****************************************************************!*\
  !*** ./node_modules/NSerializeJson/dist/cjs/src/ParserList.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = __webpack_require__(/*! ./Util */ "./node_modules/NSerializeJson/dist/cjs/src/Util.js");
exports.parserList = [
    {
        name: "auto",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                return forceNull ? null : val;
            }
            var result = val.toString().trim();
            if (result.toLowerCase() === "null")
                return null;
            try {
                result = JSON.parse(result);
                return result;
            }
            catch (e) {
            }
            var array = result.split(",");
            if (array.length > 1) {
                result = array.map(function (x) {
                    if (Util_1.isStringNumber(x)) {
                        return parseFloat(x);
                    }
                    else if (Util_1.isStringJsonObject(x)) {
                        return JSON.parse(x);
                    }
                    return x.trim();
                });
            }
            return result;
        }
    },
    {
        name: "number",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                return forceNull ? null : 0;
            }
            if (Util_1.isStringNumber(val)) {
                return parseFloat(val);
            }
            return 0;
        }
    },
    {
        name: "boolean",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                return forceNull ? null : false;
            }
            val = val.toString().toLowerCase();
            if (val === "true" || val === "1") {
                return true;
            }
            return false;
        }
    },
    {
        name: "string",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                return null;
            }
            var result = val.toString().trim();
            if (result.toLowerCase() === "null" || (result === "" && forceNull))
                return null;
            return result;
        }
    },
    {
        name: "array[auto]",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                if (forceNull)
                    return null;
                return [];
            }
            return val.split(",").map(function (x) {
                var parser = exports.parserList.filter(function (x) { return x.name === "auto"; })[0];
                return parser.parse(x.trim(), forceNull);
            });
        }
    },
    {
        name: "array[string]",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                if (forceNull)
                    return null;
                return [];
            }
            return val.split(",").map(function (x) { return x.trim().toString(); });
        }
    },
    {
        name: "array[number]",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                if (forceNull)
                    return null;
                return [];
            }
            return val.split(",").map(function (x) { return parseFloat(x.trim()); });
        }
    },
    {
        name: "json",
        parse: function (val, forceNull) {
            if (Util_1.isStringNullOrEmpty(val)) {
                if (forceNull)
                    return null;
                return {};
            }
            return JSON.parse(val);
        }
    }
];
//# sourceMappingURL=ParserList.js.map

/***/ }),

/***/ "./node_modules/NSerializeJson/dist/cjs/src/Util.js":
/*!**********************************************************!*\
  !*** ./node_modules/NSerializeJson/dist/cjs/src/Util.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isStringJsonObject(arg) {
    try {
        JSON.parse(arg);
        return true;
    }
    catch (e) { }
    return false;
}
exports.isStringJsonObject = isStringJsonObject;
function isArray(arg) {
    return Array.isArray(arg);
}
exports.isArray = isArray;
function isStringNumber(arg) {
    return typeof arg == 'number' || /^[-+]?\d+([Ee][+-]?\d+)?(\.\d+)?$/.test(arg);
}
exports.isStringNumber = isStringNumber;
function isStringInteger(arg) {
    return /^[-+]?\d+([Ee][+-]?\d+)?$/.test(arg);
}
exports.isStringInteger = isStringInteger;
function isStringNullOrEmpty(arg) {
    return arg == null || arg.trim() === "";
}
exports.isStringNullOrEmpty = isStringNullOrEmpty;
exports.nodeListToArray = function (nodeList) {
    return Array.prototype.slice.call(nodeList);
};
//# sourceMappingURL=Util.js.map

/***/ }),

/***/ "./node_modules/aspnet-prerendering/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/aspnet-prerendering/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/aspnet-prerendering/index.js");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/axios/index.js");

/***/ }),

/***/ "./node_modules/bind-decorator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bind-decorator/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),

/***/ "./node_modules/bootstrap3-native/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap3-native/index.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/bootstrap3-native/index.js");

/***/ }),

/***/ "./node_modules/connected-react-router/lib/index.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/connected-react-router/lib/index.js from dll-reference ./vendor ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/connected-react-router/lib/index.js");

/***/ }),

/***/ "./node_modules/domain-wait/dist/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/domain-wait/dist/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/domain-wait/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/history/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/history/index.js from dll-reference ./vendor ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/history/index.js");

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/invariant/invariant.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/invariant/invariant.js");

/***/ }),

/***/ "./node_modules/json-to-url/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/json-to-url/index.js from dll-reference ./vendor ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/json-to-url/index.js");

/***/ }),

/***/ "./node_modules/nval-tippy/dist/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/nval-tippy/dist/cjs/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/nval-tippy/dist/cjs/index.js");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/prop-types/index.js");

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/server.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-dom/server.js");

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-helmet/lib/Helmet.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-helmet/lib/Helmet.js");

/***/ }),

/***/ "./node_modules/react-paginating/dist/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-paginating/dist/index.js from dll-reference ./vendor ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-paginating/dist/index.js");

/***/ }),

/***/ "./node_modules/react-redux/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-redux/lib/index.js");

/***/ }),

/***/ "./node_modules/react-router-dom/BrowserRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/BrowserRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/HashRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/HashRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router-dom/Link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/MemoryRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/MemoryRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MemoryRouter = __webpack_require__(/*! react-router/MemoryRouter */ "./node_modules/react-router/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/NavLink.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/NavLink.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/Prompt.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Prompt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Prompt = __webpack_require__(/*! react-router/Prompt */ "./node_modules/react-router/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Redirect.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/Redirect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Redirect = __webpack_require__(/*! react-router/Redirect */ "./node_modules/react-router/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Route.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/Route.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(/*! react-router/Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Router = __webpack_require__(/*! react-router/Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/StaticRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/StaticRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(/*! react-router/StaticRouter */ "./node_modules/react-router/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Switch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(/*! react-router/Switch */ "./node_modules/react-router/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/generatePath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/generatePath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generatePath = __webpack_require__(/*! react-router/generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/matchPath.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/matchPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(/*! react-router/matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/DOMUtils.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/LocationUtils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/cjs/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/cjs/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/PathUtils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/PathUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createHashHistory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createTransitionManager.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js");

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(/*! ./createHashHistory */ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/withRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/withRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withRouter = __webpack_require__(/*! react-router/withRouter */ "./node_modules/react-router/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router/MemoryRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/MemoryRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/MemoryRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Prompt.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Prompt.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Prompt.js");

/***/ }),

/***/ "./node_modules/react-router/Redirect.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-router/Redirect.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Redirect.js");

/***/ }),

/***/ "./node_modules/react-router/Route.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Route.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Route.js");

/***/ }),

/***/ "./node_modules/react-router/Router.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Router.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Router.js");

/***/ }),

/***/ "./node_modules/react-router/StaticRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/StaticRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/StaticRouter.js");

/***/ }),

/***/ "./node_modules/react-router/Switch.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Switch.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/Switch.js");

/***/ }),

/***/ "./node_modules/react-router/generatePath.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/generatePath.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/generatePath.js");

/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/index.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/index.js");

/***/ }),

/***/ "./node_modules/react-router/matchPath.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/react-router/matchPath.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/matchPath.js");

/***/ }),

/***/ "./node_modules/react-router/withRouter.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-router/withRouter.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-router/withRouter.js");

/***/ }),

/***/ "./node_modules/react-toastify/lib/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/react-toastify/lib/index.js from dll-reference ./vendor ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react-toastify/lib/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux-thunk/lib/index.js");

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/lib/redux.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/redux/lib/redux.js");

/***/ }),

/***/ "./node_modules/resolve-pathname/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/resolve-pathname/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/resolve-pathname/cjs/index.js");

/***/ }),

/***/ "./node_modules/value-equal/cjs/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/value-equal/cjs/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))("./node_modules/value-equal/cjs/index.js");

/***/ }),

/***/ "dll-reference ./vendor":
/*!***************************!*\
  !*** external "./vendor" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL1VpLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvcGVyc29uL1BlcnNvbkVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvTW9kYWxDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3NoYXJlZC9QYWdpbmdCYXIudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3NoYXJlZC9Ub3BNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2ltYWdlcy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9hdXRob3JpemVkTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9ndWVzdExheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21vZGVscy9SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3BhZ2VzL0V4YW1wbGVQYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcGFnZXMvSG9tZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wYWdlcy9sb2dpblBhZ2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zZXJ2aWNlcy9BY2NvdW50U2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmljZXMvUGVyc29uU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmljZXMvU2VydmljZUJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL0xvZ2luU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3N0b3JlL1BlcnNvblN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL05TZXJpYWxpemVKc29uL2Rpc3QvY2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9OU2VyaWFsaXplSnNvbi9kaXN0L2Nqcy9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9OU2VyaWFsaXplSnNvbi9kaXN0L2Nqcy9zcmMvTlNlcmlhbGl6ZUpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL05TZXJpYWxpemVKc29uL2Rpc3QvY2pzL3NyYy9QYXJzZXJMaXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9OU2VyaWFsaXplSnNvbi9kaXN0L2Nqcy9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iaW5kLWRlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcDMtbmF0aXZlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2RvbWFpbi13YWl0L2Rpc3QvY2pzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qc29uLXRvLXVybC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9udmFsLXRpcHB5L2Rpc3QvY2pzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1wYWdpbmF0aW5nL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTmF2TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L1BhdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9SZWRpcmVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUm91dGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Td2l0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvd2l0aFJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9yZWR1eC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9janMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vdmVuZG9yXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBR0E7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQSxzQkFtREM7O0FBN0NpQixrQkFBZDtBQUNJLFNBQUssYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUssSUFBTCxHQUFZLEVBQVo7QUFDSCxHQUhhOztBQUtBLGlCQUFkLFVBQW1CLElBQW5CLEVBQXFDO0FBQ2pDLFFBQUksS0FBSyxhQUFULEVBQXdCO0FBQ3BCLFlBQU0sS0FBSyxDQUFDLGlDQUFELENBQVg7QUFDSDs7QUFDRCxTQUFLLElBQUwsR0FBYSxJQUFJLElBQUk7QUFDakIsWUFBTSxFQUFFLEVBRFM7QUFDTCxhQUFPLEVB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Q0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsYUFBb0I7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM3RGE7O0FBRWI7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsMEVBQXlCOztBQUVuRDs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsdUNBQXVDLCtEOzs7Ozs7Ozs7OztBQ1Z2Qyw4STs7Ozs7Ozs7Ozs7QUNBQSx3STs7Ozs7Ozs7Ozs7QUNBQSwwSTs7Ozs7Ozs7Ozs7QUNBQSx1STs7Ozs7Ozs7Ozs7QUNBQSx3STs7Ozs7Ozs7Ozs7QUNBQSw4STs7Ozs7Ozs7Ozs7QUNBQSx3STs7Ozs7Ozs7Ozs7QUNBQSw4STs7Ozs7Ozs7Ozs7QUNBQSx1STs7Ozs7Ozs7Ozs7QUNBQSwySTs7Ozs7Ozs7Ozs7QUNBQSw0STs7Ozs7Ozs7Ozs7QUNBQSw2STs7Ozs7Ozs7Ozs7QUNBQSxnSTs7Ozs7Ozs7Ozs7QUNBQSwwSTs7Ozs7Ozs7Ozs7QUNBQSxvSTs7Ozs7Ozs7Ozs7QUNBQSwrSTs7Ozs7Ozs7Ozs7QUNBQSwwSTs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHN4XCIpO1xuIiwiaW1wb3J0IHsgSVNlcnZpY2VVc2VyIH0gZnJvbSBcIkBNb2RlbHMvSVNlcnZpY2VVc2VyXCI7XHJcbmltcG9ydCB7IE5TZXJpYWxpemVKc29uIH0gZnJvbSBcIk5TZXJpYWxpemVKc29uXCI7XHJcbmltcG9ydCB7IElOb2RlU2Vzc2lvbiB9IGZyb20gXCJATW9kZWxzL0lOb2RlU2Vzc2lvblwiO1xyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5zIGdsb2JhbCBpc29tb3JwaGljIHNlc3Npb24uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxzIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc0luaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGF0YTogSU5vZGVTZXNzaW9uID0ge307XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoZGF0YTogSU5vZGVTZXNzaW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkdsb2JhbHMgaXMgYWxyZWFkeSBpbml0aWFsaXplZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YSA9IChkYXRhIHx8IHtcclxuICAgICAgICAgICAgcHVibGljOiB7fSwgcHJpdmF0ZToge31cclxuICAgICAgICB9KSBhcyBJTm9kZVNlc3Npb247XHJcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gVXNlIGRvdCBub3RhdGlvbiBpbiBuYW1lIG9mIHRoZSBmb3JtIGlucHV0cy5cclxuICAgICAgICBOU2VyaWFsaXplSnNvbi5vcHRpb25zLnVzZURvdFNlcGFyYXRvckluUGF0aCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGhyb3dJZk5vdEluaXRpYWxpemVkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0luaXRpYWxpemVkKVxyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkdsb2JhbHMgaXMgbm90IGluaXRpYWxpemVkLiBZb3UgaGF2ZSB0byBjYWxsIFNlc3Npb24uaW5pdCBiZWZvcmUuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGF0YSgpOiBJTm9kZVNlc3Npb24ge1xyXG4gICAgICAgIHRoaXMudGhyb3dJZk5vdEluaXRpYWxpemVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldERhdGEoZGF0YTogSU5vZGVTZXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmTm90SW5pdGlhbGl6ZWQoKTtcclxuICAgICAgICB2YXIgb2xkRGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7IC4uLm9sZERhdGEsIC4uLmRhdGEgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXJ2aWNlVXNlcigpOiBJU2VydmljZVVzZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGEoKS5wdWJsaWMuc2VydmljZVVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgc2VydmljZVVzZXIoc2VydmljZVVzZXI6IElTZXJ2aWNlVXNlcikge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHB1YmxpYzogeyBzZXJ2aWNlVXNlciB9IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlVXNlciAhPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHt0b2FzdH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVWkge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgc2hvd0Vycm9ycyguLi5tZXNzYWdlczogc3RyaW5nW10pIHtcclxuICAgICAgICBcclxuICAgICAgICBtZXNzYWdlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoeCkpIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKHggYXMgYW55KS5mb3JFYWNoKCh5OiBzdHJpbmcpID0+IHRvYXN0LmVycm9yKHkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG93SW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0b2FzdC5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHJlcGxhY2UgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXJSZW5kZXJlciwgUmVuZGVyUmVzdWx0IH0gZnJvbSAnYXNwbmV0LXByZXJlbmRlcmluZyc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuaW1wb3J0IHsgSU5vZGVTZXNzaW9uIH0gZnJvbSBcIkBNb2RlbHMvSU5vZGVTZXNzaW9uXCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlZFRhc2tzIH0gZnJvbSBcImRvbWFpbi13YWl0XCI7XHJcblxyXG52YXIgcmVuZGVySGVsbWV0ID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICB2YXIgaGVsbWV0RGF0YSA9IEhlbG1ldC5yZW5kZXJTdGF0aWMoKTtcclxuICAgIHZhciBoZWxtZXRTdHJpbmdzID0gXCJcIjtcclxuICAgIGZvciAodmFyIGtleSBpbiBoZWxtZXREYXRhKSB7XHJcbiAgICAgICAgaWYgKGhlbG1ldERhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICBoZWxtZXRTdHJpbmdzICs9IGhlbG1ldERhdGFba2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBoZWxtZXRTdHJpbmdzO1xyXG59O1xyXG5cclxudmFyIGNyZWF0ZUdsb2JhbHMgPSAobm9kZVNlc3Npb24sIGluaXRpYWxSZWR1eFN0YXRlLCBoZWxtZXRTdHJpbmdzKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbXBsZXRlZFRhc2tzLFxyXG4gICAgICAgIG5vZGVTZXNzaW9uLFxyXG4gICAgICAgIGluaXRpYWxSZWR1eFN0YXRlLFxyXG4gICAgICAgIGhlbG1ldFN0cmluZ3NcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTZXJ2ZXJSZW5kZXJlcigocGFyYW1zKSA9PiB7XHJcblxyXG4gICAgR2xvYmFscy5yZXNldCgpO1xyXG4gICAgR2xvYmFscy5pbml0KHBhcmFtcy5kYXRhIGFzIElOb2RlU2Vzc2lvbik7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlclJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIFJlZHV4IHN0b3JlIHdpdGggaW4tbWVtb3J5IGhpc3RvcnksIGFuZCBkaXNwYXRjaCBhIG5hdmlnYXRpb24gZXZlbnQuXHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0byB0aGUgaW5jb21pbmcgVVJMLlxyXG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gcGFyYW1zLmJhc2VVcmwuc3Vic3RyaW5nKDAsIHBhcmFtcy5iYXNlVXJsLmxlbmd0aCAtIDEpOyAvLyBSZW1vdmUgdHJhaWxpbmcgc2xhc2guXHJcbiAgICAgICAgY29uc3QgdXJsQWZ0ZXJCYXNlbmFtZSA9IHBhcmFtcy51cmwuc3Vic3RyaW5nKGJhc2VuYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZShjcmVhdGVNZW1vcnlIaXN0b3J5KCkpO1xyXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHJlcGxhY2UodXJsQWZ0ZXJCYXNlbmFtZSkpO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGFuIGluc3RhbmNlIG9mIHRoZSBhcHBsaWNhdGlvbiBhbmQgcGVyZm9ybSBhbiBpbml0YWwgcmVuZGVyIHRoYXQgd2lsbFxyXG4gICAgICAgIC8vIGNhdXNlIGFueSBhc3luYyB0YXNrcyAoZS5nLiwgZGF0YSBhY2Nlc3MpIHRvIGJlZ2luLlxyXG4gICAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8U3RhdGljUm91dGVyIGJhc2VuYW1lPXtiYXNlbmFtZX0gY29udGV4dD17cm91dGVyQ29udGV4dH0gbG9jYXRpb249e3BhcmFtcy5sb2NhdGlvbi5wYXRofSBjaGlsZHJlbj17cm91dGVzfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbmRlckFwcCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyVG9TdHJpbmcoYXBwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW5kZXJBcHAoKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhIHJlZGlyZWN0aW9uLCBqdXN0IHNlbmQgdGhpcyBpbmZvcm1hdGlvbiBiYWNrIHRvIHRoZSBob3N0IGFwcGxpY2F0aW9uLlxyXG4gICAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VXJsOiByb3V0ZXJDb250ZXh0LnVybCxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IGNyZWF0ZUdsb2JhbHMocGFyYW1zLmRhdGEsIHN0b3JlLmdldFN0YXRlKCksIHJlbmRlckhlbG1ldCgpKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT25jZSBhbnkgYXN5bmMgdGFza3MgYXJlIGRvbmUsIHdlIGNhbiBwZXJmb3JtIHRoZSBmaW5hbCByZW5kZXIuXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmYuXHJcbiAgICAgICAgcGFyYW1zLmRvbWFpblRhc2tzLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJBcHAoKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IGNyZWF0ZUdsb2JhbHMocGFyYW1zLmRhdGEsIHN0b3JlLmdldFN0YXRlKCksIHJlbmRlckhlbG1ldCgpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSwgcmVqZWN0KTsgLy8gQWxzbyBwcm9wYWdhdGUgYW55IGVycm9ycyBiYWNrIGludG8gdGhlIGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Gb3JtXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0lucHV0XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBkYXRhOiBJUGVyc29uTW9kZWw7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25FZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVsRm9ybTogRm9ybTtcclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGVtcHR5Rm9ybSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5lbEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5lbEZvcm0uZW1wdHlGb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPEZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIHJlZj17eCA9PiB0aGlzLmVsRm9ybSA9IHh9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGF0YS5pZCB8fCAwKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIHJlcXVpcmVkXCIgaHRtbEZvcj1cInBlcnNvbl9fZmlyc3ROYW1lXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInBlcnNvbl9fZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcImZpcnN0TmFtZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWUtdHlwZT1cInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12YWwtcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW1zZy1yZXF1aXJlZD1cIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWQuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRhLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIHJlcXVpcmVkXCIgaHRtbEZvcj1cInBlcnNvbl9fbGFzdE5hbWVcIj5MYXN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJzb25fX2xhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtcImxhc3ROYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbXNnLXJlcXVpcmVkPVwiTGFzdCBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0YS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY29tcG9uZW50IGNvbnRhaW5zIGhlbHBmdWwgbWV0aG9kIHdoaWNoXHJcbiAqIGFsbG93cyB5b3UgdG8gbWFrZSBcImZvcmNlIHVwZGF0ZVwiIG9mIHRoZSBzdHVjayBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFwcENvbXBvbmVudDxUUHJvcHMgPSB7fSwgVFN0YXRlID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRQcm9wcywgVFN0YXRlPiB7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogUGxhY2UgaXQgaW50byB0aGUgXCJrZXlcIiBhdHRyaWJ1dGUgb2YgYW4gZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHJlbmRlcktleSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsIHRoaXMgaWYgY29tcG9uZW50IHN0YXRlIGlzIHN0dWNrLlxyXG4gICAgICogQnV0IHlvdSBzaG91bGQgc2V0IHRoZSByZW5kZXJLZXkgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuXHJcbiAgICAgKi9cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgZm9yY2VVcGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJLZXkgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUm91dGUsIFJvdXRlUHJvcHMsIFJlZGlyZWN0IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyBleHRlbmRzIFJvdXRlUHJvcHMge1xyXG4gICAgbGF5b3V0OiBSZWFjdC5Db21wb25lbnRDbGFzczxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgbGF5b3V0OiBMYXlvdXQsIHBhdGg6IFBhdGgsIC4uLnJlc3QgfTogSVByb3BzKSA9PiB7XHJcblxyXG4gICAgdmFyIGlzTG9naW5QYXRoID0gUGF0aCA9PT0gXCIvbG9naW5cIjtcclxuICAgIGlmICghR2xvYmFscy5pc0F1dGhlbnRpY2F0ZWQgJiYgIWlzTG9naW5QYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG4gICAgfVxyXG4gICAgaWYgKEdsb2JhbHMuaXNBdXRoZW50aWNhdGVkICYmIGlzTG9naW5QYXRoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFJvdXRlIHsuLi5yZXN0fSByZW5kZXI9e3Byb3BzID0+IChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICl9IC8+O1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHA+VmlldyBvbiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL05pY2tNYWV2L3JlYWN0LWNvcmUtYm9pbGVycGxhdGVcIj5HaXRIdWI8L2E+PC9wPlxyXG4gICAgICAgICAgICA8cD5Db3B5cmlnaHQgKGMpIDIwMTggTmlrb2xheSBNYWV2PC9wPlxyXG4gICAgICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2VcIj5NSVQgTGljZW5zZTwvYT48L3A+XHJcbiAgICAgICAgPC9mb290ZXI+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5TZXJpYWxpemVKc29uIH0gZnJvbSBcIk5TZXJpYWxpemVKc29uXCI7XHJcbmltcG9ydCB7IGVtcHR5Rm9ybSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IHsgTlZhbFRpcHB5IH0gZnJvbSBcIm52YWwtdGlwcHlcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxSZWFjdC5Gb3JtSFRNTEF0dHJpYnV0ZXM8SFRNTEZvcm1FbGVtZW50PiwgSFRNTEZvcm1FbGVtZW50PiB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBOVmFsVGlwcHk7XHJcbiAgICBwcm90ZWN0ZWQgZWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5pc1ZhbGlkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgZW1wdHlGb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIGVtcHR5Rm9ybSh0aGlzLmVsRm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgZ2V0RGF0YTxUPigpOiBUIHtcclxuICAgICAgICByZXR1cm4gTlNlcmlhbGl6ZUpzb24uc2VyaWFsaXplRm9ybSh0aGlzLmVsRm9ybSkgYXMgYW55IGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgTlZhbFRpcHB5KHRoaXMuZWxGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxmb3JtIHsuLi50aGlzLnByb3BzfSByZWY9e3ggPT4gdGhpcy5lbEZvcm0gPSB4fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Zvcm0+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0gUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8UmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiwgSFRNTElucHV0RWxlbWVudD47XHJcbmludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgdmFsdWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBJU3RhdGU+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB2YWx1ZTogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogcHJvcHMudmFsdWUgfHwgXCJcIiBhcyBzdHJpbmcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8aW5wdXQgey4uLnRoaXMucHJvcHN9IHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZS50YXJnZXQudmFsdWV9KX0gLz47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCJAU3R5bGVzL2xvYWRlci5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBpc05vZGUgfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCBBcHBDb21wb25lbnQgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9BcHBDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHNob3c6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciBleHRlbmRzIEFwcENvbXBvbmVudDxJUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgY3NzID0ge1wiZGlzcGxheVwiOiBcIm5vbmVcIn07XHJcblxyXG4gICAgICAgIGlmICghaXNOb2RlKCkpIHtcclxuICAgICAgICAgICAgY3NzID0geyBcImRpc3BsYXlcIjogKHRoaXMucHJvcHMuc2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBrZXk9e3RoaXMucmVuZGVyS2V5fSBjbGFzc05hbWU9XCJsb2FkZXItYmdcIiBzdHlsZT17Y3NzfT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUyIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUzIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU0IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU1IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU2IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU3IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU4IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGU5IHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMCBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTEgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTEyIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcDMtbmF0aXZlXCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRpdGxlOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfCBhbnk7XHJcbiAgICBidXR0b25zPzogYW55O1xyXG4gICAgY2hpbGRyZW4/OiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W10gfCBhbnk7XHJcbiAgICBvblNob3c/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25IaWRlPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxQbHVnaW46IE1vZGFsO1xyXG4gICAgcHJvdGVjdGVkIGVsTW9kYWw6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgc2hvdygpIHtcclxuICAgICAgICB0aGlzLm1vZGFsUGx1Z2luLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFBsdWdpbi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFBsdWdpbiA9IG5ldyBNb2RhbCh0aGlzLmVsTW9kYWwpO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInNob3cuYnMubW9kYWxcIiBhcyBhbnksICgpID0+IHRoaXMucHJvcHMub25TaG93KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkhpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJoaWRlLmJzLm1vZGFsXCIgYXMgYW55LCAoKSA9PiB0aGlzLnByb3BzLm9uSGlkZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFBsdWdpbi5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiB0YWJJbmRleD17LTF9IHJvbGU9XCJkaWFsb2dcIiByZWY9e3ggPT4gdGhpcy5lbE1vZGFsID0geH0+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5idXR0b25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUGFnaW5hdGlvbiwgeyBQYWdpbmF0aW9uUHJvcHMgfSBmcm9tIFwicmVhY3QtcGFnaW5hdGluZ1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xyXG4gICAgdG90YWxSZXN1bHRzOiBudW1iZXI7XHJcbiAgICBsaW1pdFBlclBhZ2U6IG51bWJlcjtcclxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgICBvbkNoYW5nZVBhZ2U6IChwYWdlTnVtOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qIEJlbG93IGNvZGUgb2YgdGhlICdQYWdpbmF0aW9uJyBjb21wb25lbnQgd2FzIHRha2VuIFxyXG5mcm9tIHRoZSBodHRwczovL2dpdGh1Yi5jb20vQ2hvVG90T1NTL3JlYWN0LXBhZ2luYXRpbmcgXHJcbmFuZCByZW1ha2VkIGZvciB0aGUgQm9vdHN0cmFwIHN0eWxlLiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luZ0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGVsRmlyc3RQYWdlQnRuOiBIVE1MRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBlbExhc3RQYWdlQnRuOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIHNldEZpcnN0UGFnZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVsRmlyc3RQYWdlQnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgc2V0TGFzdFBhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbExhc3RQYWdlQnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICB0b3RhbD17dGhpcy5wcm9wcy50b3RhbFJlc3VsdHN9XHJcbiAgICAgICAgICAgIGxpbWl0PXt0aGlzLnByb3BzLmxpbWl0UGVyUGFnZX1cclxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3RoaXMucHJvcHMuY3VycmVudFBhZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgIHBhZ2VzLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZSxcclxuICAgICAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzUGFnZSxcclxuICAgICAgICAgICAgICAgIG5leHRQYWdlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlcyxcclxuICAgICAgICAgICAgICAgIGdldFBhZ2VJdGVtUHJvcHNcclxuICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMuZWxGaXJzdFBhZ2VCdG4gPSB4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzUHJldmlvdXNQYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVZhbHVlOiBwcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyc8J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2VzLm1hcChwYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGFnZX0gY2xhc3NOYW1lPXtwYWdlID09PSBjdXJyZW50UGFnZSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VWYWx1ZTogcGFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzTmV4dFBhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VWYWx1ZTogbmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2VQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyc+J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VWYWx1ZTogdG90YWxQYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTGFzdFBhZ2VCdG4gPSB4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvUGFnaW5hdGlvbj5cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5pbXBvcnQgQWNjb3VudFNlcnZpY2UgZnJvbSBcIkBTZXJ2aWNlcy9BY2NvdW50U2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCJib290c3RyYXAzLW5hdGl2ZVwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG5jbGFzcyBUb3BNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7IGxvZ291dEFjdGlvbjogYm9vbGVhbiB9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgbG9nb3V0QWN0aW9uOiBmYWxzZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBhc3luYyBvbkNsaWNrU2lnbk91dChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxBbmNob3JFbGVtZW50Pikge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgQWNjb3VudFNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvZ291dEFjdGlvbjogdHJ1ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVsRHJvcGRvd246IEhUTUxBbmNob3JFbGVtZW50O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBkcm9wZG93biA9IG5ldyBEcm9wZG93bih0aGlzLmVsRHJvcGRvd24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9nb3V0QWN0aW9uKVxyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz47XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5SQ0I8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgbmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayBleGFjdCB0bz17Jy8nfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5Ib21lPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayBleGFjdCB0bz17Jy9leGFtcGxlJ30gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+RXhhbXBsZTwvTmF2TGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgcmVmPXt4ID0+IHRoaXMuZWxEcm9wZG93biA9IHh9IGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7R2xvYmFscy5zZXJ2aWNlVXNlci5sb2dpbn0mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5vbkNsaWNrU2lnbk91dH0+U2luZyBvdXQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVG9wTWVudSBhcyBhbnkpOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCBMT0NBVElPTl9DSEFOR0UgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcclxuLy92YXIgcm91dGVyUmVkdWNlciA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyL2xpYi9yZWR1Y2VyXCIpO1xyXG4vL2ltcG9ydCB7cm91dGVyUmVkdWNlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIGFzICgpID0+IFN0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IDxTPihuZXh0OiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFM+KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMsIGhpc3RvcnkpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUgYXMgYW55KSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzLCBoaXN0b3J5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCByb3V0ZXJSZWR1Y2VyID0gKGhpc3RvcnkpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcclxuICAgICAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFyZzogYW55ID0ge30pID0+IHtcclxuICAgICAgICBpZiAoYXJnLnR5cGUgPT09IExPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYXJnLnBheWxvYWQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QsIGhpc3RvcnkpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oey4uLmFsbFJlZHVjZXJzLCAuLi57IHJvdXRlcjogcm91dGVyUmVkdWNlcihoaXN0b3J5KSB9fSBhcyBhbnkpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQxYjYxZWJmZWUyOWU0NzA4NTBlZDJkMmQ4ODllMzNmLnBuZ1wiOyIsImltcG9ydCBUb3BNZW51IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvVG9wTWVudVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQFN0eWxlcy9hdXRob3JpemVkTGF5b3V0LnNjc3NcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0Zvb3RlclwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBQcm9wcyA9IElQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImF1dGhvcml6ZWRMYXlvdXRcIiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICAgICAgPFRvcE1lbnUgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCJAU3R5bGVzL2d1ZXN0TGF5b3V0LnNjc3NcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gSVByb3BzICYgUm91dGVDb21wb25lbnRQcm9wczxhbnk+IDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0TGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJndWVzdExheW91dFwiIGNsYXNzTmFtZT1cImxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdDxUPiB7XHJcbiAgICBwdWJsaWMgdmFsdWU6IFQ7XHJcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBnZXQgaGFzRXJyb3JzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycyAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkodGhpcy5lcnJvcnMpICYmIHRoaXMuZXJyb3JzLmxlbmd0aCA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IFQsIC4uLmVycm9yczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnNbMF0gPT0gdW5kZWZpbmVkIHx8IGVycm9yc1swXSA9PSBudWxsID8gW10gOiBlcnJvcnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgXCJAU3R5bGVzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuaW1wb3J0IHsgUGVyc29uU3RvcmUgfSBmcm9tIFwiQFN0b3JlL1BlcnNvblN0b3JlXCI7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tIFwiQFN0b3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUGFnaW5nQmFyIH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9QYWdpbmdCYXJcIjtcclxuaW1wb3J0IHsgUGVyc29uRWRpdG9yIH0gZnJvbSBcIkBDb21wb25lbnRzL3BlcnNvbi9QZXJzb25FZGl0b3JcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Nb2RhbENvbXBvbmVudFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM8e30+ICYgdHlwZW9mIFBlcnNvblN0b3JlLmFjdGlvbkNyZWF0b3JzICYgUGVyc29uU3RvcmUuSVN0YXRlO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBwYWdlTnVtOiBudW1iZXI7XHJcbiAgICBsaW1pdFBlclBhZ2U6IG51bWJlcjtcclxuICAgIHJvd09mZnNldDogbnVtYmVyO1xyXG4gICAgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWw7XHJcbn1cclxuXHJcbmNsYXNzIEV4YW1wbGVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBJU3RhdGU+IHtcclxuXHJcbiAgICBwcml2YXRlIHBhZ2luZ0JhcjogUGFnaW5nQmFyO1xyXG5cclxuICAgIHByaXZhdGUgZWxNb2RhbEFkZDogTW9kYWxDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGVsTW9kYWxFZGl0OiBNb2RhbENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZWxNb2RhbERlbGV0ZTogTW9kYWxDb21wb25lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBwZXJzb25FZGl0b3JBZGQ6IFBlcnNvbkVkaXRvcjtcclxuICAgIHByaXZhdGUgcGVyc29uRWRpdG9yRWRpdDogUGVyc29uRWRpdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICAgICAgbGltaXRQZXJQYWdlOiA1LFxyXG4gICAgICAgICAgICByb3dPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIG1vZGVsRm9yRWRpdDoge31cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdldEFsbFJlcXVlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsQWRkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbEFkZC5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVsTW9kYWxFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbEVkaXQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsRGVsZXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNoYW5nZVBhZ2UocGFnZU51bTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJvd09mZnNldCA9IE1hdGguY2VpbCgocGFnZU51bSAtIDEpICogdGhpcy5zdGF0ZS5saW1pdFBlclBhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYWdlTnVtLCByb3dPZmZzZXQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tTaG93QWRkTW9kYWwoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgICAgICB0aGlzLmVsTW9kYWxBZGQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0VkaXRNb2RhbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiwgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxGb3JFZGl0IH0pO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbEVkaXQuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0RlbGV0ZU1vZGFsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBtb2RlbEZvckVkaXQ6IElQZXJzb25Nb2RlbCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQgfSk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRGVsZXRlLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckFkZF9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoIXRoaXMucGVyc29uRWRpdG9yQWRkLmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLmFkZFJlcXVlc3QodGhpcy5wZXJzb25FZGl0b3JBZGQuZWxGb3JtLmdldERhdGEoKSk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmdCYXIuc2V0TGFzdFBhZ2UoKTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxBZGQuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrUGVyc29uRWRpdG9yRWRpdF9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5wZXJzb25FZGl0b3JFZGl0LmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucGVyc29uRWRpdG9yRWRpdC5lbEZvcm0uZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUmVxdWVzdChkYXRhKTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckRlbGV0ZV9fc2F2ZUJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlUmVxdWVzdCh0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5pZCk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRGVsZXRlLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcmVuZGVyUm93KHBlcnNvbjogSVBlcnNvbk1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIDx0ciBrZXk9e3BlcnNvbi5pZH0+XHJcbiAgICAgICAgICAgIDx0ZD57cGVyc29uLmZpcnN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3BlcnNvbi5sYXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIG9uQ2xpY2s9e3ggPT4gdGhpcy5vbkNsaWNrU2hvd0VkaXRNb2RhbCh4LCBwZXJzb24pfT5FZGl0PC9idXR0b24+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17eCA9PiB0aGlzLm9uQ2xpY2tTaG93RGVsZXRlTW9kYWwoeCwgcGVyc29uKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj47XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHJlbmRlclJvd3MoZGF0YTogSVBlcnNvbk1vZGVsW10pIHtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICAuc2xpY2UodGhpcy5zdGF0ZS5yb3dPZmZzZXQsIHRoaXMuc3RhdGUucm93T2Zmc2V0ICsgdGhpcy5zdGF0ZS5saW1pdFBlclBhZ2UpXHJcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLnJlbmRlclJvdyh4KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5FeGFtcGxlIC0gUkNCPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIHNob3c9e3RoaXMucHJvcHMuaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Nob3dBZGRNb2RhbH0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBuYW1lPC90aD48dGg+TGFzdCBuYW1lPC90aD48dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKHRoaXMucHJvcHMucGVvcGxlKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICB7LyogQWRkIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxBZGQgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGVyc29uRWRpdG9yQWRkX19zYXZlQnRufT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBwZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uRWRpdG9yQWRkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uRWRpdG9yQWRkLmVtcHR5Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JBZGQgPSB4fSBkYXRhPXt7fX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbENvbXBvbmVudD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBFZGl0IG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxFZGl0ID0geH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM9ezxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG59PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgRWRpdCBwZXJzb246ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0Lmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25FZGl0b3JFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQ6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JFZGl0ID0geH0gZGF0YT17dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVsZXRlIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxEZWxldGUgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG59PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BEZWxldGUgcGVyc29uOiAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0LmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5sYXN0TmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxwPkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBwZXJzb24/PC9wPlxyXG4gICAgICAgICAgICA8L01vZGFsQ29tcG9uZW50PlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luZ0JhclxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMucGFnaW5nQmFyID0geH1cclxuICAgICAgICAgICAgICAgIHRvdGFsUmVzdWx0cz17dGhpcy5wcm9wcy5wZW9wbGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgbGltaXRQZXJQYWdlPXt0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLnBhZ2VOdW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnBlcnNvbiwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHMuXHJcbiAgICBQZXJzb25TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzLlxyXG4pKEV4YW1wbGVQYWdlIGFzIGFueSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAod2l0aFJvdXRlcihjb21wb25lbnQgYXMgYW55KSBhcyBhbnkgYXMgdHlwZW9mIEV4YW1wbGVQYWdlKSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCJASW1hZ2VzL2xvZ28ucG5nXCI7XHJcblxyXG50eXBlIFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wczx7fT47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lIHBhZ2UgLSBSQ0I8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT17e1wibWFyZ2luXCI6IFwiMCBhdXRvXCIsIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsIFwid2lkdGhcIjogXCIxMDAlXCJ9fSBzcmM9e2xvZ299IC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7XCJmb250U2l6ZVwiOiBcIjUycHhcIn19PkhhcHB5IGNvZGluZyE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElMb2dpbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSUxvZ2luTW9kZWxcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBMb2dpblN0b3JlIH0gZnJvbSBcIkBTdG9yZS9Mb2dpblN0b3JlXCI7XHJcbmltcG9ydCBcIkBTdHlsZXMvbWFpbi5zY3NzXCI7O1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0Zvcm1cIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PiAmIHR5cGVvZiBMb2dpblN0b3JlLmFjdGlvbkNyZWF0b3JzICYgTG9naW5TdG9yZS5JU3RhdGU7XHJcblxyXG5jbGFzcyBMb2dpblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsTG9hZGVyOiBMb2FkZXI7XHJcbiAgICBlbEZvcm06IEZvcm07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZWxMb2FkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbExvYWRlci5mb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHJpdmF0ZSBhc3luYyBvbkNsaWNrU3VibWl0QnRuKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsRm9ybS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmVsRm9ybS5nZXREYXRhPElMb2dpbk1vZGVsPigpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvZ2luUmVxdWVzdChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbmRpY2F0b3JzLmxvZ2luU3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiLz47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdiBpZD1cImxvZ2luUGFnZVwiPlxyXG5cclxuICAgICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbiBwYWdlIC0gUkNCPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8TG9hZGVyIHJlZj17eCA9PiB0aGlzLmVsTG9hZGVyID0geH0gc2hvdz17dGhpcy5wcm9wcy5pbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmd9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5Db250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlR5cGUgYW55IGxvZ2luIGFuZCBwYXNzd29yZCB0byBlbnRlci48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0gcmVmPXt4ID0+IHRoaXMuZWxGb3JtID0geH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRMb2dpblwiPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17XCJsb2dpblwifSBkYXRhLXZhbHVlLXR5cGU9XCJzdHJpbmdcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImlucHV0TG9naW5cIiBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIiBkYXRhLW1zZy1yZXF1aXJlZD1cIkxvZ2luIGlzIHJlcXVpcmVkLlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXRMb2dpblwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9e1wicGFzc3dvcmRcIn0gZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dFBhc3N3b3JkXCIgZGF0YS12YWwtcmVxdWlyZWQ9XCJ0cnVlXCIgZGF0YS1tc2ctcmVxdWlyZWQ9XCJQYXNzd29yZCBpcyByZXF1aXJlZC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tTdWJtaXRCdG59PlNpZ24gaW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLmxvZ2luLCAvLyBTZWxlY3RzIHdoaWNoIHN0YXRlIHByb3BlcnRpZXMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4gICAgTG9naW5TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzXHJcbikoTG9naW5QYWdlIGFzIGFueSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAod2l0aFJvdXRlcihjb21wb25lbnQgYXMgYW55KSBhcyBhbnkgYXMgdHlwZW9mIExvZ2luUGFnZSkiLCJpbXBvcnQgQXV0aG9yaXplZExheW91dCBmcm9tICdATGF5b3V0cy9hdXRob3JpemVkTGF5b3V0JztcclxuaW1wb3J0IEd1ZXN0TGF5b3V0IGZyb20gXCJATGF5b3V0cy9ndWVzdExheW91dFwiO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJ0BQYWdlcy9sb2dpblBhZ2UnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvQXBwUm91dGVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlLCBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICdAUGFnZXMvSG9tZVBhZ2UnO1xyXG5pbXBvcnQgRXhhbXBsZVBhZ2UgZnJvbSAnQFBhZ2VzL0V4YW1wbGVQYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSA8U3dpdGNoPlxyXG4gICAgPEFwcFJvdXRlIGxheW91dD17R3Vlc3RMYXlvdXR9IGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cclxuICAgIDxBcHBSb3V0ZSBsYXlvdXQ9e0F1dGhvcml6ZWRMYXlvdXR9IGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cclxuICAgIDxBcHBSb3V0ZSBsYXlvdXQ9e0F1dGhvcml6ZWRMYXlvdXR9IGV4YWN0IHBhdGg9XCIvZXhhbXBsZVwiIGNvbXBvbmVudD17RXhhbXBsZVBhZ2V9IC8+XHJcbjwvU3dpdGNoPjsiLCJpbXBvcnQgeyBJTG9naW5Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lMb2dpbk1vZGVsXCI7XHJcbmltcG9ydCB7IElTZXJ2aWNlVXNlciB9IGZyb20gXCJATW9kZWxzL0lTZXJ2aWNlVXNlclwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCJATW9kZWxzL1Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlQmFzZSB9IGZyb20gXCIuL1NlcnZpY2VCYXNlXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudFNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBsb2dpbihsb2dpbk1vZGVsOiBJTG9naW5Nb2RlbCkgOiBQcm9taXNlPFJlc3VsdDxJU2VydmljZVVzZXI+PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb248SVNlcnZpY2VVc2VyPih7XHJcbiAgICAgICAgICAgIHVybDogXCJhcGkvQWNjb3VudC9Mb2dpblwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBsb2dpbk1vZGVsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBHbG9iYWxzLnNlcnZpY2VVc2VyID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uPElTZXJ2aWNlVXNlcj4oe1xyXG4gICAgICAgICAgICB1cmw6IFwiYXBpL0FjY291bnQvTG9nb3V0XCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbHMuc2VydmljZVVzZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlcnZpY2VCYXNlIH0gZnJvbSBcIkBTZXJ2aWNlcy9TZXJ2aWNlQmFzZVwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCJATW9kZWxzL1Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvblNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPFJlc3VsdDxJUGVyc29uTW9kZWxbXT4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxJUGVyc29uTW9kZWxbXT4oe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9QZXJzb25cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdXBkYXRlKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBQcm9taXNlPFJlc3VsdDx7fT4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbih7XHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1BlcnNvblwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgZGF0YTogbW9kZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uKHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS9QZXJzb24vJHtpZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCJcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhZGQobW9kZWw6IElQZXJzb25Nb2RlbCk6IFByb21pc2U8UmVzdWx0PG51bWJlcj4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbjxudW1iZXI+KHtcclxuICAgICAgICAgICAgdXJsOiBcIi9hcGkvUGVyc29uXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVpIH0gZnJvbSBcIkBVaVwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCJATW9kZWxzL1Jlc3VsdFwiO1xyXG5pbXBvcnQgQXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRyYW5zZm9ybVVybCB9IGZyb20gXCJkb21haW4td2FpdFwiO1xyXG5pbXBvcnQganNvblRvVXJsIGZyb20gXCJqc29uLXRvLXVybFwiO1xyXG5pbXBvcnQgeyBpc05vZGUgfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdE9wdGlvbnMge1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBkYXRhPzogYW55O1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiIHwgXCJQT1NUXCIgfCBcIlBVVFwiIHwgXCJQQVRDSFwiIHwgXCJERUxFVEVcIjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2VuZEZvcm1EYXRhT3B0aW9ucyB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGRhdGE6IEZvcm1EYXRhO1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIlBBVENIXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGJhc2UgY2xhc3Mgb2YgdGhlIGlzb21vcnBoaWMgc2VydmljZS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTZXJ2aWNlQmFzZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHJlcXVlc3Qgd2l0aCBKU09OIGRhdGEuXHJcbiAgICAgKiBAcGFyYW0gb3B0c1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlcXVlc3RKc29uPFQ+KG9wdHM6IElSZXF1ZXN0T3B0aW9ucyk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XHJcblxyXG4gICAgICAgIHZhciBheGlvc1Jlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIG9wdHMudXJsID0gdHJhbnNmb3JtVXJsKG9wdHMudXJsKTsgLy8gQWxsb3cgcmVxdWVzdHMgYWxzbyBmb3IgTm9kZS5cclxuXHJcbiAgICAgICAgdmFyIHByb2Nlc3NRdWVyeSA9ICh1cmw6IHN0cmluZywgZGF0YTogYW55KTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt1cmx9PyR7anNvblRvVXJsKGRhdGEpfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgYXhpb3NSZXF1ZXN0Q29uZmlnIDogQXhpb3NSZXF1ZXN0Q29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoaXNOb2RlKCkpIHtcclxuICAgICAgICAgICAgLy8gVXNlZCBmb3IgU1NSIHJlcXVlc3RzIGZyb20gdGhlIHdlYiBzZXJ2ZXIgdG8gTm9kZVNlcnZpY2VzLlxyXG4gICAgICAgICAgICBheGlvc1JlcXVlc3RDb25maWcgPSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29va2llOiBHbG9iYWxzLmdldERhdGEoKS5wcml2YXRlLmNvb2tpZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wdHMubWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5nZXQocHJvY2Vzc1F1ZXJ5KG9wdHMudXJsLCBvcHRzLmRhdGEpLCBheGlvc1JlcXVlc3RDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnBvc3Qob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnB1dChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc1JlcXVlc3RDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wYXRjaChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc1JlcXVlc3RDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRFTEVURVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MuZGVsZXRlKHByb2Nlc3NRdWVyeShvcHRzLnVybCwgb3B0cy5kYXRhKSwgYXhpb3NSZXF1ZXN0Q29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmVzdWx0KGF4aW9zUmVzdWx0LmRhdGEudmFsdWUsIC4uLmF4aW9zUmVzdWx0LmRhdGEuZXJyb3JzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmVzdWx0KG51bGwsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgVWkuc2hvd0Vycm9ycyguLi5yZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNlbmQgZmlsZXMgdG8gdGhlIHNlcnZlci5cclxuICAgICAqIEBwYXJhbSBvcHRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2VuZEZvcm1EYXRhPFQ+KG9wdHM6IElTZW5kRm9ybURhdGFPcHRpb25zKTogUHJvbWlzZTxSZXN1bHQ8VD4+IHtcclxuICAgICAgICB2YXIgYXhpb3NSZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG5cclxuICAgICAgICBvcHRzLnVybCA9IHRyYW5zZm9ybVVybChvcHRzLnVybCk7IC8vIEFsbG93IHJlcXVlc3RzIGFsc28gZm9yIE5vZGUuXHJcblxyXG4gICAgICAgIHZhciBheGlvc09wdHMgPSB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3B0cy5tZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wb3N0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zT3B0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wdXQob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NPcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucGF0Y2gob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NPcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmVzdWx0KGF4aW9zUmVzdWx0LmRhdGEudmFsdWUsIC4uLmF4aW9zUmVzdWx0LmRhdGEuZXJyb3JzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgUmVzdWx0KG51bGwsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgVWkuc2hvd0Vycm9ycyguLi5yZXN1bHQuZXJyb3JzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJTG9naW5Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lMb2dpbk1vZGVsXCI7XHJcbmltcG9ydCB7IElTZXJ2aWNlVXNlciB9IGZyb20gXCJATW9kZWxzL0lTZXJ2aWNlVXNlclwiO1xyXG5pbXBvcnQgeyBjbG9uZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBBY2NvdW50U2VydmljZSBmcm9tIFwiQFNlcnZpY2VzL0FjY291bnRTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFwcFRodW5rQWN0aW9uIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgTG9naW5TdG9yZSB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uTG9hZGluZzogYm9vbGVhbjtcclxuICAgICAgICAgICAgbG9naW5TdWNjZXNzOiBib29sZWFuO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gQWN0aW9ucyB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogWW91IG5lZWQgdG8gaGF2ZSB0aGUgaW5pdGlhbCBzdGF0ZSB0b1xyXG4gICAgICAgICAqIHJlc2V0IHRoZSBpbmRpY2F0b3JzIChlLmcuIGxvZ2luU3VjY2VzcylcclxuICAgICAgICAgKiB0aGF0IGNhbGwgcmVkaXJlY3Qgb3IgYW55IG90aGVyIGFjdGlvbnMuXHJcbiAgICAgICAgICogSXQgbXVzdCBiZSBjYWxsZWQgaW4gbWV0aG9kICdjb21wb25lbnREaWRNb3VudCdcclxuICAgICAgICAgKiBvZiBhIGNvbXBvbmVudC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBJbml0ID0gXCJMT0dJTl9JTklUXCIsXHJcbiAgICAgICAgUmVxdWVzdCA9IFwiTE9HSU5fUkVRVUVTVFwiLFxyXG4gICAgICAgIFN1Y2Nlc3MgPSBcIkxPR0lOX1NVQ0NFU1NcIixcclxuICAgICAgICBGYWlsdXJlID0gXCJMT0dJTl9GQUlMVVJFXCJcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUluaXQge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuSW5pdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSVN1Y2Nlc3Mge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuU3VjY2VzcztcclxuICAgICAgICBwYXlsb2FkOiBJU2VydmljZVVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElGYWlsdXJlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkZhaWx1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBLbm93bkFjdGlvbiA9IElJbml0IHwgSVJlcXVlc3QgfCBJU3VjY2VzcyB8IElGYWlsdXJlO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgICAgICBpbml0OiAoKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkluaXQgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luUmVxdWVzdDogKG1vZGVsOiBJTG9naW5Nb2RlbCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuUmVxdWVzdCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBBY2NvdW50U2VydmljZS5sb2dpbihtb2RlbCk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRmFpbHVyZSB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlN1Y2Nlc3MsIHBheWxvYWQ6IHJlc3VsdC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZSA9IHtcclxuICAgICAgICBpbmRpY2F0b3JzOiB7XHJcbiAgICAgICAgICAgIG9wZXJhdGlvbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2dpblN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxJU3RhdGU+ID0gKGN1cnJlbnRTdGF0ZTogSVN0YXRlLCBpbmNvbWluZ0FjdGlvbjogQWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gaW5jb21pbmdBY3Rpb24gYXMgS25vd25BY3Rpb247XHJcblxyXG4gICAgICAgIHZhciBjbG9uZUluZGljYXRvcnMgPSAoKSA9PiBjbG9uZShjdXJyZW50U3RhdGUuaW5kaWNhdG9ycyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkluaXQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5TdWNjZXNzOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5sb2dpblN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5GYWlsdXJlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNsb25lIH0gZnJvbSBcIkBVdGlsc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgUGVyc29uU2VydmljZSBmcm9tIFwiQFNlcnZpY2VzL1BlcnNvblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSVBlcnNvbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSVBlcnNvbk1vZGVsXCI7XHJcbmltcG9ydCB7IHdhaXQgfSBmcm9tIFwiZG9tYWluLXdhaXRcIjtcclxuXHJcbmV4cG9ydCBtb2R1bGUgUGVyc29uU3RvcmUge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgICAgICBwZW9wbGU6IElQZXJzb25Nb2RlbFtdLFxyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uTG9hZGluZzogYm9vbGVhbjtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBlbnVtIEFjdGlvbnMge1xyXG5cclxuICAgICAgICBHZXRBbGxSZXF1ZXN0ID0gXCJQRVJTT05fR0VUX0FMTF9SRVFVRVNUXCIsXHJcbiAgICAgICAgR2V0QWxsUmVzcG9uc2UgPSBcIlBFUlNPTl9HRVRfQUxMX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgQWRkUmVxdWVzdCA9IFwiUEVSU09OX0FERF9SRVFVRVNUXCIsXHJcbiAgICAgICAgQWRkUmVzcG9uc2UgPSBcIlBFUlNPTl9BRERfUkVTUE9OU0VcIixcclxuICAgICAgICBVcGRhdGVSZXF1ZXN0ID0gXCJQRVJTT05fVVBEQVRFX1JFUVVFU1RcIixcclxuICAgICAgICBVcGRhdGVSZXNwb25zZSA9IFwiUEVSU09OX1VQREFURV9SRVNQT05TRVwiLFxyXG4gICAgICAgIERlbGV0ZVJlcXVlc3QgPSBcIlBFUlNPTl9ERUxFVEVfUkVRVUVTVFwiLFxyXG4gICAgICAgIERlbGV0ZVJlc3BvbnNlID0gXCJQRVJTT05fREVMRVRFX1JFU1BPTlNFXCJcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUdldEFsbFJlcXVlc3Qge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuR2V0QWxsUmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUdldEFsbFJlc3BvbnNlIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkdldEFsbFJlc3BvbnNlO1xyXG4gICAgICAgIHBheWxvYWQ6IElQZXJzb25Nb2RlbFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJQWRkUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5BZGRSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJQWRkUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuQWRkUmVzcG9uc2U7XHJcbiAgICAgICAgcGF5bG9hZDogSVBlcnNvbk1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVXBkYXRlUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJVXBkYXRlUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuVXBkYXRlUmVzcG9uc2U7XHJcbiAgICAgICAgcGF5bG9hZDogSVBlcnNvbk1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRGVsZXRlUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5EZWxldGVSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJRGVsZXRlUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVzcG9uc2U7XHJcbiAgICAgICAgaWQ6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIEtub3duQWN0aW9uID1cclxuICAgICAgICBJR2V0QWxsUmVxdWVzdCB8IElHZXRBbGxSZXNwb25zZSB8XHJcbiAgICAgICAgSUFkZFJlcXVlc3QgfCBJQWRkUmVzcG9uc2UgfFxyXG4gICAgICAgIElVcGRhdGVSZXF1ZXN0IHwgSVVwZGF0ZVJlc3BvbnNlIHxcclxuICAgICAgICBJRGVsZXRlUmVxdWVzdCB8IElEZWxldGVSZXNwb25zZTtcclxuXHJcbiAgICBleHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICAgICAgZ2V0QWxsUmVxdWVzdDogKCk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCB3YWl0KGFzeW5jICh0cmFuc2Zvcm1VcmwpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2VydmVyIHByZXJlbmRlcmluZy5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5HZXRBbGxSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBQZXJzb25TZXJ2aWNlLmdldEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkdldEFsbFJlc3BvbnNlLCBwYXlsb2FkOiByZXN1bHQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFkZFJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS5hZGQobW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsLmlkID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkFkZFJlc3BvbnNlLCBwYXlsb2FkOiBtb2RlbCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlUmVxdWVzdDogKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLlVwZGF0ZVJlcXVlc3QgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgUGVyc29uU2VydmljZS51cGRhdGUobW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXNwb25zZSwgcGF5bG9hZDogbW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZVJlcXVlc3Q6IChpZDogbnVtYmVyKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5EZWxldGVSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IFBlcnNvblNlcnZpY2UuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVzcG9uc2UsIGlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIHBlb3BsZTogW10sXHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8SVN0YXRlPiA9IChjdXJyZW50U3RhdGU6IElTdGF0ZSwgaW5jb21pbmdBY3Rpb246IEFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGluY29taW5nQWN0aW9uIGFzIEtub3duQWN0aW9uO1xyXG5cclxuICAgICAgICB2YXIgY2xvbmVJbmRpY2F0b3JzID0gKCkgPT4gY2xvbmUoY3VycmVudFN0YXRlLmluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5HZXRBbGxSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkdldEFsbFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzLCBwZW9wbGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5VcGRhdGVSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlVwZGF0ZVJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtVG9VcGRhdGUgPSBkYXRhLmZpbHRlcih4ID0+IHguaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXTtcclxuICAgICAgICAgICAgICAgIGl0ZW1Ub1VwZGF0ZS5maXJzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5maXJzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9VcGRhdGUubGFzdE5hbWUgPSBhY3Rpb24ucGF5bG9hZC5sYXN0TmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5BZGRSZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkFkZFJlc3BvbnNlOlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBjbG9uZShjdXJyZW50U3RhdGUucGVvcGxlKTtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMsIHBlb3BsZTogZGF0YSB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRGVsZXRlUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5EZWxldGVSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY2xvbmUoY3VycmVudFN0YXRlLnBlb3BsZSkuZmlsdGVyKHggPT4geC5pZCAhPT0gYWN0aW9uLmlkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBkYXRhIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY3VycmVudFN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IExvZ2luU3RvcmUgfSBmcm9tIFwiQFN0b3JlL0xvZ2luU3RvcmVcIjtcclxuaW1wb3J0IHsgUGVyc29uU3RvcmUgfSBmcm9tIFwiQFN0b3JlL1BlcnNvblN0b3JlXCI7XHJcblxyXG4vLyBUaGUgdG9wLWxldmVsIHN0YXRlIG9iamVjdFxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUuSVN0YXRlO1xyXG4gICAgcGVyc29uOiBQZXJzb25TdG9yZS5JU3RhdGU7XHJcbn1cclxuXHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgbG9naW46IExvZ2luU3RvcmUucmVkdWNlcixcclxuICAgIHBlcnNvbjogUGVyc29uU3RvcmUucmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uQXN5bmM8VEFjdGlvbiwgVFJlc3VsdD4ge1xyXG4gICAgKGRpc3BhdGNoOiAoYWN0aW9uOiBUQWN0aW9uKSA9PiB2b2lkLCBnZXRTdGF0ZTogKCkgPT4gQXBwbGljYXRpb25TdGF0ZSkgOiBQcm9taXNlPFRSZXN1bHQ+XHJcbn0iLCJpbXBvcnQgeyBBcHBUaHVua0FjdGlvbkFzeW5jIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgcHJvY2VzczogYW55O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lPFQ+KG9iamVjdDogVCk6IFQge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9taXNlRnJvbUFjdGlvbjxULCBWPihhc3luY0FjdGlvbkNyZWF0b3I6IEFwcFRodW5rQWN0aW9uQXN5bmM8VCwgVj4pOiBQcm9taXNlPFY+IHtcclxuICAgIHJldHVybiAoYXN5bmNBY3Rpb25DcmVhdG9yIGFzIGFueSkgYXMgUHJvbWlzZTxWPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIElzIHNlcnZlciBwcmVyZW5kZXJpbmcgYnkgTm9kZS5qcy5cclxuICogVGhlcmUgY2FuJ3QgYmUgYW55IERPTTogd2luZG93LCBkb2N1bWVudCwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcgJiYgcHJvY2Vzcy52ZXJzaW9ucyAmJiAhIXByb2Nlc3MudmVyc2lvbnMubm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqKTogYm9vbGVhbiB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Rm9ybShmb3JtOiBIVE1MRm9ybUVsZW1lbnQpIDogdm9pZCB7XHJcbiAgICB2YXIgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIik7XHJcbiAgICBpbnB1dHMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXRUeXBlID0geC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgIGlmIChpbnB1dFR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBpbnB1dFR5cGUgPT09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAoeCBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoeCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBOU2VyaWFsaXplSnNvbl8xID0gcmVxdWlyZShcIi4vc3JjL05TZXJpYWxpemVKc29uXCIpO1xyXG5leHBvcnRzLk5TZXJpYWxpemVKc29uID0gTlNlcmlhbGl6ZUpzb25fMS5OU2VyaWFsaXplSnNvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5wbHVnaW5OYW1lID0gXCJOU2VyaWFsaXplSnNvblwiO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db25zdGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFV0aWxfMSA9IHJlcXVpcmUoXCIuL1V0aWxcIik7XHJcbnZhciBQYXJzZXJMaXN0XzEgPSByZXF1aXJlKFwiLi9QYXJzZXJMaXN0XCIpO1xyXG52YXIgQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9Db25zdGFudHNcIik7XHJcbnZhciBOU2VyaWFsaXplSnNvbiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBOU2VyaWFsaXplSnNvbigpIHtcclxuICAgIH1cclxuICAgIE5TZXJpYWxpemVKc29uLnBhcnNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcclxuICAgICAgICBpZiAoVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkodHlwZSkpIHtcclxuICAgICAgICAgICAgdmFyIGF1dG9QYXJzZXIgPSB0aGlzLnBhcnNlcnMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4Lm5hbWUgPT09IFwiYXV0b1wiOyB9KVswXTtcclxuICAgICAgICAgICAgcmV0dXJuIGF1dG9QYXJzZXIucGFyc2UodmFsdWUsIHRoaXMub3B0aW9ucy5mb3JjZU51bGxPbkVtcHR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhcnNlciA9IHRoaXMucGFyc2Vycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZSA9PT0gdHlwZTsgfSlbMF07XHJcbiAgICAgICAgaWYgKHBhcnNlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IENvbnN0YW50c18xLnBsdWdpbk5hbWUgKyBcIjogY291bGRuJ3QgZmluZCB0aGVyIHBhcnNlciBmb3IgdHlwZSAnXCIgKyB0eXBlICsgXCInXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZXIucGFyc2UodmFsdWUsIHRoaXMub3B0aW9ucy5mb3JjZU51bGxPbkVtcHR5KTtcclxuICAgIH07XHJcbiAgICBOU2VyaWFsaXplSnNvbi5zZXJpYWxpemVGb3JtID0gZnVuY3Rpb24gKGh0bWxGb3JtRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIG5vZGVMaXN0ID0gaHRtbEZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtcclxuICAgICAgICB2YXIgaHRtbElucHV0RWxlbWVudHMgPSBVdGlsXzEubm9kZUxpc3RUb0FycmF5KG5vZGVMaXN0KTtcclxuICAgICAgICB2YXIgY2hlY2tlZEVsZW1lbnRzID0gaHRtbElucHV0RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIGlmICh4LmRpc2FibGVkIHx8XHJcbiAgICAgICAgICAgICAgICAoKHguZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJyYWRpb1wiICYmICF4LmNoZWNrZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguZ2V0QXR0cmlidXRlKFwidHlwZVwiKSA9PT0gXCJjaGVja2JveFwiICYmICF4LmNoZWNrZWQpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXN1bHRPYmplY3QgPSB7fTtcclxuICAgICAgICBjaGVja2VkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoeCkgeyByZXR1cm4gX3RoaXMuc2VyaWFsaXplSW50b09iamVjdChyZXN1bHRPYmplY3QsIHgpOyB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0T2JqZWN0O1xyXG4gICAgfTtcclxuICAgIE5TZXJpYWxpemVKc29uLnNlcmlhbGl6ZUludG9PYmplY3QgPSBmdW5jdGlvbiAob2JqLCBodG1sSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaHRtbElucHV0RWxlbWVudC52YWx1ZTtcclxuICAgICAgICB2YXIgcGF0aFN0ciA9IGh0bWxJbnB1dEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcclxuICAgICAgICBpZiAoVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkocGF0aFN0cikpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgdmFyIHBhdGggPSBbXTtcclxuICAgICAgICB2YXIgdHlwZSA9IG51bGw7XHJcbiAgICAgICAgdmFyIHR5cGVJbmRleCA9IHBhdGhTdHIuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHR5cGVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBwYXRoU3RyLnN1YnN0cmluZyh0eXBlSW5kZXggKyAxLCBwYXRoU3RyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBcInNraXBcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoU3RyID0gcGF0aFN0ci5zdWJzdHJpbmcoMCwgdHlwZUluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGUgPSBodG1sSW5wdXRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWUtdHlwZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5vbkJlZm9yZVBhcnNlVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMub3B0aW9ucy5vbkJlZm9yZVBhcnNlVmFsdWUodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcGFyc2VkVmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUodmFsdWUsIHR5cGUpO1xyXG4gICAgICAgIHZhciBwYXRoTGVuZ3RoID0gMDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZURvdFNlcGFyYXRvckluUGF0aCkge1xyXG4gICAgICAgICAgICB2YXIgYWRkQXJyYXlUb1BhdGggPSBmYWxzZTtcclxuICAgICAgICAgICAgcGF0aCA9IHBhdGhTdHIuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgICAgICBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleE9mQnJhY2tldHMgPSBzdGVwLmluZGV4T2YoXCJbXVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gcGF0aExlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZkJyYWNrZXRzID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgQ29uc3RhbnRzXzEucGx1Z2luTmFtZSArIFwiOiBlcnJvciBpbiBwYXRoICdcIiArIHBhdGhTdHIgKyBcIicgZW1wdHkgdmFsdWVzIGluIHRoZSBwYXRoIG1lYW4gYXJyYXkgYW5kIHNob3VsZCBiZSBhdCB0aGUgZW5kLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE9mQnJhY2tldHMgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoW2luZGV4XSA9IHN0ZXAucmVwbGFjZShcIltdXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRBcnJheVRvUGF0aCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGFkZEFycmF5VG9QYXRoKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoLnB1c2goXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHBhdGggPSBwYXRoU3RyLnNwbGl0KFwiW1wiKS5tYXAoZnVuY3Rpb24gKHgsIGkpIHsgcmV0dXJuIHgucmVwbGFjZShcIl1cIiwgXCJcIik7IH0pO1xyXG4gICAgICAgICAgICBwYXRoTGVuZ3RoID0gcGF0aC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHBhdGguZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gcGF0aExlbmd0aCAtIDEgJiYgVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkoc3RlcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgQ29uc3RhbnRzXzEucGx1Z2luTmFtZSArIFwiOiBlcnJvciBpbiBwYXRoICdcIiArIHBhdGhTdHIgKyBcIicgZW1wdHkgdmFsdWVzIGluIHRoZSBwYXRoIG1lYW4gYXJyYXkgYW5kIHNob3VsZCBiZSBhdCB0aGUgZW5kLlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hBbmRTZXQob2JqLCBwYXRoLCAwLCBwYXJzZWRWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcbiAgICBOU2VyaWFsaXplSnNvbi5zZWFyY2hBbmRTZXQgPSBmdW5jdGlvbiAoY3VycmVudE9iaiwgcGF0aCwgcGF0aEluZGV4LCBwYXJzZWRWYWx1ZSwgYXJyYXlJbnRlcm5hbEluZGV4KSB7XHJcbiAgICAgICAgaWYgKGFycmF5SW50ZXJuYWxJbmRleCA9PT0gdm9pZCAwKSB7IGFycmF5SW50ZXJuYWxJbmRleCA9IDA7IH1cclxuICAgICAgICB2YXIgc3RlcCA9IHBhdGhbcGF0aEluZGV4XTtcclxuICAgICAgICB2YXIgaXNGaW5hbFN0ZXAgPSBwYXRoSW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMTtcclxuICAgICAgICB2YXIgbmV4dFN0ZXAgPSBwYXRoW3BhdGhJbmRleCArIDFdO1xyXG4gICAgICAgIGlmIChjdXJyZW50T2JqID09IG51bGwgfHwgdHlwZW9mIGN1cnJlbnRPYmogPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBwYXRoID0gcGF0aC5tYXAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIFV0aWxfMS5pc1N0cmluZ051bGxPckVtcHR5KHgpID8gXCJbXVwiIDogeDsgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKENvbnN0YW50c18xLnBsdWdpbk5hbWUgKyBcIjogdGhlcmUgd2FzIGFuIGVycm9yIGluIHBhdGggJ1wiICsgcGF0aCArIFwiJyBpbiBzdGVwICdcIiArIHN0ZXAgKyBcIicuXCIpO1xyXG4gICAgICAgICAgICB0aHJvdyBDb25zdGFudHNfMS5wbHVnaW5OYW1lICsgXCI6IGVycm9yLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNBcnJheVN0ZXAgPSBVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eShzdGVwKTtcclxuICAgICAgICB2YXIgaXNJbnRlZ2VyU3RlcCA9IFV0aWxfMS5pc1N0cmluZ0ludGVnZXIoc3RlcCk7XHJcbiAgICAgICAgdmFyIGlzTmV4dFN0ZXBBbkFycmF5ID0gVXRpbF8xLmlzU3RyaW5nSW50ZWdlcihuZXh0U3RlcCkgfHwgVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkobmV4dFN0ZXApO1xyXG4gICAgICAgIGlmIChpc0FycmF5U3RlcCkge1xyXG4gICAgICAgICAgICBpZiAoaXNGaW5hbFN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRPYmoucHVzaChwYXJzZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9ialthcnJheUludGVybmFsSW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqW2FycmF5SW50ZXJuYWxJbmRleF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0ZXAgPSBhcnJheUludGVybmFsSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBhcnJheUludGVybmFsSW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0ludGVnZXJTdGVwICYmIHRoaXMub3B0aW9ucy51c2VOdW1LZXlzQXNBcnJheUluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0ZXAgPSBwYXJzZUludChzdGVwKTtcclxuICAgICAgICAgICAgaWYgKCFVdGlsXzEuaXNBcnJheShjdXJyZW50T2JqKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9iaiA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0ZpbmFsU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9ialtzdGVwXSA9IHBhcnNlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPYmpbc3RlcF0gPT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqW3N0ZXBdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZpbmFsU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE9ialtzdGVwXSA9IHBhcnNlZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VOdW1LZXlzQXNBcnJheUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmV4dFN0ZXBBbkFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVXRpbF8xLmlzQXJyYXkoY3VycmVudE9ialtzdGVwXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqW3N0ZXBdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9ialtzdGVwXSA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9ialtzdGVwXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50T2JqW3N0ZXBdID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmpbc3RlcF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXRoSW5kZXgrKztcclxuICAgICAgICB0aGlzLnNlYXJjaEFuZFNldChjdXJyZW50T2JqW3N0ZXBdLCBwYXRoLCBwYXRoSW5kZXgsIHBhcnNlZFZhbHVlLCBhcnJheUludGVybmFsSW5kZXgpO1xyXG4gICAgfTtcclxuICAgIE5TZXJpYWxpemVKc29uLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgdXNlTnVtS2V5c0FzQXJyYXlJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VEb3RTZXBhcmF0b3JJblBhdGg6IGZhbHNlLFxyXG4gICAgICAgIGZvcmNlTnVsbE9uRW1wdHk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgTlNlcmlhbGl6ZUpzb24ucGFyc2VycyA9IFBhcnNlckxpc3RfMS5wYXJzZXJMaXN0LnNsaWNlKCk7XHJcbiAgICByZXR1cm4gTlNlcmlhbGl6ZUpzb247XHJcbn0oKSk7XHJcbmV4cG9ydHMuTlNlcmlhbGl6ZUpzb24gPSBOU2VyaWFsaXplSnNvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TlNlcmlhbGl6ZUpzb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFV0aWxfMSA9IHJlcXVpcmUoXCIuL1V0aWxcIik7XHJcbmV4cG9ydHMucGFyc2VyTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImF1dG9cIixcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHZhbCwgZm9yY2VOdWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9yY2VOdWxsID8gbnVsbCA6IHZhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsLnRvU3RyaW5nKCkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LnRvTG93ZXJDYXNlKCkgPT09IFwibnVsbFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFycmF5ID0gcmVzdWx0LnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFycmF5Lm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdW1iZXIoeCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKFV0aWxfMS5pc1N0cmluZ0pzb25PYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIm51bWJlclwiLFxyXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodmFsLCBmb3JjZU51bGwpIHtcclxuICAgICAgICAgICAgaWYgKFV0aWxfMS5pc1N0cmluZ051bGxPckVtcHR5KHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JjZU51bGwgPyBudWxsIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoVXRpbF8xLmlzU3RyaW5nTnVtYmVyKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImJvb2xlYW5cIixcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHZhbCwgZm9yY2VOdWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9yY2VOdWxsID8gbnVsbCA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGlmICh2YWwgPT09IFwidHJ1ZVwiIHx8IHZhbCA9PT0gXCIxXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh2YWwsIGZvcmNlTnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkodmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbC50b1N0cmluZygpLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC50b0xvd2VyQ2FzZSgpID09PSBcIm51bGxcIiB8fCAocmVzdWx0ID09PSBcIlwiICYmIGZvcmNlTnVsbCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiYXJyYXlbYXV0b11cIixcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHZhbCwgZm9yY2VOdWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9yY2VOdWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlciA9IGV4cG9ydHMucGFyc2VyTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHgubmFtZSA9PT0gXCJhdXRvXCI7IH0pWzBdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlci5wYXJzZSh4LnRyaW0oKSwgZm9yY2VOdWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImFycmF5W3N0cmluZ11cIixcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHZhbCwgZm9yY2VOdWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9yY2VOdWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4geC50cmltKCkudG9TdHJpbmcoKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImFycmF5W251bWJlcl1cIixcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHZhbCwgZm9yY2VOdWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChVdGlsXzEuaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9yY2VOdWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAoeCkgeyByZXR1cm4gcGFyc2VGbG9hdCh4LnRyaW0oKSk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJqc29uXCIsXHJcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh2YWwsIGZvcmNlTnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoVXRpbF8xLmlzU3RyaW5nTnVsbE9yRW1wdHkodmFsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcmNlTnVsbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFyc2VyTGlzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5mdW5jdGlvbiBpc1N0cmluZ0pzb25PYmplY3QoYXJnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIEpTT04ucGFyc2UoYXJnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nSnNvbk9iamVjdCA9IGlzU3RyaW5nSnNvbk9iamVjdDtcclxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZyk7XHJcbn1cclxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcclxuZnVuY3Rpb24gaXNTdHJpbmdOdW1iZXIoYXJnKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PSAnbnVtYmVyJyB8fCAvXlstK10/XFxkKyhbRWVdWystXT9cXGQrKT8oXFwuXFxkKyk/JC8udGVzdChhcmcpO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJpbmdOdW1iZXIgPSBpc1N0cmluZ051bWJlcjtcclxuZnVuY3Rpb24gaXNTdHJpbmdJbnRlZ2VyKGFyZykge1xyXG4gICAgcmV0dXJuIC9eWy0rXT9cXGQrKFtFZV1bKy1dP1xcZCspPyQvLnRlc3QoYXJnKTtcclxufVxyXG5leHBvcnRzLmlzU3RyaW5nSW50ZWdlciA9IGlzU3RyaW5nSW50ZWdlcjtcclxuZnVuY3Rpb24gaXNTdHJpbmdOdWxsT3JFbXB0eShhcmcpIHtcclxuICAgIHJldHVybiBhcmcgPT0gbnVsbCB8fCBhcmcudHJpbSgpID09PSBcIlwiO1xyXG59XHJcbmV4cG9ydHMuaXNTdHJpbmdOdWxsT3JFbXB0eSA9IGlzU3RyaW5nTnVsbE9yRW1wdHk7XHJcbmV4cG9ydHMubm9kZUxpc3RUb0FycmF5ID0gZnVuY3Rpb24gKG5vZGVMaXN0KSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1VdGlsLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzO1xuKGZ1bmN0aW9uIChjb25zdGFudHMpIHtcbiAgICBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24gPSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0YW50cy5ib29sVHJ1ZSA9IHRydWU7XG59KShjb25zdGFudHMgfHwgKGNvbnN0YW50cyA9IHt9KSk7XG5mdW5jdGlvbiBiaW5kKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoIWRlc2NyaXB0b3IgfHwgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlICE9PSBjb25zdGFudHMudHlwZU9mRnVuY3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1ldGhvZHMgY2FuIGJlIGRlY29yYXRlZCB3aXRoIEBiaW5kLiA8XCIgKyBwcm9wZXJ0eUtleSArIFwiPiBpcyBub3QgYSBtZXRob2QhXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYm91bmQgPSBkZXNjcmlwdG9yLnZhbHVlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAvLyBDcmVkaXRzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL2F1dG9iaW5kLWRlY29yYXRvciBmb3IgbWVtb2l6aW5nIHRoZSByZXN1bHQgb2YgYmluZCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eUtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBib3VuZCxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGNvbnN0YW50cy5ib29sVHJ1ZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogY29uc3RhbnRzLmJvb2xUcnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBib3VuZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmJpbmQgPSBiaW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0gYmluZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcDMtbmF0aXZlL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2RvbWFpbi13YWl0L2Rpc3QvY2pzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2ludmFyaWFudC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9qc29uLXRvLXVybC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9udmFsLXRpcHB5L2Rpc3QvY2pzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1wYWdpbmF0aW5nL2Rpc3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIEhUTUw1IGhpc3RvcnkuXG4gKi9cbnZhciBCcm93c2VyUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcm93c2VyUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gKDAsIF9oaXN0b3J5LmNyZWF0ZUJyb3dzZXJIaXN0b3J5KShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaGlzdG9yeSwgXCI8QnJvd3NlclJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKTtcbiAgfTtcblxuICBCcm93c2VyUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXIyLmRlZmF1bHQsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gQnJvd3NlclJvdXRlcjtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkJyb3dzZXJSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGZvcmNlUmVmcmVzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGtleUxlbmd0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBCcm93c2VyUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKFwid2FybmluZ1wiKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9oaXN0b3J5ID0gcmVxdWlyZShcImhpc3RvcnlcIik7XG5cbnZhciBfUm91dGVyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG52YXIgSGFzaFJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIYXNoUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIYXNoUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGFzaFJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9ICgwLCBfaGlzdG9yeS5jcmVhdGVIYXNoSGlzdG9yeSkoX3RoaXMucHJvcHMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEhhc2hSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBIYXNoUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyMi5kZWZhdWx0LCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhhc2hSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5IYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGhhc2hUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFtcImhhc2hiYW5nXCIsIFwibm9zbGFzaFwiLCBcInNsYXNoXCJdKSxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IEhhc2hSb3V0ZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoXCJpbnZhcmlhbnRcIik7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGlzTW9kaWZpZWRFdmVudCA9IGZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59O1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG52YXIgTGluayA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaW5rLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluayk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsaWNrKSBfdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIC8vIG9uQ2xpY2sgcHJldmVudGVkIGRlZmF1bHRcbiAgICAgIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAvLyBpZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdCBjbGlja3NcbiAgICAgICFfdGhpcy5wcm9wcy50YXJnZXQgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIGlnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdmFyIGhpc3RvcnkgPSBfdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICByZXBsYWNlID0gX3RoaXMkcHJvcHMucmVwbGFjZSxcbiAgICAgICAgICAgICAgdG8gPSBfdGhpcyRwcm9wcy50bztcblxuXG4gICAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBMaW5rLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHJlcGxhY2UgPSBfcHJvcHMucmVwbGFjZSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgIGlubmVyUmVmID0gX3Byb3BzLmlubmVyUmVmLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFtcInJlcGxhY2VcIiwgXCJ0b1wiLCBcImlubmVyUmVmXCJdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRoaXMuY29udGV4dC5yb3V0ZXIsIFwiWW91IHNob3VsZCBub3QgdXNlIDxMaW5rPiBvdXRzaWRlIGEgPFJvdXRlcj5cIik7XG5cbiAgICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkodG8gIT09IHVuZGVmaW5lZCwgJ1lvdSBtdXN0IHNwZWNpZnkgdGhlIFwidG9cIiBwcm9wZXJ0eScpO1xuXG4gICAgdmFyIGhpc3RvcnkgPSB0aGlzLmNvbnRleHQucm91dGVyLmhpc3Rvcnk7XG5cbiAgICB2YXIgbG9jYXRpb24gPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyAoMCwgX2hpc3RvcnkuY3JlYXRlTG9jYXRpb24pKHRvLCBudWxsLCBudWxsLCBoaXN0b3J5LmxvY2F0aW9uKSA6IHRvO1xuXG4gICAgdmFyIGhyZWYgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7IG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGhyZWY6IGhyZWYsIHJlZjogaW5uZXJSZWYgfSkpO1xuICB9O1xuXG4gIHJldHVybiBMaW5rO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgdGFyZ2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgcmVwbGFjZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICB0bzogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY10pXG59O1xuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcGxhY2U6IGZhbHNlXG59O1xuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgaGlzdG9yeTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gICAgICBwdXNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlcGxhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgY3JlYXRlSHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX01lbW9yeVJvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvTWVtb3J5Um91dGVyXCIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW1vcnlSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfTWVtb3J5Um91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1JvdXRlID0gcmVxdWlyZShcIi4vUm91dGVcIik7XG5cbnZhciBfUm91dGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUpO1xuXG52YXIgX0xpbmsgPSByZXF1aXJlKFwiLi9MaW5rXCIpO1xuXG52YXIgX0xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xudmFyIE5hdkxpbmsgPSBmdW5jdGlvbiBOYXZMaW5rKF9yZWYpIHtcbiAgdmFyIHRvID0gX3JlZi50byxcbiAgICAgIGV4YWN0ID0gX3JlZi5leGFjdCxcbiAgICAgIHN0cmljdCA9IF9yZWYuc3RyaWN0LFxuICAgICAgbG9jYXRpb24gPSBfcmVmLmxvY2F0aW9uLFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3JlZi5hY3RpdmVDbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGFjdGl2ZVN0eWxlID0gX3JlZi5hY3RpdmVTdHlsZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGdldElzQWN0aXZlID0gX3JlZi5pc0FjdGl2ZSxcbiAgICAgIGFyaWFDdXJyZW50ID0gX3JlZltcImFyaWEtY3VycmVudFwiXSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widG9cIiwgXCJleGFjdFwiLCBcInN0cmljdFwiLCBcImxvY2F0aW9uXCIsIFwiYWN0aXZlQ2xhc3NOYW1lXCIsIFwiY2xhc3NOYW1lXCIsIFwiYWN0aXZlU3R5bGVcIiwgXCJzdHlsZVwiLCBcImlzQWN0aXZlXCIsIFwiYXJpYS1jdXJyZW50XCJdKTtcblxuICB2YXIgcGF0aCA9ICh0eXBlb2YgdG8gPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZih0bykpID09PSBcIm9iamVjdFwiID8gdG8ucGF0aG5hbWUgOiB0bztcblxuICAvLyBSZWdleCB0YWtlbiBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAvYmxvYi9tYXN0ZXIvaW5kZXguanMjTDIwMlxuICB2YXIgZXNjYXBlZFBhdGggPSBwYXRoICYmIHBhdGgucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGUyLmRlZmF1bHQsIHtcbiAgICBwYXRoOiBlc2NhcGVkUGF0aCxcbiAgICBleGFjdDogZXhhY3QsXG4gICAgc3RyaWN0OiBzdHJpY3QsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiBjaGlsZHJlbihfcmVmMikge1xuICAgICAgdmFyIGxvY2F0aW9uID0gX3JlZjIubG9jYXRpb24sXG4gICAgICAgICAgbWF0Y2ggPSBfcmVmMi5tYXRjaDtcblxuICAgICAgdmFyIGlzQWN0aXZlID0gISEoZ2V0SXNBY3RpdmUgPyBnZXRJc0FjdGl2ZShtYXRjaCwgbG9jYXRpb24pIDogbWF0Y2gpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpbmsyLmRlZmF1bHQsIF9leHRlbmRzKHtcbiAgICAgICAgdG86IHRvLFxuICAgICAgICBjbGFzc05hbWU6IGlzQWN0aXZlID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSkuam9pbihcIiBcIikgOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpIDogc3R5bGUsXG4gICAgICAgIFwiYXJpYS1jdXJyZW50XCI6IGlzQWN0aXZlICYmIGFyaWFDdXJyZW50IHx8IG51bGxcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuTmF2TGluay5wcm9wVHlwZXMgPSB7XG4gIHRvOiBfTGluazIuZGVmYXVsdC5wcm9wVHlwZXMudG8sXG4gIGV4YWN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0cmljdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBsb2NhdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGFjdGl2ZUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFjdGl2ZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBpc0FjdGl2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBcImFyaWEtY3VycmVudFwiOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFtcInBhZ2VcIiwgXCJzdGVwXCIsIFwibG9jYXRpb25cIiwgXCJkYXRlXCIsIFwidGltZVwiLCBcInRydWVcIl0pXG59O1xuXG5OYXZMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICBcImFyaWEtY3VycmVudFwiOiBcInBhZ2VcIlxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2TGluazsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9tcHQgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1Byb21wdFwiKTtcblxudmFyIF9Qcm9tcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvbXB0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1Byb21wdDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9SZWRpcmVjdCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUmVkaXJlY3RcIik7XG5cbnZhciBfUmVkaXJlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVkaXJlY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUmVkaXJlY3QyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUm91dGUgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JvdXRlMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1N0YXRpY1JvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyXCIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWNSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3RhdGljUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1N3aXRjaCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvU3dpdGNoXCIpO1xuXG52YXIgX1N3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2l0Y2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU3dpdGNoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2dlbmVyYXRlUGF0aCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvZ2VuZXJhdGVQYXRoXCIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfZ2VuZXJhdGVQYXRoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy53aXRoUm91dGVyID0gZXhwb3J0cy5tYXRjaFBhdGggPSBleHBvcnRzLmdlbmVyYXRlUGF0aCA9IGV4cG9ydHMuU3dpdGNoID0gZXhwb3J0cy5TdGF0aWNSb3V0ZXIgPSBleHBvcnRzLlJvdXRlciA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLlJlZGlyZWN0ID0gZXhwb3J0cy5Qcm9tcHQgPSBleHBvcnRzLk5hdkxpbmsgPSBleHBvcnRzLk1lbW9yeVJvdXRlciA9IGV4cG9ydHMuTGluayA9IGV4cG9ydHMuSGFzaFJvdXRlciA9IGV4cG9ydHMuQnJvd3NlclJvdXRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Ccm93c2VyUm91dGVyMiA9IHJlcXVpcmUoXCIuL0Jyb3dzZXJSb3V0ZXJcIik7XG5cbnZhciBfQnJvd3NlclJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ccm93c2VyUm91dGVyMik7XG5cbnZhciBfSGFzaFJvdXRlcjIgPSByZXF1aXJlKFwiLi9IYXNoUm91dGVyXCIpO1xuXG52YXIgX0hhc2hSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGFzaFJvdXRlcjIpO1xuXG52YXIgX0xpbmsyID0gcmVxdWlyZShcIi4vTGlua1wiKTtcblxudmFyIF9MaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmsyKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIyID0gcmVxdWlyZShcIi4vTWVtb3J5Um91dGVyXCIpO1xuXG52YXIgX01lbW9yeVJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW1vcnlSb3V0ZXIyKTtcblxudmFyIF9OYXZMaW5rMiA9IHJlcXVpcmUoXCIuL05hdkxpbmtcIik7XG5cbnZhciBfTmF2TGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9OYXZMaW5rMik7XG5cbnZhciBfUHJvbXB0MiA9IHJlcXVpcmUoXCIuL1Byb21wdFwiKTtcblxudmFyIF9Qcm9tcHQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvbXB0Mik7XG5cbnZhciBfUmVkaXJlY3QyID0gcmVxdWlyZShcIi4vUmVkaXJlY3RcIik7XG5cbnZhciBfUmVkaXJlY3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmVkaXJlY3QyKTtcblxudmFyIF9Sb3V0ZTIgPSByZXF1aXJlKFwiLi9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZTIpO1xuXG52YXIgX1JvdXRlcjIgPSByZXF1aXJlKFwiLi9Sb3V0ZXJcIik7XG5cbnZhciBfUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcjIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjIgPSByZXF1aXJlKFwiLi9TdGF0aWNSb3V0ZXJcIik7XG5cbnZhciBfU3RhdGljUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0YXRpY1JvdXRlcjIpO1xuXG52YXIgX1N3aXRjaDIgPSByZXF1aXJlKFwiLi9Td2l0Y2hcIik7XG5cbnZhciBfU3dpdGNoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N3aXRjaDIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDIgPSByZXF1aXJlKFwiLi9nZW5lcmF0ZVBhdGhcIik7XG5cbnZhciBfZ2VuZXJhdGVQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dlbmVyYXRlUGF0aDIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSByZXF1aXJlKFwiLi9tYXRjaFBhdGhcIik7XG5cbnZhciBfbWF0Y2hQYXRoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoUGF0aDIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gcmVxdWlyZShcIi4vd2l0aFJvdXRlclwiKTtcblxudmFyIF93aXRoUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhSb3V0ZXIyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Ccm93c2VyUm91dGVyID0gX0Jyb3dzZXJSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLkhhc2hSb3V0ZXIgPSBfSGFzaFJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuTGluayA9IF9MaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy5NZW1vcnlSb3V0ZXIgPSBfTWVtb3J5Um91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5OYXZMaW5rID0gX05hdkxpbmszLmRlZmF1bHQ7XG5leHBvcnRzLlByb21wdCA9IF9Qcm9tcHQzLmRlZmF1bHQ7XG5leHBvcnRzLlJlZGlyZWN0ID0gX1JlZGlyZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZSA9IF9Sb3V0ZTMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGVyID0gX1JvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuU3RhdGljUm91dGVyID0gX1N0YXRpY1JvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuU3dpdGNoID0gX1N3aXRjaDMuZGVmYXVsdDtcbmV4cG9ydHMuZ2VuZXJhdGVQYXRoID0gX2dlbmVyYXRlUGF0aDMuZGVmYXVsdDtcbmV4cG9ydHMubWF0Y2hQYXRoID0gX21hdGNoUGF0aDMuZGVmYXVsdDtcbmV4cG9ydHMud2l0aFJvdXRlciA9IF93aXRoUm91dGVyMy5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX21hdGNoUGF0aCA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfbWF0Y2hQYXRoMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSBleHBvcnRzLmNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbnZhciBhZGRFdmVudExpc3RlbmVyID0gZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA/IG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIGdldENvbmZpcm1hdGlvbiA9IGV4cG9ydHMuZ2V0Q29uZmlybWF0aW9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWFsZXJ0XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cbnZhciBzdXBwb3J0c0hpc3RvcnkgPSBleHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IGZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYnJvd3NlciBmaXJlcyBwb3BzdGF0ZSBvbiBoYXNoIGNoYW5nZS5cbiAqIElFMTAgYW5kIElFMTEgZG8gbm90LlxuICovXG52YXIgc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGV4cG9ydHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UoKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGZhbHNlIGlmIHVzaW5nIGdvKG4pIHdpdGggaGFzaCBoaXN0b3J5IGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gKi9cbnZhciBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBmdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBhIGdpdmVuIHBvcHN0YXRlIGV2ZW50IGlzIGFuIGV4dHJhbmVvdXMgV2ViS2l0IGV2ZW50LlxuICogQWNjb3VudHMgZm9yIHRoZSBmYWN0IHRoYXQgQ2hyb21lIG9uIGlPUyBmaXJlcyByZWFsIHBvcHN0YXRlIGV2ZW50c1xuICogY29udGFpbmluZyB1bmRlZmluZWQgc3RhdGUgd2hlbiBwcmVzc2luZyB0aGUgYmFjayBidXR0b24uXG4gKi9cbnZhciBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZXhwb3J0cy5pc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50ID0gZnVuY3Rpb24gaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0NyaU9TJykgPT09IC0xO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZXNvbHZlUGF0aG5hbWUgPSByZXF1aXJlKCdyZXNvbHZlLXBhdGhuYW1lJyk7XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Jlc29sdmVQYXRobmFtZSk7XG5cbnZhciBfdmFsdWVFcXVhbCA9IHJlcXVpcmUoJ3ZhbHVlLWVxdWFsJyk7XG5cbnZhciBfdmFsdWVFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZUVxdWFsKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY3JlYXRlTG9jYXRpb24gPSBleHBvcnRzLmNyZWF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24ocGF0aCwgc3RhdGUsIGtleSwgY3VycmVudExvY2F0aW9uKSB7XG4gIHZhciBsb2NhdGlvbiA9IHZvaWQgMDtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgIC8vIFR3by1hcmcgZm9ybTogcHVzaChwYXRoLCBzdGF0ZSlcbiAgICBsb2NhdGlvbiA9ICgwLCBfUGF0aFV0aWxzLnBhcnNlUGF0aCkocGF0aCk7XG4gICAgbG9jYXRpb24uc3RhdGUgPSBzdGF0ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPbmUtYXJnIGZvcm06IHB1c2gobG9jYXRpb24pXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGF0aCk7XG5cbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09IHVuZGVmaW5lZCkgbG9jYXRpb24ucGF0aG5hbWUgPSAnJztcblxuICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2guY2hhckF0KDApICE9PSAnPycpIGxvY2F0aW9uLnNlYXJjaCA9ICc/JyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uc2VhcmNoID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgIGlmIChsb2NhdGlvbi5oYXNoLmNoYXJBdCgwKSAhPT0gJyMnKSBsb2NhdGlvbi5oYXNoID0gJyMnICsgbG9jYXRpb24uaGFzaDtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24uaGFzaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSAhPT0gdW5kZWZpbmVkICYmIGxvY2F0aW9uLnN0YXRlID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICB0cnkge1xuICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gZGVjb2RlVVJJKGxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBVUklFcnJvcignUGF0aG5hbWUgXCInICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnXCIgY291bGQgbm90IGJlIGRlY29kZWQuICcgKyAnVGhpcyBpcyBsaWtlbHkgY2F1c2VkIGJ5IGFuIGludmFsaWQgcGVyY2VudC1lbmNvZGluZy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBpZiAoa2V5KSBsb2NhdGlvbi5rZXkgPSBrZXk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xuICAgIC8vIFJlc29sdmUgaW5jb21wbGV0ZS9yZWxhdGl2ZSBwYXRobmFtZSByZWxhdGl2ZSB0byBjdXJyZW50IGxvY2F0aW9uLlxuICAgIGlmICghbG9jYXRpb24ucGF0aG5hbWUpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gY3VycmVudExvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIGxvY2F0aW9uLnBhdGhuYW1lID0gKDAsIF9yZXNvbHZlUGF0aG5hbWUyLmRlZmF1bHQpKGxvY2F0aW9uLnBhdGhuYW1lLCBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIHByaW9yIGxvY2F0aW9uIGFuZCBwYXRobmFtZSBpcyBlbXB0eSwgc2V0IGl0IHRvIC9cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbG9jYXRpb247XG59O1xuXG52YXIgbG9jYXRpb25zQXJlRXF1YWwgPSBleHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiYgYS5oYXNoID09PSBiLmhhc2ggJiYgYS5rZXkgPT09IGIua2V5ICYmICgwLCBfdmFsdWVFcXVhbDIuZGVmYXVsdCkoYS5zdGF0ZSwgYi5zdGF0ZSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfTG9jYXRpb25VdGlscyA9IHJlcXVpcmUoJy4vTG9jYXRpb25VdGlscycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSGFzaENoYW5nZUV2ZW50ID0gJ2hhc2hjaGFuZ2UnO1xuXG52YXIgSGFzaFBhdGhDb2RlcnMgPSB7XG4gIGhhc2hiYW5nOiB7XG4gICAgZW5jb2RlUGF0aDogZnVuY3Rpb24gZW5jb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGggOiAnIS8nICsgKDAsIF9QYXRoVXRpbHMuc3RyaXBMZWFkaW5nU2xhc2gpKHBhdGgpO1xuICAgIH0sXG4gICAgZGVjb2RlUGF0aDogZnVuY3Rpb24gZGVjb2RlUGF0aChwYXRoKSB7XG4gICAgICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICchJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbiAgICB9XG4gIH0sXG4gIG5vc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBfUGF0aFV0aWxzLnN0cmlwTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoXG4gIH0sXG4gIHNsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2hcbiAgfVxufTtcblxudmFyIGdldEhhc2hQYXRoID0gZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgdmFyIGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgdmFyIGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xuICByZXR1cm4gaGFzaEluZGV4ID09PSAtMSA/ICcnIDogaHJlZi5zdWJzdHJpbmcoaGFzaEluZGV4ICsgMSk7XG59O1xuXG52YXIgcHVzaEhhc2hQYXRoID0gZnVuY3Rpb24gcHVzaEhhc2hQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcbn07XG5cbnZhciByZXBsYWNlSGFzaFBhdGggPSBmdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB2YXIgaGFzaEluZGV4ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignIycpO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKDAsIGhhc2hJbmRleCA+PSAwID8gaGFzaEluZGV4IDogMCkgKyAnIycgKyBwYXRoKTtcbn07XG5cbnZhciBjcmVhdGVIYXNoSGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfRE9NVXRpbHMuY2FuVXNlRE9NLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhbkdvV2l0aG91dFJlbG9hZCA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2gpKCk7XG5cbiAgdmFyIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB1bmRlZmluZWQgPyBfRE9NVXRpbHMuZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGhhc2hUeXBlID0gcHJvcHMuaGFzaFR5cGUsXG4gICAgICBoYXNoVHlwZSA9IF9wcm9wcyRoYXNoVHlwZSA9PT0gdW5kZWZpbmVkID8gJ3NsYXNoJyA6IF9wcm9wcyRoYXNoVHlwZTtcblxuICB2YXIgYmFzZW5hbWUgPSBwcm9wcy5iYXNlbmFtZSA/ICgwLCBfUGF0aFV0aWxzLnN0cmlwVHJhaWxpbmdTbGFzaCkoKDAsIF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoKShwcm9wcy5iYXNlbmFtZSkpIDogJyc7XG5cbiAgdmFyIF9IYXNoUGF0aENvZGVycyRoYXNoVCA9IEhhc2hQYXRoQ29kZXJzW2hhc2hUeXBlXSxcbiAgICAgIGVuY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZW5jb2RlUGF0aCxcbiAgICAgIGRlY29kZVBhdGggPSBfSGFzaFBhdGhDb2RlcnMkaGFzaFQuZGVjb2RlUGF0aDtcblxuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKCkge1xuICAgIHZhciBwYXRoID0gZGVjb2RlUGF0aChnZXRIYXNoUGF0aCgpKTtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIWJhc2VuYW1lIHx8ICgwLCBfUGF0aFV0aWxzLmhhc0Jhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpO1xuXG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gKDAsIF9QYXRoVXRpbHMuc3RyaXBCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpO1xuXG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICB2YXIgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gICAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSB7XG4gICAgICAvLyBFbnN1cmUgd2UgYWx3YXlzIGhhdmUgYSBwcm9wZXJseS1lbmNvZGVkIGhhc2guXG4gICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICAgICAgdmFyIHByZXZMb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAgIGlmICghZm9yY2VOZXh0UG9wICYmICgwLCBfTG9jYXRpb25VdGlscy5sb2NhdGlvbnNBcmVFcXVhbCkocHJldkxvY2F0aW9uLCBsb2NhdGlvbikpIHJldHVybjsgLy8gQSBoYXNoY2hhbmdlIGRvZXNuJ3QgYWx3YXlzID09IGxvY2F0aW9uIGNoYW5nZS5cblxuICAgICAgaWYgKGlnbm9yZVBhdGggPT09ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBJZ25vcmUgdGhpcyBjaGFuZ2U7IHdlIGFscmVhZHkgc2V0U3RhdGUgaW4gcHVzaC9yZXBsYWNlLlxuXG4gICAgICBpZ25vcmVQYXRoID0gbnVsbDtcblxuICAgICAgaGFuZGxlUG9wKGxvY2F0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcCA9IGZ1bmN0aW9uIGhhbmRsZVBvcChsb2NhdGlvbikge1xuICAgIGlmIChmb3JjZU5leHRQb3ApIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuICAgICAgc2V0U3RhdGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFjdGlvbiA9ICdQT1AnO1xuXG4gICAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV2ZXJ0UG9wKGxvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXZlcnRQb3AgPSBmdW5jdGlvbiByZXZlcnRQb3AoZnJvbUxvY2F0aW9uKSB7XG4gICAgdmFyIHRvTG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgLy8gVE9ETzogV2UgY291bGQgcHJvYmFibHkgbWFrZSB0aGlzIG1vcmUgcmVsaWFibGUgYnlcbiAgICAvLyBrZWVwaW5nIGEgbGlzdCBvZiBwYXRocyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBwYXRocyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKSh0b0xvY2F0aW9uKSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGZyb21Mb2NhdGlvbikpO1xuXG4gICAgaWYgKGZyb21JbmRleCA9PT0gLTEpIGZyb21JbmRleCA9IDA7XG5cbiAgICB2YXIgZGVsdGEgPSB0b0luZGV4IC0gZnJvbUluZGV4O1xuXG4gICAgaWYgKGRlbHRhKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSB0cnVlO1xuICAgICAgZ28oZGVsdGEpO1xuICAgIH1cbiAgfTtcblxuICAvLyBFbnN1cmUgdGhlIGhhc2ggaXMgZW5jb2RlZCBwcm9wZXJseSBiZWZvcmUgZG9pbmcgYW55dGhpbmcgZWxzZS5cbiAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKHBhdGgpO1xuXG4gIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcblxuICB2YXIgaW5pdGlhbExvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgdmFyIGFsbFBhdGhzID0gWygwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGluaXRpYWxMb2NhdGlvbildO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gJyMnICsgZW5jb2RlUGF0aChiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKSk7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIHBhdGggPSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUFVTSCwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcHVzaEhhc2hQYXRoKGVuY29kZWRQYXRoKTtcblxuICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaGlzdG9yeS5sb2NhdGlvbikpO1xuICAgICAgICB2YXIgbmV4dFBhdGhzID0gYWxsUGF0aHMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICBuZXh0UGF0aHMucHVzaChwYXRoKTtcbiAgICAgICAgYWxsUGF0aHMgPSBuZXh0UGF0aHM7XG5cbiAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgUFVTSCB0aGUgc2FtZSBwYXRoOyBhIG5ldyBlbnRyeSB3aWxsIG5vdCBiZSBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaycpO1xuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCByZXBsYWNlIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgdmFyIHBhdGggPSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gICAgICB2YXIgZW5jb2RlZFBhdGggPSBlbmNvZGVQYXRoKGJhc2VuYW1lICsgcGF0aCk7XG4gICAgICB2YXIgaGFzaENoYW5nZWQgPSBnZXRIYXNoUGF0aCgpICE9PSBlbmNvZGVkUGF0aDtcblxuICAgICAgaWYgKGhhc2hDaGFuZ2VkKSB7XG4gICAgICAgIC8vIFdlIGNhbm5vdCB0ZWxsIGlmIGEgaGFzaGNoYW5nZSB3YXMgY2F1c2VkIGJ5IGEgUkVQTEFDRSwgc28gd2UnZFxuICAgICAgICAvLyByYXRoZXIgc2V0U3RhdGUgaGVyZSBhbmQgaWdub3JlIHRoZSBoYXNoY2hhbmdlLiBUaGUgY2F2ZWF0IGhlcmVcbiAgICAgICAgLy8gaXMgdGhhdCBvdGhlciBoYXNoIGhpc3RvcmllcyBpbiB0aGUgcGFnZSB3aWxsIGNvbnNpZGVyIGl0IGEgUE9QLlxuICAgICAgICBpZ25vcmVQYXRoID0gcGF0aDtcbiAgICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaGlzdG9yeS5sb2NhdGlvbikpO1xuXG4gICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsUGF0aHNbcHJldkluZGV4XSA9IHBhdGg7XG5cbiAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShjYW5Hb1dpdGhvdXRSZWxvYWQsICdIYXNoIGhpc3RvcnkgZ28obikgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZCBpbiB0aGlzIGJyb3dzZXInKTtcblxuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfSBlbHNlIGlmIChsaXN0ZW5lckNvdW50ID09PSAwKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUhhc2hIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cbnZhciBjcmVhdGVNZW1vcnlIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gcHJvcHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsRW50cmllcyA9IF9wcm9wcyRpbml0aWFsRW50cmllcyA9PT0gdW5kZWZpbmVkID8gWycvJ10gOiBfcHJvcHMkaW5pdGlhbEVudHJpZXMsXG4gICAgICBfcHJvcHMkaW5pdGlhbEluZGV4ID0gcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShlbnRyeSwgdW5kZWZpbmVkLCBjcmVhdGVLZXkoKSkgOiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IF9QYXRoVXRpbHMuY3JlYXRlUGF0aDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgIHZhciBuZXh0RW50cmllcyA9IGhpc3RvcnkuZW50cmllcy5zbGljZSgwKTtcbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICBoaXN0b3J5LmVudHJpZXNbaGlzdG9yeS5pbmRleF0gPSBsb2NhdGlvbjtcblxuICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBpbmRleDogbmV4dEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWltaWMgdGhlIGJlaGF2aW9yIG9mIERPTSBoaXN0b3JpZXMgYnlcbiAgICAgICAgLy8gY2F1c2luZyBhIHJlbmRlciBhZnRlciBhIGNhbmNlbGxlZCBQT1AuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBjYW5HbyA9IGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZW50cmllcy5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogZW50cmllc1tpbmRleF0sXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNhbkdvOiBjYW5HbyxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIoKSB7XG4gIHZhciBwcm9tcHQgPSBudWxsO1xuXG4gIHZhciBzZXRQcm9tcHQgPSBmdW5jdGlvbiBzZXRQcm9tcHQobmV4dFByb21wdCkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkocHJvbXB0ID09IG51bGwsICdBIGhpc3Rvcnkgc3VwcG9ydHMgb25seSBvbmUgcHJvbXB0IGF0IGEgdGltZScpO1xuXG4gICAgcHJvbXB0ID0gbmV4dFByb21wdDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvbXB0ID09PSBuZXh0UHJvbXB0KSBwcm9tcHQgPSBudWxsO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGNvbmZpcm1UcmFuc2l0aW9uVG8gPSBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETzogSWYgYW5vdGhlciB0cmFuc2l0aW9uIHN0YXJ0cyB3aGlsZSB3ZSdyZSBzdGlsbCBjb25maXJtaW5nXG4gICAgLy8gdGhlIHByZXZpb3VzIG9uZSwgd2UgbWF5IGVuZCB1cCBpbiBhIHdlaXJkIHN0YXRlLiBGaWd1cmUgb3V0IHRoZVxuICAgIC8vIGJlc3Qgd2F5IHRvIGhhbmRsZSB0aGlzLlxuICAgIGlmIChwcm9tcHQgIT0gbnVsbCkge1xuICAgICAgdmFyIHJlc3VsdCA9IHR5cGVvZiBwcm9tcHQgPT09ICdmdW5jdGlvbicgPyBwcm9tcHQobG9jYXRpb24sIGFjdGlvbikgOiBwcm9tcHQ7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGdldFVzZXJDb25maXJtYXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKHJlc3VsdCwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdBIGhpc3RvcnkgbmVlZHMgYSBnZXRVc2VyQ29uZmlybWF0aW9uIGZ1bmN0aW9uIGluIG9yZGVyIHRvIHVzZSBhIHByb21wdCBtZXNzYWdlJyk7XG5cbiAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGZhbHNlIGZyb20gYSB0cmFuc2l0aW9uIGhvb2sgdG8gY2FuY2VsIHRoZSB0cmFuc2l0aW9uLlxuICAgICAgICBjYWxsYmFjayhyZXN1bHQgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICB2YXIgYXBwZW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhcHBlbmRMaXN0ZW5lcihmbikge1xuICAgIHZhciBpc0FjdGl2ZSA9IHRydWU7XG5cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgIGlmIChpc0FjdGl2ZSkgZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQcm9tcHQ6IHNldFByb21wdCxcbiAgICBjb25maXJtVHJhbnNpdGlvblRvOiBjb25maXJtVHJhbnNpdGlvblRvLFxuICAgIGFwcGVuZExpc3RlbmVyOiBhcHBlbmRMaXN0ZW5lcixcbiAgICBub3RpZnlMaXN0ZW5lcnM6IG5vdGlmeUxpc3RlbmVyc1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBleHBvcnRzLmxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWVtb3J5SGlzdG9yeSA9IGV4cG9ydHMuY3JlYXRlSGFzaEhpc3RvcnkgPSBleHBvcnRzLmNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gdW5kZWZpbmVkO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnbG9jYXRpb25zQXJlRXF1YWwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTG9jYXRpb25VdGlscy5sb2NhdGlvbnNBcmVFcXVhbDtcbiAgfVxufSk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdwYXJzZVBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUGF0aFV0aWxzLnBhcnNlUGF0aDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfUGF0aFV0aWxzLmNyZWF0ZVBhdGg7XG4gIH1cbn0pO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MiA9IHJlcXVpcmUoJy4vY3JlYXRlQnJvd3Nlckhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVCcm93c2VySGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVCcm93c2VySGlzdG9yeTIpO1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5MiA9IHJlcXVpcmUoJy4vY3JlYXRlSGFzaEhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIYXNoSGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIYXNoSGlzdG9yeTIpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkyID0gcmVxdWlyZSgnLi9jcmVhdGVNZW1vcnlIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNZW1vcnlIaXN0b3J5Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSBfY3JlYXRlQnJvd3Nlckhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmNyZWF0ZUhhc2hIaXN0b3J5ID0gX2NyZWF0ZUhhc2hIaXN0b3J5My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVNZW1vcnlIaXN0b3J5ID0gX2NyZWF0ZU1lbW9yeUhpc3RvcnkzLmRlZmF1bHQ7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93aXRoUm91dGVyID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci93aXRoUm91dGVyXCIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2l0aFJvdXRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF93aXRoUm91dGVyMi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9NZW1vcnlSb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1Byb21wdC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUmVkaXJlY3QuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Sb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3dpdGNoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9nZW5lcmF0ZVBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9tYXRjaFBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL3dpdGhSb3V0ZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtdG9hc3RpZnkvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC9saWIvcmVkdXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS1wYXRobmFtZS9janMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKFwiLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vdmVuZG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
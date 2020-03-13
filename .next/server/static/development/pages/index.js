module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/Button.jsx":
/*!**************************************!*\
  !*** ./components/Button/Button.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/Button/Button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className
}) => {
  return __jsx("button", {
    onClick: onClick,
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/CounterControls.js":
/*!***************************************!*\
  !*** ./components/CounterControls.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_globally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-globally */ "react-globally");
/* harmony import */ var react_globally__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_globally__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/CounterControls.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CounterControls = ({
  setGlobalState
}) => {
  const increment = () => {
    setGlobalState(prevGlobalState => ({
      counter: prevGlobalState.counter + 1
    }));
  };

  const decrement = () => {
    setGlobalState(prevGlobalState => ({
      counter: prevGlobalState.counter - 1
    }));
  };

  const zero = () => {
    setGlobalState({
      counter: 0
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("button", {
    className: "test",
    onClick: () => increment(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Increment"), __jsx("button", {
    onClick: () => decrement(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Decrement"), __jsx("button", {
    onClick: () => zero(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Set to Zero"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_globally__WEBPACK_IMPORTED_MODULE_1__["withGlobalState"])(CounterControls));

/***/ }),

/***/ "./components/CounterInfo.js":
/*!***********************************!*\
  !*** ./components/CounterInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_globally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-globally */ "react-globally");
/* harmony import */ var react_globally__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_globally__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/CounterInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CounterInfo = ({
  setGlobalState,
  globalState
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "The counter value: ", globalState.counter, __jsx("button", {
    onClick: () => setGlobalState({
      counter: 100
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Set to 100"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_globally__WEBPACK_IMPORTED_MODULE_1__["withGlobalState"])(CounterInfo));

/***/ }),

/***/ "./components/FormQuestion/FormQuestion.jsx":
/*!**************************************************!*\
  !*** ./components/FormQuestion/FormQuestion.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/FormQuestion/FormQuestion.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FormQuestion = ({
  questionsArray
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, questionsArray.map(question => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "question-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, __jsx("label", {
      htmlFor: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, question), __jsx("input", {
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FormQuestion);

/***/ }),

/***/ "./components/RadioOption.jsx":
/*!************************************!*\
  !*** ./components/RadioOption.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/RadioOption.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioOption = ({
  title,
  imgSrc,
  option
}) => {
  const handleChange = e => {
    console.log(e.target.checked);
    alert("Changed");
  };

  return __jsx("div", {
    className: "RadioOption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("input", {
    type: "radio",
    name: "radio",
    id: option,
    value: option,
    onChange: e => handleChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("label", {
    htmlFor: option,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, imgSrc && __jsx("img", {
    src: `${imgSrc}`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), title && __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioOption);

/***/ }),

/***/ "./components/RadioOptions.jsx":
/*!*************************************!*\
  !*** ./components/RadioOptions.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioOption */ "./components/RadioOption.jsx");
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/RadioOptions.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const RadioOptions = ({
  radioOptsArray
}) => {
  return __jsx("div", {
    className: "RadioOptions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, radioOptsArray.map(option => {
    return __jsx(_RadioOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: option,
      imgSrc: "/house-vector-style.svg",
      option: option,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioOptions);

/***/ }),

/***/ "./components/SquareCard/SquareCard.jsx":
/*!**********************************************!*\
  !*** ./components/SquareCard/SquareCard.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/SquareCard/SquareCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SquareCard = ({
  imgSrc,
  title
}) => {
  return __jsx("div", {
    className: "SquareCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, title && __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title), imgSrc && __jsx("img", {
    src: `${imgSrc}`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SquareCard);

/***/ }),

/***/ "./components/Tiles.jsx":
/*!******************************!*\
  !*** ./components/Tiles.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/components/Tiles.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Tiles = ({
  imgSrc
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "aspect-ratio-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: "content center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Home"), imgSrc && __jsx("img", {
    className: "content__logo",
    src: `${imgSrc}`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tiles);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CounterControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CounterControls */ "./components/CounterControls.js");
/* harmony import */ var _components_CounterInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CounterInfo */ "./components/CounterInfo.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button/Button */ "./components/Button/Button.jsx");
/* harmony import */ var _components_FormQuestion_FormQuestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FormQuestion/FormQuestion */ "./components/FormQuestion/FormQuestion.jsx");
/* harmony import */ var _components_SquareCard_SquareCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SquareCard/SquareCard */ "./components/SquareCard/SquareCard.jsx");
/* harmony import */ var _components_RadioOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/RadioOptions */ "./components/RadioOptions.jsx");
/* harmony import */ var _components_Tiles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Tiles */ "./components/Tiles.jsx");
var _jsxFileName = "/home/teo/Documents/NextStyledComp/with-styled-components/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-1wbo52z-0"
})(["font-size:50px;color:", ";"], ({
  theme
}) => theme.colors.primary);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "My page"), __jsx(_components_CounterControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(_components_CounterInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "btn btn--medium btn--primary--solid",
  onClick: () => {
    console.log("You clicked on me!");
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Click Me"), __jsx(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: "btn btn--medium btn--primary--outline",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Click Me"), __jsx(_components_FormQuestion_FormQuestion__WEBPACK_IMPORTED_MODULE_5__["default"], {
  questionsArray: ["Question 1", "Question 2", "Question 3", "Question 4"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx(_components_SquareCard_SquareCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
  title: "House",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}), __jsx(_components_RadioOptions__WEBPACK_IMPORTED_MODULE_7__["default"], {
  radioOptsArray: [1, 2, 3, 4],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx(_components_Tiles__WEBPACK_IMPORTED_MODULE_8__["default"], {
  imgSrc: "/house-vector-style.svg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
})));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/teo/Documents/NextStyledComp/with-styled-components/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-globally":
/*!*********************************!*\
  !*** external "react-globally" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-globally");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
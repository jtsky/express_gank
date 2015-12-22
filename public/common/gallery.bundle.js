webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Administrator on 2015/12/14.
	 */
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Gallery = undefined;

	var _Gallery = __webpack_require__(2);

	var _Gallery2 = _interopRequireDefault(_Gallery);

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(163);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _WaveModal = __webpack_require__(164);

	var _WaveModal2 = _interopRequireDefault(_WaveModal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Column = (function (_React$Component) {
	    _inherits(Column, _React$Component);

	    function Column() {
	        _classCallCheck(this, Column);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Column).apply(this, arguments));
	    }

	    _createClass(Column, [{
	        key: 'showModal',
	        value: function showModal(url) {
	            this.props.action(url);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var elemets = [];
	            for (var index in this.props.element) {
	                var element = this.props.element[index];
	                elemets.push(_react2.default.createElement('img', {
	                    className: 'column-img',
	                    src: element.url,
	                    key: element.objectId,
	                    onClick: this.showModal.bind(this, element.url)
	                }));
	            }

	            var className = 'column-';
	            className += this.props.column;
	            return _react2.default.createElement(
	                'div',
	                { className: className },
	                elemets
	            );
	        }
	    }]);

	    return Column;
	})(_react2.default.Component);

	var Gallery = exports.Gallery = (function (_React$Component2) {
	    _inherits(Gallery, _React$Component2);

	    function Gallery() {
	        _classCallCheck(this, Gallery);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Gallery).call(this));

	        _this2.state = {
	            elements: [],
	            src: ""
	        };
	        return _this2;
	    }

	    _createClass(Gallery, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.props.column < 4 || this.props.column > 10) {
	                alert('4 <= column <= 10');
	                throw RangeException('4 <= column <= 10');
	            }
	            this.loadDateFromAPI(this.props.column);
	        }
	    }, {
	        key: 'loadDateFromAPI',
	        value: function loadDateFromAPI(column) {
	            $.get(this.props.url, (function (data) {
	                function mix(column, index) {
	                    if (columns[column]) {
	                        columns[column].push(array[index]);
	                    } else {
	                        var _column = [];
	                        _column.push(array[index]);
	                        columns.push(_column);
	                    }
	                }

	                var array = data.results;
	                var columns = [];
	                for (var index in array) {
	                    mix(index % column, index);
	                }
	                this.setState({ elements: columns });
	            }).bind(this), 'json');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var elements = [];
	            for (var index in this.state.elements) {
	                var element = this.state.elements[index];
	                elements.push(_react2.default.createElement(Column, { element: element,
	                    action: this.showModal.bind(this),
	                    column: this.props.column,
	                    key: index

	                }));
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'box' },
	                _react2.default.createElement(
	                    _WaveModal2.default,
	                    { ref: 'modal', className: 'modal' },
	                    _react2.default.createElement('img', { src: this.state.src, className: 'img' })
	                ),
	                elements
	            );
	        }
	    }, {
	        key: 'showModal',
	        value: function showModal(url) {
	            this.setState({ src: url });
	            this.refs.modal.show();
	        }
	    }]);

	    return Gallery;
	})(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Gallery, { url: '/api', column: '5' }), $('.container')[0]);

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./Gallery.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./Gallery.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".flex-container, .box {\n  display: -moz-box;\n  /* Firefox */\n  display: -ms-flexbox;\n  /* IE10 */\n  display: -webkit-box;\n  /* Safari */\n  display: -webkit-flex;\n  /* Chrome, WebKit */\n  display: flex;\n  width: 100%;\n  height: 100%; }\n\n.flex-inline-container, .box .column-common, .box .column-4, .box .column-5, .box .column-6, .box .column-7, .box .column-8, .box .column-9, .box .column-10, .box .modal {\n  display: -moz-inline-box;\n  /* Firefox */\n  display: -ms-inline-flexbox;\n  /* IE10 */\n  display: -webkit-inline-flex;\n  /* Chrome, WebKit */\n  display: inline-flex;\n  width: 100%;\n  height: 100%; }\n\n.box {\n  width: 100%;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap; }\n  .box .column-common, .box .column-4, .box .column-5, .box .column-6, .box .column-7, .box .column-8, .box .column-9, .box .column-10 {\n    width: 20%;\n    flex-direction: column; }\n  .box .column-4 {\n    width: 25%;\n    flex-direction: column; }\n  .box .column-5 {\n    width: 20%;\n    flex-direction: column; }\n  .box .column-6 {\n    width: 16.66667%;\n    flex-direction: column; }\n  .box .column-7 {\n    width: 14.28571%;\n    flex-direction: column; }\n  .box .column-8 {\n    width: 12.5%;\n    flex-direction: column; }\n  .box .column-9 {\n    width: 11.11111%;\n    flex-direction: column; }\n  .box .column-10 {\n    width: 10%;\n    flex-direction: column; }\n  .box .column-img {\n    width: 100%; }\n  .box .modal {\n    justify-content: center;\n    align-items: center; }\n    .box .modal .img {\n      width: 100%; }\n", ""]);

	// exports


/***/ },

/***/ 4:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);


/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	var modalFactory = __webpack_require__(165);
	var insertKeyframesRule = __webpack_require__(167);
	var appendVendorPrefix = __webpack_require__(170);

	var animation = {
	    show: {
	        animationDuration: '1s',
	        animationTimingFunction: 'linear'
	    },
	    hide: {
	        animationDuration: '0.3s',
	        animationTimingFunction: 'ease-out'
	    },
	    showContentAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0,
	            transform: 'matrix3d(0.7, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '2.083333%': {
	            transform: 'matrix3d(0.75266, 0, 0, 0, 0, 0.76342, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '4.166667%': {
	            transform: 'matrix3d(0.81071, 0, 0, 0, 0, 0.84545, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '6.25%': {
	            transform: 'matrix3d(0.86808, 0, 0, 0, 0, 0.9286, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '8.333333%': {
	            transform: 'matrix3d(0.92038, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '10.416667%': {
	            transform: 'matrix3d(0.96482, 0, 0, 0, 0, 1.05202, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '12.5%': {
	            transform: 'matrix3d(1, 0, 0, 0, 0, 1.08204, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '14.583333%': {
	            transform: 'matrix3d(1.02563, 0, 0, 0, 0, 1.09149, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '16.666667%': {
	            transform: 'matrix3d(1.04227, 0, 0, 0, 0, 1.08453, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '18.75%': {
	            transform: 'matrix3d(1.05102, 0, 0, 0, 0, 1.06666, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '20.833333%': {
	            transform: 'matrix3d(1.05334, 0, 0, 0, 0, 1.04355, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '22.916667%': {
	            transform: 'matrix3d(1.05078, 0, 0, 0, 0, 1.02012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '25%': {
	            transform: 'matrix3d(1.04487, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '27.083333%': {
	            transform: 'matrix3d(1.03699, 0, 0, 0, 0, 0.98534, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '29.166667%': {
	            transform: 'matrix3d(1.02831, 0, 0, 0, 0, 0.97688, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '31.25%': {
	            transform: 'matrix3d(1.01973, 0, 0, 0, 0, 0.97422, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '33.333333%': {
	            transform: 'matrix3d(1.01191, 0, 0, 0, 0, 0.97618, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '35.416667%': {
	            transform: 'matrix3d(1.00526, 0, 0, 0, 0, 0.98122, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '37.5%': {
	            transform: 'matrix3d(1, 0, 0, 0, 0, 0.98773, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '39.583333%': {
	            transform: 'matrix3d(0.99617, 0, 0, 0, 0, 0.99433, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '41.666667%': {
	            transform: 'matrix3d(0.99368, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '43.75%': {
	            transform: 'matrix3d(0.99237, 0, 0, 0, 0, 1.00413, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '45.833333%': {
	            transform: 'matrix3d(0.99202, 0, 0, 0, 0, 1.00651, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '47.916667%': {
	            transform: 'matrix3d(0.99241, 0, 0, 0, 0, 1.00726, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '50%': {
	            opacity: 1,
	            transform: 'matrix3d(0.99329, 0, 0, 0, 0, 1.00671, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '52.083333%': {
	            transform: 'matrix3d(0.99447, 0, 0, 0, 0, 1.00529, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '54.166667%': {
	            transform: 'matrix3d(0.99577, 0, 0, 0, 0, 1.00346, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '56.25%': {
	            transform: 'matrix3d(0.99705, 0, 0, 0, 0, 1.0016, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '58.333333%': {
	            transform: 'matrix3d(0.99822, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '60.416667%': {
	            transform: 'matrix3d(0.99921, 0, 0, 0, 0, 0.99884, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '62.5%': {
	            transform: 'matrix3d(1, 0, 0, 0, 0, 0.99816, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '64.583333%': {
	            transform: 'matrix3d(1.00057, 0, 0, 0, 0, 0.99795, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '66.666667%': {
	            transform: 'matrix3d(1.00095, 0, 0, 0, 0, 0.99811, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '68.75%': {
	            transform: 'matrix3d(1.00114, 0, 0, 0, 0, 0.99851, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '70.833333%': {
	            transform: 'matrix3d(1.00119, 0, 0, 0, 0, 0.99903, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '72.916667%': {
	            transform: 'matrix3d(1.00114, 0, 0, 0, 0, 0.99955, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '75%': {
	            transform: 'matrix3d(1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '77.083333%': {
	            transform: 'matrix3d(1.00083, 0, 0, 0, 0, 1.00033, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '79.166667%': {
	            transform: 'matrix3d(1.00063, 0, 0, 0, 0, 1.00052, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '81.25%': {
	            transform: 'matrix3d(1.00044, 0, 0, 0, 0, 1.00058, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '83.333333%': {
	            transform: 'matrix3d(1.00027, 0, 0, 0, 0, 1.00053, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '85.416667%': {
	            transform: 'matrix3d(1.00012, 0, 0, 0, 0, 1.00042, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '87.5%': {
	            transform: 'matrix3d(1, 0, 0, 0, 0, 1.00027, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '89.583333%': {
	            transform: 'matrix3d(0.99991, 0, 0, 0, 0, 1.00013, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '91.666667%': {
	            transform: 'matrix3d(0.99986, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '93.75%': {
	            transform: 'matrix3d(0.99983, 0, 0, 0, 0, 0.99991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '95.833333%': {
	            transform: 'matrix3d(0.99982, 0, 0, 0, 0, 0.99985, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '97.916667%': {
	            transform: 'matrix3d(0.99983, 0, 0, 0, 0, 0.99984, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        },
	        '100%': {
	            opacity: 1,
	            transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
	        }
	    }),

	    hideContentAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 1
	        },
	        '100%': {
	            opacity: 0,
	            transform: 'scale3d(0.8, 0.8, 1)'
	        },
	    }),

	    showBackdropAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0
	        },
	        '100%': {
	            opacity: 0.9
	        },
	    }),

	    hideBackdropAnimation: insertKeyframesRule({
	        '0%': {
	            opacity: 0.9
	        },
	        '100%': {
	            opacity: 0
	        }
	    })
	};

	var showAnimation = animation.show;
	var hideAnimation = animation.hide;
	var showContentAnimation = animation.showContentAnimation;
	var hideContentAnimation = animation.hideContentAnimation;
	var showBackdropAnimation = animation.showBackdropAnimation;
	var hideBackdropAnimation = animation.hideBackdropAnimation;

	module.exports = modalFactory({
	    getRef: function(willHidden) {
	        return 'content';
	    },
	    getModalStyle: function(willHidden) {
	        return appendVendorPrefix({
	            zIndex: 1050,
	            position: "fixed",
	            width: "500px",
	            transform: "translate3d(-50%, -50%, 0)",
	            top: "50%",
	            left: "50%"
	        })
	    },
	    getBackdropStyle: function(willHidden) {
	        return appendVendorPrefix({
	            position: "fixed",
	            top: 0,
	            right: 0,
	            bottom: 0,
	            left: 0,
	            zIndex: 1040,
	            backgroundColor: "#373A47",
	            animationFillMode: 'forwards',
	            animationDuration: '0.3s',
	            animationName: willHidden ? hideBackdropAnimation : showBackdropAnimation,
	            animationTimingFunction: (willHidden ? hideAnimation : showAnimation).animationTimingFunction
	        });
	    },
	    getContentStyle: function(willHidden) {
	        return appendVendorPrefix({
	            margin: 0,
	            backgroundColor: "white",
	            animationDuration: (willHidden ? hideAnimation : showAnimation).animationDuration,
	            animationFillMode: 'forwards',
	            animationName: willHidden ? hideContentAnimation : showContentAnimation,
	            animationTimingFunction: (willHidden ? hideAnimation : showAnimation).animationTimingFunction
	        })
	    }
	});


/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6);
	var transitionEvents = __webpack_require__(166);

	module.exports = function(animation){

	    return React.createClass({
	        propTypes: {
	            className: React.PropTypes.string,
	            // Close the modal when esc is pressed? Defaults to true.
	            keyboard: React.PropTypes.bool,
	            onShow: React.PropTypes.func,
	            onHide: React.PropTypes.func,
	            animation: React.PropTypes.object,
	            backdrop: React.PropTypes.oneOfType([
	                React.PropTypes.bool,
	                React.PropTypes.string
	            ]),
	            backdropEvent: React.PropTypes.bool
	        },

	        getDefaultProps: function() {
	            return {
	                className: "",
	                onShow: function(){},
	                onHide: function(){},
	                animation: animation,
	                keyboard: true,
	                backdrop: true,
	                backdropEvent: true
	            };
	        },

	        getInitialState: function(){
	            return {
	                willHidden: false,
	                hidden: true
	            }
	        },

	        hasHidden: function(){
	            return this.state.hidden;
	        },

	        componentDidMount: function(){
	            var ref = this.props.animation.getRef();
	            var node = this.refs[ref].getDOMNode();
	            var endListener = function(e) {
	                if (e && e.target !== node) {
	                    return;
	                }
	                transitionEvents.removeEndEventListener(node, endListener);
	                this.enter();

	            }.bind(this);
	            transitionEvents.addEndEventListener(node, endListener);
	        },

	        render: function() {

	            var hidden = this.hasHidden();
	            if(hidden) return null;

	            var willHidden = this.state.willHidden;
	            var animation = this.props.animation;
	            var modalStyle = animation.getModalStyle(willHidden);
	            var backdropStyle = animation.getBackdropStyle(willHidden);
	            var contentStyle = animation.getContentStyle(willHidden);
	            var ref = animation.getRef(willHidden);
	            var sharp = animation.getSharp && animation.getSharp(willHidden);
	            
	            var backdropModifiers = {
	                style: backdropStyle,
	                onClick: this.props.backdropEvent ? this.hide : null
	            };

	            var backdrop = this.props.backdrop? React.createElement("div", backdropModifiers): undefined;

	            if(willHidden) {
	                var node = this.refs[ref].getDOMNode();
	                var endListener = function(e) {
	                    if (e && e.target !== node) {
	                        return;
	                    }

	                    transitionEvents.removeEndEventListener(node, endListener);
	                    this.leave();

	                }.bind(this);
	                transitionEvents.addEndEventListener(node, endListener);
	            }

	            return (React.createElement("span", null, 
	                React.createElement("div", {ref: "modal", style: modalStyle, className: this.props.className}, 
	                    sharp, 
	                    React.createElement("div", {ref: "content", tabIndex: "-1", style: contentStyle}, 
	                        this.props.children
	                    )
	                ), 
	                backdrop
	             ))
	            ;
	        },

	        leave: function(){
	            this.setState({
	                hidden: true
	            });
	            this.props.onHide();
	        },

	        enter: function(){
	            this.props.onShow();
	        },

	        show: function(){
	            if(!this.hasHidden()) return;

	            this.setState({
	                willHidden: false,
	                hidden: false
	            });
	        },

	        hide: function(){
	            if(this.hasHidden()) return;

	            this.setState({
	                willHidden: true
	            });
	        },

	        toggle: function(){
	            if(this.hasHidden())
	                this.show();
	            else
	                this.hide();
	        },

	        listenKeyboard: function(event) {
	            if (this.props.keyboard &&
	                    (event.key === "Escape" ||
	                     event.keyCode === 27)) {
	                this.hide();
	            }
	        },

	        componentDidMount: function() {
	            window.addEventListener("keydown", this.listenKeyboard, true);
	        },

	        componentWillUnmount: function() {
	            window.removeEventListener("keydown", this.listenKeyboard, true);
	        },

	    });

	}


/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (typeof window !== 'undefined') {
	  detectEvents();
	}


	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	module.exports = {
	  addEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },

	  removeEndEventListener: function(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function(endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};


/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var insertRule = __webpack_require__(168);
	var vendorPrefix = __webpack_require__(169)();
	var index = 0;

	module.exports = function(keyframes) {
	  // random name
	  var name = 'anim_' + (++index) + (+new Date);
	  var css = "@" + vendorPrefix + "keyframes " + name + " {";

	  for (var key in keyframes) {
	    css += key + " {";

	    for (var property in keyframes[key]) {
	      var part = ":" + keyframes[key][property] + ";";
	      // We do vendor prefix for every property
	      css += vendorPrefix + property + part;
	      css += property + part;
	    }

	    css += "}";
	  }

	  css += "}";

	  insertRule(css);

	  return name
	}


/***/ },

/***/ 168:
/***/ function(module, exports) {

	'use strict';

	var extraSheet;

	module.exports = function(css) {

	  if (!extraSheet) {
	    // First time, create an extra stylesheet for adding rules
	    extraSheet = document.createElement('style');
	    document.getElementsByTagName('head')[0].appendChild(extraSheet);
	    // Keep reference to actual StyleSheet object (`styleSheet` for IE < 9)
	    extraSheet = extraSheet.sheet || extraSheet.styleSheet;
	  }

	  var index = (extraSheet.cssRules || extraSheet.rules).length;
	  extraSheet.insertRule(css, index);

	  return extraSheet;
	}


/***/ },

/***/ 169:
/***/ function(module, exports) {

	'use strict';

	var cssVendorPrefix;

	module.exports = function() {

	  if (cssVendorPrefix) return cssVendorPrefix;

	  var styles = window.getComputedStyle(document.documentElement, '');
	  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];

	  return cssVendorPrefix = '-' + pre + '-';
	}


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getVendorPropertyName = __webpack_require__(171);

	module.exports = function(target, sources) {
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;

	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }

	    var from = Object(nextSource);

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }

	  var prefixed = {};
	  for (var key in to) {
	    prefixed[getVendorPropertyName(key)] = to[key]
	  }

	  return prefixed
	}


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var builtinStyle = __webpack_require__(172);
	var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
	var domVendorPrefix;

	// 2009 spec only
	var flexbox = {
	  flex: ['WebkitFlex', 'WebkitBoxFlex'],
	  order: ['WebkitOrder','WebkitBoxOrdinalGroup'],
	  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/flex-direction.coffee
	  flexDirection: ['WebkitFlexDirection', 'WebkitBoxOrient', 'WebkitBoxDirection'],
	  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/align-items.coffee
	  alignItems: ['WebkitAlignItems', 'WebkitBoxAlign'],
	  // https://github.com/postcss/autoprefixer/blob/master/lib/hacks/justify-content.coffee
	  justifyContent: ['WebkitJustifyContent', 'WebkitBoxPack'],
	  flexWrap: ['WebkitFlexWrap'],
	  alignSelf: ['WebkitAlignSelf'],
	}

	// Helper function to get the proper vendor property name. (transition => WebkitTransition)
	module.exports = function(prop, isSupportTest) {

	  var vendorProp;
	  if (prop in builtinStyle) return prop;

	  if(flexbox[prop]){
	    // TODO: cache the result
	    var flexProperties = flexbox[prop];
	    for (var i = 0; i < flexProperties.length; ++i) {
	      if (flexProperties[i] in builtinStyle) {
	        return flexProperties[i];
	      }
	    }

	  }else{

	    var UpperProp = prop.charAt(0).toUpperCase() + prop.substr(1);

	    if (domVendorPrefix) {

	      vendorProp = domVendorPrefix + UpperProp;
	      if (vendorProp in builtinStyle) {
	        return vendorProp;
	      }
	    } else {

	      for (var i = 0; i < prefixes.length; ++i) {
	        vendorProp = prefixes[i] + UpperProp;
	        if (vendorProp in builtinStyle) {
	          domVendorPrefix = prefixes[i];
	          return vendorProp;
	        }
	      }
	    }
	  }

	  // if support test, not fallback to origin prop name
	  if (!isSupportTest) {
	    return prop;
	  }

	}


/***/ },

/***/ 172:
/***/ function(module, exports) {

	'use strict';

	module.exports = document.createElement('div').style;


/***/ }

});
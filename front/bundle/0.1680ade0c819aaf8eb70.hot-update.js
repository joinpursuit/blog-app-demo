webpackHotUpdate(0,{

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(152);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(165);
	
	var _Post = __webpack_require__(121);
	
	var _Post2 = _interopRequireDefault(_Post);
	
	var _Test = __webpack_require__(122);
	
	var _Test2 = _interopRequireDefault(_Test);
	
	var _NoMatch = __webpack_require__(120);
	
	var _NoMatch2 = _interopRequireDefault(_NoMatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//App coming soon
	var App = _react2.default.createClass({
	  displayName: 'App',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'p',
	        null,
	        '\'Hello from React again test test tes damnnsdsdsdsdsds sdsdeee dddd whoooa fff\''
	      ),
	      _react2.default.createElement(
	        'button',
	        null,
	        'Click me'
	      ),
	      _react2.default.createElement(_Post2.default, null),
	      this.props.children
	    );
	  }
	
	});
	
	_reactDom2.default.render(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: App },
	    _react2.default.createElement(_reactRouter.Route, { path: 'test', component: _Test2.default })
	  ),
	  _react2.default.createElement(_reactRouter.Route, { path: 'about', component: _Test2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NoMatch2.default })
	), document.getElementById('root'));
	
	exports.default = App;

/***/ }

})
//# sourceMappingURL=0.1680ade0c819aaf8eb70.hot-update.js.map
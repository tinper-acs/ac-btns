'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _btnJSON = require('./btnJSON');

var _btnJSON2 = _interopRequireDefault(_btnJSON);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeIcon = require('bee-icon');

var _beeIcon2 = _interopRequireDefault(_beeIcon);

var _beeDropdown = require('bee-dropdown');

var _beeDropdown2 = _interopRequireDefault(_beeDropdown);

var _beeMenus = require('bee-menus');

var _beeMenus2 = _interopRequireDefault(_beeMenus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Item = _beeMenus2["default"].Item;

// 默认权限按钮数组是全部
var defaultPowerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel', 'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove', 'printpreview', 'printdesign', 'upload', 'addRow', 'delRow', 'copyRow', 'max', 'copyToEnd', 'other', 'min'];

var propTypes = {
    powerBtns: _propTypes2["default"].array, // 按钮权限 code数组
    btns: _propTypes2["default"].object, // 按钮对象数组
    type: _propTypes2["default"].oneOfType(['button', 'line']),
    maxSize: _propTypes2["default"].number
};
var defaultProps = {
    powerBtns: defaultPowerBtns,
    btns: {},
    type: 'button',
    maxSize: 2
};

var Btns = function (_Component) {
    _inherits(Btns, _Component);

    function Btns() {
        var _temp, _this, _ret;

        _classCallCheck(this, Btns);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.renderBtns = function () {
            var _this$props = _this.props,
                btns = _this$props.btns,
                type = _this$props.type,
                maxSize = _this$props.maxSize,
                powerBtns = _this$props.powerBtns;

            var btnArray = [];
            Object.keys(btns).map(function (item) {
                if (powerBtns.indexOf(item) != -1) {
                    var btn = _this.renderBtn(item);
                    if (btn) btnArray.push(btn);
                }
            });
            if (type == 'line') {
                if (btnArray.length > maxSize) {
                    var menusList = _react2["default"].createElement(
                        _beeMenus2["default"],
                        null,
                        btnArray.map(function (item, index) {
                            if (index > maxSize - 1) return _react2["default"].createElement(
                                Item,
                                { key: index, onClick: item.onClick },
                                item
                            );
                        })
                    );
                    var drop = _react2["default"].createElement(
                        _beeDropdown2["default"],
                        {
                            overlayClassName: 'ac-btns-dropdown',
                            trigger: ['click'],
                            overlay: menusList,
                            animation: 'slide-up' },
                        _react2["default"].createElement(
                            'span',
                            { className: 'ac-btns-item ac-btns-more' },
                            '\u66F4\u591A'
                        )
                    );
                    btnArray.splice(maxSize, btnArray.length - maxSize + 1, drop);
                    return btnArray;
                } else {
                    return btnArray;
                }
            } else {
                return btnArray;
            }
        }, _this.renderBtn = function (key) {
            if (!_this.props.btns.hasOwnProperty(key)) return;
            var itemProps = _this.props.btns[key];
            var _BtnsJSON$key = _btnJSON2["default"][key],
                colors = _BtnsJSON$key.colors,
                className = _BtnsJSON$key.className,
                name = _BtnsJSON$key.name,
                name_zh_tw = _BtnsJSON$key.name_zh_tw,
                name_en_us = _BtnsJSON$key.name_en_us;

            var clss = 'ac-btns-item ' + className;
            if (itemProps) {
                if (itemProps.className) clss += ' ' + itemProps.className;
                if (itemProps.name) name = itemProps.name;
            }
            if (_btnJSON2["default"][key]) {
                if (itemProps && itemProps.node) {
                    return itemProps.node;
                } else {
                    if (_this.props.type == 'button') {
                        switch (key) {
                            case 'search':
                                return _react2["default"].createElement(
                                    _beeButton2["default"],
                                    _extends({ key: key }, itemProps, { colors: colors, className: clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search-light-2' })
                                );
                            case 'clear':
                                return _react2["default"].createElement(
                                    _beeButton2["default"],
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-clean' })
                                );
                            case 'max':
                                return _react2["default"].createElement(
                                    _beeButton2["default"],
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-maxmize' })
                                );
                            case 'min':
                                return _react2["default"].createElement(
                                    _beeButton2["default"],
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-minimize' })
                                );
                            default:
                                return _react2["default"].createElement(
                                    _beeButton2["default"],
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    name
                                );
                        }
                    } else {
                        switch (key) {
                            case 'search':
                                return _react2["default"].createElement(
                                    'span',
                                    _extends({ key: key }, itemProps, { colors: colors, className: clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-search-light-2' })
                                );
                            case 'clear':
                                return _react2["default"].createElement(
                                    'span',
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-clean' })
                                );
                            case 'max':
                                return _react2["default"].createElement(
                                    'span',
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-maxmize' })
                                );
                            default:
                                return _react2["default"].createElement(
                                    'span',
                                    _extends({ key: key }, itemProps, { colors: colors, className: 'ac-btns-write ' + clss }),
                                    name
                                );
                        }
                    }
                }
            } else {
                return null;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Btns.prototype.render = function render() {
        return _react2["default"].createElement(
            'span',
            { className: 'ac-btns' },
            this.renderBtns()
        );
    };

    return Btns;
}(_react.Component);

;

Btns.propTypes = propTypes;
Btns.defaultProps = defaultProps;
exports["default"] = Btns;
module.exports = exports['default'];
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _makeResponsive = _interopRequireDefault(require("../../style-functions/makeResponsive"));
var _findDirection = _interopRequireDefault(require("../../style-functions/findDirection"));
var _arrayKeyMapToObject = _interopRequireDefault(require("../../style-functions/arrayKeyMapToObject"));
var _findRoundedDirection = _interopRequireDefault(require("../../style-functions/findRoundedDirection"));
var _findBorder = _interopRequireDefault(require("../../style-functions/findBorder"));
var _excluded = ["d", "pos", "top", "bottom", "left", "right", "h", "maxH", "minH", "justify", "align", "flexDir", "flexGrow", "flexWrap", "order", "rounded", "border", "borderColor", "m", "p", "bg", "textColor", "textWeight", "textAlign", "textTransform", "textDecor", "textSize", "transition", "w", "maxW", "minW", "fontFamily", "opacity", "hoverBg", "hoverBorderColor", "hoverTextColor", "tag", "theme", "cursor", "transform", "transformOrigin", "shadow", "zIndex", "overflow", "hoverShadow"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var computeTextStyle = function computeTextStyle(props, context) {
  var d = props.d,
    pos = props.pos,
    top = props.top,
    bottom = props.bottom,
    left = props.left,
    right = props.right,
    h = props.h,
    maxH = props.maxH,
    minH = props.minH,
    justify = props.justify,
    align = props.align,
    flexDir = props.flexDir,
    flexGrow = props.flexGrow,
    flexWrap = props.flexWrap,
    order = props.order,
    rounded = props.rounded,
    border = props.border,
    borderColor = props.borderColor,
    m = props.m,
    p = props.p,
    bg = props.bg,
    textColor = props.textColor,
    textWeight = props.textWeight,
    textAlign = props.textAlign,
    textTransform = props.textTransform,
    textDecor = props.textDecor,
    textSize = props.textSize,
    transition = props.transition,
    w = props.w,
    maxW = props.maxW,
    minW = props.minW,
    fontFamily = props.fontFamily,
    opacity = props.opacity,
    hoverBg = props.hoverBg,
    hoverBorderColor = props.hoverBorderColor,
    hoverTextColor = props.hoverTextColor,
    tag = props.tag,
    theme = props.theme,
    cursor = props.cursor,
    transform = props.transform,
    transformOrigin = props.transformOrigin,
    shadow = props.shadow,
    zIndex = props.zIndex,
    overflow = props.overflow,
    hoverShadow = props.hoverShadow,
    rest = _objectWithoutProperties(props, _excluded);
  var style = [(0, _findRoundedDirection["default"])(rounded, context.rounded), (0, _findDirection["default"])(m, "margin"), (0, _findDirection["default"])(p, "padding"), (0, _makeResponsive["default"])(d, "display"), (0, _makeResponsive["default"])(pos, "position"), (0, _makeResponsive["default"])(top, "top"), (0, _makeResponsive["default"])(bottom, "bottom"), (0, _makeResponsive["default"])(left, "left"), (0, _makeResponsive["default"])(right, "right"), (0, _makeResponsive["default"])(justify, "justify-content"), (0, _makeResponsive["default"])(align, "align-items"), (0, _makeResponsive["default"])(flexDir, "flex-direction"), (0, _makeResponsive["default"])(flexGrow, "flex"), (0, _makeResponsive["default"])(flexWrap, "flex-wrap"), (0, _makeResponsive["default"])(order, "order"), (0, _makeResponsive["default"])(h, "height"), (0, _makeResponsive["default"])(maxH, "max-height"), (0, _makeResponsive["default"])(minH, "min-height"), (0, _makeResponsive["default"])(w, "width"), (0, _makeResponsive["default"])(minW, "min-width"), (0, _makeResponsive["default"])(maxW, "max-width"), (0, _makeResponsive["default"])(cursor, "cursor"), (0, _findBorder["default"])(border, borderColor, context.colors), (0, _makeResponsive["default"])(bg, "background", context.colors), (0, _makeResponsive["default"])(textColor, "color", context.colors), (0, _makeResponsive["default"])(textWeight, "font-weight"), (0, _makeResponsive["default"])(fontFamily, "font-family", context.fontFamily), (0, _makeResponsive["default"])(textAlign, "text-align"), (0, _makeResponsive["default"])(textTransform, "text-transform"), (0, _makeResponsive["default"])(textDecor, "text-decoration"), (0, _makeResponsive["default"])(transform, "transform"), (0, _makeResponsive["default"])(transformOrigin, "transform-origin"), (0, _makeResponsive["default"])(shadow, "box-shadow", context.shadows), (0, _makeResponsive["default"])(transition, "transition"), (0, _makeResponsive["default"])(textSize, "font-size", context.textSize.size), (0, _makeResponsive["default"])(textSize, "line-height", context.textSize.height), (0, _makeResponsive["default"])(zIndex, "z-index"), (0, _makeResponsive["default"])(overflow, "overflow"), (0, _makeResponsive["default"])(opacity, "opacity"), {
    ":hover": _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _makeResponsive["default"])(hoverBg, "background", context.colors)), (0, _makeResponsive["default"])(hoverTextColor, "color", context.colors)), (0, _makeResponsive["default"])(hoverBorderColor, "border-color", context.colors)), (0, _makeResponsive["default"])(hoverShadow, "box-shadow", context.shadows)),
    ":visited": _objectSpread({}, (0, _makeResponsive["default"])(textColor, "color", context.colors))
  }];
  return [rest, (0, _arrayKeyMapToObject["default"])(style)];
};
var _default = exports["default"] = computeTextStyle;
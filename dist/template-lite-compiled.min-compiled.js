"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    _createClass = function () {
  function e(e, n) {
    for (var t = 0; t < n.length; t++) {
      var r = n[t];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (n, t, r) {
    return t && e(n.prototype, t), r && e(n, r), n;
  };
}();!function (e) {
  var n = function () {
    function e() {
      _classCallCheck(this, e);
    }return _createClass(e, [{ key: "change", value: function value(e, n) {
        return e.replace(/\${.*?}/g, function () {
          var e = arguments[0].replace("${", "").replace("}", "").trim();switch (n.hasOwnProperty(e) || console.warn("template prompt: " + e + " is not defined"), _typeof(n[e])) {case "function":
              return n[e].apply(arguments[0]);default:
              return n[e];}
        });
      } }]), e;
  }();e.template = function () {
    var e;return (e = new n()).change.apply(e, arguments);
  };
}(window, document);
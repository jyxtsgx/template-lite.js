"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
},
    _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }return function (t, n, a) {
    return n && e(t.prototype, n), a && e(t, a), t;
  };
}();!function (window, document, undefined) {
  var template = function () {
    function template() {
      _classCallCheck(this, template);
    }return _createClass(template, [{ key: "change", value: function change(tpl, hash) {
        return tpl.replace(/\${.*?}/g, function () {
          var key = arguments[0].replace("${", "").replace("}", "").trim();if (key.indexOf("?") > -1) return eval(key);switch (hash.hasOwnProperty(key) || console.warn("template prompt: " + key + " is not defined"), _typeof(hash[key])) {case "function":
              return hash[key].apply(arguments[0]);default:
              return hash[key];}
        });
      } }]), template;
  }();window.template = function () {
    var e;return (e = new template()).change.apply(e, arguments);
  };
}(window, document);

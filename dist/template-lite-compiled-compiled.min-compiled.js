"use strict";

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var _typeof2 = "function" == typeof Symbol && "symbol" == _typeof3(Symbol.iterator) ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof3(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof3(e);
},
    _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (e) {
  return "undefined" == typeof e ? "undefined" : _typeof2(e);
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : "undefined" == typeof e ? "undefined" : _typeof2(e);
},
    _createClass = function () {
  function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };
}();!function (window, document, undefined) {
  var template = function () {
    function template() {
      _classCallCheck(this, template);
    }return _createClass(template, [{ key: "change", value: function change(tpl, hash) {
        return tpl.replace(/\${.*?}/g, function () {
          var key = arguments[0].replace("${", "").replace("}", "").trim();if (key.indexOf("?s") > -1) return eval(key);switch (hash.hasOwnProperty(key) || console.warn("template prompt: " + key + " is not defined"), _typeof(hash[key])) {case "function":
              return hash[key].apply(arguments[0]);default:
              return hash[key];}
        });
      } }]), template;
  }();window.template = function () {
    var e;return (e = new template()).change.apply(e, arguments);
  };
}(window, document);

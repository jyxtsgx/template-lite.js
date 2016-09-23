'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

;(function (window, document, undefined) {
    var template = function () {
        function template() {
            _classCallCheck(this, template);
        }

        _createClass(template, [{
            key: 'change',
            value: function change(tpl, hash) {
                return tpl.replace(/\${.*?}/g, function () {
                    var key = arguments[0].replace('${', '').replace('}', '').trim();
                    if (!hash.hasOwnProperty(key)) {
                        console.warn('template prompt: ' + key + ' is not defined');
                    }
                    switch (_typeof(hash[key])) {
                        case 'function':
                            return hash[key].apply(arguments[0]);
                        default:
                            return hash[key];
                    }
                });
            }
        }]);

        return template;
    }();

    window.template = function () {
        var _ref;

        return (_ref = new template()).change.apply(_ref, arguments);
    };
})(window, document);

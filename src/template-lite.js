
;(function (window, document, undefined) {

    class template {

        change(tpl, hash) {
            return tpl.replace(/\${.*?}/g, function () {
                let key = arguments[0].replace('${', '').replace('}', '').trim();
                if (!hash.hasOwnProperty(key)) {
                    console.warn('template prompt: ' + key + ' is not defined');
                }
                switch (typeof hash[key]) {
                    case 'function':
                        return hash[key].apply(arguments[0]);
                    default:
                        return hash[key];
                }
            })
        }
    }

    window.template = function () {
        return new template().change(...arguments);
    }
})(window, document);
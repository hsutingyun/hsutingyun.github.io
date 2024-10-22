(function () {
    var namespace = '__twreporterEmbeddedData';
    var packageName = 'scrollable-image';
    if (typeof window != 'undefined') {
        if (!window[namespace]) {
            window[namespace] = {};
        }
        if (window[namespace] && !window[namespace][packageName]) {
            window[namespace][packageName] = [];
        }
    }
    if (Array.isArray(window[namespace][packageName])) {
        var data = {
            "uuid": "scrolling-image",
            "lazyload": true,
            "data": [
                "https://p4css.github.io/webScroll/assets/taipei-1.jpg",
                "https://p4css.github.io/webScroll/assets/taipei-2.jpg",
                "https://p4css.github.io/webScroll/assets/taipei-3.jpg",
                "https://p4css.github.io/webScroll/assets/taipei-4.jpg",
                "https://raw.githubusercontent.com/p4css/webScroll/main/images/ballon02.png",
                "https://raw.githubusercontent.com/p4css/webScroll/main/images/ballon02.png"
            ],
            "skipLoadLocationRegExp": "editor"
        };
        window[namespace][packageName].push(data);
    }
})();

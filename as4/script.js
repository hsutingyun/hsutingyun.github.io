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
                "https://hsutingyun.github.io/as4/webas4_picture/picture.jpeg",
                "https://raw.githubusercontent.com/p4css/webScroll/main/images/ballon02.png"
            ],
            "skipLoadLocationRegExp": "editor"
        };
        window[namespace][packageName].push(data);
    }
})();

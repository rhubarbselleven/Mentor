require.config({
    paths: {
        "underscore": "lib/amd-underscore",
        "backbone": "lib/amd-backbone",

        "domReady": "lib/domReady",
        "text": "lib/text"
    }
});

require([
    'domReady',
    'app'

], function (domReady, app) {

    domReady(function () {
//        $('body').html('Hi.');
    });
});
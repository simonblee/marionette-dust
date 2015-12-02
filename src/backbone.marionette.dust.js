Backbone.Marionette.Renderer.render = function (template, data) {
    var html;

    // Template must be compiled and in the dust cache. Recommend pre-compiling
    // and loading the templates as scripts at app start. Note that this only
    // works if you pre-compile your templates so that the callback is executed
    // immediately.
    dust.render(template, data, function (err, out) {
        if (err && typeof console !== 'undefined' && console.error) {
            console.error(err);
        }

        html = out;
    });

    return html;
};

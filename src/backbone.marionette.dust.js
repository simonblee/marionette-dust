define([
    'underscore',
    'backbone',
    'marionette',
    'dust',
    'dust.helpers' // LinkedIn Helpers
],
function (_) {

    // IMPORTANT: Must preload templates into the DustJS cache
    // so that dust.render the callback is called immediately.
    // TODO: Incorporate into the Marionette asynchronous
    // template library.
    Backbone.Marionette.Renderer.render = function (template, data) {
        var html;
        // Will run sync if templates pre-compiled into dust chache
        dust.render(template, data, function (err, out) {
            html = out;
        });
        return html;
    };

});

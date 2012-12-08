define([
    'underscore',
    'backbone',
    'marionette',
    'dust',
    'dust.helpers' // LinkedIn Helpers
],
function (_) {

    // Render a template with data. The `template` parameter is
    // passed to the `TemplateCache` object to retrieve the
    // template function. Override this method to provide your own
    // custom rendering and template handling for all of Marionette.
    Backbone.Marionette.Renderer.render = function (template, data) {
        var html;
        // Will run sync if templates pre-compiled into dust chache
        dust.render(template, data, function (err, out) {
            html = out;
        });
        return html;
    };

});

define([
    'underscore',
    'backbone',

    // Below here don't need to be referenced, attach to
    // other either window or backbone object
    'marionette',
    'jquery',
    'dust',
    'dust.helpers' // LinkedIn Helpers - remove if not using
],
function (_, Backbone) {

    // TemplateCache methods overidden to support DustJS templates.
    _.extend(Backbone.Marionette.TemplateCache.prototype, {

        // Templates in the DustJS cache only require the template
        // id to retrieve the template.
        loadTemplate: function (templateId) {
            return templateId;
        },

        // Returns a function that calls the DustJS 'render' method.
        // IMPORTANT: Must preload templates into the DustJS cache
        // so that dust.render the callback is called immediately.
        // TODO: Incorporate into the Marionette asynchronous template library
        compileTemplate: function (template) {
            return function (data) {
                var html;
                // Will run sync if templates pre-compiled into dust chache
                dust.render(template, data, function (err, out) {
                    html = out;
                });
                return html;
            }
        }
    });

    return Backbone.Marionette;
});

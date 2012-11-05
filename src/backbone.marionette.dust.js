// TemplateCache methods overidden to support DustJS templates.
_.extend(Marionette.TemplateCache.prototype, {

    // Templates in the DustJS cache only require the template
    // id to retrieve the template.
    loadTemplate: function(templateId){
        return templateId;
    },

    // Returns a function that calls the dust.render method
    // IMPORTANT: Must preload templates into the DustJS cache
    // so that dust.render runs synchronously and the callback
    // is called immediately. 
    // TODO: Asynchronous rendering.
    compileTemplate: function(template){
        return function (data) {
            var html;
            dust.render(template, data, function (err, out) {
                html = out;
            });
            return html;
        }
    }
});
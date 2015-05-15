(function (root, factory) {
  if (typeof exports === 'object') {
    var backbone = require('backbone'),
        marionette = require('backbone.marionette');
        dust = require('dustjs-helpers');

    module.exports = factory(backbone, dust);
  } else if (typeof define === 'function' && define.amd) {
    define(['backbone', 'dust', 'marionette'], factory);
  }
}(this, function (Backbone, dust) {

    Backbone.Marionette.Renderer.render = function (template, data) {
        var html;

        // Template must be compiled and in the dust cache. Recommend pre-compiling
        // and loading the templates as scripts at app start. Note that this only
        // works if you pre-compile your templates so that the callback is executed
        // immediately.
        dust.render(template, data, function (err, out) {
            html = out;
        });

        return html;
    };

}));

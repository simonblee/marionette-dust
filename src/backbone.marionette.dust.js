(function (root, factory) {
  if (typeof exports === 'object') {

    var jquery = require('jquery'),
        underscore = require('underscore'),
        backbone = require('backbone'),
        marionette = require('marionette')
        dust = require('dust'),
        dustHelpers = require('dust.helpers');

    module.exports = factory(jquery, underscore, backbone, marionette, dust, dustHelpers);

  } else if (typeof define === 'function' && define.amd) {

    define(['jquery', 'underscore', 'backbone', 'marionette', 'dust', 'dust.helpers'], factory);

  }
}(this, function ($, _, Backbone) {

    // IMPORTANT: Must preload templates into the DustJS cache
    // so that the dust.render callback is called immediately.
    // DustJS has its own cache so the Marionette cache is not
    // required. Templates can be precompiled and loaded as a
    // single script or compiled in the browser when the application
    // boots.

    // TODO: Incorporate into the Marionette asynchronous
    // template library. Then a dust.onLoad function can
    // be defined to load templates dynamically from your
    // the filesystem or database. If on the browser, onLoad
    // could load a tempalte via AJAX (although would result in
    // a very slow interface before all tempaltes had been cached).
    Backbone.Marionette.Renderer.render = function (template, data) {
        var html;
        // Callback will run sync if templates pre-compiled into dust cache
        dust.render(template, data, function (err, out) {
            html = out;
        });
        return html;
    };

}));
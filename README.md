# marionette-dust

## Overview
DustJS templates for Marionette. Overrides the Marionette.Renderer.render
to allow dust rendering in the normal Marionette flow of execution. Bypasses
Marionette TemplateCache as DustJS has its own cache.

## Usage

### AMD

If using a module loader like Requirejs, simply define the three dependencies 
'backbone', 'dust' and 'marionette' in your Requirejs config file and then define
this module as a dependency after marionette during the initial application setup.

The plugin requires you to compile all of your dust templates before use 
Set the name of the compiled template as your template parameter in you view.
Use Marionette as normal and the plugin will handle the rest.

```javascript
define([
  _,
  backbone,
  marionette,
  dust,
  dustMarionette
],
function (_, Backbone) {
  return Backbone.Marionette.ItemView({
    template: 'nameOfTemplateInDustCache'
  });
});
```
Make sure all modules defined above are set up correctly in you require config file. Make sure you use
the AMD version of the plugin.

### Non-AMD
Simply add the non-amd version to your project after Marionette. Use the template in the same way as the
AMD case.

## Compiling templates
Templates must be compiled before using this plugin. This can be done in any way you
choose, for example compiling all tempaltes at page load, or compiling the required
template just before you use them.

It is recommended that you pre-compile all templates into a single javascript file for
production. This can be done easily with Grunt and the grunt-dustjs plugin.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

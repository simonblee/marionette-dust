# marionette-dust

## Overview
DustJS templates for Marionette. Overrides the Marionette.Renderer.render
to allow dust rendering in the normal Marionette flow of execution. Bypasses
Marionette TemplateCache as DustJS has its own cache.

## Usage
Templates must be compiled and in the Dust cache. Pass the template name as the
first argument and the data object as the second argument to the
Marionette.Renderer.render function. The rendered markup will be returned.

For use in a View, simply set the template property on the view to the template
name. Marionette will call Marionette.Renderer.render and insert the markup into
the DOM.

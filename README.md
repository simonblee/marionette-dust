# marionette-dust

## Overview
DustJS templates for Marionette. Overrides the Marionette.Renderer.render
to allow dust rendering in the normal Marionette flow of execution. Bypasses
Marionette TemplateCache as DustJS has its own cache.

## Dependencies
* RequireJS
* Backbone and its dependencies
* Dust (winth LinkedIn helpers - if you want them)

## Usage
Include as a dependency in any file using Marionette Views along with Marionette.
MUST pre compile templates using the DustJS pre-compiler as the render method
must run synchronously. Later versions will allow asynchronous rendering with
Marionette Async and with assistance from a user defined dust.onLoad function
for loading templates asynchronously.

Remove the dust.helpers module if you aren't using the LinkedIn helpers (these
are recomended as they provide some very helpful functions inside your templates).
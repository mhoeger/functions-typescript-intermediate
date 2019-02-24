# Azure Function ❤️'s TypeScript (Intermediate 🐼)

It's easy to get to "Hello World"! But what about "Hello *Panda*"? 

In a loosely defined and [hunger-fueled](https://www.google.com/search?q=hello+panda) experiment, I wanted to see how easy it would be to get from a basic "Hello World" function app to a function app that uses the power of shared code to do more (for so much less 😊).

This project assumes that you've tried "Hello World" (the basic getting started experience) with Azure Functions written in TypeScript and shows you how easy it is to graduate to "Hello Panda".

This "Hello Panda" app fetches random images and facts about pandas. The `GetPandaInfo` function is written as a backend API to return an image URL and fact in JSON form. The `HelloPanda` function returns an HTML body to demonstrate an extremely simple web page.

# Getting Started
## Prerequisites
  - Install an Active LTS version of [Node.js](https://nodejs.org)
  - Install the latest [azure-functions-core-tools](https://www.npmjs.com/package/azure-functions-core-tools) if you do not already have it.
    - `npm install -g azure-functions-core-tools` 
  - Run `npm install` from the project root to install devDependency modules. 

## Starting the function app
 - Run `npm start` at the root of the function app (same as the root of this project).
   - If you are running in VS Code, you can press `F5`.
 - You will see two URL's for each HTTP-triggered function. Click both!

# Concepts Learned
## Installing npm modules
When you create a "Hello World" function app with Azure Functions in TypeScript, it comes with a package.json already. You can simply `npm install` dependencies and `import` them into your function code.

## Sharing code between functions
A function app is the unit of deployment in Azure Functions. On function invocation, a *function app* instance is spun up instead of a single function instance. Because of this, writing a function app should be similar to writing any other Node.js app with shared code. Just one warning! In serverless, you can't rely on any kind of preserved state between function invocations. Globally shared code != global persistence!

## Custom routes
You can configure custom routes in `function.json` and `host.json`. In this function app, I changed the `routePrefix` of all functions from the default "api" to an empty string in `host.json`. I gave each function a `route` in `function.json` too instead of the default (the name of the parent directory of a `function.json`, which is also the name of the function).

## Backend API functions
The `GetPandaInfo` function (`/api/random/panda`) is configured to respond to GET requests and written to return information as JSON.

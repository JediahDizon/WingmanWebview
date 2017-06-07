# WingMan - Webview
The front-end side of the Wingman application. This is the interface that the users of the application will utilize.

## Dependencies
- [Node Package Manager](https://www.npmjs.com/) - Used to install the dependencies needed
- [Angular 2 and CLI](https://github.com/angular/angular-cli) - The framework used to develop the front-end
- [Angular 2](https://angular-maps.com/) - Google Maps - The Angular 2 Directive/Component to display the map
- [Bootstrap 4.0 w/ Material Design](https://github.com/Daemonite/material) - The Bootstrap Framework with Google's Material Design implementation
- [Hammer JS](http://hammerjs.github.io/) - Used to catch gestures made to the Map like panning.

## Installation
- Install NPM Node Package Manager: `https://www.npmjs.com`
- Install Angular 2 CLI: `npm install -g angular-cli`
- Using a Command Line Interface, navigate to the project root
- Use Angular CLI to deploy the project: `ng serve --host 192.168.1.253 --port 443 --ssl true --ssl-key "C:\Git Repositories\Wingman\sslcert\private.key" --ssl-cert "C:\Git Repositories\Wingman\sslcert\certificate.crt"`

### Alternative
You can ask Jediah to start up the server so the domain `https://JediahDizon.com/` will be accesible.
That way, you don't have to do any installation to see the WebView.

## Problems Encountered
- Considering the WebView class in Android OS uses the Chromium Engine, it won't be able to support GeoLocation on `http` requests.
  - GeoLocation only has to be made over `https` sources.
  - This Google Chrome policy took effect in April 2016.
- There's a difference in granting "Normal Permissions" (`PROTECTION_NORMAL`) and runtime-persmissions for Android 6.0+.
  - I spent hours straight trying to figure out permission allowance only to realize that my Android 6.0+ permissions must be granted at runtime.

## Current Screenshot
### v1.0.0-alpha.2
![Current screenshot of Wingman Webview](https://gitlab.com/wingman-git/webview/raw/developer/doc/Screenshot%20-%204.PNG "Current screenshot of the Wingman Webview")

## Field Testing
### v0.0.1-alpha.1
https://gitlab.com/wingman-git/webview/blob/developer/doc/Field%20Testing.avi


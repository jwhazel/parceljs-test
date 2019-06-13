# Simple ParcelJS example

Using the Parcel Bundler library and some es6, we'll make a simple app.

How to use: 
* git clone this repo.
* run `npm install` to install all dependencies. 
* run `npm run dev` and Point your browser at `localhost:1234`.
* play around with the html, js, and css. 
* When you're finished with your app and ready to deploy, run `npm run build`.

Things to notice:
* Parcel uses es6 imports/exports so you can keep your code modular. Break out large repetitive functions or data into their own files to keep things clean.
* when you save a file, it will update in the browser automagically
* if you have an error in your code, it alert you immediately making it easier to debug
* when you're ready to deploy and run the `build` command, watch the `/dist` directory. See how nicely all of your code is compiled and minified.
# PotassiumES Skeleton

**NOTE** We're just breaking ground on this project and there's a lot to do. Go look at the [Issues](https://github.com/PotassiumES/potassium-es/issues) to see what's happening and how you can help!

This repo contains a tiny project configured to quickly build and run a mostly empty page that uses PotassiumES to work across all three display modes: flat, portal, and immersive.

You can find out more about the framework at [PotassiumES.org](https://potassiumes.org/)

This release (v0.1.0-alpha1) was created mostly to get the release process working so ✨ #loweryourexpectations ✨.

## Initial installation

You'll need to have acess to the command line tools [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [npm](https://nodejs.org/en/download/) (which a part of Node.js) from a terminal shell.

Once you have those installed, open a terminal (e.g. Terminal.app on macOS) and run these commands:

	# get the code from GitHub and change directory into it
	git clone https://github.com/PotassiumES/potassium-skeleton.git
	cd potassium-skeleton

	# install the development libraries
	npm install

	# build and start a test server
	npm run start

You should be able to point a web browser at the web server you just started. If port 8080 wasn't already in use then the URL will be [127.0.0.1:8080](http://127.0.0.1:8080)

The page should read "Hi" in a heading at the top.

## You need a server with HTTPS

Web based VR requires that the page be securely served (via an HTTPS URL) so you can either copy the contents of the `dist` directory to a server that serves up secure pages or you can use a tool like [ngrok](https://ngrok.com/) that proxies a secure connection to your local machine. 

## Going into VR

If the page detects a working VR headset using WebVR or WebXR then you'll see a button that reads "Immersive" which you can click to enter VR.

## Portal doesn't work, yet

In this version of the framework we're still working on getting portal mode working in Mozilla's WebXR Viewer. The drafts of WebXR are still moving too quickly to really support it but as it solidifies we'll support it.

## More npm scripts

There are a lot of handy command line tools available in this package, like running a command that constantly watches for changes in your KSS or your JS files and then rebuilds on the fly. Look in the package.json file for the "scripts" section to see all of them.


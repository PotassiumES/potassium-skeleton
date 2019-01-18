# PotassiumES Samples

This repo contains a web app project configured to quickly build and run a mostly empty page that uses PotassiumES to work across all three display modes: flat, portal, and immersive.

The main project page is at [PotassiumES.org](https://potassiumes.org/).

## Five minute setup

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

### Going into portal or immersive displays

If the page detects an XR headset then you'll see a button that reads "Immersive" which you can click to switch display modes. Similarly, if you're on a supported portal mode handset then you'll see a button that reads "Portal".

### You might need a server with HTTPS

Web based VR requires that the page be securely served (via an HTTPS URL) so you can either copy the contents of the `dist` directory to a server that serves up secure pages or you can use a tool like [ngrok](https://ngrok.com/) that proxies a secure connection to your local machine. 

### More npm scripts

There are a lot of handy command line tools available in this project, like running a command that constantly watches for changes in your KSS or your JS files and then rebuilds on the fly. Look in the package.json file for the "scripts" section to see all of them.

## Project Goals

**Goal 1:** Enable the wider web

The "wider web" adds augmented and virtual reality to the existing flat web. It incorporates the essential harassment management tools required for healthy social systems.

See [What Is The Wider Web](https://potassiumes.org/wider-web/) for more details.

**Goal 2**: Explore new design, art, and social capabilities

The wider web provides fresh ground to explore new user experience designs, flat graphics, 3D graphics, art forms, and social situations.

This project supports and encourages exploration of these new directions.

## Audience

PotassiumES is for teams who create wider web applications:

- Project managers
- Designers
- Artists
- Writers
- Coders

## Products

A delightful technical framework for wider web applications:
- [Quickstart skeleton project](https://github.com/PotassiumES/potassium-skeleton/)
- [Samples](https://github.com/potassiumes/potassium-samples/)
- [API Documentation](https://potassiumes.org/docs/es/)

A library of beautiful user interface controls.
- [Component Library](https://github.com/PotassiumES/potassium-components) (accessibility core features are in-progress)
- [API Documentation](https://potassiumes.org/docs/components/)

Educational resources for wider-web creation teams.
- In progress

A solid social framework for organizing and realizing progressive projects.
- In progress

## Contributors

Making the wider web is a lot of work! Go look at the [Issues](https://github.com/PotassiumES/potassium-es/issues) to see what's happening and how you can help!

This project has a somewhat unique [Code of Conduct](https://github.com/PotassiumES/potassium-es/blob/master/CODE%20OF%20CONDUCT.md) that holds contributors to a higher standard than most other collective action.

If all else fails, ask [Trevor Flowers](http://trevor.smith.name/) &lt;trevor@trevor.smith.name&gt;

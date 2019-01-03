import App from 'potassium-es/src/App.js'
import som from 'potassium-es/src/SOM.js'
import { lt, ld, ldt } from 'potassium-es/src/Localizer.js'

import MultiComponent from 'potassium-components/src/atoms/MultiComponent.js'

import MastheadComponent from 'potassium-components/src/organisms/MastheadComponent.js'
import VirtualKeyboardComponent from 'potassium-components/src/organisms/VirtualKeyboardComponent.js'

import HomeComponent from './HomeComponent.js'
import AboutComponent from './AboutComponent.js'

document.addEventListener('DOMContentLoaded', ev => {
	window.app = new SplashApp()
	document.body.appendChild(window.app.dom)
})

// ViewInfo holds routing and view metadata
const ViewInfo = []
ViewInfo.push({
	name: 'Home',
	anchor: './#',
	route: /^$/,
	component: HomeComponent
})
ViewInfo.push({
	name: 'About',
	anchor: './#about',
	route: /^about$/,
	component: AboutComponent
})

const SplashApp = class extends App {
	constructor() {
		super({
			textInputComponent: new VirtualKeyboardComponent()
		})

		this._masthead = new MastheadComponent(null, {
			brand: lt('Skeleton'),
			brandAnchor: '/',
			menuItems: ViewInfo.map(info => {
				return {
					name: lt(info.name),
					anchor: info.anchor
				}
			})
		}).appendTo(this)
		this._masthead.addListener((eventName, mode) => {
			this.setDisplayMode(mode).catch(err => {
				console.error('Could not set display mode', err)
			})
		}, MastheadComponent.MODE_REQUEST_EVENT)

		// MultiComponent holds Components that we'll switch among when responding to Router events
		this._multiComponent = new MultiComponent(null, {
			components: ViewInfo.map(info => {
				return new info.component(undefined, {
					usesPortalOverlay: false
				})
			})
		})
			.appendTo(this)
			.addClass('views-component')
			.setName('ViewsComponent')
		for (const child of this._multiComponent.options.components) {
			child.addClass('view-component')
		}
		this._multiComponent.addClass('views-component')

		// Set up our URL router to handle view switching
		for (let i = 0; i < ViewInfo.length; i++) {
			this.router.addRoute(ViewInfo[i].route, i)
		}
		this.router.addListener(this._handleRoutes.bind(this))
		this.router.start()

		this._setupLights(this.portalScene)
		this._setupLights(this.immersiveScene)

		// Add a spherical environment for immersive mode
		this._immersiveEnvironmentMesh = som
			.mesh([
				som.sphereBufferGeometry(500, 60, 40),
				som.meshBasicMaterial({
					map: som.textureLoader().load('environment.jpg')
				})
			])
			.appendTo(this.immersiveScene)
		this._immersiveEnvironmentMesh.geometry.scale(-1, 1, 1) // point inward
	}

	_handleRoutes(routeInfo, hash, ...regexMatches) {
		if (typeof routeInfo === 'number') {
			this._multiComponent.showAt(routeInfo)
			this._masthead.navigationMenu.close()
			this._masthead.navigationMenu.selectedIndex = routeInfo
		} else {
			console.error('Unknown route', routeInfo, hash, ...regexMatches)
			this._multiComponent.showAt(0)
		}
	}

	_setupLights(scene){
		const directionalLight = som.directionalLight([0xffffff, 0.7])
		scene.add(directionalLight)
		scene.add(directionalLight.target)
		scene.add(som.ambientLight([0xffffff, 0.9]))
	}
}

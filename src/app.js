import App from 'potassium-es/src/App'
import som from 'potassium-es/src/SOM'
import { lt, ld, ldt } from 'potassium-es/src/Localizer'

import HeadingComponent from 'potassium-components/src/atoms/HeadingComponent.js'
import ModeSwitcherComponent from 'potassium-components/src/molecules/ModeSwitcherComponent.js'

const MyApp = class extends App {
	constructor() {
		super()

		// Add a title to flat, portal, and immersive modes (all in one Component!)
		this._headingComponent = new HeadingComponent(null, {
			text: lt('Hi'),
			usesPortalOverlay: false
		}).appendTo(this)

		// Show buttons to switch among modes (if possible)
		this._modeSwitcherComponent = new ModeSwitcherComponent().appendTo(this)
		this._modeSwitcherComponent.addListener((eventName, mode) => {
			this.setDisplayMode(mode)
		}, ModeSwitcherComponent.ModeChangedEvent)
		this.addListener((eventName, mode) => {
			this._modeSwitcherComponent.handleSwitchFailed(mode)
		}, App.DisplayModeFailedEvent)

		// Add lights to the portal scene
		const portalLight = som.directionalLight([0xffffff, 0.7])
		this._portalScene.add(portalLight)
		this._portalScene.add(portalLight.target)
		this._portalScene.add(som.ambientLight([0xffffff, 0.9]))

		// Add lights to the immersive scene
		const immersiveLight = som.directionalLight([0xffffff, 0.7])
		this._immersiveScene.add(immersiveLight)
		this._immersiveScene.add(immersiveLight.target)
		this._immersiveScene.add(som.ambientLight([0xffffff, 0.9]))

		// Add a spherical environment for immersive mode
		this._immersiveEnvironmentMesh = som
			.mesh(
				som.sphereBufferGeometry(500, 60, 40),
				som.meshBasicMaterial({
					map: som.textureLoader().load('environment.jpg')
				})
			)
			.appendTo(this._immersiveScene)
		this._immersiveEnvironmentMesh.geometry.scale(-1, 1, 1) // point inward

	}
}

document.addEventListener('DOMContentLoaded', ev => {
	window.app = new MyApp()
	document.body.appendChild(window.app.dom)
})

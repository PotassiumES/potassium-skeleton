import Component from 'potassium-es/src/Component.js'
import { lt, ld, ldt } from 'potassium-es/src/Localizer.js'

import HeadingComponent from 'potassium-components/src/atoms/HeadingComponent.js'

class HomeComponent extends Component {
	constructor(dataObject = null, options = {}, inheritedOptions = {}) {
		super(dataObject, options, inheritedOptions)

		this._headingComponent = new HeadingComponent(
			undefined,
			{
				text: lt('Home')
			},
			this.inheritedOptions
		)
		this._headingComponent.appendTo(this)
	}
}

export default HomeComponent

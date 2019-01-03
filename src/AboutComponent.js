import Component from 'potassium-es/src/Component.js'
import { lt, ld, ldt } from 'potassium-es/src/Localizer.js'

import HeadingComponent from 'potassium-components/src/atoms/HeadingComponent.js'

class AboutComponent extends Component {
	constructor(dataObject=null, options={}, inheritedOptions={}){
		super(dataObject, options, inheritedOptions)

		this._headingComponent = new HeadingComponent(undefined, {
			text: lt('About')
		}, this.inheritedOptions)
		this._headingComponent.appendTo(this)
	}
}

export default AboutComponent
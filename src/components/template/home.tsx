import { navigation, footer } from "./global";
import { homeSettings } from '../../lib/settings';
import { changeRoute } from '../../lib/actions';
import { MouseXY } from "../../lib/types";
// import ImageDepthMap from 'react-depth-map';

export default class TemplateHome {
  mouse: MouseXY
  constructor(mousePos: MouseXY) {
    this.mouse = mousePos;
  }

  landing(): JSX.Element {
    return (
      <section>
        {/* <ImageDepthMap
          originalImg = { require('../../resources/img/mountain-base.jpg') }
          depthImg = { require('../../resources/img/mountain-mask.jpg') }
          verticalThreshold = { 25 }
          horizontalThreshold = { 5 }
        /> */}
        <div><div></div></div>
        <h1>{ homeSettings.title }</h1>
        <button onClick = { () => { changeRoute(homeSettings.buttonUrl) } }>
          { homeSettings.buttonText }
        </button>
      </section>
    )
  }


  output(): JSX.Element {
    return (<>
      { navigation() }
      { this.landing() }
      { footer() }
    </>)
  }
}
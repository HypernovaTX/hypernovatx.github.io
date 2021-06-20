import { navigation, footer } from "./global";
import { homeSettings } from '../../lib/settings';
import { changeRoute } from '../../lib/actions';
import { MouseXY } from "../../lib/types";

export default class TemplateHome {
  mouse: MouseXY
  constructor(mousePos: MouseXY) {
    this.mouse = mousePos;
  }

  landing(): JSX.Element {
    const x = this.mouse.x / window.innerWidth;
    const y = this.mouse.y / window.innerHeight;
    const bg = homeSettings.bgPos({ x, y });

    return (
      <section>
        {/* See below (1) */}
        <div><div className='mountain' style = { bg.mountain }></div></div> {/* Mountain background image */}
        <div><div className='clouds' style = { bg.clouds }></div></div> {/* Clouds background image */}
        <div><div className='tree' style = { bg.tree }></div></div> {/* Tree background image */}
        <h1>{ homeSettings.title }</h1>
        <button onClick = { () => { changeRoute(homeSettings.buttonUrl) } }>{ homeSettings.buttonText }</button>
      </section>
    )
  }

  // Will be manually called via home component
  output(): JSX.Element {
    return (<>{ navigation() }{ this.landing() }{ footer() }</>)
  }
}

/**
 * FOOTNOTES
 * 
 * (1) - Unused 3D lander background since the lib isn't working in newer version of React 17.0.2
 * CODES:
 * IMPORT: import ImageDepthMap from 'react-depth-map';
 * JSX: <ImageDepthMap
 *     originalImg = { require('../../resources/img/mountain-base.jpg') }
 *     depthImg = { require('../../resources/img/mountain-mask.jpg') }
 *     verticalThreshold = { 25 }
 *     horizontalThreshold = { 5 }
 * /> 
 * 
 * 
 * 
 */
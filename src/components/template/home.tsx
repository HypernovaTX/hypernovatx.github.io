import { navigation } from "./global";
import { homeSettings } from '../../lib/settings';
import { changeRoute } from '../../lib/actions';
import { XY } from "../../lib/types";
import Typewriter from 'typewriter-effect';

type updateHook = React.Dispatch<React.SetStateAction<string>>;

export default class TemplateHome {
  mouse: XY;
  buttonName: string;
  updateButtonName: updateHook;
  xpos: number;
  
  constructor(mousePos: XY, name: string, updateName: updateHook, xpos: number) {
    this.mouse = mousePos;
    this.buttonName = name;
    this.updateButtonName = updateName;
    this.xpos = xpos;
  }

  landing(): JSX.Element {
    const x = this.mouse.x / window.innerWidth;
    const y = this.mouse.y / window.innerHeight;
    const bgMountain = homeSettings.bgPos({ x, y }, 0).mountain;
    const bgClouds = homeSettings.bgPos({ x, y }, this.xpos).clouds;
    const bgTree = homeSettings.bgPos({ x, y }, 0).tree;

    return (
      <section className = 'home'>
        {/* See below (1) */}
        <div><div className = 'mountain' style = { bgMountain }></div></div> {/* Mountain background image */}
        <div><div className = 'clouds' style = { bgClouds }></div></div> {/* Clouds background image */}
        <div><div className = 'tree' style = { bgTree }></div></div> {/* Tree background image */}
        <h1><Typewriter
          onInit = { (typewriter) => {
              typewriter.typeString(homeSettings.title)
              .callFunction(() => { this.updateButtonName('active') }) // Will call to make the button visible after it's done
              .start();
          } }
        /></h1>
        <button
          className = { this.buttonName }
          disabled = { (this.buttonName === 'active') ? false : true }
          onClick = { () => { changeRoute(homeSettings.buttonUrl) } }
        >{ homeSettings.buttonText }</button>
      </section>
    )
  }

  // Will be manually called via home component
  output(): JSX.Element {
    return (<>{ navigation() }{ this.landing() }</>)
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
import { navigation } from "./global";
import { homeSettings } from '../../lib/settings';
import { changeRoute, isMobile } from '../../lib/actions';
import { XY } from "../../lib/types";
import Typewriter from 'typewriter-effect';
import { contactSettings as CS } from '../../lib/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

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

    // Grab all of the background position (desktop has parallax cursor effect, mobile doesn't)
    let getBgPos = homeSettings.bgPosDesktop({ x, y }, this.xpos);
    if (isMobile()) {
      getBgPos = homeSettings.bgPosMobile(this.xpos);
    }
    const bgMountain = getBgPos.mountain;
    const bgClouds = getBgPos.clouds;
    const bgTree = getBgPos.tree;

    return (
      <section className = 'home'>
        {/* See below (1) */}
        <div><div className = 'mountain' style = { bgMountain }></div></div> {/* Mountain background image */}
        <div><div className = 'clouds' style = { bgClouds }></div></div> {/* Clouds background image */}
        <div><div className = 'tree' style = { bgTree }></div></div> {/* Tree background image */}
        <h1><Typewriter options = {{ delay: 60 }}
          onInit = { (typewriter) => {
              typewriter.typeString(homeSettings.title)
              .callFunction(() => { this.updateButtonName('active') }) // Will call to make the button visible after it's done
              .start();
          } }
        /></h1>
        <dd className = { this.buttonName }>
          <a href = {CS.github} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>
            <FontAwesomeIcon icon = { faGithub }/>
          </a>
          <a href = {CS.linkedin} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>
            <FontAwesomeIcon icon = { faLinkedin }/>
          </a>
          <a href = {CS.twitter} target = '_blank' rel = 'noreferrer' tabIndex = { -1 }>
            <FontAwesomeIcon icon = { faTwitter }/>
          </a>
        </dd>
        <button
          className = { this.buttonName }
          disabled = { (this.buttonName === 'active') ? false : true }
          onClick = { () => { changeRoute(homeSettings.buttonUrl) } }
        >{ homeSettings.buttonText }</button>
      </section>
    )
  }

  // Will be manually called via "Home" component
  output(): JSX.Element {
    return (<>{ navigation({ x: 0, y: 0}, 0) }{ this.landing() }</>)
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
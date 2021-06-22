import { footer, navigation } from "./global";
import { aboutSettings } from '../../lib/settings';
import { XY } from '../../lib/types';
import { Animate, AnimateGroup } from 'react-simple-animate';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import { changeRoute } from '../../lib/actions';


type aStepFunc = React.Dispatch<React.SetStateAction<boolean>>;

export default class templateAbout {
  scroll: XY; // Used for getting page offset values
  aStep: boolean; // Whether to start <Animate> or not in "landing"
  aStepUpdate: aStepFunc; // Call to update aStep to true

  constructor(scrollPos: XY, aStep: boolean, aStepUpdate: aStepFunc) {
    this.scroll = scrollPos;
    this.aStep = aStep;
    this.aStepUpdate = aStepUpdate;
  }

  landing(): JSX.Element {
    // Used for parallx background scroll
    const landerBGStyle = {
      backgroundPositionY: `calc(70% + ${Math.round(this.scroll.y / 2)}px)`
    };

    // List of styles for <Animate>
    const aniStartP = { flex: '0 0 0%', opacity: 0 };
    const aniEndP = { flex: '0 1 100%', opacity: 1 };
    const aniStartI = { flex: '0 0 0%', opacity: 0, display: 'block', transform: 'translateX(-100px) rotateY(-90deg) rotateZ(-20deg)' };
    const aniEndI = { flex: '0 0 0%', opacity: 1, display: 'block', transform: 'translateX(0px) rotateY(-10deg) rotateZ(-5deg)' };

    return (
      <header className = 'about'>
        <div style = { landerBGStyle } className = 'bg'></div> {/* Lander background */}
        <h1>
          <Typewriter options = {{ delay: 30, cursor: '' }}
            onInit = { (typewriter) => {
                typewriter.typeString(aboutSettings.title)
                .callFunction(() => { this.aStepUpdate(true) }) // Call this to start AnimateGroup in div.block (below)
                .start();
            } }
          />
        </h1>
        <div className = 'block'>
          <AnimateGroup play = { this.aStep }>
            <Animate start = { aniStartI } end = { aniEndI } duration = { 0.5 } sequenceIndex = { 0 }>
              <img alt = '' src = { aboutSettings.landerImg.default }></img> {/* Image of myself */}
            </Animate>
            <Animate start = { aniStartP } end = { aniEndP } duration = { 0.5 } sequenceIndex = { 1 }>
              <div className = 'paragraph'> {/* The block for the paragraph in the lander */}
                <Typewriter options = {{ delay: 0.01 }}
                  onInit = { (typewriter: TypewriterClass) => {
                    typewriter.pauseFor(1200)
                    .typeString(aboutSettings.paragraph + '\n\n' + aboutSettings.paragraph2)
                    .start();
                  } }
                />
              </div>
            </Animate>
          </AnimateGroup>
        </div>
      </header>
    )
  }

  skills(): JSX.Element {
    // Map out the list of skills to a box
    const skillList = aboutSettings.skillList.map((item, index) => { return (
      <div className = { `skillbox ${item.meta}` } key = {`skill_${index}`}>
        <summary>{ item.title }</summary>
        <div className = 'split'>
          <div className = 'image'>
            <img src = { item.image.default } alt = { item.title }></img>
          </div>
          <div className = 'texts'>
            <p>{ item.summary }</p>
            <div className = 'tags'>{
              // Each of the tags applies for each box
              item.tags.map((tag, ti) => 
                <span key = { `skill_${index}_${ti}` }>{ tag }</span>
              )
            }</div>
          </div>
        </div>
      </div>
    ) });

    return (
      <section className = 'skills'>
        <h1>{ aboutSettings.skillTitle }</h1>
        <div className = 'flex-skills'>
          { skillList }
        </div>
        <button
          onClick = { () => { changeRoute(aboutSettings.buttonUrl) } }
        >{ aboutSettings.buttonText }</button>
      </section>
    )
  }

  // Will be manually called via "About" component
  output(): JSX.Element {
    return (<>
      { navigation() }
      { this.landing() }
      { this.skills() }
      { footer() }
    </>)
  }
}

/**
 * FOOTNOTES
 * 
 * (1) - 
 * 
 * 
 * 
 */
import { footer, navigation } from "./global";
import { aboutSettings } from '../../lib/settings';
import { XY } from '../../lib/types';
import { Animate, AnimateGroup } from 'react-simple-animate';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
//import { changeRoute } from '../../lib/actions';


type aStepFunc = React.Dispatch<React.SetStateAction<number>>;

export default class templateAbout {
  scroll: XY;
  aStep: number;
  aStepUpdate: aStepFunc;
  constructor(scrollPos: XY, aStep: number, aStepUpdate: aStepFunc) {
    this.scroll = scrollPos;
    this.aStep = aStep;
    this.aStepUpdate = aStepUpdate;
  }

  landing(): JSX.Element {
    const landerBGStyle = {
      backgroundPositionY: `calc(60% + ${Math.round(this.scroll.y / 2)}px)`
    };

    const aniStartP = { flex: '0 0 0%', opacity: 0 };
    const aniEndP = { flex: '0 1 100%', opacity: 1 };
    const aniStartI = { flex: '0 0 0%', opacity: 0, display: 'block' };
    const aniEndI = { flex: '0 0 0%', opacity: 1, display: 'block' };

    return (
      <header>
        <div style = { landerBGStyle } className = 'bg'></div> {/* Lander background */}
        <h1>
          <Typewriter options = {{ delay: 30, cursor: '' }}
            onInit = { (typewriter) => {
                typewriter.typeString(aboutSettings.title)
                .callFunction(() => { this.aStepUpdate(1) }) // Call this to start AnimateGroup in div.block (below)
                .start();
            } }
          />
        </h1>
        <div className = 'block'>
          <AnimateGroup play = { (this.aStep >= 1) ? true : false }>
            <Animate start = { aniStartI } end = { aniEndI } duration = { 1 } sequenceIndex = { 0 }>
              <img alt = ''></img> {/* Image of myself */}
            </Animate>
            <Animate start = { aniStartP } end = { aniEndP } duration = { 1 } sequenceIndex = { 1 }>
              <div className = 'paragraph'> {/* The block for the paragraph in the lander */}
                <Typewriter options = {{ delay: 1 }}
                  onInit = { (typewriter: TypewriterClass) => {
                    typewriter.pauseFor(2100).typeString(aboutSettings.paragraph + '\n\n' + aboutSettings.paragraph2)
                    .callFunction(() => { this.aStepUpdate(1) })
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
    return (
      <section>
        <h1>{ aboutSettings.skillTitle }</h1>
      </section>
    )
  }

  // Will be manually called via home component
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
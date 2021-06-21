import { footer, navigation } from "./global";
import { aboutSettings } from '../../lib/settings';
//import { changeRoute } from '../../lib/actions';
//import Typewriter from 'typewriter-effect';

export default class templateAbout {
  landing(): JSX.Element {
    return (
      <header>
        <h1>{ aboutSettings.title }</h1>
        { aboutSettings.paragraph }
        { aboutSettings.paragraph2 }
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
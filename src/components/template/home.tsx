import { navigation, footer } from "./global";
import { homeSettings } from '../../lib/settings';
import { changeRoute } from '../../lib/actions';
import ImageDepthMap from 'react-depth-map';

export default class TemplateHome {
  landing(): JSX.Element {
    return (
      <section>
        <ImageDepthMap
          originalImg={'../../resources/img/mountain-base.jpg'}
          depthImg={'../../resources/img/mountain-mask.jpg'}
          verticalThreshold={25}
          horizontalThreshold={25}
        />
        <h1>{ homeSettings.title }</h1>
        <button onClick={ () => { changeRoute(homeSettings.buttonUrl) } }>
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
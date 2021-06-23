/**
 * This is a library of the globally used templates
 */
import { changeRoute } from '../../lib/actions';
import { siteNavigation, siteFooterText } from '../../lib/settings';
import Wave from 'react-wavify';
import { XY } from '../../lib/types';

// Top side navigation
export function navigation(scrollPos: XY): JSX.Element {
  const points = (window.innerWidth > 480) ? 8 : 4;
  const topWaveName = (scrollPos.y > 160) ? 'active' : '';
  
  const entries = siteNavigation.list.map ((item, num) => // item[0] is name, item[1] is url (all strings)
    <span
      key = { `nav_${ num }` }
      onClick = { () => { changeRoute(item[1]) } }
    >{ item[0] }</span>
  );
  return (
    <nav>
      <div className = { `top-wave ${topWaveName}` }>
        <Wave paused = { false } options={{ height: 0, amplitude: 25, speed: 0.26, points: points + 2 }} />
        <Wave paused = { false } options={{ height: 0, amplitude: 24, speed: 0.25, points: points }} />
        <Wave paused = { false } options={{ height: 0, amplitude: 23, speed: 0.24, points: points - 2 }} />
      </div>
      { entries }
    </nav>
  );
};

// Bottom side footer section
export function footer(): JSX.Element {
  return (<footer><span>{ siteFooterText }</span></footer>);
}
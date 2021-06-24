/**
 * This is a library of the globally used templates
 */
import { changeRoute, isMobile } from '../../lib/actions';
import { siteNavigation, siteFooterText } from '../../lib/settings';
import Wave from 'react-wavify';
import { XY } from '../../lib/types';


// Desktop Nav
function navDesktop(scrollPos: XY, index: number): JSX.Element {
  const points = (window.innerWidth > 480) ? 8 : 4;
  const topWaveName = (scrollPos.y > 160) ? 'active' : '';
  
  // List site URL
  const entries = siteNavigation.list.map((item, num) => 
    <span
      key = { `nav_${ num }` }
      className = { ` ${ (index === num) ? 'select' : '' }` }
      onClick = { () => { if (index !== num) { changeRoute(item.url) } } }
    >{ item.name }</span>
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
}

// Mobile Nav
function navMobile(index: number): JSX.Element {

  // List site URL
  const entries = siteNavigation.list.map((item, num) => 
    <span
      key = { `nav_${ num }` }
      className = { ` ${ (index === num) ? 'select' : '' }` }
      onClick = { () => { if (index !== num) { changeRoute(item.url) } } }
    >{ item.name }</span>
  );

  // Hamburger menu
  const menuActive = (window.mobileMenu) ? 'is-active' : '';
  const toggle = () => {
    window.mobileMenu = !window.mobileMenu; console.log(window.mobileMenu)
  }
  const burger = (
    <div className = { `hamburger hamburger--squeeze ${ menuActive }` } onClick = { toggle }>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </div>
  );

  return (
    <div className = 'mobile-nav'>
    <nav className = { (window.mobileMenu) ? 'open' : '' }>
      { entries }
    </nav>
    { burger }
    </div>
  );
}

export function navigation(scrollPos: XY, index: number): JSX.Element {
  if (isMobile(true)) { return navMobile(index); }
  return navDesktop(scrollPos, index);//
};



// Bottom side footer section
export function footer(): JSX.Element {
  return (<footer><span>{ siteFooterText }</span></footer>);
}
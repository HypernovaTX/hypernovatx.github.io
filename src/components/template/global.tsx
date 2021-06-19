/**
 * This is a library of the globally used templates
 */
import { changeRoute } from '../../lib/actions';
import { siteNavigation, siteFooterText } from '../../lib/settings';

// Top side navigation
export function navigation(): JSX.Element {
  const entries = siteNavigation.list.map ((item, num) => // item[0] is name, item[1] is url (all strings)
    <span
      key = { `nav_${ num }` }
      onClick = { () => { changeRoute(item[1]) } }
    >{ item[0] }</span>
  );
  return (<nav>{ entries }</nav>);
};

// Bottom side footer section
export function footer(): JSX.Element {
  return (<footer><span>{ siteFooterText }</span></footer>);
}
import { footer, navigation } from "./global";
import { projectSettings } from '../../lib/settings';
import { pList } from '../../lib/projects';
import { XY } from '../../lib/types'



export default class templateProjects {
  scroll: XY;

  constructor(scr: XY) {
    this.scroll = scr;
  }

  landing(): JSX.Element {
    // Used for parallx background scroll
    const landerBGStyle = {
      backgroundPositionY: `calc(70% + ${Math.round(this.scroll.y / 2)}px)`
    };


    return (
      <header className = 'projects'>
        <div className = 'bg' style = { landerBGStyle }></div> {/* Lander background */}
        <h1>{ projectSettings.title }</h1>
        <p>{ projectSettings.summary }</p>
      </header>
    );
  }

  list(): JSX.Element {
    // Map a list of "What I have learned:"
    const iLearned = (_in: string[], _no: number) => {
      if (_in.length === 0) { return <></>; }

      return (<dd>
        <b>What I have learned:</b>
        <ul>
          { _in.map((item, _id) => 
            <li key = { `index_${_no + _id}`} >{ item }</li>
          ) }
        </ul>
      </dd>);
    };

    // Map an array of Button elements for URLs for each of the projects
    const urlList = (_urlLs: { name: string, link: string }[], _no: number) => {
      if (_urlLs.length === 0) { return <></>; }

      return (<dd>{
        _urlLs.map((_it, _id) => <a key = { `indexu_${_no + _id}`} href = { _it.link } target = '_blank' rel = 'noreferrer'>{ _it.name }</a>)
      }</dd>);
    };

    const projects = pList.map((item, index) => 
      <div key = { `p_box${index}` } className = { `proj ${item.meta}` }>
        <img src = { item.image.default } alt = ''></img>
        <div className = 'right'>
          <h2>{ item.title }</h2>
          <dd><b>Type: </b>{ item.type }</dd>
          <dd><b>Date: </b>{ item.life }</dd>
          <dd><b>Tools: </b>{ item.tools.join(', ') }</dd>
          <br/><dd>{ item.description }</dd><br/>
          { iLearned(item.learned, index) }
          { urlList(item.url, index) }
        </div>
      </div>
    )


    return (
      <section className = 'projects'>
        <div className = 'list>'>
          { projects }
        </div>
      </section>
    )
  }



  // Will be manually called via "Projects" component
  output(): JSX.Element {
    return (<>
      { navigation() }
      { this.landing() }
      { this.list() }
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
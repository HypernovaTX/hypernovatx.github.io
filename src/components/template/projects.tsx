import { footer, navigation } from "./global";
import { projectSettings } from '../../lib/settings';
import { pList, personalList } from '../../lib/projects';
import { XY, project } from '../../lib/types'
import React from "react";

type Props = { scroll: XY; }
type State = { filter: string[]; }

export default class TemplateProject extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = { filter: [] };
  }

  landing(): JSX.Element {
    // Used for parallx background scroll
    const { scroll } = this.props;
    const landerBGStyle = {
      backgroundPositionY: `calc(70% + ${Math.round(scroll.y / 2)}px)`
    };


    return (
      <header className = 'projects'>
        <div className = 'bg' style = { landerBGStyle }></div> {/* Lander background */}
        <h1>{ projectSettings.title }</h1>
        <p>{ projectSettings.summary }</p>
      </header>
    );
  }

  // Section where end user can filter the tools used for each of my projects
  filters(): JSX.Element {
    let { filter } = this.state;

    // Combine both project lists and only get "tools"
    let fullList: string[] = [];
    [...pList, ...personalList].forEach(({ tools }) => { fullList = [...fullList, ...tools];}); 

    // Remove any duplicates
    const uniqueList = Array.from(new Set(fullList));

    // Update filter function
    const update = (name: string) => {
      const found = filter.indexOf(name);
      if (found >= 0) { filter.splice(found, 1); }
      else { filter.push(name); }
      console.log(filter);
      this.setState({ filter });
    }
    
    // Map out the filter button elements
    const currentFilterSet = new Set(filter);
    const filters = uniqueList.map((item) => {
      return (
        <div
          className = {`filter ${ (currentFilterSet.has(item)) ? 'on' : '' }`}
          onClick = { () => { update(item) } }
          key = {`filter_${item}`}
        >{ item }</div>
      );
    });

    return (
      <section className = 'filters'>
        <h1>{ projectSettings.filter }</h1>
        <div>{ filters }</div>
      </section>
    )
  }

  list(): JSX.Element {
    const { filter } = this.state; 

    // Map a list of "What I have learned:"
    // UPDATE - I commented this out because it is unnecessary, see footnote (1)
    
    // Apply filter to pList
    let actualList: project[] = pList;
    if (filter.length) {
      actualList = [];
      pList.forEach((item) => {
        if (item.tools.find((tool) => filter.find((li) => tool === li)))
        actualList.push(item);
      })
    }

    // Map an array of Button elements for URLs for each of the projects
    const urlList = (_urlLs: { name: string, link: string }[], _no: number) => {
      if (_urlLs.length === 0) { return <></>; }

      return (<dd>{
        _urlLs.map((_it, _id) => <a key = { `indexu_${_no + _id}`} href = { _it.link } target = '_blank' rel = 'noreferrer'>{ _it.name }</a>)
      }</dd>);
    };
    
    // MAIN client project list mapping
    let projects = actualList.map((item, index) => 
      <div key = { `p_box${index}` } className = { `proj ${item.meta}` }>
        <img src = { item.image.default } alt = ''></img>
        <div className = 'right'>
          <h2>{ item.title }</h2>
          <dd><b>Type: </b>{ item.type }</dd>
          <dd><b>Date: </b>{ item.life }</dd>
          <dd><b>Client: </b>{ item.client }</dd>
          <dd><b>Tools: </b>{ item.tools.join(', ') }</dd>
          <br/><dd>{ item.description }</dd><br/>
          {/*(1)*/}
          { urlList(item.url, index) }
        </div>
      </div>
    )

    // When there's nothing returned
    if (!projects.length) {
      projects = [
        <div className = { `proj null` }>
        <div className = 'right'>
          <dd> </dd>
          <dd>{ projectSettings.noClient + filter.join(', ') }</dd>
        </div>
      </div>
      ];
    }


    return (
      <section className = 'projects'>
        <h1>{ projectSettings.titleClient }</h1>
        { projects }
      </section>
    )
  }

  personal(): JSX.Element {
    const { filter } = this.state; 

    // Apply filter to pList
    let actualList: project[] = personalList;
    if (filter.length) {
      actualList = [];
      personalList.forEach((item) => {
        if (item.tools.find((tool) => filter.find((li) => tool === li)))
        actualList.push(item);
      })
    }

    // Map an array of Button elements for URLs for each of the projects
    const urlList = (_urlLs: { name: string, link: string }[], _no: number) => {
      if (_urlLs.length === 0) { return <></>; }

      return (<dd>{
        _urlLs.map((_it, _id) => <a key = { `indexu_${_no + _id}`} href = { _it.link } target = '_blank' rel = 'noreferrer'>{ _it.name }</a>)
      }</dd>);
    };

    // MAIN personal project list mapping
    let projects = actualList.map((item, index) => 
      <div key = { `p_box${index}` } className = { `proj ${item.meta}` }>
        <img src = { item.image.default } alt = ''></img>
        <div className = 'right'>
          <h2>{ item.title }</h2>
          <dd><b>Type: </b>{ item.type }</dd>
          <dd><b>Date: </b>{ item.life }</dd>
          <dd><b>Tools: </b>{ item.tools.join(', ') }</dd>
          <br/><dd>{ item.description }</dd><br/>
          {/*(1)*/}
          { urlList(item.url, index) }
        </div>
      </div>
    )

    // When there's nothing returned
    if (!projects.length) {
      projects = [
        <div className = { `proj null` }>
        <div className = 'right'>
          <dd> </dd>
          <dd>{ projectSettings.noPersonal + filter.join(', ') }</dd>
        </div>
      </div>
      ];
    }

    return (
      <section className = 'personal'>
        <h1>{ projectSettings.titlePersonal }</h1>
        { projects }
      </section>
    )
  }

  render(): JSX.Element {
    const { scroll } = this.props;
    return (<>
      { navigation(scroll, 2) }
      { this.landing() }
      { this.filters() }
      { this.list() }
      { this.personal() }
      { footer() }
    </>)
  }
}

/**
 * FOOTNOTES
 * 
 * (1) - I removed "What I have learned" because it bring more questions than answers
 * 
 * const iLearned = (_in: string[], _no: number) => {
 *    if (_in.length === 0) { return <></>; }
 *
 *    return (<dd>
 *      <b>What I have learned:</b>
 *      <ul>
 *        { _in.map((item, _id) => 
 *          <li key = { `index_${_no + _id}`} >{ item }</li>
 *        ) }
 *      </ul>
 *    </dd>);
 *  };
 * 
 * { iLearned(item.learned, index) }
 * 
 */
import { footer, navigation } from "./global";
import { projectSettings } from '../../lib/settings';
import { projectListClient, projectListPersonal } from '../../lib/projects';
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
  filterSection(): JSX.Element {
    let { filter } = this.state;

    // Combine both project lists and only get "tools"
    let fullList: string[] = [];
    [...projectListClient, ...projectListPersonal].forEach(({ tools }) => { fullList = [...fullList, ...tools];}); 

    // Remove any duplicates
    const uniqueList = Array.from(new Set(fullList));

    // Update filter function
    const updateFilter = (name: string) => {
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
          onClick = { () => { updateFilter(item) } }
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

  listClientProject(): JSX.Element {
    const { filter } = this.state; 

    // Map a list of "What I have learned:"
    // UPDATE - I commented this out because it is unnecessary, see footnote (1)
    
    // Apply filter to pList
    let currentList: project[] = projectListClient;
    if (filter.length) {
      currentList = [];
      projectListClient.forEach((item) => {
        if (item.tools.find((tool) => filter.find((li) => tool === li)))
        currentList.push(item);
      })
    }

    // Map an array of Button elements for URLs for each of the projects
    const urlList = (urlListPerProject: { name: string, link: string }[], _no: number) => {
      if (urlListPerProject.length === 0) { return <></>; }

      return (
        <dd>{
          urlListPerProject.map((_it, _id) =>
            <a key = { `indexu_${_no + _id}`} href = { _it.link } target = '_blank' rel = 'noreferrer'>{ _it.name }</a>
          ) 
        }</dd>
      );
    };
    
    // MAIN client project list mapping
    let projectsToRender = currentList.map((item, index) => 
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
    if (!projectsToRender.length) {
      projectsToRender = [
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
        { projectsToRender }
      </section>
    )
  }

  listPersonalProjects(): JSX.Element {
    const { filter } = this.state; 

    // Apply filter to pList
    let currentList: project[] = projectListPersonal;
    if (filter.length) {
      currentList = [];
      projectListPersonal.forEach((item) => {
        if (item.tools.find((tool) => filter.find((li) => tool === li)))
        currentList.push(item);
      })
    }

    // Map an array of Button elements for URLs for each of the projects
    const urlList = (urlListPerProject: { name: string, link: string }[], _no: number) => {
      if (urlListPerProject.length === 0) { return <></>; }

      return (
        <dd>{
          urlListPerProject.map(
            (_it, _id) => <a key = { `indexu_${_no + _id}`} href = { _it.link } target = '_blank' rel = 'noreferrer'>{ _it.name }</a>
          )
        }</dd>
      );
    };

    // MAIN personal project list mapping
    let projectsToRender = currentList.map((item, index) => 
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
    if (!projectsToRender.length) {
      projectsToRender = [
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
        { projectsToRender }
      </section>
    )
  }

  render(): JSX.Element {
    const { scroll } = this.props;
    return (<>
      { navigation(scroll, 2) }
      { this.landing() }
      { this.filterSection() }
      { this.listClientProject() }
      { this.listPersonalProjects() }
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
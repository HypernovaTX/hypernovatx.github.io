import templateProjects from './template/projects';
import '../resources/projects.scss';
import useScrollPosition from '../hooks/scroll';

export default function Projects() {
  const scrollPos = useScrollPosition();
  const template = new templateProjects(scrollPos);
  return(template.output());
}
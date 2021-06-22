import templateProjects from './template/projects';
import '../resources/projects.scss';

export default function Projects() {
  const template = new templateProjects();
  return(template.output());
}
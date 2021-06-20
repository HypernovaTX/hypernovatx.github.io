import templateHome from './template/home';
import '../resources/home.scss';
import useMousePosition from '../hooks/mouse';

export default function Home() {
  const mousePos = useMousePosition();
  const template = new templateHome(mousePos);
  return(template.output());
}
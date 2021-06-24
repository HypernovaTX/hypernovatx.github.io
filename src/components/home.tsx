import templateHome from './template/home';
import '../resources/home.scss';
import useMousePosition from '../hooks/mouse';
import useXPos from '../hooks/addx';
import { useState } from 'react';

export default function Home() {
  const [name, updateName] = useState('hidden');
  
  const xpos = useXPos();
  const mousePos = useMousePosition();
  const template = new templateHome(mousePos, name, updateName, xpos);
  return(template.output());
}
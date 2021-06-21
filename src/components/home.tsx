import templateHome from './template/home';
import '../resources/home.scss';
import useMousePosition from '../hooks/mouse';
import addX from '../hooks/addx';
import { useState } from 'react';

export default function Home() {
  const [name, updateName] = useState('hidden');
  
  const xpos = addX();
  const mousePos = useMousePosition();
  const template = new templateHome(mousePos, name, updateName, xpos);
  return(template.output());
}
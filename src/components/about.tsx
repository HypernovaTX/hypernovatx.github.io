import templateAbout from './template/about';
import '../resources/about.scss';
//import useMousePosition from '../hooks/mouse';
//import addX from '../hooks/addx';
//import { useState } from 'react';

export default function About() {
  //const [name, updateName] = useState('hidden');
  
  //const xpos = addX();
  //const mousePos = useMousePosition();
  const template = new templateAbout();//(mousePos, name, updateName, xpos);
  return(template.output());
}
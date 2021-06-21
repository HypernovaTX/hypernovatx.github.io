import templateAbout from './template/about';
import '../resources/about.scss';
import useScrollPosition from '../hooks/scroll';
import { useState } from 'react';

export default function About() {
  const [aStep, updateAStep] = useState(0);

  //const xpos = addX();
  const scrollPos = useScrollPosition();
  const template = new templateAbout(scrollPos, aStep, updateAStep);//(mousePos, name, updateName, xpos);
  return(template.output());
}
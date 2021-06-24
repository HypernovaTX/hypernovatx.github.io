import templateAbout from './template/about';
import '../resources/about.scss';
import useScrollPosition from '../hooks/scroll';
import { useState } from 'react';
import addX from '../hooks/addx';


export default function About() {
  const [aStep, updateAStep] = useState(false);

  // This function constantly rerender React
  // It fixes the bug for the mobile menu not updating until other events
  addX();
   
  const scrollPos = useScrollPosition();
  const template = new templateAbout(scrollPos, aStep, updateAStep);
  return(template.output());
}
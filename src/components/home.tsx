import templateHome from './template/home';
import '../resources/home.scss';
import useMousePosition from '../hooks/mouse';
import { useState } from 'react';

export default function Home() {
  const [name, updateName] = useState('hidden');
  const mousePos = useMousePosition();
  const template = new templateHome(mousePos, name, updateName);
  return(template.output());
}
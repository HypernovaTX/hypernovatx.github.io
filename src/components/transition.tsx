import React from 'react';
import '../resources/transition.scss';

interface Props {}
interface State { x: number, y: number, step: number }

export default class Transition extends React.Component<Props, State> {
  constructor(p: Props) {
    super(p);
    this.state = { x: 0, y: 0, step: -1 }
  }

  componentDidMount() {
    // Set the global callback function to begin transition animation
    window.startT = () => {
      if (this.state.step >= 0) { return; } // Prevent multi calls
      setTimeout( () => this.updateStep(0), 5);
      setTimeout( () => this.updateStep(1), 5);
      setTimeout( () => this.updateStep(2), 40);
      setTimeout( () => this.updateStep(3), 600);
      setTimeout( () => this.updateStep(4), 610);
      setTimeout( () => {
        this.updateStep(-1);
        window.inTransition = false;
      }, 1100);
    }

    window.addEventListener('mousemove', this.updateMouse);
  }

  updateMouse = (ev: { clientX: number; clientY: number; }) => {
    const { step } = this.state;
    if (step >= 2) { return; }
    this.setState({ x: ev.clientX, y: ev.clientY });
  }

  // Function to update the transition animation step number
  updateStep(num: number): void { this.setState({ step: num }) }

  // Get mouse position for the outer DIV
  determineStyle() {
    const { x, y, step } = this.state;
    const mouse = { x, y };
    const getDiameter = Math.max(window.innerWidth, window.innerHeight);

    switch (step) {
      case -1: return { display: 'none' };
      case 1: case 4: return {
        left: `${ mouse.x }px`,
        top: `${ mouse.y }px`,
        width: '0em',
        height: '0em',
        display: 'block',
      }
      case 2: return {
        left: `calc(${ mouse.x }px - 150vw)`,
        top: `calc(${ mouse.y }px - 150vh)`,
        width: getDiameter * 3,
        height: getDiameter * 3,
        display: 'block',
      }
      case 3: return {
        left: `-5vw`,
        top: `-5vh`,
        width: '110vw',
        height: '110vh',
        display: 'block',
        borderRadius: 0,
      }
    }
  }
  
  render() {
    const outerStyle = this.determineStyle();
    return <div className = 'mouseContainer' style = { outerStyle }/>;
  }
}

/**
 * FOOTNOTES
 * 
 * (1) - Commented out the redux calls because the stucture of this site still needs improvement and it doesn't work in a certain scope
 * CODES:
 *  IMPORT: 
 *    import { useDispatch, useSelector } from 'react-redux';
 *    import { trState } from '../reduxstore/transition';
 * 
 *  SELECTORS:
 *    const func = useSelector<trState, trState['callFunction']>((state) => state.callFunction);
 *    const step = useSelector<trState, trState['step']>((state) => state.step);
 * 
 *  VARIABLES: 
 *    const dispatch = useDispatch();
 * 
 *  OLD updateStep():
 *    const updateStep = (num: number) => {
 *      const payload = { callFunction: func, step: num };
 *      dispatch({ type: 'STEP', payload });
 *    }
 * 
 * 
 * 
 */